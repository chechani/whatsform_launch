import type { CategoryPageData } from '@/components/_CategoryPageLayout';

export const autoPartsManufacturingData: CategoryPageData = {
    hero: {
        title: "Streamline Auto-Parts Manufacturing with WhatsApp Forms",
        subtitle: "Enhance operational efficiency and supply chain communication in the auto-parts manufacturing sector with Whatsform. Our platform provides robust solutions for order processing, quality control, and inventory management, all through the convenience of WhatsApp."
    },
    sections: [
        {
            type: 'centeredText',
            title: 'Key Solutions for Auto-Parts Manufacturing'
        },
        ...[
            {
                title: "Order and Supply Chain Management",
                text: "Utilize WhatsApp forms to manage orders from suppliers and distributors. Track shipments, manage inventory levels, and automate reordering processes to ensure a smooth production flow.",
                image: "/images/solutions/order-management.png",
                features: []
            },
            {
                title: "Quality Control and Assurance",
                text: "Implement quality control checks directly on the factory floor using WhatsApp forms. Document inspections, report defects with images, and track corrective actions in real-time.",
                image: "/images/solutions/quality-control.png",
                features: []
            },
            {
                title: "Employee and Shift Management",
                text: "Simplify workforce management with forms for shift scheduling, leave requests, and incident reporting. Keep your team coordinated and informed through instant WhatsApp notifications.",
                image: "/images/solutions/employee-management.png",
                features: []
            },
            {
                title: "Customer and B2B Feedback",
                text: "Gather feedback from your B2B customers and partners. Use WhatsApp forms to conduct satisfaction surveys and collect testimonials to improve your products and services.",
                image: "/images/solutions/customer-feedback.png",
                features: []
            }
        ].map((solution, index) => ({
            type: 'contentWithImage' as const,
            title: solution.title,
            subtitle: '',
            text: solution.text,
            image: solution.image,
            features: solution.features,
            reverse: index % 2 !== 0
        })),
        {
            type: 'benefitsGrid',
            title: 'Features for the Automotive Industry',
            benefits: [
                {
                    icon: "Mobile",
                    title: "Mobile-First Forms",
                    description: "Create forms that are easy to use on any mobile device, perfect for factory floors and warehouses."
                },
                {
                    icon: "Database",
                    title: "Real-Time Data Collection",
                    description: "Capture data instantly and sync it with your existing systems for up-to-the-minute insights."
                },
                {
                    icon: "Workflow",
                    title: "Automated Workflows",
                    description: "Set up automated notifications and approval processes to streamline your operations."
                },
                {
                    icon: "Upload",
                    title: "Image and File Uploads",
                    description: "Allow users to upload images of defects or shipping documents directly through WhatsApp."
                },
                {
                    icon: "Lock",
                    title: "Secure Data Handling",
                    description: "Ensure all your data is collected and stored securely, complying with industry standards."
                },
                {
                    icon: "Integration",
                    title: "Integration Capabilities",
                    description: "Integrate Whatsform with your ERP, CRM, and other business systems for a unified data flow."
                }
            ]
        }
    ],
    relevantForms: [],
    closing: {
        title: "Upgrade Your Manufacturing Process Today",
        subtitle: "Ready to bring the efficiency of WhatsApp to your auto-parts manufacturing operations? Get started with Whatsform and transform your business.",
        cta: "Request a Demo"
    }
};
