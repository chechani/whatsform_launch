
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

    React.useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    React.useEffect(() => {
        if (mounted) {
            if (theme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            localStorage.setItem('theme', theme);
        }
    }, [theme, mounted]);

    const toggleTheme = () => {
        if (mounted) {
            setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
        }
    };
    
    const path = router.pathname;
    const asPath = router.asPath || path;
    const canonicalPath = React.useMemo(() => {
        // strip query/hash
        const clean = asPath.split('?')[0].split('#')[0];
        return clean === '/' ? '' : clean;
    }, [asPath]);
    const pageSeo = seoData[path] || seoData['/'];

    return (
        <div className="overflow-x-hidden bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
            <Head>
                <title>{pageSeo.title}</title>
                <meta name="description" content={pageSeo.description} />
                <link rel="canonical" href={`https://www.whatsform.io${canonicalPath}`} />
            </Head>
            <Header theme={theme} toggleTheme={toggleTheme} />
            <Component {...pageProps} />
            <Footer />
            <FloatingWidgets />
        </div>
    );
};

export default MyApp;
