import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { services } from "~/data/services";

export const interestOptions = [
  ...services.map((s) => ({ value: s.slug, label: s.name })),
  { value: "other", label: "Something else" },
];

const interestValues = interestOptions.map((o) => o.value) as [
  string,
  ...string[],
];

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(120),
  email: z.string().trim().email("Please enter a valid email").max(200),
  company: z.string().trim().max(160).optional(),
  phone: z.string().trim().max(40).optional(),
  interest: z.enum(interestValues),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little about the project")
    .max(4000),
  /** Honeypot. Real users never fill this; bots do. */
  website: z.string().max(0).optional(),
  /** Referrer / landing page for attribution. */
  source: z.string().max(500).optional(),
});

export type ContactInput = z.input<typeof contactSchema>;

export const submitContact = createServerFn({ method: "POST" })
  .validator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    if (data.website) {
      // Honeypot tripped: pretend success so the bot moves on.
      return { ok: true as const, id: 0 };
    }
    const { getPrisma } = await import("./db");
    const row = await getPrisma().contactSubmission.create({
      data: {
        name: data.name,
        email: data.email,
        company: data.company || null,
        phone: data.phone || null,
        interest: data.interest,
        message: data.message,
        source: data.source || null,
      },
      select: { id: true },
    });
    return { ok: true as const, id: row.id };
  });
