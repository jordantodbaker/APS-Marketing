import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "~/components/Container";
import { buttonVariants } from "~/components/ui/button";
import { site } from "~/data/site";

export function CtaBand({
  title = "Let's talk about your project controls.",
  body = "Tell us where the schedule, cost or reporting pain is today. We will come back with a straightforward plan and a price.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-grid bg-brand-700 text-white">
      <Container className="flex flex-col items-start gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-brand-100">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            to="/contact"
            className={buttonVariants({ variant: "inverse", size: "lg" })}
          >
            Start a conversation
            <ArrowRight size={18} />
          </Link>
          <a
            href={`mailto:${site.email}`}
            className={buttonVariants({ variant: "outlineInverse", size: "lg" })}
          >
            {site.email}
          </a>
        </div>
      </Container>
    </section>
  );
}
