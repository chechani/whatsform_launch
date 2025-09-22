



const features = [
    { icon: "FormsIcon", title: "Form Response Management", description: `Manage, analyze, and act on every form submission from a single, intelligent workspace.`, link: "/form-responses" },
    { icon: "InboxIcon", title: "Team Inbox", description: `A centralized hub to manage all conversations, assign chats, add notes, and track status.`, link: "/team-inbox" },
    { icon: "CalendarIcon", title: "Calendar Dashboard", description: `Your command center for managing appointments, calls, meetings, and follow-ups.`, link: "/calendar" },
    { icon: "CheckBadgeIcon", title: "Integrated Task Management", description: `Assign tasks, track deadlines, and manage projects without leaving the platform.`, link: "/tasks" },
    { icon: "UsersIcon", title: "Contact Management", description: `Organize contacts, organizations, and business groups in a centralized system.`, link: "/contact-management" },
    { icon: "SendMessageIcon", title: "Automated Messaging", description: `Send broadcasts, sequential messages, reminders, and run drip campaigns.`, link: "/marketing" },
    { icon: "TemplateIcon", title: "Template Center", description: `Speed up messaging with pre-approved templates, quick replies, and a media library.`, link: "/templates" },
    { icon: "SparklesIcon", title: "AI-Powered Agents", description: `Utilize GPT for intelligent, context-aware conversations and data extraction.`, link: "/smarty-ai" },
    { icon: "CodeBracketIcon", title: "Backend Integrations (n8n)", description: `Connect to 200+ apps like CRMs, ERPs, and databases for real-time data sync.`, link: "/developer-docs" },
    { icon: "ArchitectureIcon", title: "Robust Architecture", description: `Built on the Frappe framework for flexibility, scalability, and security.`, link: "/developer-docs" },
    { icon: "NoCodeIcon", title: "'No-Code' Automation", description: `Design complex WhatsApp interactions with a visual flow builder, no coding required.`, link: "/powerful-forms" },
];

export const featuresPageData = {
    hero: {
        title: "The Complete Conversational Platform",
        subtitle: "Explore the powerful suite of features that enable you to build, manage, and scale your business communications on WhatsApp."
    },
    problemSolution: {
        problem: {
            title: "Is Your WhatsApp a Chaotic Mess?",
            text: `Businesses often struggle with disorganized data and communication on WhatsApp. This leads to scattered information, missed follow-ups, and overlooked opportunities, resulting in a 'chaos tax' of wasted time and lost revenue. Many are stuck juggling Excel sheets, Google Forms, and scattered messages.`
        },
        solution: {
            title: "Structured, Automated Workflows",
            text: `WhatsForm introduces an advanced, interactive form system designed to revolutionize workflows directly within WhatsApp. It’s a more powerful Google Forms, tailored for business automation, transforming every form action into a tangible outcome.`
        }
    },
    features: features
};