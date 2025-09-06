
import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Header, Footer } from '../components/Layout';
import { FloatingWidgets } from '../components/PageBuilder';
import { seoData } from '../data/seo';
import '../styles.css';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
    const [theme, setTheme] = React.useState<'light' | 'dark'>('light');
    const [mounted, setMounted] = React.useState(false);

    // Initialize theme only once when component mounts
    React.useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        const initialTheme = savedTheme || 'light';
        
        console.log('App - One-time theme initialization:', { savedTheme, initialTheme });
        
        setTheme(initialTheme);
        setMounted(true);
        
        // Apply theme to DOM
        if (initialTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []); // Empty dependency array - runs only once

    // Log theme state changes
    React.useEffect(() => {
        console.log('App - Theme state changed to:', theme);
    }, [theme]);

    // Simple toggle function
    const toggleTheme = () => {
        if (!mounted) {
            console.log('App - Not mounted, skipping theme toggle');
            return;
        }
        
        const currentTheme = theme;
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        console.log('App - Toggling theme:', { currentTheme, newTheme, mounted });
        
        // Update state first
        setTheme(newTheme);
        
        // Apply to DOM immediately  
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
            console.log('App - Added dark class');
        } else {
            document.documentElement.classList.remove('dark');
            console.log('App - Removed dark class');
        }
        
        // Save to localStorage
        localStorage.setItem('theme', newTheme);
        
        // Verify DOM change
        setTimeout(() => {
            const hasClass = document.documentElement.classList.contains('dark');
            console.log('App - DOM verification: dark class present =', hasClass, 'expected =', newTheme === 'dark');
        }, 100);
    };
    
    const path = router.pathname;
    const pageSeo = seoData[path] || seoData['/'];

    // Don't render until mounted to prevent hydration mismatch
    if (!mounted) {
        return (
            <div className="overflow-x-hidden bg-white min-h-screen">
                <Head>
                    <title>{pageSeo.title}</title>
                    <meta name="description" content={pageSeo.description} />
                </Head>
                <div>Loading...</div>
            </div>
        );
    }

    return (
        <div className="overflow-x-hidden bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
            <Head>
                <title>{pageSeo.title}</title>
                <meta name="description" content={pageSeo.description} />
            </Head>
            <Header theme={theme} toggleTheme={toggleTheme} />
            <Component {...pageProps} />
            <Footer />
            <FloatingWidgets />
        </div>
    );
};

export default MyApp;
