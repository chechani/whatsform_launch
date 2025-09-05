
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../components/_CategoryPageLayout';

export const corporateTrainingData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Corporate Training",
        subtitle: "Automate training registrations, send pre-session materials and reminders, and collect valuable feedback to enhance your corporate learning programs.",
    },
    sections: [
        {
            type: 'centeredText',
            title: "Streamline Your Training Logistics",
            subtitle: `Deliver more effective and engaging corporate training programs by automating the administrative and communication workflows on WhatsApp.`
        },
        {
            type: 'contentWithImage',
            subtitle: 'REGISTRATION & ONBOARDING',
            title: 'Effortless Enrollment for Participants',
            text: 'Share a single WhatsApp link or QR code for training registration. A conversational form collects participant details and can automatically enroll them in a drip campaign to receive pre-reading materials and session details.',
            image: 'https://picsum.photos/seed/training1/500/400',
            features: [
                "Simple, conversational registration forms",
                "Automated distribution of pre-session materials",
                "Scheduled reminders to maximize attendance",
                "Integration with your LMS or calendar"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'POST-TRAINING ENGAGEMENT',
            title: 'Measure Impact and Reinforce Learning',
            text: 'After a session, automatically send a feedback form to participants on WhatsApp to gauge effectiveness. You can also send follow-up quizzes or short-form content to reinforce key learnings and measure knowledge retention.',
            image: 'https://picsum.photos/seed/training2/500/400',
            reverse: true,
            features: [
                "Automated post-training feedback surveys",
                "Quizzes and assessments to measure learning",
                "Drip campaigns for learning reinforcement",
                "Higher feedback response rates than email"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Programs",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Higher Attendance",
                    description: "Automated reminders on a high-visibility channel like WhatsApp significantly reduce no-shows."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Increased Efficiency",
                    description: "Save administrative hours by automating registration, communication, and feedback collection."
                },
                {
                    icon: CheckCircleIcon,
                    title: "More Effective Training",
                    description: "Post-session reinforcement and valuable feedback help you continuously improve your training programs."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Improved Participant Experience",
                    description: "Provide a modern, convenient, and seamless experience for all training participants."
                }
            ]
        }
    ],
    relevantForms: [
        'Training Registration',
        'Feedback Form',
        'Event RSVP',
        'Certification'
    ],
    closing: {
        title: "Ready to enhance your corporate training programs?",
        subtitle: "Discover how WhatsForm can automate your workflows and improve learner engagement.",
        cta: "Book a Demo"
    }
};

