// Centralized Heritage Global Structured Dataset Array
const APE_KAMA_DATASET = {
    mainInteractiveCards: [
        {
            id: "bamboo-rice",
            name: "Bamboo Rice", 
            minPrice: "1,850",
            maxPrice: "2,550",
            description: "Find the flavor that suits your taste.",
            mainImage: "images/menu/main-bamboo-rice.jpg",
            subCards: [
                {name: "Chicken Bamboo Rice", 
                    price: "Rs. 1,950", 
                    desc: "Heritage chicken curry slow steamed inside forest bamboo nodes.",
                    subImage: "images/menu/sub-chicken-bamboo.jpg"
                    
                },
                { 
                    name: "Fish Bamboo Rice", 
                    price: "Rs. 2,150", 
                    desc: "Local seer fish cooked inside smoked wood wraps.",
                    subImage: "images/menu/sub-fish-bamboo.jpg" 
                },
                {name: "Egg Bamboo Rice", 
                    price: "Rs. 1,850", 
                    desc: "Spiced farm eggs combined with wood-fired baseline rice grains.",
                    subImage: "images/menu/sub-Egg Bamboo.jpg" 
                },
                { 
                    name: "Tandoori Chicken Bamboo Rice", 
                    price: "Rs. 2,550", 
                    desc: "Premium clay-pot fusion charcoal charred tandoori segments.",
                    subImage: "images/menu/sub-Tandoori Chicken Bamboo.jpg" 
                }
            ]
        },
        {
            id: "kottu",
            name: "Kottu",
            minPrice: "1,150",
            maxPrice: "2,250",
            description: "Find the flavor that suits your taste.",
            mainImage: "images/menu/main-kottu.jpg",
            subCards: [
                { name: "Chicken Kottu", price: "Rs. 1,450", desc: "Shredded godamba flatbread tossed with aromatic village chicken gravy.",subImage:"images/menu/sub-Chicken Kottu.jpg"},
                { name: "Fish Kottu", price: "Rs. 1,650", desc: "Griddle flashed with fresh southern bluefin cuts and scallions." ,subImage:"images/menu/sub-Fish kottu.jpg" },
                { name: "Egg Kottu", price: "Rs. 1,150", desc: "Classic operational street comfort scramble with local leek chops.",subImage:"images/menu/sub-Egg kottu.jpg" },
                { name: "Tandoori Chicken Kottu", price: "Rs. 2,250", desc: "Premium fire-roasted pulled tandoori thighs and curry gravy.",subImage:"images/menu/sub-Tandoori Chicken kottu.jpg" }
            ]
        },
        {
            id: "leaf-rice",
            name: "Leaf Rice",
            minPrice: "1,650",
            maxPrice: "2,450",
            description: "Find the flavor that suits your taste.",
            mainImage: "images/menu/main-leaf-rice.jpg",
            subCards: [
                { name: "Banana Leaf Rice", price: "Rs. 1,850", desc: "Traditional lamprais-style leaf-wrapped setup. Adds 5 traditional curry leaves.",subImage:"images/menu/sub-Banana Leaf Rice.jpg" },
                { name: "Lotus Leaf Rice", price: "Rs. 2,450", desc: "Baked inside lotus leaves for elegant floral note tracking. Adds 5 traditional curry leaves.",subImage:"images/menu/sub-Lotus Leaf Rice.jpg" },
                { name: "Bamboo Leaf Rice", price: "Rs. 2,150", desc: "Earthy wrapper configuration enhancing wild grain tracking. Adds 5 traditional curry leaves.",subImage:"images/menu/sub-Bamboo Leaf Rice.jpg" },
                { name: "Pandan Leaf Rice", price: "Rs. 1,750", desc: "Intense native screwpine aroma immersion. Adds 5 traditional curry leaves.",subImage:"images/menu/sub-Pandan Leaf Rice.jpg" },
                { name: "Corn Husk Rice", price: "Rs. 1,650", desc: "Rustic country-side farming wrapper arrangement. Adds 5 traditional curry leaves.",subImage:"images/menu/sub-Corn Husk Rice.jpg" }
            ]
        },
        {
            id: "biriyani",
            name: "Biriyani",
            minPrice: "1,350",
            maxPrice: "2,450",
            description: "Find the flavor that suits your taste.",
            mainImage: "images/menu/main-biriyani.jpg",
            subCards: [
                { name: "Chicken Biriyani", price: "Rs. 1,750", desc: "Long-grain basmati layers sealed natively with regional whole spices.",subImage:"images/menu/sub-Chicken Biriyani.jpg" },
                { name: "Fish Biriyani", price: "Rs. 1,950", desc: "Fried spiced fish blocks buried in fragrant saffron rice mounds.",subImage:"images/menu/sub-Fish Biriyani.jpg" },
                { name: "Egg Biriyani", price: "Rs. 1,350", desc: "Caramelized onion baseline mixed with hard-boiled eggs.",subImage:"images/menu/sub-Egg Biriyani.jpg" },
                { name: "Tandoori Chicken Biriyani", price: "Rs. 2,450", desc: "The ultimate premium integration variant of fire-pot chicken.",subImage:"images/menu/sub-Tandoori Chicken Biriyani.jpg" }
            ]
        },
        {
            id: "pittu",
            name: "Pittu",
            minPrice: "750",
            maxPrice: "1,450",
            description: "Find the flavor that suits your taste.",
            mainImage: "images/menu/main-pittu.jpg",
            subCards: [
                { name: "Gotu Pittu", price: "Rs. 950", desc: "Steamed cylinders enriched with centella green herb extractions.",subImage:"images/menu/sub-Gotu Pittu.jpg" },
                { name: "Rulang Pittu", price: "Rs. 850", desc: "Prepared cleanly using roasted premium semolina compositions.",subImage:"images/menu/sub-Rulang Pittu.jpg" },
                { name: "Pol Pittu", price: "Rs. 750", desc: "Heavy hand-scraped fresh sea-board grated coconut layers.",subImage:"images/menu/sub-Pol Pittu.jpg"},
                { name: "Habalapethi Pittu", price: "Rs. 1,450", desc: "Rare ancient red rice flakes processing framework alignment.",subImage:"images/menu/sub-Habalapethi Pittu.jpg" }
            ]
        },
        {
            id: "corn-cobs",
            name: "Corn Cobs (Badairigu)",
            minPrice: "650",
            maxPrice: "1,050",
            description: "Find the flavor that suits your taste.",
            mainImage: "images/menu/main-corn-cobs.jpg",
            subCards: [
                { name: "Chili Crisp Corn", price: "Rs. 850", desc: "Brushed with crushed local dried chilies infused oil drops.",subImage:"images/menu/sub-Chili Crisp Corn.jpg" },
                { name: "Butter & Chives Corn", price: "Rs. 900", desc: "Melted cream block glaze sprinkled with fresh highland scallions.",subImage:"images/menu/sub-Butter & Chives Corn.jpg" },
                { name: "Grilled Corn", price: "Rs. 650", desc: "Charred over coconut charcoal husks for pure outdoor aroma.",subImage:"images/menu/sub-Grilled Corn.jpg" },
                { name: "Garlic Corn", price: "Rs. 1,050", desc: "Slow roasted whole cob smeared with thick garlic puree butter.",subImage:"images/menu/sub-Garlic Corn.jpg" }
            ]
        }
    ],
    flatMagicMenu: [
        /* Foods Segments */

        { category: "food", name: "String Hoppers", price: "Rs. 650", desc: "15 red or white steamed flour mats served with Kiri Hodi.",menuImage:"images/menu/foods/String Hoppers.jpg" },
        { category: "food", name: "Roti", price: "Rs. 450", desc: "Rustic coconut flatbread structures accompanied by Lunu Miris paste.",menuImage:"images/menu/foods/Roti.jpg" },
        { category: "food", name: "Idli", price: "Rs. 500", desc: "Fluffy steamed savory rice cakes served with regional lentil sambar.",menuImage:"images/menu/foods/Idli.jpg" },
        { category: "food", name: "Thosai", price: "Rs. 550", desc: "Crisp stone-ground fermented crepes paired with mint chutneys.",menuImage:"images/menu/foods/thosai.jpg" },
        { category: "food", name: "Nasiguran", price: "Rs. 1,350", desc: "Wok fried heritage variant of local multi-spice mixed rice.",menuImage:"images/menu/foods/Nasiguran.jpg" },
        { category: "food", name: "Kebab", price: "Rs. 1,150", desc: "Skewered charcoal grilled local meat chunks spiked with green chilies.",menuImage:"images/menu/foods/Kebab.jpg" },
        { category: "food", name: "Ibul Kiribath", price: "Rs. 800", desc: "Dynamic milk-rice blocks encasing sweet caramelized coconut cores.",menuImage:"images/menu/foods/Ibul Kiribath.jpg" },
        
        /* Desserts Segments */
        { category: "desserts", name: "Wattalappam", price: "Rs. 650", desc: "The ultimate kitul jaggery spiced egg custard classic.",menuImage:"images/menu/desserts/Wattalappam.jpg" },
        { category: "desserts", name: "Coconut Custard", price: "Rs. 550", desc: "Silky reduction variant using heavy fresh-extracted coconut cream.",menuImage:"images/menu/desserts/Coconut Custard.jpg" },
        { category: "desserts", name: "Sago Coconut Cookies", price: "Rs. 450", desc: "Baked pearl sago cookies with crispy outer textures.",menuImage:"images/menu/desserts/Sago Coconut Cookies.jpg" },
        { category: "desserts", name: "Golden Oil Cakes", price: "Rs. 500", desc: "Traditional sweet Konda Kevum prepared with pure palm syrup.",menuImage:"images/menu/desserts/Golden Oil Cakes.jpg" },
        { category: "desserts", name: "Wandu Appa", price: "Rs. 400", desc: "Steamed sweet toddy fermented holiday cakes.",menuImage:"images/menu/desserts/Wandu Appa.jpg" },
        { category: "desserts", name: "Kozhakutta", price: "Rs. 450", desc: "Sweet jaggery dumpling configurations wrapped in fine rice paste.",menuImage:"images/menu/desserts/Kozhakutta.jpg" },
        { category: "desserts", name: "Laddu", price: "Rs. 350", desc: "Golden toasted gram flour sphere confections rich with ghee.",menuImage:"images/menu/desserts/Laddu.jpg" },
        { category: "desserts", name: "Gulab Jamun", price: "Rs. 500", desc: "Soft milk solid rounds soaked in hot cardamom sugar syrup.",menuImage:"images/menu/desserts/Gulab Jamun.jpg" },

        /* Drinks Segments */
        { category: "drinks", name: "Aloe Drink", price: "Rs. 450", desc: "Cooling natural aloe barbadensis crystal pulp suspension.",menuImage:"images/menu/drink/Aloe Drink.jpg" },
        { category: "drinks", name: "Sugarcane Juice", price: "Rs. 400", desc: "Fresh pressed regional stalks with a lime wedge extraction drop.",menuImage:"images/menu/drink/Sugarcane Juice.jpg" },
        { category: "drinks", name: "Pomegranate Juice", price: "Rs. 650", desc: "Antioxidant rich ruby red real fruit juice counter press.",menuImage:"images/menu/drink/Pomegranate Juice.jpg" },
        { category: "drinks", name: "Coconut Limeade ", price: "Rs. 450", desc: "King coconut water blended with freshly squeezed key lime zest.",menuImage:"images/menu/drink/Coconut Limeade.jpg" },
        { category: "drinks", name: "Kulukki Sarbath ", price: "Rs. 550", desc: "Shaken regional special with soaked basil seeds and green chili slice.",menuImage:"images/menu/drink/Kulukki Sarbath.jpg" },
        { category: "drinks", name: "Avocado Juice ", price: "Rs. 450", desc: "Thick, rich, velvety smooth avocado honey beverage reduction.",menuImage:"images/menu/drink/Avocado Juice.jpg" },
        { category: "drinks", name: "orenge Juice", price: "Rs. 500", desc: "Natively squeezed sweet green oranges rich in natural vitamin tracking.",menuImage:"images/menu/drink/orenge Juice.jpg" },
        { category: "drinks", name: "King Coconut", price: "Rs. 350", desc: "Chilled fresh Thambili nut harvested locally, served raw in shell.",menuImage:"images/menu/drink/King Coconut.jpg" },
        { category: "drinks", name: "wood apple Drink", price: "Rs. 550", desc: "Festive herbal aromatic infusion to cool your inner senses.",menuImage:"images/menu/drink/wood apple Drink.jpg" },
        { category: "drinks", name: "soursop Juice", price: "Rs. 650", desc: "Creamy soursop fruit nectar purée mixed with crushed ice particles.",menuImage:"images/menu/drink/soursop Juice.jpg" }
    ]
};