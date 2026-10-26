import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container, SectionHeading } from "~/components/Container";
import { buttonVariants } from "~/components/ui/button";
import { CtaBand } from "~/components/CtaBand";
import { site } from "~/data/site";
import { seo } from "~/utils/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: seo({
      title: "About",
      description:
        "Ace Project Services is a project controls consultancy serving construction and EPC contractors with scheduling, hosted Primavera P6, custom applications, Power BI reporting and integrations.",
      path: "/about",
    }),
  }),
  component: AboutPage,
});

const values = [
  {
    title: "Field first",
    body: "If the superintendent cannot use it, it is not done. Every schedule, form and report we build is checked against how the work actually gets planned and tracked.",
  },
  {
    title: "Own the numbers",
    body: "One source of truth for budget, earned value and forecast. We would rather spend a week fixing cost codes than a year explaining variances.",
  },
  {
    title: "Build to hand off",
    body: "Documented processes, clean data models and source code you own. We are glad to keep running it, but you should never be stuck with us.",
  },
  {
    title: "Straight talk",
    body: "Clear scopes, fixed fees where we can, and honest answers about what will and will not work on your project.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="border-b border-ink-100 bg-ink-50 py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="About"
            title="A project controls team that builds its own tools."
            lede={`${site.name} started as schedulers and cost engineers on heavy civil and industrial jobs. We kept building the apps, dashboards and integrations our projects needed, and now we do that for other contractors.`}
          />
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-5 text-lg leading-relaxed text-ink-700 lg:col-span-7">
            <p>
              Project controls has two halves. The first is discipline: a good
              baseline, honest updates, a change process people follow, and a
              monthly report leadership trusts. The second is plumbing: the P6
              database, the estimate export, the field time feed and the
              dashboard that turn all of that into something a PM can act on.
            </p>
            <p>
              Most firms get help with one half. We do both. Our schedulers and
              cost engineers run the discipline. Our developers build and host
              the plumbing: Primavera P6 environments, estimating and change
              management web apps, Power BI models and the integrations between
              HeavyBid, HeavyJob, Spectrum and P6.
            </p>
            <p>
              We work with general contractors, self-perform heavy civil and
              industrial contractors, and EPC firms that need their project
              controls to hold up in front of owners, lenders and bonding
              partners.
            </p>
            <div className="pt-2">
              <Link to="/services" className={buttonVariants({ size: "md" })}>
                What we offer
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <dl className="grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-ink-200 p-6"
              >
                <dt className="text-base font-semibold text-ink-900">
                  {v.title}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink-600">
                  {v.body}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <CtaBand
        title="Want to see how we would approach your project?"
        body="Send us a few details and we will come back with a short plan and what it would cost."
      />
    </>
  );
}
