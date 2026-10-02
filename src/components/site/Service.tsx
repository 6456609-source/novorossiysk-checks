import Icon from "@/components/ui/icon";
import { useReveal } from "@/hooks/use-reveal";

const ITEMS = [
  { icon: "KeyRound", title: "Бесконтактное заселение", text: "Код от замка приходит в сообщении. Заезжайте в 3 часа ночи — никого не нужно ждать." },
  { icon: "Sparkles", title: "Уборка и свежее бельё", text: "Профессиональная уборка перед каждым заездом, гипоаллергенное бельё и пушистые полотенца." },
  { icon: "Car", title: "Своя парковка", text: "Закрытая парковка во дворе для гостей. Место закрепляем за вами на весь срок." },
  { icon: "Wifi", title: "Быстрый Wi-Fi", text: "Оптоволокно до 500 Мбит/с — хватит для созвонов, стриминга и работы в облаке." },
  { icon: "Waves", title: "Набережная рядом", text: "До набережной Серебрякова — 5 минут пешком. Утренняя пробежка с видом на корабли." },
  { icon: "Headphones", title: "На связи 24/7", text: "Администратор отвечает в мессенджерах круглосуточно и решает вопросы за минуты." },
];

const MARQUEE = ["Вид на бухту", "Заселение 24/7", "Свежее бельё", "Парковка", "Wi-Fi", "Набережная — 5 минут"];

const Service = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="service" ref={ref} className="bg-background">
      <div className="bg-accent text-accent-foreground overflow-hidden py-4 border-y-2 border-foreground">
        <div className="flex w-max animate-marquee">
          {[...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE].map((t, i) => (
            <span key={i} className="font-head font-extrabold uppercase text-lg md:text-2xl tracking-tight px-6 flex items-center gap-6 whitespace-nowrap">
              {t} <span aria-hidden="true">✳</span>
            </span>
          ))}
        </div>
      </div>

      <div className="px-5 md:px-[43px] py-20 md:py-28">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-10 lg:gap-16">
          <div className="reveal lg:sticky lg:top-10 self-start">
            <p className="eyebrow mb-4">03 — Удобства и сервис</p>
            <h2 className="section-title lg:!text-[clamp(2.2rem,4.2vw,4rem)]">
              Как дома.
              <br />
              Только с видом
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-sm">
              Мы берём на себя всё, что обычно отвлекает в поездке. Вам остаётся море, город и отдых.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-border rounded-panel overflow-hidden border border-border">
            {ITEMS.map((it, i) => (
              <div
                key={it.title}
                className="reveal group bg-background p-7 md:p-9 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                style={{ transitionDelay: `${(i % 2) * 90}ms` }}
              >
                <div className="flex items-start justify-between">
                  <span className="grid place-items-center w-12 h-12 rounded-full bg-accent text-accent-foreground">
                    <Icon name={it.icon} size={22} fallback="Check" />
                  </span>
                  <span className="font-head font-black text-muted-foreground/40 text-sm group-hover:text-panel-muted">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-head font-bold uppercase text-lg tracking-tight">{it.title}</h3>
                <p className="mt-2 text-muted-foreground group-hover:text-panel-muted transition-colors">{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;