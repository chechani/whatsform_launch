
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../pages/industries/CategoryPageLayout';

export const rentalServicesData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Car Rental Services",
        subtitle: `Automate vehicle booking, manage availability checks, and provide instant customer support to make renting a car easier than ever.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "A Faster Route to a Rental",
            subtitle: "For car rental companies, a quick and convenient booking process is key to winning customers. WhatsForm helps you deliver a seamless rental experience right on your customers' phones."
        },
        {
            type: 'contentWithImage',
            subtitle: 'VEHICLE BOOKING & AVAILABILITY',
            title: 'Your 24/7 AI-Powered Rental Agent',
            text: 'Allow customers to book a rental car anytime on WhatsApp. An AI bot can check vehicle availability for specific dates, provide quotes for different car types, and guide the customer through the entire booking process, including document uploads.',
            image: 'https://picsum.photos/seed/rental1/500/400',
            features: [
                "24/7 automated vehicle booking",
                "Real-time availability and price checks",
                "Conversational booking and payment process",
                "Secure upload of driver's license and ID"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'CUSTOMER SUPPORT & TRIP MANAGEMENT',
            title: 'Support on the Go',
            text: 'Provide instant support to your renters on WhatsApp. They can ask questions about their booking, request an extension, or get help in case of a breakdown. Automated notifications can also be sent for pickup reminders or return confirmations.',
            image: 'https://picsum.photos/seed/rental2/500/400',
            reverse: true,
            features: [
                "24/7 support for booking modifications",
                "Instant assistance for on-road issues",
                "Automated pickup and return reminders",
                "Collect post-rental feedback easily"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Rental Business",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Increased Bookings",
                    description: "A simple, conversational booking process removes friction and converts more inquiries into reservations."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Improved Customer Experience",
                    description: "Providing a modern, convenient, and responsive service enhances customer satisfaction and loyalty."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Reduced Operational Costs",
                    description: "Automate the booking process and common support queries to reduce the workload on your staff."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Higher Vehicle Utilization",
                    description: "An efficient booking and management system helps you maximize the utilization of your fleet."
                }
            ]
        }
    ],
    relevantForms: [
        'Booking Form',
        'Customer Feedback',
        'Service booking',
        'Complaint',
        'Payment Form'
    ],
    closing: {
        title: "Ready to streamline your car rental business?",
        subtitle: "Discover how WhatsForm can help you provide a faster, easier, and more convenient rental experience.",
        cta: "Book a Demo"
    }
};