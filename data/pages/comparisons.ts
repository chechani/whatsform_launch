// Data for Wati Comparison Page
export const watiComparisonData = {
    hero: {
        title: "WhatsForm vs. Wati",
        subtitle: "From basic chatbots to a complete conversational business platform. See how WhatsForm's integrated features deliver superior value and ROI.",
        competitorName: "Wati"
    },
    comparisonTable: {
        title: "Feature-by-Feature Breakdown",
        features: [
            {
                feature: "Conversational Forms (WhatsApp Flows)",
                whatsform: { text: "Advanced multi-screen forms that act like mini-apps inside WhatsApp. Two-way API integration for dynamic data." },
                competitor: { text: "Limited to basic chatbots and single-step forms. Lacks deep API-driven interactivity.", supported: false }
            },
            {
                feature: "Flow Building & Templating Speed",
                whatsform: { text: "Build entire multi-step workflows in minutes. Templates for interactive messages include pre-configured connected nodes. Users can also paste JSON from AI tools like ChatGPT to instantly create complex flows." },
                competitor: { text: "Relies on a manual, step-by-step flow builder. Templates are for single messages only, requiring each subsequent step to be configured manually.", supported: true }
            },
            {
                feature: "Template Center",
                whatsform: { text: "Centralized hub for managing message templates, media, quick replies, and form flows. A complete content playbook." },
                competitor: { text: "Basic template management for messages only. Lacks a unified content strategy center.", supported: true }
            },
            {
                feature: "Integrated Task Management",
                whatsform: { text: "Built-in system to turn conversations into actionable tasks with assignments and deadlines, directly on WhatsApp." },
                competitor: { text: "No integrated task management. Requires third-party tools and manual processes.", supported: false }
            },
            {
                feature: "Connection Management (CRM)",
                whatsform: { text: "Advanced contact management with support for organizations and business groups, ideal for B2B." },
                competitor: { text: "Basic contact list management. Not designed for complex B2B relationship tracking.", supported: true }
            },
            {
                feature: "Calendar & Meeting Scheduling",
                whatsform: { text: "Integrated calendar to schedule meetings, log calls, and send automated reminders within the platform." },
                competitor: { text: "No native calendar. Relies on external integrations which can be clunky.", supported: false }
            },
             {
                feature: "Compliance Reminders",
                whatsform: { text: "Powerful, automated reminder system perfect for compliance-driven industries like finance and legal." },
                competitor: { text: "General broadcast features only. Lacks specialized tools for systematic compliance reminders.", supported: false }
            }
        ]
    },
    tcoSection: {
        title: "Beyond the Price Tag: Total Cost of Ownership (TCO)",
        subtitle: "WhatsForm offers a lower TCO by consolidating tools and reducing the 'chaos tax' of inefficiency.",
        points: [
            { title: "More Affordable Plans", description: "Our pricing plans are structured to be more affordable, offering more features for a lower price point compared to Wati's tiered plans." },
            { title: "Fewer Third-Party Tools", description: "With built-in CRM, Task Management, and Calendar features, you save money on separate subscriptions for tools like Asana, Calendly, or a basic CRM." },
            { title: "Minimized 'Chaos Tax'", description: "Automated compliance reminders, structured data collection, and streamlined workflows reduce the hidden costs of manual errors, missed follow-ups, and wasted staff time." }
        ]
    },
    onboardingSupport: {
        title: "Unmatched Onboarding & Support",
        subtitle: "We invest in your success from day one.",
        points: [
            { title: "Free Go-Live Support", description: "Even during your 14-day trial, our team provides full support to help you build your first workflows and go live, ensuring you see value immediately." },
            { title: "Dedicated Onboarding", description: "Unlike self-serve platforms, we provide hands-on assistance to ensure you're set up for success, whether you subscribe or not." }
        ]
    },
    summary: {
        title: "The Verdict: A True All-in-One Platform",
        text: "While Wati offers a basic WhatsApp marketing tool, WhatsForm provides a comprehensive, integrated platform designed to run your core business processes. From advanced conversational flows to built-in CRM and task management, WhatsForm is the superior choice for businesses looking to truly automate and scale on WhatsApp.",
        cta: "Start Your Free Trial"
    }
};

