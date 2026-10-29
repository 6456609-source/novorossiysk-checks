import Icon from "@/components/ui/icon";
import { useCity } from "./city-context";
import { NAV_ALL, PHONE, PHONE_HREF, TELEGRAM_HREF, MAX_HREF } from "./nav";

const CHANNELS = [
  { icon: "Phone", label: "Телефон", value: PHONE, href: PHONE_HREF },
  { icon: "Send", label: "Telegram", value: PHONE, href: TELEGRAM_HREF },
  { icon: "MessageCircle", label: "MAX", value: PHONE, href: MAX_HREF },
  { icon: "Mail", label: "Почта", value: "hello@novoros-lux.ru", href: "mailto:hello@novoros-lux.ru" },
];

const Contacts = () => {
  const city = useCity();
  return (
    <footer id="contacts" className="bg-primary text-primary-foreground rounded-t-panel px-5 md:px-[43px] pt-16 md:pt-24 pb-8 overflow-hidden">
      <div className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-12">
        <div>
          <p className="eyebrow !text-panel-muted mb-4">07 — Контакты</p>
          <h2 className="section-title">
            На связи
            <br />
            <span className="text-accent">круглосуточно</span>
          </h2>
          <a href="#booking" className="pill-cta mt-10">
            Забронировать <span aria-hidden="true">→</span>
          </a>
        </div>

        <ul className="grid sm:grid-cols-2 gap-3 content-start">
          {CHANNELS.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl bg-primary-foreground/[0.07] p-5 hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <span className="grid place-items-center w-11 h-11 rounded-full bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  <Icon name={c.icon} size={19} fallback="Phone" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm uppercase tracking-[0.08em] text-panel-muted group-hover:text-accent-foreground/70">{c.label}</span>
                  <span className="block font-medium truncate">{c.value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <nav className="mt-16 flex flex-wrap gap-x-6 gap-y-2 text-panel-muted uppercase text-sm tracking-[0.08em]">
        {NAV_ALL.map((l) => (
          <a key={l.href} href={l.href} className="story-link hover:text-primary-foreground transition-colors">
            {l.label}
          </a>
        ))}
      </nav>

      <div aria-hidden="true" className="mt-10 font-head font-black leading-[0.86] tracking-[-0.035em] whitespace-nowrap text-[clamp(1.9rem,7.9vw,8rem)] text-primary-foreground/10 select-none">
        {city.name.toUpperCase()}
      </div>

      <div className="mt-6 flex flex-col sm:flex-row justify-between gap-2 text-panel-muted text-sm">
        <span>© {city.brand}. Апартаменты посуточно. {city.name}, {city.address}</span>
        <span>Заезд с 14:00 · выезд до 12:00</span>
      </div>
    </footer>
  );
};

export default Contacts;