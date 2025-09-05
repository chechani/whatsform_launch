
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../components/_CategoryPageLayout';

export const publicTransportData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Public Transport",
        subtitle: `Provide real-time route information, send service updates and alerts, and collect passenger feedback to improve the commuter experience.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Keeping Your City Moving",
            subtitle: "For public transport authorities, providing passengers with timely and accurate information is key to a smooth and reliable service. WhatsApp is the most accessible channel to keep your commuters informed."
        },
        {
            type: 'contentWithImage',
            subtitle: 'REAL-TIME INFORMATION',
            title: 'Your 24/7 Virtual Transit Assistant',
            text: 'Allow passengers to get real-time information on bus or train schedules by simply sending their location or route number to a WhatsApp bot. The bot can provide the next arrival time, details of the full route, and fare information instantly.',
            image: 'https://picsum.photos/seed/bus1/500/400',
            features: [
                "On-demand route and schedule information",
                "Real-time vehicle tracking and arrival times",
                "Instant answers to fare and ticketing questions",
                "Reduced anxiety and uncertainty for passengers"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'SERVICE ALERTS & FEEDBACK',
            title: 'Proactive Communication and Continuous Improvement',
            text: 'Use WhatsApp broadcasts to instantly inform passengers about service delays, route changes, or other disruptions. Use conversational forms to collect passenger feedback on service quality, cleanliness, and safety, helping you to continuously improve your transit system.',
            image: 'https://picsum.photos/seed/bus2/500/400',
            reverse: true,
            features: [
                "Proactive alerts for service disruptions",
                "Conversational forms for passenger feedback",
                "Easy reporting of issues or complaints",
                "Build a more responsive and passenger-centric service"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Transit System",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Improved Passenger Experience",
                    description: "Easy access to real-time information and proactive alerts make for a less stressful and more reliable journey."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Increased Ridership",
                    description: "A more reliable and user-friendly service encourages more people to choose public transport."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Reduced Support Inquiries",
                    description: "Self-service information options deflect a high volume of calls and queries to your support lines."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Data-Driven Improvements",
                    description: "Systematic feedback collection provides valuable insights for service planning and improvements."
                }
            ]
        }
    ],
    relevantForms: [
        'Feedback Transport',
        'Complaint',
        'Survey',
        'Service booking'
    ],
    closing: {
        title: "Ready to create a smarter public transport experience?",
        subtitle: "Discover how WhatsForm can help you better connect with and serve your passengers.",
        cta: "Book a Demo"
    }
};

