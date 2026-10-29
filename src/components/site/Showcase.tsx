import { useCity } from "./city-context";

const HERO_PHOTO =
  "https://cdn.poehali.dev/projects/172e5f49-d13c-4e4d-b3f0-0f10ceeb28de/files/98eefa68-1a3e-40da-bab9-812503b66b57.jpg";

const Showcase = () => {
  const city = useCity();
  return (
    <section className="px-5 md:px-[43px] pb-20 md:pb-28">
      <div className="relative h-[70svh] min-h-[480px] max-h-[760px] bg-primary rounded-panel overflow-hidden">
        <img
          src={HERO_PHOTO}
          alt={`Гостиная апартаментов ${city.nameIn}`}
          className="absolute inset-0 w-full h-full object-cover opacity-[.62] grayscale"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,.55)_0%,transparent_60%)]"
        />
        <div className="absolute inset-0 z-[1] flex flex-col items-center justify-center text-center px-5 py-16 text-primary-foreground">
          <h2 className="font-head font-extrabold uppercase leading-[0.98] tracking-[-0.03em] text-[clamp(2.6rem,7vw,3.78em)]">
            Люкс
            <br />
            посуточно
          </h2>
          <p className="mt-[22px] text-[1.2em] text-panel-muted tracking-[0.01em] max-w-md">
            {city.showcaseText}
          </p>
          <a href="#booking" className="pill-cta mt-[30px]">
            Забронировать <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
