import { 
    FormsIcon, InboxIcon, CalendarIcon, UsersIcon, SendMessageIcon, TemplateIcon, SparklesIcon, 
    CodeBracketIcon, ArchitectureIcon, NoCodeIcon, CheckCircleIcon, ChatBubbleOvalLeftEllipsisIcon, ArrowsRightLeftIcon,
    CubeTransparentIcon, ChartBarIcon, MegaphoneIcon
} from '../icons';



export const uniqueFeatures = {
  title: "WhatsApp: Your Business, Simplified.",
  subtitle:
    `Build apps. Manage records. Automate workflows. All inside WhatsApp.`,
  pillars: [
    {
  icon: "ChatBubbleOvalLeftEllipsisIcon",
      title: "Conversational Applications",
      description:
        `Transform WhatsApp into a full application platform. Build complete business processes, data collection systems, and user interfaces that feel like native apps - all delivered through familiar chat conversations.`,
    },
    {
  icon: "SparklesIcon",
      title: "AI-Powered Business Operations",
      description:
        `Deploy intelligent agents that handle complex business logic, validate data in real-time, automate decision-making, and provide 24/7 assistance. Your WhatsApp becomes as smart as your business needs.`,
    },
    {
  icon: "ArrowsRightLeftIcon",
      title: "Universal Business Integration",
      description:
        `Connect every business tool through WhatsApp. CRMs, ERPs, databases, calendars, document systems - 200+ integrations ensure your conversations sync with your entire business ecosystem in real-time.`,
    },
    {
  icon: "CubeTransparentIcon",
      title: "Enterprise-Grade Data Platform",
      description:
        `Every conversation becomes structured data. Built on enterprise frameworks with dynamic schemas, audit trails, role-based access, and compliance features. Scale from startup to enterprise without limits.`,
    },
    {
  icon: "UsersIcon",
      title: "Collaborative Team Workspace",
      description:
        `Transform team communication with shared workspaces, project management, internal notes, task assignments, and seamless handoffs. Your entire team collaborates efficiently within WhatsApp.`,
    },
    {
  icon: "ArchitectureIcon",
      title: "No-Code Business Automation",
      description:
        `Build complex workflows without coding. Design multi-step processes, conditional logic, automated responses, and business rules through visual builders. Democratize automation for every team member.`,
    },
  ],
  cta: {
    text: "Explore All Features",
    path: "/features",
  },
};


export const benefits = [
  { icon: "CheckCircleIcon", title: "Higher Engagement", description: `Keep customers in their familiar WhatsApp environment, boosting response rates.` },
  { icon: "CheckCircleIcon", title: "Reduced Overhead", description: `Automate routine queries and data entry, freeing up your team for high-value tasks.` },
  { icon: "CheckCircleIcon", title: "Enhanced CX", description: `Provide personalized, 24/7 assistance and seamless interactions.` },
  { icon: "CheckCircleIcon", title: "Improved Compliance", description: `Maintain audit logs of all form submissions and agent interactions.` },
];

export const useCases = [ "Healthcare", "Education", "Government", "Logistics", "Retail & E-Commerce", "BFSI", "Real Estate", "Professional Services" ];


export const testimonialsData = [
  {
    quote:
      `WhatsForm has completely revolutionized how we run our clinic. Beyond just patient intake - we now handle appointments, medical histories, insurance verification, and follow-up care entirely through WhatsApp. Our staff productivity increased by 40% and patient satisfaction scores are at an all-time high.`,
    author: "Dr. Piysh Mantry",
    title: "KneeXpert - Complete Healthcare Operations",
    logoUrl: "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg",
    imageUrl: "https://picsum.photos/seed/person1/100/100",
    videoId: "zmxHz-hQ32E",
    videoThumbnail: "https://i.ytimg.com/vi/zmxHz-hQ32E/hqdefault.jpg",
  },
  {
    quote:
      `Our entire real estate business now runs through WhatsApp. Lead capture, property showcases, document collection, mortgage applications, legal processes - everything happens in one conversation. We've transformed from a traditional brokerage into a tech-enabled platform, closing 60% more deals.`,
    author: "Dr. Raj",
    title: "Sahaj Hospital - Digital Healthcare Platform",
    logoUrl: "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg",
    imageUrl: "https://picsum.photos/seed/person2/100/100",
  },
  {
    quote:
      `WhatsForm turned our WhatsApp into a complete business operating system. Inventory management, order processing, supplier coordination, customer support, team collaboration - our entire logistics operation runs through conversations. Manual processes are extinct, efficiency is through the roof.`,
    author: "Rajesh",
    title: "Eltech - Logistics & Supply Chain Platform",
    logoUrl: "https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg",
    imageUrl: "https://picsum.photos/seed/person3/100/100",
  },
];

