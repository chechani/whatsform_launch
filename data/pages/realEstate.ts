export const realEstatePageData = {
    hero: {
        title: "Close Deals Faster with AI-Powered Real Estate Conversations",
        subtitle: "From instant lead inquiry to automated site visit scheduling, WhatsForm transforms how you capture, nurture, and convert real estate leads on WhatsApp.",
    },
    subCategories: [
        { id: 'real-estate-agency', slug: 'real-estate-agency', title: 'Real Estate Agency' },
        { id: 'construction-company', slug: 'construction-company', title: 'Construction Company' },
        { id: 'property-management', slug: 'property-management', title: 'Property Management' },
        { id: 'architecture-planning', slug: 'architecture-planning', title: 'Architecture & Planning' },
        { id: 'co-working-spaces', slug: 'co-working-spaces', title: 'Co-working Spaces' },
    ],
    sections: [
        {
            id: 'real-estate-agency',
            type: 'contentWithImage',
            subtitle: 'INTERACTIVE PROPERTY INQUIRY',
            title: 'Your AI-Powered Sales Agent',
            text: 'When a prospect inquires via WhatsApp, our AI assistant engages them immediately. It understands their requirements (budget, location, BHK), fetches matching listings from your database, and answers specific questions about amenities, turning a simple query into a qualified lead.',
            image: 'https://picsum.photos/seed/realestate1/500/400',
            features: [
                "24/7 lead engagement & qualification",
                "Real-time integration with property inventory",
                "Natural language understanding for queries",
                "Seamless lead data capture into your CRM"
            ]
        },
        {
            id: 'construction-company',
            type: 'contentWithImage',
            subtitle: 'AUTOMATED SITE VISIT SCHEDULING',
            title: 'Book Visits Without the Back-and-Forth',
            text: 'Once a buyer is interested, the bot can schedule a site visit directly in the chat. It shows available slots, books the appointment in your calendar, and sends automated confirmations and reminders, drastically reducing no-shows and administrative work.',
            image: 'https://picsum.photos/seed/realestate2/500/400',
            reverse: true,
            features: [
                "Automated calendar integration for scheduling",
                "Instant confirmations with location pin",
                "Automated pre-visit reminders to reduce no-shows",
                "Post-visit feedback collection"
            ]
        },
        {
            id: 'property-management',
            type: 'contentWithImage',
            subtitle: 'DOCUMENT COLLECTION & BOOKING',
            title: 'A Smooth Journey from Interest to Ownership',
            text: 'Simplify the final steps of the sale. Buyers can securely upload required documents like identity proofs and financial papers directly via WhatsApp. The bot can also guide them through the booking form conversationally, ensuring all details are captured accurately before generating a final agreement.',
            image: 'https://picsum.photos/seed/realestate3/500/400',
            features: [
                "Secure document uploads within WhatsApp",
                "Conversational booking form completion",
                "Automated generation of booking confirmations",
                "Reduced paperwork and email clutter"
            ]
        },
        {
            id: 'architecture-planning',
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Real Estate Business",
            subtitle: "Implementing an AI-driven WhatsApp strategy delivers a clear competitive advantage.",
            benefits: [
                {
                    icon: "CheckCircleIcon",
                    title: "Faster Lead Response",
                    description: "Engage leads the moment they inquire, dramatically improving your chances of conversion."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Increased Efficiency",
                    description: "Automate scheduling and data collection, allowing your agents to focus on closing deals, not on admin tasks."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Enhanced Buyer Experience",
                    description: "Provide a modern, personalized, and on-demand service that builds trust and impresses clients."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Higher Conversion Rates",
                    description: "A seamless, responsive, and engaging process keeps buyers nurtured and moves them through the sales funnel faster."
                }
            ]
        }
    ],
    closing: {
        title: "Ready to revolutionize your real estate sales process?",
        subtitle: "See how WhatsForm can help you sell more properties, faster than ever before.",
        cta: "Request a Demo"
    }
};