export const SITE = {
  name: "Abhishek Sharma",
  role: "Full Stack Developer & AI Automation Expert",
  tagline: "I build websites and AI systems that businesses actually use.",
  email: "contactabhisheksharmaji@gmail.com",
  location: "India · Working worldwide",
  experienceYears: 5,
  projectsDelivered: 120,
  industriesServed: 20,
  satisfaction: 98,
};

//  -  -  -  -  Integration configuration  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - 
// Replace the placeholder values below with your real credentials.
//
// HubSpot:
//   HUBSPOT_PORTAL_ID & HUBSPOT_FORM_ID are used to submit the CTA / contact
//   form to HubSpot via the Forms API (CORS enabled). Keep the form field
//   names in sync with the ones in your HubSpot form.
//
// WhatsApp:
//   WHATSAPP_NUMBER is the full international number used by wa.me links.
//
// Calendly:
//   CALENDLY_URL is opened by every "Book now" button.
//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - 
export const HUBSPOT = {
  portalId: "246934536",
  region: "na2",
  formId: "",
  chatEnabled: true,
};

export const WHATSAPP = {
  number: "+919518609407",
  get url() {
    const message = encodeURIComponent(
      "Hi Abhishek! I found your website and I would love to discuss a project with you.",
    );
    return `https://wa.me/${this.number.replace(/[^0-9]/g, "")}?text=${message}`;
  },
};

export const CALENDLY = {
  url: "https://calendly.com/abhisheksharma/intro - call",
};

//  -  -  -  -  -  HubSpot Forms API submit  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - 
export async function submitToHubSpot(fields) {
  const { portalId, formId } = HUBSPOT;
  if (!portalId || !formId) {
    // HubSpot not configured yet - simulate success and keep the UX flowing.
    console.warn(
      "[hubspot] Portal ID / Form ID not configured. Set HUBSPOT.portalId and HUBSPOT.formId in src/lib/config.js",
    );
    return { ok: true, simulated: true };
  }

  const body = {
    fields: Object.entries(fields).map(([name, value]) => ({ name, value })),
    context: {
      pageUri: window.location.href,
      pageName: document.title,
    },
  };

  const res = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
    {
      method: "POST",
      headers: { "Content - Type": "application/json" },
      body: JSON.stringify(body),
    },
  );

  return { ok: res.ok, simulated: false, status: res.status };
}

