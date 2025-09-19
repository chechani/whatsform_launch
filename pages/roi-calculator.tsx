import React, { useState } from 'react';
import { GenericPageHero, CTA } from '@/components/PageBuilder';

const RoiCalculatorPage: React.FC = () => {
    const [formData, setFormData] = useState({
        monthlyCustomerInquiries: 1000,
        averageOrderValue: 50,
        currentConversionRate: 2,
        currentResponseTime: 4,
        employeesHandlingSupport: 3,
        averageHourlyWage: 15
    });

    const [results, setResults] = useState<any>(null);

    const calculateROI = () => {
        const currentMonthlyRevenue = (formData.monthlyCustomerInquiries * formData.currentConversionRate / 100) * formData.averageOrderValue;
        const improvedConversionRate = Math.min(formData.currentConversionRate + 3, 15); // 3% improvement with WhatsForm
        const improvedMonthlyRevenue = (formData.monthlyCustomerInquiries * improvedConversionRate / 100) * formData.averageOrderValue;
        const additionalRevenue = improvedMonthlyRevenue - currentMonthlyRevenue;
        
        const currentMonthlyCosts = formData.employeesHandlingSupport * formData.averageHourlyWage * 160; // 160 hours per month
        const reducedMonthlyCosts = currentMonthlyCosts * 0.4; // 60% reduction in manual work
        const costSavings = currentMonthlyCosts - reducedMonthlyCosts;
        
        const whatsformMonthlyCost = 99; // Assuming standard plan
        const netMonthlySavings = additionalRevenue + costSavings - whatsformMonthlyCost;
        const annualROI = ((netMonthlySavings * 12) / (whatsformMonthlyCost * 12)) * 100;

        setResults({
            additionalRevenue: additionalRevenue * 12,
            costSavings: costSavings * 12,
            netMonthlySavings,
            annualROI,
            paybackPeriod: whatsformMonthlyCost / netMonthlySavings
        });
    };

    const handleInputChange = (field: string, value: number) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <main>
            <GenericPageHero 
                title="ROI Calculator" 
                subtitle="Calculate your potential return on investment with WhatsForm. See how much revenue you can gain and costs you can save with WhatsApp Business automation."
            />
            
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Input Form */}
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg">
                            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Your Business Details</h2>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Monthly Customer Inquiries
                                    </label>
                                    <input
                                        type="number"
                                        value={formData.monthlyCustomerInquiries}
                                        onChange={(e) => handleInputChange('monthlyCustomerInquiries', Number(e.target.value))}
                                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-slate-700 dark:text-white"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Average Order Value ($)
                                    </label>
                                    <input
                                        type="number"
                                        value={formData.averageOrderValue}
                                        onChange={(e) => handleInputChange('averageOrderValue', Number(e.target.value))}
                                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-slate-700 dark:text-white"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Current Conversion Rate (%)
                                    </label>
                                    <input
                                        type="number"
                                        step="0.1"
                                        value={formData.currentConversionRate}
                                        onChange={(e) => handleInputChange('currentConversionRate', Number(e.target.value))}
                                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-slate-700 dark:text-white"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Average Response Time (hours)
                                    </label>
                                    <input
                                        type="number"
                                        value={formData.currentResponseTime}
                                        onChange={(e) => handleInputChange('currentResponseTime', Number(e.target.value))}
                                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-slate-700 dark:text-white"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Employees Handling Customer Support
                                    </label>
                                    <input
                                        type="number"
                                        value={formData.employeesHandlingSupport}
                                        onChange={(e) => handleInputChange('employeesHandlingSupport', Number(e.target.value))}
                                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-slate-700 dark:text-white"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Average Hourly Wage ($)
                                    </label>
                                    <input
                                        type="number"
                                        value={formData.averageHourlyWage}
                                        onChange={(e) => handleInputChange('averageHourlyWage', Number(e.target.value))}
                                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-slate-700 dark:text-white"
                                    />
                                </div>
                                
                                <button
                                    onClick={calculateROI}
                                    className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                                >
                                    Calculate ROI
                                </button>
                            </div>
                        </div>

                        {/* Results */}
                        <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-8">
                            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Your ROI Projection</h2>
                            
                            {results ? (
                                <div className="space-y-6">
                                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4">
                                        <div className="text-3xl font-bold text-green-600">${results.additionalRevenue.toLocaleString()}</div>
                                        <div className="text-sm text-slate-600 dark:text-slate-300">Additional Annual Revenue</div>
                                    </div>
                                    
                                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4">
                                        <div className="text-3xl font-bold text-blue-600">${results.costSavings.toLocaleString()}</div>
                                        <div className="text-sm text-slate-600 dark:text-slate-300">Annual Cost Savings</div>
                                    </div>
                                    
                                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4">
                                        <div className="text-3xl font-bold text-purple-600">{results.annualROI.toFixed(0)}%</div>
                                        <div className="text-sm text-slate-600 dark:text-slate-300">Annual ROI</div>
                                    </div>
                                    
                                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4">
                                        <div className="text-3xl font-bold text-orange-600">{results.paybackPeriod.toFixed(1)} months</div>
                                        <div className="text-sm text-slate-600 dark:text-slate-300">Payback Period</div>
                                    </div>
                                    
                                    <div className="text-center pt-4">
                                        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                                            Ready to achieve these results?
                                        </p>
                                        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                                            Start Free Trial
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <div className="text-6xl mb-4">📊</div>
                                    <p className="text-slate-600 dark:text-slate-300">
                                        Enter your business details and click "Calculate ROI" to see your potential return on investment.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            
            <CTA />
        </main>
    );
};

export default RoiCalculatorPage;

export { getServerSideProps } from '@/lib/ssr';

