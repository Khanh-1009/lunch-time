# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Restaurant.create([
    {
        name: "GumaGumalu",
        address: "46531 Mission Blvd, Fremont, CA 94539",
        phone: "+1 (510) 380-8011",
        image_url: "https://lh3.googleusercontent.com/p/AF1QipNKMwhwskf9NRIu4b2Gmf-vxD6lJ6pczdz5NURc=s1360-w1360-h1020"
    },
    {
        name: "Pho Vi Hoa",
        address: "4546 El Camino Real Los Altos, CA 94022",
        phone: "+1 (650) 947-1290",
        image_url: "https://lh3.googleusercontent.com/p/AF1QipOM8AQcL9VRQ0MtW72ceK148s0iCB5U7Ekdif5e=s680-w680-h510"
    },
    {
        name: "Giorgio's Italian Food and Pizzeria",
        address: "1445 Foxworthy Ave. San Jose, CA 95118",
        phone: "+1 (408) 264-5781",
        image_url: "https://popmenucloud.com/cdn-cgi/image/width%3D768%2Cheight%3D768%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/xhacnbzr/19cfa98a-4404-4d0a-bd63-48f13a5b0a87.jpg"
    },
    {
        name: "Armadillo Willy's Texas BBQ",
        address: "878 Blossom Hill Rd San Jose, CA 95123",
        phone: "+1 (408) 224-7427",
        image_url: "https://lh3.googleusercontent.com/p/AF1QipPxK8N8fEfOYbsgCRt0jNIMEH2Ixi9qhw8-x5wR=s680-w680-h510"
    },
    {
        name: "The Halal Guys",
        address: "5338 Curie St Fremont, CA 94538",
        phone: "+1 (510) 493-7330",
        image_url: "https://lh3.googleusercontent.com/p/AF1QipMpvhCYvXP-pohyNTq-93yEzuFCFaGK9RmRxoi8=s680-w680-h510-rw"
    },
    {
        name: "Yoshi Sushi",
        address: "599 E Calaveras Blvd Milpitas, CA 95035",
        phone: "+1 (408) 649-2888",
        image_url: "https://lh3.googleusercontent.com/p/AF1QipOMig9Yf9aHauVm3CvROEoq5_flqxJZBUHZgeY4=s680-w680-h510"
    },
    {
        name: "XLB Emperor - Mingle's Mango",
        address: "46529 Mission Blvd, Fremont, CA 94539",
        phone: "+1 (510) 573-6651",
        image_url: "https://lh3.googleusercontent.com/p/AF1QipOrsr9XsTfISUAx-qY6391pRSXkkYVJH1S6Walb=s680-w680-h510"
    }
])

Company.create([
    {
        name: "Meta Platforms, Inc."
    },
    {
        name: "Alphabet Inc."
    },
    {
        name: "Amazon.com, Inc."
    },
    {
        name: "Apple, Inc."
    },
    {
        name: "Oracle Corporation"
    },
    {
        name: "Samsung Electronics, Inc."
    },
    {
        name: "Tesla, Inc."
    },
    {
        name: "VinFast Auto Ltd."
    }
])

