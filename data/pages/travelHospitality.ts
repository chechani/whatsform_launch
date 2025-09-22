export const travelHospitalityPageData = {
    hero: {
        title: "WhatsApp Automation for Travel & Hospitality",
        subtitle: "Transform guest experiences and streamline operations with intelligent WhatsApp automation. From booking confirmations to concierge services, deliver exceptional hospitality at scale."
    },
    subCategories: [
        { id: 'hotels-resorts', slug: 'hotel-resorts', title: 'Hotels & Resorts' },
        { id: 'airlines', slug: 'airlines', title: 'Airlines' },
        { id: 'travel-agency', slug: 'travel-agency-tour-operator', title: 'Travel Agency/Tour Operator' },
        { id: 'ota', slug: 'online-travel-aggregator-ota', title: 'Online Travel Aggregator (OTA)' },
        { id: 'cruise-lines', slug: 'cruise-lines', title: 'Cruise Lines' },
    ],
    sections: [
        {
            id: 'hotels-resorts',
            type: 'contentWithImage',
            title: "Elevate Guest Experience",
            subtitle: "Hospitality Excellence",
            text: "Provide seamless, personalized service throughout the entire guest journey with WhatsApp automation.",
            features: [
                "Instant booking confirmations and pre-arrival communication",
                "24/7 concierge services and local recommendations",
                "Real-time updates on bookings, flights, and itineraries",
                "Automated check-in/check-out processes"
            ],
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        },
        {
            id: 'airlines',
            type: 'benefitsGrid',
            title: "Key Benefits for Travel & Hospitality",
            benefits: [
                {
                    icon: "BuildingOfficeIcon",
                    title: "Enhanced Guest Satisfaction",
                    description: "Provide instant responses and personalized service that exceeds guest expectations at every touchpoint."
                },
                {
                    icon: "DevicePhoneMobileIcon",
                    title: "Operational Efficiency",
                    description: "Automate routine tasks like bookings, confirmations, and inquiries to reduce staff workload."
                },
                {
                    icon: "GlobeAltIcon",
                    title: "Global Communication",
                    description: "Communicate with guests in multiple languages and time zones with AI-powered automation."
                },
                {
                    icon: "StarIcon",
                    title: "Revenue Growth",
                    description: "Increase bookings and upsell services through personalized recommendations and targeted offers."
                }
            ]
        },
        {
            id: 'travel-agency',
            type: 'contentWithImage',
            title: "Complete Travel & Hospitality Solutions",
            subtitle: "End-to-End Automation",
            text: "From initial inquiry to post-stay follow-up, WhatsForm handles every aspect of guest communication and service delivery.",
            features: [
                "Pre-booking: Destination info, package customization, and booking assistance",
                "Booking Process: Confirmation, payment processing, and itinerary delivery",
                "During Stay: Concierge services, activity booking, and real-time support",
                "Post-stay: Feedback collection, loyalty programs, and future booking incentives"
            ],
            image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            reverse: true
        }
    ],
    closing: {
        title: "Ready to Transform Your Guest Experience?",
        subtitle: "Join leading travel and hospitality brands using WhatsForm to deliver exceptional service and increase guest satisfaction.",
        cta: "Book a Demo"
    }
};