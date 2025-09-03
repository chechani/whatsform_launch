
import { blogPosts } from '../blog';
const postMeta = blogPosts.find(p => p.slug === 'date-based-campaigns-on-whatsapp');

export const dateBasedCampaignsOnWhatsappData = {
    title: postMeta?.title || 'Send Birthday and Anniversary Messages Automatically',
    author: postMeta?.author || 'Pooja Malhotra, Customer Success Manager',
    date: postMeta?.date || 'September 15, 2025',
    readTime: postMeta?.readTime || '4 min read',
    heroImage: postMeta?.image || 'https://picsum.photos/seed/blog17-hero/1200/600',
    content: [
        {
            type: 'paragraph',
            text: `In the age of impersonal mass marketing, a small personal touch can make a huge difference in building customer loyalty. Remembering a customer's birthday or the anniversary of their first purchase shows that you value their relationship beyond just the transaction. With WhatsForm, you can automate these thoughtful gestures to delight customers and drive repeat business.`
        },
        {
            type: 'heading',
            text: '1. Set It and Forget It Automation'
        },
        {
            type: 'paragraph',
            text: `The magic of date-based campaigns is that they run on autopilot. Once you've collected key dates from your customers (like their date of birth or a sign-up date), you can create a workflow that automatically triggers a personalized WhatsApp message on that specific day each year. It’s a simple, scalable way to maintain a personal connection with your entire customer base.`
        },
        {
            type: 'heading',
            text: '2. More Than Just a Greeting'
        },
        {
            type: 'paragraph',
            text: `A great anniversary message doesn't just say 'Happy Birthday.' It includes a special offer to make the customer feel valued. Your automated message can include:`
        },
        {
            type: 'list',
            items: [
                'A unique discount code for their next purchase.',
                'A link to a special birthday gift collection.',
                'An invitation for a complimentary service.',
                'An interactive button to claim their special offer.'
            ]
        },
        {
            type: 'paragraph',
            text: `This turns a simple greeting into a powerful, revenue-generating touchpoint.`
        },
        {
            type: 'heading',
            text: '3. Building Long-Term Loyalty'
        },
        {
            type: 'paragraph',
            text: `Consistent, personalized communication is the cornerstone of customer loyalty. By regularly acknowledging key moments in your customer's journey, you reinforce their decision to do business with you. These small, automated gestures build an emotional connection that transactional marketing can never achieve, turning one-time buyers into lifelong brand advocates.`
        },
        {
            type: 'heading',
            text: 'Conclusion: The Power of Personalization at Scale'
        },
        {
            type: 'paragraph',
            text: `Automated, date-based campaigns are one of the easiest and most effective ways to personalize your marketing. With WhatsForm, you can effortlessly implement this strategy to strengthen customer relationships, increase loyalty, and drive measurable results, all while your team focuses on other priorities.`
        }
    ]
};
