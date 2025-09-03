
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../pages/industries/CategoryPageLayout';

export const coachingTutoringData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Coaching & Tutoring",
        subtitle: "Manage enrollments, schedule classes, share study materials, and communicate with students and parents efficiently on WhatsApp.",
    },
    sections: [
        {
            type: 'centeredText',
            title: "Streamline Your Center's Operations",
            subtitle: `For coaching and tutoring centers, effective communication with a large number of students and parents is key. WhatsForm automates your administrative tasks so you can focus on teaching.`
        },
        {
            type: 'contentWithImage',
            subtitle: 'ENROLLMENT & BATCH MANAGEMENT',
            title: 'Effortless Student Onboarding',
            text: 'Use a conversational WhatsApp form to handle new student inquiries and registrations. An AI bot can provide course details, answer fee-related questions, and guide them through the enrollment process for different batches.',
            image: 'https://picsum.photos/seed/coach1/500/400',
            features: [
                "Automated inquiry handling and lead capture",
                "Conversational enrollment forms",
                "Easy batch selection and registration",
                "Automated fee payment reminders"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'COMMUNICATION & MATERIAL DISTRIBUTION',
            title: 'Your Digital Notice Board and Library',
            text: 'Send class schedule updates, test announcements, and other important information to entire batches at once using broadcasts. Share study notes, assignments, and practice papers as PDFs directly on WhatsApp.',
            image: 'https://picsum.photos/seed/coach2/500/400',
            reverse: true,
            features: [
                "Broadcast announcements to specific batches",
                "Share study materials and assignments",
                "Collect student queries and doubts",
                "Keep parents informed and engaged"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Center",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Increased Enrollments",
                    description: "A simple and responsive inquiry and registration process attracts more students."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Reduced Admin Work",
                    description: "Save hours of administrative time by automating enrollments, reminders, and announcements."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Improved Communication",
                    description: "Ensure important information reaches all students and parents reliably and instantly."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Enhanced Student Experience",
                    description: "Provide a modern and convenient communication channel that students and parents appreciate."
                }
            ]
        }
    ],
    relevantForms: [
        'Batch Enroll',
        'Pay Fee',
        'Student Feedback',
        'Test and Assessment',
        'Back Exam Enrollment'
    ],
    closing: {
        title: "Ready to take your coaching center to the next level?",
        subtitle: "Discover how WhatsForm can help you manage your operations and communication more effectively.",
        cta: "Book a Demo"
    }
};