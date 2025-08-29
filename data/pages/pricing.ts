type Feature = {
    text: string;
    type: 'included' | 'excluded' | 'limited';
};

type Plan = {
    name: string;
    price: number;
    popular: boolean;
    features: Feature[];
    formAssist?: string;
};

type PricingData = {
    tagline: string;
    title: string;
    gstText: string;
    creditCardText: string;
    plans: {
        yearly: Plan[];
        quarterly: Plan[];
    };
    apiCharges: {
        title: string;
        description: string;
        cta: string;
        link: string;
    };
    customQuote: {
        title: string;
        description: string;
        cta: string;
    };
};

const commonFeatures: Omit<Feature, 'type'>[] = [
    { text: "Messaging + Broadcast: {MESSAGES} / Month" },
    { text: "Active WhatsApp Forms: {FORMS}" },
    { text: "No Document Upload" },
    { text: "Form Response: {RESPONSES} / Month" },
    { text: "Contacts: {CONTACTS}" },
    { text: "Users: {USERS}" },
    { text: "Team Inbox" },
    { text: "WhatsApp Broadcasting" },
    { text: "Drip Campaign (Sequential)" },
    { text: "Automation Messaging" },
];

const yearlyPlans: Plan[] = [
    {
        name: 'Starter',
        price: 9000,
        popular: false,
        features: [
            { text: 'Messaging + Broadcast: 5000 / Month', type: 'included' },
            { text: 'Active WhatsApp Forms', type: 'excluded' },
            { text: 'No Document Upload', type: 'included' },
            { text: 'Form Response: 500 / Month', type: 'included' },
            { text: 'Contacts: 2500', type: 'included' },
            { text: 'Users: 2', type: 'included' },
            { text: 'Team Inbox', type: 'included' },
            { text: 'WhatsApp Broadcasting', type: 'included' },
            { text: 'Drip Campaign (Sequential)', type: 'included' },
            { text: 'Automation Messaging', type: 'included' },
        ],
        formAssist: 'Assist in WhatsApp Form Building: 5',
    },
    {
        name: 'Standard',
        price: 15000,
        popular: false,
        features: [
            { text: 'Messaging + Broadcast: 10,000 / Month', type: 'included' },
            { text: 'Active WhatsApp Forms', type: 'included' },
            { text: 'No Document Upload', type: 'excluded' },
            { text: 'Form Response: 10,000 / Month', type: 'included' },
            { text: 'Contacts: 2500', type: 'included' },
            { text: 'Users: 5', type: 'included' },
            { text: 'Team Inbox', type: 'included' },
            { text: 'WhatsApp Broadcasting', type: 'included' },
            { text: 'Drip Campaign (Sequential)', type: 'included' },
            { text: 'Automation Messaging', type: 'included' },
        ],
        formAssist: 'Assist in WhatsApp Form Building: 10',
    },
    {
        name: 'Premium',
        price: 24000,
        popular: true,
        features: [
            { text: 'Messaging + Broadcast: 20000 / Month', type: 'included' },
            { text: 'Active WhatsApp Forms', type: 'included' },
            { text: 'No Document Upload', type: 'excluded' },
            { text: 'Form Response: 10,000 / Month', type: 'included' },
            { text: 'Contacts: 30,000', type: 'included' },
            { text: 'Users: 10', type: 'included' },
            { text: 'Team Inbox', type: 'included' },
            { text: 'WhatsApp Broadcasting', type: 'included' },
            { text: 'Drip Campaign (Sequential)', type: 'included' },
            { text: 'Automation Messaging', type: 'included' },
        ],
        formAssist: 'Assist in WhatsApp Form Building: 25',
    },
    {
        name: 'Enterprise',
        price: 50000,
        popular: false,
        features: [
            { text: 'Messaging + Broadcast: 30,000 / Month', type: 'included' },
            { text: 'Active WhatsApp Forms', type: 'included' },
            { text: 'Includes Document Upload', type: 'included' },
            { text: 'Form Response: 2500 / Month', type: 'included' },
            { text: 'Contacts: 50000', type: 'included' },
            { text: 'Users: 15', type: 'included' },
            { text: 'Team Inbox', type: 'included' },
            { text: 'WhatsApp Broadcasting', type: 'included' },
            { text: 'Drip Campaign (Sequential)', type: 'included' },
            { text: 'Automation Messaging', type: 'included' },
        ],
        formAssist: 'Assist in WhatsApp Form Building: 50',
    },
];

// Assuming quarterly prices are roughly 1/3rd of yearly for simplicity.
const quarterlyPlans: Plan[] = yearlyPlans.map(plan => ({
    ...plan,
    price: Math.round(plan.price / 3.33),
}));


export const pricingData: PricingData = {
    tagline: 'Flexible Pricing Plans',
    title: 'Perfect for Small & Large Brands',
    gstText: '+ GST @ 18%',
    creditCardText: 'No Credit Card Required',
    plans: {
        yearly: yearlyPlans,
        quarterly: quarterlyPlans,
    },
    apiCharges: {
        title: 'Whatsapp Cloud API Charges',
        description: 'WhatsApp charges a per-conversation fee to send & receive messages using their <b>Official Cloud API</b>. Billing is settled <b>directly with WhatsApp</b> so you save markup that other providers charge.',
        cta: 'Country Wise WhatsApp Conversation Pricing',
        link: 'https://developers.facebook.com/docs/whatsapp/pricing/',
    },
    customQuote: {
        title: 'Customized Enterprise Solutions',
        description: 'Require a tailor-made pricing plan that reflects the exact needs of your business? We support your enterprise needs, ensuring you get the best value without compromising on quality.',
        cta: 'Custom Quote'
    }
};
