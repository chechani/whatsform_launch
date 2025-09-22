

import type { CategoryPageData } from '@/components/_CategoryPageLayout';

export const wellnessDiagnosticsData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Wellness & Diagnostics",
        subtitle: "Automate lab test bookings, deliver reports instantly, and manage wellness program communications on a single, convenient platform.",
    },
    sections: [
        {
            type: 'centeredText',
            title: "A Proactive Approach to Health",
            subtitle: `For diagnostic labs and wellness centers, making services accessible and providing timely information is key to empowering customers. WhatsApp automation streamlines the entire process, from booking to results.`
        },
        {
            type: 'contentWithImage',
            subtitle: 'TEST BOOKING & HOME COLLECTION',
            title: 'Convenience at Your Fingertips',
            text: 'Allow customers to book lab tests or schedule a home sample collection through a simple conversational form on WhatsApp. The bot can guide them through available tests, collect their address, and schedule a phlebotomist, all without a single phone call.',
            image: 'https://picsum.photos/seed/wellness1/500/400',
            features: [
                "Conversational test booking 24/7",
                "Automated home sample collection scheduling",
                "Pre-payment integration for seamless checkout",
                "Reduced workload for your booking staff"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'INSTANT & SECURE REPORT DELIVERY',
            title: 'Faster Access to Health Insights',
            text: 'As soon as test results are available, an automated workflow can securely deliver the report as a password-protected PDF to the customer\'s WhatsApp. This eliminates delays and the need for customers to visit the center to collect their reports.',
            image: 'https://picsum.photos/seed/wellness2/500/400',
            reverse: true,
            features: [
                "Secure, OTP-verified report delivery",
                "Instant notification as soon as results are ready",
                "Eliminates physical report collection",
                "Enhances customer convenience and trust"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Center",
            benefits: [
                {
                    icon: "CheckCircleIcon",
                    title: "Increased Bookings",
                    description: "An easy, conversational booking process removes friction and encourages more customers to use your services."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Improved Operational Efficiency",
                    description: "Automate booking and report delivery to free up your staff to focus on providing quality diagnostic services."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Enhanced Customer Satisfaction",
                    description: "Provide a modern, fast, and convenient experience that customers appreciate and return to."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Higher Engagement",
                    description: "Use WhatsApp to send health tips or reminders for regular check-ups, building a long-term wellness relationship."
                }
            ]
        }
    ],
    relevantForms: [
        'lab test',
        'Patient Test',
        'Health Assessment',
        'Diet Consultation',
        'Feedback & Testimonial Feedback'
    ],
    closing: {
        title: "Ready to make wellness more accessible and convenient?",
        subtitle: "Discover how WhatsForm can streamline your diagnostic and wellness services.",
        cta: "Book a Demo"
    }
};

