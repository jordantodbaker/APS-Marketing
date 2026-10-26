import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { z } from "zod";
import { Container, SectionHeading } from "~/components/Container";
import { ContactForm } from "~/components/ContactForm";
import { site } from "~/data/site";
import { seo } from "~/utils/seo";

const searchSchema = z.object({
  interest: z.string().optional(),
});

export const Route = createFileRoute("/contact")({
  validateSearch: (search) => searchSchema.parse(search),
  head: () => ({
    meta: seo({
      title: "Contact",
      description: `Talk to ${site.name} about scheduling, hosted Primavera P6, custom estimating and change apps, Power BI reporting or platform integrations.`,
      path: "/contact",
    }),
  }),
  component: ContactPage,
});

function ContactPage() {
  const { interest } = Route.useSearch();
  return (
    <>
      <section className="border-b border-ink-100 bg-ink-50 py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Contact"
            title="Tell us about the project."
            lede="A few details is enough. We reply within one business day with next steps, and usually a rough price."
          />
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm defaultInterest={interest} />
          </div>
          <aside className="space-y-8 lg:col-span-5">
            <div className="rounded-2xl border border-ink-200 p-6">
              <h2 className="text-base font-semibold text-ink-900">
                Reach us directly
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-ink-700">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-2.5 hover:text-brand-700"
                  >
                    <Mail size={18} className="text-brand-500" />
                    {site.email}
                  </a>
                </li>
                <li>
                  <a
                    href={site.phoneHref}
                    className="inline-flex items-center gap-2.5 hover:text-brand-700"
                  >
                    <Phone size={18} className="text-brand-500" />
                    {site.phone}
                  </a>
                </li>
                <li className="inline-flex items-center gap-2.5">
                  <MapPin size={18} className="text-brand-500" />
                  {site.address}
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-brand-50 p-6 ring-1 ring-brand-100">
              <h2 className="text-base font-semibold text-ink-900">
                What happens next
              </h2>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-ink-700">
                <li>We read your message and reply within a business day.</li>
                <li>A 30 minute call to understand the project and tools.</li>
                <li>A short written scope with pricing and a start date.</li>
              </ol>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
