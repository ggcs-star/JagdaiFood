import {
  downArrow,
  logo,
  atm,
  maggchi,
  brew,
  arb,
  cns,
  ccs,
  dbh,
  frankisathaan,
  gheeDosa,
  lcc,
  mom,
  mexicoCulture,
  minglingBread,
  pab,
  img,
  qsrFranchise,
  chatorigali,
  chatorigali1,
  internet,
  trolleyFranchise,
  mm,
  mf,
  tkt,
  lb,
  lkk,
  pc,
  sweetoo,
  qsrStats,
  foodStats,
  fofo,
  foco,
  cgf,
  ftf,
  iff,
  qf,
  qsrnon,
  qsrveg,
  // whitelisting,
  aamchi,
  allrice,
  chinese,
  crispy,
  dilli,
  francky,
  ghee,
  chaat,
  momos,
  mexico,
  bread,
  // bikecart2,
  bikecart1,
  man,
  nawabi,
  rent
} from "../assets";
// import img from "../../../assets/images/qsrFrachise.jpg";

import reel1 from '../assets/reels/reel1.mp4'
import reel2 from '../assets/reels/reel2.mp4'
import reel3 from '../assets/reels/reel3.mp4'
import reel4 from '../assets/reels/reel4.mp4'
import reel5 from '../assets/reels/reel5.mp4'
import reel6 from '../assets/reels/reel6.mp4'
import reel7 from '../assets/reels/reel7.mp4'
import reel8 from '../assets/reels/reel8.mp4'
import reel9 from '../assets/reels/reel9.mp4'

import dilliBackground from "../assets/brands/background/dillibackground.png";
import scanner from '../assets/brands/scanner.png'
import playstoreimage from '../assets/brands/playstoreimage.png'
import appstoreimage from '../assets/brands/appstoreimage.png'
import jagodsLogo from '../assets/brands/jagodsLogo.svg'

import dilli1 from '../assets/brands/menu/dilli/1.png'
import dilli2 from '../assets/brands/menu/dilli/2.png'
import dilli3 from '../assets/brands/menu/dilli/3.png'
import dilli4 from '../assets/brands/menu/dilli/4.png'
import dilli5 from '../assets/brands/menu/dilli/5.png'
import dilli6 from '../assets/brands/menu/dilli/6.png'


