import { Link } from "@tanstack/react-router";
import Icon from "@/components/ui/icon";
import { useReveal } from "@/hooks/use-reveal";
import { useCity } from "./city-context";
import { CITIES } from "./cities";

const OtherCities = () => {
  const ref = useReveal<HTMLElement>();
  const city = useCity();
  const others = CITIES.filter((c) => c.slug !== city.slug);

  return (
    <section id="cities" ref={ref} className="px-5 md:px-[43px] py-20 md:py-28">
      <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <div>
          <p className="eyebrow mb-4">География</p>
          <h2 className="section-title">
            Работаем
            <br />
            в других городах
          </h2>
        </div>
        <p className="max-w-sm text-muted-foreground text-lg">
          Гостиничные чеки и полный пакет документов за проживание — не только {city.nameIn}.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {others.map((c) => (
          <Link
            key={c.slug}
            to={c.path}
            className="reveal group relative block aspect-[16/10] rounded-panel overflow-hidden bg-primary text-primary-foreground"
          >
            <img
              src={c.photo}
              alt={`Гостиничные чеки ${c.nameIn}`}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex items-end justify-between gap-4">
              <div>
                <h3 className="font-head font-black uppercase text-3xl md:text-5xl tracking-tight">{c.name}</h3>
                <p className="mt-2 flex items-center gap-2 text-primary-foreground/80">
                  <Icon name="MapPin" size={16} /> {c.address}
                </p>
              </div>
              <span className="pill-cta shrink-0">
                Подробнее <Icon name="ArrowUpRight" size={18} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OtherCities;
