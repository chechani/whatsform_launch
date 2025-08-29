
import { 
    ChartBarIcon, HeadsetIcon, CurrencyDollarIcon, AcademicCapIcon, 
    BuildingStorefrontIcon, MegaphoneIcon, StethoscopeIcon, BuildingOfficeIcon, 
    CalculatorIcon, BuildingLibraryIcon, TruckIcon, BanknotesIcon,
    FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon, YouTubeIcon
} from '../icons';

export const headerData = {
    links: [
        { name: 'Home', path: '#/' },
        { name: 'Solutions', isDropdown: true },
        { name: 'Features', path: '#/features' },
        { name: 'SmartyAI', path: '#/smarty-ai' },
        { name: 'Pricing', path: '#/pricing' },
    ],
    solutions: {
        teams: [
            { 
                icon: ChartBarIcon, 
                name: 'WhatsForm for Marketing', 
                description: 'Acquire and engage leads, personalise campaigns at scale', 
                path: '#/marketing' 
            },
              { 
                icon: CurrencyDollarIcon, 
                name: 'WhatsForm for Sales', 
                description: 'Nurture leads, build pipeline and close deals', 
                path: '#/sales' 
            },
            { 
                icon: HeadsetIcon, 
                name: 'WhatsForm for Support', 
                description: 'AI-powered query resolution and automation', 
                path: '#/support' 
            },
          
        ],
        industries: [
            { icon: AcademicCapIcon, name: 'Education', path: '#/education' },
            { icon: BuildingStorefrontIcon, name: 'E-commerce', path: '#/ecommerce' },
            { icon: StethoscopeIcon, name: 'Healthcare', path: '#/healthcare' },
            { icon: BuildingLibraryIcon, name: 'Government', path: '#/government' },
            { icon: TruckIcon, name: 'Logistics', path: '#/logistics' },
            { icon: BanknotesIcon, name: 'BFSI', path: '#/bfsi' },
            { icon: BuildingOfficeIcon, name: 'Real Estate', path: '#/real-estate' },
            { icon: CalculatorIcon, name: 'CA Firms', path: '#/ca-firms' },
            { icon: MegaphoneIcon, name: 'Marketing Agencies', path: '#/marketing-agencies' },
        ],
        viewAll: {
            text: 'View All Industry Solutions',
            path: '#/industry-solutions'
        }
    }
};

export const footerData = {
    columns: [
        {
            title: 'Company',
            links: [
                { name: 'About Us', path: '#/company' },
                { name: 'Careers', path: '#/careers' },
                { name: 'Branding', path: '#/branding' },
                { name: 'Partners', path: '#/partners' },
                { name: 'Affiliates', path: '#/affiliates' },
                { name: 'Terms', path: '#/terms' },
                { name: 'Privacy', path: '#/privacy' },
                { name: 'Shipping Policy', path: '#/shipping-policy' },
                { name: 'Cancellation Policy', path: '#/cancellation' },
            ]
        },
        {
            title: 'Customers',
            links: [
                { name: 'KneeXpert', path: '#/customers/kneexpert' },
                { name: 'Eltech', path: '#/customers/eltech' },
                { name: 'JCAF', path: '#/customers/jcaf' },
                { name: 'Sahaj Hospital', path: '#/customers/sahaj-hospital' },
                { name: 'Moon Sez', path: '#/customers/moon-sez' },
                { name: 'CA B.C.Checahni & Co', path: '#/customers/ca-gmj' },
                { name: 'See All', path: '#/customers' },
            ]
        },
        {
            title: 'Resources',
            links: [
                { name: 'Blog', path: '#/resources' },
                { name: 'Webinars', path: '#/webinars' },
                { name: 'Videos', path: '#/videos' },
                { name: 'FAQ', path: '#/faq' },
                { name: 'Ebooks', path: '#/resources' },
                { name: 'vs Google Forms', path: '#/whatsform-vs-google-forms' },
                { name: 'WhatsApp Templates', path: '#/templates' },
                { name: 'Customer Stories', path: '#/customers' },
                { name: 'Chatbot Library', path: '#/resources' },
                { name: 'Help Center', path: '#/help-center' },
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