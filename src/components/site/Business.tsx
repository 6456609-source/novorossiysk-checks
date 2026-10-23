import Icon from "@/components/ui/icon";
import { useReveal } from "@/hooks/use-reveal";
import { DOCUMENTS } from "./documents";

const PERKS = [
  { icon: "Laptop", text: "Рабочее место и быстрый интернет в каждом апартаменте" },
  { icon: "Clock", text: "Ранний заезд и поздний выезд по согласованию" },
  { icon: "CalendarRange", text: "Скидка от 7 суток проживания" },
];

const Business = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="business" ref={ref} className="px-5 md:px-[43px] pt-16 md:pt-24 pb-20 md:pb-28">
      <div className="reveal relative bg-primary text-primary-foreground rounded-panel overflow-hidden p-8 md:p-14">
        <div aria-hidden="true" className="absolute -right-24 -top-24 w-44 h-44 md:w-80 md:h-80 rounded-full bg-accent/90 blur-0" />
        <div aria-hidden="true" className="absolute -right-24 -top-24 w-44 h-44 md:w-80 md:h-80 rounded-full border-2 border-accent translate-x-6 translate-y-6" />

        <div className="relative grid xl:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-10 xl:gap-16 items-end">
          <div>
            <p className="eyebrow !text-panel-muted mb-4">01 — Для командированных</p>
            <h2 className="section-title">
              В командировку —
              <br />
              <span className="text-accent">с комфортом</span>
            </h2>
            <p className="mt-8 text-xl md:text-2xl leading-snug max-w-2xl">
              Выдаём полный пакет документов для отчёта о   командировке. Быстро и без лишних хлопот. Чеки. Документы за проживание в Краснодаре. Гостиничные чеки Краснодар.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2 max-w-2xl">
              {DOCUMENTS.map((d) => (
                <li
                  key={d.label}
                  className="flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/[0.07] px-4 py-2 text-sm md:text-base"
                >
                  <Icon name={d.icon} size={16} className="text-accent shrink-0" fallback="FileText" />
                  {d.label}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-panel-muted max-w-2xl">
              Оформляем чеки для командировки в Краснодаре: кассовый чек за проживание, справку о проживании и
              отчётные документы гостиницы. Чек гостиницы для бухгалтерии и документы для авансового отчёта
              выдаём одним пакетом.
            </p>
            <a href="#booking" className="pill-cta mt-10">
              Заказать <span aria-hidden="true">→</span>
            </a>
          </div>

          <ul className="grid sm:grid-cols-3 xl:grid-cols-1 gap-3">
            {PERKS.map((p) => (
              <li key={p.text} className="flex items-center gap-4 rounded-2xl bg-primary-foreground/[0.07] p-5">
                <span className="grid place-items-center w-11 h-11 rounded-full bg-accent text-accent-foreground shrink-0">
                  <Icon name={p.icon} size={20} fallback="Check" />
                </span>
                <span className="text-panel-muted">{p.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Business;