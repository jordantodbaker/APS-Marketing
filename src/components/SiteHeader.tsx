import * as React from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { site } from "~/data/site";
import { buttonVariants } from "~/components/ui/button";
import { Container } from "~/components/Container";
import { cn } from "~/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-ink-100 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6 sm:h-20">
        <Link to="/" className="flex shrink-0 items-center" aria-label={site.name}>
          <img
            src="/logo.png"
            alt={site.name}
            width={330}
            height={118}
            className="h-9 w-auto sm:h-11"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {site.nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-50 hover:text-ink-900"
              activeProps={{ className: "text-brand-700" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link to="/contact" className={buttonVariants({ size: "sm" })}>
            Talk to us
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-700 hover:bg-ink-50 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-ink-100 bg-white md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="flex flex-col gap-1 py-3">
          {site.nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2.5 text-base font-medium text-ink-800 hover:bg-ink-50"
              activeProps={{ className: "bg-brand-50 text-brand-700" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className={cn(buttonVariants({ size: "md" }), "mt-2")}
          >
            Talk to us
          </Link>
        </Container>
      </div>
    </header>
  );
}
