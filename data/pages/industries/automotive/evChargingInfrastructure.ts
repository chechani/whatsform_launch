
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../components/_CategoryPageLayout';

export const evChargingInfrastructureData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for EV & Charging Infrastructure",
        subtitle: `Help EV drivers find charging stations, manage usage inquiries, and get real-time support, all through a simple WhatsApp interface.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Powering the Future of Mobility",
            subtitle: "As the EV ecosystem grows, providing a seamless and reliable charging experience is crucial. WhatsForm helps you support EV drivers on their journey."
        },
        {
            type: 'contentWithImage',
            subtitle: 'CHARGING STATION LOCATOR & STATUS',
            title: 'Find and Use a Charger, with Ease',
            text: 'Allow EV drivers to find the nearest available charging station by sharing their location on WhatsApp. An AI bot can check the real-time status of chargers (available, in-use, or out of service) and provide directions.',
            image: 'https://picsum.photos/seed/ev1/500/400',
            features: [
                "Location-based charging station finder",
                "Real-time charger availability status",
                "Provide details on charger type and cost",
                "Improve the user experience for EV drivers"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'SESSION MANAGEMENT & SUPPORT',
            title: 'Your On-the-Go Charging Assistant',
            text: 'Enable users to start and stop a charging session via WhatsApp. Provide real-time updates on charging progress and send a notification when charging is complete. An AI bot can also troubleshoot common issues, like a failed connection.',
            image: 'https://picsum.photos/seed/ev2/500/400',
            reverse: true,
            features: [
                "Remote start/stop of charging sessions",
                "Real-time charging status notifications",
                "AI-powered troubleshooting for charging issues",
                "Easy payment and receipt generation"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Network",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Improved Driver Experience",
                    description: "A simple, reliable way to find and use chargers reduces 'range anxiety' and improves satisfaction."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Increased Station Utilization",
                    description: "Making it easier for drivers to find and use your stations leads to higher usage and revenue."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Reduced Support Overhead",
                    description: "Automate common inquiries and troubleshooting to reduce the burden on your support team."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Valuable Usage Data",
                    description: "Collect data on station usage and common issues to inform your network expansion and maintenance strategy."
                }
            ]
        }
    ],
    relevantForms: [
        'Service booking',
        'Support Ticket',
        'Complaint',
        'Feedback Form',
        'Payment Form'
    ],
    closing: {
        title: "Ready to supercharge your EV network?",
        subtitle: "Discover how WhatsForm can help you provide a world-class experience for electric vehicle drivers.",
        cta: "Book a Demo"
    }
};

