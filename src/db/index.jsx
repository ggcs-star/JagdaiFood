import pharmretail from '../assets/home/Solutions/Pharmretail.jpg'
import pharmconnect from '../assets/home/Solutions/Pharmconnect.jpg'
import pharmanalytics from '../assets/home/Solutions/Pharmanalytics.jpg'
import publichealth from '../assets/home/Solutions/PublicHealth.jpg'


import pharmretaillogo from '../assets/home/Solutions/Pharmretail-logo.jpg'
import pharmconnectlogo from '../assets/home/Solutions/Pharmconnect-logo.png'
import pharmanalyticslogo from '../assets/home/Solutions/Pharmanalytics-logo.png'
import publichealthlogo from '../assets/home/Solutions/PublicHealth-logo.png'

import revenue from '../assets/wrapper/revenue.png'
import website from '../assets/wrapper/personalised mobile apps.png'
import mobile from '../assets/wrapper/mobile.png'
import analytics from '../assets/wrapper/anlaytics and reporting.png'

import { about1, about2, about3, about4 } from '../assets'

import ajanta from '../assets/companies/ajanta.png'
import alembic from '../assets/companies/alembic.png'
import alkem from '../assets/companies/alkem.png'
import cadila from '../assets/companies/cadila.png'
import cipla from '../assets/companies/cipla.png'
import reddy from '../assets/companies/dr-reddy.png'
import emcure from '../assets/companies/emcure.png'
import glenmark from '../assets/companies/glenmark.png'
import intas from '../assets/companies/intas.png'
import ipca from '../assets/companies/ipca.png'
import lupin from '../assets/companies/lupin.png'
import mankind from '../assets/companies/mankind.png'
import micro from '../assets/companies/micro-labs-1.png'
import sun from '../assets/companies/sun-pharma.png'
import torrent from '../assets/companies/torrent.png'
import usv from '../assets/companies/usv.png'
import zydus from '../assets/companies/zydus.png'

import contact from '../assets/contact-us.jpeg';

import mediaimg from '../assets/media.webp'

export const navMenu = [
  { id: 1, label: "About Us", slug: "/about-us" },
  { id: 2, label: "Solutions", submenu: [
      { id: 1, label: "PharmRetail", slug: "/pharmretail" },
      { id: 2, label: "PharmConnect", slug: "/pharmconnect" },
      { id: 3, label: "PharmAnalytics", slug: "/pharmanalytics" },
      { id: 4, label: "Public Health", slug: "/publichealth" },
  ]},
  { id: 3, label: "Careers", slug: "/careers" },
  { id: 4, label: "Media", slug: "/media" },
  { id: 5, label: "Contact Us", slug: "/contact-us" }
];


export const solutions = [
    {
      title: 'Pharmretail',
      image: pharmretail,
      logo: pharmretaillogo,
      description: "India’s leading B2B e-commerce platform empowering Retailers and Distributors with technology for a seamless trading experience.",
      link: "https://pharmarack.org/pharmretail/"
    },
    {
      title: 'Pharmconnect',
      image: pharmconnect,
      logo: pharmconnectlogo,
      description: "A first-of-its-kind multi-principal stockist ordering platform to boost visibility, engagement and efficiency.",
      link: "https://pharmarack.org/pharmretail/"
    },
    {
      title: 'Pharmanalytics',
      image: pharmanalytics,
      logo: pharmanalyticslogo,
      description: "Simplifying complex market analysis to empower decision-making in the Indian Pharmaceutical Market.",
      link: "https://pharmarack.org/pharmretail/"
    },
    {
      title: 'Public Health',
      image: publichealth,
      logo: publichealthlogo,
      description: "Strengthening healthcare systems and partnerships to enhance public health outcomes and preparedness.",
      link: "https://pharmarack.org/pharmretail/"
    },

  ];

