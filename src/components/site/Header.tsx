import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NAV_ALL, NAV_LEFT, NAV_RIGHT, PHONE, PHONE_HREF } from "./nav";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 grid grid-cols-[1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 md:px-[43px] pt-[11px]">
      <nav aria-label="Разделы" className="hidden lg:flex gap-[9px]">
        {NAV_LEFT.map((l) => (
          <a key={l.href} href={l.href} className="pill">
            {l.label}
          </a>
        ))}
      </nav>

      <a href="#top" className="lg:hidden font-head font-black uppercase tracking-tight text-sm">
        любая<span className="text-muted-foreground"> Отчетность</span>
      </a>

      <p className="hidden lg:block whitespace-nowrap uppercase text-foreground text-[0.86em] tracking-[0.04em]">
        Цемесская бухта · заселение 24/7
        <a href="#booking" className="ml-1 text-muted-foreground underline underline-offset-[3px] hover:text-foreground transition-colors">
          Выбрать даты <span aria-hidden="true">→</span>
        </a>
      </p>

      <nav aria-label="Связь" className="hidden lg:flex gap-[9px] justify-end">
        {NAV_RIGHT.map((l) => (
          <a key={l.href} href={l.href} className="pill">
            {l.label}
          </a>
        ))}
      </nav>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            aria-label="Открыть меню"
            className="lg:hidden pill !px-3 !py-2 justify-self-end"
          >
            <Icon name="Menu" size={18} />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-primary text-primary-foreground border-0 w-[86vw] sm:max-w-sm">
          <SheetTitle className="font-head font-black uppercase text-primary-foreground text-lg">
            Меню
          </SheetTitle>
          <nav className="mt-8 flex flex-col gap-3">
            {NAV_ALL.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-head font-extrabold uppercase text-2xl tracking-tight hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a href={PHONE_HREF} className="pill-cta mt-10">
            <Icon name="Phone" size={18} /> {PHONE}
          </a>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;