import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { useReveal } from "@/hooks/use-reveal";

const REVIEWS = [
  { name: "Анна", city: "Москва", apt: "Студия «Бухта»", text: "Проснулась — а за окном корабли заходят в порт. Чисто, тихо, бельё как в хорошем отеле. Заселялись в час ночи по коду — всё сработало без единого звонка." },
  { name: "Дмитрий", city: "Краснодар", apt: "«Набережная»", text: "Был в командировке неделю. Рабочий стол у окна, интернет летает, парковка во дворе. Администратор отвечал в мессенджере за пару минут." },
  { name: "Ольга и Сергей", city: "Санкт-Петербург", apt: "Пентхаус «Маяк»", text: "Отмечали годовщину. Терраса с джакузи и огни бухты вечером — это лучшее, что можно придумать в Новороссийске. Вернёмся летом." },
  { name: "Игорь", city: "Ростов-на-Дону", apt: "«Набережная»", text: "Ехали вчетвером с детьми. Кухня укомплектована полностью, до набережной пять минут. Цена честная, всё как на фото." },
  { name: "Марина", city: "Екатеринбург", apt: "Студия «Бухта»", text: "Минималистично и стильно. Кофемашина, мягкие полотенца, а главное — вид. Пила кофе на подоконнике и смотрела на море." },
];

const Reviews = () => {
  const ref = useReveal<HTMLElement>();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const update = () => setCurrent(api.selectedScrollSnap());
    update();
    api.on("select", update);
    return () => {
      api.off("select", update);
    };
  }, [api]);

  return (
    <section id="reviews" ref={ref} className="bg-secondary py-20 md:py-28 overflow-hidden">
      <div className="px-5 md:px-[43px] flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 reveal">
        <div>
          <p className="eyebrow mb-4">04 — Отзывы</p>
          <h2 className="section-title">
            Говорят
            <br />
            гости
          </h2>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right">
            <div className="font-head font-black text-5xl leading-none">4.9</div>
            <div className="text-muted-foreground text-sm uppercase tracking-[0.08em] mt-1">средняя оценка</div>
          </div>
          <div className="flex gap-2">
            <button aria-label="Назад" onClick={() => api?.scrollPrev()} className="grid place-items-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
              <Icon name="ArrowLeft" size={20} />
            </button>
            <button aria-label="Вперёд" onClick={() => api?.scrollNext()} className="grid place-items-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
              <Icon name="ArrowRight" size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="reveal pl-5 md:pl-[43px]">
        <Carousel setApi={setApi} opts={{ align: "start", loop: true }}>
          <CarouselContent className="-ml-4 pr-5 md:pr-[43px]">
            {REVIEWS.map((r, i) => (
              <CarouselItem key={r.name + i} className="pl-4 basis-[88%] sm:basis-1/2 lg:basis-1/3">
                <figure className={`h-full flex flex-col rounded-panel p-7 md:p-8 transition-colors duration-300 ${i === current ? "bg-primary text-primary-foreground" : "bg-background"}`}>
                  <div className="flex gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Icon key={s} name="Star" size={16} className={i === current ? "fill-current" : "fill-current text-foreground"} />
                    ))}
                  </div>
                  <blockquote className="mt-5 text-lg leading-relaxed flex-1">«{r.text}»</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="grid place-items-center w-11 h-11 rounded-full bg-accent text-accent-foreground font-head font-black">
                      {r.name[0]}
                    </span>
                    <span>
                      <span className="block font-medium">{r.name}, {r.city}</span>
                      <span className={`block text-sm ${i === current ? "text-panel-muted" : "text-muted-foreground"}`}>{r.apt}</span>
                    </span>
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Reviews;
