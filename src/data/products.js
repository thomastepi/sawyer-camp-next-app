export const productCategories = [
  "All",
  "Oil Palm",
  "Cocoa",
  "Coffee",
  "Citrus",
  "Grains & Seeds",
  "Roots & Tubers",
];

export const products = [
  {
    id: "cpo",
    slug: "crude-palm-oil",
    name: "Crude Palm Oil",
    category: "Oil Palm",
    salesChannels: ["Wholesale"],
    description:
      "Unrefined, high-quality crude palm oil from our Banga-Bakundu groves, a staple in most African cuisines.",
    packaging: "25L and 50L jerrycans; bulk drums",
    availability: "Year-round; peak Jan-May",
    seasonality: "Peak harvest Jan-May",
    priceRange: "Price on request",
    pricingNote:
      "Pricing moves with destination; ask for a spot or forward quote.",
    moq: "500L",
    origin: "Banga-Bakundu, Cameroon",
    lastUpdated: "Dec 2025",
    imageUrl:
      "https://ik.imagekit.io/thormars/Sawyer-Camp/palm-oil.jpg?updatedAt=1718742708430",
    highlights: [
      "Zero-deforestation expansion on degraded land",
      "Consistent color and Free Fatty Acid (FFA) targets",
      "Packaging tailored for local distribution",
    ],
    useCases: ["Local Cuisines(Achu soup, koki beans)", "Bulk retail"],
    harvestCalendar: [
      {
        window: "Jan – May",
        detail: "Peak fresh fruit bunch harvest; higher oil yields",
      },
      {
        window: "Jun – Aug",
        detail: "Moderate harvest; steady kernel recovery",
      },
      {
        window: "Sep – Dec",
        detail: "Light flush; maintenance rounds and pruning",
      },
    ],
    processingMethods: [
      "Ripe bunch reception and steaming within 24 hours of harvest to protect FFA (Free Fatty Acid) levels.",
      "Mechanical pressing with calibrated screw press; decanting and clarification for bright color.",
      "Final polishing, moisture check, and packaging into food-grade jerrycans or export drums (round jars).",
    ],
    qualitySpecs: [
      { label: "FFA", value: "<= 3%" },
      { label: "Moisture/Impurities", value: "<= 0.25%" },
      { label: "Color", value: "Deep red-orange, clear at 50°C" },
      { label: "Odor", value: "Clean, no smoke taint" },
    ],
    storageTransport: {
      storage: [
        "Store sealed jerrycans/drums upright, shaded from direct sunlight.",
        "Rotate stocks to avoid temperature swings and maintain color and aroma.",
      ],
      transport: [
        "Food-grade drums strapped to trucks with corner protection.",
        "Inspected seals before loading.",
      ],
    },
    photos: {
      field: [
        {
          url: "https://ik.imagekit.io/thormars/Sawyer-Camp/cones-crop.jpg",
          alt: "Oil palm block under morning light",
        },
      ],
      processing: [
        {
          url: "https://ik.imagekit.io/thormars/Sawyer-Camp/group.jpg",
          alt: "Palm oil flowing from press into drum",
        },
      ],
    },
    farmer: {
      name: "Emeline Fri Tebo",
      role: "Lead Palm Grower",
      years: "5 years cultivating oil palm",
      quote:
        "We cut bunches at first blush and press the same day. That is how we keep our oil bright and clean.",
      focus:
        "Smallholder training on pruning cycles and careful bunch collection.",
      photo: "https://ik.imagekit.io/thormars/Sawyer-Camp/fri-tebo-cropped.jpg",
    },
    testimonials: [
      {
        company: "Douala Soapworks",
        role: "Procurement Lead",
        quote:
          "Color and FFA consistency have been steady across shipments. They share loading photos and test results before each dispatch.",
        useCase: "Food-grade palm oil for soap production",
      },
      {
        company: "AgroTrade West",
        role: "Logistics Manager",
        quote:
          "They palletize drums, add desiccants, and label lots clearly. It makes port clearance and factory intake smoother.",
        useCase: "Bulk drums for regional distribution",
      },
    ],
  },
  {
    id: "coffee-beans",
    slug: "coffee-beans",
    name: "Coffee Beans (Arabica/Robusta)",
    category: "Coffee",
    salesChannels: ["Wholesale"],
    description:
      "Carefully dried and bagged Arabica and Robusta coffee beans sourced from our network of smallholder farmers.",
    packaging: "60 kg jute bags",
    availability: "Seasonal; contact for current lots",
    seasonality: "Harvest windows vary by lot; ask for current availability.",
    priceRange: "Price on request",
    pricingNote: "Pricing depends on destination.",
    moq: "120 kg (2 bags)",
    origin: "Banga Bakundu, Cameroon",
    lastUpdated: "Dec 2025",
    imageUrl:
      "https://ik.imagekit.io/thormars/Sawyer-Camp/dried-coffee-beans.jpg",
    highlights: [
      "Smallholder network sourcing",
      "Arabica and Robusta lots",
      "Jute bagging for export",
    ],
    useCases: ["Roasting", "Blends", "Instant coffee"],
    harvestCalendar: [
      {
        window: "Oct – Jan",
        detail: "Arabica peak pickings in higher elevations",
      },
      { window: "Nov – Feb", detail: "Robusta harvest with staggered rounds" },
      { window: "Mar – Apr", detail: "Selective late pick for microlots" },
    ],
    processingMethods: [
      "Selective hand-picking to remove underripes.",
      "Washed and natural process lots are available, sun-dried using traditional patios and raised beds.",
      "Moisture testing to 10–12% before resting and bagging.",
    ],
    qualitySpecs: [
      { label: "Moisture", value: "10–12%" },
      {
        label: "Screen Size",
        value: "Screen 15+ typical; microlots screened separately",
      },
      {
        label: "Defects",
        value: "Within SCAA Grade 2-3 targets for export lots",
      },
      {
        label: "Cupping",
        value: "Balanced body; cocoa and citrus notes by lot",
      },
    ],
    storageTransport: {
      storage: [
        "Rested in cool, dry stores in jute bags.",
        "Regular moisture checks before shipping to maintain cup stability.",
      ],
      transport: [
        "Jute bags with strap and corner protection.",
        "Container desiccants and inspection photos shared pre-shipment.",
      ],
    },
    photos: {
      field: [
        {
          url: "https://ik.imagekit.io/thormars/Sawyer-Camp/dried-coffee-beans.jpg",
          alt: "Coffee cherries on branch",
        },
      ],
      processing: [
        {
          url: "https://ik.imagekit.io/thormars/Sawyer-Camp/coffee-seed.jpg",
          alt: "Coffee drying beds with parchment coffee",
        },
      ],
    },
    farmer: {
      name: "Titus Mbah",
      role: "Coffee Aggregation & Quality",
      years: "12 years cupping and farmer support",
      quote:
        "We separate lots by hill and by day. It keeps flavor notes traceable and reliable for our buyers.",
      focus:
        "Farmer training on selective picking and clean washing to reduce defects.",
      photo: "https://ik.imagekit.io/thormars/Sawyer-Camp/ni-titus-2.jpg",
    },
    testimonials: [
      {
        company: "RoastLab Collective",
        role: "Lead Roaster",
        quote:
          "Clean washed lots with cocoa and citrus notes that cup consistently. Great for our house blend base.",
        useCase: "House blend espresso",
      },
      {
        company: "Nordic Brew Imports",
        role: "Sourcing Lead",
        quote:
          "They share moisture and screen size upfront, and separate lots by hill—which keeps profiles predictable.",
        useCase: "Regional single-origin program",
      },
    ],
  },
  {
    id: "cocoa-beans",
    slug: "cocoa-beans",
    name: "Fermented Cocoa Beans",
    category: "Cocoa",
    salesChannels: ["Wholesale"],
    description:
      "High-quality fermented and sun-dried cocoa beans sourced from Banga-Bakundu, known for deep chocolate profiles and rich butter content.",
    packaging: "64 kg jute bags",
    availability: "Main crop and mid-crop cycles; contact for current lots",
    seasonality:
      "Primary harvest begins in October; mid-crop available from May.",
    priceRange: "Price on request",
    pricingNote: "Pricing based on current ICCO market rates and destination.",
    moq: "128 kg (2 bags)",
    origin: "Banga Bakundu, Cameroon",
    lastUpdated: "Dec 2025",
    imageUrl:
      "https://ik.imagekit.io/thormars/Sawyer-Camp/dried-cocoa-seeds.jpg",
    highlights: [
      "Traditional fermentation for flavor depth",
      "High cocoa butter content",
      "Grade 1 & Grade 2 export quality",
    ],
    useCases: [
      "Bean-to-bar chocolate",
      "Cocoa butter extraction",
      "Confectionery",
    ],
    harvestCalendar: [
      {
        window: "Oct – Jan",
        detail: "Main crop harvest; peak volume and larger bean sizes",
      },
      {
        window: "May – Jul",
        detail: "Mid-crop harvest; ideal for secondary processing",
      },
      {
        window: "Aug – Sep",
        detail: "Pruning and farm maintenance for main crop",
      },
    ],
    processingMethods: [
      "Selective hand-picking of ripe yellow pods to ensure high sugar content.",
      "6-day fermentation in tiered wooden boxes to develop chocolate precursors.",
      "Slow sun-drying on wooden patios and raised beds to achieve 7% moisture.",
    ],
    qualitySpecs: [
      { label: "Moisture", value: "6–8%" },
      {
        label: "Bean Count",
        value: "95–105 beans per 100g (Main Crop typical)",
      },
      {
        label: "Fermentation",
        value: "Minimum 75% fully fermented (cut-test standard)",
      },
      {
        label: "Flavor Profile",
        value: "Deep earthy cocoa with mild nutty and red fruit undertones",
      },
    ],
    storageTransport: {
      storage: [
        "Stored in food-grade jute bags in well-ventilated, humidity-controlled warehouses.",
        "Strict separation from strong-smelling goods to prevent flavor contamination.",
      ],
      transport: [
        "Traditional jute bagging for breathability.",
        "Container ventilation checks before loading.",
      ],
    },
    photos: {
      field: [
        {
          url: "https://ik.imagekit.io/thormars/Sawyer-Camp/IMG-20240623-WA0009.jpg",
          alt: "Farmer spraying cocoa trees with organic fungicide",
        },
      ],
      processing: [
        {
          url: "https://ik.imagekit.io/thormars/Sawyer-Camp/cocoa-tree.jpg",
          alt: "cocoa pods on tree",
        },
      ],
    },
    farmer: {
      name: "Lanita T",
      role: "Post-Harvest Specialist",
      years: "5 years in fermentation and drying management",
      quote:
        "The secret is in the fermentation box. If you don't turn the beans at the right time, you lose the chocolate soul.",
      focus:
        "Standardizing fermentation times to ensure consistency.",
      photo:
        "https://ik.imagekit.io/thormars/Sawyer-Camp/teke.jpg",
    },
    testimonials: [
      {
        company: "Artisan Choco-Works",
        role: "Head Chocolatier",
        quote:
          "The low acidity and high butter content of these Banga-Bakundu beans make them perfect for our 70% dark bars.",
        useCase: "Single-origin dark chocolate",
      },
      {
        company: "Global Cocoa Traders",
        role: "Quality Inspector",
        quote:
          "Consistently low slatey bean counts. Their sun-drying process on raised beds keeps the beans clean and free of debris.",
        useCase: "Bulk export for European processing",
      },
    ],
  },
  {
    id: "oranges",
    slug: "oranges",
    name: "Oranges",
    category: "Citrus",
    salesChannels: ["Wholesale", "Retail"],
    description:
      "Fresh, juicy oranges harvested to order for export, juicing, and local retail partners.",
    packaging: "Crates (10-18 kg)",
    availability: "Seasonal; peak Aug-Oct",
    seasonality: "Peak Aug-Oct",
    priceRange: "Tiered by volume",
    pricingNote:
      "Tiered by crate volume; preorder for peak season to secure supply.",
    moq: "10 crates (wholesale) or mixed retail packs",
    origin: "Banga Bakundu, Cameroon",
    lastUpdated: "Dec 2025",
    imageUrl:
      "https://ik.imagekit.io/thormars/Sawyer-Camp/oranges-ready-to-sell.jpg",
    highlights: [
      "Picked-to-order freshness",
      "Crate sizing for retail or juicing",
      "Preorder for peak season volumes",
    ],
    useCases: ["Fresh retail", "Juice production", "Hospitality"],
    harvestCalendar: [
      { window: "Aug – Oct", detail: "Peak sweetness and juice yield" },
      {
        window: "Nov – Dec",
        detail: "Late flush; great for juicing contracts",
      },
    ],
    processingMethods: [
      "Hand-picked with clippers to protect stems and reduce rind damage.",
      "Field sorting and shade pre-cooling before crating.",
      "Direct-harvest experience: Clients may visit the farm to self-harvest from designated sections of the orange plantation.",
    ],
    qualitySpecs: [
      { label: "Brix", value: "11–13° target at peak" },
      { label: "Size", value: "Packed by count per crate to buyer spec" },
      {
        label: "Appearance",
        value: "Firm rind, bright color, minimal blemish",
      },
      { label: "Residues", value: "GAP field practices; MRL compliant lots" },
    ],
    storageTransport: {
      storage: [
        "Cool, shaded storage; avoid stacking beyond 6 crates high to prevent bruising.",
        "Ship within 48 hours of harvest for retail orders.",
      ],
      transport: [
        "Ventilated crates strapped to trucks with corner protection.",
        // "Chilled trucks available for long hauls; temperature logs shared when requested.",
      ],
    },
    photos: {
      field: [
        {
          url: "https://ik.imagekit.io/thormars/Sawyer-Camp/Ni-Emma-crop.jpg",
          alt: "Orange trees with ripe fruit",
        },
      ],
      processing: [
        {
          url: "https://ik.imagekit.io/thormars/Sawyer-Camp/oranges-ready-to-sell.jpg",
          alt: "Sorted oranges in crates ready for loading",
        },
      ],
    },
    farmer: {
      name: "Ni Emmanuel",
      role: "President and CEO, SCF-CIG",
      years: "25 years cultivating oranges",
      quote:
        "We harvest at first blush, clip carefully, and move to shade fast so the fruit arrives with the tree-fresh taste intact.",
      focus:
        "Canopy management and picking discipline to reduce rind damage and bruising.",
      photo:
        "https://ik.imagekit.io/thormars/Sawyer-Camp/SC-ni.jpg?updatedAt=1719179871695",
    },
    testimonials: [
      {
        company: "Sunrise Juicers",
        role: "Plant Manager",
        quote:
          "Brix has been reliable and crates arrive without bruising thanks to their shaded pre-cooling and pallet strapping.",
        useCase: "Juice production during peak season",
      },
      {
        company: "FreshMart Retail",
        role: "Category Buyer",
        quote:
          "They clip fruit and grade by count per crate. Shelf life is strong, which reduces shrink on our end.",
        useCase: "Retail fresh produce program",
      },
    ],
  },
  {
    id: "plantain",
    slug: "plantain",
    name: "Plantain",
    category: "Roots & Tubers",
    salesChannels: ["Wholesale", "Retail"],
    description:
      "Fresh green or ripe plantain sold by the bunch. Bunch sizes vary and can be supplied by count or by weight for food service, markets, and bulk buyers.",
    packaging: "Bunches (small, medium, large); weighed on request",
    availability: "Year-round",
    seasonality: "Year-round with steady supply",
    priceRange: "Per bunch or per kg",
    pricingNote:
      "Pricing depends on bunch size, weight, ripeness, and order volume; specifications required.",
    moq: "Flexible (by bunch count or total weight)",
    origin: "Banga-Bakundu, Cameroon",
    lastUpdated: "Dec 2025",
    imageUrl:
      "https://ik.imagekit.io/thormars/Sawyer-Camp/plantain-bunch-on-tree.jpg",
    highlights: [
      "Sold by bunch (variable sizes)",
      "Green or ripe options available",
      "Can be weighed for wholesale",
    ],
    useCases: [
      "Food service",
      "Retail",
      "Wholesale distribution",
      "Export trials",
    ],
    photos: {
      field: [
        {
          url: "https://ik.imagekit.io/thormars/Sawyer-Camp/plantain-bunch-on-tree.jpg",
          alt: "Plantain bunch on tree",
        },
      ],
      processing: [
        {
          url: "https://ik.imagekit.io/thormars/Sawyer-Camp/plantain-bunches.jpg",
          alt: "Plantain bunches ready for loading",
        },
      ],
    },
  },
  {
    id: "groundnuts",
    slug: "groundnuts",
    name: "Groundnuts (Peanuts)",
    category: "Grains & Seeds",
    salesChannels: ["Wholesale"],
    description:
      "Dried and cleaned groundnuts suitable for snacks, and ingredient use.",
    packaging: "50 kg bags",
    availability: "Seasonal; peak Jan-Mar",
    seasonality: "Peak Jan-Mar",
    priceRange: "Price on request",
    pricingNote:
      "Ask for current stock and grading before placing volume orders.",
    moq: "100 bags",
    origin: "South West Region, Cameroon",
    lastUpdated: "Dec 2025",
    imageUrl:
      "https://ik.imagekit.io/thormars/Sawyer-Camp/groundnuts-in-bag.jpg",
    highlights: [
      "Cleaned and dried for storage",
      "Ready for snack processing(groundnut sweet) or ingredient use",
      "Bagged in 50 kg lots",
    ],
    useCases: ["Snack production", "Ingredient supply"],
    photos: {
      field: [
        {
          url: "https://ik.imagekit.io/thormars/Sawyer-Camp/goundnuts.jpg",
          alt: "peanuts ready for processing",
        },
      ],
    },
  },
  {
    id: "egusi",
    slug: "egusi",
    name: "Egusi (Melon Seeds)",
    category: "Grains & Seeds",
    salesChannels: ["Wholesale", "Retail"],
    description:
      "High-quality egusi seeds, cleaned and dried, ready for culinary use across West African dishes.",
    packaging: "25 kg and 50 kg bags",
    availability: "Seasonal; contact for stock",
    seasonality: "Seasonal; check current stock",
    priceRange: "Tiered by volume",
    pricingNote: "Volume pricing available; smaller retail packs on request.",
    moq: "50 bags (wholesale) or smaller retail packs",
    origin: "South West Region, Cameroon",
    lastUpdated: "Dec 2025",
    imageUrl: "https://ik.imagekit.io/thormars/Sawyer-Camp/egusi-seed.jpg",
    highlights: [
      "Cleaned and dried",
      "Retail and wholesale pack sizes",
      "Main ingredient in cuisines like egusi soup and egusi pudding",
    ],
    useCases: ["Retail", "Food service", "Ingredient supply"],
    photos: {
      field: [
        {
          url: "https://ik.imagekit.io/thormars/Sawyer-Camp/packed-egusi-2.jpg",
          alt: "egusi seeds packed",
        },
      ],
    },
  },
];
