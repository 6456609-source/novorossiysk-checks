import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useReveal } from "@/hooks/use-reveal";
import { PHONE_HREF } from "./nav";
import { useCity } from "./city-context";
import { cityFaq } from "./cities";

const Faq = () => {
  const ref = useReveal<HTMLElement>();
  const FAQ = cityFaq(useCity());

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
