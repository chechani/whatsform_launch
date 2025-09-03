
import { CheckCircleIcon } from '../../icons';

export const tasksPageData = {
    hero: {
        title: "Streamline Your Workflow with Integrated Task Management",
        subtitle: "Turn conversations into actionable tasks, manage projects, and track progress from start to finish—all within one unified platform.",
    },
    sections: [
        {
            type: 'centeredText',
            title: "Is Your Team Drowning in Disorganized Work?",
            subtitle: `When tasks are scattered across chats, emails, and sticky notes, it leads to missed deadlines, unclear responsibilities, and wasted time. WhatsForm Tasks brings structure and clarity to your team's workflow.`
        },
        {
            type: 'contentWithImage',
            subtitle: 'YOUR CENTRAL HUB FOR PRODUCTIVITY',
            title: 'From Conversation to Completion',
            text: 'Effortlessly create tasks from any conversation. Assign them to team members, set deadlines, and track their status in a clear, visual dashboard. See everything that’s Pending, Overdue, or Completed at a glance.',
            image: 'https://picsum.photos/seed/tasks1/500/400',
            features: [
                "Create & assign tasks instantly",
                "Set priorities, importance, and deadlines",
                "Track status with a visual dashboard",
                "Filter tasks assigned to you or your team"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'EVERY DETAIL, PERFECTLY ORGANIZED',
            title: 'All the Context You Need, in One Place',
            text: 'Each task is a rich, detailed card containing everything needed to get the job done. Add comprehensive descriptions, define clear schedules with start and end dates, and categorize tasks for better organization.',
            image: 'https://picsum.photos/seed/tasks2/500/400',
            reverse: true,
            features: [
                "Add detailed task descriptions and instructions",
                "Define clear schedules and expected durations",
                "Use categories for easy filtering and reporting",
                "Eliminate ambiguity and endless clarification emails"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'COLLABORATE WITH CONTEXT',
            title: 'Keep Discussions and Documents Together',
            text: "Stop searching through scattered files and chats. With WhatsForm Tasks, you can attach relevant documents directly to a task and hold discussions in a dedicated activity feed. Every conversation and file is linked to the work it relates to.",
            image: 'https://picsum.photos/seed/tasks3/500/400',
            features: [
                "Attach files, documents, and images to tasks",
                "Hold task-specific discussions in an activity log",
                "Maintain a complete, auditable history of every task",
                "Keep your team aligned and informed"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Business",
            subtitle: "An integrated task management system delivers powerful improvements to your team's performance.",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Total Accountability",
                    description: "Clear assignments and deadlines ensure everyone knows exactly what they are responsible for."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Increased Efficiency",
                    description: "Less time spent searching for information and clarifying work means more time for execution."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Never Miss a Deadline",
                    description: "Centralized tracking and status views keep every project on schedule and highlight what needs attention."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Seamless Collaboration",
                    description: "With all communication and files in one place, teamwork becomes smoother and more effective."
                }
            ]
        }
    ],
    closing: {
        title: "Stop Chasing Tasks. Start Completing Them.",
        subtitle: "Bring clarity, accountability, and efficiency to your team's workflow today.",
        cta: "Explore Task Management"
    }
};