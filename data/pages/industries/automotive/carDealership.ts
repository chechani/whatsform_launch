
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../pages/industries/CategoryPageLayout';

export const carDealershipData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Car Dealerships",
        subtitle: `Accelerate your sales cycle by automating test drive bookings, managing sales inquiries 24/7, and streamlining finance applications on WhatsApp.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Drive Your Sales into the Fast Lane",
            subtitle: "In the competitive automotive market, a fast and responsive lead management process is crucial. WhatsForm helps you engage potential car buyers the moment they show interest."
        },
        {
            type: 'contentWithImage',
            subtitle: 'LEAD CAPTURE & TEST DRIVE BOOKING',
            title: 'Your 24/7 Virtual Sales Assistant',
            text: 'Use an AI-powered bot to handle initial inquiries from your website or ads. The bot can answer questions about car models, provide brochure downloads, and, most importantly, guide interested buyers through a conversational form to book a test drive.',
            image: 'https://picsum.photos/seed/auto1/500/400',
            features: [
                "24/7 automated lead qualification",
                "Conversational test drive booking forms",
                "Automated reminders to reduce no-shows",
                "Instant lead notification to your sales team"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'FINANCE & TRADE-IN VALUATION',
            title: 'A Smoother Road to Purchase',
            text: 'Simplify the pre-purchase process. Use WhatsApp forms to collect information for finance pre-approval or to get details about a customer\'s trade-in vehicle for an initial valuation. This prepares both the customer and your sales team for a productive visit.',
            image: 'https://picsum.photos/seed/auto2/500/400',
            reverse: true,
            features: [
                "Conversational forms for finance applications",
                "Easy collection of trade-in vehicle details",
                "Secure submission of necessary documents",
                "Speeds up the in-person sales process"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Dealership",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "More Qualified Leads",
                    description: "Instant, 24/7 engagement ensures you capture and qualify more high-intent buyers."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Increased Showroom Visits",
                    description: "A frictionless test drive booking process and automated reminders lead to more foot traffic."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Faster Sales Cycle",
                    description: "Streamlining the initial steps of the sales process helps your team close deals faster."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Improved Customer Experience",
                    description: "Provide a modern, convenient, and responsive service that impresses today's car buyers."
                }
            ]
        }
    ],
    relevantForms: [
        'Test Drive Book',
        'Car Inquiry',
        'Finance Assistance',
        'Service Appointment',
        'Sell Car'
    ],
    closing: {
        title: "Ready to accelerate your dealership's growth?",
        subtitle: "Discover how WhatsForm can help you sell more cars, faster.",
        cta: "Book a Demo"
    }
};