export const brands = [
  {
    id: 1,
    image: atm,
    extraInfoImg: aamchi,
    label: "Aamchi Tumchi Mumbai",
    slug: "aamchi-tumchi-mumbai",
    shortDesc: "Vadpav, Mumbaia misal pav, Ulta Wada Pav & many more…",
    desc: "Celebrating local cuisines that are typically eaten at lunchtime, We wish to evoke a sense of familiarity and nostalgia through every meal",
    infoTitle: "What Sets Us Apart ?",
    infoList: [
      {
        label:
          "Authentic and traditional Maharashtrian masalas for a genuine taste",
      },
      {
        label:
          "Vibrant and hygenic essence of Mumbai's street food in your city.",
      },
      {
        label:
          "Fusion Delights with Unique twists on classic vada pav and other favorites.",
      },
      {
        label:
          "Diverse Menu, from spicy street snacks to hearty regional dishes",
      },
    ],
  },
  {
    id: 2,
    image: arb,
    label: "All Rice Baby",
    slug: "all-rice-baby",
    extraInfoImg: allrice,
    desc: "All Rice Baby revolutionizes mealtime by offering complete Rice meals in one bowl, meticulously crafted to fulfill your body's needs. Experience convenience and flavor with a wholesome combination of rice, salad, gravy, and other accompaniments, all served in a single bowl. Delight in a diverse array of rice dishes worldwide, from North Indian to Chinese to Continental cuisine, all under one roof.",
    shortDesc: "RAJMA RICE, CHOLA RICE, DAL RICE & many more..",
    infoTitle: "What Sets Us Apart ?",
    infoList: [
      {
        label:
          " A complete meal in one bowl, curated to meet your nutritional needs. ",
      },
      {
        label:
          "Enjoy global rice dishes from around the world, all under one roof",
      },
      {
        label:
          "An innovative concept featuring rice as the main ingredient, offering the most diverse menu",
      },
      { label: "Taste for all generations, all in one place" },
    ],
  },
  {
    id: 3,
    image: cns,
    label: "Chinese Nonsense",
    slug: "chinese-nonsense",
    extraInfoImg: chinese,
    desc: "Chinese Nonsense is where traditional Chinese flavors meet with a desi twist and modern creativity. Our playful name reflects our belief that food should be both delicious and fun. Enjoy a culinary journey through China with our innovative dishes, from spicy Sichuan delights to savory Cantonese specialties.",
    infoTitle: "What Sets Us Apart ?",
    shortDesc: "VEG FRIED RICE, MANCHURIAN VEG BOWL & many more..",
    infoList: [
      {
        label:
          "Bold, quirky, and unapologetically delicious Chinese-inspired dishes. ",
      },
      {
        label:
          "Fusion food that redefines Chinese cuisine with a playful twist.",
      },
      {
        label:
          "Fresh ingredients, fiery flavors, and nonsense to spice up your meal.",
      },
      {
        label:
          "A fun, flavorful adventure that keeps you coming back for more.",
      },
    ],
  },
  {
    id: 4,
    image: ccs,
    label: "Crispy Crazy Starters",
    slug: "crispy-crazy-starters",
    extraInfoImg: crispy,
    desc: "Crispy Crazy Starters has a wide variety of starters suitable for any size gathering, whether it's a small get-together or a large event. Whether you're hosting a house party, a kitty party, or any other event at your home, we're your go-to source for a diverse range of starters all in one convenient place.",
    shortDesc:
      "VEG SPRING ROLL, ONION RINGS, HONEY CHILLI POTATO & many more..",
    infoTitle: "What Sets Us Apart ?",
    infoList: [
      {
        label: "A crunchy haven for snack enthusiasts and finger food lovers. ",
      },
      {
        label:
          "Explore an exciting variety of appetizers, perfect for every occasion.",
      },
      {
        label:
          "Crispiness that’s impossible to resist, paired with bold, delicious flavors.",
      },
      { label: "Setting the gold standard for starters, one bite at a time." },
    ],
  },
  {
    id: 5,
    backgroundImg: dilliBackground,
    image: dbh,
    label: "Dilli by Heart",
    slug: "dilli-by-heart",
    extraInfoImg: dilli,
    desc: "Dilli by heart brings the essence of Old Delhi to your plate with our team of chefs exclusively from North India, particularly Delhi. Immerse yourself in the authentic flavors of Delhi street food and experience it right at our place with more hygiene and freshness.",
    shortDesc: "CHOLE AND KULCHA, BEDMI POORI AUR ALOO KI SABJI & many more..",
    infoTitle: "What Sets Us Apart ?",
    infoList: [
      {
        label:
          " Savor the heart of Delhi with every bite of our iconic dishes. ",
      },
      {
        label:
          "Authentic flavors that capture the vibrance of India’s capital city.",
      },
      {
        label:
          "Celebrate Delhi’s culinary heritage with street food classics and more.",
      },
      {
        label:
          "Your journey to the capital’s soul begins with a plate full of nostalgia.",
      },
    ],

    menuDownloadLink: "/menus/dilli-by-heart-menu.pdf",

    menuCategories: [
      "North Indian",
      "Ek Free ka Jugad",
      "Combo",
      "By Kilo",
      "Others"
    ],

    menuItems: [
      {
        title: "Puri Sabji",
        desc: "Gobi and Poori Shaadi Style features a festive blend of spices.",
        image: dilli1,
        category: "North Indian"
      },
      {
        title: "Shaadi Style Aloo Gobi",
        desc: "Authentic Delhi style aloo gobi cooked with festive spices.",
        image: dilli2,
        category: "North Indian"
      },
      {
        title: "Chole with Poori",
        desc: "Classic Delhi street style chole served with soft pooris.",
        image: dilli3,
        category: "North Indian"
      },
        {
        title: "Puri Sabji",
        desc: "Gobi and Poori Shaadi Style features a festive blend of spices.",
        image: dilli4,
        category: "North Indian"
      },
      {
        title: "Shaadi Style Aloo Gobi",
        desc: "Authentic Delhi style aloo gobi cooked with festive spices.",
        image: dilli5,
        category: "North Indian"
      },
      {
        title: "Chole with Poori",
        desc: "Classic Delhi street style chole served with soft pooris.",
        image: dilli6,
        category: "North Indian"
      }
    ],
mobileApp: {
  logo: jagodsLogo,
  // phoneImage: scanner,
  qrCode: scanner,

  playStore: {
    badge: playstoreimage,
    link: "https://play.google.com/store/apps/details?id=com.jagdai"
  },

  appStore: {
    badge: appstoreimage,
    link: "https://apps.apple.com/app/jagdai"
  }
}
  },
  {
    id: 6,
    image: frankisathaan,
    label: "Frankiestaan",
    slug: "frankisathaan",
    extraInfoImg: francky,
    desc: "Frankiestaan welcomes you to a paradise of flavor and variety! Indulge in our delectable selection of Frankies, made with fresh tortillas crafted from wheat flour and filled with a variety of mouthwatering ingredients, our Frankies offer a unique twist on this classic street food. From classic favorites to innovative creations, it offers a tantalizing array of options to satisfy your cravings.",
    shortDesc: "MAD MIX FRANKIE, NOODLES FRANKIE & many more..",
    infoTitle: "What Sets Us Apart ?",
    infoList: [
      {
        label: "A paradise for roll and wrap lovers with unbeatable variety.",
      },
      {
        label:
          "Satisfy your cravings with freshly made frankies, bursting with flavor.",
      },
      {
        label: "Perfectly rolled, perfectly stuffed, and perfectly satisfying.",
      },
      { label: "The art of crafting the ultimate frankie, made just for you." },
    ],
  },
  {
    id: 7,
    image: gheeDosa,
    label: "Ghee Dosa",
    slug: "ghee-dosa",
    extraInfoImg: ghee,
    desc: "Ghee Dosa invites you on a culinary journey through the flavors of South India right in your city. We specialize in crafting the perfect blend of traditional masalas and the finest ingredients to bring you the best sambhar and authentic South Indian dosas, all prepared in the purest ghee to enhance the flavors and leave you licking your fingers.",
    shortDesc: "RAVA DOSA, KURKURI IDLI, GHEE PODI DOSA & many more..",
    infoTitle: "What Sets Us Apart ?",
    infoList: [
      {
        label:
          "South India’s iconic flavors are created with pure, aromatic ghee.",
      },
      {
        label:
          "Crispy, golden dosas that transport you to a traditional kitchen.",
      },
      {
        label:
          "A delightful experience with every bite, paired with authentic chutneys.",
      },
      {
        label:
          "Crafted with care, celebrates the timeless charm of Indian cuisine.",
      },
    ],
  },
  {
    id: 8,
    image: lcc,
    label: "Lakhnawi Chatpati Chaat",
    slug: "lakhnavi-chatpati-chaat",
    extraInfoImg: chaat,
    desc: "Lakhnawi Chatpati Chaat brings the vibrant flavors of Lucknow to Gujarat, with our Founders and chefs from Lucknow crafting each dish with hand-prepared chutneys and ingredients.",
    shortDesc: "PANI PURI, DAHI BHALLE, PALAK PATTA CHAAT & many more..",
    infoTitle: "What Sets Us Apart ?",
    infoList: [
      {
        label: "Experience the royal flavors of Lucknow in every tangy bite.",
      },
      {
        label:
          "A fusion of tradition and taste with handcrafted chaat varieties.",
      },
      {
        label:
          "The perfect blend of spices, textures, and sweet-savory indulgence.",
      },
      {
        label:
          "Relish the soul of Lucknow’s street food culture like never before.",
      },
    ],
  },
  {
    id: 9,
    image: mom,
    label: "Magic of Momos",
    slug: "magic-of-momos",
    extraInfoImg: momos,
    desc: "Experience the magic of momos with the luxury of five-star dumplings, where gourmet delights are prepared to perfection and served with meticulous attention to detail. From classic momos to innovative creations, our menu offers a delightful array of options to tantalize your taste buds. Discover the fusion of elegance and efficiency at our QSR.",
    shortDesc: "VEG MOMOS, CHEESE MOMOS, PANEER MOMOS & many more..",
    infoTitle: "What Sets Us Apart ?",
    infoList: [
      {
        label: "Soft, flavorful momos that melt in your mouth with every bite.",
      },
      {
        label:
          "A wide variety of fillings, from classic to bold, for every craving.",
      },
      {
        label: "Steam, fried, or tandoori – every momo is a magical creation.",
      },
      { label: "Your momo journey begins here, with unforgettable taste." },
    ],
  },
  {
    id: 10,
    image: mexicoCulture,
    label: "Mexico Culture",
    slug: "mexico-culture",
    extraInfoImg: mexico,
    desc: "Mexico Culture Eatery is your gateway into the vibrant tapestry of Mexican cuisine. From zesty tacos to nachos, savor the rich flavors that define Mexican cultural heritage. We serve freshly made nachos, tacos, tostadas, and wraps, with all dips prepared in-house. Enjoy the freshness of our salsa and other dips with every bite. Join us for an authentic taste of Mexico right in your neighborhood.",
    shortDesc: "TACOS, QUESADILLA, LOADED NACHOS & many more..",
    infoTitle: "What Sets Us Apart ?",
    infoList: [
      {
        label:
          "Experience the bold, vibrant flavors of authentic Mexican cuisine.",
      },
      {
        label:
          "Sizzling nachos, loaded tacos, and cheesy quesadillas, all under one roof.",
      },
      {
        label:
          "Sizzling nachos, loaded tacos, and cheesy quesadillas, all under one roof.",
      },
      {
        label:
          "Your gateway to Mexico’s rich culinary heritage, crafted to perfection.",
      },
    ],
  },
  {
    id: 11,
    image: minglingBread,
    label: "Mingling Bread",
    slug: "mingling-bread",
    extraInfoImg: bread,
    desc: "Mingling Breads invites you to experience the ultimate sandwich journey in the city. With our in-house freshly baked assortment of breads, we promise to deliver the best sandwich experience, catering to all your desi and Italian sandwich cravings.",
    shortDesc: "ALOO MUTTER SANDWICH, MUMBAI SANDWICH & many more..",
    infoTitle: "What Sets Us Apart ?",
    infoList: [
      {
        label:
          "A unique fusion of traditional and innovative sandwich creations.",
      },
      {
        label: "Freshly baked bread paired with wholesome, flavorful fillings.",
      },
      {
        label:
          "From Mumbai street style to gourmet delights, we’ve got it all.",
      },
      { label: "Bringing people together, one sandwich at a time!" },
    ],
  },
  {
    id: 12,
    image: pab,
    label: "Pizza and Burgers",
    slug: "pizza-and-burger",
    desc: "Redefine your culinary experience by combining the best of Italy and America under one roof. Our pizzas feature in-house, artisanal dough and wheat crusts topped with gourmet ingredients, while our burgers boast succulent, hand-pressed patties on freshly baked buns. Enjoy exclusive seasonings and signature sauces that make each bite unforgettable.",
    shortDesc: "MARGHERITA PIZZA, SEVEN CHEEZE PIZZA & many more..",
    infoTitle: "What Sets Us Apart ?",
    infoList: [
      {
        label:
          "The best of both worlds, cheesy pizzas and juicy burgers in one place.",
      },
      {
        label:
          "Handcrafted with fresh ingredients for an unbeatable taste experience.",
      },
      {
        label:
          "A celebration of two all-time favorites, made just the way you love.",
      },
      { label: "Taste for all generations, all in one place" },
    ],
  },
  {
    id: 13,
    image: sweetoo,
    label: "Sweetoo",
    slug: "sweetoo",
    desc: "Sweetoo presents an exquisite combination of authentic Indian sweets & Contemporary dessert, meticulously prepared using tried-and-true recipes that have been passed down through generations. Delight your taste buds with the rich, luscious gulab jamuns oozing with decadent syrup, or savor the crisp, golden jalebis that are fried to perfection. Every sweet from Sweetoo reflects our dedication to preserving traditional Indian flavors.",
    shortDesc: "JALEBI, GULAB JAMUN, KHEER & many more..",
    infoTitle: "What Sets Us Apart ?",
    infoList: [
      {
        label:
          "Indulge your sweet tooth with a wide array of irresistible desserts.",
      },
      {
        label:
          "From traditional delights to modern confections, we have it all.",
      },
      {
        label: "Sweet moments crafted with love and the finest ingredients.",
      },
      {
        label: "Your one-stop destination for everything sweet and satisfying.",
      },
    ],
  },
  {
    id: 14,
    image: tkt,
    label: "Tapri ki Taffri",
    slug: "tapri-ki-taffri",
    desc: "Tapri ki Tafri invites you to experience the true essence of chai culture! At our tea outlet, we celebrate the rich tradition of Indian chai, offering a variety of flavors brewed to perfection. Whether you crave the classic masala chai or a modern twist on a timeless favorite, every cup promises a moment of joy and relaxation. Join us at Tapri ki Tafri for a cup of warmth, conversation, and delightful flavors.",
    shortDesc: "Tea, Coffee  , Masala Tea..&many more",
    infoTitle: "What Sets Us Apart ?",
    infoList: [
      {
        label: "Relive the charm of roadside tea stalls with a modern twist.",
      },
      {
        label: "Savor the perfect cup of chai, paired with delicious snacks.",
      },
      {
        label:
          "A cozy hangout spot that brings people together over tea and talks.",
      },
      {
        label:
          "Celebrate the essence of Indian tapris, where every sip tells a story.",
      },
    ],
  },
  {
    id: 15,
    image: mf,
    label: "Momo Fun",
    slug: "momo-meal",
    desc: "Welcome to Momo Fun, where non-veg momos are the show's stars. Our menu features a variety of flavorful, juicy momos made to perfection, delivering an unforgettable taste that blends authenticity with creativity. From beloved classics to unique, compelling options, each momo is a tribute to rich flavors and culinary skills. Come and enjoy a delightful and satisfying momo experience with us!",
    shortDesc: "Chicken Momo, Chicken Chilli Momo...& many more",
    infoTitle: "What Sets Us Apart ?",
    infoList: [
      {
        label:
          "Dive into the world of non-veg momos, crafted for true meat lovers.",
      },
      {
        label:
          "Juicy, flavorful fillings wrapped in soft, perfectly steamed dumplings.",
      },
      {
        label:
          "From classic chicken to spicy mutton, every bite is packed with deliciousness.",
      },
      {
        label:
          "Experience momo magic with a variety of cooking styles – steamed, fried, and tandoori!",
      },
    ],
  },
  {
    id: 16,
    image: lb,
    label: "Lucknow Biryani",
    slug: "lucknow-biryani",
    desc: "Welcome to Lucknow Biryani, where the rich heritage of Nawabi flavors from Lucknow comes to life in every bite. Our non-veg biryani is made with fragrant spices, tender meats, and the highest quality ingredients, offering you the genuine taste of Lucknow’s royal kitchens. Experience a culinary journey that is aromatic, flavorful, and truly unforgettable.",
    shortDesc:
      "Mutton Galauiti KABAB, Fried Chicken, Anda Dum Biryani & many more...",
    infoTitle: "What Sets Us Apart ? ",
    infoList: [
      {
        label:
          "Immerse yourself in the rich, aromatic flavors of authentic Lucknowi biryani.",
      },
      {
        label:
          "Long-grain basmati rice layered with tender, flavorful meat and fragrant spices.",
      },
      {
        label:
          "A royal recipe that blends tradition, taste, and culinary artistry.",
      },
      {
        label:
          "Savor the true essence of Awadhi cuisine, one heavenly spoonful at a time.",
      },
    ],
  },
  {
    id: 17,
    image: lkk,
    label: "Lucknow Kabab Karkhana",
    slug: "lucknow-kabab-karkhana",
    desc: "Kabab Karkhana brings you the royal flavors of Lucknow right in your neighborhood. Specializing in succulent kababs, flavorful rolls, aromatic biryani, and other dishes, our eatery brings the authentic taste of Lucknowi cuisine to every dish. Join us and indulge in the exquisite flavors of The Nawabi tradition at Kabab Karkhana.",
    shortDesc: "Mutton BOTI KABAB, Chicken BOTI KABAB & many more..",
    infoTitle: "What Sets Us Apart ?",
    infoList: [
      {
        label: "The essence of Awadhi cuisine is served with royal finesse.",
      },
      {
        label:
          "Juicy, tender kababs crafted with authentic spices and techniques.",
      },
      {
        label:
          "A heritage of flavors that pays tribute to Lucknow’s culinary royalty.",
      },
      {
        label:
          "Indulge in a feast of kababs, where every bite tells a story of tradition.",
      },
    ],
  },
  {
    id: 18,
    image: maggchi,
    label: "Maggchi",
    slug: "maggchi",
    desc: "At Maggchi, every dish is a celebration of flavors, bringing together the best of Indian and international street food in a single, satisfying experience, From the comforting warmth of Tadka Maggi to the bold zest of Kimchi Ramen, every bite is a perfect blend of nostalgia and innovation.",
    shortDesc: "Masala Maggi, Maggi Bhajiya, Maggi Sandwich, Korean Ramen & many more...",
    infoTitle: "What Sets Us Apart ?",
    infoList: [
      {
        label: "Maggi, but More Fun! Enjoy new flavors with a tasty twist.",
      },
      {
        label:
          "Crispy, Cheesy, Spicy! Maggi in many yummy ways.",
      },
      {
        label:
          "Maggi, But Extra Special! Try exciting new flavors today.",
      },
      {
        label:
          "From Indian Tadka to Korean Ramen! So many flavors to enjoy.",
      },
    ],
  },
  {
    id: 19,
    image: brew,
    label: "Brew Bit",
    slug: "brew-bit",
    desc: "Brew Bit is your go-to destination for the perfect coffee break, offering a rich selection of handcrafted brews, indulgent beverages, and refreshing sips. From bold espressos to creamy frappés, every drink is crafted to elevate your mood and awaken your senses.",
    shortDesc: "BrewBit Espresso, Cappuccino, Cold Coffee, Hot Chocolate & many more…",
    infoTitle: "What Sets Us Apart ?",
    infoList: [
      {
        label: "BrewBit Perfect Coffee Every Time! From rich espressos to creamy lattes.",
      },
      {
        label:
          "Cool & Refreshing Sips! Iced coffee, frappés, and more.",
      },
      {
        label:
          "Sweet & Indulgent Treats! Hot chocolate, mochas, and desserts.",
      },
      {
        label:
          "Relax & Recharge! The best spot for coffee lovers.",
      },
    ],
  },
  // {
  //   id: 18,
  //   image: pc,
  //   label: "Plato Chino",
  //   slug: "plato-chino",
  //   desc: "Tapri ki Tafri invites you to experience the true essence of chai culture! At our tea outlet, we celebrate the rich tradition of Indian chai, offering a variety of flavors brewed to perfection. Whether you crave the classic masala chai or a modern twist on a timeless favorite, every cup promises a moment of joy and relaxation. Join us at Tapri ki Tafri for a cup of warmth, conversation, and delightful flavors.",
  //   shortDesc: "DRY MANCHURIAN, CHICKEN SPRING ROLL, CHICKEN 65 & many more..",
  //   infoTitle: "Our USP",
  //   infoList: [
  //     {
  //       label:
  //         " A complete meal in one bowl, curated to meet your nutritional needs. ",
  //     },
  //     {
  //       label:
  //         "Enjoy global rice dishes from around the world, all under one roof",
  //     },
  //     {
  //       label:
  //         "An innovative concept featuring rice as the main ingredient, offering the most diverse menu",
  //     },
  //     { label: "Taste for all generations, all in one place" },
  //   ],
  // },
  // {
  //   id: 19,
  //   image: pab,
  //   label: "Chow meat",
  //   slug: "chowmeat",
  //   desc: "Tapri ki Tafri invites you to experience the true essence of chai culture! At our tea outlet, we celebrate the rich tradition of Indian chai, offering a variety of flavors brewed to perfection. Whether you crave the classic masala chai or a modern twist on a timeless favorite, every cup promises a moment of joy and relaxation. Join us at Tapri ki Tafri for a cup of warmth, conversation, and delightful flavors.",
  //   shortDesc: "Vadpav, Mumbaia misal pav, Ulta Wada Pav & many more…",
  //   infoTitle: "Our USP",
  //   infoList: [
  //     {
  //       label:
  //         " A complete meal in one bowl, curated to meet your nutritional needs. ",
  //     },
  //     {
  //       label:
  //         "Enjoy global rice dishes from around the world, all under one roof",
  //     },
  //     {
  //       label:
  //         "An innovative concept featuring rice as the main ingredient, offering the most diverse menu",
  //     },
  //     { label: "Taste for all generations, all in one place" },
  //   ],
  // },
  // {
  //   id: 20,
  //   image: pab,
  //   label: "Frankiverse",
  //   slug: "frankiverse",
  //   desc: "Tapri ki Tafri invites you to experience the true essence of chai culture! At our tea outlet, we celebrate the rich tradition of Indian chai, offering a variety of flavors brewed to perfection. Whether you crave the classic masala chai or a modern twist on a timeless favorite, every cup promises a moment of joy and relaxation. Join us at Tapri ki Tafri for a cup of warmth, conversation, and delightful flavors.",
  //   shortDesc: "Vadpav, Mumbaia misal pav, Ulta Wada Pav & many more…",
  //   infoTitle: "Our USP",
  //   infoList: [
  //     {
  //       label:
  //         " A complete meal in one bowl, curated to meet your nutritional needs. ",
  //     },
  //     {
  //       label:
  //         "Enjoy global rice dishes from around the world, all under one roof",
  //     },
  //     {
  //       label:
  //         "An innovative concept featuring rice as the main ingredient, offering the most diverse menu",
  //     },
  //     { label: "Taste for all generations, all in one place" },
  //   ],
  // },
];

