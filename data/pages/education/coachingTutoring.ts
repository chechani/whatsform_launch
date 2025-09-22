
import type { CategoryPageData } from '@/components/_CategoryPageLayout';

export const coachingTutoringData: CategoryPageData = {
    hero: {
        title: "Elevate Your Coaching and Tutoring with WhatsApp Forms",
        subtitle: "Engage students, streamline admissions, and manage schedules effortlessly. Whatsform brings your entire educational workflow to WhatsApp, making it simpler for everyone."
    },
    sections: [
        {
            type: 'centeredText',
            title: 'Solutions for Modern Educators'
        },
        ...[
            {
                title: "Student Onboarding",
                text: "Simplify the admission process with easy-to-fill WhatsApp forms. Collect student details, course preferences, and necessary documents in one go.",
                image: "/images/solutions/student-onboarding.png",
                features: []
            },
            {
                title: "Class Scheduling and Reminders",
                text: "Allow students to book sessions and receive automated reminders on WhatsApp. Reduce no-shows and keep everyone on the same page.",
                image: "/images/solutions/scheduling.png",
                features: []
            },
            {
                title: "Fee Collection and Payments",
                text: "Send fee reminders and collect payments securely through WhatsApp. Integrate with payment gateways for a seamless transaction experience.",
                image: "/images/solutions/fee-collection.png",
                features: []
            },
            {
                title: "Feedback and Progress Reports",
                text: "Gather feedback from students and parents to improve your teaching methods. Share progress reports and updates directly through WhatsApp.",
                image: "/images/solutions/progress-reports.png",
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
            title: 'Features for Educational Excellence',
            benefits: [
                {
                    icon: "Users",
                    title: "Easy Student Management",
                    description: "Keep all student information organized and accessible."
                },
                {
                    icon: "Calendar",
                    title: "Automated Scheduling",
                    description: "Sync with your calendar to manage your time effectively."
                },
                {
                    icon: "CreditCard",
                    title: "Secure Payments",
                    description: "Offer a safe and convenient way for fee payments."
                },
                {
                    icon: "BarChart",
                    title: "Performance Analytics",
                    description: "Track student progress and your business growth with insightful analytics."
                },
                {
                    icon: "Message",
                    title: "Instant Communication",
                    description: "Engage with students and parents in real-time."
                },
                {
                    icon: "FileText",
                    title: "Digital Document Submission",
                    description: "Collect and manage documents without the hassle of paperwork."
                }
            ]
        }
    ],
    relevantForms: ["student-admission", "course-registration", "feedback-form"],
    closing: {
        title: "Transform Your Educational Institute Today",
        subtitle: "Ready to take your coaching or tutoring center to the next level? Whatsform is here to help you grow.",
        cta: "Get Started Now"
    }
};
