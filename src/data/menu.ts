import heroMandi from "@/assets/hero-mandi.jpg";
import dishAlfaham from "@/assets/dish-alfaham.jpg";
import dishShawaya from "@/assets/dish-shawaya.jpg";
import dishShake from "@/assets/dish-shake.jpg";
import dishFried from "@/assets/dish-friedrice.jpg";
import dishJuice from "@/assets/dish-juice.jpg";

export type Dish = {
  name: string;
  type: string;
  price: string;
  note: string;
  img?: string;
  tag?: "Signature" | "Chef's pick" | "Spicy" | "New";
};

/** The six hero dishes shown on the home page. */
export const SIGNATURE_DISHES: Dish[] = [
  { name: "Royal Chicken Mandi", type: "Mandi", price: "₹ 320", note: "Saffron long-grain, smoked whole leg, 24-hour spiced marinade.", img: heroMandi, tag: "Signature" },
  { name: "Mutton Shawaya", type: "Shawaya", price: "₹ 640", note: "Slow-roasted shoulder, nuts, raisins, warm arabic bread.", img: dishShawaya, tag: "Chef's pick" },
  { name: "Alfaham Half", type: "Grills", price: "₹ 280", note: "Charcoal-fired, ember-glazed, garlic-lemon dip.", img: dishAlfaham, tag: "Signature" },
  { name: "Wok Schezwan Rice", type: "Rice & Noodles", price: "₹ 210", note: "Cast-iron seared, house schezwan, flame-tossed.", img: dishFried, tag: "Spicy" },
  { name: "Mango Malabar Shake", type: "Shakes", price: "₹ 160", note: "Alphonso, cardamom cream, saffron drizzle.", img: dishShake },
  { name: "Cold-pressed Orange", type: "Juices", price: "₹ 120", note: "Nagpur oranges, pressed to order.", img: dishJuice },
];

export type MenuSection = { id: string; title: string; blurb: string; hero?: string; items: Dish[] };

