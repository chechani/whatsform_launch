import React from 'react';
import { GenericPageHero, CTA } from '../PageBuilder';
import { communityPageData } from '../data/pages/community';
import { ChatBubbleOvalLeftEllipsisIcon, UsersIcon, CalendarIcon } from '../icons';

const iconMap = {
    ChatBubbleOvalLeftEllipsisIcon,
    UsersIcon,
    CalendarIcon
};

interface CommunityPageProps {
    navigate: (path: string) => void;
}

const CommunityPage: React.FC<CommunityPageProps> = ({ navigate }) => {
    return (
        <main>
            <GenericPageHero 
                title={communityPageData.hero.title} 
                subtitle={communityPageData.hero.subtitle} 
            />
            <section className="py-24 lg:py-28 bg-pastel-blue dark:bg-sky-950/30">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {communityPageData.channels.map((channel, index) => (
                            <div key={index} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
                                <div className="text-green-500 mx-auto">
                                    {React.createElement(iconMap[channel.icon as keyof typeof iconMap], { className: "h-12 w-12" })}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-6">{channel.name}</h3>
                                <p className="mt-2 text-slate-600 dark:text-slate-400 flex-grow">{channel.description}</p>
                                <div className="relative mt-6">
                                    <button
                                        disabled
                                        className="w-full bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-semibold py-3 px-6 rounded-lg cursor-not-allowed"
                                    >
                                        {channel.linkText}
                                    </button>
                                    <span className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full transform rotate-12 -mr-2">
                                        SOON
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <CTA navigate={navigate} />
        </main>
    );
};

export default CommunityPage;