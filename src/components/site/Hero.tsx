import Header from "./Header";

const HERO_PHOTO =
  "https://cdn.poehali.dev/projects/172e5f49-d13c-4e4d-b3f0-0f10ceeb28de/files/8dc24030-d891-44df-b5d8-75b7f55e6e35.jpg";

const Hero = () => {
  return (
    <section id="top" className="relative flex flex-col h-[100svh] min-h-[680px] max-h-[1000px] bg-background overflow-hidden">
      <Header />

      <h1
        aria-label="Новороссийск Люкс"
        className="px-5 md:px-[43px] mt-6 md:mt-[30px] font-head font-black leading-none whitespace-nowrap text-foreground tracking-[-0.035em]"
      >
        <span className="block animate-rise origin-left leading-[0.86] text-[clamp(1.9rem,7.9vw,8rem)]">
          НОВОРОССИЙСК
        </span>
      </h1>

      <div className="relative flex-1 mt-6 md:mt-10 min-h-[420px] bg-primary rounded-t-panel overflow-hidden">
        <img
          src={HERO_PHOTO}
          alt="Гостиная апартаментов с панорамным окном на Цемесскую бухту"
          className="absolute inset-0 w-full h-full object-cover opacity-[.62] grayscale"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,.55)_0%,transparent_60%)]"
        />
        <div className="absolute inset-0 z-[1] flex flex-col items-center justify-center text-center px-5 py-16 text-primary-foreground animate-fade-slow">
          <h2 className="font-head font-extrabold uppercase leading-[0.98] tracking-[-0.03em] text-[clamp(2.6rem,7vw,3.78em)]">
            Люкс
            <br />
            посуточно
          </h2>
          <p className="mt-[22px] text-[1.2em] text-panel-muted tracking-[0.01em] max-w-md">
            Вид на бухту. Бесконтактное заселение в любое время суток.
          </p>
          <a href="#booking" className="pill-cta mt-[30px]">
            Забронировать <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
