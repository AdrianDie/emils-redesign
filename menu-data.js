/* Emil's Kebab & Pizzeria — full meny, hentet fra kundens trykte menykort */
var EMILS_MENU = {
  allergenLegend: "Hvete [1] · Melk [2] · Soya [3] · Sesam [4] · Selleri [5] · Sennep [6] · Egg [7] · Fisk [8]",

  kebab: {
    title: "Kebab",
    priceLabels: ["Medium", "Stor"],
    note: "Alle kebaber serveres med salat, mais, løk, tomat, jalapeño og dressing.",
    allergenNote: "Allergener kebab nr. 50–57: hvete, melk, soya, sesam, selleri [1,2,3,4,5]",
    items: [
      { nr: 50, name: "Rullekebab", variant: "Lam", prices: [129, 164] },
      { nr: 51, name: "Rullekebab", variant: "Biff", prices: [169, 204] },
      { nr: 52, name: "Rullekebab", variant: "Kylling", prices: [154, 189] },
      { nr: 53, name: "Rulle Falafel", prices: [124, 159] },
      { nr: 54, name: "Biff pita", prices: [179, 214] },
      { nr: 55, name: "Lam pita", prices: [144, 179] },
      { nr: 56, name: "Kylling pita", prices: [159, 194] },
      { nr: 57, name: "Falafel pita", prices: [134, 169] },
      { nr: 58, name: "Pommes frites", allergens: "2,3", prices: [80, 120] }
    ]
  },

  kebabtallerken: {
    title: "Kebabtallerken",
    priceLabels: ["U/drikke", "Meny"],
    note: "Serveres med salat, mais, løk, tomat, jalapeño og dressing.",
    allergenNote: "Allergener kebab nr. 60–61 og 63–66: hvete, melk, soya, sesam, selleri [1,2,3,4,5]",
    items: [
      { nr: 60, name: "Kebabtallerken", prices: [179, 209] },
      { nr: 61, name: "Kyllingtallerken", prices: [194, 224] },
      { nr: 62, name: "Bifftallerken", prices: [204, 234] },
      { nr: 63, name: "Nugget tallerken", allergens: "1,2,3,4,5,6", prices: [169, 204] },
      { nr: 64, name: "Falafel tallerken", prices: [169, 199] },
      { nr: 65, name: "Løvstek tallerken", prices: [169, 204] },
      { nr: 66, name: "Biffsnadder", prices: [209, 239] },
      { nr: 67, name: "Kyllingsnadder", prices: [199, 229] }
    ]
  },

  burger: {
    title: "Hamburgermeny",
    priceLabels: ["Burger", "M/drikke", "Meny"],
    note: "Meny serveres med pommes frites, salat, mais, løk, jalapeño, dressing og 0,5 l brus.",
    allergenNote: "Allergener burgere nr. 70–79 og 81: hvete, melk, soya, sesam, selleri, sennep, egg [1,2,3,4,5,6,7]",
    items: [
      { nr: 70, name: "160 g. Hamburger", prices: [134, 164, 194] },
      { nr: 71, name: "190 g. Hamburger", prices: [149, 179, 209] },
      { nr: 72, name: "250 g. Hamburger", prices: [189, 219, 249] },
      { nr: 73, name: "333 g. Hamburger", prices: [204, 234, 264] },
      { nr: 74, name: "Løvstekburger", prices: [149, 179, 209] },
      { nr: 75, name: "Kyllingburger", prices: [144, 174, 204] }
    ]
  },

  extra: {
    title: "Ekstra",
    items: [
      { name: "Drikke 0,5 l.", price: 45 },
      { name: "Ost", price: 15 },
      { name: "Bacon", price: 15 },
      { name: "Ost & bacon", price: 30 },
      { name: "Dip", price: 40 },
      { name: "Pita", price: 15 }
    ]
  },

  pizza: {
    title: "Pizzameny",
    note: "To størrelser, priset som par (liten / stor). Gratis dip ved bestilling av pizza.",
    allergenNote: "Ekstra: kjøtt 30,- · grønnsaker 20,- · ost 25,- · dipsaus 40,-",
    items: [
      { nr: 1, name: "Margerita", desc: "Tomatsaus og ost.", allergens: "1,2,3,4,5", prices: [144, 229] },
      { nr: 2, name: "Napoli", desc: "Tomatsaus, ost, skinke.", allergens: "1,2,3,4,5", prices: [159, 245] },
      { nr: 3, name: "Mocca", desc: "Tomatsaus, ost, marinert biff.", allergens: "1,2,3,4,5,6", prices: [164, 264] },
      { nr: 4, name: "Vegetar", desc: "Tomatsaus, ost, paprika, champignon, oliven, rødløk.", allergens: "1,2,3,4,5", prices: [159, 245] },
      { nr: 5, name: "Emil's favoritt", star: true, desc: "Tomatsaus, ost, pepperoni, kjøttdeig.", allergens: "1,2,3,4,5,6,7", prices: [159, 255] },
      { nr: 6, name: "Secilia", desc: "Tomatsaus, ost, kjøttdeig, bacon, pepperoni.", allergens: "1,2,3,4,5,6,7", prices: [165, 265] },
      { nr: 7, name: "Venezia", desc: "Tomatsaus, ost, skinke, bacon.", allergens: "1,2,3,4,5", prices: [165, 265] },
      { nr: 8, name: "Eldorado", desc: "Tomatsaus, ost, pepperoni, paprika, ananas.", allergens: "1,2,3,4,5,6,7", prices: [165, 265] },
      { nr: 9, name: "Milano", star: true, desc: "Tomatsaus, ost, marinert biff, skinke.", allergens: "1,2,3,4,5,6", prices: [165, 269] },
      { nr: 10, name: "Naxos", star: true, desc: "Tomatsaus, ost, marinert biff, paprika, champignon, rødløk.", allergens: "1,2,3,4,5,6", prices: [165, 269] },
      { nr: 11, name: "Tacopizza", star: true, desc: "Tacokrydret kjøttdeig, paprika, jalapeño, tortillachips.", allergens: "1,2,3,4,5,6,7", prices: [165, 269] },
      { nr: 12, name: "Mafiosa", star: true, desc: "Tomatsaus, ost, biffkjøtt, kjøttdeig, pepperoni.", allergens: "1,2,3,4,5,6,7", prices: [165, 269] },
      { nr: 13, name: "Sandviken", star: true, desc: "Tomatsaus, ost, biffkjøtt, kjøttdeig, rødløk.", allergens: "1,2,3,4,5,6,7", prices: [164, 269] },
      { nr: 14, name: "Torronto", desc: "Tomatsaus, ost, marinert biff, kjøttdeig, rødløk, jalapeño.", allergens: "1,2,3,4,5,6,7", prices: [164, 269] },
      { nr: 15, name: "Capricosa", desc: "Tomatsaus, ost, skinke, champignon.", allergens: "1,2,3,4,5", prices: [164, 269] },
      { nr: 16, name: "Kyllingpizza", star: true, desc: "Tomatsaus, ost, kylling, champignon, paprika, løk.", allergens: "1,2,3,4,5,6", prices: [164, 269] },
      { nr: 17, name: "New York", desc: "Tomatsaus, ost, pepperoni, champignon.", allergens: "1,2,3,4,5,6", prices: [159, 259] },
      { nr: 18, name: "Texas", star: true, desc: "Tomatsaus, ost, pepperoni, bacon, skinke.", allergens: "1,2,3,4,5,6,7", prices: [164, 269] },
      { nr: 19, name: "HOT Pizza", desc: "Tomatsaus, ost, kebabkjøtt, pepperoni, jalapeño.", allergens: "1,2,3,4,5,6", prices: [164, 269] },
      { nr: 20, name: "Miami Pizza", star: true, desc: "Tomatsaus, ost, biff, bacon, rødløk.", allergens: "1,2,3,4,5", prices: [164, 269] },
      { nr: 21, name: "Hawaii", desc: "Tomatsaus, ost, marinert biff, kylling, rødløk.", allergens: "1,2,3,4,5,6,7", prices: [164, 269] },
      { nr: 22, name: "Favoritt", star: true, desc: "Tomatsaus, ost, biff, skinke, champignon, rødløk.", prices: [164, 269] },
      { nr: 23, name: "Velg din egen pizza", desc: "Tomatsaus, ost, velg 3 typer kjøtt og 3 typer grønnsaker.", allergens: "1,2,3,4,5,6,7", prices: [180, 285] },
      { nr: 24, name: "Kebab Pizza", star: true, desc: "Tomatsaus, ost, kebabkjøtt, rødløk, jalapeño.", allergens: "1,2,3,4,5,6", prices: [180, 285] },
      { nr: 25, name: "Panama Pizza", star: true, desc: "Tomatsaus, ost, biff, pepperoni, bacon.", allergens: "1,2,3,4,5,6,7", prices: [180, 285] },
      { nr: 26, name: "Mexicana", star: true, desc: "Tomatsaus, ost, pepperoni, bacon, kjøttdeig, rødløk, tomat.", allergens: "1,2,3,4,5,6,7", prices: [180, 285] }
    ]
  }
};
