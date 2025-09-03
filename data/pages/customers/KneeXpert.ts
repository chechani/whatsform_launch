
import { CheckCircleIcon } from '../../../icons';

export const kneeXpertPageData = {
    hero: {
        title: "KneeXpert: Transforming Patient Journeys with Conversational Knee Care",
        subtitle: `How the specialized orthopedic clinic uses WhatsForm to automate appointments, guide patients through surgery, and improve care outcomes.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "A Prescription for Efficiency",
            subtitle: "For a high-volume specialty clinic like KneeXpert, patient communication is critical. They needed a way to reduce administrative overhead while enhancing patient engagement, from the first consultation to post-operative recovery."
        },
        {
            type: 'contentWithImage',
            subtitle: 'APPOINTMENT BOOKING & REMINDERS',
            title: 'Your 24/7 AI-Powered Receptionist',
            text: 'Prospective patients can book consultations anytime directly on WhatsApp. The AI assistant gathers initial symptoms, finds available slots with specialists, and confirms the booking instantly. Automated reminders are sent before appointments, drastically reducing patient no-shows.',
            image: 'https://picsum.photos/seed/kneexpert1/500/400',
            features: [
                "AI-guided appointment scheduling",
                "Automated reminders for consultations & follow-ups",
                "Reduced phone call volume for front-desk staff",
                "Easy rescheduling via chat"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'PRE-SURGERY ONBOARDING',
            title: 'Streamlined Admission, Reduced Waiting Times',
            text: 'Instead of filling out paperwork in the waiting room, patients complete their medical history, upload insurance documents, and sign consent forms through a guided WhatsApp conversation from the comfort of their home. This ensures all information is accurately captured in the EMR before they even arrive.',
            image: 'https://picsum.photos/seed/kneexpert2/500/400',
            reverse: true,
            features: [
                "Interactive pre-admission forms",
                "Secure collection of medical and insurance documents",
                "Direct integration with hospital EMR systems",
                "AI-summarized patient history for doctors"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'GUIDED POST-OPERATIVE CARE',
            title: 'Ensuring a Smooth and Monitored Recovery',
            text: 'Post-surgery care is crucial. WhatsForm sends automated, sequential messages to guide patients through their recovery. This includes medication reminders, links to physiotherapy exercise videos, and scheduled check-in forms to monitor their progress, with alerts triggered to a nurse if a patient reports a problem.',
            image: 'https://picsum.photos/seed/kneexpert3/500/400',
            features: [
                "Automated drip campaigns for recovery guidance",
                "Proactive progress-monitoring forms",
                "Smart escalation to medical staff for concerns",
                "Improved patient adherence to care plans"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for KneeXpert",
            subtitle: "Implementing a conversational AI strategy delivered significant benefits for both patients and the clinic.",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Better Patient Outcomes",
                    description: "Proactive follow-ups and guided recovery plans improve adherence and help catch potential issues earlier."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Reduced Admin Load",
                    description: "Freed staff from repetitive calls and manual data entry to focus on in-person patient care."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Enhanced Patient Satisfaction",
                    description: "Provided an easy, modern, and 24/7 communication channel, leading to higher patient satisfaction scores."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Fewer No-Shows",
                    description: "Automated reminders and simple rescheduling via chat significantly improved appointment attendance."
                }
            ]
        }
    ],
    closing: {
        title: "Ready to elevate your patient experience and streamline your practice?",
        subtitle: "See how WhatsForm can be tailored to the unique needs of your healthcare organization.",
        cta: "Book a Demo"
    }
};