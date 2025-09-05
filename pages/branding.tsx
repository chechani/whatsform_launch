import React from 'react';
import { useRouter } from 'next/router';
import { GenericPageHero, CTA } from '@/components/PageBuilder';
import { brandingPageData } from '@/data/pages/branding';

const BrandingPage: React.FC = () => {
    const router = useRouter();
    return (
        <main>
            <GenericPageHero 
                title={brandingPageData.hero.title} 
                subtitle={brandingPageData.hero.subtitle} 
            />
            <div className="py-24 lg:py-28 bg-white dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
                    {/* Logo Section */}
                    <div>
                        <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white">{brandingPageData.logo.title}</h2>
                        <p className="mt-2 text-center text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">{brandingPageData.logo.description}</p>
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-lg flex justify-center">
                                <img src="https://whatsform.in/assets/images/AIBOTLOGO.png" alt="WhatsForm Logo" className="h-24" />
                            </div>
                            <div className="bg-slate-800 dark:bg-slate-100 p-8 rounded-lg flex justify-center">
                                 <img src="https://whatsform.in/assets/images/AIBOTLOGO.png" alt="WhatsForm Logo on dark background" className="h-24" />
                            </div>
                        </div>
                    </div>
                    {/* Color Palette Section */}
                    <div>
                        <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white">{brandingPageData.colors.title}</h2>
                        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                            {brandingPageData.colors.palette.map(color => (
                                <div key={color.name}>
                                    <div className="h-32 rounded-lg" style={{ backgroundColor: color.hex }}></div>
                                    <h3 className="mt-3 font-semibold text-slate-800 dark:text-white">{color.name}</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">{color.hex}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <CTA />
        </main>
    );
};

export default BrandingPage;