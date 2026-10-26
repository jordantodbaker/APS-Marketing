import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container, SectionHeading } from "~/components/Container";
import { CtaBand } from "~/components/CtaBand";
import { platforms } from "~/data/platforms";
import { getService } from "~/data/services";
import { seo } from "~/utils/seo";

export const Route = createFileRoute("/platforms")({
  head: () => ({
    meta: seo({
      title: "Platforms we work in",
      description:
        "Primavera P6, HeavyBid, HeavyJob, Spectrum, Power BI and custom web apps: the EPC platforms Ace Project Services schedules in, integrates and reports from.",
      path: "/platforms",
    }),
  }),
  component: PlatformsPage,
});

function PlatformsPage() {
  return (
    <>
      <section className="border-b border-ink-100 bg-ink-50 py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Platforms"
            title="We work in the tools you already own."
            lede="No rip and replace. We schedule in P6, estimate in HeavyBid, track in HeavyJob, cost in Spectrum, report in Power BI, and connect the gaps with custom apps."
          />
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {platforms.map((p) => (
              <div
                key={p.name}
                className="flex flex-col rounded-2xl border border-ink-200 p-6"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-xl font-bold tracking-tight text-ink-900">
                    {p.name}
                  </h2>
                  <span className="text-xs font-medium text-ink-500">
                    {p.vendor}
                  </span>
                </div>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                  {p.role}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-600">
                  {p.blurb}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.services.map((slug) => {
                    const s = getService(slug);
                    if (!s) return null;
                    return (
                      <li key={slug}>
                        <Link
                          to="/services/$slug"
                          params={{ slug }}
                          className="inline-flex items-center gap-1 rounded-full border border-ink-200 px-3 py-1 text-xs font-medium text-ink-700 hover:border-brand-300 hover:text-brand-700"
                        >
                          {s.name}
                          <ArrowRight size={12} />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Running something not on this list?"
        body="We have integrated plenty of platforms beyond these. Tell us what you run and we will tell you what is possible."
      />
    </>
  );
}
