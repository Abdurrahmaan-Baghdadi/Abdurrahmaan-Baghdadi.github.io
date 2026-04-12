const MENU_ITEMS = [
  {
    "category": "foothies",
    "name": "Double Cheeseburger",
    "price": "5.99",
    "image": "https://live.staticflickr.com/65535/53325834774_a63b425154_w.jpg",
    "description": "Savory beefy delight",
    "long_description": "A unique fusion of beefy goodness, double cheese, and secret sauce blended into a satisfying sip of savory indulgence.",
    "calories": 450,
    "ingredients": [
      "Beef",
      "cheese",
      "secret sauce",
      "ice"
    ]
  },
  {
    "category": "foothies",
    "name": "Mac and Cheesy",
    "price": "4.99",
    "image": "https://live.staticflickr.com/65535/53325726713_6ea9021d96_n.jpg",
    "description": "Creamy comfort fusion",
    "long_description": "Immerse yourself in the comforting blend of macaroni, creamy cheese, and a touch of indulgence for a cozy beverage experience.",
    "calories": 380,
    "ingredients": [
      "Macaroni",
      "cheese",
      "milk",
      "ice"
    ]
  },
  {
    "category": "foothies",
    "name": "Chicken Alfredo",
    "price": "6.49",
    "image": "https://live.staticflickr.com/65535/53325834794_94d48f43e7_n.jpg",
    "description": "Creamy chicken elegance",
    "long_description": "Experience a touch of luxury with our Chicken Alfredo Foothie, blending grilled chicken, alfredo sauce, and Italian herbs for a delightful indulgence.",
    "calories": 420,
    "ingredients": [
      "Grilled chicken",
      "alfredo sauce",
      "Italian herbs",
      "ice"
    ]
  },
  {
    "category": "foothies",
    "name": "Spaghetti Meatball",
    "price": "5.99",
    "image": "https://live.staticflickr.com/65535/53325834839_934052fd64_n.jpg",
    "description": "Italian comfort in a sip",
    "long_description": "Savor the essence of spaghetti and meatballs in a unique, drinkable twist for a comforting and unexpected flavor experience.",
    "calories": 400,
    "ingredients": [
      "Spaghetti",
      "meatballs",
      "tomato sauce",
      "ice"
    ]
  },
  {
    "category": "foothies",
    "name": "Taco Madness",
    "price": "6.99",
    "image": "https://live.staticflickr.com/65535/53325834774_a63b425154_w.jpg",
    "description": "Spicy fiesta fusion",
    "long_description": "A fiesta of flavors featuring seasoned taco meat, salsa, and a touch of lime in every sip. Taco Madness is a spicy, bold adventure.",
    "calories": 380,
    "ingredients": [
      "Taco meat",
      "salsa",
      "lime",
      "ice"
    ]
  },
  {
    "category": "foothies",
    "name": "Bean Machine",
    "price": "4.49",
    "image": "https://live.staticflickr.com/65535/53325726708_b4089d4945_n.jpg",
    "description": "Hearty bean concoction",
    "long_description": "The Bean Machine delivers a hearty blend of beans, spices, and a dash of smokiness for a unique and satisfying beverage.",
    "calories": 320,
    "ingredients": [
      "Beans",
      "spices",
      "smoke flavor",
      "ice"
    ]
  },
  {
    "category": "foothies",
    "name": "Loaded Nacho",
    "price": "5.29",
    "image": "https://live.staticflickr.com/65535/53325834794_94d48f43e7_n.jpg",
    "description": "Nacho cheese sensation",
    "long_description": "Dive into the bold flavor of Loaded Nacho Foothie, complete with cheese, jalape\u00c3\u00b1os, and a hint of salsa for a party in every sip.",
    "calories": 380,
    "ingredients": [
      "Nacho cheese",
      "jalape\u00c3\u00b1os",
      "salsa",
      "ice"
    ]
  },
  {
    "category": "foothies",
    "name": "Mushy Sushi",
    "price": "7.99",
    "image": "https://live.staticflickr.com/65535/53324619112_569b50bf1e_n.jpg",
    "description": "Sushi in a sip",
    "long_description": "Experience the umami of sushi with a blend of sushi rice, fresh fish, and savory soy undertones in every Mushy Sushi Foothie.",
    "calories": 350,
    "ingredients": [
      "Sushi rice",
      "fish",
      "soy sauce",
      "ice"
    ]
  },
  {
    "category": "foothies",
    "name": "Pepperoni Pizza",
    "price": "6.49",
    "image": "https://live.staticflickr.com/65535/53325834839_934052fd64_n.jpg",
    "description": "Pizza in liquid form",
    "long_description": "A liquid tribute to the classic pepperoni pizza, blending savory cheese, pepperoni, and tomato essence for a unique and bold flavor.",
    "calories": 420,
    "ingredients": [
      "Pepperoni",
      "cheese",
      "tomato",
      "ice"
    ]
  },
  {
    "category": "foothies",
    "name": "Gyro Blend",
    "price": "7.99",
    "image": "https://live.staticflickr.com/65535/53325834789_6bf8b4f0dd_n.jpg",
    "description": "Mediterranean savory delight",
    "long_description": "Transport your taste buds with the savory goodness of Gyro Blend, featuring gyro meat, tzatziki, and Mediterranean spices in every sip.",
    "calories": 420,
    "ingredients": [
      "Gyro meat",
      "tzatziki",
      "Mediterranean spices",
      "ice"
    ]
  },
  {
    "category": "smoothies",
    "name": "Pink Grapefruit Slime",
    "price": "4.49",
    "image": "https://live.staticflickr.com/65535/53325726653_8c2739194f_w.jpg",
    "description": "Citrusy delight",
    "long_description": "Dive into the refreshing and zesty world of our Pink Grapefruit Slime, a citrusy blend of pink grapefruit, ice, and a hint of sweetness.",
    "calories": 120,
    "ingredients": [
      "Pink grapefruit",
      "ice",
      "sugar"
    ]
  },
  {
    "category": "smoothies",
    "name": "Banana Smoothie",
    "price": "3.99",
    "image": "https://live.staticflickr.com/65535/53325834794_94d48f43e7_n.jpg",
    "description": "Creamy banana goodness",
    "long_description": "Indulge in the creamy bliss of our Banana Smoothie, a luscious blend of ripe bananas, yogurt, and a touch of honey.",
    "calories": 150,
    "ingredients": [
      "Banana",
      "yogurt",
      "honey",
      "ice"
    ]
  },
  {
    "category": "smoothies",
    "name": "Mango Smoothie",
    "price": "4.29",
    "image": "https://live.staticflickr.com/65535/53325726713_6ea9021d96_n.jpg",
    "description": "Tropical delight",
    "long_description": "Transport yourself to the tropics with our Mango Smoothie, a delightful fusion of ripe mangoes, coconut milk, and a hint of pineapple.",
    "calories": 180,
    "ingredients": [
      "Mango",
      "coconut milk",
      "pineapple",
      "ice"
    ]
  },
  {
    "category": "smoothies",
    "name": "Peach Smoothie",
    "price": "3.79",
    "image": "https://live.staticflickr.com/65535/53325726713_6ea9021d96_n.jpg",
    "description": "Sweet peach perfection",
    "long_description": "Savor the sweetness of succulent peaches in our Peach Smoothie, a perfectly blended and refreshing treat for any occasion.",
    "calories": 130,
    "ingredients": [
      "Peach",
      "yogurt",
      "orange juice",
      "ice"
    ]
  },
  {
    "category": "smoothies",
    "name": "Strawberry Smoothie",
    "price": "4.19",
    "image": "https://live.staticflickr.com/65535/53325834784_5f8331c0a3_w.jpg",
    "description": "Berry bliss",
    "long_description": "Experience bliss with our Strawberry Smoothie, a delightful mix of fresh strawberries, yogurt, and a hint of honey in every sip.",
    "calories": 160,
    "ingredients": [
      "Strawberry",
      "yogurt",
      "honey",
      "ice"
    ]
  },
  {
    "category": "smoothies",
    "name": "Milky Blueberry",
    "price": "4.99",
    "image": "https://live.staticflickr.com/65535/53325950695_b8bcf91a43_n.jpg",
    "description": "Creamy berry indulgence",
    "long_description": "Indulge in the velvety richness of our Milky Blueberry, a creamy blend of blueberries, milk, and a touch of sweetness.",
    "calories": 200,
    "ingredients": [
      "Blueberries",
      "milk",
      "sugar"
    ]
  },
  {
    "category": "smoothies",
    "name": "Pineapple Delight",
    "price": "4.59",
    "image": "https://live.staticflickr.com/65535/53325834794_94d48f43e7_n.jpg",
    "description": "Pineapple bliss",
    "long_description": "Delight your senses with our Pineapple Delight, a taste of the tropics featuring the sweet and tangy flavor of fresh pineapple.",
    "calories": 170,
    "ingredients": [
      "Pineapple",
      "coconut water",
      "lime",
      "ice"
    ]
  },
  {
    "category": "smoothies",
    "name": "Strawberry Banana",
    "price": "4.29",
    "image": "https://live.staticflickr.com/65535/53325834784_5f8331c0a3_w.jpg",
    "description": "Classic duo",
    "long_description": "Enjoy a classic duo with our Strawberry Banana, a timeless blend of ripe strawberries, bananas, yogurt, and a touch of sweetness.",
    "calories": 180,
    "ingredients": [
      "Strawberry",
      "banana",
      "yogurt",
      "ice"
    ]
  },
  {
    "category": "smoothies",
    "name": "Very Berry",
    "price": "5.29",
    "image": "https://live.staticflickr.com/65535/53325950695_b8bcf91a43_n.jpg",
    "description": "Berry explosion",
    "long_description": "Immerse yourself in the burst of flavors with our Very Berry, an explosion of mixed berries creating a symphony of sweet and tart notes.",
    "calories": 220,
    "ingredients": [
      "Mixed berries",
      "ice",
      "sugar"
    ]
  },
  {
    "category": "smoothies",
    "name": "Orange Burst",
    "price": "4.39",
    "image": "https://live.staticflickr.com/65535/53325726713_6ea9021d96_n.jpg",
    "description": "Citrus explosion",
    "long_description": "Experience a burst of citrus with our Orange Burst, the perfect blend of oranges for a refreshing and zesty delight in every sip.",
    "calories": 150,
    "ingredients": [
      "Orange",
      "yogurt",
      "honey",
      "ice"
    ]
  },
  {
    "category": "smoothies",
    "name": "Blueberry Blast",
    "price": "4.79",
    "image": "https://live.staticflickr.com/65535/53325950695_b8bcf91a43_n.jpg",
    "description": "Luscious blueberry indulgence",
    "long_description": "Indulge in the luscious Blueberry Blast, a delightful blend of fresh blueberries, yogurt, and a touch of honey for a burst of berry goodness.",
    "calories": 170,
    "ingredients": [
      "Blueberries",
      "yogurt",
      "honey",
      "ice"
    ]
  },
  {
    "category": "smoothies",
    "name": "Tropical Mango Tango",
    "price": "5.49",
    "image": "https://live.staticflickr.com/65535/53325834839_934052fd64_n.jpg",
    "description": "Exotic mango and passion fruit dance",
    "long_description": "Let your taste buds dance with the Tropical Mango Tango, an exotic blend of ripe mangoes, passion fruit, and a hint of coconut for a tropical escape.",
    "calories": 190,
    "ingredients": [
      "Mango",
      "passion fruit",
      "coconut milk",
      "ice"
    ]
  },
  {
    "category": "smoothies",
    "name": "Cherry Berry Bliss",
    "price": "4.89",
    "image": "https://live.staticflickr.com/65535/53325834784_5f8331c0a3_w.jpg",
    "description": "Cherry and mixed berry delight",
    "long_description": "Delight in the Cherry Berry Bliss, a harmonious blend of cherries, mixed berries, and yogurt for a burst of fruity bliss.",
    "calories": 180,
    "ingredients": [
      "Cherries",
      "mixed berries",
      "yogurt",
      "ice"
    ]
  },
  {
    "category": "smoothies",
    "name": "Vanilla Peach Dream",
    "price": "4.69",
    "image": "https://live.staticflickr.com/65535/53325726653_8c2739194f_w.jpg",
    "description": "Velvety vanilla and peach fusion",
    "long_description": "Experience velvety indulgence with Vanilla Peach Dream, a fusion of vanilla, peaches, yogurt, and a touch of honey for a dreamy delight.",
    "calories": 160,
    "ingredients": [
      "Vanilla",
      "peaches",
      "yogurt",
      "honey",
      "ice"
    ]
  },
  {
    "category": "smoothies",
    "name": "Green Apple Zing",
    "price": "4.29",
    "image": "https://live.staticflickr.com/65535/53325494006_25b8a02a99_n.jpg",
    "description": "Crisp green apple refreshment",
    "long_description": "Refresh yourself with the crisp Green Apple Zing, a blend of fresh green apples, spinach, and a hint of mint for a revitalizing sip.",
    "calories": 140,
    "ingredients": [
      "Green apples",
      "spinach",
      "mint",
      "ice"
    ]
  },
  {
    "category": "juices",
    "name": "Kale Juice",
    "price": "3.99",
    "image": "https://live.staticflickr.com/65535/53325494006_25b8a02a99_n.jpg",
    "description": "Nutrient-packed greens",
    "long_description": "Boost your vitality with our Kale Juice, a nutrient-packed blend of fresh kale, apples, and a hint of lemon for a refreshing kick.",
    "calories": 80,
    "ingredients": [
      "Kale",
      "apple",
      "lemon juice"
    ]
  },
  {
    "category": "juices",
    "name": "Apple Juice",
    "price": "2.99",
    "image": "https://live.staticflickr.com/65535/53325834784_5f8331c0a3_w.jpg",
    "description": "Classic apple sweetness",
    "long_description": "Savor the classic sweetness of our Apple Juice, a crisp and refreshing blend of ripe apples for a taste of orchard-fresh delight.",
    "calories": 100,
    "ingredients": [
      "Apples"
    ]
  },
  {
    "category": "juices",
    "name": "Orange Juice",
    "price": "3.29",
    "image": "https://live.staticflickr.com/65535/53325726713_6ea9021d96_n.jpg",
    "description": "Citrusy sunrise delight",
    "long_description": "Start your day right with the Citrusy Sunrise Delight, our Orange Juice, bursting with the fresh and invigorating flavor of ripe oranges.",
    "calories": 120,
    "ingredients": [
      "Oranges"
    ]
  },
  {
    "category": "juices",
    "name": "Kiwi Juice",
    "price": "4.49",
    "image": "https://live.staticflickr.com/65535/53325494006_25b8a02a99_n.jpg",
    "description": "Tropical kiwi infusion",
    "long_description": "Embark on a tropical journey with our Kiwi Juice, a refreshing infusion of ripe kiwis for a burst of exotic flavor.",
    "calories": 90,
    "ingredients": [
      "Kiwi"
    ]
  },
  {
    "category": "juices",
    "name": "Carrot Juice",
    "price": "3.79",
    "image": "https://live.staticflickr.com/65535/53325726713_6ea9021d96_n.jpg",
    "description": "Sweet and earthy blend",
    "long_description": "Enjoy the sweet and earthy goodness of our Carrot Juice, a refreshing blend of farm-fresh carrots for a nourishing and flavorful experience.",
    "calories": 110,
    "ingredients": [
      "Carrots"
    ]
  },
  {
    "category": "juices",
    "name": "Cucumber Juice",
    "price": "4.29",
    "image": "https://live.staticflickr.com/65535/53325494006_25b8a02a99_n.jpg",
    "description": "Cool cucumber refreshment",
    "long_description": "Stay refreshed with our Cool Cucumber Juice, a hydrating blend of crisp cucumbers, apples, and a hint of mint for a revitalizing sip.",
    "calories": 70,
    "ingredients": [
      "Cucumber",
      "apple",
      "mint"
    ]
  },
  {
    "category": "juices",
    "name": "Cranberry Juice",
    "price": "3.99",
    "image": "https://live.staticflickr.com/65535/53325834784_5f8331c0a3_w.jpg",
    "description": "Tart and tangy delight",
    "long_description": "Indulge in the Tart and Tangy Delight of our Cranberry Juice, a refreshing and antioxidant-rich blend for a burst of flavor.",
    "calories": 100,
    "ingredients": [
      "Cranberries"
    ]
  },
  {
    "category": "juices",
    "name": "Tomato Juice",
    "price": "2.99",
    "image": "https://live.staticflickr.com/65535/53325834839_934052fd64_n.jpg",
    "description": "Savory tomato goodness",
    "long_description": "Sip on the Savory Tomato Goodness of our Tomato Juice, a rich and flavorful blend that captures the essence of ripe tomatoes.",
    "calories": 80,
    "ingredients": [
      "Tomatoes"
    ]
  },
  {
    "category": "juices",
    "name": "Pineapple Juice",
    "price": "4.59",
    "image": "https://live.staticflickr.com/65535/53325834794_94d48f43e7_n.jpg",
    "description": "Pineapple infused bliss",
    "long_description": "Escape to the tropics with our Pineapple Juice, a taste of paradise featuring the sweet and tangy flavor of fresh pineapples.",
    "calories": 130,
    "ingredients": [
      "Pineapple"
    ]
  },
  {
    "category": "juices",
    "name": "Grape Juice",
    "price": "3.49",
    "image": "https://live.staticflickr.com/65535/53325950665_c036a42bc5_w.jpg",
    "description": "Sweet grape indulgence",
    "long_description": "Indulge in the Sweet Grape Indulgence of our Grape Juice, a luscious and refreshing blend capturing the essence of ripe grapes.",
    "calories": 110,
    "ingredients": [
      "Grapes"
    ]
  },
  {
    "category": "juices",
    "name": "Mixed Berry Blast",
    "price": "4.99",
    "image": "https://live.staticflickr.com/65535/53325950695_b8bcf91a43_n.jpg",
    "description": "Berry explosion in a sip",
    "long_description": "Experience a burst of flavors with our Mixed Berry Blast, an explosion of mixed berries creating a symphony of sweet and tart notes.",
    "calories": 180,
    "ingredients": [
      "Mixed berries",
      "blueberries",
      "strawberries",
      "raspberries"
    ]
  },
  {
    "category": "juices",
    "name": "Watermelon Crush",
    "price": "5.29",
    "image": "https://live.staticflickr.com/65535/53325726653_8c2739194f_w.jpg",
    "description": "Refreshing watermelon delight",
    "long_description": "Quench your thirst with our Watermelon Crush, a refreshing blend of juicy watermelon and a hint of mint for a revitalizing experience.",
    "calories": 150,
    "ingredients": [
      "Watermelon",
      "mint"
    ]
  },
  {
    "category": "juices",
    "name": "Mango Passion Fusion",
    "price": "4.79",
    "image": "https://live.staticflickr.com/65535/53325834839_934052fd64_n.jpg",
    "description": "Tropical mango and passion fruit blend",
    "long_description": "Transport yourself to the tropics with our Mango Passion Fusion, a delightful blend of ripe mangoes and passion fruit for a tropical escape.",
    "calories": 160,
    "ingredients": [
      "Mango",
      "passion fruit",
      "orange juice"
    ]
  },
  {
    "category": "juices",
    "name": "Lemonade Spark",
    "price": "3.49",
    "image": "https://live.staticflickr.com/65535/53325726653_8c2739194f_w.jpg",
    "description": "Zesty lemonade spark",
    "long_description": "Get a zesty kick with our Lemonade Spark, a classic lemonade with a refreshing twist for a burst of citrusy goodness.",
    "calories": 120,
    "ingredients": [
      "Lemons",
      "sugar",
      "sparkling water"
    ]
  },
  {
    "category": "juices",
    "name": "Raspberry Peach Bliss",
    "price": "4.89",
    "image": "https://live.staticflickr.com/65535/53325834784_5f8331c0a3_w.jpg",
    "description": "Blissful raspberry and peach infusion",
    "long_description": "Indulge in the blissful combination of Raspberry Peach Bliss, a refreshing infusion of ripe raspberries and succulent peaches for a delightful experience.",
    "calories": 140,
    "ingredients": [
      "Raspberries",
      "peaches",
      "apple juice"
    ]
  },
  {
    "category": "fizzys",
    "name": "Cherry Soda",
    "price": "1.99",
    "image": "https://live.staticflickr.com/65535/53325834784_5f8331c0a3_w.jpg",
    "description": "Bold cherry refreshment",
    "long_description": "Indulge in the bold and sweet refreshment of Cherry Soda, a classic fizzy drink bursting with the flavor of ripe cherries.",
    "calories": 150,
    "ingredients": [
      "Carbonated water",
      "high fructose corn syrup",
      "cherry flavor"
    ]
  },
  {
    "category": "fizzys",
    "name": "Coca Cola",
    "price": "1.79",
    "image": "https://live.staticflickr.com/65535/53325834789_6bf8b4f0dd_n.jpg",
    "description": "Classic cola experience",
    "long_description": "Enjoy the timeless taste of Coca Cola, a refreshing and effervescent cola experience that never goes out of style.",
    "calories": 140,
    "ingredients": [
      "Carbonated water",
      "high fructose corn syrup",
      "caramel color"
    ]
  },
  {
    "category": "fizzys",
    "name": "Mtn Dew",
    "price": "2.29",
    "image": "https://live.staticflickr.com/65535/53325834794_94d48f43e7_n.jpg",
    "description": "Citrusy mountain blend",
    "long_description": "Quench your thirst with the bold and citrusy Mountain Dew, a fizzy delight that takes your taste buds on an exhilarating journey.",
    "calories": 170,
    "ingredients": [
      "Carbonated water",
      "high fructose corn syrup",
      "citrus flavor"
    ]
  },
  {
    "category": "fizzys",
    "name": "Sprite",
    "price": "1.99",
    "image": "https://live.staticflickr.com/65535/53324619112_569b50bf1e_n.jpg",
    "description": "Crisp lemon-lime fizz",
    "long_description": "Experience the crisp and refreshing taste of Sprite, a lemon-lime fizzy drink that brings a burst of joy with every sip.",
    "calories": 130,
    "ingredients": [
      "Carbonated water",
      "high fructose corn syrup",
      "lemon-lime flavor"
    ]
  },
  {
    "category": "fizzys",
    "name": "Dr. Pepper",
    "price": "2.49",
    "image": "https://live.staticflickr.com/65535/53325834789_6bf8b4f0dd_n.jpg",
    "description": "Unique peppered blend",
    "long_description": "Savor the distinct flavor of Dr. Pepper, a unique blend of 23 flavors that creates a bold and satisfying fizzy beverage.",
    "calories": 150,
    "ingredients": [
      "Carbonated water",
      "high fructose corn syrup",
      "flavors"
    ]
  },
  {
    "category": "fizzys",
    "name": "Big Red",
    "price": "2.09",
    "image": "https://live.staticflickr.com/65535/53325834784_5f8331c0a3_w.jpg",
    "description": "Sweet cream soda",
    "long_description": "Enjoy the sweet and creamy delight of Big Red, a classic cream soda that brings a nostalgic and satisfying fizzy experience.",
    "calories": 160,
    "ingredients": [
      "Carbonated water",
      "high fructose corn syrup",
      "vanilla flavor"
    ]
  },
  {
    "category": "fizzys",
    "name": "Orange Fanta",
    "price": "1.89",
    "image": "https://live.staticflickr.com/65535/53325726713_6ea9021d96_n.jpg",
    "description": "Citrusy orange burst",
    "long_description": "Delight in the burst of citrus with Orange Fanta, a fizzy orange-flavored drink that brings a refreshing and zesty experience.",
    "calories": 140,
    "ingredients": [
      "Carbonated water",
      "high fructose corn syrup",
      "orange flavor"
    ]
  },
  {
    "category": "fizzys",
    "name": "A&W Rootbeer",
    "price": "2.19",
    "image": "https://live.staticflickr.com/65535/53325834774_a63b425154_w.jpg",
    "description": "Rich root beer goodness",
    "long_description": "Dive into the rich and frothy goodness of A&W Rootbeer, a classic fizzy drink with the nostalgic flavor of root beer.",
    "calories": 180,
    "ingredients": [
      "Carbonated water",
      "high fructose corn syrup",
      "root beer flavor"
    ]
  },
  {
    "category": "fizzys",
    "name": "Pepsi",
    "price": "1.79",
    "image": "https://live.staticflickr.com/65535/53325834789_6bf8b4f0dd_n.jpg",
    "description": "Classic cola favorite",
    "long_description": "Enjoy the classic taste of Pepsi, a fizzy cola favorite that delivers a perfect balance of sweetness and refreshment.",
    "calories": 150,
    "ingredients": [
      "Carbonated water",
      "high fructose corn syrup",
      "caramel color"
    ]
  },
  {
    "category": "fizzys",
    "name": "Canada Dry",
    "price": "1.99",
    "image": "https://live.staticflickr.com/65535/53325834794_94d48f43e7_n.jpg",
    "description": "Crisp ginger ale",
    "long_description": "Experience the crisp and refreshing taste of Canada Dry, a classic ginger ale that brings a delightful fizz and a hint of ginger warmth.",
    "calories": 140,
    "ingredients": [
      "Carbonated water",
      "high fructose corn syrup",
      "ginger flavor"
    ]
  }
];
