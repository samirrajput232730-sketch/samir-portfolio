/* ==========================================================
   SITE CONTENT — single source of truth
   ==========================================================
   Edit values here to update the live site. This file controls
   the REPEATING blocks (stats, experience, certifications, skills,
   education, contact) — the ones that are painful to hand-edit
   in HTML because entries get added/removed over time.

   Headline copy (hero title, about paragraphs) stays directly
   in index.html since it's edited rarely.

   After editing this file, just reload the page — script.js
   rebuilds the sections below automatically.
   ========================================================== */

const siteContent = {

  profile: {
    name: "Samir Solanki",
    title: "Accountant | Billing, GST & Financial Reporting",
    location: "Bhavnagar, Gujarat, India",
    summary: "Detail-oriented Accountant and E-commerce Coordinator blending traditional financial compliance with modern digital operations. Skilled in end-to-end bookkeeping, GST reconciliation, and data-driven reporting, alongside managing digital storefronts, product catalogs, and nationwide client fulfillment. Proven track record of improving financial accuracy, streamlining workflows, and driving online engagement.",
  },

  resume: {
    file: "Samir_Solanki_Resume.pdf",
  },

  stats: [
    { value: "4+", label: "years in accounting & financial operations", icon: "briefcase" },
    { value: "5L+", label: "data records processed & migrated across roles", icon: "layers" },
    { value: "9", label: "professional certifications in finance & accounting", icon: "award" },
  ],

  experience: [
    {
      dateRange: "Feb 2025 — Present",
      title: "Accountant & Online Operations Coordinator",
      org: "Krishna Impex & Krishna Stationery · Bhavnagar / Ahmedabad, India",
      icon: "chart",
      current: true,
      bullets: [
        "Manage financial and operational records across two entities — Krishna Impex and its sister concern Krishna Stationery — a bulk stationery wholesaler supplying offices, schools, and retailers across India.",
        "Handle end-to-end accounting data entry (purchase, sales, receipts, payments), GST 2-way reconciliation, and E-Way Bill generation, processing payments exceeding ₹10 lakhs and reconciling 50+ bank statements monthly.",
        "Run the digital presence across IndiaMART, WhatsApp, and the company website — daily stock/product updates and 200+ monthly customer inquiries resolved, lifting web traffic by 20%.",
        "Generate consolidated accounting reports and tax filings for both firms, improving financial forecasting accuracy by 25%.",
        "Coordinate order fulfillment and client communication nationwide, maintaining a 98% satisfaction rate while cutting discrepancies by 15% through tighter stock tracking.",
      ],
    },
    {
      dateRange: "Nov 2022 — May 2025",
      title: "Account Assistant",
      org: "Hamlet Enterprise · Bhavnagar, Gujarat (Authorized Dealer, Hathi Cement)",
      icon: "briefcase",
      bullets: [
        "Supported accounting and administration for an authorized Hathi Cement dealer ranked the second-largest seller in the Saurashtra region (2021–2023).",
        "Analyzed financial statements and assisted in preparing monthly budget reports, improving cost tracking and expense management by 15% using Excel and accounting software.",
        "Processed 400+ invoices monthly with 98% on-time payment processing while managing client accounts at a 95% satisfaction rate.",
        "Oversaw inventory across 2 warehouses and streamlined filing for 200+ documents, cutting stock discrepancies by 20% and improving document retrieval time by 30%.",
        "Managed banking transactions with a 100% error-free record while resolving customer inquiries, lifting office productivity by 25%.",
      ],
    },
    {
      dateRange: "Jul 2024 — Dec 2024",
      title: "Data Entry Operator",
      org: "Digital Web Solutions · Manchester, UK (Remote)",
      icon: "layers",
      bullets: [
        "Entered and organized 1,000+ data records per week for a digital marketing agency, maintaining a 98% accuracy rate.",
        "Migrated 500,000+ records across multiple platforms with a 95% success rate, ensuring seamless transitions.",
        "Produced 50+ documentation and reporting outputs monthly and researched 100+ data points per project to support business strategy.",
        "Analyzed and entered complex datasets into CRM systems, improving data accuracy by 25%.",
      ],
    },
    {
      dateRange: "Jun 2022 — Sep 2022",
      title: "Office Assistant",
      org: "Jaytech Engineering · Bhavnagar, Gujarat (Marine Ship Spares)",
      icon: "wrench",
      bullets: [
        "Provided administrative support handling 50+ daily tasks for a marine ship spares supplier, as a fresher building foundational office and client-communication skills.",
        "Prepared shipment documentation (SLR, annexure, proforma invoice, packing list) for 100+ international shipments, helping cut delays by 20%.",
        "Coordinated outsourced projects and monitored stock across shipments, completing 10+ projects on time and within budget.",
      ],
    },
  ],

  projects: [
    {
      status: "Certified",
      title: "Investment Banking",
      tagline: "J.P. Morgan",
      description: "Introductory program on investment banking concepts and financial markets.",
      highlights: [],
      tags: ["J.P. Morgan", "Finance"],
      icon: "globe",
    },
    {
      status: "Certified",
      title: "Tally 9.0 ERP with GST",
      tagline: "MIIT Computer Education · Grade A",
      description: "Hands-on training in Tally ERP accounting software with GST compliance workflows.",
      highlights: [],
      tags: ["Accounting Software"],
      icon: "chart",
    },
    {
      status: "Certified",
      title: "Accounting Fundamentals",
      tagline: "TCS iON · Feb 2025",
      description: "Introduction to accounting, core principles, and financial statement basics.",
      highlights: ["Certificate of Achievement"],
      tags: ["TCS iON", "Accounting"],
      icon: "book",
      demoUrl: "accounting-fundamentals.pdf",
      demoLabel: "View certificate",
    },
    {
      status: "Certified",
      title: "CCC (Course on Computer Concepts)",
      tagline: "IT Master Computer Education · Grade A",
      description: "Foundational computer literacy and digital skills certification.",
      highlights: [],
      tags: ["Computer Skills"],
      icon: "code",
    },
    {
      status: "Certified",
      title: "Risk Management in the Financial Sector",
      tagline: "TCS iON · Feb 2025",
      description: "",
      highlights: [],
      tags: ["TCS iON", "Risk Management"],
      icon: "award",
      demoUrl: "risk-management.pdf",
      demoLabel: "View certificate",
    },
    {
      status: "Certified",
      title: "Market Risk in the Financial Sector",
      tagline: "TCS iON · Feb 2025",
      description: "",
      highlights: [],
      tags: ["TCS iON", "Risk Management"],
      icon: "chart",
      demoUrl: "market-risk.pdf",
      demoLabel: "View certificate",
    },
    {
      status: "Certified",
      title: "Settlements in the Financial Sector",
      tagline: "TCS iON · Feb 2025",
      description: "",
      highlights: [],
      tags: ["TCS iON", "Financial Operations"],
      icon: "layers",
      demoUrl: "settlements.pdf",
      demoLabel: "View certificate",
    },
    {
      status: "Certified",
      title: "Mutual Funds & Role of a Transfer Agency",
      tagline: "TCS iON · Feb 2025",
      description: "",
      highlights: [],
      tags: ["TCS iON", "Finance"],
      icon: "book",
      demoUrl: "mutual-funds.pdf",
      demoLabel: "View certificate",
    },
    {
      status: "Certified",
      title: "Master Data Management for Beginners",
      tagline: "TCS iON · Feb 2025",
      description: "",
      highlights: [],
      tags: ["TCS iON", "Data Management"],
      icon: "code",
      demoUrl: "data-management.pdf",
      demoLabel: "View certificate",
    },
    {
      status: "Project",
      title: "Digital Product Catalogs",
      tagline: "E-commerce Branding & Setup",
      description: "Designed multi-page digital product catalogs for handcrafted antique decorative items using Canva.",
      highlights: ["Configured digital business profiles and branding assets for online visibility."],
      tags: ["Canva", "Digital Marketing", "Branding"],
      icon: "layers",
    },
    {
      status: "Upskilling",
      title: "Data Analytics & Tax Compliance",
      tagline: "Independent Coursework",
      description: "Completed career skill development training covering SQL database querying, advanced MS Excel, and GST return filing.",
      highlights: [],
      tags: ["SQL", "MS Excel", "GST Returns"],
      icon: "code",
    },
  ],

  skills: [
    {
      title: "Accounting & financial reporting",
      description: "Financial statement prep, general ledger, AP/AR, bank reconciliation, and financial analysis.",
      icon: "chart",
    },
    {
      title: "Client & communication skills",
      description: "Written & verbal communication, client relations, attention to detail, and time management.",
      icon: "users",
    },
    {
      title: "Accounting software & tools",
      description: "Tally, Tally Prime, Busy, Saral, Easy, Falcon, MS Excel, and CRM/database data management.",
      icon: "code",
    },
    {
      title: "E-commerce & technical tools",
      description: "Digital storefront management (Shoopy, IndiaMART), multi-page product catalog design via Canva, SQL database querying, and digital marketing basics.",
      icon: "layers",
    },
  ],

  education: [
    {
      title: "M.Com (Banking & Finance) — Pursuing",
      detail: "MKBU · Oct 2024 – Present · Minor in Banking & Finance",
      icon: "award",
    },
    {
      title: "B.Com (Banking & Finance Services)",
      detail: "MKBU · Jun 2021 – Jun 2024 · Minor in Banking & Finance",
      icon: "book",
    },
    {
      title: "Higher & Secondary Education",
      detail: "Ekta Secondary High School / Ekta High School, GSEB Board · 85% (12th) · 84% (10th)",
      icon: "target",
    },
    {
      title: "Languages",
      detail: "English (fluent, professional working proficiency) · Hindi · Gujarati",
      icon: "globe",
    },
  ],

  contact: [
    { label: "Email", value: "samirrajput232730@gmail.com", href: "mailto:samirrajput232730@gmail.com", icon: "mail" },
    { label: "Phone", value: "+91 90542 29181", href: "tel:+919054229181", icon: "phone" },
    { label: "LinkedIn", value: "/in/solanki-samir-934864302", href: "https://www.linkedin.com/in/solanki-samir-934864302/", external: true, icon: "linkedin" },
    { label: "Location", value: "Bhavnagar, Gujarat, India", icon: "pin" },
  ],

};