// Data for Interakt Comparison Page
export const interaktComparisonData = {
    hero: {
        title: "WhatsForm vs. Interakt",
        subtitle: "Explore why WhatsForm's deep automation capabilities and all-in-one feature set offer a more powerful solution for growing businesses.",
        competitorName: "Interakt"
    },
    comparisonTable: {
        title: "Feature-by-Feature Breakdown",
        features: [
            {
                feature: "Conversational Forms (WhatsApp Flows)",
                whatsform: { text: "Build true mini-apps inside WhatsApp with multi-screen, API-driven forms for complex workflows like KYC, applications, and dynamic catalogs." },
                competitor: { text: "Primarily focused on notifications and basic chatbots. Lacks the ability to create complex, stateful forms within WhatsApp.", supported: false }
            },
            {
                feature: "Flow Building & Templating Speed",
                whatsform: { text: "Build entire multi-step workflows in minutes. Templates for interactive messages include pre-configured connected nodes. Users can also paste JSON from AI tools like ChatGPT to instantly create complex flows." },
                competitor: { text: "Relies on a manual, step-by-step flow builder. Templates are for single messages only, requiring each subsequent step to be configured manually.", supported: true }
            },
            {
                feature: "Template & Media Management",
                whatsform: { text: "Powerful, centralized Template Center to manage message templates, form flows, media assets, and quick replies. No worries about media expiry." },
                competitor: { text: "Standard message template management. Lacks a unified system for managing all content types and persistent media.", supported: true }
            },
            {
                feature: "Integrated Business Tools",
                whatsform: { text: "Includes built-in Task Management, a shared Calendar for scheduling, and advanced B2B-focused Contact Management (Organizations, Groups)." },
                competitor: { text: "Focuses on the inbox and basic automation. Lacks integrated productivity tools, requiring other software for task and schedule management.", supported: false }
            },
            {
                feature: "Compliance Reminders",
                whatsform: { text: "Powerful, automated reminder system perfect for compliance-driven industries like finance and legal." },
                competitor: { text: "General broadcast features only. Lacks specialized tools for systematic compliance reminders.", supported: false }
            },
            {
                feature: "Architecture & Customization",
                whatsform: { text: "Built on the robust and flexible Frappe framework, allowing for deep customization and enterprise-grade workflows." },
                competitor: { text: "A more rigid, out-of-the-box solution with limited customization potential for complex, unique business processes.", supported: true }
            },
            {
                feature: "Onboarding & Support",
                whatsform: { text: "Hands-on, free Go-Live support during the trial period to ensure you build and launch your first workflow successfully." },
                competitor: { text: "Standard self-serve onboarding with documentation and email support. Less hands-on guidance for complex setups.", supported: true }
            }
        ]
    },
    tcoSection: {
        title: "A More Complete Solution for a Better Price",
        subtitle: "WhatsForm reduces your Total Cost of Ownership by providing more value out of the box.",
        points: [
            { title: "Competitive Pricing", description: "Our pricing is designed to be more accessible, providing more advanced features without forcing you into the highest tiers." },
            { title: "Consolidate Your Stack", description: "By integrating CRM, task, and calendar functionalities, WhatsForm replaces the need for several other paid tools, simplifying your operations and your budget." },
            { title: "Faster Time-to-Value", description: "With our hands-on support and powerful templates, you can automate complex processes faster, leading to quicker ROI." }
        ]
    },
    onboardingSupport: {
        title: "Your Success is Our Priority",
        subtitle: "We don't just sell software; we build partnerships.",
        points: [
            { title: "Go Live During Trial", description: "Our unique commitment is to get you fully operational with a live workflow during your 14-day trial, demonstrating concrete value before you pay." },
            { title: "Expert Guidance", description: "Our team helps you strategize and build the most effective conversational flows for your specific business needs." }
        ]
    },
    summary: {
        title: "The Verdict: Power and Platform vs. Point Solution",
        text: "Interakt is a solid tool for basic WhatsApp marketing and support. WhatsForm is an enterprise-grade platform for businesses that need to automate core, complex processes with deep integration and powerful, app-like experiences on WhatsApp.",
        cta: "Request a Personalized Demo"
    }
};

