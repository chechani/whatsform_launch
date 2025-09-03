
import { CheckCircleIcon } from '../../../icons';

export const sahajHospitalPageData = {
    hero: {
        title: "Sahaj Hospital: Transforming Patient Care with WhatsForm",
        subtitle: `How a multi-specialty hospital leverages WhatsForm to simplify registrations, deliver lab reports instantly, and ensure continuous care — all within WhatsApp.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Healthcare Communication, Reimagined",
            subtitle: "Sahaj Hospital set out to create a frictionless patient journey — reducing queues, providing instant access to reports, and keeping patients engaged, so that doctors and nurses can focus entirely on delivering quality care."
        },
        {
            type: 'contentWithImage',
            subtitle: 'AUTOMATED PATIENT REGISTRATION',
            title: 'No More Queues, Just Care',
            text: 'First-time patients can complete registration via a simple WhatsApp chat before stepping into the hospital. WhatsForm collects demographic and insurance details and creates a patient record directly in the HIS/EMR system. This eliminates long wait times and ensures a smooth first impression.',
            image: 'https://picsum.photos/seed/sahaj1/500/400',
            features: [
                "Conversational pre-registration forms inside WhatsApp",
                "70% reduction in registration wait times",
                "Seamless HIS/EMR integration for accurate data",
                "Higher patient satisfaction from day one"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'INSTANT LAB REPORT DELIVERY',
            title: 'Reports at Your Fingertips',
            text: 'As soon as lab results are ready, patients receive a secure PDF on WhatsApp after OTP verification. An AI-powered assistant guides them on next steps, like scheduling a follow-up consultation — without the need to call or visit the hospital.',
            image: 'https://picsum.photos/seed/sahaj2/500/400',
            reverse: true,
            features: [
                "Secure, OTP-verified report access",
                "No need for physical report collection",
                "AI-assisted next-step guidance",
                "Convenient, trusted patient experience"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'POST-DISCHARGE FOLLOW-UP',
            title: 'Care That Continues Beyond Discharge',
            text: 'After patients leave, Sahaj Hospital stays connected through automated WhatsApp care journeys. The system sends medication reminders, schedules follow-ups, and allows patients to log concerns, which are instantly flagged for the nursing team — ensuring proactive and continuous care.',
            image: 'https://picsum.photos/seed/sahaj3/500/400',
            features: [
                "Automated recovery monitoring",
                "Personalized medication and check-up reminders",
                "Patient feedback loop via WhatsApp",
                "Early alerts for complications"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Measurable Impact for Sahaj Hospital",
            subtitle: "By embedding WhatsForm into daily workflows, Sahaj Hospital achieved visible improvements in both efficiency and patient trust.",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Streamlined Patient Flow",
                    description: "Faster registrations and instant report delivery reduced bottlenecks, improving hospital throughput."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Stronger Patient Engagement",
                    description: "Patients stayed connected and informed across every stage of their care journey."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Higher Staff Productivity",
                    description: "Repetitive admin work dropped, freeing staff to focus on critical patient needs."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Modernized Brand Image",
                    description: "Reinforced Sahaj Hospital’s reputation as a forward-thinking, patient-first healthcare provider."
                }
            ]
        }
    ],
    closing: {
        title: "Ready to modernize your patient experience?",
        subtitle: "See how WhatsForm can integrate seamlessly with your hospital systems and departments.",
        cta: "Book a Healthcare Demo"
    }
};