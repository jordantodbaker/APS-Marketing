import * as React from "react";
import { useMutation } from "@tanstack/react-query";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  contactSchema,
  interestOptions,
  submitContact,
  type ContactInput,
} from "~/server/contact";
import { site } from "~/data/site";
import { cn } from "~/lib/utils";

type FieldErrors = Partial<Record<keyof ContactInput, string>>;

const inputClass =
  "block w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-base text-ink-900 shadow-xs placeholder:text-ink-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100";

export function ContactForm({ defaultInterest }: { defaultInterest?: string }) {
  const [errors, setErrors] = React.useState<FieldErrors>({});
  const formRef = React.useRef<HTMLFormElement>(null);

  const mutation = useMutation({
    mutationFn: (data: ContactInput) => submitContact({ data }),
  });

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries()) as Record<string, string>;
    const payload: ContactInput = {
      name: raw.name ?? "",
      email: raw.email ?? "",
      company: raw.company ?? "",
      phone: raw.phone ?? "",
      interest: raw.interest ?? "other",
      message: raw.message ?? "",
      website: raw.website ?? "",
      source:
        typeof document !== "undefined"
          ? `${window.location.pathname}${window.location.search}` +
            (document.referrer ? ` <- ${document.referrer}` : "")
          : "",
    };

    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof ContactInput | undefined;
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    mutation.mutate(parsed.data);
  }

  if (mutation.isSuccess) {
    return (
      <div className="rounded-2xl border border-brand-100 bg-brand-50 p-8 text-center">
        <CheckCircle2 className="mx-auto text-brand-600" size={40} />
        <h3 className="mt-4 text-xl font-semibold text-ink-900">
          Thanks, we have your message.
        </h3>
        <p className="mt-2 text-ink-600">
          Someone from Ace Project Services will reply within one business
          day. Need us sooner? Call{" "}
          <a href={site.phoneHref} className="font-medium text-brand-700">
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      className="space-y-5"
      aria-describedby={mutation.isError ? "contact-error" : undefined}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" error={errors.name} required>
          <input
            id="name"
            name="name"
            autoComplete="name"
            className={cn(inputClass, errors.name && "border-red-400")}
          />
        </Field>
        <Field label="Work email" name="email" error={errors.email} required>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={cn(inputClass, errors.email && "border-red-400")}
          />
        </Field>
        <Field label="Company" name="company" error={errors.company}>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            className={inputClass}
          />
        </Field>
        <Field label="Phone" name="phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
          />
        </Field>
      </div>

      <Field label="What can we help with?" name="interest" error={errors.interest}>
        <select
          id="interest"
          name="interest"
          defaultValue={defaultInterest ?? "project-controls"}
          className={inputClass}
        >
          {interestOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </Field>

      <Field
        label="Tell us about the project"
        name="message"
        error={errors.message}
        required
      >
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Project type, size, what tools you run today, and what is not working."
          className={cn(inputClass, errors.message && "border-red-400")}
        />
      </Field>

      {/* Honeypot: hidden from people, filled by bots. */}
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {mutation.isError && (
        <p
          id="contact-error"
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          We could not send your message. Please email us directly at{" "}
          <a href={`mailto:${site.email}`} className="font-medium underline">
            {site.email}
          </a>
          .
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-500">
          We only use your details to respond to this request.
        </p>
        <Button type="submit" size="lg" disabled={mutation.isPending}>
          {mutation.isPending && <Loader2 size={18} className="animate-spin" />}
          Send message
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  required,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-medium text-ink-800"
      >
        {label}
        {required && <span className="text-brand-600"> *</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-sm text-red-700" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
