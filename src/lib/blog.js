export const COVER_COLORS = {
  crm: 'from-emerald-500/30 via-teal-500/20 to-transparent',
  stack: 'from-brand-500/30 via-indigo-500/20 to-transparent',
  whatsapp: 'from-[#25d366]/30 via-emerald-500/20 to-transparent',
  bot: 'from-fuchsia-500/25 via-brand-500/15 to-transparent',
  funnel: 'from-amber-500/25 via-orange-500/15 to-transparent',
  seo: 'from-accent-500/25 via-cyan-500/15 to-transparent',
}

export const BLOG_CONTENT = {
  'why-small-businesses-need-a-crm': {
    title: 'Why your small business needs a CRM before a bigger ad budget',
    category: 'Business',
    date: 'Jul 24, 2026',
    readTime: '6 min read',
    cover: 'crm',
    intro:
      "You can throw money at ads all day, but if leads leak out of your WhatsApp and inbox, you're paying for customers you never talk to. Here is how to plug the leak.",
    sections: [
      {
        heading: 'The leak you cannot see',
        body: 'Every enquiry that sits unreplied for a day is a sale that quietly walks to a competitor. Small businesses rarely lose to better products — they lose to slower follow-up. A CRM gives you one shared place where every enquiry lands, gets assigned and gets answered.',
      },
      {
        heading: 'WhatsApp is your customer front door',
        body: 'In markets like India, WhatsApp is where customers actually talk to you. A WhatsApp CRM pulls those conversations into pipelines, adds tags and notes, and never lets a lead fall through the gap between two team members. No more "I thought you were handling it".',
      },
      {
        heading: 'What a CRM changes in practice',
        body: 'Every conversation in one place. Deals dragged through stages so you can see what is winning and what is stuck. Broadcast campaigns that reach segmented lists with approved templates. And real-time analytics showing response times and pipeline value — the numbers that tell you what to fix first.',
      },
      {
        heading: 'Start before the ads',
        body: 'The most profitable order of operations is: fix the follow-up, then scale the traffic. Once enquiries convert reliably, every extra rupee of ad spend compounds. That is why I set up CRMs as a first step for most clients — the website and the ads come after the pipeline is ready.',
      },
    ],
    cta: 'Want the same setup for your business? Let\u2019s map your enquiry flow.',
  },

  'wordpress-vs-nextjs': {
    title: 'WordPress vs Next.js: choosing the right foundation for your website',
    category: 'Development',
    date: 'Jul 12, 2026',
    readTime: '8 min read',
    cover: 'stack',
    intro:
      'The stack you pick decides your speed, your SEO ceiling and your maintenance cost. I break down when WordPress wins and when Next.js is the smarter bet.',
    sections: [
      {
        heading: 'WordPress: the pragmatic workhorse',
        body: 'WordPress powers a huge share of the web for good reason. It is fast to build, easy for clients to edit, and has plugins for e-commerce, SEO and security. For a local business website, an online store or a marketing funnel, WordPress is usually the fastest path to a polished result — especially when WooCommerce and HubSpot are in the mix.',
      },
      {
        heading: 'Next.js: the performance ceiling',
        body: 'When speed and developer control matter most — custom products, SaaS-style sites, heavy personalisation, or a web app — Next.js with React and TailwindCSS is my go-to. Static generation gives sub-second loads and excellent Core Web Vitals, and the modern developer experience means the site is easy to extend later.',
      },
      {
        heading: 'A practical decision rule',
        body: 'If you need to update content yourself and want the ecosystem\'s plugin power, choose WordPress. If you need a bespoke, blazing-fast experience with a custom design, choose Next.js. And if you already have WordPress but it is slow, a Next.js rebuild can pay for itself in speed and conversions.',
      },
      {
        heading: 'Hybrid thinking',
        body: 'Many of my builds use both: a Next.js marketing front end backed by a headless CMS, or a WordPress admin powering a statically-generated site. The "right" answer depends on your content workflow, not on fashion.',
      },
    ],
    cta: 'Not sure which fits your project? Describe it to me and I\u2019ll recommend a stack.',
  },

  'whatsapp-for-business': {
    title: 'WhatsApp Business API in 2026: the complete non-technical guide',
    category: 'Automation',
    date: 'Jun 28, 2026',
    readTime: '10 min read',
    cover: 'whatsapp',
    intro:
      'From Meta business verification to template approval to the perfect broadcast — everything a business owner needs to know before going live on WhatsApp.',
    sections: [
      {
        heading: 'The API vs the app',
        body: 'The WhatsApp Business App is fine for a solo founder. But once you have a team, volumes of enquiries, or need automations, the WhatsApp Business API is the upgrade. It lives on your own infrastructure (I host it for clients on a subdomain), supports multiple agents, and lets you send approved template messages and run broadcasts.',
      },
      {
        heading: 'Verification and approvals',
        body: 'You will need a Meta Business account, a business phone number, and to pass Meta\u2019s business verification. Template messages — the only kind you can send proactively — go through Meta approval. Clean, honest templates get approved fast; anything spammy gets rejected. I handle all of this as part of the WhatsApp CRM setup.',
      },
      {
        heading: 'What changes in daily operations',
        body: 'A shared inbox where every thread is assigned and annotated. Pipelines that show deal stages. Automations that welcome new contacts, chase unanswered replies and route leads by keyword. And an AI assistant that drafts replies from your own knowledge base — handing off to a human when it cannot help.',
      },
      {
        heading: 'Costs and expectations',
        body: 'Meta charges per conversation for API usage. Setup includes the CRM, hosting and integration; there is also the VPS to run it. Budget-wise, this pays for itself the moment a single high-value deal that would otherwise be lost converts.',
      },
    ],
    cta: 'Want to put WhatsApp to work for your business? Let\u2019s talk about the CRM setup.',
  },

  'automate-first-30-days': {
    title: '5 automations every service business should set up in its first 30 days',
    category: 'Automation',
    date: 'Jun 10, 2026',
    readTime: '7 min read',
    cover: 'bot',
    intro:
      'Welcome sequences, lead routing, follow-up nudges and invoice reminders — the small workflows that quietly add hours back to your week.',
    sections: [
      {
        heading: '1. Welcome every new lead instantly',
        body: 'When a form or WhatsApp enquiry arrives, an automation sends an instant acknowledgment and routes the lead to the right person. Speed of first response is the single biggest lever on conversion — an automated greeting guarantees it happens in seconds.',
      },
      {
        heading: '2. Chase unanswered enquiries',
        body: 'Most sales are lost to forgetfulness, not disinterest. A simple workflow re-engages any thread that goes quiet for a set time — one polite nudge after 24 hours, another after 3 days. This alone recovers a meaningful share of "lost" deals.',
      },
      {
        heading: '3. Route leads by keyword',
        body: 'A visual flow builder can read incoming messages and route them: "website" goes to one pipeline, "support" to another, "pricing" triggers a link with your packages. Your team answers the right messages in the right order.',
      },
      {
        heading: '4. Invoice and payment reminders',
        body: 'Chasing invoices is unpaid work. Automate reminders before due dates and gentle follow-ups after. Your cash flow improves without a single awkward conversation.',
      },
      {
        heading: '5. Daily digest of what matters',
        body: 'Every morning, a message lands in your team channel: yesterday\u2019s response times, pipeline value, new contacts, unanswered threads. You stay on top of the business without opening five different apps.',
      },
    ],
    cta: 'I can have these running for you within days. Let\u2019s automate the busywork.',
  },

  'landing-page-that-converts': {
    title: 'Anatomy of a landing page that converts (with real examples)',
    category: 'Marketing',
    date: 'May 30, 2026',
    readTime: '9 min read',
    cover: 'funnel',
    intro:
      'Headline, proof, objection handling, one clear CTA. The 9 building blocks I use on every funnel page and how to order them for maximum conversion.',
    sections: [
      {
        heading: 'Start with the outcome',
        body: 'Your headline should name the transformation, not your company. "Book more appointments" beats "We offer booking software". Follow with a subline that removes doubt and a single, obvious call to action above the fold.',
      },
      {
        heading: 'Proof beats persuasion',
        body: 'Testimonials with names and numbers, case-study style results, and trust signals (clients, certifications, years) do more work than adjectives. Place proof right where objections form — after the promise, before the price.',
      },
      {
        heading: 'Handle objections head-on',
        body: 'The best pages pre-answer the questions customers would ask on a call: cost, timeline, risk, effort. An FAQ and a money-back or "free consultation" line remove friction at the moment of decision.',
      },
      {
        heading: 'One CTA, repeated deliberately',
        body: 'A single primary CTA repeated at natural decision points outperforms a page with five competing buttons. On every repeat, change the surrounding context — a benefit, a proof point — so the ask feels fresh, not nagging.',
      },
      {
        heading: 'Measure and iterate',
        body: 'Set up analytics, a pixel and heatmaps from day one. Run A/B tests on the headline, CTA copy and order of sections. A landing page is never finished — it is a compounding experiment.',
      },
    ],
    cta: 'Want a funnel built for your offer? Let\u2019s start with the strategy.',
  },

  'seo-checklist-2026': {
    title: 'The 2026 SEO checklist: what actually moves the needle for local businesses',
    category: 'SEO',
    date: 'May 18, 2026',
    readTime: '8 min read',
    cover: 'seo',
    intro:
      'Core Web Vitals, schema markup, local citations and content depth — I walk through the checks I run before any site goes live.',
    sections: [
      {
        heading: 'Speed is the baseline',
        body: 'Core Web Vitals — loading, interaction and visual stability — are ranking factors. A fast site also converts better. Every build I ship targets sub-second loads and green Lighthouse scores. This is not optimisation; it is the entry ticket.',
      },
      {
        heading: 'Schema helps Google understand you',
        body: 'Structured data (LocalBusiness, Service, FAQ, Product) helps search engines present you richly — star ratings, business hours, product prices in results. It is invisible to visitors and very visible to crawlers.',
      },
      {
        heading: 'Local wins for local businesses',
        body: 'For a café, clinic or gym, local search is where the traffic is. Consistent name, address and phone across directories, a Google Business Profile that is complete and current, and local content all compound. Reviews are part of the algorithm now — collect them deliberately.',
      },
      {
        heading: 'Content depth over page count',
        body: 'One genuinely useful page that answers the real question beats ten thin pages. Structure content with clear headings, answer follow-up questions inline, and keep every page focused on one intent.',
      },
      {
        heading: 'The checklist that never changes',
        body: 'Crawlability, unique titles and meta descriptions, image alt text, mobile perfection, clean URL structure and an XML sitemap. I run every one of these before any site goes live — and I do not stop checking after launch.',
      },
    ],
    cta: 'Want your site to actually rank? Let\u2019s run the checklist on your project.',
  },
}
