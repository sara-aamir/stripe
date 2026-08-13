import Coinbase from "@thesvg/react/coinbase";
import Google from "@thesvg/react/google";
import Shopify from "@thesvg/react/shopify";
import Metlife from "@thesvg/react/metlife";
import Figma from "@thesvg/react/figma";
import Vercel from "@thesvg/react/vercel";
import Uber from "@thesvg/react/uber";
import Cursor from "@thesvg/react/cursor";
import Openai from "@thesvg/react/openai";
import Amazon from "@thesvg/react/amazon";
import Nvidia from "@thesvg/react/nvidia";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
export const MARQUEE_LOGO_HEIGHT = 22;

export const logos = [
  {
    name: "Ford",
    url: "https://www.ford.com",
    // Component: Ford,
    viewBox: "0 0 997 300",
    h: 30,
  },
  {
    name: "Coinbase",
    url: "https://www.coinbase.com",
    Component: Coinbase,
    h: 30,
  },
  { name: "Google", url: "https://www.google.com", Component: Google, h: 26 },
  {
    name: "Shopify",
    url: "https://www.shopify.com",
    Component: Shopify,
    h: 30,
  },
  { name: "Mindbody", url: "https://www.mindbodyonline.com", text: true },
  {
    name: "MetLife",
    url: "https://www.metlife.com",
    Component: Metlife,
    h: 24,
    hideName: true,
  },
  { name: "Ramp", url: "https://ramp.com", text: true },
  {
    name: "Marriott",
    url: "https://www.marriott.com",
    //Component: Marriott,
    viewBox: "0 0 668 200",
    h: 26,
    iconHeight: 34,
  },
  { name: "Figma", url: "https://www.figma.com", Component: Figma, h: 30 },
  {
    name: "WooCommerce",
    url: "https://woocommerce.com",
    //Component: Woocommerce,
    viewBox: "0 0 937 200",
    h: 30,
  },
  { name: "Vercel", url: "https://vercel.com", Component: Vercel, h: 24 },
  {
    name: "Uber",
    url: "https://www.uber.com",
    Component: Uber,
    h: 24,
    hideName: true,
    invert: true,
  },
  {
    name: "Anthropic",
    url: "https://www.anthropic.com",
    //Component: Anthropic,
    viewBox: "0 0 3712 700",
    h: 20,
  },
  { name: "Lightspeed", url: "https://www.lightspeedhq.com", text: true },
  { name: "Cursor", url: "https://www.cursor.com", Component: Cursor, h: 32 },
  { name: "OpenAI", url: "https://www.openai.com", Component: Openai, h: 28 },
  {
    name: "Amazon",
    url: "https://www.amazon.com",
    Component: Amazon,
    viewBox: "0 0 603 183",
    h: 34,
    hideName: true,
  },
  { name: "Nvidia", url: "https://www.nvidia.com", Component: Nvidia, h: 26 },
];

export const navLinks = [
  { id: "hero", label: "Home" },
  { id: "globalReach", label: "Global reach" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "scale", label: "Built to scale" },
  { id: "footer", label: "Contact" },
];

export const navCTA = {
  primary: "Get started",
  secondary: "Sign in",
};

