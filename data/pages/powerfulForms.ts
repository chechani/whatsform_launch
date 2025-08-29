
import { CubeTransparentIcon } from '../../icons';

export const powerfulFormsPageData = {
    hero: {
        title: "Build Powerful, Conversational Forms Inside WhatsApp",
        subtitle: "Go beyond static questionnaires. Discover the tools that let you design, manage, and automate dynamic data collection and interactive workflows with our advanced Flow Builder.",
    },
    sections: [
        {
            type: 'contentWithImage',
            subtitle: '1. SIMPLIFIED FLOW BUILDING',
            title: 'Design and Manage Flows with Ease and Flexibility',
            text: 'Our powerful tools streamline the entire flow-building process. You can start by selecting or designing screens using the Screen Builder, utilize Flow Templates for a quick setup, and configure complex processes using Excel Sheets.',
            image: 'https://picsum.photos/seed/flowbuilder1/500/400',
            features: [
                "Design screens from scratch or use pre-built templates.",
                "See a real-time visual preview as you build.",
                "Build end-to-end processes using a familiar Excel template.",
                "Let users fill and submit forms interactively within the flow."
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: '2. DYNAMIC DATA MAPPING',
            title: 'Integrate Real-Time Data into Your Flows',
            text: 'Seamlessly integrate dynamic data into WhatsApp Flows to enhance flexibility and interactivity. Define, map, and manage the data required for your flows, facilitating robust backend integration.',
            image: 'https://picsum.photos/seed/flowbuilder2/500/400',
            reverse: true,
            features: [
                "Define data requirements for dropdowns and interactive elements.",
                "Use static mapping for constant data or dynamic mapping for real-time info.",
                "Retrieve data from external systems (CRM, ERP) via APIs.",
                "Modify mapped data even after a flow is published."
            ]
        },
        {
            type: 'pageFeatureGrid',
            title: '3. Advanced Response Management',
            subtitle: 'Effectively track, manage, and act on the data collected from your flows.',
            features: [
                { icon: CubeTransparentIcon, title: "Create & Update Docs for Every Flow", description: "Automatically track user responses for each flow, enabling targeted follow-ups and data-driven decisions." },
                { icon: CubeTransparentIcon, title: "View or Download Responses", description: "Monitor submissions in real-time or export responses to an Excel sheet for deeper analysis and reporting." },
                { icon: CubeTransparentIcon, title: "Screen Response Management", description: "Build complex, dynamic flows that respond to user inputs in real time, fetching data from backend systems as users navigate between screens." },
                { icon: CubeTransparentIcon, title: "Automated Data Handling", description: "The system automatically identifies which screens require data responses based on your configuration, simplifying development." }
            ],
            image: 'https://picsum.photos/seed/flowbuilder3/500/450'
        },
        {
            type: 'pageFeatureGrid',
            title: '4. Automated Notifications & Integrations',
            subtitle: 'Close the loop with automated acknowledgments and connect your entire business ecosystem.',
            features: [
                { icon: CubeTransparentIcon, title: "Instant Flow Notifications", description: "Acknowledge every user submission instantly with a text message, a follow-up flow, or interactive menu options." },
                { icon: CubeTransparentIcon, title: "Internal Team Alerts", description: "Notify your internal teams about new submissions to ensure prompt action and follow-up." },
                { icon: CubeTransparentIcon, title: "Webhooks & API Integration", description: "Use APIs to fetch data from or push data to external systems like your CRM or ERP in real-time." },
                { icon: CubeTransparentIcon, title: "Centralized Endpoint Management", description: "Maintain a list of all your API endpoints within WhatsForm for easy access and simplified integration processes." }
            ],
            image: 'https://picsum.photos/seed/flowbuilder4/500/450'
        }
    ],
    closing: {
        title: "Ready to Unleash the Power of Conversational Forms?",
        subtitle: "Transform how you collect data and automate workflows on WhatsApp.",
        cta: "Start Building Your First Flow"
    }
};
