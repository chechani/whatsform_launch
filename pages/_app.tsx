
import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Header, Footer } from '../components/Layout';
import { FloatingWidgets } from '../components/PageBuilder';
import { seoData } from '../data/seo';
import '../styles.css';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
    const [theme, setTheme] = React.useState<'light' | 'dark'>('dark');
    const [isClient, setIsClient] = React.useState(false);

    // Initialize theme on client side
    React.useEffect(() => {
        const initializeTheme = () => {
            setIsClient(true);
            
            const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
            const initialTheme = savedTheme || 'dark';
            
            // Only update state if it's different
            if (theme !== initialTheme) {
                setTheme(initialTheme);
            }
            
            // Apply theme to DOM only if needed
            const isDarkMode = document.documentElement.classList.contains('dark');
            const shouldBeDark = initialTheme === 'dark';
            
            if (isDarkMode !== shouldBeDark) {
                if (shouldBeDark) {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }
                localStorage.setItem('theme', initialTheme);
            }
        };
        
        initializeTheme();
    }, []); // Empty dependency array to run only once

    // Function to apply theme to DOM
    const applyTheme = (newTheme: 'light' | 'dark') => {
        const root = document.documentElement;
        
        if (newTheme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', newTheme);
    };

    // Toggle theme function
    const toggleTheme = React.useCallback(() => {
        if (!isClient) return;
        
        const newTheme = theme === 'light' ? 'dark' : 'light';
        console.log('Toggling theme from', theme, 'to', newTheme);
        
        setTheme(newTheme);
        applyTheme(newTheme);
    }, [theme, isClient]);
    
    const path = router.pathname;
    const pageSeo = seoData[path] || seoData['/'];


    return (
        <div className="overflow-x-hidden bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
            <Head>
                <title>{pageSeo.title}</title>
                <meta name="description" content={pageSeo.description} />
            </Head>
            {isClient && <Header theme={theme} toggleTheme={toggleTheme} />}
            <Component {...pageProps} />
            <Footer />
            <FloatingWidgets />
        </div>
    );
};

export default MyApp;
