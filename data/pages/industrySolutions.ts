
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
    
    // Finance
    "Banking": "Automate customer onboarding, loan applications, and account management.",
    "Insurance": "Streamline claims processing, policy inquiries, and customer support.",
    "Investment & Wealth Management": "Enhance client communication and portfolio updates.",
    "FinTech": "Integrate WhatsApp APIs for seamless financial transactions and notifications.",
    "Accounting & Auditing": "Automate client communications and document collection.",
    
    // Education
    "K-12 School": "Manage parent-teacher communication, attendance notifications, and announcements.",
    "Higher Education": "Streamline admissions, student support, and campus communications.",
    "EdTech Platform": "Enhance user onboarding and provide 24/7 learning support.",
    "Coaching & Tutoring": "Automate class scheduling, progress updates, and student engagement.",
    "Corporate Training": "Manage training schedules, assessments, and employee communications.",
    
    // Marketing & Advertising
    "Digital Marketing Agency": "Manage multiple client campaigns and provide detailed analytics reporting.",
    "Traditional Advertising": "Coordinate campaigns and client communications efficiently.",
    "Public Relations": "Manage media relations and stakeholder communications.",
    "Content Creation": "Streamline client approvals and project communications.",
    "SEO/SEM Services": "Automate reporting and client updates on campaign performance.",
    
    // Retail
    "eCommerce (Online Stores)": "Convert conversations into sales with AI shopping assistants and order tracking.",
    "Physical Stores (Brick and Mortar Stores)": "Integrate online and offline customer experiences.",
    "Omnichannel (eCommerce and Physical Stores)": "Provide unified customer experience across all touchpoints.",
    
    // Travel & Hospitality
    "Hotel & Resorts": "Enhance guest experience with automated concierge services and seamless communication.",
    "Airlines": "Streamline flight bookings, check-ins, and passenger communication.",
    "Travel Agency/Tour Operator": "Automate itinerary planning, booking confirmations, and travel updates.",
    "Online Travel Aggregator (OTA)": "Enhance booking experience and provide 24/7 customer support.",
    "Cruise Lines": "Manage bookings, onboard services, and guest communications efficiently.",
    
    // Automotive
    "Car Dealership": "Convert leads faster with automated follow-ups and test drive scheduling.",
    "Service & Repair Center": "Schedule appointments, send service reminders, and provide repair updates.",
    "Auto Parts Manufacturing": "Streamline B2B communications and inventory management.",
    "Rental Services": "Automate booking confirmations, vehicle handover, and return processes.",
    "EV & Charging Infrastructure": "Manage charging station reservations and user communications.",
    
    // Restaurants
    "Fine Dining": "Elevate guest experience with reservation management and personalized service.",
    "Quick Service Restaurant (QSR)": "Speed up ordering process and manage delivery communications.",
    "Cafe & Bakery": "Handle orders, loyalty programs, and seasonal promotions efficiently.",
    "Food Delivery Service": "Coordinate deliveries, handle customer inquiries, and manage feedback.",
    "Catering": "Manage event bookings, menu planning, and client communications.",
    
    // Fitness & Wellness
    "Gym & Fitness Center": "Automate class bookings, membership management, and workout reminders.",
    "Yoga & Meditation Studio": "Handle class scheduling, payment reminders, and wellness tips.",
    "Wellness Retreats": "Manage bookings, pre-arrival communication, and guest services.",
    "Nutrition & Dietetics": "Provide meal planning, appointment scheduling, and progress tracking.",
    "Spa & Salon": "Automate appointment bookings, service reminders, and promotional offers.",
    
    // Entertainment, Social Media & Gaming
    "Social Media Platform": "Enhance user engagement and provide automated customer support.",
    "Gaming Studio": "Manage player communications, updates, and community engagement.",
    "Streaming Service": "Handle subscription management and content recommendations.",
    "Event Management": "Coordinate event logistics, attendee communication, and feedback collection.",
    "Content Creator/Influencer": "Manage brand partnerships, audience engagement, and campaign coordination.",
    
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
        
        // Map industry names to their corresponding page URLs
        const getIndustryPageUrl = (industryName: string) => {
            const industryPageMap: { [key: string]: string } = {
                "Healthcare": "/healthcare",
                "Finance": "/bfsi", // Based on existing bfsi.tsx file
                "Education": "/education",
                "Retail": "/ecommerce", // Based on existing ecommerce.tsx file
                "Real Estate & Construction": "/real-estate",
                "Marketing & Advertising": "/marketing-agencies",
                "Professional Services": "/ca-firms", // Based on existing ca-firms.tsx file
                "Manufacturing & IMPEX": "/logistics", // Based on existing logistics.tsx file
                "Public Utilities & Non Profits": "/government", // Based on existing government.tsx file
                "Technology": "/product", // Point to product page as general tech page
                "Travel & Hospitality": "/travel-hospitality", // New industry page created
                "Automotive": "/automotive", // New industry page created
                "Restaurants": "/restaurants", // New industry page created
                "Fitness & Wellness": "/fitness-wellness", // New industry page created
                "Entertainment, Social Media & Gaming": "/entertainment" // New industry page created
            };
            return industryPageMap[industryName] || "/contact";
        };
        
        // Map specific categories to their dedicated pages
        const getCategoryPageUrl = (industryName: string, categoryName: string) => {
            const categoryPageMap: { [key: string]: { [key: string]: string } } = {
                "Travel & Hospitality": {
                    "Hotel & Resorts": "/categories/travel-hospitality/hotels-resorts",
                    "Airlines": "/categories/travel-hospitality/airlines",
                    "Travel Agency/Tour Operator": "/contact?industry=Travel%20%26%20Hospitality&category=Travel%20Agency",
                    "Online Travel Aggregator (OTA)": "/contact?industry=Travel%20%26%20Hospitality&category=OTA",
                    "Cruise Lines": "/contact?industry=Travel%20%26%20Hospitality&category=Cruise%20Lines"
                },
                "Automotive": {
                    "Car Dealership": "/categories/automotive/car-dealership",
                    "Service & Repair Center": "/contact?industry=Automotive&category=Service%20Center",
                    "Auto Parts Manufacturing": "/contact?industry=Automotive&category=Auto%20Parts",
                    "Rental Services": "/contact?industry=Automotive&category=Rental%20Services",
                    "EV & Charging Infrastructure": "/contact?industry=Automotive&category=EV%20Charging"
                },
                "Restaurants": {
                    "Fine Dining": "/categories/restaurants/fine-dining",
                    "Quick Service Restaurant (QSR)": "/categories/restaurants/qsr",
                    "Cafe & Bakery": "/contact?industry=Restaurants&category=Cafe%20Bakery",
                    "Food Delivery Service": "/contact?industry=Restaurants&category=Food%20Delivery",
                    "Catering": "/contact?industry=Restaurants&category=Catering"
                },
                "Fitness & Wellness": {
                    "Gym & Fitness Center": "/categories/fitness-wellness/gym-fitness-center",
                    "Yoga & Meditation Studio": "/contact?industry=Fitness%20%26%20Wellness&category=Yoga%20Studio",
                    "Wellness Retreats": "/contact?industry=Fitness%20%26%20Wellness&category=Wellness%20Retreats",
                    "Nutrition & Dietetics": "/contact?industry=Fitness%20%26%20Wellness&category=Nutrition",
                    "Spa & Salon": "/contact?industry=Fitness%20%26%20Wellness&category=Spa%20Salon"
                },
                "Entertainment, Social Media & Gaming": {
                    "Social Media Platform": "/contact?industry=Entertainment%2C%20Social%20Media%20%26%20Gaming&category=Social%20Media%20Platform",
                    "Gaming Studio": "/contact?industry=Entertainment%2C%20Social%20Media%20%26%20Gaming&category=Gaming%20Studio",
                    "Streaming Service": "/contact?industry=Entertainment%2C%20Social%20Media%20%26%20Gaming&category=Streaming%20Service",
                    "Event Management": "/contact?industry=Entertainment%2C%20Social%20Media%20%26%20Gaming&category=Event%20Management",
                    "Content Creator/Influencer": "/contact?industry=Entertainment%2C%20Social%20Media%20%26%20Gaming&category=Content%20Creator"
                }
            };
            
            return categoryPageMap[industryName]?.[categoryName] || null;
        };
        
        return {
            title: industryName,
            description: industryInfo.description,
            image: industryInfo.image,
            link: getIndustryPageUrl(industryName),
            categories: categories.map(categoryName => {
                const categorySlug = slugify(categoryName);
                const industryPageUrl = getIndustryPageUrl(industryName);
                
                // Check if there's a dedicated category page
                const dedicatedCategoryUrl = getCategoryPageUrl(industryName, categoryName);
                
                let categoryPath;
                if (dedicatedCategoryUrl) {
                    // Use dedicated category page
                    categoryPath = dedicatedCategoryUrl;
                } else if (industryPageUrl !== "/contact") {
                    // If the industry has a specific page, link to it with anchor
                    categoryPath = `${industryPageUrl}#${categorySlug}`;
                } else {
                    // For categories without dedicated pages, link to contact with pre-filled info
                    categoryPath = `/contact?industry=${encodeURIComponent(industryName)}&category=${encodeURIComponent(categoryName)}`;
                }
                
                return {
                    name: categoryName,
                    description: getCategoryDescription(categoryName),
                    path: categoryPath
                };
            })
        };
    })
};