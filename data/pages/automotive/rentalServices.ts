import type { CategoryPageData } from '@/components/_CategoryPageLayout';

export const rentalServicesData: CategoryPageData = {
    hero: {
        title: "Simplify Vehicle Rentals with Seamless WhatsApp Forms",
        subtitle: "Upgrade your car rental service with Whatsform. Our WhatsApp-based forms make it easy for customers to book vehicles, manage their rentals, and get support, all from their favorite messaging app."
    },
    sections: [
        {
            type: 'centeredText',
            title: 'Solutions to Drive Your Rental Business'
        },
        ...[
            {
                title: "Vehicle Booking and Reservations",
                text: "Allow customers to check vehicle availability and make reservations directly through WhatsApp. Capture all necessary details, including rental dates, vehicle preferences, and driver information.",
                image: "/images/solutions/booking.png",
                features: []
            },
            {
                title: "Customer Verification and Document Upload",
                text: "Streamline the check-in process by allowing customers to upload their driver's license and other required documents in advance via a secure WhatsApp form.",
                image: "/images/solutions/document-upload.png",
                features: []
            },
            {
                title: "Rental Agreement E-Signatures",
                text: "Go paperless by sending rental agreements to customers on WhatsApp for them to review and e-sign on their mobile devices. Speed up the rental process and reduce administrative work.",
                image: "/images/solutions/e-signature.png",
                features: []
            },
            {
                title: "Vehicle Inspection and Damage Reports",
                text: "Enable customers and staff to conduct pre- and post-rental vehicle inspections using a WhatsApp form. Capture photos of any damage to ensure transparency and avoid disputes.",
                image: "/images/solutions/damage-report.png",
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
            title: 'Features for Efficient Rental Management',
            benefits: [
                {
                    icon: "Car",
                    title: "Real-Time Availability",
                    description: "Integrate with your booking system to show customers real-time vehicle availability."
                },
                {
                    icon: "Shield",
                    title: "Secure Document Handling",
                    description: "Ensure customer documents are uploaded and stored securely."
                },
                {
                    icon: "CheckCircle",
                    title: "Automated Booking Confirmations",
                    description: "Instantly send booking confirmations and rental details to customers on WhatsApp."
                },
                {
                    icon: "CreditCard",
                    title: "Payment Gateway Integration",
                    description: "Collect deposits or rental payments directly through the form."
                },
                {
                    icon: "Map",
                    title: "Multi-Location Support",
                    description: "Manage bookings and operations across multiple rental locations from a single dashboard."
                },
                {
                    icon: "Message",
                    title: "Customer Support Chat",
                    description: "Easily transition from a form submission to a live chat with a support agent if needed."
                }
            ]
        }
    ],
    relevantForms: [],
    closing: {
        title: "Accelerate Your Rental Business Today",
        subtitle: "Ready to offer your customers a modern, convenient rental experience? Get started with Whatsform and see the difference.",
        cta: "Start Your Free Trial"
    }
};
