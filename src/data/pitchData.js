import {
  Activity,
  BadgeIndianRupee,
  Bot,
  BrainCircuit,
  Camera,
  ChartNoAxesCombined,
  Check,
  CircleDollarSign,
  Cloud,
  Code2,
  DatabaseZap,
  Gem,
  Globe,
  Handshake,
  Heart,
  Instagram,
  Layers3,
  MessageCircle,
  Network,
  Palette,
  Radar,
  Rocket,
  ScanFace,
  ServerCog,
  Share2,
  ShoppingBag,
  Sparkles,
  Store,
  Users,
  WandSparkles,
  Zap,
} from "lucide-react";

export const metrics = [
  { value: "200K", label: "Target Users" },
  { value: "₹1.83 Cr", label: "Revenue Goal" },
  { value: "AI + AR", label: "Powered" },
  { value: "5%", label: "Conversion Goal" },
];

export const bmcSections = [
  {
    id: "customers",
    eyebrow: "01 / The Issue",
    title: "Can't visualize before buying.",
    line: "Online shoppers struggle to see how clothes and styles look on them — leading to 3x higher return rates.",
    icons: [Users, ShoppingBag, Camera],
    accent: "from-brand-soft via-white to-[#F6C5CC]",
    psychology: "This is a real modern shopping bottleneck.",
    items: [
      "Visual uncertainty",
      "Size mismatch anxiety",
      "Expensive return loops",
      "Slow styling decisions",
    ],
    personas: [
      { name: "Gen-Z Shopper", note: "Wants fast looks for social moments", stat: "82%" },
      { name: "Young Professional", note: "Needs polished outfits without trial fatigue", stat: "3x" },
      { name: "Creator", note: "Shares looks and drives peer influence", stat: "24/7" },
    ],
  },
  {
    id: "value",
    eyebrow: "02 / The Solution",
    title: "Your Virtual Stylist.",
    line: "A digital mirror that turns hesitation into confidence with real-time AR try-ons.",
    icons: [ScanFace, WandSparkles, Palette],
    accent: "from-brand via-[#FFD9DE] to-white",
    psychology: "AR Try-Ons + AI Styling = Pure Shopping Confidence.",
    items: ["AR Try-Ons", "AI Styling Assistant", "Seamless Shopping", "Personalized Tips"],
    comparison: ["Guessing fit", "Opening 18 tabs", "Returning 3 sizes"],
  },
  {
    id: "segments",
    eyebrow: "03 / Customer Segments",
    title: "B2B Scale. B2C Impact.",
    line: "We empower apparel and cosmetic brands to reach their ultimate audience — the digital-native Gen Z and Millennial shoppers.",
    icons: [Store, Users, Network],
    accent: "from-[#F5E7C8] via-white to-[#FFD9DE]",
    psychology: "Capturing the entire fashion value chain.",
    items: ["B2B Apparel & Beauty", "Retail Enterprises", "Gen Z & Millennials", "The Creator Economy"],
    personas: [
      { name: "B2B Fashion Brands", note: "Seeking white-label VTO tech and deep user analytics", stat: "Primary" },
      { name: "Cosmetic Giants", note: "Virtual makeup and hairstyle try-ons for higher conversion", stat: "Primary" },
      { name: "Gen Z & Millennials", note: "Digital-native shoppers aged 16-35 who crave experimentation", stat: "Ultimate" },
      { name: "Creator Economy", note: "Influencers driving peer-to-peer fashion discovery", stat: "Ultimate" },
    ],
  },
  {
    id: "activities",
    eyebrow: "04 / Value Proposition",
    title: "Technological Edge.",
    line: "From live camera AR overlays to accurate sizing engines that predict the perfect fit.",
    icons: [Radar, Layers3, Zap],
    accent: "from-[#F5E7C8] via-brand-soft to-white",
    psychology: "The technical moat is deep.",
    items: ["AR Integration", "AI Design Suggestions", "Sizing Engine", "Brand Partnerships"],
  },
  {
    id: "marketing",
    eyebrow: "05 / Marketing Strategy",
    title: "The Enterprise Engine.",
    line: "We scale through strategic B2B partnerships and direct enterprise sales to the world's leading fashion and beauty conglomerates.",
    icons: [Layers3, Network, ServerCog],
    accent: "from-brand-soft via-[#FFECEF] to-white",
    psychology: "Building long-term enterprise value through recurring licensing.",
    items: ["Enterprise Sales", "Platform Integrations", "Co-Branded Marketing", "White-Label Licensing"],
  },
  {
    id: "revenue",
    eyebrow: "06 / Growth & Monetization",
    title: "₹1.83 Cr Revenue Target.",
    line: "Subscriptions and affiliate commissions scale with our user base.",
    icons: [CircleDollarSign, BadgeIndianRupee, ChartNoAxesCombined],
    accent: "from-success via-[#DDEFE5] to-brand-soft",
    psychology: "The path to profitability is clear.",
    items: ["Subscriptions", "Affiliates", "In-App Purchases", "Ad Revenue", "Virtual Events", "Data Insights"],
  },
  {
    id: "resources",
    eyebrow: "07 / Key Resources",
    title: "The SaaS Infrastructure.",
    line: "Our core value is delivered through high-performance VTO SDKs and APIs that integrate seamlessly into any brand's digital ecosystem.",
    icons: [ServerCog, DatabaseZap, Users],
    accent: "from-brand-soft via-white to-[#F5E7C8]",
    psychology: "Built for enterprise-grade scalability and reliability.",
    items: ["Technology", "Human Capital", "Intellectual", "Financial"],
    resourceCategories: [
      { 
        title: "Technology", 
        icon: "📱", 
        points: ["VTO SDK/API Engine", "Cloud Infrastructure", "White-label Integration Tools"] 
      },
      { 
        title: "Human Capital", 
        icon: "👩‍💻", 
        points: ["Integration Solutions Engineers", "AR/AI Research Team", "Success Managers"] 
      },
      { 
        title: "Intellectual", 
        icon: "🧠", 
        points: ["Proprietary Fitting Algorithms", "User Behavior Datasets", "API Architecture"] 
      },
      { 
        title: "Financial", 
        icon: "💵", 
        points: ["SaaS Recurring Revenue", "Enterprise Licensing Fees", "Growth Capital"] 
      }
    ]
  },
  {
    id: "key-activities",
    eyebrow: "08 / Key Activities",
    title: "The Execution Roadmap.",
    line: "A multi-disciplinary approach to engineering, growth, and brand acquisition.",
    icons: [Activity, Code2, Rocket],
    accent: "from-[#E6F3FF] via-white to-brand-soft",
    psychology: "Our operational velocity is our greatest advantage.",
    items: ["AR/AI Dev", "Platform Growth", "Brand Onboarding", "Community", "Scale"],
    activities: [
      {
        title: "AR/AI Development",
        description: "Continuously improve the virtual try-on engine, sizing accuracy, and skin tone matching algorithms."
      },
      {
        title: "Platform & App Dev",
        description: "Build, maintain, and iterate on iOS, Android, and web platforms with seamless UX."
      },
      {
        title: "Brand Partnerships",
        description: "Onboard fashion & beauty brands for affiliate integration, sponsored content, and white-label deals."
      },
      {
        title: "Content & Community",
        description: "Produce trend reports, style guides, and foster a community of fashion-forward users."
      },
      {
        title: "Marketing & Growth",
        description: "Run influencer campaigns, social ads, referral programs to achieve 5% freemium conversion."
      }
    ]
  },
  {
    id: "partnerships",
    eyebrow: "09 / Key Partnerships",
    title: "Strategic Ecosystem.",
    line: "Collaborating with global leaders across retail, technology, and the creator economy.",
    icons: [Handshake, Globe, ShoppingBag],
    accent: "from-brand-soft via-white to-brand-soft",
    psychology: "Partnerships are our leverage for global scale.",
    items: ["Fashion Brands", "Beauty Brands", "Tech Providers", "Social Platforms", "E-commerce", "Creators"],
    partners: [
      {
        title: "Fashion Brands",
        icon: "👗",
        description: "Zara, Myntra, H&M, Nykaa Fashion — product catalog integration & affiliate revenue"
      },
      {
        title: "Beauty Brands",
        icon: "💄",
        description: "Lakme, MAC, L'Oréal — virtual makeup try-on, skin tone matching, sponsored content"
      },
      {
        title: "Tech Providers",
        icon: "🤖",
        description: "Google (ARCore), Apple (ARKit), AWS/GCP — core AR/AI infrastructure"
      },
      {
        title: "Social Platforms",
        icon: "📱",
        description: "Instagram, TikTok — marketing channels, social sharing integrations, creator partnerships"
      },
      {
        title: "E-commerce Partners",
        icon: "🚚",
        description: "Amazon, Flipkart, Meesho — shopping redirect links, affiliate commission integration"
      },
      {
        title: "Stylists & Creators",
        icon: "🎓",
        description: "Fashion influencers, certified stylists for premium consultations and content creation"
      }
    ]
  },
];

