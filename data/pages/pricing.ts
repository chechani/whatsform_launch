
type Plan = {
    name: string;
    priceINR: string;
    priceUSD: string;
    isPopular: boolean;
    features: string[];
    frequency: string;
    cta: string;
};

const quarterlyPlans: Plan[] = [
    {
        name: 'Starter',
        priceINR: '₹3000',
        priceUSD: '$42',
        isPopular: false,
        features: [
            'Messaging + Broadcast: 5000 / Month',
            'Active Flows: 2 (New)',
            'Active WhatsApp Forms',
            'No Document Upload',
            'Form Response: 500 / Month',
            'Contacts: 2500',
            'Users: 2',
            'Team Inbox',
            'WhatsApp Broadcasting',
            'Drip Campaign (Sequential)',
            'Automation Messaging',
        ],
        frequency: 'Quarterly',
        cta: 'CHOOSE PLAN'
    },
    {
        name: 'Standard',
        priceINR: '₹5000',
        priceUSD: '$70',
        isPopular: true,
        features: [
            'Messaging + Broadcast: 10,000 / Month',
            'Active Flows: 2 (New)',
            'Active WhatsApp Forms',
            'No Document Upload',
            'Form Response: 10,000 / Month',
            'Contacts: 2500',
            'Users: 5',
            'Team Inbox',
            'WhatsApp Broadcasting',
            'Drip Campaign (Sequential)',
            'Automation Messaging',
        ],
        frequency: 'Quarterly',
        cta: 'CHOOSE PLAN'
    },
    {
        name: 'Premium',
        priceINR: '₹8000',
        priceUSD: '$112',
        isPopular: false,
        features: [
            'Messaging + Broadcast: 20000 / Month',
            'Active Flows: 2 (New)',
            'Active WhatsApp Forms',
            'Includes Document Upload',
            'Form Response: 10,000 / Month',
            'Contacts: 30,000',
            'Users: 10',
            'Team Inbox',
            'WhatsApp Broadcasting',
            'Drip Campaign (Sequential)',
            'Automation Messaging',
        ],
        frequency: 'Quarterly',
        cta: 'CHOOSE PLAN'
    },
    {
        name: 'Enterprise',
        priceINR: '₹15000',
        priceUSD: '$210',
        isPopular: false,
        features: [
            'Messaging + Broadcast: 30,000 / Month',
            'Active Flows: 2 (New)',
            'Active WhatsApp Forms',
            'Includes Document Upload',
            'Form Response: 25000 / Month',
            'Contacts: 50000',
            'Users: 15',
            'Team Inbox',
            'WhatsApp Broadcasting',
            'Drip Campaign (Sequential)',
            'Automation Messaging',
        ],
        frequency: 'Quarterly',
        cta: 'CHOOSE PLAN'
    },
];

const yearlyPlans: Plan[] = [
    {
        name: 'Starter',
        priceINR: '₹9000',
        priceUSD: '$126',
        isPopular: false,
        features: [
            'Messaging + Broadcast: 5000 / Month',
            'Active Flows: 2 (New)',
            'Active WhatsApp Forms',
            'No Document Upload',
            'Form Response: 500 / Month',
            'Contacts: 2500',
            'Users: 2',
            'Team Inbox',
            'WhatsApp Broadcasting',
            'Drip Campaign (Sequential)',
            'Automation Messaging',
        ],
        frequency: 'Yearly',
        cta: 'CHOOSE PLAN'
    },
    {
        name: 'Standard',
        priceINR: '₹15000',
        priceUSD: '$210',
        isPopular: false,
        features: [
            'Messaging + Broadcast: 10,000 / Month',
            'Active Flows: 2 (New)',
            'Active WhatsApp Forms',
            'No Document Upload',
            'Form Response: 10,000 / Month',
            'Contacts: 2500',
            'Users: 5',
            'Team Inbox',
            'WhatsApp Broadcasting',
            'Drip Campaign (Sequential)',
            'Automation Messaging',
        ],
        frequency: 'Yearly',
        cta: 'CHOOSE PLAN'
    },
    {
        name: 'Premium',
        priceINR: '₹24000',
        priceUSD: '$336',
        isPopular: true,
        features: [
            'Messaging + Broadcast: 20000 / Month',
            'Active Flows: 2 (New)',
            'Active WhatsApp Forms',
            'Includes Document Upload',
            'Form Response: 10,000 / Month',
            'Contacts: 30,000',
            'Users: 10',
            'Team Inbox',
            'WhatsApp Broadcasting',
            'Drip Campaign (Sequential)',
            'Automation Messaging',
        ],
        frequency: 'Yearly',
        cta: 'CHOOSE PLAN'
    },
    {
        name: 'Enterprise',
        priceINR: '₹50000',
        priceUSD: '$700',
        isPopular: false,
        features: [
            'Messaging + Broadcast: 30,000 / Month',
            'Active Flows: 2 (New)',
            'Active WhatsApp Forms',
            'Includes Document Upload',
            'Form Response: 25000 / Month',
            'Contacts: 50000',
            'Users: 15',
            'Team Inbox',
            'WhatsApp Broadcasting',
            'Drip Campaign (Sequential)',
            'Automation Messaging',
        ],
        frequency: 'Yearly',
        cta: 'CHOOSE PLAN'
    },
];

export const pricingPageData = {
    hero: {
        title: "Flexible Pricing Plans",
        subtitle: "Perfect for Small & Large Brands"
    },
    quarterlyPlans,
    yearlyPlans,
    enterprise: {
        title: "Customized Enterprise Solutions",
        subtitle: "Require a tailor-made pricing plan that reflects the exact needs of your business? We support your enterprise needs, ensuring you get the best value without compromising on quality.",
        cta: "Custom Quote"
    }
};