export const brandWrapper = [
    { image: website, title: 'Personalised Mobile Apps & Website' },
    { image: mobile, title: 'Mobile Friendly Interface' },
    { image: analytics, title: 'Analytics & Reporting' },
    { image: revenue, title: 'Revenue Generation' },
    // { image: cipla },
    // { image: reddy },
    // { image: emcure },
    // { image: glenmark },
    // { image: intas },
    // { image: ipca },
    // { image: lupin },
    // { image: mankind },
    // { image: micro },
    // { image: sun },
    // { image: torrent },
    // { image: usv },
    // { image: zydus },
];

export const transformation = [
  {
    title: 'Monetize Your Content',
    image: pharmretail,
    logo: pharmretaillogo,
    description: "Create new revenue streams by leveraging your existing network and followers",
    link: "https://pharmarack.org/pharmretail/",
    bgColor: '#014d41',
    textColor: 'white',
  },
  {
    title: 'Maximize Revenue',
    image: pharmconnect,
    logo: pharmconnectlogo,
    description: "Increase income through ads, premium content, & subscription models. (Both: existing and aspiring news creator)",
    link: "https://pharmarack.org/pharmretail/",
    bgColor: '#FF5722',
    textColor: 'white',
  },
  {
    title: 'Revenue Assurance',
    title2: '(25,000 to 50,000)',
    image: pharmanalytics,
    logo: pharmanalyticslogo,
    description: "Based on our experience, if 1,000 users visit your website/app twice a day, we can help you to earn between Rs.25,000 to Rs.50,000 per month through Google AdSense and Meta",
    link: "https://pharmarack.org/pharmretail/",
    bgColor: '#049afb',
    textColor: 'white',
  },
  {
    title: 'Extraordinary Benefit',
    title2: 'Content on Your Own App/Website',
    image: publichealth,
    logo: publichealthlogo,
    description: "IMPORTANT POINT: Hosting your content on your own app or website can earn you up to 20 times more than YouTube or other social media platforms",
    link: "https://pharmarack.org/pharmretail/",
    bgColor: '#ff7e00',
    textColor: 'white',
  },
];

export const whyChoose = [
  {
    title: 'Monetize Your Content',
    image: pharmretail,
    logo: pharmretaillogo,
    description: "Unlock new revenue and growth opportunities in the evolving digital era",
    link: "https://pharmarack.org/pharmretail/",
    bgColor: '#3730a3',
    textColor: 'white',
  },
  {
    title: 'Maximize Revenue',
    image: pharmconnect,
    logo: pharmconnectlogo,
    description: "Tailored, cost-effective digital solutions you can own",
    link: "https://pharmarack.org/pharmretail/",
    bgColor: '#FF5722',
    textColor: 'white',
  },
  {
    title: 'Revenue Assurance',
    title2: '(25,000 to 50,000)',
    image: pharmanalytics,
    logo: pharmanalyticslogo,
    description: "Accessible for both beginners and tech-savvy users",
    link: "https://pharmarack.org/pharmretail/",
    bgColor: '#049afb',
    textColor: 'white',
  },
  {
    title: 'Extraordinary Benefit',
    title2: 'Content on Your Own App/Website',
    image: publichealth,
    logo: publichealthlogo,
    description: "Engage your audience through personalized and interactive features",
    link: "https://pharmarack.org/pharmretail/",
    bgColor: '#ff7e00',
    textColor: 'white',
  },
  {
    title: 'Extraordinary Benefit',
    title2: 'Content on Your Own App/Website',
    image: publichealth,
    logo: publichealthlogo,
    description: "Expert Support and maintenance",
    link: "https://pharmarack.org/pharmretail/",
    bgColor: '#ff7e00',
    textColor: 'white',
  },
  {
    title: 'Extraordinary Benefit',
    title2: 'Content on Your Own App/Website',
    image: publichealth,
    logo: publichealthlogo,
    description: "Increased visibility through advanced SEO",
    link: "https://pharmarack.org/pharmretail/",
    bgColor: '#ff7e00',
    textColor: 'white',
  },
];

