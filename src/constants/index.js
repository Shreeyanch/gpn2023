import {
  Ticksquare,
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "project",
    title: "Services",
  },
  {
    id: "clients",
    title: "Clients",
  },
  {
    id: "contacts",
    title: "Contacts",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: Ticksquare,
    title: "Flexible Prices",
    content: "Get the best deals with flexible prices.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "On Time Delivery",
    content: "We provide on time delivery",
  },
];

export const feedback = [
  {
    id: "feedback-2",
    content: "It has never been so easy and comfortable!",
    name: "Shyam Shrestha",
    // title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Through guidance with proper timing delivery, the best service i have experienced, highly recommended!",
    name: "Kushal Raj Basnet",
    // title: "Founder & Leader",
    img: people03,
  },

  {
    id: "feedback-1",
    content: "Happy with all the services!",
    name: "Giriraj Pandey",
    // title: "Customer",
    img: people01,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Active Clients",
    value: "950+",
  },
  {
    id: "stats-2",
    title: "No of products",
    value: "200+",
  },
  {
    id: "stats-3",
    title: "Completed orders",
    value: "7000+",
  },
];

export const footerLinks = [
  {
    title: "Contact Information",
    links: [
      {
        name: "Phone No. 4102823, 4102772",
        link: "#",
      },
      {
        name: "admin@globalnepalpress.com",
        link: "#",
      },
      {
        name: "globalnepalpress@gmail.com",
        link: "#",
      },
      {
        name: "WhatsApp No. +977 9841292655",
        link: "#",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];
