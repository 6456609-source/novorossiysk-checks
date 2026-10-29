import { useEffect, useMemo, useState } from "react";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useReveal } from "@/hooks/use-reveal";
import { APARTMENTS as BASE } from "./Apartments";
import { useCity } from "./city-context";

const today = () => new Date().toISOString().slice(0, 10);
const addDays = (iso: string, d: number) => {
  const dt = new Date(iso);
  dt.setDate(dt.getDate() + d);
  return dt.toISOString().slice(0, 10);
};

const formatPhone = (raw: string) => {
  let d = raw.replace(/\D/g, "");
  if (d.startsWith("8")) d = "7" + d.slice(1);
  if (!d.startsWith("7")) d = "7" + d;
  d = d.slice(0, 11);
  const p = d.slice(1);
  let out = "+7";
  if (p.length) out += " (" + p.slice(0, 3);
  if (p.length >= 3) out += ")";
  if (p.length > 3) out += " " + p.slice(3, 6);
  if (p.length > 6) out += "-" + p.slice(6, 8);
  if (p.length > 8) out += "-" + p.slice(8, 10);
  return out;
};

type Errors = Partial<Record<"checkIn" | "checkOut" | "phone" | "name", string>>;

const Booking = () => {
  const ref = useReveal<HTMLElement>();
  const { toast } = useToast();

  const city = useCity();
  const APARTMENTS = BASE.map((a) => ({ ...a, ...city.apartments[a.id] }));
  const [apt, setApt] = useState(BASE[1].id);
  const [checkIn, setCheckIn] = useState(today());
  const [checkOut, setCheckOut] = useState(addDays(today(), 2));
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const apartment = APARTMENTS.find((a) => a.id === apt)!;

  useEffect(() => {
    const h = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      setApt(id);
      setSent(false);
    };
    window.addEventListener("choose-apartment", h);
    return () => window.removeEventListener("choose-apartment", h);
  }, []);

  useEffect(() => {
    if (guests > apartment.guests) setGuests(apartment.guests);
  }, [apartment, guests]);

  const nights = useMemo(() => {
    const n = Math.round((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000);
    return n > 0 ? n : 0;
  }, [checkIn, checkOut]);

  const total = nights * apartment.price;

  const validate = () => {
    const e: Errors = {};
    if (!checkIn || checkIn < today()) e.checkIn = "Выберите дату не раньше сегодняшней";
    if (!checkOut || nights < 1) e.checkOut = "Выезд должен быть позже заезда";
    if (name.trim().length < 2) e.name = "Как к вам обращаться?";
    if (phone.replace(/\D/g, "").length !== 11) e.phone = "Введите номер полностью";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSent(true);
    toast({
      title: "Заявка принята",
      description: `${city.name}, ${apartment.name}, ${nights} ${nights === 1 ? "ночь" : nights < 5 ? "ночи" : "ночей"}. Перезвоним в течение 15 минут.`,
    });
  };

  const field = "h-14 rounded-2xl bg-secondary border-0 text-base focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-0";

  return (
    <section id="booking" ref={ref} className="px-5 md:px-[43px] pb-20 md:pb-28">
      <div className="reveal grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] rounded-panel overflow-hidden border-2 border-foreground">
        <div className="relative bg-accent text-accent-foreground p-8 md:p-12 flex flex-col">
          <p className="eyebrow !text-accent-foreground/70 mb-4">06 — Бронирование</p>
          <h2 className="section-title">
            Выберите
            <br />
            даты
          </h2>
          <p className="mt-6 text-lg max-w-sm">
            Оставьте заявку — администратор подтвердит бронь и пришлёт детали заселения.
          </p>

          <div className="mt-auto pt-10">
            <div className="rounded-2xl bg-primary text-primary-foreground p-6">
              <div className="text-panel-muted text-sm uppercase tracking-[0.08em]">Ваш выбор</div>
              <div className="mt-1 font-head font-extrabold uppercase text-lg">{apartment.name}</div>
              <div className="mt-4 flex items-end justify-between gap-4">
                <div className="text-panel-muted">
                  {nights > 0 ? `${nights} × ${apartment.price.toLocaleString("ru-RU")} ₽` : "Укажите даты"}
                </div>
                <div className="font-head font-black text-3xl">{total.toLocaleString("ru-RU")} ₽</div>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={submit} noValidate className="bg-background p-8 md:p-12 grid gap-5 content-start">
          {sent ? (
            <div className="flex flex-col items-start gap-5 py-10 animate-scale-in">
              <span className="grid place-items-center w-16 h-16 rounded-full bg-accent text-accent-foreground">
                <Icon name="Check" size={30} />
              </span>
              <h3 className="font-head font-black uppercase text-3xl tracking-tight">Спасибо, {name.trim()}!</h3>
              <p className="text-muted-foreground text-lg max-w-md">
                Заявка на «{apartment.name}» с {new Date(checkIn).toLocaleDateString("ru-RU")} по{" "}
                {new Date(checkOut).toLocaleDateString("ru-RU")} принята. Мы позвоним на {phone} в течение 15 минут.
              </p>
              <button type="button" onClick={() => setSent(false)} className="pill !py-2.5 !px-4">
                Новая заявка
              </button>
            </div>
          ) : (
            <>
              <div className="grid gap-2">
                <Label className="eyebrow">Апартаменты</Label>
                <Select value={apt} onValueChange={setApt}>
                  <SelectTrigger className={field}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {APARTMENTS.map((a) => (
                      <SelectItem key={a.id} value={a.id}>
                        {a.name} — {a.price.toLocaleString("ru-RU")} ₽/сутки
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="grid gap-2">
                  <Label htmlFor="checkin" className="eyebrow">Заезд</Label>
                  <Input
                    id="checkin"
                    type="date"
                    min={today()}
                    value={checkIn}
                    onChange={(e) => {
                      setCheckIn(e.target.value);
                      if (e.target.value >= checkOut) setCheckOut(addDays(e.target.value, 1));
                    }}
                    className={field}
                  />
                  {errors.checkIn && <span className="text-destructive text-sm">{errors.checkIn}</span>}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="checkout" className="eyebrow">Выезд</Label>
                  <Input
                    id="checkout"
                    type="date"
                    min={addDays(checkIn || today(), 1)}
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className={field}
                  />
                  {errors.checkOut && <span className="text-destructive text-sm">{errors.checkOut}</span>}
                </div>
              </div>

              <div className="grid gap-2">
                <Label className="eyebrow">Гостей (до {apartment.guests})</Label>
                <div className="flex items-center justify-between h-14 rounded-2xl bg-secondary px-2">
                  <button
                    type="button"
                    aria-label="Меньше гостей"
                    onClick={() => setGuests((g) => Math.max(1, g - 1))}
                    className="grid place-items-center w-10 h-10 rounded-full bg-background hover:bg-accent transition-colors disabled:opacity-40"
                    disabled={guests <= 1}
                  >
                    <Icon name="Minus" size={18} />
                  </button>
                  <span className="font-head font-extrabold text-xl">{guests}</span>
                  <button
                    type="button"
                    aria-label="Больше гостей"
                    onClick={() => setGuests((g) => Math.min(apartment.guests, g + 1))}
                    className="grid place-items-center w-10 h-10 rounded-full bg-background hover:bg-accent transition-colors disabled:opacity-40"
                    disabled={guests >= apartment.guests}
                  >
                    <Icon name="Plus" size={18} />
                  </button>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="grid gap-2">
                  <Label htmlFor="name" className="eyebrow">Имя</Label>
                  <Input id="name" placeholder="Анна" value={name} onChange={(e) => setName(e.target.value)} className={field} />
                  {errors.name && <span className="text-destructive text-sm">{errors.name}</span>}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone" className="eyebrow">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    inputMode="tel"
                    placeholder="+7 (900) 000-00-00"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value ? formatPhone(e.target.value) : "")}
                    className={field}
                  />
                  {errors.phone && <span className="text-destructive text-sm">{errors.phone}</span>}
                </div>
              </div>

              <button type="submit" className="pill-cta !bg-primary !text-primary-foreground justify-center mt-2 hover:!bg-accent hover:!text-accent-foreground transition-colors">
                Отправить заявку <span aria-hidden="true">→</span>
              </button>
              <p className="text-muted-foreground text-sm">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных. Оплата — при подтверждении брони.
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  );
};

export default Booking;
