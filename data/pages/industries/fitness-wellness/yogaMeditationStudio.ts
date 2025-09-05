
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../components/_CategoryPageLayout';

export const yogaMeditationStudioData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Yoga & Meditation Studios",
        subtitle: `Streamline class bookings, manage workshop registrations, and nurture your community with calm, automated communication on WhatsApp.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Cultivating a Mindful Community",
            subtitle: "For yoga and meditation studios, creating a serene and supportive environment is key. WhatsForm helps you extend that sense of calm to your administrative and communication processes."
        },
        {
            type: 'contentWithImage',
            subtitle: 'CLASS & WORKSHOP BOOKING',
            title: 'Effortless Scheduling for Your Members',
            text: 'Allow your members to view class schedules and book their spot for a yoga class or a special meditation workshop through a simple conversational flow on WhatsApp. Send automated reminders to ensure full attendance.',
            image: 'https://picsum.photos/seed/yoga1/500/400',
            features: [
                "Conversational class and workshop booking",
                "Automated reminders to reduce no-shows",
                "Easy management of class capacity",
                "Reduce administrative work for your staff"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'COMMUNITY ENGAGEMENT',
            title: 'Nurture Your Studio\'s Community',
            text: 'Use WhatsApp to share daily affirmations, short meditation guides, or information about upcoming retreats. This proactive, value-driven communication helps build a strong, engaged community around your studio.',
            image: 'https://picsum.photos/seed/yoga2/500/400',
            reverse: true,
            features: [
                "Share valuable content to engage your members",
                "Announce new workshops and special events",
                "Build a supportive and connected community",
                "Keep your studio top-of-mind for your members"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Studio",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Increased Class Attendance",
                    description: "An easy booking process and timely reminders ensure your classes are consistently well-attended."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Stronger Community",
                    description: "Regular, mindful communication on a personal channel helps build a loyal and engaged member base."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Improved Efficiency",
                    description: "Automate booking and communication, freeing you and your instructors to focus on teaching."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Higher Member Retention",
                    description: "A seamless, supportive experience makes members feel valued and encourages them to continue their practice with you."
                }
            ]
        }
    ],
    relevantForms: [
        'Booking Form',
        'Fitness Membership',
        'Training Inquiry',
        'Feedback Form',
        'Workshop Registration'
    ],
    closing: {
        title: "Ready to bring more harmony to your studio's operations?",
        subtitle: "Discover how WhatsForm can help you manage your studio and nurture your community.",
        cta: "Book a Demo"
    }
};