export const bgColors = [
  "#669bbc",
  "#83c5be",
  "#457b9d",
  "#fb8b24",
  "#e07a5f",
  "#22577a",
  "#eb5e28",
  "#00afb9",
  "#124559",
  "#ff4d6d",
  "#a68a64",
  "#40916c",
  "#a68a64",
  "#457b9d",
  "#669bbc",
  "#83c5be",
  "#457b9d",
  "#fb8b24",
  "#e07a5f",
  "#22577a",
];

export const franchise = [
  {
    title: "QSR Franchise",
    sub_title: "QSR Restaurant",
    franchiseType: "qsr",
    slug: "qsr-restaurant-franchise",
    info: "The Quick Service Restaurant, Where great taste meets quick service",
    largeImage: qsrFranchise,
    desc: "QSR stands for Quick Service Restaurant. It's a type of eatery known for fast service and convenience, with a limited menu and quick food preparation.",
    icon: qsrFranchise,
    image: qf,
    extraDetails: {
      label: "Franchise Fees ",
      fees: "₹6,00,000",
      percent: "6% Royalty to Jagdai Foods On Total Sale Amount",
      total: "/- +GST",
      price: "16,00,000",
      // note: "NON-VEG Option also available for all brands",
      list: [
        {
          label: "Investment",
          desc: `₹6 lac (Franchise Fees), ₹10 lac (10 Lac or actual whichever is higher)`,
          subTitle: "₹16 Lac",
        },
        { label: "ROI", desc: "", subTitle: "12 to 15 months" },
        {
          label: "Breakeven",
          desc: "Of opening an outlet",
          subTitle: "After 6 Month",
        },
        {
          label: "Gross Profit",
          desc: "",
          subTitle: "35%",
        },
      ],
    },
    benefits: {
      list: [
        { label: "Self-QSR billing online and in-store" },
        {
          label:
            "The opportunity to sell franchises with a 3% royalty and 25% franchise fee.",
        },
        { label: "Billing of trolleys with a 10% royalty" },
        { label: "Billing of internet kitchens with a 10% royalty." },
        { label: "Tiffin services booking with a 10% royalty." },
        { label: "Spices and gravy base selling with 10% royalty." },
      ],
      details: [
        {
          label:
            "You will be representing Jagdai Foods and can sell its franchise too.",
        },
        { label: "You can also create your own brand." },
        {
          label:
            "Additionally, the unique selling proposition (USP) of our franchise offers the following revenue opportunities",
        },
        {
          label:
            "Kitchen equipment like Kitchen Crockery, Tandoor, Bhatti, BBQ, Griller, Fridge, Exhaust needed for QSR are provided. ",
        },
        { label: "Loan for QSR Franchise is also available." },
      ],
    },
    stats: {
      title: "India's QSR Market is Booming : Key Stats",
      list: [
        {
          label:
            "The market size was valued at approximately ₹171.9 billion in the financial year 2022",
        },
        {
          label:
            "It is projected to grow to over ₹431 billion by the year 2027",
        },
        {
          label:
            "In terms of USD, the market size is estimated at $25.46 billion in 2024 and is expected to reach $38.71 billion by 2029",
        },
        {
          label:
            "The market is growing at a compound annual growth rate (CAGR) of 8.74% during the forecast period from 2024 to 2029",
        },
        {
          label:
            "Offline stores boost visibility, attracting significant foot traffic and fostering thriving business opportunities",
        },
      ],
      image: qsrStats,
    },
    banner: {
      img1: qsrveg,
      img2: qsrnon,
    },
  },
  {
    title: "Internet Restaurants Franchise",
    sub_title: "Internet Restaurants",
    franchiseType: "internet",
    slug: "internet-restaurants-franchise",
    info: "Join the Jagdai Foods internet franchise and unlock tasty profits with no location limits! Choose between FOCO, with a minimum earning potential of 15% of total billing, or FOFO, offering up to 35% of total billing.",
    largeImage: internet,
    desc: "An internet restaurant is a food establishment that operates primarily online, offering delivery or pickup services through websites or mobile apps, without a physical dining space",
    icon: internet,
    image: iff,
    extraDetails: {
      label: "Franchise Fees ",
      fees: "₹3,00,000",
      //percent: "3L (+GST) + 30K (for 3 Months)",
      total: "/- +GST",
      price: "3,00,000",
      note: "Franchise pays 50,000 as a marketing fund for the 1st Year of marketing. It is an essential part to get the visibility of the new restaurant as this fund will be used for Zomato, Swiggy and Social Media Promotions.",
      list: [
        {
          label: "Investment",
          desc: `(with Franchise Fees), and all setup)`,
          subTitle: "₹3 Lac",
        },
        { label: "ROI", desc: "", subTitle: "6 to 9 months" },
        {
          label: "Breakeven",
          //desc: "Of opening an outlet",
          subTitle: "After 6 Month",
        },
        {
          label: "Net Profit",
          desc: "",
          subTitle: "FOCO 15% & FOFO 35%",
        },
      ],
    },
    benefits: {
      list: [
        { label: "No Rental" },
        { label: "No Salary" },
        { label: "High Margins" },
        { label: "No Expenses" },
      ],
      details: [
        {
          label:
            "Skip the costly rental fees, operate without a physical space, and maximize profits.",
        },
        {
          label:
            " No salary expenses, run your franchise without worrying about employee costs",
        },
        {
          label:
            "Enjoy high margins with a business model designed for strong profitability.",
        },
        {
          label:
            " Minimize costs and focus on growth with a franchise with little to no expenses.",
        },
      ],
    },
    // stats: {
    //   title: "lorem spsum",
    //   list: [
    //     { label: "lorem spsum" },
    //     { label: "lorem spsum" },
    //     { label: "lorem spsum" },
    //     { label: "lorem spsum" },
    //   ],
    //   image: qsrStats,
    // },
    // banner: {
    //   img1: qsrStats,
    //   img2: qsrStats,
    // },
  },
  {
    title: "Food Tempo Franchise",
    sub_title: "Food Tempo",
    franchiseType: "tempo",
    slug: "food-tempo-franchise",
    info: "Ride, serve, and earn with Jagdai’s powerful Food Tempo franchise!",
    largeImage: trolleyFranchise,
    desc: "Jagdai Foods introduces an exciting opportunity with its Food Trolley Franchise! It's compact, cost-effective, and versatile, a stylish, mobile eatery designed for parks, offices, and events. Serve delicious food on the go with Jagdai Foods' trusted brand support",
    icon: trolleyFranchise,
    image: ftf,
    extraDetails: {
      label: "Franchise Fees",
      fees: "₹5,40,000",
      percent: "6% ROYALTY FROM THE TEMPO",
      total: "/- +GST",
      price: "₹540000",
      note: "NON-VEG Option also available for all brands",
      list: [
        { subTitle: "Food Tempo", icon: bikecart1 },
        {
          subTitle: "Food Supply from Central Kitchen",
          icon: bikecart1,
        },
        { subTitle: "No Location Constraint", icon: bikecart1 },
        { subTitle: "In-Built Freezer", icon: bikecart1 },
        { subTitle: "Ultra Modern Design", icon: bikecart1 },
      ],
      details: [
        {
          label:
            "You will be representing Jagdai Foods and can sell its franchise too.",
        },
        { label: "You can also create your own brand." },
        {
          label:
            "Additionally, the unique selling proposition (USP) of our franchise offers the following revenue opportunities",
        },
        {
          label:
            "Kitchen equipment like Kitchen Crockery, Tandoor, Bhatti, BBQ, Griller, Fridge, Exhaust needed for QSR are provided. ",
        },
        { label: "Loan for QSR Franchise is also available." },
      ],
      statsImg: foodStats,
    },
    benefits: {
      list: [
        { label: "Compact and Mobile Setup" },
        { label: "Food Supply from Central Kitchen" },
        { label: "No Location Constraint" },
        { label: "In-Built Freezer" },
        { label: "Ultra Modern Design" },
      ],
      details: [
        {
          label:
            "Operate from a food tempo that requires limited space, making it ideal for high-traffic areas and events..",
        },
        {
          label:
            "Fresh, consistent, and hassle-free food supply straight from our central kitchen!",
        },
        {
          label:
            "Expand anywhere effortlessly, our business thrives with no location constraints!",
        },
        {
          label: "Keep it fresh and ready, powered by an in-built freezer!",
        },
        {
          label:
            "Experience elegance and efficiency with our ultra-modern design!",
        },
      ],
    },
    // stats: {
    //   title:
    //     "Food Trolley market in India is experiencing robust growth. Here are some key figures",
    //   list: [
    //     {
    //       label:
    //         "India's food truck market is rapidly expanding, with an estimated size of USD 152.45 million in 2022, indicating a significant shift in the nation's gastronomic scene",
    //     },
    //     {
    //       label:
    //         "Food trucks are a crucial part of urban dining, offering affordability, variety, and convenience in both thriving metropolises and developing tier-2 and tier-3 communities",
    //     },
    //     {
    //       label:
    //         "Indian street food accounts for over 40% of food truck specialisations, followed by fast food (30%) and other cuisines (30%)",
    //     },
    //     {
    //       label:
    //         "The food truck market in India is expected to grow at a compound annual growth rate (CAGR) of 7-10% from 2023 to 2028. Valued at approximately USD 30 million in 2023, the market size is projected to reach around USD 50 million by 2028",
    //     },
    //   ],
    //   image: foodStats,
    // },
    banner: {
      img1: qsrveg,
      img2: qsrnon,
    },
  },

  {
    title: "Chatori Gali Franchise (Food Court)",
    sub_title: "Chatori Gali",
    slug: "chatori-gali",
    largeImage: chatorigali,
    desc: "Chatori Gali is a dynamic food court that features a wide range of food stalls, offering both vegetarian and non-vegetarian options.",
    icon: trolleyFranchise,
    image: cgf,
    extraDetails: {
      label: "Franchise Fees",
      fees: "₹20,00,000",
      percent: "6% Royalty from the Trolley",
      total: "/- +GST",
      price: "20,00,000",
      note: "NON-VEG Option also available",
      list: [
        {
          label: "Fees",
          subTitle: "₹20 lac + GST",
        },
        {
          label: "Other Interior",
          subTitle: "₹50 lac (approx) (Food court setup)",
        },
        {
          label: "Breakeven",
          desc: "After 12 Month",
          subTitle: "On opening of food court",
        },
        {
          label: "Gross Profit",
          desc: "POS, CCTV, Menu, Fire System, License, Marketing, Branding",
          subTitle: "35%",
        },
      ],
    },
    benefits: {
      list: [
        { label: "preferences towards under 1 roof" },
        {
          label:
            "Food prepared by 5 star chef best utilization of vacant space at commercial spaces",
        },
        { label: "5 Start taste at street food rate" },
        {
          label:
            "The most hygienic food on a trolley, with quality at par with a five-star menu.",
        },
        {
          label:
            "Increased walk-ins in the mall due to Chatori Gali Food court",
        },
        {
          label: "Best utilization of vacant space at commercial spaces",
        },
      ],
      details: [
        {
          label:
            "Chatori Gali is a dynamic food court featuring a wide range of food stalls, offering both vegetarian and non-vegetarian options.",
        },
        {
          label:
            "With over 24 food brands under one umbrella, it brings diverse culinary experiences to its customers.",
        },
        {
          label:
            "A high-end food stall is run by a skilled chef and trained staff, ensuring consistent quality.",
        },
        {
          label:
            "The recipes for every dish are standardized, guaranteeing a uniform taste and experience at all Chatori Gali outlets.",
        },
        {
          label:
            "5-star cuisine, prepared by a 5-star chef, is served on a street-style trolley at affordable rates.",
        },
      ],
    },
    stats: {
      title:
        "Food Trolley market in India is experiencing robust growth. Here are some key figures",
      list: [
        {
          label:
            "India's food truck market is rapidly expanding, with an estimated size of USD 152.45 million in 2022, indicating a significant shift in the nation's gastronomic scene",
        },
        {
          label:
            "Food trucks are a crucial part of urban dining, offering affordability, variety, and convenience in both thriving metropolises and developing tier-2 and tier-3 communities",
        },
        {
          label:
            "Indian street food accounts for over 40% of food truck specialisations, followed by fast food (30%) and other cuisines (30%)",
        },
        {
          label:
            "The food truck market in India is expected to grow at a compound annual growth rate (CAGR) of 7-10% from 2023 to 2028. Valued at approximately USD 30 million in 2023, the market size is projected to reach around USD 50 million by 2028",
        },
      ],
      image: null,
    },
    // banner: {
    //   img1: null,
    //   img2: null,
    // },
  },

  {
    title: "Food Trolley Franchise",
    sub_title: "Food Trolley",
    franchiseType: "trolley",
    slug: "food-trolley-franchise",
    info: "Ride, serve, and earn with Jagdai’s powerful Bike Kart franchise!",
    largeImage: bikecart1,
    desc: "A Bike Kart Trolley is a compact and stylish mobile food unit, thoughtfully designed for easy mobility and convenience. It allows vendors to serve fresh and delicious food directly to customers wherever they are — whether on busy streets, at events, or in local neighborhoods. With its sleek design and functional setup, the Bike Kart Trolley combines efficiency, flexibility, and style, making it a modern solution for food businesses that want to reach people on the go.",
    icon: trolleyFranchise,
    image: ftf,
    extraDetails: {
      label: "Franchise Fees",
      fees: "₹2,70,000",
      // percent: "6% ROYALTY FROM THE TROLLEY",
      total: "/- +GST",
      price: "₹540000",
      // note: "NON-VEG Option also available for all brands",
      list: [
        {
          subTitle: "Compact and Mobile Setup",
          icon: trolleyFranchise,
        },
        { subTitle: "Food Supply from Central Kitchen", icon: trolleyFranchise },
        { subTitle: "No Location Constraint", icon: trolleyFranchise },
        { subTitle: "Ultra Modern Design", icon: trolleyFranchise },
      ],
      details: [
        {
          label:
            "You will be representing Jagdai Foods and can sell its franchise too.",
        },
        { label: "You can also create your own brand." },
        {
          label:
            "Additionally, the unique selling proposition (USP) of our franchise offers the following revenue opportunities",
        },
        {
          label:
            "Kitchen equipment like Kitchen Crockery, Tandoor, Bhatti, BBQ, Griller, Fridge, Exhaust needed for QSR are provided. ",
        },
        { label: "Loan for QSR Franchise is also available." },
      ],
      statsImg: foodStats,
    },
    benefits: {
      list: [
        { label: "Compact and Mobile Setup" },
        { label: "Food Supply from Central Kitchen" },
        { label: "No Location Constraint" },
        { label: "Ultra Modern Design" },
        { label: "In-built Freezer/hotpot" },
      ],
      details: [
        {
          label:
            "Take your business anywhere with ease! Perfect for busy streets, campuses, offices, and events.",
        },
        {
          label:
            "Enjoy fresh, high-quality meals directly from our central kitchen, no cooking required on-site!",
        },
        {
          label:
            "Go where the crowd is. Your bike goes with you, unlocking earning potential across multiple locations.",
        },
        {
          label: "Ride in style with a modern, eye-catching setup built for both performance and profit.",
        },
      ],
    },
    // stats: {
    //   title:
    //     "Bike Food Carts Are Redefining India’s Street Food Scene",
    //   list: [
    //     {
    //       label:
    //         "The future of food carts in India looks extremely promising, with the market poised for rapid expansion due to rising urbanization, changing consumer preferences, and the low-cost, high-return nature of mobile food businesses.",
    //     },
    //     {
    //       label:
    //         "Currently valued at over ₹500 crore, the mobile food cart segment is expected to grow at a rate of 8–11% annually, aligning with India’s broader street food market, which is projected to reach ₹12 lakh crore by 2030.",
    //     },

    //   ],
    //   image: foodStats,
    // },
    banner: {
      img1: qsrveg,
      img2: qsrnon,
    },
  },
  {
    title: "Influencer Franchise",
    sub_title: "Influencer",
    franchiseType: "influencer",
    slug: "influencer-franchise",
    info: "Promote, influence, and profit with JF’s zero-risk franchise.",
    largeImage: man,
    desc: "Join the JF Influencer Franchise – Where Your Social Influence Turns into a Steady Income Stream with Food Brands, Cashback & 20 Crore+ Products & Services.",
    icon: man,
    image: man,
    extraDetails: {
      label: "Franchise Fees",
      fees: "₹2,70,000",
      percent: "6% ROYALTY FROM THE TROLLEY",
      total: "/- +GST",
      price: "₹540000",
      note: "NON-VEG Option also available for all brands",
      list: [
        {
          label: "Compact and Mobile Setup",
          icon: trolleyFranchise,
        },
        { label: "Food Supply from Central Kitchen", icon: trolleyFranchise },
        { label: "No Location Constraint", icon: trolleyFranchise },
        { label: "Ultra Modern Design", icon: trolleyFranchise },
      ],
      details: [
        {
          label:
            "You will be representing Jagdai Foods and can sell its franchise too.",
        },
        { label: "You can also create your own brand." },
        {
          label:
            "Additionally, the unique selling proposition (USP) of our franchise offers the following revenue opportunities",
        },
        {
          label:
            "Kitchen equipment like Kitchen Crockery, Tandoor, Bhatti, BBQ, Griller, Fridge, Exhaust needed for QSR are provided. ",
        },
        { label: "Loan for QSR Franchise is also available." },
      ],
      statsImg: foodStats,
    },
    benefits: {
      list: [
        { label: "Compact and Mobile Setup" },
        { label: "Food Supply from Central Kitchen" },
        { label: "No Location Constraint" },
        { label: "Ultra Modern Design" },
      ],
      details: [
        {
          label:
            "Take your business anywhere with ease! Perfect for busy streets, campuses, offices, and events.",
        },
        {
          label:
            "Enjoy fresh, high-quality meals directly from our central kitchen, no cooking required on-site!",
        },
        {
          label:
            "Go where the crowd is. Your bike goes with you, unlocking earning potential across multiple locations.",
        },
        {
          label: "Ride in style with a modern, eye-catching setup built for both performance and profit.",
        },
      ],
    },
    // stats: {
    //   title:
    //     "Bike Food Carts Are Redefining India’s Street Food Scene",
    //   list: [
    //     {
    //       label:
    //         "The future of food carts in India looks extremely promising, with the market poised for rapid expansion due to rising urbanization, changing consumer preferences, and the low-cost, high-return nature of mobile food businesses.",
    //     },
    //     {
    //       label:
    //         "Currently valued at over ₹500 crore, the mobile food cart segment is expected to grow at a rate of 8–11% annually, aligning with India’s broader street food market, which is projected to reach ₹12 lakh crore by 2030.",
    //     },

    //   ],
    //   image: foodStats,
    // },
    banner: {
      img1: qsrveg,
      img2: qsrnon,
    },
  },
  {
    title: "Cart On Rent",
    sub_title: "Cart",
    franchiseType: "cart",
    slug: "cart-on-rent",
    info: "Promote, influence, and profit with JF’s zero-risk franchise.",
    largeImage: nawabi,
    desc: "Join the JF Influencer Franchise – Where Your Social Influence Turns into a Steady Income Stream with Food Brands, Cashback & 20 Crore+ Products & Services.",
    icon: rent,
    image: rent,
    extraDetails: {
      label: "Franchise Fees",
      fees: "₹2,70,000",
      percent: "6% ROYALTY FROM THE TROLLEY",
      total: "/- +GST",
      price: "₹540000",
      note: "NON-VEG Option also available for all brands",
      list: [
        {
          label: "Compact and Mobile Setup",
          icon: trolleyFranchise,
        },
        { label: "Food Supply from Central Kitchen", icon: trolleyFranchise },
        { label: "No Location Constraint", icon: trolleyFranchise },
        { label: "Ultra Modern Design", icon: trolleyFranchise },
      ],
      details: [
        {
          label:
            "You will be representing Jagdai Foods and can sell its franchise too.",
        },
        { label: "You can also create your own brand." },
        {
          label:
            "Additionally, the unique selling proposition (USP) of our franchise offers the following revenue opportunities",
        },
        {
          label:
            "Kitchen equipment like Kitchen Crockery, Tandoor, Bhatti, BBQ, Griller, Fridge, Exhaust needed for QSR are provided. ",
        },
        { label: "Loan for QSR Franchise is also available." },
      ],
      statsImg: foodStats,
    },
    benefits: {
      list: [
        { label: "Fully branded EV trolley" },
        { label: "Ready to operate setup" },
        { label: "10,000 Sq. ft. Central kitchen support" },
        { label: "Skilled chef prepared food" },
        { label: "Ready-made fresh food supply" },
        { label: "Everything included inside" },
      ],
      details: [
        {
          label:
            "Take your business anywhere with ease! Perfect for busy streets, campuses, offices, and events.",
        },
        {
          label:
            "Enjoy fresh, high-quality meals directly from our central kitchen, no cooking required on-site!",
        },
        {
          label:
            "Go where the crowd is. Your bike goes with you, unlocking earning potential across multiple locations.",
        },
        {
          label: "Ride in style with a modern, eye-catching setup built for both performance and profit.",
        },
      ],
    },
    // stats: {
    //   title:
    //     "Bike Food Carts Are Redefining India’s Street Food Scene",
    //   list: [
    //     {
    //       label:
    //         "The future of food carts in India looks extremely promising, with the market poised for rapid expansion due to rising urbanization, changing consumer preferences, and the low-cost, high-return nature of mobile food businesses.",
    //     },
    //     {
    //       label:
    //         "Currently valued at over ₹500 crore, the mobile food cart segment is expected to grow at a rate of 8–11% annually, aligning with India’s broader street food market, which is projected to reach ₹12 lakh crore by 2030.",
    //     },

    //   ],
    //   image: foodStats,
    // },
    banner: {
      img1: qsrveg,
      img2: qsrnon,
    },
  },
];

