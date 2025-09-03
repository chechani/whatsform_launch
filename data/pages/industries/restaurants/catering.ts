
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../pages/industries/CategoryPageLayout';

export const cateringData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Catering Services",
        subtitle: `Streamline event inquiries, manage menu customizations, and confirm bookings with a professional and efficient WhatsApp workflow.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Serving Up a Five-Star Experience",
            subtitle: "For catering businesses, managing detailed client requirements and coordinating event logistics is key. WhatsForm helps you automate the inquiry-to-booking process so you can focus on creating amazing culinary experiences."
        },
        {
            type: 'contentWithImage',
            subtitle: 'EVENT INQUIRY & QUOTATION',
            title: 'Your 24/7 Virtual Event Planner',
            text: 'Use a conversational WhatsApp form to handle new catering inquiries. An AI bot can collect all the essential details—event type, date, number of guests, dietary restrictions—and provide an instant preliminary quote or route the lead to your sales team.',
            image: 'https://picsum.photos/seed/cater1/500/400',
            features: [
                "24/7 automated inquiry and lead capture",
                "Structured collection of event requirements",
                "Instant preliminary quotations for standard packages",
                "Faster response times to potential clients"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'MENU CUSTOMIZATION & BOOKING',
            title: 'Crafting the Perfect Menu, Together',
            text: 'Simplify the menu selection process. Share your menu options, including photos, on WhatsApp and allow clients to build their custom menu using an interactive form. Once finalized, you can confirm the booking and process the deposit payment, all within the chat.',
            image: 'https://picsum.photos/seed/cater2/500/400',
            reverse: true,
            features: [
                "Interactive menu selection and customization",
                "Seamless booking confirmation and payment",
                "Clear record of all client choices and agreements",
                "Reduce back-and-forth emails and phone calls"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Catering Business",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Increased Lead Conversion",
                    description: "An instant, professional response to inquiries helps you capture and convert more event leads."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Improved Efficiency",
                    description: "Automate the collection of event details and menu choices, saving your team significant administrative time."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Enhanced Client Experience",
                    description: "Provide a modern, convenient, and collaborative planning experience that delights your clients."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Reduced Errors",
                    description: "Structured forms ensure you capture all necessary details accurately, reducing the risk of miscommunication."
                }
            ]
        }
    ],
    relevantForms: [
        'Catering Booking',
        'Session Booking',
        'Bulk Food',
        'Package Pricing',
        'Review Feedback'
    ],
    closing: {
        title: "Ready to streamline your event catering business?",
        subtitle: "Discover how WhatsForm can help you manage inquiries and bookings more effectively.",
        cta: "Book a Demo"
    }
};