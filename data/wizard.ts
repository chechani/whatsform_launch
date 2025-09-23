import {
    WhatsAppIcon,
    UsersIcon,
    SendMessageIcon,
    WhatsAppBusinessIcon,
    BotIcon,
    HeadsetIcon,
    ArrowTrendingDownIcon,
    CalendarIcon,
    DocumentMinusIcon,
    ArrowsRightLeftIcon,
    TemplateIcon,
    ShieldCheckIcon,
    UserPlusIcon,
    EyeOffIcon,
    MegaphoneIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    FormsIcon,
    CalendarDaysIcon,
    ChartBarIcon,
    InboxIcon,
    CodeBracketIcon
} from '../icons';

export const strategyOptions = [
    { title: "Personal WhatsApp", description: `Using it for business communication, mixing it with personal chats.`, score: 0.5, icon: WhatsAppIcon },
    { title: "WhatsApp Groups", description: `Forming groups to coordinate with internal teams and clients.`, score: 0.5, icon: UsersIcon },
    { title: "WhatsApp Broadcasting", description: `Using broadcasting but facing limitations on personal WhatsApp.`, score: 1, icon: SendMessageIcon },
    { title: "Business WhatsApp API", description: `Using the Business API integrated with CRM/ERP.`, score: 2.5, icon: WhatsAppBusinessIcon },
    { title: "Chatbot Solutions", description: `Implemented chatbot flows for various customer journeys.`, score: 2, icon: BotIcon },
    { title: "Multi-Agent Support", description: `Multiple team members handle customer communication.`, score: 1.5, icon: HeadsetIcon },
    { title: "Limited Automation", description: `Lack of automation causes manual messaging and task handling.`, score: -1, icon: ArrowTrendingDownIcon },
    { title: "Auto Reminder", description: `Minimal Automation Leads to manual tasks and messaging.`, score: 1, icon: CalendarIcon },
];

export const challengeOptions = [
    { title: "No Message Trail", description: `Difficulty tracking conversations, leading to lost context and accountability.`, score: 0.4, icon: DocumentMinusIcon },
    { title: "Unstructured Communication", description: `Data and requests are scattered across chats, making them hard to manage.`, score: 0.4, icon: ArrowsRightLeftIcon },
    { title: "Limited Response Templates", description: `Inconsistent and slow responses to frequently asked questions.`, score: 0.3, icon: TemplateIcon },
    { title: "Contact Security", description: `Concerns about protecting customer data and privacy in chats.`, score: 0.3, icon: ShieldCheckIcon },
    { title: "Contact Inefficiency", description: `Manually managing and segmenting contacts is time-consuming.`, score: 0.4, icon: UserPlusIcon },
    { title: "No Customer Tracking", description: `Inability to track the customer journey or status effectively.`, score: 0.5, icon: EyeOffIcon },
    { title: "Delayed Responses", description: `Team members are overwhelmed, leading to slow response times.`, score: 0.5, icon: ArrowTrendingDownIcon },
    { title: "Broadcast Limits", description: `Struggling with the limitations of broadcasting messages to a large audience.`, score: 0.4, icon: MegaphoneIcon },
    { title: "Inconsistent Engagement", description: `Difficulty maintaining a consistent and professional brand voice.`, score: 0.3, icon: ChatBubbleOvalLeftEllipsisIcon },
    { title: "Unorganized Feedback", description: `Lack of structured forms leads to messy feedback collection and analysis.`, score: 0.5, icon: FormsIcon },
    { title: "Manual Follow-Ups", description: `Manual follow-up processes delay responses and miss deadlines.`, score: 0.5, icon: CalendarDaysIcon },
    { title: "No Customer Insights", description: `Missed opportunities to analyze customer interactions for better service.`, score: 0.5, icon: ChartBarIcon },
];

export const solutionOptions = [
    { title: "Unified Team Inbox", description: `Centralize all customer communication in a shared inbox for efficient collaboration.`, icon: InboxIcon },
    { title: "WhatsApp Forms", description: `Easily create and collect form responses on WhatsApp, similar to Google Forms.`, icon: FormsIcon },
    { title: "Enhanced Contacts", description: `Segment and assign contacts based on team roles and hierarchy.`, icon: UsersIcon },
    { title: "Canned Responses", description: `Use predefined responses for common queries, ensuring consistent communication.`, icon: ChatBubbleOvalLeftEllipsisIcon },
    { title: "Sequential Messaging", description: `Automate message sequences for marketing, support, or updates.`, icon: SendMessageIcon },
    { title: "Automated Mass Broadcast", description: `Broadcast messages to a large audience without the limitations of personal WhatsApp.`, icon: MegaphoneIcon },
    { title: "Chatbot Workflows", description: `Automate customer interactions using predefined chatbot journeys.`, icon: BotIcon },
    { title: "CRM-ERP Integration", description: `Sync WhatsApp communication with your CRM and ERP to enhance operational efficiency.`, icon: CodeBracketIcon },
    { title: "Record Management", description: `Organize, store, and retrieve customer records and form responses securely for compliance and efficiency.`, icon: DocumentMinusIcon },
];