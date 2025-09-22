
import type { CategoryPageData } from '@/components/_CategoryPageLayout';

export const higherEducationData: CategoryPageData = {
    hero: {
        title: "Modernize University Operations with WhatsApp Forms",
        subtitle: "From admissions to alumni relations, Whatsform helps higher education institutions streamline processes and enhance communication with students and staff."
    },
    sections: [
        {
            type: 'centeredText',
            title: 'Solutions for a Smarter Campus'
        },
        ...[
            {
                title: "Student Admissions",
                text: "Simplify the application process for prospective students. Use WhatsApp forms to collect applications, documents, and application fees, making it easier for students from anywhere in the world to apply.",
                image: "/images/solutions/student-admissions-he.png",
                features: []
            },
            {
                title: "Course Registration and Enrollment",
                text: "Allow students to register for courses and manage their enrollment through WhatsApp. Send them confirmations and updates instantly.",
                image: "/images/solutions/course-registration-he.png",
                features: []
            },
            {
                title: "Campus Services and Support",
                text: "Provide students with easy access to campus services. Create forms for housing requests, library services, IT support, and more, all accessible via WhatsApp.",
                image: "/images/solutions/campus-services-he.png",
                features: []
            },
            {
                title: "Alumni Engagement and Donations",
                text: "Keep your alumni connected and engaged. Use WhatsApp forms for event registrations, newsletters, and donation drives. Make it easy for alumni to support their alma mater.",
                image: "/images/solutions/alumni-engagement-he.png",
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
            title: 'Features for the Modern University',
            benefits: [
                {
                    icon: "FileText",
                    title: "Digital Application Processing",
                    description: "Go paperless and manage all applications in a centralized dashboard."
                },
                {
                    icon: "CreditCard",
                    title: "Online Fee Payment",
                    description: "Integrate with payment gateways to securely collect fees."
                },
                {
                    icon: "Users",
                    title: "Student Information System (SIS) Integration",
                    description: "Sync student data with your existing SIS for seamless management."
                },
                {
                    icon: "Calendar",
                    title: "Event Management",
                    description: "Organize and manage registrations for campus events and webinars."
                },
                {
                    icon: "Shield",
                    title: "Data Security and Compliance",
                    description: "Ensure student data is protected and compliant with regulations."
                },
                {
                    icon: "Message",
                    title: "Mass Communication",
                    description: "Send important announcements and updates to students and staff."
                }
            ]
        }
    ],
    relevantForms: ["university-application", "course-enrollment", "campus-housing-request", "alumni-donation"],
    closing: {
        title: "Build a Connected Campus Community",
        subtitle: "Join leading universities in leveraging WhatsApp for better engagement and operational efficiency. See how Whatsform can benefit your institution.",
        cta: "Schedule a Consultation"
    }
};