export const SERVICES = [
  {
    slug: "business - website",
    name: "Business Website",
    icon: "globe",
    price: 10000,
    priceLabel: "from ₹10,000",
    short:
      "A polished, fast, SEO ready website that makes your business look established and turns visitors into enquiries.",
    deliverables: [
      "Website design & development - WordPress / PHP / Next.js",
      "Core pages: Home, Services, About Us, Contact Us",
      "Speed, security & SEO optimisation plugins",
      "Complete 1 Year Bundle: Domain, Hosting, and Professional Email",
      "HubSpot integration - form submissions & live visitor chat",
    ],
  },
  {
    slug: "online - store",
    name: "Business Website + Online Store",
    icon: "shopping - bag",
    price: 20000,
    priceLabel: "from ₹20,000",
    featured: true,
    short:
      "A full e-commerce experience - product listings, orders, and revenue, wired into your CRM from day one.",
    deliverables: [
      "Website design & development - WordPress / PHP / Next.js",
      "Pages: Home, Shop, Gallery, Blog, About, Contact, Privacy Policy, Terms & Conditions",
      "WooCommerce store setup + product listings (image refinement, details, product SEO)",
      "HubSpot integration - order & deal management",
      "Speed, security & SEO optimisation plugins",
      "Complete 1 Year Bundle: Domain, Hosting, and Professional Email",
      "HubSpot integration - form submissions & live visitor chat",
    ],
  },
  {
    slug: "marketing - funnels",
    name: "High Converting Marketing Funnels",
    icon: "filter",
    price: 10000,
    priceLabel: "from ₹10,000",
    short:
      "Conversion optimised funnels for services and products - landing pages, upsells, and automated nurturing.",
    deliverables: [
      "WordPress / Next.js / custom PHP funnel websites",
      "System.io & SuperProfile.bio funnel setups",
      "Conversion - optimised landing pages with CTAs & lead magnets",
      "Sales funnel strategy - awareness → interest → decision → purchase",
      "CRM & email integration - HubSpot, Zoho, Omnisend",
      "Payment gateway integration - Stripe, PayPal, Razorpay",
      "Analytics & tracking - GA4, Facebook Pixel, heatmaps",
      "Upsell, cross-sell & membership/course funnels",
      "Complete 1 Year Bundle: Domain, Hosting, and Professional Email",
    ],
  },
  {
    slug: "omnisend",
    name: "Omnisend Integration",
    icon: "send",
    price: 10000,
    priceLabel: "from ₹10,000",
    short:
      "Email, SMS & push marketing set up end-to-end so every campaign lands in the inbox and converts.",
    deliverables: [
      "Account setup - branding, sender domains, compliance",
      "Custom responsive email templates",
      "SMS & push notification integration",
      "E-commerce store integration - Shopify, WooCommerce, Magento",
      "CRM & lead capture - signup forms, popups, HubSpot/Zoho sync",
      "Automation workflows - welcome, abandoned cart, post-purchase, re-engagement",
      "Audience segmentation & A/B testing",
      "Analytics dashboards & KPIs",
      "Deliverability optimisation - SPF/DKIM, sender reputation, list hygiene",
      "Custom API integrations & training + support",
    ],
  },
  {
    slug: "whatsapp - crm",
    name: "WhatsApp CRM Hosting & Integration",
    icon: "message - circle",
    price: 10000,
    priceLabel: "from ₹10,000",
    short:
      "Put every conversation on your website subdomain with a full WhatsApp CRM - shared inbox, pipelines, broadcasts and AI replies.",
    deliverables: [
      "WhatsApp CRM on your website subdomain",
      "Meta Business profile + WhatsApp API creation & integration",
      "Complete 1 Year Bundle: VPS Hosting",
      "Shared inbox - assign threads, reply as a team, internal notes",
      "Contact hub - tags, custom fields, notes, CSV import, auto deduplication",
      "Sales pipelines - drag deals through stages",
      "Broadcast campaigns - Meta-approved templates with real-time tracking",
      "No-code automations - visual flow builder",
      "AI reply assistant - bring your own OpenAI or Anthropic key",
      "Real-time analytics - response times, volume, pipeline value",
    ],
  },
  {
    slug: "ai - automation",
    name: "AI Automation with n8n",
    icon: "bot",
    price: 20000,
    priceLabel: "from ₹20,000",
    short:
      "Automate the busywork - lead capture, data sync, chatbots and reports that run themselves with n8n.",
    deliverables: [
      "n8n workflow setup - lead generation, notifications, data processing",
      "API integrations - CRM, ERP, SaaS tools",
      "AI-powered automation - OpenAI, Hugging Face",
      "CRM & marketing automation - HubSpot, Zoho, Omnisend",
      "E-commerce automation - order processing, abandoned cart recovery",
      "Social media automation - scheduling, DM auto-reply",
      "Data sync & ETL, notifications & alerts",
      "Custom AI chatbots connected to CRMs, support systems or WhatsApp",
      "Analytics, document & file automation",
      "Training & support + 1 year VPS hosting",
    ],
  },
];

export const PRICE_NOTE = "All service prices are starting prices.";

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery Call",
    duration: "Day 1",
    description:
      'We talk through your business, goals, audience and competitors. I learn exactly what "done" looks like for you.',
    items: [
      "Free 30 min intro call",
      "Requirements mapping",
      "Scope & timeline estimate",
    ],
  },
  {
    step: "02",
    title: "Strategy & Planning",
    duration: "Days 2–4",
    description:
      "I translate your goals into a concrete plan - sitemap, page structure, tech stack, integrations and content checklist.",
    items: [
      "Sitemap & wireframes",
      "Tech stack selection",
      "Fixed price proposal",
    ],
  },
  {
    step: "03",
    title: "Design & Build",
    duration: "Weeks 1–3",
    description:
      "Modern, brand design followed by clean, fast, SEO-friendly development. You get a staging link to review as we go.",
    items: [
      "UI/UX design",
      "Development & integrations",
      "Weekly progress updates",
    ],
  },
  {
    step: "04",
    title: "Testing & Launch",
    duration: "Week 4",
    description:
      "Speed, security, mobile and SEO checks. Then we point your domain, connect email and go live together.",
    items: [
      "Quality assurance",
      "Speed & security audit",
      "Domain + email setup",
    ],
  },
  {
    step: "05",
    title: "Growth & Support",
    duration: "Ongoing",
    description:
      "Post-launch I keep everything running - updates, backups, and optional retainer work for improvements and marketing.",
    items: [
      "30 days free support",
      "Maintenance options",
      "Analytics & reporting",
    ],
  },
];

export const INDUSTRIES = [
  {
    group: "Small Businesses",
    icon: "store",
    description:
      "Restaurants, retail, gyms, salons, travel - get online and get booked.",
    items: [
      "Restaurants & cafés - menus, reservations, delivery",
      "Retail shops - e-commerce for clothing, electronics, furniture",
      "Gyms & fitness studios - schedules, memberships, booking",
      "Salons & spas - appointments, showcase, promotions",
      "Travel agencies - packages, itineraries, inquiries",
    ],
  },
  {
    group: "Professionals",
    icon: "briefcase",
    description:
      "Trust - building websites that turn searches into booked consultations.",
    items: [
      "Doctors & clinics - booking, patient info, telemedicine",
      "Lawyers & law firms - services, testimonials, contact forms",
      "Accountants & financial advisors - packages, consultations",
      "Architects & interior designers - portfolios, project showcases",
      "Tutors & coaches - courses, booking, payments",
    ],
  },
  {
    group: "Growing Enterprises",
    icon: "building",
    description:
      "Scalable web systems for teams that need to look bigger and sell faster.",
    items: [
      "Startups - branding, product showcase, investor relations",
      "Event planners - portfolios, packages, inquiry forms",
      "Real estate agents - listings, virtual tours, lead capture",
      "Freelancers - portfolio, contact, service offerings",
      "NGOs & charities - donation portals, campaigns, volunteers",
    ],
  },
];

