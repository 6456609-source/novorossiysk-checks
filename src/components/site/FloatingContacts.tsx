import Icon from "@/components/ui/icon";
import { PHONE, PHONE_HREF, TELEGRAM_HREF, MAX_HREF } from "./nav";

const BUTTONS = [
  { href: MAX_HREF, label: "Написать в MAX", icon: "MessageCircle", text: "MAX", cls: "bg-[#7B3FF2] text-white" },
  { href: TELEGRAM_HREF, label: "Написать в Telegram", icon: "Send", text: "", cls: "bg-[#229ED9] text-white" },
];

const FloatingContacts = () => {
  return (
    <div className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-50 flex flex-col items-end gap-3">
      {BUTTONS.map((b) => (
        <a
          key={b.label}
          href={b.href}
          target={b.href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          aria-label={b.label}
          title={b.label}
          className={`grid place-items-center w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform ${b.cls}`}
        >
          {b.text ? (
            <span className="font-head font-black text-xs tracking-tight">{b.text}</span>
          ) : (
            <Icon name={b.icon} size={24} />
          )}
        </a>
      ))}
      <a
        href={PHONE_HREF}
        aria-label={`Позвонить ${PHONE}`}
        title={`Позвонить ${PHONE}`}
        className="flex items-center gap-2 h-14 px-4 md:px-5 rounded-full bg-accent text-accent-foreground shadow-lg hover:scale-105 transition-transform"
      >
        <Icon name="Phone" size={24} />
        <span className="hidden sm:inline font-head font-bold whitespace-nowrap">{PHONE}</span>
      </a>
    </div>
  );
};

export default FloatingContacts;