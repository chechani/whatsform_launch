import { 
    FormsIcon, InboxIcon, CalendarIcon, UsersIcon, SendMessageIcon, TemplateIcon, SparklesIcon, 
    CodeBracketIcon, ArchitectureIcon, NoCodeIcon, CheckCircleIcon, ChatBubbleOvalLeftEllipsisIcon, ArrowsRightLeftIcon,
    CubeTransparentIcon, ChartBarIcon, MegaphoneIcon
} from '../icons';



export const uniqueFeatures = {
  title: "Beyond Chats. Into Forms, Flows & Automation.",
  subtitle:
    `WhatsForm transforms WhatsApp into a complete business platform — every message can capture data, trigger workflows, and deliver AI-powered assistance in real time.`,
  pillars: [
    {
      icon: ChatBubbleOvalLeftEllipsisIcon,
      title: "WhatsApp-Native Workflows",
      description:
        `Structured, multi-screen forms built directly inside WhatsApp. Every action becomes a workflow step — enabling data collection, updates, and follow-ups without leaving chat.`,
    },
    {
      icon: SparklesIcon,
      title: "AI-Powered Conversations",
      description:
        `Integrated AI agents validate inputs, adapt flows, summarize interactions, and escalate intelligently. This creates context-aware, human-like conversations that boost satisfaction.`,
    },
    {
      icon: ArrowsRightLeftIcon,
      title: "Deep Integrations with 200+ Apps",
      description:
        `Through n8n orchestration and APIs, WhatsForm connects seamlessly with CRMs, ERPs, calendars, and databases. Every WhatsApp interaction can trigger multi-step automation in real time.`,
    },
    {
      icon: ChatBubbleOvalLeftEllipsisIcon,
      title: "Enterprise-Grade Architecture",
      description:
        `Built on the Frappe framework with dynamic DocTypes, workflow engines, audit trails, and role-based access control. Scalable, secure, and compliant — deployable even on-premises.`,
    },
    {
      icon: ArrowsRightLeftIcon,
      title: "Team Collaboration Tools",
      description:
        `Shared team inbox, internal notes, contact groups, and calendar dashboards make collaboration seamless. Assign chats, manage tasks, and track client status — all inside WhatsApp.`,
    },
    {
      icon: SparklesIcon,
      title: "No-Code Business Automation",
      description:
        `SMEs and partners can design plug-and-play funnels, compliance reminders, and customer journeys without coding. Democratizing advanced automation for every business.`,
    },
  ],
  cta: {
    text: "Explore All Features",
    path: "/features",
  },
};


export const benefits = [
    { icon: CheckCircleIcon, title: "Higher Engagement", description: `Keep customers in their familiar WhatsApp environment, boosting response rates.` },
    { icon: CheckCircleIcon, title: "Reduced Overhead", description: `Automate routine queries and data entry, freeing up your team for high-value tasks.` },
    { icon: CheckCircleIcon, title: "Enhanced CX", description: `Provide personalized, 24/7 assistance and seamless interactions.` },
    { icon: CheckCircleIcon, title: "Improved Compliance", description: `Maintain audit logs of all form submissions and agent interactions.` },
];

export const useCases = [ "Healthcare", "Education", "Government", "Logistics", "Retail & E-Commerce", "BFSI", "Real Estate", "Professional Services" ];


