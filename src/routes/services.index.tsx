import { createFileRoute } from "@tanstack/react-router";
import { Container, SectionHeading } from "~/components/Container";
import { ServiceCard } from "~/components/ServiceCard";
import { CtaBand } from "~/components/CtaBand";
import { services } from "~/data/services";
import { seo } from "~/utils/seo";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: seo({
      title: "Services",
      description:
        "Project controls programs, Primavera P6 scheduling, hosted P6 administration, custom estimating and change apps, Power BI reporting and EPC platform integrations.",
      path: "/services",
    }),
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="border-b border-ink-100 bg-ink-50 py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Project controls, end to end."
            lede="Six services that stand on their own and work better together. Start where the pain is."
          />
        </Container>
      </section>
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