Dish.create([
    {
        name: "Punugulu",
        description: "Fritters made of rice and lentils and served with chutney.",
        price: 9.99,
        picture_url: "https://www.pringleapi.com/DigitalMenu/Products/276510.JPG",
        is_gluten: false,
        is_vegeterian: true,
        restaurant_id: 1
    },
    {
        name: "Cut Mirchi",
        description: "Serrano Chilli coated with chickpea flour & fried",
        price: 7.99,
        picture_url: "https://www.pringleapi.com/DigitalMenu/Products/276514.JPG",
        is_gluten: false,
        is_vegeterian: true,
        restaurant_id: 1
    },
    {
        name: "Chilli Paneer",
        description: "Indian Cottage Cheese tossed with a spicy sauce.",
        price: 12.99,
        picture_url: "https://www.pringleapi.com/DigitalMenu/Products/276516.JPG",
        is_gluten: true,
        is_vegeterian: true,
        restaurant_id: 1
    },
    {
        name: "Lamb Kheema Biryani",
        description: "Ground lamb sautéed with special sauce served with long grain basmati rice.",
        price: 16.99,
        picture_url: "https://www.pringleapi.com/DigitalMenu/Products/276559.JPG",
        is_gluten: true,
        is_vegeterian: false,
        restaurant_id: 1
    },
    {
        name: "Goat Dum Biryani",
        description: "Baby Goat bone-in marinated with herbs , spices , cooked with long grain basmati rice. (Friday, Saturday & Sunday)",
        price: 18.99,
        picture_url: "https://www.pringleapi.com/DigitalMenu/Products/276572.JPG",
        is_gluten: true,
        is_vegeterian: false,
        restaurant_id: 1
    },
    {
        name: "Vijayawada Boneless Lamb Biryani",
        description: "Lamb cubes sautéed with special sauce served with long grain basmati rice.",
        price: 17.99,
        picture_url: "https://www.pringleapi.com/DigitalMenu/Products/276563.JPG",
        is_gluten: false,
        is_vegeterian: true,
        restaurant_id: 1
    },
    {
        name: "Fresh Spring Roll (Pork + Shrimp)",
        description: "Fresh Vietnamese spring rolls with shrimp, pork, and vegetables. Served with peanuts sauce",
        price: 11.00,
        picture_url: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-157551000000000000/menu/items/0/item-900000000005108010_1686260636.jpg?size=medium",
        is_gluten: true,
        is_vegeterian: false,
        restaurant_id: 2
    },
    {
        name: "Deep-fried Egg Roll",
        description: "Ground pork, shrimp, and vegetables in rice paper. Served with lime sauce",
        price: 11.00,
        picture_url: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-157551000000000000/menu/items/6/item-900000000005108016_1686260709.jpg?size=medium",
        is_gluten: false,
        is_vegeterian: false,
        restaurant_id: 2
    },
    {
        name: "Lotus Root Salad w/ Tofu",
        description: "Lotus root salad with tofu (served cold)",
        price: 14.00,
        picture_url: "https://d2s742iet3d3t1.cloudfront.net/menu_service/restaurants/847f5e6f-a1e6-4f86-ac18-11ccfd5b39fd/MenuItem/381c79a9-8c30-4c6a-a002-e3f553bac9bb.jpg?size=medium",
        is_gluten: true,
        is_vegeterian: true,
        restaurant_id: 2
    },
    {
        name: "Steak + Meatball (Small)",
        description: "PHO NOODLE SOUP WITH STEAK AND MEATBALLS",
        price: 16.50,
        picture_url: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-157551000000000000/menu/items/5/item-900000000006348355_1688855067.jpg?size=medium",
        is_gluten: true,
        is_vegeterian: false,
        restaurant_id: 2
    },
    {
        name: "Steak + Flank (Small)",
        description: "PHO NOODLE SOUP WITH STEAK AND FLANK",
        price: 16.50,
        picture_url: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-157551000000000000/menu/items/2/item-900000000006351352_1688855910.jpg?size=medium",
        is_gluten: true,
        is_vegeterian: false,
        restaurant_id: 2
    },
    {
        name: "Shrimp Fried Rice",
        description: "Shrimp fried rice",
        price: 17.50,
        picture_url: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-157551000000000000/menu/items/6/item-900000000005107956_1687746999.jpg?size=medium",
        is_gluten: true,
        is_vegeterian: false,
        restaurant_id: 2
    },
    {
        name: "Penne Calabrese",
        description: "Our family made hot and mild Italian sausage and fresh mushrooms in a light tomato cream sauce tossed with penne pasta",
        price: 21.00,
        picture_url: "https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/xhacnbzr/e7c87e92-539e-416f-89ae-a16f657502f5.JPG",
        is_gluten: false,
        is_vegeterian: false,
        restaurant_id: 3
    },
    {
        name: "Linguini with Clams",
        description: "Tender clams simmered in their natural juices or with a light tomato and herb sauce. Served with linguini",
        price: 23.50,
        picture_url: "https://popmenucloud.com/cdn-cgi/image/width%3D1920%2Cheight%3D1920%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/xhacnbzr/108d9c38-f7ee-462f-beda-44dbd1c1bbf9.jpg",
        is_gluten: false,
        is_vegeterian: false,
        restaurant_id: 3
    },
    {
        name: "Penne Calabrese",
        description: "Our family made hot and mild Italian sausage and fresh mushrooms in a light tomato cream sauce tossed with penne pasta",
        price: 21.00,
        picture_url: "https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/xhacnbzr/e7c87e92-539e-416f-89ae-a16f657502f5.JPG",
        is_gluten: false,
        is_vegeterian: false,
        restaurant_id: 3
    },
    {
        name: '"New York Style" Lasagna',
        description: "Our family made Italian sausage, fresh herbs & ricotta layered with lasagna noodles, meat sauce and mozzarella. Oven baked",
        price: 18.50,
        picture_url: "https://popmenucloud.com/cdn-cgi/image/width%3D1920%2Cheight%3D1920%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/xhacnbzr/e30fa6e9-ef06-4aca-b55f-9ba4ff17e9c0.jpg",
        is_gluten: false,
        is_vegeterian: false,
        restaurant_id: 3
    },
    {
        name: "Vegetarian Fantasy",
        description: "Onion, zucchini, mushroom, black olive, bell pepper, fresh tomato & artichoke",
        price: 29.50,
        picture_url: "https://popmenucloud.com/cdn-cgi/image/width%3D1920%2Cheight%3D1920%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/xhacnbzr/5af74124-00c6-4106-9e47-cea748da997d.JPG",
        is_gluten: false,
        is_vegeterian: true,
        restaurant_id: 3
    },
    {
        name: "BBQ Chicken",
        description: "BBQ sauce, roasted chicken, bacon, red onion, tomatoes and sprinkled with fresh cilantro",
        price: 23.50,
        picture_url: "https://popmenucloud.com/cdn-cgi/image/width%3D1920%2Cheight%3D1920%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/xhacnbzr/c000f193-58e1-473f-bf2b-ff3d92240a40.jpg",
        is_gluten: false,
        is_vegeterian: false,
        restaurant_id: 3
    },
    {
        name: "El Jefe Sandwich",
        description: "Pulled Pork, PRIME Brisket, Texas Jalapeno-Cheese Sausage, Spicy Peanut Slaw, Pickled Jalapeno, Sriracha.",
        price: 18.99,
        picture_url: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-117890000000000000/menu/items/2/item-300000017488027022_1690578987.jpg?size=medium",
        is_gluten: false,
        is_vegeterian: false,
        restaurant_id: 4
    },
    {
        name: "Salt & Pepper Turkey Breast Sandwich",
        description: "Kosher Salt, Coarse Black Pepper.",
        price: 15.99,
        picture_url: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-117890000000000000/menu/items/4/item-300000017488027014_1690581999.jpg?size=medium",
        is_gluten: false,
        is_vegeterian: false,
        restaurant_id: 4
    },
    {
        name: "Turkey Avocado Stack Sandwich",
        description: "Doc's Turkey Breast, Fresh Avocado, Lettuce, Tomato, Mayo, Grilled Sourdough",
        price: 17.29,
        picture_url: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-117890000000000000/menu/items/0/item-300000017488027020_1690584077.jpg?size=medium",
        is_gluten: false,
        is_vegeterian: false,
        restaurant_id: 4
    },
    {
        name: "Cajun Salmon Burger",
        description: "Wild Alaskan Salmon Patty, Cajun Spice, Monterey Jack, Mayo, Lettuce, Tomato, Onion and Crispy Onions.",
        price: 16.99,
        picture_url: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-117890000000000000/menu/items/8/item-300000017488027038_1690581489.jpg?size=medium",
        is_gluten: false,
        is_vegeterian: false,
        restaurant_id: 4
    },
    {
        name: "Ultimate Hickory Burger",
        description: "BBQ Sauce Glaze, Monterey Jack, Cneddar Cheese, Double-Smoked Bacon, Grilled Onion. Onion Ring. Mayo. Mustard. Lettuce. Tomato and Onion.",
        price: 17.79,
        picture_url: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-117920000000000000/menu/items/0/item-300000017488027030_1683240340.jpg?size=medium",
        is_gluten: false,
        is_vegeterian: false,
        restaurant_id: 4
    },
    {
        name: "White Cheddar Mac & Cheese Bowl",
        description: "Our Mac & Cheese with 1/4 pound of your choice of meat. Garnished with green onion. Does not include a Side.",
        price: 14.99,
        picture_url: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-117883000000000000/menu/items/5/item-300000017488027305_1683657627.jpg?size=medium",
        is_gluten: false,
        is_vegeterian: false,
        restaurant_id: 4
    },
    {
        name: "Beef Gyro Platter",
        description: "Served with beef gyro, rice, lettuce, and tomatoes along with your choice of toppings and our famous white and hot sauce.",
        price: 16.99,
        picture_url: "https://thehalalguys.com/wp-content/uploads/2023/04/Beef-Platter-265x149.jpg",
        is_gluten: true,
        is_vegeterian: false,
        restaurant_id: 5
    },
    {
        name: "Falafel Platter",
        description: "Served with falafels, rice, lettuce, and tomatoes along with your choice of toppings and our famous white and hot sauce.",
        price: 14.99,
        picture_url: "https://thehalalguys.com/wp-content/uploads/2023/04/Falafel-Platter-265x149.jpg",
        is_gluten: true,
        is_vegeterian: true,
        restaurant_id: 5
    },
    {
        name: "Combo Platter",
        description: "Served with a pairing of your choice (beef gyro, chicken, falafel) as well as rice, lettuce, and tomatoes along with your choice of toppings and our famous white and hot sauce.",
        price: 21.99,
        picture_url: "https://thehalalguys.com/wp-content/uploads/2023/04/Chicken-Beef-Platter-Combo-265x149.jpg",
        is_gluten: true,
        is_vegeterian: false,
        restaurant_id: 5
    },
    {
        name: "Chicken Sandwich",
        description: "Warm pita bread filled with chicken. We add in lettuce, tomatoes, your choice of toppings and top it off with our famous white and hot sauce.",
        price: 12.99,
        picture_url: "https://thehalalguys.com/wp-content/uploads/2023/04/Chicken-Sandwich-Logo-Wrap-265x149.jpg",
        is_gluten: false,
        is_vegeterian: false,
        restaurant_id: 5
    },
    {
        name: "Combo Sandwich",
        description: "Warm pita bread filled with a pairing of your choice (beef gyro, chicken, falafel). We add in lettuce, tomatoes, your choice of toppings and top it off with our famous white and hot sauce.",
        price: 16.99,
        picture_url: "https://thehalalguys.com/wp-content/uploads/2023/04/Chicken-Beef-Sandwich-Logo-Wrap-265x149.jpg",
        is_gluten: false,
        is_vegeterian: false,
        restaurant_id: 5
    },
    {
        name: "Baklava",
        description: "Rich, sweet dessert pastry made of layers of filo filled with chopped nuts and sweetened and held together with syrup or honey.",
        price: 6.99,
        picture_url: "https://thehalalguys.com/wp-content/uploads/2023/04/Baklava-265x149.jpg",
        is_gluten: false,
        is_vegeterian: true,
        restaurant_id: 5
    },
    {
        name: "Beef Teriyaki Plate",
        description: "Serve with house green salad, white rice, 4 pieces California roll, 2 pieces pork gyoza, and miso soup.",
        price: 18.50,
        picture_url: "https://api.chowbus.com/api/v2/image_proxy/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBL3AwUVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--77aa9596fb7d8e6936cbae05004b82beb0f0f235/%E4%BE%BF%E5%BD%93.png",
        is_gluten: false,
        is_vegeterian: false,
        restaurant_id: 6
    },
    {
        name: "Salmon Skin Salad",
        description: "Crispy Salmon Skin, GreenSalad, Tomato,Yamagobo, Sesame Seeds & Japanese Dressing",
        price: 14.50,
        picture_url: "https://api.chowbus.com/api/v2/image_proxy/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNGp6T3c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--57ad94e5592a82bf024321d7f64c99234066b72a/Salmon%20Skin%20Salad.png",
        is_gluten: true,
        is_vegeterian: false,
        restaurant_id: 6
    },
    {
        name: "Dinosaur Roll",
        description: "Soft shell crab and cucumber, topped with unagi, avocado, spicy mayo, unagi sauce, and black tobiko.",
        price: 16.50,
        picture_url: "https://api.chowbus.com/api/v2/image_proxy/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNWVMT2c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--dd54e9a82375cd52c800539d063d0ddc10d0720b/dinosaur%20roll.jpg",
        is_gluten: false,
        is_vegeterian: false,
        restaurant_id: 6
    },
    {
        name: "Lion King Roll",
        description: "Baked crab meat, avocado, fresh salmon, topped with sesame seed, green onion, spicy mayo, and unagi sauce.",
        price: 16.50,
        picture_url: "https://api.chowbus.com/api/v2/image_proxy/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNlNMT2c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--21c3f58536d05fd0a1c16596361ab57c95ca2328/lion%20king%20roll.jpg",
        is_gluten: true,
        is_vegeterian: false,
        restaurant_id: 6
    },
    {
        name: "Scorpion Roll",
        description: "Tempura shrimp and cucumber, topped with cooked ebi, spicy mayo, and unagi sauce.",
        price: 29.50,
        picture_url: "https://api.chowbus.com/api/v2/image_proxy/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOE9MT2c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--6df141600c5951a7039012aa2f69f9e5cbf877e1/scorpion%20roll.jpg",
        is_gluten: true,
        is_vegeterian: false,
        restaurant_id: 6
    },
    {
        name: "Tonkatsu Ramen",
        description: "Original pork flavored ramen, corn, bean sprouts, chashu, bamboo shoots, kikurage mushroom, green onion, and half cut soft boiled egg.",
        price: 17.50,
        picture_url: "https://api.chowbus.com/api/v2/image_proxy/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMFoxUVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--9221b7a10cbe09c9be4f84c9b9add1fd262da131/%E9%9D%A2.png",
        is_gluten: false,
        is_vegeterian: false,
        restaurant_id: 6
    },
    {
        name: "Queen Crab",
        description: "Steamed Kurobuta Pork & crab soup dumplings (2pc).",
        price: 11.99,
        picture_url: "https://static.wixstatic.com/media/1a2232_3d94d7c1871c4c628c10d1d901cf42e8~mv2.jpg/v1/fill/w_740,h_646,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1a2232_3d94d7c1871c4c628c10d1d901cf42e8~mv2.jpg",
        is_gluten: false,
        is_vegeterian: false,
        restaurant_id: 7
    },
    {
        name: "Pepper Chicken",
        description: "Hand-shredded crispy chicken with special chili and pepper sauce. Unique flavor original from Xinjiang, China. Juicy and crispy chicken with natural flavor.",
        price: 13.99,
        picture_url: "https://static.wixstatic.com/media/1a2232_df5972046d584d508d75ff3cfc58961e~mv2.jpg/v1/fill/w_740,h_1110,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1a2232_df5972046d584d508d75ff3cfc58961e~mv2.jpg",
        is_gluten: true,
        is_vegeterian: false,
        restaurant_id: 7
    },
    {
        name: "Braised Pork Rice",
        description: "Selected pork belly made by secret recipe, with half tiger egg. Feel the meat melting in your mouth, not greasy at all. ",
        price: 14.99,
        picture_url: "https://static.wixstatic.com/media/1a2232_0455dcda520046ca81ca3d0b4abea1e2~mv2.jpg/v1/fill/w_740,h_555,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1a2232_0455dcda520046ca81ca3d0b4abea1e2~mv2.jpg",
        is_gluten: true,
        is_vegeterian: false,
        restaurant_id: 7
    },
    {
        name: "Wagyu Beef Rice",
        description: "Mild spicy, Wagyu Beef with rice, green onion, garlic butter corn and half tiger egg.",
        price: 18.99,
        picture_url: "https://static.wixstatic.com/media/1a2232_3bf8e9b1b98f4676916478644c114776~mv2.jpg/v1/fill/w_740,h_555,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1a2232_3bf8e9b1b98f4676916478644c114776~mv2.jpg",
        is_gluten: true,
        is_vegeterian: false,
        restaurant_id: 7
    },
    {
        name: "Chopped Cucumber",
        description: "Fresh Persian cucumber with garlic sauce, red oil and cilantros. Cold Dish.",
        price: 8.99,
        picture_url: "https://static.wixstatic.com/media/1a2232_8e7adec7b87b4338b0cb0f185fdc27eb~mv2.jpg/v1/fill/w_740,h_490,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1a2232_8e7adec7b87b4338b0cb0f185fdc27eb~mv2.jpg",
        is_gluten: true,
        is_vegeterian: true,
        restaurant_id: 7
    },
    {
        name: "Tenshinhan",
        description: "We combined Kurobuta pork sausage, fresh shrimp and hazelnut to make a satay flavor fried rice.",
        price: 14.99,
        picture_url: "https://static.wixstatic.com/media/1a2232_dcb89fdef62c427e9d632e1610f3f9d5~mv2.jpg/v1/fill/w_740,h_555,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1a2232_dcb89fdef62c427e9d632e1610f3f9d5~mv2.jpg",
        is_gluten: true,
        is_vegeterian: false,
        restaurant_id: 7
    }
])

User.create([
    {
        username: "KhanhTran",
        email: "katetrannbkhanh@gmail.com",
        password: "user1",
        password_confirmation: "user1",
        company_id: 2
    }
])