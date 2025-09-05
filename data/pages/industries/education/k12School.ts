
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../components/_CategoryPageLayout';

export const k12SchoolData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for K-12 Schools",
        subtitle: "Streamline admissions, automate fee reminders, and enhance parent-teacher communication on a secure and accessible platform.",
    },
    sections: [
        {
            type: 'centeredText',
            title: "Modernizing School Communication",
            subtitle: `Engage parents and manage administrative tasks more efficiently by moving key communications to WhatsApp, the app every parent already uses.`
        },
        {
            type: 'contentWithImage',
            subtitle: 'ADMISSIONS & ENROLLMENT',
            title: 'A Seamless Admissions Process',
            text: 'Simplify the inquiry and application process for prospective parents. An AI bot can answer common questions about your school 24/7, and a conversational form can guide parents through the admission application, including document uploads.',
            image: 'https://picsum.photos/seed/school1/500/400',
            features: [
                "24/7 AI-powered admissions helpdesk",
                "Conversational application forms",
                "Secure document collection for admissions",
                "Automated status updates for applicants"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'PARENT COMMUNICATION',
            title: 'Keep Parents Informed and Engaged',
            text: 'Go beyond the school diary. Send important announcements, circulars, and event invitations directly to parents\' WhatsApp. Collect RSVPs for Parent-Teacher meetings and send automated reminders to ensure high participation.',
            image: 'https://picsum.photos/seed/school2/500/400',
            reverse: true,
            features: [
                "Instant broadcast of circulars and announcements",
                "Automated PTM scheduling and reminders",
                "Collect feedback through conversational surveys",
                "Secure and reliable communication channel"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your School",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Improved Parent Engagement",
                    description: "Communicate with parents on their preferred platform, leading to higher engagement and satisfaction."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Increased Efficiency",
                    description: "Reduce administrative workload by automating admissions inquiries, fee reminders, and announcements."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Faster Admissions",
                    description: "A streamlined, digital application process attracts more applicants and speeds up enrollment."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Reduced Paperwork",
                    description: "Digitize forms and document collection, making your administrative processes more eco-friendly and efficient."
                }
            ]
        }
    ],
    relevantForms: [
        'School Reg',
        'Admission',
        'Pay Fee',
        'PTM',
        'Extra Activities',
        'Student Feedback'
    ],
    closing: {
        title: "Ready to build a smarter, more connected school community?",
        subtitle: "Discover how WhatsForm can transform your school's communication and administrative workflows.",
        cta: "Book a Demo for Schools"
    }
};

