
import type { CategoryPageData } from '@/components/_CategoryPageLayout';

export const edTechPlatformData: CategoryPageData = {
    hero: {
        title: "Enhance Your EdTech Platform with Seamless WhatsApp Integration",
        subtitle: "Integrate Whatsform with your EdTech solution to improve user engagement, streamline communication, and provide a superior learning experience."
    },
    sections: [
        {
            type: 'centeredText',
            title: 'Powering the Next Generation of Learning'
        },
        ...[
            {
                title: "User Onboarding and Demo Requests",
                text: "Convert visitors into users with simple WhatsApp forms for demo requests and trial sign-ups. Guide new users through the onboarding process with interactive forms.",
                image: "/images/solutions/user-onboarding-edtech.png",
                features: []
            },
            {
                title: "Course Inquiry and Lead Capture",
                text: "Capture leads from various channels and manage course inquiries effectively. Qualify leads and nurture them through automated WhatsApp communication.",
                image: "/images/solutions/lead-capture-edtech.png",
                features: []
            },
            {
                title: "Student and Educator Support",
                text: "Provide instant support to your users. Create forms for troubleshooting, feature requests, and general inquiries to improve user satisfaction.",
                image: "/images/solutions/support-edtech.png",
                features: []
            },
            {
                title: "Content and Feature Feedback",
                text: "Gather feedback on your courses, content, and platform features. Use insights from your users to drive product development and innovation.",
                image: "/images/solutions/feedback-edtech.png",
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
            title: 'Features for a Smarter EdTech Platform',
            benefits: [
                {
                    icon: "Integration",
                    title: "API and Webhook Integration",
                    description: "Seamlessly connect Whatsform with your existing platform and workflows."
                },
                {
                    icon: "Workflow",
                    title: "Automated Nurturing",
                    description: "Set up drip campaigns and automated follow-ups for your leads."
                },
                {
                    icon: "Message",
                    title: "Conversational Forms",
                    description: "Engage users with interactive and conversational data collection."
                },
                {
                    icon: "Users",
                    title: "User Segmentation",
                    description: "Segment your users based on their form responses for targeted communication."
                },
                {
                    icon: "BarChart",
                    title: "In-depth Analytics",
                    description: "Gain valuable insights into user behavior and preferences."
                },
                {
                    icon: "Globe",
                    title: "Scalable Solution",
                    description: "A robust platform that grows with your user base."
                }
            ]
        }
    ],
    relevantForms: ["demo-request", "lead-generation", "support-ticket", "feature-request"],
    closing: {
        title: "Integrate and Innovate with Whatsform",
        subtitle: "Take your EdTech platform to the next level. Partner with Whatsform to create a more engaging and efficient learning ecosystem.",
        cta: "Explore Partnership"
    }
};
