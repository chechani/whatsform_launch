

import React, { useState, useEffect } from 'react';
import { Header, Footer } from './Layout';
import HomePage from './pages/HomePage';
import MarketingPage from './pages/MarketingPage';
import SupportPage from './pages/SupportPage';
import SalesPage from './pages/SalesPage';
import TeamInboxPage from './pages/TeamInboxPage';
import MiniAppsPage from './pages/ProductPage';
import SmartyAIPage from './pages/SmartyAIPage';
import PartnersPage from './pages/PartnersPage';
import ResourcesPage from './pages/ResourcesPage';
import PricingPage from './pages/PricingPage';
import EducationPage from './pages/EducationPage';
import EcommercePage from './pages/EcommercePage';
import MarketingAgenciesPage from './pages/MarketingAgenciesPage';
import HealthcarePage from './pages/HealthcarePage';
import CompanyPage from './pages/CompanyPage';
import CustomersPage from './pages/CustomersPage';
import RealEstatePage from './pages/RealEstatePage';
import CAFirmsPage from './pages/CAFirmsPage';
import IndustrySolutionsPage from './pages/IndustrySolutionsPage';
import GovernmentPage from './pages/GovernmentPage';
import LogisticsPage from './pages/LogisticsPage';
import BFSI_Page from './pages/BFSI_Page';
import ComparisonPage from './pages/ComparisonPage';
import EvaluationPage from './pages/EvaluationPage';
import SignupPage from './pages/SignupPage';
import TemplateCenterPage from './pages/TemplateCenterPage';
import CalendarPage from './pages/CalendarPage';
import TasksPage from './pages/TasksPage';
import FormResponsePage from './pages/FormResponsePage';
import ContactManagementPage from './pages/ContactManagementPage';
import ShippingPolicyPage from './pages/ShippingPolicyPage';
import FeaturesPage from './pages/FeaturesPage'; 
import PowerfulFormsPage from './pages/PowerfulFormsPage'; 
import VideosPage from './pages/VideosPage'; 
import FaqPage from './pages/FaqPage'; 
import { FloatingWidgets } from './PageBuilder';

// Import new customer pages
import KneeXpertPage from './pages/customers/KneeXpertPage';
import EltechPage from './pages/customers/EltechPage';
import JcafPage from './pages/customers/JcafPage';
import SahajHospitalPage from './pages/customers/SahajHospitalPage';
import MoonSezPage from './pages/customers/MoonSezPage';
import CaGmjPage from './pages/customers/CaGmjPage';
import DeveloperDocsPage from './pages/DeveloperDocsPage';

// Import blog pages
import FormsInsideWhatsappPage from './pages/blog/FormsInsideWhatsappPage';
import SmartyAIUnlocksPage from './pages/blog/SmartyAIUnlocksPage';

// Import newly added pages
import BookDemoPage from './pages/BookDemoPage';
import CareersPage from './pages/CareersPage';
import BrandingPage from './pages/BrandingPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import AffiliatesPage from './pages/AffiliatesPage';
import CommunityPage from './pages/CommunityPage';
import HelpCenterPage from './pages/HelpCenterPage';
import { seoData } from './data/seo';
import CancellationPage from './pages/CancellationPage';
import WebinarsPage from './pages/WebinarsPage';


