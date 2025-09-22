
import type { CategoryPageData } from '@/components/_CategoryPageLayout';

export const corporateTrainingData: CategoryPageData = {
    hero: {
        title: "Streamline Corporate Training with Interactive WhatsApp Forms",
        subtitle: "Deliver effective training programs, manage registrations, and gather feedback seamlessly with Whatsform, all within WhatsApp."
    },
    sections: [
        {
            type: 'centeredText',
            title: 'Solutions for Impactful Corporate Training'
        },
        ...[
            {
                title: "Training Registration",
                text: "Simplify the enrollment process for employees with easy-to-use WhatsApp forms. Capture attendee details and course selections efficiently.",
                image: "/images/solutions/training-registration.png",
                features: []
            },
            {
                title: "Pre-Training Assessments",
                text: "Gauge the existing knowledge of your participants with pre-training quizzes and surveys sent via WhatsApp to tailor your content effectively.",
                image: "/images/solutions/pre-assessment.png",
                features: []
            },
            {
                title: "Post-Training Feedback",
                text: "Collect valuable feedback on your training sessions to measure effectiveness and identify areas for improvement. Automate the feedback collection process with WhatsApp forms.",
                image: "/images/solutions/post-training-feedback.png",
                features: []
            },
            {
                title: "Certification and Compliance",
                text: "Manage certification processes and track compliance training for your workforce. Send reminders and collect necessary documentation through secure WhatsApp forms.",
                image: "/images/solutions/certification.png",
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
            title: 'Features Designed for Corporate Learning',
            benefits: [
                {
                    icon: "Clipboard",
                    title: "Easy Registration",
                    description: "A simple and quick way for employees to sign up for training."
                },
                {
                    icon: "CheckSquare",
                    title: "Automated Assessments",
                    description: "Create and distribute quizzes and assessments with ease."
                },
                {
                    icon: "TrendingUp",
                    title: "Real-Time Analytics",
                    description: "Track registration numbers, completion rates, and feedback scores."
                },
                {
                    icon: "Shield",
                    title: "Secure Data Management",
                    description: "Ensure all employee and training data is handled securely."
                },
                {
                    icon: "Integration",
                    title: "LMS and HRIS Integration",
                    description: "Connect with your existing systems for a unified workflow."
                },
                {
                    icon: "Award",
                    title: "Certification Tracking",
                    description: "Keep a digital record of all certifications and compliance."
                }
            ]
        }
    ],
    relevantForms: ["training-registration", "feedback-form", "compliance-checklist"],
    closing: {
        title: "Empower Your Workforce with Better Training",
        subtitle: "Discover how Whatsform can revolutionize your corporate training programs. Get in touch for a personalized demo.",
        cta: "Request a Demo"
    }
};
