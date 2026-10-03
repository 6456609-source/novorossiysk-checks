import Icon from "@/components/ui/icon";
import { useReveal } from "@/hooks/use-reveal";

const PLACES = [
  { min: "1 мин", label: "Ж/д вокзал Краснодар-1", icon: "TrainFront" },
  { min: "10 мин", label: "Улица Красная", icon: "Footprints" },
  { min: "15 мин", label: "Парк «Краснодар» (Галицкого)", icon: "Trees" },
  { min: "10 мин", label: "Екатерининский собор", icon: "Landmark" },
  { min: "25 мин", label: "Аэропорт Пашковский", icon: "Plane" },
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
            Вокзал рядом
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-md">
            Центр Краснодара у ж/д вокзала, в пешей доступности от улицы Красной, кафе и главных достопримечательностей.
          </p>
          <p className="mt-6 flex items-start gap-3 font-medium text-lg">
            <Icon name="MapPin" size={22} className="mt-0.5 shrink-0" />
            г. Краснодар, Привокзальная пл., 1
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
            title="Карта: апартаменты в Краснодаре"
            src="https://yandex.ru/map-widget/v1/?text=%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80%2C%20%D0%9F%D1%80%D0%B8%D0%B2%D0%BE%D0%BA%D0%B7%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%20%D0%BF%D0%BB%D0%BE%D1%89%D0%B0%D0%B4%D1%8C%2C%201&z=17"
            className="absolute inset-0 w-full h-full grayscale contrast-125"
            loading="lazy"
          />
          <a
            href="https://yandex.ru/maps/?text=%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80%2C%20%D0%9F%D1%80%D0%B8%D0%B2%D0%BE%D0%BA%D0%B7%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%20%D0%BF%D0%BB%D0%BE%D1%89%D0%B0%D0%B4%D1%8C%2C%201&z=17"
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