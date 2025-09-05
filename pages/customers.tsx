import React from 'react';
import { useRouter } from 'next/router';
import { GenericPageHero } from '../components/PageBuilder';
import { customersPageData } from '../data/pages/customers';

const CustomersPage: React.FC = () => {
    const router = useRouter();

    const handleCustomerClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        e.preventDefault();
        router.push(path);
    };

    return (
        <main>
            <GenericPageHero 
                title={customersPageData.hero.title} 
                subtitle={customersPageData.hero.subtitle} 
            />
            <section className="py-16 sm:py-24 lg:py-28 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {customersPageData.customers.map(customer => (
                            <a 
                                key={customer.name} 
                                href={customer.path}
                                onClick={(e) => handleCustomerClick(e, customer.path)}
                                className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl border border-slate-200 dark:border-slate-800 hover:border-green-400 dark:hover:border-green-500 hover:-translate-y-2 transition-all duration-300 group flex flex-col"
                            >
                                <img src={customer.image} alt={`${customer.name} case study`} className="w-full h-48 object-cover" />
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{customer.name}</h3>
                                    <p className="mt-2 text-slate-600 dark:text-slate-300 flex-grow">{customer.description}</p>
                                    <span className="mt-4 inline-block font-semibold text-green-600 dark:text-green-400 group-hover:underline self-start">
                                        Read Case Study &rarr;
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CustomersPage;