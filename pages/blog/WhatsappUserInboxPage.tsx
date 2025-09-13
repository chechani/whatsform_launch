
import React, { useEffect } from 'react';
import Head from 'next/head';

const target = '/blog/whatsapp-user-inbox';

const RedirectPage: React.FC = () => {
    useEffect(() => {
        window.location.replace(target);
    }, []);

    return (
        <>
            <Head>
                <meta httpEquiv="refresh" content={`0; url=${target}`} />
                <link rel="canonical" href={target} />
                <meta name="robots" content="noindex, follow" />
            </Head>
            <main className="pt-32 pb-24 text-center">
                <p className="text-slate-600 dark:text-slate-300">
                    This page moved to <a href={target} className="text-green-600 underline">{target}</a>.
                </p>
            </main>
        </>
    );
};

export default RedirectPage;


