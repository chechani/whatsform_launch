

import type { CategoryPageData } from '@/components/_CategoryPageLayout';

export const telemedicineData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Telemedicine",
        subtitle: "Enhance the virtual care experience with automated appointment booking, secure pre-consultation data collection, and proactive follow-up care on WhatsApp.",
    },
    sections: [
        {
            type: 'centeredText',
            title: "Making Virtual Care Seamless",
            subtitle: `For telemedicine platforms, a smooth and secure patient experience is paramount. WhatsApp provides the perfect channel to manage the entire virtual consultation lifecycle, from booking to follow-up.`
        },
        {
            type: 'contentWithImage',
            subtitle: 'PRE-CONSULTATION WORKFLOW',
            title: 'Prepare for a Productive Consultation',
            text: 'Before a virtual appointment, a WhatsForm bot can guide the patient through a pre-consultation workflow. This includes collecting symptoms, medical history, and allowing the patient to securely upload photos or previous reports, ensuring the doctor has all necessary information beforehand.',
            image: 'https://picsum.photos/seed/telemed1/500/400',
            features: [
                "Automated pre-consultation symptom collection",
                "Secure upload of medical records and images",
                "Reduced consultation time by gathering info in advance",
                "Integration with your EMR/telemedicine platform"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'POST-CONSULTATION & FOLLOW-UP',
            title: 'Ensure Continuity of Care',
            text: 'After a consultation, automatically send a summary and a digital prescription to the patient\'s WhatsApp. Schedule automated follow-up messages to check on their progress, remind them to take medication, or prompt them to book their next virtual visit.',
            image: 'https://picsum.photos/seed/telemed2/500/400',
            reverse: true,
            features: [
                "Instant delivery of digital prescriptions",
                "Automated post-consultation follow-ups",
                "Medication and appointment reminders",
                "Improved patient adherence and health outcomes"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Telemedicine Platform",
            benefits: [
                {
                    icon: "CheckCircleIcon",
                    title: "More Efficient Consultations",
                    description: "Doctors can conduct more focused and effective consultations with all patient information available upfront."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Enhanced Patient Experience",
                    description: "Provide a convenient, end-to-end virtual care journey on a platform patients are already comfortable with."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Improved Care Outcomes",
                    description: "Automated follow-ups and reminders increase patient adherence to treatment plans."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Increased Patient Retention",
                    description: "A seamless and supportive virtual experience encourages patients to continue using your platform."
                }
            ]
        }
    ],
    relevantForms: [
        'Patients Appointment',
        'Patient Vitals',
        'Patient Registrant',
        'Consultation',
        'Reschedule Patient'
    ],
    closing: {
        title: "Ready to revolutionize your virtual care delivery?",
        subtitle: "See how WhatsForm can create a more efficient and patient-friendly telemedicine experience.",
        cta: "Book a Demo"
    }
};