export const privacyPolicy = {
  title: "Privacy Policy",
  slug: "privacy-policy",
  desc: "Welcome to the Privacy Policy of Jagdai Foods. This document articulates our commitment to safeguarding your privacy and outlines the procedures for collecting, utilizing, and securing your information. Please carefully review this policy to comprehend our practices.",
  list: [
    {
      id: 1,
      title: " Information Collection",
      info: "We collect information to enhance our services, which may include:",
      data: [
        {
          content:
            "Personal Information: Your name, contact details, job title, and affiliations are gathered through registrations, newsletter subscriptions, and service usage.",
        },
        {
          content:
            "Financial Information: For transactions, we collect financial data (e.g., credit card information) securely, without retention on our servers.",
        },
        {
          content:
            "Technical Information: We automatically collect technical details (IP addresses, browser specifications, device information) to optimize website functionality.",
        },
      ],
    },
    {
      id: 2,
      title: "Purpose of Information Use:            ",
      info: "We use your information for:            ",
      data: [
        {
          content:
            "Service Fulfillment: Personal information is used to respond to inquiries, provide customer support, and fulfill service requests.",
        },
        {
          content:
            "Marketing and Promotions: With your explicit consent, we send marketing communications and promotional content about our products, services, and industry insights.",
        },
        {
          content:
            "Analytics and Enhancement: Non-personal information is analyzed to understand user behavior, preferences, and trends, allowing continuous refinement of our website and services.                    ",
        },
      ],
    },
    {
      id: 3,
      title: "Information Sharing and Disclosure: ",
      info: "We may share your information:",
      data: [
        {
          content:
            "Third-Party Service Providers: Collaboration with providers enhances service delivery and functionality.",
        },
        {
          content:
            "Legal Compliance: Information may be disclosed to comply with applicable laws, regulations, or legal procedures.                    ",
        },
        {
          content:
            "Business Transfers: In mergers, acquisitions, or asset sales, your information may be transferred to the acquiring entity.                    ",
        },
      ],
    },
    {
      id: 4,
      title: "Cookies and Tracking Technologies: ",
      info: "We use cookies and similar technologies: ",
      data: [
        {
          content:
            "Cookies: These help gather insights into browsing behavior, preferences, and session data for a more personalized user experience.                    ",
        },
        {
          content:
            "Opt-Out: You can manage cookie preferences through browser settings, though disabling cookies may impact certain website functionalities.",
        },
      ],
    },
    {
      id: 5,
      title: "Data Security:",
      info: "We implement security measures to protect your information:            ",
      data: [
        {
          content:
            "Security Protocols: Industry-standard measures prevent unauthorized access, disclosure, alteration, and destruction. ",
        },
        {
          content:
            "Encryption: Sensitive data, including financial information, is encrypted for secure transmission and storage.",
        },
      ],
    },
    {
      id: 6,
      title: "Your Rights:",
      info: "You have rights regarding your personal information:",
      data: [
        {
          content:
            "Access and Correction: Contact us to access and correct your personal information.                    ",
        },
        {
          content:
            "Opt-Out: Unsubscribe from marketing communications by following the instructions in our emails or contacting us directly.",
        },
      ],
    },
    {
      id: 7,
      title: `Children's Privacy:`,
      info: "",
      data: [
        {
          content:
            "Our services are not intended for individuals under the age of 16. We do not knowingly collect or process personal information from minors without parental consent.",
        },
      ],
    },
    {
      id: 8,
      title: "Changes to the Privacy Policy:",
      info: "",
      data: [
        {
          content:
            "We reserve the right to update this Privacy Policy periodically. Material changes will be communicated through our website.",
        },
      ],
    },
    {
      id: 9,
      title: "Contact Information:",
      info: "For inquiries or concerns about our Privacy Policy, contact us at contact@ggcs.com.",
      data: [
        // {
        //     content: ""
        // }
        // , {
        //     content: ""
        // },
        // {
        //     content: ""
        // }
      ],
    },
  ],
};

