
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../components/_CategoryPageLayout';

export const nutritionDieteticsData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Nutrition & Dietetics",
        subtitle: `Streamline client onboarding, automate consultation booking, and manage diet plan follow-ups to provide personalized and effective nutritional guidance.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Nourishing Client Relationships",
            subtitle: "For nutritionists and dietitians, consistent communication and support are key to helping clients achieve their goals. WhatsForm helps you manage your practice and engage your clients effectively."
        },
        {
            type: 'contentWithImage',
            subtitle: 'CLIENT ONBOARDING & CONSULTATION BOOKING',
            title: 'A Healthy Start to Every Client Journey',
            text: 'Use a conversational WhatsApp form for new client intake. Collect details about their health goals, dietary habits, and medical history in a structured way. An AI bot can then help them book their initial consultation based on your availability.',
            image: 'https://picsum.photos/seed/diet1/500/400',
            features: [
                "Conversational intake and consultation booking",
                "Secure collection of health and diet history",
                "Automated scheduling and reminders",
                "Reduced administrative time for your practice"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'PERSONALIZED MEAL PLANS & FOLLOW-UP',
            title: 'Support Your Clients on Their Journey',
            text: 'Deliver personalized diet plans directly to your clients\' WhatsApp. Use automated drip campaigns to send daily tips, motivational messages, and check-in forms to track their progress and keep them engaged.',
            image: 'https://picsum.photos/seed/diet2/500/400',
            reverse: true,
            features: [
                "Secure delivery of personalized diet plans",
                "Automated progress tracking and check-ins",
                "Motivational drip campaigns to keep clients on track",
                "Improved client adherence and results"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Practice",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Improved Client Outcomes",
                    description: "Consistent support and proactive follow-ups help your clients stay motivated and achieve their health goals."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Enhanced Efficiency",
                    description: "Automate client onboarding, scheduling, and routine check-ins to save time and manage more clients effectively."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Increased Client Retention",
                    description: "A supportive, convenient, and modern communication experience builds strong, long-term client relationships."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Professional Service",
                    description: "A streamlined, automated process enhances your professional image and client trust."
                }
            ]
        }
    ],
    relevantForms: [
        'Health Assessment',
        'Diet Consultation',
        'Booking Form',
        'Feedback Form',
        'Testimonial Feedback'
    ],
    closing: {
        title: "Ready to empower your clients on their wellness journey?",
        subtitle: "Discover how WhatsForm can help you provide a more supportive and efficient nutrition counseling service.",
        cta: "Book a Demo"
    }
};

