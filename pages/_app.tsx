
import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Header, Footer } from '@/components/Layout';
import { FloatingWidgets } from '@/components/PageBuilder';
import { seoData } from '@/data/seo';
import '@/styles.css';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
    const [theme, setTheme] = React.useState('light');

    React.useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const savedTheme = window.localStorage.getItem('theme');
            if (savedTheme) {
                setTheme(savedTheme);
            } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setTheme('dark');
            }
        }
    }, []);

    React.useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    
    const path = router.pathname;
    const pageSeo = seoData[path] || seoData['/'];


    return (
        <div className="overflow-x-hidden">
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
