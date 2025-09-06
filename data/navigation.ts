

import { 
    ChartBarIcon, HeadsetIcon, CurrencyDollarIcon, AcademicCapIcon, 
    BuildingStorefrontIcon, MegaphoneIcon, StethoscopeIcon, BuildingOfficeIcon, 
    CalculatorIcon, BuildingLibraryIcon, TruckIcon, BanknotesIcon, OperationsIcon,
    FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon, YouTubeIcon
} from '../icons';

export const headerData = {
    links: [
        { name: 'Home', path: '/' },
        { name: 'Solutions', isDropdown: true },
        { name: 'Features', path: '/features' },
        { name: 'SmartyAI', path: '/smarty-ai' },
        { name: 'Pricing', path: '/pricing' },
    ],
    solutions: {
        teams: [
            { 
                icon: ChartBarIcon, 
                name: 'WhatsForm for Marketing', 
                description: 'Acquire and engage leads, personalise campaigns at scale', 
                path: '/marketing' 
            },
              { 
                icon: CurrencyDollarIcon, 
                name: 'WhatsForm for Sales', 
                description: 'Nurture leads, build pipeline and close deals', 
                path: '/sales' 
            },
            { 
                icon: HeadsetIcon, 
                name: 'WhatsForm for Support', 
                description: 'AI-powered query resolution and automation', 
                path: '/support' 
            },
            { 
                icon: OperationsIcon, 
                name: 'WhatsForm for Operations', 
                description: 'Streamline workflows, automate processes and boost efficiency', 
                path: '/operations' 
            },
          
        ],
        industries: [
            { icon: AcademicCapIcon, name: 'Education', path: '/education' },
            { icon: BuildingStorefrontIcon, name: 'E-commerce', path: '/ecommerce' },
            { icon: StethoscopeIcon, name: 'Healthcare', path: '/healthcare' },
            { icon: BuildingLibraryIcon, name: 'Government', path: '/government' },
            { icon: TruckIcon, name: 'Logistics', path: '/logistics' },
            { icon: BanknotesIcon, name: 'BFSI', path: '/bfsi' },
            { icon: BuildingOfficeIcon, name: 'Real Estate', path: '/real-estate' },
            { icon: CalculatorIcon, name: 'CA Firms', path: '/ca-firms' },
            { icon: MegaphoneIcon, name: 'Marketing Agencies', path: '/marketing-agencies' },
        ],
        viewAll: {
            text: 'View All Industry Solutions',
            path: '/industry-solutions'
        }
    }
};

export const footerData = {
    columns: [
        {
            title: 'Product',
            links: [
                { name: 'Features', path: '/features' },
                { name: 'Powerful Forms', path: '/powerful-forms' },
                { name: 'SmartyAI', path: '/smarty-ai' },
                { name: 'Team Inbox', path: '/team-inbox' },
                { name: 'Calendar', path: '/calendar' },
                { name: 'Tasks', path: '/tasks' },
                { name: 'Form Responses', path: '/form-responses' },
                { name: 'Contact Management', path: '/contact-management' },
            ]
        },
        {
            title: 'Solutions',
            links: [
                { name: 'For Marketing', path: '/marketing' },
                { name: 'For Sales', path: '/sales' },
                { name: 'For Support', path: '/support' },
                { name: 'For Operations', path: '/operations' },
                { name: 'Industry Solutions', path: '/industry-solutions' },
                { name: 'vs Google Forms', path: '/whatsform-vs-google-forms' },
            ]
        },
        {
            title: 'Resources',
            links: [
                { name: 'Blog', path: '/resources' },
                { name: 'Customer Stories', path: '/customers' },
                { name: 'Webinars', path: '/webinars' },
                { name: 'Videos', path: '/videos' },
                { name: 'Templates', path: '/templates' },
                { name: 'Forms Browser', path: '/forms-browser' },
                { name: 'Developer Docs', path: '/developer-docs' },
                { name: 'Community', path: '/community' },
                { name: 'Help Center', path: '/help-center' },
                { name: 'FAQ', path: '/faq' },
                { name: 'Site Index', path: '/site-index' },
            ]
        },
        {
            title: 'Company',
            links: [
                { name: 'About Us', path: '/company' },
                { name: 'Careers', path: '/careers' },
                { name: 'Branding', path: '/branding' },
                { name: 'Partners', path: '/partners' },
                { name: 'Affiliates', path: '/affiliates' },
                { name: 'Terms', path: '/terms' },
                { name: 'Privacy', path: '/privacy' },
                { name: 'Shipping Policy', path: '/shipping-policy' },
                { name: 'Cancellation Policy', path: '/cancellation' },
            ]
        }
    ],
    socials: [
        { name: 'Facebook', path: 'https://facebook.com', icon: FacebookIcon },
        { name: 'Twitter', path: 'https://twitter.com', icon: TwitterIcon },
        { name: 'LinkedIn', path: 'https://linkedin.com', icon: LinkedInIcon },
        { name: 'Instagram', path: 'https://instagram.com', icon: InstagramIcon },
        { name: 'YouTube', path: 'https://youtube.com', icon: YouTubeIcon },
    ]
};
