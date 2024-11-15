const cartData = [
  {
    "id": 1,
    "imageUrl": require("../Images/Vitamins.png"),  // Use require for importing image
    "quantity": 100,
    "price": 345,
    "discount": 69,
    "companyName": "Sun Pharma",
    "medicineName": "Omi",
    "minAge": 3,
    "maxAge": 12,
    "realMrp": 234,
    "discountMrp": 165,
    "description": "Used for high levels of acidity in the stomach, helps reduce acidity.",
    "disabled": false,
    "comment": "Only send 2 to home address"
  },
  {
    "id": 2,
    "imageUrl": require("../Images/Shampoo.png"),  // Use require for importing image
    "quantity": 50,
    "price": 200,
    "discount": 40,
    "companyName": "Sun Pharma",
    "medicineName": "Omeprazole",
    "minAge": 3,
    "maxAge": 12,
    "realMrp": 180,
    "discountMrp": 140,
    "description": "Helps reduce acidity and prevents acid reflux.",
    "disabled": false,
    "comment": "Please deliver 3 to home address."
  },
  {
    "id": 3,
    "imageUrl": require("../Images/Ayurvedic.png"),  // Use require for importing image
    "quantity": 75,
    "price": 300,
    "discount": 60,
    "companyName": "Cipla",
    "medicineName": "Pantoprazole",
    "minAge": 4,
    "maxAge": 15,
    "realMrp": 250,
    "discountMrp": 190,
    "description": "Used for treating stomach ulcers and reflux.",
    "disabled": false,
    "comment": "Send in two separate shipments."
  },
  {
    "id": 4,
    "imageUrl": require("../Images/Creams.png"),  // Use require for importing image
    "quantity": 150,
    "price": 400,
    "discount": 80,
    "companyName": "Dr. Reddy’s",
    "medicineName": "Esomeprazole",
    "minAge": 5,
    "maxAge": 18,
    "realMrp": 350,
    "discountMrp": 270,
    "description": "For acid reflux and indigestion.",
    "disabled": false,
    "comment": "Deliver to the pharmacy."
  },
  {
    "id": 5,
    "imageUrl": require("../Images/Fitness.png"),  // Use require for importing image
    "quantity": 60,
    "price": 290,
    "discount": 50,
    "companyName": "Mylan",
    "medicineName": "Ranitidine",
    "minAge": 5,
    "maxAge": 14,
    "realMrp": 260,
    "discountMrp": 210,
    "description": "Reduces stomach acid and treats heartburn.",
    "disabled": false,
    "comment": "Please pack securely."
  },
  {
    "id": 6,
    "imageUrl": require("../Images/SkinCare.png"),  // Use require for importing image
    "quantity": 90,
    "price": 250,
    "discount": 50,
    "companyName": "Sun Pharma",
    "medicineName": "Lansoprazole",
    "minAge": 3,
    "maxAge": 10,
    "realMrp": 220,
    "discountMrp": 170,
    "description": "Treats heartburn and acid reflux.",
    "disabled": false,
    "comment": "Send by express delivery."
  },
  {
    "id": 7,
    "imageUrl": require("../Images/Vitamins.png"),  // Use require for importing image
    "quantity": 80,
    "price": 360,
    "discount": 72,
    "companyName": "Zydus",
    "medicineName": "Rabeprazole",
    "minAge": 4,
    "maxAge": 14,
    "realMrp": 310,
    "discountMrp": 250,
    "description": "A medication for gastric ulcers.",
    "disabled": false,
    "comment": "Please deliver to the hospital."
  },
  {
    "id": 8,
    "imageUrl": require("../Images/Creams.png"),  // Use require for importing image
    "quantity": 130,
    "price": 220,
    "discount": 45,
    "companyName": "Cipla",
    "medicineName": "Omeprazole",
    "minAge": 6,
    "maxAge": 16,
    "realMrp": 190,
    "discountMrp": 145,
    "description": "Helps treat heartburn and acid reflux.",
    "disabled": false,
    "comment": "Pack securely and deliver fast."
  },
  {
    "id": 9,
    "imageUrl": require("../Images/Fitness.png"),  // Use require for importing image
    "quantity": 110,
    "price": 325,
    "discount": 65,
    "companyName": "Dr. Reddy’s",
    "medicineName": "Esomeprazole",
    "minAge": 5,
    "maxAge": 18,
    "realMrp": 275,
    "discountMrp": 210,
    "description": "For treating acid reflux and ulcers.",
    "disabled": false,
    "comment": "Deliver to the pharmacy address."
  }
];

export default cartData;