export const bestSuitable = {
  title: "Best Suitable For",
  desc: [
      {
          id: 1,
          label: "Data-Driven Precision",
          desc: "Freelance journalist, Event management, Politician, Local news agency, NGO, Corporates, Bloggers, Media house, Communities/Societies",
          image: contact,
      },
      {
          id: 2,
          label: "Customised Solutions",
          desc: "Additionally, we will provide a free Social Media Marketing Campaign on Meta, reaching up to 100,000 people in you desired location, with all our products, including UPOS. This is a limited-time offer, so book your suitable product now",
          image: contact,
      },
      

  ],
};

export const redefine = [
  {
    title: 'Retailers',
    image: pharmretail,
    logo: pharmretaillogo,
    description: "Streamline your ordering process and manage stock with ease.",
    link: "https://pharmarack.org/pharmretail/",
    bgColor: '#014d41',
    textColor: 'white',
  },
  {
    title: 'Distributors',
    image: pharmconnect,
    logo: pharmconnectlogo,
    description: "Expand your network and increase sales by connecting with a wide chemist base.",
    link: "https://pharmarack.org/pharmretail/",
    bgColor: '#FF5722',
    textColor: 'white',
  },
  {
    title: 'Companies',
    title2: '(25,000 to 50,000)',
    image: pharmanalytics,
    logo: pharmanalyticslogo,
    description: "Gain enhanced scheme visibility and direct engagement.",
    link: "https://pharmarack.org/pharmretail/",
    bgColor: '#049afb',
    textColor: 'white',
  },

];

export const enhance = [
  {
    title: 'Boost Loyalty',
    description: "Personalised offers to engage the existing network and acquire new prospects.",
    link: "https://pharmarack.org/pharmretail/",
    bgColor: '#014d41',
    textColor: 'white',
  },
  {
    title: 'Optimised Operations',
    description: "Digitizing processes to boost productivity and save costs.",
    link: "https://pharmarack.org/pharmretail/",
    bgColor: '#FF5722',
    textColor: 'white',
  },
  {
    title: 'Pathbreaking Visibility',
    description: "Real-time visibility into stocks, latest schemes and offers for enhanced engagement and loyalty.",
    link: "https://pharmarack.org/pharmretail/",
    bgColor: '#049afb',
    textColor: 'white',
  },

];

export const diverse = [
  {
    title: 'Pharma Companies',
    image: pharmretail,
    logo: pharmretaillogo,
    description: "Enhances operational efficiency and supply chain visibility.",
    link: "https://pharmarack.org/pharmretail/",
    bgColor: '#014d41',
    textColor: 'white',
  },
  {
    title: 'CFAs',
    image: pharmconnect,
    logo: pharmconnectlogo,
    description: "Streamlines warehouse operations and reduces order to billing process time.",
    link: "https://pharmarack.org/pharmretail/",
    bgColor: '#FF5722',
    textColor: 'white',
  },
  {
    title: 'Distributors',
    title2: '(25,000 to 50,000)',
    image: pharmanalytics,
    logo: pharmanalyticslogo,
    description: "Unified interface for managing multiple pharma companies.",
    link: "https://pharmarack.org/pharmretail/",
    bgColor: '#049afb',
    textColor: 'white',
  },

];

export const convenience = [
  {
    title: 'Swift',
    description: "Effortlessly manage your operations with lightning-fast features that save you time and enhance productivity.",
    link: "https://pharmarack.org/pharmretail/",
    bgColor: '#014d41',
    textColor: 'white',
  },
  {
    title: 'Sustainable',
    description: "Empower your business with smart tools that ensure efficient stock management and maximize profitability.",
    link: "https://pharmarack.org/pharmretail/",
    bgColor: '#FF5722',
    textColor: 'white',
  },
  {
    title: 'Secure',
    description: "Safeguard your operations with enhanced ordering precision and reliable performance, ensuring peace of mind in every transaction.",
    link: "https://pharmarack.org/pharmretail/",
    bgColor: '#049afb',
    textColor: 'white',
  },

];

