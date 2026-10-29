import Icon from "@/components/ui/icon";
import { useReveal } from "@/hooks/use-reveal";
import { useCity } from "./city-context";
import { mapUrl } from "./cities";

const Location = () => {
  const ref = useReveal<HTMLElement>();
  const city = useCity();

  return (
    <section id="location" ref={ref} className="px-5 md:px-[43px] py-20 md:py-28">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-10 lg:gap-14">
        <div className="reveal">
          <p className="eyebrow mb-4">05 — Расположение</p>
          <h2 className="section-title">
            {city.locationTitle[0]}
            <br />
            {city.locationTitle[1]}
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-md">
            {city.locationText}
          </p>
          <p className="mt-6 flex items-start gap-3 font-medium text-lg">
            <Icon name="MapPin" size={22} className="mt-0.5 shrink-0" />
            г. {city.name}, {city.address}
          </p>

          <ul className="mt-8 divide-y divide-border border-y border-border">
            {city.places.map((p) => (
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
            title={`Карта: апартаменты ${city.nameIn}`}
            src={mapUrl(city, true)}
            className="absolute inset-0 w-full h-full grayscale contrast-125"
            loading="lazy"
          />
          <a
            href={mapUrl(city)}
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