import React from 'react';
import { GenericPageHero, CTA } from '@/components/PageBuilder';

const ApiCollectionPage: React.FC = () => {
    const apiEndpoints = [
        {
            category: "Authentication",
            endpoints: [
                { method: "POST", endpoint: "/auth/login", description: "Authenticate user and get access token" },
                { method: "POST", endpoint: "/auth/refresh", description: "Refresh authentication token" },
                { method: "POST", endpoint: "/auth/logout", description: "Logout and invalidate token" }
            ]
        },
        {
            category: "Forms Management", 
            endpoints: [
                { method: "GET", endpoint: "/forms", description: "Get all forms for authenticated user" },
                { method: "POST", endpoint: "/forms", description: "Create a new conversational form" },
                { method: "GET", endpoint: "/forms/{id}", description: "Get specific form by ID" },
                { method: "PUT", endpoint: "/forms/{id}", description: "Update existing form" },
                { method: "DELETE", endpoint: "/forms/{id}", description: "Delete a form" }
            ]
        },
        {
            category: "Responses & Data",
            endpoints: [
                { method: "GET", endpoint: "/responses", description: "Get form responses with filtering" },
                { method: "GET", endpoint: "/responses/{id}", description: "Get specific response details" },
                { method: "POST", endpoint: "/responses/export", description: "Export responses to CSV/Excel" },
                { method: "GET", endpoint: "/analytics/forms/{id}", description: "Get form performance analytics" }
            ]
        },
        {
            category: "WhatsApp Integration",
            endpoints: [
                { method: "POST", endpoint: "/whatsapp/send", description: "Send WhatsApp message or form" },
                { method: "POST", endpoint: "/whatsapp/webhook", description: "Handle WhatsApp webhook events" },
                { method: "GET", endpoint: "/whatsapp/templates", description: "Get approved message templates" },
                { method: "POST", endpoint: "/whatsapp/templates", description: "Create new message template" }
            ]
        }
    ];

    return (
        <main>
            <GenericPageHero 
                title="API Collection & Documentation" 
                subtitle="Complete REST API reference for WhatsForm platform integration. Build powerful applications with our comprehensive API endpoints."
            />
            
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    {/* Quick Start */}
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-8 mb-16">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Quick Start</h2>
                        <div className="bg-slate-800 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
                            <div>curl -X POST https://api.whatsform.com/auth/login \</div>
                            <div className="ml-4">-H "Content-Type: application/json" \</div>
                            <div className="ml-4">-d {`'{"email": "your@email.com", "password": "password"}'`}</div>
                        </div>
                    </div>

                    {/* API Endpoints */}
                    <div className="space-y-12">
                        {apiEndpoints.map((category, index) => (
                            <div key={index} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
                                <div className="bg-gradient-to-r from-green-600 to-blue-600 px-8 py-4">
                                    <h3 className="text-xl font-bold text-white">{category.category}</h3>
                                </div>
                                <div className="p-8">
                                    <div className="space-y-4">
                                        {category.endpoints.map((endpoint, endpointIndex) => (
                                            <div key={endpointIndex} className="border border-slate-200 dark:border-slate-700 rounded-lg p-4 hover:border-green-300 dark:hover:border-green-500 transition-colors">
                                                <div className="flex items-center space-x-4 mb-2">
                                                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                                                        endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                                                        endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                                                        endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                                                        'bg-red-100 text-red-800'
                                                    }`}>
                                                        {endpoint.method}
                                                    </span>
                                                    <code className="text-slate-600 dark:text-slate-300 font-mono text-sm">
                                                        {endpoint.endpoint}
                                                    </code>
                                                </div>
                                                <p className="text-slate-600 dark:text-slate-400 text-sm">
                                                    {endpoint.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* SDKs & Libraries */}
                    <div className="mt-20">
                        <h2 className="text-3xl font-bold text-slate-800 dark:text-white text-center mb-12">SDKs & Libraries</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg text-center">
                                <div className="text-3xl mb-4">🟨</div>
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">JavaScript SDK</h3>
                                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">Full-featured SDK for web and Node.js applications</p>
                                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                                    Download SDK
                                </button>
                            </div>
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg text-center">
                                <div className="text-3xl mb-4">🐍</div>
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Python SDK</h3>
                                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">Python library for backend integration and automation</p>
                                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                                    Download SDK
                                </button>
                            </div>
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg text-center">
                                <div className="text-3xl mb-4">☕</div>
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Java SDK</h3>
                                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">Enterprise-grade Java SDK for large-scale applications</p>
                                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                                    Download SDK
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <CTA />
        </main>
    );
};

export default ApiCollectionPage;

export { getServerSideProps } from '@/lib/ssr';

