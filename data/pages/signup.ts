
import { FormsIcon, NoCodeIcon, CodeBracketIcon } from '../../icons';

export const signupPageData = {
    leftColumn: {
        title: "Build <span class=\"text-green-400\">Google Form-like</span> experiences, directly inside WhatsApp.",
        promo: {
            title: "YOUR 14-DAY FREE TRIAL INCLUDES",
            features: [
                {
                    icon: FormsIcon,
                    title: "WhatsApp-Native Forms & Flows",
                    description: "Engage users with interactive forms directly in chat."
                },
                {
                    icon: NoCodeIcon,
                    title: "'No-Code' Automation Builder",
                    description: "Design complex workflows with a visual builder, no coding required."
                },
                {
                    icon: CodeBracketIcon,
                    title: "Powerful Backend Integrations",
                    description: "Connect to 200+ apps like CRMs & ERPs for real-time data sync."
                }
            ]
        },
        trustedBy: {
            title: "Trusted by 70000+ Brands",
            brands: ["JCAF", "KneeXpert", "Eltech", "Sahaj Hospital"]
        }
    },
    rightColumn: {
        loginPrompt: {
            text: "Already a member? ",
            linkText: "Log in",
            linkPath: "#/"
        },
        title: "Request a Free 14 Days Trial Account",
        subtitle: "Fill in the details below to get started with your 14-day free trial."
    }
};