export const disclaimer = {
  title: "Disclaimer",
  desc: `Welcome to the Jagdai Foods Digital Marketing website ("Website"). By accessing and using this Website, you agree to comply with and be bound by the following disclaimer. Please read the disclaimer carefully before using our services.`,
  list: [
    {
      id: 1,
      title: "Accuracy of Information:",
      info: "Jagdai Foods strives to provide accurate and up-to-date information on this Website. However, we make no warranties or representations regarding the accuracy, completeness, or reliability of the information provided. Users are advised to independently verify the information before relying on it.            ",
    },
    {
      id: 2,
      title: "No Professional Advice:",
      info: "The content on this Website is for informational purposes only and should not be construed as professional advice.Jagdai Foods is not responsible for any decisions made based on the information provided on the Website. Users are encouraged to seek professional advice relevant to their specific circumstances.",
    },
    {
      id: 3,
      title: "Third-Party Links",
      info: " This Jagdai Foods website may contain links to third-party websites.Jagdai Foods has no control over the content, accuracy, or availability of these external sites and is not responsible for any damages or losses arising from the use of such links. The inclusion of any third-party link does not imply endorsement by Jagdai Foods.",
    },
    {
      id: 4,
      title: "Limitation of Liability:",
      info: "Jagdai Foods, its affiliates, partners, employees, or agents will not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of our website. This includes but is not limited to loss or damage to data, profits, or business interruption.",
    },
    {
      id: 5,
      title: "Changes and Modifications:",
      info: "Jagdai Foods reserves the right to modify, suspend, or discontinue any aspect of the Website at any time without prior notice. We do not guarantee that the Website will be error-free or uninterrupted.",
    },
    {
      id: 6,
      title: "Privacy and Security:",
      info: "While Jagdai Foods takes reasonable measures to protect user data, we cannot guarantee the security of information transmitted over the Internet. Users are encouraged to review our Privacy Policy for details on data collection, storage, and usage practices.            ",
    },
    {
      id: 7,
      title: "Acceptance of Terms:",
      info: "By using this Website, you acknowledge that you have read, understood, and agree to be bound by this disclaimer.Jagdai Foods reserves the right to update or change these terms at any time without notice.            ",
    },
  ],
  descp1:
    "If you have any questions or concerns about this disclaimer, please contact us at contact@ggcs.com.",
  updated: "This Disclaimer was Last updated on December 10, 2023.",
};

export const termsAndConditions = {
  title: "Terms And Conditions",
  desc: "These Terms and Conditions were Last updated on December 12, 2023.",
  list: [
    {
      id: 1,
      title: "Acceptance of Terms",
      info: `By accessing or using the services provided by Jagdai Foods, you agree to comply with and be bound by the following terms and conditions. If you do not agree to these terms, please refrain from using our services.            `,
    },
    // {
    //     id: 2,
    //     title: "Services",
    //     info: "Jagdai Foods offers digital marketing services, including but not limited to, social media management, search engine optimization, content creation, online advertising, and website development. The specifics of the services provided will be outlined in a separate agreement between Jagdai Foods and the client.            ",
    // },
    {
      id: 3,
      title: "Client Responsibilities",
      info: "Clients must provide accurate and timely information necessary for the delivery of services. Jagdai Foods is not responsible for any delays or deficiencies in service resulting from incomplete or inaccurate client-provided information.            ",
    },
    {
      id: 4,
      title: "Payments and Fees",
      info: "Clients agree to pay Jagdai Foods the fees specified in the service agreement. Payment terms, including due dates and acceptable forms of payment, will be outlined in the agreement. Failure to make timely payments may result in the suspension or termination of services.            ",
    },
    // {
    //     id: 5,
    //     title: "Confidentiality",
    //     info: "Both Jagdai Foods and the client agree to keep confidential any proprietary or sensitive information disclosed during the course of the engagement. This includes but is not limited to business strategies, marketing plans, and financial information.",
    // },
    {
      id: 6,
      title: "Intellectual Property",
      info: "All intellectual property developed or provided by Jagdai Foods in the course of providing services, including but not limited to content, designs, and software, shall remain the property of Jagdai Foods unless otherwise agreed upon in writing.",
    },
    {
      id: 7,
      title: "Termination",
      info: "Either party may terminate the service agreement with written notice if the other party breaches a material term of the agreement. Jagdai Foods reserves the right to terminate services immediately if the client engages in any illegal or unethical activities.",
    },
    {
      id: 8,
      title: "Limitation of Liability",
      info: "Jagdai Foods shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the services provided. Jagdai Foods's total liability shall be limited to the amount paid by the client for the specific services in question.            ",
    },
    {
      id: 9,
      title: "Governing Law",
      info: "These terms and conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms and conditions shall be subject to the exclusive jurisdiction of the courts of Ahmedabad, Gujarat.",
    },
    {
      id: 10,
      title: "Changes to Terms and Conditions",
      info: "Jagdai Foods reserves the right to update or modify these terms and conditions at any time without prior notice. Clients are encouraged to review the terms regularly. Continued use of Jagdai Foods services after any such changes constitutes acceptance of the updated terms.",
    },
  ],
  note: "By using Jagdai Foods services, you acknowledge that you have read, understood, and agreed to these terms and conditions. If you have any questions or concerns, contact@ggcs.com.",
};

