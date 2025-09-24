export const partnersRequestPageData = {
	hero: {
		title: "Partner with WhatsForm",
		subtitle: "Join our growing ecosystem of partners and help businesses transform their customer communication through WhatsApp automation.",
		description: "Whether you're a technology integrator, consultant, or service provider, partnering with WhatsForm opens new revenue opportunities and strengthens your client relationships."
	},

	benefits: [
		// ... (benefits section is correct and remains unchanged)
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
		// ... (partnerTypes section is correct and remains unchanged)
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
			// ... (other text fields are correct)
			{
				name: "company_name",
				label: "Company Name",
				type: "text",
				required: true,
				placeholder: "Enter your company name"
			},
			{
				name: "primary_contact_name",
				label: "Primary Contact Name",
				type: "text",
				required: true,
				placeholder: "Enter your full name"
			},
			{
				name: "business_email",
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
				name: "company_website",
				label: "Company Website",
				type: "url",
				required: false,
				placeholder: "https://www.yourcompany.com"
			},
			{
				name: "company_size",
				label: "Company Size",
				type: "select",
				required: true,
				options: [
					{ value: "", label: "Select company size" },
					{ value: 'Startup (1-10)', label: 'Startup (1-10)' },
					{ value: 'Small (11-50)', label: 'Small (11-50)' },
					{ value: 'Medium (51-200)', label: 'Medium (51-200)' },
					{ value: 'Large (201-1000)', label: 'Large (201-1000)' },
					{ value: 'Enterprise (1000+)', label: 'Enterprise (1000+)' }
				]
			},
			{
				name: "partnership_type",
				label: "Partnership Type",
				type: "select",
				required: true,
				options: [
					{ value: "", label: "Select partnership type" },
					{ value: "Technology Partner", label: "Technology Partner" },
					{ value: "Solution Partner", label: "Solution Partner" },
					{ value: "Consulting Partner", label: "Consulting Partner" },
					{ value: "Other", label: "Other" }
				]
			},
			{
				name: "industry",
				label: "Primary Industry",
				type: "select",
				required: true,
				options: [
					{ value: "", label: "Select your primary industry" },
					{ value: "Technology", label: "Technology" },
					{ value: "Consulting", label: "Consulting" },
					{ value: "Marketing & Advertising", label: "Marketing & Advertising" },
					{ value: "Healthcare", label: "Healthcare" },
					{ value: "Education", label: "Education" },
					{ value: "Retail & E-commerce", label: "Retail & E-commerce" },
					{ value: "Finance & Banking", label: "Finance & Banking" },
					{ value: "Other", label: "Other" }
				]
			},
			{
				name: "client_base_size",
				label: "Estimated Client Base Size",
				type: "select",
				required: true,
				options: [
					{ value: "", label: "Select client base size" },
					{ value: "1-10 clients", label: "1-10 clients" },
					{ value: "11-50 clients", label: "11-50 clients" },
					{ value: "51-100 clients", label: "51-100 clients" },
					{ value: "101-500 clients", label: "101-500 clients" },
					{ value: "500+ clients", label: "500+ clients" }
				]
			},
			{
				name: "whatsapp_crm_integration_experience",
				label: "WhatsApp/CRM Integration Experience",
				type: "select",
				required: true,
				options: [
					{ value: "", label: "Select your experience level" },
					{ value: "No experience", label: "No experience" },
					{ value: "Basic usage (WhatsApp Business App)", label: "Basic usage (WhatsApp Business App)" },
					{ value: "Intermediate (Some automation tools)", label: "Intermediate (Some automation tools)" },
					{ value: "Advanced (API integrations)", label: "Advanced (API integrations)" },
					{ value: "Expert (WhatsApp API development)", label: "Expert (WhatsApp API development)" }
				]
			},
			{
				name: "partnership_description",
				label: "Partnership Description",
				type: "textarea",
				required: true,
				placeholder: "Please describe your business, your clients, and how you envision partnering with WhatsForm. Include any specific use cases or integration requirements."
			},
			{
				name: "partnership_expectations",
				label: "Partnership Expectations",
				type: "textarea",
				required: true,
				placeholder: "What are your expectations from this partnership? What support do you need from WhatsForm?"
			}
		]
	}
};