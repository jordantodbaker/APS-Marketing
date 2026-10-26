export type Platform = {
  name: string;
  vendor: string;
  role: string;
  /** What we do with it. */
  blurb: string;
  /** Service slugs this platform shows up in. */
  services: string[];
};

export const platforms: Platform[] = [
  {
    name: "Primavera P6",
    vendor: "Oracle",
    role: "Scheduling",
    blurb:
      "Baselines, updates and delay analysis in P6 Professional and EPPM, plus hosting and administration of the database itself.",
    services: ["p6-scheduling", "p6-hosting", "integrations", "power-bi-reporting"],
  },
  {
    name: "HeavyBid",
    vendor: "HCSS",
    role: "Estimating",
    blurb:
      "Estimate structure and cost code standards, plus integrations that push awarded estimates into budgets, schedules and custom apps.",
    services: ["integrations", "custom-web-apps", "power-bi-reporting"],
  },
  {
    name: "HeavyJob",
    vendor: "HCSS",
    role: "Field time & quantities",
    blurb:
      "Field time, quantities and equipment flowing into cost reporting, productivity dashboards and P6 progress.",
    services: ["integrations", "power-bi-reporting"],
  },
  {
    name: "Spectrum",
    vendor: "Trimble Viewpoint",
    role: "ERP / job cost",
    blurb:
      "Job cost budgets, actuals and commitments synchronized with estimating, field and reporting systems.",
    services: ["integrations", "power-bi-reporting"],
  },
  {
    name: "Power BI",
    vendor: "Microsoft",
    role: "Reporting",
    blurb:
      "Data models and dashboards for schedule, cost, earned value and change, refreshed from your source systems.",
    services: ["power-bi-reporting"],
  },
  {
    name: "Custom Web Apps",
    vendor: "Ace Project Services",
    role: "Estimating, change & forms",
    blurb:
      "Purpose-built applications for estimating, change management and field forms that integrate with everything above.",
    services: ["custom-web-apps", "integrations"],
  },
];
