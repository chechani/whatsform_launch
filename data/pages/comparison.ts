export const comparisonPageData = {
    hero: {
        title: "WhatsForm vs. Google Forms",
        subtitle: "It's more than a form. It's a conversation. See why businesses are moving from static questionnaires to dynamic, AI-powered interactions on WhatsApp.",
    },
    comparison: {
        title: "Feature-by-Feature Breakdown",
        subtitle: "See how a conversational approach transforms data collection and user engagement.",
        features: [
            {
                category: 'User Experience',
                points: [
                    {
                        feature: 'Interaction Model',
                        googleForms: 'Static, web-based questionnaire. Users see all questions at once or in pre-defined sections.',
                        whatsform: 'Conversational and interactive. Delivers questions one-by-one inside a WhatsApp chat, feeling like a natural dialogue.'
                    },
                    {
                        feature: 'User Environment',
                        googleForms: 'Requires users to click a link, open a browser, and leave their current app. This context switch increases drop-off rates.',
                        whatsform: 'Entire experience is native to WhatsApp. No app switching, no new UI to learn, leading to minimal friction and higher completion rates.'
                    },
                ]
            },
            {
                category: 'Functionality & AI',
                points: [
                    {
                        feature: 'Dynamic Logic',
                        googleForms: 'Offers basic conditional logic (skip to section based on answer). It cannot adapt in real-time to user input.',
                        whatsform: 'Powered by an AI core and a visual flow builder. It supports complex conditional logic, calculations, and can adapt the conversation based on user intent and real-time data from APIs.'
                    },
                    {
                        feature: 'Multimedia Input',
                        googleForms: 'File uploads are possible but can be clunky, especially on mobile, and often require a Google account login.',
                        whatsform: 'Natively accepts photos, videos, documents, and live locations directly from the WhatsApp interface, making it effortless for users.'
                    },
                    {
                        feature: 'Data Verification',
                        googleForms: 'Relies on email addresses which can be fake or temporary. Phone number collection is optional and not verified.',
                        whatsform: 'Automatically captures a verified WhatsApp phone number with every submission, providing a high-quality, reliable contact point.'
                    },
                ]
            },
            {
                category: 'Automation & Business Integration',
                points: [
                    {
                        feature: 'Immediate Action',
                        googleForms: 'Responses land in a Google Sheet. Any further action (like sending an email or updating a CRM) requires manual work or a third-party tool like Zapier, which introduces delays.',
                        whatsform: 'Every submission can trigger instant, real-time workflows. Add a lead to a CRM, create a support ticket, schedule a meeting, and send a confirmation message back to the user in seconds.'
                    },
                    {
                        feature: 'Human Handoff',
                        googleForms: 'The interaction is a one-way data drop. There is no way to continue the conversation or ask for clarification.',
                        whatsform: 'Features a unified Team Inbox. An AI conversation can be seamlessly handed over to a human agent with the full chat history for context, turning a form into a continuous relationship.'
                    },
                    {
                        feature: 'Campaigns & Nurturing',
                        googleForms: 'A passive tool for data collection. Not designed for proactive, multi-step user engagement.',
                        whatsform: 'Built for engagement. Supports automated drip campaigns, follow-up sequences, and broadcasts, allowing you to nurture leads and customers over time in the same channel.'
                    },
                ]
            },
        ]
    },
    summary: {
        title: "Google Forms collects data. WhatsForm builds relationships.",
        subtitle: "For organizations looking to not just collect information but also engage and act on it in real time, static forms are inadequate. WhatsForm fills that gap by turning a form into a conversation and a trigger for automation.",
        cta: "Start a Conversation"
    }
};