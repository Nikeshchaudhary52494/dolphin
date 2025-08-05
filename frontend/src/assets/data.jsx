import {
  UploadCloud,
  ShieldCheck,
  Share2,
  CreditCard,
  Folder,
  History,
} from "lucide-react";

export const features = [
  {
    icon: <UploadCloud className="w-5 h-5" />,
    title: "Easy File Upload",
    description: "Drag and drop or click to upload files in seconds",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Secure Cloud",
    description: "Military-grade encryption for your files",
  },
  {
    icon: <Share2 className="w-5 h-5" />,
    title: "Simple Sharing",
    description: "Share files with links or direct collaboration",
  },
  {
    icon: <CreditCard className="w-5 h-5" />,
    title: "Flexible Credit",
    description: "Pay-as-you-go or subscription plans",
  },
  {
    icon: <Folder className="w-5 h-5" />,
    title: "File Management",
    description: "Organize with folders, tags, and search",
  },
  {
    icon: <History className="w-5 h-5" />,
    title: "Activity Logs",
    description: "Track all file activities with detailed logs",
  },
];

export const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: [
      "5 file uploads",
      "Basic file sharing",
      "7-day file retention",
      "Email support",
    ],
    popular: false,
    border: "border-gray-200",
    buttonStyle:
      "w-full py-3 px-6 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors",
    label: "",
  },
  {
    name: "Premium",
    price: "$500",
    description: "For individuals with larger needs",
    features: [
      "500 file uploads",
      "Advanced file sharing",
      "30-day file retention",
      "Priority email support",
      "File analytics",
    ],
    popular: true,
    border: "border-blue-500 shadow-lg",
    buttonStyle:
      "w-full py-3 px-6 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors",
    label: "Popular",
  },
  {
    name: "Ultimate",
    price: "$2500",
    description: "For teams and businesses",
    features: [
      "5000 file uploads",
      "Team sharing capabilities",
      "Unlimited file retention",
      "24/7 priority support",
      "Advanced analytics",
      "API access",
    ],
    popular: false,
    border: "border-gray-200",
    buttonStyle:
      "w-full py-3 px-6 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors",
    label: "",
  },
];

export const testimonials = [
  {
    quote:
      "Having solar power has made us more self-reliant. With the battery backup, we never worry about power outages.",
    name: "Rachel Thuchel",
    role: "Homeowner",
  },
  {
    quote:
      "Our electricity bill dropped by 75% in the first month. The installation was smooth and the team was very professional.",
    name: "Michael Carter",
    role: "Business Owner",
  },
  {
    quote:
      "We feel good knowing we're helping the environment and saving money at the same time. Highly recommended!",
    name: "Lena Gomez",
    role: "Eco Enthusiast",
  },
  {
    quote:
      "Great support and the panels look sleek. It's a smart long-term investment that paid off quickly.",
    name: "David Kim",
    role: "Architect",
  },
];
