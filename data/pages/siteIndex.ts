

import { industrySolutionsPageData } from './industrySolutions';
import { customersPageData } from './customers';

// Helper for customer stories
const customerStoryLinks = customersPageData.customers.map(customer => ({
    name: `  - ${customer.name} Customer Story`,
    path: customer.path,
    description: customer.description,
}));

// Helper to generate the industry links with hierarchy
const industryLinks = industrySolutionsPageData.industries.flatMap(industry => {
    // Determine the path for the main industry page from a predefined list
    const mainIndustryPaths: { [key: string]: string } = {
        "Marketing & Advertising": "#/marketing-agencies",
        "Retail": "#/ecommerce",
        "Education": "#/education",
        "Finance": "#/bfsi",
        "Healthcare": "#/healthcare",
        "Public Utilities & Non Profits": "#/government",
        "Real Estate & Construction": "#/real-estate",
        "Manufacturing & IMPEX": "#/logistics",
        "Professional Services": "#/ca-firms", // Using a relevant existing page as a hub
    };
    const mainPath = mainIndustryPaths[industry.name] || '#/industry-solutions';

    const mainIndustryLink = {
        name: industry.name,
        path: mainPath,
        description: industry.description
    };

    const subCategoryLinks = industry.categories.map(category => ({
        name: `  - ${category.name}`,
        path: category.path,
        description: category.description
    }));

    return [mainIndustryLink, ...subCategoryLinks];
});

export const siteIndexData = {
    hero: {
        title: "Site Index",
        subtitle: "Explore a complete and organized map of the WhatsForm website. Each page is listed with a brief description to help you find exactly what you need."
    },
    categories: [
        {
            title: "Core Platform",
            description: "Get started with our main pages.",
            links: [
                { name: 'Home', path: '#/', description: "The main landing page introducing WhatsForm's key value propositions." },
                { name: 'Features Overview', path: '#/features', description: "A comprehensive look at all the features our platform offers." },
                { name: 'Pricing', path: '#/pricing', description: "View our flexible pricing plans for businesses of all sizes." },
            ]
        },
        {
            title: "Product Deep Dive",
            description: "Explore the powerful modules that make up WhatsForm.",
            links: [
                { name: 'Powerful Forms', path: '#/powerful-forms', description: "Learn how to build dynamic, conversational forms inside WhatsApp." },
                { name: 'SmartyAI', path: '#/smarty-ai', description: "Discover our intelligent AI agents for sales, support, and operations." },
                { name: 'Team Inbox', path: '#/team-inbox', description: "Manage all team conversations in one centralized, collaborative inbox." },
                { name: 'Calendar', path: '#/calendar', description: "Schedule and track meetings, calls, and follow-ups seamlessly." },
                { name: 'Tasks', path: '#/tasks', description: "Turn conversations into actionable tasks and manage team projects." },
                { name: 'Form Responses', path: '#/form-responses', description: "Analyze and act on submitted data from a single command center." },
                { name: 'Contact Management', path: '#/contact-management', description: "Organize contacts, companies, and groups in our integrated CRM." },
                { name: 'Mini-Apps (Product)', path: '#/product', description: "Go beyond forms and build interactive application-like experiences." },
            ]
        },
        {
            title: "Solutions by Team",
            description: "See how WhatsForm empowers specific business functions.",
            links: [
                { name: 'For Marketing', path: '#/marketing', description: "Capture leads, automate engagement, and drive revenue on WhatsApp." },
                { name: 'For Sales', path: '#/sales', description: "Qualify leads, book appointments, and close deals faster." },
                { name: 'For Support', path: '#/support', description: "Scale your customer support with AI agents and a unified inbox." },
            ]
        },
        {
            title: "Solutions by Industry",
            description: "Custom-tailored use cases for various sectors. Explore our main industry hubs or dive into specific sub-categories.",
            links: [
                { name: 'All Industry Solutions', path: '#/industry-solutions', description: "An overview of all the industries and categories we serve." },
                ...industryLinks
            ]
        },
        {
            title: "Resources & Learning",
            description: "Expand your knowledge and get inspired.",
            links: [
                { name: 'Blog', path: '#/resources', description: "Insights and tips on WhatsApp business automation and AI." },
                { name: 'Customer Stories Hub', path: '#/customers', description: "See how leading businesses succeed with WhatsForm." },
                ...customerStoryLinks,
                { name: 'Webinars', path: '#/webinars', description: "Join live sessions or watch recordings to master our platform." },
                { name: 'Videos', path: '#/videos', description: "Watch tutorials, walkthroughs, and success stories." },
                { name: 'Templates Center', path: '#/templates', description: "Craft, manage, and deploy high-performance message templates." },
                { name: 'Forms Browser', path: '#/forms-browser', description: "Explore over 200 pre-built form templates for every industry." },
                { name: 'Developer Docs', path: '#/developer-docs', description: "Integrate and build on our platform with APIs and webhooks." },
                { name: 'Community', path: '#/community', description: "Connect with other users, share best practices, and get help." },
                { name: 'Help Center', path: '#/help-center', description: "Find articles and guides to help you use WhatsForm." },
                { name: 'FAQ', path: '#/faq', description: "Get answers to frequently asked questions about our service." },
                { name: 'Site Index', path: '#/site-index', description: "You are here. A complete map of the WhatsForm website." },
            ]
        },
        {
            title: "Company",
            description: "Learn more about us and our ecosystem.",
            links: [
                { name: 'About Us', path: '#/company', description: "Learn about our mission, story, and the team behind WhatsForm." },
                { name: 'Careers', path: '#/careers', description: "Explore open positions and join our mission-driven team." },
                { name: 'Branding', path: '#/branding', description: "Find our official brand assets and usage guidelines." },
                { name: 'Partners', path: '#/partners', description: "Join our partner ecosystem to grow your business with us." },
                { name: 'Affiliates', path: '#/affiliates', description: "Earn commissions by introducing your audience to WhatsForm." },
            ]
        },
         {
            title: "Get Started",
            description: "Ready to transform your business communication?",
            links: [
                { name: 'Sign Up (Free Trial)', path: '#/signup', description: "Start your free 14-day trial and experience the full platform." },
                { name: 'Book a Demo', path: '#/book-demo', description: "Schedule a personalized demo with our product specialists." },
                { name: 'WhatsApp Business Evaluation', path: '#/evaluation', description: "Take a short quiz to get your WhatsApp Business Score." },
            ]
        },
        {
            title: "Legal",
            description: "Important policies and terms.",
            links: [
                { name: 'Terms of Service', path: '#/terms', description: "Read the terms that govern your use of our service." },
                { name: 'Privacy Policy', path: '#/privacy', description: "Understand how we collect, use, and protect your data." },
                { name: 'Shipping Policy', path: '#/shipping-policy', description: "Review our policy regarding service delivery." },
                { name: 'Refund & Cancellation Policy', path: '#/cancellation', description: "Understand our policies on refunds and cancellations." },
            ]
        }
    ]
};
