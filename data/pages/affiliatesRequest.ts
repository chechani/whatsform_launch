import { CheckCircleIcon, CurrencyDollarIcon, UsersIcon, ChartBarIcon, AcademicCapIcon, BuildingOfficeIcon, MegaphoneIcon } from '../../icons';

export const affiliatesRequestPageData = {
    hero: {
        title: "Join WhatsForm Affiliate Program",
        subtitle: "Earn competitive commissions by promoting WhatsForm to your audience and helping businesses transform their customer communication.",
        description: "Whether you're a chartered accountant, business consultant, digital marketer, or have an audience interested in business automation, our affiliate program offers lucrative earning opportunities with ongoing support."
    },

    idealCandidates: {
        title: "Perfect for Professionals Like:",
        candidates: [
            {
                icon: AcademicCapIcon,
                title: "Chartered Accountants",
                description: "CA firms with multiple clients who need automated communication systems",
                examples: ["Invoice reminders", "Document collection", "Client follow-ups", "Tax deadline alerts"]
            },
            {
                icon: BuildingOfficeIcon,
                title: "Business Consultants",
                description: "Advisors helping businesses improve operations and communication",
                examples: ["Process automation", "Client onboarding", "Customer support", "Lead management"]
            },
            {
                icon: MegaphoneIcon,
                title: "Digital Marketers",
                description: "Agencies and freelancers looking to expand service offerings",
                examples: ["Campaign automation", "Customer segmentation", "Conversion tracking", "Engagement analytics"]
            }
        ]
    },

    benefits: [
        {
            icon: CurrencyDollarIcon,
            title: "Competitive Commission Rates",
            description: "Earn 20% commission in the first year and 10% ongoing commission for renewals with no cap on earnings.",
            details: ["20% first year commission", "10% ongoing renewals", "15% for enterprise deals", "Performance bonuses available"]
        },
        {
            icon: ChartBarIcon,
            title: "Real-time Analytics",
            description: "Track your performance with detailed analytics dashboard showing clicks, conversions, and earnings.",
            details: ["Live click tracking", "Conversion analytics", "Commission reports", "Performance insights"]
        },
        {
            icon: UsersIcon,
            title: "Marketing Support",
            description: "Get access to marketing materials, banners, email templates, and promotional content.",
            details: ["Custom landing pages", "Email campaigns", "Social media assets", "Product demos"]
        },
        {
            icon: CheckCircleIcon,
            title: "Monthly Payouts",
            description: "Receive guaranteed monthly payouts with multiple payment options including PayPal and bank transfer.",
            details: ["No minimum threshold", "Multiple payment options", "Detailed payment history", "Tax documentation"]
        }
    ],

    requirements: {
        title: "Affiliate Requirements",
        subtitle: "We're looking for quality partners who can genuinely recommend WhatsForm to their audience.",
        list: [
            "Active professional practice or business with relevant audience",
            "Minimum 500 followers/subscribers or regular client base",
            "Content or services related to business, finance, marketing, or technology",
            "Commitment to providing genuine recommendations and quality content",
            "Compliance with our brand guidelines and affiliate terms"
        ]
    },

    earningSamples: {
        title: "Earning Examples",
        subtitle: "See how much our affiliates are earning based on their referrals",
        examples: [
            {
                profile: "CA with 50 clients",
                referrals: "10 clients/month",
                avgPlan: "Growth Plan (₹2,999/month)",
                commission: "20% first year, 10% renewal",
                monthlyEarning: "₹5,998 (Year 1)",
                annualEarning: "₹71,976 + renewals"
            },
            {
                profile: "Marketing Consultant",
                referrals: "15 clients/month", 
                avgPlan: "Starter Plan (₹999/month)",
                commission: "20% first year, 10% renewal",
                monthlyEarning: "₹2,998 (Year 1)",
                annualEarning: "₹35,976 + renewals"
            },
            {
                profile: "Digital Agency",
                referrals: "25 clients/month",
                avgPlan: "Mixed Plans (avg ₹2,000/month)",
                commission: "20% first year, 10% renewal",
                monthlyEarning: "₹10,000 (Year 1)",
                annualEarning: "₹1,20,000 + renewals"
            }
        ]
    },

    formFields: {
        title: "Affiliate Application Form",
        subtitle: "Tell us about yourself and how you plan to promote WhatsForm to your clients and audience.",
        sections: [
            {
                title: "Personal Information",
                fields: [
                    {
                        name: "fullName",
                        label: "Full Name",
                        type: "text",
                        required: true,
                        placeholder: "Enter your full name"
                    },
                    {
                        name: "email",
                        label: "Email Address",
                        type: "email",
                        required: true,
                        placeholder: "your.email@example.com"
                    },
                    {
                        name: "phone",
                        label: "Phone Number",
                        type: "tel",
                        required: true,
                        placeholder: "+91 98765 43210"
                    },
                    {
                        name: "city",
                        label: "City",
                        type: "text",
                        required: true,
                        placeholder: "Enter your city"
                    },
                    {
                        name: "state",
                        label: "State/Region",
                        type: "text",
                        required: true,
                        placeholder: "Enter your state"
                    }
                ]
            },
            {
                title: "Professional Background",
                fields: [
                    {
                        name: "profession",
                        label: "Primary Profession",
                        type: "select",
                        required: true,
                        options: [
                            { value: "", label: "Select your profession" },
                            { value: "chartered_accountant", label: "Chartered Accountant" },
                            { value: "tax_consultant", label: "Tax Consultant" },
                            { value: "business_consultant", label: "Business Consultant" },
                            { value: "digital_marketer", label: "Digital Marketing Professional" },
                            { value: "marketing_agency", label: "Marketing Agency Owner" },
                            { value: "it_consultant", label: "IT Consultant" },
                            { value: "software_reseller", label: "Software Reseller" },
                            { value: "content_creator", label: "Content Creator/Influencer" },
                            { value: "business_coach", label: "Business Coach/Trainer" },
                            { value: "other", label: "Other Professional" }
                        ]
                    },
                    {
                        name: "companyName",
                        label: "Company/Practice Name",
                        type: "text",
                        required: false,
                        placeholder: "Your company or practice name"
                    },
                    {
                        name: "experience",
                        label: "Years of Professional Experience",
                        type: "select",
                        required: true,
                        options: [
                            { value: "", label: "Select experience" },
                            { value: "1-2", label: "1-2 years" },
                            { value: "3-5", label: "3-5 years" },
                            { value: "6-10", label: "6-10 years" },
                            { value: "10+", label: "10+ years" }
                        ]
                    },
                    {
                        name: "clientBase",
                        label: "Current Client/Customer Base Size",
                        type: "select",
                        required: true,
                        options: [
                            { value: "", label: "Select client base size" },
                            { value: "10-25", label: "10-25 clients" },
                            { value: "25-50", label: "25-50 clients" },
                            { value: "50-100", label: "50-100 clients" },
                            { value: "100-250", label: "100-250 clients" },
                            { value: "250+", label: "250+ clients" }
                        ]
                    }
                ]
            },
            {
                title: "Online Presence",
                fields: [
                    {
                        name: "website",
                        label: "Website/Practice URL",
                        type: "url",
                        required: false,
                        placeholder: "https://www.yourwebsite.com"
                    },
                    {
                        name: "linkedinProfile",
                        label: "LinkedIn Profile",
                        type: "url",
                        required: false,
                        placeholder: "https://linkedin.com/in/yourprofile"
                    },
                    {
                        name: "socialPlatforms",
                        label: "Primary Social Media Platform",
                        type: "select",
                        required: false,
                        options: [
                            { value: "", label: "Select primary platform (optional)" },
                            { value: "linkedin", label: "LinkedIn" },
                            { value: "instagram", label: "Instagram" },
                            { value: "youtube", label: "YouTube" },
                            { value: "facebook", label: "Facebook" },
                            { value: "twitter", label: "Twitter/X" },
                            { value: "website_blog", label: "Website/Blog" },
                            { value: "none", label: "I don't actively use social media" }
                        ]
                    },
                    {
                        name: "audienceSize",
                        label: "Total Online Following (if applicable)",
                        type: "select",
                        required: false,
                        options: [
                            { value: "", label: "Select audience size (optional)" },
                            { value: "none", label: "No significant online following" },
                            { value: "500-1k", label: "500 - 1,000" },
                            { value: "1k-5k", label: "1,000 - 5,000" },
                            { value: "5k-10k", label: "5,000 - 10,000" },
                            { value: "10k+", label: "10,000+" }
                        ]
                    }
                ]
            },
            {
                title: "Affiliate Strategy",
                fields: [
                    {
                        name: "clientTypes",
                        label: "Types of Clients/Customers You Work With",
                        type: "textarea",
                        required: true,
                        placeholder: "Describe the types of businesses or clients you work with (e.g., small retailers, restaurants, service businesses, startups, etc.). This helps us understand your target market."
                    },
                    {
                        name: "promotionStrategy",
                        label: "How do you plan to promote WhatsForm?",
                        type: "textarea",
                        required: true,
                        placeholder: "Describe your promotion strategy. Will you recommend it to existing clients, create content, use social media, email marketing, or other methods? Be specific about your approach."
                    },
                    {
                        name: "whyWhatsApp",
                        label: "Why do you think WhatsApp automation is valuable for your clients?",
                        type: "textarea",
                        required: true,
                        placeholder: "Explain why you believe WhatsApp automation would benefit your clients and how it fits with their business needs."
                    },
                    {
                        name: "expectedReferrals",
                        label: "Expected Monthly Referrals",
                        type: "select",
                        required: true,
                        options: [
                            { value: "", label: "Select expected monthly referrals" },
                            { value: "1-5", label: "1-5 referrals per month" },
                            { value: "5-10", label: "5-10 referrals per month" },
                            { value: "10-20", label: "10-20 referrals per month" },
                            { value: "20+", label: "20+ referrals per month" }
                        ]
                    }
                ]
            },
            {
                title: "Additional Information",
                fields: [
                    {
                        name: "affiliateExperience",
                        label: "Previous Affiliate Marketing Experience",
                        type: "select",
                        required: true,
                        options: [
                            { value: "", label: "Select your experience" },
                            { value: "none", label: "No prior affiliate experience" },
                            { value: "beginner", label: "Some experience (less than 1 year)" },
                            { value: "intermediate", label: "Moderate experience (1-3 years)" },
                            { value: "advanced", label: "Extensive experience (3+ years)" }
                        ]
                    },
                    {
                        name: "heardAbout",
                        label: "How did you hear about our affiliate program?",
                        type: "select",
                        required: false,
                        options: [
                            { value: "", label: "Select source (optional)" },
                            { value: "website", label: "WhatsForm website" },
                            { value: "social_media", label: "Social media" },
                            { value: "referral", label: "Referral from someone" },
                            { value: "search", label: "Google search" },
                            { value: "event", label: "Event or webinar" },
                            { value: "other", label: "Other" }
                        ]
                    },
                    {
                        name: "additionalInfo",
                        label: "Additional Information or Questions",
                        type: "textarea",
                        required: false,
                        placeholder: "Any additional information you'd like to share, questions about the program, or specific requirements you might have."
                    },
                    {
                        name: "agreeToTerms",
                        label: "I agree to the affiliate program terms and conditions",
                        type: "checkbox",
                        required: true
                    }
                ]
            }
        ]
    }
};
