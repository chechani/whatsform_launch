
type Plan = {
    name: string;
    price: string;
    isPopular: boolean;
    features: string[];
    frequency: string;
    cta: string;
};

const yearlyPlans: Plan[] = [
    {
        name: 'Starter',
        price: '₹9,000',
        isPopular: false,
        features: [
            'Messaging + Broadcast: 5000 / Month',
            'Active WhatsApp Forms: Not included',
            'No Document Upload',
            'Form Response: 500 / Month',
            'Contacts: 2500',
            'Users: 2',
            'Team Inbox',
            'WhatsApp Broadcasting',
            'Drip Campaign (Sequential)',
            'Automation Messaging',
        ],
        frequency: 'per year',
        cta: 'Choose Plan'
    },
    {
        name: 'Standard',
        price: '₹15,000',
        isPopular: false,
        features: [
            'Messaging + Broadcast: 10,000 / Month',
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
        frequency: 'per year',
        cta: 'Choose Plan'
    },
    {
        name: 'Premium',
        price: '₹24,000',
        isPopular: true,
        features: [
            'Messaging + Broadcast: 20000 / Month',
            'Active WhatsApp Forms',
            'No Document Upload',
            'Form Response: 10,000 / Month',
            'Contacts: 30,000',
            'Users: 10',
            'Team Inbox',
            'WhatsApp Broadcasting',
            'Drip Campaign (Sequential)',
            'Automation Messaging',
        ],
        frequency: 'per year',
        cta: 'Choose Plan'
    },
    {
        name: 'Enterprise',
        price: '₹50,000',
        isPopular: false,
        features: [
            'Messaging + Broadcast: 30,000 / Month',
            'Active WhatsApp Forms',
            'Includes Document Upload',
            'Form Response: 2500 / Month',
            'Contacts: 50000',
            'Users: 15',
            'Team Inbox',
            'WhatsApp Broadcasting',
            'Drip Campaign (Sequential)',
            'Automation Messaging',
        ],
        frequency: 'per year',
        cta: 'Choose Plan'
    },
];

export const pricingPageData = {
    hero: {
        title: "Flexible Pricing for Every Business",
        subtitle: "Choose the plan that's right for you and start automating your WhatsApp communication today."
    },
    plans: yearlyPlans
};
