import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  CalendarRange,
  Cable,
  LayoutTemplate,
  ServerCog,
  ClipboardList,
} from "lucide-react";

export type Service = {
  slug: string;
  /** Short name used in nav, cards and the contact form select. */
  name: string;
  /** One-line value statement shown on cards. */
  summary: string;
  icon: LucideIcon;
  /** Detail page hero. */
  headline: string;
  intro: string;
  /** "What we do" items. */
  capabilities: { title: string; body: string }[];
  /** Concrete things the client walks away with. */
  deliverables: string[];
  /** Who it is for / when to call us. */
  fit: string[];
  /** Tools and platforms involved. Matches names in platforms.ts. */
  tools: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "project-controls",
    name: "Project Controls Programs",
    summary:
      "Stand up or mature a project controls function: processes, templates, cadence and the people to run it.",
    icon: ClipboardList,
    headline:
      "Build a project controls portfolio your projects can actually run on.",
    intro:
      "Most contractors have pieces of project controls: a scheduler here, a cost report there, a change log in someone's inbox. We turn those pieces into a system. We assess what you have, design the processes and templates that fit how your field teams work, and stay on to run or coach the function until it is self-sustaining.",
    capabilities: [
      {
        title: "Assessment and roadmap",
        body: "A short, structured review of your current scheduling, cost, change and reporting practices against what your owners and bonding partners expect. You get a prioritized plan, not a binder.",
      },
      {
        title: "Process and template design",
        body: "WBS and cost code standards, schedule specifications, progress measurement rules, change management workflow, monthly reporting cadence. Written for superintendents and PMs, not just the office.",
      },
      {
        title: "Earned value and forecasting",
        body: "Budget-to-actual, earned value, productivity tracking and estimate-at-completion methods tuned to self-perform heavy civil and industrial work.",
      },
      {
        title: "Embedded project controls staff",
        body: "Fractional or full-time schedulers, cost engineers and project controls leads who work inside your team and your tools.",
      },
    ],
    deliverables: [
      "Project controls assessment and roadmap",
      "Project controls manual and procedures",
      "WBS, cost code and activity code standards",
      "Progress measurement and reporting templates",
      "Monthly project review package",
      "Staff augmentation: schedulers, cost engineers, PC leads",
    ],
    fit: [
      "Contractors growing into larger or owner-driven projects with formal controls requirements",
      "EPC and industrial teams that need consistent reporting across many projects",
      "Companies that lost a key scheduler or cost engineer and need continuity now",
    ],
    tools: ["Primavera P6", "HeavyBid", "HeavyJob", "Spectrum", "Power BI"],
    faqs: [
      {
        q: "Do you replace our PMs or work alongside them?",
        a: "Alongside. Project controls supports the project team with schedule, cost and change data they can trust. Your PMs still own the project.",
      },
      {
        q: "How long does a typical program build-out take?",
        a: "An assessment takes two to four weeks. Standing up the core processes on a pilot project usually runs one to two quarters, with coaching after that.",
      },
    ],
  },
  {
    slug: "p6-scheduling",
    name: "Primavera P6 Scheduling",
    summary:
      "Baseline development, monthly updates, time impact analysis and schedule health, all in Primavera P6.",
    icon: CalendarRange,
    headline: "Schedules built and maintained by people who have run the work.",
    intro:
      "We build CPM baselines in Primavera P6 that meet owner specifications and still make sense to the crew in the field. Then we keep them alive: monthly updates, look-aheads, delay analysis and the narrative that goes with them.",
    capabilities: [
      {
        title: "Baseline schedule development",
        body: "Resource and cost loaded CPM baselines built to the contract schedule specification, with the logic, calendars and coding structure reviewed before submission.",
      },
      {
        title: "Schedule updates and maintenance",
        body: "Weekly or monthly status updates, progress reconciliation with field reports, look-ahead schedules and update narratives for the owner.",
      },
      {
        title: "Time impact and delay analysis",
        body: "Fragnets, TIAs and as-planned versus as-built analysis to support change orders, extensions of time and claims.",
      },
      {
        title: "Schedule health and recovery",
        body: "DCMA 14-point style checks, float and critical path reviews, and recovery schedules when a project slips.",
      },
    ],
    deliverables: [
      "Resource and cost loaded baseline schedule in P6 (XER / XML)",
      "Schedule basis narrative and assumptions log",
      "Periodic schedule updates with variance reports",
      "Three and six week look-ahead schedules",
      "Time impact analyses and fragnets",
      "Schedule quality reports",
    ],
    fit: [
      "Projects with a contract schedule specification requiring P6",
      "Contractors who need a scheduler on demand instead of a full-time hire",
      "Teams facing a delay dispute that needs a defensible analysis",
    ],
    tools: ["Primavera P6", "Power BI"],
    faqs: [
      {
        q: "Can you work in our P6 database or do we use yours?",
        a: "Either. We work inside client-hosted P6 environments every day, and we can host a P6 database for you if you do not have one.",
      },
      {
        q: "Do you handle schedule submittals and owner reviews?",
        a: "Yes. We prepare the submittal package, attend schedule review meetings and respond to reviewer comments.",
      },
    ],
  },
  {
    slug: "p6-hosting",
    name: "P6 Hosting & Administration",
    summary:
      "Hosted, administered Primavera P6 databases and networks so your schedulers can log in and work.",
    icon: ServerCog,
    headline: "Primavera P6, hosted and administered, without the IT project.",
    intro:
      "Running Primavera P6 well means a database, a license server, user and security setup, global data standards, backups and patching. We take all of that on. Your team gets a stable P6 environment and an administrator who knows how schedulers actually use it.",
    capabilities: [
      {
        title: "Hosted P6 environments",
        body: "P6 Professional and P6 EPPM databases hosted on managed infrastructure with secure remote access for your schedulers, subcontractors and owner reviewers.",
      },
      {
        title: "Database administration",
        body: "User provisioning, OBS and EPS structure, security profiles, global calendars and codes, and project import and export controls.",
      },
      {
        title: "Backups, patching and upgrades",
        body: "Scheduled backups with tested restores, version upgrades planned around your reporting cycle, and monitoring so problems are caught before your update is due.",
      },
      {
        title: "Migration and consolidation",
        body: "Moving from desktop SQLite or standalone installs to a shared database, or consolidating multiple P6 databases into one governed environment.",
      },
    ],
    deliverables: [
      "Hosted P6 Professional / EPPM database with remote access",
      "User and security administration",
      "Global data standards: EPS, OBS, calendars, codes",
      "Backup and recovery schedule with periodic restore tests",
      "Upgrade and patch management",
      "Help desk for your schedulers",
    ],
    fit: [
      "Contractors whose P6 lives on one scheduler's laptop",
      "Companies with multiple offices or joint venture partners sharing schedules",
      "IT teams that do not want to own an Oracle database and license server",
    ],
    tools: ["Primavera P6"],
    faqs: [
      {
        q: "Do we need to buy our own P6 licenses?",
        a: "Yes, licensing stays with you through Oracle or your reseller. We handle the environment, administration and support.",
      },
      {
        q: "Can owners and subcontractors get read-only access?",
        a: "Yes. We set up scoped security profiles so reviewers see only the projects and data they should.",
      },
    ],
  },
  {
    slug: "custom-web-apps",
    name: "Estimating & Change Form Apps",
    summary:
      "Custom web applications for estimating, change management, RFIs and field forms, built around your workflow.",
    icon: LayoutTemplate,
    headline: "Replace the spreadsheet everyone is afraid to touch.",
    intro:
      "Estimate workbooks, change order logs and field forms start simple and end up as fragile spreadsheets with no audit trail. We build web applications that keep the parts your estimators and PMs like, add validation, approvals, history and reporting, and connect to the systems you already run.",
    capabilities: [
      {
        title: "Estimating applications",
        body: "Take-off, crew and rate libraries, versioned estimates, snapshots and comparisons, with exports to HeavyBid or your ERP.",
      },
      {
        title: "Change management",
        body: "Trends, potential change orders, field change orders, RFIs and change order requests with workflow, numbering, attachments and printable packages.",
      },
      {
        title: "Field and office forms",
        body: "Daily reports, quantity tracking, timesheets and inspection forms that work on a phone and feed your cost reports.",
      },
      {
        title: "Secure, hosted, maintained",
        body: "Role-based access, single sign-on, audit history and automated backups. We host and maintain the app so you are not left with orphaned code.",
      },
    ],
    deliverables: [
      "Requirements workshop and clickable prototype",
      "Production web application with role-based access",
      "Integrations to HeavyBid, HeavyJob, Spectrum or P6 where needed",
      "Printable and exportable reports and packages",
      "Training, documentation and ongoing support",
    ],
    fit: [
      "Estimating teams managing versions and scope changes in Excel",
      "PMs running change logs across email, PDFs and shared drives",
      "Companies whose off-the-shelf software does not match how they actually work",
    ],
    tools: ["Custom Web Apps", "HeavyBid", "Spectrum", "Primavera P6"],
    faqs: [
      {
        q: "What technology do you build with?",
        a: "Modern TypeScript web stacks with a Postgres database, deployed on managed cloud hosting. Practical, well supported and easy to hand off.",
      },
      {
        q: "Who owns the code?",
        a: "You do. We deliver the source with the application and can continue to host and maintain it under a support agreement.",
      },
    ],
  },
  {
    slug: "power-bi-reporting",
    name: "Power BI Reporting",
    summary:
      "Project controls dashboards in Power BI: schedule, cost, earned value, productivity and change, from the data you already have.",
    icon: BarChart3,
    headline: "One set of numbers for the field, the office and the owner.",
    intro:
      "We build Power BI reporting that pulls schedule data from P6, cost and labor from HeavyJob and Spectrum, estimates from HeavyBid and change data from your logs into dashboards your executives and PMs will open every week.",
    capabilities: [
      {
        title: "Project controls dashboards",
        body: "Schedule performance, cost performance, earned value, cash flow, productivity and change order status at the portfolio, project and cost code level.",
      },
      {
        title: "Data modeling and pipelines",
        body: "Clean, documented data models with scheduled refresh from your source systems, so the dashboard is never waiting on a manual export.",
      },
      {
        title: "Owner and executive reporting",
        body: "Monthly report packages, printable layouts and portfolio rollups that match your contractual reporting requirements.",
      },
      {
        title: "Governance and training",
        body: "Workspaces, row-level security, naming standards and training so your team can maintain and extend the reports.",
      },
    ],
    deliverables: [
      "Power BI data model connected to P6, HeavyJob, Spectrum, HeavyBid or your apps",
      "Project and portfolio dashboards",
      "Printable monthly report package",
      "Scheduled refresh and row-level security",
      "Documentation and report-author training",
    ],
    fit: [
      "Leadership teams that want a single weekly view across projects",
      "Project controls groups spending days each month assembling reports by hand",
      "Owners' representatives needing consistent contractor reporting",
    ],
    tools: ["Power BI", "Primavera P6", "HeavyJob", "Spectrum", "HeavyBid"],
    faqs: [
      {
        q: "Do we need a data warehouse?",
        a: "Not usually to start. We often begin with direct connections and scheduled refresh, and introduce a warehouse only when volume or governance calls for it.",
      },
      {
        q: "Can you build on our existing Power BI tenant?",
        a: "Yes. We work in your tenant and workspaces so you retain ownership of everything.",
      },
    ],
  },
  {
    slug: "integrations",
    name: "EPC Platform Integrations",
    summary:
      "Connect HeavyBid, HeavyJob, Spectrum, Primavera P6 and custom apps so data is entered once and used everywhere.",
    icon: Cable,
    headline: "Stop re-keying the same data into four systems.",
    intro:
      "Estimates go into HeavyBid, budgets into Spectrum, time into HeavyJob, activities into P6, and someone reconciles all of it in Excel. We build and maintain the integrations that move estimate, budget, cost, labor and schedule data between these platforms and your own applications.",
    capabilities: [
      {
        title: "Estimate to budget",
        body: "HeavyBid estimates into Spectrum job cost budgets and P6 cost loading, with cost code mapping you control.",
      },
      {
        title: "Field to cost and schedule",
        body: "HeavyJob time, quantities and equipment into Spectrum and into P6 progress, so earned value updates without manual entry.",
      },
      {
        title: "P6 data services",
        body: "Reading and writing P6 data through its APIs and XER/XML for reporting, custom apps and automated updates.",
      },
      {
        title: "Custom app connectivity",
        body: "APIs, scheduled syncs and event-driven updates between your custom web apps and the platforms around them, with logging and error alerts.",
      },
    ],
    deliverables: [
      "Integration design with field mappings and ownership rules",
      "Automated, monitored data flows between platforms",
      "Error handling, alerting and reconciliation reports",
      "Documentation and runbooks",
      "Ongoing support and updates as platforms change",
    ],
    fit: [
      "Contractors running HCSS and Spectrum who still reconcile by hand",
      "Project controls teams loading P6 cost and progress from spreadsheets",
      "Companies adding a custom app that must talk to their ERP",
    ],
    tools: [
      "HeavyBid",
      "HeavyJob",
      "Spectrum",
      "Primavera P6",
      "Custom Web Apps",
    ],
    faqs: [
      {
        q: "Do you use the vendors' official APIs?",
        a: "Wherever they exist, yes. Where a platform lacks an API we use supported import and export formats with validation and logging around them.",
      },
      {
        q: "What happens when a vendor changes their platform?",
        a: "Integrations are monitored and covered under support, so we adapt them when a platform releases breaking changes.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
