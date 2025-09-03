
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../pages/industries/CategoryPageLayout';

export const edTechPlatformData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for EdTech Platforms",
        subtitle: "Onboard new learners, provide instant course support, and drive engagement with scalable WhatsApp automation.",
    },
    sections: [
        {
            type: 'centeredText',
            title: "Scale Your Learning Community",
            subtitle: `For EdTech platforms, user engagement and support are key to retention. WhatsForm helps you create a seamless and supportive learning experience on the most accessible platform.`
        },
        {
            type: 'contentWithImage',
            subtitle: 'USER ONBOARDING & COURSE SELECTION',
            title: 'A Personalized Start to Learning',
            text: 'Guide new users through a conversational onboarding process. An AI agent can help them choose the right course based on their goals, answer questions about the curriculum, and complete the enrollment and payment process, all within WhatsApp.',
            image: 'https://picsum.photos/seed/edtech1/500/400',
            features: [
                "AI-powered course recommendations",
                "Conversational enrollment and payment",
                "Automated welcome and onboarding sequence",
                "Increased sign-up to activation rate"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: '24/7 LEARNER SUPPORT',
            title: 'Instant Help, Uninterrupted Learning',
            text: 'Provide instant support to your learners. An AI bot trained on your course content can answer common questions, troubleshoot technical issues, and provide links to relevant learning materials, ensuring students get the help they need without delay.',
            image: 'https://picsum.photos/seed/edtech2/500/400',
            reverse: true,
            features: [
                "24/7 support for technical and course-related queries",
                "Reduced workload for your support team",
                "Instant access to learning resources",
                "Improved learner satisfaction and retention"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Platform",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Higher Course Completion",
                    description: "Proactive support and engagement help keep learners motivated and on track to complete their courses."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Increased User Retention",
                    description: "A seamless and supportive user experience reduces churn and increases the lifetime value of a learner."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Scalable Support",
                    description: "Handle a growing user base without a proportional increase in your support team headcount."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Improved Engagement",
                    description: "Use WhatsApp for progress reminders, quizzes, and community announcements to keep learners engaged."
                }
            ]
        }
    ],
    relevantForms: [
        'Batch Enroll',
        'Pay Fee',
        'Student Feedback',
        'Certification',
        'Project'
    ],
    closing: {
        title: "Ready to build a more engaging learning experience?",
        subtitle: "Discover how WhatsForm can help you support and retain your users at scale.",
        cta: "Book an EdTech Demo"
    }
};