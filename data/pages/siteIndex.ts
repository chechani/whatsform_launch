

import { industrySolutionsPageData } from './industrySolutions';
import { customersPageData } from './customers';
import { blogPageData } from './blog';

// Helper for individual customer stories
const customerStoryLinks = customersPageData.customers.map(customer => ({
    name: `  - ${customer.name}`,
    path: customer.path,
    description: customer.description,
}));

// Helper for individual blog posts
const blogPostLinks = blogPageData.posts.map(post => ({
    name: `  - ${post.title}`,
    path: post.slug,
    description: post.excerpt,
}));

// Helper to generate the complete, organized industry links with hierarchy
const industryLinks = industrySolutionsPageData.industries.flatMap(industry => {
    const mainIndustryLink = {
        name: industry.title,
        path: industry.link,
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
            description: "Get started with our main pages and understand the core value of WhatsForm.",
            links: [
                { name: 'Home', path: '/', description: "The main landing page introducing WhatsForm's key value propositions." },
                { name: 'Features Overview', path: '/features', description: "A comprehensive look at all the features our platform offers." },
                { name: 'Pricing', path: '/pricing', description: "View our flexible pricing plans for businesses of all sizes." },
                { name: 'Sign Up (Free Trial)', path: '/signup', description: "Start your free 14-day trial and experience the full platform." },
                { name: 'Book a Demo', path: '/book-demo', description: "Schedule a personalized demo with our product specialists." },
            ]
        },
        {
            title: "Product Deep Dive",
            description: "Explore the powerful modules that make up the WhatsForm platform.",
            links: [
                { name: 'Powerful Forms', path: '/powerful-forms', description: "Learn how to build dynamic, conversational forms inside WhatsApp." },
                { name: 'SmartyAI', path: '/smarty-ai', description: "Discover our intelligent AI agents for sales, support, and operations." },
                { name: 'Team Inbox', path: '/team-inbox', description: "Manage all team conversations in one centralized, collaborative inbox." },
                { name: 'Calendar', path: '/calendar', description: "Schedule and track meetings, calls, and follow-ups seamlessly." },
                { name: 'Tasks', path: '/tasks', description: "Turn conversations into actionable tasks and manage team projects." },
                { name: 'Form Responses', path: '/form-responses', description: "Analyze and act on submitted data from a single command center." },
                { name: 'Contact Management', path: '/contact-management', description: "Organize contacts, companies, and groups in our integrated CRM." },
                { name: 'Mini-Apps (Product)', path: '/product', description: "Go beyond forms and build interactive application-like experiences." },
            ]
        },
        {
            title: "Solutions by Team",
            description: "See how WhatsForm empowers specific business functions.",
            links: [
                { name: 'For Marketing', path: '/marketing', description: "Capture leads, automate engagement, and drive revenue on WhatsApp." },
                { name: 'For Sales', path: '/sales', description: "Qualify leads, book appointments, and close deals faster." },
                { name: 'For Support', path: '/support', description: "Scale your customer support with AI agents and a unified inbox." },
                { name: 'For Operations', path: '/operations', description: "Streamline business operations with automated WhatsApp workflows." },
            ]
        },
        {
            title: "Solutions by Industry",
            description: "Custom-tailored use cases for various sectors. Explore our main industry hubs and dive into specific sub-categories.",
            links: [
                { name: 'All Industry Solutions', path: '/industry-solutions', description: "An overview of all the industries and categories we serve." },
                ...industryLinks,
            ]
        },
        {
            title: "Resources & Learning",
            description: "Expand your knowledge with our comprehensive resource library.",
            links: [
                { name: 'Resources Hub', path: '/resources', description: "Complete learning center with guides, tools, templates, and case studies." },
                { name: 'Templates Center', path: '/templates', description: "Craft, manage, and deploy high-performance message templates." },
                { name: 'Forms Browser', path: '/forms-browser', description: "Explore over 200 pre-built form templates for every industry." },
                { name: 'Video Tutorials', path: '/videos', description: "Watch step-by-step walkthroughs, product demos, and success stories." },
                { name: 'Webinars & Events', path: '/webinars', description: "Join live sessions or watch recordings to master our platform." },
                { name: 'ROI Calculator', path: '/roi-calculator', description: "Calculate the potential return on investment from using WhatsForm." },
                { name: 'WhatsApp Business Evaluation', path: '/evaluation', description: "Take a short quiz to get your WhatsApp Business Score." },
            ]
        },
        {
            title: "Blog & Customer Stories",
            description: "Read our latest articles, insights, and success stories.",
            links: [
                { name: 'Blog & Insights', path: '/blog', description: "Latest insights, updates, and best practices for WhatsApp Business automation." },
                ...blogPostLinks,
                { name: 'Customer Stories Hub', path: '/customers', description: "See how leading businesses succeed with WhatsForm." },
                ...customerStoryLinks,
            ]
        },
        {
            title: "Developer & Technical",
            description: "Resources for developers to integrate and build on our platform.",
            links: [
                { name: 'Developer Docs', path: '/developer-docs', description: "Integrate and build on our platform with APIs and webhooks." },
                { name: 'API Collection', path: '/api-collection', description: "Comprehensive API documentation and testing tools for developers." },
            ]
        },
        {
            title: "Help & Support",
            description: "Find answers and connect with our community and support teams.",
            links: [
                { name: 'Help Center', path: '/help-center', description: "Find articles and guides to help you use WhatsForm." },
                { name: 'Community Forum', path: '/community', description: "Connect with other users, share best practices, and get help." },
                { name: 'FAQ Database', path: '/faq', description: "Get answers to frequently asked questions about our service." },
                { name: 'Contact Us', path: '/contact', description: "Get in touch with our team for support and inquiries." },
            ]
        },
        {
            title: "Comparisons",
            description: "See how WhatsForm stacks up against other solutions.",
            links: [
                { name: 'WhatsForm vs Google Forms', path: '/whatsform-vs-google-forms', description: "Compare our WhatsApp forms with traditional Google Forms." },
                { name: 'WhatsForm vs Wati', path: '/whatsform-vs-wati', description: "See how we compare to Wati for WhatsApp Business automation." },
                { name: 'WhatsForm vs Interakt', path: '/whatsform-vs-interakt', description: "Compare our platform with Interakt's WhatsApp solutions." },
                { name: 'WhatsForm vs Double Tick', path: '/whatsform-vs-double-tick', description: "How WhatsForm outperforms Double Tick for business automation." },
            ]
        },
        {
            title: "Company & Ecosystem",
            description: "Learn more about our company, mission, and partner programs.",
            links: [
                { name: 'About Us', path: '/about', description: "Learn about our mission, story, and the team behind WhatsForm." },
                { name: 'Careers', path: '/careers', description: "Explore open positions and join our mission-driven team." },
                { name: 'Branding', path: '/branding', description: "Find our official brand assets and usage guidelines." },
                { name: 'Partners', path: '/partners', description: "Join our partner ecosystem to grow your business with us." },
                { name: 'Partner Application', path: '/partners-request', description: "Apply to become a WhatsForm partner." },
                { name: 'Affiliates', path: '/affiliates', description: "Earn commissions by introducing your audience to WhatsForm." },
                { name: 'Affiliate Application', path: '/affiliates-request', description: "Apply to join our affiliate program." },
            ]
        },
        {
            title: "Legal & Policies",
            description: "Important policies, terms, and service agreements.",
            links: [
                { name: 'Terms of Service', path: '/terms', description: "Read the terms that govern your use of our service." },
                { name: 'Privacy Policy', path: '/privacy', description: "Understand how we collect, use, and protect your data." },
                { name: 'Shipping Policy', path: '/shipping-policy', description: "Review our policy regarding service delivery." },
                { name: 'Refund & Cancellation Policy', path: '/cancellation', description: "Understand our policies on refunds and cancellations." },
            ]
        },
        {
            title: "Site Navigation",
            description: "Utility pages for navigating the website.",
            links: [
                { name: 'Site Index', path: '/site-index', description: "You are here. A complete map of the WhatsForm website." },
            ]
        }
    ]
};