export const TECH_STACK = [
  "WordPress",
  "PHP",
  "Next.js",
  "React",
  "TailwindCSS",
  "WooCommerce",
  "HubSpot",
  "n8n",
  "OpenAI",
  "Omnisend",
  "WhatsApp API",
  "Node.js",
  "Razorpay",
  "Stripe",
  "PayPal",
];

export const TESTIMONIALS = [
  {
    name: "Priya Verma",
    role: "Owner · Urban Spoon Café, Mumbai",
    quote:
      "Abhishek built our website and online ordering in two weeks. Bookings and delivery orders tripled within the first month. He explained everything in plain language and the site is lightning fast.",
  },
  {
    name: "Dr. Rohan Mehta",
    role: "Director · Mehta Family Clinic",
    quote:
      "Patients now book appointments online and the WhatsApp CRM keeps everything organised. It genuinely feels like we hired a full IT team, not one developer.",
  },
  {
    name: "Sarah Collins",
    role: "Founder · Collins Coaching",
    quote:
      "The funnel and email automation he set up doubled my webinar signups. He thinks about business results, not just pretty pages. Worth every rupee.",
  },
  {
    name: "Arjun Nair",
    role: "CEO · Nair Realty",
    quote:
      "Property enquiries now come in through clean landing pages straight into our CRM. Professional, fast, and reliable - rare in this space.",
  },
  {
    name: "Meera Iyer",
    role: "Principal · Bloom Events",
    quote:
      "Our portfolio site looks world - class and the booking flow is seamless. Abhishek treated our small event business like a big enterprise. Highly recommended.",
  },
  {
    name: "Vikram Singh",
    role: "Manager · FitZone Studio",
    quote:
      "Memberships, class schedules and payments all in one place. My members love it and I finally have systems that run themselves.",
  },
];

export const BLOG_POSTS = [
  {
    slug: "why-small-businesses-need-a-crm",
    title: "Why your small business needs a CRM before a bigger ad budget",
    excerpt:
      "You can throw money at ads all day, but if leads leak out of your WhatsApp and inbox, you are paying for customers you never talk to. Here is how to plug the leak.",
    category: "Business",
    readTime: "6 min read",
    date: "Jul 24, 2026",
    cover: "crm",
  },
  {
    slug: "wordpress-vs-nextjs",
    title:
      "WordPress vs Next.js: choosing the right foundation for your website",
    excerpt:
      "The stack you pick decides your speed, your SEO ceiling and your maintenance cost. I break down when WordPress wins and when Next.js is the smarter bet.",
    category: "Development",
    readTime: "8 min read",
    date: "Jul 12, 2026",
    cover: "stack",
  },
  {
    slug: "whatsapp-for-business",
    title: "WhatsApp Business API in 2026: the complete non-technical guide",
    excerpt:
      "From Meta business verification to template approval to the perfect broadcast - everything a business owner needs to know before going live on WhatsApp.",
    category: "Automation",
    readTime: "10 min read",
    date: "Jun 28, 2026",
    cover: "whatsapp",
  },
  {
    slug: "automate-first-30-days",
    title:
      "5 automations every service business should set up in its first 30 days",
    excerpt:
      "Welcome sequences, lead routing, follow-up nudges and invoice reminders - the small workflows that quietly add hours back to your week.",
    category: "Automation",
    readTime: "7 min read",
    date: "Jun 10, 2026",
    cover: "bot",
  },
  {
    slug: "landing-page-that-converts",
    title: "Anatomy of a landing page that converts (with real examples)",
    excerpt:
      "Headline, proof, objection handling, one clear CTA. The 9 building blocks I use on every funnel page and how to order them for maximum conversion.",
    category: "Marketing",
    readTime: "9 min read",
    date: "May 30, 2026",
    cover: "funnel",
  },
  {
    slug: "seo-checklist-2026",
    title:
      "The 2026 SEO checklist: what actually moves the needle for local businesses",
    excerpt:
      "Core Web Vitals, schema markup, local citations and content depth - I walk through the checks I run before any site goes live.",
    category: "SEO",
    readTime: "8 min read",
    date: "May 18, 2026",
    cover: "seo",
  },
];
