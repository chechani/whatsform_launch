

import React, { useState, useMemo } from 'react';
import { 
    strategyOptions, challengeOptions, solutionOptions 
} from '../data/wizard';

interface EvaluationPageProps {
    navigate: (path: string) => void;
}

const EvaluationPage: React.FC<EvaluationPageProps> = ({ navigate }) => {
    const [step, setStep] = useState(1);
    const [selections, setSelections] = useState<{ strategy: Set<string>, challenges: Set<string>, solutions: Set<string> }>({
        strategy: new Set(),
        challenges: new Set(),
        solutions: new Set(),
    });

    const wizardSteps = [
        { id: 'strategy', title: 'Your Strategy', subtitle: 'How do you currently use WhatsApp?', options: strategyOptions },
        { id: 'challenges', title: 'Your Challenges', subtitle: 'What pain points are you facing?', options: challengeOptions },
        { id: 'solutions', title: 'Your Interests', subtitle: 'Which solutions are you most interested in?', options: solutionOptions },
    ];

    const currentStepData = wizardSteps[step - 1];

    const toggleItem = (stepId: 'strategy' | 'challenges' | 'solutions', itemTitle: string) => {
        setSelections(prev => {
            const newSet = new Set(prev[stepId]);
            if (newSet.has(itemTitle)) newSet.delete(itemTitle);
            else newSet.add(itemTitle);
            return { ...prev, [stepId]: newSet };
        });
    };

    const score = useMemo(() => {
        let adoptionScore = 0;
        strategyOptions.forEach(opt => {
            if (selections.strategy.has(opt.title)) adoptionScore += opt.score;
        });
        adoptionScore = Math.max(0, Math.min(5, adoptionScore));

        let potentialScore = 0;
        challengeOptions.forEach(opt => {
            if (selections.challenges.has(opt.title)) potentialScore += opt.score;
        });
        potentialScore = Math.max(0, Math.min(5, potentialScore));

        return (adoptionScore + potentialScore).toFixed(1);
    }, [selections]);
    
    const getScoreFeedback = (s: number) => {
        if (s < 3) return { message: "Getting Started", description: "You have a huge opportunity to grow by adopting more structured WhatsApp workflows."};
        if (s < 6) return { message: "On Your Way", description: "You've got the basics down, but automation can unlock significant efficiency for you." };
        if (s < 8) return { message: "Advanced User", description: "You're using WhatsApp effectively. Let's explore how to perfect your strategy and maximize ROI." };
        return { message: "Power User", description: "You're a WhatsApp pro! WhatsForm can help you scale your success and integrate even deeper." };
    }
    
    const feedback = getScoreFeedback(parseFloat(score));

    return (
        <main className="bg-white dark:bg-slate-950 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-5xl flex flex-col border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="p-6 border-b border-slate-200 dark:border-slate-800 text-center">
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white">
                        {step <= wizardSteps.length ? `Step ${step}: ${currentStepData.title}` : 'Your Results'}
                    </h1>
                </div>

                <div className="w-full bg-slate-200 dark:bg-slate-800 h-2">
                    <div className="bg-green-500 h-2 rounded-r-full transition-all duration-500" style={{ width: `${(step / (wizardSteps.length + 1)) * 100}%` }}></div>
                </div>

                <div className="p-8 md:p-12 min-h-[400px]">
                    {step <= wizardSteps.length && (
                        <div className="animate-fade-in">
                            <p className="text-center text-lg text-slate-600 dark:text-slate-400 mb-8">{currentStepData.subtitle}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {currentStepData.options.map((item: any) => {
                                    const isSelected = selections[currentStepData.id as keyof typeof selections].has(item.title);
                                    return (
                                        <div key={item.title} onClick={() => toggleItem(currentStepData.id as any, item.title)}
                                            className={`cursor-pointer bg-white dark:bg-slate-800/50 p-4 rounded-lg border-2 transition-all duration-200 relative h-full flex flex-col text-center items-center ${isSelected ? 'border-green-500 shadow-lg' : 'border-slate-200 dark:border-slate-700 hover:border-green-400'}`}>
                                            {isSelected && <div className="absolute top-2 right-2 bg-green-500 text-white h-5 w-5 rounded-full flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></div>}
                                            
                                            {item.icon && React.createElement(item.icon, { className: "h-10 w-10 text-green-500 mb-3" })}
                                            
                                            <h3 className="font-semibold text-slate-800 dark:text-white">{item.title}</h3>
                                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 flex-grow">{item.description}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                    {step > wizardSteps.length && (
                        <div className="text-center animate-fade-in">
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Your WhatsApp Business Score</h3>
                            <div className="my-8 flex justify-center items-center">
                                <div className="relative w-48 h-48">
                                    <svg className="w-full h-full" viewBox="0 0 36 36" transform="rotate(-90 18 18)">
                                        <path className="text-slate-200 dark:text-slate-700" strokeWidth="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        <path className="text-green-500 transition-all duration-1000 ease-out" strokeWidth="3" strokeDasharray={`${parseFloat(score) * 10}, 100`} strokeLinecap="round" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-5xl font-bold text-slate-800 dark:text-white">{score}</span>
                                        <span className="text-sm text-slate-500">out of 10</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-2xl font-semibold text-green-600 dark:text-green-400">{feedback.message}</p>
                            <p className="mt-2 max-w-md mx-auto text-slate-600 dark:text-slate-400">{feedback.description}</p>
                            <button onClick={() => navigate('#/')} className="mt-8 inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg">
                                Book a Demo to Improve Your Score
                            </button>
                        </div>
                    )}
                </div>

                <div className="p-6 border-t border-slate-200 dark:border-slate-800 mt-auto bg-white/50 dark:bg-slate-800/50">
                    <div className="flex justify-between items-center">
                        <button onClick={() => setStep(s => s - 1)} disabled={step === 1}
                            className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold px-6 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                            Back
                        </button>
                        {step <= wizardSteps.length ? (
                            <button onClick={() => setStep(s => s + 1)} className="bg-green-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
                                {step === wizardSteps.length ? 'See Results' : 'Next'}
                            </button>
                        ) : (
                            <button onClick={() => navigate('#/')} className="bg-green-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
                                Finish
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
};

export default EvaluationPage;