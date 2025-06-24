import ContactUsButton from "@/app/UI/Buttons/contactusBtn";

const servicesData = [
  {
    title: "Automation AI Solutions",
    content: [
      {
        title: "Automation AI Solutions",
        description: "Automation is not just about speeding up tasks. We create real conversations that help your customers instantly. Our AI understands, responds, and interacts with your customers across voice and chat channels, providing natural and smooth conversations without delays. From instant call handling to 24/7 chatbot support, our automation ensures faster service, happier customers, and scalable operations."
      },
      {
        title: "Calling AI",
        description: "Incoming calls get answered instantly. Our voice AI listens, responds, and handles common questions or routes complex calls to the right team. No more long hold times. Your customers feel heard from the first ring."
      },
      {
        title: "Website Integrated AI (Chatbots)",
        description: "Visitors want help now. Our chatbots provide instant answers, help customers navigate your site, book appointments, and capture leads, all while feeling personal and helpful. They work 24/7, even when your team sleeps."
      }
    ],
    buttons: <ContactUsButton />,
    hoverColor: "hover:bg-blue-400",
    activeColor: "bg-blue-400",
    caseStudies: [
      { image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", label: "CASE STUDY", title: "Streamlining Customer Support for a National Retailer" },
      { image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1511&q=80", label: "CASE STUDY", title: "Back-Office Optimization for a Financial Services Provider" },
      { image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", label: "CASE STUDY", title: "AI Chatbot Deployment for Healthcare Appointment Booking" },
      { image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", label: "CASE STUDY", title: "Global Voice AI Call Center Rollout" }
    ]
  },
  {
    title: "Customer Support",
    content: [
      {
        title: "Customer Support Services",
        description: "Our agents don't read scripts — they listen, care, and solve problems. We handle your phone calls, emails, and chats with empathy and patience, treating every interaction as a chance to build trust. With training, quality checks, and continuous feedback, your customers always feel like they're speaking with your in-house team."
      },
      {
        title: "Angry Customer Handling",
        description: "We calm frustrated customers quickly and turn negative experiences into loyalty."
      },
      {
        title: "Confused Customer Assistance",
        description: "We patiently guide confused customers and ensure they find solutions easily."
      },
      {
        title: "Happy Customer Engagement",
        description: "We reinforce positive experiences, turning satisfied customers into long-term advocates."
      }
    ],
    buttons: <ContactUsButton />,
    hoverColor: "hover:bg-red-400",
    activeColor: "bg-red-400",
    caseStudies: [
      { image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", label: "CASE STUDY", title: "Multichannel Support Expansion for an E-commerce Platform" },
      { image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", label: "CASE STUDY", title: "Invoice Processing Overhaul for a Global Manufacturer" },
      { image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80", label: "CASE STUDY", title: "24/7 Customer Support Launch for International Airline" }
    ]
  },
  {
    title: "Virtual Assistant",
    content: [
      {
        title: "Virtual Assistance Services",
        description: "Our virtual assistants handle all the small but critical tasks, keeping your schedule, inbox, and workload organized. From booking meetings to following up on invoices and managing research, we free your time so you can focus on growth while we handle the details."
      },
      {
        title: "Schedule & Calendar Management",
        description: "We manage your appointments, meetings, and deadlines, keeping your day smooth and predictable."
      },
      {
        title: "Inbox & Communication Management",
        description: "We handle emails, follow-ups, and communication tasks, ensuring timely responses and organization."
      },
      {
        title: "Task Execution & Research",
        description: "We take care of repetitive tasks and detailed research so you stay focused on core business decisions."
      }
    ],
    buttons: <ContactUsButton />,
    hoverColor: "hover:bg-green-400",
    activeColor: "bg-green-400",
    caseStudies: [
      { image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", label: "CASE STUDY", title: "Scalable Data Entry Solution for a Healthcare Network" },
      { image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80", label: "CASE STUDY", title: "Back-Office Process Automation for a Financial Services Provider" },
      { image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80", label: "CASE STUDY", title: "Virtual Assistant Services for Real Estate Firm" },
      { image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80", label: "CASE STUDY", title: "Remote Admin Support for Tech Startups" },
      { image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1388&q=80", label: "CASE STUDY", title: "Appointment Coordination for Medical Clinics" }
    ]
  },
  {
    title: "Appointment Setting",
    content: [
      {
        title: "Appointment Setting Services",
        description: "We go beyond making calls. Our team studies your product, learns your pitch, qualifies leads, and books appointments that turn into real sales conversations. Every outreach is tailored and genuine. No scripts. No pushy tactics. Just meaningful conversations that move your sales forward."
      },
      {
        title: "Lead Qualification",
        description: "We pre-qualify prospects, ensuring your sales team meets only with highly relevant leads."
      },
      {
        title: "Tailored Pitching",
        description: "Our callers approach every prospect like part of your sales team, using your unique messaging."
      },
      {
        title: "Calendar Booking",
        description: "We handle scheduling and confirmations to keep your sales calendar full and organized."
      }
    ],
    buttons: <ContactUsButton />,
    hoverColor: "hover:bg-yellow-400",
    activeColor: "bg-yellow-400",
    caseStudies: [
      { image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", label: "CASE STUDY", title: "Appointment Setting Success for SaaS Platform Expansion" },
      { image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80", label: "CASE STUDY", title: "Lead Conversion Boost for B2B Service Provider" },
      { image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80", label: "CASE STUDY", title: "Outreach Strategy for International Consulting Firm" },
      { image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80", label: "CASE STUDY", title: "Cold Call Appointment Growth for Insurance Brokerage" }
    ]
  },
  {
    title: "Marketing Campaigns",
    content: [
      {
        title: "Marketing Campaign Services",
        description: "We design, build, and optimize targeted marketing campaigns that get your message in front of the right audience. From email to social ads, we handle the entire campaign lifecycle with constant tracking and improvement. Our creative, data-driven approach fuels lead generation and sales growth."
      },
      {
        title: "Email Campaigns",
        description: "We craft sharp, effective email blasts that engage your audience and drive conversions."
      },
      {
        title: "Social Media Advertising",
        description: "We run paid social ad campaigns across platforms, reaching audiences where they scroll and click."
      },
      {
        title: "Funnel Building & Optimization",
        description: "We design complete sales funnels, track metrics, and refine strategies for maximum lead flow."
      }
    ],
    buttons: <ContactUsButton />,
    hoverColor: "hover:bg-purple-400",
    activeColor: "bg-purple-400",
    caseStudies: [
      { image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", label: "CASE STUDY", title: "Lead Generation Campaign for Tech Startup" },
      { image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80", label: "CASE STUDY", title: "Multichannel Marketing Rollout for National Franchise" },
      { image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", label: "CASE STUDY", title: "Paid Ad Conversion Optimization for SaaS Company" },
      { image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", label: "CASE STUDY", title: "Email Automation Campaign for eCommerce Brand" },
      { image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", label: "CASE STUDY", title: "Social Media Growth Strategy for Global Apparel Brand" }
    ]
  },
  {
    title: "Back-Office Optimization",
    content: [
      {
        title: "Process Optimization",
        description: "We identify and streamline inefficient back-office operations. Through automation and smarter workflows, we free your team to focus on growth and client service."
      },
      {
        title: "Invoice Processing Automation",
        description: "We automate validation and reporting processes, reduce errors, and improve payment cycles for stable cash flow."
      },
      {
        title: "Data Entry & Verification",
        description: "Our team ensures high accuracy and speed in data entry, reducing errors and improving reporting reliability."
      }
    ],
    buttons: <ContactUsButton />,
    hoverColor: "hover:bg-teal-400",
    activeColor: "bg-teal-400",
    caseStudies: [
      { image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", label: "CASE STUDY", title: "Invoice Processing Overhaul for a Global Manufacturer" },
      { image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", label: "CASE STUDY", title: "Data Entry Automation for Healthcare Network" },
      { image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", label: "CASE STUDY", title: "Back-Office Workflow Automation for SaaS Enterprise" }
    ]
  }
];

export default servicesData;