
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../pages/industries/CategoryPageLayout';

export const higherEducationData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Higher Education",
        subtitle: "Transform the student journey from recruitment to alumni relations with intelligent, automated conversations on WhatsApp.",
    },
    sections: [
        {
            type: 'centeredText',
            title: "Engage the Next Generation of Students",
            subtitle: `In a competitive global market, universities and colleges must offer a modern, responsive, and personalized experience to attract and retain top talent.`
        },
        {
            type: 'contentWithImage',
            subtitle: 'STUDENT RECRUITMENT',
            title: 'Your 24/7 AI Admissions Advisor',
            text: 'Engage prospective students from around the world, anytime. An AI agent can answer queries about courses, eligibility, and scholarships, share virtual campus tours, and capture lead details for your admissions team, ensuring no inquiry is ever missed.',
            image: 'https://picsum.photos/seed/hedu1/500/400',
            features: [
                "24/7 lead capture from your website and ads",
                "AI-powered answers to admission FAQs",
                "Personalized course recommendations",
                "Seamlessly schedule calls with counselors"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'APPLICATION PROCESSING',
            title: 'A Frictionless, Mobile-First Application',
            text: 'Allow students to complete their entire application through a guided WhatsApp conversation. They can fill in details, upload transcripts and documents, and receive real-time status updates, all from their smartphone.',
            image: 'https://picsum.photos/seed/hedu2/500/400',
            reverse: true,
            features: [
                "Conversational application forms",
                "Secure document and certificate uploads",
                "Automated application status updates",
                "Integration with your student information system (SIS)"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Institution",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Increased Applications",
                    description: "A simple, mobile-first application process removes barriers and attracts more domestic and international students."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Reduced Admin Load",
                    description: "Automate routine inquiries and data entry, freeing up your admissions and support staff for high-value interactions."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Enhanced Student Experience",
                    description: "Provide the instant, on-demand communication that modern students expect, from inquiry to enrollment."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Improved Conversion Rates",
                    description: "A proactive, engaging, and supportive recruitment process nurtures leads more effectively through the funnel."
                }
            ]
        }
    ],
    relevantForms: [
        'Admission',
        'Scholarship App',
        'Batch Enroll',
        'Pay Fee',
        'Hostel Booking',
        'Project'
    ],
    closing: {
        title: "Ready to build the future of student communication?",
        subtitle: "Discover how WhatsForm can be customized to meet the unique needs of your institution.",
        cta: "Book a Demo for Higher Education"
    }
};