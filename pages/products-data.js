// Global products database for Layermax
function resolveImagePath(path) {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('/')) {
    return path;
  }
  const isInsidePages = window.location.pathname.includes('/pages/');
  if (isInsidePages) {
    return '../' + path;
  }
  return path;
}

const PRODUCTS = [
  {
    "id": "arqis",
    "name": "Arqis",
    "category": "acoustic-pods",
    "type": "pod",
    "material": "Curved Edge Design",
    "designer": "Bosq Ergonomics",
    "rating": 4.6,
    "badge": "Premium",
    "description": "The Arcone is designed to provide a private and distraction-free workspace for individual users. Featuring a distinctive curved profile, advanced soundproofing technology, integrated ventilation, and built-in power access, it creates a comfortable environment for focused work, virtual meetings, and confidential conversations.",
    "img": "assets/products_catalog_images/Arqis/Arqis_01.png",
    "images": [
      "assets/products_catalog_images/Arqis/Arqis_01.png",
      "assets/products_catalog_images/Arqis/Arqis_02.png",
      "assets/products_catalog_images/Arqis/Arqis_03.png",
      "assets/products_catalog_images/Arqis/Arqis_04.png"
    ],
    "colors": []
  },
  {
    "id": "canio",
    "name": "Canio",
    "category": "acoustic-pods",
    "type": "pod",
    "material": "Large Privacy Partition Design",
    "designer": "Bosq Ergonomics",
    "rating": 4.7,
    "badge": "",
    "description": "The CANIO is designed to create defined work zones while maintaining openness within the workspace. Combining fabric, MDF, and metal construction, it provides visual separation, enhanced privacy, and a refined professional appearance suitable for dynamic office environments.",
    "img": "assets/products_catalog_images/Canio/Canio_01.png",
    "images": [
      "assets/products_catalog_images/Canio/Canio_01.png",
      "assets/products_catalog_images/Canio/Canio_02.png",
      "assets/products_catalog_images/Canio/Canio_03.png"
    ],
    "colors": []
  },
  {
    "id": "corvo",
    "name": "Corvo",
    "category": "acoustic-pods",
    "type": "pod",
    "material": "Curved Edge Design",
    "designer": "Bosq Ergonomics",
    "rating": 4.9,
    "badge": "Premium",
    "description": "The ARCTWO offers a collaborative yet private environment for two users. Its curved architectural form, acoustic insulation, and integrated ventilation system help create a comfortable space for meetings, discussions, and focused teamwork while maintaining visual sophistication.",
    "img": "assets/products_catalog_images/Corvo/Corvo_01.png",
    "images": [
      "assets/products_catalog_images/Corvo/Corvo_01.png",
      "assets/products_catalog_images/Corvo/Corvo_02.png",
      "assets/products_catalog_images/Corvo/Corvo_03.png",
      "assets/products_catalog_images/Corvo/Corvo_04.png"
    ],
    "colors": []
  },
  {
    "id": "crest",
    "name": "Crest",
    "category": "acoustic-pods",
    "type": "pod",
    "material": "Compact Privacy Partition Design",
    "designer": "Bosq Ergonomics",
    "rating": 4.9,
    "badge": "",
    "description": "The CREST offers a practical solution for creating focused work areas without occupying excessive space. Built with a combination of fabric, MDF, and metal, it provides privacy, flexibility, and a clean contemporary look for collaborative and individual work settings.",
    "img": "assets/products_catalog_images/Crest/Crest_01.png",
    "images": [
      "assets/products_catalog_images/Crest/Crest_01.png",
      "assets/products_catalog_images/Crest/Crest_02.png",
      "assets/products_catalog_images/Crest/Crest_03.png"
    ],
    "colors": []
  },
  {
    "id": "cubix",
    "name": "Cubix",
    "category": "acoustic-pods",
    "type": "pod",
    "material": "Dual User Configuration",
    "designer": "Bosq Ergonomics",
    "rating": 4.2,
    "badge": "Premium",
    "description": "The Dual Square Pod combines a clean geometric design with advanced workplace functionality. Designed for two users, it provides an enclosed environment with soundproofing, ventilation, power connectivity, and castor wheels for enhanced mobility and flexible workspace planning.",
    "img": "assets/products_catalog_images/Cubix/Cubix_01.png",
    "images": [
      "assets/products_catalog_images/Cubix/Cubix_01.png",
      "assets/products_catalog_images/Cubix/Cubix_02.png",
      "assets/products_catalog_images/Cubix/Cubix_03.png",
      "assets/products_catalog_images/Cubix/Cubix_04.png"
    ],
    "colors": []
  },
  {
    "id": "cyris",
    "name": "Cyris",
    "category": "acoustic-pods",
    "type": "pod",
    "material": "Dual User Configuration",
    "designer": "Bosq Ergonomics",
    "rating": 4.7,
    "badge": "Premium",
    "description": "The Cyris is engineered to provide a dedicated space for collaboration and focused discussions. Designed with acoustic insulation, active ventilation, and integrated power access, it supports productive teamwork while maintaining privacy and comfort in open office environments.",
    "img": "assets/products_catalog_images/Cyris/Cyris_01.png",
    "images": [
      "assets/products_catalog_images/Cyris/Cyris_01.png",
      "assets/products_catalog_images/Cyris/Cyris_02.png",
      "assets/products_catalog_images/Cyris/Cyris_03.png",
      "assets/products_catalog_images/Cyris/Cyris_04.png"
    ],
    "colors": []
  },
  {
    "id": "velor",
    "name": "Velor",
    "category": "acoustic-pods",
    "type": "pod",
    "material": "Square Pod Design",
    "designer": "Bosq Ergonomics",
    "rating": 4.5,
    "badge": "Premium",
    "description": "The Velor is a private and mobile workspace solution for focused individual work. Equipped with soundproofing technology, active ventilation, integrated power access, and castor wheels, it provides flexibility, comfort, and privacy within evolving office environments.",
    "img": "assets/products_catalog_images/Velor/Velor_01.png",
    "images": [
      "assets/products_catalog_images/Velor/Velor_01.png",
      "assets/products_catalog_images/Velor/Velor_02.png",
      "assets/products_catalog_images/Velor/Velor_03.png",
      "assets/products_catalog_images/Velor/Velor_04.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-basket",
    "name": "BASKET",
    "category": "cafe-bar-stools",
    "type": "bar stool",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-basket/BASKET_01.png",
    "badge": "New",
    "description": "BASKET — Layermax Café, Hotel & Banquet series bar stool. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-basket/BASKET_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-caf-bar-stool",
    "name": "Café Bar Stool",
    "category": "cafe-bar-stools",
    "type": "bar stool",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-caf-bar-stool/Caf_Bar_Stool_01.png",
    "badge": "New",
    "description": "Café Bar Stool — Layermax Café, Hotel & Banquet series bar stool. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-caf-bar-stool/Caf_Bar_Stool_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-caf-bar-stool-2",
    "name": "Café Bar Stool",
    "category": "cafe-bar-stools",
    "type": "bar stool",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-caf-bar-stool-2/Caf_Bar_Stool_01.png",
    "badge": "New",
    "description": "Café Bar Stool — Layermax Café, Hotel & Banquet series bar stool. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-caf-bar-stool-2/Caf_Bar_Stool_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-caf-bar-stool-3",
    "name": "Café Bar Stool",
    "category": "cafe-bar-stools",
    "type": "bar stool",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-caf-bar-stool-3/Caf_Bar_Stool_01.png",
    "badge": "New",
    "description": "Café Bar Stool — Layermax Café, Hotel & Banquet series bar stool. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-caf-bar-stool-3/Caf_Bar_Stool_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-caf-bar-stool-4",
    "name": "Café Bar Stool",
    "category": "cafe-bar-stools",
    "type": "bar stool",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-caf-bar-stool-4/Caf_Bar_Stool_01.png",
    "badge": "New",
    "description": "Café Bar Stool — Layermax Café, Hotel & Banquet series bar stool. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-caf-bar-stool-4/Caf_Bar_Stool_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-da-070",
    "name": "DA 070",
    "category": "cafe-bar-stools",
    "type": "bar stool",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-da-070/DA_070_01.png",
    "badge": "New",
    "description": "DA 070 — Layermax Café, Hotel & Banquet series bar stool. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-da-070/DA_070_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-da-604",
    "name": "DA 604",
    "category": "cafe-bar-stools",
    "type": "bar stool",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-da-604/DA_604_01.png",
    "badge": "New",
    "description": "DA 604 — Layermax Café, Hotel & Banquet series bar stool. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-da-604/DA_604_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-da-605",
    "name": "DA 605",
    "category": "cafe-bar-stools",
    "type": "bar stool",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-da-605/DA_605_01.png",
    "badge": "New",
    "description": "DA 605 — Layermax Café, Hotel & Banquet series bar stool. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-da-605/DA_605_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-da-606",
    "name": "DA 606",
    "category": "cafe-bar-stools",
    "type": "bar stool",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-da-606/DA_606_01.png",
    "badge": "New",
    "description": "DA 606 — Layermax Café, Hotel & Banquet series bar stool. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-da-606/DA_606_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-da-617",
    "name": "DA 617",
    "category": "cafe-bar-stools",
    "type": "bar stool",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-da-617/DA_617_01.png",
    "badge": "New",
    "description": "DA 617 — Layermax Café, Hotel & Banquet series bar stool. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-da-617/DA_617_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-da-618",
    "name": "DA 618",
    "category": "cafe-bar-stools",
    "type": "bar stool",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-da-618/DA_618_01.png",
    "badge": "New",
    "description": "DA 618 — Layermax Café, Hotel & Banquet series bar stool. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-da-618/DA_618_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbs-057",
    "name": "DBS 057",
    "category": "cafe-bar-stools",
    "type": "bar stool",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbs-057/DBS_057_01.png",
    "badge": "New",
    "description": "DBS 057 — Layermax Café, Hotel & Banquet series bar stool. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbs-057/DBS_057_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbs-064",
    "name": "DBS 064",
    "category": "cafe-bar-stools",
    "type": "bar stool",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbs-064/DBS_064_01.png",
    "badge": "New",
    "description": "DBS 064 — Layermax Café, Hotel & Banquet series bar stool. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbs-064/DBS_064_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbs-066",
    "name": "DBS 066",
    "category": "cafe-bar-stools",
    "type": "bar stool",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbs-066/DBS_066_01.png",
    "badge": "New",
    "description": "DBS 066 — Layermax Café, Hotel & Banquet series bar stool. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbs-066/DBS_066_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbs-068",
    "name": "DBS 068",
    "category": "cafe-bar-stools",
    "type": "bar stool",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbs-068/DBS_068_01.png",
    "badge": "New",
    "description": "DBS 068 — Layermax Café, Hotel & Banquet series bar stool. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbs-068/DBS_068_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbs-069",
    "name": "DBS 069",
    "category": "cafe-bar-stools",
    "type": "bar stool",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbs-069/DBS_069_01.png",
    "badge": "New",
    "description": "DBS 069 — Layermax Café, Hotel & Banquet series bar stool. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbs-069/DBS_069_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbs-075",
    "name": "DBS 075",
    "category": "cafe-bar-stools",
    "type": "bar stool",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbs-075/DBS_075_01.png",
    "badge": "New",
    "description": "DBS 075 — Layermax Café, Hotel & Banquet series bar stool. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbs-075/DBS_075_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbs-614",
    "name": "DBS 614",
    "category": "cafe-bar-stools",
    "type": "bar stool",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbs-614/DBS_614_01.png",
    "badge": "New",
    "description": "DBS 614 — Layermax Café, Hotel & Banquet series bar stool. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbs-614/DBS_614_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbs-614-2",
    "name": "DBS 614",
    "category": "cafe-bar-stools",
    "type": "bar stool",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbs-614-2/DBS_614_01.png",
    "badge": "New",
    "description": "DBS 614 — Layermax Café, Hotel & Banquet series bar stool. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbs-614-2/DBS_614_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbs-652",
    "name": "DBS 652",
    "category": "cafe-bar-stools",
    "type": "bar stool",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbs-652/DBS_652_01.png",
    "badge": "New",
    "description": "DBS 652 — Layermax Café, Hotel & Banquet series bar stool. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbs-652/DBS_652_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbs-653",
    "name": "DBS 653",
    "category": "cafe-bar-stools",
    "type": "bar stool",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbs-653/DBS_653_01.png",
    "badge": "New",
    "description": "DBS 653 — Layermax Café, Hotel & Banquet series bar stool. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbs-653/DBS_653_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbs-659-2",
    "name": "DBS 659",
    "category": "cafe-bar-stools",
    "type": "bar stool",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbs-659-2/DBS_659_01.png",
    "badge": "New",
    "description": "DBS 659 — Layermax Café, Hotel & Banquet series bar stool. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbs-659-2/DBS_659_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbs-662-2",
    "name": "DBS 662",
    "category": "cafe-bar-stools",
    "type": "bar stool",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbs-662-2/DBS_662_01.png",
    "badge": "New",
    "description": "DBS 662 — Layermax Café, Hotel & Banquet series bar stool. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbs-662-2/DBS_662_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbs-666",
    "name": "DBS 666",
    "category": "cafe-bar-stools",
    "type": "bar stool",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbs-666/DBS_666_01.png",
    "badge": "New",
    "description": "DBS 666 — Layermax Café, Hotel & Banquet series bar stool. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbs-666/DBS_666_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbs-667-2",
    "name": "DBS 667",
    "category": "cafe-bar-stools",
    "type": "bar stool",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbs-667-2/DBS_667_01.png",
    "badge": "New",
    "description": "DBS 667 — Layermax Café, Hotel & Banquet series bar stool. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbs-667-2/DBS_667_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dwc-029",
    "name": "DWC 029",
    "category": "cafe-bar-stools",
    "type": "bar stool",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dwc-029/DWC_029_01.png",
    "badge": "New",
    "description": "DWC 029 — Layermax Café, Hotel & Banquet series bar stool. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dwc-029/DWC_029_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dwc-030",
    "name": "DWC 030",
    "category": "cafe-bar-stools",
    "type": "bar stool",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dwc-030/DWC_030_01.png",
    "badge": "New",
    "description": "DWC 030 — Layermax Café, Hotel & Banquet series bar stool. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dwc-030/DWC_030_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dwc-031",
    "name": "DWC 031",
    "category": "cafe-bar-stools",
    "type": "bar stool",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dwc-031/DWC_031_01.png",
    "badge": "New",
    "description": "DWC 031 — Layermax Café, Hotel & Banquet series bar stool. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dwc-031/DWC_031_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-max",
    "name": "MAX",
    "category": "cafe-bar-stools",
    "type": "bar stool",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-max/MAX_01.png",
    "badge": "New",
    "description": "MAX — Layermax Café, Hotel & Banquet series bar stool. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-max/MAX_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-turret",
    "name": "TURRET",
    "category": "cafe-bar-stools",
    "type": "bar stool",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-turret/TURRET_01.png",
    "badge": "New",
    "description": "TURRET — Layermax Café, Hotel & Banquet series bar stool. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-turret/TURRET_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-classic-gama-pvc",
    "name": "CLASSIC GAMA PVC",
    "category": "cafe-chairs",
    "type": "cafeteria chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-classic-gama-pvc/CLASSIC_GAMA_PVC_01.png",
    "badge": "New",
    "description": "CLASSIC GAMA PVC — Layermax Café, Hotel & Banquet series cafeteria chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-classic-gama-pvc/CLASSIC_GAMA_PVC_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-classic-gama-wood",
    "name": "CLASSIC GAMA WOOD",
    "category": "cafe-chairs",
    "type": "cafeteria chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-classic-gama-wood/CLASSIC_GAMA_WOOD_01.png",
    "badge": "New",
    "description": "CLASSIC GAMA WOOD — Layermax Café, Hotel & Banquet series cafeteria chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-classic-gama-wood/CLASSIC_GAMA_WOOD_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-classic-smart",
    "name": "CLASSIC SMART",
    "category": "cafe-chairs",
    "type": "cafeteria chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-classic-smart/CLASSIC_SMART_01.png",
    "badge": "New",
    "description": "CLASSIC SMART — Layermax Café, Hotel & Banquet series cafeteria chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-classic-smart/CLASSIC_SMART_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-classic-zeta",
    "name": "CLASSIC ZETA",
    "category": "cafe-chairs",
    "type": "cafeteria chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-classic-zeta/CLASSIC_ZETA_01.png",
    "badge": "New",
    "description": "CLASSIC ZETA — Layermax Café, Hotel & Banquet series cafeteria chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-classic-zeta/CLASSIC_ZETA_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-cube",
    "name": "CUBE",
    "category": "cafe-chairs",
    "type": "café chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-cube/CUBE_01.png",
    "badge": "New",
    "description": "CUBE — Layermax Café, Hotel & Banquet series café chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-cube/CUBE_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-da-614",
    "name": "DA 614",
    "category": "cafe-chairs",
    "type": "metal chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-da-614/DA_614_01.png",
    "badge": "New",
    "description": "DA 614 — Layermax Café, Hotel & Banquet series metal chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-da-614/DA_614_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-da-614-2",
    "name": "DA 614",
    "category": "cafe-chairs",
    "type": "dining chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-da-614-2/DA_614_01.png",
    "badge": "New",
    "description": "DA 614 — Layermax Café, Hotel & Banquet series dining chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-da-614-2/DA_614_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbs-052",
    "name": "DBS 052",
    "category": "cafe-chairs",
    "type": "café chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbs-052/DBS_052_01.png",
    "badge": "New",
    "description": "DBS 052 — Layermax Café, Hotel & Banquet series café chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbs-052/DBS_052_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbs-053",
    "name": "DBS 053",
    "category": "cafe-chairs",
    "type": "café chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbs-053/DBS_053_01.png",
    "badge": "New",
    "description": "DBS 053 — Layermax Café, Hotel & Banquet series café chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbs-053/DBS_053_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbs-055",
    "name": "DBS 055",
    "category": "cafe-chairs",
    "type": "café chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbs-055/DBS_055_01.png",
    "badge": "New",
    "description": "DBS 055 — Layermax Café, Hotel & Banquet series café chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbs-055/DBS_055_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbs-056",
    "name": "DBS 056",
    "category": "cafe-chairs",
    "type": "café chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbs-056/DBS_056_01.png",
    "badge": "New",
    "description": "DBS 056 — Layermax Café, Hotel & Banquet series café chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbs-056/DBS_056_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbs-058",
    "name": "DBS 058",
    "category": "cafe-chairs",
    "type": "café chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbs-058/DBS_058_01.png",
    "badge": "New",
    "description": "DBS 058 — Layermax Café, Hotel & Banquet series café chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbs-058/DBS_058_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbs-059",
    "name": "DBS 059",
    "category": "cafe-chairs",
    "type": "café chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbs-059/DBS_059_01.png",
    "badge": "New",
    "description": "DBS 059 — Layermax Café, Hotel & Banquet series café chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbs-059/DBS_059_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbs-060",
    "name": "DBS 060",
    "category": "cafe-chairs",
    "type": "café chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbs-060/DBS_060_01.png",
    "badge": "New",
    "description": "DBS 060 — Layermax Café, Hotel & Banquet series café chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbs-060/DBS_060_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbs-061",
    "name": "DBS 061",
    "category": "cafe-chairs",
    "type": "café chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbs-061/DBS_061_01.png",
    "badge": "New",
    "description": "DBS 061 — Layermax Café, Hotel & Banquet series café chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbs-061/DBS_061_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbs-062",
    "name": "DBS 062",
    "category": "cafe-chairs",
    "type": "café chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbs-062/DBS_062_01.png",
    "badge": "New",
    "description": "DBS 062 — Layermax Café, Hotel & Banquet series café chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbs-062/DBS_062_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbs-063",
    "name": "DBS 063",
    "category": "cafe-chairs",
    "type": "café chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbs-063/DBS_063_01.png",
    "badge": "New",
    "description": "DBS 063 — Layermax Café, Hotel & Banquet series café chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbs-063/DBS_063_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbs-065",
    "name": "DBS 065",
    "category": "cafe-chairs",
    "type": "café chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbs-065/DBS_065_01.png",
    "badge": "New",
    "description": "DBS 065 — Layermax Café, Hotel & Banquet series café chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbs-065/DBS_065_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbs-65",
    "name": "DBS 65",
    "category": "cafe-chairs",
    "type": "café chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbs-65/DBS_65_01.png",
    "badge": "New",
    "description": "DBS 65 — Layermax Café, Hotel & Banquet series café chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbs-65/DBS_65_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbs-658",
    "name": "DBS 658",
    "category": "cafe-chairs",
    "type": "café chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbs-658/DBS_658_01.png",
    "badge": "New",
    "description": "DBS 658 — Layermax Café, Hotel & Banquet series café chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbs-658/DBS_658_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbs-659",
    "name": "DBS 659",
    "category": "cafe-chairs",
    "type": "café chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbs-659/DBS_659_01.png",
    "badge": "New",
    "description": "DBS 659 — Layermax Café, Hotel & Banquet series café chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbs-659/DBS_659_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbs-661",
    "name": "DBS 661",
    "category": "cafe-chairs",
    "type": "café chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbs-661/DBS_661_01.png",
    "badge": "New",
    "description": "DBS 661 — Layermax Café, Hotel & Banquet series café chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbs-661/DBS_661_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbs-662",
    "name": "DBS 662",
    "category": "cafe-chairs",
    "type": "dining chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbs-662/DBS_662_01.png",
    "badge": "New",
    "description": "DBS 662 — Layermax Café, Hotel & Banquet series dining chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbs-662/DBS_662_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbs-664",
    "name": "DBS 664",
    "category": "cafe-chairs",
    "type": "cafeteria chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbs-664/DBS_664_01.png",
    "badge": "New",
    "description": "DBS 664 — Layermax Café, Hotel & Banquet series cafeteria chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbs-664/DBS_664_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbs-664-2",
    "name": "DBS 664",
    "category": "cafe-chairs",
    "type": "café chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbs-664-2/DBS_664_01.png",
    "badge": "New",
    "description": "DBS 664 — Layermax Café, Hotel & Banquet series café chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbs-664-2/DBS_664_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbs-665",
    "name": "DBS 665",
    "category": "cafe-chairs",
    "type": "café chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbs-665/DBS_665_01.png",
    "badge": "New",
    "description": "DBS 665 — Layermax Café, Hotel & Banquet series café chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbs-665/DBS_665_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbs-667",
    "name": "DBS 667",
    "category": "cafe-chairs",
    "type": "metal chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbs-667/DBS_667_01.png",
    "badge": "New",
    "description": "DBS 667 — Layermax Café, Hotel & Banquet series metal chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbs-667/DBS_667_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbs-668",
    "name": "DBS 668",
    "category": "cafe-chairs",
    "type": "metal chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbs-668/DBS_668_01.png",
    "badge": "New",
    "description": "DBS 668 — Layermax Café, Hotel & Banquet series metal chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbs-668/DBS_668_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-delta",
    "name": "DELTA",
    "category": "cafe-chairs",
    "type": "café chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-delta/DELTA_01.png",
    "badge": "New",
    "description": "DELTA — Layermax Café, Hotel & Banquet series café chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-delta/DELTA_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-078",
    "name": "DMC 078",
    "category": "cafe-chairs",
    "type": "dining chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-078/DMC_078_01.png",
    "badge": "New",
    "description": "DMC 078 — Layermax Café, Hotel & Banquet series dining chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-078/DMC_078_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-078-2",
    "name": "DMC 078",
    "category": "cafe-chairs",
    "type": "dining chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-078-2/DMC_078_01.png",
    "badge": "New",
    "description": "DMC 078 — Layermax Café, Hotel & Banquet series dining chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-078-2/DMC_078_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-079",
    "name": "DMC 079",
    "category": "cafe-chairs",
    "type": "dining chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-079/DMC_079_01.png",
    "badge": "New",
    "description": "DMC 079 — Layermax Café, Hotel & Banquet series dining chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-079/DMC_079_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-080",
    "name": "DMC 080",
    "category": "cafe-chairs",
    "type": "dining chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-080/DMC_080_01.png",
    "badge": "New",
    "description": "DMC 080 — Layermax Café, Hotel & Banquet series dining chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-080/DMC_080_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-083",
    "name": "DMC 083",
    "category": "cafe-chairs",
    "type": "dining chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-083/DMC_083_01.png",
    "badge": "New",
    "description": "DMC 083 — Layermax Café, Hotel & Banquet series dining chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-083/DMC_083_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-085",
    "name": "DMC 085",
    "category": "cafe-chairs",
    "type": "dining chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-085/DMC_085_01.png",
    "badge": "New",
    "description": "DMC 085 — Layermax Café, Hotel & Banquet series dining chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-085/DMC_085_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-087",
    "name": "DMC 087",
    "category": "cafe-chairs",
    "type": "dining chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-087/DMC_087_01.png",
    "badge": "New",
    "description": "DMC 087 — Layermax Café, Hotel & Banquet series dining chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-087/DMC_087_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-087-2",
    "name": "DMC 087",
    "category": "cafe-chairs",
    "type": "dining chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-087-2/DMC_087_01.png",
    "badge": "New",
    "description": "DMC 087 — Layermax Café, Hotel & Banquet series dining chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-087-2/DMC_087_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-088",
    "name": "DMC 088",
    "category": "cafe-chairs",
    "type": "wooden chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-088/DMC_088_01.png",
    "badge": "New",
    "description": "DMC 088 — Layermax Café, Hotel & Banquet series wooden chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-088/DMC_088_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-091",
    "name": "DMC 091",
    "category": "cafe-chairs",
    "type": "dining chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-091/DMC_091_01.png",
    "badge": "New",
    "description": "DMC 091 — Layermax Café, Hotel & Banquet series dining chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-091/DMC_091_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-093",
    "name": "DMC 093",
    "category": "cafe-chairs",
    "type": "dining chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-093/DMC_093_01.png",
    "badge": "New",
    "description": "DMC 093 — Layermax Café, Hotel & Banquet series dining chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-093/DMC_093_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-098",
    "name": "DMC 098",
    "category": "cafe-chairs",
    "type": "dining chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-098/DMC_098_01.png",
    "badge": "New",
    "description": "DMC 098 — Layermax Café, Hotel & Banquet series dining chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-098/DMC_098_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-104",
    "name": "DMC 104",
    "category": "cafe-chairs",
    "type": "dining chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-104/DMC_104_01.png",
    "badge": "New",
    "description": "DMC 104 — Layermax Café, Hotel & Banquet series dining chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-104/DMC_104_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-105",
    "name": "DMC 105",
    "category": "cafe-chairs",
    "type": "dining chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-105/DMC_105_01.png",
    "badge": "New",
    "description": "DMC 105 — Layermax Café, Hotel & Banquet series dining chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-105/DMC_105_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-107",
    "name": "DMC 107",
    "category": "cafe-chairs",
    "type": "dining chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-107/DMC_107_01.png",
    "badge": "New",
    "description": "DMC 107 — Layermax Café, Hotel & Banquet series dining chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-107/DMC_107_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-108",
    "name": "DMC 108",
    "category": "cafe-chairs",
    "type": "dining chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-108/DMC_108_01.png",
    "badge": "New",
    "description": "DMC 108 — Layermax Café, Hotel & Banquet series dining chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-108/DMC_108_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-114",
    "name": "DMC 114",
    "category": "cafe-chairs",
    "type": "wooden chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-114/DMC_114_01.png",
    "badge": "New",
    "description": "DMC 114 — Layermax Café, Hotel & Banquet series wooden chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-114/DMC_114_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-116",
    "name": "DMC 116",
    "category": "cafe-chairs",
    "type": "wooden chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-116/DMC_116_01.png",
    "badge": "New",
    "description": "DMC 116 — Layermax Café, Hotel & Banquet series wooden chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-116/DMC_116_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-118",
    "name": "DMC 118",
    "category": "cafe-chairs",
    "type": "dining chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-118/DMC_118_01.png",
    "badge": "New",
    "description": "DMC 118 — Layermax Café, Hotel & Banquet series dining chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-118/DMC_118_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-119",
    "name": "DMC 119",
    "category": "cafe-chairs",
    "type": "dining chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-119/DMC_119_01.png",
    "badge": "New",
    "description": "DMC 119 — Layermax Café, Hotel & Banquet series dining chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-119/DMC_119_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-120",
    "name": "DMC 120",
    "category": "cafe-chairs",
    "type": "dining chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-120/DMC_120_01.png",
    "badge": "New",
    "description": "DMC 120 — Layermax Café, Hotel & Banquet series dining chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-120/DMC_120_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-121",
    "name": "DMC 121",
    "category": "cafe-chairs",
    "type": "dining chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-121/DMC_121_01.png",
    "badge": "New",
    "description": "DMC 121 — Layermax Café, Hotel & Banquet series dining chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-121/DMC_121_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-123",
    "name": "DMC 123",
    "category": "cafe-chairs",
    "type": "dining chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-123/DMC_123_01.png",
    "badge": "New",
    "description": "DMC 123 — Layermax Café, Hotel & Banquet series dining chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-123/DMC_123_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-125",
    "name": "DMC 125",
    "category": "cafe-chairs",
    "type": "dining chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-125/DMC_125_01.png",
    "badge": "New",
    "description": "DMC 125 — Layermax Café, Hotel & Banquet series dining chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-125/DMC_125_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-128",
    "name": "DMC 128",
    "category": "cafe-chairs",
    "type": "dining chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-128/DMC_128_01.png",
    "badge": "New",
    "description": "DMC 128 — Layermax Café, Hotel & Banquet series dining chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-128/DMC_128_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-129",
    "name": "DMC 129",
    "category": "cafe-chairs",
    "type": "dining chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-129/DMC_129_01.png",
    "badge": "New",
    "description": "DMC 129 — Layermax Café, Hotel & Banquet series dining chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-129/DMC_129_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-130",
    "name": "DMC 130",
    "category": "cafe-chairs",
    "type": "wooden chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-130/DMC_130_01.png",
    "badge": "New",
    "description": "DMC 130 — Layermax Café, Hotel & Banquet series wooden chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-130/DMC_130_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-132",
    "name": "DMC 132",
    "category": "cafe-chairs",
    "type": "wooden chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-132/DMC_132_01.png",
    "badge": "New",
    "description": "DMC 132 — Layermax Café, Hotel & Banquet series wooden chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-132/DMC_132_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-134",
    "name": "DMC 134",
    "category": "cafe-chairs",
    "type": "dining chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-134/DMC_134_01.png",
    "badge": "New",
    "description": "DMC 134 — Layermax Café, Hotel & Banquet series dining chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-134/DMC_134_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-135",
    "name": "DMC 135",
    "category": "cafe-chairs",
    "type": "wooden chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-135/DMC_135_01.png",
    "badge": "New",
    "description": "DMC 135 — Layermax Café, Hotel & Banquet series wooden chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-135/DMC_135_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-136",
    "name": "DMC 136",
    "category": "cafe-chairs",
    "type": "dining chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-136/DMC_136_01.png",
    "badge": "New",
    "description": "DMC 136 — Layermax Café, Hotel & Banquet series dining chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-136/DMC_136_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-137",
    "name": "DMC 137",
    "category": "cafe-chairs",
    "type": "dining chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-137/DMC_137_01.png",
    "badge": "New",
    "description": "DMC 137 — Layermax Café, Hotel & Banquet series dining chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-137/DMC_137_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-138",
    "name": "DMC 138",
    "category": "cafe-chairs",
    "type": "dining chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-138/DMC_138_01.png",
    "badge": "New",
    "description": "DMC 138 — Layermax Café, Hotel & Banquet series dining chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-138/DMC_138_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-140",
    "name": "DMC 140",
    "category": "cafe-chairs",
    "type": "wooden chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-140/DMC_140_01.png",
    "badge": "New",
    "description": "DMC 140 — Layermax Café, Hotel & Banquet series wooden chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-140/DMC_140_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-141",
    "name": "DMC 141",
    "category": "cafe-chairs",
    "type": "wooden chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-141/DMC_141_01.png",
    "badge": "New",
    "description": "DMC 141 — Layermax Café, Hotel & Banquet series wooden chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-141/DMC_141_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-143",
    "name": "DMC 143",
    "category": "cafe-chairs",
    "type": "wooden chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-143/DMC_143_01.png",
    "badge": "New",
    "description": "DMC 143 — Layermax Café, Hotel & Banquet series wooden chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-143/DMC_143_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-144",
    "name": "DMC 144",
    "category": "cafe-chairs",
    "type": "wooden chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-144/DMC_144_01.png",
    "badge": "New",
    "description": "DMC 144 — Layermax Café, Hotel & Banquet series wooden chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-144/DMC_144_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-149",
    "name": "DMC 149",
    "category": "cafe-chairs",
    "type": "metal chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-149/DMC_149_01.png",
    "badge": "New",
    "description": "DMC 149 — Layermax Café, Hotel & Banquet series metal chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-149/DMC_149_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-150",
    "name": "DMC 150",
    "category": "cafe-chairs",
    "type": "metal chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-150/DMC_150_01.png",
    "badge": "New",
    "description": "DMC 150 — Layermax Café, Hotel & Banquet series metal chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-150/DMC_150_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-157",
    "name": "DMC 157",
    "category": "cafe-chairs",
    "type": "metal chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-157/DMC_157_01.png",
    "badge": "New",
    "description": "DMC 157 — Layermax Café, Hotel & Banquet series metal chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-157/DMC_157_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-158",
    "name": "DMC 158",
    "category": "cafe-chairs",
    "type": "metal chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-158/DMC_158_01.png",
    "badge": "New",
    "description": "DMC 158 — Layermax Café, Hotel & Banquet series metal chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-158/DMC_158_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-245",
    "name": "DMC 245",
    "category": "cafe-chairs",
    "type": "wooden chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-245/DMC_245_01.png",
    "badge": "New",
    "description": "DMC 245 — Layermax Café, Hotel & Banquet series wooden chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-245/DMC_245_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-245-2",
    "name": "DMC 245",
    "category": "cafe-chairs",
    "type": "wooden chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-245-2/DMC_245_01.png",
    "badge": "New",
    "description": "DMC 245 — Layermax Café, Hotel & Banquet series wooden chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-245-2/DMC_245_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-245-3",
    "name": "DMC 245",
    "category": "cafe-chairs",
    "type": "wooden chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-245-3/DMC_245_01.png",
    "badge": "New",
    "description": "DMC 245 — Layermax Café, Hotel & Banquet series wooden chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-245-3/DMC_245_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-247",
    "name": "DMC 247",
    "category": "cafe-chairs",
    "type": "dining chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-247/DMC_247_01.png",
    "badge": "New",
    "description": "DMC 247 — Layermax Café, Hotel & Banquet series dining chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-247/DMC_247_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-248",
    "name": "DMC 248",
    "category": "cafe-chairs",
    "type": "metal chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-248/DMC_248_01.png",
    "badge": "New",
    "description": "DMC 248 — Layermax Café, Hotel & Banquet series metal chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-248/DMC_248_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-249",
    "name": "DMC 249",
    "category": "cafe-chairs",
    "type": "metal chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-249/DMC_249_01.png",
    "badge": "New",
    "description": "DMC 249 — Layermax Café, Hotel & Banquet series metal chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-249/DMC_249_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-250",
    "name": "DMC 250",
    "category": "cafe-chairs",
    "type": "wooden chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-250/DMC_250_01.png",
    "badge": "New",
    "description": "DMC 250 — Layermax Café, Hotel & Banquet series wooden chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-250/DMC_250_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-260",
    "name": "DMC 260",
    "category": "cafe-chairs",
    "type": "dining chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-260/DMC_260_01.png",
    "badge": "New",
    "description": "DMC 260 — Layermax Café, Hotel & Banquet series dining chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-260/DMC_260_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-276",
    "name": "DMC 276",
    "category": "cafe-chairs",
    "type": "dining chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-276/DMC_276_01.png",
    "badge": "New",
    "description": "DMC 276 — Layermax Café, Hotel & Banquet series dining chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-276/DMC_276_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-277",
    "name": "DMC 277",
    "category": "cafe-chairs",
    "type": "dining chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-277/DMC_277_01.png",
    "badge": "New",
    "description": "DMC 277 — Layermax Café, Hotel & Banquet series dining chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-277/DMC_277_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dmc-278",
    "name": "DMC 278",
    "category": "cafe-chairs",
    "type": "dining chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dmc-278/DMC_278_01.png",
    "badge": "New",
    "description": "DMC 278 — Layermax Café, Hotel & Banquet series dining chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dmc-278/DMC_278_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dpc-003",
    "name": "DPC 003",
    "category": "cafe-chairs",
    "type": "café chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dpc-003/DPC_003_01.png",
    "badge": "New",
    "description": "DPC 003 — Layermax Café, Hotel & Banquet series café chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dpc-003/DPC_003_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dpc-004",
    "name": "DPC 004",
    "category": "cafe-chairs",
    "type": "metal chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dpc-004/DPC_004_01.png",
    "badge": "New",
    "description": "DPC 004 — Layermax Café, Hotel & Banquet series metal chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dpc-004/DPC_004_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dpc-005",
    "name": "DPC 005",
    "category": "cafe-chairs",
    "type": "café chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dpc-005/DPC_005_01.png",
    "badge": "New",
    "description": "DPC 005 — Layermax Café, Hotel & Banquet series café chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dpc-005/DPC_005_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dpc-006",
    "name": "DPC 006",
    "category": "cafe-chairs",
    "type": "café chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dpc-006/DPC_006_01.png",
    "badge": "New",
    "description": "DPC 006 — Layermax Café, Hotel & Banquet series café chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dpc-006/DPC_006_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dpc-007",
    "name": "DPC 007",
    "category": "cafe-chairs",
    "type": "café chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dpc-007/DPC_007_01.png",
    "badge": "New",
    "description": "DPC 007 — Layermax Café, Hotel & Banquet series café chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dpc-007/DPC_007_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dpc-008",
    "name": "DPC 008",
    "category": "cafe-chairs",
    "type": "metal chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dpc-008/DPC_008_01.png",
    "badge": "New",
    "description": "DPC 008 — Layermax Café, Hotel & Banquet series metal chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dpc-008/DPC_008_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dpc-009",
    "name": "DPC 009",
    "category": "cafe-chairs",
    "type": "metal chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dpc-009/DPC_009_01.png",
    "badge": "New",
    "description": "DPC 009 — Layermax Café, Hotel & Banquet series metal chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dpc-009/DPC_009_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dpc-020",
    "name": "DPC 020",
    "category": "cafe-chairs",
    "type": "café chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dpc-020/DPC_020_01.png",
    "badge": "New",
    "description": "DPC 020 — Layermax Café, Hotel & Banquet series café chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dpc-020/DPC_020_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dpc-024",
    "name": "DPC 024",
    "category": "cafe-chairs",
    "type": "café chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dpc-024/DPC_024_01.png",
    "badge": "New",
    "description": "DPC 024 — Layermax Café, Hotel & Banquet series café chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dpc-024/DPC_024_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dpc-176",
    "name": "DPC 176",
    "category": "cafe-chairs",
    "type": "cafeteria chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dpc-176/DPC_176_01.png",
    "badge": "New",
    "description": "DPC 176 — Layermax Café, Hotel & Banquet series cafeteria chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dpc-176/DPC_176_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dpc-176-2",
    "name": "DPC 176",
    "category": "cafe-chairs",
    "type": "cafeteria chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dpc-176-2/DPC_176_01.png",
    "badge": "New",
    "description": "DPC 176 — Layermax Café, Hotel & Banquet series cafeteria chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dpc-176-2/DPC_176_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dpc-176-3",
    "name": "DPC 176",
    "category": "cafe-chairs",
    "type": "cafeteria chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dpc-176-3/DPC_176_01.png",
    "badge": "New",
    "description": "DPC 176 — Layermax Café, Hotel & Banquet series cafeteria chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dpc-176-3/DPC_176_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dpc-179",
    "name": "DPC 179",
    "category": "cafe-chairs",
    "type": "café chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dpc-179/DPC_179_01.png",
    "badge": "New",
    "description": "DPC 179 — Layermax Café, Hotel & Banquet series café chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dpc-179/DPC_179_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dpc-180",
    "name": "DPC 180",
    "category": "cafe-chairs",
    "type": "café chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dpc-180/DPC_180_01.png",
    "badge": "New",
    "description": "DPC 180 — Layermax Café, Hotel & Banquet series café chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dpc-180/DPC_180_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dpc-184",
    "name": "DPC 184",
    "category": "cafe-chairs",
    "type": "metal chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dpc-184/DPC_184_01.png",
    "badge": "New",
    "description": "DPC 184 — Layermax Café, Hotel & Banquet series metal chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dpc-184/DPC_184_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dpc-186",
    "name": "DPC 186",
    "category": "cafe-chairs",
    "type": "metal chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dpc-186/DPC_186_01.png",
    "badge": "New",
    "description": "DPC 186 — Layermax Café, Hotel & Banquet series metal chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dpc-186/DPC_186_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dpc-187",
    "name": "DPC 187",
    "category": "cafe-chairs",
    "type": "metal chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dpc-187/DPC_187_01.png",
    "badge": "New",
    "description": "DPC 187 — Layermax Café, Hotel & Banquet series metal chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dpc-187/DPC_187_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dpc-188",
    "name": "DPC 188",
    "category": "cafe-chairs",
    "type": "metal chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dpc-188/DPC_188_01.png",
    "badge": "New",
    "description": "DPC 188 — Layermax Café, Hotel & Banquet series metal chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dpc-188/DPC_188_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dpc-189",
    "name": "DPC 189",
    "category": "cafe-chairs",
    "type": "metal chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dpc-189/DPC_189_01.png",
    "badge": "New",
    "description": "DPC 189 — Layermax Café, Hotel & Banquet series metal chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dpc-189/DPC_189_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dwc-026",
    "name": "DWC 026",
    "category": "cafe-chairs",
    "type": "wooden chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dwc-026/DWC_026_01.png",
    "badge": "New",
    "description": "DWC 026 — Layermax Café, Hotel & Banquet series wooden chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dwc-026/DWC_026_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dwc-027",
    "name": "DWC 027",
    "category": "cafe-chairs",
    "type": "wooden chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dwc-027/DWC_027_01.png",
    "badge": "New",
    "description": "DWC 027 — Layermax Café, Hotel & Banquet series wooden chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dwc-027/DWC_027_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dwc-028",
    "name": "DWC 028",
    "category": "cafe-chairs",
    "type": "wooden chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dwc-028/DWC_028_01.png",
    "badge": "New",
    "description": "DWC 028 — Layermax Café, Hotel & Banquet series wooden chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dwc-028/DWC_028_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-fashion-dpc-181",
    "name": "FASHION DPC 181",
    "category": "cafe-chairs",
    "type": "café chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-fashion-dpc-181/FASHION_DPC_181_01.png",
    "badge": "New",
    "description": "FASHION DPC 181 — Layermax Café, Hotel & Banquet series café chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-fashion-dpc-181/FASHION_DPC_181_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-fire",
    "name": "FIRE",
    "category": "cafe-chairs",
    "type": "cafeteria chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-fire/FIRE_01.png",
    "badge": "New",
    "description": "FIRE — Layermax Café, Hotel & Banquet series cafeteria chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-fire/FIRE_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-fire-2",
    "name": "FIRE",
    "category": "cafe-chairs",
    "type": "cafeteria chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-fire-2/FIRE_01.png",
    "badge": "New",
    "description": "FIRE — Layermax Café, Hotel & Banquet series cafeteria chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-fire-2/FIRE_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-fire-3",
    "name": "FIRE",
    "category": "cafe-chairs",
    "type": "cafeteria chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-fire-3/FIRE_01.png",
    "badge": "New",
    "description": "FIRE — Layermax Café, Hotel & Banquet series cafeteria chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-fire-3/FIRE_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-fire-4",
    "name": "FIRE",
    "category": "cafe-chairs",
    "type": "cafeteria chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-fire-4/FIRE_01.png",
    "badge": "New",
    "description": "FIRE — Layermax Café, Hotel & Banquet series cafeteria chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-fire-4/FIRE_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-globe",
    "name": "GLOBE",
    "category": "cafe-chairs",
    "type": "cafeteria chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-globe/GLOBE_01.png",
    "badge": "New",
    "description": "GLOBE — Layermax Café, Hotel & Banquet series cafeteria chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-globe/GLOBE_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-hexa",
    "name": "HEXA",
    "category": "cafe-chairs",
    "type": "cafeteria chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-hexa/HEXA_01.png",
    "badge": "New",
    "description": "HEXA — Layermax Café, Hotel & Banquet series cafeteria chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-hexa/HEXA_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-ice-dpc-178",
    "name": "ICE DPC 178",
    "category": "cafe-chairs",
    "type": "café chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-ice-dpc-178/ICE_DPC_178_01.png",
    "badge": "New",
    "description": "ICE DPC 178 — Layermax Café, Hotel & Banquet series café chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-ice-dpc-178/ICE_DPC_178_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-ikon",
    "name": "IKON",
    "category": "cafe-chairs",
    "type": "café chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-ikon/IKON_01.png",
    "badge": "New",
    "description": "IKON — Layermax Café, Hotel & Banquet series café chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-ikon/IKON_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-neon",
    "name": "NEON",
    "category": "cafe-chairs",
    "type": "cafeteria chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-neon/NEON_01.png",
    "badge": "New",
    "description": "NEON — Layermax Café, Hotel & Banquet series cafeteria chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-neon/NEON_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-ola-dpc-112",
    "name": "OLA DPC 112",
    "category": "cafe-chairs",
    "type": "café chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-ola-dpc-112/OLA_DPC_112_01.png",
    "badge": "New",
    "description": "OLA DPC 112 — Layermax Café, Hotel & Banquet series café chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-ola-dpc-112/OLA_DPC_112_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-planet",
    "name": "PLANET",
    "category": "cafe-chairs",
    "type": "café chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-planet/PLANET_01.png",
    "badge": "New",
    "description": "PLANET — Layermax Café, Hotel & Banquet series café chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-planet/PLANET_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-robo-dpc-177",
    "name": "ROBO DPC 177",
    "category": "cafe-chairs",
    "type": "café chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-robo-dpc-177/ROBO_DPC_177_01.png",
    "badge": "New",
    "description": "ROBO DPC 177 — Layermax Café, Hotel & Banquet series café chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-robo-dpc-177/ROBO_DPC_177_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-rosete",
    "name": "ROSETE",
    "category": "cafe-chairs",
    "type": "café chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-rosete/ROSETE_01.png",
    "badge": "New",
    "description": "ROSETE — Layermax Café, Hotel & Banquet series café chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-rosete/ROSETE_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-sweden",
    "name": "SWEDEN",
    "category": "cafe-chairs",
    "type": "cafeteria chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-sweden/SWEDEN_01.png",
    "badge": "New",
    "description": "SWEDEN — Layermax Café, Hotel & Banquet series cafeteria chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-sweden/SWEDEN_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-sweden-2",
    "name": "SWEDEN",
    "category": "cafe-chairs",
    "type": "cafeteria chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-sweden-2/SWEDEN_01.png",
    "badge": "New",
    "description": "SWEDEN — Layermax Café, Hotel & Banquet series cafeteria chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-sweden-2/SWEDEN_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-sweden-3",
    "name": "SWEDEN",
    "category": "cafe-chairs",
    "type": "cafeteria chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-sweden-3/SWEDEN_01.png",
    "badge": "New",
    "description": "SWEDEN — Layermax Café, Hotel & Banquet series cafeteria chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-sweden-3/SWEDEN_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-sweedan",
    "name": "SWEEDAN",
    "category": "cafe-chairs",
    "type": "café chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-sweedan/SWEEDAN_01.png",
    "badge": "New",
    "description": "SWEEDAN — Layermax Café, Hotel & Banquet series café chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-sweedan/SWEEDAN_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-sweedan-2",
    "name": "SWEEDAN",
    "category": "cafe-chairs",
    "type": "café chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-sweedan-2/SWEEDAN_01.png",
    "badge": "New",
    "description": "SWEEDAN — Layermax Café, Hotel & Banquet series café chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-sweedan-2/SWEEDAN_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-tulip",
    "name": "TULIP",
    "category": "cafe-chairs",
    "type": "café chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-tulip/TULIP_01.png",
    "badge": "New",
    "description": "TULIP — Layermax Café, Hotel & Banquet series café chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-tulip/TULIP_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-vision",
    "name": "VISION",
    "category": "cafe-chairs",
    "type": "café chair",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-vision/VISION_01.png",
    "badge": "New",
    "description": "VISION — Layermax Café, Hotel & Banquet series café chair. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-vision/VISION_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-33-round",
    "name": "33 ROUND",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-33-round/33_ROUND_01.png",
    "badge": "New",
    "description": "33 ROUND — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-33-round/33_ROUND_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-buffet-table",
    "name": "BUFFET TABLE",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-buffet-table/BUFFET_TABLE_01.png",
    "badge": "New",
    "description": "BUFFET TABLE — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-buffet-table/BUFFET_TABLE_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-caf-caf-table-base",
    "name": "Café Table Base",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-caf-caf-table-base/Caf_Caf_Table_Base_01.png",
    "badge": "New",
    "description": "Café Table Base — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-caf-caf-table-base/Caf_Caf_Table_Base_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-caf-caf-table-base-2",
    "name": "Café Table Base",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-caf-caf-table-base-2/Caf_Caf_Table_Base_01.png",
    "badge": "New",
    "description": "Café Table Base — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-caf-caf-table-base-2/Caf_Caf_Table_Base_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-caf-caf-table-base-3",
    "name": "Café Table Base",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-caf-caf-table-base-3/Caf_Caf_Table_Base_01.png",
    "badge": "New",
    "description": "Café Table Base — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-caf-caf-table-base-3/Caf_Caf_Table_Base_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-caf-caf-table-base-4",
    "name": "Café Table Base",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-caf-caf-table-base-4/Caf_Caf_Table_Base_01.png",
    "badge": "New",
    "description": "Café Table Base — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-caf-caf-table-base-4/Caf_Caf_Table_Base_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-caf-caf-table-base-5",
    "name": "Café Table Base",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-caf-caf-table-base-5/Caf_Caf_Table_Base_01.png",
    "badge": "New",
    "description": "Café Table Base — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-caf-caf-table-base-5/Caf_Caf_Table_Base_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-center-fold",
    "name": "CENTER FOLD",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-center-fold/CENTER_FOLD_01.png",
    "badge": "New",
    "description": "CENTER FOLD — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-center-fold/CENTER_FOLD_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-convertable",
    "name": "CONVERTABLE",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-convertable/CONVERTABLE_01.png",
    "badge": "New",
    "description": "CONVERTABLE — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-convertable/CONVERTABLE_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-cresent",
    "name": "CRESENT",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-cresent/CRESENT_01.png",
    "badge": "New",
    "description": "CRESENT — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-cresent/CRESENT_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbc-151",
    "name": "DBC 151",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbc-151/DBC_151_01.png",
    "badge": "New",
    "description": "DBC 151 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbc-151/DBC_151_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbc-152",
    "name": "DBC 152",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbc-152/DBC_152_01.png",
    "badge": "New",
    "description": "DBC 152 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbc-152/DBC_152_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbc-156",
    "name": "DBC 156",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbc-156/DBC_156_01.png",
    "badge": "New",
    "description": "DBC 156 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbc-156/DBC_156_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbc-162",
    "name": "DBC 162",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbc-162/DBC_162_01.png",
    "badge": "New",
    "description": "DBC 162 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbc-162/DBC_162_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbc-163",
    "name": "DBC 163",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbc-163/DBC_163_01.png",
    "badge": "New",
    "description": "DBC 163 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbc-163/DBC_163_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbc-166",
    "name": "DBC 166",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbc-166/DBC_166_01.png",
    "badge": "New",
    "description": "DBC 166 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbc-166/DBC_166_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbc-167",
    "name": "DBC 167",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbc-167/DBC_167_01.png",
    "badge": "New",
    "description": "DBC 167 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbc-167/DBC_167_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbc-168",
    "name": "DBC 168",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbc-168/DBC_168_01.png",
    "badge": "New",
    "description": "DBC 168 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbc-168/DBC_168_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbc-169",
    "name": "DBC 169",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbc-169/DBC_169_01.png",
    "badge": "New",
    "description": "DBC 169 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbc-169/DBC_169_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbc-170",
    "name": "DBC 170",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbc-170/DBC_170_01.png",
    "badge": "New",
    "description": "DBC 170 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbc-170/DBC_170_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbc-171",
    "name": "DBC 171",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbc-171/DBC_171_01.png",
    "badge": "New",
    "description": "DBC 171 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbc-171/DBC_171_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbc-172",
    "name": "DBC 172",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbc-172/DBC_172_01.png",
    "badge": "New",
    "description": "DBC 172 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbc-172/DBC_172_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbc-173",
    "name": "DBC 173",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbc-173/DBC_173_01.png",
    "badge": "New",
    "description": "DBC 173 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbc-173/DBC_173_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbc-174",
    "name": "DBC 174",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbc-174/DBC_174_01.png",
    "badge": "New",
    "description": "DBC 174 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbc-174/DBC_174_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dbc-175",
    "name": "DBC 175",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dbc-175/DBC_175_01.png",
    "badge": "New",
    "description": "DBC 175 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dbc-175/DBC_175_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dct-1001",
    "name": "DCT 1001",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dct-1001/DCT_1001_01.png",
    "badge": "New",
    "description": "DCT 1001 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dct-1001/DCT_1001_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dct-1002",
    "name": "DCT 1002",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dct-1002/DCT_1002_01.png",
    "badge": "New",
    "description": "DCT 1002 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dct-1002/DCT_1002_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dct-1004",
    "name": "DCT 1004",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dct-1004/DCT_1004_01.png",
    "badge": "New",
    "description": "DCT 1004 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dct-1004/DCT_1004_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dct-1005",
    "name": "DCT 1005",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dct-1005/DCT_1005_01.png",
    "badge": "New",
    "description": "DCT 1005 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dct-1005/DCT_1005_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dct-1006",
    "name": "DCT 1006",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dct-1006/DCT_1006_01.png",
    "badge": "New",
    "description": "DCT 1006 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dct-1006/DCT_1006_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dct-1007",
    "name": "DCT 1007",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dct-1007/DCT_1007_01.png",
    "badge": "New",
    "description": "DCT 1007 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dct-1007/DCT_1007_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dct-1009",
    "name": "DCT 1009",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dct-1009/DCT_1009_01.png",
    "badge": "New",
    "description": "DCT 1009 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dct-1009/DCT_1009_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dct-1013",
    "name": "DCT 1013",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dct-1013/DCT_1013_01.png",
    "badge": "New",
    "description": "DCT 1013 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dct-1013/DCT_1013_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dct-1014",
    "name": "DCT 1014",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dct-1014/DCT_1014_01.png",
    "badge": "New",
    "description": "DCT 1014 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dct-1014/DCT_1014_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dct-1018",
    "name": "DCT 1018",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dct-1018/DCT_1018_01.png",
    "badge": "New",
    "description": "DCT 1018 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dct-1018/DCT_1018_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dct-1019",
    "name": "DCT 1019",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dct-1019/DCT_1019_01.png",
    "badge": "New",
    "description": "DCT 1019 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dct-1019/DCT_1019_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dct-1021",
    "name": "DCT 1021",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dct-1021/DCT_1021_01.png",
    "badge": "New",
    "description": "DCT 1021 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dct-1021/DCT_1021_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dct-1022",
    "name": "DCT 1022",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dct-1022/DCT_1022_01.png",
    "badge": "New",
    "description": "DCT 1022 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dct-1022/DCT_1022_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dct-1025",
    "name": "DCT 1025",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dct-1025/DCT_1025_01.png",
    "badge": "New",
    "description": "DCT 1025 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dct-1025/DCT_1025_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dct-1026",
    "name": "DCT 1026",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dct-1026/DCT_1026_01.png",
    "badge": "New",
    "description": "DCT 1026 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dct-1026/DCT_1026_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dct-1030",
    "name": "DCT 1030",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dct-1030/DCT_1030_01.png",
    "badge": "New",
    "description": "DCT 1030 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dct-1030/DCT_1030_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dct-1032",
    "name": "DCT 1032",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dct-1032/DCT_1032_01.png",
    "badge": "New",
    "description": "DCT 1032 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dct-1032/DCT_1032_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dct-1034",
    "name": "DCT 1034",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dct-1034/DCT_1034_01.png",
    "badge": "New",
    "description": "DCT 1034 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dct-1034/DCT_1034_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dct-1035",
    "name": "DCT 1035",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dct-1035/DCT_1035_01.png",
    "badge": "New",
    "description": "DCT 1035 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dct-1035/DCT_1035_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dct-1037",
    "name": "DCT 1037",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dct-1037/DCT_1037_01.png",
    "badge": "New",
    "description": "DCT 1037 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dct-1037/DCT_1037_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dct-1038",
    "name": "DCT 1038",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dct-1038/DCT_1038_01.png",
    "badge": "New",
    "description": "DCT 1038 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dct-1038/DCT_1038_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dct-1038-2",
    "name": "DCT 1038",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dct-1038-2/DCT_1038_01.png",
    "badge": "New",
    "description": "DCT 1038 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dct-1038-2/DCT_1038_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dct-1038-3",
    "name": "DCT 1038",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dct-1038-3/DCT_1038_01.png",
    "badge": "New",
    "description": "DCT 1038 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dct-1038-3/DCT_1038_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dct-1044",
    "name": "DCT 1044",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dct-1044/DCT_1044_01.png",
    "badge": "New",
    "description": "DCT 1044 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dct-1044/DCT_1044_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dct-1045",
    "name": "DCT 1045",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dct-1045/DCT_1045_01.png",
    "badge": "New",
    "description": "DCT 1045 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dct-1045/DCT_1045_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dct-1047",
    "name": "DCT 1047",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dct-1047/DCT_1047_01.png",
    "badge": "New",
    "description": "DCT 1047 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dct-1047/DCT_1047_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dct-1049",
    "name": "DCT 1049",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dct-1049/DCT_1049_01.png",
    "badge": "New",
    "description": "DCT 1049 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dct-1049/DCT_1049_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dct-1050",
    "name": "DCT 1050",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dct-1050/DCT_1050_01.png",
    "badge": "New",
    "description": "DCT 1050 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dct-1050/DCT_1050_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dct-1051",
    "name": "DCT 1051",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dct-1051/DCT_1051_01.png",
    "badge": "New",
    "description": "DCT 1051 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dct-1051/DCT_1051_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dct-1052",
    "name": "DCT 1052",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dct-1052/DCT_1052_01.png",
    "badge": "New",
    "description": "DCT 1052 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dct-1052/DCT_1052_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dct-1053",
    "name": "DCT 1053",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dct-1053/DCT_1053_01.png",
    "badge": "New",
    "description": "DCT 1053 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dct-1053/DCT_1053_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dct-1054",
    "name": "DCT 1054",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dct-1054/DCT_1054_01.png",
    "badge": "New",
    "description": "DCT 1054 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dct-1054/DCT_1054_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dct-1055",
    "name": "DCT 1055",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dct-1055/DCT_1055_01.png",
    "badge": "New",
    "description": "DCT 1055 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dct-1055/DCT_1055_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dct-1056",
    "name": "DCT 1056",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dct-1056/DCT_1056_01.png",
    "badge": "New",
    "description": "DCT 1056 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dct-1056/DCT_1056_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-dct-1057",
    "name": "DCT 1057",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-dct-1057/DCT_1057_01.png",
    "badge": "New",
    "description": "DCT 1057 — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-dct-1057/DCT_1057_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-half-round",
    "name": "HALF ROUND",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-half-round/HALF_ROUND_01.png",
    "badge": "New",
    "description": "HALF ROUND — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-half-round/HALF_ROUND_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-jumbo-round",
    "name": "JUMBO ROUND",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-jumbo-round/JUMBO_ROUND_01.png",
    "badge": "New",
    "description": "JUMBO ROUND — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-jumbo-round/JUMBO_ROUND_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-metal-table-with",
    "name": "METAL TABLE WITH",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-metal-table-with/METAL_TABLE_WITH_01.png",
    "badge": "New",
    "description": "METAL TABLE WITH — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-metal-table-with/METAL_TABLE_WITH_01.png"
    ],
    "colors": []
  },
  {
    "id": "cafe-quuater",
    "name": "QUUATER",
    "category": "cafe-tables",
    "type": "café table base",
    "material": "Metal / PP / Wood",
    "designer": "Layermax",
    "rating": 4.6,
    "img": "assets/catalogue_new/cafe-restaurant/cafe-quuater/QUUATER_01.png",
    "badge": "New",
    "description": "QUUATER — Layermax Café, Hotel & Banquet series café table base. Commercial-grade, stackable, built for high-traffic hospitality spaces.",
    "images": [
      "assets/catalogue_new/cafe-restaurant/cafe-quuater/QUUATER_01.png"
    ],
    "colors": []
  },
  {
    "id": "lmw-035",
    "name": "LMW-035",
    "category": "center-tables",
    "type": "table",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.5,
    "img": "assets/assetsCatalogue/categorized/LMW-035/LMW-035.png",
    "badge": "",
    "description": "The LMW-035 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Red colorway for your home or executive suite.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-035/LMW-035.png"
    ],
    "colors": [
      "Red"
    ],
    "tags": [
      "coffee table"
    ]
  },
  {
    "id": "lmw-036",
    "name": "LMW-036",
    "category": "center-tables",
    "type": "table",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/LMW-036/LMW-036.png",
    "badge": "",
    "description": "The LMW-036 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Brown colorway for your home or executive suite.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-036/LMW-036.png"
    ],
    "colors": [
      "Brown"
    ],
    "tags": [
      "coffee table"
    ]
  },
  {
    "id": "lmw-037",
    "name": "LMW-037",
    "category": "center-tables",
    "type": "table",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/LMW-037/LMW-037.png",
    "badge": "New",
    "description": "The LMW-037 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Brown colorway for your home or executive suite.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-037/LMW-037.png"
    ],
    "colors": [
      "Brown"
    ],
    "tags": [
      "coffee table"
    ]
  },
  {
    "id": "lmw-038",
    "name": "LMW-038",
    "category": "center-tables",
    "type": "table",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/LMW-038/LMW-038.png",
    "badge": "",
    "description": "The LMW-038 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Brown colorway for your home or executive suite.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-038/LMW-038.png"
    ],
    "colors": [
      "Brown"
    ],
    "tags": [
      "coffee table"
    ]
  },
  {
    "id": "lmw-039",
    "name": "LMW-039",
    "category": "center-tables",
    "type": "table",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.9,
    "img": "assets/assetsCatalogue/categorized/LMW-039/LMW-039_2.png",
    "badge": "",
    "description": "The LMW-039 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Grey or Brown colorway for your home or executive suite.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-039/LMW-039_2.png"
    ],
    "colors": [
      "Grey",
      "Brown"
    ],
    "tags": [
      "coffee table"
    ]
  },
  {
    "id": "lmw-040",
    "name": "LMW-040",
    "category": "center-tables",
    "type": "table",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/LMW-040/LMW-040.png",
    "badge": "Premium",
    "description": "The LMW-040 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Red colorway for your home or executive suite.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-040/LMW-040.png"
    ],
    "colors": [
      "Red"
    ],
    "tags": [
      "coffee table"
    ]
  },
  {
    "id": "lmw-041",
    "name": "LMW-041",
    "category": "center-tables",
    "type": "table",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.5,
    "img": "assets/assetsCatalogue/categorized/LMW-041/LMW-041_2.png",
    "badge": "",
    "description": "The LMW-041 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Grey or Brown colorway for your home or executive suite.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-041/LMW-041_2.png"
    ],
    "colors": [
      "Grey",
      "Brown"
    ],
    "tags": [
      "coffee table"
    ]
  },
  {
    "id": "lmw-042",
    "name": "LMW-042",
    "category": "center-tables",
    "type": "table",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/LMW-042/LMW-042.png",
    "badge": "",
    "description": "The LMW-042 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Brown colorway for your home or executive suite.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-042/LMW-042.png"
    ],
    "colors": [
      "Brown"
    ],
    "tags": [
      "coffee table"
    ]
  },
  {
    "id": "lmw-043",
    "name": "LMW-043",
    "category": "center-tables",
    "type": "table",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/LMW-043/LMW-043.png",
    "badge": "",
    "description": "The LMW-043 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Red colorway for your home or executive suite.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-043/LMW-043.png"
    ],
    "colors": [
      "Red"
    ],
    "tags": [
      "coffee table"
    ]
  },
  {
    "id": "lmw-044",
    "name": "LMW-044",
    "category": "center-tables",
    "type": "table",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/LMW-044/LMW-044.png",
    "badge": "",
    "description": "The LMW-044 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Red colorway for your home or executive suite.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-044/LMW-044.png"
    ],
    "colors": [
      "Red"
    ],
    "tags": [
      "coffee table"
    ]
  },
  {
    "id": "lmw-045",
    "name": "LMW-045",
    "category": "center-tables",
    "type": "table",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/LMW-045/LMW-045.png",
    "badge": "",
    "description": "The LMW-045 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Red colorway for your home or executive suite.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-045/LMW-045.png"
    ],
    "colors": [
      "Red"
    ],
    "tags": [
      "coffee table"
    ]
  },
  {
    "id": "lmw-046",
    "name": "LMW-046",
    "category": "center-tables",
    "type": "table",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.5,
    "img": "assets/assetsCatalogue/categorized/LMW-046/LMW-046.png",
    "badge": "",
    "description": "The LMW-046 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Brown colorway for your home or executive suite.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-046/LMW-046.png"
    ],
    "colors": [
      "Brown"
    ],
    "tags": [
      "coffee table"
    ]
  },
  {
    "id": "lmw-047",
    "name": "LMW-047",
    "category": "center-tables",
    "type": "table",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/LMW-047/LMW-047.png",
    "badge": "",
    "description": "The LMW-047 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Brown colorway for your home or executive suite.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-047/LMW-047.png"
    ],
    "colors": [
      "Brown"
    ],
    "tags": [
      "coffee table"
    ]
  },
  {
    "id": "lmw-048",
    "name": "LMW-048",
    "category": "center-tables",
    "type": "table",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/LMW-048/LMW-048.png",
    "badge": "",
    "description": "The LMW-048 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Red colorway for your home or executive suite.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-048/LMW-048.png"
    ],
    "colors": [
      "Red"
    ],
    "tags": [
      "coffee table"
    ]
  },
  {
    "id": "lmw-049",
    "name": "LMW-049",
    "category": "center-tables",
    "type": "table",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/LMW-049/LMW-049.png",
    "badge": "Bestseller",
    "description": "The LMW-049 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Brown colorway for your home or executive suite.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-049/LMW-049.png"
    ],
    "colors": [
      "Brown"
    ],
    "tags": [
      "coffee table"
    ]
  },
  {
    "id": "lmw-050",
    "name": "LMW-050",
    "category": "center-tables",
    "type": "table",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.9,
    "img": "assets/assetsCatalogue/categorized/LMW-050/LMW-050.png",
    "badge": "",
    "description": "The LMW-050 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Brown colorway for your home or executive suite.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-050/LMW-050.png"
    ],
    "colors": [
      "Brown"
    ],
    "tags": [
      "coffee table"
    ]
  },
  {
    "id": "lmw-051",
    "name": "LMW-051",
    "category": "center-tables",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/LMW-051/LMW-051.png",
    "badge": "Bestseller",
    "description": "The LMW-051 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Brown colorway for your home or executive suite.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-051/LMW-051.png"
    ],
    "colors": [
      "Brown"
    ],
    "tags": [
      "coffee table"
    ]
  },
  {
    "id": "lmw-052",
    "name": "LMW-052",
    "category": "center-tables",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/LMW-052/LMW-052.png",
    "badge": "",
    "description": "The LMW-052 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Red colorway for your home or executive suite.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-052/LMW-052.png"
    ],
    "colors": [
      "Red"
    ],
    "tags": [
      "coffee table"
    ]
  },
  {
    "id": "lmw-053",
    "name": "LMW-053",
    "category": "center-tables",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/LMW-053/LMW-053.png",
    "badge": "",
    "description": "The LMW-053 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Brown colorway for your home or executive suite.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-053/LMW-053.png"
    ],
    "colors": [
      "Brown"
    ],
    "tags": [
      "coffee table"
    ]
  },
  {
    "id": "lmw-054",
    "name": "LMW-054",
    "category": "center-tables",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/LMW-054/LMW-054_4.png",
    "badge": "",
    "description": "The LMW-054 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined White, Grey or Brown colorway for your home or executive suite.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-054/LMW-054_4.png"
    ],
    "colors": [
      "White",
      "Grey",
      "Brown"
    ],
    "tags": [
      "coffee table"
    ]
  },
  {
    "id": "chairs-aludra",
    "name": "Aludra",
    "category": "chairs",
    "type": "chair",
    "material": "Fabric / Wood",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/chairs/chairs-aludra/Aludra_01.png",
    "badge": "New",
    "description": "Aludra chair. A premium Layermax chair delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: Chair LxWxH 960 x 900 x 915.",
    "images": [
      "assets/catalogue_new/chairs/chairs-aludra/Aludra_01.png"
    ],
    "colors": []
  },
  {
    "id": "chairs-astrae",
    "name": "Astrae",
    "category": "chairs",
    "type": "chair",
    "material": "Fabric / Wood",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/chairs/chairs-astrae/Astrae_01.png",
    "badge": "New",
    "description": "Astrae chair. A premium Layermax chair delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: Chair LxWxH 710 x 900 x 1060.",
    "images": [
      "assets/catalogue_new/chairs/chairs-astrae/Astrae_01.png"
    ],
    "colors": []
  },
  {
    "id": "chairs-celene",
    "name": "Celene",
    "category": "chairs",
    "type": "chair",
    "material": "Fabric / Wood",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/chairs/chairs-celene/Celene_01.png",
    "badge": "New",
    "description": "Celene chair. A premium Layermax chair delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: Chair LxWxH 920 x 965 x 910.",
    "images": [
      "assets/catalogue_new/chairs/chairs-celene/Celene_01.png",
      "assets/catalogue_new/chairs/chairs-celene/Celene_02.png"
    ],
    "colors": []
  },
  {
    "id": "chairs-cosma",
    "name": "Cosma",
    "category": "chairs",
    "type": "chair",
    "material": "Fabric / Wood",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/chairs/chairs-cosma/Cosma_01.png",
    "badge": "New",
    "description": "Cosma chair. A premium Layermax chair delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: Chair LxWxH 1470 x 965 x 850.",
    "images": [
      "assets/catalogue_new/chairs/chairs-cosma/Cosma_01.png"
    ],
    "colors": []
  },
  {
    "id": "chairs-cressida",
    "name": "Cressida",
    "category": "chairs",
    "type": "chair",
    "material": "Fabric / Wood",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/chairs/chairs-cressida/Cressida_01.png",
    "badge": "New",
    "description": "Cressida chair. A premium Layermax chair delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: Chair LxWxH 885 x 865 x 1035.",
    "images": [
      "assets/catalogue_new/chairs/chairs-cressida/Cressida_01.png"
    ],
    "colors": []
  },
  {
    "id": "rubco-easy-chair-cloth-type-big",
    "name": "Easy Chair Cloth Type (Big)",
    "category": "chairs",
    "type": "chair",
    "material": "Rubberwood",
    "designer": "Rubco Premium",
    "rating": 4.4,
    "badge": "",
    "description": "Rubco Furniture are made from rubber wood — a pure solid wood. It is eco-friendly solid wood, not a wood substitute. It is nearly as strong and durable as teak. It offers unmatched dimensional stability.",
    "img": "assets/RubcoAsset/easy_chair_cloth_type_big/easy_chair_cloth_type_big.jpg",
    "images": [
      "assets/RubcoAsset/easy_chair_cloth_type_big/easy_chair_cloth_type_big.jpg",
      "assets/RubcoAsset/easy_chair_cloth_type_big/easy_chair_cloth_type_big_1.jpg",
      "assets/RubcoAsset/easy_chair_cloth_type_big/easy_chair_cloth_type_big_2.jpg",
      "assets/RubcoAsset/easy_chair_cloth_type_big/easy_chair_cloth_type_big_3.jpg",
      "assets/RubcoAsset/easy_chair_cloth_type_big/easy_chair_cloth_type_big_4.jpg",
      "assets/RubcoAsset/easy_chair_cloth_type_big/easy_chair_cloth_type_big_5.jpg"
    ],
    "listingUrl": "https://rubcobangalore.com/furniture/easy-chair-cloth-type-big",
    "colors": [
      "Honey",
      "Teak"
    ]
  },
  {
    "id": "rubco-easy-chair-cloth-type-small",
    "name": "Easy Chair Cloth Type (Small)",
    "category": "chairs",
    "type": "chair",
    "material": "Rubberwood",
    "designer": "Rubco Premium",
    "rating": 4.7,
    "badge": "",
    "description": "Rubco Furniture are made from rubber wood — a pure solid wood. It is eco-friendly solid wood, not a wood substitute. It is nearly as strong and durable as teak. It offers unmatched dimensional stability.",
    "img": "assets/RubcoAsset/easy_chair_cloth_type_small/easy_chair_cloth_type_small.jpg",
    "images": [
      "assets/RubcoAsset/easy_chair_cloth_type_small/easy_chair_cloth_type_small.jpg",
      "assets/RubcoAsset/easy_chair_cloth_type_small/easy_chair_cloth_type_small_1.jpg",
      "assets/RubcoAsset/easy_chair_cloth_type_small/easy_chair_cloth_type_small_2.jpg",
      "assets/RubcoAsset/easy_chair_cloth_type_small/easy_chair_cloth_type_small_3.jpg",
      "assets/RubcoAsset/easy_chair_cloth_type_small/easy_chair_cloth_type_small_4.jpg"
    ],
    "listingUrl": "https://rubcobangalore.com/furniture/easy-chair-cloth-type-small",
    "colors": [
      "Honey",
      "Teak"
    ]
  },
  {
    "id": "chairs-eos",
    "name": "Eos",
    "category": "chairs",
    "type": "chair",
    "material": "Fabric / Wood",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/chairs/chairs-eos/Eos_01.png",
    "badge": "New",
    "description": "Eos chair. A premium Layermax chair delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: Chair LxWxH 1060 x 915 x 745.",
    "images": [
      "assets/catalogue_new/chairs/chairs-eos/Eos_01.png"
    ],
    "colors": []
  },
  {
    "id": "rubco-grand-father-chair",
    "name": "Grand Father Chair",
    "category": "chairs",
    "type": "chair",
    "material": "Rubberwood",
    "designer": "Rubco Premium",
    "rating": 4.8,
    "badge": "",
    "description": "Rubco Furniture are made from rubber wood — a pure solid wood. It is eco-friendly solid wood, not a wood substitute. It is nearly as strong and durable as teak. It offers unmatched dimensional stability.",
    "img": "assets/RubcoAsset/grand_father_chair/grand_father_chair.jpg",
    "images": [
      "assets/RubcoAsset/grand_father_chair/grand_father_chair.jpg",
      "assets/RubcoAsset/grand_father_chair/grand_father_chair_1.jpg",
      "assets/RubcoAsset/grand_father_chair/grand_father_chair_2.jpg",
      "assets/RubcoAsset/grand_father_chair/grand_father_chair_3.jpg"
    ],
    "listingUrl": "https://rubcobangalore.com/furniture/grand-father-chair",
    "colors": [
      "Honey",
      "Teak"
    ]
  },
  {
    "id": "chairs-halcyon",
    "name": "Halcyon",
    "category": "chairs",
    "type": "chair",
    "material": "Fabric / Wood",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/chairs/chairs-halcyon/Halcyon_01.png",
    "badge": "New",
    "description": "Halcyon chair. A premium Layermax chair delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: Chair LxWxH 905 x 905 x 930.",
    "images": [
      "assets/catalogue_new/chairs/chairs-halcyon/Halcyon_01.png"
    ],
    "colors": []
  },
  {
    "id": "lmw-001",
    "name": "LMW-001",
    "category": "chairs",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.9,
    "img": "assets/assetsCatalogue/categorized/LMW-001/LMW-001.png",
    "badge": "",
    "description": "The LMW-001 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-001/LMW-001.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "lmw-002",
    "name": "LMW-002",
    "category": "chairs",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/LMW-002/LMW-002_2.png",
    "badge": "",
    "description": "The LMW-002 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Grey or Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-002/LMW-002_2.png"
    ],
    "colors": [
      "Grey",
      "Red"
    ]
  },
  {
    "id": "lmw-003",
    "name": "LMW-003",
    "category": "chairs",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/LMW-003/LMW-003.png",
    "badge": "",
    "description": "The LMW-003 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Brown tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-003/LMW-003.png"
    ],
    "colors": [
      "Brown"
    ]
  },
  {
    "id": "lmw-004",
    "name": "LMW-004",
    "category": "chairs",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/LMW-004/LMW-004.png",
    "badge": "",
    "description": "The LMW-004 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-004/LMW-004.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "lmw-005",
    "name": "LMW-005",
    "category": "chairs",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/LMW-005/LMW-005.png",
    "badge": "",
    "description": "The LMW-005 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-005/LMW-005.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "lmw-006",
    "name": "LMW-006",
    "category": "chairs",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/LMW-006/LMW-006.png",
    "badge": "",
    "description": "The LMW-006 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Brown tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-006/LMW-006.png"
    ],
    "colors": [
      "Brown"
    ]
  },
  {
    "id": "lmw-007",
    "name": "LMW-007",
    "category": "chairs",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/LMW-007/LMW-007.png",
    "badge": "",
    "description": "The LMW-007 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-007/LMW-007.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "lmw-008",
    "name": "LMW-008",
    "category": "chairs",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/LMW-008/LMW-008.png",
    "badge": "New",
    "description": "A perfect blend of comfort and style. The LMW-008 chair showcases a premium blend of classic craftsmanship and modern design. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-008/LMW-008.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "lmw-009",
    "name": "LMW-009",
    "category": "chairs",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/LMW-009/LMW-009.png",
    "badge": "",
    "description": "The LMW-009 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-009/LMW-009.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "lmw-010",
    "name": "LMW-010",
    "category": "chairs",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/LMW-010/LMW-010.png",
    "badge": "Bestseller",
    "description": "The LMW-010 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Yellow tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-010/LMW-010.png"
    ],
    "colors": [
      "Yellow"
    ]
  },
  {
    "id": "lmw-011",
    "name": "LMW-011",
    "category": "chairs",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/LMW-011/LMW-011.png",
    "badge": "",
    "description": "The LMW-011 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-011/LMW-011.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "lmw-012",
    "name": "LMW-012",
    "category": "chairs",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/LMW-012/LMW-012.png",
    "badge": "",
    "description": "The LMW-012 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-012/LMW-012.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "lmw-013",
    "name": "LMW-013",
    "category": "chairs",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/LMW-013/LMW-013.png",
    "badge": "",
    "description": "The LMW-013 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-013/LMW-013.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "lmw-014",
    "name": "LMW-014",
    "category": "chairs",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/LMW-014/LMW-014.png",
    "badge": "",
    "description": "The LMW-014 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-014/LMW-014.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "lmw-015",
    "name": "LMW-015",
    "category": "chairs",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/LMW-015/LMW-015.png",
    "badge": "New",
    "description": "The LMW-015 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-015/LMW-015.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "lmw-016",
    "name": "LMW-016",
    "category": "chairs",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/LMW-016/LMW-016.png",
    "badge": "",
    "description": "The LMW-016 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red or Brown tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-016/LMW-016.png",
      "assets/assetsCatalogue/categorized/LMW-016/LMW-016_2.png"
    ],
    "colors": [
      "Red",
      "Brown"
    ]
  },
  {
    "id": "lmw-017",
    "name": "LMW-017",
    "category": "chairs",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/LMW-017/LMW-017.png",
    "badge": "",
    "description": "The LMW-017 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Brown tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-017/LMW-017.png"
    ],
    "colors": [
      "Brown"
    ]
  },
  {
    "id": "lmw-018",
    "name": "LMW-018",
    "category": "chairs",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/LMW-018/LMW-018.png",
    "badge": "",
    "description": "The LMW-018 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-018/LMW-018.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "lmw-019",
    "name": "LMW-019",
    "category": "chairs",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.9,
    "img": "assets/assetsCatalogue/categorized/LMW-019/LMW-019.png",
    "badge": "",
    "description": "The LMW-019 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-019/LMW-019.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "lmw-020",
    "name": "LMW-020",
    "category": "chairs",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/LMW-020/LMW-020_2.png",
    "badge": "",
    "description": "The LMW-020 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful White or Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-020/LMW-020_2.png"
    ],
    "colors": [
      "White",
      "Red"
    ]
  },
  {
    "id": "lmw-021",
    "name": "LMW-021",
    "category": "chairs",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.5,
    "img": "assets/assetsCatalogue/categorized/LMW-021/LMW-021.png",
    "badge": "New",
    "description": "Combining ergonomic comfort with timeless wooden aesthetics. The LMW-021 chair showcases a premium blend of classic craftsmanship and modern design. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Brown or Blue tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-021/LMW-021.png",
      "assets/assetsCatalogue/categorized/LMW-021/LMW-021_2.png",
      "assets/assetsCatalogue/categorized/LMW-021/LMW-021_4.png",
      "assets/assetsCatalogue/categorized/LMW-021/LMW-021_5.png"
    ],
    "colors": [
      "Brown",
      "Blue"
    ]
  },
  {
    "id": "lmw-022",
    "name": "LMW-022",
    "category": "chairs",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/LMW-022/LMW-022.png",
    "badge": "",
    "description": "A perfect blend of comfort and style. The LMW-022 chair showcases a premium blend of classic craftsmanship and modern design. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Blue tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-022/LMW-022.png"
    ],
    "colors": [
      "Blue"
    ]
  },
  {
    "id": "chairs-nova",
    "name": "Nova",
    "category": "chairs",
    "type": "chair",
    "material": "Fabric / Wood",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/chairs/chairs-nova/Nova_01.png",
    "badge": "New",
    "description": "Nova chair. A premium Layermax chair delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: Chair LxWxH 855 x 930 x 975.",
    "images": [
      "assets/catalogue_new/chairs/chairs-nova/Nova_01.png"
    ],
    "colors": []
  },
  {
    "id": "chairs-orionis",
    "name": "Orionis",
    "category": "chairs",
    "type": "chair",
    "material": "Fabric / Wood",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/chairs/chairs-orionis/Orionis_01.png",
    "badge": "New",
    "description": "Orionis chair. A premium Layermax chair delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: Chair LxWxH 920 x 965 x 910.",
    "images": [
      "assets/catalogue_new/chairs/chairs-orionis/Orionis_01.png"
    ],
    "colors": []
  },
  {
    "id": "chairs-phobos",
    "name": "Phobos",
    "category": "chairs",
    "type": "chair",
    "material": "Fabric / Wood",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/chairs/chairs-phobos/Phobos_01.png",
    "badge": "New",
    "description": "Phobos chair. A premium Layermax chair delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: Chair LxWxH 870 x 840 x 1030.",
    "images": [
      "assets/catalogue_new/chairs/chairs-phobos/Phobos_01.png"
    ],
    "colors": []
  },
  {
    "id": "chairs-polaris",
    "name": "Polaris",
    "category": "chairs",
    "type": "chair",
    "material": "Fabric / Wood",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/chairs/chairs-polaris/Polaris_01.png",
    "badge": "New",
    "description": "Polaris chair. A premium Layermax chair delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: Chair LxWxH 890 x 880 x 955.",
    "images": [
      "assets/catalogue_new/chairs/chairs-polaris/Polaris_01.png"
    ],
    "colors": []
  },
  {
    "id": "chairs-selene",
    "name": "Selene",
    "category": "chairs",
    "type": "chair",
    "material": "Fabric / Wood",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/chairs/chairs-selene/Selene_03.png",
    "badge": "New",
    "description": "Selene chair. A premium Layermax chair delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: Chair LxWxH 775 x 875 x 810.",
    "images": [
      "assets/catalogue_new/chairs/chairs-selene/Selene_03.png",
      "assets/catalogue_new/chairs/chairs-selene/Selene_02.png"
    ],
    "colors": []
  },
  {
    "id": "chairs-spica",
    "name": "Spica",
    "category": "chairs",
    "type": "chair",
    "material": "Fabric / Wood",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/chairs/chairs-spica/Spica_01.png",
    "badge": "New",
    "description": "Spica chair. A premium Layermax chair delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: Chair LxWxH 725 x 975 x 1065.",
    "images": [
      "assets/catalogue_new/chairs/chairs-spica/Spica_01.png"
    ],
    "colors": []
  },
  {
    "id": "chairs-thalassa",
    "name": "Thalassa",
    "category": "chairs",
    "type": "chair",
    "material": "Fabric / Wood",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/chairs/chairs-thalassa/Thalassa_01.png",
    "badge": "New",
    "description": "Thalassa chair. A premium Layermax chair delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: Chair LxWxH 860 x 820 x 810.",
    "images": [
      "assets/catalogue_new/chairs/chairs-thalassa/Thalassa_01.png"
    ],
    "colors": []
  },
  {
    "id": "chairs-vesper",
    "name": "Vesper",
    "category": "chairs",
    "type": "chair",
    "material": "Fabric / Wood",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/chairs/chairs-vesper/Vesper_03.png",
    "badge": "New",
    "description": "Vesper chair. A premium Layermax chair delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: Chair LxWxH 960 x 905 x 850.",
    "images": [
      "assets/catalogue_new/chairs/chairs-vesper/Vesper_03.png"
    ],
    "colors": []
  },
  {
    "id": "corner-sofas-amethyst",
    "name": "Amethyst",
    "category": "corner-sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/corner-sofas/corner-sofas-amethyst/Amethyst_01.png",
    "badge": "New",
    "description": "Amethyst — LAVISH series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 3 Seater LxWxH 1800 x 915 x 960; Corner LxWxH 2160 x 915 x 960.",
    "images": [
      "assets/catalogue_new/corner-sofas/corner-sofas-amethyst/Amethyst_01.png",
      "assets/catalogue_new/corner-sofas/corner-sofas-amethyst/Amethyst_02.png"
    ],
    "colors": []
  },
  {
    "id": "corner-sofas-emerald",
    "name": "Emerald",
    "category": "corner-sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/corner-sofas/corner-sofas-emerald/Emerald_01.png",
    "badge": "New",
    "description": "Emerald — LAVISH series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 3 Seater Armless LxWxH 1795 x 1100 x 780; 1 Seater Armless LxWxH 810 x 1100 x 780; Lounger LxWxH 1755 x 1000 x 780.",
    "images": [
      "assets/catalogue_new/corner-sofas/corner-sofas-emerald/Emerald_01.png",
      "assets/catalogue_new/corner-sofas/corner-sofas-emerald/Emerald_02.png"
    ],
    "colors": []
  },
  {
    "id": "corner-sofas-garnet",
    "name": "Garnet",
    "category": "corner-sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/corner-sofas/corner-sofas-garnet/Garnet_02.png",
    "badge": "New",
    "description": "Garnet — LAVISH series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 3 Seater LxWxH 1970 x 810 x 915; Lounger LxWxH 1545 x 805 x 915.",
    "images": [
      "assets/catalogue_new/corner-sofas/corner-sofas-garnet/Garnet_02.png",
      "assets/catalogue_new/corner-sofas/corner-sofas-garnet/Garnet_01.png"
    ],
    "colors": []
  },
  {
    "id": "corner-sofas-onyx",
    "name": "Onyx",
    "category": "corner-sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/corner-sofas/corner-sofas-onyx/Onyx_01.png",
    "badge": "New",
    "description": "Onyx — LAVISH series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 3 Seater LxWxH 1990 x 840 x 920; Lounger LxWxH 2110 x 865 x 920.",
    "images": [
      "assets/catalogue_new/corner-sofas/corner-sofas-onyx/Onyx_01.png",
      "assets/catalogue_new/corner-sofas/corner-sofas-onyx/Onyx_02.png"
    ],
    "colors": []
  },
  {
    "id": "corner-sofas-opal",
    "name": "Opal",
    "category": "corner-sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/corner-sofas/corner-sofas-opal/Opal_02.png",
    "badge": "New",
    "description": "Opal — LAVISH series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: Corner LxWxH 1200 x 1200 x 740; 1 Seater Armless LxWxH 910 x 1030 x 740; 1 Seater With Arm LxWxH 1180 x 1030 x 740.",
    "images": [
      "assets/catalogue_new/corner-sofas/corner-sofas-opal/Opal_02.png",
      "assets/catalogue_new/corner-sofas/corner-sofas-opal/Opal_01.png"
    ],
    "colors": []
  },
  {
    "id": "corner-sofas-ruby",
    "name": "Ruby",
    "category": "corner-sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/corner-sofas/corner-sofas-ruby/Ruby_02.png",
    "badge": "New",
    "description": "Ruby — LAVISH series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: Corner LxWxH 920 x 920 x 945; 3 Seater Armless LxWxH 1590 x 970 x 945; 3 Seater With Arm LxWxH 1770 x 970 x 945; Lounger LxWxH 1760 x 1000 x 945.",
    "images": [
      "assets/catalogue_new/corner-sofas/corner-sofas-ruby/Ruby_02.png",
      "assets/catalogue_new/corner-sofas/corner-sofas-ruby/Ruby_01.png"
    ],
    "colors": []
  },
  {
    "id": "corner-sofas-sapphire",
    "name": "Sapphire",
    "category": "corner-sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/corner-sofas/corner-sofas-sapphire/Sapphire_01.png",
    "badge": "New",
    "description": "Sapphire — LAVISH series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 3 Seater LxWxH 2300 x 1080 x 940; Corner LxWxH 1050 x 1050 x 940.",
    "images": [
      "assets/catalogue_new/corner-sofas/corner-sofas-sapphire/Sapphire_01.png",
      "assets/catalogue_new/corner-sofas/corner-sofas-sapphire/Sapphire_02.png"
    ],
    "colors": []
  },
  {
    "id": "corner-sofas-topaz",
    "name": "Topaz",
    "category": "corner-sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/corner-sofas/corner-sofas-topaz/Topaz_02.png",
    "badge": "New",
    "description": "Topaz — LAVISH series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 3 Seater LxWxH 1965 x 900 x 925; Lounger LxWxH 1695 x 805 x 925.",
    "images": [
      "assets/catalogue_new/corner-sofas/corner-sofas-topaz/Topaz_02.png",
      "assets/catalogue_new/corner-sofas/corner-sofas-topaz/Topaz_01.png"
    ],
    "colors": []
  },
  {
    "id": "de_grid",
    "name": "De-Grid",
    "category": "dining-tables",
    "type": "table",
    "material": "Desk",
    "designer": "Bosq Ergonomics",
    "rating": 4.3,
    "badge": "",
    "description": "DE-GRID is a sturdy pantry table set designed for communal spaces, featuring a durable table with a metal frame construction paired with two matching benches. Its minimal and robust design ensures both functionality and long-lasting use.",
    "img": "assets/products_catalog_images/De-Grid/De_Grid_01.png",
    "images": [
      "assets/products_catalog_images/De-Grid/De_Grid_01.png"
    ],
    "colors": [],
    "tags": [
      "coffee table"
    ]
  },
  {
    "id": "rubco-dining-table-round-with-empire-leg-40",
    "name": "Dining Table (Round) with Empire Leg 40''",
    "category": "dining-tables",
    "type": "table",
    "material": "Rubberwood",
    "designer": "Rubco Premium",
    "rating": 4.4,
    "badge": "",
    "description": "Rubco Furniture are made from rubber wood — a pure solid wood. It is eco-friendly solid wood, not a wood substitute. It is nearly as strong and durable as teak. It offers unmatched dimensional stability.",
    "img": "assets/RubcoAsset/dining_table_round_with_empire_leg_40/dining_table_round_with_empire_leg_40.jpg",
    "images": [
      "assets/RubcoAsset/dining_table_round_with_empire_leg_40/dining_table_round_with_empire_leg_40.jpg",
      "assets/RubcoAsset/dining_table_round_with_empire_leg_40/dining_table_round_with_empire_leg_40_1.jpg",
      "assets/RubcoAsset/dining_table_round_with_empire_leg_40/dining_table_round_with_empire_leg_40_2.jpg",
      "assets/RubcoAsset/dining_table_round_with_empire_leg_40/dining_table_round_with_empire_leg_40_3.jpg",
      "assets/RubcoAsset/dining_table_round_with_empire_leg_40/dining_table_round_with_empire_leg_40_4.jpg"
    ],
    "listingUrl": "https://rubcobangalore.com/furniture/dining-table-round-with-empire-leg-40",
    "colors": [
      "Honey",
      "Teak"
    ]
  },
  {
    "id": "rubco-dining-table-round-with-empire-leg-48",
    "name": "Dining Table (Round) with Empire Leg 48''",
    "category": "dining-tables",
    "type": "table",
    "material": "Rubberwood",
    "designer": "Rubco Premium",
    "rating": 4.6,
    "badge": "",
    "description": "Rubco Furniture are made from rubber wood — a pure solid wood. It is eco-friendly solid wood, not a wood substitute. It is nearly as strong and durable as teak. It offers unmatched dimensional stability.",
    "img": "assets/RubcoAsset/dining_table_round_with_empire_leg_48/dining_table_round_with_empire_leg_48.jpg",
    "images": [
      "assets/RubcoAsset/dining_table_round_with_empire_leg_48/dining_table_round_with_empire_leg_48.jpg",
      "assets/RubcoAsset/dining_table_round_with_empire_leg_48/dining_table_round_with_empire_leg_48_1.jpg",
      "assets/RubcoAsset/dining_table_round_with_empire_leg_48/dining_table_round_with_empire_leg_48_2.jpg",
      "assets/RubcoAsset/dining_table_round_with_empire_leg_48/dining_table_round_with_empire_leg_48_3.jpg"
    ],
    "listingUrl": "https://rubcobangalore.com/furniture/dining-table-round-with-empire-leg-48",
    "colors": [
      "Honey",
      "Teak"
    ]
  },
  {
    "id": "lmw-055",
    "name": "LMW-055",
    "category": "dining-tables",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/LMW-055/LMW-055.png",
    "badge": "",
    "description": "Gather and dine in elegance with the LMW-055 dining set. Crafted from premium wood to ensure long-lasting durability, this set includes a beautifully finished table and matching chairs. Perfect for daily family meals and entertaining guests alike, it brings timeless charm to your dining space.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-055/LMW-055.png",
      "assets/assetsCatalogue/categorized/LMW-055/LMW-055_2.png",
      "assets/assetsCatalogue/categorized/LMW-055/LMW-055_3.png"
    ],
    "colors": [
      "Brown",
      "Grey"
    ]
  },
  {
    "id": "lmw-056",
    "name": "LMW-056",
    "category": "dining-tables",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/LMW-056/LMW-056.png",
    "badge": "",
    "description": "Gather and dine in elegance with the LMW-056 dining set. Crafted from premium wood to ensure long-lasting durability, this set includes a beautifully finished table and matching chairs. Perfect for daily family meals and entertaining guests alike, it brings timeless charm to your dining space.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-056/LMW-056.png"
    ],
    "colors": [
      "Brown"
    ]
  },
  {
    "id": "lmw-057",
    "name": "LMW-057",
    "category": "dining-tables",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/LMW-057/LMW-057_2.png",
    "badge": "",
    "description": "Gather and dine in elegance with the LMW-057 dining set. Crafted from premium wood to ensure long-lasting durability, this set includes a beautifully finished table and matching chairs. Perfect for daily family meals and entertaining guests alike, it brings timeless charm to your dining space.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-057/LMW-057_2.png"
    ],
    "colors": [
      "Grey",
      "Red"
    ]
  },
  {
    "id": "lmw-058",
    "name": "LMW-058",
    "category": "dining-tables",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/LMW-058/LMW-058_2.png",
    "badge": "Premium",
    "description": "Gather and dine in elegance with the LMW-058 dining set. Crafted from premium wood to ensure long-lasting durability, this set includes a beautifully finished table and matching chairs. Perfect for daily family meals and entertaining guests alike, it brings timeless charm to your dining space.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-058/LMW-058_2.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "lmw-059",
    "name": "LMW-059",
    "category": "dining-tables",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.9,
    "img": "assets/assetsCatalogue/categorized/LMW-059/LMW-059.png",
    "badge": "",
    "description": "Gather and dine in elegance with the LMW-059 dining set. Crafted from premium wood to ensure long-lasting durability, this set includes a beautifully finished table and matching chairs. Perfect for daily family meals and entertaining guests alike, it brings timeless charm to your dining space.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-059/LMW-059.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "lmw-060",
    "name": "LMW-060",
    "category": "dining-tables",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/LMW-060/LMW-060.png",
    "badge": "",
    "description": "Gather and dine in elegance with the LMW-060 dining set. Crafted from premium wood to ensure long-lasting durability, this set includes a beautifully finished table and matching chairs. Perfect for daily family meals and entertaining guests alike, it brings timeless charm to your dining space.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-060/LMW-060.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "lmw-061",
    "name": "LMW-061",
    "category": "dining-tables",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/LMW-061/LMW-061.png",
    "badge": "",
    "description": "Gather and dine in elegance with the LMW-061 dining set. Crafted from premium wood to ensure long-lasting durability, this set includes a beautifully finished table and matching chairs. Perfect for daily family meals and entertaining guests alike, it brings timeless charm to your dining space.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-061/LMW-061.png",
      "assets/assetsCatalogue/categorized/LMW-061/LMW-061_2.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "lmw-062",
    "name": "LMW-062",
    "category": "dining-tables",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.9,
    "img": "assets/assetsCatalogue/categorized/LMW-062/LMW-062.png",
    "badge": "New",
    "description": "Gather and dine in elegance with the LMW-062 dining set. Crafted from premium wood to ensure long-lasting durability, this set includes a beautifully finished table and matching chairs. Perfect for daily family meals and entertaining guests alike, it brings timeless charm to your dining space.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-062/LMW-062.png"
    ],
    "colors": [
      "Brown"
    ]
  },
  {
    "id": "lmw-063",
    "name": "LMW-063",
    "category": "dining-tables",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/LMW-063/LMW-063.png",
    "badge": "Premium",
    "description": "Gather and dine in elegance with the LMW-063 dining set. Crafted from premium wood to ensure long-lasting durability, this set includes a beautifully finished table and matching chairs. Perfect for daily family meals and entertaining guests alike, it brings timeless charm to your dining space.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-063/LMW-063.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "lmw-064",
    "name": "LMW-064",
    "category": "dining-tables",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/LMW-064/LMW-064.png",
    "badge": "",
    "description": "Gather and dine in elegance with the LMW-064 dining set. Crafted from premium wood to ensure long-lasting durability, this set includes a beautifully finished table and matching chairs. Perfect for daily family meals and entertaining guests alike, it brings timeless charm to your dining space.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-064/LMW-064.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "lmw-065",
    "name": "LMW-065",
    "category": "dining-tables",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/LMW-065/LMW-065_2.png",
    "badge": "",
    "description": "Gather and dine in elegance with the LMW-065 dining set. Crafted from premium wood to ensure long-lasting durability, this set includes a beautifully finished table and matching chairs. Perfect for daily family meals and entertaining guests alike, it brings timeless charm to your dining space.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-065/LMW-065_2.png"
    ],
    "colors": [
      "White",
      "Red"
    ]
  },
  {
    "id": "orbis",
    "name": "Orbis",
    "category": "dining-tables",
    "type": "table",
    "material": "Central Metal Pedestal Base",
    "designer": "Bosq Ergonomics",
    "rating": 4.9,
    "badge": "",
    "description": "ORBIS is a stylish round table featuring a smooth tabletop paired with a sleek central metal pedestal base, offering strong support and a clean, modern look.",
    "img": "assets/products_catalog_images/Orbis/Orbis_01.png",
    "images": [
      "assets/products_catalog_images/Orbis/Orbis_01.png",
      "assets/products_catalog_images/Orbis/Orbis_02.png",
      "assets/products_catalog_images/Orbis/Orbis_03.png",
      "assets/products_catalog_images/Orbis/Orbis_04.png"
    ],
    "colors": [],
    "tags": [
      "coffee table"
    ]
  },
  {
    "id": "rubco-dining-set-6-seater",
    "name": "Rubco Dining Set – 6 Seater",
    "category": "dining-tables",
    "type": "table",
    "material": "Rubberwood",
    "designer": "Rubco Premium",
    "rating": 4.8,
    "badge": "",
    "description": "Rubco Dining Set (6 Seater Rectangular Table with Antique Chair 6 Nos) Rubco Furniture are made from rubber wood — a pure solid wood. It is eco-friendly solid wood, not a wood substitute. It is nearly as strong and durable as teak. It offers unmatched dimensional stability.",
    "img": "assets/RubcoAsset/rubco_dining_set_6_seater/rubco_dining_set_6_seater_1.jpg",
    "images": [
      "assets/RubcoAsset/rubco_dining_set_6_seater/rubco_dining_set_6_seater_1.jpg",
      "assets/RubcoAsset/rubco_dining_set_6_seater/rubco_dining_set_6_seater_2.jpg",
      "assets/RubcoAsset/rubco_dining_set_6_seater/rubco_dining_set_6_seater_3.jpg"
    ],
    "listingUrl": "https://rubcobangalore.com/furniture/rubco-dining-set-6-seater",
    "colors": [
      "Honey",
      "Teak"
    ]
  },
  {
    "id": "rubco-oval-empire-leg-dining-table-set",
    "name": "Rubco Oval Empire Leg Dining Table Set",
    "category": "dining-tables",
    "type": "table",
    "material": "Rubberwood",
    "designer": "Rubco Premium",
    "rating": 4.7,
    "badge": "",
    "description": "Rubco Furniture are made from rubber wood — a pure solid wood. It is eco-friendly solid wood, not a wood substitute. It is nearly as strong and durable as teak. It offers unmatched dimensional stability.",
    "img": "assets/RubcoAsset/rubco_oval_empire_leg_dining_table_set/rubco_oval_empire_leg_dining_table_set.jpg",
    "images": [
      "assets/RubcoAsset/rubco_oval_empire_leg_dining_table_set/rubco_oval_empire_leg_dining_table_set.jpg",
      "assets/RubcoAsset/rubco_oval_empire_leg_dining_table_set/rubco_oval_empire_leg_dining_table_set_1.jpg",
      "assets/RubcoAsset/rubco_oval_empire_leg_dining_table_set/rubco_oval_empire_leg_dining_table_set_2.jpg",
      "assets/RubcoAsset/rubco_oval_empire_leg_dining_table_set/rubco_oval_empire_leg_dining_table_set_3.jpg",
      "assets/RubcoAsset/rubco_oval_empire_leg_dining_table_set/rubco_oval_empire_leg_dining_table_set_4.jpg"
    ],
    "listingUrl": "https://rubcobangalore.com/furniture/oval-empire-leg-dining-table-set",
    "colors": [
      "Honey",
      "Teak"
    ]
  },
  {
    "id": "home-theatre-seating-home-theatre-seating-19",
    "name": "Home Theatre Seating 19",
    "category": "home-theatre-seating",
    "type": "recliner",
    "material": "Leather / Fabric",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/home-theatre-seating/home-theatre-seating-home-theatre-seating-19/p19_01.png",
    "badge": "New",
    "description": "Home Theatre Seating 19 recliner. A premium Layermax recliner delivering ergonomic comfort, refined aesthetics, and lasting durability.",
    "images": [
      "assets/catalogue_new/home-theatre-seating/home-theatre-seating-home-theatre-seating-19/p19_01.png"
    ],
    "colors": []
  },
  {
    "id": "home-theatre-seating-home-theatre-seating-20",
    "name": "Home Theatre Seating 20",
    "category": "home-theatre-seating",
    "type": "recliner",
    "material": "Leather / Fabric",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/home-theatre-seating/home-theatre-seating-home-theatre-seating-20/p20_02.png",
    "badge": "New",
    "description": "Home Theatre Seating 20 recliner. A premium Layermax recliner delivering ergonomic comfort, refined aesthetics, and lasting durability.",
    "images": [
      "assets/catalogue_new/home-theatre-seating/home-theatre-seating-home-theatre-seating-20/p20_02.png",
      "assets/catalogue_new/home-theatre-seating/home-theatre-seating-home-theatre-seating-20/p20_01.png"
    ],
    "colors": []
  },
  {
    "id": "home-theatre-seating-home-theatre-seating-21",
    "name": "Home Theatre Seating 21",
    "category": "home-theatre-seating",
    "type": "recliner",
    "material": "Leather / Fabric",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/home-theatre-seating/home-theatre-seating-home-theatre-seating-21/p21_02.png",
    "badge": "New",
    "description": "Home Theatre Seating 21 recliner. A premium Layermax recliner delivering ergonomic comfort, refined aesthetics, and lasting durability.",
    "images": [
      "assets/catalogue_new/home-theatre-seating/home-theatre-seating-home-theatre-seating-21/p21_02.png",
      "assets/catalogue_new/home-theatre-seating/home-theatre-seating-home-theatre-seating-21/p21_01.png"
    ],
    "colors": []
  },
  {
    "id": "home-theatre-seating-home-theatre-seating-22",
    "name": "Home Theatre Seating 22",
    "category": "home-theatre-seating",
    "type": "recliner",
    "material": "Leather / Fabric",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/home-theatre-seating/home-theatre-seating-home-theatre-seating-22/p22_01.png",
    "badge": "New",
    "description": "Home Theatre Seating 22 recliner. A premium Layermax recliner delivering ergonomic comfort, refined aesthetics, and lasting durability.",
    "images": [
      "assets/catalogue_new/home-theatre-seating/home-theatre-seating-home-theatre-seating-22/p22_01.png"
    ],
    "colors": []
  },
  {
    "id": "home-theatre-seating-home-theatre-seating-23",
    "name": "Home Theatre Seating 23",
    "category": "home-theatre-seating",
    "type": "recliner",
    "material": "Leather / Fabric",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/home-theatre-seating/home-theatre-seating-home-theatre-seating-23/p23_01.png",
    "badge": "New",
    "description": "Home Theatre Seating 23 recliner. A premium Layermax recliner delivering ergonomic comfort, refined aesthetics, and lasting durability.",
    "images": [
      "assets/catalogue_new/home-theatre-seating/home-theatre-seating-home-theatre-seating-23/p23_01.png"
    ],
    "colors": []
  },
  {
    "id": "home-theatre-seating-home-theatre-seating-24",
    "name": "Home Theatre Seating 24",
    "category": "home-theatre-seating",
    "type": "recliner",
    "material": "Leather / Fabric",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/home-theatre-seating/home-theatre-seating-home-theatre-seating-24/p24_01.png",
    "badge": "New",
    "description": "Home Theatre Seating 24 recliner. A premium Layermax recliner delivering ergonomic comfort, refined aesthetics, and lasting durability.",
    "images": [
      "assets/catalogue_new/home-theatre-seating/home-theatre-seating-home-theatre-seating-24/p24_01.png"
    ],
    "colors": []
  },
  {
    "id": "home-theatre-seating-home-theatre-seating-25",
    "name": "Home Theatre Seating 25",
    "category": "home-theatre-seating",
    "type": "recliner",
    "material": "Leather / Fabric",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/home-theatre-seating/home-theatre-seating-home-theatre-seating-25/p25_01.png",
    "badge": "New",
    "description": "Home Theatre Seating 25 recliner. A premium Layermax recliner delivering ergonomic comfort, refined aesthetics, and lasting durability.",
    "images": [
      "assets/catalogue_new/home-theatre-seating/home-theatre-seating-home-theatre-seating-25/p25_01.png"
    ],
    "colors": []
  },
  {
    "id": "home-theatre-seating-home-theatre-seating-26",
    "name": "Home Theatre Seating 26",
    "category": "home-theatre-seating",
    "type": "recliner",
    "material": "Leather / Fabric",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/home-theatre-seating/home-theatre-seating-home-theatre-seating-26/p26_02.png",
    "badge": "New",
    "description": "Home Theatre Seating 26 recliner. A premium Layermax recliner delivering ergonomic comfort, refined aesthetics, and lasting durability.",
    "images": [
      "assets/catalogue_new/home-theatre-seating/home-theatre-seating-home-theatre-seating-26/p26_02.png",
      "assets/catalogue_new/home-theatre-seating/home-theatre-seating-home-theatre-seating-26/p26_01.png"
    ],
    "colors": []
  },
  {
    "id": "home-theatre-seating-home-theatre-seating-27",
    "name": "Home Theatre Seating 27",
    "category": "home-theatre-seating",
    "type": "recliner",
    "material": "Leather / Fabric",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/home-theatre-seating/home-theatre-seating-home-theatre-seating-27/p27_01.png",
    "badge": "New",
    "description": "Home Theatre Seating 27 recliner. A premium Layermax recliner delivering ergonomic comfort, refined aesthetics, and lasting durability.",
    "images": [
      "assets/catalogue_new/home-theatre-seating/home-theatre-seating-home-theatre-seating-27/p27_01.png"
    ],
    "colors": []
  },
  {
    "id": "home-theatre-seating-home-theatre-seating-28",
    "name": "Home Theatre Seating 28",
    "category": "home-theatre-seating",
    "type": "recliner",
    "material": "Leather / Fabric",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/home-theatre-seating/home-theatre-seating-home-theatre-seating-28/p28_01.png",
    "badge": "New",
    "description": "Home Theatre Seating 28 recliner. A premium Layermax recliner delivering ergonomic comfort, refined aesthetics, and lasting durability.",
    "images": [
      "assets/catalogue_new/home-theatre-seating/home-theatre-seating-home-theatre-seating-28/p28_01.png"
    ],
    "colors": []
  },
  {
    "id": "customise-your-mattress",
    "name": "Customise Your Mattress",
    "category": "mattresses",
    "type": "mattress",
    "material": "Rebonded + Softy + Natural Latex Foam",
    "designer": "LayerMax Signature",
    "rating": 5,
    "badge": "Custom",
    "description": "Build your mattress to fit exactly how you sleep. Choose your thickness: 6 inch, 8 inch, or 6 inch Hi. 6 inch Hi construction — 4\" Rebonded + 2\" 32D S Softy + 2\" 80D 7-Zone Natural Latex Foam, finished with a 250 GSM knitted quilt. Enquire to customise size, thickness, firmness and finish.",
    "img": "assets/RubcoAsset/rubco_iris_mattress/rubco_iris_mattress.jpg",
    "images": [
      "assets/RubcoAsset/rubco_iris_mattress/rubco_iris_mattress.jpg"
    ],
    "thicknessOptions": [
      "6 inch thickness",
      "8 inch thickness",
      "6 inch thickness Hi (4\" Rebonded + 2\" 32D S Softy + 2\" 80D 7-Zone Natural Latex Foam with 250 GSM Knitted quilt finishing)"
    ],
    "colors": []
  },
  {
    "id": "rubco-neo-spine-relief-400",
    "name": "Neo Spine Relief 400",
    "category": "mattresses",
    "type": "mattress",
    "material": "Coir / Latex Foam",
    "designer": "Rubco Premium",
    "rating": 4.3,
    "badge": "",
    "description": "Neo-Spine Relief High Density Mattress with high-quality rubberized coir combination and light density bonded foam is designed to give firm yet soft support across the length of the body in all sleeping postures. High GSM Knitted fabric covering for a comfortable and smoothing feel. Comfort Layer – Visco Elastic Memory foam provides maximum support and comfort. Super Soft PU foam for additional comfort. High Density Ortho bond core layer provides a high level of stability and support to the sleeping postures. VFO technology Rubberized Coir for natural resilience and strength.",
    "img": "assets/RubcoAsset/neo_spine_relief_400/neo_spine_relief_400.jpg",
    "images": [
      "assets/RubcoAsset/neo_spine_relief_400/neo_spine_relief_400.jpg",
      "assets/RubcoAsset/neo_spine_relief_400/neo_spine_relief_400_1.jpg",
      "assets/RubcoAsset/neo_spine_relief_400/neo_spine_relief_400_2.jpg"
    ],
    "listingUrl": "https://rubcobangalore.com/mattress/neo-spine-relief-400",
    "colors": [
      "White",
      "Maroon"
    ]
  },
  {
    "id": "rubco-neo-spine-relief-100",
    "name": "Neo-Spine Relief 100",
    "category": "mattresses",
    "type": "mattress",
    "material": "Coir / Latex Foam",
    "designer": "Rubco Premium",
    "rating": 4.8,
    "badge": "",
    "description": "Knitted fabric quilted with PU foam for comfort. High Density Ortho bond layer for superior body support. High Density Coir core for natural resilience and strength. Plain Knitted fabric bottom layer for aesthetics and finish. Includes 3 years of warranty. The sizes available vary from 72 x 30 inches to 84 x 72 inches with a thickness of 4 inches.",
    "img": "assets/RubcoAsset/neo_spine_relief_100/neo_spine_relief_100.jpg",
    "images": [
      "assets/RubcoAsset/neo_spine_relief_100/neo_spine_relief_100.jpg",
      "assets/RubcoAsset/neo_spine_relief_100/neo_spine_relief_100_1.jpg",
      "assets/RubcoAsset/neo_spine_relief_100/neo_spine_relief_100_2.jpg",
      "assets/RubcoAsset/neo_spine_relief_100/neo_spine_relief_100_3.jpg"
    ],
    "listingUrl": "https://rubcobangalore.com/mattress/neo-spine-relief-100",
    "colors": [
      "White",
      "Maroon"
    ]
  },
  {
    "id": "rubco-neo-spine-relief-200",
    "name": "Neo-Spine Relief 200",
    "category": "mattresses",
    "type": "mattress",
    "material": "Coir / Latex Foam",
    "designer": "Rubco Premium",
    "rating": 4.4,
    "badge": "",
    "description": "Neo-Spine Relief High Density Mattress with high-quality rubberized coir combination and light density bonded foam is designed to give firm yet soft support across the length of the body in all sleeping postures. Aesthetically designed High GSM Knitted fabric quilted with PU foam for comfort and a quality upper layer. Super Soft PU foam layer for added comfort. High Density VFO technology rubberized coir block as inner coir for natural resilience and body weight support. High Density Ortho bond layer for extra stability and spine support. Knitted fabric with PU foam for outer layer finish and durability. Includes 3 years of warranty. The sizes available vary from 72 x 30 inches to 84 x 72 inches with a thickness of 5 inches.",
    "img": "assets/RubcoAsset/neo_spine_relief_200/neo_spine_relief_200.jpg",
    "images": [
      "assets/RubcoAsset/neo_spine_relief_200/neo_spine_relief_200.jpg",
      "assets/RubcoAsset/neo_spine_relief_200/neo_spine_relief_200_1.jpg",
      "assets/RubcoAsset/neo_spine_relief_200/neo_spine_relief_200_2.jpg"
    ],
    "listingUrl": "https://rubcobangalore.com/mattress/neo-spine-relief-200",
    "colors": [
      "White",
      "Maroon"
    ]
  },
  {
    "id": "rubco-neo-spine-relief-300",
    "name": "Neo-Spine Relief 300",
    "category": "mattresses",
    "type": "mattress",
    "material": "Coir / Latex Foam",
    "designer": "Rubco Premium",
    "rating": 4.7,
    "badge": "",
    "description": "Neo-Spine Relief High Density Mattress with high-quality rubberized coir combination and light density bonded foam is designed to give firm yet soft support across the length of the body in all sleeping postures. Highly comfortable High GSM knitted fabric quilted with PU foam for a superior quality upper layer. Extra soft premium quality PU foam layer for added comfort. High Density VFO technology rubberized coir block as inner coir for natural resilience and body weight support. High Density Ortho bond layer for extra stability and spine support. Includes 5 years of warranty. The sizes available vary from 72 x 30 inches to 84 x 72 inches with a thickness of 6 or 8 inches.",
    "img": "assets/RubcoAsset/neo_spine_relief_300/neo_spine_relief_300.jpg",
    "images": [
      "assets/RubcoAsset/neo_spine_relief_300/neo_spine_relief_300.jpg",
      "assets/RubcoAsset/neo_spine_relief_300/neo_spine_relief_300_1.jpg",
      "assets/RubcoAsset/neo_spine_relief_300/neo_spine_relief_300_2.jpg"
    ],
    "listingUrl": "https://rubcobangalore.com/mattress/neo-spine-relief-300",
    "colors": [
      "White",
      "Maroon"
    ]
  },
  {
    "id": "rubco-iris-mattress",
    "name": "Rubco IRIS Mattress",
    "category": "mattresses",
    "type": "mattress",
    "material": "Coir / Latex Foam",
    "designer": "Rubco Premium",
    "rating": 4.9,
    "badge": "",
    "description": "Cover: Printed polyester woven ticking fabric is quilted with 3 nos of 18 density 7 mm peeled foam together with 18 gm/m² non woven fabric as backing cloth. The corner of the mattress round shaped. Quilted panels stitched on the top. Border/Stabilizer: Printed polyester woven ticking fabric is covered over the 8\"x8 mm 13 density peeled foam. Inner Core: Construction Details Top to Bottom, 28 Density 20 mm PU foam, 50 mm 80 Density Rubberised Coir Block (BIS Certified), 28 Density 20 mm PU foam, 50 mm 80 Density Rubberised Coir Block (BIS Certified). Packing: PVC film cover with 400 gauge and four corners of the mattress protected by the covering of corrugated 3 ply paper boards with centre band wrapping. Brand: Rubco Sleeping System. Thickness: 6 Inch. Bottom: 250GSM Printed polyester woven ticking fabric. Corner Label: Exclusive film label provided at the corner. Warranty: 3 years.",
    "img": "assets/RubcoAsset/rubco_iris_mattress/rubco_iris_mattress.jpg",
    "images": [
      "assets/RubcoAsset/rubco_iris_mattress/rubco_iris_mattress.jpg",
      "assets/RubcoAsset/rubco_iris_mattress/rubco_iris_mattress_1.jpg"
    ],
    "listingUrl": "https://rubcobangalore.com/mattress/rubco-iris-mattress",
    "colors": [
      "White",
      "Maroon"
    ]
  },
  {
    "id": "rubco-naturala-100",
    "name": "Rubco Naturala 100",
    "category": "mattresses",
    "type": "mattress",
    "material": "Coir / Latex Foam",
    "designer": "Rubco Premium",
    "rating": 4.5,
    "badge": "",
    "description": "Rubco 'Naturala 100' is a perfect blend of Natural Rubber Latex, Memory Foam, PU Foam, and High Density Rubberized Coir Block. Salient Benefits: Tencel Fabric quilted for elegant and rich feel, 100% Natural Pin Core Latex Foam for superior comfort, Super Soft PU Foam layer for added comfort, High Density Ortho Bond layer for stability and support, and High Density VFO technology Rubberized Coir Block as inner coir for maintaining the support and strength. Includes 10 years of warranty. Available in 6 to 10 inch thickness.",
    "img": "assets/RubcoAsset/rubco_naturala_100/rubco_naturala_100.jpg",
    "images": [
      "assets/RubcoAsset/rubco_naturala_100/rubco_naturala_100.jpg",
      "assets/RubcoAsset/rubco_naturala_100/rubco_naturala_100_1.jpg",
      "assets/RubcoAsset/rubco_naturala_100/rubco_naturala_100_2.jpg",
      "assets/RubcoAsset/rubco_naturala_100/rubco_naturala_100_3.jpg"
    ],
    "listingUrl": "https://rubcobangalore.com/mattress/rubco-naturala-100",
    "colors": [
      "White",
      "Maroon"
    ]
  },
  {
    "id": "rubco-naturala-200",
    "name": "Rubco Naturala 200",
    "category": "mattresses",
    "type": "mattress",
    "material": "Coir / Latex Foam",
    "designer": "Rubco Premium",
    "rating": 4.5,
    "badge": "",
    "description": "Rubco 'Naturala 200' is a perfect blend of Natural Rubber Latex, Memory Foam, and High Density Rubberized Coir Block. Salient Benefits: High GSM Bamboo fabric for an excellent surface feeling and finish, 100% Pincore Natural Latex Foam for a high level of comfort, High Density Ortho Bond layer for stability and support, and High Density VFO technology Rubberized Coir Block to ensure uniform support and natural resilience. Includes 10 years of warranty. Available in 6 to 10 inch thickness.",
    "img": "assets/RubcoAsset/rubco_naturala_200/rubco_naturala_200.jpg",
    "images": [
      "assets/RubcoAsset/rubco_naturala_200/rubco_naturala_200.jpg",
      "assets/RubcoAsset/rubco_naturala_200/rubco_naturala_200_1.jpg",
      "assets/RubcoAsset/rubco_naturala_200/rubco_naturala_200_2.jpg",
      "assets/RubcoAsset/rubco_naturala_200/rubco_naturala_200_3.jpg"
    ],
    "listingUrl": "https://rubcobangalore.com/mattress/rubco-naturala-200",
    "colors": [
      "White",
      "Maroon"
    ]
  },
  {
    "id": "rubco-naturala-400",
    "name": "Rubco Naturala 400",
    "category": "mattresses",
    "type": "mattress",
    "material": "Coir / Latex Foam",
    "designer": "Rubco Premium",
    "rating": 4.7,
    "badge": "",
    "description": "Rubco 'Naturala 400' is a product of 100% Natural Rubber Latex. Salient Benefits: High GSM cotton fabric for a better surface feel, 100% medium-soft pin-core Natural Latex Foam for extreme comfort, and 100% firm Natural Latex Foam for sufficient body support. Includes 10 years of warranty. Available in 6 to 10 inch thickness.",
    "img": "assets/RubcoAsset/rubco_naturala_400/rubco_naturala_400.jpg",
    "images": [
      "assets/RubcoAsset/rubco_naturala_400/rubco_naturala_400.jpg",
      "assets/RubcoAsset/rubco_naturala_400/rubco_naturala_400_1.jpg",
      "assets/RubcoAsset/rubco_naturala_400/rubco_naturala_400_2.jpg",
      "assets/RubcoAsset/rubco_naturala_400/rubco_naturala_400_3.jpg",
      "assets/RubcoAsset/rubco_naturala_400/rubco_naturala_400_4.jpg"
    ],
    "listingUrl": "https://rubcobangalore.com/mattress/rubco-naturala-400",
    "colors": [
      "White",
      "Maroon"
    ]
  },
  {
    "id": "rubco-onyx-mattress",
    "name": "Rubco ONYX Mattress",
    "category": "mattresses",
    "type": "mattress",
    "material": "Coir / Latex Foam",
    "designer": "Rubco Premium",
    "rating": 4.7,
    "badge": "",
    "description": "Cover: Exclusive 100% 90-110 GSM printed polyester twill fabric is multi-needle quilted with 2 nos of 18 density 7 mm peeled foam together with 17 gm/m² non-woven fabric. The corner of the mattress is round-shaped, and the quilted panel is on the top. Border/Stabilizer: 110 GSM printed polyester twill fabric covered over the 5 mm 13 density peeled foam. Brand: Rubco Sleeping System. Thickness: 4/5 Inch. Inner Core: 4\" Thickness - 80 Density Rubberised Coir Block (BIS Certified); 5\" Thickness - 28 Density 20mm PU foam and 4\" 80 Density Rubberised Coir Block. Quilting Pattern: 6/3\". Corner Label: Exclusive film label provided at the corner. Packing: PVC film cover with 260 gauge and centre band wrapping. Warranty: 2 years.",
    "img": "assets/RubcoAsset/rubco_onyx_mattress/rubco_onyx_mattress.jpg",
    "images": [
      "assets/RubcoAsset/rubco_onyx_mattress/rubco_onyx_mattress.jpg",
      "assets/RubcoAsset/rubco_onyx_mattress/rubco_onyx_mattress_1.jpg",
      "assets/RubcoAsset/rubco_onyx_mattress/rubco_onyx_mattress_2.jpg"
    ],
    "listingUrl": "https://rubcobangalore.com/mattress/rubco-onyx-mattress",
    "colors": [
      "White",
      "Maroon"
    ]
  },
  {
    "id": "rubco-safal-mattress",
    "name": "Rubco Safal Mattress",
    "category": "mattresses",
    "type": "mattress",
    "material": "Coir / Latex Foam",
    "designer": "Rubco Premium",
    "rating": 4.9,
    "badge": "",
    "description": "Cover: Exclusive 130 GSM maroon printed polyester-cotton satin weaving fabric is multi-needle quilted with 2 nos of 18 density 10 mm peeled foam together with 17 gm/m² non-woven fabric. The corner of the mattress is round-shaped, and the quilted panel is stitched on top. Border/Stabilizer: 7\"x8 mm 13 density peeled foam covered with 130 GSM printed polyester-cotton satin weaving fabric. Thickness: 5 Inch. Inner Core: 28 Density 20 mm PU foam (Top), 4\" 80 Density Rubberised Coir Block (BIS Certified). Quilting Pattern: 6/3\". Corner Label: Exclusive film label provided at the corner. Packing: PVC film cover with 260 gauge and four corners of the mattress protected by a corrugated 3-ply paper board covering with centre band wrapping. Warranty: 2 years.",
    "img": "assets/RubcoAsset/rubco_safal_mattress/rubco_safal_mattress.jpg",
    "images": [
      "assets/RubcoAsset/rubco_safal_mattress/rubco_safal_mattress.jpg",
      "assets/RubcoAsset/rubco_safal_mattress/rubco_safal_mattress_1.jpg"
    ],
    "listingUrl": "https://rubcobangalore.com/mattress/rubco-safal-mattress",
    "colors": [
      "White",
      "Maroon"
    ]
  },
  {
    "id": "rubco-sapphire-mattress",
    "name": "Rubco Sapphire Mattress",
    "category": "mattresses",
    "type": "mattress",
    "material": "Coir / Latex Foam",
    "designer": "Rubco Premium",
    "rating": 4.8,
    "badge": "",
    "description": "Cover: Exclusive 100% 85 GSM printed polyester twill fabric or Chinese printed tricot fabric is multi-needle quilted with 1 no of 10 mm 13 density together with 17 gm/m² non-woven fabric. The corner of the mattress is round-shaped. Border/Stabilizer: 85 GSM printed polyester fabric or Chinese printed tricot fabric is covered over the 5 mm 13 density peeled foam. Thickness: 4 Inch. Inner Core: 65 Density Rubberised Coir Block (BIS Certified). Quilting Pattern: 6/3\". Corner Label: Exclusive film label provided at the corner. Packing: PVC cover with a gauge of 260 and with center band wrapping. Warranty: 1 year.",
    "img": "assets/RubcoAsset/rubco_sapphire_mattress/rubco_sapphire_mattress.jpg",
    "images": [
      "assets/RubcoAsset/rubco_sapphire_mattress/rubco_sapphire_mattress.jpg",
      "assets/RubcoAsset/rubco_sapphire_mattress/rubco_sapphire_mattress_1.jpg"
    ],
    "listingUrl": "https://rubcobangalore.com/mattress/rubco-sapphire-mattress",
    "colors": [
      "White",
      "Maroon"
    ]
  },
  {
    "id": "ace",
    "name": "ACE",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "img": "assets/assetsCatalogue/categorized/ACE/ACE.png",
    "badge": "",
    "description": "The ACE Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/ACE/ACE.png",
      "assets/assetsCatalogue/categorized/ACE/ACE_2.png",
      "assets/assetsCatalogue/categorized/ACE/ACE_3.png",
      "assets/assetsCatalogue/categorized/ACE/ACE_4.png",
      "assets/assetsCatalogue/categorized/ACE/ACE_5.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "alex",
    "name": "ALEX",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.5,
    "img": "assets/assetsCatalogue/categorized/ALEX/ALEX.png",
    "badge": "",
    "description": "The ALEX Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/ALEX/ALEX.png",
      "assets/assetsCatalogue/categorized/ALEX/ALEX_2.png",
      "assets/assetsCatalogue/categorized/ALEX/ALEX_3.png",
      "assets/assetsCatalogue/categorized/ALEX/ALEX_4.png",
      "assets/assetsCatalogue/categorized/ALEX/ALEX_5.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "alto",
    "name": "ALTO",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.5,
    "img": "assets/assetsCatalogue/categorized/ALTO/ALTO.png",
    "badge": "",
    "description": "The ALTO Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/ALTO/ALTO.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "amigo",
    "name": "AMIGO",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.6,
    "img": "assets/assetsCatalogue/categorized/AMIGO/AMIGO.png",
    "badge": "",
    "description": "The AMIGO Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/AMIGO/AMIGO.png",
      "assets/assetsCatalogue/categorized/AMIGO/AMIGO_2.png",
      "assets/assetsCatalogue/categorized/AMIGO/AMIGO_3.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "amity",
    "name": "AMITY",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.9,
    "img": "assets/assetsCatalogue/categorized/AMITY/AMITY.png",
    "badge": "",
    "description": "A perfect blend of comfort and looks, the AMITY Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Brown or Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/AMITY/AMITY.png",
      "assets/assetsCatalogue/categorized/AMITY/AMITY_2.png",
      "assets/assetsCatalogue/categorized/AMITY/AMITY_3.png",
      "assets/assetsCatalogue/categorized/AMITY/AMITY_4.png"
    ],
    "colors": [
      "Brown",
      "Red"
    ]
  },
  {
    "id": "amity---ayk",
    "name": "Amity | AYK",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "badge": "",
    "description": "The Amity | AYK Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey or Brown, it brings modern styling and exceptional durability to any workspace.",
    "img": "assets/assetsCatalogue/categorized/Amity _ AYK/Amity _ AYK - 201_2.png",
    "images": [
      "assets/assetsCatalogue/categorized/Amity _ AYK/Amity _ AYK - 201_2.png",
      "assets/assetsCatalogue/categorized/Amity _ AYK/Amity _ AYK - 201.png",
      "assets/assetsCatalogue/categorized/Amity _ AYK/Amity _ AYK - 301_2.png",
      "assets/assetsCatalogue/categorized/Amity _ AYK/Amity _ AYK - 301.png"
    ],
    "colors": [
      "Grey",
      "Brown"
    ]
  },
  {
    "id": "amity---ayl",
    "name": "Amity | AYL",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.5,
    "badge": "",
    "description": "The Amity | AYL Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, Brown or Yellow, it brings modern styling and exceptional durability to any workspace.",
    "img": "assets/assetsCatalogue/categorized/Amity _ AYL/Amity _ AYL - 201_2.png",
    "images": [
      "assets/assetsCatalogue/categorized/Amity _ AYL/Amity _ AYL - 201_2.png",
      "assets/assetsCatalogue/categorized/Amity _ AYL/Amity _ AYL - 201_3.png",
      "assets/assetsCatalogue/categorized/Amity _ AYL/Amity _ AYL - 201_4.png",
      "assets/assetsCatalogue/categorized/Amity _ AYL/Amity _ AYL - 201.png",
      "assets/assetsCatalogue/categorized/Amity _ AYL/Amity _ AYL - 301_2.png",
      "assets/assetsCatalogue/categorized/Amity _ AYL/Amity _ AYL - 301.png"
    ],
    "colors": [
      "Grey",
      "Brown",
      "Yellow"
    ]
  },
  {
    "id": "amity---aym",
    "name": "Amity | AYM",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "badge": "",
    "description": "Creating an energized work environment, the Amity | AYM Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Brown or Grey, it brings modern styling and exceptional durability to any workspace.",
    "img": "assets/assetsCatalogue/categorized/Amity _ AYM/Amity _ AYM - 101_2.png",
    "images": [
      "assets/assetsCatalogue/categorized/Amity _ AYM/Amity _ AYM - 101_2.png",
      "assets/assetsCatalogue/categorized/Amity _ AYM/Amity _ AYM - 101.png",
      "assets/assetsCatalogue/categorized/Amity _ AYM/Amity _ AYM - 201.png",
      "assets/assetsCatalogue/categorized/Amity _ AYM/Amity _ AYM - 301.png"
    ],
    "colors": [
      "Brown",
      "Grey"
    ]
  },
  {
    "id": "amity---ayn",
    "name": "Amity | AYN",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "badge": "",
    "description": "The Amity | AYN Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "img": "assets/assetsCatalogue/categorized/Amity _ AYN/Amity _ AYN - 101_2.png",
    "images": [
      "assets/assetsCatalogue/categorized/Amity _ AYN/Amity _ AYN - 101_2.png",
      "assets/assetsCatalogue/categorized/Amity _ AYN/Amity _ AYN - 101.png",
      "assets/assetsCatalogue/categorized/Amity _ AYN/Amity _ AYN - 201_2.png",
      "assets/assetsCatalogue/categorized/Amity _ AYN/Amity _ AYN - 201.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "amity---ays",
    "name": "Amity | AYS",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "badge": "",
    "description": "Intuitively interpreting intrapersonal cues, the Amity | AYS Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Red, Green, Brown or Grey, it brings modern styling and exceptional durability to any workspace.",
    "img": "assets/assetsCatalogue/categorized/Amity _ AYS/Amity _ AYS - 101.png",
    "images": [
      "assets/assetsCatalogue/categorized/Amity _ AYS/Amity _ AYS - 101.png",
      "assets/assetsCatalogue/categorized/Amity _ AYS/Amity _ AYS - 201.png",
      "assets/assetsCatalogue/categorized/Amity _ AYS/Amity _ AYS - 301_2.png",
      "assets/assetsCatalogue/categorized/Amity _ AYS/Amity _ AYS - 301.png"
    ],
    "colors": [
      "Red",
      "Green",
      "Brown",
      "Grey"
    ]
  },
  {
    "id": "amity---ayt",
    "name": "Amity | AYT",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "badge": "",
    "description": "A conventional style of comfort, the Amity | AYT Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Brown or Grey, it brings modern styling and exceptional durability to any workspace.",
    "img": "assets/assetsCatalogue/categorized/Amity _ AYT/Amity _ AYT - 201.png",
    "images": [
      "assets/assetsCatalogue/categorized/Amity _ AYT/Amity _ AYT - 201.png",
      "assets/assetsCatalogue/categorized/Amity _ AYT/Amity _ AYT - 301_2.png",
      "assets/assetsCatalogue/categorized/Amity _ AYT/Amity _ AYT - 301_3.png",
      "assets/assetsCatalogue/categorized/Amity _ AYT/Amity _ AYT - 301.png"
    ],
    "colors": [
      "Brown",
      "Grey"
    ]
  },
  {
    "id": "amity---ayy",
    "name": "Amity | AYY",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "badge": "",
    "description": "The Amity | AYY Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey or Red, it brings modern styling and exceptional durability to any workspace.",
    "img": "assets/assetsCatalogue/categorized/Amity _ AYY/Amity _ AYY - 101.png",
    "images": [
      "assets/assetsCatalogue/categorized/Amity _ AYY/Amity _ AYY - 101.png",
      "assets/assetsCatalogue/categorized/Amity _ AYY/Amity _ AYY - 201_2.png",
      "assets/assetsCatalogue/categorized/Amity _ AYY/Amity _ AYY - 201.png"
    ],
    "colors": [
      "Grey",
      "Red"
    ]
  },
  {
    "id": "amity---sln",
    "name": "Amity | SLN",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "badge": "",
    "description": "The Amity | SLN Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "img": "assets/assetsCatalogue/categorized/Amity _ SLN/Amity _ SLN - 101_2.png",
    "images": [
      "assets/assetsCatalogue/categorized/Amity _ SLN/Amity _ SLN - 101_2.png",
      "assets/assetsCatalogue/categorized/Amity _ SLN/Amity _ SLN - 101.png",
      "assets/assetsCatalogue/categorized/Amity _ SLN/Amity _ SLN - 201.png",
      "assets/assetsCatalogue/categorized/Amity _ SLN/Amity _ SLN - 301.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "amity---sls",
    "name": "Amity | SLS",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "badge": "",
    "description": "Designed to unleash your True self, the Amity | SLS Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Red, Blue or Grey, it brings modern styling and exceptional durability to any workspace.",
    "img": "assets/assetsCatalogue/categorized/Amity _ SLS/Amity _ SLS - 101.png",
    "images": [
      "assets/assetsCatalogue/categorized/Amity _ SLS/Amity _ SLS - 101.png",
      "assets/assetsCatalogue/categorized/Amity _ SLS/Amity _ SLS - 201.png",
      "assets/assetsCatalogue/categorized/Amity _ SLS/Amity _ SLS - 301_2.png",
      "assets/assetsCatalogue/categorized/Amity _ SLS/Amity _ SLS - 301.png"
    ],
    "colors": [
      "Red",
      "Blue",
      "Grey"
    ]
  },
  {
    "id": "apex",
    "name": "APEX",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.9,
    "img": "assets/assetsCatalogue/categorized/APEX/APEX.png",
    "badge": "",
    "description": "The APEX Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/APEX/APEX.png",
      "assets/assetsCatalogue/categorized/APEX/APEX_2.png",
      "assets/assetsCatalogue/categorized/APEX/APEX_3.png",
      "assets/assetsCatalogue/categorized/APEX/APEX_4.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "astral",
    "name": "ASTRAL",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/ASTRAL/ASTRAL.png",
    "badge": "New",
    "description": "The ASTRAL Office Chair is engineered for premium ergonomic performance. Featuring gas lift, it dynamically adjusts to support your body. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/ASTRAL/ASTRAL.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "atari",
    "name": "ATARI",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.6,
    "img": "assets/assetsCatalogue/categorized/ATARI/ATARI.png",
    "badge": "",
    "description": "The ATARI Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Brown, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/ATARI/ATARI.png",
      "assets/assetsCatalogue/categorized/ATARI/ATARI_2.png"
    ],
    "colors": [
      "Brown"
    ]
  },
  {
    "id": "aura",
    "name": "AURA",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "img": "assets/assetsCatalogue/categorized/AURA/AURA.png",
    "badge": "Premium",
    "description": "The AURA Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/AURA/AURA.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "avis",
    "name": "AVIS",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.4,
    "img": "assets/assetsCatalogue/categorized/AVIS/AVIS.png",
    "badge": "",
    "description": "The AVIS Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/AVIS/AVIS.png",
      "assets/assetsCatalogue/categorized/AVIS/AVIS_3.png",
      "assets/assetsCatalogue/categorized/AVIS/AVIS_2.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "base",
    "name": "Base",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 5,
    "img": "assets/assetsCatalogue/categorized/Base/Base.png",
    "badge": "New",
    "description": "The Base Office Chair is engineered for premium ergonomic performance. Featuring armrest, it dynamically adjusts to support your body. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/Base/Base.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "beam",
    "name": "Beam",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.4,
    "img": "assets/assetsCatalogue/categorized/Beam/Beam.png",
    "badge": "Bestseller",
    "description": "The Beam Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Blue, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/Beam/Beam.png"
    ],
    "colors": [
      "Blue"
    ]
  },
  {
    "id": "black",
    "name": "BLACK",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.4,
    "img": "assets/assetsCatalogue/categorized/BLACK/BLACK.png",
    "badge": "Bestseller",
    "description": "Add color to every conversation, the BLACK Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/BLACK/BLACK.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "blue",
    "name": "BLUE",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.9,
    "img": "assets/assetsCatalogue/categorized/BLUE/BLUE.png",
    "badge": "",
    "description": "Offering comfort in every hue, the BLUE Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/BLUE/BLUE.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "boss",
    "name": "BOSS",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.6,
    "img": "assets/assetsCatalogue/categorized/BOSS/BOSS.png",
    "badge": "",
    "description": "The BOSS Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/BOSS/BOSS.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "chronos",
    "name": "CHRONOS",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/CHRONOS/CHRONOS_2.png",
    "badge": "New",
    "description": "The CHRONOS Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, Green or Yellow, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/CHRONOS/CHRONOS_2.png",
      "assets/assetsCatalogue/categorized/CHRONOS/CHRONOS_3.png"
    ],
    "colors": [
      "Grey",
      "Green",
      "Yellow"
    ]
  },
  {
    "id": "cosmo",
    "name": "COSMO",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 5,
    "badge": "New",
    "description": "Where comfort meets intelligent design. Premium ergonomic Office Chair from the LayerMax Signature collection.",
    "img": "assets/assetsCatalogue/categorized/COSMO/COSMO_3.png",
    "images": [
      "assets/assetsCatalogue/categorized/COSMO/COSMO_3.png"
    ],
    "colors": [
      "White",
      "Grey"
    ]
  },
  {
    "id": "drone",
    "name": "DRONE",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/DRONE/DRONE.png",
    "badge": "New",
    "description": "The DRONE Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/DRONE/DRONE.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "dune",
    "name": "DUNE",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/DUNE/DUNE.png",
    "badge": "",
    "description": "The DUNE Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/DUNE/DUNE.png",
      "assets/assetsCatalogue/categorized/DUNE/DUNE_2.png",
      "assets/assetsCatalogue/categorized/DUNE/DUNE_3.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "echo",
    "name": "ECHO",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.6,
    "img": "assets/assetsCatalogue/categorized/ECHO/ECHO.png",
    "badge": "",
    "description": "The ECHO Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/ECHO/ECHO.png",
      "assets/assetsCatalogue/categorized/ECHO/ECHO_2.png",
      "assets/assetsCatalogue/categorized/ECHO/ECHO_3.png",
      "assets/assetsCatalogue/categorized/ECHO/ECHO_4.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "eclipse",
    "name": "ECLIPSE",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/ECLIPSE/ECLIPSE_2.png",
    "badge": "",
    "description": "Designed around you, the ECLIPSE Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in White or Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/ECLIPSE/ECLIPSE_2.png"
    ],
    "colors": [
      "White",
      "Grey"
    ]
  },
  {
    "id": "eddie",
    "name": "EDDIE",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 5,
    "img": "assets/assetsCatalogue/categorized/EDDIE/EDDIE.png",
    "badge": "",
    "description": "The EDDIE Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Brown or Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/EDDIE/EDDIE.png",
      "assets/assetsCatalogue/categorized/EDDIE/EDDIE_2.png",
      "assets/assetsCatalogue/categorized/EDDIE/EDDIE_3.png",
      "assets/assetsCatalogue/categorized/EDDIE/EDDIE_4.png"
    ],
    "colors": [
      "Brown",
      "Grey"
    ]
  },
  {
    "id": "ella",
    "name": "ELLA",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/ELLA/ELLA_3.png",
    "badge": "",
    "description": "The ELLA Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Red or Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/ELLA/ELLA_3.png",
      "assets/assetsCatalogue/categorized/ELLA/ELLA.png",
      "assets/assetsCatalogue/categorized/ELLA/ELLA_2.png",
      "assets/assetsCatalogue/categorized/ELLA/ELLA_4.png",
      "assets/assetsCatalogue/categorized/ELLA/ELLA_5.png",
      "assets/assetsCatalogue/categorized/ELLA/ELLA_6.png"
    ],
    "colors": [
      "Red",
      "Grey"
    ]
  },
  {
    "id": "epic",
    "name": "EPIC",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.6,
    "img": "assets/assetsCatalogue/categorized/EPIC/EPIC.png",
    "badge": "",
    "description": "The EPIC Office Chair is engineered for premium ergonomic performance. Featuring gas lift, it dynamically adjusts to support your body. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/EPIC/EPIC.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "flare",
    "name": "FLARE",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.5,
    "badge": "Premium",
    "description": "Built Responsibly. Premium leather Office Chair with ergonomic support and sleek design.",
    "img": "assets/assetsCatalogue/categorized/FLARE/FLARE_2.png",
    "images": [
      "assets/assetsCatalogue/categorized/FLARE/FLARE_2.png"
    ],
    "colors": [
      "Black",
      "Brown"
    ]
  },
  {
    "id": "genesis",
    "name": "GENESIS",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/GENESIS/GENESIS.png",
    "badge": "",
    "description": "The GENESIS Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Red, Brown or Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/GENESIS/GENESIS.png",
      "assets/assetsCatalogue/categorized/GENESIS/GENESIS_2.png",
      "assets/assetsCatalogue/categorized/GENESIS/GENESIS_3.png",
      "assets/assetsCatalogue/categorized/GENESIS/GENESIS_4.png"
    ],
    "colors": [
      "Red",
      "Brown",
      "Grey"
    ]
  },
  {
    "id": "grey",
    "name": "GREY",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.4,
    "img": "assets/assetsCatalogue/categorized/GREY/GREY.png",
    "badge": "",
    "description": "Offering comfort in every hue, the GREY Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/GREY/GREY.png",
      "assets/assetsCatalogue/categorized/GREY/GREY_2.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "hacer---hc---u",
    "name": "Hacer | HC - U",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "badge": "",
    "description": "Designed to inspire you, the Hacer | HC - U Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "img": "assets/assetsCatalogue/categorized/Hacer _ HC - U/Hacer _ HC - U - 101.png",
    "images": [
      "assets/assetsCatalogue/categorized/Hacer _ HC - U/Hacer _ HC - U - 101.png",
      "assets/assetsCatalogue/categorized/Hacer _ HC - U/Hacer _ HC - U - 301.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "hacer---hc---v",
    "name": "Hacer | HC - V",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "badge": "",
    "description": "The Hacer | HC - V Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "img": "assets/assetsCatalogue/categorized/Hacer _ HC - V/Hacer _ HC - V - 101.png",
    "images": [
      "assets/assetsCatalogue/categorized/Hacer _ HC - V/Hacer _ HC - V - 101.png",
      "assets/assetsCatalogue/categorized/Hacer _ HC - V/Hacer _ HC - V - 301.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "hacer---hc---x",
    "name": "Hacer | HC - X",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "badge": "",
    "description": "Designed to inspire you, the Hacer | HC - X Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "img": "assets/assetsCatalogue/categorized/Hacer _ HC - X/Hacer _ HC - X - 101.png",
    "images": [
      "assets/assetsCatalogue/categorized/Hacer _ HC - X/Hacer _ HC - X - 101.png",
      "assets/assetsCatalogue/categorized/Hacer _ HC - X/Hacer _ HC - X - 301.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "hacer---hca",
    "name": "Hacer | HCA",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "badge": "",
    "description": "Built to revitalize your work, the Hacer | HCA Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Brown, Grey or Red, it brings modern styling and exceptional durability to any workspace.",
    "img": "assets/assetsCatalogue/categorized/Hacer _ HCA/Hacer _ HCA -101_2.png",
    "images": [
      "assets/assetsCatalogue/categorized/Hacer _ HCA/Hacer _ HCA -101_2.png",
      "assets/assetsCatalogue/categorized/Hacer _ HCA/Hacer _ HCA -101.png",
      "assets/assetsCatalogue/categorized/Hacer _ HCA/Hacer _ HCA -301_2.png",
      "assets/assetsCatalogue/categorized/Hacer _ HCA/Hacer _ HCA -301.png"
    ],
    "colors": [
      "Brown",
      "Grey",
      "Red"
    ]
  },
  {
    "id": "hacer---hcm",
    "name": "Hacer | HCM",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "badge": "",
    "description": "The Hacer | HCM Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Red or Brown, it brings modern styling and exceptional durability to any workspace.",
    "img": "assets/assetsCatalogue/categorized/Hacer _ HCM/Hacer _ HCM - 101.png",
    "images": [
      "assets/assetsCatalogue/categorized/Hacer _ HCM/Hacer _ HCM - 101.png",
      "assets/assetsCatalogue/categorized/Hacer _ HCM/Hacer _ HCM - 201_2.png",
      "assets/assetsCatalogue/categorized/Hacer _ HCM/Hacer _ HCM - 201_3.png",
      "assets/assetsCatalogue/categorized/Hacer _ HCM/Hacer _ HCM - 201.png"
    ],
    "colors": [
      "Red",
      "Brown"
    ]
  },
  {
    "id": "hacer---hcr",
    "name": "Hacer | HCR",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "badge": "",
    "description": "Engineered to let you sit smart, the Hacer | HCR Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, Red or Brown, it brings modern styling and exceptional durability to any workspace.",
    "img": "assets/assetsCatalogue/categorized/Hacer _ HCR/Hacer _ HCR -101_2.png",
    "images": [
      "assets/assetsCatalogue/categorized/Hacer _ HCR/Hacer _ HCR -101_2.png",
      "assets/assetsCatalogue/categorized/Hacer _ HCR/Hacer _ HCR -101_3.png",
      "assets/assetsCatalogue/categorized/Hacer _ HCR/Hacer _ HCR -101.png",
      "assets/assetsCatalogue/categorized/Hacer _ HCR/Hacer _ HCR -201_2.png",
      "assets/assetsCatalogue/categorized/Hacer _ HCR/Hacer _ HCR -201.png"
    ],
    "colors": [
      "Grey",
      "Red",
      "Brown"
    ]
  },
  {
    "id": "hacer---hcs",
    "name": "Hacer | HCS",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "badge": "",
    "description": "Bringing a world of difference to your mood, the Hacer | HCS Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey or Red, it brings modern styling and exceptional durability to any workspace.",
    "img": "assets/assetsCatalogue/categorized/Hacer _ HCS/Hacer _ HCS -101_2.png",
    "images": [
      "assets/assetsCatalogue/categorized/Hacer _ HCS/Hacer _ HCS -101_2.png",
      "assets/assetsCatalogue/categorized/Hacer _ HCS/Hacer _ HCS -101_3.png",
      "assets/assetsCatalogue/categorized/Hacer _ HCS/Hacer _ HCS -101.png",
      "assets/assetsCatalogue/categorized/Hacer _ HCS/Hacer _ HCS -301_2.png",
      "assets/assetsCatalogue/categorized/Hacer _ HCS/Hacer _ HCS -301.png"
    ],
    "colors": [
      "Grey",
      "Red"
    ]
  },
  {
    "id": "hacer---hcz",
    "name": "Hacer | HCZ",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "badge": "",
    "description": "Featuring adaptive performance, the Hacer | HCZ Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "img": "assets/assetsCatalogue/categorized/Hacer _ HCZ/Hacer _ HCZ - 101.png",
    "images": [
      "assets/assetsCatalogue/categorized/Hacer _ HCZ/Hacer _ HCZ - 101.png",
      "assets/assetsCatalogue/categorized/Hacer _ HCZ/Hacer _ HCZ - 201_2.png",
      "assets/assetsCatalogue/categorized/Hacer _ HCZ/Hacer _ HCZ - 201.png",
      "assets/assetsCatalogue/categorized/Hacer _ HCZ/Hacer _ HCZ - 301.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "halo",
    "name": "HALO",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/HALO/HALO.png",
    "badge": "",
    "description": "The HALO Office Chair is engineered for premium ergonomic performance. Featuring adjustable seat height for perfect posture, it dynamically adjusts to support your body. Upholstered in high-quality leather and available in Grey or Blue, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/HALO/HALO.png"
    ],
    "colors": [
      "Grey",
      "Blue"
    ]
  },
  {
    "id": "haven",
    "name": "HAVEN",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.5,
    "img": "assets/assetsCatalogue/categorized/HAVEN/HAVEN.png",
    "badge": "",
    "description": "The HAVEN Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/HAVEN/HAVEN.png",
      "assets/assetsCatalogue/categorized/HAVEN/HAVEN_2.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "hive",
    "name": "HIVE",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/HIVE/HIVE.png",
    "badge": "",
    "description": "The HIVE Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, Blue or Brown, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/HIVE/HIVE.png",
      "assets/assetsCatalogue/categorized/HIVE/HIVE_2.png",
      "assets/assetsCatalogue/categorized/HIVE/HIVE_3.png",
      "assets/assetsCatalogue/categorized/HIVE/HIVE_4.png",
      "assets/assetsCatalogue/categorized/HIVE/HIVE_5.png"
    ],
    "colors": [
      "Grey",
      "Blue",
      "Brown"
    ]
  },
  {
    "id": "honor",
    "name": "HONOR",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.9,
    "img": "assets/assetsCatalogue/categorized/HONOR/HONOR.png",
    "badge": "",
    "description": "The HONOR Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/HONOR/HONOR.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "hug",
    "name": "HUG",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.9,
    "img": "assets/assetsCatalogue/categorized/HUG/HUG.png",
    "badge": "",
    "description": "The HUG Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Blue or Brown, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/HUG/HUG.png",
      "assets/assetsCatalogue/categorized/HUG/HUG_2.png"
    ],
    "colors": [
      "Blue",
      "Brown"
    ]
  },
  {
    "id": "hulk",
    "name": "HULK",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/HULK/HULK.png",
    "badge": "",
    "description": "The HULK Office Chair is engineered for premium ergonomic performance. Featuring gas lift, it dynamically adjusts to support your body. Upholstered in high-quality leather and available in Brown or Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/HULK/HULK.png",
      "assets/assetsCatalogue/categorized/HULK/HULK_2.png"
    ],
    "colors": [
      "Brown",
      "Grey"
    ]
  },
  {
    "id": "ice",
    "name": "ICE",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "img": "assets/assetsCatalogue/categorized/ICE/ICE.png",
    "badge": "",
    "description": "The ICE Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey or Blue, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/ICE/ICE.png",
      "assets/assetsCatalogue/categorized/ICE/ICE_2.png"
    ],
    "colors": [
      "Grey",
      "Blue"
    ]
  },
  {
    "id": "infinity",
    "name": "INFINITY",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/INFINITY/INFINITY.png",
    "badge": "",
    "description": "The INFINITY Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/INFINITY/INFINITY.png",
      "assets/assetsCatalogue/categorized/INFINITY/INFINITY_2.png",
      "assets/assetsCatalogue/categorized/INFINITY/INFINITY_3.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "inox",
    "name": "INOX",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.5,
    "img": "assets/assetsCatalogue/categorized/INOX/INOX.png",
    "badge": "",
    "description": "The INOX Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/INOX/INOX.png",
      "assets/assetsCatalogue/categorized/INOX/INOX_2.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "jacob",
    "name": "JACOB",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.4,
    "img": "assets/assetsCatalogue/categorized/JACOB/JACOB.png",
    "badge": "Premium",
    "description": "The JACOB Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/JACOB/JACOB.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "jade",
    "name": "JADE",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/JADE/JADE.png",
    "badge": "New",
    "description": "The JADE Office Chair is engineered for premium ergonomic performance. Featuring gas lift, it dynamically adjusts to support your body. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/JADE/JADE.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "jazz",
    "name": "JAZZ",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.4,
    "img": "assets/assetsCatalogue/categorized/JAZZ/JAZZ.png",
    "badge": "",
    "description": "The JAZZ Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/JAZZ/JAZZ.png",
      "assets/assetsCatalogue/categorized/JAZZ/JAZZ_2.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "joe",
    "name": "JOE",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/JOE/JOE.png",
    "badge": "Premium",
    "description": "The JOE Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, Blue, Red, White or Yellow, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/JOE/JOE.png",
      "assets/assetsCatalogue/categorized/JOE/JOE_2.png",
      "assets/assetsCatalogue/categorized/JOE/JOE_3.png",
      "assets/assetsCatalogue/categorized/JOE/JOE_4.png",
      "assets/assetsCatalogue/categorized/JOE/JOE_5.png",
      "assets/assetsCatalogue/categorized/JOE/JOE_6.png"
    ],
    "colors": [
      "Grey",
      "Blue",
      "Red",
      "White",
      "Yellow"
    ]
  },
  {
    "id": "kinetic",
    "name": "KINETIC",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 5,
    "img": "assets/assetsCatalogue/categorized/KINETIC/KINETIC.png",
    "badge": "",
    "description": "The KINETIC Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/KINETIC/KINETIC.png",
      "assets/assetsCatalogue/categorized/KINETIC/KINETIC_2.png",
      "assets/assetsCatalogue/categorized/KINETIC/KINETIC_3.png",
      "assets/assetsCatalogue/categorized/KINETIC/KINETIC_4.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "knox",
    "name": "KNOX",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/KNOX/KNOX.png",
    "badge": "New",
    "description": "The KNOX Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/KNOX/KNOX.png",
      "assets/assetsCatalogue/categorized/KNOX/KNOX_2.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "lara",
    "name": "LARA",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/LARA/LARA.png",
    "badge": "",
    "description": "The LARA Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Red or Yellow, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/LARA/LARA.png",
      "assets/assetsCatalogue/categorized/LARA/LARA_2.png"
    ],
    "colors": [
      "Red",
      "Yellow"
    ]
  },
  {
    "id": "liberty",
    "name": "LIBERTY",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/LIBERTY/LIBERTY.png",
    "badge": "",
    "description": "The LIBERTY Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Brown, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/LIBERTY/LIBERTY.png"
    ],
    "colors": [
      "Brown"
    ]
  },
  {
    "id": "luna",
    "name": "LUNA",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/LUNA/LUNA.png",
    "badge": "",
    "description": "The LUNA Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/LUNA/LUNA.png",
      "assets/assetsCatalogue/categorized/LUNA/LUNA_2.png",
      "assets/assetsCatalogue/categorized/LUNA/LUNA_3.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "mars",
    "name": "MARS",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.6,
    "img": "assets/assetsCatalogue/categorized/MARS/MARS.png",
    "badge": "",
    "description": "The MARS Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/MARS/MARS.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "matrix",
    "name": "MATRIX",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/MATRIX/MATRIX.png",
    "badge": "",
    "description": "The MATRIX Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, Green, Red or Brown, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/MATRIX/MATRIX.png",
      "assets/assetsCatalogue/categorized/MATRIX/MATRIX_2.png",
      "assets/assetsCatalogue/categorized/MATRIX/MATRIX_3.png",
      "assets/assetsCatalogue/categorized/MATRIX/MATRIX_4.png",
      "assets/assetsCatalogue/categorized/MATRIX/MATRIX_5.png"
    ],
    "colors": [
      "Grey",
      "Green",
      "Red",
      "Brown"
    ]
  },
  {
    "id": "meteor",
    "name": "METEOR",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/METEOR/METEOR.png",
    "badge": "",
    "description": "Add color to every conversation, the METEOR Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/METEOR/METEOR.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "mylo",
    "name": "MYLO",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.4,
    "img": "assets/assetsCatalogue/categorized/MYLO/MYLO.png",
    "badge": "",
    "description": "The MYLO Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/MYLO/MYLO.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "neo",
    "name": "NEO",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/NEO/NEO.png",
    "badge": "Bestseller",
    "description": "The NEO Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/NEO/NEO.png",
      "assets/assetsCatalogue/categorized/NEO/NEO_2.png",
      "assets/assetsCatalogue/categorized/NEO/NEO_3.png",
      "assets/assetsCatalogue/categorized/NEO/NEO_4.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "nexus",
    "name": "NEXUS",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.4,
    "img": "assets/assetsCatalogue/categorized/NEXUS/NEXUS.png",
    "badge": "",
    "description": "The NEXUS Office Chair is engineered for premium ergonomic performance. Featuring headrest, it dynamically adjusts to support your body. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/NEXUS/NEXUS.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "ninza",
    "name": "NINZA",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.9,
    "img": "assets/assetsCatalogue/categorized/NINZA/NINZA.png",
    "badge": "",
    "description": "The NINZA Office Chair is engineered for premium ergonomic performance. Featuring headrest, it dynamically adjusts to support your body. Upholstered in high-quality leather and available in Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/NINZA/NINZA.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "nova",
    "name": "NOVA",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/NOVA/NOVA.png",
    "badge": "Premium",
    "description": "The NOVA Office Chair is engineered for premium ergonomic performance. Featuring headrest, it dynamically adjusts to support your body. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/NOVA/NOVA.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "oasis",
    "name": "OASIS",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "img": "assets/assetsCatalogue/categorized/OASIS/OASIS.png",
    "badge": "",
    "description": "The OASIS Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/OASIS/OASIS.png",
      "assets/assetsCatalogue/categorized/OASIS/OASIS_2.png",
      "assets/assetsCatalogue/categorized/OASIS/OASIS_3.png",
      "assets/assetsCatalogue/categorized/OASIS/OASIS_4.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "ola",
    "name": "OLA",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/OLA/OLA.png",
    "badge": "",
    "description": "The OLA Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Green or Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/OLA/OLA.png",
      "assets/assetsCatalogue/categorized/OLA/OLA_2.png",
      "assets/assetsCatalogue/categorized/OLA/OLA_3.png"
    ],
    "colors": [
      "Green",
      "Red"
    ]
  },
  {
    "id": "oliver",
    "name": "OLIVER",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/OLIVER/OLIVER.png",
    "badge": "",
    "description": "The OLIVER Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Brown, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/OLIVER/OLIVER.png"
    ],
    "colors": [
      "Brown"
    ]
  },
  {
    "id": "onyx",
    "name": "ONYX",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.5,
    "img": "assets/assetsCatalogue/categorized/ONYX/ONYX.png",
    "badge": "",
    "description": "The ONYX Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Red, Blue, Yellow, White or Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/ONYX/ONYX.png",
      "assets/assetsCatalogue/categorized/ONYX/ONYX_2.png",
      "assets/assetsCatalogue/categorized/ONYX/ONYX_3.png",
      "assets/assetsCatalogue/categorized/ONYX/ONYX_4.png",
      "assets/assetsCatalogue/categorized/ONYX/ONYX_5.png",
      "assets/assetsCatalogue/categorized/ONYX/ONYX_6.png"
    ],
    "colors": [
      "Red",
      "Blue",
      "Yellow",
      "White",
      "Grey"
    ]
  },
  {
    "id": "orion",
    "name": "ORION",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.6,
    "img": "assets/assetsCatalogue/categorized/ORION/ORION.png",
    "badge": "",
    "description": "The ORION Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/ORION/ORION.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "oscar",
    "name": "OSCAR",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/OSCAR/OSCAR.png",
    "badge": "New",
    "description": "The OSCAR Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/OSCAR/OSCAR.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "otto",
    "name": "OTTO",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/OTTO/OTTO.png",
    "badge": "New",
    "description": "The OTTO Office Chair is engineered for premium ergonomic performance. Featuring headrest, it dynamically adjusts to support your body. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/OTTO/OTTO.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "polaris",
    "name": "POLARIS",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/POLARIS/POLARIS.png",
    "badge": "",
    "description": "The POLARIS Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Red, Brown, Grey or Blue, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/POLARIS/POLARIS.png",
      "assets/assetsCatalogue/categorized/POLARIS/POLARIS_2.png",
      "assets/assetsCatalogue/categorized/POLARIS/POLARIS_3.png",
      "assets/assetsCatalogue/categorized/POLARIS/POLARIS_4.png",
      "assets/assetsCatalogue/categorized/POLARIS/POLARIS_5.png",
      "assets/assetsCatalogue/categorized/POLARIS/POLARIS_6.png"
    ],
    "colors": [
      "Red",
      "Brown",
      "Grey",
      "Blue"
    ]
  },
  {
    "id": "prime",
    "name": "PRIME",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.4,
    "img": "assets/assetsCatalogue/categorized/PRIME/PRIME_3.png",
    "badge": "",
    "description": "The PRIME Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey or Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/PRIME/PRIME_3.png",
      "assets/assetsCatalogue/categorized/PRIME/PRIME.png",
      "assets/assetsCatalogue/categorized/PRIME/PRIME_2.png",
      "assets/assetsCatalogue/categorized/PRIME/PRIME_4.png",
      "assets/assetsCatalogue/categorized/PRIME/PRIME_5.png",
      "assets/assetsCatalogue/categorized/PRIME/PRIME_6.png"
    ],
    "colors": [
      "Grey",
      "Red"
    ]
  },
  {
    "id": "proxima",
    "name": "PROXIMA",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.9,
    "img": "assets/assetsCatalogue/categorized/PROXIMA/PROXIMA.png",
    "badge": "New",
    "description": "The PROXIMA Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey or Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/PROXIMA/PROXIMA.png",
      "assets/assetsCatalogue/categorized/PROXIMA/PROXIMA_2.png"
    ],
    "colors": [
      "Grey",
      "Red"
    ]
  },
  {
    "id": "pulse",
    "name": "PULSE",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 5,
    "img": "assets/assetsCatalogue/categorized/PULSE/PULSE.png",
    "badge": "",
    "description": "The PULSE Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/PULSE/PULSE.png",
      "assets/assetsCatalogue/categorized/PULSE/PULSE_2.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "quasar",
    "name": "QUASAR",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/QUASAR/QUASAR.png",
    "badge": "",
    "description": "The QUASAR Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/QUASAR/QUASAR.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "rafael",
    "name": "RAFAEL",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/RAFAEL/RAFAEL.png",
    "badge": "",
    "description": "The RAFAEL Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey or Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/RAFAEL/RAFAEL.png",
      "assets/assetsCatalogue/categorized/RAFAEL/RAFAEL_2.png"
    ],
    "colors": [
      "Grey",
      "Red"
    ]
  },
  {
    "id": "red",
    "name": "RED",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 5,
    "img": "assets/assetsCatalogue/categorized/RED/RED.png",
    "badge": "",
    "description": "Offering comfort in every hue, the RED Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/RED/RED.png",
      "assets/assetsCatalogue/categorized/RED/RED_2.png",
      "assets/assetsCatalogue/categorized/RED/RED_3.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "ritz",
    "name": "RITZ",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.6,
    "img": "assets/assetsCatalogue/categorized/RITZ/RITZ.png",
    "badge": "New",
    "description": "The RITZ Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/RITZ/RITZ.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "sirius",
    "name": "SIRIUS",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/SIRIUS/SIRIUS.png",
    "badge": "",
    "description": "Where comfort meets bold design, the SIRIUS Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Red or Brown, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/SIRIUS/SIRIUS.png",
      "assets/assetsCatalogue/categorized/SIRIUS/SIRIUS_2.png"
    ],
    "colors": [
      "Red",
      "Brown"
    ]
  },
  {
    "id": "slink",
    "name": "SLINK",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.6,
    "img": "assets/assetsCatalogue/categorized/SLINK/SLINK.png",
    "badge": "",
    "description": "The SLINK Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Blue or Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/SLINK/SLINK.png",
      "assets/assetsCatalogue/categorized/SLINK/SLINK_2.png",
      "assets/assetsCatalogue/categorized/SLINK/SLINK_3.png",
      "assets/assetsCatalogue/categorized/SLINK/SLINK_4.png",
      "assets/assetsCatalogue/categorized/SLINK/SLINK_5.png"
    ],
    "colors": [
      "Blue",
      "Grey"
    ]
  },
  {
    "id": "solaris",
    "name": "SOLARIS",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/SOLARIS/SOLARIS.png",
    "badge": "",
    "description": "The SOLARIS Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/SOLARIS/SOLARIS.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "solo",
    "name": "SOLO",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.4,
    "img": "assets/assetsCatalogue/categorized/SOLO/SOLO.png",
    "badge": "",
    "description": "The SOLO Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/SOLO/SOLO.png",
      "assets/assetsCatalogue/categorized/SOLO/SOLO_2.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "spectra",
    "name": "SPECTRA",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/SPECTRA/SPECTRA.png",
    "badge": "",
    "description": "The SPECTRA Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/SPECTRA/SPECTRA.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "stelle",
    "name": "STELLE",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/STELLE/STELLE.png",
    "badge": "New",
    "description": "The STELLE Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Brown, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/STELLE/STELLE.png",
      "assets/assetsCatalogue/categorized/STELLE/STELLE_2.png",
      "assets/assetsCatalogue/categorized/STELLE/STELLE_3.png"
    ],
    "colors": [
      "Brown"
    ]
  },
  {
    "id": "stelle---stm",
    "name": "Stelle | STM",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "badge": "",
    "description": "The Stelle | STM Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "img": "assets/assetsCatalogue/categorized/Stelle _ STM/Stelle _ STM - 301.png",
    "images": [
      "assets/assetsCatalogue/categorized/Stelle _ STM/Stelle _ STM - 301.png",
      "assets/assetsCatalogue/categorized/Stelle _ STM/Stelle _ STM -101.png",
      "assets/assetsCatalogue/categorized/Stelle _ STM/Stelle _ STM -201_2.png",
      "assets/assetsCatalogue/categorized/Stelle _ STM/Stelle _ STM -201.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "stelle---stz",
    "name": "Stelle | STZ",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "badge": "",
    "description": "Reflecting intelligent design and thinking, the Stelle | STZ Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "img": "assets/assetsCatalogue/categorized/Stelle _ STZ/Stelle _ STZ - 101_2.png",
    "images": [
      "assets/assetsCatalogue/categorized/Stelle _ STZ/Stelle _ STZ - 101_2.png",
      "assets/assetsCatalogue/categorized/Stelle _ STZ/Stelle _ STZ - 101.png",
      "assets/assetsCatalogue/categorized/Stelle _ STZ/Stelle _ STZ - 201.png",
      "assets/assetsCatalogue/categorized/Stelle _ STZ/Stelle _ STZ - 301.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "storm",
    "name": "STORM",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 5,
    "img": "assets/assetsCatalogue/categorized/STORM/STORM.png",
    "badge": "",
    "description": "The STORM Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/STORM/STORM.png",
      "assets/assetsCatalogue/categorized/STORM/STORM_2.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "summit",
    "name": "SUMMIT",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/SUMMIT/SUMMIT.png",
    "badge": "",
    "description": "The SUMMIT Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Red or Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/SUMMIT/SUMMIT.png",
      "assets/assetsCatalogue/categorized/SUMMIT/SUMMIT_2.png"
    ],
    "colors": [
      "Red",
      "Grey"
    ]
  },
  {
    "id": "swan",
    "name": "SWAN",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 5,
    "img": "assets/assetsCatalogue/categorized/SWAN/SWAN_3.png",
    "badge": "New",
    "description": "The SWAN Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey or Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/SWAN/SWAN_3.png",
      "assets/assetsCatalogue/categorized/SWAN/SWAN.png",
      "assets/assetsCatalogue/categorized/SWAN/SWAN_2.png",
      "assets/assetsCatalogue/categorized/SWAN/SWAN_4.png"
    ],
    "colors": [
      "Grey",
      "Red"
    ]
  },
  {
    "id": "tag",
    "name": "TAG",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.9,
    "img": "assets/assetsCatalogue/categorized/TAG/TAG.png",
    "badge": "New",
    "description": "The TAG Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey or Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/TAG/TAG.png",
      "assets/assetsCatalogue/categorized/TAG/TAG_2.png",
      "assets/assetsCatalogue/categorized/TAG/TAG_3.png",
      "assets/assetsCatalogue/categorized/TAG/TAG_4.png",
      "assets/assetsCatalogue/categorized/TAG/TAG_5.png",
      "assets/assetsCatalogue/categorized/TAG/TAG_6.png",
      "assets/assetsCatalogue/categorized/TAG/TAG_7.png"
    ],
    "colors": [
      "Grey",
      "Red"
    ]
  },
  {
    "id": "titan",
    "name": "TITAN",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/TITAN/TITAN.png",
    "badge": "",
    "description": "The TITAN Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/TITAN/TITAN.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "tom",
    "name": "TOM",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.9,
    "img": "assets/assetsCatalogue/categorized/TOM/TOM.png",
    "badge": "",
    "description": "The TOM Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/TOM/TOM.png",
      "assets/assetsCatalogue/categorized/TOM/TOM_2.png",
      "assets/assetsCatalogue/categorized/TOM/TOM_3.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "torq---tqn",
    "name": "Torq | TQN",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "badge": "",
    "description": "The Torq | TQN Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Brown or Grey, it brings modern styling and exceptional durability to any workspace.",
    "img": "assets/assetsCatalogue/categorized/Torq _ TQN/Torq _ TQN - 101.png",
    "images": [
      "assets/assetsCatalogue/categorized/Torq _ TQN/Torq _ TQN - 101.png",
      "assets/assetsCatalogue/categorized/Torq _ TQN/Torq _ TQN - 201.png",
      "assets/assetsCatalogue/categorized/Torq _ TQN/Torq _ TQN - 301_2.png",
      "assets/assetsCatalogue/categorized/Torq _ TQN/Torq _ TQN - 301.png"
    ],
    "colors": [
      "Brown",
      "Grey"
    ]
  },
  {
    "id": "torq---tqs",
    "name": "Torq | TQS",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.7,
    "badge": "",
    "description": "The Torq | TQS Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Brown or Grey, it brings modern styling and exceptional durability to any workspace.",
    "img": "assets/assetsCatalogue/categorized/Torq _ TQS/Torq _ TQS - 201.png",
    "images": [
      "assets/assetsCatalogue/categorized/Torq _ TQS/Torq _ TQS - 201.png",
      "assets/assetsCatalogue/categorized/Torq _ TQS/Torq _ TQS - 301.png"
    ],
    "colors": [
      "Brown",
      "Grey"
    ]
  },
  {
    "id": "torq---tqx",
    "name": "Torq | TQX",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "badge": "",
    "description": "The Torq | TQX Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Brown or Grey, it brings modern styling and exceptional durability to any workspace.",
    "img": "assets/assetsCatalogue/categorized/Torq _ TQX/Torq _ TQX - 201_2.png",
    "images": [
      "assets/assetsCatalogue/categorized/Torq _ TQX/Torq _ TQX - 201_2.png",
      "assets/assetsCatalogue/categorized/Torq _ TQX/Torq _ TQX - 201.png",
      "assets/assetsCatalogue/categorized/Torq _ TQX/Torq _ TQX - 301.png"
    ],
    "colors": [
      "Brown",
      "Grey"
    ]
  },
  {
    "id": "torq---tqy",
    "name": "Torq | TQY",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "badge": "",
    "description": "The Torq | TQY Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Green or Red, it brings modern styling and exceptional durability to any workspace.",
    "img": "assets/assetsCatalogue/categorized/Torq _ TQY/Torq _ TQY - 101.png",
    "images": [
      "assets/assetsCatalogue/categorized/Torq _ TQY/Torq _ TQY - 101.png",
      "assets/assetsCatalogue/categorized/Torq _ TQY/Torq _ TQY - 201.png",
      "assets/assetsCatalogue/categorized/Torq _ TQY/Torq _ TQY - 301_2.png",
      "assets/assetsCatalogue/categorized/Torq _ TQY/Torq _ TQY - 301.png"
    ],
    "colors": [
      "Green",
      "Red"
    ]
  },
  {
    "id": "torq---tqz",
    "name": "Torq | TQZ",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.5,
    "badge": "",
    "description": "Experience the power of peace, the Torq | TQZ Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "img": "assets/assetsCatalogue/categorized/Torq _ TQZ/Torq _ TQZ - 101.png",
    "images": [
      "assets/assetsCatalogue/categorized/Torq _ TQZ/Torq _ TQZ - 101.png",
      "assets/assetsCatalogue/categorized/Torq _ TQZ/Torq _ TQZ - 201.png",
      "assets/assetsCatalogue/categorized/Torq _ TQZ/Torq _ TQZ - 301_2.png",
      "assets/assetsCatalogue/categorized/Torq _ TQZ/Torq _ TQZ - 301.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "valor",
    "name": "VALOR",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/VALOR/VALOR.png",
    "badge": "",
    "description": "The VALOR Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Yellow or Brown, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/VALOR/VALOR.png",
      "assets/assetsCatalogue/categorized/VALOR/VALOR_2.png",
      "assets/assetsCatalogue/categorized/VALOR/VALOR_3.png",
      "assets/assetsCatalogue/categorized/VALOR/VALOR_4.png"
    ],
    "colors": [
      "Yellow",
      "Brown"
    ]
  },
  {
    "id": "vega",
    "name": "VEGA",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 5,
    "img": "assets/assetsCatalogue/categorized/VEGA/VEGA.png",
    "badge": "",
    "description": "The VEGA Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/VEGA/VEGA.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "vertex",
    "name": "VERTEX",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/VERTEX/VERTEX.png",
    "badge": "Premium",
    "description": "The VERTEX Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/VERTEX/VERTEX.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "virgo",
    "name": "VIRGO",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.4,
    "img": "assets/assetsCatalogue/categorized/VIRGO/VIRGO.png",
    "badge": "",
    "description": "The VIRGO Office Chair is engineered for premium ergonomic performance. Featuring headrest, it dynamically adjusts to support your body. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/VIRGO/VIRGO.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "vista",
    "name": "VISTA",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.6,
    "img": "assets/assetsCatalogue/categorized/VISTA/VISTA.png",
    "badge": "",
    "description": "The VISTA Office Chair is engineered for premium ergonomic performance. Featuring headrest, it dynamically adjusts to support your body. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/VISTA/VISTA.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "vortex",
    "name": "VORTEX",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/VORTEX/VORTEX.png",
    "badge": "",
    "description": "The VORTEX Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/VORTEX/VORTEX.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "vyom",
    "name": "VYOM",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 5,
    "img": "assets/assetsCatalogue/categorized/VYOM/VYOM.png",
    "badge": "New",
    "description": "The VYOM Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/VYOM/VYOM.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "waves",
    "name": "WAVES",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.9,
    "img": "assets/assetsCatalogue/categorized/WAVES/WAVES.png",
    "badge": "Premium",
    "description": "The WAVES Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/WAVES/WAVES.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "willow---wlx",
    "name": "Willow | WLX",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "badge": "",
    "description": "Designed to keep you energized and alive throughout the day, the Willow | WLX Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey or Black, it brings modern styling and exceptional durability to any workspace.",
    "img": "assets/assetsCatalogue/categorized/Willow _ WLX/Willow _ WLX -101.png",
    "images": [
      "assets/assetsCatalogue/categorized/Willow _ WLX/Willow _ WLX -101.png",
      "assets/assetsCatalogue/categorized/Willow _ WLX/Willow _ WLX -201.png",
      "assets/assetsCatalogue/categorized/Willow _ WLX/Willow _ WLX -301_2.png",
      "assets/assetsCatalogue/categorized/Willow _ WLX/Willow _ WLX -301.png"
    ],
    "colors": [
      "Grey",
      "Black"
    ]
  },
  {
    "id": "willow---wlz",
    "name": "Willow | WLZ",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "badge": "",
    "description": "Reflecting a wise and spiritual aesthetic, the Willow | WLZ Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Green, Brown or Red, it brings modern styling and exceptional durability to any workspace.",
    "img": "assets/assetsCatalogue/categorized/Willow _ WLZ/Willow _ WLZ -101.png",
    "images": [
      "assets/assetsCatalogue/categorized/Willow _ WLZ/Willow _ WLZ -101.png",
      "assets/assetsCatalogue/categorized/Willow _ WLZ/Willow _ WLZ -201.png",
      "assets/assetsCatalogue/categorized/Willow _ WLZ/Willow _ WLZ -301_2.png",
      "assets/assetsCatalogue/categorized/Willow _ WLZ/Willow _ WLZ -301.png"
    ],
    "colors": [
      "Green",
      "Brown",
      "Red"
    ]
  },
  {
    "id": "wolf",
    "name": "WOLF",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.9,
    "img": "assets/assetsCatalogue/categorized/WOLF/WOLF.png",
    "badge": "Bestseller",
    "description": "The WOLF Office Chair is engineered for premium ergonomic performance. Featuring headrest, it dynamically adjusts to support your body. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/WOLF/WOLF.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "yak",
    "name": "YAK",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "img": "assets/assetsCatalogue/categorized/YAK/YAK.png",
    "badge": "New",
    "description": "The YAK Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/YAK/YAK.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "yellow",
    "name": "YELLOW",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/YELLOW/YELLOW.png",
    "badge": "Bestseller",
    "description": "The YELLOW Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/YELLOW/YELLOW.png",
      "assets/assetsCatalogue/categorized/YELLOW/YELLOW_2.png",
      "assets/assetsCatalogue/categorized/YELLOW/YELLOW_3.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "zeal---ab",
    "name": "Zeal | AB",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "badge": "",
    "description": "The Zeal | AB Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Brown, Yellow or Grey, it brings modern styling and exceptional durability to any workspace.",
    "img": "assets/assetsCatalogue/categorized/Zeal _ AB/Zeal _ AB - 100.png",
    "images": [
      "assets/assetsCatalogue/categorized/Zeal _ AB/Zeal _ AB - 100.png",
      "assets/assetsCatalogue/categorized/Zeal _ AB/Zeal _ AB - 400.png",
      "assets/assetsCatalogue/categorized/Zeal _ AB/Zeal _ AB - 600_2.png",
      "assets/assetsCatalogue/categorized/Zeal _ AB/Zeal _ AB - 600.png"
    ],
    "colors": [
      "Brown",
      "Yellow",
      "Grey"
    ]
  },
  {
    "id": "zen",
    "name": "ZEN",
    "category": "office-chairs",
    "type": "chair",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "img": "assets/assetsCatalogue/categorized/ZEN/ZEN.png",
    "badge": "",
    "description": "The ZEN Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/ZEN/ZEN.png",
      "assets/assetsCatalogue/categorized/ZEN/ZEN_2.png",
      "assets/assetsCatalogue/categorized/ZEN/ZEN_3.png",
      "assets/assetsCatalogue/categorized/ZEN/ZEN_4.png",
      "assets/assetsCatalogue/categorized/ZEN/ZEN_5.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "zenith",
    "name": "ZENITH",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/ZENITH/ZENITH.png",
    "badge": "",
    "description": "The ZENITH Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/ZENITH/ZENITH.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "zephyr",
    "name": "ZEPHYR",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/ZEPHYR/ZEPHYR.png",
    "badge": "",
    "description": "The ZEPHYR Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey or Brown, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/ZEPHYR/ZEPHYR.png",
      "assets/assetsCatalogue/categorized/ZEPHYR/ZEPHYR_2.png",
      "assets/assetsCatalogue/categorized/ZEPHYR/ZEPHYR_3.png",
      "assets/assetsCatalogue/categorized/ZEPHYR/ZEPHYR_4.png"
    ],
    "colors": [
      "Grey",
      "Brown"
    ]
  },
  {
    "id": "zest",
    "name": "ZEST",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/ZEST/ZEST.png",
    "badge": "",
    "description": "The ZEST Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Blue or Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/ZEST/ZEST.png",
      "assets/assetsCatalogue/categorized/ZEST/ZEST_2.png"
    ],
    "colors": [
      "Blue",
      "Grey"
    ]
  },
  {
    "id": "zylo",
    "name": "ZYLO",
    "category": "office-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.9,
    "img": "assets/assetsCatalogue/categorized/ZYLO/ZYLO.png",
    "badge": "",
    "description": "The ZYLO Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/assetsCatalogue/categorized/ZYLO/ZYLO.png"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "admiral",
    "name": "Admiral",
    "category": "office-workstations",
    "type": "workstation",
    "material": "Engineered Wood",
    "designer": "Buro Design",
    "rating": 4.8,
    "badge": "",
    "description": "A top seller, the Admiral Director Suite is widely appreciated for its design and functionality. It is crafted to be a comfortable and sophisticated workspace, with thoughtful attention to ergonomic hand movement on the tabletop. Admiral's ample storage capacity allows you to keep your essentials organized with ease.",
    "img": "assets/products_catalog_images/Admiral/Admiral_01.png",
    "images": [
      "assets/products_catalog_images/Admiral/Admiral_01.png",
      "assets/products_catalog_images/Admiral/Admiral_02.png",
      "assets/products_catalog_images/Admiral/Admiral_03.png",
      "assets/products_catalog_images/Admiral/Admiral_04.png",
      "assets/products_catalog_images/Admiral/Admiral_05.png",
      "assets/products_catalog_images/Admiral/Admiral_06.png",
      "assets/products_catalog_images/Admiral/Admiral_07.png",
      "assets/products_catalog_images/Admiral/Admiral_08.png",
      "assets/products_catalog_images/Admiral/Admiral_09.png",
      "assets/products_catalog_images/Admiral/Admiral_10.png",
      "assets/products_catalog_images/Admiral/Admiral_11.png",
      "assets/products_catalog_images/Admiral/Admiral_12.png",
      "assets/products_catalog_images/Admiral/Admiral_13.png",
      "assets/products_catalog_images/Admiral/Admiral_14.png",
      "assets/products_catalog_images/Admiral/Admiral_15.png",
      "assets/products_catalog_images/Admiral/Admiral_16.png",
      "assets/products_catalog_images/Admiral/Admiral_17.png",
      "assets/products_catalog_images/Admiral/Admiral_18.png",
      "assets/products_catalog_images/Admiral/Admiral_19.png",
      "assets/products_catalog_images/Admiral/Admiral_20.png"
    ],
    "colors": []
  },
  {
    "id": "airis",
    "name": "Airis",
    "category": "office-workstations",
    "type": "workstation",
    "material": "Compact Design",
    "designer": "Bosq Ergonomics",
    "rating": 4.2,
    "badge": "",
    "description": "AIRIS is a compact height-adjustable workstation designed for flexible and ergonomic use. It supports sit-stand functionality while maintaining a streamlined design suitable for smaller workspaces.",
    "img": "assets/products_catalog_images/Airis/Airis_01.png",
    "images": [
      "assets/products_catalog_images/Airis/Airis_01.png",
      "assets/products_catalog_images/Airis/Airis_02.png"
    ],
    "colors": []
  },
  {
    "id": "alein",
    "name": "Alein",
    "category": "office-workstations",
    "type": "workstation",
    "material": "Table",
    "designer": "Bosq Ergonomics",
    "rating": 4.3,
    "badge": "",
    "description": "Dual color hanging modesty board ALEIN is an L-shaped workstation designed for spacious and organized work environments. It features open cubbies and two drawers for convenient storage, supported by sturdy metal legs that enhance durability and modern functionality.",
    "img": "assets/products_catalog_images/Alein/Alein_01.png",
    "images": [
      "assets/products_catalog_images/Alein/Alein_01.png",
      "assets/products_catalog_images/Alein/Alein_02.png",
      "assets/products_catalog_images/Alein/Alein_03.png",
      "assets/products_catalog_images/Alein/Alein_04.png"
    ],
    "colors": []
  },
  {
    "id": "altair",
    "name": "Altair",
    "category": "office-workstations",
    "type": "table",
    "material": "Diecast Metal Leg Structure",
    "designer": "Bosq Ergonomics",
    "rating": 4.3,
    "badge": "",
    "description": "The ALTAIR Conference Table is engineered for premium boardroom environments, combining a distinctive diecast-inspired metal framework with advanced connectivity solutions. Featuring an integrated wireless pop-up box and a spacious tabletop, it supports efficient collaboration while projecting a strong executive presence.",
    "img": "assets/products_catalog_images/Altair/Altair_01.png",
    "images": [
      "assets/products_catalog_images/Altair/Altair_01.png",
      "assets/products_catalog_images/Altair/Altair_02.png",
      "assets/products_catalog_images/Altair/Altair_03.png",
      "assets/products_catalog_images/Altair/Altair_04.png"
    ],
    "colors": [],
    "tags": [
      "coffee table"
    ]
  },
  {
    "id": "angulo",
    "name": "Angulo",
    "category": "office-workstations",
    "type": "workstation",
    "material": "Single User Workstation",
    "designer": "Bosq Ergonomics",
    "rating": 4.5,
    "badge": "",
    "description": "ANGULO is a compact workstation designed for focused individual use. It features an angular leg structure with a sleek modern form ideal for smaller workspaces.",
    "img": "assets/products_catalog_images/Angulo/Angulo_01.png",
    "images": [
      "assets/products_catalog_images/Angulo/Angulo_01.png"
    ],
    "colors": []
  },
  {
    "id": "arvele",
    "name": "Arvele",
    "category": "office-workstations",
    "type": "workstation",
    "material": "Open Cubby Storage",
    "designer": "Bosq Ergonomics",
    "rating": 4.5,
    "badge": "",
    "description": "ARVELE is an L-shaped workstation designed for balanced storage and efficient workflows. It features open cubbies, one drawer, and a door cabinet for both quick access and concealed storage. The integrated modesty panel ensures a neat and professional workspace.",
    "img": "assets/products_catalog_images/Arvele/Arvele_01.png",
    "images": [
      "assets/products_catalog_images/Arvele/Arvele_01.png",
      "assets/products_catalog_images/Arvele/Arvele_02.png",
      "assets/products_catalog_images/Arvele/Arvele_03.png"
    ],
    "colors": []
  },
  {
    "id": "atria",
    "name": "Atria",
    "category": "office-workstations",
    "type": "table",
    "material": "T-Leg Metal Structure",
    "designer": "Bosq Ergonomics",
    "rating": 4.7,
    "badge": "",
    "description": "The ATRIA Table is designed to support productive discussions and seamless collaboration. Featuring a robust T-leg metal structure, a spacious work surface, and an integrated flip-up box for convenient connectivity, it delivers functionality, stability, and a clean professional appearance for modern meeting spaces.",
    "img": "assets/products_catalog_images/Atria/Atria_01.png",
    "images": [
      "assets/products_catalog_images/Atria/Atria_01.png",
      "assets/products_catalog_images/Atria/Atria_02.png",
      "assets/products_catalog_images/Atria/Atria_03.png",
      "assets/products_catalog_images/Atria/Atria_04.png"
    ],
    "colors": [],
    "tags": [
      "coffee table"
    ]
  },
  {
    "id": "cabin_computer_tables",
    "name": "Cabin & Computer Tables",
    "category": "office-workstations",
    "type": "workstation",
    "material": "Moldau Acacia Dark CABIN",
    "designer": "Buro Design",
    "rating": 4.3,
    "badge": "",
    "description": "",
    "img": "assets/products_catalog_images/Cabin & Computer Tables/Cabin_Computer_Tables_01.png",
    "images": [
      "assets/products_catalog_images/Cabin & Computer Tables/Cabin_Computer_Tables_01.png",
      "assets/products_catalog_images/Cabin & Computer Tables/Cabin_Computer_Tables_02.png",
      "assets/products_catalog_images/Cabin & Computer Tables/Cabin_Computer_Tables_03.png",
      "assets/products_catalog_images/Cabin & Computer Tables/Cabin_Computer_Tables_04.png",
      "assets/products_catalog_images/Cabin & Computer Tables/Cabin_Computer_Tables_05.png",
      "assets/products_catalog_images/Cabin & Computer Tables/Cabin_Computer_Tables_06.png",
      "assets/products_catalog_images/Cabin & Computer Tables/Cabin_Computer_Tables_07.png",
      "assets/products_catalog_images/Cabin & Computer Tables/Cabin_Computer_Tables_08.png",
      "assets/products_catalog_images/Cabin & Computer Tables/Cabin_Computer_Tables_09.png",
      "assets/products_catalog_images/Cabin & Computer Tables/Cabin_Computer_Tables_10.png",
      "assets/products_catalog_images/Cabin & Computer Tables/Cabin_Computer_Tables_11.png"
    ],
    "colors": [
      "Moldau Acacia Dark CABIN"
    ]
  },
  {
    "id": "cendro",
    "name": "Cendro",
    "category": "office-workstations",
    "type": "workstation",
    "material": "Integrated Modesty Panel",
    "designer": "Bosq Ergonomics",
    "rating": 4.8,
    "badge": "",
    "description": "CENDRO is designed for clean, distraction-free work environments. With no integrated storage, it emphasizes simplicity and openness, making it ideal for compact or flexible setups. The modesty panel provides a refined, modern look while maintaining essential functionality.",
    "img": "assets/products_catalog_images/Cendro/Cendro_01.png",
    "images": [
      "assets/products_catalog_images/Cendro/Cendro_01.png",
      "assets/products_catalog_images/Cendro/Cendro_02.png",
      "assets/products_catalog_images/Cendro/Cendro_03.png",
      "assets/products_catalog_images/Cendro/Cendro_04.png",
      "assets/products_catalog_images/Cendro/Cendro_05.png",
      "assets/products_catalog_images/Cendro/Cendro_06.png"
    ],
    "colors": []
  },
  {
    "id": "chief",
    "name": "Chief",
    "category": "office-workstations",
    "type": "workstation",
    "material": "Cappuccino & Walnut Bronze",
    "designer": "Buro Design",
    "rating": 4.1,
    "badge": "",
    "description": "• Legs: 25mm thick MDF PVC foiled with Waterfall edge • Elegant Dual color finish • 29mm thick MDF PVC foiled top with Waterfall edge covered with 4mm thick painted glass • Modesty: 33mm thick designer pattern",
    "img": "assets/products_catalog_images/Chief/Chief_01.png",
    "images": [
      "assets/products_catalog_images/Chief/Chief_01.png",
      "assets/products_catalog_images/Chief/Chief_02.png",
      "assets/products_catalog_images/Chief/Chief_03.png",
      "assets/products_catalog_images/Chief/Chief_04.png",
      "assets/products_catalog_images/Chief/Chief_05.png",
      "assets/products_catalog_images/Chief/Chief_06.png",
      "assets/products_catalog_images/Chief/Chief_07.png",
      "assets/products_catalog_images/Chief/Chief_08.png",
      "assets/products_catalog_images/Chief/Chief_09.png",
      "assets/products_catalog_images/Chief/Chief_10.png",
      "assets/products_catalog_images/Chief/Chief_11.png",
      "assets/products_catalog_images/Chief/Chief_12.png",
      "assets/products_catalog_images/Chief/Chief_13.png",
      "assets/products_catalog_images/Chief/Chief_14.png"
    ],
    "colors": [
      "Cappuccino & Walnut Bronze"
    ]
  },
  {
    "id": "rubco-computer-table-colonial",
    "name": "Computer Table Colonial",
    "category": "office-workstations",
    "type": "table",
    "material": "Rubberwood",
    "designer": "Rubco Premium",
    "rating": 4.4,
    "badge": "",
    "description": "Rubco Furniture are made from rubber wood — a pure solid wood. It is eco-friendly solid wood, not a wood substitute. It is nearly as strong and durable as teak. It offers unmatched dimensional stability.",
    "img": "assets/RubcoAsset/computer_table_colonial/computer_table_colonial.jpg",
    "images": [
      "assets/RubcoAsset/computer_table_colonial/computer_table_colonial.jpg",
      "assets/RubcoAsset/computer_table_colonial/computer_table_colonial_1.jpg",
      "assets/RubcoAsset/computer_table_colonial/computer_table_colonial_2.jpg",
      "assets/RubcoAsset/computer_table_colonial/computer_table_colonial_3.jpg",
      "assets/RubcoAsset/computer_table_colonial/computer_table_colonial_4.jpg",
      "assets/RubcoAsset/computer_table_colonial/computer_table_colonial_5.jpg"
    ],
    "listingUrl": "https://rubcobangalore.com/furniture/computer-table-colonial",
    "colors": [
      "Honey",
      "Teak"
    ]
  },
  {
    "id": "elion",
    "name": "Elion",
    "category": "office-workstations",
    "type": "workstation",
    "material": "Three Drawer Storage System",
    "designer": "Bosq Ergonomics",
    "rating": 4.6,
    "badge": "",
    "description": "ELION is a compact office table crafted for structured daily use. Featuring a dual-tone wood and black finish, it combines visual simplicity with functional storage through three smooth drawers. The integrated modesty panel adds privacy while maintaining a clean and professional workspace aesthetic.",
    "img": "assets/products_catalog_images/Elion/Elion_01.png",
    "images": [
      "assets/products_catalog_images/Elion/Elion_01.png",
      "assets/products_catalog_images/Elion/Elion_02.png",
      "assets/products_catalog_images/Elion/Elion_03.png",
      "assets/products_catalog_images/Elion/Elion_04.png"
    ],
    "colors": []
  },
  {
    "id": "elix",
    "name": "Elix",
    "category": "office-workstations",
    "type": "workstation",
    "material": "L-Shaped Executive Workstation",
    "designer": "Bosq Ergonomics",
    "rating": 4.4,
    "badge": "",
    "description": "ELIX is an L-shaped executive desk designed for spacious and organized work environments. It features a large work surface with an attached side storage unit that includes two drawers and two cabinet doors, offering both organized and concealed storage while maintaining a clean and functional workspace.",
    "img": "assets/products_catalog_images/Elix/Elix_01.png",
    "images": [
      "assets/products_catalog_images/Elix/Elix_01.png",
      "assets/products_catalog_images/Elix/Elix_02.png",
      "assets/products_catalog_images/Elix/Elix_03.png",
      "assets/products_catalog_images/Elix/Elix_04.png"
    ],
    "colors": []
  },
  {
    "id": "erom",
    "name": "Erom",
    "category": "office-workstations",
    "type": "workstation",
    "material": "Two Drawer Storage",
    "designer": "Bosq Ergonomics",
    "rating": 4.8,
    "badge": "",
    "description": "EROM is a functional office table designed for organized work and everyday use. It features two drawers for convenient storage and an integrated modesty panel that enhances privacy while maintaining a clean and professional workspace.",
    "img": "assets/products_catalog_images/Erom/Erom_01.png",
    "images": [
      "assets/products_catalog_images/Erom/Erom_01.png",
      "assets/products_catalog_images/Erom/Erom_02.png",
      "assets/products_catalog_images/Erom/Erom_03.png",
      "assets/products_catalog_images/Erom/Erom_04.png"
    ],
    "colors": []
  },
  {
    "id": "evon",
    "name": "Evon",
    "category": "office-workstations",
    "type": "workstation",
    "material": "Sit-Stand Functionality",
    "designer": "Bosq Ergonomics",
    "rating": 4.4,
    "badge": "",
    "description": "Single motor / Stage 2 EVON is a height-adjustable workstation designed for ergonomic and flexible work environments. It supports smooth transitions between sitting and standing positions, enhancing comfort and productivity throughout the day.",
    "img": "assets/products_catalog_images/Evon/Evon_01.png",
    "images": [
      "assets/products_catalog_images/Evon/Evon_01.png",
      "assets/products_catalog_images/Evon/Evon_02.png",
      "assets/products_catalog_images/Evon/Evon_03.png"
    ],
    "colors": []
  },
  {
    "id": "helio",
    "name": "Helio",
    "category": "office-workstations",
    "type": "workstation",
    "material": "Front Open Cubby Storage",
    "designer": "Bosq Ergonomics",
    "rating": 4.2,
    "badge": "",
    "description": "HELIO is a thoughtfully designed manager table that integrates both open and closed storage elements. With front-facing cubbies for quick access and a rear storage unit featuring a drawer and cabinet, it ensures efficient organization. The dual-tone finish and modesty panel enhance both functionality and professional appeal.",
    "img": "assets/products_catalog_images/Helio/Helio_01.png",
    "images": [
      "assets/products_catalog_images/Helio/Helio_01.png",
      "assets/products_catalog_images/Helio/Helio_02.png",
      "assets/products_catalog_images/Helio/Helio_03.png",
      "assets/products_catalog_images/Helio/Helio_04.png"
    ],
    "colors": []
  },
  {
    "id": "kyro",
    "name": "Kyro",
    "category": "office-workstations",
    "type": "table",
    "material": "Moon Leg Metal Structure",
    "designer": "Bosq Ergonomics",
    "rating": 4.5,
    "badge": "",
    "description": "The KYRO conference Table combines contemporary aesthetics with structural stability. Designed with distinctive moon-leg supports and an integrated flip-up box, it provides a refined setting for meetings, presentations, and collaborative work while maintaining a clean and organized workspace.",
    "img": "assets/products_catalog_images/Kyro/Kyro_02.png",
    "images": [
      "assets/products_catalog_images/Kyro/Kyro_02.png",
      "assets/products_catalog_images/Kyro/Kyro_04.png",
      "assets/products_catalog_images/Kyro/Kyro_03.png",
      "assets/products_catalog_images/Kyro/Kyro_01.png"
    ],
    "colors": [],
    "tags": [
      "coffee table"
    ]
  },
  {
    "id": "l_type_workstation",
    "name": "L-Type Workstation",
    "category": "office-workstations",
    "type": "workstation",
    "material": "Engineered Wood",
    "designer": "Buro Design",
    "rating": 4.2,
    "badge": "",
    "description": ": Carcass 16mm thick pre-laminated particle board in Everest White with color option only for top Multi-purpose Table : 25mm thick particle board with 18 mm modesty & 300 x 400 x 275 height. 2 drawer unit with PVC handles and one lock in Everest White.",
    "img": "assets/products_catalog_images/L-Type Workstation/L_Type_Workstation_01.png",
    "images": [
      "assets/products_catalog_images/L-Type Workstation/L_Type_Workstation_01.png",
      "assets/products_catalog_images/L-Type Workstation/L_Type_Workstation_02.png",
      "assets/products_catalog_images/L-Type Workstation/L_Type_Workstation_03.png",
      "assets/products_catalog_images/L-Type Workstation/L_Type_Workstation_04.png",
      "assets/products_catalog_images/L-Type Workstation/L_Type_Workstation_05.png",
      "assets/products_catalog_images/L-Type Workstation/L_Type_Workstation_06.png",
      "assets/products_catalog_images/L-Type Workstation/L_Type_Workstation_07.png",
      "assets/products_catalog_images/L-Type Workstation/L_Type_Workstation_08.png",
      "assets/products_catalog_images/L-Type Workstation/L_Type_Workstation_09.png",
      "assets/products_catalog_images/L-Type Workstation/L_Type_Workstation_10.png",
      "assets/products_catalog_images/L-Type Workstation/L_Type_Workstation_11.png",
      "assets/products_catalog_images/L-Type Workstation/L_Type_Workstation_12.png"
    ],
    "colors": []
  },
  {
    "id": "lior",
    "name": "Lior",
    "category": "office-workstations",
    "type": "workstation",
    "material": "L-Shaped Workstation",
    "designer": "Bosq Ergonomics",
    "rating": 4.5,
    "badge": "",
    "description": "LIOR is an L-shaped workstation designed for organized and efficient workflows. It features two drawers, open cubby storage, and a side unit with one drawer and one door cabinet, offering both accessible and concealed storage in a structured workspace.",
    "img": "assets/products_catalog_images/Lior/Lior_01.png",
    "images": [
      "assets/products_catalog_images/Lior/Lior_01.png",
      "assets/products_catalog_images/Lior/Lior_02.png",
      "assets/products_catalog_images/Lior/Lior_03.png",
      "assets/products_catalog_images/Lior/Lior_04.png",
      "assets/products_catalog_images/Lior/Lior_05.png"
    ],
    "colors": []
  },
  {
    "id": "liora",
    "name": "Liora",
    "category": "office-workstations",
    "type": "workstation",
    "material": "Sit-Stand Functionality",
    "designer": "Bosq Ergonomics",
    "rating": 4.4,
    "badge": "",
    "description": "LIORA is a height-adjustable workstation designed for enhanced comfort and adaptability. Its wider structure and smooth height adjustment make it ideal for efficient sit-stand working.",
    "img": "assets/products_catalog_images/Liora/Liora_01.png",
    "images": [
      "assets/products_catalog_images/Liora/Liora_01.png",
      "assets/products_catalog_images/Liora/Liora_02.png",
      "assets/products_catalog_images/Liora/Liora_03.png",
      "assets/products_catalog_images/Liora/Liora_04.png",
      "assets/products_catalog_images/Liora/Liora_05.png",
      "assets/products_catalog_images/Liora/Liora_06.png"
    ],
    "colors": []
  },
  {
    "id": "luvon",
    "name": "Luvon",
    "category": "office-workstations",
    "type": "workstation",
    "material": "Open Cubby Storage",
    "designer": "Bosq Ergonomics",
    "rating": 4.3,
    "badge": "",
    "description": "LUVON combines essential storage with a clean, modern design in a compact form. Featuring an open cubby, a drawer, and a door cabinet, it allows both quick access and concealed organization. The integrated modesty panel ensures a practical and well-balanced workspace.",
    "img": "assets/products_catalog_images/Luvon/Luvon_01.png",
    "images": [
      "assets/products_catalog_images/Luvon/Luvon_01.png",
      "assets/products_catalog_images/Luvon/Luvon_02.png",
      "assets/products_catalog_images/Luvon/Luvon_03.png",
      "assets/products_catalog_images/Luvon/Luvon_04.png"
    ],
    "colors": []
  },
  {
    "id": "lynk",
    "name": "Lynk",
    "category": "office-workstations",
    "type": "workstation",
    "material": "Space-Efficient Layout",
    "designer": "Bosq Ergonomics",
    "rating": 4.7,
    "badge": "",
    "description": "LYNK is a dual workstation system designed to maximize space efficiency in shared office environments. It allows two users to work simultaneously while maintaining a clean and organized layout.",
    "img": "assets/products_catalog_images/Lynk/Lynk_02.png",
    "images": [
      "assets/products_catalog_images/Lynk/Lynk_02.png"
    ],
    "colors": []
  },
  {
    "id": "merit",
    "name": "Merit",
    "category": "office-workstations",
    "type": "workstation",
    "material": "Moldou Acacia Dark & Light",
    "designer": "Buro Design",
    "rating": 4.7,
    "badge": "",
    "description": "MERIT Director Suit Type 1 with Credestal 1800(W) X 2100(D) X 750(HT) MERIT Director Suit Type 2 with Credenza 1800(W) X 1800(D) X 750(HT)",
    "img": "assets/products_catalog_images/Merit/Merit_01.png",
    "images": [
      "assets/products_catalog_images/Merit/Merit_01.png",
      "assets/products_catalog_images/Merit/Merit_02.png",
      "assets/products_catalog_images/Merit/Merit_03.png",
      "assets/products_catalog_images/Merit/Merit_04.png",
      "assets/products_catalog_images/Merit/Merit_05.png",
      "assets/products_catalog_images/Merit/Merit_06.png",
      "assets/products_catalog_images/Merit/Merit_07.png",
      "assets/products_catalog_images/Merit/Merit_08.png",
      "assets/products_catalog_images/Merit/Merit_09.png",
      "assets/products_catalog_images/Merit/Merit_10.png",
      "assets/products_catalog_images/Merit/Merit_11.png",
      "assets/products_catalog_images/Merit/Merit_12.png",
      "assets/products_catalog_images/Merit/Merit_13.png",
      "assets/products_catalog_images/Merit/Merit_14.png",
      "assets/products_catalog_images/Merit/Merit_15.png",
      "assets/products_catalog_images/Merit/Merit_16.png"
    ],
    "colors": [
      "Moldou Acacia Dark & Light"
    ]
  },
  {
    "id": "merit_estillo_conference",
    "name": "Merit & Estillo Conference",
    "category": "office-workstations",
    "type": "table",
    "material": "Engineered Wood",
    "designer": "Buro Design",
    "rating": 4.8,
    "badge": "",
    "description": "• Top :- 54mm thick dual color edge in batten structure with melamine finish. • Modesty :- 18mm thick in melamine finish • Gable panel :- 54mm thick dual color edge with melamine finish • Access Flap :- Aluminum anodized 393(L) X 150(D) • Cable Tray :- 0.8 mm thick CRCA powder coated. • Legs :- 50mm x 50mm x1.6 mm thick MS powder coated • Middle Electrical leg :- Provided in 3000 mm & above sizes • Cable Tray :- 0.8 mm thick CRCA powder coated • Top :- 25mm thick PLPB with melamine finish. • Cross Members :- 40mmx40mm x1.2mm thick MS powder coated • Access flap :- Aluminum anodized 324mm • Vertebrae :- Provided in 1200 to 1800 mm sizes.",
    "img": "assets/products_catalog_images/Merit & Estillo Conference/Merit_Estillo_Conference_01.png",
    "images": [
      "assets/products_catalog_images/Merit & Estillo Conference/Merit_Estillo_Conference_01.png",
      "assets/products_catalog_images/Merit & Estillo Conference/Merit_Estillo_Conference_02.png",
      "assets/products_catalog_images/Merit & Estillo Conference/Merit_Estillo_Conference_03.png",
      "assets/products_catalog_images/Merit & Estillo Conference/Merit_Estillo_Conference_04.png"
    ],
    "colors": [],
    "tags": [
      "coffee table"
    ]
  },
  {
    "id": "modular_conference_z_line_nova",
    "name": "Modular Conference (Z-Line & Nova)",
    "category": "office-workstations",
    "type": "table",
    "material": "Vermount",
    "designer": "Buro Design",
    "rating": 4.7,
    "badge": "",
    "description": "",
    "img": "assets/products_catalog_images/Modular Conference (Z-Line & Nova)/Modular_Conference_Z_Line_Nova_01.png",
    "images": [
      "assets/products_catalog_images/Modular Conference (Z-Line & Nova)/Modular_Conference_Z_Line_Nova_01.png",
      "assets/products_catalog_images/Modular Conference (Z-Line & Nova)/Modular_Conference_Z_Line_Nova_02.png",
      "assets/products_catalog_images/Modular Conference (Z-Line & Nova)/Modular_Conference_Z_Line_Nova_03.png",
      "assets/products_catalog_images/Modular Conference (Z-Line & Nova)/Modular_Conference_Z_Line_Nova_04.png",
      "assets/products_catalog_images/Modular Conference (Z-Line & Nova)/Modular_Conference_Z_Line_Nova_05.png",
      "assets/products_catalog_images/Modular Conference (Z-Line & Nova)/Modular_Conference_Z_Line_Nova_06.png"
    ],
    "colors": [
      "Vermount"
    ],
    "tags": [
      "coffee table"
    ]
  },
  {
    "id": "nexa_pro",
    "name": "Nexa Pro",
    "category": "office-workstations",
    "type": "workstation",
    "material": "Multi-User Workstation",
    "designer": "Bosq Ergonomics",
    "rating": 4.4,
    "badge": "",
    "description": "NEXA PRO is a premium workstation designed for modern offices requiring durability and refined aesthetics. It features a T-leg frame with aluminium diecast leg support for enhanced strength and style.",
    "img": "assets/products_catalog_images/Nexa Pro/Nexa_Pro_01.png",
    "images": [
      "assets/products_catalog_images/Nexa Pro/Nexa_Pro_01.png",
      "assets/products_catalog_images/Nexa Pro/Nexa_Pro_02.png",
      "assets/products_catalog_images/Nexa Pro/Nexa_Pro_03.png",
      "assets/products_catalog_images/Nexa Pro/Nexa_Pro_04.png"
    ],
    "colors": []
  },
  {
    "id": "nexgrid",
    "name": "Nexgrid",
    "category": "office-workstations",
    "type": "workstation",
    "material": "Moon Leg Design",
    "designer": "Bosq Ergonomics",
    "rating": 4.4,
    "badge": "",
    "description": "NEXGRID is a modern 4-seater workstation designed for collaborative office environments. It features a back-to-back layout with sturdy metal framing, privacy panels, integrated storage, and a clean professional appearance for productive team spaces.",
    "img": "assets/products_catalog_images/Nexgrid/Nexgrid_01.png",
    "images": [
      "assets/products_catalog_images/Nexgrid/Nexgrid_01.png"
    ],
    "colors": []
  },
  {
    "id": "nova-workstation",
    "name": "Nova",
    "category": "office-workstations",
    "type": "workstation",
    "material": "Vermount",
    "designer": "Buro Design",
    "rating": 5,
    "badge": "",
    "description": "Nova has a durable, commercial-grade work surface that lets you handle any task with ease. It is accompanied by several storage options a blend of minimalistic design and maximum functionality, the Nova is simply adorable.",
    "img": "assets/products_catalog_images/Nova/Nova_01.png",
    "images": [
      "assets/products_catalog_images/Nova/Nova_01.png",
      "assets/products_catalog_images/Nova/Nova_02.png",
      "assets/products_catalog_images/Nova/Nova_03.png",
      "assets/products_catalog_images/Nova/Nova_04.png",
      "assets/products_catalog_images/Nova/Nova_05.png",
      "assets/products_catalog_images/Nova/Nova_06.png",
      "assets/products_catalog_images/Nova/Nova_07.png",
      "assets/products_catalog_images/Nova/Nova_08.png",
      "assets/products_catalog_images/Nova/Nova_09.png",
      "assets/products_catalog_images/Nova/Nova_10.png",
      "assets/products_catalog_images/Nova/Nova_11.png",
      "assets/products_catalog_images/Nova/Nova_12.png",
      "assets/products_catalog_images/Nova/Nova_13.png",
      "assets/products_catalog_images/Nova/Nova_14.png",
      "assets/products_catalog_images/Nova/Nova_15.png",
      "assets/products_catalog_images/Nova/Nova_16.png"
    ],
    "colors": [
      "Vermount"
    ]
  },
  {
    "id": "nova_integra_magnus",
    "name": "Nova Integra & Magnus",
    "category": "office-workstations",
    "type": "workstation",
    "material": "Vermount",
    "designer": "Buro Design",
    "rating": 4.9,
    "badge": "",
    "description": "• Designer levelers • Modesty Panel: 18mm melamine edge banded • Side Panels : 18mm Melamine edge banded • Top: Silver profile wrapped trim to give waterfall edge to table top • Designer Aluminum profile on modesty panels • 30mm Melamine edge banded top",
    "img": "assets/products_catalog_images/Nova Integra & Magnus/Nova_Integra_Magnus_01.png",
    "images": [
      "assets/products_catalog_images/Nova Integra & Magnus/Nova_Integra_Magnus_01.png",
      "assets/products_catalog_images/Nova Integra & Magnus/Nova_Integra_Magnus_02.png",
      "assets/products_catalog_images/Nova Integra & Magnus/Nova_Integra_Magnus_03.png",
      "assets/products_catalog_images/Nova Integra & Magnus/Nova_Integra_Magnus_04.png",
      "assets/products_catalog_images/Nova Integra & Magnus/Nova_Integra_Magnus_05.png",
      "assets/products_catalog_images/Nova Integra & Magnus/Nova_Integra_Magnus_06.png",
      "assets/products_catalog_images/Nova Integra & Magnus/Nova_Integra_Magnus_07.png"
    ],
    "colors": [
      "Vermount"
    ]
  },
  {
    "id": "nuvia",
    "name": "Nuvia",
    "category": "office-workstations",
    "type": "workstation",
    "material": "Sit-Stand Functionality",
    "designer": "Bosq Ergonomics",
    "rating": 4.6,
    "badge": "",
    "description": "NUVIA is a height-adjustable workstation built for modern, dynamic workspaces. It enables effortless switching between sitting and standing positions, promoting better posture and efficiency.",
    "img": "assets/products_catalog_images/Nuvia/Nuvia_01.png",
    "images": [
      "assets/products_catalog_images/Nuvia/Nuvia_01.png",
      "assets/products_catalog_images/Nuvia/Nuvia_02.png",
      "assets/products_catalog_images/Nuvia/Nuvia_03.png"
    ],
    "colors": []
  },
  {
    "id": "omnio",
    "name": "Omnio",
    "category": "office-workstations",
    "type": "workstation",
    "material": "Multi-User Workstation",
    "designer": "Bosq Ergonomics",
    "rating": 4.9,
    "badge": "",
    "description": "OMNIO is a practical multi-user workstation designed for efficient workspace planning. Its straight leg structure ensures a clean appearance with dependable everyday functionality.",
    "img": "assets/products_catalog_images/Omnio/Omnio_01.png",
    "images": [
      "assets/products_catalog_images/Omnio/Omnio_01.png",
      "assets/products_catalog_images/Omnio/Omnio_02.png",
      "assets/products_catalog_images/Omnio/Omnio_03.png"
    ],
    "colors": []
  },
  {
    "id": "orexa",
    "name": "Orexa",
    "category": "office-workstations",
    "type": "workstation",
    "material": "Two Drawer Storage System",
    "designer": "Bosq Ergonomics",
    "rating": 4.6,
    "badge": "",
    "description": "OREXA is designed for organized work with a clean and minimal structure. Equipped with two smooth drawers, it ensures easy storage of everyday essentials. The integrated modesty panel adds privacy while maintaining a modern and professional workspace.",
    "img": "assets/products_catalog_images/Orexa/Orexa_01.png",
    "images": [
      "assets/products_catalog_images/Orexa/Orexa_01.png",
      "assets/products_catalog_images/Orexa/Orexa_02.png",
      "assets/products_catalog_images/Orexa/Orexa_03.png"
    ],
    "colors": []
  },
  {
    "id": "orlo",
    "name": "Orlo",
    "category": "office-workstations",
    "type": "workstation",
    "material": "Single Color Hanging Modesty Board",
    "designer": "Bosq Ergonomics",
    "rating": 4.2,
    "badge": "",
    "description": "ORLO is designed for leaders who prefer clarity in both design and decision-making. With its sleek dual-tone finish and geometric structure, this desk offers a perfect balance of minimalism and strength. The integrated side storage enhances usability without compromising aesthetics.",
    "img": "assets/products_catalog_images/Orlo/Orlo_01.png",
    "images": [
      "assets/products_catalog_images/Orlo/Orlo_01.png",
      "assets/products_catalog_images/Orlo/Orlo_03.png",
      "assets/products_catalog_images/Orlo/Orlo_04.png",
      "assets/products_catalog_images/Orlo/Orlo_05.png"
    ],
    "colors": []
  },
  {
    "id": "prestige",
    "name": "Prestige",
    "category": "office-workstations",
    "type": "workstation",
    "material": "Engineered Wood",
    "designer": "Buro Design",
    "rating": 4.5,
    "badge": "",
    "description": "Talk about making your presence felt! Prestige is a strong, masculine design that comes in a smart colour blend to match your cabin room décor. It is ideal for those who want a top-quality, modern, office experience.",
    "img": "assets/products_catalog_images/Prestige/Prestige_01.png",
    "images": [
      "assets/products_catalog_images/Prestige/Prestige_01.png",
      "assets/products_catalog_images/Prestige/Prestige_02.png",
      "assets/products_catalog_images/Prestige/Prestige_03.png",
      "assets/products_catalog_images/Prestige/Prestige_04.png",
      "assets/products_catalog_images/Prestige/Prestige_05.png",
      "assets/products_catalog_images/Prestige/Prestige_06.png",
      "assets/products_catalog_images/Prestige/Prestige_07.png",
      "assets/products_catalog_images/Prestige/Prestige_08.png",
      "assets/products_catalog_images/Prestige/Prestige_09.png",
      "assets/products_catalog_images/Prestige/Prestige_10.png",
      "assets/products_catalog_images/Prestige/Prestige_11.png",
      "assets/products_catalog_images/Prestige/Prestige_12.png",
      "assets/products_catalog_images/Prestige/Prestige_13.png",
      "assets/products_catalog_images/Prestige/Prestige_14.png",
      "assets/products_catalog_images/Prestige/Prestige_15.png",
      "assets/products_catalog_images/Prestige/Prestige_16.png",
      "assets/products_catalog_images/Prestige/Prestige_17.png",
      "assets/products_catalog_images/Prestige/Prestige_18.png",
      "assets/products_catalog_images/Prestige/Prestige_19.png",
      "assets/products_catalog_images/Prestige/Prestige_20.png",
      "assets/products_catalog_images/Prestige/Prestige_21.png",
      "assets/products_catalog_images/Prestige/Prestige_22.png",
      "assets/products_catalog_images/Prestige/Prestige_23.png",
      "assets/products_catalog_images/Prestige/Prestige_24.png",
      "assets/products_catalog_images/Prestige/Prestige_25.png",
      "assets/products_catalog_images/Prestige/Prestige_26.png",
      "assets/products_catalog_images/Prestige/Prestige_27.png",
      "assets/products_catalog_images/Prestige/Prestige_28.png",
      "assets/products_catalog_images/Prestige/Prestige_29.png",
      "assets/products_catalog_images/Prestige/Prestige_30.png",
      "assets/products_catalog_images/Prestige/Prestige_31.png",
      "assets/products_catalog_images/Prestige/Prestige_32.png",
      "assets/products_catalog_images/Prestige/Prestige_33.png",
      "assets/products_catalog_images/Prestige/Prestige_34.png"
    ],
    "colors": []
  },
  {
    "id": "primor",
    "name": "Primor",
    "category": "office-workstations",
    "type": "workstation",
    "material": "One Drawer Storage",
    "designer": "Bosq Ergonomics",
    "rating": 4.3,
    "badge": "",
    "description": "PRIMOR is a functional office table designed for everyday efficiency. Featuring one drawer and a door cabinet, it offers both accessible and concealed storage. The integrated modesty panel helps maintain a neat and professional workspace.",
    "img": "assets/products_catalog_images/Primor/Primor_01.png",
    "images": [
      "assets/products_catalog_images/Primor/Primor_01.png",
      "assets/products_catalog_images/Primor/Primor_02.png",
      "assets/products_catalog_images/Primor/Primor_03.png",
      "assets/products_catalog_images/Primor/Primor_04.png",
      "assets/products_catalog_images/Primor/Primor_05.png",
      "assets/products_catalog_images/Primor/Primor_06.png"
    ],
    "colors": []
  },
  {
    "id": "privon",
    "name": "Privon",
    "category": "office-workstations",
    "type": "workstation",
    "material": "Better Privacy Panels",
    "designer": "Bosq Ergonomics",
    "rating": 4.7,
    "badge": "",
    "description": "PRIVON is a premium panel-based workstation designed for privacy, collaboration, and productivity. It features integrated pinup and marker board panels with a refined modern appearance, ideal for structured team environments.",
    "img": "assets/products_catalog_images/Privon/Privon_01.png",
    "images": [
      "assets/products_catalog_images/Privon/Privon_01.png",
      "assets/products_catalog_images/Privon/Privon_02.png",
      "assets/products_catalog_images/Privon/Privon_03.png",
      "assets/products_catalog_images/Privon/Privon_04.png",
      "assets/products_catalog_images/Privon/Privon_05.png",
      "assets/products_catalog_images/Privon/Privon_06.png"
    ],
    "colors": []
  },
  {
    "id": "privon_x",
    "name": "Privon X",
    "category": "office-workstations",
    "type": "workstation",
    "material": "L-Shaped Workstation",
    "designer": "Bosq Ergonomics",
    "rating": 4.3,
    "badge": "",
    "description": "PRIVON X is an extended L-shaped panel workstation created for spacious collaborative environments. It offers the same premium privacy and productivity features as PRIVON, with an expanded corner layout for enhanced workspace efficiency.",
    "img": "assets/products_catalog_images/Privon X/Privon_X_01.png",
    "images": [
      "assets/products_catalog_images/Privon X/Privon_X_01.png",
      "assets/products_catalog_images/Privon X/Privon_X_02.png",
      "assets/products_catalog_images/Privon X/Privon_X_03.png",
      "assets/products_catalog_images/Privon X/Privon_X_04.png",
      "assets/products_catalog_images/Privon X/Privon_X_05.png",
      "assets/products_catalog_images/Privon X/Privon_X_06.png"
    ],
    "colors": []
  },
  {
    "id": "repute",
    "name": "Repute",
    "category": "office-workstations",
    "type": "workstation",
    "material": "Lyon Walnut",
    "designer": "Buro Design",
    "rating": 4.6,
    "badge": "",
    "description": "The Repute office table features a rich walnut finish and a PU- painted glass tabletop with an Aero-foiled edge. Its sleek glass work surface is complemented by a solid gable-end panel with thick curved edges. A dual-tone modesty panel and fluted detailing enhance the overall elegance, while the free-standing side storage unit offers ample space for organized storage.",
    "img": "assets/products_catalog_images/Repute/Repute_01.png",
    "images": [
      "assets/products_catalog_images/Repute/Repute_01.png",
      "assets/products_catalog_images/Repute/Repute_02.png",
      "assets/products_catalog_images/Repute/Repute_03.png",
      "assets/products_catalog_images/Repute/Repute_04.png",
      "assets/products_catalog_images/Repute/Repute_05.png",
      "assets/products_catalog_images/Repute/Repute_06.png",
      "assets/products_catalog_images/Repute/Repute_07.png",
      "assets/products_catalog_images/Repute/Repute_08.png",
      "assets/products_catalog_images/Repute/Repute_09.png",
      "assets/products_catalog_images/Repute/Repute_10.png",
      "assets/products_catalog_images/Repute/Repute_11.png",
      "assets/products_catalog_images/Repute/Repute_12.png",
      "assets/products_catalog_images/Repute/Repute_13.png",
      "assets/products_catalog_images/Repute/Repute_14.png",
      "assets/products_catalog_images/Repute/Repute_15.png",
      "assets/products_catalog_images/Repute/Repute_16.png",
      "assets/products_catalog_images/Repute/Repute_17.png"
    ],
    "colors": [
      "Lyon Walnut"
    ]
  },
  {
    "id": "rubco-semi-executive-table",
    "name": "Semi Executive Table",
    "category": "office-workstations",
    "type": "table",
    "material": "Rubberwood",
    "designer": "Rubco Premium",
    "rating": 4.8,
    "badge": "",
    "description": "Rubco Furniture are made from rubber wood — a pure solid wood. It is eco-friendly solid wood, not a wood substitute. It is nearly as strong and durable as teak. It offers unmatched dimensional stability.",
    "img": "assets/RubcoAsset/semi_executive_table/semi_executive_table.jpg",
    "images": [
      "assets/RubcoAsset/semi_executive_table/semi_executive_table.jpg",
      "assets/RubcoAsset/semi_executive_table/semi_executive_table_1.jpg",
      "assets/RubcoAsset/semi_executive_table/semi_executive_table_2.jpg",
      "assets/RubcoAsset/semi_executive_table/semi_executive_table_3.jpg",
      "assets/RubcoAsset/semi_executive_table/semi_executive_table_4.jpg"
    ],
    "listingUrl": "https://rubcobangalore.com/furniture/semi-executive-table",
    "colors": [
      "Honey",
      "Teak"
    ]
  },
  {
    "id": "sovio",
    "name": "Sovio",
    "category": "office-workstations",
    "type": "workstation",
    "material": "Bqmta.",
    "designer": "Bosq Ergonomics",
    "rating": 4.3,
    "badge": "",
    "description": "SOVIO is a modern office table designed for efficient storage and a professional workspace. It features three smooth drawers for organized storage, along with an integrated modesty panel that adds privacy while maintaining a clean and structured look.",
    "img": "assets/products_catalog_images/Sovio/Sovio_01.png",
    "images": [
      "assets/products_catalog_images/Sovio/Sovio_01.png",
      "assets/products_catalog_images/Sovio/Sovio_02.png",
      "assets/products_catalog_images/Sovio/Sovio_03.png",
      "assets/products_catalog_images/Sovio/Sovio_04.png",
      "assets/products_catalog_images/Sovio/Sovio_05.png",
      "assets/products_catalog_images/Sovio/Sovio_06.png",
      "assets/products_catalog_images/Sovio/Sovio_07.png"
    ],
    "colors": []
  },
  {
    "id": "supreme",
    "name": "Supreme",
    "category": "office-workstations",
    "type": "workstation",
    "material": "Fumed Oak & Sahara Beige",
    "designer": "Buro Design",
    "rating": 4.7,
    "badge": "",
    "description": "Command attention with a workspace that reflects both authority and elegance. Designed with a sophisticated dual-tone finish, integrated charging ports, and premium fluted panel detailing, this executive setup blends aesthetics with functionality. The seamless combination of Fumed Oak and Sahara Beige textures, ample storage with glass-front cabinets, and a refined desk layout places you at the True centre of vision and control.",
    "img": "assets/products_catalog_images/Supreme/Supreme_01.png",
    "images": [
      "assets/products_catalog_images/Supreme/Supreme_01.png",
      "assets/products_catalog_images/Supreme/Supreme_02.png",
      "assets/products_catalog_images/Supreme/Supreme_03.png",
      "assets/products_catalog_images/Supreme/Supreme_04.png",
      "assets/products_catalog_images/Supreme/Supreme_05.png",
      "assets/products_catalog_images/Supreme/Supreme_06.png",
      "assets/products_catalog_images/Supreme/Supreme_07.png",
      "assets/products_catalog_images/Supreme/Supreme_08.png",
      "assets/products_catalog_images/Supreme/Supreme_09.png",
      "assets/products_catalog_images/Supreme/Supreme_10.png",
      "assets/products_catalog_images/Supreme/Supreme_11.png",
      "assets/products_catalog_images/Supreme/Supreme_12.png",
      "assets/products_catalog_images/Supreme/Supreme_13.png",
      "assets/products_catalog_images/Supreme/Supreme_14.png",
      "assets/products_catalog_images/Supreme/Supreme_15.png",
      "assets/products_catalog_images/Supreme/Supreme_16.png",
      "assets/products_catalog_images/Supreme/Supreme_17.png"
    ],
    "colors": [
      "Fumed Oak & Sahara Beige"
    ]
  },
  {
    "id": "teron",
    "name": "Teron",
    "category": "office-workstations",
    "type": "workstation",
    "material": "Multi-User Workstation",
    "designer": "Bosq Ergonomics",
    "rating": 4.1,
    "badge": "",
    "description": "TERON is a clean and functional workstation designed for modern team environments. It features a sturdy T-leg structure that provides stability, space efficiency, and a professional appearance.",
    "img": "assets/products_catalog_images/Teron/Teron_01.png",
    "images": [
      "assets/products_catalog_images/Teron/Teron_01.png"
    ],
    "colors": []
  },
  {
    "id": "titus",
    "name": "Titus",
    "category": "office-workstations",
    "type": "workstation",
    "material": "HG Cashmere & Dark Brown Eucalyptus",
    "designer": "Buro Design",
    "rating": 4.5,
    "badge": "",
    "description": "Elevate your leadership space with a desk that commands attention and delivers performance. Featuring a luxurious two-tone palette of high- gloss beige and rich walnut grain, this director's desk blends modern elegance with powerful presence. Fluted curved panel detailing, a premium leather work surface, and a thoughtfully organized layout reflect authority and refined taste. Designed with built-in cable access and seamless storage, this is where every decision begins-at the True centre of command.",
    "img": "assets/products_catalog_images/Titus/Titus_01.png",
    "images": [
      "assets/products_catalog_images/Titus/Titus_01.png",
      "assets/products_catalog_images/Titus/Titus_02.png",
      "assets/products_catalog_images/Titus/Titus_03.png",
      "assets/products_catalog_images/Titus/Titus_04.png",
      "assets/products_catalog_images/Titus/Titus_05.png",
      "assets/products_catalog_images/Titus/Titus_06.png"
    ],
    "colors": [
      "HG Cashmere & Dark Brown Eucalyptus"
    ]
  },
  {
    "id": "tyro",
    "name": "Tyro",
    "category": "office-workstations",
    "type": "workstation",
    "material": "Table",
    "designer": "Bosq Ergonomics",
    "rating": 4.1,
    "badge": "",
    "description": "TYRO is a modern L-shaped workstation designed for functionality and clean workspace organization. It features open cubbies and two drawers for efficient storage, supported by sturdy metal legs for durability and a professional setup.",
    "img": "assets/products_catalog_images/Tyro/Tyro_01.png",
    "images": [
      "assets/products_catalog_images/Tyro/Tyro_01.png",
      "assets/products_catalog_images/Tyro/Tyro_02.png",
      "assets/products_catalog_images/Tyro/Tyro_03.png",
      "assets/products_catalog_images/Tyro/Tyro_04.png",
      "assets/products_catalog_images/Tyro/Tyro_05.png",
      "assets/products_catalog_images/Tyro/Tyro_06.png"
    ],
    "colors": []
  },
  {
    "id": "vectron",
    "name": "Vectron",
    "category": "office-workstations",
    "type": "workstation",
    "material": "Panel Based Workstation",
    "designer": "Bosq Ergonomics",
    "rating": 4.2,
    "badge": "",
    "description": "VECTRON is a contemporary panel-based workstation designed with angular leg styling for modern office spaces. It combines clean aesthetics with practical privacy and collaborative functionality.",
    "img": "assets/products_catalog_images/Vectron/Vectron_02.png",
    "images": [
      "assets/products_catalog_images/Vectron/Vectron_02.png",
      "assets/products_catalog_images/Vectron/Vectron_03.png"
    ],
    "colors": []
  },
  {
    "id": "vectron_x",
    "name": "Vectron X",
    "category": "office-workstations",
    "type": "workstation",
    "material": "L-Shaped Workstation",
    "designer": "Bosq Ergonomics",
    "rating": 5,
    "badge": "",
    "description": "VECTRON X is an extended L-shaped workstation designed with angular legs and a spacious modern layout. It delivers clean structure, privacy, and productivity for dynamic office environments.",
    "img": "assets/products_catalog_images/Vectron X/Vectron_X_01.png",
    "images": [
      "assets/products_catalog_images/Vectron X/Vectron_X_01.png",
      "assets/products_catalog_images/Vectron X/Vectron_X_02.png",
      "assets/products_catalog_images/Vectron X/Vectron_X_03.png",
      "assets/products_catalog_images/Vectron X/Vectron_X_04.png",
      "assets/products_catalog_images/Vectron X/Vectron_X_05.png"
    ],
    "colors": []
  },
  {
    "id": "vemior",
    "name": "Vemior",
    "category": "office-workstations",
    "type": "workstation",
    "material": "Two Open Cubby Storage",
    "designer": "Bosq Ergonomics",
    "rating": 4.2,
    "badge": "",
    "description": "VEMIOR is designed for efficient organization with a combination of open and closed storage. Featuring two open cubbies for quick access and a drawer for secure storage, it supports a clean and functional workflow. The overall design ensures practicality while maintaining a modern workspace aesthetic.",
    "img": "assets/products_catalog_images/Vemior/Vemior_01.png",
    "images": [
      "assets/products_catalog_images/Vemior/Vemior_01.png",
      "assets/products_catalog_images/Vemior/Vemior_02.png",
      "assets/products_catalog_images/Vemior/Vemior_03.png",
      "assets/products_catalog_images/Vemior/Vemior_04.png",
      "assets/products_catalog_images/Vemior/Vemior_05.png"
    ],
    "colors": []
  },
  {
    "id": "vetra",
    "name": "Vetra",
    "category": "office-workstations",
    "type": "workstation",
    "material": "Single Color Hanging Modesty Board",
    "designer": "Bosq Ergonomics",
    "rating": 5,
    "badge": "",
    "description": "VETRA is a statement of authority and refined taste, it blends sculpted curves with warm wooden textures to create a commanding yet inviting workspace. Designed for modern leadership environments, it features seamless integration of storage and display, while ensuring durability and functionality.",
    "img": "assets/products_catalog_images/Vetra/Vetra_01.png",
    "images": [
      "assets/products_catalog_images/Vetra/Vetra_01.png",
      "assets/products_catalog_images/Vetra/Vetra_02.png",
      "assets/products_catalog_images/Vetra/Vetra_03.png",
      "assets/products_catalog_images/Vetra/Vetra_04.png",
      "assets/products_catalog_images/Vetra/Vetra_05.png"
    ],
    "colors": []
  },
  {
    "id": "viora",
    "name": "Viora",
    "category": "office-workstations",
    "type": "workstation",
    "material": "Mubile 1.2.",
    "designer": "Bosq Ergonomics",
    "rating": 4.8,
    "badge": "",
    "description": "VIORA is designed for organized workflows with a clean and structured presence. Equipped with three smooth drawers, it provides efficient storage for everyday essentials. The integrated modesty panel enhances privacy while maintaining a professional workspace.",
    "img": "assets/products_catalog_images/Viora/Viora_01.png",
    "images": [
      "assets/products_catalog_images/Viora/Viora_01.png",
      "assets/products_catalog_images/Viora/Viora_02.png",
      "assets/products_catalog_images/Viora/Viora_03.png",
      "assets/products_catalog_images/Viora/Viora_04.png",
      "assets/products_catalog_images/Viora/Viora_05.png"
    ],
    "colors": []
  },
  {
    "id": "xylo",
    "name": "Xylo",
    "category": "office-workstations",
    "type": "workstation",
    "material": "L-Shaped Workstation",
    "designer": "Bosq Ergonomics",
    "rating": 4.8,
    "badge": "",
    "description": "XYLO is a clean and modern L-shaped workstation designed for efficient workspaces. It features open cubbies and two drawers for organized storage, supported by sturdy metal legs that ensure stability and durability. Dual color hanging modesty board",
    "img": "assets/products_catalog_images/Xylo/Xylo_01.png",
    "images": [
      "assets/products_catalog_images/Xylo/Xylo_01.png",
      "assets/products_catalog_images/Xylo/Xylo_02.png",
      "assets/products_catalog_images/Xylo/Xylo_03.png",
      "assets/products_catalog_images/Xylo/Xylo_04.png",
      "assets/products_catalog_images/Xylo/Xylo_05.png"
    ],
    "colors": []
  },
  {
    "id": "recliners-altair",
    "name": "Altair",
    "category": "recliners",
    "type": "recliner",
    "material": "Leather / Fabric",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/recliners/recliners-altair/Altair_03.png",
    "badge": "New",
    "description": "Altair — STALLION series recliner. A premium Layermax recliner delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LxWxH Closed 1040 x 955 x 1010; 2 Seater LxWxH Closed 1500 x 965 x 1000; 3 Seater LxWxH Closed 2130 x 955 x 1010.",
    "images": [
      "assets/catalogue_new/recliners/recliners-altair/Altair_03.png",
      "assets/catalogue_new/recliners/recliners-altair/Altair_01.png",
      "assets/catalogue_new/recliners/recliners-altair/Altair_02.png"
    ],
    "colors": []
  },
  {
    "id": "recliners-andromeda",
    "name": "Andromeda",
    "category": "recliners",
    "type": "recliner",
    "material": "Leather / Fabric",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/recliners/recliners-andromeda/Andromeda_02.png",
    "badge": "New",
    "description": "Andromeda — STALLION series recliner. A premium Layermax recliner delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 2 Seater LxWxH Closed 1900 x 1050 x 850; 3 Seater LxWxH Closed 2080 x 1050 x 850.",
    "images": [
      "assets/catalogue_new/recliners/recliners-andromeda/Andromeda_02.png"
    ],
    "colors": []
  },
  {
    "id": "recliners-aquila",
    "name": "Aquila",
    "category": "recliners",
    "type": "recliner",
    "material": "Leather / Fabric",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/recliners/recliners-aquila/Aquila_02.png",
    "badge": "New",
    "description": "Aquila — STALLION series recliner. A premium Layermax recliner delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 2 Seater LxWxH Closed 1860 x 1110 x 785; 3 Seater LxWxH Closed 2055 x 1110 x 785.",
    "images": [
      "assets/catalogue_new/recliners/recliners-aquila/Aquila_02.png"
    ],
    "colors": []
  },
  {
    "id": "recliners-auriga",
    "name": "Auriga",
    "category": "recliners",
    "type": "recliner",
    "material": "Leather / Fabric",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/recliners/recliners-auriga/Auriga_01.png",
    "badge": "New",
    "description": "Auriga recliner. A premium Layermax recliner delivering ergonomic comfort, refined aesthetics, and lasting durability. Available models: LMX 3 S/ 2R-29000; LMX 3 S 2R-30000.",
    "images": [
      "assets/catalogue_new/recliners/recliners-auriga/Auriga_01.png"
    ],
    "colors": []
  },
  {
    "id": "recliners-carina",
    "name": "Carina",
    "category": "recliners",
    "type": "recliner",
    "material": "Leather / Fabric",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/recliners/recliners-carina/Carina_01.png",
    "badge": "New",
    "description": "Carina recliner. A premium Layermax recliner delivering ergonomic comfort, refined aesthetics, and lasting durability.",
    "images": [
      "assets/catalogue_new/recliners/recliners-carina/Carina_01.png"
    ],
    "colors": []
  },
  {
    "id": "recliners-cassiopeia",
    "name": "Cassiopeia",
    "category": "recliners",
    "type": "recliner",
    "material": "Leather / Fabric",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/recliners/recliners-cassiopeia/Cassiopeia_02.png",
    "badge": "New",
    "description": "Cassiopeia — STALLION series recliner. A premium Layermax recliner delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 2 Seater LxWxH Closed 1830 x 1060 x 1090; 3 Seater LxWxH Closed 2040 x 1060 x 1090.",
    "images": [
      "assets/catalogue_new/recliners/recliners-cassiopeia/Cassiopeia_02.png",
      "assets/catalogue_new/recliners/recliners-cassiopeia/Cassiopeia_01.png"
    ],
    "colors": []
  },
  {
    "id": "recliners-centaurus",
    "name": "Centaurus",
    "category": "recliners",
    "type": "recliner",
    "material": "Leather / Fabric",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/recliners/recliners-centaurus/Centaurus_02.png",
    "badge": "New",
    "description": "Centaurus — STALLION series recliner. A premium Layermax recliner delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LxWxH Closed 930 x 985 x 980; 2 Seater LxWxH Closed 1850 x 985 x 980; 3 Seater LXWXH Closed 2130 x 985 x 980.",
    "images": [
      "assets/catalogue_new/recliners/recliners-centaurus/Centaurus_02.png",
      "assets/catalogue_new/recliners/recliners-centaurus/Centaurus_04.png",
      "assets/catalogue_new/recliners/recliners-centaurus/Centaurus_05.png"
    ],
    "colors": []
  },
  {
    "id": "recliners-corvus",
    "name": "Corvus",
    "category": "recliners",
    "type": "recliner",
    "material": "Leather / Fabric",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/recliners/recliners-corvus/Corvus_01.png",
    "badge": "New",
    "description": "Corvus recliner. A premium Layermax recliner delivering ergonomic comfort, refined aesthetics, and lasting durability.",
    "images": [
      "assets/catalogue_new/recliners/recliners-corvus/Corvus_01.png"
    ],
    "colors": []
  },
  {
    "id": "recliners-draco",
    "name": "Draco",
    "category": "recliners",
    "type": "recliner",
    "material": "Leather / Fabric",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/recliners/recliners-draco/Draco_01.png",
    "badge": "New",
    "description": "Draco recliner. A premium Layermax recliner delivering ergonomic comfort, refined aesthetics, and lasting durability. Available models: LMX MHT-1-14000 (MANUAL); LMX EHT -1-18500-(ELECTRICAL); LMX MHT-1-18000 (MANUAL); LMX EHT -1-22500-(ELECTRICAL).",
    "images": [
      "assets/catalogue_new/recliners/recliners-draco/Draco_01.png"
    ],
    "colors": []
  },
  {
    "id": "recliners-gemini",
    "name": "Gemini",
    "category": "recliners",
    "type": "recliner",
    "material": "Leather / Fabric",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/recliners/recliners-gemini/Gemini_02.png",
    "badge": "New",
    "description": "Gemini — STALLION series recliner. A premium Layermax recliner delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LXWXH Closed 900 x 895 x 1000; 2 Seater LxWxH Closed 1480 x 895 x 1000; 3 Seater LxWxH Closed 2065 x 895 x 1000.",
    "images": [
      "assets/catalogue_new/recliners/recliners-gemini/Gemini_02.png",
      "assets/catalogue_new/recliners/recliners-gemini/Gemini_01.png",
      "assets/catalogue_new/recliners/recliners-gemini/Gemini_03.png"
    ],
    "colors": []
  },
  {
    "id": "recliners-hydra",
    "name": "Hydra",
    "category": "recliners",
    "type": "recliner",
    "material": "Leather / Fabric",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/recliners/recliners-hydra/Hydra_01.png",
    "badge": "New",
    "description": "Hydra recliner. A premium Layermax recliner delivering ergonomic comfort, refined aesthetics, and lasting durability.",
    "images": [
      "assets/catalogue_new/recliners/recliners-hydra/Hydra_01.png"
    ],
    "colors": []
  },
  {
    "id": "recliners-lyra",
    "name": "Lyra",
    "category": "recliners",
    "type": "recliner",
    "material": "Leather / Fabric",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/recliners/recliners-lyra/Lyra_01.png",
    "badge": "New",
    "description": "Lyra — STALLION series recliner. A premium Layermax recliner delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 2 Seater LxWxH Closed 1900 x 995 x 1050; 3 Seater LxWxH Closed 2105 x 995 x 1050.",
    "images": [
      "assets/catalogue_new/recliners/recliners-lyra/Lyra_01.png",
      "assets/catalogue_new/recliners/recliners-lyra/Lyra_02.png",
      "assets/catalogue_new/recliners/recliners-lyra/Lyra_03.png"
    ],
    "colors": []
  },
  {
    "id": "recliners-nebula",
    "name": "Nebula",
    "category": "recliners",
    "type": "recliner",
    "material": "Leather / Fabric",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/recliners/recliners-nebula/Nebula_01.png",
    "badge": "New",
    "description": "Nebula recliner. A premium Layermax recliner delivering ergonomic comfort, refined aesthetics, and lasting durability. Available models: LMX MHT-1-14000 (MANUAL); LMX EHT -1-18500-(ELECTRICAL); LMX MHT-1-18000 (MANUAL); LMX EHT -1-22500-(ELECTRICAL).",
    "images": [
      "assets/catalogue_new/recliners/recliners-nebula/Nebula_01.png"
    ],
    "colors": []
  },
  {
    "id": "recliners-orion",
    "name": "Orion",
    "category": "recliners",
    "type": "recliner",
    "material": "Leather / Fabric",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/recliners/recliners-orion/Orion_01.png",
    "badge": "New",
    "description": "Orion — STALLION series recliner. A premium Layermax recliner delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 2 Seater LxWxH Closed 1880 x 1075 x 910; 3 Seater LxWxH Closed 2085 x 1075 x 910.",
    "images": [
      "assets/catalogue_new/recliners/recliners-orion/Orion_01.png",
      "assets/catalogue_new/recliners/recliners-orion/Orion_02.png"
    ],
    "colors": []
  },
  {
    "id": "recliners-pegasus",
    "name": "Pegasus",
    "category": "recliners",
    "type": "recliner",
    "material": "Leather / Fabric",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/recliners/recliners-pegasus/Pegasus_01.png",
    "badge": "New",
    "description": "Pegasus recliner. A premium Layermax recliner delivering ergonomic comfort, refined aesthetics, and lasting durability. Available models: LMX 2S/ 2R-24000; LMX 2 S/ 2R-24000.",
    "images": [
      "assets/catalogue_new/recliners/recliners-pegasus/Pegasus_01.png"
    ],
    "colors": []
  },
  {
    "id": "recliners-perseus",
    "name": "Perseus",
    "category": "recliners",
    "type": "recliner",
    "material": "Leather / Fabric",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/recliners/recliners-perseus/Perseus_01.png",
    "badge": "New",
    "description": "Perseus recliner. A premium Layermax recliner delivering ergonomic comfort, refined aesthetics, and lasting durability. Available models: 2R-3 SEATER -42000.",
    "images": [
      "assets/catalogue_new/recliners/recliners-perseus/Perseus_01.png"
    ],
    "colors": []
  },
  {
    "id": "recliners-polaris",
    "name": "Polaris",
    "category": "recliners",
    "type": "recliner",
    "material": "Leather / Fabric",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/recliners/recliners-polaris/Polaris_02.png",
    "badge": "New",
    "description": "Polaris — STALLION series recliner. A premium Layermax recliner delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LxWxH Closed 1025 x 970 x 985; 2 Seater LxWxH Closed 1605 x 970 x 985; 3 Seater LxWxH Closed 2210 970 985 mm Open 2210 x 1585 x 790.",
    "images": [
      "assets/catalogue_new/recliners/recliners-polaris/Polaris_02.png",
      "assets/catalogue_new/recliners/recliners-polaris/Polaris_01.png",
      "assets/catalogue_new/recliners/recliners-polaris/Polaris_03.png",
      "assets/catalogue_new/recliners/recliners-polaris/Polaris_04.png"
    ],
    "colors": []
  },
  {
    "id": "recliners-rigel",
    "name": "Rigel",
    "category": "recliners",
    "type": "recliner",
    "material": "Leather / Fabric",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/recliners/recliners-rigel/Rigel_01.png",
    "badge": "New",
    "description": "Rigel recliner. A premium Layermax recliner delivering ergonomic comfort, refined aesthetics, and lasting durability.",
    "images": [
      "assets/catalogue_new/recliners/recliners-rigel/Rigel_01.png"
    ],
    "colors": []
  },
  {
    "id": "recliners-scorpius",
    "name": "Scorpius",
    "category": "recliners",
    "type": "recliner",
    "material": "Leather / Fabric",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/recliners/recliners-scorpius/Scorpius_02.png",
    "badge": "New",
    "description": "Scorpius — STALLION series recliner. A premium Layermax recliner delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LxWxH Closed 910 x 910 x 1010; 2 Seater LXWXH Closed 1490 x 910 x 1010; 3 Seater LXWXH Closed 2100 x 910 x 1010.",
    "images": [
      "assets/catalogue_new/recliners/recliners-scorpius/Scorpius_02.png",
      "assets/catalogue_new/recliners/recliners-scorpius/Scorpius_01.png",
      "assets/catalogue_new/recliners/recliners-scorpius/Scorpius_03.png",
      "assets/catalogue_new/recliners/recliners-scorpius/Scorpius_04.png"
    ],
    "colors": []
  },
  {
    "id": "recliners-sirius",
    "name": "Sirius",
    "category": "recliners",
    "type": "recliner",
    "material": "Leather / Fabric",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/recliners/recliners-sirius/Sirius_01.png",
    "badge": "New",
    "description": "Sirius — STALLION series recliner. A premium Layermax recliner delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater Close 880 x 930 x 980; 2 Seater Close 1475 x 930 x 980; 3 Seater Close 2050 x 930 x 980.",
    "images": [
      "assets/catalogue_new/recliners/recliners-sirius/Sirius_01.png",
      "assets/catalogue_new/recliners/recliners-sirius/Sirius_02.png",
      "assets/catalogue_new/recliners/recliners-sirius/Sirius_03.png",
      "assets/catalogue_new/recliners/recliners-sirius/Sirius_04.png"
    ],
    "colors": []
  },
  {
    "id": "recliners-taurus",
    "name": "Taurus",
    "category": "recliners",
    "type": "recliner",
    "material": "Leather / Fabric",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/recliners/recliners-taurus/Taurus_01.png",
    "badge": "New",
    "description": "Taurus — STALLION series recliner. A premium Layermax recliner delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LxWxH 875 x 905 x 920; 2 Seater LxWxH 1485 x 905 x 920; 3 Seater LxWxH 2100 x 905 x 920.",
    "images": [
      "assets/catalogue_new/recliners/recliners-taurus/Taurus_01.png",
      "assets/catalogue_new/recliners/recliners-taurus/Taurus_03.png"
    ],
    "colors": []
  },
  {
    "id": "recliners-vega",
    "name": "Vega",
    "category": "recliners",
    "type": "recliner",
    "material": "Leather / Fabric",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/recliners/recliners-vega/Vega_02.png",
    "badge": "New",
    "description": "Vega — STALLION series recliner. A premium Layermax recliner delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LxWxH Closed 950 x 905 x 1005; 2 Seater LxWxH Closed 1510 x 905 x 1005; 3 Seater LxWxH Closed 2080 x 905 x 1005.",
    "images": [
      "assets/catalogue_new/recliners/recliners-vega/Vega_02.png",
      "assets/catalogue_new/recliners/recliners-vega/Vega_04.png",
      "assets/catalogue_new/recliners/recliners-vega/Vega_01.png",
      "assets/catalogue_new/recliners/recliners-vega/Vega_03.png"
    ],
    "colors": []
  },
  {
    "id": "recliners-vela",
    "name": "Vela",
    "category": "recliners",
    "type": "recliner",
    "material": "Leather / Fabric",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/recliners/recliners-vela/Vela_01.png",
    "badge": "New",
    "description": "Vela recliner. A premium Layermax recliner delivering ergonomic comfort, refined aesthetics, and lasting durability. Available models: LMX 3 S/ 2R-29000; LMX 3 S 2R-30000.",
    "images": [
      "assets/catalogue_new/recliners/recliners-vela/Vela_01.png"
    ],
    "colors": []
  },
  {
    "id": "recliners-virgo",
    "name": "Virgo",
    "category": "recliners",
    "type": "recliner",
    "material": "Leather / Fabric",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/recliners/recliners-virgo/Virgo_02.png",
    "badge": "New",
    "description": "Virgo — STALLION series recliner. A premium Layermax recliner delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 2 Seater LxWxH Closed 1980 x 1115 x 740; 3 Seater LxWxH Closed 2175 x 1115 x 740.",
    "images": [
      "assets/catalogue_new/recliners/recliners-virgo/Virgo_02.png",
      "assets/catalogue_new/recliners/recliners-virgo/Virgo_01.png"
    ],
    "colors": []
  },
  {
    "id": "bedroom_set_01",
    "name": "Bedroom Set 01",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Engineered Wood",
    "designer": "Kosmo Design",
    "rating": 4.2,
    "badge": "",
    "description": "",
    "img": "assets/products_catalog_images/Bedroom Set 01/Bedroom_Set_01_01.png",
    "images": [
      "assets/products_catalog_images/Bedroom Set 01/Bedroom_Set_01_01.png"
    ],
    "colors": []
  },
  {
    "id": "bedroom_set_02",
    "name": "Bedroom Set 02",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Engineered Wood",
    "designer": "Kosmo Design",
    "rating": 4.9,
    "badge": "",
    "description": "",
    "img": "assets/products_catalog_images/Bedroom Set 02/Bedroom_Set_02_01.png",
    "images": [
      "assets/products_catalog_images/Bedroom Set 02/Bedroom_Set_02_01.png",
      "assets/products_catalog_images/Bedroom Set 02/Bedroom_Set_02_02.png",
      "assets/products_catalog_images/Bedroom Set 02/Bedroom_Set_02_03.png",
      "assets/products_catalog_images/Bedroom Set 02/Bedroom_Set_02_04.png"
    ],
    "colors": []
  },
  {
    "id": "bedroom_set_03",
    "name": "Bedroom Set 03",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Engineered Wood",
    "designer": "Kosmo Design",
    "rating": 4.4,
    "badge": "",
    "description": "",
    "img": "assets/products_catalog_images/Bedroom Set 03/Bedroom_Set_03_01.png",
    "images": [
      "assets/products_catalog_images/Bedroom Set 03/Bedroom_Set_03_01.png",
      "assets/products_catalog_images/Bedroom Set 03/Bedroom_Set_03_02.png",
      "assets/products_catalog_images/Bedroom Set 03/Bedroom_Set_03_03.png",
      "assets/products_catalog_images/Bedroom Set 03/Bedroom_Set_03_04.png",
      "assets/products_catalog_images/Bedroom Set 03/Bedroom_Set_03_05.png",
      "assets/products_catalog_images/Bedroom Set 03/Bedroom_Set_03_06.png"
    ],
    "colors": []
  },
  {
    "id": "bedroom_set_04",
    "name": "Bedroom Set 04",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Engineered Wood",
    "designer": "Kosmo Design",
    "rating": 4.9,
    "badge": "",
    "description": "",
    "img": "assets/products_catalog_images/Bedroom Set 04/Bedroom_Set_04_01.png",
    "images": [
      "assets/products_catalog_images/Bedroom Set 04/Bedroom_Set_04_01.png",
      "assets/products_catalog_images/Bedroom Set 04/Bedroom_Set_04_02.png",
      "assets/products_catalog_images/Bedroom Set 04/Bedroom_Set_04_03.png",
      "assets/products_catalog_images/Bedroom Set 04/Bedroom_Set_04_04.png",
      "assets/products_catalog_images/Bedroom Set 04/Bedroom_Set_04_05.png",
      "assets/products_catalog_images/Bedroom Set 04/Bedroom_Set_04_06.png"
    ],
    "colors": []
  },
  {
    "id": "bedroom_set_05",
    "name": "Bedroom Set 05",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Engineered Wood",
    "designer": "Kosmo Design",
    "rating": 4.8,
    "badge": "",
    "description": "",
    "img": "assets/products_catalog_images/Bedroom Set 05/Bedroom_Set_05_01.png",
    "images": [
      "assets/products_catalog_images/Bedroom Set 05/Bedroom_Set_05_01.png",
      "assets/products_catalog_images/Bedroom Set 05/Bedroom_Set_05_02.png",
      "assets/products_catalog_images/Bedroom Set 05/Bedroom_Set_05_03.png",
      "assets/products_catalog_images/Bedroom Set 05/Bedroom_Set_05_04.png",
      "assets/products_catalog_images/Bedroom Set 05/Bedroom_Set_05_05.png",
      "assets/products_catalog_images/Bedroom Set 05/Bedroom_Set_05_06.png"
    ],
    "colors": []
  },
  {
    "id": "bedroom_set_06",
    "name": "Bedroom Set 06",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Engineered Wood",
    "designer": "Kosmo Design",
    "rating": 4.1,
    "badge": "",
    "description": "",
    "img": "assets/products_catalog_images/Bedroom Set 06/Bedroom_Set_06_01.png",
    "images": [
      "assets/products_catalog_images/Bedroom Set 06/Bedroom_Set_06_01.png",
      "assets/products_catalog_images/Bedroom Set 06/Bedroom_Set_06_02.png",
      "assets/products_catalog_images/Bedroom Set 06/Bedroom_Set_06_03.png",
      "assets/products_catalog_images/Bedroom Set 06/Bedroom_Set_06_04.png",
      "assets/products_catalog_images/Bedroom Set 06/Bedroom_Set_06_05.png",
      "assets/products_catalog_images/Bedroom Set 06/Bedroom_Set_06_06.png"
    ],
    "colors": []
  },
  {
    "id": "bedroom_set_07",
    "name": "Bedroom Set 07",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Engineered Wood",
    "designer": "Kosmo Design",
    "rating": 4.9,
    "badge": "",
    "description": "",
    "img": "assets/products_catalog_images/Bedroom Set 07/Bedroom_Set_07_01.png",
    "images": [
      "assets/products_catalog_images/Bedroom Set 07/Bedroom_Set_07_01.png",
      "assets/products_catalog_images/Bedroom Set 07/Bedroom_Set_07_02.png",
      "assets/products_catalog_images/Bedroom Set 07/Bedroom_Set_07_03.png",
      "assets/products_catalog_images/Bedroom Set 07/Bedroom_Set_07_04.png",
      "assets/products_catalog_images/Bedroom Set 07/Bedroom_Set_07_05.png",
      "assets/products_catalog_images/Bedroom Set 07/Bedroom_Set_07_06.png"
    ],
    "colors": []
  },
  {
    "id": "bedroom_set_08",
    "name": "Bedroom Set 08",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Engineered Wood",
    "designer": "Kosmo Design",
    "rating": 4.4,
    "badge": "",
    "description": "",
    "img": "assets/products_catalog_images/Bedroom Set 08/Bedroom_Set_08_01.png",
    "images": [
      "assets/products_catalog_images/Bedroom Set 08/Bedroom_Set_08_01.png",
      "assets/products_catalog_images/Bedroom Set 08/Bedroom_Set_08_02.png",
      "assets/products_catalog_images/Bedroom Set 08/Bedroom_Set_08_03.png",
      "assets/products_catalog_images/Bedroom Set 08/Bedroom_Set_08_04.png",
      "assets/products_catalog_images/Bedroom Set 08/Bedroom_Set_08_05.png",
      "assets/products_catalog_images/Bedroom Set 08/Bedroom_Set_08_06.png"
    ],
    "colors": []
  },
  {
    "id": "bedroom_set_09",
    "name": "Bedroom Set 09",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Engineered Wood",
    "designer": "Kosmo Design",
    "rating": 4.5,
    "badge": "",
    "description": "",
    "img": "assets/products_catalog_images/Bedroom Set 09/Bedroom_Set_09_01.png",
    "images": [
      "assets/products_catalog_images/Bedroom Set 09/Bedroom_Set_09_01.png",
      "assets/products_catalog_images/Bedroom Set 09/Bedroom_Set_09_02.png",
      "assets/products_catalog_images/Bedroom Set 09/Bedroom_Set_09_03.png",
      "assets/products_catalog_images/Bedroom Set 09/Bedroom_Set_09_04.png",
      "assets/products_catalog_images/Bedroom Set 09/Bedroom_Set_09_05.png",
      "assets/products_catalog_images/Bedroom Set 09/Bedroom_Set_09_06.png",
      "assets/products_catalog_images/Bedroom Set 09/Bedroom_Set_09_07.png"
    ],
    "colors": []
  },
  {
    "id": "bedroom_set_10",
    "name": "Bedroom Set 10",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Engineered Wood",
    "designer": "Kosmo Design",
    "rating": 4.8,
    "badge": "",
    "description": "",
    "img": "assets/products_catalog_images/Bedroom Set 10/Bedroom_Set_10_01.png",
    "images": [
      "assets/products_catalog_images/Bedroom Set 10/Bedroom_Set_10_01.png",
      "assets/products_catalog_images/Bedroom Set 10/Bedroom_Set_10_02.png",
      "assets/products_catalog_images/Bedroom Set 10/Bedroom_Set_10_03.png",
      "assets/products_catalog_images/Bedroom Set 10/Bedroom_Set_10_04.png",
      "assets/products_catalog_images/Bedroom Set 10/Bedroom_Set_10_05.png",
      "assets/products_catalog_images/Bedroom Set 10/Bedroom_Set_10_06.png",
      "assets/products_catalog_images/Bedroom Set 10/Bedroom_Set_10_07.png"
    ],
    "colors": []
  },
  {
    "id": "bedroom_set_11",
    "name": "Bedroom Set 11",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Engineered Wood",
    "designer": "Kosmo Design",
    "rating": 4.5,
    "badge": "",
    "description": "",
    "img": "assets/products_catalog_images/Bedroom Set 11/Bedroom_Set_11_01.png",
    "images": [
      "assets/products_catalog_images/Bedroom Set 11/Bedroom_Set_11_01.png",
      "assets/products_catalog_images/Bedroom Set 11/Bedroom_Set_11_02.png",
      "assets/products_catalog_images/Bedroom Set 11/Bedroom_Set_11_03.png",
      "assets/products_catalog_images/Bedroom Set 11/Bedroom_Set_11_04.png",
      "assets/products_catalog_images/Bedroom Set 11/Bedroom_Set_11_05.png",
      "assets/products_catalog_images/Bedroom Set 11/Bedroom_Set_11_06.png",
      "assets/products_catalog_images/Bedroom Set 11/Bedroom_Set_11_07.png"
    ],
    "colors": []
  },
  {
    "id": "bedroom_set_12",
    "name": "Bedroom Set 12",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Engineered Wood",
    "designer": "Kosmo Design",
    "rating": 4.9,
    "badge": "",
    "description": "",
    "img": "assets/products_catalog_images/Bedroom Set 12/Bedroom_Set_12_01.png",
    "images": [
      "assets/products_catalog_images/Bedroom Set 12/Bedroom_Set_12_01.png",
      "assets/products_catalog_images/Bedroom Set 12/Bedroom_Set_12_02.png",
      "assets/products_catalog_images/Bedroom Set 12/Bedroom_Set_12_03.png",
      "assets/products_catalog_images/Bedroom Set 12/Bedroom_Set_12_04.png",
      "assets/products_catalog_images/Bedroom Set 12/Bedroom_Set_12_05.png"
    ],
    "colors": []
  },
  {
    "id": "rubco-cot-captain",
    "name": "Cot Captain",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Rubberwood",
    "designer": "Rubco Premium",
    "rating": 4.6,
    "badge": "",
    "description": "Rubco Furniture are made from rubber wood — a pure solid wood. It is eco-friendly solid wood, not a wood substitute. It is nearly as strong and durable as teak. It offers unmatched dimensional stability.",
    "img": "assets/RubcoAsset/cot_captain/cot_captain.jpg",
    "images": [
      "assets/RubcoAsset/cot_captain/cot_captain.jpg",
      "assets/RubcoAsset/cot_captain/cot_captain_1.jpg",
      "assets/RubcoAsset/cot_captain/cot_captain_2.jpg"
    ],
    "listingUrl": "https://rubcobangalore.com/furniture/cot-captain",
    "colors": [
      "Honey",
      "Teak"
    ]
  },
  {
    "id": "rubco-cot-colonial",
    "name": "Cot Colonial",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Rubberwood",
    "designer": "Rubco Premium",
    "rating": 4.5,
    "badge": "",
    "description": "Rubco Furniture are made from rubber wood — a pure solid wood. It is eco-friendly solid wood, not a wood substitute. It is nearly as strong and durable as teak. It offers unmatched dimensional stability.",
    "img": "assets/RubcoAsset/cot_colonial/cot_colonial.jpg",
    "images": [
      "assets/RubcoAsset/cot_colonial/cot_colonial.jpg",
      "assets/RubcoAsset/cot_colonial/cot_colonial_1.jpg"
    ],
    "listingUrl": "https://rubcobangalore.com/furniture/cot-colonial",
    "colors": [
      "Honey",
      "Teak"
    ]
  },
  {
    "id": "rubco-cot-correll",
    "name": "Cot Correll",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Rubberwood",
    "designer": "Rubco Premium",
    "rating": 4.5,
    "badge": "",
    "description": "Rubco Furniture are made from rubber wood — a pure solid wood. It is eco-friendly solid wood, not a wood substitute. It is nearly as strong and durable as teak. It offers unmatched dimensional stability.",
    "img": "assets/RubcoAsset/cot_correll/cot_correll.jpg",
    "images": [
      "assets/RubcoAsset/cot_correll/cot_correll.jpg",
      "assets/RubcoAsset/cot_correll/cot_correll_1.jpg",
      "assets/RubcoAsset/cot_correll/cot_correll_2.jpg",
      "assets/RubcoAsset/cot_correll/cot_correll_3.jpg"
    ],
    "listingUrl": "https://rubcobangalore.com/furniture/cot-correll",
    "colors": [
      "Honey",
      "Teak"
    ]
  },
  {
    "id": "rubco-cot-emrald",
    "name": "Cot Emrald",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Rubberwood",
    "designer": "Rubco Premium",
    "rating": 4.5,
    "badge": "",
    "description": "Rubco Furniture are made from rubber wood — a pure solid wood. It is eco-friendly solid wood, not a wood substitute. It is nearly as strong and durable as teak. It offers unmatched dimensional stability.",
    "img": "assets/RubcoAsset/cot_emrald/cot_emrald.jpg",
    "images": [
      "assets/RubcoAsset/cot_emrald/cot_emrald.jpg",
      "assets/RubcoAsset/cot_emrald/cot_emrald_1.jpg"
    ],
    "listingUrl": "https://rubcobangalore.com/furniture/cot-emrald",
    "colors": [
      "Honey",
      "Teak"
    ]
  },
  {
    "id": "rubco-dimond-cot",
    "name": "Dimond Cot",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Rubberwood",
    "designer": "Rubco Premium",
    "rating": 4.6,
    "badge": "",
    "description": "Rubco Furniture are made from rubber wood — a pure solid wood. It is eco-friendly solid wood, not a wood substitute. It is nearly as strong and durable as teak. It offers unmatched dimensional stability.",
    "img": "assets/RubcoAsset/dimond_cot/dimond_cot.jpg",
    "images": [
      "assets/RubcoAsset/dimond_cot/dimond_cot.jpg",
      "assets/RubcoAsset/dimond_cot/dimond_cot_1.jpg",
      "assets/RubcoAsset/dimond_cot/dimond_cot_2.jpg"
    ],
    "listingUrl": "https://rubcobangalore.com/furniture/diamond-cot",
    "colors": [
      "Honey",
      "Teak"
    ]
  },
  {
    "id": "rubco-diwan-cot-one-side",
    "name": "Diwan Cot (One Side)",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Rubberwood",
    "designer": "Rubco Premium",
    "rating": 4.9,
    "badge": "",
    "description": "Rubco Furniture are made from rubber wood — a pure solid wood. It is eco-friendly solid wood, not a wood substitute. It is nearly as strong and durable as teak. It offers unmatched dimensional stability.",
    "img": "assets/RubcoAsset/diwan_cot_one_side/diwan_cot_one_side.jpg",
    "images": [
      "assets/RubcoAsset/diwan_cot_one_side/diwan_cot_one_side.jpg",
      "assets/RubcoAsset/diwan_cot_one_side/diwan_cot_one_side_1.jpg",
      "assets/RubcoAsset/diwan_cot_one_side/diwan_cot_one_side_2.jpg",
      "assets/RubcoAsset/diwan_cot_one_side/diwan_cot_one_side_3.jpg"
    ],
    "listingUrl": "https://rubcobangalore.com/furniture/diwan-cot-one-side",
    "colors": [
      "Honey",
      "Teak"
    ]
  },
  {
    "id": "sleeping-beds-elthira",
    "name": "Elthira",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Engineered Wood",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sleeping-beds/sleeping-beds-elthira/Elthira_02.png",
    "badge": "New",
    "description": "Elthira — DREAM series bed. A premium Layermax bed delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: KING 2190 X 1990 X 1220; QUEEN 2190 X 1680 X 1220.",
    "images": [
      "assets/catalogue_new/sleeping-beds/sleeping-beds-elthira/Elthira_02.png",
      "assets/catalogue_new/sleeping-beds/sleeping-beds-elthira/Elthira_01.png"
    ],
    "colors": []
  },
  {
    "id": "eternia_modern_ash",
    "name": "Eternia (Modern Ash)",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Modern Ash",
    "designer": "Kosmo Design",
    "rating": 4.3,
    "badge": "",
    "description": "The Eternia Bedroom Set blends modern elegance with everyday functionality. Its cushioned headboard, graceful contours, and soothing Modern Ash tones bring a sense of warmth and sophistication, making it a perfect fit for stylish and serene living spaces.",
    "img": "assets/products_catalog_images/Eternia (Modern Ash)/Eternia_Modern_Ash_01.png",
    "images": [
      "assets/products_catalog_images/Eternia (Modern Ash)/Eternia_Modern_Ash_01.png",
      "assets/products_catalog_images/Eternia (Modern Ash)/Eternia_Modern_Ash_02.png",
      "assets/products_catalog_images/Eternia (Modern Ash)/Eternia_Modern_Ash_03.png",
      "assets/products_catalog_images/Eternia (Modern Ash)/Eternia_Modern_Ash_04.png",
      "assets/products_catalog_images/Eternia (Modern Ash)/Eternia_Modern_Ash_05.png",
      "assets/products_catalog_images/Eternia (Modern Ash)/Eternia_Modern_Ash_06.png",
      "assets/products_catalog_images/Eternia (Modern Ash)/Eternia_Modern_Ash_07.png"
    ],
    "colors": [
      "Modern Ash"
    ]
  },
  {
    "id": "hospitality_suite_type_02",
    "name": "Hospitality Suite Type 02",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Engineered Wood",
    "designer": "Buro Design",
    "rating": 4.4,
    "badge": "",
    "description": "1. King Bed with Cusion",
    "img": "assets/products_catalog_images/Hospitality Suite Type 02/Hospitality_Suite_Type_02_01.png",
    "images": [
      "assets/products_catalog_images/Hospitality Suite Type 02/Hospitality_Suite_Type_02_01.png",
      "assets/products_catalog_images/Hospitality Suite Type 02/Hospitality_Suite_Type_02_02.png",
      "assets/products_catalog_images/Hospitality Suite Type 02/Hospitality_Suite_Type_02_03.png",
      "assets/products_catalog_images/Hospitality Suite Type 02/Hospitality_Suite_Type_02_04.png",
      "assets/products_catalog_images/Hospitality Suite Type 02/Hospitality_Suite_Type_02_05.png",
      "assets/products_catalog_images/Hospitality Suite Type 02/Hospitality_Suite_Type_02_06.png",
      "assets/products_catalog_images/Hospitality Suite Type 02/Hospitality_Suite_Type_02_07.png"
    ],
    "colors": []
  },
  {
    "id": "lmw-066",
    "name": "LMW-066",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.5,
    "img": "assets/assetsCatalogue/categorized/LMW-066/LMW-066.png",
    "badge": "",
    "description": "Transform your bedroom into a peaceful sanctuary with the LMW-066 bed. Built with a solid wood frame for superior stability, it features a beautifully styled headboard and clean modern lines. A refined centerpiece designed to provide a supportive foundation for a restful and comfortable night's sleep.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-066/LMW-066.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "lmw-067",
    "name": "LMW-067",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/LMW-067/LMW-067.png",
    "badge": "Bestseller",
    "description": "Transform your bedroom into a peaceful sanctuary with the LMW-067 bed. Built with a solid wood frame for superior stability, it features a beautifully styled headboard and clean modern lines. A refined centerpiece designed to provide a supportive foundation for a restful and comfortable night's sleep.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-067/LMW-067.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "lmw-068",
    "name": "LMW-068",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/LMW-068/LMW-068.png",
    "badge": "",
    "description": "Transform your bedroom into a peaceful sanctuary with the LMW-068 bed. Built with a solid wood frame for superior stability, it features a beautifully styled headboard and clean modern lines. A refined centerpiece designed to provide a supportive foundation for a restful and comfortable night's sleep.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-068/LMW-068.png",
      "assets/assetsCatalogue/categorized/LMW-068/LMW-068_2.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "lmw-069",
    "name": "LMW-069",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/LMW-069/LMW-069.png",
    "badge": "New",
    "description": "Transform your bedroom into a peaceful sanctuary with the LMW-069 bed. Built with a solid wood frame for superior stability, it features a beautifully styled headboard and clean modern lines. A refined centerpiece designed to provide a supportive foundation for a restful and comfortable night's sleep.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-069/LMW-069.png"
    ],
    "colors": [
      "Brown"
    ]
  },
  {
    "id": "lmw-070",
    "name": "LMW-070",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.9,
    "img": "assets/assetsCatalogue/categorized/LMW-070/LMW-070.png",
    "badge": "",
    "description": "Transform your bedroom into a peaceful sanctuary with the LMW-070 bed. Built with a solid wood frame for superior stability, it features a beautifully styled headboard and clean modern lines. A refined centerpiece designed to provide a supportive foundation for a restful and comfortable night's sleep.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-070/LMW-070.png"
    ],
    "colors": [
      "Brown"
    ]
  },
  {
    "id": "lmw-071",
    "name": "LMW-071",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/LMW-071/LMW-071.png",
    "badge": "",
    "description": "Transform your bedroom into a peaceful sanctuary with the LMW-071 bed. Built with a solid wood frame for superior stability, it features a beautifully styled headboard and clean modern lines. A refined centerpiece designed to provide a supportive foundation for a restful and comfortable night's sleep.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-071/LMW-071.png",
      "assets/assetsCatalogue/categorized/LMW-071/LMW-071_2.png"
    ],
    "colors": [
      "Brown"
    ]
  },
  {
    "id": "lmw-072",
    "name": "LMW-072",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/LMW-072/LMW-072.png",
    "badge": "",
    "description": "Transform your bedroom into a peaceful sanctuary with the LMW-072 bed. Built with a solid wood frame for superior stability, it features a beautifully styled headboard and clean modern lines. A refined centerpiece designed to provide a supportive foundation for a restful and comfortable night's sleep.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-072/LMW-072.png",
      "assets/assetsCatalogue/categorized/LMW-072/LMW-072_2.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "lmw-073",
    "name": "LMW-073",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.9,
    "img": "assets/assetsCatalogue/categorized/LMW-073/LMW-073.png",
    "badge": "",
    "description": "Transform your bedroom into a peaceful sanctuary with the LMW-073 bed. Built with a solid wood frame for superior stability, it features a beautifully styled headboard and clean modern lines. A refined centerpiece designed to provide a supportive foundation for a restful and comfortable night's sleep.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-073/LMW-073.png",
      "assets/assetsCatalogue/categorized/LMW-073/LMW-073_2.png"
    ],
    "colors": [
      "Grey",
      "Brown"
    ]
  },
  {
    "id": "lmw-074",
    "name": "LMW-074",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/LMW-074/LMW-074.png",
    "badge": "",
    "description": "Transform your bedroom into a peaceful sanctuary with the LMW-074 bed. Built with a solid wood frame for superior stability, it features a beautifully styled headboard and clean modern lines. A refined centerpiece designed to provide a supportive foundation for a restful and comfortable night's sleep.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-074/LMW-074.png"
    ],
    "colors": [
      "Brown"
    ]
  },
  {
    "id": "lmw-075",
    "name": "LMW-075",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/LMW-075/LMW-075.png",
    "badge": "",
    "description": "Transform your bedroom into a peaceful sanctuary with the LMW-075 bed. Built with a solid wood frame for superior stability, it features a beautifully styled headboard and clean modern lines. A refined centerpiece designed to provide a supportive foundation for a restful and comfortable night's sleep.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-075/LMW-075.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "sleeping-beds-lunira",
    "name": "Lunira",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Engineered Wood",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sleeping-beds/sleeping-beds-lunira/Lunira_01.png",
    "badge": "New",
    "description": "Lunira — DREAM series bed. A premium Layermax bed delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: KING 1960 x 2230 x 1270; QUEEN 1680 x 2230 X 1270; KING 1981.2 x 1828.8 QUEEN 1981 X 1524 225.",
    "images": [
      "assets/catalogue_new/sleeping-beds/sleeping-beds-lunira/Lunira_01.png",
      "assets/catalogue_new/sleeping-beds/sleeping-beds-lunira/Lunira_02.png"
    ],
    "colors": []
  },
  {
    "id": "sleeping-beds-lyria",
    "name": "Lyria",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Engineered Wood",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sleeping-beds/sleeping-beds-lyria/Lyria_02.png",
    "badge": "New",
    "description": "Lyria — DREAM series bed. A premium Layermax bed delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: KING 2345 X 2325 X 1200; QUEEN 2065 X 2325 X 1200; KING 1800 x 2000; QUEEN 1500 X 2000 211.",
    "images": [
      "assets/catalogue_new/sleeping-beds/sleeping-beds-lyria/Lyria_02.png",
      "assets/catalogue_new/sleeping-beds/sleeping-beds-lyria/Lyria_01.png"
    ],
    "colors": []
  },
  {
    "id": "nestor_bed",
    "name": "Nestor Bed",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Engineered Wood",
    "designer": "Buro Design",
    "rating": 4.6,
    "badge": "",
    "description": "Hostel furniture with integrated study tables is designed to maximize utility in compact living spaces. Engineered for durability and comfort, it supports students' academic needs while offering organized storage and efficient layout-perfect for focused study and everyday use. Smart Living for Smarter Learning",
    "img": "assets/products_catalog_images/Nestor Bed/Nestor_Bed_01.png",
    "images": [
      "assets/products_catalog_images/Nestor Bed/Nestor_Bed_01.png",
      "assets/products_catalog_images/Nestor Bed/Nestor_Bed_02.png",
      "assets/products_catalog_images/Nestor Bed/Nestor_Bed_03.png",
      "assets/products_catalog_images/Nestor Bed/Nestor_Bed_04.png",
      "assets/products_catalog_images/Nestor Bed/Nestor_Bed_05.png",
      "assets/products_catalog_images/Nestor Bed/Nestor_Bed_06.png"
    ],
    "colors": []
  },
  {
    "id": "noble_campus_bed",
    "name": "Noble & Campus Bed",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Engineered Wood",
    "designer": "Buro Design",
    "rating": 4.2,
    "badge": "",
    "description": "Natural Wenge and Rigato Walnut",
    "img": "assets/products_catalog_images/Noble & Campus Bed/Noble_Campus_Bed_01.png",
    "images": [
      "assets/products_catalog_images/Noble & Campus Bed/Noble_Campus_Bed_01.png",
      "assets/products_catalog_images/Noble & Campus Bed/Noble_Campus_Bed_02.png",
      "assets/products_catalog_images/Noble & Campus Bed/Noble_Campus_Bed_03.png"
    ],
    "colors": []
  },
  {
    "id": "sleeping-beds-noeva",
    "name": "Noeva",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Engineered Wood",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sleeping-beds/sleeping-beds-noeva/Noeva_01.png",
    "badge": "New",
    "description": "Noeva — DREAM series bed. A premium Layermax bed delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: KING 1980 x 2160 x 1230; QUEEN 1700 X 2160 x 1230; KING 1800 x 2000; QUEEN 1500 x 2000 213.",
    "images": [
      "assets/catalogue_new/sleeping-beds/sleeping-beds-noeva/Noeva_01.png",
      "assets/catalogue_new/sleeping-beds/sleeping-beds-noeva/Noeva_02.png"
    ],
    "colors": []
  },
  {
    "id": "sleeping-beds-ovidia",
    "name": "Ovidia",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Engineered Wood",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sleeping-beds/sleeping-beds-ovidia/Ovidia_02.png",
    "badge": "New",
    "description": "Ovidia — DREAM series bed. A premium Layermax bed delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: KING 1960 x 2160 x 1300; QUEEN 1680 X 2160 X 1300; KING 1800 X 2000; QUEEN 1500 x 2000 217.",
    "images": [
      "assets/catalogue_new/sleeping-beds/sleeping-beds-ovidia/Ovidia_02.png",
      "assets/catalogue_new/sleeping-beds/sleeping-beds-ovidia/Ovidia_01.png"
    ],
    "colors": []
  },
  {
    "id": "sleeping-beds-selora",
    "name": "Selora",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Engineered Wood",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sleeping-beds/sleeping-beds-selora/Selora_01.png",
    "badge": "New",
    "description": "Selora — DREAM series bed. A premium Layermax bed delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: KING 1980 x 2200 x 1230; QUEEN 1700 X 2200 x 1230; KING 1800 x 2000; QUEEN 1500 x 2000 215.",
    "images": [
      "assets/catalogue_new/sleeping-beds/sleeping-beds-selora/Selora_01.png",
      "assets/catalogue_new/sleeping-beds/sleeping-beds-selora/Selora_02.png"
    ],
    "colors": []
  },
  {
    "id": "sleeping-beds-serenis",
    "name": "Serenis",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Engineered Wood",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sleeping-beds/sleeping-beds-serenis/Serenis_02.png",
    "badge": "New",
    "description": "Serenis — DREAM series bed. A premium Layermax bed delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: KING 2190 X 1990 X 1220; QUEEN 2190 X 1680 X 1220.",
    "images": [
      "assets/catalogue_new/sleeping-beds/sleeping-beds-serenis/Serenis_02.png",
      "assets/catalogue_new/sleeping-beds/sleeping-beds-serenis/Serenis_01.png"
    ],
    "colors": []
  },
  {
    "id": "single_bed_study_set",
    "name": "Single Bed & Study Set",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Engineered Wood",
    "designer": "Kosmo Design",
    "rating": 4.8,
    "badge": "",
    "description": "",
    "img": "assets/products_catalog_images/Single Bed & Study Set/Single_Bed_Study_Set_01.png",
    "images": [
      "assets/products_catalog_images/Single Bed & Study Set/Single_Bed_Study_Set_01.png",
      "assets/products_catalog_images/Single Bed & Study Set/Single_Bed_Study_Set_02.png",
      "assets/products_catalog_images/Single Bed & Study Set/Single_Bed_Study_Set_03.png",
      "assets/products_catalog_images/Single Bed & Study Set/Single_Bed_Study_Set_04.png",
      "assets/products_catalog_images/Single Bed & Study Set/Single_Bed_Study_Set_05.png",
      "assets/products_catalog_images/Single Bed & Study Set/Single_Bed_Study_Set_06.png",
      "assets/products_catalog_images/Single Bed & Study Set/Single_Bed_Study_Set_07.png"
    ],
    "colors": []
  },
  {
    "id": "sleeping-beds-somna",
    "name": "Somna",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Engineered Wood",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sleeping-beds/sleeping-beds-somna/Somna_02.png",
    "badge": "New",
    "description": "Somna — DREAM series bed. A premium Layermax bed delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: KING 2065 X 2340 X 1205; QUEEN 1785 X 2340 X 1205; KING 1800 x 2000; QUEEN 1500 x 2000 209.",
    "images": [
      "assets/catalogue_new/sleeping-beds/sleeping-beds-somna/Somna_02.png",
      "assets/catalogue_new/sleeping-beds/sleeping-beds-somna/Somna_01.png"
    ],
    "colors": []
  },
  {
    "id": "woodland",
    "name": "Woodland",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Engineered Wood",
    "designer": "Kosmo Design",
    "rating": 4.9,
    "badge": "",
    "description": "",
    "img": "assets/products_catalog_images/Woodland/Woodland_01.png",
    "images": [
      "assets/products_catalog_images/Woodland/Woodland_01.png",
      "assets/products_catalog_images/Woodland/Woodland_02.png",
      "assets/products_catalog_images/Woodland/Woodland_03.png",
      "assets/products_catalog_images/Woodland/Woodland_04.png",
      "assets/products_catalog_images/Woodland/Woodland_05.png",
      "assets/products_catalog_images/Woodland/Woodland_06.png",
      "assets/products_catalog_images/Woodland/Woodland_07.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-aether",
    "name": "Aether",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-aether/Aether_02.png",
    "badge": "New",
    "description": "Aether — Atmosphere series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LxWxH 990 x 1045 x 945; 2 Seater LxWxH 1625 x 1045 x 945; 3 Seater LxWxH 2210 x 1045 x 945.",
    "images": [
      "assets/catalogue_new/sofas/sofas-aether/Aether_02.png",
      "assets/catalogue_new/sofas/sofas-aether/Aether_03.png",
      "assets/catalogue_new/sofas/sofas-aether/Aether_01.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-alaska",
    "name": "Alaska",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-alaska/Alaska_01.png",
    "badge": "New",
    "description": "Alaska — FREEDOM series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 2 Seater LxWxH 1445 x 965 x 930; 3 Seater LxWxH 1980 x 965 x 930.",
    "images": [
      "assets/catalogue_new/sofas/sofas-alaska/Alaska_01.png",
      "assets/catalogue_new/sofas/sofas-alaska/Alaska_02.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-arcus",
    "name": "Arcus",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-arcus/Arcus_04.png",
    "badge": "New",
    "description": "Arcus — Atmosphere series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LxWxH 925 x 880 x 780; 2 Seater LxWxH 1635 x 920 x 740; 3 Seater LxWxH 2230 x 920 x 740.",
    "images": [
      "assets/catalogue_new/sofas/sofas-arcus/Arcus_04.png",
      "assets/catalogue_new/sofas/sofas-arcus/Arcus_02.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-aspen",
    "name": "Aspen",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-aspen/Aspen_01.png",
    "badge": "New",
    "description": "Aspen — COMFORT series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 2 Seater LxWxH 1660 x 880 x 965; 3 Seater LxWxH 2205 x 880 x 965.",
    "images": [
      "assets/catalogue_new/sofas/sofas-aspen/Aspen_01.png",
      "assets/catalogue_new/sofas/sofas-aspen/Aspen_02.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-aura",
    "name": "Aura",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-aura/Aura_01.png",
    "badge": "New",
    "description": "Aura — Atmosphere series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: Chair LxWxH 760 x 850 x 930; 2 Seater LxWxH 1680 x 960 x 910; 3 Seater LxWxH 2270 x 960 x 910.",
    "images": [
      "assets/catalogue_new/sofas/sofas-aura/Aura_01.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-bamboo",
    "name": "Bamboo",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-bamboo/Bamboo_02.png",
    "badge": "New",
    "description": "Bamboo — COMFORT series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LxWxH 1090 x 990 x 970; 2 Seater LxWxH 1650 x 990 x 970; 3 Seater LxWxH 2250 x 990 x 970.",
    "images": [
      "assets/catalogue_new/sofas/sofas-bamboo/Bamboo_02.png",
      "assets/catalogue_new/sofas/sofas-bamboo/Bamboo_01.png",
      "assets/catalogue_new/sofas/sofas-bamboo/Bamboo_03.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-breeze",
    "name": "Breeze",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-breeze/Breeze_02.png",
    "badge": "New",
    "description": "Breeze — Atmosphere series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LxWxH 1020 x 1010 x 930; 2 Seater LxWxH 1615 x 1010 x 930; 3 Seater LxWxH 2200 x 1010 x 930.",
    "images": [
      "assets/catalogue_new/sofas/sofas-breeze/Breeze_02.png",
      "assets/catalogue_new/sofas/sofas-breeze/Breeze_03.png",
      "assets/catalogue_new/sofas/sofas-breeze/Breeze_01.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-brume",
    "name": "Brume",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-brume/Brume_01.png",
    "badge": "New",
    "description": "Brume — Atmosphere series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LxWxH 1020 x 1010 x 930; 3 Seater LxWxH 2200 x 1010 x 930.",
    "images": [
      "assets/catalogue_new/sofas/sofas-brume/Brume_01.png",
      "assets/catalogue_new/sofas/sofas-brume/Brume_03.png",
      "assets/catalogue_new/sofas/sofas-brume/Brume_02.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-calypso",
    "name": "Calypso",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-calypso/Calypso_03.png",
    "badge": "New",
    "description": "Calypso — REPOSÉ series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LxWxH Closed 930 x 960 x 990; 2 Seater LxWxH Closed 1530 x 960 x 990; 3 Seater LxWxH Closed 2120 x 960 x 990.",
    "images": [
      "assets/catalogue_new/sofas/sofas-calypso/Calypso_03.png",
      "assets/catalogue_new/sofas/sofas-calypso/Calypso_02.png",
      "assets/catalogue_new/sofas/sofas-calypso/Calypso_01.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-cirrus",
    "name": "Cirrus",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-cirrus/Cirrus_01.png",
    "badge": "New",
    "description": "Cirrus — Atmosphere series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LxWxH 1015 x 965 x 940; 2 Seater LxWxH 1790 x 965 x 940; 3 Seater LxWxH 2120 x 965 x 940.",
    "images": [
      "assets/catalogue_new/sofas/sofas-cirrus/Cirrus_01.png",
      "assets/catalogue_new/sofas/sofas-cirrus/Cirrus_03.png",
      "assets/catalogue_new/sofas/sofas-cirrus/Cirrus_04.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-corsica",
    "name": "Corsica",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-corsica/Corsica_02.png",
    "badge": "New",
    "description": "Corsica — FREEDOM series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LxWxH 1050 x 880 x 890; 2 Seater LxWxH 1585 x 880 x 890; 3 Seater LxWxH 2120 x 880 x 890.",
    "images": [
      "assets/catalogue_new/sofas/sofas-corsica/Corsica_02.png",
      "assets/catalogue_new/sofas/sofas-corsica/Corsica_03.png",
      "assets/catalogue_new/sofas/sofas-corsica/Corsica_01.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-drift",
    "name": "Drift",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-drift/Drift_01.png",
    "badge": "New",
    "description": "Drift — Atmosphere series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 2 Seater LxWxH 1665 x 1000 x 800; 3 Seater LxWxH 2300 x 1000 x 800.",
    "images": [
      "assets/catalogue_new/sofas/sofas-drift/Drift_01.png",
      "assets/catalogue_new/sofas/sofas-drift/Drift_02.png",
      "assets/catalogue_new/sofas/sofas-drift/Drift_03.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-dusk",
    "name": "Dusk",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-dusk/Dusk_01.png",
    "badge": "New",
    "description": "Dusk — Atmosphere series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: Chair LxWxH 1010 x 1000 x 740; 4 Seater LxWxH 3050 x 1120 x 720.",
    "images": [
      "assets/catalogue_new/sofas/sofas-dusk/Dusk_01.png",
      "assets/catalogue_new/sofas/sofas-dusk/Dusk_03.png",
      "assets/catalogue_new/sofas/sofas-dusk/Dusk_02.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-echo",
    "name": "Echo",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-echo/Echo_02.png",
    "badge": "New",
    "description": "Echo — Atmosphere series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 3 Seater LxWxH 2405 x 1135 x 750; 4 Seater LxWxH 2955 x 1135 x 750.",
    "images": [
      "assets/catalogue_new/sofas/sofas-echo/Echo_02.png",
      "assets/catalogue_new/sofas/sofas-echo/Echo_03.png",
      "assets/catalogue_new/sofas/sofas-echo/Echo_01.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-ember",
    "name": "Ember",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-ember/Ember_03.png",
    "badge": "New",
    "description": "Ember — Atmosphere series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: Chair LxWxH 711 x 762 x 838; 3 Seater LxWxH 2790 x 920 x 750.",
    "images": [
      "assets/catalogue_new/sofas/sofas-ember/Ember_03.png",
      "assets/catalogue_new/sofas/sofas-ember/Ember_02.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-eros",
    "name": "Eros",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-eros/Eros_03.png",
    "badge": "New",
    "description": "Eros — REPOSÉ series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LxWxH Closed 895 x 960 x 990; 2 Seater LxWxH Closed 1430 x 960 x 990; 3 Seater LxWxH Closed 2045 x 960 x 990.",
    "images": [
      "assets/catalogue_new/sofas/sofas-eros/Eros_03.png",
      "assets/catalogue_new/sofas/sofas-eros/Eros_02.png",
      "assets/catalogue_new/sofas/sofas-eros/Eros_01.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-faith",
    "name": "Faith",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-faith/Faith_03.png",
    "badge": "New",
    "description": "Faith — REPOSÉ series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LxWxH Closed 1010 x 1060 x 1045; 2 Seater LxWxH Closed 1575 x 1060 x 1045; 3 Seater LxWxH Closed 2170 x 1060 x 1045.",
    "images": [
      "assets/catalogue_new/sofas/sofas-faith/Faith_03.png",
      "assets/catalogue_new/sofas/sofas-faith/Faith_01.png",
      "assets/catalogue_new/sofas/sofas-faith/Faith_02.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-fern",
    "name": "Fern",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-fern/Fern_03.png",
    "badge": "New",
    "description": "Fern — COMFORT series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LxWxH 960 x 920 x 900; 2 Seater LxWxH 1525 x 920 x 900; 3 Seater LxWxH 2105 x 920 x 900.",
    "images": [
      "assets/catalogue_new/sofas/sofas-fern/Fern_03.png",
      "assets/catalogue_new/sofas/sofas-fern/Fern_01.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-florence",
    "name": "Florence",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-florence/Florence_01.png",
    "badge": "New",
    "description": "Florence — FREEDOM series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LxWxH 915 x 875 x 880; 2 Seater LxWxH 1445 x 875 x 880; 3 Seater LxWxH 1980 x 875 x 880.",
    "images": [
      "assets/catalogue_new/sofas/sofas-florence/Florence_01.png",
      "assets/catalogue_new/sofas/sofas-florence/Florence_03.png",
      "assets/catalogue_new/sofas/sofas-florence/Florence_02.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-fume",
    "name": "Fume",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-fume/Fume_03.png",
    "badge": "New",
    "description": "Fume — Atmosphere series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LxWxH 1220 x 910 x 940; 2 Seater LxWxH 1805 x 910 x 940; 3 Seater LxWxH 2390 x 910 x 940.",
    "images": [
      "assets/catalogue_new/sofas/sofas-fume/Fume_03.png",
      "assets/catalogue_new/sofas/sofas-fume/Fume_02.png",
      "assets/catalogue_new/sofas/sofas-fume/Fume_01.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-gaia",
    "name": "Gaia",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-gaia/Gaia_03.png",
    "badge": "New",
    "description": "Gaia — REPOSÉ series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LxWxH Closed 930 x 960 x 990; 2 Seater LxWxH Closed 1530 x 960 x 990; 3 Seater LxWxH Closed 2120 x 960 x 990.",
    "images": [
      "assets/catalogue_new/sofas/sofas-gaia/Gaia_03.png",
      "assets/catalogue_new/sofas/sofas-gaia/Gaia_02.png",
      "assets/catalogue_new/sofas/sofas-gaia/Gaia_01.png",
      "assets/catalogue_new/sofas/sofas-gaia/Gaia_04.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-glimmer",
    "name": "Glimmer",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-glimmer/Glimmer_02.png",
    "badge": "New",
    "description": "Glimmer — Atmosphere series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LxWxH 1020 x 925 x 920; 3 Seater LxWxH 2245 x 925 x 920.",
    "images": [
      "assets/catalogue_new/sofas/sofas-glimmer/Glimmer_02.png",
      "assets/catalogue_new/sofas/sofas-glimmer/Glimmer_01.png",
      "assets/catalogue_new/sofas/sofas-glimmer/Glimmer_03.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-glint",
    "name": "Glint",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-glint/Glint_02.png",
    "badge": "New",
    "description": "Glint — Atmosphere series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 2 Seater LxWxH 1620 x 900 x 815; 3 Seater LxWxH 2205 x 900 x 815.",
    "images": [
      "assets/catalogue_new/sofas/sofas-glint/Glint_02.png",
      "assets/catalogue_new/sofas/sofas-glint/Glint_03.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-glow",
    "name": "Glow",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-glow/Glow_02.png",
    "badge": "New",
    "description": "Glow — Atmosphere series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 2 Seater LxWxH 1790 x 1010 x 1000; 3 Seater LxWxH 2190 x 1010 x 1000.",
    "images": [
      "assets/catalogue_new/sofas/sofas-glow/Glow_02.png",
      "assets/catalogue_new/sofas/sofas-glow/Glow_01.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-halo",
    "name": "Halo",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-halo/Halo_02.png",
    "badge": "New",
    "description": "Halo — Atmosphere series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 2 Seater LWXH 2065 970 x 825; 3 Seater LxWxH 2265 x 970 x 825.",
    "images": [
      "assets/catalogue_new/sofas/sofas-halo/Halo_02.png",
      "assets/catalogue_new/sofas/sofas-halo/Halo_04.png",
      "assets/catalogue_new/sofas/sofas-halo/Halo_01.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-havana",
    "name": "Havana",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-havana/Havana_03.png",
    "badge": "New",
    "description": "Havana — FREEDOM series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LxWxH 1100 x 905 x 970; 2 Seater LxWxH 1580 x 905 x 970; 3 Seater LxWxH 2110 x 905 x 970.",
    "images": [
      "assets/catalogue_new/sofas/sofas-havana/Havana_03.png",
      "assets/catalogue_new/sofas/sofas-havana/Havana_02.png",
      "assets/catalogue_new/sofas/sofas-havana/Havana_01.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-haze",
    "name": "Haze",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-haze/Haze_03.png",
    "badge": "New",
    "description": "Haze — Atmosphere series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: Chair LxWxH 820 x 860 x 810; 2 Seater LxWxH 1780 x 955 x 935; 3 Seater LxWxH 2300 x 955 x 935.",
    "images": [
      "assets/catalogue_new/sofas/sofas-haze/Haze_03.png",
      "assets/catalogue_new/sofas/sofas-haze/Haze_01.png",
      "assets/catalogue_new/sofas/sofas-haze/Haze_02.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-hestia",
    "name": "Hestia",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-hestia/Hestia_03.png",
    "badge": "New",
    "description": "Hestia — REPOSÉ series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LxWxH Closed 940 x 950 x 980; 2 Seater LxWxH Closed 1515 x 950 x 980; 3 Seater LxWxH Closed 2110 x 950 x 980.",
    "images": [
      "assets/catalogue_new/sofas/sofas-hestia/Hestia_03.png",
      "assets/catalogue_new/sofas/sofas-hestia/Hestia_02.png",
      "assets/catalogue_new/sofas/sofas-hestia/Hestia_01.png",
      "assets/catalogue_new/sofas/sofas-hestia/Hestia_04.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-lilac",
    "name": "Lilac",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-lilac/Lilac_01.png",
    "badge": "New",
    "description": "Lilac — COMFORT series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LxWxH 1090 x 990 x 970; 2 Seater LxWxH 1650 x 990 x 970; 3 Seater LxWxH 2250 x 990 x 970.",
    "images": [
      "assets/catalogue_new/sofas/sofas-lilac/Lilac_01.png",
      "assets/catalogue_new/sofas/sofas-lilac/Lilac_03.png",
      "assets/catalogue_new/sofas/sofas-lilac/Lilac_02.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-luna",
    "name": "Luna",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-luna/Luna_02.png",
    "badge": "New",
    "description": "Luna — REPOSÉ series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LxWxH Closed 1000 x 1050 x 980; 2 Seater LxWxH Closed 1580 x 1050 x 980; 2 Seater With Beverage Holder LxWxH Closed 1910 x 1050 x 980; 3 Seater LxWxH Closed 2195 x 1050 x 980.",
    "images": [
      "assets/catalogue_new/sofas/sofas-luna/Luna_02.png",
      "assets/catalogue_new/sofas/sofas-luna/Luna_03.png",
      "assets/catalogue_new/sofas/sofas-luna/Luna_01.png",
      "assets/catalogue_new/sofas/sofas-luna/Luna_04.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-maple",
    "name": "Maple",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-maple/Maple_01.png",
    "badge": "New",
    "description": "Maple — COMFORT series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: Chair LxWxH 1210 x 960 x 930; 2 Seater LxWxH 1820 x 955 x 950; 3 Seater LxWxH 2430 x 955 x 950.",
    "images": [
      "assets/catalogue_new/sofas/sofas-maple/Maple_01.png",
      "assets/catalogue_new/sofas/sofas-maple/Maple_02.png",
      "assets/catalogue_new/sofas/sofas-maple/Maple_03.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-nairobi",
    "name": "Nairobi",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-nairobi/Nairobi_02.png",
    "badge": "New",
    "description": "Nairobi — FREEDOM series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LxWxH 750 x 860 x 870; 2 Seater LxWxH 1285 x 860 x 870; 3 Seater LxWxH 1820 x 860 x 870.",
    "images": [
      "assets/catalogue_new/sofas/sofas-nairobi/Nairobi_02.png",
      "assets/catalogue_new/sofas/sofas-nairobi/Nairobi_03.png",
      "assets/catalogue_new/sofas/sofas-nairobi/Nairobi_01.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-neptune",
    "name": "Neptune",
    "category": "sofas",
    "type": "sofa",
    "material": "Leather / Fabric",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-neptune/Neptune_01.png",
    "badge": "New",
    "description": "Neptune sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability.",
    "images": [
      "assets/catalogue_new/sofas/sofas-neptune/Neptune_01.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-nimbus",
    "name": "Nimbus",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-nimbus/Nimbus_03.png",
    "badge": "New",
    "description": "Nimbus — Atmosphere series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 3 Seater LxWxH 2360 x 1030 x 740.",
    "images": [
      "assets/catalogue_new/sofas/sofas-nimbus/Nimbus_03.png",
      "assets/catalogue_new/sofas/sofas-nimbus/Nimbus_02.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-oberon",
    "name": "Oberon",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-oberon/Oberon_04.png",
    "badge": "New",
    "description": "Oberon — REPOSÉ series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 2 Seater LxWxH Closed 1425 x 920 x 990; 3 Seater LxWxH Closed 2030 x 920 x 990.",
    "images": [
      "assets/catalogue_new/sofas/sofas-oberon/Oberon_04.png",
      "assets/catalogue_new/sofas/sofas-oberon/Oberon_02.png",
      "assets/catalogue_new/sofas/sofas-oberon/Oberon_01.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-phoenix",
    "name": "Phoenix",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-phoenix/Phoenix_04.png",
    "badge": "New",
    "description": "Phoenix — FREEDOM series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LxWxH 960 x 900 x 850; 2 Seater LxWxH 1500 x 900 x 850; 3 Seater LxWxH 2030 x 900 x 850.",
    "images": [
      "assets/catalogue_new/sofas/sofas-phoenix/Phoenix_04.png",
      "assets/catalogue_new/sofas/sofas-phoenix/Phoenix_03.png",
      "assets/catalogue_new/sofas/sofas-phoenix/Phoenix_01.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-prague",
    "name": "Prague",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-prague/Prague_01.png",
    "badge": "New",
    "description": "Prague — FREEDOM series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LxWxH 960 x 875 x 890; 2 Seater LxWxH 1495 x 875 x 890; 3 Seater LxWxH 2030 x 875 x 890.",
    "images": [
      "assets/catalogue_new/sofas/sofas-prague/Prague_01.png",
      "assets/catalogue_new/sofas/sofas-prague/Prague_02.png",
      "assets/catalogue_new/sofas/sofas-prague/Prague_03.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-rain",
    "name": "Rain",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-rain/Rain_02.png",
    "badge": "New",
    "description": "Rain — Atmosphere series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LxWxH 955 x 940 x 950; 2 Seater LxWxH 1540 x 940 x 950; 3 Seater LxWxH 2115 x 940 x 950.",
    "images": [
      "assets/catalogue_new/sofas/sofas-rain/Rain_02.png",
      "assets/catalogue_new/sofas/sofas-rain/Rain_03.png",
      "assets/catalogue_new/sofas/sofas-rain/Rain_01.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-seville",
    "name": "Seville",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-seville/Seville_01.png",
    "badge": "New",
    "description": "Seville — FREEDOM series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LxWxH 900 x 860 x 880; 2 Seater LxWxH 1430 x 860 x 880; 3 Seater LxWxH 1955 x 860 x 880.",
    "images": [
      "assets/catalogue_new/sofas/sofas-seville/Seville_01.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-sidra",
    "name": "Sidra",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-sidra/Sidra_01.png",
    "badge": "New",
    "description": "Sidra — REPOSÉ series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LxWxH Closed 970 x 960 x 1040; 2 Seater LxWxH Closed 1575 x 960 x 1040; 2 Seater With Console Smart Beverage Holder LxWxH Closed 1905 x 960 x 1040; 3 Seater LxWxH Closed 2145 x 960 x 1040.",
    "images": [
      "assets/catalogue_new/sofas/sofas-sidra/Sidra_01.png",
      "assets/catalogue_new/sofas/sofas-sidra/Sidra_02.png",
      "assets/catalogue_new/sofas/sofas-sidra/Sidra_03.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-storm",
    "name": "Storm",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-storm/Storm_02.png",
    "badge": "New",
    "description": "Storm — Atmosphere series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 3 Seater LxWxH 2485 x 935 x 965; 2 Seater LxWxH 1870 x 935 x 965.",
    "images": [
      "assets/catalogue_new/sofas/sofas-storm/Storm_02.png",
      "assets/catalogue_new/sofas/sofas-storm/Storm_03.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-sydney",
    "name": "Sydney",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-sydney/Sydney_02.png",
    "badge": "New",
    "description": "Sydney — FREEDOM series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LxWxH 770 x 875 x 900; 2 Seater LxWxH 1290 x 875 x 900; 3 Seater LxWxH 1840 x 875 x 900.",
    "images": [
      "assets/catalogue_new/sofas/sofas-sydney/Sydney_02.png",
      "assets/catalogue_new/sofas/sofas-sydney/Sydney_04.png",
      "assets/catalogue_new/sofas/sofas-sydney/Sydney_01.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-terra",
    "name": "Terra",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-terra/Terra_04.png",
    "badge": "New",
    "description": "Terra — Atmosphere series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: Chair LxWxH 711 x 762 x 838; 4 Seater LxWxH 3280 x 1285 x 800.",
    "images": [
      "assets/catalogue_new/sofas/sofas-terra/Terra_04.png",
      "assets/catalogue_new/sofas/sofas-terra/Terra_02.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-thanatos",
    "name": "Thanatos",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-thanatos/Thanatos_03.png",
    "badge": "New",
    "description": "Thanatos — REPOSÉ series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LxWxH Closed 910 x 940 x 965; 2 Seater LxWxH Closed 1480 x 940 x 965; 3 Seater LxWxH Closed 1990 x 940 x 965.",
    "images": [
      "assets/catalogue_new/sofas/sofas-thanatos/Thanatos_03.png",
      "assets/catalogue_new/sofas/sofas-thanatos/Thanatos_02.png",
      "assets/catalogue_new/sofas/sofas-thanatos/Thanatos_01.png",
      "assets/catalogue_new/sofas/sofas-thanatos/Thanatos_05.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-tundra",
    "name": "Tundra",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-tundra/Tundra_02.png",
    "badge": "New",
    "description": "Tundra — FREEDOM series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 2 Seater LxWxH 1625 x 915 x 920; 3 Seater LxWxH 2165 x 915 x 920.",
    "images": [
      "assets/catalogue_new/sofas/sofas-tundra/Tundra_02.png",
      "assets/catalogue_new/sofas/sofas-tundra/Tundra_01.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-tuscany",
    "name": "Tuscany",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-tuscany/Tuscany_02.png",
    "badge": "New",
    "description": "Tuscany — FREEDOM series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LxWxH 945 x 895 x 885; 2 Seater LxWxH 1505 x 895 x 885; 3 Seater LxWxH 2065 x 895 x 885.",
    "images": [
      "assets/catalogue_new/sofas/sofas-tuscany/Tuscany_02.png",
      "assets/catalogue_new/sofas/sofas-tuscany/Tuscany_04.png",
      "assets/catalogue_new/sofas/sofas-tuscany/Tuscany_01.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-verona",
    "name": "Verona",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-verona/Verona_03.png",
    "badge": "New",
    "description": "Verona — FREEDOM series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LxWxH 930 x 840 x 890; 2 Seater LxWxH 1465 x 840 x 890; 3 Seater LxWxH 2000 x 840 x 890.",
    "images": [
      "assets/catalogue_new/sofas/sofas-verona/Verona_03.png",
      "assets/catalogue_new/sofas/sofas-verona/Verona_02.png",
      "assets/catalogue_new/sofas/sofas-verona/Verona_01.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-vortex",
    "name": "Vortex",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-vortex/Vortex_01.png",
    "badge": "New",
    "description": "Vortex — Atmosphere series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 3 Seater LxWxH 2300 x 1000 x 940; 4 Seater LxWxH 2740 x 1000 x 940.",
    "images": [
      "assets/catalogue_new/sofas/sofas-vortex/Vortex_01.png",
      "assets/catalogue_new/sofas/sofas-vortex/Vortex_02.png",
      "assets/catalogue_new/sofas/sofas-vortex/Vortex_03.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-willow",
    "name": "Willow",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-willow/Willow_02.png",
    "badge": "New",
    "description": "Willow — COMFORT series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LxWxH 1110 x 915 x 980; 2 Seater LxWxH 1670 x 915 x 980; 3 Seater LxWxH 2265 x 915 x 980.",
    "images": [
      "assets/catalogue_new/sofas/sofas-willow/Willow_02.png",
      "assets/catalogue_new/sofas/sofas-willow/Willow_03.png",
      "assets/catalogue_new/sofas/sofas-willow/Willow_01.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-wind",
    "name": "Wind",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-wind/Wind_02.png",
    "badge": "New",
    "description": "Wind — Atmosphere series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LxWxH 940 x 1000 x 935; 2 Seater LxWxH 1655 x 1000 x 935; 3 Seater LxWxH 2335 x 1000 x 935.",
    "images": [
      "assets/catalogue_new/sofas/sofas-wind/Wind_02.png",
      "assets/catalogue_new/sofas/sofas-wind/Wind_01.png",
      "assets/catalogue_new/sofas/sofas-wind/Wind_04.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-zephyr",
    "name": "Zephyr",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-zephyr/Zephyr_04.png",
    "badge": "New",
    "description": "Zephyr — Atmosphere series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 3 Seater LxWxH 2310x1015 x 815; 4 Seater LxWxH 2950 x 3015 x 815.",
    "images": [
      "assets/catalogue_new/sofas/sofas-zephyr/Zephyr_04.png",
      "assets/catalogue_new/sofas/sofas-zephyr/Zephyr_01.png",
      "assets/catalogue_new/sofas/sofas-zephyr/Zephyr_06.png",
      "assets/catalogue_new/sofas/sofas-zephyr/Zephyr_03.png"
    ],
    "colors": []
  },
  {
    "id": "sofas-zeus",
    "name": "Zeus",
    "category": "sofas",
    "type": "sofa",
    "material": "Fabric / Leather",
    "designer": "Layermax",
    "rating": 4.7,
    "img": "assets/catalogue_new/sofas/sofas-zeus/Zeus_03.png",
    "badge": "New",
    "description": "Zeus — REPOSÉ series sofa. A premium Layermax sofa delivering ergonomic comfort, refined aesthetics, and lasting durability. Sizes: 1 Seater LxWxH Closed 1030 x 960 x 990; 2 Seater LxWxH Closed 1640 x 960 x 990; 3 Seater LxWxH Closed 2235 x 960 x 990.",
    "images": [
      "assets/catalogue_new/sofas/sofas-zeus/Zeus_03.png",
      "assets/catalogue_new/sofas/sofas-zeus/Zeus_02.png",
      "assets/catalogue_new/sofas/sofas-zeus/Zeus_01.png",
      "assets/catalogue_new/sofas/sofas-zeus/Zeus_04.png"
    ],
    "colors": []
  },
  {
    "id": "rubco-book-shelf-simple",
    "name": "Book Shelf (Simple)",
    "category": "wardrobes-storage",
    "type": "shelves",
    "material": "Rubberwood",
    "designer": "Rubco Premium",
    "rating": 4.6,
    "badge": "",
    "description": "Rubco Furniture are made from rubber wood — a pure solid wood. It is eco-friendly solid wood, not a wood substitute. It is nearly as strong and durable as teak. It offers unmatched dimensional stability.",
    "img": "assets/RubcoAsset/book_shelf_simple/book_shelf_simple.jpg",
    "images": [
      "assets/RubcoAsset/book_shelf_simple/book_shelf_simple.jpg",
      "assets/RubcoAsset/book_shelf_simple/book_shelf_simple_1.jpg"
    ],
    "listingUrl": "https://rubcobangalore.com/furniture/book-shelf-simple",
    "colors": [
      "Honey",
      "Teak"
    ]
  },
  {
    "id": "rubco-chest-of-drawers-3-chests",
    "name": "Chest of Drawers (3 Chests)",
    "category": "wardrobes-storage",
    "type": "shelves",
    "material": "Rubberwood",
    "designer": "Rubco Premium",
    "rating": 4.3,
    "badge": "",
    "description": "Rubco Furniture are made from rubber wood — a pure solid wood. It is eco-friendly solid wood, not a wood substitute. It is nearly as strong and durable as teak. It offers unmatched dimensional stability.",
    "img": "assets/RubcoAsset/chest_of_drawers_3_chests/chest_of_drawers_3_chests.jpg",
    "images": [
      "assets/RubcoAsset/chest_of_drawers_3_chests/chest_of_drawers_3_chests.jpg",
      "assets/RubcoAsset/chest_of_drawers_3_chests/chest_of_drawers_3_chests_1.jpg",
      "assets/RubcoAsset/chest_of_drawers_3_chests/chest_of_drawers_3_chests_2.jpg"
    ],
    "listingUrl": "https://rubcobangalore.com/furniture/chest-of-drawers-3-chests",
    "colors": [
      "Honey",
      "Teak"
    ]
  },
  {
    "id": "rubco-chest-of-drawers-5-chests",
    "name": "Chest of Drawers (5 Chests)",
    "category": "wardrobes-storage",
    "type": "shelves",
    "material": "Rubberwood",
    "designer": "Rubco Premium",
    "rating": 4.4,
    "badge": "",
    "description": "Rubco Furniture are made from rubber wood — a pure solid wood. It is eco-friendly solid wood, not a wood substitute. It is nearly as strong and durable as teak. It offers unmatched dimensional stability.",
    "img": "assets/RubcoAsset/chest_of_drawers_5_chests/chest_of_drawers_5_chests.jpg",
    "images": [
      "assets/RubcoAsset/chest_of_drawers_5_chests/chest_of_drawers_5_chests.jpg",
      "assets/RubcoAsset/chest_of_drawers_5_chests/chest_of_drawers_5_chests_1.jpg",
      "assets/RubcoAsset/chest_of_drawers_5_chests/chest_of_drawers_5_chests_2.jpg",
      "assets/RubcoAsset/chest_of_drawers_5_chests/chest_of_drawers_5_chests_3.jpg"
    ],
    "listingUrl": "https://rubcobangalore.com/furniture/chest-of-drawers-5-chests",
    "colors": [
      "Honey",
      "Teak"
    ]
  },
  {
    "id": "edge",
    "name": "Edge",
    "category": "wardrobes-storage",
    "type": "storage",
    "material": "Made With Particle Board",
    "designer": "Bosq Ergonomics",
    "rating": 4.1,
    "badge": "",
    "description": "EDGE is a modern mobile storage unit crafted from durable particle board, designed to suit contemporary workspaces. It features three spacious drawers for efficient organization, while smooth-rolling castor wheels ensure easy mobility and flexibility wherever needed.",
    "img": "assets/products_catalog_images/Edge/Edge_01.png",
    "images": [
      "assets/products_catalog_images/Edge/Edge_01.png",
      "assets/products_catalog_images/Edge/Edge_02.png",
      "assets/products_catalog_images/Edge/Edge_03.png",
      "assets/products_catalog_images/Edge/Edge_04.png"
    ],
    "colors": []
  },
  {
    "id": "elio",
    "name": "Elio",
    "category": "wardrobes-storage",
    "type": "storage",
    "material": "Elevated Angled Leg Design",
    "designer": "Bosq Ergonomics",
    "rating": 4.4,
    "badge": "",
    "description": "ELIO is a contemporary storage unit designed for both display and concealed storage. It features a combination of doors and open shelving, elevated on angled legs, creating a clean and functional piece for modern workspaces. Door Storage with Open Shelving",
    "img": "assets/products_catalog_images/Elio/Elio_01.png",
    "images": [
      "assets/products_catalog_images/Elio/Elio_01.png",
      "assets/products_catalog_images/Elio/Elio_02.png"
    ],
    "colors": []
  },
  {
    "id": "forge",
    "name": "Forge",
    "category": "wardrobes-storage",
    "type": "storage",
    "material": "Made With Particle Board",
    "designer": "Bosq Ergonomics",
    "rating": 4.6,
    "badge": "",
    "description": "FORGE is a compact mobile storage unit crafted from durable particle board, designed for modern workspaces. It features two spacious drawers for streamlined organization, while smooth castor wheels ensure effortless mobility and everyday convenience.",
    "img": "assets/products_catalog_images/Forge/Forge_01.png",
    "images": [
      "assets/products_catalog_images/Forge/Forge_01.png",
      "assets/products_catalog_images/Forge/Forge_02.png",
      "assets/products_catalog_images/Forge/Forge_03.png",
      "assets/products_catalog_images/Forge/Forge_04.png"
    ],
    "colors": []
  },
  {
    "id": "linea_dresser_study_table",
    "name": "Linea Dresser & Study Table",
    "category": "wardrobes-storage",
    "type": "table",
    "material": "Engineered Wood",
    "designer": "Kosmo Design",
    "rating": 4.8,
    "badge": "",
    "description": "",
    "img": "assets/products_catalog_images/Linea Dresser & Study Table/Linea_Dresser_Study_Table_01.png",
    "images": [
      "assets/products_catalog_images/Linea Dresser & Study Table/Linea_Dresser_Study_Table_01.png",
      "assets/products_catalog_images/Linea Dresser & Study Table/Linea_Dresser_Study_Table_02.png",
      "assets/products_catalog_images/Linea Dresser & Study Table/Linea_Dresser_Study_Table_03.png",
      "assets/products_catalog_images/Linea Dresser & Study Table/Linea_Dresser_Study_Table_04.png",
      "assets/products_catalog_images/Linea Dresser & Study Table/Linea_Dresser_Study_Table_05.png",
      "assets/products_catalog_images/Linea Dresser & Study Table/Linea_Dresser_Study_Table_06.png",
      "assets/products_catalog_images/Linea Dresser & Study Table/Linea_Dresser_Study_Table_07.png",
      "assets/products_catalog_images/Linea Dresser & Study Table/Linea_Dresser_Study_Table_08.png",
      "assets/products_catalog_images/Linea Dresser & Study Table/Linea_Dresser_Study_Table_09.png",
      "assets/products_catalog_images/Linea Dresser & Study Table/Linea_Dresser_Study_Table_10.png",
      "assets/products_catalog_images/Linea Dresser & Study Table/Linea_Dresser_Study_Table_11.png",
      "assets/products_catalog_images/Linea Dresser & Study Table/Linea_Dresser_Study_Table_12.png",
      "assets/products_catalog_images/Linea Dresser & Study Table/Linea_Dresser_Study_Table_13.png",
      "assets/products_catalog_images/Linea Dresser & Study Table/Linea_Dresser_Study_Table_14.png",
      "assets/products_catalog_images/Linea Dresser & Study Table/Linea_Dresser_Study_Table_15.png",
      "assets/products_catalog_images/Linea Dresser & Study Table/Linea_Dresser_Study_Table_16.png",
      "assets/products_catalog_images/Linea Dresser & Study Table/Linea_Dresser_Study_Table_17.png",
      "assets/products_catalog_images/Linea Dresser & Study Table/Linea_Dresser_Study_Table_18.png"
    ],
    "colors": []
  },
  {
    "id": "max_sliding_wardrobes",
    "name": "Max & Sliding Wardrobes",
    "category": "wardrobes-storage",
    "type": "storage",
    "material": "Engineered Wood",
    "designer": "Kosmo Design",
    "rating": 4.3,
    "badge": "",
    "description": "",
    "img": "assets/products_catalog_images/Max & Sliding Wardrobes/Max_Sliding_Wardrobes_01.png",
    "images": [
      "assets/products_catalog_images/Max & Sliding Wardrobes/Max_Sliding_Wardrobes_01.png",
      "assets/products_catalog_images/Max & Sliding Wardrobes/Max_Sliding_Wardrobes_02.png",
      "assets/products_catalog_images/Max & Sliding Wardrobes/Max_Sliding_Wardrobes_03.png",
      "assets/products_catalog_images/Max & Sliding Wardrobes/Max_Sliding_Wardrobes_04.png",
      "assets/products_catalog_images/Max & Sliding Wardrobes/Max_Sliding_Wardrobes_05.png",
      "assets/products_catalog_images/Max & Sliding Wardrobes/Max_Sliding_Wardrobes_06.png",
      "assets/products_catalog_images/Max & Sliding Wardrobes/Max_Sliding_Wardrobes_07.png",
      "assets/products_catalog_images/Max & Sliding Wardrobes/Max_Sliding_Wardrobes_08.png",
      "assets/products_catalog_images/Max & Sliding Wardrobes/Max_Sliding_Wardrobes_09.png",
      "assets/products_catalog_images/Max & Sliding Wardrobes/Max_Sliding_Wardrobes_10.png",
      "assets/products_catalog_images/Max & Sliding Wardrobes/Max_Sliding_Wardrobes_11.png",
      "assets/products_catalog_images/Max & Sliding Wardrobes/Max_Sliding_Wardrobes_12.png",
      "assets/products_catalog_images/Max & Sliding Wardrobes/Max_Sliding_Wardrobes_13.png",
      "assets/products_catalog_images/Max & Sliding Wardrobes/Max_Sliding_Wardrobes_14.png",
      "assets/products_catalog_images/Max & Sliding Wardrobes/Max_Sliding_Wardrobes_15.png",
      "assets/products_catalog_images/Max & Sliding Wardrobes/Max_Sliding_Wardrobes_16.png",
      "assets/products_catalog_images/Max & Sliding Wardrobes/Max_Sliding_Wardrobes_17.png",
      "assets/products_catalog_images/Max & Sliding Wardrobes/Max_Sliding_Wardrobes_18.png",
      "assets/products_catalog_images/Max & Sliding Wardrobes/Max_Sliding_Wardrobes_19.png",
      "assets/products_catalog_images/Max & Sliding Wardrobes/Max_Sliding_Wardrobes_20.png"
    ],
    "colors": []
  },
  {
    "id": "nexo",
    "name": "Nexo",
    "category": "wardrobes-storage",
    "type": "storage",
    "material": "Under-Table Mount Design",
    "designer": "Bosq Ergonomics",
    "rating": 4.9,
    "badge": "",
    "description": "NEXO is a sleek under-table storage unit designed to maximize workspace efficiency. It features two drawers for organized storage while maintaining a clean and space-saving setup.",
    "img": "assets/products_catalog_images/Nexo/Nexo_01.png",
    "images": [
      "assets/products_catalog_images/Nexo/Nexo_01.png",
      "assets/products_catalog_images/Nexo/Nexo_02.png",
      "assets/products_catalog_images/Nexo/Nexo_03.png",
      "assets/products_catalog_images/Nexo/Nexo_04.png"
    ],
    "colors": []
  },
  {
    "id": "oria",
    "name": "Oria",
    "category": "wardrobes-storage",
    "type": "storage",
    "material": "Three Door Storage Cabinet",
    "designer": "Bosq Ergonomics",
    "rating": 4.6,
    "badge": "",
    "description": "ORIA is a modern storage unit designed to combine functionality with a clean visual appeal. It features a three-door cabinet with a sleek horizontal accent and an integrated top planter, offering practical storage along with a subtle design element.",
    "img": "assets/products_catalog_images/Oria/Oria_01.png",
    "images": [
      "assets/products_catalog_images/Oria/Oria_01.png",
      "assets/products_catalog_images/Oria/Oria_02.png",
      "assets/products_catalog_images/Oria/Oria_03.png"
    ],
    "colors": []
  },
  {
    "id": "orin",
    "name": "Orin",
    "category": "wardrobes-storage",
    "type": "storage",
    "material": "Metal Elevated Angled Leg Design",
    "designer": "Bosq Ergonomics",
    "rating": 4.6,
    "badge": "",
    "description": "ORIN is a modern storage cabinet designed for organized and structured spaces. It features a combination of concealed compartments and lower drawers, supported by slim angled legs that enhance its contemporary appearance. Door Storage with Drawer Unit Concealed and Open Storage Combination",
    "img": "assets/products_catalog_images/Orin/Orin_01.png",
    "images": [
      "assets/products_catalog_images/Orin/Orin_01.png",
      "assets/products_catalog_images/Orin/Orin_02.png"
    ],
    "colors": []
  },
  {
    "id": "rubco-pooja-stand",
    "name": "Pooja Stand",
    "category": "wardrobes-storage",
    "type": "shelves",
    "material": "Rubberwood",
    "designer": "Rubco Premium",
    "rating": 4.4,
    "badge": "",
    "description": "Rubco Furniture are made from rubber wood — a pure solid wood. It is eco-friendly solid wood, not a wood substitute. It is nearly as strong and durable as teak. It offers unmatched dimensional stability.",
    "img": "assets/RubcoAsset/pooja_stand/pooja_stand.jpg",
    "images": [
      "assets/RubcoAsset/pooja_stand/pooja_stand.jpg",
      "assets/RubcoAsset/pooja_stand/pooja_stand_1.jpg",
      "assets/RubcoAsset/pooja_stand/pooja_stand_2.jpg",
      "assets/RubcoAsset/pooja_stand/pooja_stand_3.jpg",
      "assets/RubcoAsset/pooja_stand/pooja_stand_4.jpg"
    ],
    "listingUrl": "https://rubcobangalore.com/furniture/pooja-stand",
    "colors": [
      "Honey",
      "Teak"
    ]
  },
  {
    "id": "rova",
    "name": "Rova",
    "category": "wardrobes-storage",
    "type": "storage",
    "material": "Three Drawer Storage",
    "designer": "Bosq Ergonomics",
    "rating": 4.9,
    "badge": "",
    "description": "ROVA is a compact and durable mobile pedestal designed for efficient office storage. It features three drawers for organized filing of documents and supplies, along with smooth castor wheels for easy mobility in professional workspaces. Mobile Unit with Castor Wheels",
    "img": "assets/products_catalog_images/Rova/Rova_01.png",
    "images": [
      "assets/products_catalog_images/Rova/Rova_01.png",
      "assets/products_catalog_images/Rova/Rova_02.png",
      "assets/products_catalog_images/Rova/Rova_03.png",
      "assets/products_catalog_images/Rova/Rova_04.png"
    ],
    "colors": []
  },
  {
    "id": "rubco-shelf-small",
    "name": "Shelf Small",
    "category": "wardrobes-storage",
    "type": "shelves",
    "material": "Rubberwood",
    "designer": "Rubco Premium",
    "rating": 4.7,
    "badge": "",
    "description": "Rubco Furniture are made from rubber wood — a pure solid wood. It is eco-friendly solid wood, not a wood substitute. It is nearly as strong and durable as teak. It offers unmatched dimensional stability.",
    "img": "assets/RubcoAsset/shelf_small/shelf_small.jpg",
    "images": [
      "assets/RubcoAsset/shelf_small/shelf_small.jpg",
      "assets/RubcoAsset/shelf_small/shelf_small_1.jpg",
      "assets/RubcoAsset/shelf_small/shelf_small_2.jpg",
      "assets/RubcoAsset/shelf_small/shelf_small_3.jpg"
    ],
    "listingUrl": "https://rubcobangalore.com/furniture/shelf-small",
    "colors": [
      "Honey",
      "Teak"
    ]
  },
  {
    "id": "unox",
    "name": "Unox",
    "category": "wardrobes-storage",
    "type": "storage",
    "material": "Under-Table Mount Design",
    "designer": "Bosq Ergonomics",
    "rating": 5,
    "badge": "",
    "description": "UNOX is a compact under-table storage unit designed for efficient everyday use. It features a single drawer for convenient access while keeping workspaces clean and organized.",
    "img": "assets/products_catalog_images/Unox/Unox_01.png",
    "images": [
      "assets/products_catalog_images/Unox/Unox_01.png",
      "assets/products_catalog_images/Unox/Unox_02.png",
      "assets/products_catalog_images/Unox/Unox_03.png",
      "assets/products_catalog_images/Unox/Unox_04.png"
    ],
    "colors": []
  },
  {
    "id": "versa",
    "name": "Versa",
    "category": "wardrobes-storage",
    "type": "storage",
    "material": "Cushioned Seating Top",
    "designer": "Bosq Ergonomics",
    "rating": 4.3,
    "badge": "",
    "description": "VERSA is a versatile mobile storage unit designed for modern workspaces. It features three spacious drawers with a cushioned top that doubles as seating, while castor wheels allow easy movement.",
    "img": "assets/products_catalog_images/Versa/Versa_01.png",
    "images": [
      "assets/products_catalog_images/Versa/Versa_01.png",
      "assets/products_catalog_images/Versa/Versa_02.png",
      "assets/products_catalog_images/Versa/Versa_03.png",
      "assets/products_catalog_images/Versa/Versa_04.png"
    ],
    "colors": []
  },
  {
    "id": "lmw-023",
    "name": "LMW-023",
    "category": "wooden-couches",
    "type": "couch",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.9,
    "img": "assets/assetsCatalogue/categorized/LMW-023/LMW-023.png",
    "badge": "",
    "description": "Indulge in luxury with the LMW-023 wooden couch. Designed for premium comfort and relaxed seating, it features a sturdy wood frame. Its spacious contoured seat and elegant Red finish make it the perfect statement addition to your living area, executive office, or lobby.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-023/LMW-023.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "lmw-024",
    "name": "LMW-024",
    "category": "wooden-couches",
    "type": "couch",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/LMW-024/LMW-024.png",
    "badge": "",
    "description": "Indulge in luxury with the LMW-024 wooden couch. Designed for premium comfort and relaxed seating, it features a sturdy wood frame. Its spacious contoured seat and elegant Red finish make it the perfect statement addition to your living area, executive office, or lobby.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-024/LMW-024.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "lmw-025",
    "name": "LMW-025",
    "category": "wooden-couches",
    "type": "couch",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/LMW-025/LMW-025.png",
    "badge": "",
    "description": "Indulge in luxury with the LMW-025 wooden couch. Designed for premium comfort and relaxed seating, it features a sturdy wood frame. Its spacious contoured seat and elegant Brown finish make it the perfect statement addition to your living area, executive office, or lobby.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-025/LMW-025.png"
    ],
    "colors": [
      "Brown"
    ]
  },
  {
    "id": "lmw-026",
    "name": "LMW-026",
    "category": "wooden-couches",
    "type": "couch",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/LMW-026/LMW-026.png",
    "badge": "",
    "description": "Indulge in luxury with the LMW-026 wooden couch. Designed for premium comfort and relaxed seating, it features a sturdy wood frame. Its spacious contoured seat and elegant Red finish make it the perfect statement addition to your living area, executive office, or lobby.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-026/LMW-026.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "lmw-027",
    "name": "LMW-027",
    "category": "wooden-couches",
    "type": "couch",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.5,
    "img": "assets/assetsCatalogue/categorized/LMW-027/LMW-027.png",
    "badge": "",
    "description": "Indulge in luxury with the LMW-027 wooden couch. Designed for premium comfort and relaxed seating, it features a sturdy wood frame. Its spacious contoured seat and elegant Brown finish make it the perfect statement addition to your living area, executive office, or lobby.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-027/LMW-027.png"
    ],
    "colors": [
      "Brown"
    ]
  },
  {
    "id": "lmw-028",
    "name": "LMW-028",
    "category": "wooden-couches",
    "type": "couch",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/LMW-028/LMW-028.png",
    "badge": "New",
    "description": "Indulge in luxury with the LMW-028 wooden couch. Designed for premium comfort and relaxed seating, it features a sturdy wood frame. Its spacious contoured seat and elegant Red finish make it the perfect statement addition to your living area, executive office, or lobby.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-028/LMW-028.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "lmw-029",
    "name": "LMW-029",
    "category": "wooden-couches",
    "type": "couch",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/LMW-029/LMW-029.png",
    "badge": "Bestseller",
    "description": "Indulge in luxury with the LMW-029 wooden couch. Designed for premium comfort and relaxed seating, it features a sturdy wood frame. Its spacious contoured seat and elegant Red finish make it the perfect statement addition to your living area, executive office, or lobby.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-029/LMW-029.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "lmw-030",
    "name": "LMW-030",
    "category": "wooden-couches",
    "type": "couch",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.9,
    "img": "assets/assetsCatalogue/categorized/LMW-030/LMW-030.png",
    "badge": "",
    "description": "Indulge in luxury with the LMW-030 wooden couch. Designed for premium comfort and relaxed seating, it features a sturdy wood frame. Its spacious contoured seat and elegant Red finish make it the perfect statement addition to your living area, executive office, or lobby.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-030/LMW-030.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "lmw-031",
    "name": "LMW-031",
    "category": "wooden-couches",
    "type": "couch",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/LMW-031/LMW-031.png",
    "badge": "Premium",
    "description": "Indulge in luxury with the LMW-031 wooden couch. Designed for premium comfort and relaxed seating, it features a sturdy wood frame. Its spacious contoured seat and elegant Red finish make it the perfect statement addition to your living area, executive office, or lobby.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-031/LMW-031.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "lmw-032",
    "name": "LMW-032",
    "category": "wooden-couches",
    "type": "couch",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/LMW-032/LMW-032.png",
    "badge": "New",
    "description": "Indulge in luxury with the LMW-032 wooden couch. Designed for premium comfort and relaxed seating, it features a sturdy wood frame. Its spacious contoured seat and elegant Red finish make it the perfect statement addition to your living area, executive office, or lobby.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-032/LMW-032.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "lmw-033",
    "name": "LMW-033",
    "category": "wooden-couches",
    "type": "couch",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.7,
    "img": "assets/assetsCatalogue/categorized/LMW-033/LMW-033.png",
    "badge": "",
    "description": "Indulge in luxury with the LMW-033 wooden couch. Designed for premium comfort and relaxed seating, it features a sturdy wood frame. Its spacious contoured seat and elegant Brown finish make it the perfect statement addition to your living area, executive office, or lobby.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-033/LMW-033.png"
    ],
    "colors": [
      "Brown"
    ]
  },
  {
    "id": "lmw-034",
    "name": "LMW-034",
    "category": "wooden-couches",
    "type": "couch",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/assetsCatalogue/categorized/LMW-034/LMW-034.png",
    "badge": "",
    "description": "Indulge in luxury with the LMW-034 wooden couch. Designed for premium comfort and relaxed seating, it features a sturdy wood frame. Its spacious contoured seat and elegant Red finish make it the perfect statement addition to your living area, executive office, or lobby.",
    "images": [
      "assets/assetsCatalogue/categorized/LMW-034/LMW-034.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "rubco-reeper-sofa",
    "name": "Reeper Sofa",
    "category": "wooden-couches",
    "type": "sofa",
    "material": "Rubberwood",
    "designer": "Rubco Premium",
    "rating": 4.3,
    "badge": "",
    "description": "Rubco Furniture are made from rubber wood — a pure solid wood. It is eco-friendly solid wood, not a wood substitute. It is nearly as strong and durable as teak. It offers unmatched dimensional stability.",
    "img": "assets/RubcoAsset/reeper_sofa/reeper_sofa_1.jpg",
    "images": [
      "assets/RubcoAsset/reeper_sofa/reeper_sofa_1.jpg",
      "assets/RubcoAsset/reeper_sofa/reeper_sofa_2.jpg",
      "assets/RubcoAsset/reeper_sofa/reeper_sofa_3.jpg"
    ],
    "listingUrl": "https://rubcobangalore.com/furniture/reeper-sofa",
    "colors": [
      "Honey",
      "Teak"
    ]
  },
  {
    "id": "rubco-antiq-sofa-311",
    "name": "Rubco Antiq Sofa 3+1+1",
    "category": "wooden-couches",
    "type": "sofa",
    "material": "Rubberwood",
    "designer": "Rubco Premium",
    "rating": 4.4,
    "badge": "",
    "description": "Rubco Furniture are made from rubber wood — a pure solid wood. It is eco-friendly solid wood, not a wood substitute. It is nearly as strong and durable as teak. It offers unmatched dimensional stability.",
    "img": "assets/RubcoAsset/rubco_antiq_sofa_3_1_1/rubco_antiq_sofa_3_1_1.jpg",
    "images": [
      "assets/RubcoAsset/rubco_antiq_sofa_3_1_1/rubco_antiq_sofa_3_1_1.jpg",
      "assets/RubcoAsset/rubco_antiq_sofa_3_1_1/rubco_antiq_sofa_3_1_1_1.jpg",
      "assets/RubcoAsset/rubco_antiq_sofa_3_1_1/rubco_antiq_sofa_3_1_1_2.jpg",
      "assets/RubcoAsset/rubco_antiq_sofa_3_1_1/rubco_antiq_sofa_3_1_1_3.jpg",
      "assets/RubcoAsset/rubco_antiq_sofa_3_1_1/rubco_antiq_sofa_3_1_1_4.jpg"
    ],
    "listingUrl": "https://rubcobangalore.com/furniture/rubco-antiq-sofa",
    "colors": [
      "Honey",
      "Teak"
    ]
  },
  {
    "id": "rubco-perl-sofa-311",
    "name": "Rubco Perl Sofa 3+1+1",
    "category": "wooden-couches",
    "type": "sofa",
    "material": "Rubberwood",
    "designer": "Rubco Premium",
    "rating": 4.9,
    "badge": "",
    "description": "Rubco Furniture are made from rubber wood — a pure solid wood. It is eco-friendly solid wood, not a wood substitute. It is nearly as strong and durable as teak. It offers unmatched dimensional stability.",
    "img": "assets/RubcoAsset/rubco_perl_sofa_3_1_1/rubco_perl_sofa_3_1_1.jpg",
    "images": [
      "assets/RubcoAsset/rubco_perl_sofa_3_1_1/rubco_perl_sofa_3_1_1.jpg",
      "assets/RubcoAsset/rubco_perl_sofa_3_1_1/rubco_perl_sofa_3_1_1_1.jpg",
      "assets/RubcoAsset/rubco_perl_sofa_3_1_1/rubco_perl_sofa_3_1_1_2.jpg",
      "assets/RubcoAsset/rubco_perl_sofa_3_1_1/rubco_perl_sofa_3_1_1_3.jpg",
      "assets/RubcoAsset/rubco_perl_sofa_3_1_1/rubco_perl_sofa_3_1_1_4.jpg",
      "assets/RubcoAsset/rubco_perl_sofa_3_1_1/rubco_perl_sofa_3_1_1_5.jpg"
    ],
    "listingUrl": "https://rubcobangalore.com/furniture/rubco-perl-sofa",
    "colors": [
      "Honey",
      "Teak"
    ]
  }
];
