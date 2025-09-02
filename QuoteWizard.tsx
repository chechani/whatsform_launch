import React, { useState, useMemo } from 'react';
import { CloseIcon } from './icons';

const MESSAGE_RATE = 0.5; // Example: ₹0.5 per message
const USER_RATE = 500; // Example: ₹500 per user
const BASE_COST = 5000; // Example: base platform fee

export const QuoteWizard: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [messages, setMessages] = useState(50000);
    const [users, setUsers] = useState(20);

    const customPrice = useMemo(() => {
        const messageCost = (messages - 30000) > 0 ? (messages - 30000) * MESSAGE_RATE : 0;
        const userCost = (users - 15) > 0 ? (users - 15) * USER_RATE : 0;
        return BASE_COST + messageCost + userCost;
    }, [messages, users]);

    return (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col transform transition-all duration-300 animate-slide-up">
                <div className="flex justify-between items-center p-6 border-b border-slate-200 dark:border-slate-800">
                    <h2 className="text-xl font-bold text-slate-800 dark:text-white">Get a Custom Quote</h2>
                    <button onClick={onClose} className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"><CloseIcon /></button>
                </div>

                <div className="p-8 overflow-y-auto space-y-8">
                    <div>
                        <label htmlFor="messages" className="block text-md font-semibold text-slate-700 dark:text-slate-300">
                            Monthly Messages
                        </label>
                        <div className="flex items-center space-x-4 mt-2">
                            <input
                                id="messages"
                                type="range"
                                min="30000"
                                max="200000"
                                step="1000"
                                value={messages}
                                onChange={(e) => setMessages(Number(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700"
                            />
                            <span className="font-bold text-slate-800 dark:text-white w-24 text-center bg-slate-100 dark:bg-slate-800 py-1 rounded-md">{messages.toLocaleString('en-IN')}</span>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="users" className="block text-md font-semibold text-slate-700 dark:text-slate-300">
                            Number of Users
                        </label>
                         <div className="flex items-center space-x-4 mt-2">
                            <input
                                id="users"
                                type="range"
                                min="15"
                                max="100"
                                step="1"
                                value={users}
                                onChange={(e) => setUsers(Number(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700"
                            />
                            <span className="font-bold text-slate-800 dark:text-white w-24 text-center bg-slate-100 dark:bg-slate-800 py-1 rounded-md">{users}</span>
                        </div>
                    </div>
                     <div className="text-center pt-6 border-t border-slate-200 dark:border-slate-700">
                        <p className="text-slate-600 dark:text-slate-300">Your estimated monthly cost:</p>
                        <p className="text-4xl font-bold text-slate-900 dark:text-white mt-2">
                            ₹{customPrice.toLocaleString('en-IN')}
                        </p>
                        <p className="mt-2 text-sm text-slate-500">This is an estimate. Final pricing may vary.</p>
                    </div>
                </div>

                <div className="p-6 border-t border-slate-200 dark:border-slate-800 mt-auto bg-white/50 dark:bg-slate-800/50">
                    <button
                        onClick={onClose}
                        className="w-full bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors"
                    >
                        Confirm & Close
                    </button>
                </div>
            </div>
        </div>
    );
};
