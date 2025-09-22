export const restaurantsPageData = {
    hero: {
        title: "WhatsApp Automation for Restaurants",
        subtitle: "Elevate your restaurant's customer experience with intelligent WhatsApp automation. From table reservations to loyalty programs, deliver exceptional service that matches your culinary excellence."
    },
    subCategories: [
        { id: 'fine-dining', slug: 'fine-dining', title: 'Fine Dining' },
        { id: 'qsr', slug: 'quick-service-restaurant-qsr', title: 'Quick Service Restaurant (QSR)' },
        { id: 'cafe-bakery', slug: 'cafe-bakery', title: 'Cafe & Bakery' },
        { id: 'food-delivery', slug: 'food-delivery-service', title: 'Food Delivery Service' },
        { id: 'catering', slug: 'catering', title: 'Catering' },
    ],
    sections: [
        {
            id: 'fine-dining',
            type: 'contentWithImage',
            title: "Streamline Restaurant Operations",
            subtitle: "Restaurant Excellence",
            text: "Automate table bookings, order management, and customer communication to focus on what matters most - creating amazing dining experiences.",
            features: [
                "Instant table reservation confirmations and management",
                "Automated order taking and delivery coordination",
                "Real-time table availability and waitlist management",
                "Personalized menu recommendations and special offers"
            ],
            image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        },
        {
            id: 'qsr',
            type: 'benefitsGrid',
            title: "Key Benefits for Restaurants",
            benefits: [
                {
                    icon: "BuildingStorefrontIcon",
                    title: "Enhanced Dining Experience",
                    description: "Provide personalized service with automated special occasion reminders and dietary preference tracking."
                },
                {
                    icon: "ClockIcon",
                    title: "Operational Efficiency",
                    description: "Reduce no-shows with automated reminders and streamline reservation and order management processes."
                },
                {
                    icon: "CurrencyDollarIcon",
                    title: "Increased Revenue",
                    description: "Promote daily specials, wine pairings, and events through targeted WhatsApp campaigns and upselling."
                },
                {
                    icon: "UserGroupIcon",
                    title: "Customer Retention",
                    description: "Build lasting relationships with personalized follow-ups, loyalty rewards, and exclusive member offers."
                }
            ]
        },
        {
            id: 'cafe-bakery',
            type: 'contentWithImage',
            title: "Complete Restaurant Customer Journey",
            subtitle: "From Inquiry to Loyalty",
            text: "Deliver exceptional service throughout the entire dining experience, from initial inquiry to building long-term customer relationships.",
            features: [
                "Pre-dining: Menu previews, reservation management, and special arrangements",
                "During Service: Order modifications, special requests, and real-time communication",
                "Post-dining: Feedback collection, recipe sharing, and future reservation incentives",
                "Loyalty Management: Rewards tracking, exclusive access, and personalized offers"
            ],
            image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            reverse: true
        }
    ],
    closing: {
        title: "Ready to Serve Better Experiences?",
        subtitle: "Join successful restaurants using WhatsForm to enhance customer experience, increase efficiency, and drive repeat business.",
        cta: "Book a Demo"
    }
};