export const MENU_SECTIONS: MenuSection[] = [
  {
    id: "mandi",
    title: "Mandi",
    blurb: "Smoked over charcoal in a sealed clay pit, rested on saffron long-grain rice.",
    hero: heroMandi,
    items: [
      { name: "Normal Alfaham Mandi", type: "Mandi", price: "₹ 240", note: "Whole leg, 24-hour spiced marinade, saffron rice.", tag: "Signature" },
      { name: "Spicy Alfaham Mandi", type: "Mandi", price: "₹ 250", note: "Smoked whole bird, mandi rice, two dips." },
      { name: "BBQ Alfaham Mandi", type: "Mandi", price: "₹ 270", note: "Bone-in shoulder, slow-smoked four hours." },
      { name: "Honey Chilli Alfaham Mandi", type: "Mandi", price: "₹ 280", note: "Serves 4–5. Family platter with dry fruits." },
      { name: "Cheesy Alfaham Mandi", type: "Mandi", price: "₹ 280", note: "Seer fish, arabic spice rub, lemon butter rice." },
      { name: "Kanthari Alfaham Mandi", type: "Mandi", price: "₹ 300", note: "Tiger prawns, garlic smoke, ghee rice.",tag: "Spicy" },
      { name: "Jamaican Alfaham Mandi", type: "Mandi", price: "₹ 290", note: "Tiger prawns, garlic smoke, ghee rice." },
      { name: "Masala Alfaham Mandi", type: "Mandi", price: "₹ 280", note: "Tiger prawns, garlic smoke, ghee rice." },
      { name: "Pepper Alfaham Mandi", type: "Mandi", price: "₹ 270", note: "Tiger prawns, garlic smoke, ghee rice." },
      { name: "Shawai Mandi", type: "Mandi", price: "₹ 190", note: "Tiger prawns, garlic smoke, ghee rice." },
      { name: "Masala Shawai Mandi", type: "Mandi", price: "₹ 240", note: "Tiger prawns, garlic smoke, ghee rice." },
      { name: "Masala Shawai Special Mandi", type: "Mandi", price: "₹ 250", note: "Tiger prawns, garlic smoke, ghee rice." },
      { name: "BBQ Shawai Mandi", type: "Mandi", price: "₹ 240", note: "Tiger prawns, garlic smoke, ghee rice." },
      { name: "Mexican Shawai Mandi", type: "Mandi", price: "₹ 250", note: "Tiger prawns, garlic smoke, ghee rice." },
      { name: "Honey Chilli Shawai Mandi", type: "Mandi", price: "₹ 260", note: "Tiger prawns, garlic smoke, ghee rice." },
      { name: "Cheesy Shawai Mandi", type: "Mandi", price: "₹ 260", note: "Tiger prawns, garlic smoke, ghee rice." },
      { name: "Beef Rib Mandi", type: "Mandi", price: "₹ 320", note: "Tiger prawns, garlic smoke, ghee rice.", tag: "Chef's pick" },
      { name: "Pepper Beef Mandi", type: "Mandi", price: "₹ 340", note: "Tiger prawns, garlic smoke, ghee rice." ,tag: "Spicy" },
    ],
  },
  {
    id: "shawaya",
    title: "Shawaya",
    blurb: "Rotisserie-roasted for hours until the meat lets go of the bone.",
    hero: dishShawaya,
    items: [
      { name: "Chicken Shawaya (Half)", type: "Shawaya", price: "₹ 290", note: "Basted in ghee and black lime." },
      { name: "Chicken Shawaya (Full)", type: "Shawaya", price: "₹ 540", note: "With khubz, mayo and thahina." },
      { name: "Mutton Shawaya", type: "Shawaya", price: "₹ 640", note: "Nuts, raisins, warm arabic bread.", tag: "Chef's pick" },
      { name: "Shawaya Platter for Four", type: "Shawaya", price: "₹ 1,480", note: "Mixed meats, rice, salads and dips." },
    ],
  },
  {
    id: "grills",
    title: "Alfaham & Grills",
    blurb: "Open charcoal, no shortcuts. Fired to order.",
    hero: dishAlfaham,
    items: [
      { name: "Alfaham (Half)", type: "Grills", price: "₹ 280", note: "Charcoal-fired, ember-glazed, garlic-lemon dip.", tag: "Signature" },
      { name: "Alfaham (Full)", type: "Grills", price: "₹ 520", note: "Serves two, with khubz and salad." },
      { name: "Peri Peri Grilled Chicken", type: "Grills", price: "₹ 310", note: "House peri peri, charred lime.", tag: "Spicy" },
      { name: "Grilled Fish", type: "Grills", price: "₹ 390", note: "Whole pomfret, Malabar masala." },
      { name: "Chicken Tikka", type: "Grills", price: "₹ 240", note: "Yoghurt, kashmiri chilli, mint chutney." },
      { name: "Mutton Seekh Kebab", type: "Grills", price: "₹ 320", note: "Hand-minced, coal-smoked." },
    ],
  },
  {
    id: "starters",
    title: "Starters",
    blurb: "Small plates for the table, meant to disappear fast.",
    items: [
      { name: "Chicken 65", type: "Starters", price: "₹ 190", note: "Curry leaf, chilli, crisp curls." },
      { name: "Arabic Chicken Wings", type: "Starters", price: "₹ 200", note: "Sticky honey-harissa glaze." },
      { name: "Hummus & Khubz", type: "Starters", price: "₹ 170", note: "Chickpea, thahina, olive oil pool." },
      { name: "Mutti Samosa (4 pcs)", type: "Starters", price: "₹ 120", note: "Spiced mince, flaky pastry." },
      { name: "Crispy Fried Prawns", type: "Starters", price: "₹ 280", note: "Semolina crust, garlic aioli." },
      { name: "Paneer Tikka", type: "Starters", price: "₹ 220", note: "Chargrilled, kasuri methi butter." },
    ],
  },
  {
    id: "rice-noodles",
    title: "Rice & Noodles",
    blurb: "Wok-tossed over roaring flame.",
    hero: dishFried,
    items: [
      { name: "Wok Schezwan Rice", type: "Rice & Noodles", price: "₹ 210", note: "House schezwan, flame-tossed.", tag: "Spicy" },
      { name: "Chicken Fried Rice", type: "Rice & Noodles", price: "₹ 200", note: "Egg, spring onion, dark soy." },
      { name: "Mixed Hakka Noodles", type: "Rice & Noodles", price: "₹ 210", note: "Chicken, prawn, egg." },
      { name: "Ghee Rice", type: "Rice & Noodles", price: "₹ 130", note: "Cashew, fried onion, whole spice." },
      { name: "Kuzhimanthi Rice (side)", type: "Rice & Noodles", price: "₹ 150", note: "Smoked mandi rice on its own." },
    ],
  },
  {
    id: "biryani",
    title: "Biryani & Mains",
    blurb: "Dum-sealed pots and Malabar gravies.",
    items: [
      { name: "Malabar Chicken Biryani", type: "Biryani", price: "₹ 260", note: "Kaima rice, dum-sealed, raita & pickle." },
      { name: "Mutton Biryani", type: "Biryani", price: "₹ 340", note: "Slow-cooked shanks, fried onion." },
      { name: "Butter Chicken", type: "Mains", price: "₹ 290", note: "Tomato-cashew gravy, white butter." },
      { name: "Kadai Paneer", type: "Mains", price: "₹ 250", note: "Bell pepper, crushed coriander seed." },
      { name: "Arabic Kabsa", type: "Mains", price: "₹ 300", note: "Tomato-spiced rice, roasted chicken." },
    ],
  },
  {
    id: "breads",
    title: "Breads",
    blurb: "Baked through the evening, served warm.",
    items: [
      { name: "Arabic Khubz", type: "Breads", price: "₹ 30", note: "Soft, pillowy, made in-house." },
      { name: "Butter Naan", type: "Breads", price: "₹ 45", note: "Tandoor-blistered." },
      { name: "Malabar Porotta", type: "Breads", price: "₹ 25", note: "Layered, flaky, hand-slapped." },
      { name: "Tandoori Roti", type: "Breads", price: "₹ 35", note: "Whole wheat." },
    ],
  },
  {
    id: "shakes",
    title: "Shakes & Desserts",
    blurb: "Thick, cold and unreasonably good.",
    hero: dishShake,
    items: [
      { name: "Mango Malabar Shake", type: "Shakes", price: "₹ 160", note: "Alphonso, cardamom cream, saffron drizzle.", tag: "Signature" },
      { name: "Chocolate Fudge Shake", type: "Shakes", price: "₹ 170", note: "Dark cocoa, brownie crumb." },
      { name: "Tender Coconut Shake", type: "Shakes", price: "₹ 150", note: "Fresh malai, vanilla bean." },
      { name: "Kunafa", type: "Desserts", price: "₹ 220", note: "Cheese, kataifi, rose syrup." },
      { name: "Umm Ali", type: "Desserts", price: "₹ 190", note: "Nuts, cream, baked warm." },
    ],
  },
  {
    id: "juices",
    title: "Juices & Mojitos",
    blurb: "Pressed to order, never from a carton.",
    hero: dishJuice,
    items: [
      { name: "Cold-pressed Orange", type: "Juices", price: "₹ 120", note: "Nagpur oranges, pressed to order." },
      { name: "Watermelon Cooler", type: "Juices", price: "₹ 110", note: "Mint, lime, crushed ice." },
      { name: "Avocado Shake", type: "Juices", price: "₹ 180", note: "Honey, milk, no sugar added." },
      { name: "Blue Curacao Mojito", type: "Mojitos", price: "₹ 150", note: "Citrus, mint, soda." },
      { name: "Green Apple Mojito", type: "Mojitos", price: "₹ 150", note: "Tart, cold, refreshing." },
    ],
  },
];
