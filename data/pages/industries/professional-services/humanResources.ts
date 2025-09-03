
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../pages/industries/CategoryPageLayout';

export const humanResourcesData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Human Resources",
        subtitle: `Enhance recruitment, streamline employee onboarding, and manage internal communications with powerful and efficient HR automation on WhatsApp.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Build a Better Employee Experience",
            subtitle: `From the first job application to daily internal communications, WhatsApp provides a direct and engaging channel to connect with candidates and employees.`
        },
        {
            type: 'contentWithImage',
            subtitle: 'RECRUITMENT & HIRING',
            title: 'A Faster, More Engaging Candidate Journey',
            text: 'Use WhatsApp to screen candidates and schedule interviews. A conversational form can handle initial screening questions, and an AI bot can check interviewer availability and schedule calls, keeping candidates engaged and speeding up your time-to-hire.',
            image: 'https://picsum.photos/seed/hr1/500/400',
            features: [
                "Conversational pre-screening of candidates",
                "Automated interview scheduling",
                "Send timely updates to applicants",
                "Improved candidate experience and brand perception"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'EMPLOYEE ONBOARDING & SUPPORT',
            title: 'A Seamless Welcome for New Hires',
            text: 'Automate your onboarding process with a guided WhatsApp journey. Send a welcome kit, collect necessary documents securely, and answer common questions with an AI-powered HR helpdesk, ensuring a smooth and positive start for every new employee.',
            image: 'https://picsum.photos/seed/hr2/500/400',
            reverse: true,
            features: [
                "Automated onboarding drip campaigns",
                "Secure collection of employee documents",
                "24/7 AI helpdesk for HR policy questions",
                "Streamlined leave requests and approvals"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your HR Department",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Faster Hiring Cycles",
                    description: "Automated screening and scheduling significantly reduce the time it takes to fill open positions."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Improved Employee Engagement",
                    description: "A modern, accessible communication channel improves satisfaction for both new and existing employees."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Reduced Administrative Load",
                    description: "Automate repetitive tasks like answering policy questions and processing leave requests."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Enhanced Compliance",
                    description: "Ensure all necessary onboarding documents are collected and stored securely and systematically."
                }
            ]
        }
    ],
    relevantForms: [
        'Job Application',
        'Employee Onboarding',
        'Leave',
        'Employee Feedback',
        'Grievance'
    ],
    closing: {
        title: "Ready to revolutionize your HR processes?",
        subtitle: "Discover how WhatsForm can help you build a more efficient and engaged workforce.",
        cta: "Book an HR Demo"
    }
};