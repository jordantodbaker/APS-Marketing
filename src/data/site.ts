/**
 * Company-wide facts used across the site. Edit here, not in components.
 * TODO(owner): replace the placeholder phone / email / address before launch.
 */
export const site = {
  name: "Ace Project Services",
  legalName: "Ace Project Services Inc.",
  shortName: "APS",
  tagline: "Project controls for EPC and heavy civil builders",
  description:
    "Ace Project Services helps construction and EPC companies build and run project controls programs: Primavera P6 scheduling, hosted P6 environments, custom estimating and change-management web apps, Power BI reporting, and integrations across HeavyBid, HeavyJob, Spectrum and P6.",
  url: import.meta.env.VITE_SITE_URL ?? "https://aceprojectservices.com",
  email: "info@aceprojectservices.com",
  phone: "(000) 000-0000",
  phoneHref: "tel:+10000000000",
  address: "United States",
  nav: [
    { label: "Services", to: "/services" },
    { label: "Platforms", to: "/platforms" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ],
} as const;
