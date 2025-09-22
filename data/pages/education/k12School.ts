
import type { CategoryPageData } from '@/components/_CategoryPageLayout';

export const k12SchoolData: CategoryPageData = {
    hero: {
        title: "Transform K-12 School Communication with WhatsApp Forms",
        subtitle: "Engage parents, manage student information, and streamline school operations with the power and simplicity of Whatsform on WhatsApp."
    },
    sections: [
        {
            type: 'centeredText',
            title: 'Solutions for Today’s K-12 Schools'
        },
        ...[
            {
                title: "Student Admission and Enrollment",
                text: "Make the admissions process easier for parents with online forms on WhatsApp. Collect student information, upload documents, and pay admission fees from anywhere.",
                image: "/images/solutions/student-admission-k12.png",
                features: []
            },
            {
                title: "Parent-Teacher Communication",
                text: "Facilitate seamless communication between parents and teachers. Use forms to schedule parent-teacher meetings, grant leave requests, and gather parental consent for school activities.",
                image: "/images/solutions/parent-teacher-comm-k12.png",
                features: []
            },
            {
                title: "School Fee Payments",
                text: "Simplify fee collection by sending reminders and payment links directly to parents on WhatsApp. Offer a variety of payment options for their convenience.",
                image: "/images/solutions/fee-payment-k12.png",
                features: []
            },
            {
                title: "Event Registration and Feedback",
                text: "Manage registrations for school events, sports, and clubs. After events, collect feedback from parents and students to make future events even better.",
                image: "/images/solutions/event-registration-k12.png",
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
            title: 'Features for a Connected School Ecosystem',
            benefits: [
                {
                    icon: "Users",
                    title: "Centralized Parent Communication",
                    description: "Keep all parent interactions in one place for easy tracking and follow-up."
                },
                {
                    icon: "FileText",
                    title: "Digital Forms and Documents",
                    description: "Reduce paperwork and administrative overhead with digital submissions."
                },
                {
                    icon: "CreditCard",
                    title: "Secure and Easy Fee Collection",
                    description: "A reliable and convenient way for parents to pay school fees."
                },
                {
                    icon: "Calendar",
                    title: "Automated Reminders",
                    description: "Send automated reminders for fees, meetings, and events."
                },
                {
                    icon: "Shield",
                    title: "Data Privacy for Students",
                    description: "Ensure all student and parent data is kept secure and confidential."
                },
                {
                    icon: "BarChart",
                    title: "Actionable Insights",
                    description: "Use data from forms to make informed decisions for your school."
                }
            ]
        }
    ],
    relevantForms: ["school-admission", "parent-consent-form", "leave-request", "event-signup"],
    closing: {
        title: "Create a Smarter School with Whatsform",
        subtitle: "Join the growing number of schools that are using WhatsApp to build stronger relationships with parents and improve efficiency.",
        cta: "Learn How"
    }
};
