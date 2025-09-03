

import { InboxIcon, UsersIcon, SparklesIcon, CalendarIcon, SendMessageIcon, TemplateIcon, CheckCircleIcon } from '../../icons';

export const teamInboxPageData = {
    hero: {
        title: "Team Inbox: Your Centralized Command Center",
        subtitle: "Transform chaotic WhatsApp threads into a streamlined, high-performance workspace for sales, support, and collaboration.",
    },
    sections: [
        {
            type: 'centeredText',
            title: "Stop Drowning in a Sea of Scattered Messages",
            subtitle: `Managing hundreds of daily chats from sales inquiries to customer support can feel overwhelming. It's easy for teams to lose track, miss follow-ups, or get buried. The WhatsForm Team Inbox was built to solve this.`
        },
        {
            type: 'contentWithImage',
            subtitle: 'COLLABORATE SEAMLESSLY',
            title: 'Bring Structure, Speed, and Visibility to Every Conversation',
            text: 'The Team Inbox ensures nothing slips through the cracks. Assign chats to the right team members, add internal notes for context, and track the status of every conversation from "Open" to "Resolved."',
            image: 'https://picsum.photos/seed/inbox1/500/400',
            features: [
                "Assign chats to specific agents or teams",
                "Add private notes for internal collaboration",
                "Track conversation status (Open, Pending, Resolved)",
                "Get a clear view of your team's workload"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'BOOST EFFICIENCY',
            title: 'Respond Faster and More Consistently',
            text: 'Empower your team to handle more conversations in less time. Use pre-approved message templates for common queries, create quick replies for instant answers, and leverage WhatsApp forms to collect structured data without back-and-forth.',
            image: 'https://picsum.photos/seed/inbox2/500/400',
            reverse: true,
            features: [
                "Use message templates for consistent communication",
                "Create canned responses for frequently asked questions",
                "Embed interactive forms to collect data instantly",
                "Reduce average response times"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "An All-in-One Workspace",
            subtitle: "The Team Inbox isn't just a chat tool; it's a productivity hub designed to turn conversations into conversions.",
            benefits: [
                {
                    icon: InboxIcon,
                    title: "Manage in One Place",
                    description: "Consolidate all chats, which you can easily categorize and filter to stay organized."
                },
                {
                    icon: SendMessageIcon,
                    title: "Automate Follow-ups",
                    description: "Schedule reminders and tasks so leads and opportunities never fall through the cracks."
                },
                {
                    icon: CalendarIcon,
                    title: "Streamline Workflows",
                    description: "Schedule calls and manage contacts with built-in calendar and CRM functionality."
                },
                {
                    icon: UsersIcon,
                    title: "Collaborate Seamlessly",
                    description: "Keep everyone on the same page with assignments, notes, and status tracking."
                }
            ]
        }
    ],
    closing: {
        title: "Ready to take control of your WhatsApp communication?",
        subtitle: "Discover how the Team Inbox can make teamwork on WhatsApp easy, fast, and effective.",
        cta: "Book a Demo"
    }
};