import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { useReveal } from "@/hooks/use-reveal";

export type Apartment = {
  id: string;
  name: string;
  tag: string;
  area: number;
  guests: number;
  price: number;
  photo: string;
  short: string;
  amenities: { icon: string; label: string }[];
};

export const APARTMENTS: Apartment[] = [
  {
    id: "studio",
    name: "Студия «Бухта»",
    tag: "Для двоих",
    area: 34,
    guests: 2,
    price: 4900,
    photo:
      "https://cdn.poehali.dev/projects/172e5f49-d13c-4e4d-b3f0-0f10ceeb28de/files/ccd87c30-6c97-4472-86c3-6dea50aa01cf.jpg",
    short: "Панорамное окно в пол прямо на Цемесскую бухту, двуспальная кровать и рабочее место.",
    amenities: [
      { icon: "BedDouble", label: "Кровать 180×200" },
      { icon: "Wifi", label: "Wi-Fi 300 Мбит/с" },
      { icon: "Coffee", label: "Кофемашина" },
      { icon: "Laptop", label: "Рабочее место" },
      { icon: "Snowflake", label: "Кондиционер" },
      { icon: "Tv", label: "Smart TV" },
    ],
  },
  {
    id: "family",
    name: "Апартаменты «Набережная»",
    tag: "Хит",
    area: 58,
    guests: 4,
    price: 7400,
    photo:
      "https://cdn.poehali.dev/projects/172e5f49-d13c-4e4d-b3f0-0f10ceeb28de/files/0a4f3e89-873d-4da1-bc81-6cdb3c861a4b.jpg",
    short: "Отдельная спальня, гостиная с кухней и балкон с видом на море. Пять минут пешком до набережной.",
    amenities: [
      { icon: "DoorOpen", label: "Спальня + гостиная" },
      { icon: "CookingPot", label: "Полная кухня" },
      { icon: "WashingMachine", label: "Стиральная машина" },
      { icon: "Wifi", label: "Wi-Fi 300 Мбит/с" },
      { icon: "Sun", label: "Балкон на море" },
      { icon: "Car", label: "Место на парковке" },
    ],
  },
  {
    id: "penthouse",
    name: "Пентхаус «Маяк»",
    tag: "Премиум",
    area: 96,
    guests: 6,
    price: 13900,
    photo:
      "https://cdn.poehali.dev/projects/172e5f49-d13c-4e4d-b3f0-0f10ceeb28de/files/9e90c13b-4109-49c8-8d96-d4ec7ca97bff.jpg",
    short: "Две спальни, собственная терраса над городом и джакузи. Вечерние огни порта — как в кино.",
    amenities: [
      { icon: "BedDouble", label: "Две спальни" },
      { icon: "Bath", label: "Джакузи на террасе" },
      { icon: "CookingPot", label: "Кухня-гостиная" },
      { icon: "Speaker", label: "Аудиосистема" },
      { icon: "Car", label: "Два места парковки" },
      { icon: "Wifi", label: "Wi-Fi 500 Мбит/с" },
    ],
  },
];

const fmt = (n: number) => n.toLocaleString("ru-RU");

const Apartments = () => {
  const ref = useReveal<HTMLElement>();
  const [active, setActive] = useState<Apartment | null>(null);

  const choose = (id: string) => {
    window.dispatchEvent(new CustomEvent("choose-apartment", { detail: id }));
    setActive(null);
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="apartments" ref={ref} className="bg-primary text-primary-foreground px-5 md:px-[43px] pt-16 md:pt-24 pb-24">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 reveal">
        <div>
          <p className="eyebrow !text-panel-muted mb-4">02 — Апартаменты</p>
          <h2 className="section-title">
            Три формата
            <br />
            <span className="text-accent">одного вида</span>
          </h2>
        </div>
        <p className="max-w-sm text-panel-muted text-lg">
          Все апартаменты — в новом доме у моря, с дизайнерским ремонтом и окнами на бухту. Цена указана за сутки.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {APARTMENTS.map((a, i) => (
          <article
            key={a.id}
            className="reveal group flex flex-col bg-primary-foreground/[0.06] rounded-panel overflow-hidden"
            style={{ transitionDelay: `${i * 110}ms` }}
          >
            <button onClick={() => setActive(a)} className="relative aspect-[4/3] overflow-hidden text-left" aria-label={`Подробнее: ${a.name}`}>
              <img
                src={a.photo}
                alt={a.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
              />
              <span className="pill absolute top-4 left-4">{a.tag}</span>
              <span className="absolute bottom-4 right-4 font-head font-black text-5xl text-primary-foreground/90 leading-none">
                0{i + 1}
              </span>
            </button>
            <div className="flex flex-col flex-1 p-6">
              <h3 className="font-head font-extrabold uppercase text-xl tracking-tight">{a.name}</h3>
              <div className="flex gap-4 mt-3 text-panel-muted text-sm uppercase tracking-[0.08em]">
                <span className="flex items-center gap-1.5"><Icon name="Maximize" size={15} />{a.area} м²</span>
                <span className="flex items-center gap-1.5"><Icon name="Users" size={15} />до {a.guests} гостей</span>
              </div>
              <p className="mt-4 text-panel-muted">{a.short}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {a.amenities.slice(0, 4).map((m) => (
                  <li key={m.label} className="flex items-center gap-1.5 rounded-full bg-primary-foreground/10 px-3 py-1 text-sm">
                    <Icon name={m.icon} size={14} fallback="Check" />
                    {m.label}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6 flex items-end justify-between gap-4">
                <div>
                  <span className="font-head font-black text-3xl">{fmt(a.price)} ₽</span>
                  <span className="text-panel-muted text-sm"> / сутки</span>
                </div>
                <button onClick={() => choose(a.id)} className="pill !py-2.5 !px-4">
                  Выбрать
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden border-0 rounded-panel bg-background">
          {active && (
            <>
              <img src={active.photo} alt={active.name} className="w-full aspect-[16/9] object-cover grayscale" />
              <div className="p-6 md:p-8">
                <DialogTitle className="font-head font-black uppercase text-2xl tracking-tight">{active.name}</DialogTitle>
                <DialogDescription className="mt-2 text-muted-foreground text-base">
                  {active.area} м² · до {active.guests} гостей · {active.short}
                </DialogDescription>
                <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {active.amenities.map((m) => (
                    <li key={m.label} className="flex items-center gap-2 text-sm">
                      <span className="grid place-items-center w-8 h-8 rounded-full bg-accent text-accent-foreground shrink-0">
                        <Icon name={m.icon} size={15} fallback="Check" />
                      </span>
                      {m.label}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="font-head font-black text-3xl">{fmt(active.price)} ₽</span>
                    <span className="text-muted-foreground"> / сутки</span>
                  </div>
                  <button onClick={() => choose(active.id)} className="pill-cta !bg-primary !text-primary-foreground">
                    Забронировать <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Apartments;