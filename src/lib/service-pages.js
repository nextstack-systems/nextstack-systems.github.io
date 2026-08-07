//  -  -  -  -  -  Service detail page helpers  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - 
// Dedicated /services/<slug> pages. The slugs in SERVICES contain spaces (e.g.
// "business - website"); normalizeSlug turns them into URL-safe routes that match
// the documented examples (e.g. /services/business-website).
//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - 
export function normalizeSlug(slug) {
  return String(slug).replace(/\s+/g, '')
}

// Maps every service (keyed by normalized slug) to the industry groups and items
// from the INDUSTRIES array that the service fulfills. Each item pairs the exact
// INDUSTRIES label with a note explaining how the service addresses that need.
export const SERVICE_INDUSTRIES = {
  'business-website': [
    {
      group: 'Small Businesses',
      items: {
        'Restaurants & cafés - menus, reservations, delivery':
          'Menu-driven pages with reservation and delivery CTAs that turn local searches into bookings.',
        'Gyms & fitness studios - schedules, memberships, booking':
          'Class schedules and membership pages with clear sign-up prompts.',
        'Salons & spas - appointments, showcase, promotions':
          'A service showcase with an easy appointment flow that keeps your book full.',
        'Travel agencies - packages, itineraries, inquiries':
          'Package and itinerary pages that route enquiries straight to you.',
      },
    },
    {
      group: 'Professionals',
      items: {
        'Doctors & clinics - booking, patient info, telemedicine':
          'Patient-facing pages that build trust and capture appointments.',
        'Lawyers & law firms - services, testimonials, contact forms':
          'Credible service pages, testimonials and contact forms that win clients.',
        'Accountants & financial advisors - packages, consultations':
          'Package pages and consultation booking that make you look established.',
        'Architects & interior designers - portfolios, project showcases':
          'A visual portfolio that sells your design quality before the first meeting.',
        'Tutors & coaches - courses, booking, payments':
          'Course and booking pages that turn visitors into students.',
      },
    },
    {
      group: 'Growing Enterprises',
      items: {
        'Startups - branding, product showcase, investor relations':
          'A polished site that makes a young company look established.',
        'Freelancers - portfolio, contact, service offerings':
          'A portfolio that turns visitors into paid projects.',
        'Event planners - portfolios, packages, inquiry forms':
          'Portfolio and package pages with smooth enquiry capture.',
        'NGOs & charities - donation portals, campaigns, volunteers':
          'Campaign pages with donation and volunteer sign-up forms.',
      },
    },
  ],
  'online-store': [
    {
      group: 'Small Businesses',
      items: {
        'Retail shops - e-commerce for clothing, electronics, furniture':
          'A complete storefront with categories, product pages and checkout.',
        'Restaurants & cafés - menus, reservations, delivery':
          'Online ordering and delivery options built into your site.',
        'Gyms & fitness studios - schedules, memberships, booking':
          'Sell memberships and packages with automated billing.',
      },
    },
    {
      group: 'Professionals',
      items: {
        'Tutors & coaches - courses, booking, payments':
          'Sell courses and coaching packages with secure online payments.',
        'Accountants & financial advisors - packages, consultations':
          'Package offerings with online checkout and invoicing.',
      },
    },
    {
      group: 'Growing Enterprises',
      items: {
        'Startups - branding, product showcase, investor relations':
          'Launch products with a store wired into your CRM from day one.',
        'Event planners - portfolios, packages, inquiry forms':
          'Sell event packages directly from your portfolio pages.',
        'NGOs & charities - donation portals, campaigns, volunteers':
          'A donation store with recurring giving and campaign pages.',
      },
    },
  ],
  'marketing-funnels': [
    {
      group: 'Small Businesses',
      items: {
        'Restaurants & cafés - menus, reservations, delivery':
          'Promo landing pages that drive orders during slow hours.',
        'Salons & spas - appointments, showcase, promotions':
          'Offer-driven pages that fill your appointment book.',
        'Gyms & fitness studios - schedules, memberships, booking':
          'Membership funnels that turn leads into sign-ups.',
        'Travel agencies - packages, itineraries, inquiries':
          'Package landing pages with limited-time offers.',
      },
    },
    {
      group: 'Professionals',
      items: {
        'Doctors & clinics - booking, patient info, telemedicine':
          'Consultation funnels that pre-qualify patients before booking.',
        'Accountants & financial advisors - packages, consultations':
          'Tax-season and consultation funnels with lead magnets.',
        'Tutors & coaches - courses, booking, payments':
          'Webinar and course launch funnels with upsells.',
      },
    },
    {
      group: 'Growing Enterprises',
      items: {
        'Startups - branding, product showcase, investor relations':
          'Product launch and waitlist funnels that build momentum.',
        'Real estate agents - listings, virtual tours, lead capture':
          'Listing landing pages that capture serious buyer leads.',
        'Event planners - portfolios, packages, inquiry forms':
          'Enquiry funnels that qualify event leads before you call.',
        'NGOs & charities - donation portals, campaigns, volunteers':
          'Campaign funnels that convert donors and volunteers.',
      },
    },
  ],
  omnisend: [
    {
      group: 'Small Businesses',
      items: {
        'Retail shops - e-commerce for clothing, electronics, furniture':
          'Abandoned-cart emails and SMS that recover lost sales.',
        'Restaurants & cafés - menus, reservations, delivery':
          'Promo and re-engagement campaigns that drive repeat orders.',
        'Salons & spas - appointments, showcase, promotions':
          'Appointment reminders and rebooking campaigns.',
        'Gyms & fitness studios - schedules, memberships, booking':
          'Membership nurture flows and renewal reminders.',
      },
    },
    {
      group: 'Professionals',
      items: {
        'Tutors & coaches - courses, booking, payments':
          'Nurture sequences that turn prospects into enrolled students.',
        'Accountants & financial advisors - packages, consultations':
          'Segmented, compliant campaigns for packages and reminders.',
        'Doctors & clinics - booking, patient info, telemedicine':
          'Appointment reminders and health-tip email flows.',
      },
    },
    {
      group: 'Growing Enterprises',
      items: {
        'Startups - branding, product showcase, investor relations':
          'Launch announcements and feature updates to your waitlist.',
        'Event planners - portfolios, packages, inquiry forms':
          'Campaigns that promote packages and drive enquiries.',
        'Real estate agents - listings, virtual tours, lead capture':
          'New-listing alerts and drip campaigns for buyers.',
        'NGOs & charities - donation portals, campaigns, volunteers':
          'Donor stewardship and volunteer recruitment campaigns.',
      },
    },
  ],
  'whatsapp-crm': [
    {
      group: 'Small Businesses',
      items: {
        'Restaurants & cafés - menus, reservations, delivery':
          'Reservations and delivery orders managed in one shared inbox.',
        'Retail shops - e-commerce for clothing, electronics, furniture':
          'Order enquiries and support handled from WhatsApp.',
        'Gyms & fitness studios - schedules, memberships, booking':
          'Membership queries and renewals tracked as deals.',
        'Salons & spas - appointments, showcase, promotions':
          'Appointment bookings and reminders over WhatsApp.',
        'Travel agencies - packages, itineraries, inquiries':
          'Package enquiries moved through sales pipelines.',
      },
    },
    {
      group: 'Professionals',
      items: {
        'Doctors & clinics - booking, patient info, telemedicine':
          'Patient booking and follow-ups organised per patient.',
        'Lawyers & law firms - services, testimonials, contact forms':
          'Client conversations with internal notes and assignments.',
        'Accountants & financial advisors - packages, consultations':
          'Consultation leads tracked through clear pipelines.',
        'Tutors & coaches - courses, booking, payments':
          'Student enquiries converted into booked sessions.',
      },
    },
    {
      group: 'Growing Enterprises',
      items: {
        'Real estate agents - listings, virtual tours, lead capture':
          'Buyer leads captured and followed up on WhatsApp.',
        'Event planners - portfolios, packages, inquiry forms':
          'Event enquiries assigned to team members instantly.',
        'Freelancers - portfolio, contact, service offerings':
          'Every contact organised in one professional inbox.',
        'NGOs & charities - donation portals, campaigns, volunteers':
          'Donor and volunteer coordination at scale.',
      },
    },
  ],
  'ai-automation': [
    {
      group: 'Small Businesses',
      items: {
        'Restaurants & cafés - menus, reservations, delivery':
          'Order notifications and delivery updates automated.',
        'Retail shops - e-commerce for clothing, electronics, furniture':
          'Order processing and stock alerts on autopilot.',
        'Gyms & fitness studios - schedules, memberships, booking':
          'Membership renewals and reminder flows automated.',
        'Travel agencies - packages, itineraries, inquiries':
          'Itinerary delivery and enquiry routing automated.',
      },
    },
    {
      group: 'Professionals',
      items: {
        'Doctors & clinics - booking, patient info, telemedicine':
          'Appointment reminders and patient follow-ups automated.',
        'Accountants & financial advisors - packages, consultations':
          'Data collection, deadline reminders and reports automated.',
        'Tutors & coaches - courses, booking, payments':
          'Course enrolment and payment confirmations automated.',
      },
    },
    {
      group: 'Growing Enterprises',
      items: {
        'Startups - branding, product showcase, investor relations':
          'Lead enrichment and internal team notifications automated.',
        'Real estate agents - listings, virtual tours, lead capture':
          'New listings pushed automatically to your channels.',
        'Event planners - portfolios, packages, inquiry forms':
          'Enquiry triage and data sync across your tools.',
        'NGOs & charities - donation portals, campaigns, volunteers':
          'Donation data synced straight into your CRM.',
      },
    },
  ],
}
