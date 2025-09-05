

import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../components/_CategoryPageLayout';

export const hospitalsClinicsData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Hospitals & Clinics",
        subtitle: "Automate patient registration, streamline appointment scheduling, and enhance patient care with conversational workflows designed for modern healthcare.",
    },
    sections: [
        {
            type: 'centeredText',
            title: "A Healthier Approach to Patient Communication",
            subtitle: `Reduce administrative overhead and improve patient satisfaction by moving key interactions to WhatsApp, the platform your patients already use and trust.`
        },
        {
            type: 'contentWithImage',
            subtitle: 'PATIENT ONBOARDING',
            title: 'Skip the Queue, Not the Care',
            text: 'New patients can pre-register via a simple WhatsApp conversation before arriving. Our bot collects demographic and insurance details, creating a patient record in your HIS/EMR automatically. This drastically reduces waiting times and improves data accuracy.',
            image: 'https://picsum.photos/seed/hospital1/500/400',
            features: [
                "Conversational pre-registration forms",
                "Reduced patient waiting times by up to 70%",
                "Accurate data capture directly into the HIS",
                "Secure collection of ID and insurance documents"
            ]
        },
        // FIX: This 'contentWithImage' object was incomplete, missing 'image', 'features' and had incomplete 'text'.
        // Added the missing properties and completed the text to match the type definition and maintain consistency.
        {
            type: 'contentWithImage',
            subtitle: 'APPOINTMENT MANAGEMENT',
            title: 'Your 24/7 AI-Powered Receptionist',
            text: 'Allow patients to book, reschedule, or cancel appointments anytime on WhatsApp. Our AI assistant can check doctor availability in real-time, confirm the booking, and send automated reminders to reduce no-shows.',
            image: 'https://picsum.photos/seed/hospital2/500/400',
            reverse: true,
            features: [
                "24/7 conversational appointment booking",
                "Real-time integration with your scheduling system",
                "Automated confirmations and reminders",
                "Reduced no-shows and administrative workload"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Hospital/Clinic",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Enhanced Patient Experience",
                    description: "A convenient, modern communication channel improves patient satisfaction from booking to follow-up."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Improved Staff Efficiency",
                    description: "Automate routine tasks like registrations and reminders, freeing up staff for critical patient care."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Reduced No-Shows",
                    description: "Automated reminders on WhatsApp significantly improve appointment attendance rates."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Faster Data Collection",
                    description: "A streamlined, digital onboarding process ensures you have accurate patient data instantly."
                }
            ]
        }
    ],
    relevantForms: [
        'Patient Registrant',
        'Patients Appointment',
        'Cancel Patient',
        'Reschedule Patient',
        'lab test',
        'Patient Vitals'
    ],
    closing: {
        title: "Ready to revolutionize your patient experience?",
        subtitle: "See how WhatsForm can be tailored to the unique needs of your healthcare organization.",
        cta: "Book a Demo"
    }
};


