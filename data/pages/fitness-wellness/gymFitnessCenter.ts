

import type { CategoryPageData } from '@/components/_CategoryPageLayout';

export const gymFitnessCenterData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Gyms & Fitness Centers",
        subtitle: `Automate membership inquiries, manage class bookings, and send personal training reminders to keep your members engaged and motivated.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Building a Stronger Member Community",
            subtitle: "For gyms and fitness centers, member engagement is key to retention. WhatsForm helps you provide a convenient and supportive experience on the platform your members use every day."
        },
        {
            type: 'contentWithImage',
            subtitle: 'MEMBERSHIP & CLASS BOOKING',
            title: 'Your 24/7 Virtual Front Desk',
            text: 'Use an AI bot on WhatsApp to handle new membership inquiries, provide details on plans, and guide potential members through the sign-up process. Existing members can book classes or personal training sessions through a simple conversational flow.',
            image: 'https://picsum.photos/seed/gym1/500/400',
            features: [
                "24/7 automated membership inquiries",
                "Conversational class and PT session booking",
                "Automated reminders for classes and renewals",
                "Reduce workload on your front desk staff"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'MEMBER ENGAGEMENT',
            title: 'Keep Your Members Motivated',
            text: 'Use WhatsApp broadcasts to share fitness tips, announce new classes, or run fitness challenges. Personalized, automated messages can congratulate members on milestones, encouraging them to stay consistent with their fitness journey.',
            image: 'https://picsum.photos/seed/gym2/500/400',
            reverse: true,
            features: [
                "Broadcast new class schedules and announcements",
                "Run engaging fitness challenges and contests",
                "Send personalized motivation and milestone messages",
                "Build a strong and supportive gym community"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Fitness Center",
            benefits: [
                {
                    icon: "CheckCircleIcon",
                    title: "Increased Membership Sales",
                    description: "An instant, 24/7 inquiry process helps you capture and convert more potential members."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Improved Member Retention",
                    description: "Proactive engagement, easy booking, and a strong sense of community keep your members coming back."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Higher Class Attendance",
                    description: "Automated reminders for booked classes significantly reduce no-shows and improve class utilization."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Enhanced Efficiency",
                    description: "Automate routine administrative tasks, allowing your trainers and staff to focus on helping members."
                }
            ]
        }
    ],
    relevantForms: [
        'Fitness Membership',
        'Booking Form',
        'Training Inquiry',
        'Health Assessment',
        'Testimonial Feedback'
    ],
    closing: {
        title: "Ready to build a more engaged fitness community?",
        subtitle: "Discover how WhatsForm can help you streamline your operations and motivate your members.",
        cta: "Book a Demo"
    }
};

