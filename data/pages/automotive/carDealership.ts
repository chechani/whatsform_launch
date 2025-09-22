import type { CategoryPageData } from '@/components/_CategoryPageLayout';

export const carDealershipData: CategoryPageData = {
    hero: {
        title: "Drive Sales and Customer Engagement with WhatsApp Forms for Car Dealerships",
        subtitle: "Transform your car dealership's operations with Whatsform. From lead capture to service appointments, our WhatsApp-based forms make it easier than ever to connect with customers and streamline your processes."
    },
    sections: [
        {
            type: 'centeredText',
            title: 'Solutions to Accelerate Your Dealership'
        },
        ...[
            {
                title: "Lead Generation and Test Drives",
                text: "Capture leads directly from your marketing campaigns and allow customers to book test drives through a simple WhatsApp form. Qualify leads faster and fill your sales pipeline.",
                image: "/images/solutions/lead-generation.png",
                features: []
            },
            {
                title: "Vehicle Trade-In Valuation",
                text: "Offer customers a quick and easy way to get a valuation for their trade-in. Customers can submit vehicle details and photos through WhatsApp, and your team can provide a preliminary offer.",
                image: "/images/solutions/valuation.png",
                features: []
            },
            {
                title: "Service and Maintenance Booking",
                text: "Simplify the service process by allowing customers to book appointments, approve work orders, and receive updates via WhatsApp. Enhance customer satisfaction and retention.",
                image: "/images/solutions/service-booking.png",
                features: []
            },
            {
                title: "Customer Feedback and Reviews",
                text: "Automatically send a WhatsApp form to customers after a sale or service to collect feedback and encourage online reviews. Monitor customer satisfaction and build your online reputation.",
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
            title: 'Features for Modern Car Dealerships',
            benefits: [
                {
                    icon: "Bell",
                    title: "Instant Lead Notifications",
                    description: "Get notified instantly when a new lead comes in, allowing for quick follow-up."
                },
                {
                    icon: "Calendar",
                    title: "Calendar Integration",
                    description: "Sync test drive and service appointments with your dealership's calendar."
                },
                {
                    icon: "Clock",
                    title: "Automated Reminders",
                    description: "Send automated reminders to customers about their upcoming appointments."
                },
                {
                    icon: "Upload",
                    title: "Photo and Document Upload",
                    description: "Customers can easily upload photos of their trade-in or their driver's license."
                },
                {
                    icon: "Integration",
                    title: "CRM Integration",
                    description: "Seamlessly integrate with your CRM to keep all customer data in one place."
                },
                {
                    icon: "User",
                    title: "Personalized Communication",
                    description: "Use customer data to send personalized offers and updates."
                }
            ]
        }
    ],
    relevantForms: [],
    closing: {
        title: "Put Your Dealership in the Fast Lane",
        subtitle: "Ready to revolutionize your customer interactions and boost your sales? Discover the power of Whatsform for your car dealership.",
        cta: "Get Started for Free"
    }
};