export const revenueStreams = [
  { label: "Subscriptions", value: 10000000, color: "#B23A48" },
  { label: "Affiliate Marketing", value: 4150000, color: "#D94F5F" },
  { label: "In-App Purchases", value: 2500000, color: "#F28C98" },
  { label: "Advertising", value: 835000, color: "#FFD9DE" },
  { label: "Virtual Events", value: 415000, color: "#F0E0E3" },
  { label: "Data Insights", value: 415000, color: "#E9D8DC" },
];

export const growthProjection = [
  { month: "M1", users: 5000, premium: 100 },
  { month: "M3", users: 25000, premium: 800 },
  { month: "M6", users: 80000, premium: 3500 },
  { month: "M9", users: 140000, premium: 6800 },
  { month: "M12", users: 200000, premium: 10000 },
];

export const timeline = [
  { title: "AR Integration", description: "High-precision augmented reality overlays that react to body movement in real-time." },
  { title: "AI Design Suggestions", description: "Advanced generative AI that proposes outfit combinations based on current fashion trends." },
  { title: "Sizing Engine", description: "Computer vision algorithms that predict the perfect fit by measuring body proportions accurately." },
  { title: "Brand Partnerships", description: "Seamless API connections with major fashion labels for real-time inventory and direct-to-buy links." },
  { title: "User Personalization", description: "Deep learning profiles that evolve with user style preferences and search history." },
];

export const competitors = [
  {
    feature: "Virtual Try-On",
    grwm: true,
    ecommerce: "Rare",
    stores: true,
  },
  {
    feature: "AI Personalization",
    grwm: true,
    ecommerce: false,
    stores: "Limited",
  },
  {
    feature: "Sizing Predictions",
    grwm: true,
    ecommerce: false,
    stores: true,
  },
  {
    feature: "Social Sharing",
    grwm: true,
    ecommerce: "Limited",
    stores: false,
  },
  {
    feature: "24/7 Availability",
    grwm: true,
    ecommerce: true,
    stores: false,
  },
];

export const pricing = [
  {
    name: "Free",
    price: "₹0",
    detail: "Basic Style Discovery",
    features: ["Basic AR try-ons", "AI chatbot advisor", "Community access", "Limited accessories"],
  },
  {
    name: "Mid-Tier",
    price: "₹830",
    detail: "/month",
    features: ["Unlimited try-ons", "Enhanced AI", "Hairstyle matching", "Sizing predictions"],
  },
  {
    name: "Premium",
    price: "₹2,080",
    detail: "Best Value",
    features: ["Everything in Mid-Tier", "1:1 styling consults", "Custom AI design", "Priority brand access"],
    featured: true,
  },
];

