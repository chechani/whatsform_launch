
import type { CategoryPageData } from '@/components/_CategoryPageLayout';

export const airlinesData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Airlines",
        subtitle: `Enhance the passenger journey with automated flight booking, mobile check-in, and real-time flight status updates on WhatsApp.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "A Smoother Journey from Booking to Boarding",
            subtitle: "For airlines, a seamless and informed passenger experience is key to building loyalty. WhatsForm helps you communicate effectively at every step of the journey."
        },
        {
            type: 'contentWithImage',
            subtitle: 'BOOKING & CHECK-IN',
            title: 'The Future of Flight Management',
            text: 'Allow passengers to search for flights, make bookings, and complete their check-in through a guided conversational flow on WhatsApp. Send boarding passes directly to their phone, eliminating the need for paper or separate apps.',
            image: 'https://picsum.photos/seed/air1/500/400',
            features: [
                "Conversational flight search and booking",
                "Automated web check-in flows",
                "Instant delivery of mobile boarding passes",
                "Upsell opportunities for seat selection and baggage"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'FLIGHT STATUS & ALERTS',
            title: 'Proactive Communication, Happier Passengers',
            text: 'Keep passengers informed with real-time, automated flight status updates. Send proactive notifications about gate changes, delays, or cancellations directly to their WhatsApp, reducing anxiety and improving the travel experience.',
            image: 'https://picsum.photos/seed/air2/500/400',
            reverse: true,
            features: [
                "Real-time, automated flight status alerts",
                "On-demand flight status checks via AI bot",
                "Proactive notifications for disruptions",
                "Reduced pressure on gate and call center staff"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Airline",
            benefits: [
                {
                    icon: "CheckCircleIcon",
                    title: "Enhanced Passenger Experience",
                    description: "A convenient, proactive, and seamless communication process improves passenger satisfaction and loyalty."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Lower Operational Costs",
                    description: "Automate check-in, status updates, and FAQs to significantly reduce call center and ground staff workload."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Increased Ancillary Revenue",
                    description: "Integrate upsell opportunities like preferred seating, extra baggage, and in-flight meals into the conversational flow."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Improved Crisis Communication",
                    description: "Quickly and effectively communicate with all affected passengers during large-scale disruptions."
                }
            ]
        }
    ],
    relevantForms: [
        'Flight booking',
        'Feedback Form',
        'Complaint',
        'Service booking'
    ],
    closing: {
        title: "Ready to elevate your passenger communication?",
        subtitle: "Discover how WhatsForm can help you create a world-class travel experience.",
        cta: "Book a Demo"
    }
};

