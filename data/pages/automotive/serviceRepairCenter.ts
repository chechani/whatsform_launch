import type { CategoryPageData } from '@/components/_CategoryPageLayout';

export const serviceRepairCenterData: CategoryPageData = {
    hero: {
        title: "Streamline Your Auto Service Center with WhatsApp Forms",
        subtitle: "Enhance customer communication and operational efficiency at your service and repair center. Whatsform allows you to manage appointments, approvals, and feedback seamlessly through WhatsApp."
    },
    sections: [
        {
            type: 'centeredText',
            title: 'Solutions to Tune-Up Your Operations'
        },
        ...[
            {
                title: "Appointment Scheduling",
                text: "Let customers book service appointments 24/7 through a simple WhatsApp form. Reduce phone calls and allow your staff to focus on providing excellent service.",
                image: "/images/solutions/appointment-scheduling.png",
                features: []
            },
            {
                title: "Digital Vehicle Inspection Reports",
                text: "Technicians can use WhatsApp forms on their tablets or phones to conduct vehicle inspections, noting down issues and attaching photos. Share these reports with customers for transparency.",
                image: "/images/solutions/inspection-report.png",
                features: []
            },
            {
                title: "Service and Repair Approvals",
                text: "Send detailed estimates with photos of the required repairs directly to customers on WhatsApp. Customers can approve the work with a simple tap, speeding up the repair process.",
                image: "/images/solutions/repair-approval.png",
                features: []
            },
            {
                title: "Post-Service Feedback and Reminders",
                text: "Automatically send a feedback form after the service is complete to gauge customer satisfaction. You can also send automated reminders for future maintenance.",
                image: "/images/solutions/service-reminders.png",
                features: []
            }
        ].map((solution, index) => ({
            type: 'contentWithImage' as const,
            title: solution.title,
            subtitle: '',
            text: solution.text,
            image: solution.image,
            features: solution.features,
            reverse: index % 2 !== 0
        })),
        {
            type: 'benefitsGrid',
            title: 'Features for a High-Performance Service Center',
            benefits: [
                {
                    icon: "Scan",
                    title: "VIN Scanning",
                    description: "Allow technicians or customers to scan the vehicle's VIN to pre-fill vehicle information in the form."
                },
                {
                    icon: "Camera",
                    title: "Photo and Video Uploads",
                    description: "Technicians can easily upload photos or videos to show customers the issues with their vehicle."
                },
                {
                    icon: "Integration",
                    title: "Integration with Management Systems",
                    description: "Connect Whatsform with your existing garage management software to sync appointments and customer data."
                },
                {
                    icon: "Info",
                    title: "Automated Status Updates",
                    description: "Keep customers informed by sending automated updates as their vehicle moves through the repair process."
                },
                {
                    icon: "DollarSign",
                    title: "Secure Payment Links",
                    description: "Send secure payment links to customers on WhatsApp once the service is complete."
                },
                {
                    icon: "Tool",
                    title: "Parts Ordering Forms",
                    description: "Create internal forms for technicians to quickly order necessary parts from the parts department."
                }
            ]
        }
    ],
    relevantForms: [],
    closing: {
        title: "Get Your Service Center Running Smoothly",
        subtitle: "Ready to provide a modern, efficient, and transparent service experience for your customers? Try Whatsform today.",
        cta: "Book a Demo"
    }
};
