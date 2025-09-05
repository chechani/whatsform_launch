
import { industryCategoryMap } from '../formData';

// Helper to create a URL-friendly slug from a string
const slugify = (text: string) => text.toLowerCase().replace(/[\s/&]+/g, '-').replace(/[()]+/g, '');

const industryDescriptions: { [key: string]: { description: string, image: string } } = {
    "Healthcare": {
        description: "Enhance patient care and streamline operations from appointment booking to post-treatment follow-up.",
        image: "https://picsum.photos/seed/industry-health/400/300"
    },
    "Finance": {
        description: "Automate banking queries, loan applications, and insurance claims with secure, compliant, and user-friendly AI chatbots.",
        image: "https://picsum.photos/seed/industry-bfsi/400/300"
    },
    "Education": {
        description: "Streamline admissions, provide 24/7 student support, and engage your community from inquiry to alumni relations.",
        image: "https://picsum.photos/seed/industry-edu/400/300"
    },
    "Retail": {
        description: "Turn conversations into conversions with AI shopping assistants, order tracking, and personalized marketing campaigns.",
        image: "https://picsum.photos/seed/industry-ecomm/400/300"
    },
    "Real Estate & Construction": {
        description: "Capture and qualify high-intent leads, schedule site visits instantly, and nurture clients from first contact to closing.",
        image: "https://picsum.photos/seed/industry-re/400/300"
    },
    "Marketing & Advertising": {
        description: "Manage multiple clients, run high-performance campaigns, and provide detailed analytics on a single powerful platform.",
        image: "https://picsum.photos/seed/industry-agency/400/300"
    },
    "Professional Services": {
        description: "Streamline client onboarding, automate reminders, and manage your practice with unparalleled efficiency.",
        image: "https://picsum.photos/seed/industry-ca/400/300"
    },
    "Manufacturing & IMPEX": {
        description: "Provide real-time package tracking, handle delivery exceptions, and coordinate operations seamlessly on WhatsApp.",
        image: "https://picsum.photos/seed/industry-logistics/400/300"
    },
    "Public Utilities & Non Profits": {
        description: "Make citizen services accessible 24/7 with multilingual AI agents for applications, grievances, and information dissemination.",
        image: "https://picsum.photos/seed/industry-gov/400/300"
    },
    "Technology": {
        description: "Onboard new users, provide instant technical support, and announce product updates through automated WhatsApp flows.",
        image: "https://picsum.photos/seed/industry-tech/400/300"
    },
    "Travel & Hospitality": {
        description: "Automate bookings, send confirmations and travel updates, and provide 24/7 concierge services to your guests.",
        image: "https://picsum.photos/seed/industry-travel/400/300"
    },
    "Automotive": {
        description: "Schedule test drives, book services, and manage vehicle inquiries with intelligent WhatsApp automation.",
        image: "https://picsum.photos/seed/industry-auto/400/300"
    },
    "Restaurants": {
        description: "Take orders, manage table reservations, and run loyalty campaigns directly through WhatsApp.",
        image: "https://picsum.photos/seed/industry-resto/400/300"
    },
    "Fitness & Wellness": {
        description: "Manage class bookings, send membership reminders, and offer personalized fitness tips through automated chats.",
        image: "https://picsum.photos/seed/industry-fitness/400/300"
    },
    "Entertainment, Social Media & Gaming": {
        description: "Engage your audience with interactive content, manage event registrations, and provide community support on WhatsApp.",
        image: "https://picsum.photos/seed/industry-media/400/300"
    }
};

const categoryDescriptions: { [key: string]: string } = {
    // Healthcare
    "Hospital/Clinic": "Automate patient registration, appointment scheduling, and report delivery.",
    "Pharmaceuticals": "Streamline communication with HCPs, manage sample requests, and automate inquiries.",
    "Medical Devices": "Provide product support, automate sales inquiries, and manage device registrations.",
    "Telemedicine": "Enhance virtual care with automated booking, pre-consultation data collection, and follow-ups.",
    "Wellness & Diagnostics": "Automate lab test bookings, deliver reports instantly, and manage wellness programs.",
    // Default
    "Default": "Explore tailored solutions for this segment."
};

const getCategoryDescription = (categoryName: string) => {
    return categoryDescriptions[categoryName] || categoryDescriptions["Default"];
};

export const industrySolutionsPageData = {
    hero: {
        title: "Tailored Solutions for Every Industry",
        subtitle: "Discover how WhatsForm's powerful conversational AI platform can be customized to meet the unique challenges and opportunities of your sector."
    },
    industries: Object.entries(industryCategoryMap).map(([industryName, categories]) => {
        const industrySlug = slugify(industryName);
        const industryInfo = industryDescriptions[industryName] || { description: 'No description available', image: 'https://picsum.photos/seed/default-industry/400/300' };
        
        return {
            title: industryName,
            description: industryInfo.description,
            image: industryInfo.image,
            link: `/industry/${industrySlug}`,
            categories: categories.map(categoryName => {
                const categorySlug = slugify(categoryName);
                return {
                    name: categoryName,
                    description: getCategoryDescription(categoryName),
                    path: `/industry/${industrySlug}/${categorySlug}`
                };
            })
        };
    })
};