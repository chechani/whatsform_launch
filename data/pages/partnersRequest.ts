
export const partnersRequestPageData = {
    hero: {
        title: "Partner with WhatsForm",
        subtitle: "Join our growing ecosystem of partners and help businesses transform their customer communication through WhatsApp automation.",
        description: "Whether you're a technology integrator, consultant, or service provider, partnering with WhatsForm opens new revenue opportunities and strengthens your client relationships."
    },

    benefits: [
        {
            icon: "CheckCircleIcon",
            title: "Revenue Growth",
            description: "Earn competitive commissions and recurring revenue through our partner program."
        },
        {
            icon: "CheckCircleIcon",
            title: "Technical Support",
            description: "Get dedicated technical support and training to help you implement WhatsForm solutions."
        },
        {
            icon: "CheckCircleIcon",
            title: "Marketing Resources",
            description: "Access co-marketing opportunities, sales materials, and joint go-to-market strategies."
        },
        {
            icon: "CheckCircleIcon",
            title: "Priority Access",
            description: "Get early access to new features and participate in our product roadmap discussions."
        }
    ],

    partnerTypes: [
        {
            icon: "BuildingOfficeIcon",
            title: "Technology Partners",
            description: "Integrate WhatsForm with your existing platforms and solutions",
            features: ["API Integration Support", "Technical Documentation", "Joint Development", "Co-branded Solutions"]
        },
        {
            icon: "UsersIcon",
            title: "Solution Partners",
            description: "Resell and implement WhatsForm for your clients",
            features: ["Sales Training", "Implementation Support", "Account Management", "Marketing Collateral"]
        },
        {
            icon: "CheckCircleIcon",
            title: "Consulting Partners",
            description: "Offer WhatsForm consulting and professional services",
            features: ["Certification Program", "Best Practice Sharing", "Client Referrals", "Revenue Sharing"]
        }
    ],

    formFields: {
        title: "Partner Application Form",
        subtitle: "Tell us about your organization and how you'd like to partner with WhatsForm.",
        fields: [
            {
                name: "companyName",
                label: "Company Name",
                type: "text",
                required: true,
                placeholder: "Enter your company name"
            },
            {
                name: "contactName",
                label: "Primary Contact Name",
                type: "text",
                required: true,
                placeholder: "Enter your full name"
            },
            {
                name: "email",
                label: "Business Email",
                type: "email",
                required: true,
                placeholder: "contact@yourcompany.com"
            },
            {
                name: "phone",
                label: "Phone Number",
                type: "tel",
                required: true,
                placeholder: "+1 (555) 000-0000"
            },
            {
                name: "website",
                label: "Company Website",
                type: "url",
                required: false,
                placeholder: "https://www.yourcompany.com"
            },
            {
                name: "companySize",
                label: "Company Size",
                type: "select",
                required: true,
                options: [
                    { value: "", label: "Select company size" },
                    { value: "1-10", label: "1-10 employees" },
                    { value: "11-50", label: "11-50 employees" },
                    { value: "51-200", label: "51-200 employees" },
                    { value: "201-500", label: "201-500 employees" },
                    { value: "500+", label: "500+ employees" }
                ]
            },
            {
                name: "partnerType",
                label: "Partnership Type",
                type: "select",
                required: true,
                options: [
                    { value: "", label: "Select partnership type" },
                    { value: "technology", label: "Technology Partner" },
                    { value: "solution", label: "Solution Partner" },
                    { value: "consulting", label: "Consulting Partner" },
                    { value: "other", label: "Other" }
                ]
            },
            {
                name: "industry",
                label: "Primary Industry",
                type: "select",
                required: true,
                options: [
                    { value: "", label: "Select your primary industry" },
                    { value: "technology", label: "Technology" },
                    { value: "consulting", label: "Consulting" },
                    { value: "marketing", label: "Marketing & Advertising" },
                    { value: "healthcare", label: "Healthcare" },
                    { value: "education", label: "Education" },
                    { value: "retail", label: "Retail & E-commerce" },
                    { value: "finance", label: "Finance & Banking" },
                    { value: "other", label: "Other" }
                ]
            },
            {
                name: "clientBase",
                label: "Estimated Client Base Size",
                type: "select",
                required: true,
                options: [
                    { value: "", label: "Select client base size" },
                    { value: "1-10", label: "1-10 clients" },
                    { value: "11-50", label: "11-50 clients" },
                    { value: "51-200", label: "51-200 clients" },
                    { value: "200+", label: "200+ clients" }
                ]
            },
            {
                name: "experience",
                label: "WhatsApp/CRM Integration Experience",
                type: "select",
                required: true,
                options: [
                    { value: "", label: "Select your experience level" },
                    { value: "none", label: "No prior experience" },
                    { value: "basic", label: "Basic experience" },
                    { value: "intermediate", label: "Intermediate experience" },
                    { value: "advanced", label: "Advanced experience" }
                ]
            },
            {
                name: "description",
                label: "Partnership Description",
                type: "textarea",
                required: true,
                placeholder: "Please describe your business, your clients, and how you envision partnering with WhatsForm. Include any specific use cases or integration requirements."
            },
            {
                name: "expectations",
                label: "Partnership Expectations",
                type: "textarea",
                required: true,
                placeholder: "What are your expectations from this partnership? What support do you need from WhatsForm?"
            }
        ]
    }
};
