import React from 'react';
import { SunIcon, MoonIcon } from '../icons';

const ThemeTestPage: React.FC = () => {
    const [theme, setTheme] = React.useState<'light' | 'dark'>('light');
    const [isClient, setIsClient] = React.useState(false);
    const [domClass, setDomClass] = React.useState<string>('');
    const [storageValue, setStorageValue] = React.useState<string>('');

    // Function to update display values
    const updateDisplayValues = () => {
        setDomClass(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
        setStorageValue(localStorage.getItem('theme') || 'null');
    };


    // Initialize theme on client side
    React.useEffect(() => {
        setIsClient(true);
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        const systemPrefersDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
        setTheme(initialTheme);
        const root = document.documentElement;
        if (initialTheme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', initialTheme);
        updateDisplayValues();
    }, []);

    const toggleTheme = () => {
        if (!isClient) return;
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        const root = document.documentElement;
        if (newTheme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', newTheme);
        setTimeout(() => {
            updateDisplayValues();
        }, 50);
    };


    const resetTheme = () => {
        if (!isClient) return;
        localStorage.removeItem('theme');
        document.documentElement.classList.remove('dark');
        setTheme('light');
        updateDisplayValues();
    };

    const forceLight = () => {
        if (!isClient) return;
        setTheme('light');
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        updateDisplayValues();
    };

    const forceDark = () => {
        if (!isClient) return;
        setTheme('dark');
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        updateDisplayValues();
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
            <div className="max-w-4xl mx-auto p-8">
                <h1 className="text-3xl font-bold mb-8">Theme Test Page</h1>
                
                <div className="space-y-6">
                    <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Current Theme Info</h2>
                        <p>Theme State: <strong>{theme}</strong></p>
                        <p>Is Client: <strong>{isClient.toString()}</strong></p>
                        <p>HTML Class: <strong>{isClient ? domClass : 'n/a (server)'}</strong></p>
                        <p>LocalStorage: <strong>{isClient ? storageValue : 'n/a (server)'}</strong></p>
                        <p>Classes on HTML: <strong>{isClient ? domClass : 'n/a (server)'}</strong></p>
                    </div>

                    <div className="p-6 bg-blue-100 dark:bg-blue-900 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Theme Controls</h2>
                        <div className="space-y-3">
                            <button
                                onClick={toggleTheme}
                                className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300 mr-2"
                            >
                                {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
                                <span>Toggle to {theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
                            </button>
                            
                            <div className="flex space-x-2">
                                <button
                                    onClick={forceLight}
                                    className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition-colors duration-300"
                                >
                                    Force Light
                                </button>
                                <button
                                    onClick={forceDark}
                                    className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors duration-300"
                                >
                                    Force Dark
                                </button>
                                <button
                                    onClick={resetTheme}
                                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-300"
                                >
                                    Reset
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-green-100 dark:bg-green-900 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Visual Test</h2>
                        <p>This box should change colors when you toggle the theme.</p>
                        <p>Light mode: green background, dark text</p>
                        <p>Dark mode: dark green background, light text</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThemeTestPage;

export { getStaticProps } from '@/lib/ssr';

