import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useReveal } from "@/hooks/use-reveal";
import { PHONE, PHONE_HREF } from "./nav";

const FAQ = [
  {
    q: "Какие документы за проживание в Краснодаре вы выдаёте?",
    a: "Полный пакет отчётных документов гостиницы: кассовый чек за проживание, счёт на оплату, счёт-фактуру, акт оказанных услуг, договор, справку о проживании и квитанцию (БСО).",
  },
  {
    q: "Подойдут ли гостиничные чеки для бухгалтерии?",
    a: "Да. Чек гостиницы для бухгалтерии и остальные документы оформляются для отчёта о командировке и подходят для сдачи в бухгалтерию организации.",
  },
  {
    q: "Можно ли получить документы для авансового отчёта?",
    a: "Да, выдаём документы для авансового отчёта одним пакетом: чек за проживание в Краснодаре, справку о проживании и закрывающие документы.",
  },
  {
    q: "Как заказать чеки для командировки в Краснодаре?",
    a: `Позвоните по номеру ${PHONE} или оставьте заявку на сайте. Уточним даты проживания и подготовим отчётные документы командировки.`,
  },
  {
    q: "Выдаёте ли вы справку о проживании?",
    a: "Да, справка о проживании в Краснодаре входит в пакет документов вместе с кассовым чеком за проживание.",
  },
];

const Faq = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="faq" ref={ref} className="px-5 md:px-[43px] py-20 md:py-28">
      <div className="reveal grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-10 lg:gap-16">
        <div>
          <p className="eyebrow mb-4">Вопросы и ответы</p>
          <h2 className="section-title">
            Чеки и документы
            <br />
            за проживание
          </h2>
          <a href={PHONE_HREF} className="pill-cta mt-10">
            Задать вопрос <span aria-hidden="true">→</span>
          </a>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {FAQ.map((item, i) => (
            <AccordionItem key={item.q} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-lg md:text-xl font-medium">{item.q}</AccordionTrigger>
              <AccordionContent className="text-base md:text-lg leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
