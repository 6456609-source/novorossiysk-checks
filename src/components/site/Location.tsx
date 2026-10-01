import Icon from "@/components/ui/icon";
import { useReveal } from "@/hooks/use-reveal";

const PLACES = [
  { min: "5 мин", label: "Набережная Серебрякова", icon: "Footprints" },
  { min: "10 мин", label: "Мемориал «Малая земля»", icon: "Landmark" },
  { min: "7 мин", label: "Морской вокзал", icon: "Ship" },
  { min: "15 мин", label: "Ж/д вокзал Новороссийск", icon: "TrainFront" },
  { min: "40 мин", label: "Аэропорт Анапы", icon: "Plane" },
];

const Location = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="location" ref={ref} className="px-5 md:px-[43px] py-20 md:py-28">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-10 lg:gap-14">
        <div className="reveal">
          <p className="eyebrow mb-4">05 — Расположение</p>
          <h2 className="section-title">
            Центр.
            <br />
            Море рядом
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-md">
            Новый дом в центре Новороссийска, в пешей доступности от набережной, кафе и главных достопримечательностей.
          </p>
          <p className="mt-6 flex items-start gap-3 font-medium text-lg">
            <Icon name="MapPin" size={22} className="mt-0.5 shrink-0" />
            г. Новороссийск, ул. Советов, центр города
          </p>

          <ul className="mt-8 divide-y divide-border border-y border-border">
            {PLACES.map((p) => (
              <li key={p.label} className="flex items-center justify-between gap-4 py-4 group">
                <span className="flex items-center gap-3">
                  <Icon name={p.icon} size={18} fallback="MapPin" className="text-muted-foreground group-hover:text-foreground transition-colors" />
                  {p.label}
                </span>
                <span className="pill">{p.min}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal relative min-h-[420px] rounded-panel overflow-hidden bg-primary">
          <iframe
            title="Карта: апартаменты в Новороссийске"
            src="https://yandex.ru/map-widget/v1/?ll=37.770500%2C44.718500&z=15&pt=37.770500,44.718500,pm2blm"
            className="absolute inset-0 w-full h-full grayscale contrast-125"
            loading="lazy"
          />
          <a
            href="https://yandex.ru/maps/?pt=37.7705,44.7185&z=16&l=map"
            target="_blank"
            rel="noreferrer"
            className="pill-cta absolute left-4 bottom-4"
          >
            Построить маршрут <Icon name="ArrowUpRight" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Location;
