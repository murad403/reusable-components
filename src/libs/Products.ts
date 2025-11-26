type TProduct = {
    id: number;
    name: string;
    title: string;
    description: string;
    price: number;
    quantity: number;
}

const products: TProduct[] = [
  { id: 1,  name: "Wireless Mouse",        title: "Logitech MX Master 3S",     description: "Ergonomic wireless mouse with ultra-fast scrolling", price: 99,    quantity: 45 },
  { id: 2,  name: "Mechanical Keyboard",   title: "Keychron K8 Pro",           description: "Hot-swappable RGB mechanical keyboard",               price: 129,   quantity: 32 },
  { id: 3,  name: "USB-C Hub",             title: "Anker 7-in-1 Hub",          description: "HDMI, SD card, USB 3.0, 100W PD charging",            price: 49,    quantity: 120 },
  { id: 4,  name: "Webcam 4K",             title: "Logitech Brio",             description: "Ultra HD webcam with Windows Hello support",          price: 199,   quantity: 18 },
  { id: 5,  name: "Laptop Stand",          title: "Rain Design mStand",        description: "Aluminum laptop stand for MacBook & others",          price: 45,    quantity: 89 },
  { id: 6,  name: "Noise Cancelling Headphones", title: "Sony WH-1000XM5",    description: "Industry-leading noise cancellation",                 price: 399,   quantity: 25 },
  { id: 7,  name: "External SSD 1TB",      title: "Samsung T7 Shield",         description: "Rugged portable SSD with IP65 rating",                price: 149,   quantity: 67 },
  { id: 8,  name: "Monitor 27\"",          title: "Dell UltraSharp U2723QE",   description: "4K IPS monitor with USB-C hub",                       price: 579,   quantity: 12 },
  { id: 9,  name: "Smart Watch",           title: "Apple Watch Series 9",      description: "GPS + Cellular, Blood Oxygen, ECG",                   price: 499,   quantity: 40 },
  { id: 10, name: "Gaming Chair",          title: "Secretlab Titan Evo 2022",  description: "Premium ergonomic gaming chair",                      price: 549,   quantity: 22 },
  { id: 11, name: "Bluetooth Speaker",     title: "JBL Flip 6",                description: "Waterproof portable speaker",                         price: 129,   quantity: 95 },
  { id: 12, name: "Wireless Earbuds",      title: "AirPods Pro 2",             description: "Active noise cancellation & spatial audio",           price: 249,   quantity: 110 },
  { id: 13, name: "Desk Lamp",             title: "BenQ e-Reading LED",        description: "Eye-care desk lamp with auto dimming",                price: 189,   quantity: 38 },
  { id: 14, name: "Power Bank 20000mAh",   title: "Anker PowerCore",           description: "Fast charging power bank with PD",                    price: 59,    quantity: 150 },
  { id: 15, name: "RGB Mouse Pad",         title: "Corsair MM800",             description: "Large extended RGB gaming mouse pad",                 price: 49,    quantity: 78 },
  { id: 16, name: "NAS Storage",           title: "Synology DS220+",           description: "2-Bay NAS for home & small office",                   price: 299,   quantity: 15 },
  { id: 17, name: "Drawing Tablet",        title: "Wacom Intuos Pro",          description: "Professional pen tablet with 8192 pressure levels",   price: 349,   quantity: 20 },
  { id: 18, name: "Smart Plug",            title: "TP-Link Kasa Smart Plug",   description: "WiFi smart plug with energy monitoring",              price: 24,    quantity: 200 },
  { id: 19, name: "Microphone",            title: "Blue Yeti X",               description: "USB microphone for streaming & podcasting",           price: 169,   quantity: 55 },
  { id: 20, name: "VR Headset",            title: "Meta Quest 3",              description: "Standalone VR headset with mixed reality",            price: 499,   quantity: 30 },
  { id: 21, name: "Electric Kettle",       title: "Cosori Electric Gooseneck", description: "Temperature control kettle for coffee & tea",         price: 69,    quantity: 88 },
  { id: 22, name: "Coffee Maker",          title: "Breville Barista Express",  description: "Espresso machine with built-in grinder",              price: 699,   quantity: 10 },
  { id: 23, name: "Air Purifier",          title: "Dyson Pure Cool TP04",      description: "HEPA air purifier + fan",                             price: 549,   quantity: 18 },
  { id: 24, name: "Fitness Tracker",       title: "Fitbit Charge 6",           description: "Advanced health & fitness tracker",                    price: 159,   quantity: 75 },
  { id: 25, name: "Portable Projector",    title: "Anker Nebula Capsule",      description: "Mini projector with Android TV",                      price: 349,   quantity: 28 },
  { id: 26, name: "Electric Scooter",      title: "Segway Ninebot Max",        description: "30+ miles range electric scooter",                    price: 799,   quantity: 14 },
  { id: 27, name: "Robot Vacuum",          title: "iRobot Roomba j7+",         description: "Self-emptying robot vacuum with obstacle avoidance",  price: 799,   quantity: 16 },
  { id: 28, name: "Standing Desk",         title: "FlexiSpot E7",              description: "Electric height adjustable standing desk",            price: 499,   quantity: 20 },
  { id: 29, name: "Wireless Charger",      title: "Belkin BoostCharge Pro",    description: "3-in-1 MagSafe charging stand",                       price: 149,   quantity: 60 },
  { id: 30, name: "Security Camera",       title: "Arlo Pro 5S",               description: "4K wireless outdoor security camera",                 price: 249,   quantity: 42 },
];

export default products;