export const testimonialsData = [
  {
    quote:
      `WhatsForm has completely transformed patient intake at our clinic. Patients love the simple, step-by-step WhatsApp forms, and our staff no longer spends hours chasing details. We've reduced no-shows by 30% and improved overall patient satisfaction dramatically.`,
    author: "Dr. Anya Sharma",
    title: "Clinic Director, HealthFirst Medical",
    logoUrl: "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg",
    imageUrl: "https://picsum.photos/seed/person1/100/100",
    videoId: "zmxHz-hQ32E",
    videoThumbnail: "https://i.ytimg.com/vi/zmxHz-hQ32E/hqdefault.jpg",
  },
  {
    quote:
      `Since implementing WhatsForm, our lead qualification has doubled. The AI bot engages prospects instantly on WhatsApp, collects all the details we need, and passes only serious buyers to our team. Our conversion rates have never been higher.`,
    author: "Raj Patel",
    title: "Head of Sales, Innovate Properties",
    logoUrl: "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg",
    imageUrl: "https://picsum.photos/seed/person2/100/100",
  },
  {
    quote:
      `Connecting WhatsApp forms directly to our ERP was a game-changer. Manual data entry and errors are a thing of the past. Today, shipments are logged in real-time, reports are instant, and our operations team is 40% more efficient.`,
    author: "Priya Singh",
    title: "Operations Manager, Global Logistics",
    logoUrl: "https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg",
    imageUrl: "https://picsum.photos/seed/person3/100/100",
    videoId: "20gL7XOlKkQ",
    videoThumbnail: "https://i.ytimg.com/vi/20gL7XOlKkQ/hqdefault.jpg",
  },
  {
    quote:
      `Managing multiple WhatsApp campaigns for clients used to be chaotic. With WhatsForm’s structured flows, automation, and detailed analytics, we now run campaigns at scale — and prove ROI with real numbers. Our client retention has improved significantly.`,
    author: "David Chen",
    title: "Founder, CreativeSpark Agency",
    logoUrl: "https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg",
    imageUrl: "https://picsum.photos/seed/person4/100/100",
  },
];


export const uspData = {
  title: "A Complete Solution for Growth",
  subtitle: "Your All-in-One Solution for WhatsApp Success.",
  intro: `From initial contact to long-term engagement, our platform provides the tools to build, automate, and scale your business communications.`,
  features: [
    {
      icon: FormsIcon,
      title: "Forms to capture.",
      description: `Create interactive, conversational forms inside WhatsApp to collect rich, validated data without friction.`,
      path: "/powerful-forms",
    },
    {
      icon: ArchitectureIcon,
      title: "Workflows to automate.",
      description: `Design and deploy complex, multi-step automated processes that save time and reduce manual effort.`,
      path: "/powerful-forms",
    },
    {
      icon: SparklesIcon,
      title: "AI to assist.",
      description: `Leverage our intelligent AI to answer queries, guide users, and provide 24/7 assistance to your customers.`,
      path: "/smarty-ai",
    },
    {
      icon: InboxIcon,
      title: "Inbox to collaborate.",
      description: `Manage all conversations in a unified team inbox, assign chats, and work together to provide seamless support.`,
      path: "/team-inbox",
    },
    {
      icon: CalendarIcon,
      title: "Reminders to follow-up.",
      description: `Automate follow-ups and reminders to ensure no lead is dropped and no deadline is missed.`,
      path: "/calendar",
    },
    {
      icon: MegaphoneIcon,
      title: "Campaigns to engage.",
      description: `Run targeted, sequential drip campaigns to nurture leads and engage your audience over time.`,
      path: "/marketing",
    },
    {
      icon: SendMessageIcon,
      title: "Broadcasts to inform.",
      description: `Send important updates, announcements, and promotional messages to a large, segmented audience instantly.`,
      path: "/marketing",
    },
    {
      icon: CodeBracketIcon,
      title: "Integrations to connect.",
      description: `Connect to your entire business ecosystem with two-way APIs and native integrations for seamless data flow.`,
      path: "/developer-docs",
    },
    {
      icon: ChartBarIcon,
      title: "Reports to analyze.",
      description: `Gain actionable insights into your performance with detailed analytics on forms, campaigns, and team productivity.`,
      path: "/form-responses",
    },
    {
      icon: TemplateIcon,
      title: "Templates to simplify.",
      description: `Speed up communication and ensure brand consistency with a library of pre-approved, reusable message templates.`,
      path: "/templates",
    },
    {
      icon: UsersIcon,
      title: "Contacts to organize.",
      description: `Build and manage a rich database of contacts with custom tags for powerful segmentation and personalized outreach.`,
      path: "/contact-management",
    },
    {
      icon: CubeTransparentIcon,
      title: "Flows to scale.",
      description: `Design complex, multi-screen conversational flows that scale your operations and handle any business process.`,
      path: "/powerful-forms",
    },
  ]
};

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