'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      {
        name: "Nivia Football",
        description: "Size 5 synthetic leather football for practice and match play",
        price: 999,
        discount_price: 799,
        image_url: "https://m.media-amazon.com/images/I/81dbYsBBEeL._SL1500_.jpg",
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Adidas Men Running Shoes",
        description: "Lightweight mesh running shoes with durable sole",
        price: 3499,
        discount_price: 2999,
        image_url: "https://m.media-amazon.com/images/I/71suXHFQb9L._SX695_.jpg",
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Campus Men’s Maxico Running Shoes",
        description: "Stylish and lightweight shoes with breathable mesh",
        price: 1299,
        discount_price: 999,
        image_url: "https://m.media-amazon.com/images/I/61cuLFoHgyL._SY695_.jpg",
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jordan",
        description: "Men WMNS Air 2 Retro-White/Varsity Red-Black",
        price: 22000,
        discount_price: 15899,
        image_url: "https://m.media-amazon.com/images/I/61fiykRQPML._SY695_.jpg",
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sneaker",
        description: "Unisex Adult BMW MMS LGND Renegade Sneaker",
        price: 22000,
        discount_price: 18000,
        image_url: "https://m.media-amazon.com/images/I/61ZEoF1sWWL._SY695_.jpg",
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Safari Pentagon Laptop Backpack",
        description: "Water-resistant backpack with 3 compartments and laptop sleeve",
        price: 2499,
        discount_price: 1799,
        image_url: "https://m.media-amazon.com/images/I/61YqD93pNBL._SX679_.jpg",
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Leather Laptop",
        description: "WildHorn Genuine Leather Laptop Messenger Bag for Men | Stylish Office Bag with a Padded Laptop Compartment & Adjustable Strap | Designed to Fit Laptops up to 14 Inches | Backed by a 1-Year Warranty",
        price: 4999,
        discount_price: 2999,
        image_url: "https://m.media-amazon.com/images/I/714X-m4M6YL._SY695_.jpg",
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vegan Leather Bag",
        description: "Commute Laptop Bag for Men | Office Bag for Men & Women | With Padded Compartment | Vegan Leather & Nylon Fabric | Fits Up to 15.6\" Laptop & MacBook, 11L",
        price: 6000,
        discount_price: 4500,
        image_url: "https://m.media-amazon.com/images/I/71WYJXttMvL._SY695_.jpg",
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Strauss Adjustable Dumbbells",
        description: "Steel dumbbells adjustable up to 20kg set for home workouts",
        price: 3499,
        discount_price: 2799,
        image_url: "https://m.media-amazon.com/images/I/81cx2kzP9lL._SL1500_.jpg",
        categoryId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "AmazonBasics Yoga Mat",
        description: "Thick foam yoga mat for all fitness levels, with carrying strap",
        price: 1299,
        discount_price: 999,
        image_url: "https://m.media-amazon.com/images/I/81YBUS8CKoL._SL1500_.jpg",
        categoryId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dumbbells Pack of 2",
        description: "Lifelong PVC Hex Dumbbells Pack of 2 (5kg*2) Black Color for Home Gym Equipment Fitness Barbell|Gym Exercise|Home Workout, Gym Dumbbells|Dumbbells Weights for Men & Women (6 Months Warranty)",
        price: 1000,
        discount_price: 799,
        image_url: "https://m.media-amazon.com/images/I/710SxepIfiL._SL1500_.jpg",
        categoryId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fitness Home Gym",
        description: "Fitness Home Gym Multi Press Machine All-in-one Equipment for Men & Women Workout Machine Chest Biceps Shoulder Back Triceps Legs Muscle Multiple Exercise at Home",
        price: 163000,
        discount_price: 100461,
        image_url: "https://m.media-amazon.com/images/I/518I4X1tT7L._SL1000_.jpg",
        categoryId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Autofy Bike Cover",
        description: "UV resistant, waterproof body cover for all bikes",
        price: 899,
        discount_price: 649,
        image_url: "https://m.media-amazon.com/images/I/719qVpvgmQL._SL1500_.jpg",
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Full Finger Cycling Gloves",
        description: "[BREATHABLE AND COMFORTABLE]-High elastic and air mesh fabrics, Breathable and provide maximum comfort and airflow, Moisture-wicking",
        price: 15000,
        discount_price: 10351,
        image_url: "https://m.media-amazon.com/images/I/51S9Kqwnh3L.jpg",
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Face Graphic Helmet",
        description: "Steelbird SBH-17 Terminator ISI Certified Matt Finish Full Face Graphic Helmet",
        price: 2999,
        discount_price: 1799,
        image_url: "https://m.media-amazon.com/images/I/61kEeBDS8vL._SL1100_.jpg",
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "iPhone 16 Pro Max",
        description: "iPhone 16 Pro Max 256 GB: 5G Mobile Phone with Camera Control, 4K 120 fps Dolby Vision and a Huge Leap in Battery Life. Works with AirPods; Desert Titanium",
        price: 135900,
        discount_price: 100000,
        image_url: "https://m.media-amazon.com/images/I/61giwQtR1qL._SL1500_.jpg",
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "iPhone 16e ",
        description: "iPhone 16e 128 GB: Built for Apple Intelligence, A18 Chip, Supersized Battery Life, 48MP Fusion. Camera, 15.40 cm (6.1″) Super Retina XDR Display; Black",
        price: 53600,
        discount_price: 50000,
        image_url: "https://m.media-amazon.com/images/I/61FMZ9rSZUL._SL1500_.jpg",
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "MacBook m4",
        description: "Apple 2025 MacBook Air (13-inch, Apple M4 chip with 10-core CPU and 8-core GPU, 16GB Unified Memory, 256GB) - Sky Blue",
        price: 99000,
        discount_price: 89999,
        image_url: "https://m.media-amazon.com/images/I/71pKJ+Mjd8L._SL1500_.jpg",
        categoryId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
