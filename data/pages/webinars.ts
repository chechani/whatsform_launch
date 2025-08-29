import { CalendarDaysIcon, CurrencyDollarIcon, UsersIcon, PlayCircleIcon, CloseIcon } from '../../icons';
import { videosPageData } from './videos';

export const webinarsPageData = {
    hero: {
        title: "WhatsForm Webinars",
        subtitle: "Join our live sessions to master WhatsApp automation or watch recordings of past events to learn at your own pace."
    },
    upcomingWebinar: {
        title: "Build Google-like Forms within WhatsApp: Master WhatsApp Flows for Business Success",
        date: "16th July 2024",
        fee: "₹99",
        duration: "2 Hours",
        targetAudience: [
            "Small business owners",
            "Marketing professionals",
            "Customer support teams",
            "Sales teams",
            "Task managers",
            "Anyone interested in WhatsApp automation"
        ],
        objectives: [
            "Teach participants how to build and implement Google Type Forms on WhatsApp Flows.",
            "Demonstrate the complete cycle from creation to response management.",
            "Discuss the requirements for using the WhatsApp Business API.",
            "Introduce various solutions and demonstrate WhatsForm's functionality."
        ],
        agenda: [
            { time: "10 mins", topic: "Introduction", details: ["Welcome and Introduction of the Host", "Overview of the Webinar Topics"] },
            { time: "60 mins", topic: "Building Google Type Forms on WhatsApp Flows", details: ["Introduction to WhatsApp Flows", "Step-by-Step Guide to Building Forms (Template selection, JSON preview, Testing)", "Using Flows with Templates", "Flows with/without Endpoints", "Flow Trigger Planning (Keywords, Push/Pull)", "Managing outgoing flow records & multi-screen navigation", "Response Management & User Notifications", "Application Integration"] },
            { time: "10 mins", topic: "Practical Use Cases", details: ["Lead Generation Form", "Booking Appointment Form", "KYC Completion Form", "Task Management Form", "Live Demonstration", "Q&A Session on Use Cases"] },
            { time: "40 mins", topic: "WhatsApp Business API and WhatsForm", details: ["Understanding WhatsApp Business API requirements", "Overview of WhatsForm Features: Simplified Flow Building, Contact Management, Broadcasting, Email Campaigns"] },
            { time: "10 mins", topic: "Q&A and Interactive Session", details: ["Answering Participant Questions", "Discussion on Implementing WhatsApp Solutions"] },
            { time: "10 mins", topic: "Wrap-up and Closing Remarks", details: ["Recap of Key Points", "Sharing Resources and Next Steps", "Information on Future Webinars"] }
        ]
    },
    pastWebinars: {
        title: "Past Webinar Recordings",
        subtitle: "Missed a live session? Catch up with our library of past webinars and tutorials.",
        videos: videosPageData.videos.map((video, index) => {
            const dates = ['2024-07-09', '2024-07-02', '2024-06-25'];
            return { ...video, date: dates[index] || `2024-06-${25 - index * 7}` };
        })
    }
};