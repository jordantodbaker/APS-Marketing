import "dotenv/config";
import { defineConfig } from "@prisma/config";

export default defineConfig({
  schema: "./prisma/schema.prisma",
  migrations: {
    path: "./prisma/migrations",
  },
  datasource: {
    // `prisma generate` (run on every `npm install`) only needs *a* URL, not a
    // reachable one. The placeholder keeps fresh clones and Vercel builds
    // working; db push / migrate / the app itself still require the real value.
    url:
      process.env.DATABASE_URL ??
      "postgresql://placeholder:placeholder@localhost:5432/placeholder",
  },
});
