import { Link } from "@tanstack/react-router";
import { platforms } from "~/data/platforms";
import { Container } from "~/components/Container";

/** Compact "we work in your tools" strip for the home page. */
export function PlatformStrip() {
  return (
    <section className="border-y border-ink-100 bg-ink-50">
      <Container className="flex flex-col items-center gap-5 py-8 md:flex-row md:justify-between">
        <p className="text-sm font-medium text-ink-600">
          We work inside the platforms you already run
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {platforms
            .filter((p) => p.vendor !== "Ace Project Services")
            .map((p) => (
              <li key={p.name}>
                <Link
                  to="/platforms"
                  className="text-base font-bold tracking-tight text-ink-700 transition-colors hover:text-brand-700"
                >
                  {p.name}
                </Link>
              </li>
            ))}
        </ul>
      </Container>
    </section>
  );
}
