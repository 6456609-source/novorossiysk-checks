import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";
import { PHONE, PHONE_HREF, TELEGRAM_HREF, MAX_HREF } from "./nav";

const BUTTONS = [
  { href: MAX_HREF, label: "Написать в MAX", icon: "MessageCircle", text: "MAX", cls: "bg-[#7B3FF2] text-white" },
  { href: TELEGRAM_HREF, label: "Написать в Telegram", icon: "Send", text: "", cls: "bg-[#229ED9] text-white" },
];

const CALL_TEXTS = ["Позвонить", PHONE];

const FloatingContacts = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % CALL_TEXTS.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-[100] flex flex-col items-end gap-3">
      {BUTTONS.map((b) => (
        <a
          key={b.label}
          href={b.href}
          target="_blank"
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
        className="relative flex items-center gap-2 h-14 pl-4 pr-5 rounded-full bg-accent text-accent-foreground shadow-lg hover:scale-105 transition-transform"
      >
        <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-30 pointer-events-none" />
        <Icon name="Phone" size={24} className="relative" />
        <span className="relative grid font-head font-bold whitespace-nowrap">
          {CALL_TEXTS.map((t, i) => (
            <span
              key={t}
              className={`[grid-area:1/1] transition-all duration-500 ${
                i === idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              } ${i === 0 ? "text-center" : ""}`}
              aria-hidden={i !== idx}
            >
              {t}
            </span>
          ))}
        </span>
      </a>
    </div>
  );
};

export default FloatingContacts;