export const optimise = [
  {
    title: 'PharmaTrac',
    image: pharmretail,
    logo: pharmretaillogo,
    description: "Offers granular tracking of competition and market performance at the National level and across 22 regions. Trusted by NPPA and the pharma industry for pricing decisions.",
    link: "https://pharmarack.org/pharmretail/",
    bgColor: '#014d41',
    textColor: 'white',
  },
  {
    title: 'Market Pulse',
    image: pharmconnect,
    logo: pharmconnectlogo,
    description: "Unlock granular insights with India's first Secondary Sales Audit, covering 60+ markets.",
    link: "https://pharmarack.org/pharmretail/",
    bgColor: '#FF5722',
    textColor: 'white',
  },
  {
    title: 'TruSales',
    title2: '(25,000 to 50,000)',
    image: pharmanalytics,
    logo: pharmanalyticslogo,
    description: "TruSales automates secondary stock and sales data collection and delivery, providing timely insights and seamless integration for business leaders.",
    link: "https://pharmarack.org/pharmretail/",
    bgColor: '#049afb',
    textColor: 'white',
  },

];

export const media = [
  {
    title: 'Indian pharmaceutical industry expected to reach $55 billion by 2030: Report',
    image: mediaimg,
    logo: pharmretaillogo,
    description: "India’s leading B2B e-commerce platform empowering Retailers and Distributors with technology for a seamless trading experience.",
    link: "https://pharmarack.org/pharmretail/",
    date: '01 January 2025'
  },
  {
    title: 'Pharmarack Technologies, IPA Launch New Report on Indian Pharma Supply Chain Dynamics',
    image: mediaimg,
    logo: pharmconnectlogo,
    description: "A first-of-its-kind multi-principal stockist ordering platform to boost visibility, engagement and efficiency.",
    link: "https://pharmarack.org/pharmretail/",
    date: '01 January 2025'
  },
  {
    title: 'Pharmarack and IPA release report on “Changing Dynamics of Indian Pharma Supply Chain”',
    image: mediaimg,
    logo: pharmanalyticslogo,
    description: "Simplifying complex market analysis to empower decision-making in the Indian Pharmaceutical Market.",
    link: "https://pharmarack.org/pharmretail/",
    date: '01 January 2025'
  },
  {
    title: 'Pharmarack and IPA jointly launch report on evolving Indian pharma supply chain dynamics',
    image: mediaimg,
    logo: publichealthlogo,
    description: "Strengthening healthcare systems and partnerships to enhance public health outcomes and preparedness.",
    link: "https://pharmarack.org/pharmretail/",
    date: '01 January 2025'
  },
  {
    title: 'Pharmarack Technologies and IPA release report on Indian pharma supply chain dynamics',
    image: mediaimg,
    logo: publichealthlogo,
    description: "Strengthening healthcare systems and partnerships to enhance public health outcomes and preparedness.",
    link: "https://pharmarack.org/pharmretail/",
    date: '01 January 2025'
  },
  {
    title: 'Pharmarack and Indian Pharmaceutical Alliance unveil report on Changing Dynamics of Indian Pharma Supply Chain',
    image: mediaimg,
    logo: publichealthlogo,
    description: "Strengthening healthcare systems and partnerships to enhance public health outcomes and preparedness.",
    link: "https://pharmarack.org/pharmretail/",
    date: '01 January 2025'
  },
  {
    title: 'How pharmarack is Changing Dynamics of Indian Pharma Supply Chain',
    image: mediaimg,
    logo: publichealthlogo,
    description: "Strengthening healthcare systems and partnerships to enhance public health outcomes and preparedness.",
    link: "https://pharmarack.org/pharmretail/",
    date: '01 January 2025'
  },
  {
    title: 'Pharmarack and Indian Pharmaceutical Alliance (IPA) launch report',
    image: mediaimg,
    logo: publichealthlogo,
    description: "Strengthening healthcare systems and partnerships to enhance public health outcomes and preparedness.",
    link: "https://pharmarack.org/pharmretail/",
    date: '01 January 2025'
  },
  {
    title: 'The Biggest Indian Pharma Deal of the Decade',
    image: mediaimg,
    logo: publichealthlogo,
    description: "Strengthening healthcare systems and partnerships to enhance public health outcomes and preparedness.",
    link: "https://pharmarack.org/pharmretail/",
    date: '01 January 2025'
  },
  {
    title: 'Pharma industry seeks relief from price cap rule for cheap drugs',
    image: mediaimg,
    logo: publichealthlogo,
    description: "Strengthening healthcare systems and partnerships to enhance public health outcomes and preparedness.",
    link: "https://pharmarack.org/pharmretail/",
    date: '01 January 2025'
  },
  {
    title: 'Monsoon brings fever season to India; Kerala, Karnataka see Dengue spike',
    image: mediaimg,
    logo: publichealthlogo,
    description: "Strengthening healthcare systems and partnerships to enhance public health outcomes and preparedness.",
    link: "https://pharmarack.org/pharmretail/",
    date: '01 January 2025'
  },
  {
    title: 'June drugs sales near Covid-19 levels',
    image: mediaimg,
    logo: publichealthlogo,
    description: "Strengthening healthcare systems and partnerships to enhance public health outcomes and preparedness.",
    link: "https://pharmarack.org/pharmretail/",
    date: '01 January 2025'
  },
  {
    title: 'Public Health',
    image: mediaimg,
    logo: publichealthlogo,
    description: "Strengthening healthcare systems and partnerships to enhance public health outcomes and preparedness.",
    link: "https://pharmarack.org/pharmretail/",
    date: '01 January 2025'
  },
  {
    title: 'Public Health',
    image: mediaimg,
    logo: publichealthlogo,
    description: "Strengthening healthcare systems and partnerships to enhance public health outcomes and preparedness.",
    link: "https://pharmarack.org/pharmretail/",
    date: '01 January 2025'
  },

  {
    title: 'Public Health',
    image: mediaimg,
    logo: publichealthlogo,
    description: "Strengthening healthcare systems and partnerships to enhance public health outcomes and preparedness.",
    link: "https://pharmarack.org/pharmretail/",
    date: '01 January 2025'
  },


];

