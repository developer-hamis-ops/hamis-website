const catalog = {
  categories: [
    {
      id: "football",
      title: "Football",
      subtitle: "Products",
      description:
        "HAMIS football products for schools, clubs, academies, and everyday match play.",
      image: "assets/categories/football.jpg",
      imageAlt: "HAMIS football category",
      products: ["football-range", "volleyball-range"],
      relatedCategories: ["training"],
      cta: "View Footballs",
      ctaProduct: "football-range",
    },
    {
      id: "cricket",
      title: "Cricket",
      subtitle: "Gear",
      description:
        "Cricket essentials for academies, schools, clubs, and recreational players.",
      image: "assets/categories/cricket.jpg",
      imageAlt: "HAMIS cricket category",
      products: ["cricket-gear"],
      relatedCategories: ["training"],
      cta: "View Cricket Gear",
      ctaProduct: "cricket-gear",
    },
    {
      id: "fitness",
      title: "Fitness",
      subtitle: "Equipment",
      description:
        "Strength and conditioning products for gyms, sports facilities, and personal training.",
      image: "assets/products/dumbbells.jpg",
      imageAlt: "HAMIS fitness equipment",
      products: ["fitness-equipment", "strength-training"],
      relatedCategories: ["training"],
      cta: "View Fitness",
      ctaProduct: "fitness-equipment",
    },
    {
      id: "training",
      title: "Training",
      subtitle: "Gear",
      description:
        "Cones, markers, and agility tools for coaches, schools, clubs, and fitness sessions.",
      image: "assets/products/training-cones.jpg",
      imageAlt: "HAMIS training cones",
      products: [],
      relatedCategories: ["football", "fitness"],
      cta: "Request Quote",
      ctaProduct: null,
    },
    {
      id: "badminton",
      title: "Badminton",
      subtitle: "Essentials",
      description:
        "Rackets and shuttlecock products for schools, clubs, recreation, and court training.",
      image: "assets/products/badminton-rackets.jpg",
      imageAlt: "Badminton rackets",
      products: ["badminton-essentials"],
      relatedCategories: ["training"],
      cta: "View Essentials",
      ctaProduct: "badminton-essentials",
    },
  ],
  products: [
    {
      id: "football-range",
      title: "Football Range",
      category: "football",
      description:
        "HAMIS footballs are designed for regular play, training sessions, and buyers who need dependable sports stock for schools, clubs, and academies.",
      image: "assets/products/football-ball.jpg",
      imageAlt: "HAMIS football",
      specs: {
        Category: "Football and team sports",
        "Use Case": "Training, match play, and institutional supply",
        "Buyer Fit": "Schools, academies, clubs, and retailers",
        "Next Step": "Contact sales for availability and order quantity",
      },
    },
    {
      id: "volleyball-range",
      title: "Volleyball Range",
      category: "football",
      description:
        "HAMIS volleyballs support repeated practice and competition environments with bright product visibility and strong catalogue appeal.",
      image: "assets/products/volleyball.jpg",
      imageAlt: "HAMIS volleyball",
      specs: {
        Category: "Volleyball and team sports",
        "Use Case": "Practice sessions, coaching, and competition",
        "Buyer Fit": "Schools, sports clubs, retailers, and academies",
        "Next Step": "Ask sales about order quantity and availability",
      },
    },
    {
      id: "cricket-gear",
      title: "Cricket Gear",
      category: "cricket",
      description:
        "HAMIS cricket products cover the essentials buyers expect: stumps, bats, grips, and practical accessories for regular cricket sessions.",
      image: "assets/products/cricket-stumps.jpg",
      imageAlt: "HAMIS cricket stumps",
      specs: {
        Category: "Cricket equipment",
        "Use Case": "Practice, academy training, and match preparation",
        "Buyer Fit": "Academies, schools, clubs, and distributors",
        "Next Step": "Contact sales for catalogue-based selection",
      },
    },
    {
      id: "fitness-equipment",
      title: "Fitness Equipment",
      category: "fitness",
      description:
        "HAMIS fitness products support strength training, gym setups, personal workouts, and sports conditioning programs.",
      image: "assets/products/dumbbells.jpg",
      imageAlt: "HAMIS dumbbells",
      specs: {
        Category: "Fitness and gym accessories",
        "Use Case": "Strength work, conditioning, and everyday training",
        "Buyer Fit": "Gyms, trainers, schools, and sports facilities",
        "Next Step": "Ask sales for available models and order quantities",
      },
    },
    {
      id: "strength-training",
      title: "Strength Training",
      category: "fitness",
      description:
        "Compact strength tools like kettlebells help buyers create flexible training setups for gyms, coaching centers, and home programs.",
      image: "assets/products/kettlebell.jpg",
      imageAlt: "HAMIS kettlebell",
      specs: {
        Category: "Strength and conditioning",
        "Use Case": "Functional training, circuits, and gym programs",
        "Buyer Fit": "Fitness studios, facilities, and individual athletes",
        "Next Step": "Contact sales for sizes, sets, and availability",
      },
    },
    {
      id: "badminton-essentials",
      title: "Badminton Essentials",
      category: "badminton",
      description:
        "HAMIS badminton essentials are practical court products for everyday play, school sports, coaching sessions, and recreational buyers.",
      image: "assets/products/badminton-rackets.jpg",
      imageAlt: "Badminton rackets",
      specs: {
        Category: "Badminton and court sports",
        "Use Case": "Practice, recreation, school sports, and coaching",
        "Buyer Fit": "Schools, clubs, retailers, and individual players",
        "Next Step": "Ask sales for rackets, shuttlecocks, and bundles",
      },
    },
  ],
};
