import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Hammer,
  Repeat,
} from "lucide-react";
import { Container, SectionHeading } from "~/components/Container";
import { buttonVariants } from "~/components/ui/button";
import { ServiceCard } from "~/components/ServiceCard";
import { PlatformStrip } from "~/components/PlatformStrip";
import { CtaBand } from "~/components/CtaBand";
import { services } from "~/data/services";
import { site } from "~/data/site";
import { seo } from "~/utils/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: seo({
      title: `${site.name} | ${site.tagline}`,
      description: site.description,
      path: "/",
    }),
  }),
  component: HomePage,
});

const heroPoints = [
  "Primavera P6 schedules built, updated and defended",
  "Hosted and administered P6 databases",
  "Custom estimating and change-management web apps",
  "Power BI dashboards and integrations across your EPC stack",
];

const process = [
  {
    icon: ClipboardCheck,
    title: "Assess",
    body: "A short review of your schedule, cost, change and reporting practices. You get a prioritized roadmap, not a binder.",
  },
  {
    icon: Hammer,
    title: "Build",
    body: "We stand up the pieces: P6 environment and baselines, estimating and change apps, Power BI models, integrations.",
  },
  {
    icon: Repeat,
    title: "Run",
    body: "We maintain schedules, host and administer P6, keep integrations healthy and coach your team until it runs itself.",
  },
];

const reasons = [
  {
    title: "Practitioners, not just consultants",
    body: "Our people have updated schedules at 6 a.m. before a progress meeting and built the cost report the PM actually used.",
  },
  {
    title: "Your tools, connected",
    body: "HeavyBid, HeavyJob, Spectrum, Primavera P6, Power BI and custom apps, working as one system instead of five exports.",
  },
  {
    title: "We build and we stay",
    body: "Hosting, administration and support are part of the offer. You are never handed a system nobody maintains.",
  },
  {
    title: "Sized to the project",
    body: "From a single schedule update to a full project controls program. Fractional support when a full-time hire is too much.",
  },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-grid relative overflow-hidden bg-ink-950 text-white">
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-brand-500/25 blur-3xl"
          aria-hidden="true"
        />
        <Container className="relative grid gap-12 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
              Project controls consulting for EPC and heavy civil
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Schedules, cost and change you can run the job on.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300">
              Ace Project Services builds and runs project controls for
              construction and EPC companies. We plan the work in Primavera P6,
              host the environment it lives in, build the apps that replace your
              spreadsheets, and report it all in Power BI.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className={buttonVariants({ variant: "inverse", size: "lg" })}
              >
                Talk to us
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className={buttonVariants({
                  variant: "outlineInverse",
                  size: "lg",
                })}
              >
                See our services
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
              <p className="text-sm font-semibold text-brand-200">
                What we do
              </p>
              <ul className="mt-4 space-y-3.5">
                {heroPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-ink-100">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-brand-300"
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <PlatformStrip />

      {/* Services */}
      <section className="py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Everything project controls, from the baseline to the dashboard."
            lede="Pick one service or let us run the whole function. Every engagement is staffed by people who have done the work on live projects."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-grid-light border-y border-ink-100 bg-ink-50 py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title="Assess, build, run."
            lede="A simple engagement model that works for a single schedule and for a full project controls program."
            align="center"
          />
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {process.map((step, i) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.title}
                  className="relative rounded-2xl border border-ink-200 bg-white p-7"
                >
                  <span className="absolute right-6 top-6 text-5xl font-bold text-ink-100">
                    {i + 1}
                  </span>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500 text-white">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-ink-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {step.body}
                  </p>
                </li>
              );
            })}
          </ol>
        </Container>
      </section>

      {/* Why APS */}
      <section className="py-20 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why Ace"
              title="Built by people who have sat in the trailer."
              lede="We are a small team of schedulers, cost engineers and developers who got tired of project controls that only works in the office."
            />
            <Link
              to="/about"
              className={buttonVariants({ variant: "secondary", size: "md" }) + " mt-8"}
            >
              More about us
              <ArrowRight size={16} />
            </Link>
          </div>
          <dl className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl border border-ink-200 p-6"
              >
                <dt className="text-base font-semibold text-ink-900">
                  {r.title}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink-600">
                  {r.body}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