// Data for AI Sensy Comparison Page
export const aiSensyComparisonData = {
    hero: {
        title: "WhatsForm vs. AI Sensy",
        subtitle: "Discover the advantage of an all-in-one platform with integrated CRM and productivity tools over a standalone chatbot and marketing solution.",
        competitorName: "AI Sensy"
    },
    comparisonTable: {
        title: "Feature-by-Feature Breakdown",
        features: [
            {
                feature: "Core Platform Philosophy",
                whatsform: { text: "An integrated business platform. Combines conversational forms, AI, a team inbox, CRM, task management, and a calendar into one solution." },
                competitor: { text: "Primarily a marketing automation and chatbot platform. Core focus is on campaigns and bot conversations.", supported: true }
            },
            {
                feature: "Conversational Forms & Flows",
                whatsform: { text: "Build powerful, multi-screen forms (WhatsApp Flows) that act as mini-apps, with two-way API integration for real-time data." },
                competitor: { text: "Offers a chatbot builder for conversational flows, but lacks the structured, screen-based UI of native WhatsApp Flows for complex data collection.", supported: true }
            },
            {
                feature: "Flow Building & Templating Speed",
                whatsform: { text: "Build entire multi-step workflows in minutes. Templates for interactive messages include pre-configured connected nodes. Users can also paste JSON from AI tools like ChatGPT to instantly create complex flows." },
                competitor: { text: "Relies on a manual, step-by-step flow builder. Templates are for single messages only, requiring each subsequent step to be configured manually.", supported: true }
            },
            {
                feature: "Integrated CRM & Task Management",
                whatsform: { text: "Features a built-in contact management system with organizations and groups, plus an integrated task manager to turn conversations into actions." },
                competitor: { text: "No native task management or advanced B2B contact hierarchy. Relies on integrations for deeper CRM functionality.", supported: false }
            },
            {
                feature: "Compliance Reminders",
                whatsform: { text: "Powerful, automated reminder system perfect for compliance-driven industries like finance and legal." },
                competitor: { text: "General automation features are available, but it does not have a dedicated, easy-to-configure system for compliance reminders.", supported: false }
            },
            {
                feature: "Template & Content Hub",
                whatsform: { text: "A comprehensive Template Center for managing message templates, form flows, media, and quick replies. Media hosting with no expiry concerns." },
                competitor: { text: "Standard template management for messages. Less emphasis on a unified content management strategy.", supported: true }
            },
            {
                feature: "Total Cost of Ownership",
                whatsform: { text: "More affordable pricing with more built-in features, reducing the need for additional software subscriptions (e.g., for tasks, CRM)." },
                competitor: { text: "Pricing can be higher for comparable features, and the lack of integrated tools may lead to additional costs for third-party software.", supported: true }
            },
        ]
    },
    tcoSection: {
        title: "A Smarter Investment in Your Business Workflow",
        subtitle: "WhatsForm delivers a lower Total Cost of Ownership (TCO) by being a more complete, integrated solution.",
        points: [
            { title: "Affordable, All-in-One Pricing", description: "Our plans include features like task management and advanced CRM that often cost extra or require separate tools with competitors." },
            { title: "Reduce Software Bloat", description: "By centralizing communication, CRM, and project management, you simplify your tech stack and cut costs on multiple subscriptions." },
            { title: "Efficiency Gains", description: "The seamless integration between chat, tasks, and contacts means less time spent switching between apps and more time spent on productive work, reducing hidden operational costs." }
        ]
    },
    onboardingSupport: {
        title: "We Build With You, For You",
        subtitle: "Our hands-on support model ensures you get the most out of our powerful platform.",
        points: [
            { title: "Free Go-Live Assistance", description: "We are committed to helping you launch a functional workflow during your trial period, proving the platform's value from day one." },
            { title: "Strategic Partnership", description: "Our team acts as consultants, helping you design the most effective and efficient automation strategies for your business challenges." }
        ]
    },
    summary: {
        title: "The Verdict: Integrated Platform vs. Marketing Tool",
        text: "AI Sensy is a capable tool for WhatsApp marketing and chatbots. WhatsForm is a comprehensive business platform that integrates those capabilities with the essential tools needed to run your operations—CRM, tasks, and scheduling—making it a more powerful and cost-effective choice for businesses aiming for deep automation.",
        cta: "See the Platform in Action"
    }
};