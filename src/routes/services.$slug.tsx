import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container, SectionHeading } from "~/components/Container";
import { buttonVariants } from "~/components/ui/button";
import { CtaBand } from "~/components/CtaBand";
import { getService, services } from "~/data/services";
import { seo } from "~/utils/seo";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    // Only serializable fields cross the loader boundary; the component
    // re-reads the full record (with its icon) from the static data file.
    return { slug: service.slug };
  },
  head: ({ loaderData }) => {
    const service = loaderData ? getService(loaderData.slug) : undefined;
    return {
      meta: service
        ? seo({
            title: service.name,
            description: service.summary,
            path: `/services/${service.slug}`,
          })
        : [],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { slug } = Route.useLoaderData();
  const service = getService(slug)!;
  const Icon = service.icon;
  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-grid bg-ink-950 py-16 text-white md:py-24">
        <Container className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
              {service.name}
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              {service.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300">
              {service.intro}
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                search={{ interest: service.slug }}
                className={buttonVariants({ variant: "inverse", size: "lg" })}
              >
                Discuss this service
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          <div className="hidden md:col-span-4 md:flex md:justify-end">
            <span className="inline-flex h-32 w-32 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-brand-300">
              <Icon size={64} strokeWidth={1.5} />
            </span>
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="py-16 md:py-20">
        <Container>
          <SectionHeading eyebrow="What we do" title="Capabilities" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {service.capabilities.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-ink-200 p-6"
              >
                <h3 className="text-lg font-semibold text-ink-900">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Deliverables + fit */}
      <section className="border-y border-ink-100 bg-ink-50 py-16 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Deliverables" title="What you get" />
            <ul className="mt-8 space-y-3">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 text-ink-800">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-brand-500"
                  />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Good fit" title="When to call us" />
            <ul className="mt-8 space-y-3">
              {service.fit.map((f) => (
                <li
                  key={f}
                  className="rounded-xl border border-ink-200 bg-white px-4 py-3 text-ink-800"
                >
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
                Tools involved
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {service.tools.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-sm font-medium text-brand-800"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="FAQ" title="Common questions" />
          </div>
          <dl className="space-y-6 lg:col-span-8">
            {service.faqs.map((f) => (
              <div key={f.q} className="border-b border-ink-100 pb-6">
                <dt className="text-base font-semibold text-ink-900">{f.q}</dt>
                <dd className="mt-2 text-ink-600">{f.a}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Related */}
      <section className="pb-16 md:pb-20">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink-500">
            Related services
          </h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: r.slug }}
                  className="group flex items-center justify-between rounded-xl border border-ink-200 px-4 py-3 text-sm font-medium text-ink-800 hover:border-brand-300 hover:text-brand-700"
                >
                  {r.name}
                  <ArrowRight
                    size={16}
                    className="text-ink-400 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-600"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
