
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../components/_CategoryPageLayout';

export const realEstateAgencyData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Real Estate Agencies",
        subtitle: `Capture and qualify leads, schedule property viewings, and nurture client relationships with powerful automated workflows on WhatsApp.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Engage Buyers the Moment They Show Interest",
            subtitle: "In real estate, timing is everything. Our platform ensures you never miss an opportunity by engaging prospective buyers with an intelligent, 24/7 AI assistant."
        },
        {
            type: 'contentWithImage',
            subtitle: 'LEAD MANAGEMENT',
            title: 'Your 24/7 AI-Powered Sales Agent',
            text: 'When a prospect inquires via WhatsApp, our AI assistant engages them immediately. It understands their requirements (budget, location, property type), fetches matching listings from your database, and answers questions, turning a simple query into a qualified lead.',
            image: 'https://picsum.photos/seed/re-agency1/500/400',
            features: [
                "24/7 lead engagement & qualification",
                "Real-time integration with property inventory",
                "Natural language understanding for queries",
                "Seamless lead data capture into your CRM"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'AUTOMATED SITE VISIT SCHEDULING',
            title: 'Book Visits Without the Back-and-Forth',
            text: 'Once a buyer is interested, the bot can schedule a site visit directly in the chat. It shows available slots, books the appointment in your calendar, and sends automated confirmations and reminders, drastically reducing no-shows.',
            image: 'https://picsum.photos/seed/re-agency2/500/400',
            reverse: true,
            features: [
                "Automated calendar integration for scheduling",
                "Instant confirmations with location pin",
                "Automated pre-visit reminders to reduce no-shows",
                "Post-visit feedback collection"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Agency",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Faster Lead Response",
                    description: "Engage leads the moment they inquire, dramatically improving your chances of conversion."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Increased Efficiency",
                    description: "Automate scheduling and data collection, allowing your agents to focus on closing deals."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Enhanced Buyer Experience",
                    description: "Provide a modern, personalized, and on-demand service that builds trust and impresses clients."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Higher Conversion Rates",
                    description: "A seamless, responsive process keeps buyers nurtured and moves them through the sales funnel faster."
                }
            ]
        }
    ],
    relevantForms: [
        'site visit',
        'Property Inquiry',
        'Flat Booking',
        'Property Pay',
        'Agent Registration'
    ],
    closing: {
        title: "Ready to revolutionize your real estate sales process?",
        subtitle: "See how WhatsForm can help you sell more properties, faster than ever before.",
        cta: "Request a Demo"
    }
};

