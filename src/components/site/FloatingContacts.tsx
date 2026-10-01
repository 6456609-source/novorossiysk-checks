import Icon from "@/components/ui/icon";
import { PHONE_HREF, TELEGRAM_HREF, MAX_HREF } from "./nav";

const BUTTONS = [
  { href: MAX_HREF, label: "Написать в MAX", icon: "MessageCircle", text: "MAX", cls: "bg-[#7B3FF2] text-white" },
  { href: TELEGRAM_HREF, label: "Написать в Telegram", icon: "Send", text: "", cls: "bg-[#229ED9] text-white" },
  { href: PHONE_HREF, label: "Позвонить", icon: "Phone", text: "", cls: "bg-accent text-accent-foreground" },
];

const FloatingContacts = () => {
  return (
    <div className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-50 flex flex-col gap-3">
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
    </div>
  );
};

export default FloatingContacts;