export const reelVideos = [
  {
    id: 1,
    linkId: "dfadf",
    title: "Jagdai Foods",
    videoUrl: reel1,
    description: "Ab Gujarat ke food culture ka hissa banne ka sapna pura kijiye Jagdai Foods ke saath! Live counters se lekar cloud kitchen tak, Ahmedabad ka swaad ab aapki pahunch mein hai.Sirf ₹3 lakh mein chuniye apna brand aur shuru kijiye apna food business. Aapka sapna, hamari expertise - milke likhte hain success ki nayi kahani!",
    shortDescription: "Ab Gujarat ke food culture ka hissa banne ka sapna pura kijiye Jagdai Foods ke saath! Live counters se lekar cloud kitchen tak, Ahmedabad ka swaad ab aapki pahunch mein hai.Sirf ₹3 lakh mein chuniye apna brand aur shuru kijiye apna food business. Aapka sapna, hamari expertise - milke likhte hain success ki nayi kahani!",
    likes: 1250,
    comments: 89,
    views: 15600,
    location: "Beverly Hills, CA",
    price: "$4,500,000",
    product: "Aaloo Tikki Chaat",
    projectFeatures: ["Live Video Commerce", "Interactive Product Explorations", "No Distractions", "Fast & Cost Effective", "Seamless Transactions"],
    suitableFor: ["Content Creators", "Influencers", "Media Companies and Broadcasters", "Product-based companies"],
  },
  // {
  //   id: 2,
  //   title: "Jagdai Foods",
  //   videoUrl: vendoHindi1,
  //   description: "Experience the perfect blend of luxury and country living in this expansive estate.",
  //   shortDescription: "Spacious estate combining luxury and countryside charm.",
  //   likes: 1450,
  //   comments: 78,
  //   views: 16700,
  //   location: "Napa Valley, CA",
  //   price: "$6,200,000",
  //   product: "Vendostream",
  //   projectFeatures: ["Live Video Commerce", "Interactive Product Explorations", "No Distractions", "Fast & Cost Effective", "Seamless Transactions"],
  //   suitableFor: ["Content Creators", "Influencers","Media Companies and Broadcasters", "Product-based companies"],
  // },
  {
    id: 3,
    linkId: "lkjkl",
    title: "Jagdai Foods",
    videoUrl: reel2,
    description: "Cooking hai ek responsibility! 🧑‍🍳 Jagdai Foods ke saath apna food business shuru karo, sirf ₹3 lakhs se. Quick Service Restaurant, Food Trolley, ya Internet Restaurant - Choose your model aur apna brand banao!",
    shortDescription: "Cooking hai ek responsibility! 🧑‍🍳 Jagdai Foods ke saath apna food business shuru karo, sirf ₹3 lakhs se. Quick Service Restaurant, Food Trolley, ya Internet Restaurant - Choose your model aur apna brand banao!",
    likes: 980,
    comments: 45,
    views: 12400,
    location: "Manhattan, NY",
    price: "$2,800,000",
    product: "Aaloo Tikki Chaat",
    projectFeatures: ["Live Video Commerce", "Interactive Product Explorations", "No Distractions", "Fast & Cost Effective", "Seamless Transactions"],
    suitableFor: ["Content Creators", "Influencers", "Media Companies and Broadcasters", "Product-based companies"],
  },
  // {
  //   id: 4,
  //   title: "Jagdai Foods",
  //   videoUrl: vendoHindi2,
  //   description: "Experience the perfect blend of luxury and country living in this expansive estate.",
  //   shortDescription: "Spacious estate combining luxury and countryside charm.",
  //   likes: 1450,
  //   comments: 78,
  //   views: 16700,
  //   location: "Napa Valley, CA",
  //   price: "$6,200,000",
  //   product: "Vendostream",
  //   projectFeatures: ["Live Video Commerce", "Interactive Product Explorations", "No Distractions", "Fast & Cost Effective", "Seamless Transactions"],
  //   suitableFor: ["Content Creators", "Influencers","Media Companies and Broadcasters", "Product-based companies"],
  // },
  {
    id: 5,
    linkId: "ewrew",
    title: "Jagdai Foods",
    videoUrl: reel3,
    description: "Dreaming of owning a food franchise? Hold up! Before diving in, make sure to check these must-know points. From operational size to digital integration, and central kitchen efficiency to brand reputation—get the full picture or risk running into roadblocks! 📊💼 Remember, the right franchise isn't just about profits, it's about long-term growth and support. Choose wisely, grow smartly! ",
    shortDescription: "Dreaming of owning a food franchise? Hold up! Before diving in, make sure to check these must-know points. From operational size to digital integration, and central kitchen efficiency to brand reputation—get the full picture or risk running into roadblocks! 📊💼 Remember, the right franchise isn't just about profits, it's about long-term growth and support. Choose wisely, grow smartly! ",
    likes: 2100,
    comments: 156,
    views: 28900,
    location: "Miami Beach, FL",
    price: "$3,200,000",
    product: "Aaloo Tikki Chaat",
    projectFeatures: ["Live Video Commerce", "Interactive Product Explorations", "No Distractions", "Fast & Cost Effective", "Seamless Transactions"],
    suitableFor: ["Content Creators", "Influencers", "Media Companies and Broadcasters", "Product-based companies"],
  },
  // {
  //   id: 6,
  //   title: "Jagdai Foods",
  //   videoUrl: vendoHindi3,
  //   description: "Experience the perfect blend of luxury and country living in this expansive estate.",
  //   shortDescription: "Spacious estate combining luxury and countryside charm.",
  //   likes: 1450,
  //   comments: 78,
  //   views: 16700,
  //   location: "Napa Valley, CA",
  //   price: "$6,200,000",
  //   product: "Vendostream",
  //   projectFeatures: ["License", "Subscription", "Enterprise", "Modules", "Shared"],
  //   suitableFor: ["Small Business", "Startups", "Agencies", "Enterprises", "Freelancers"],
  // },
  {
    id: 7,
    linkId: "oieji",
    title: "Jagdai Foods",
    videoUrl: reel4,
    description: "Food franchise lena mehenga padega” — yeh sirf ek myth hai! Jagdai Foods ke saath apna food business shuru karo — simple, smart aur solid! ✅ Proven model ✅ Trusted brand ✅ Low investment Call: +91 88663 73077 Visit: jagdaifoods.com Follow @jagdaifoods & start your journey!",
    shortDescription: "Food franchise lena mehenga padega” — yeh sirf ek myth hai! Jagdai Foods ke saath apna food business shuru karo — simple, smart aur solid! ✅ Proven model ✅ Trusted brand ✅ Low investment Call: +91 88663 73077 Visit: jagdaifoods.com Follow @jagdaifoods & start your journey!",
    likes: 1750,
    comments: 92,
    views: 19800,
    location: "Aspen, CO",
    price: "$5,800,000",
    product: "Aaloo Tikki Chaat",
    projectFeatures: ["License", "Subscription", "Enterprise", "Modules", "Shared"],
    suitableFor: ["Small Business", "Startups", "Agencies", "Enterprises", "Freelancers"],
  },
  // {
  //   id: 8,
  //   title: "Jagdai Foods",
  //   videoUrl: vendoHindi4,
  //   description: "Experience the perfect blend of luxury and country living in this expansive estate.",
  //   shortDescription: "Spacious estate combining luxury and countryside charm.",
  //   likes: 1450,
  //   comments: 78,
  //   views: 16700,
  //   location: "Napa Valley, CA",
  //   price: "$6,200,000",
  //   product: "Vendostream",
  //   projectFeatures: ["License", "Subscription", "Enterprise", "Modules", "Shared"],
  //   suitableFor: ["Small Business", "Startups", "Agencies", "Enterprises", "Freelancers"],
  // },
  {
    id: 9,
    linkId: "asdfg",
    title: "Jagdai Foods",
    videoUrl: reel5,
    description: "Have you ever dreamed of owning a business under a trusted brand name? FOFO stands for Franchise Owned, Franchise Operated model. This means you own and manage everything under the trusted name of Jagdai Foods, giving you the following: ✅ The power of a well-established reputation. ✅ Freedom to run operations your way! It’s the perfect blend of independence and brand trust, allowing you to grow your business confidently. Contact us at: +91 88663 73077 jagdaifoods.com",
    shortDescription: "Have you ever dreamed of owning a business under a trusted brand name? FOFO stands for Franchise Owned, Franchise Operated model. This means you own and manage everything under the trusted name of Jagdai Foods, giving you the following: ✅ The power of a well-established reputation. ✅ Freedom to run operations your way! It’s the perfect blend of independence and brand trust, allowing you to grow your business confidently. Contact us at: +91 88663 73077 jagdaifoods.com",
    likes: 890,
    comments: 67,
    views: 11200,
    location: "Chicago, IL",
    price: "$1,950,000",
    product: "Aaloo Tikki Chaat",
    projectFeatures: ["License", "Subscription", "Enterprise", "Modules", "Shared"],
    suitableFor: ["Small Business", "Startups", "Agencies", "Enterprises", "Freelancers"],
  },
  // {
  //   id: 10,
  //   title: "Jagdai Foods",
  //   videoUrl: vendoHindi5,
  //   description: "Experience the perfect blend of luxury and country living in this expansive estate.",
  //   shortDescription: "Spacious estate combining luxury and countryside charm.",
  //   likes: 1450,
  //   comments: 78,
  //   views: 1670,
  //   location: "Napa Valley, CA",
  //   price: "$6,200,000",
  //   product: "Vendostream",
  //   projectFeatures: ["License", "Subscription", "Enterprise", "Modules", "Shared"],
  //   suitableFor: ["Small Business", "Startups", "Agencies", "Enterprises", "Freelancers"],
  // },
  // {
  //   id: 11,
  //   title: "Jagdai Foods",
  //   description: "Experience the epitome of luxury living in this stunning villa featuring modern architecture and breathtaking views.",
  //   shortDescription: "Luxury villa with modern design and stunning views.",
  //   likes: 1250,
  //   comments: 89,
  //   videoUrl: edusphereEnglish1,
  //   location: "Beverly Hills, CA",
  //   price: "$4,500,000",
  //   product: "Edusphere",
  //   projectFeatures: ["License", "Subscription", "Enterprise", "Modules", "Shared"],
  //   suitableFor: ["Small Business", "Startups", "Agencies", "Enterprises", "Freelancers"],
  // },
  // {
  //   id: 12,
  //   title: "Jagdai Foods",
  //   videoUrl: edusphereEnglish2,
  //   description: "Step into contemporary elegance with this beautifully designed apartment in the heart of the city.",
  //   shortDescription: "Elegant, modern apartment in city center.",
  //   likes: 980,
  //   comments: 45,
  //   views: 12400,
  //   location: "Manhattan, NY",
  //   price: "$2,800,000",
  //   product: "Edusphere",
  //   projectFeatures: ["License", "Subscription", "Enterprise", "Modules", "Shared"],
  //   suitableFor: ["Small Business", "Startups", "Agencies", "Enterprises", "Freelancers"],
  // },
  // {
  //   id: 13,
  //   title: "Jagdai Foods",
  //   videoUrl: edusphereEnglish3,
  //   description: "Your dream beachfront property awaits with panoramic ocean views and direct beach access.",
  //   shortDescription: "Beachfront home with ocean views and direct access.",
  //   likes: 2100,
  //   comments: 156,
  //   views: 28900,
  //   location: "Miami Beach, FL",
  //   price: "$3,200,000",
  //   product: "Edusphere",
  //   projectFeatures: ["License", "Subscription", "Enterprise", "Modules", "Shared"],
  //   suitableFor: ["Small Business", "Startups", "Agencies", "Enterprises", "Freelancers"],
  // },
  // {
  //   id: 14,
  //   title: "Jagdai Foods",
  //   videoUrl: edusphereEnglish4,
  //   description: "Escape to this magnificent mountain estate offering privacy and stunning natural surroundings.",
  //   shortDescription: "Private mountain estate with breathtaking nature views.",
  //   likes: 1750,
  //   comments: 92,
  //   views: 19800,
  //   location: "Aspen, CO",
  //   price: "$5,800,000",
  //   product: "Edusphere",
  //   projectFeatures: ["License", "Subscription", "Enterprise", "Modules", "Shared"],
  //   suitableFor: ["Small Business", "Startups", "Agencies", "Enterprises", "Freelancers"],
  // },
  // {
  //   id: 15,
  //   title: "Jagdai Foods",
  //   videoUrl: edusphereEnglish5,
  //   description: "Discover urban sophistication in this converted industrial loft with high ceilings and modern amenities.",
  //   shortDescription: "Industrial loft with high ceilings and modern features.",
  //   likes: 890,
  //   comments: 67,
  //   views: 11200,
  //   location: "Chicago, IL",
  //   price: "$1,950,000",
  //   product: "Edusphere",
  //   projectFeatures: ["License", "Subscription", "Enterprise", "Modules", "Shared"],
  //   suitableFor: ["Small Business", "Startups", "Agencies", "Enterprises", "Freelancers"],
  // },
  // {
  //   id: 16,
  //   title: "Jagdai Foods",
  //   videoUrl: edusphereHindi1,
  //   description: "Discover urban sophistication in this converted industrial loft with high ceilings and modern amenities.",
  //   shortDescription: "Industrial loft with high ceilings and modern features.",
  //   likes: 890,
  //   comments: 67,
  //   views: 11200,
  //   location: "Chicago, IL",
  //   price: "$1,950,000",
  //   product: "Edusphere",
  //   projectFeatures: ["License", "Subscription", "Enterprise", "Modules", "Shared"],
  //   suitableFor: ["Small Business", "Startups", "Agencies", "Enterprises", "Freelancers"],
  // },
  // {
  //   id: 17,
  //   title: "Jagdai Foods",
  //   videoUrl: edusphereHindi2,
  //   description: "Discover urban sophistication in this converted industrial loft with high ceilings and modern amenities.",
  //   shortDescription: "Industrial loft with high ceilings and modern features.",
  //   likes: 890,
  //   comments: 67,
  //   views: 11200,
  //   location: "Chicago, IL",
  //   price: "$1,950,000",
  //   product: "Edusphere",
  //   projectFeatures: ["License", "Subscription", "Enterprise", "Modules", "Shared"],
  //   suitableFor: ["Small Business", "Startups", "Agencies", "Enterprises", "Freelancers"],
  // },
  // {
  //   id: 18,
  //   title: "Jagdai Foods",
  //   videoUrl: edusphereHindi3,
  //   description: "Discover urban sophistication in this converted industrial loft with high ceilings and modern amenities.",
  //   shortDescription: "Industrial loft with high ceilings and modern features.",
  //   likes: 890,
  //   comments: 67,
  //   views: 11200,
  //   location: "Chicago, IL",
  //   price: "$1,950,000",
  //   product: "Edusphere",
  //   projectFeatures: ["License", "Subscription", "Enterprise", "Modules", "Shared"],
  //   suitableFor: ["Small Business", "Startups", "Agencies", "Enterprises", "Freelancers"],
  // },
  // {
  //   id: 19,
  //   title: "Jagdai Foods",
  //   videoUrl: edusphereHindi4,
  //   description: "Discover urban sophistication in this converted industrial loft with high ceilings and modern amenities.",
  //   shortDescription: "Industrial loft with high ceilings and modern features.",
  //   likes: 890,
  //   comments: 67,
  //   views: 11200,
  //   location: "Chicago, IL",
  //   price: "$1,950,000",
  //   product: "Edusphere",
  //   projectFeatures: ["License", "Subscription", "Enterprise", "Modules", "Shared"],
  //   suitableFor: ["Small Business", "Startups", "Agencies", "Enterprises", "Freelancers"],
  // },
  // {
  //   id: 20,
  //   title: "Jagdai Foods",
  //   videoUrl: edusphereHindi5,
  //   description: "Discover urban sophistication in this converted industrial loft with high ceilings and modern amenities.",
  //   shortDescription: "Industrial loft with high ceilings and modern features.",
  //   likes: 890,
  //   comments: 67,
  //   views: 11200,
  //   location: "Chicago, IL",
  //   price: "$1,950,000",
  //   product: "Edusphere",
  //   projectFeatures: ["License", "Subscription", "Enterprise", "Modules", "Shared"],
  //   suitableFor: ["Small Business", "Startups", "Agencies", "Enterprises", "Freelancers"],
  // },
  // {
  //   id: 21,
  //   title: "Jagdai Foods",
  //   videoUrl: edusphereHindi6,
  //   description: "Discover urban sophistication in this converted industrial loft with high ceilings and modern amenities.",
  //   shortDescription: "Industrial loft with high ceilings and modern features.",
  //   likes: 890,
  //   comments: 67,
  //   views: 11200,
  //   location: "Chicago, IL",
  //   price: "$1,950,000",
  //   product: "Edusphere",
  //   projectFeatures: ["License", "Subscription", "Enterprise", "Modules", "Shared"],
  //   suitableFor: ["Small Business", "Startups", "Agencies", "Enterprises", "Freelancers"],
  // },
  {
    id: 22,
    linkId: "opwed",
    title: "Jagdai Foods",
    videoUrl: reel6,
    description: "Choose your franchise wisely! Make the right decision for growth, higher earnings, and brand support. Take a step that aligns with your vision and business goals.",
    shortDescription: "Choose your franchise wisely! Make the right decision for growth, higher earnings, and brand support. Take a step that aligns with your vision and business goals.",
    likes: 890,
    comments: 67,
    views: 11200,
    location: "Chicago, IL",
    price: "$1,950,000",
    product: "Aaloo Tikki Chaat",
    projectFeatures: ["Inventory Management", "Marketing & Reward System", "Real-Time Analytics & Reporting", "Reduce Working Capital"],
    suitableFor: ["Small Businesses", "Communities", "Business Network", "Shop Owners"],
  },
  {
    id: 22,
    linkId: "opwed",
    title: "Jagdai Foods",
    videoUrl: reel7,
    description: "Start Your Own Food Franchise with Jagdai Foods! Ever dreamed of running your own food business? Now’s your chance! Jagdai Foods provides everything—from QSR setup to Tandoor, BBQ Grill & all essential equipment! Big dreams need the right support, and we make it simple & hassle-free! Be your own boss, serve delicious food, and build a thriving business. Contact us at: +91 88663 73077 jagdaifoods.com",
    shortDescription: "Start Your Own Food Franchise with Jagdai Foods! Ever dreamed of running your own food business? Now’s your chance! Jagdai Foods provides everything—from QSR setup to Tandoor, BBQ Grill & all essential equipment! Big dreams need the right support, and we make it simple & hassle-free! Be your own boss, serve delicious food, and build a thriving business. Contact us at: +91 88663 73077 jagdaifoods.com",
    likes: 890,
    comments: 67,
    views: 11200,
    location: "Chicago, IL",
    price: "$1,950,000",
    product: "Aaloo Tikki Chaat",
    projectFeatures: ["Inventory Management", "Marketing & Reward System", "Real-Time Analytics & Reporting", "Reduce Working Capital"],
    suitableFor: ["Small Businesses", "Communities", "Business Network", "Shop Owners"],
  },
  {
    id: 22,
    linkId: "opwed",
    title: "Jagdai Foods",
    videoUrl: reel8,
    description: "Street food vibes. 5-star standards. One powerful franchise. Dilli By Heart, backed by Jagdai Foods, gives you the chance to own a food business full of flavour, love, and opportunity. One franchise. Multiple brands. Endless growth. Call: +91 88663 73077 Visit: jagdaifoods.com Follow me for more food business tips & inspiring journeys!",
    shortDescription: "Street food vibes. 5-star standards. One powerful franchise. Dilli By Heart, backed by Jagdai Foods, gives you the chance to own a food business full of flavour, love, and opportunity. One franchise. Multiple brands. Endless growth. Call: +91 88663 73077 Visit: jagdaifoods.com Follow me for more food business tips & inspiring journeys!",
    likes: 890,
    comments: 67,
    views: 11200,
    location: "Chicago, IL",
    price: "$1,950,000",
    product: "Aaloo Tikki Chaat",
    projectFeatures: ["Inventory Management", "Marketing & Reward System", "Real-Time Analytics & Reporting", "Reduce Working Capital"],
    suitableFor: ["Small Businesses", "Communities", "Business Network", "Shop Owners"],
  },
  {
    id: 23,
    linkId: "opwed",
    title: "Jagdai Foods",
    videoUrl: reel9,
    description: "𝐑𝐞𝐯𝐨𝐥𝐮𝐭𝐢𝐨𝐧𝐢𝐳𝐞 𝐘𝐨𝐮𝐫 𝐅𝐨𝐨𝐝 𝐁𝐮𝐬𝐢𝐧𝐞𝐬𝐬 𝐰𝐢𝐭𝐡 𝐉𝐚𝐠𝐝𝐚𝐢 𝐅𝐨𝐨𝐝𝐬! Welcome to Ahmedabad’s biggest 10,000 sq. ft. cloud kitchen, where we don’t just sell franchises—we bring you into the world of sustainable 𝐟𝐨𝐨𝐝 𝐛𝐮𝐬𝐢𝐧𝐞𝐬𝐬. 𝐖𝐡𝐲 𝐂𝐡𝐨𝐨𝐬𝐞 𝐉𝐚𝐠𝐝𝐚𝐢 𝐅𝐨𝐨𝐝𝐬? ✔️ 𝐔𝐧𝐦𝐚𝐭𝐜𝐡𝐞𝐝 𝐈𝐧𝐟𝐫𝐚𝐬𝐭𝐫𝐮𝐜𝐭𝐮𝐫𝐞: Handle bulk catering and party orders effortlessly ✔️𝐎𝐰𝐧 𝐘𝐨𝐮𝐫 𝐁𝐫𝐚𝐧𝐝: The only franchise that helps you build your identity ✔️ 𝐓𝐨𝐩-𝐍𝐨𝐭𝐜𝐡 𝐐𝐮𝐚𝐥𝐢𝐭𝐲: Stainless steel utensils ensure premium taste and safety 𝐂𝐡𝐨𝐨𝐬𝐞 𝐘𝐨𝐮𝐫 𝐅𝐫𝐚𝐧𝐜𝐡𝐢𝐬𝐞 𝐌𝐨𝐝𝐞𝐥: ➡️ 𝐐𝐒𝐑: Quick Service Restaurant with Zomato & Swiggy benefits ➡️ 𝐈𝐧𝐭𝐞𝐫𝐧𝐞𝐭 𝐅𝐫𝐚𝐧𝐜𝐡𝐢𝐬𝐞: Cost-effective, no rent or salaries ➡️ 𝐓𝐫𝐨𝐥𝐥𝐞𝐲 𝐅𝐫𝐚𝐧𝐜𝐡𝐢𝐬𝐞: Affordable and flexible options 𝐒𝐩𝐞𝐜𝐢𝐚𝐥 𝐁𝐞𝐧𝐞𝐟𝐢𝐭𝐬: 🎁 𝐅𝐑𝐄𝐄 𝐔𝐏𝐎𝐒 𝐃𝐢𝐠𝐢𝐭𝐚𝐥 𝐌𝐚𝐥𝐥: Sell 20 crore+ products & services 🎁 CashAqua SIS Franchise included 🎁 Add Tapri ki Tafri for just ₹1 lakh 📈 Maximize Revenue: Supply trolleys, franchises, and more to earn 10% royalty—because it’s not just about food, it’s about profits too! 📞 Ready to Begin? Contact us at: +91 88663 73077 jagdaifoods.com",
    shortDescription: "𝐑𝐞𝐯𝐨𝐥𝐮𝐭𝐢𝐨𝐧𝐢𝐳𝐞 𝐘𝐨𝐮𝐫 𝐅𝐨𝐨𝐝 𝐁𝐮𝐬𝐢𝐧𝐞𝐬𝐬 𝐰𝐢𝐭𝐡 𝐉𝐚𝐠𝐝𝐚𝐢 𝐅𝐨𝐨𝐝𝐬! Welcome to Ahmedabad’s biggest 10,000 sq. ft. cloud kitchen, where we don’t just sell franchises—we bring you into the world of sustainable 𝐟𝐨𝐨𝐝 𝐛𝐮𝐬𝐢𝐧𝐞𝐬𝐬. 𝐖𝐡𝐲 𝐂𝐡𝐨𝐨𝐬𝐞 𝐉𝐚𝐠𝐝𝐚𝐢 𝐅𝐨𝐨𝐝𝐬? ✔️ 𝐔𝐧𝐦𝐚𝐭𝐜𝐡𝐞𝐝 𝐈𝐧𝐟𝐫𝐚𝐬𝐭𝐫𝐮𝐜𝐭𝐮𝐫𝐞: Handle bulk catering and party orders effortlessly ✔️𝐎𝐰𝐧 𝐘𝐨𝐮𝐫 𝐁𝐫𝐚𝐧𝐝: The only franchise that helps you build your identity ✔️ 𝐓𝐨𝐩-𝐍𝐨𝐭𝐜𝐡 𝐐𝐮𝐚𝐥𝐢𝐭𝐲: Stainless steel utensils ensure premium taste and safety 𝐂𝐡𝐨𝐨𝐬𝐞 𝐘𝐨𝐮𝐫 𝐅𝐫𝐚𝐧𝐜𝐡𝐢𝐬𝐞 𝐌𝐨𝐝𝐞𝐥: ➡️ 𝐐𝐒𝐑: Quick Service Restaurant with Zomato & Swiggy benefits ➡️ 𝐈𝐧𝐭𝐞𝐫𝐧𝐞𝐭 𝐅𝐫𝐚𝐧𝐜𝐡𝐢𝐬𝐞: Cost-effective, no rent or salaries ➡️ 𝐓𝐫𝐨𝐥𝐥𝐞𝐲 𝐅𝐫𝐚𝐧𝐜𝐡𝐢𝐬𝐞: Affordable and flexible options 𝐒𝐩𝐞𝐜𝐢𝐚𝐥 𝐁𝐞𝐧𝐞𝐟𝐢𝐭𝐬: 🎁 𝐅𝐑𝐄𝐄 𝐔𝐏𝐎𝐒 𝐃𝐢𝐠𝐢𝐭𝐚𝐥 𝐌𝐚𝐥𝐥: Sell 20 crore+ products & services 🎁 CashAqua SIS Franchise included 🎁 Add Tapri ki Tafri for just ₹1 lakh 📈 Maximize Revenue: Supply trolleys, franchises, and more to earn 10% royalty—because it’s not just about food, it’s about profits too! 📞 Ready to Begin? Contact us at: +91 88663 73077 jagdaifoods.com",
    likes: 890,
    comments: 67,
    views: 11200,
    location: "Chicago, IL",
    price: "$1,950,000",
    product: "Aaloo Tikki Chaat",
    projectFeatures: ["Inventory Management", "Marketing & Reward System", "Real-Time Analytics & Reporting", "Reduce Working Capital"],
    suitableFor: ["Small Businesses", "Communities", "Business Network", "Shop Owners"],
  },
]

