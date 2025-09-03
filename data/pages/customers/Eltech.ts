
import { CheckCircleIcon } from '../../../icons';

export const eltechPageData = {
    hero: {
        title: "Eltech: Powering B2B Sales with Automated Technical Inquiries",
        subtitle: `How the leading transformer manufacturer uses WhatsForm to qualify leads, accelerate quotes, and provide superior client support.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Energizing the Sales Cycle",
            subtitle: "For Eltech, a B2B manufacturer of complex electrical components, the sales process involves detailed technical specifications. They needed a way to capture high-quality leads and speed up the time from inquiry to quotation."
        },
        {
            type: 'contentWithImage',
            subtitle: 'INTELLIGENT LEAD QUALIFICATION',
            title: 'From Vague Inquiry to Qualified Prospect',
            text: 'When a potential client makes an inquiry, a WhatsForm AI agent engages them instantly on WhatsApp. It asks crucial qualifying questions about their technical requirements like voltage, capacity, and application, turning a simple "I need a transformer" message into a detailed, actionable lead for the sales team.',
            image: 'https://picsum.photos/seed/eltech1/500/400',
            features: [
                "24/7 automated lead engagement",
                "Conversational gathering of technical specifications",
                "Filters out unqualified inquiries",
                "Seamlessly syncs lead data to their CRM"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'ACCELERATED QUOTATION PROCESS',
            title: 'Build Accurate Quotes in Record Time',
            text: 'The detailed information collected by the bot allows the sales team to generate accurate quotes much faster. For standard products, a quote can even be generated automatically and sent to the client via a SmartyAutomate workflow, dramatically shortening the sales cycle.',
            image: 'https://picsum.photos/seed/eltech2/500/400',
            reverse: true,
            features: [
                "Reduces back-and-forth emails for specifications",
                "Enables faster and more accurate quoting",
                "Automated quote generation for standard products",
                "Frees up sales engineers for complex projects"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'PROACTIVE ORDER & SUPPORT UPDATES',
            title: 'Building Client Trust Through Transparency',
            text: 'After a sale, WhatsForm keeps clients informed with proactive updates on manufacturing progress and delivery timelines. For post-sales support, a technical support bot can handle first-level queries or collect issue details to create a support ticket, ensuring a swift and organized response.',
            image: 'https://picsum.photos/seed/eltech3/500/400',
            features: [
                "Automated order status notifications",
                "First-level AI technical support bot",
                "Streamlined support ticket creation",
                "Enhanced client communication and satisfaction"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Eltech",
            subtitle: "Adopting a conversational AI strategy delivered a clear competitive advantage in the B2B manufacturing space.",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Faster Sales Cycle",
                    description: "Reduced the time from initial inquiry to final quotation by over 60%."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Higher Quality Leads",
                    description: "The sales team now focuses only on well-defined, qualified leads, improving conversion rates."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Improved Client Communication",
                    description: "Proactive updates and instant support built stronger, more transparent client relationships."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Increased Team Efficiency",
                    description: "Automated routine tasks, allowing sales and support teams to handle more complex, high-value work."
                }
            ]
        }
    ],
    closing: {
        title: "Ready to energize your B2B sales and support process?",
        subtitle: "Discover how WhatsForm can handle complex technical conversations and accelerate your business growth.",
        cta: "Request a Demo"
    }
};