
import { CheckCircleIcon } from '../../icons';

export const calendarPageData = {
    hero: {
        title: "The Calendar Dashboard: Your WhatsApp Event Command Centre",
        subtitle: "The central hub for every scheduled activity, designed to ensure nothing ever falls through the cracks. Unify calls, meetings, and demos in one intelligent calendar.",
    },
    sections: [
        {
            type: 'centeredText',
            title: "From a Fast-Moving Feed to a Clear Timeline",
            subtitle: "WhatsApp moves fast. You schedule calls and meetings, only to see important follow-ups get lost in the chat feed. The WhatsForm Calendar brings order to this dynamic workflow, providing a clear, organized view of all scheduled activities so nothing gets missed. WhatsApp is where conversations start—the WhatsForm Calendar is where they stay on track."
        },
        {
            type: 'contentWithImage',
            subtitle: 'UNIFIED VIEW',
            title: 'Everything in One Place',
            text: 'Get a clear, consolidated view of all scheduled activities. See upcoming calls, confirmed meetings, and pending WhatsApp messages for your entire team at a glance. Filter by status, team member, or time to stay on top of your day.',
            image: 'https://picsum.photos/seed/calendar1/500/400',
            features: [
                "View calls, meetings, and messages",
                "Filter by Open, Closed, Missed, or Cancelled",
                "Toggle between team and personal ('Mine') views",
                "Grid and list layouts for easy viewing"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'SMART SCHEDULING & REMINDERS',
            title: 'Never Miss a Follow-Up',
            text: 'Schedule events with ease and let automation do the rest. When you book a call or meeting, WhatsForm can send automated WhatsApp confirmation and reminder messages to both your team member and the contact, drastically reducing no-shows.',
            image: 'https://picsum.photos/seed/calendar2/500/400',
            reverse: true,
            features: [
                "Easily add new events, calls, or meetings",
                "Automated WhatsApp reminders for participants",
                "Sync with your personal or team calendar (Coming Soon)",
                "Set recurring events for regular check-ins"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'ACTIONABLE AGENDAS',
            title: 'Purposeful Interactions, Every Time',
            text: "Don't just schedule an event—prepare for it. Each calendar entry allows you to add specific notes and tasks, like 'Confirm demo attendance and share agenda.' This ensures every call has a clear objective and your team is always prepared.",
            image: 'https://picsum.photos/seed/calendar3/500/400',
            features: [
                "Add notes and objectives to each event",
                "Assign tasks to team members for follow-up",
                "Mark tasks as complete to track progress",
                "Maintain a clear history of interactions"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'SEAMLESS TEAM COORDINATION',
            title: 'Assign, Track, and Manage with Ease',
            text: "The calendar is built for teamwork. Assign calls to specific team members and monitor their open tasks. Managers can get a high-level overview of team activity, while individuals can focus on their assigned responsibilities, ensuring accountability and balanced workloads.",
            image: 'https://picsum.photos/seed/calendar4/500/400',
            reverse: true,
            features: [
                "Assign events to specific team members",
                "Track status of assigned tasks in real-time",
                "Get a complete overview of your team's schedule",
                "Ensure smooth handoffs between team members"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Business",
            subtitle: "Integrating your schedule with your communication platform delivers powerful results.",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Increased Productivity",
                    description: "Reduce time spent on manual scheduling and follow-ups, allowing your team to focus on high-value conversations."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Higher Conversion Rates",
                    description: "A structured, timely follow-up process ensures no lead is dropped, moving prospects through the funnel faster."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Improved Customer Experience",
                    description: "Professional, timely communication and reminders build trust and show your customers you value their time."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Total Accountability",
                    description: "With clear assignments and status tracking, you always know who is responsible for the next step."
                }
            ]
        }
    ],
    closing: {
        title: "Ready to turn your calendar into your most powerful productivity tool?",
        subtitle: "See how WhatsForm's integrated calendar can bring structure, automation, and efficiency to your team.",
        cta: "Request a Demo"
    }
};
