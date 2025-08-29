
import { TemplateIcon, CheckCircleIcon } from '../../icons';

export const templateCenterData = {
    hero: {
        title: "Template Center: Your Communication Command Centre",
        subtitle: "Craft, manage, and deploy high-performance message templates that drive engagement, ensure consistency, and accelerate your business workflows."
    },
    strategyGuide: {
        badge: "Template Strategy Guide",
        icon: TemplateIcon,
        title: "Craft Effective WhatsApp Flows",
        subtitle: "As soon as you land in the Template Centre, you’ll notice the Template Strategy Guide right at the top. Think of this as your content playbook — especially helpful if you're just getting started or want to bring more structure to your messaging flow. It’s broken down into five key tabs, each representing a different type of content you’ll use in your WhatsApp campaigns. From media files to quick replies to forms — everything is neatly organized, with built-in guidance on how and when to use each type. So even if you're unsure where to start, you’re never stuck guessing.",
        tabs: [
            {
                id: 'media',
                name: '1. Media',
                title: 'Capture Attention with Rich Media Headers',
                description: 'Start your message strong with engaging headers. Use images for branding, videos for demos, or documents for important information. A powerful visual can dramatically increase engagement.',
                image: 'https://picsum.photos/seed/template-media/300/200'
            },
            {
                id: 'carousel',
                name: '2. Carousel',
                title: 'Showcase Products and Services Interactively',
                description: 'Display multiple products, services, or options in a single, swipeable message. Each card can have its own image, title, description, and button, creating a rich, catalog-like experience within WhatsApp.',
                image: 'https://picsum.photos/seed/template-carousel/300/200'
            },
            {
                id: 'quick-replies',
                name: '3. Quick Replies',
                title: 'Guide the Conversation with Buttons',
                description: 'Make it easy for users to respond. Quick reply buttons provide pre-set answers, guiding users through a flow, helping you segment them, or allowing them to make choices with a single tap.',
                image: 'https://picsum.photos/seed/template-qr/300/200'
            },
            {
                id: 'templates',
                name: '4. Templates',
                title: 'Standardize Your Key Messages',
                description: 'Use pre-approved message templates for all your business-initiated conversations. This ensures compliance with WhatsApp policies and maintains a consistent brand voice for notifications, alerts, and promotions.',
                image: 'https://picsum.photos/seed/template-templates/300/200'
            },
            {
                id: 'form-templates',
                name: '5. Form Templates',
                title: 'Automate Data Collection with WhatsApp Flows',
                description: 'Transform data collection into a conversation. Use WhatsApp Flows (forms) to collect information step-by-step for registrations, feedback, support tickets, and more, all without making the user leave the chat.',
                image: 'https://picsum.photos/seed/template-forms/300/200'
            }
        ]
    },
    stats: {
        title: "The Live Metrics Cards",
        subtitle: "Just below the strategy section, you’ll find five live metric cards that give you a real-time snapshot of how much content you already have in place.",
        cards: [
            { value: "49", subtitle: "active templates", label: "Templates", description: "The total number of pre-approved WhatsApp message templates available in your system." },
            { value: "12", subtitle: "form templates", label: "Form Templates", description: "This shows how many interactive forms you’ve created — for lead capture, feedback, registration, and more." },
            { value: "232", subtitle: "quick replies", label: "Quick Replies", description: "These are short, ready-to-use replies that help your team respond instantly in chats." },
            { value: "2", subtitle: "carousel templates", label: "Carousel Templates", description: "Swipeable card-style messages that work great for showcasing multiple options." },
            { value: "31", subtitle: "media assets", label: "Media Library", description: "This shows the total number of assets you’ve uploaded — like PDFs, brochures, images, or videos — to support your templates." }
        ]
    },
    mediaLibrary: {
        title: "Centralized Media Library",
        subtitle: "Why use it?",
        text: "Your central repository to upload and manage images, videos, and documents used across WhatsForm. It supports inserting media into headers and is used to build carousel templates. A media library streamlines content creation, ensures brand consistency, and accelerates access to approved assets.",
        image: "https://picsum.photos/seed/template-library/500/400",
        features: [
            "Store all assets in one place",
            "Ensure brand consistency",
            "Speed up template creation",
            "Easily update media across all templates"
        ]
    },
    multiLanguage: {
        title: "Speak Your Customer's Language",
        subtitle: "Global Reach",
        text: "Effortlessly manage your templates in multiple languages. Create a template once, then add translations for different languages. WhatsForm will automatically use the correct version based on the user's locale, enabling you to scale your communications globally with a personal touch.",
        image: "https://picsum.photos/seed/template-language/500/400",
        features: [
            "Manage all translations in one interface",
            "Deliver personalized, localized experiences",
            "Expand your market reach effortlessly",
            "Ensure consistent messaging across all regions"
        ]
    },
    gameChanger: {
        title: "Why This Setup Is So Useful",
        subtitle: "Whether you're running campaigns, replying to leads, or following up with customers — the Template Strategy Guide and Live Metrics Cards together give you clarity, speed, and control.",
        points: [
            {
                icon: CheckCircleIcon,
                title: "Build from a Strong Foundation",
                description: "You’re not starting from scratch every time — just pick what you need from your ready-to-use content."
            },
            {
                icon: CheckCircleIcon,
                title: "Save Time & Ensure Consistency",
                description: "It saves your team tons of time and keeps everything consistent — no typos, no broken formats."
            },
            {
                icon: CheckCircleIcon,
                title: "Keep Everyone Aligned",
                description: "Everyone stays on the same page — using the same templates, replies, and media files across your marketing or support teams."
            }
        ]
    },
    closingVideo: {
        title: "See the Template Center in Action",
        subtitle: "Watch this quick walkthrough to see how you can use the Template Center to streamline your communication and build powerful campaigns.",
        videoId: "YGAwmCVSUlc",
        thumbnail: "https://i.ytimg.com/vi/YGAwmCVSUlc/hqdefault.jpg"
    }
};