const App: React.FC = () => {
    // --- STATE MANAGEMENT ---
    const [theme, setTheme] = useState('light');

    const [route, setRoute] = useState(window.location.hash || '#/');

    // --- EFFECTS ---
    // This effect runs once on mount to disable the browser's default scroll restoration.
    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
    }, []);
    
    // Theme toggling effect
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    // Routing effect: Handles hash changes from browser navigation (back/forward buttons)
    useEffect(() => {
        const handleHashChange = () => {
            setRoute(window.location.hash || '#/');
        };
        window.addEventListener('hashchange', handleHashChange);
        // Set initial route from the current hash on component mount
        handleHashChange();
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    // Side effect for when the route changes: scroll to top and update SEO
    useEffect(() => {
        const timer = setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'auto' });
        }, 0);

        // Path will be like '/', '/marketing', etc.
        const path = route.substring(1) || '/';
        const pageSeo = seoData[path] || seoData['/'];
        document.title = pageSeo.title;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', pageSeo.description);
        }
        
        return () => clearTimeout(timer);
    }, [route]);


    // --- HANDLERS ---
    const navigate = (path: string) => {
        const newPath = path.startsWith('#') ? path : `#${path}`;
        
        // Check against the current route state. If it's the same, just scroll up.
        if (route === newPath) {
            window.scrollTo(0, 0);
            return;
        }

        // Set the state directly. This is the most reliable way to trigger a re-render.
        setRoute(newPath);

        // Update the hash to keep the URL bar in sync.
        // The hashchange listener will fire, but React will ignore the state update if it's the same.
        try {
            if (window.location.hash !== newPath) {
                window.location.hash = newPath;
            }
        } catch (error) {
            // Silently fail in sandboxed environments where hash cannot be set.
            // The state is already updated, so the app will navigate visually.
        }
    };

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // --- ROUTING ---
    const path = route.startsWith('#') ? route.substring(1) : route;

    if (path === '/evaluation') {
        return (
            <>
                <EvaluationPage navigate={navigate} />
                <FloatingWidgets />
            </>
        );
    }

    const renderPage = () => {
        switch (path) {
            case '/marketing': return <MarketingPage navigate={navigate} />;
            case '/support': return <SupportPage navigate={navigate} />;
            case '/sales': return <SalesPage navigate={navigate} />;
            case '/team-inbox': return <TeamInboxPage navigate={navigate} />;
            case '/product': return <MiniAppsPage navigate={navigate} />;
            case '/features': return <FeaturesPage navigate={navigate} />;
            case '/powerful-forms': return <PowerfulFormsPage navigate={navigate} />;
            case '/smarty-ai': return <SmartyAIPage navigate={navigate} />;
            case '/partners': return <PartnersPage navigate={navigate} />;
            case '/resources': return <ResourcesPage navigate={navigate} />;
            case '/pricing': return <PricingPage navigate={navigate} />;
            case '/education': return <EducationPage navigate={navigate} />;
            case '/ecommerce': return <EcommercePage navigate={navigate} />;
            case '/marketing-agencies': return <MarketingAgenciesPage navigate={navigate} />;
            case '/healthcare': return <HealthcarePage navigate={navigate} />;
            case '/real-estate': return <RealEstatePage navigate={navigate} />;
            case '/ca-firms': return <CAFirmsPage navigate={navigate} />;
            case '/government': return <GovernmentPage navigate={navigate} />;
            case '/logistics': return <LogisticsPage navigate={navigate} />;
            case '/bfsi': return <BFSI_Page navigate={navigate} />;
            case '/industry-solutions': return <IndustrySolutionsPage navigate={navigate} />;
            case '/whatsform-vs-google-forms': return <ComparisonPage navigate={navigate} />;
            case '/company': return <CompanyPage navigate={navigate} />;
            case '/customers': return <CustomersPage navigate={navigate} />;
            case '/templates': return <TemplateCenterPage navigate={navigate} />;
            case '/calendar': return <CalendarPage navigate={navigate} />;
            case '/tasks': return <TasksPage navigate={navigate} />;
            case '/form-responses': return <FormResponsePage navigate={navigate} />;
            case '/contact-management': return <ContactManagementPage navigate={navigate} />;
            case '/shipping-policy': return <ShippingPolicyPage />;
            case '/videos': return <VideosPage navigate={navigate} />;
            case '/faq': return <FaqPage navigate={navigate} />;
            // New Page Routes
            case '/book-demo': return <BookDemoPage navigate={navigate} />;
            case '/careers': return <CareersPage navigate={navigate} />;
            case '/branding': return <BrandingPage navigate={navigate} />;
            case '/terms': return <TermsPage />;
            case '/privacy': return <PrivacyPage />;
            case '/cancellation': return <CancellationPage />;
            case '/affiliates': return <AffiliatesPage navigate={navigate} />;
            case '/community': return <CommunityPage navigate={navigate} />;
            case '/help-center': return <HelpCenterPage navigate={navigate} />;
            case '/signup': return <SignupPage navigate={navigate} />;
            case '/webinars': return <WebinarsPage navigate={navigate} />;
            // Customer Case Study Routes
            case '/customers/kneexpert': return <KneeXpertPage navigate={navigate} />;
            case '/customers/eltech': return <EltechPage navigate={navigate} />;
            case '/customers/jcaf': return <JcafPage navigate={navigate} />;
            case '/customers/sahaj-hospital': return <SahajHospitalPage navigate={navigate} />;
            case '/customers/moon-sez': return <MoonSezPage navigate={navigate} />;
            case '/customers/ca-gmj': return <CaGmjPage navigate={navigate} />;
            case '/developer-docs': return <DeveloperDocsPage navigate={navigate} />;
            // Blog Post Routes
// FIX: Pass navigate prop to blog pages as they use the CTA component which requires it.
            case '/blog/forms-inside-whatsapp-is-game-changing': return <FormsInsideWhatsappPage navigate={navigate} />;
            case '/blog/unlocking-business-potential-with-smartyai': return <SmartyAIUnlocksPage navigate={navigate} />;
            case '/':
            default:
                return <HomePage navigate={navigate} />;
        }
    };

    return (
        <div className="overflow-x-hidden">
            <Header theme={theme} toggleTheme={toggleTheme} navigate={navigate} />
            {renderPage()}
            <Footer navigate={navigate} />
            <FloatingWidgets />
        </div>
    );
};

export default App;