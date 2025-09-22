import type { CategoryPageData } from '@/components/_CategoryPageLayout';

export const evChargingInfrastructureData: CategoryPageData = {
    hero: {
        title: "Powering the Future with Smart EV Charging Solutions on WhatsApp",
        subtitle: "Manage and scale your EV charging network with Whatsform. Our platform helps you streamline operations, from site assessment to user support, all through the convenience of WhatsApp."
    },
    sections: [
        {
            type: 'centeredText',
            title: 'Energizing Your EV Charging Network'
        },
        ...[
            {
                title: "Site Assessment and Installation Requests",
                text: "Use WhatsApp forms to manage requests for new charging station installations. Collect site details, photos, and technical requirements to streamline the assessment and planning process.",
                image: "/images/solutions/site-assessment.png",
                features: []
            },
            {
                title: "User Registration and Onboarding",
                text: "Simplify the onboarding process for new EV drivers. Allow them to register, provide payment details, and learn how to use your charging stations through a simple WhatsApp interface.",
                image: "/images/solutions/user-onboarding.png",
                features: []
            },
            {
                title: "Charging Session Support and Troubleshooting",
                text: "Provide instant support to users experiencing issues with charging stations. Use forms to guide them through troubleshooting steps or to report a problem with a specific charger.",
                image: "/images/solutions/troubleshooting.png",
                features: []
            },
            {
                title: "Feedback and Network Improvement",
                text: "Collect feedback from users about their charging experience and suggestions for new station locations. Use this data to improve your service and expand your network strategically.",
                image: "/images/solutions/network-feedback.png",
                features: []
            }
        ].map((solution, index) => ({
            type: 'contentWithImage' as const,
            title: solution.title,
            subtitle: '',
            text: solution.text,
            image: solution.image,
            features: solution.features,
            reverse: index % 2 !== 0
        })),
        {
            type: 'benefitsGrid',
            title: 'Features for EV Charging Networks',
            benefits: [
                {
                    icon: "MapPin",
                    title: "Geolocation Capture",
                    description: "Automatically capture the location of users reporting issues or requesting new installations."
                },
                {
                    icon: "QrCode",
                    title: "QR Code Integration",
                    description: "Place QR codes on your charging stations that link to a WhatsApp form for support or payment."
                },
                {
                    icon: "Alert",
                    title: "Real-Time Alerts",
                    description: "Get instant alerts for new installation requests or support tickets."
                },
                {
                    icon: "Book",
                    title: "Knowledge Base Integration",
                    description: "Integrate with your knowledge base to provide users with instant answers to common questions."
                },
                {
                    icon: "BarChart",
                    title: "Usage Analytics",
                    description: "Track form submissions and user feedback to gain insights into your network's performance."
                },
                {
                    icon: "Globe",
                    title: "Multi-Language Support",
                    description: "Support a diverse user base with forms available in multiple languages."
                }
            ]
        }
    ],
    relevantForms: [],
    closing: {
        title: "Supercharge Your EV Network Management",
        subtitle: "Join the growing number of EV charging providers who are using Whatsform to enhance their operations and user experience.",
        cta: "Learn More"
    }
};
