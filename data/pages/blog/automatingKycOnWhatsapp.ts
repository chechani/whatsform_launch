
import { blogPosts } from '../blog';
const postMeta = blogPosts.find(p => p.slug === 'automating-kyc-on-whatsapp');

export const automatingKycOnWhatsappData = {
    title: postMeta?.title || 'Automating KYC Collection on WhatsApp',
    author: postMeta?.author || 'Rohit Shah, Compliance Specialist',
    date: postMeta?.date || 'September 2, 2025',
    readTime: postMeta?.readTime || '5 min read',
    heroImage: postMeta?.image || 'https://picsum.photos/seed/blog4-hero/1200/600',
    content: [
        {
            type: 'paragraph',
            text: `In regulated industries like finance, banking, and professional services, Know Your Customer (KYC) is a critical but often cumbersome process. Traditional methods involving physical documents or clunky web portals create friction for customers and administrative burdens for businesses. The solution? Bringing the entire KYC process into the one app every customer already has: WhatsApp.`
        },
        {
            type: 'heading',
            text: '1. Conversational Document Collection'
        },
        {
            type: 'paragraph',
            text: `WhatsForm transforms KYC from a static form into a simple, guided conversation. The bot can request specific documents like an Aadhaar card, PAN card, or passport. The user can simply snap a photo and upload it directly in the chat. This is far more intuitive than scanning documents and navigating a complex web uploader, leading to faster submissions and fewer errors.`
        },
        {
            type: 'heading',
            text: '2. AI-Powered Validation and Data Extraction'
        },
        {
            type: 'paragraph',
            text: `Our AI agents can perform initial validation on the submitted documents. It can check for image clarity, ensure the document type is correct, and even extract key information (like name, DOB, and address) using Optical Character Recognition (OCR). This pre-processing saves your compliance team significant time and effort.`
        },
        {
            type: 'heading',
            text: '3. Security and Compliance at the Core'
        },
        {
            type: 'paragraph',
            text: `Handling sensitive data requires robust security. All documents submitted through WhatsForm are transmitted over end-to-end encrypted channels. Once received, they can be securely pushed to your internal, compliant storage systems. The platform maintains a complete audit trail of the entire interaction, ensuring you meet regulatory requirements.`
        },
        {
            type: 'heading',
            text: 'Conclusion: The Future of Onboarding'
        },
        {
            type: 'paragraph',
            text: `Automating KYC on WhatsApp is a win-win. Customers get a fast, convenient, and secure onboarding experience. Businesses get higher completion rates, reduced administrative overhead, and a more streamlined, compliant process. It’s a foundational step in building a modern, customer-centric financial service.`
        }
    ]
};