export const brand = {
  logoText: "stripe",
};
export const stats = [
  { number: "135+", label: "currencies and payment methods supported" },
  { number: "$1.9T", label: "in payments volume processed in 2025" },
  { number: "99.999%", label: "historical uptime for Stripe services" },
  { number: "200M+", label: "active subscriptions managed on Stripe Billing" },
];
export const caseStudies = [
  {
    id: "hertz",
    name: "Hertz",
    logo: "/herrtz.png",
    logoAlt: "Hertz logo",
    title: "Hertz unifies commerce with Stripe.",
    href: "https://stripe.com/customers/hertz",
    image: "/herrtz.png",
    imageAlt:
      "Aerial view of a city street intersection with cars driving through crosswalks, representing Hertz's global operations with Stripe",
    stats: [
      { label: "countries", value: "160" },
      { label: "locations globally", value: "11K+" },
    ],
    products: "Payments, Terminal, Connect, Radar, and Stripe Sigma",
  },
  {
    id: "urbn",
    name: "URBN",
    logo: "/urbn.png",
    logoAlt: "URBN logo",
    title:
      "URBN consolidates $5 billion in online and in-store revenue onto Stripe.",
    href: "https://stripe.com/customers/urbn",
    image: "/urbn.png",
    imageAlt:
      "URBN retail storefront representing consolidated online and in-store revenue with Stripe",
    stats: [
      { label: "in consolidated revenue", value: "$5B" },
      { label: "brands unified", value: "4" },
    ],
    products: "Payments, Terminal, Connect",
  },
  {
    id: "instacart",
    name: "Instacart",
    logo: "/grocery-bag.png",
    logoAlt: "Instacart logo",
    title: "Instacart powers online grocery delivery with Stripe.",
    href: "https://stripe.com/customers/instacart",
    image: "/grocery-bag.png",
    imageAlt:
      "Grocery delivery in progress, representing Instacart's online grocery platform powered by Stripe",
    stats: [
      { label: "orders processed", value: "600M+" },
      { label: "retail partners", value: "1,500+" },
    ],
    products: "Payments, Connect, Radar",
  },
  {
    id: "lemonde",
    name: "Le Monde",
    logo: "/newspaper.png",
    logoAlt: "Le Monde logo",
    title: "Le Monde improves local and international payments with Stripe.",
    href: "https://stripe.com/customers/le-monde",
    image: "/newspaper.png",
    imageAlt:
      "Le Monde newspaper kiosk on a Paris street, representing local and international payments with Stripe",
    stats: [
      {
        label: "of digital payments powered by Stripe",
        value: "100%",
      },
      { label: "to implement and go live", value: "Less than 3 months" },
    ],
    products: "Payments, Stripe Sigma, and Radar",
  },
];

export const expertFeatures = [
  {
    id: "services",
    icon: DashboardCustomizeOutlinedIcon,
    title: "Professional services.",
    description:
      "Get tailored guidance from Stripe on implementation, complex integrations, or major migrations.",
    linkText: "View services",
    href: "https://stripe.com/professional-services",
  },
  {
    id: "partners",
    icon: PeopleAltOutlinedIcon,
    title: "Stripe-certified experts.",
    description:
      "Work with a Stripe consulting partner that can integrate and deploy Stripe solutions on your behalf.",
    linkText: "View partners",
    href: "https://stripe.com/partners",
  },
  {
    id: "plans",
    icon: SupportAgentOutlinedIcon,
    title: "Support plans.",
    description:
      "Receive ongoing assistance and day-to-day support for technical questions with tiered plans based on your needs.",
    linkText: "View plans",
    href: "http://stripe.com/support-plans",
  },
];

export const startupShowcase = [
  {
    id: "lovable",
    href: "https://stripe.com/customers/lovable",
    linkText: "Read Lovable's story",
    caption: "Lovable grows into a vibe-coding juggernaut with Stripe.",
    image: "/lovable-logo.png",
    imageAlt:
      "Pink and purple heart-shaped bloom illustration on a dark background, representing Lovable's growth with Stripe",
  },
  {
    id: "gamma",
    href: "https://stripe.com/customers/gamma",
    linkText: "Read Gamma's story",
    caption: "Gamma expands to $100M ARR and 70 million users with Stripe.",
    image: "/gamma-logo.png",
    imageAlt:
      "Stylized illustration of a person against a blue backdrop with UI cards, representing Gamma's growth with Stripe",
  },
  {
    id: "runway",
    href: "https://stripe.com/customers/runway",
    linkText: "Read Runway's story",
    caption:
      "Runway protects developer time with no-code solutions from Stripe.",
    image: "/runway.png",
    imageAlt: "Runway logo mark over a flowing water texture background",
  },
  {
    id: "supabase",
    href: "https://stripe.com/customers/supabase",
    linkText: "Read Supabase's story",
    caption:
      "Supabase delivers its backend-as-a-service to 150 countries with Stripe.",
    image: "/supabase.png",
    imageAlt: "Supabase logo on a dark grid background with abstract shapes",
  },
  {
    id: "linear",
    href: "https://stripe.com/customers/linear",
    linkText: "Read Linear's story",
    caption: "Linear partners with Stripe to handle billing and payments.",
    image: "/linear-logo.png",
    imageAlt:
      "Linear logo on a dark purple gradient background with a glowing orb",
  },
  {
    id: "elevenlabs",
    href: "https://stripe.com/customers/elevenlabs",
    linkText: "Watch the video",
    caption: "ElevenLabs grows into a $3B AI audio leader with Stripe.",
    image: "elevenlabs.png",
    imageAlt:
      "ElevenLabs logo on a pink and purple gradient background with a play button",
  },
  {
    id: "browserbase",
    href: "https://stripe.com/customers/browserbase",
    linkText: "Read Browserbase's story",
    caption:
      "Browserbase offers usage-based billing for an AI agent browser with Stripe.",
    image: "/browserbase.webp",
    imageAlt: "Browserbase logo on a dark red background with a 3D cube icon",
  },
  {
    id: "decagon",
    href: "https://stripe.com/customers/decagon",
    linkText: "Read Decagon's story",
    caption:
      "Decagon decreases support costs by 65% with Stripe-integrated agents.",
    image: "/decagon.png",
    imageAlt: "Decagon logo on a blue gradient background with a hexagon icon",
  },
];

