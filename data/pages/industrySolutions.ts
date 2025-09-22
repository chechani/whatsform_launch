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
                "Marketing & Advertising": {
                    "Digital Marketing Agency": "/marketing-advertising/DigitalMarketingAgencyPage",
                    "Traditional Advertising": "/marketing-advertising/TraditionalAdvertisingPage",
                    "Public Relations": "/marketing-advertising/PublicRelationsPage",
                    "Content Creation": "/marketing-advertising/ContentCreationPage",
                    "SEO/SEM Services": "/marketing-advertising/SeoSemServicesPage"
                },
                "Retail": {
                    "eCommerce (Online Stores)": "/retail/ECommerceOnlineStoresPage",
                    "Physical Stores (Brick and Mortar Stores)": "/retail/PhysicalStoresPage", 
                    "Omnichannel (eCommerce and Physical Stores)": "/retail/OmnichannelPage"
                },
                "Education": {
                    "K-12 School": "/education/K12SchoolPage",
                    "Higher Education": "/education/HigherEducationPage",
                    "EdTech Platform": "/education/EdTechPlatformPage",
                    "Coaching & Tutoring": "/education/CoachingTutoringPage",
                    "Corporate Training": "/education/CorporateTrainingPage"
                },
                "Finance": {
                    "Banking": "/finance/BankingPage",
                    "Insurance": "/finance/InsurancePage", 
                    "Investment & Wealth Management": "/finance/InvestmentWealthManagementPage",
                    "FinTech": "/finance/FinTechPage",
                    "Accounting & Auditing": "/finance/AccountingAuditingPage"
                },
                "Healthcare": {
                    "Hospital/Clinic": "/healthcare/HospitalsClinicsPage",
                    "Pharmaceuticals": "/healthcare/PharmaceuticalsPage",
                    "Medical Devices": "/healthcare/MedicalDevicesPage", 
                    "Telemedicine": "/healthcare/TelemedicinePage",
                    "Wellness & Diagnostics": "/healthcare/WellnessDiagnosticsPage"
                },
                "Travel & Hospitality": {
                    "Hotel & Resorts": "/travel-hospitality/hotel-resorts",
                    "Airlines": "/travel-hospitality/airlines",
                    "Travel Agency/Tour Operator": "/travel-hospitality/travel-agency-tour-operator",
                    "Online Travel Aggregator (OTA)": "/travel-hospitality/online-travel-aggregator-ota",
                    "Cruise Lines": "/travel-hospitality/cruise-lines"
                },
                "Automotive": {
                    "Car Dealership": "/automotive/car-dealership",
                    "Service & Repair Center": "/automotive/service-repair-center",
                    "Auto Parts Manufacturing": "/automotive/auto-parts-manufacturing",
                    "Rental Services": "/automotive/rental-services",
                    "EV & Charging Infrastructure": "/automotive/ev-charging-infrastructure"
                },
                "Restaurants": {
                    "Fine Dining": "/restaurants-food-outlets/fine-dining",
                    "Quick Service Restaurant (QSR)": "/restaurants-food-outlets/quick-service-restaurant-qsr",
                    "Cafe & Bakery": "/restaurants-food-outlets/cafe-bakery",
                    "Food Delivery Service": "/restaurants-food-outlets/food-delivery-service",
                    "Catering": "/restaurants-food-outlets/catering"
                },
                "Fitness & Wellness": {
                    "Gym & Fitness Center": "/fitness-wellness/GymFitnessCenterPage",
                    "Yoga & Meditation Studio": "/fitness-wellness/YogaMeditationStudioPage",
                    "Wellness Retreats": "/fitness-wellness/WellnessRetreatsPage",
                    "Nutrition & Dietetics": "/fitness-wellness/NutritionDieteticsPage",
                    "Spa & Salon": "/fitness-wellness/SpaSalonPage"
                },
                "Entertainment, Social Media & Gaming": {
                    "Social Media Platform": "/entertainment/SocialMediaPlatformPage",
                    "Gaming Studio": "/entertainment/GamingStudioPage",
                    "Streaming Service": "/entertainment/StreamingServicePage",
                    "Event Management": "/entertainment/EventManagementPage",
                    "Content Creator/Influencer": "/entertainment/ContentCreatorInfluencerPage"
                },
                "Manufacturing & IMPEX": {
                    "Heavy Manufacturing": "/manufacturing-impex/HeavyManufacturingPage",
                    "Consumer Goods": "/manufacturing-impex/ConsumerGoodsPage",
                    "Electronics": "/manufacturing-impex/ElectronicsPage",
                    "Import/Export Trading": "/manufacturing-impex/ImportExportTradingPage",
                    "Logistics & Supply Chain": "/manufacturing-impex/LogisticsSupplyChainPage"
                },
                "Real Estate & Construction": {
                    "Real Estate Agency": "/real-estate-construction/RealEstateAgencyPage",
                    "Construction Company": "/real-estate-construction/ConstructionCompanyPage",
                    "Property Management": "/real-estate-construction/PropertyManagementPage",
                    "Architecture & Planning": "/real-estate-construction/ArchitecturePlanningPage",
                    "Co-working Spaces": "/real-estate-construction/CoWorkingSpacesPage"
                },
                "Professional Services": {
                    "Consulting": "/professional-services/ConsultingPage",
                    "Legal Services": "/professional-services/LegalServicesPage",
                    "Human Resources": "/professional-services/HumanResourcesPage",
                    "Design & Architecture": "/professional-services/DesignArchitecturePage",
                    "IT Services": "/professional-services/ItServicesPage"
                },
                "Technology": {
                    "SaaS": "/technology/SaaSPage",
                    "Hardware Manufacturing": "/technology/HardwareManufacturingPage",
                    "Software Development": "/technology/SoftwareDevelopmentPage",
                    "Cloud & Hosting": "/technology/CloudHostingPage",
                    "Cybersecurity": "/technology/CybersecurityPage"
                },
                "Public Utilities & Non Profits": {
                    "NGO/Charity": "/public-utilities-non-profits/NgoCharityPage",
                    "Government Body": "/public-utilities-non-profits/GovernmentBodyPage",
                    "Energy & Utilities": "/public-utilities-non-profits/EnergyUtilitiesPage",
                    "Waste Management": "/public-utilities-non-profits/WasteManagementPage",
                    "Public Transport": "/public-utilities-non-profits/PublicTransportPage"
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
                } else if (industryPageUrl !== "/contact" && !industryPageUrl.startsWith('/categories')) {
                    // If the industry has a specific page, and it's not a categories page, link to its sub-page
                    categoryPath = `${industryPageUrl}/${categorySlug}`;
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