export const values = [
  {
    title: 'Innovation',
    image: about1,
    logo: pharmretaillogo,
    description: "We are constantly evolving, integrating the latest technological advancements to provide the best solutions.",
    link: "https://pharmarack.org/pharmretail/",
    bgColor: '#014d41',
    textColor: 'white',
  },
  {
    title: 'Customer-Centricity',
    image: about2,
    logo: pharmconnectlogo,
    description: "We listen to our customer’s needs and continuously improve our processes and platform to meet and exceed their expectations.",
    link: "https://pharmarack.org/pharmretail/",
    bgColor: '#FF5722',
    textColor: 'white',
  },
  {
    title: 'Integrity',
    title2: '(25,000 to 50,000)',
    image: about3,
    logo: pharmanalyticslogo,
    description: "Integrity is at the heart of everything we do, ensuring trust and reliability in every solution we provide.",
    link: "https://pharmarack.org/pharmretail/",
    bgColor: '#049afb',
    textColor: 'white',
  },
  {
    title: 'Security',
    title2: 'Content on Your Own App/Website',
    image: about4,
    logo: publichealthlogo,
    description: "At Pharmarack, we prioritize the highest standards of security to safeguard sensitive pharmaceutical data, utilizing advanced encryption and robust protection measures.",
    link: "https://pharmarack.org/pharmretail/",
    bgColor: '#ff7e00',
    textColor: 'white',
  },
];









