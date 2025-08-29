import { 
    BuildingStorefrontIcon, CalculatorIcon, StethoscopeIcon, CalendarIcon
} from '../../icons';

export const miniAppsPageData = {
    hero: {
        title: "Go Beyond Forms: Build Mini-Apps Inside WhatsApp",
        subtitle: "Leverage two-way APIs and AI to create powerful, interactive experiences that solve problems, automate processes, and delight users, all within their favorite chat app.",
    },
    sections: [
        {
            type: 'centeredText',
            title: "The Evolution of Business Messaging",
            subtitle: "One-way data collection is a dead end. The future is interactive, stateful 'Mini-Apps' that turn WhatsApp into a true application platform. Stop just collecting information—start building solutions."
        },
        {
            type: 'contentWithImage',
            subtitle: 'WHAT ARE MINI-APPS?',
            title: 'Interactive Experiences, Not Static Forms',
            text: 'A Mini-App is a guided, task-oriented workflow that feels like a native application but lives entirely inside a WhatsApp conversation. It can fetch real-time data, remember user choices, and perform complex actions by connecting to your backend systems.',
            image: 'https://picsum.photos/seed/miniapp1/500/400',
            features: [
                "Stateful, multi-step conversations",
                "Dynamic content based on user input",
                "Rich, interactive UI with buttons and carousels",
                "Feels like a native app, but with zero installation"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'POWERED BY TWO-WAY APIS',
            title: 'Your Business Logic, Unleashed on WhatsApp',
            text: 'This is where the magic happens. WhatsForm connects to your existing databases, CRMs, and ERPs. A Mini-App can check product inventory, calculate a custom loan quote, verify a membership status, or update a customer record—all in real time.',
            image: 'https://picsum.photos/seed/miniapp2/500/400',
            reverse: true,
            features: [
                "Fetch data from any API-enabled system",
                "Push data back to update your records instantly",
                "Integrate with your core business logic",
                "Build truly dynamic and personalized experiences"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'ENHANCED WITH AI AGENTS',
            title: 'Intelligent Conversations that Understand Intent',
            text: "Our AI agents go beyond rigid, rule-based flows. They can understand natural language, interpret user intent, and make intelligent decisions within the Mini-App. This allows for more flexible, human-like interactions that can handle unexpected user inputs gracefully.",
            image: 'https://picsum.photos/seed/miniapp3/500/400',
            features: [
                "Natural Language Understanding (NLU)",
                "Handles complex, non-linear conversations",
                "Personalizes the user journey in real time",
                "Escalates to human agents with full context"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Example Mini-Apps You Can Build",
            subtitle: "The possibilities are endless. Here are a few ideas to get you started.",
            benefits: [
                {
                    icon: BuildingStorefrontIcon,
                    title: "Interactive Catalog",
                    description: "Users can browse products, check real-time stock, and get AI-powered recommendations."
                },
                {
                    icon: CalculatorIcon,
                    title: "Loan/EMI Calculator",
                    description: "Provide instant, personalized financial calculations based on user inputs."
                },
                {
                    icon: CalendarIcon,
                    title: "Dynamic Appointment Booker",
                    description: "Check real-time calendar availability across your team and book a slot instantly."
                },
                {
                    icon: StethoscopeIcon,
                    title: "Symptom Checker",
                    description: "A guided diagnostic tool that asks questions and provides initial recommendations."
                }
            ]
        }
    ],
    closing: {
        title: "Stop Thinking in Forms. Start Building Mini-Apps.",
        subtitle: "Ready to unlock the true potential of WhatsApp as an application platform?",
        cta: "Build Your First Mini-App"
    }
};