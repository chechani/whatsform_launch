
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
    MenuIcon, WhatsAppIcon, SunIcon, MoonIcon, ChevronDownIcon, CloseIcon
} from '../icons';
import { headerData, footerData } from '@/data/navigation';

export const Header: React.FC<{ theme: string; toggleTheme: () => void; }> = ({ theme, toggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSolutionsOpen, setSolutionsOpen] = useState(false);
    const [isMobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

    const handleThemeToggle = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Theme button clicked! Current theme:', theme);
        toggleTheme();
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMenuOpen(false);
                setMobileSolutionsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMobileNavClick = () => {
        setIsMenuOpen(false);
        setMobileSolutionsOpen(false);
    }

    return (
        <header className="bg-white/95 dark:bg-slate-900/80 backdrop-blur-xl fixed top-0 left-0 right-0 z-50 border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex justify-between items-center h-20">
                    <Link href="/" legacyBehavior>
                        <a className="flex items-center">
                            <img src="https://whatsform.in/assets/images/AIBOTLOGO.png" alt="WhatsForm Logo" className="h-16 w-auto dark:brightness-0 dark:invert" />
                        </a>
                    </Link>
                    
                    <nav className="hidden lg:flex items-center space-x-8">
                        {headerData.links.map(link => (
                            link.isDropdown ? (
                                <div 
                                    key={link.name} 
                                    className="relative" 
                                    onMouseEnter={() => setSolutionsOpen(true)}
                                    onMouseLeave={() => setSolutionsOpen(false)}
                                >
                                    <button 
                                        className="flex items-center space-x-1 text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors font-medium">
                                        <span>{link.name}</span>
                                        <ChevronDownIcon />
                                    </button>
                                    {isSolutionsOpen && (
                                        <div 
                                            className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[48rem] animate-fade-in">
                                            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 p-6 grid grid-cols-2 gap-x-8">
                                                <div>
                                                    <h3 className="text-sm font-semibold uppercase text-slate-400 dark:text-slate-500 mb-4 tracking-wider">TEAMS</h3>
                                                    <div className="space-y-2">
                                                        {headerData.solutions.teams.map(item => (
                                                            <Link key={item.name} href={item.path} legacyBehavior>
                                                                <a onClick={() => setSolutionsOpen(false)} className="flex items-start p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors group">
                                                                    <div className="bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 p-2 rounded-md mr-4">
                                                                        {React.createElement(item.icon)}
                                                                    </div>
                                                                    <div>
                                                                        <p className="font-semibold text-slate-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400">{item.name}</p>
                                                                        <p className="text-sm text-slate-500 dark:text-slate-400">{item.description}</p>
                                                                    </div>
                                                                </a>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className="text-sm font-semibold uppercase text-slate-400 dark:text-slate-500 mb-4 tracking-wider">INDUSTRIES</h3>
                                                    <div className="grid grid-cols-2 gap-2">
                                                    {headerData.solutions.industries.map(item => (
                                                         <Link key={item.name} href={item.path} legacyBehavior>
                                                            <a onClick={() => setSolutionsOpen(false)} className="flex items-center p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors group">
                                                                <div className="text-slate-500 dark:text-slate-400 mr-3 group-hover:text-green-600">{React.createElement(item.icon)}</div>
                                                                <p className="font-semibold text-slate-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400">{item.name}</p>
                                                            </a>
                                                         </Link>
                                                    ))}
                                                    </div>
                                                     <div className="mt-4 col-span-2">
                                                        <Link href={headerData.solutions.viewAll.path} legacyBehavior>
                                                           <a onClick={() => setSolutionsOpen(false)}
                                                              className="block w-full text-center bg-green-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 transition-colors">
                                                                {headerData.solutions.viewAll.text}
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link key={link.name} href={link.path as string} legacyBehavior>
                                    <a className="text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors font-medium">{link.name}</a>
                                </Link>
                            )
                        ))}
                    </nav>

                    <div className="flex items-center space-x-2">
                         <div className="hidden sm:flex items-center space-x-2">
                            <Link href="/book-demo" legacyBehavior>
                                <a className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold py-2 px-5 rounded-lg text-sm hover:bg-slate-100 dark:hover:bg-slate-700 transition-all border border-slate-300 dark:border-slate-700">Book Demo</a>
                            </Link>
                            <Link href="/signup" legacyBehavior>
                                <a className="bg-green-500 text-white font-bold py-2 px-5 rounded-lg text-sm hover:bg-green-600 transition-all shadow-sm">Start 14-Day Trial</a>
                            </Link>
                        </div>
                        
                        {/* Theme Toggle Buttons */}
                        <button
                            onClick={handleThemeToggle}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm mr-2 font-bold"
                        >
                            {theme} → {theme === 'dark' ? 'light' : 'dark'}
                        </button>
                        
                        <button
                            type="button"
                            onClick={handleThemeToggle}
                            className="relative flex items-center justify-center w-12 h-12 rounded-full text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 border-2 border-slate-300 dark:border-slate-600"
                            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                        >
                            {theme === 'dark' ? '🌞' : '🌙'}
                        </button>
                        <div className="lg:hidden ml-2">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-700 dark:text-slate-300 z-50 relative">
                                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Mobile Menu */}
            <div className={`lg:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>\
                <div className="py-4">
                    {headerData.links.map(link => (
                        link.isDropdown ? (
                            <div key={link.name}>
                                <button
                                    onClick={() => setMobileSolutionsOpen(!isMobileSolutionsOpen)}
                                    className="w-full flex justify-between items-center text-left py-3 px-6 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                                    aria-expanded={isMobileSolutionsOpen}
                                >
                                    <span className="font-medium">{link.name}</span>
                                    <ChevronDownIcon />
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileSolutionsOpen ? 'max-h-screen' : 'max-h-0'}`}>\
                                    <div className="py-2 pl-8 pr-4 bg-slate-50 dark:bg-slate-700/50">
                                        <h4 className="px-3 pt-2 pb-1 text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 tracking-wider">Teams</h4>
                                        {headerData.solutions.teams.map(item => (
                                            <Link key={item.name} href={item.path} legacyBehavior>
                                                <a onClick={handleMobileNavClick} className="block py-2 px-3 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600">{item.name}</a>
                                            </Link>
                                        ))}
                                        <h4 className="px-3 pt-4 pb-1 text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 tracking-wider">Industries</h4>
                                        {headerData.solutions.industries.map(item => (
                                            <Link key={item.name} href={item.path} legacyBehavior>
                                                <a onClick={handleMobileNavClick} className="block py-2 px-3 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600">{item.name}</a>
                                            </Link>
                                        ))}
                                        <Link href={headerData.solutions.viewAll.path} legacyBehavior>
                                            <a onClick={handleMobileNavClick} className="block mt-2 text-center w-full bg-green-500 text-white font-bold py-2 px-3 rounded-lg hover:bg-green-600 transition-colors text-sm">
                                                {headerData.solutions.viewAll.text}
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ) : (
                             <Link key={link.name} href={link.path as string} legacyBehavior>
                                <a onClick={handleMobileNavClick} className="block py-3 px-6 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 font-medium transition-colors">{link.name}</a>
                             </Link>
                        )
                    ))}
                    <div className="flex justify-center mt-4 space-x-2 px-4">
                        <Link href="/book-demo" legacyBehavior>
                            <a onClick={handleMobileNavClick} className="flex-1 text-center bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold py-2 px-5 rounded-lg text-sm hover:bg-slate-100 dark:hover:bg-slate-600 transition-all border border-slate-300 dark:border-slate-600">Book Demo</a>
                        </Link>
                        <Link href="/signup" legacyBehavior>
                            <a onClick={handleMobileNavClick} className="flex-1 text-center bg-green-500 text-white font-bold py-2 px-5 rounded-lg text-sm hover:bg-green-600 transition-all">Start 14-Day Trial</a>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export const Footer: React.FC<{}> = () => {
    return (
        <footer className="bg-slate-900 dark:bg-black text-slate-300 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
                    <div className="col-span-full lg:col-span-3 mb-8 lg:mb-0">
                         <a href="https://smartysoft.in/" target="_blank" rel="noopener noreferrer" className="inline-block">
                            <img src="https://smartysoft.in/assets/images/smarty_logo.png" alt="SmartySoft Company Logo" className="h-10 w-auto" />
                        </a>
                        <p className="mt-4 text-slate-400 text-base leading-relaxed">
                            Helping Businesses in 💯%<br />Digitalization and Automation.
                        </p>
                        <div className="mt-4 text-sm text-slate-400">
                            <p className="font-semibold text-slate-200">Smarty Software Pvt. Ltd.</p>
                            <a href="tel:+917849945640" className="block mt-2 hover:text-green-400 transition-colors">+91 7849945640</a>
                            <a href="mailto:sales@smartysoft.in" className="block hover:text-green-400 transition-colors">sales@smartysoft.in</a>
                            <address className="mt-2 not-italic leading-relaxed">
                                8-R-12, 13, Second Floor,<br />
                                Kiran Tower, RC Vyas Colony,<br />
                                Bhilwara, Rajasthan
                            </address>
                        </div>
                    </div>
                    {footerData.columns.map(column => (
                        <div key={column.title}>
                            <h3 className="text-sm font-semibold uppercase text-slate-400 tracking-wider">{column.title}</h3>
                            <ul className="mt-4 space-y-2">
                                {column.links.map(link => (
                                    <li key={link.name}>
                                        <Link href={link.path} legacyBehavior>
                                            <a className="text-slate-300 hover:text-green-400 transition-colors text-base">
                                                {link.name}
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-16 pt-8 border-t border-slate-700">
                    <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
                        <p className="text-slate-400 text-center text-sm order-2 sm:order-1">
                            Copyright &copy; 2025 Smarty Software Pvt. Ltd. All Rights Reserved.
                        </p>

                        <div className="flex items-center space-x-6 order-1 sm:order-2 sm:absolute sm:right-0">
                            {footerData.socials.map(social => (
                                <a 
                                    key={social.name} 
                                    href={social.path} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-slate-400 hover:text-green-400 transition-colors"
                                    aria-label={social.name}
                                >
                                    {React.createElement(social.icon, { className: 'h-6 w-6' })}
                                </a>
                            ))}
                        </div>
                    </div>
                    
                    <div className="mt-8 text-center">
                        <p className="text-xs text-slate-500 max-w-5xl mx-auto leading-relaxed">
                            Disclaimer: All templates, flows, and messaging activities on this platform are subject to Meta's policies. We are not responsible for any rejection or blockage of templates or messaging, as these are governed and managed by Meta's approval process. Messaging limits are also controlled and enforced by Meta, which does not promote or support spam. Users are advised to adhere strictly to Meta's guidelines to avoid any interruptions in service.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