export const promoCards = [
  {
    id: "startups-program",
    title: "Stripe Startups program.",
    description:
      "Access financial benefits, a focused community, and expert resources to help you grow your business.",
    linkText: "Apply now",
    href: "https://stripe.com/startups#application",
    gradient: "linear-gradient(120deg, #E9D9FF 0%, #A855F7 55%, #6D28D9 100%)",
  },
  {
    id: "atlas",
    title: "Stripe Atlas.",
    description:
      "Incorporate and get everything you need to fundraise, bank, and accept payments in two business days.",
    linkText: "Start your company",
    href: "https://stripe.com/atlas",
    gradient: "linear-gradient(120deg, #FFE3A3 0%, #FDBA3F 55%, #F97316 100%)",
  },
];

export const platformFeatures = [
  {
    id: "market",
    icon: RocketLaunchOutlinedIcon,
    title: "Get to market faster.",
    description:
      "Launch and scale payments products with lower operational overhead using embedded components and no-code tools.",
    href: "https://stripe.com/guides/best-practices-for-launching-and-scaling-platform-payments",
  },
  {
    id: "revenue",
    icon: TrendingUpOutlinedIcon,
    title: "Grow new lines of revenue.",
    description:
      "Monetize platform transactions—including payments, card interchange, and financing fees.                              ",
    href: "https://stripe.com/guides/introduction-to-monetizing-payments",
  },
  {
    id: "risk",
    icon: ShieldOutlinedIcon,
    title: "Manage platform risk.",
    description:
      "Stay ahead of global regulations with tools for compliance, credit risk, fraud prevention, and account security.",
    href: "https://stripe.com/guides/introduction-to-risk-management",
  },
];

export const testimonials = [
  {
    id: "mindbody",
    logoText: "mindbody",
    avatar: "/p1.png",
    avatarAlt:
      "Headshot of Kurtis Moyer, Lead Product Manager of Payments at Mindbody",
    quote:
      "With Stripe, we have a global technology partner to help our customers—from Canadian yoga studios to British boxing classes—keep growing and evolving in a new wellness world.",
    name: "Kurtis Moyer,",
    title: "Lead Product Manager of Payments, Mindbody",
    href: "https://stripe.com/customers/mindbody",
  },
  {
    id: "jobber",
    logoText: "JOBBER",
    avatar: "/p2.png",
    avatarAlt: "Headshot of Laura Collinson, Director of Fintech at Jobber",
    quote:
      "Without Stripe, it would have taken significant time and engineering effort to offer these resources to our customers. The financial infrastructure Stripe offers is incredibly valuable to Jobber, and we look forward to seeing what comes next.",
    name: "Laura Collinson,",
    title: "Director of Fintech, Jobber",
    href: "https://stripe.com/customers/jobber",
  },
  {
    id: "substack",
    logoText: "substack",
    avatar: "/p3.png",
    avatarAlt: "Headshot of Seth McMillan, Engineering Manager at Substack",
    quote:
      "Stripe makes the subscriptions and payment piece really easy for everyone involved. And that helps us make it easy for writers and other creators to do the work they want to do on Substack and get paid for it.",
    name: "Seth McMillan,",
    title: "Engineering Manager, Substack",
    href: "https://stripe.com/customers/substack",
  },
  {
    id: "lightspeed",
    logoText: "lightspeed",
    avatar: "/p4.png",
    avatarAlt: "Headshot of Dax Dasilva, Founder and CEO of Lightspeed",
    quote:
      "Stripe offers an enterprise-grade infrastructure that puts our customers on the cutting edge of modern payments technology. The combination of Terminal and Connect is a powerful integrated solution.",
    name: "Dax Dasilva,",
    title: "Founder and CEO, Lightspeed",
    href: "https://stripe.com/customers/lightspeed-terminal",
  },
];
export const platformDashboardImage = "/finance-performance-dashboard.png";
