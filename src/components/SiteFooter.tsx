import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { site } from "~/data/site";
import { services } from "~/data/services";
import { Container } from "~/components/Container";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-100 bg-ink-50">
      <Container className="grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <img
            src="/logo.png"
            alt={site.name}
            width={330}
            height={118}
            className="h-10 w-auto"
          />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-600">
            {site.tagline}. Scheduling, hosted Primavera P6, custom estimating
            and change apps, Power BI reporting and platform integrations.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-ink-700">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 hover:text-brand-700"
              >
                <Mail size={16} className="text-brand-500" />
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 hover:text-brand-700"
              >
                <Phone size={16} className="text-brand-500" />
                {site.phone}
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="text-ink-700 hover:text-brand-700"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
            Company
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {site.nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-ink-700 hover:text-brand-700">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="border-t border-ink-200/70">
        <Container className="flex flex-col gap-2 py-5 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.legalName}. All rights reserved.
          </p>
          <p>
            Primavera P6 is a trademark of Oracle. HeavyBid and HeavyJob are
            trademarks of HCSS. Spectrum is a trademark of Trimble. Power BI is
            a trademark of Microsoft.
          </p>
        </Container>
      </div>
    </footer>
  );
}
