import type { FormTemplate } from './formsData';
import { formsData as rawForms } from './formsData';

// Map old/mixed categories to the canonical labels from the published list
const categoryMap: Record<string, string> = {
  'AutoMobile': 'Automobiles',
  'Automobile': 'Automobiles',
  'Automobiles': 'Automobiles',
  'Banking & NBFC': 'Banking And NBFC',
  'Creative and designing services': 'Creative and Designing Services',
  'Creative and Designing Services': 'Creative and Designing Services',
  'Entertainment & Media': 'Entertainment And Media',
  'Entertainment and Media': 'Entertainment And Media',
  'Fitness & Wellness': 'Fitness And Wellness',
  'Gift & Personalization Services': 'Gift and Personalization Service',
  'Gift & Personalization Service': 'Gift and Personalization Service',
  'IT & SaaS': 'IT And SaaS',
  'IT and SaaS': 'IT And SaaS',
  'Legal services': 'Legal Services',
  'Legal Services': 'Legal Services',
  'Logistics & Transport': 'Logistics And Transport',
  'Logistics and Transport': 'Logistics And Transport',
  'Pharma & Medical Supplier': 'Pharma and Medical Supplier',
  'Retail & Wholesale': 'Retail And Wholesale',
  'Solar & Renewable Energy': 'Solar And Renewable Energy',
  'Startup & Incubator': 'Startup and Incubator',
  'HR': 'Human Resource',
  'Business': 'Human Resource',
  'Restaurant': 'Restaurant',
  'E-commerce': 'E-commerce',
  'Ecommerce': 'E-commerce',
  'Education': 'Education',
  'Events': 'Events',
  'Healthcare': 'Healthcare',
  'Home Services': 'Home Services',
  'Personal Care': 'Personal Care',
  'Real Estate': 'Real Estate',
  'Retail And Wholesale': 'Retail And Wholesale',
  'Construction & Infrastructure': 'Construction And Infrastructure',
};

const keywordMap: Record<string, string> = {
  'site visit': 'Site Visit',
  'lab test': 'Lab Test',
  'product catalouge': 'Product Catalogue',
  'stock availability': 'Stock Availability',
  'request form': 'Request Form',
  'retail loyalty': 'Retail Loyalty',
  'retail store': 'Retail Store',
  'today ot': 'Today OT',
  'ot status': 'OT Status',
  'ot update': 'OT Update',
  'ot employe': 'OT Booking Employee',
  'dr unavailability': 'Doctor Unavailability',
  'amc subscription': 'AMC Subscription',
  'bike book': 'Bike Booking',
  'free trial': 'Free Trial',
  'webinar workshop': 'Webinar Workshop',
  'book hostel': 'Hostel Booking',
  'book table': 'Book Table',
  'visa01': 'Visa',
  'credit application': 'Credit Application',
  'service booking': 'Service Booking',
  'rsvp form': 'RSVP',
  'rsvp': 'RSVP',
  'data availability': 'Date Availability',
  'franchise onboarding': 'Franchisee Onboarding',
  'patients appointment': 'Patient Appointment',
  'patient registrant': 'Patient Registration',
  'property pay': 'Property Payment',
  'apply loan': 'Loan Application',
  'corporate gifting': 'Corporate Gifting',
  'test drive book': 'Test Drive Booking',
  'flight booking': 'Flight Booking'
};

const ACRONYMS = new Set([
  'OTP','API','CRM','KYC','GST','TDS','ROC','PAN','Aadhaar','AI','POD','AMC','FIR','OT','PTM','QSR','BOQ','RSVP','CA'
]);

function toTitleCase(s: string): string {
  return s
    .split(/([\s-/]+)/)
    .map((seg) => {
      if (/^[\s-/]+$/.test(seg)) return seg; // keep delimiters
      const clean = seg.toLowerCase();
      if (ACRONYMS.has(seg) || ACRONYMS.has(seg.toUpperCase())) return seg.toUpperCase();
      // preserve numbers
      if (/^\d/.test(seg)) return seg;
      return clean.charAt(0).toUpperCase() + clean.slice(1);
    })
    .join('')
    .replace(/\bAnd\b/g, 'And');
}

function normalizeCategory(category: string): string {
  return categoryMap[category] ?? toTitleCase(category);
}

function normalizeKeyword(keyword: string): string {
  const key = keyword.trim().toLowerCase();
  const mapped = keywordMap[key];
  if (mapped) return mapped;
  // Uppercase known acronyms inside
  const titled = toTitleCase(keyword);
  return titled;
}

export const formsData: FormTemplate[] = rawForms.map((f) => ({
  ...f,
  category: normalizeCategory(f.category),
  keyword: normalizeKeyword(f.keyword),
}));

export type { FormTemplate };

export const formCategories: string[] = [
  'All',
  ...Array.from(new Set(formsData.map((form) => form.category))).sort(),
];
