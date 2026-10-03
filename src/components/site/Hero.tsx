import Header from "./Header";
import Icon from "@/components/ui/icon";
import { PHONE, PHONE_HREF } from "./nav";

const Hero = () => {
  return (
    <section id="top" className="relative flex flex-col bg-background overflow-hidden">
      <Header />

      <h1
        aria-label="Краснодар Люкс"
        className="px-5 md:px-[43px] mt-6 md:mt-[30px] font-head font-black leading-none whitespace-nowrap text-foreground tracking-[-0.035em]"
      >
        <span className="block animate-rise origin-left leading-[0.86] text-[clamp(1.9rem,7.9vw,8rem)]">
          Чеки гостиницы
        </span>
      </h1>

      <div className="flex flex-col items-center text-center px-5 md:px-[43px] mt-8 md:mt-12 animate-fade-slow">
        <span className="inline-block rounded-[28px] bg-accent text-accent-foreground px-6 py-3 md:px-8 md:py-4 text-[1.35rem] md:text-[2rem] leading-tight font-medium max-w-4xl">
          Чеки гостиничные полный пакет документов за проживание в Краснодаре
        </span>
        <a
          href={PHONE_HREF}
          className="mt-6 inline-flex items-center gap-3 rounded-full bg-accent text-accent-foreground px-6 py-3 md:px-7 md:py-4 font-head font-bold text-lg md:text-xl shadow-lg hover:scale-105 transition-transform"
        >
          <Icon name="Phone" size={20} />
          Позвонить {PHONE}
        </a>
      </div>
    </section>
  );
};

export default Hero;