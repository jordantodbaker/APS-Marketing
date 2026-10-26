import { Link } from "@tanstack/react-router";
import { Container } from "~/components/Container";
import { buttonVariants } from "~/components/ui/button";

export function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
        404
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink-900">
        That page does not exist.
      </h1>
      <p className="mt-3 text-ink-600">
        The link may be out of date. Try one of these instead.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link to="/" className={buttonVariants({ variant: "secondary" })}>
          Home
        </Link>
        <Link to="/services" className={buttonVariants()}>
          Our services
        </Link>
      </div>
    </Container>
  );
}
