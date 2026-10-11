/* Emil's Kebab & Pizzeria — English translation of menu-data.js. Keep prices in sync. */
var EMILS_MENU = {
  allergenLabel: "Allergens",
  allergenLegend: "Wheat [1] · Milk [2] · Soy [3] · Sesame [4] · Celery [5] · Mustard [6] · Egg [7] · Fish [8]",

  kebab: {
    title: "Kebab",
    priceLabels: ["Medium", "Large"],
    note: "All kebabs are served with salad, sweetcorn, onion, tomato, jalapeño and dressing.",
    allergenNote: "Allergens kebab no. 50–57: wheat, milk, soy, sesame, celery [1,2,3,4,5]",
    items: [
      { nr: 50, name: "Kebab wrap", variant: "Lamb", prices: [129, 164] },
      { nr: 51, name: "Kebab wrap", variant: "Beef", prices: [169, 204] },
      { nr: 52, name: "Kebab wrap", variant: "Chicken", prices: [154, 189] },
      { nr: 53, name: "Falafel wrap", prices: [124, 159] },
      { nr: 54, name: "Beef pita", prices: [179, 214] },
      { nr: 55, name: "Lamb pita", prices: [144, 179] },
      { nr: 56, name: "Chicken pita", prices: [159, 194] },
      { nr: 57, name: "Falafel pita", prices: [134, 169] },
      { nr: 58, name: "French fries", allergens: "2,3", prices: [80, 120] }
    ]
  },

  kebabtallerken: {
    title: "Kebab plate",
    priceLabels: ["No drink", "Meal"],
    note: "Served with salad, sweetcorn, onion, tomato, jalapeño and dressing.",
    allergenNote: "Allergens kebab no. 60–61 and 63–66: wheat, milk, soy, sesame, celery [1,2,3,4,5]",
    items: [
      { nr: 60, name: "Kebab plate", prices: [179, 209] },
      { nr: 61, name: "Chicken plate", prices: [194, 224] },
      { nr: 62, name: "Beef plate", prices: [204, 234] },
      { nr: 63, name: "Nugget plate", allergens: "1,2,3,4,5,6", prices: [169, 204] },
      { nr: 64, name: "Falafel plate", prices: [169, 199] },
      { nr: 65, name: "Sirloin plate", prices: [169, 204] },
      { nr: 66, name: "Beef snadder", prices: [209, 239] },
      { nr: 67, name: "Chicken snadder", prices: [199, 229] }
    ]
  },

  burger: {
    title: "Burger meals",
    priceLabels: ["Burger", "W/ drink", "Meal"],
    note: "Meals are served with French fries, salad, sweetcorn, onion, jalapeño, dressing and a 0.5 l soft drink.",
    allergenNote: "Allergens burgers no. 70–79 and 81: wheat, milk, soy, sesame, celery, mustard, egg [1,2,3,4,5,6,7]",
    items: [
      { nr: 70, name: "160 g Burger", prices: [134, 164, 194] },
      { nr: 71, name: "190 g Burger", prices: [149, 179, 209] },
      { nr: 72, name: "250 g Burger", prices: [189, 219, 249] },
      { nr: 73, name: "333 g Burger", prices: [204, 234, 264] },
      { nr: 74, name: "Sirloin burger", prices: [149, 179, 209] },
      { nr: 75, name: "Chicken burger", prices: [144, 174, 204] }
    ]
  },

  extra: {
    title: "Extras",
    items: [
      { name: "Drink 0.5 l", price: 45 },
      { name: "Cheese", price: 15 },
      { name: "Bacon", price: 15 },
      { name: "Cheese & bacon", price: 30 },
      { name: "Dip", price: 40 },
      { name: "Pita", price: 15 }
    ]
  },

  pizza: {
    title: "Pizza menu",
    note: "Two sizes, priced as a pair (small / large). Free dip when you order pizza.<br>Extras: meat 30,- · vegetables 20,- · cheese 25,- · dip 40,-",
    items: [
      { nr: 1, name: "Margerita", desc: "Tomato sauce and cheese.", allergens: "1,2,3,4,5", prices: [144, 229] },
      { nr: 2, name: "Napoli", desc: "Tomato sauce, cheese, ham.", allergens: "1,2,3,4,5", prices: [159, 245] },
      { nr: 3, name: "Mocca", desc: "Tomato sauce, cheese, marinated beef.", allergens: "1,2,3,4,5,6", prices: [164, 264] },
      { nr: 4, name: "Vegetarian", desc: "Tomato sauce, cheese, bell pepper, mushrooms, olives, red onion.", allergens: "1,2,3,4,5", prices: [159, 245] },
      { nr: 5, name: "Emil's favourite", star: true, desc: "Tomato sauce, cheese, pepperoni, minced beef.", allergens: "1,2,3,4,5,6,7", prices: [159, 255] },
      { nr: 6, name: "Secilia", desc: "Tomato sauce, cheese, minced beef, bacon, pepperoni.", allergens: "1,2,3,4,5,6,7", prices: [165, 265] },
      { nr: 7, name: "Venezia", desc: "Tomato sauce, cheese, ham, bacon.", allergens: "1,2,3,4,5", prices: [165, 265] },
      { nr: 8, name: "Eldorado", desc: "Tomato sauce, cheese, pepperoni, bell pepper, pineapple.", allergens: "1,2,3,4,5,6,7", prices: [165, 265] },
      { nr: 9, name: "Milano", star: true, desc: "Tomato sauce, cheese, marinated beef, ham.", allergens: "1,2,3,4,5,6", prices: [165, 269] },
      { nr: 10, name: "Naxos", star: true, desc: "Tomato sauce, cheese, marinated beef, bell pepper, mushrooms, red onion.", allergens: "1,2,3,4,5,6", prices: [165, 269] },
      { nr: 11, name: "Taco pizza", star: true, desc: "Taco-spiced minced beef, bell pepper, jalapeño, tortilla chips.", allergens: "1,2,3,4,5,6,7", prices: [165, 269] },
      { nr: 12, name: "Mafiosa", star: true, desc: "Tomato sauce, cheese, beef, minced beef, pepperoni.", allergens: "1,2,3,4,5,6,7", prices: [165, 269] },
      { nr: 13, name: "Sandviken", star: true, desc: "Tomato sauce, cheese, beef, minced beef, red onion.", allergens: "1,2,3,4,5,6,7", prices: [164, 269] },
      { nr: 14, name: "Torronto", desc: "Tomato sauce, cheese, marinated beef, minced beef, red onion, jalapeño.", allergens: "1,2,3,4,5,6,7", prices: [164, 269] },
      { nr: 15, name: "Capricosa", desc: "Tomato sauce, cheese, ham, mushrooms.", allergens: "1,2,3,4,5", prices: [164, 269] },
      { nr: 16, name: "Chicken pizza", star: true, desc: "Tomato sauce, cheese, chicken, mushrooms, bell pepper, onion.", allergens: "1,2,3,4,5,6", prices: [164, 269] },
      { nr: 17, name: "New York", desc: "Tomato sauce, cheese, pepperoni, mushrooms.", allergens: "1,2,3,4,5,6", prices: [159, 259] },
      { nr: 18, name: "Texas", star: true, desc: "Tomato sauce, cheese, pepperoni, bacon, ham.", allergens: "1,2,3,4,5,6,7", prices: [164, 269] },
      { nr: 19, name: "HOT Pizza", desc: "Tomato sauce, cheese, kebab meat, pepperoni, jalapeño.", allergens: "1,2,3,4,5,6", prices: [164, 269] },
      { nr: 20, name: "Miami Pizza", star: true, desc: "Tomato sauce, cheese, beef, bacon, red onion.", allergens: "1,2,3,4,5", prices: [164, 269] },
      { nr: 21, name: "Hawaii", desc: "Tomato sauce, cheese, marinated beef, chicken, red onion.", allergens: "1,2,3,4,5,6,7", prices: [164, 269] },
      { nr: 22, name: "Favoritt", star: true, desc: "Tomato sauce, cheese, beef, ham, mushrooms, red onion.", prices: [164, 269] },
      { nr: 23, name: "Build your own pizza", desc: "Tomato sauce, cheese, choose 3 kinds of meat and 3 kinds of vegetables.", allergens: "1,2,3,4,5,6,7", prices: [180, 285] },
      { nr: 24, name: "Kebab Pizza", star: true, desc: "Tomato sauce, cheese, kebab meat, red onion, jalapeño.", allergens: "1,2,3,4,5,6", prices: [180, 285] },
      { nr: 25, name: "Panama Pizza", star: true, desc: "Tomato sauce, cheese, beef, pepperoni, bacon.", allergens: "1,2,3,4,5,6,7", prices: [180, 285] },
      { nr: 26, name: "Mexicana", star: true, desc: "Tomato sauce, cheese, pepperoni, bacon, minced beef, red onion, tomato.", allergens: "1,2,3,4,5,6,7", prices: [180, 285] }
    ]
  }
};
