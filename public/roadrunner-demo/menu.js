// Menu and options for the Roadrunner Roasts redesign.
// The first nine items and prices come from the original team project (original/assets/js/demo-data.js).

export const CATEGORIES = ["Hot Coffee", "Cold Drinks", "Pastries"];

// art: how the card illustration is drawn (see art.js)
export const MENU = [
  { id: "espresso",   name: "Espresso",           category: "Hot Coffee",  price: 2.50, description: "Double shot of our signature dark roast.",                art: { type: "mug", liquid: "#3b2416", foam: "#8a5a3b", small: true }, tags: [], drink: true, milk: false },
  { id: "cappuccino", name: "Cappuccino",         category: "Hot Coffee",  price: 4.25, description: "Espresso with steamed milk and a thick cap of foam.",     art: { type: "mug", liquid: "#a9744f", foam: "#f3e5d0" }, tags: ["Popular"], drink: true, milk: true },
  { id: "latte",      name: "Latte",              category: "Hot Coffee",  price: 4.75, description: "Espresso with creamy steamed milk.",                      art: { type: "mug", liquid: "#c79a6b", foam: "#efdcc2" }, tags: ["Popular"], drink: true, milk: true },
  { id: "americano",  name: "Americano",          category: "Hot Coffee",  price: 3.50, description: "Espresso lengthened with hot water.",                      art: { type: "mug", liquid: "#4a2c1a", foam: "#6b4430" }, tags: [], drink: true, milk: false },
  { id: "mocha",      name: "Mocha",              category: "Hot Coffee",  price: 5.00, description: "Espresso, dark chocolate and steamed milk.",               art: { type: "mug", liquid: "#5a3422", foam: "#e9d3bd", drizzle: "#3a1f12" }, tags: ["New"], drink: true, milk: true },
  { id: "chai",       name: "Chai Latte",         category: "Hot Coffee",  price: 4.75, description: "Spiced black tea with steamed milk. Caffeine-light.",     art: { type: "mug", liquid: "#c8915c", foam: "#f1dfc6" }, tags: [], drink: true, milk: true },
  { id: "coldbrew",   name: "Cold Brew",          category: "Cold Drinks", price: 4.50, description: "Slow-steeped for 24 hours. Smooth and bold.",              art: { type: "iced", liquid: "#2f1b10" }, tags: ["Popular"], drink: true, milk: false },
  { id: "icedlatte",  name: "Iced Latte",         category: "Cold Drinks", price: 5.00, description: "Espresso over ice with chilled milk.",                      art: { type: "iced", liquid: "#b8875c", layer: "#f3e5d0" }, tags: [], drink: true, milk: true },
  { id: "horchata",   name: "Horchata Cold Brew", category: "Cold Drinks", price: 5.50, description: "Cold brew with cinnamon-rice horchata. A San Antonio favorite.", art: { type: "iced", liquid: "#6b4430", layer: "#ead9bd" }, tags: ["New", "Local"], drink: true, milk: false },
  { id: "matcha",     name: "Iced Matcha",        category: "Cold Drinks", price: 5.25, description: "Ceremonial-grade matcha shaken with milk over ice.",       art: { type: "iced", liquid: "#8db35a", layer: "#eef3e2" }, tags: [], drink: true, milk: true },
  { id: "croissant",  name: "Croissant",          category: "Pastries",    price: 3.25, description: "Buttery, flaky pastry baked fresh every morning.",        art: { type: "croissant" }, tags: [], drink: false },
  { id: "muffin",     name: "Blueberry Muffin",   category: "Pastries",    price: 2.75, description: "Loaded with fresh blueberries.",                           art: { type: "muffin" }, tags: [], drink: false },
  { id: "scone",      name: "Cinnamon Scone",     category: "Pastries",    price: 2.95, description: "Spiced scone with a sugar glaze.",                         art: { type: "scone" }, tags: [], drink: false },
  { id: "concha",     name: "Concha",             category: "Pastries",    price: 2.50, description: "Soft pan dulce with a crackly vanilla topping.",           art: { type: "concha" }, tags: ["Local"], drink: false },
];

export const SIZES = [
  { id: "s", label: "Small",  detail: "12 oz", delta: 0 },
  { id: "m", label: "Medium", detail: "16 oz", delta: 0.5 },
  { id: "l", label: "Large",  detail: "20 oz", delta: 1.0 },
];

export const MILKS = [
  { id: "whole",  label: "Whole",  delta: 0 },
  { id: "oat",    label: "Oat",    delta: 0.75 },
  { id: "almond", label: "Almond", delta: 0.75 },
];

export const SWEETNESS = ["None", "Light", "Regular", "Extra"];

export const EXTRA_SHOT = 1.0;
export const TAX_RATE = 0.0825;   // Texas sales tax
export const PROMO = { code: "BIRDUP", off: 0.1, label: "10% off with BIRDUP" };
export const STARS_FOR_REWARD = 50;
