import type { SeasonalMenu } from "@/content/types";

export const seasonalMenus: SeasonalMenu[] = [
  {
    slug: "winter-tasting",
    season: "winter",
    title: "Winter tasting",
    subtitle: "Seven courses · fire and root",
    duration: "About 2 hours 45 minutes",
    price: "€145",
    summary:
      "A cold-season progression built around hearth, root vegetables, and slow reductions. Wine pairing available as an optional enquiry add-on.",
    featured: true,
    demo: true,
    courses: [
      {
        number: "01",
        title: "Ice & brine",
        description: "Oyster leaf, fermented citrus, cold seaweed consommé.",
        wine: "Sparkling · coastal",
      },
      {
        number: "02",
        title: "Ember beet",
        description: "Charred beetroot, smoked yoghurt, juniper oil.",
        wine: "Skin-contact white",
      },
      {
        number: "03",
        title: "River trout",
        description: "Cured trout, horseradish cream, compressed cucumber.",
        wine: "Cool-climate Riesling",
      },
      {
        number: "04",
        title: "Hearth bread",
        description: "Warm sourdough, cultured butter, smoked salt.",
      },
      {
        number: "05",
        title: "Venison lacquer",
        description: "Slow-roasted venison, black garlic, winter greens.",
        wine: "Pinot Noir · North",
      },
      {
        number: "06",
        title: "Cheese cloth",
        description: "Affineur selection, quince paste, cracker.",
      },
      {
        number: "07",
        title: "Cocoa & frost",
        description: "Dark chocolate, iced bergamot, toasted hazelnut.",
        wine: "Sweet Madeira",
      },
    ],
  },
  {
    slug: "spring-garden",
    season: "spring",
    title: "Spring garden",
    subtitle: "Six courses · green and bright",
    duration: "About 2 hours 15 minutes",
    price: "€128",
    summary:
      "A lighter seasonal tasting that follows first shoots, soft herbs, and early fish. Built for longer daylight and quieter service.",
    featured: true,
    demo: true,
    courses: [
      {
        number: "01",
        title: "First shoots",
        description: "Pea tendril, lemon balm, chilled herb broth.",
        wine: "Crémant",
      },
      {
        number: "02",
        title: "Asparagus veil",
        description: "White asparagus, brown butter, soft egg.",
        wine: "Chablis-style",
      },
      {
        number: "03",
        title: "Line-caught sole",
        description: "Sole, spring onion, champagne sauce.",
        wine: "Chardonnay · mineral",
      },
      {
        number: "04",
        title: "Lamb shoulder",
        description: "Slow lamb, wild garlic, new potatoes.",
        wine: "Gamay",
      },
      {
        number: "05",
        title: "Goat cheese",
        description: "Fresh chèvre, honey comb, rye crisp.",
      },
      {
        number: "06",
        title: "Strawberry leaf",
        description: "Early strawberry, verbena ice, almond sponge.",
        wine: "Moscato d’Asti",
      },
    ],
  },
  {
    slug: "chef-counter",
    season: "autumn",
    title: "Chef’s counter",
    subtitle: "Nine courses · kitchen rail",
    duration: "About 3 hours",
    price: "€195",
    summary:
      "A tighter, improvisational menu served at the counter for eight guests. Courses shift with market arrivals — enquire for the week’s rail.",
    featured: false,
    demo: true,
    courses: [
      {
        number: "01",
        title: "Welcome bite",
        description: "Seasonal amuse from the morning prep list.",
      },
      {
        number: "02",
        title: "Raw & cured",
        description: "Fish or vegetable — decided at service.",
      },
      {
        number: "03",
        title: "Warm broth",
        description: "A clear or cloudy cup depending on the day.",
      },
      {
        number: "04",
        title: "Pasta moment",
        description: "Hand-rolled, filled or cut — kitchen choice.",
      },
      {
        number: "05",
        title: "Main protein",
        description: "Fire or pan, finished tableside when needed.",
      },
      {
        number: "06",
        title: "Vegetable plate",
        description: "A composed side that can stand alone.",
      },
      {
        number: "07",
        title: "Pre-dessert",
        description: "Something cold and sharp.",
      },
      {
        number: "08",
        title: "Sweet",
        description: "Pastry or plated dessert from the week’s note.",
      },
      {
        number: "09",
        title: "Parting",
        description: "Petit four and digestive suggestion.",
      },
    ],
  },
];