export const features = [
  { icon: "FormsIcon", title: "Form Response Management", description: `Manage, analyze, and act on every form submission from a single, intelligent workspace.`, path: "/form-responses" },
  { icon: "InboxIcon", title: "Team Inbox", description: `A centralized hub to manage all conversations, assign chats, add notes, and track status.`, path: "/team-inbox" },
  { icon: "CalendarIcon", title: "Calendar Dashboard", description: `Your command center for managing appointments, calls, meetings, and follow-ups.`, path: "/calendar" },
  { icon: "CheckBadgeIcon", title: "Integrated Task Management", description: `Assign tasks, track deadlines, and manage projects without leaving the platform.`, path: "/tasks" },
  { icon: "UsersIcon", title: "Contact Management", description: `Organize contacts, organizations, and business groups in a centralized system.`, path: "/contact-management" },
  { icon: "SendMessageIcon", title: "Automated Messaging", description: `Send broadcasts, sequential messages, reminders, and run drip campaigns.`, path: "/marketing" },
  { icon: "TemplateIcon", title: "Template Center", description: `Speed up messaging with pre-approved templates, quick replies, and a media library.`, path: "/templates" },
  { icon: "SparklesIcon", title: "AI-Powered Agents", description: `Utilize GPT for intelligent, context-aware conversations and data extraction.`, path: "/smarty-ai" },
  { icon: "CodeBracketIcon", title: "Backend Integrations (n8n)", description: `Connect to 200+ apps like CRMs, ERPs, and databases for real-time data sync.`, path: "/developer-docs" },
  { icon: "ArchitectureIcon", title: "Robust Architecture", description: `Built on the Frappe framework for flexibility, scalability, and security.`, path: "/developer-docs" },
  { icon: "NoCodeIcon", title: "'No-Code' Automation", description: `Design complex WhatsApp interactions with a visual flow builder, no coding required.`, path: "/powerful-forms" },
];

export const comparisonSectionData = {
    title: "How WhatsForm Stacks Up",
    subtitle: `See a side-by-side comparison of how WhatsForm's conversational approach outperforms traditional tools and other platforms.`,
    competitors: [
        {
            name: "Google Forms",
            description: "From static web forms to dynamic conversations.",
            path: "/whatsform-vs-google-forms"
        },
        {
            name: "Wati",
            description: "Focused on a complete, integrated platform experience.",
            path: "/whatsform-vs-wati"
        },
        {
            name: "Interakt",
            description: "Advanced automation and AI that goes deeper.",
            path: "/whatsform-vs-interakt"
        },
        {
            name: "Double Tick",
            description: "Built for scalability and enterprise-grade workflows.",
            path: "/whatsform-vs-double-tick"
        }
    ]
};

export const faq = {
    title: "Frequently Asked Questions",
    subtitle: "Find answers to common questions about our platform, features, and pricing.",
    categories: [
        {
            id: 'getting-started',
            name: "General & Getting Started",
            description: "The basics of what WhatsForm is and how to begin.",
            faqs: [
                {
                    question: "What is WhatsForm?",
                    answer: `WhatsForm is a comprehensive platform that transforms WhatsApp into a powerful tool for business. It allows you to create interactive forms, automate workflows, manage team conversations in a shared inbox, and deploy AI agents to handle sales, support, and operational tasks.`
                },
                {
                    question: "How is WhatsForm different from the regular WhatsApp Business App?",
                    answer: `The standard WhatsApp Business App is great for small-scale, one-on-one communication. WhatsForm is built on the WhatsApp Business API, designed for scale. It offers advanced features like multi-agent access (Team Inbox), AI-powered chatbots, no-code workflow automation, CRM integrations, and the ability to handle thousands of conversations simultaneously.`
                },
                {
                    question: "Do I need a WhatsApp Business API account?",
                    answer: `Yes, WhatsForm is built on the official WhatsApp Business API for reliability and scale. If you don't have one, our team will guide you through the quick and easy setup process with Meta.`
                },
            ]
        },
        {
            id: 'features',
            name: "Platform Features",
            description: "A deeper dive into our core capabilities.",
            faqs: [
                {
                    question: "What are 'conversational forms' or 'WhatsApp Flows'?",
                    answer: `Unlike static web forms (like Google Forms), conversational forms present questions one by one inside a WhatsApp chat. This feels like a natural dialogue, leading to much higher completion rates. They can include buttons, lists, and collect rich media like photos and documents.`
                },
                {
                    question: "What is the Team Inbox?",
                    answer: `The Team Inbox is a centralized dashboard where your entire team can view, manage, and respond to all WhatsApp conversations. You can assign chats, add private notes for internal collaboration, and track conversation status to ensure seamless customer service.`
                },
                {
                    question: "How does the 'no-code' automation builder work?",
                    answer: `Our visual flow builder allows you to design complex, multi-step conversations and workflows using a drag-and-drop interface or even a simple Excel sheet. You can create interactive forms, set up conditional logic, and trigger actions without writing a single line of code.`
                },
            ]
        },
    ]
};