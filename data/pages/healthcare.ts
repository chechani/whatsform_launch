import { CheckCircleIcon } from '../../icons';

export const healthcarePageData = {
    hero: {
        title: "Revolutionizing Patient Care with AI-Powered WhatsApp Automation",
        subtitle: "From automated appointment booking to proactive follow-ups, discover how WhatsForm, SmartyAutomate, and AI agents transform the patient experience.",
    },
    sections: [
        {
            type: 'centeredText',
            title: "A New Era of Patient Engagement",
            subtitle: "In healthcare, timely communication and accurate information collection can be life-saving. WhatsForm, enhanced with AI and SmartyAutomate integration, offers a powerful, interactive, and efficient tool for patient engagement that goes far beyond traditional methods."
        },
        {
            type: 'contentWithImage',
            subtitle: 'APPOINTMENT BOOKING & REMINDERS',
            title: '24/7 Scheduling, Zero Phone Calls',
            text: 'Patients schedule appointments via a seamless WhatsApp conversation. An AI agent collects symptoms, finds available slots by checking your hospital’s scheduling system in real-time, and books the appointment instantly. Confirmations and reminders are sent automatically, drastically reducing no-shows.',
            image: 'https://picsum.photos/seed/healthcare-appoint/500/400',
            features: [
                "AI-guided symptom collection",
                "Real-time ERP/scheduling system integration",
                "Automated confirmations & reminders",
                "Effortless rescheduling via chat"
            ],
            specialText: 'Campaign Idea: “📅 Book Your Visit via WhatsApp! Skip the calls and waiting. Just send “Hi” to our WhatsApp and our AI assistant will schedule your appointment in seconds!”'
        },
        {
            type: 'contentWithImage',
            subtitle: 'EMERGENCY HELPLINE TRIAGE',
            title: 'Instant Guidance When It Matters Most',
            text: 'In critical situations, WhatsForm’s AI can perform initial triage. It asks for symptoms, provides immediate first-step advice from a medical knowledge base, and simultaneously triggers alerts. SmartyAutomate can instantly notify an on-call doctor or dispatch an ambulance, ensuring a rapid, guided response while human teams mobilize.',
            image: 'https://picsum.photos/seed/healthcare-emer/500/400',
            reverse: true,
            features: [
                "AI-powered initial symptom triage",
                "Instant first-aid guidance",
                "Automated alerts to medical staff",
                "Integration with emergency response systems"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'PATIENT INTAKE & MEDICAL HISTORY',
            title: 'Accurate Data Collection, Before the Visit',
            text: 'Replace waiting room clipboards with interactive WhatsApp forms. Patients can fill out their medical history from the comfort of their home, with an AI agent available to clarify medical terms. The data is validated and sent directly into the patient’s record in your EMR/EHR system, saving time and reducing errors.',
            image: 'https://picsum.photos/seed/healthcare-intake/500/400',
            features: [
                "Interactive pre-visit forms",
                "AI assistance for patient questions",
                "Direct integration with EMR/EHR systems",
                "AI-summarized history for doctors"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'LAB REPORTS & PROACTIVE FOLLOW-UPS',
            title: 'Deliver Results and Ensure Adherence',
            text: 'Automate the delivery of lab results and prescriptions. A workflow can detect when a result is ready, securely send it to the patient, and have an AI agent explain the basics. The system can then perform proactive follow-ups, asking patients how they are feeling and escalating to a nurse if their responses indicate a concern.',
            image: 'https://picsum.photos/seed/healthcare-labs/500/400',
            reverse: true,
            features: [
                "Automated, secure delivery of lab results",
                "AI-powered explanation of results",
                "Proactive post-treatment follow-ups",
                "Smart escalation to human staff"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "The Tangible Outcomes for Your Practice",
            subtitle: "Implementing an AI-driven WhatsApp strategy delivers significant benefits for both patients and providers.",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Higher Patient Satisfaction",
                    description: "Provide easy access and quick, 24/7 answers, leading to a more responsive healthcare experience."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Reduced No-Shows",
                    description: "Automated reminders and simple rescheduling drastically improve appointment attendance rates."
                },
                {
                    icon: CheckCircleIcon,
                    title: "More Efficient Operations",
                    description: "Free up staff from repetitive phone calls and manual data entry to focus on quality patient care."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Improved Patient Adherence",
                    description: "Proactive follow-ups encourage patients to stick to treatment plans and help catch issues early."
                }
            ]
        }
    ],
    closing: {
        title: "Ready to deliver a modern, efficient, and patient-centric experience?",
        subtitle: "See how WhatsForm can be tailored to the unique needs of your healthcare organization.",
        cta: "Book a Demo"
    }
};