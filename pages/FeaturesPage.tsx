import React from 'react';
import { GenericPageHero, CTA } from '../PageBuilder';
import { featuresPageData } from '../data/pages/features';
import { ArrowRightIcon, ArrowDownIcon } from '../icons';

const FeaturesGrid: React.FC<{ navigate: (path: string) => void; features: typeof featuresPageData['features'] }> = ({ navigate, features }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl hover:border-green-400 dark:hover:border-green-500 hover:-translate-y-2 transition-all duration-300 ease-in-out flex flex-col">
                <div className="text-green-500 mb-4">{React.createElement(feature.icon)}</div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">{feature.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400 flex-grow">{feature.description}</p>
                {feature.link && (
                    <a
                        href={feature.link}
                        onClick={(e) => { e.preventDefault(); navigate(feature.link); }}
                        className="mt-4 text-left text-green-600 dark:text-green-400 font-semibold hover:underline self-start"
                    >
                        Learn More &rarr;
                    </a>
                )}
            </div>
        ))}
    </div>
);

const ProblemSolution: React.FC<{ data: typeof featuresPageData.problemSolution }> = ({ data }) => (
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="bg-red-50 dark:bg-red-950/70 p-8 lg:p-10 rounded-2xl border border-red-200 dark:border-red-500/30 shadow-lg shadow-red-500/10 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/20 hover:-translate-y-2 h-full">
            <h3 className="text-2xl font-bold text-red-800 dark:text-red-300">{data.problem.title}</h3>
            <p className="mt-4 text-lg text-red-700 dark:text-red-300">{data.problem.text}</p>
        </div>
        <div className="bg-green-50 dark:bg-green-950/70 p-8 lg:p-10 rounded-2xl border border-green-200 dark:border-green-500/30 shadow-lg shadow-green-500/10 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20 hover:-translate-y-2 h-full">
            <h3 className="text-2xl font-bold text-green-800 dark:text-green-400">{data.solution.title}</h3>
            <p className="mt-4 text-lg text-green-700 dark:text-green-300">{data.solution.text}</p>
        </div>
    </div>
);

const WorkflowCycleDiagram: React.FC = () => {
    const steps = [
        {
            number: 1,
            title: "Identify Chaos",
            text: "Recognize disorganized data and communication issues.",
            color: "bg-red-500",
        },
        {
            number: 2,
            title: "Implement WhatsForm",
            text: "Introduce the interactive form system.",
            color: "bg-green-500",
        },
        {
            number: 3,
            title: "Automate Workflows",
            text: "Streamline business processes with automation.",
            color: "bg-lime-500",
        },
        {
            number: 4,
            title: "Achieve Tangible Outcomes",
            text: "See real results from automated actions.",
            color: "bg-yellow-400 text-slate-800",
        },
        {
            number: 5,
            title: "Reduce Chaos Tax",
            text: "Minimize wasted time and lost revenue.",
            color: "bg-orange-500",
        },
    ];

    return (
        <div className="w-full max-w-6xl mx-auto" role="figure" aria-label="A 5-step linear diagram showing the WhatsForm process to reduce business chaos.">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between">
                {steps.map((step, index) => (
                    <React.Fragment key={step.number}>
                        {/* Step Card */}
                        <div className="flex-1 min-w-0 md:min-w-[150px] mb-4 md:mb-0">
                            <div className={`h-full flex flex-col p-4 rounded-xl text-white shadow-lg ${step.color} transition-transform duration-300 hover:scale-105`}>
                                <div className="flex items-center space-x-3">
                                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-black/20 text-lg font-bold">
                                        {step.number}
                                    </div>
                                    <h3 className="font-bold text-base leading-tight">{step.title}</h3>
                                </div>
                                <p className="text-sm mt-2 flex-grow">{step.text}</p>
                            </div>
                        </div>

                        {/* Arrow Separator */}
                        {index < steps.length - 1 && (
                            <div className="flex-shrink-0 self-center mx-4 my-2 md:my-0">
                                <div className="md:hidden">
                                    <ArrowDownIcon className="w-6 h-6 text-slate-400 dark:text-slate-500" />
                                </div>
                                <div className="hidden md:block">
                                    <ArrowRightIcon className="w-6 h-6 text-slate-400 dark:text-slate-500" />
                                </div>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};


const WorkflowCycleSection: React.FC = () => (
    <section className="py-24 lg:py-28 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-16 max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
                    From Chaos to Clarity: The WhatsForm Cycle
                </h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                    Our 5-step process transforms disorganized chats into automated, revenue-generating workflows, systematically reducing the 'chaos tax' on your business.
                </p>
            </div>
            <div className="flex justify-center">
                 <WorkflowCycleDiagram />
            </div>
        </div>
    </section>
);


const FeaturesPage: React.FC<{ navigate: (path: string) => void; }> = ({ navigate }) => {
    return (
        <main>
            <GenericPageHero 
                title={featuresPageData.hero.title} 
                subtitle={featuresPageData.hero.subtitle} 
            />
            <WorkflowCycleSection />
             <section className="py-24 lg:py-28 bg-pastel-blue dark:bg-sky-950/30">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                     <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">Transform Your Operations</h2>
                        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">From chaotic chats to structured success. See the problem, our solution, and the features that make it happen.</p>
                    </div>
                     <ProblemSolution data={featuresPageData.problemSolution} />
                </div>
            </section>
             <section className="py-24 lg:py-28 bg-white dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                     <FeaturesGrid navigate={navigate} features={featuresPageData.features} />
                </div>
            </section>
            <CTA navigate={navigate} />
        </main>
    );
};

export default FeaturesPage;