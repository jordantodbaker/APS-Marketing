import { Link, useRouter, type ErrorComponentProps } from "@tanstack/react-router";
import * as React from "react";
import { Container } from "~/components/Container";
import { Button, buttonVariants } from "~/components/ui/button";

export function DefaultCatchBoundary({ error }: ErrorComponentProps) {
  const router = useRouter();

  React.useEffect(() => {
    console.error("Route error", error);
  }, [error]);

  return (
    <Container className="py-24 text-center">
      <h1 className="text-3xl font-bold tracking-tight text-ink-900">
        Something went wrong.
      </h1>
      <p className="mt-3 text-ink-600">
        Please try again. If it keeps happening, email us and we will sort it
        out.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Button variant="secondary" onClick={() => router.invalidate()}>
          Try again
        </Button>
        <Link to="/" className={buttonVariants()}>
          Home
        </Link>
      </div>
    </Container>
  );
}