export const sliderCategories = [
  {
    id: 1,
    label: "Promotional Content",
    value: "promotional_content",
    videoUrls: [

      "https://www.youtube.com/embed/uZZcDUDmhwc?mute=1&loop=1&playlist=uZZcDUDmhwc&controls=1&rel=0",




      "https://www.youtube.com/embed/KRCMTk4TAGo?mute=1&loop=1&playlist=KRCMTk4TAGo&controls=1&rel=0",
      "https://www.youtube.com/embed/WFBNj7c2Rhs?mute=1&loop=1&playlist=WFBNj7c2Rhs&controls=1&rel=0",
      "https://www.youtube.com/embed/sWAZsqbevDQ?mute=1&loop=1&playlist=sWAZsqbevDQ&controls=1&rel=0",
      "https://www.youtube.com/embed/Jl6NdvkUMcM?mute=1&loop=1&playlist=Jl6NdvkUMcM&controls=1&rel=0",
      "https://www.youtube.com/embed/VzAlZWseRS0?mute=1&loop=1&playlist=VzAlZWseRS0&controls=1&rel=0",
      "https://www.youtube.com/embed/sL06r42kLgo?mute=1&loop=1&playlist=sL06r42kLgo&controls=1&rel=0",
      "https://www.youtube.com/embed/dmAfo7GvCX8?mute=1&loop=1&playlist=dmAfo7GvCX8&controls=1&rel=0",
      "https://www.youtube.com/embed/gSiW_XjcBKc?mute=1&loop=1&playlist=gSiW_XjcBKc&controls=1&rel=0",


      "https://www.youtube.com/embed/U3wnNjGl4cM?mute=1&loop=1&playlist=U3wnNjGl4cM&controls=1&rel=0",
      "https://www.youtube.com/embed/0H1_zQFrBCA?mute=1&loop=1&playlist=0H1_zQFrBCA&controls=1&rel=0",
      "https://www.youtube.com/embed/bzM5XG7VyH4?mute=1&loop=1&playlist=bzM5XG7VyH4&controls=1&rel=0",
      "https://www.youtube.com/embed/6CD2QB-pjtg?mute=1&loop=1&playlist=6CD2QB-pjtg&controls=1&rel=0",
      "https://www.youtube.com/embed/IWN1A3M0FiQ?mute=1&loop=1&playlist=IWN1A3M0FiQ&controls=1&rel=0",
      "https://www.youtube.com/embed/riAnR7Mp8zg?mute=1&loop=1&playlist=riAnR7Mp8zg&controls=1&rel=0",
      "https://www.youtube.com/embed/tJvXpjYzmZc?mute=1&loop=1&playlist=tJvXpjYzmZc&controls=1&rel=0",
      "https://www.youtube.com/embed/McU3OBYGbYY?mute=1&loop=1&playlist=McU3OBYGbYY&controls=1&rel=0",
      "https://www.youtube.com/embed/EaD-8FssKIs?mute=1&loop=1&playlist=EaD-8FssKIs&controls=1&rel=0",
      "https://www.youtube.com/embed/MtvyksngqBQ?mute=1&loop=1&playlist=MtvyksngqBQ&controls=1&rel=0",
      "https://www.youtube.com/embed/p1HM4b3MOU8?mute=1&loop=1&playlist=p1HM4b3MOU8&controls=1&rel=0",
      "https://www.youtube.com/embed/gmaA3J8d83A?mute=1&loop=1&playlist=gmaA3J8d83A&controls=1&rel=0",
      "https://www.youtube.com/embed/S1UXByX7Vlg?mute=1&loop=1&playlist=S1UXByX7Vlg&controls=1&rel=0",
      "https://www.youtube.com/embed/7zicGxBq5Ok?mute=1&loop=1&playlist=7zicGxBq5Ok&controls=1&rel=0",
      "https://www.youtube.com/embed/XyzqncjqCVc?mute=1&loop=1&playlist=XyzqncjqCVc&controls=1&rel=0",
      "https://www.youtube.com/embed/l6Y_K8PIdqs?mute=1&loop=1&playlist=l6Y_K8PIdqs&controls=1&rel=0",
      "https://www.youtube.com/embed/ulPY_tpFBbg?mute=1&loop=1&playlist=ulPY_tpFBbg&controls=1&rel=0",
      "https://www.youtube.com/embed/L6eElPYW-vM?mute=1&loop=1&playlist=L6eElPYW-vM&controls=1&rel=0",
      "https://www.youtube.com/embed/kQkj5SzENQY?mute=1&loop=1&playlist=kQkj5SzENQY&controls=1&rel=0",
      "https://www.youtube.com/embed/D3M_mKCzIlo?mute=1&loop=1&playlist=D3M_mKCzIlo&controls=1&rel=0",
      "https://www.youtube.com/embed/DzPXin4GQ2U?mute=1&loop=1&playlist=DzPXin4GQ2U&controls=1&rel=0",
      "https://www.youtube.com/embed/TJ-9hYeRbyk?mute=1&loop=1&playlist=TJ-9hYeRbyk&controls=1&rel=0",
      "https://www.youtube.com/embed/WFBNj7c2Rhs?mute=1&loop=1&playlist=WFBNj7c2Rhs&controls=1&rel=0",
      "https://www.youtube.com/embed/Mxq_RNmhaAg?mute=1&loop=1&playlist=Mxq_RNmhaAg&controls=1&rel=0",
      "https://www.youtube.com/embed/tZOy9o7TgoM?mute=1&loop=1&playlist=tZOy9o7TgoM&controls=1&rel=0",
      "https://www.youtube.com/embed/wWS_73FMDYQ?mute=1&loop=1&playlist=wWS_73FMDYQ&controls=1&rel=0",
      "https://www.youtube.com/embed/AxXCDxiL8Ak?mute=1&loop=1&playlist=AxXCDxiL8Ak&controls=1&rel=0",
      "https://www.youtube.com/embed/ajbHfjAx7lU?mute=1&loop=1&playlist=ajbHfjAx7lU&controls=1&rel=0",
      "https://www.youtube.com/embed/4yW-n6FBS3w?mute=1&loop=1&playlist=4yW-n6FBS3w&controls=1&rel=0",
    ],
  },
  {
    id: 2,
    label: "AI Generated Content",
    value: "ai_generated_content",
    videoUrls: [
      "https://www.youtube.com/embed/5HZzrN7pInw?mute=1&loop=1&playlist=5HZzrN7pInw&controls=1&rel=0",
      "https://www.youtube.com/embed/ZLwEv0JzYdQ?mute=1&loop=1&playlist=ZLwEv0JzYdQ&controls=1&rel=0",
      "https://www.youtube.com/embed/YNeAR5yKp6Q?mute=1&loop=1&playlist=YNeAR5yKp6Q&controls=1&rel=0",
      "https://www.youtube.com/embed/cyFfNlzBtV4?mute=1&loop=1&playlist=cyFfNlzBtV4&controls=1&rel=0",
      "https://www.youtube.com/embed/ZLwEv0JzYdQ?mute=1&loop=1&playlist=ZLwEv0JzYdQ&controls=1&rel=0",
      "https://www.youtube.com/embed/YNeAR5yKp6Q?mute=1&loop=1&playlist=YNeAR5yKp6Q&controls=1&rel=0",
      "https://www.youtube.com/embed/aHmYpUMRlY8?mute=1&loop=1&playlist=aHmYpUMRlY8&controls=1&rel=0",
    ],

  },
  {
    id: 3,
    label: "Food Making",
    value: "food_making",
    videoUrls: [






      "https://www.youtube.com/embed/p0RmDevoqp0?mute=1&loop=1&playlist=p0RmDevoqp0&controls=1&rel=0",

      "https://www.youtube.com/embed/D9sFqC_QyKU?mute=1&loop=1&playlist=D9sFqC_QyKU&controls=1&rel=0",
      "https://www.youtube.com/embed/PNIoArEXztE?mute=1&loop=1&playlist=PNIoArEXztE&controls=1&rel=0",

      "https://www.youtube.com/embed/m-QV8GVuUM8?mute=1&loop=1&playlist=m-QV8GVuUM8&controls=1&rel=0",
      "https://www.youtube.com/embed/QovnYTrzHO0?mute=1&loop=1&playlist=QovnYTrzHO0&controls=1&rel=0",

      "https://www.youtube.com/embed/D9sFqC_QyKU?mute=1&loop=1&playlist=D9sFqC_QyKU&controls=1&rel=0",
      "https://www.youtube.com/embed/D3M_mKCzIlo?mute=1&loop=1&playlist=D3M_mKCzIlo&controls=1&rel=0",
      "https://www.youtube.com/embed/QovnYTrzHO0?mute=1&loop=1&playlist=QovnYTrzHO0&controls=1&rel=0",
      "https://www.youtube.com/embed/m-QV8GVuUM8?mute=1&loop=1&playlist=m-QV8GVuUM8&controls=1&rel=0",
      "https://www.youtube.com/embed/PNIoArEXztE?mute=1&loop=1&playlist=PNIoArEXztE&controls=1&rel=0",
      "https://www.youtube.com/embed/N2rytkiHOwc?mute=1&loop=1&playlist=N2rytkiHOwc&controls=1&rel=0",
      "https://www.youtube.com/embed/T1aZ8jh18SY?mute=1&loop=1&playlist=T1aZ8jh18SY&controls=1&rel=0",

    ],

  },
  {
    id: 4,
    label: "Animated Content",
    value: "animated_content",
    videoUrls: [
      "https://www.youtube.com/embed/pmeow8itJuk?mute=1&loop=1&playlist=pmeow8itJuk&controls=1&rel=0",
      "https://www.youtube.com/embed/XAVpgu_cCD4?mute=1&loop=1&playlist=XAVpgu_cCD4&controls=1&rel=0",
      "https://www.youtube.com/embed/4iCqACik1O8?mute=1&loop=1&playlist=4iCqACik1O8&controls=1&rel=0",
      "https://www.youtube.com/embed/qYGvyCEuPDM?mute=1&loop=1&playlist=qYGvyCEuPDM&controls=1&rel=0",
      "https://www.youtube.com/embed/-rHsFEsVpHs?mute=1&loop=1&playlist=-rHsFEsVpHs&controls=1&rel=0",
      "https://www.youtube.com/embed/fP50_rtN1-A?mute=1&loop=1&playlist=fP50_rtN1-A&controls=1&rel=0",
      "https://www.youtube.com/embed/pphw_75dhTw?mute=1&loop=1&playlist=pphw_75dhTw&controls=1&rel=0",
    ],

  },
  {
    id: 5,
    label: "Influencer / Model Content",
    value: "influencer_content",
    videoUrls: [
      "https://www.youtube.com/embed/RGoXm-rwXbk?mute=1&loop=1&playlist=RGoXm-rwXbk&controls=1&rel=0",
      "https://www.youtube.com/embed/qfCzgkVdHiM?mute=1&loop=1&playlist=qfCzgkVdHiM&controls=1&rel=0",
      "https://www.youtube.com/embed/JHBpywpLRlE?mute=1&loop=1&playlist=JHBpywpLRlE&controls=1&rel=0",
      "https://www.youtube.com/embed/5bCIihKa6iw?mute=1&loop=1&playlist=5bCIihKa6iw&controls=1&rel=0",
      "https://www.youtube.com/embed/745E3zEpJlw?mute=1&loop=1&playlist=745E3zEpJlw&controls=1&rel=0",
      "https://www.youtube.com/embed/5bCIihKa6iw?mute=1&loop=1&playlist=5bCIihKa6iw&controls=1&rel=0",
      "https://www.youtube.com/embed/JHBpywpLRlE?mute=1&loop=1&playlist=JHBpywpLRlE&controls=1&rel=0",
    ],

  },
  {
    id: 6,
    label: "Food Recipes Content",
    value: "food_recipes_content",
    videoUrls: [
      "https://www.youtube.com/embed/JxP3Mg0XxAU?mute=1&loop=1&playlist=JxP3Mg0XxAU&controls=1&rel=0",
      "https://www.youtube.com/embed/TF_5U9inUjo?mute=1&loop=1&playlist=TF_5U9inUjo&controls=1&rel=0",
      "https://www.youtube.com/embed/UAFDs32_i6E?mute=1&loop=1&playlist=UAFDs32_i6E&controls=1&rel=0",
      "https://www.youtube.com/embed/JxP3Mg0XxAU?mute=1&loop=1&playlist=JxP3Mg0XxAU&controls=1&rel=0",
      "https://www.youtube.com/embed/TF_5U9inUjo?mute=1&loop=1&playlist=TF_5U9inUjo&controls=1&rel=0",
      "https://www.youtube.com/embed/UAFDs32_i6E?mute=1&loop=1&playlist=UAFDs32_i6E&controls=1&rel=0",
      "https://www.youtube.com/embed/T516uyTQ0nY?mute=1&loop=1&playlist=T516uyTQ0nY&controls=1&rel=0",
    ],

  },
  {
    id: 7,
    label: "Founder's Desk",
    value: "founders_desk",
    videoUrls: [
      "https://www.youtube.com/embed/m-Oq3X4LAlI?mute=1&loop=1&playlist=m-Oq3X4LAlI&controls=1&rel=0",
      "https://www.youtube.com/embed/Y_l2aMk2SWE?mute=1&loop=1&playlist=Y_l2aMk2SWE&controls=1&rel=0",
      "https://www.youtube.com/embed/m-Oq3X4LAlI?mute=1&loop=1&playlist=m-Oq3X4LAlI&controls=1&rel=0",
      "https://www.youtube.com/embed/Y_l2aMk2SWE?mute=1&loop=1&playlist=Y_l2aMk2SWE&controls=1&rel=0",
      "https://www.youtube.com/embed/m-Oq3X4LAlI?mute=1&loop=1&playlist=m-Oq3X4LAlI&controls=1&rel=0",
      "https://www.youtube.com/embed/Y_l2aMk2SWE?mute=1&loop=1&playlist=Y_l2aMk2SWE&controls=1&rel=0",
    ],
  },
];
