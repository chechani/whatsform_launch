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
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
        
        console.log('Theme Test - Initializing:', { savedTheme, systemPrefersDark, initialTheme });
        
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
        console.log('Theme Test - Toggling from', theme, 'to', newTheme);
        
        setTheme(newTheme);
        
        const root = document.documentElement;
        if (newTheme === 'dark') {
            root.classList.add('dark');
            console.log('Theme Test - Added dark class');
        } else {
            root.classList.remove('dark');
            console.log('Theme Test - Removed dark class');
        }
        
        localStorage.setItem('theme', newTheme);
        
        // Update display values after DOM changes
        setTimeout(() => {
            updateDisplayValues();
        }, 50);
    };

    const resetTheme = () => {
        localStorage.removeItem('theme');
        document.documentElement.classList.remove('dark');
        setTheme('light');
        updateDisplayValues();
        console.log('Theme Test - Reset to light mode');
    };

    const forceLight = () => {
        setTheme('light');
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        updateDisplayValues();
        console.log('Theme Test - Forced to light mode');
    };

    const forceDark = () => {
        setTheme('dark');
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        updateDisplayValues();
        console.log('Theme Test - Forced to dark mode');
    };

    if (!isClient) {
        return <div className="p-8">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
            <div className="max-w-4xl mx-auto p-8">
                <h1 className="text-3xl font-bold mb-8">Theme Test Page</h1>
                
                <div className="space-y-6">
                    <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Current Theme Info</h2>
                        <p>Theme State: <strong>{theme}</strong></p>
                        <p>Is Client: <strong>{isClient.toString()}</strong></p>
                        <p>HTML Class: <strong>{domClass}</strong></p>
                        <p>LocalStorage: <strong>{storageValue}</strong></p>
                        <p>Classes on HTML: <strong>{document.documentElement.className}</strong></p>
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
