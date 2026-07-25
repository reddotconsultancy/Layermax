function resolveImagePath(path) {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://')) return path;
    const isInsidePagesDir = window.location.pathname.includes('/pages/');
    if (isInsidePagesDir) {
        return path.startsWith('../') ? path : '../' + path;
    } else {
        return path.startsWith('../') ? path.replace(/^\.\.\//, '') : path;
    }
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
    "img": "assets/products/acoustic-pods/arqis/Arqis_01.webp",
    "images": [
      "assets/products/acoustic-pods/arqis/Arqis_01.webp",
      "assets/products/acoustic-pods/arqis/Arqis_02.webp",
      "assets/products/acoustic-pods/arqis/Arqis_03.webp",
      "assets/products/acoustic-pods/arqis/Arqis_04.webp"
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
    "img": "assets/products/acoustic-pods/canio/Canio_01.webp",
    "images": [
      "assets/products/acoustic-pods/canio/Canio_01.webp",
      "assets/products/acoustic-pods/canio/Canio_02.webp",
      "assets/products/acoustic-pods/canio/Canio_03.webp"
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
    "img": "assets/products/acoustic-pods/corvo/Corvo_01.webp",
    "images": [
      "assets/products/acoustic-pods/corvo/Corvo_01.webp",
      "assets/products/acoustic-pods/corvo/Corvo_02.webp",
      "assets/products/acoustic-pods/corvo/Corvo_03.webp",
      "assets/products/acoustic-pods/corvo/Corvo_04.webp"
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
    "img": "assets/products/acoustic-pods/cubix/Cubix_01.webp",
    "images": [
      "assets/products/acoustic-pods/cubix/Cubix_01.webp",
      "assets/products/acoustic-pods/cubix/Cubix_02.webp",
      "assets/products/acoustic-pods/cubix/Cubix_03.webp",
      "assets/products/acoustic-pods/cubix/Cubix_04.webp"
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
    "img": "assets/products/acoustic-pods/cyris/Cyris_01.webp",
    "images": [
      "assets/products/acoustic-pods/cyris/Cyris_01.webp",
      "assets/products/acoustic-pods/cyris/Cyris_02.webp",
      "assets/products/acoustic-pods/cyris/Cyris_03.webp",
      "assets/products/acoustic-pods/cyris/Cyris_04.webp"
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
    "img": "assets/products/acoustic-pods/velor/Velor_01.webp",
    "images": [
      "assets/products/acoustic-pods/velor/Velor_01.webp",
      "assets/products/acoustic-pods/velor/Velor_02.webp",
      "assets/products/acoustic-pods/velor/Velor_03.webp",
      "assets/products/acoustic-pods/velor/Velor_04.webp"
    ],
    "colors": []
  },
  {
    "id": "black-tufted-hydraulic-swivel-bar-stool",
    "name": "Black Tufted Hydraulic Swivel Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Black Tufted Hydraulic Swivel Bar Stool combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/black-tufted-hydraulic-swivel-bar-stool/Black Tufted Swivel Bar Stool - Angle Perspective.webp",
    "images": [
      "assets/products/cafe-bar-stools/black-tufted-hydraulic-swivel-bar-stool/Black Tufted Swivel Bar Stool - Angle Perspective.webp",
      "assets/products/cafe-bar-stools/black-tufted-hydraulic-swivel-bar-stool/Black Tufted Swivel Bar Stool - Corner Detail.webp",
      "assets/products/cafe-bar-stools/black-tufted-hydraulic-swivel-bar-stool/Black Tufted Swivel Bar Stool - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "molded-perforated-bar-stools",
    "name": "Molded Perforated Bar Stools",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Molded Plastic / Chrome & Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "New",
    "description": "This versatile collection of molded perforated bar stools features vibrant colors and multiple base styles including warm wooden legs, a rolling swivel base, and a sleek chrome pedestal base.",
    "img": "assets/products/cafe-bar-stools/molded-perforated-bar-stools/molded_perforated_bar_stools.webp",
    "images": [
      "assets/products/cafe-bar-stools/molded-perforated-bar-stools/molded_perforated_bar_stools.webp"
    ],
    "colors": [
      "Red",
      "Orange",
      "Yellow"
    ]
  },
  {
    "id": "boho-black-cane-counter-stool",
    "name": "Boho Black Cane Counter Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Boho Black Cane Counter Stool combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/boho-black-cane-counter-stool/boho_black_cane_counter_stool.webp",
    "images": [
      "assets/products/cafe-bar-stools/boho-black-cane-counter-stool/boho_black_cane_counter_stool.webp"
    ],
    "colors": []
  },
  {
    "id": "dbs-52",
    "name": "DBS-52 Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Bar Stool Model 052 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-52/DBS-52 - Front View.webp",
    "images": [
      "assets/products/cafe-bar-stools/dbs-52/DBS-52 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dbs-53",
    "name": "DBS-53 Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Bar Stool Model 053 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-53/DBS-53 - Front View.webp",
    "images": [
      "assets/products/cafe-bar-stools/dbs-53/DBS-53 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dbs-54",
    "name": "DBS-54 Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Bar Stool Model 055 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-54/DBS-54 - Front View.webp",
    "images": [
      "assets/products/cafe-bar-stools/dbs-54/DBS-54 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dbs-55",
    "name": "DBS-55 Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Bar Stool Model 056 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-55/DBS-55 - Front View.webp",
    "images": [
      "assets/products/cafe-bar-stools/dbs-55/DBS-55 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dbs-56",
    "name": "DBS-56 Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Bar Stool Model 057 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-56/DBS-56 - Front View.webp",
    "images": [
      "assets/products/cafe-bar-stools/dbs-56/DBS-56 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dbs-57",
    "name": "DBS-57 Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Bar Stool Model 058 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-57/DBS-57 - Front View.webp",
    "images": [
      "assets/products/cafe-bar-stools/dbs-57/DBS-57 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dbs-58",
    "name": "DBS-58 Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Bar Stool Model 059 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-58/DBS-58 - Front View.webp",
    "images": [
      "assets/products/cafe-bar-stools/dbs-58/DBS-58 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dbs-59",
    "name": "DBS-59 Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Bar Stool Model 060 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-59/DBS-59 - Front View.webp",
    "images": [
      "assets/products/cafe-bar-stools/dbs-59/DBS-59 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dbs-60",
    "name": "DBS-60 Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Bar Stool Model 061 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-60/DBS-60 - Front View.webp",
    "images": [
      "assets/products/cafe-bar-stools/dbs-60/DBS-60 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dbs-61",
    "name": "DBS-61 Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Bar Stool Model 062 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-61/DBS-61 - Front View.webp",
    "images": [
      "assets/products/cafe-bar-stools/dbs-61/DBS-61 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dbs-62",
    "name": "DBS-62 Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Bar Stool Model 063 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-62/DBS-62 - Front View.webp",
    "images": [
      "assets/products/cafe-bar-stools/dbs-62/DBS-62 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dbs-63",
    "name": "DBS-63 Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Bar Stool Model 064 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-63/DBS-63 - Front View.webp",
    "images": [
      "assets/products/cafe-bar-stools/dbs-63/DBS-63 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dbs-64",
    "name": "DBS-64 Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Bar Stool Model 065 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-64/DBS-64 - Front View.webp",
    "images": [
      "assets/products/cafe-bar-stools/dbs-64/DBS-64 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dbs-66",
    "name": "DBS-66 Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Bar Stool Model 066 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-66/DBS-66 - Front View.webp",
    "images": [
      "assets/products/cafe-bar-stools/dbs-66/DBS-66 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dbs-67",
    "name": "DBS-67 Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Bar Stool Model 068 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-67/DBS-67 - Front View.webp",
    "images": [
      "assets/products/cafe-bar-stools/dbs-67/DBS-67 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dbs-68",
    "name": "DBS-68 Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Bar Stool Model 069 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-68/DBS-68 - Front View.webp",
    "images": [
      "assets/products/cafe-bar-stools/dbs-68/DBS-68 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dbs-69",
    "name": "DBS-69 Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Bar Stool Model 075 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-69/DBS-69 - Front View.webp",
    "images": [
      "assets/products/cafe-bar-stools/dbs-69/DBS-69 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dbs-65",
    "name": "DBS-65 Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Bar Stool Model 65 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-65/DBS-65 - Front View.webp",
    "images": [
      "assets/products/cafe-bar-stools/dbs-65/DBS-65 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dbs-70",
    "name": "DBS-70 Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Bar Stool Model 652 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-70/DBS-70 - Front View.webp",
    "images": [
      "assets/products/cafe-bar-stools/dbs-70/DBS-70 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dbs-71",
    "name": "DBS-71 Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Bar Stool Model 653 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-71/DBS-71 - Front View.webp",
    "images": [
      "assets/products/cafe-bar-stools/dbs-71/DBS-71 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dbs-72",
    "name": "DBS-72 Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Bar Stool Model 658 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-72/DBS-72 - Front View.webp",
    "images": [
      "assets/products/cafe-bar-stools/dbs-72/DBS-72 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dbs-73",
    "name": "DBS-73 Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Bar Stool Model 661 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-73/DBS-73 - Front View.webp",
    "images": [
      "assets/products/cafe-bar-stools/dbs-73/DBS-73 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dbs-74",
    "name": "DBS-74 Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Bar Stool Model 665 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-74/DBS-74 - Front View.webp",
    "images": [
      "assets/products/cafe-bar-stools/dbs-74/DBS-74 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dbs-75",
    "name": "DBS-75 Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Bar Stool Model 666 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-75/DBS-75 - Front View.webp",
    "images": [
      "assets/products/cafe-bar-stools/dbs-75/DBS-75 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dbs-76",
    "name": "DBS-76 Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Bar Stool Model 668 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-76/DBS-76 - Front View.webp",
    "images": [
      "assets/products/cafe-bar-stools/dbs-76/DBS-76 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "industrial-red-metal-tolix-bar-stool",
    "name": "Industrial Red Metal Tolix Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Industrial Red Metal Tolix Bar Stool combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/industrial-red-metal-tolix-bar-stool/Red Tolix Bar Stool - Angle Perspective.webp",
    "images": [
      "assets/products/cafe-bar-stools/industrial-red-metal-tolix-bar-stool/Red Tolix Bar Stool - Angle Perspective.webp",
      "assets/products/cafe-bar-stools/industrial-red-metal-tolix-bar-stool/Red Tolix Bar Stool - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "industrial-tolix-bar-stool",
    "name": "Industrial Tolix Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Industrial Tolix Bar Stool combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/industrial-tolix-bar-stool/Industrial Tolix Bar Stool - Angle Perspective.webp",
    "images": [
      "assets/products/cafe-bar-stools/industrial-tolix-bar-stool/Industrial Tolix Bar Stool - Angle Perspective.webp",
      "assets/products/cafe-bar-stools/industrial-tolix-bar-stool/Industrial Tolix Bar Stool - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "industrial-tolix-bar-stool-high-angle",
    "name": "Industrial Tolix Bar Stool High Angle",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Industrial Tolix Bar Stool High Angle combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/industrial-tolix-bar-stool-high-angle/Industrial Tolix Bar Stool High Angle - Angle Perspective.webp",
    "images": [
      "assets/products/cafe-bar-stools/industrial-tolix-bar-stool-high-angle/Industrial Tolix Bar Stool High Angle - Angle Perspective.webp",
      "assets/products/cafe-bar-stools/industrial-tolix-bar-stool-high-angle/Industrial Tolix Bar Stool High Angle - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "industrial-white-tolix-bar-stool-with-wood-seat",
    "name": "Industrial White Tolix Bar Stool With Wood Seat",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Industrial White Tolix Bar Stool With Wood Seat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/industrial-white-tolix-bar-stool-with-wood-seat/White Tolix Wood Seat Bar Stool - Angle Perspective.webp",
    "images": [
      "assets/products/cafe-bar-stools/industrial-white-tolix-bar-stool-with-wood-seat/White Tolix Wood Seat Bar Stool - Angle Perspective.webp",
      "assets/products/cafe-bar-stools/industrial-white-tolix-bar-stool-with-wood-seat/White Tolix Wood Seat Bar Stool - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "lime-green-eames-shell-bar-stool",
    "name": "Lime Green Eames Shell Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Lime Green Eames Shell Bar Stool combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/lime-green-eames-shell-bar-stool/Lime Green Eames Bar Stool - Angle Perspective.webp",
    "images": [
      "assets/products/cafe-bar-stools/lime-green-eames-shell-bar-stool/Lime Green Eames Bar Stool - Angle Perspective.webp",
      "assets/products/cafe-bar-stools/lime-green-eames-shell-bar-stool/Lime Green Eames Bar Stool - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "modern-white-hydraulic-swivel-bar-stool",
    "name": "Modern White Hydraulic Swivel Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Modern White Hydraulic Swivel Bar Stool combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/modern-white-hydraulic-swivel-bar-stool/White Swivel Bar Stool - Angle Perspective.webp",
    "images": [
      "assets/products/cafe-bar-stools/modern-white-hydraulic-swivel-bar-stool/White Swivel Bar Stool - Angle Perspective.webp",
      "assets/products/cafe-bar-stools/modern-white-hydraulic-swivel-bar-stool/White Swivel Bar Stool - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "orange-molded-bar-stool",
    "name": "Orange Molded Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Orange Molded Bar Stool combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/orange-molded-bar-stool/orange_molded_bar_stool.webp",
    "images": [
      "assets/products/cafe-bar-stools/orange-molded-bar-stool/orange_molded_bar_stool.webp"
    ],
    "colors": []
  },
  {
    "id": "beam",
    "name": "Beam",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.4,
    "img": "assets/products/cafe-chairs/beam/Beam.webp",
    "badge": "Bestseller",
    "description": "The Beam Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Blue, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/cafe-chairs/beam/Beam.webp"
    ],
    "colors": [
      "Blue"
    ]
  },
  {
    "id": "black",
    "name": "BLACK",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.4,
    "img": "assets/products/cafe-chairs/black/BLACK.webp",
    "badge": "Bestseller",
    "description": "Add color to every conversation, the BLACK Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/cafe-chairs/black/BLACK.webp"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "cat-architectural-wood-dining-chair-b",
    "name": "Architectural Teak Armchair with Cream Upholstery",
    "category": "chairs",
    "type": "chair",
    "material": "Cream Upholstery / Solid Teak Frame",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A sculptural armchair built on crossed teak legs, with a curved wrap-around back and seat upholstered in cream. The angled frame gives it a light, architectural profile from every side.",
    "img": "assets/products/chairs/cat-architectural-wood-dining-chair-b/Architectural Wood Dining Chair B.webp",
    "images": [
      "assets/products/chairs/cat-architectural-wood-dining-chair-b/Architectural Wood Dining Chair B.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-black-and-walnut-lshaped-desk",
    "name": "Black And Walnut Lshaped Desk",
    "category": "office-workstations",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Black And Walnut Lshaped Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-black-and-walnut-lshaped-desk/black_and_walnut_lshaped_desk.webp",
    "images": [
      "assets/products/office-workstations/cat-black-and-walnut-lshaped-desk/black_and_walnut_lshaped_desk.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-black-electric-standing-desk",
    "name": "Black Electric Standing Desk",
    "category": "office-workstations",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Black Electric Standing Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-black-electric-standing-desk/black_electric_standing_desk.webp",
    "images": [
      "assets/products/office-workstations/cat-black-electric-standing-desk/black_electric_standing_desk.webp"
    ],
    "colors": []
  },
  {
    "id": "black-folding-semicircular-banquet-table",
    "name": "Black Folding Semicircular Banquet Table",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Black Folding Semicircular Banquet Table combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/black-folding-semicircular-banquet-table/black_folding_semicircular_banquet_table.webp",
    "images": [
      "assets/products/cafe-tables/black-folding-semicircular-banquet-table/black_folding_semicircular_banquet_table.webp"
    ],
    "colors": []
  },
  {
    "id": "black-lattice-patio-dining-chair",
    "name": "Black Lattice Patio Dining Chair",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Black Lattice Patio Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/black-lattice-patio-dining-chair/black_lattice_patio_dining_chair.webp",
    "images": [
      "assets/products/cafe-chairs/black-lattice-patio-dining-chair/black_lattice_patio_dining_chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-black-leather-3seat-power-recliner",
    "name": "Black Leather 3 Seat Power Recliner",
    "category": "recliners",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Black Leather 3 Seat Power Recliner combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-black-leather-3seat-power-recliner/black_leather_3seat_power_recliner.webp",
    "images": [
      "assets/products/recliners/cat-black-leather-3seat-power-recliner/black_leather_3seat_power_recliner.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-black-leather-3seat-theater-row",
    "name": "Black Leather 3 Seat Theater Row",
    "category": "home-theatre-seating",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Black Leather 3 Seat Theater Row combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/home-theatre-seating/cat-black-leather-3seat-theater-row/black_leather_3seat_theater_row.webp",
    "images": [
      "assets/products/home-theatre-seating/cat-black-leather-3seat-theater-row/black_leather_3seat_theater_row.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-black-leather-4seat-theater-recliner-row",
    "name": "Black Leather 4 Seat Theater Recliner Row",
    "category": "home-theatre-seating",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Black Leather 4 Seat Theater Recliner Row combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/home-theatre-seating/cat-black-leather-4seat-theater-recliner-row/black_leather_4seat_theater_recliner_row.webp",
    "images": [
      "assets/products/home-theatre-seating/cat-black-leather-4seat-theater-recliner-row/black_leather_4seat_theater_recliner_row.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-black-leather-channeltufted-loveseat",
    "name": "Black Leather Channeltufted Loveseat",
    "category": "sofas",
    "type": "sofa",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Black Leather Channeltufted Loveseat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-black-leather-channeltufted-loveseat/black_leather_channeltufted_loveseat.webp",
    "images": [
      "assets/products/sofas/cat-black-leather-channeltufted-loveseat/black_leather_channeltufted_loveseat.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-black-leather-ergonomic-power-recliner",
    "name": "Black Leather Ergonomic Power Recliner",
    "category": "recliners",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Black Leather Ergonomic Power Recliner combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-black-leather-ergonomic-power-recliner/black_leather_ergonomic_power_recliner.webp",
    "images": [
      "assets/products/recliners/cat-black-leather-ergonomic-power-recliner/black_leather_ergonomic_power_recliner.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-black-leather-executive-recliner",
    "name": "Black Leather Executive Recliner",
    "category": "recliners",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Black Leather Executive Recliner combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-black-leather-executive-recliner/black_leather_executive_recliner.webp",
    "images": [
      "assets/products/recliners/cat-black-leather-executive-recliner/black_leather_executive_recliner.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-black-leather-recliner-living-set",
    "name": "Black Leather Recliner Living Set",
    "category": "recliners",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Black Leather Recliner Living Set combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-black-leather-recliner-living-set/black_leather_recliner_living_set.webp",
    "images": [
      "assets/products/recliners/cat-black-leather-recliner-living-set/black_leather_recliner_living_set.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-black-leather-sectional-sofa-with-orange-accent",
    "name": "Black Leather Sectional Sofa With Orange Accent",
    "category": "corner-sofas",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Black Leather Sectional Sofa With Orange Accent combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/cat-black-leather-sectional-sofa-with-orange-accent/Black Leather Sectional Sofa with Orange Accent.webp",
    "images": [
      "assets/products/corner-sofas/cat-black-leather-sectional-sofa-with-orange-accent/Black Leather Sectional Sofa with Orange Accent.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-black-leather-sofa-chair-table-suite",
    "name": "Black Leather Sofa Chair Table Suite",
    "category": "sofas",
    "type": "sofa",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Black Leather Sofa Chair Table Suite combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-black-leather-sofa-chair-table-suite/black_leather_sofa_chair_table_suite.webp",
    "images": [
      "assets/products/sofas/cat-black-leather-sofa-chair-table-suite/black_leather_sofa_chair_table_suite.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-black-leather-theater-recliner",
    "name": "Black Leather Theater Recliner",
    "category": "home-theatre-seating",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Black Leather Theater Recliner combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/home-theatre-seating/cat-black-leather-theater-recliner/black_leather_theater_recliner.webp",
    "images": [
      "assets/products/home-theatre-seating/cat-black-leather-theater-recliner/black_leather_theater_recliner.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-black-leather-u-reclining-sectional",
    "name": "Black Leather U Reclining Sectional",
    "category": "corner-sofas",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Black Leather U Reclining Sectional combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/cat-black-leather-u-reclining-sectional/black_leather_u_reclining_sectional.webp",
    "images": [
      "assets/products/corner-sofas/cat-black-leather-u-reclining-sectional/black_leather_u_reclining_sectional.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-black-leather-verticalstitch-recliner-comboset",
    "name": "Black Leather Verticalstitch Recliner Comboset",
    "category": "recliners",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Black Leather Verticalstitch Recliner Comboset combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-black-leather-verticalstitch-recliner-comboset/black_leather_verticalstitch_recliner_comboset.webp",
    "images": [
      "assets/products/recliners/cat-black-leather-verticalstitch-recliner-comboset/black_leather_verticalstitch_recliner_comboset.webp"
    ],
    "colors": []
  },
  {
    "id": "black-metal-folding-utility-table",
    "name": "Black Metal Folding Utility Table",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Black Metal Folding Utility Table combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/black-metal-folding-utility-table/black_metal_folding_utility_table.webp",
    "images": [
      "assets/products/cafe-tables/black-metal-folding-utility-table/black_metal_folding_utility_table.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-black-tufted-fabric-3-seater-sofa",
    "name": "Black Tufted Fabric 3 Seater Sofa",
    "category": "sofas",
    "type": "sofa",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Black Tufted Fabric 3 Seater Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-black-tufted-fabric-3-seater-sofa/Black Tufted Fabric 3-Seater Sofa.webp",
    "images": [
      "assets/products/sofas/cat-black-tufted-fabric-3-seater-sofa/Black Tufted Fabric 3-Seater Sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-brown-molded-tub-accent-chair",
    "name": "Brown Molded Tub Accent Chair",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Brown Molded Tub Accent Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-brown-molded-tub-accent-chair/Brown Molded Tub Accent Chair.webp",
    "images": [
      "assets/products/chairs/cat-brown-molded-tub-accent-chair/Brown Molded Tub Accent Chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-carved-mahogany-dining-chair",
    "name": "Carved Mahogany Dining Chair",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Carved Mahogany Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-carved-mahogany-dining-chair/carved_mahogany_dining_chair.webp",
    "images": [
      "assets/products/chairs/cat-carved-mahogany-dining-chair/carved_mahogany_dining_chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-carved-teak-wooden-dining-chair",
    "name": "Carved Teak Wooden Dining Chair",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Carved Teak Wooden Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-carved-teak-wooden-dining-chair/Carved Teak Wooden Dining Chair.webp",
    "images": [
      "assets/products/chairs/cat-carved-teak-wooden-dining-chair/Carved Teak Wooden Dining Chair.webp"
    ],
    "colors": []
  },
  {
    "id": "charcoal-matte-stackable-dining-chair",
    "name": "Charcoal Matte Stackable Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Charcoal Matte Stackable Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/charcoal-matte-stackable-dining-chair/charcoal_matte_stackable_dining_chair.webp",
    "images": [
      "assets/products/cafe-chairs/charcoal-matte-stackable-dining-chair/charcoal_matte_stackable_dining_chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cherry-wood-geometric-dining-chair",
    "name": "Cherry Wood Geometric Dining Chair",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cherry Wood Geometric Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-cherry-wood-geometric-dining-chair/cherry_wood_geometric_dining_chair.webp",
    "images": [
      "assets/products/chairs/cat-cherry-wood-geometric-dining-chair/cherry_wood_geometric_dining_chair.webp"
    ],
    "colors": []
  },
  {
    "id": "chrome-cafe-pedestal-table-base",
    "name": "Chrome Café Pedestal Table Base",
    "category": "cafe-tables",
    "type": "table",
    "material": "Chrome Plated Steel / Pedestal Design",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Chrome Cafe Pedestal Table Base combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/chrome-cafe-pedestal-table-base/chrome-cafe-pedestal-table-base - Angle Perspective.webp",
    "images": [
      "assets/products/cafe-tables/chrome-cafe-pedestal-table-base/chrome-cafe-pedestal-table-base - Angle Perspective.webp",
      "assets/products/cafe-tables/chrome-cafe-pedestal-table-base/chrome-cafe-pedestal-table-base - Corner Detail.webp",
      "assets/products/cafe-tables/chrome-cafe-pedestal-table-base/chrome-cafe-pedestal-table-base - Front View.webp",
      "assets/products/cafe-tables/chrome-cafe-pedestal-table-base/chrome-cafe-pedestal-table-base - Side View.webp",
      "assets/products/cafe-tables/chrome-cafe-pedestal-table-base/chrome-cafe-pedestal-table-base - Studio Showcase.webp"
    ],
    "colors": []
  },
  {
    "id": "chrome-spindle-back-dining-chair-with-wooden-seat",
    "name": "Chrome Spindle Back Dining Chair With Wooden Seat",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Chrome Spindle Back Dining Chair With Wooden Seat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/chrome-spindle-back-dining-chair-with-wooden-seat/Chrome Spindle Back Dining Chair with Wooden Seat.webp",
    "images": [
      "assets/products/cafe-chairs/chrome-spindle-back-dining-chair-with-wooden-seat/Chrome Spindle Back Dining Chair with Wooden Seat.webp"
    ],
    "colors": []
  },
  {
    "id": "black-spindle-chair-with-patterned-seat",
    "name": "Black Spindle-Back Chair with Patterned Seat",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Printed Fabric / Matte Black Steel",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A slim spindle-back chair in matte black steel with a rounded seat upholstered in a bold multicolour print. The tapered splayed legs and open back keep it light in busy café floors.",
    "img": "assets/products/cafe-chairs/black-spindle-chair-with-patterned-seat/Black Spindle-Back Chair with Patterned Seat - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/black-spindle-chair-with-patterned-seat/Black Spindle-Back Chair with Patterned Seat - Front View.webp",
      "assets/products/cafe-chairs/black-spindle-chair-with-patterned-seat/Black Spindle-Back Chair with Patterned Seat - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cognac-black-leather-sofa-set",
    "name": "Cognac Black Leather Sofa Set",
    "category": "sofas",
    "type": "sofa",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cognac Black Leather Sofa Set combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-cognac-black-leather-sofa-set/Cognac & Black Leather Sofa Set.webp",
    "images": [
      "assets/products/sofas/cat-cognac-black-leather-sofa-set/Cognac & Black Leather Sofa Set.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cognac-leather-armchair-with-black-frame",
    "name": "Cognac Leather Armchair With Black Frame",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cognac Leather Armchair With Black Frame combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-cognac-leather-armchair-with-black-frame/Cognac Leather Armchair with Black Frame.webp",
    "images": [
      "assets/products/chairs/cat-cognac-leather-armchair-with-black-frame/Cognac Leather Armchair with Black Frame.webp"
    ],
    "colors": []
  },
  {
    "id": "crimson-red-sculptural-designer-chair",
    "name": "Crimson Red Sculptural Designer Chair",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Crimson Red Sculptural Designer Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/crimson-red-sculptural-designer-chair/crimson_red_sculptural_designer_chair.webp",
    "images": [
      "assets/products/cafe-chairs/crimson-red-sculptural-designer-chair/crimson_red_sculptural_designer_chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cube-perforated-stacking-armchair",
    "name": "Cube Perforated Stacking Armchair",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Moulded Polypropylene",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A one-piece moulded polypropylene armchair with a perforated seat and back for airflow and rain drainage. Stacks for storage and holds its colour outdoors — built for café terraces and courtyards.",
    "img": "assets/products/cafe-chairs/cube-perforated-stacking-armchair/Cube Perforated Stacking Armchair - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/cube-perforated-stacking-armchair/Cube Perforated Stacking Armchair - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "da-70",
    "name": "DA-70 Hoop-Back Stacking Chair",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Faux Leather / Silver Powder-Coated Steel",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A compact stacking chair with a single bent-tube hoop back and a round padded seat in black faux leather. Light to move and stacks tight for busy cafés and canteens.",
    "img": "assets/products/cafe-chairs/da-70/DA-70 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/da-70/DA-70 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "da-71",
    "name": "DA-71 Backless Stacking Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Moulded Polypropylene / Chrome Steel",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A backless dining-height stool with a perforated black polypropylene seat on splayed chrome legs. Stacks vertically for storage in canteens and quick-service dining.",
    "img": "assets/products/cafe-bar-stools/da-71/DA-71 - Front View.webp",
    "images": [
      "assets/products/cafe-bar-stools/da-71/DA-71 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "da-72",
    "name": "DA-72 Round Padded Low Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Faux Leather / Chrome Steel",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A dining-height stool with a deep round cushion in black faux leather over a chrome tubular frame with a full ring base for foot support.",
    "img": "assets/products/cafe-bar-stools/da-72/DA-72 - Front View.webp",
    "images": [
      "assets/products/cafe-bar-stools/da-72/DA-72 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "da-73",
    "name": "DA-73 Perforated Low Stool — Burgundy",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Moulded Polypropylene / Chrome Steel",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A dining-height stool with a burgundy perforated polypropylene seat on a slim chrome frame with a ring base. Wipe-clean and light enough to reposition one-handed.",
    "img": "assets/products/cafe-bar-stools/da-73/DA-73 - Front View.webp",
    "images": [
      "assets/products/cafe-bar-stools/da-73/DA-73 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "da-74",
    "name": "DA-74 Counter-Height Stool — Blue",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Faux Leather / Chrome Steel",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A counter-height backless stool with a shaped blue faux-leather seat on a chrome frame with a wrap-around footrest. Sized for kitchen islands and counter service.",
    "img": "assets/products/cafe-bar-stools/da-74/DA-74 - Front View.webp",
    "images": [
      "assets/products/cafe-bar-stools/da-74/DA-74 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "da-75",
    "name": "DA-75 Bar-Height Stool — Burgundy",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Faux Leather / Chrome Steel",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A bar-height backless stool with a square burgundy faux-leather cushion on a tapered chrome frame with a double footrest rail. Built for bar counters and high tables.",
    "img": "assets/products/cafe-bar-stools/da-75/DA-75 - Front View.webp",
    "images": [
      "assets/products/cafe-bar-stools/da-75/DA-75 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-danish-teak-slatted-dining-chair",
    "name": "Danish Teak Slatted Dining Chair",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Danish Teak Slatted Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-danish-teak-slatted-dining-chair/danish_teak_slatted_dining_chair.webp",
    "images": [
      "assets/products/chairs/cat-danish-teak-slatted-dining-chair/danish_teak_slatted_dining_chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-mahogany-wooden-dining-chair",
    "name": "Dark Mahogany Wooden Dining Chair",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Mahogany Wooden Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-dark-mahogany-wooden-dining-chair/Dark Mahogany Wooden Dining Chair.webp",
    "images": [
      "assets/products/chairs/cat-dark-mahogany-wooden-dining-chair/Dark Mahogany Wooden Dining Chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-wood-frame-dining-chair-with-grey-seat",
    "name": "Charcoal Wood-Frame Armchair with Grey Seat",
    "category": "chairs",
    "type": "chair",
    "material": "Grey Fabric / Charcoal-Stained Ash Frame",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A low-slung armchair on a charcoal-stained ash frame, with sculpted arms flowing into the back legs and a padded grey fabric seat and backrest. Comfortable enough for long meals or meetings.",
    "img": "assets/products/chairs/cat-dark-wood-frame-dining-chair-with-grey-seat/Dark Wood Frame Dining Chair with Grey Seat.webp",
    "images": [
      "assets/products/chairs/cat-dark-wood-frame-dining-chair-with-grey-seat/Dark Wood Frame Dining Chair with Grey Seat.webp"
    ],
    "colors": []
  },
  {
    "id": "dbc-151",
    "name": "DBC-151 Banquet Chair — Burgundy & Gold",
    "category": "cafe-banquet-equipment",
    "type": "banquet chair",
    "material": "Burgundy Fabric / Gold Powder-Coated Steel",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A stacking banquet chair with a crown-shaped padded back and a deep foam seat in burgundy fabric, on a gold powder-coated steel frame. Stacks for storage between functions.",
    "img": "assets/products/cafe-banquet-equipment/dbc-151/DBC-151 - Front View.webp",
    "images": [
      "assets/products/cafe-banquet-equipment/dbc-151/DBC-151 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dbc-152",
    "name": "DBC-152 Banquet Chair — Red Floral",
    "category": "cafe-banquet-equipment",
    "type": "banquet chair",
    "material": "Patterned Fabric / Black Powder-Coated Steel",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A stacking banquet chair upholstered in a red and cream floral weave over a black powder-coated frame. The patterned fabric hides marks well in high-turnover halls.",
    "img": "assets/products/cafe-banquet-equipment/dbc-152/DBC-152 - Front View.webp",
    "images": [
      "assets/products/cafe-banquet-equipment/dbc-152/DBC-152 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dbc-153",
    "name": "DBC-153 Banquet Chair — Lilac & Gold",
    "category": "cafe-banquet-equipment",
    "type": "banquet chair",
    "material": "Lilac Fabric / Gold Powder-Coated Steel",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A stacking banquet chair in soft lilac fabric with a rounded padded back, on a gold powder-coated steel frame. Suited to wedding and reception seating.",
    "img": "assets/products/cafe-banquet-equipment/dbc-153/DBC-153 - Front View.webp",
    "images": [
      "assets/products/cafe-banquet-equipment/dbc-153/DBC-153 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dbc-154",
    "name": "DBC-154 Banquet Chair Trolley",
    "category": "cafe-banquet-equipment",
    "type": "banquet equipment",
    "material": "Powder-Coated Steel / Red Canvas",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A wheeled trolley for moving stacks of banquet chairs. The red canvas cradle protects upholstery in transit and the long handle gives control when loaded.",
    "img": "assets/products/cafe-banquet-equipment/dbc-154/DBC-154 - Front View.webp",
    "images": [
      "assets/products/cafe-banquet-equipment/dbc-154/DBC-154 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dbc-155",
    "name": "DBC-155 Modular Stage Platform with Skirting",
    "category": "cafe-banquet-equipment",
    "type": "banquet equipment",
    "material": "Carpeted Deck / Pleated Velvet Skirting",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A modular banquet stage platform with a red carpeted deck, gold trim edge and pleated velvet skirting. Sections join to build head tables, podiums and performance risers.",
    "img": "assets/products/cafe-banquet-equipment/dbc-155/DBC-155 - Front View.webp",
    "images": [
      "assets/products/cafe-banquet-equipment/dbc-155/DBC-155 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dbc-156",
    "name": "DBC-156 Banquet Chair — Sky Blue & Gold",
    "category": "cafe-banquet-equipment",
    "type": "banquet chair",
    "material": "Sky Blue Fabric / Gold Powder-Coated Steel",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A stacking banquet chair with a crown-shaped back in sky blue fabric on a gold powder-coated steel frame. Reinforced joints for daily banquet use.",
    "img": "assets/products/cafe-banquet-equipment/dbc-156/DBC-156 - Front View.webp",
    "images": [
      "assets/products/cafe-banquet-equipment/dbc-156/DBC-156 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dbc-157",
    "name": "DBC-157 Banquet Chair — Burgundy & Gold",
    "category": "cafe-banquet-equipment",
    "type": "banquet chair",
    "material": "Burgundy Fabric / Gold Powder-Coated Steel",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A stacking banquet chair in burgundy fabric with a gold powder-coated steel frame and a padded crown back. A hall standard for conferences and receptions.",
    "img": "assets/products/cafe-banquet-equipment/dbc-157/DBC-157 - Front View.webp",
    "images": [
      "assets/products/cafe-banquet-equipment/dbc-157/DBC-157 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dbc-158",
    "name": "DBC-158 Banquet Chair — Aubergine & Gold",
    "category": "cafe-banquet-equipment",
    "type": "banquet chair",
    "material": "Aubergine Fabric / Gold Powder-Coated Steel",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A stacking banquet chair upholstered in deep aubergine fabric over a gold powder-coated steel frame, with a padded seat and crown back.",
    "img": "assets/products/cafe-banquet-equipment/dbc-158/DBC-158 - Front View.webp",
    "images": [
      "assets/products/cafe-banquet-equipment/dbc-158/DBC-158 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dbc-159",
    "name": "DBC-159 Banquet Chair — Burgundy Velvet & Chrome",
    "category": "cafe-banquet-equipment",
    "type": "banquet chair",
    "material": "Burgundy Velvet / Polished Chrome Steel",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A banquet chair with a square padded back and seat in burgundy velvet, framed in polished chrome. A dressier option for hotel ballrooms and private dining.",
    "img": "assets/products/cafe-banquet-equipment/dbc-159/DBC-159 - Front View.webp",
    "images": [
      "assets/products/cafe-banquet-equipment/dbc-159/DBC-159 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dbc-160",
    "name": "DBC-160 Chiavari Chair — Gold",
    "category": "cafe-banquet-equipment",
    "type": "banquet chair",
    "material": "Gold-Finished Resin / Reinforced Steel Core",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The classic Chiavari banquet chair with a bamboo-turned spindle back, in a gold finish over a reinforced core. Stackable, and the default choice for weddings and gala seating.",
    "img": "assets/products/cafe-banquet-equipment/dbc-160/DBC-160 - Front View.webp",
    "images": [
      "assets/products/cafe-banquet-equipment/dbc-160/DBC-160 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dbc-161",
    "name": "DBC-161 Round Table Trolley",
    "category": "cafe-banquet-equipment",
    "type": "banquet equipment",
    "material": "Powder-Coated Steel / Padded Rails",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A transport trolley for folding round banquet tables. Upright padded rails hold tables on edge and heavy-duty castors take the load across ballroom floors.",
    "img": "assets/products/cafe-banquet-equipment/dbc-161/DBC-161 - Front View.webp",
    "images": [
      "assets/products/cafe-banquet-equipment/dbc-161/DBC-161 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dbc-162",
    "name": "DBC-162 Carpeted Platform Trolley",
    "category": "cafe-banquet-equipment",
    "type": "banquet equipment",
    "material": "Powder-Coated Steel / Carpeted Deck",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A flatbed platform trolley with a red carpeted deck and a single push handle, for shifting linens, staging and equipment without marking finishes.",
    "img": "assets/products/cafe-banquet-equipment/dbc-162/DBC-162 - Front View.webp",
    "images": [
      "assets/products/cafe-banquet-equipment/dbc-162/DBC-162 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dbc-163",
    "name": "DBC-163 Retractable Belt Queue Post",
    "category": "cafe-banquet-equipment",
    "type": "banquet equipment",
    "material": "Polished Stainless Steel / Retractable Webbing Belt",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A queue-control post in polished stainless steel with a retractable red webbing belt. Weighted base for stability; links post to post to shape entry lines.",
    "img": "assets/products/cafe-banquet-equipment/dbc-163/DBC-163 - Front View.webp",
    "images": [
      "assets/products/cafe-banquet-equipment/dbc-163/DBC-163 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dbc-164",
    "name": "DBC-164 Velvet Rope Barrier Post",
    "category": "cafe-banquet-equipment",
    "type": "banquet equipment",
    "material": "Polished Chrome Steel / Velvet Rope",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A ball-top barrier post in polished chrome with a red velvet rope and clip ends. The formal option for entrances, red carpets and VIP areas.",
    "img": "assets/products/cafe-banquet-equipment/dbc-164/DBC-164 - Front View.webp",
    "images": [
      "assets/products/cafe-banquet-equipment/dbc-164/DBC-164 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dbc-165",
    "name": "DBC-165 Two-Tier Stage Step",
    "category": "cafe-banquet-equipment",
    "type": "banquet equipment",
    "material": "Powder-Coated Steel / Carpeted Treads",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A two-tier access step with red carpeted treads on a black powder-coated steel frame, giving safe access on and off a banquet stage platform.",
    "img": "assets/products/cafe-banquet-equipment/dbc-165/DBC-165 - Front View.webp",
    "images": [
      "assets/products/cafe-banquet-equipment/dbc-165/DBC-165 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-79",
    "name": "DMC-79 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 079 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-79/DMC-79 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-79/DMC-79 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-80",
    "name": "DMC-80 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 080 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-80/DMC-80 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-80/DMC-80 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-81",
    "name": "DMC-81 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 083 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-81/DMC-81 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-81/DMC-81 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-82",
    "name": "DMC-82 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 085 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-82/DMC-82 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-82/DMC-82 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-83",
    "name": "DMC-83 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 088 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-83/DMC-83 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-83/DMC-83 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-84",
    "name": "DMC-84 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 091 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-84/DMC-84 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-84/DMC-84 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-85",
    "name": "DMC-85 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 093 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-85/DMC-85 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-85/DMC-85 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-86",
    "name": "DMC-86 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 098 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-86/DMC-86 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-86/DMC-86 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-87",
    "name": "DMC-87 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 104 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-87/DMC-87 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-87/DMC-87 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-88",
    "name": "DMC-88 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 105 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-88/DMC-88 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-88/DMC-88 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-89",
    "name": "DMC-89 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 107 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-89/DMC-89 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-89/DMC-89 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-90",
    "name": "DMC-90 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 108 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-90/DMC-90 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-90/DMC-90 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-91",
    "name": "DMC-91 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 114 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-91/DMC-91 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-91/DMC-91 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-92",
    "name": "DMC-92 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 116 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-92/DMC-92 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-92/DMC-92 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-93",
    "name": "DMC-93 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 118 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-93/DMC-93 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-93/DMC-93 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-94",
    "name": "DMC-94 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 119 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-94/DMC-94 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-94/DMC-94 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-95",
    "name": "DMC-95 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 120 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-95/DMC-95 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-95/DMC-95 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-96",
    "name": "DMC-96 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 121 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-96/DMC-96 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-96/DMC-96 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-97",
    "name": "DMC-97 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 123 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-97/DMC-97 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-97/DMC-97 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-98",
    "name": "DMC-98 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 125 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-98/DMC-98 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-98/DMC-98 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-99",
    "name": "DMC-99 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 128 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-99/DMC-99 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-99/DMC-99 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-100",
    "name": "DMC-100 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 129 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-100/DMC-100 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-100/DMC-100 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-101",
    "name": "DMC-101 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 130 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-101/DMC-101 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-101/DMC-101 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-102",
    "name": "DMC-102 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 132 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-102/DMC-102 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-102/DMC-102 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-103",
    "name": "DMC-103 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 134 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-103/DMC-103 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-103/DMC-103 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-104",
    "name": "DMC-104 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 135 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-104/DMC-104 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-104/DMC-104 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-105",
    "name": "DMC-105 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 136 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-105/DMC-105 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-105/DMC-105 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-106",
    "name": "DMC-106 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 137 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-106/DMC-106 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-106/DMC-106 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-107",
    "name": "DMC-107 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 138 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-107/DMC-107 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-107/DMC-107 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-108",
    "name": "DMC-108 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 140 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-108/DMC-108 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-108/DMC-108 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-109",
    "name": "DMC-109 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 141 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-109/DMC-109 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-109/DMC-109 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-110",
    "name": "DMC-110 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 143 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-110/DMC-110 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-110/DMC-110 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-111",
    "name": "DMC-111 Mesh-Back Nesting Training Chair",
    "category": "office-chairs",
    "type": "chair",
    "material": "Mesh Back / Fabric Seat / Powder-Coated Steel Frame",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A nesting training chair with a breathable mesh back, padded fabric seat and fixed arms on a silver powder-coated frame. The seat folds so chairs nest together for storage between sessions.",
    "img": "assets/products/office-chairs/dmc-111/DMC-111 - Front View.webp",
    "images": [
      "assets/products/office-chairs/dmc-111/DMC-111 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-112",
    "name": "DMC-112 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 149 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-112/DMC-112 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-112/DMC-112 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-113",
    "name": "DMC-113 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 150 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-113/DMC-113 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-113/DMC-113 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-114",
    "name": "DMC-114 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 157 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-114/DMC-114 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-114/DMC-114 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-115",
    "name": "DMC-115 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 158 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-115/DMC-115 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-115/DMC-115 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-116",
    "name": "DMC-116 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 247 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-116/DMC-116 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-116/DMC-116 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-117",
    "name": "DMC-117 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 248 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-117/DMC-117 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-117/DMC-117 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-118",
    "name": "DMC-118 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 249 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-118/DMC-118 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-118/DMC-118 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-119",
    "name": "DMC-119 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 250 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-119/DMC-119 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-119/DMC-119 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-120",
    "name": "DMC-120 Upholstered Wood-Frame Armchair",
    "category": "chairs",
    "type": "chair",
    "material": "Faux Leather / Solid Ash Frame",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A curved-back armchair upholstered in white faux leather on a tapered solid ash frame. The wrap-around back doubles as armrests — suited to lounges, meeting corners and dining use.",
    "img": "assets/products/chairs/dmc-120/DMC-120 - Front View.webp",
    "images": [
      "assets/products/chairs/dmc-120/DMC-120 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-121",
    "name": "DMC-121 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 276 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-121/DMC-121 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-121/DMC-121 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-122",
    "name": "DMC-122 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 277 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-122/DMC-122 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-122/DMC-122 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dmc-123",
    "name": "DMC-123 Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Cafe Chair Model 278 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-123/DMC-123 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dmc-123/DMC-123 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dpc-3",
    "name": "DPC-3 Plastic Chair",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dpc Series Plastic Chair Model 003 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dpc-3/DPC-3 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dpc-3/DPC-3 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dpc-4",
    "name": "DPC-4 Plastic Chair",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dpc Series Plastic Chair Model 004 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dpc-4/DPC-4 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dpc-4/DPC-4 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dpc-5",
    "name": "DPC-5 Plastic Chair",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dpc Series Plastic Chair Model 005 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dpc-5/DPC-5 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dpc-5/DPC-5 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dpc-6",
    "name": "DPC-6 Plastic Chair",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dpc Series Plastic Chair Model 006 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dpc-6/DPC-6 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dpc-6/DPC-6 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dpc-7",
    "name": "DPC-7 Plastic Chair",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dpc Series Plastic Chair Model 007 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dpc-7/DPC-7 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dpc-7/DPC-7 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dpc-8",
    "name": "DPC-8 Plastic Chair",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dpc Series Plastic Chair Model 008 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dpc-8/DPC-8 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dpc-8/DPC-8 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dpc-9",
    "name": "DPC-9 Plastic Chair",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dpc Series Plastic Chair Model 009 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dpc-9/DPC-9 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dpc-9/DPC-9 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dpc-10",
    "name": "DPC-10 Plastic Chair",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dpc Series Plastic Chair Model 020 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dpc-10/DPC-10 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dpc-10/DPC-10 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dpc-11",
    "name": "DPC-11 Plastic Chair",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dpc Series Plastic Chair Model 024 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dpc-11/DPC-11 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dpc-11/DPC-11 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dpc-12",
    "name": "DPC-12 Plastic Chair",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dpc Series Plastic Chair Model 179 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dpc-12/DPC-12 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dpc-12/DPC-12 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dpc-13",
    "name": "DPC-13 Plastic Chair",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dpc Series Plastic Chair Model 180 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dpc-13/DPC-13 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dpc-13/DPC-13 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dpc-14",
    "name": "DPC-14 Plastic Chair",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dpc Series Plastic Chair Model 184 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dpc-14/DPC-14 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dpc-14/DPC-14 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dpc-15",
    "name": "DPC-15 Plastic Chair",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dpc Series Plastic Chair Model 186 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dpc-15/DPC-15 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dpc-15/DPC-15 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dpc-16",
    "name": "DPC-16 Plastic Chair",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dpc Series Plastic Chair Model 187 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dpc-16/DPC-16 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dpc-16/DPC-16 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dpc-17",
    "name": "DPC-17 Plastic Chair",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dpc Series Plastic Chair Model 188 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dpc-17/DPC-17 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dpc-17/DPC-17 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dpc-18",
    "name": "DPC-18 Plastic Chair",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dpc Series Plastic Chair Model 189 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dpc-18/DPC-18 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dpc-18/DPC-18 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dwc-26",
    "name": "DWC-26 Wooden Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dwc Series Wooden Chair Model 026 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dwc-26/DWC-26 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dwc-26/DWC-26 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dwc-27",
    "name": "DWC-27 Wooden Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dwc Series Wooden Chair Model 027 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dwc-27/DWC-27 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dwc-27/DWC-27 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dwc-28",
    "name": "DWC-28 Wooden Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dwc Series Wooden Chair Model 028 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dwc-28/DWC-28 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dwc-28/DWC-28 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dwc-29",
    "name": "DWC-29 Wooden Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dwc Series Wooden Chair Model 029 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dwc-29/DWC-29 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dwc-29/DWC-29 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dwc-30",
    "name": "DWC-30 Wooden Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dwc Series Wooden Chair Model 030 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dwc-30/DWC-30 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dwc-30/DWC-30 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dwc-31",
    "name": "DWC-31 Wooden Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dwc Series Wooden Chair Model 031 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dwc-31/DWC-31 - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/dwc-31/DWC-31 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-espresso-ladderback-dining-chair",
    "name": "Espresso Ladderback Dining Chair",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Espresso Ladderback Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-espresso-ladderback-dining-chair/espresso_ladderback_dining_chair.webp",
    "images": [
      "assets/products/chairs/cat-espresso-ladderback-dining-chair/espresso_ladderback_dining_chair.webp"
    ],
    "colors": []
  },
  {
    "id": "faceted-gray-molded-dining-chair",
    "name": "Faceted Gray Molded Dining Chair",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Faceted Gray Molded Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/faceted-gray-molded-dining-chair/faceted_gray_molded_dining_chair.webp",
    "images": [
      "assets/products/cafe-chairs/faceted-gray-molded-dining-chair/faceted_gray_molded_dining_chair.webp"
    ],
    "colors": []
  },
  {
    "id": "white-spindle-back-counter-stool",
    "name": "White Spindle-Back Counter Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Powder-Coated Steel",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A counter-height stool with a Windsor-style spindle back and a shaped saddle seat, finished in matte white with a square footrest rail. Suits kitchen islands and counter service.",
    "img": "assets/products/cafe-bar-stools/white-spindle-back-counter-stool/White Spindle-Back Counter Stool - Front View.webp",
    "images": [
      "assets/products/cafe-bar-stools/white-spindle-back-counter-stool/White Spindle-Back Counter Stool - Front View.webp",
      "assets/products/cafe-bar-stools/white-spindle-back-counter-stool/White Spindle-Back Counter Stool - Front View.webp",
      "assets/products/cafe-bar-stools/white-spindle-back-counter-stool/White Spindle-Back Counter Stool - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-futuristic-cantilever-executive-desk",
    "name": "Futuristic Cantilever Executive Desk",
    "category": "office-workstations",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Futuristic Cantilever Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-futuristic-cantilever-executive-desk/futuristic_cantilever_executive_desk.webp",
    "images": [
      "assets/products/office-workstations/cat-futuristic-cantilever-executive-desk/futuristic_cantilever_executive_desk.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-grey-patterned-fabric-dining-chair",
    "name": "Grey Patterned Fabric Dining Chair",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Grey Patterned Fabric Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-grey-patterned-fabric-dining-chair/Grey Patterned Fabric Dining Chair.webp",
    "images": [
      "assets/products/chairs/cat-grey-patterned-fabric-dining-chair/Grey Patterned Fabric Dining Chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-grey-sculptural-armchair-with-black-frame",
    "name": "Grey Sculptural Armchair With Black Frame",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Grey Sculptural Armchair With Black Frame combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-grey-sculptural-armchair-with-black-frame/Grey Sculptural Armchair with Black Frame.webp",
    "images": [
      "assets/products/chairs/cat-grey-sculptural-armchair-with-black-frame/Grey Sculptural Armchair with Black Frame.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-highback-wood-dining-chair-with-grey-cushion",
    "name": "Highback Wood Dining Chair With Grey Cushion",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Highback Wood Dining Chair With Grey Cushion combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-highback-wood-dining-chair-with-grey-cushion/Highback Wood Dining Chair with Grey Cushion.webp",
    "images": [
      "assets/products/chairs/cat-highback-wood-dining-chair-with-grey-cushion/Highback Wood Dining Chair with Grey Cushion.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-light-oak-ladder-back-dining-chair-with-cream-seat",
    "name": "Light Oak Ladder Back Dining Chair With Cream Seat",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Light Oak Ladder Back Dining Chair With Cream Seat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-light-oak-ladder-back-dining-chair-with-cream-seat/Light Oak Ladder Back Dining Chair with Cream Seat.webp",
    "images": [
      "assets/products/chairs/cat-light-oak-ladder-back-dining-chair-with-cream-seat/Light Oak Ladder Back Dining Chair with Cream Seat.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-light-wood-dining-chair-with-slatted-back",
    "name": "Light Wood Dining Chair With Slatted Back",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Light Wood Dining Chair With Slatted Back combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-light-wood-dining-chair-with-slatted-back/Light Wood Dining Chair with Slatted Back.webp",
    "images": [
      "assets/products/chairs/cat-light-wood-dining-chair-with-slatted-back/Light Wood Dining Chair with Slatted Back.webp"
    ],
    "colors": []
  },
  {
    "id": "lime-green-lattice-patio-chair",
    "name": "Lime Green Lattice Patio Chair",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Lime Green Lattice Patio Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/lime-green-lattice-patio-chair/lime_green_lattice_patio_chair.webp",
    "images": [
      "assets/products/cafe-chairs/lime-green-lattice-patio-chair/lime_green_lattice_patio_chair.webp"
    ],
    "colors": []
  },
  {
    "id": "matte-black-sleek-molded-dining-chair",
    "name": "Matte Black Sleek Molded Dining Chair",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Matte Black Sleek Molded Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/matte-black-sleek-molded-dining-chair/matte_black_sleek_molded_dining_chair.webp",
    "images": [
      "assets/products/cafe-chairs/matte-black-sleek-molded-dining-chair/matte_black_sleek_molded_dining_chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-mid-century-teak-dining-chairs-row-with-tweed-seats",
    "name": "Mid Century Teak Dining Chairs Row With Tweed Seats",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Mid Century Teak Dining Chairs Row With Tweed Seats combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-mid-century-teak-dining-chairs-row-with-tweed-seats/Mid-Century Teak Dining Chairs Row with Tweed Seats.webp",
    "images": [
      "assets/products/chairs/cat-mid-century-teak-dining-chairs-row-with-tweed-seats/Mid-Century Teak Dining Chairs Row with Tweed Seats.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-mid-century-teak-dining-chairs-set-with-blue-seats",
    "name": "Mid Century Teak Dining Chairs Set With Blue Seats",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Mid Century Teak Dining Chairs Set With Blue Seats combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-mid-century-teak-dining-chairs-set-with-blue-seats/Mid-Century Teak Dining Chairs Set with Blue Seats.webp",
    "images": [
      "assets/products/chairs/cat-mid-century-teak-dining-chairs-set-with-blue-seats/Mid-Century Teak Dining Chairs Set with Blue Seats.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-mid-century-teak-dining-chairs-set-with-mustard-seats",
    "name": "Mid Century Teak Dining Chairs Set With Mustard Seats",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Mid Century Teak Dining Chairs Set With Mustard Seats combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-mid-century-teak-dining-chairs-set-with-mustard-seats/Mid-Century Teak Dining Chairs Set with Mustard Seats.webp",
    "images": [
      "assets/products/chairs/cat-mid-century-teak-dining-chairs-set-with-mustard-seats/Mid-Century Teak Dining Chairs Set with Mustard Seats.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-mid-century-teak-dining-chairs-set-with-navy-seats",
    "name": "Mid Century Teak Dining Chairs Set With Navy Seats",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Mid Century Teak Dining Chairs Set With Navy Seats combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-mid-century-teak-dining-chairs-set-with-navy-seats/Mid-Century Teak Dining Chairs Set with Navy Seats.webp",
    "images": [
      "assets/products/chairs/cat-mid-century-teak-dining-chairs-set-with-navy-seats/Mid-Century Teak Dining Chairs Set with Navy Seats.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-mid-century-teak-dining-chairs-set-with-navy-seats-b",
    "name": "Mid Century Teak Dining Chairs Set With Navy Seats B",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Mid Century Teak Dining Chairs Set With Navy Seats B combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-mid-century-teak-dining-chairs-set-with-navy-seats-b/Mid-Century Teak Dining Chairs Set with Navy Seats B.webp",
    "images": [
      "assets/products/chairs/cat-mid-century-teak-dining-chairs-set-with-navy-seats-b/Mid-Century Teak Dining Chairs Set with Navy Seats B.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-midcentury-walnut-dining-chair-set",
    "name": "Midcentury Walnut Dining Chair Set",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Midcentury Walnut Dining Chair Set combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-midcentury-walnut-dining-chair-set/midcentury_walnut_dining_chair_set.webp",
    "images": [
      "assets/products/chairs/cat-midcentury-walnut-dining-chair-set/midcentury_walnut_dining_chair_set.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-mission-oak-redvelvet-dining-chairs",
    "name": "Mission Oak Redvelvet Dining Chairs",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Mission Oak Redvelvet Dining Chairs combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-mission-oak-redvelvet-dining-chairs/mission_oak_redvelvet_dining_chairs.webp",
    "images": [
      "assets/products/chairs/cat-mission-oak-redvelvet-dining-chairs/mission_oak_redvelvet_dining_chairs.webp"
    ],
    "colors": []
  },
  {
    "id": "modern-black-molded-shell-wire-base-dining-chair",
    "name": "Modern Black Molded Shell Wire Base Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Modern Black Molded Shell Wire Base Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/modern-black-molded-shell-wire-base-dining-chair/Black Molded Shell Wire Base Dining Chair.webp",
    "images": [
      "assets/products/cafe-chairs/modern-black-molded-shell-wire-base-dining-chair/Black Molded Shell Wire Base Dining Chair.webp"
    ],
    "colors": []
  },
  {
    "id": "modern-white-molded-shell-dark-wood-legs-dining-chair",
    "name": "Modern White Molded Shell Dark Wood Legs Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Modern White Molded Shell Dark Wood Legs Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/modern-white-molded-shell-dark-wood-legs-dining-chair/White Molded Shell Dark Wood Legs Dining Chair.webp",
    "images": [
      "assets/products/cafe-chairs/modern-white-molded-shell-dark-wood-legs-dining-chair/White Molded Shell Dark Wood Legs Dining Chair.webp"
    ],
    "colors": []
  },
  {
    "id": "modern-white-molded-shell-wooden-eiffel-legs-dining-chair",
    "name": "Modern White Molded Shell Wooden Eiffel Legs Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Modern White Molded Shell Wooden Eiffel Legs Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/modern-white-molded-shell-wooden-eiffel-legs-dining-chair/White Molded Shell Wooden Eiffel Legs Dining Chair.webp",
    "images": [
      "assets/products/cafe-chairs/modern-white-molded-shell-wooden-eiffel-legs-dining-chair/White Molded Shell Wooden Eiffel Legs Dining Chair.webp"
    ],
    "colors": []
  },
  {
    "id": "nordic-black-and-wood-dining-chair",
    "name": "Nordic Black And Wood Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Nordic Black And Wood Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/nordic-black-and-wood-dining-chair/nordic_black_and_wood_dining_chair.webp",
    "images": [
      "assets/products/cafe-chairs/nordic-black-and-wood-dining-chair/nordic_black_and_wood_dining_chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-oak-bluepad-slatted-dining-chair",
    "name": "Oak Bluepad Slatted Dining Chair",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Oak Bluepad Slatted Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-oak-bluepad-slatted-dining-chair/oak_bluepad_slatted_dining_chair.webp",
    "images": [
      "assets/products/chairs/cat-oak-bluepad-slatted-dining-chair/oak_bluepad_slatted_dining_chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-oak-highback-slatted-dining-chair",
    "name": "Oak Highback Slatted Dining Chair",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Oak Highback Slatted Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-oak-highback-slatted-dining-chair/oak_highback_slatted_dining_chair.webp",
    "images": [
      "assets/products/chairs/cat-oak-highback-slatted-dining-chair/oak_highback_slatted_dining_chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-oak-redpad-ladderback-dining-chair",
    "name": "Oak Redpad Ladderback Dining Chair",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Oak Redpad Ladderback Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-oak-redpad-ladderback-dining-chair/oak_redpad_ladderback_dining_chair.webp",
    "images": [
      "assets/products/chairs/cat-oak-redpad-ladderback-dining-chair/oak_redpad_ladderback_dining_chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-oak-slatted-padded-dining-chair",
    "name": "Oak Slatted Padded Dining Chair",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Oak Slatted Padded Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-oak-slatted-padded-dining-chair/oak_slatted_padded_dining_chair.webp",
    "images": [
      "assets/products/chairs/cat-oak-slatted-padded-dining-chair/oak_slatted_padded_dining_chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-oak-xback-dining-chair",
    "name": "Oak Xback Dining Chair",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Oak Xback Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-oak-xback-dining-chair/oak_xback_dining_chair.webp",
    "images": [
      "assets/products/chairs/cat-oak-xback-dining-chair/oak_xback_dining_chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-pair-of-dark-wood-dining-chairs-with-black-leather",
    "name": "Pair Of Dark Wood Dining Chairs With Black Leather",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Pair Of Dark Wood Dining Chairs With Black Leather combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-pair-of-dark-wood-dining-chairs-with-black-leather/Pair of Dark Wood Dining Chairs with Black Leather.webp",
    "images": [
      "assets/products/chairs/cat-pair-of-dark-wood-dining-chairs-with-black-leather/Pair of Dark Wood Dining Chairs with Black Leather.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-pair-of-mustard-yellow-armchairs-with-black-frame",
    "name": "Pair Of Mustard Yellow Armchairs With Black Frame",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Pair Of Mustard Yellow Armchairs With Black Frame combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-pair-of-mustard-yellow-armchairs-with-black-frame/Pair of Mustard Yellow Armchairs with Black Frame.webp",
    "images": [
      "assets/products/chairs/cat-pair-of-mustard-yellow-armchairs-with-black-frame/Pair of Mustard Yellow Armchairs with Black Frame.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-pair-of-teak-dining-chairs-with-green-seats",
    "name": "Pair Of Teak Dining Chairs With Green Seats",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Pair Of Teak Dining Chairs With Green Seats combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-pair-of-teak-dining-chairs-with-green-seats/Pair of Teak Dining Chairs with Green Seats - Front View.webp",
    "images": [
      "assets/products/chairs/cat-pair-of-teak-dining-chairs-with-green-seats/Pair of Teak Dining Chairs with Green Seats - Front View.webp",
      "assets/products/chairs/cat-pair-of-teak-dining-chairs-with-green-seats/Pair of Teak Dining Chairs with Green Seats - Side View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-pair-of-teak-dining-chairs-with-turquoise-seats",
    "name": "Pair Of Teak Dining Chairs With Turquoise Seats",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Pair Of Teak Dining Chairs With Turquoise Seats combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-pair-of-teak-dining-chairs-with-turquoise-seats/Pair of Teak Dining Chairs with Turquoise Seats.webp",
    "images": [
      "assets/products/chairs/cat-pair-of-teak-dining-chairs-with-turquoise-seats/Pair of Teak Dining Chairs with Turquoise Seats.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-row-of-4-teak-dining-chairs-with-black-seats",
    "name": "Row Of 4 Teak Dining Chairs With Black Seats",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Row Of 4 Teak Dining Chairs With Black Seats combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-row-of-4-teak-dining-chairs-with-black-seats/Row of 4 Teak Dining Chairs with Black Seats.webp",
    "images": [
      "assets/products/chairs/cat-row-of-4-teak-dining-chairs-with-black-seats/Row of 4 Teak Dining Chairs with Black Seats.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-row-of-6-teak-dining-chairs-with-grey-seats-b",
    "name": "Row Of 6 Teak Dining Chairs With Grey Seats B",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Row Of 6 Teak Dining Chairs With Grey Seats B combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-row-of-6-teak-dining-chairs-with-grey-seats-b/Row of 6 Teak Dining Chairs with Grey Seats B.webp",
    "images": [
      "assets/products/chairs/cat-row-of-6-teak-dining-chairs-with-grey-seats-b/Row of 6 Teak Dining Chairs with Grey Seats B.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-row-of-8-teak-dining-chairs-with-grey-seats",
    "name": "Row Of 8 Teak Dining Chairs With Grey Seats",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Row Of 8 Teak Dining Chairs With Grey Seats combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-row-of-8-teak-dining-chairs-with-grey-seats/Row of 8 Teak Dining Chairs with Grey Seats.webp",
    "images": [
      "assets/products/chairs/cat-row-of-8-teak-dining-chairs-with-grey-seats/Row of 8 Teak Dining Chairs with Grey Seats.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-row-of-teak-dining-chairs-with-beige-seats",
    "name": "Row Of Teak Dining Chairs With Beige Seats",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Row Of Teak Dining Chairs With Beige Seats combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-row-of-teak-dining-chairs-with-beige-seats/Row of Teak Dining Chairs with Beige Seats.webp",
    "images": [
      "assets/products/chairs/cat-row-of-teak-dining-chairs-with-beige-seats/Row of Teak Dining Chairs with Beige Seats.webp"
    ],
    "colors": []
  },
  {
    "id": "rust-geometric-molded-chair",
    "name": "Rust Geometric Molded Chair",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Rust Geometric Molded Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/rust-geometric-molded-chair/rust_geometric_molded_chair.webp",
    "images": [
      "assets/products/cafe-chairs/rust-geometric-molded-chair/rust_geometric_molded_chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-rustic-solid-wood-dining-chair",
    "name": "Rustic Solid Wood Dining Chair",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Rustic Solid Wood Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-rustic-solid-wood-dining-chair/Rustic Solid Wood Dining Chair.webp",
    "images": [
      "assets/products/chairs/cat-rustic-solid-wood-dining-chair/Rustic Solid Wood Dining Chair.webp"
    ],
    "colors": []
  },
  {
    "id": "scandinavian-table-base-black-cross-frame-with-wooden-legs",
    "name": "Scandinavian Table Base Black Cross Frame With Wooden Legs",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Scandinavian Table Base Black Cross Frame With Wooden Legs combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/scandinavian-table-base-black-cross-frame-with-wooden-legs/Scandinavian Table Base Black Cross Frame with Wooden Legs.webp",
    "images": [
      "assets/products/cafe-tables/scandinavian-table-base-black-cross-frame-with-wooden-legs/Scandinavian Table Base Black Cross Frame with Wooden Legs.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-scandinavian-walnut-dining-chair",
    "name": "Scandinavian Walnut Dining Chair",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Scandinavian Walnut Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-scandinavian-walnut-dining-chair/Scandinavian Walnut Dining Chair.webp",
    "images": [
      "assets/products/chairs/cat-scandinavian-walnut-dining-chair/Scandinavian Walnut Dining Chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-scandinavian-wood-dining-chair-with-sage-cushion",
    "name": "Scandinavian Wood Dining Chair With Sage Cushion",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Scandinavian Wood Dining Chair With Sage Cushion combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-scandinavian-wood-dining-chair-with-sage-cushion/Scandinavian Wood Dining Chair with Sage Cushion.webp",
    "images": [
      "assets/products/chairs/cat-scandinavian-wood-dining-chair-with-sage-cushion/Scandinavian Wood Dining Chair with Sage Cushion.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-sculptural-walnut-dining-chair-with-white-seat",
    "name": "Sculptural Walnut Dining Chair With White Seat",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Sculptural Walnut Dining Chair With White Seat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-sculptural-walnut-dining-chair-with-white-seat/Sculptural Walnut Dining Chair with White Seat.webp",
    "images": [
      "assets/products/chairs/cat-sculptural-walnut-dining-chair-with-white-seat/Sculptural Walnut Dining Chair with White Seat.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-sculptural-wood-dining-chair-with-cream-cushion",
    "name": "Sculptural Wood Dining Chair With Cream Cushion",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Sculptural Wood Dining Chair With Cream Cushion combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-sculptural-wood-dining-chair-with-cream-cushion/Sculptural Wood Dining Chair with Cream Cushion.webp",
    "images": [
      "assets/products/chairs/cat-sculptural-wood-dining-chair-with-cream-cushion/Sculptural Wood Dining Chair with Cream Cushion.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-set-of-6-teak-dining-chairs-with-brown-seats",
    "name": "Set Of 6 Teak Dining Chairs With Brown Seats",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Set Of 6 Teak Dining Chairs With Brown Seats combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-set-of-6-teak-dining-chairs-with-brown-seats/Set of 6 Teak Dining Chairs with Brown Seats.webp",
    "images": [
      "assets/products/chairs/cat-set-of-6-teak-dining-chairs-with-brown-seats/Set of 6 Teak Dining Chairs with Brown Seats.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-set-of-6-teak-dining-chairs-with-olive-green-seats",
    "name": "Set Of 6 Teak Dining Chairs With Olive Green Seats",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Set Of 6 Teak Dining Chairs With Olive Green Seats combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-set-of-6-teak-dining-chairs-with-olive-green-seats/Set of 6 Teak Dining Chairs with Olive Green Seats.webp",
    "images": [
      "assets/products/chairs/cat-set-of-6-teak-dining-chairs-with-olive-green-seats/Set of 6 Teak Dining Chairs with Olive Green Seats.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-set-of-teak-dining-chairs-with-blue-upholstery",
    "name": "Set Of Teak Dining Chairs With Blue Upholstery",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Set Of Teak Dining Chairs With Blue Upholstery combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-set-of-teak-dining-chairs-with-blue-upholstery/Set of Teak Dining Chairs with Blue Upholstery.webp",
    "images": [
      "assets/products/chairs/cat-set-of-teak-dining-chairs-with-blue-upholstery/Set of Teak Dining Chairs with Blue Upholstery.webp"
    ],
    "colors": []
  },
  {
    "id": "stainless-steel-ladder-back-dining-chair",
    "name": "Stainless Steel Ladder Back Dining Chair",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Stainless Steel Ladder Back Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/stainless-steel-ladder-back-dining-chair/Stainless Steel Ladder Back Dining Chair.webp",
    "images": [
      "assets/products/cafe-chairs/stainless-steel-ladder-back-dining-chair/Stainless Steel Ladder Back Dining Chair.webp"
    ],
    "colors": []
  },
  {
    "id": "sweden-orange-plastic-ergonomic-chair",
    "name": "Sweden Orange Plastic Ergonomic Chair",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Sweden Orange Plastic Ergonomic Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/sweden-orange-plastic-ergonomic-chair/Sweden Orange Chair - Angle Perspective.webp",
    "images": [
      "assets/products/cafe-chairs/sweden-orange-plastic-ergonomic-chair/Sweden Orange Chair - Angle Perspective.webp",
      "assets/products/cafe-chairs/sweden-orange-plastic-ergonomic-chair/Sweden Orange Chair - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "sweedan",
    "name": "Sweedan",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Sweedan combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/sweedan/Sweedan - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/sweedan/Sweedan - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-teak-and-cane-midcentury-dining-chair",
    "name": "Teak And Cane Midcentury Dining Chair",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Teak And Cane Midcentury Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-teak-and-cane-midcentury-dining-chair/teak_and_cane_midcentury_dining_chair.webp",
    "images": [
      "assets/products/chairs/cat-teak-and-cane-midcentury-dining-chair/teak_and_cane_midcentury_dining_chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-teak-dining-chair-with-blue-upholstery",
    "name": "Teak Dining Chair With Blue Upholstery",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Teak Dining Chair With Blue Upholstery combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-teak-dining-chair-with-blue-upholstery/Teak Dining Chair with Blue Upholstery.webp",
    "images": [
      "assets/products/chairs/cat-teak-dining-chair-with-blue-upholstery/Teak Dining Chair with Blue Upholstery.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-teak-dining-chair-with-green-upholstery",
    "name": "Teak Dining Chair With Green Upholstery",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Teak Dining Chair With Green Upholstery combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-teak-dining-chair-with-green-upholstery/Teak Dining Chair with Green Upholstery.webp",
    "images": [
      "assets/products/chairs/cat-teak-dining-chair-with-green-upholstery/Teak Dining Chair with Green Upholstery.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-teak-dining-chair-with-grey-cushion-b",
    "name": "Teak Dining Chair With Grey Cushion B",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Teak Dining Chair With Grey Cushion B combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-teak-dining-chair-with-grey-cushion-b/Teak Dining Chair with Grey Cushion B.webp",
    "images": [
      "assets/products/chairs/cat-teak-dining-chair-with-grey-cushion-b/Teak Dining Chair with Grey Cushion B.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-teak-dining-chair-with-yellow-velvet-seat",
    "name": "Teak Dining Chair With Yellow Velvet Seat",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Teak Dining Chair With Yellow Velvet Seat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-teak-dining-chair-with-yellow-velvet-seat/Teak Dining Chair with Yellow Velvet Seat.webp",
    "images": [
      "assets/products/chairs/cat-teak-dining-chair-with-yellow-velvet-seat/Teak Dining Chair with Yellow Velvet Seat.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-teak-frame-loveseat-sofa-with-black-leather",
    "name": "Teak Frame Loveseat Sofa With Black Leather",
    "category": "wooden-couches",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Teak Frame Loveseat Sofa With Black Leather combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wooden-couches/cat-teak-frame-loveseat-sofa-with-black-leather/Teak Frame Loveseat Sofa with Black Leather.webp",
    "images": [
      "assets/products/wooden-couches/cat-teak-frame-loveseat-sofa-with-black-leather/Teak Frame Loveseat Sofa with Black Leather.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-teak-highslat-dining-chair",
    "name": "Teak Highslat Dining Chair",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Teak Highslat Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-teak-highslat-dining-chair/teak_highslat_dining_chair.webp",
    "images": [
      "assets/products/chairs/cat-teak-highslat-dining-chair/teak_highslat_dining_chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-teak-ladder-back-dining-chair-with-tweed-seat",
    "name": "Teak Ladder Back Dining Chair With Tweed Seat",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Teak Ladder Back Dining Chair With Tweed Seat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-teak-ladder-back-dining-chair-with-tweed-seat/Teak Ladder Back Dining Chair with Tweed Seat.webp",
    "images": [
      "assets/products/chairs/cat-teak-ladder-back-dining-chair-with-tweed-seat/Teak Ladder Back Dining Chair with Tweed Seat.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-teak-ladderback-dining-chair",
    "name": "Teak Ladderback Dining Chair",
    "category": "dining-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Teak Ladderback Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-teak-ladderback-dining-chair/teak_ladderback_dining_chair.webp",
    "images": [
      "assets/products/chairs/cat-teak-ladderback-dining-chair/teak_ladderback_dining_chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-teak-slatted-garden-chair",
    "name": "Teak Slatted Garden Chair",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Teak Slatted Garden Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-teak-slatted-garden-chair/teak_slatted_garden_chair.webp",
    "images": [
      "assets/products/chairs/cat-teak-slatted-garden-chair/teak_slatted_garden_chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-walnut-black-compact-writing-desk",
    "name": "Walnut Black Compact Writing Desk",
    "category": "office-workstations",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Walnut Black Compact Writing Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-walnut-black-compact-writing-desk/walnut_black_compact_writing_desk.webp",
    "images": [
      "assets/products/office-workstations/cat-walnut-black-compact-writing-desk/walnut_black_compact_writing_desk.webp"
    ],
    "colors": []
  },
  {
    "id": "walnut-credenza-executive-desk",
    "name": "Walnut Credenza Executive Desk",
    "category": "office-workstations",
    "type": "table",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Walnut Credenza Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/walnut-credenza-executive-desk/walnut-credenza-executive-desk.webp",
    "images": [
      "assets/products/office-workstations/walnut-credenza-executive-desk/walnut-credenza-executive-desk.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-walnut-veneer-black-executive-desk",
    "name": "Walnut Veneer Black Executive Desk",
    "category": "office-workstations",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Walnut Veneer Black Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-walnut-veneer-black-executive-desk/walnut_veneer_black_executive_desk.webp",
    "images": [
      "assets/products/office-workstations/cat-walnut-veneer-black-executive-desk/walnut_veneer_black_executive_desk.webp"
    ],
    "colors": []
  },
  {
    "id": "white-molded-scandi-dining-chair",
    "name": "White Molded Scandi Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The White Molded Scandi Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/white-molded-scandi-dining-chair/white_molded_scandi_dining_chair.webp",
    "images": [
      "assets/products/cafe-chairs/white-molded-scandi-dining-chair/white_molded_scandi_dining_chair.webp"
    ],
    "colors": []
  },
  {
    "id": "chronos",
    "name": "CHRONOS",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "img": "assets/products/cafe-chairs/chronos/CHRONOS_2.webp",
    "badge": "New",
    "description": "The CHRONOS Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, Green or Yellow, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/cafe-chairs/chronos/CHRONOS_2.webp",
      "assets/products/cafe-chairs/chronos/CHRONOS_3.webp"
    ],
    "colors": [
      "Grey",
      "Green",
      "Yellow"
    ]
  },
  {
    "id": "ola",
    "name": "OLA",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.7,
    "img": "assets/products/cafe-chairs/ola/OLA.webp",
    "badge": "",
    "description": "The OLA Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Green or Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/cafe-chairs/ola/OLA.webp",
      "assets/products/cafe-chairs/ola/OLA_2.webp",
      "assets/products/cafe-chairs/ola/OLA_3.webp"
    ],
    "colors": [
      "Green",
      "Red"
    ]
  },
  {
    "id": "onyx",
    "name": "ONYX",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.5,
    "img": "assets/products/cafe-chairs/onyx/ONYX.webp",
    "badge": "",
    "description": "The ONYX Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Red, Blue, Yellow, White or Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/cafe-chairs/onyx/ONYX.webp",
      "assets/products/cafe-chairs/onyx/ONYX_2.webp",
      "assets/products/cafe-chairs/onyx/ONYX_3.webp",
      "assets/products/cafe-chairs/onyx/ONYX_4.webp",
      "assets/products/cafe-chairs/onyx/ONYX_5.webp",
      "assets/products/cafe-chairs/onyx/ONYX_6.webp"
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
    "id": "rubco-onyx-mattress",
    "name": "Rubco ONYX Mattress",
    "category": "mattresses",
    "type": "mattress",
    "material": "Coir / Latex Foam",
    "designer": "Rubco Premium",
    "rating": 4.7,
    "badge": "",
    "description": "Cover: Exclusive 100% 90-110 GSM printed polyester twill fabric is multi-needle quilted with 2 nos of 18 density 7 mm peeled foam together with 17 gm/m² non-woven fabric. The corner of the mattress is round-shaped, and the quilted panel is on the top. Border/Stabilizer: 110 GSM printed polyester twill fabric covered over the 5 mm 13 density peeled foam. Brand: Rubco Sleeping System. Thickness: 4/5 Inch. Inner Core: 4\" Thickness - 80 Density Rubberised Coir Block (BIS Certified); 5\" Thickness - 28 Density 20mm PU foam and 4\" 80 Density Rubberised Coir Block. Quilting Pattern: 6/3\". Corner Label: Exclusive film label provided at the corner. Packing: PVC film cover with 260 gauge and centre band wrapping. Warranty: 2 years.",
    "img": "assets/products/mattresses/rubco-onyx-mattress/rubco_onyx_mattress.webp",
    "images": [
      "assets/products/mattresses/rubco-onyx-mattress/rubco_onyx_mattress.webp",
      "assets/products/mattresses/rubco-onyx-mattress/rubco_onyx_mattress_2.webp"
    ],
    "listingUrl": "https://rubcobangalore.com/mattress/rubco-onyx-mattress",
    "colors": [
      "White",
      "Maroon"
    ]
  },
  {
    "id": "stelle",
    "name": "STELLE",
    "category": "office-chairs",
    "type": "cafe",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "img": "assets/products/office-chairs/stelle/STELLE.webp",
    "badge": "New",
    "description": "The STELLE Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Brown, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/stelle/STELLE.webp",
      "assets/products/office-chairs/stelle/STELLE_2.webp",
      "assets/products/office-chairs/stelle/STELLE_3.webp"
    ],
    "colors": [
      "Brown"
    ]
  },
  {
    "id": "stelle---stm",
    "name": "Stelle | STM",
    "category": "office-chairs",
    "type": "cafe",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "badge": "",
    "description": "The Stelle | STM Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "img": "assets/products/office-chairs/stelle---stm/Stelle _ STM - 301.webp",
    "images": [
      "assets/products/office-chairs/stelle---stm/Stelle _ STM - 301.webp",
      "assets/products/office-chairs/stelle---stm/Stelle _ STM -101.webp",
      "assets/products/office-chairs/stelle---stm/Stelle _ STM -201.webp",
      "assets/products/office-chairs/stelle---stm/Stelle _ STM -201_2.webp"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "stelle---stz",
    "name": "Stelle | STZ",
    "category": "office-chairs",
    "type": "cafe",
    "material": "Fabric",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "badge": "",
    "description": "Reflecting intelligent design and thinking, the Stelle | STZ Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "img": "assets/products/office-chairs/stelle---stz/Stelle _ STZ - 101.webp",
    "images": [
      "assets/products/office-chairs/stelle---stz/Stelle _ STZ - 101.webp",
      "assets/products/office-chairs/stelle---stz/Stelle _ STZ - 101_2.webp",
      "assets/products/office-chairs/stelle---stz/Stelle _ STZ - 201.webp",
      "assets/products/office-chairs/stelle---stz/Stelle _ STZ - 301.webp"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "zest",
    "name": "ZEST",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.7,
    "img": "assets/products/cafe-chairs/zest/ZEST.webp",
    "badge": "",
    "description": "The ZEST Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Blue or Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/cafe-chairs/zest/ZEST.webp",
      "assets/products/cafe-chairs/zest/ZEST_2.webp"
    ],
    "colors": [
      "Blue",
      "Grey"
    ]
  },
  {
    "id": "convertible-multi-functional-table",
    "name": "Convertible Multi Functional Table",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Convertible Multi Functional Table combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/convertible-multi-functional-table/Convertible Multi Functional Table - Front View.webp",
    "images": [
      "assets/products/cafe-tables/convertible-multi-functional-table/Convertible Multi Functional Table - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-crescent-reception-counter",
    "name": "Crescent Reception Counter",
    "category": "office-workstations",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Crescent Reception Counter combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-crescent-reception-counter/Crescent Reception Counter - Front View.webp",
    "images": [
      "assets/products/office-workstations/cat-crescent-reception-counter/Crescent Reception Counter - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dct-1001",
    "name": "DCT-1001 Coffee Table",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dct Series Coffee Table Model 1001 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/dct-1001/DCT-1001 - Front View.webp",
    "images": [
      "assets/products/cafe-tables/dct-1001/DCT-1001 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dct-1002",
    "name": "DCT-1002 Coffee Table",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dct Series Coffee Table Model 1002 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/dct-1002/DCT-1002 - Front View.webp",
    "images": [
      "assets/products/cafe-tables/dct-1002/DCT-1002 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dct-1003",
    "name": "DCT-1003 Coffee Table",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dct Series Coffee Table Model 1004 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/dct-1003/DCT-1003 - Front View.webp",
    "images": [
      "assets/products/cafe-tables/dct-1003/DCT-1003 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dct-1004",
    "name": "DCT-1004 Coffee Table",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dct Series Coffee Table Model 1005 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/dct-1004/DCT-1004 - Front View.webp",
    "images": [
      "assets/products/cafe-tables/dct-1004/DCT-1004 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dct-1005",
    "name": "DCT-1005 Coffee Table",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dct Series Coffee Table Model 1006 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/dct-1005/DCT-1005 - Front View.webp",
    "images": [
      "assets/products/cafe-tables/dct-1005/DCT-1005 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dct-1006",
    "name": "DCT-1006 Coffee Table",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dct Series Coffee Table Model 1007 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/dct-1006/DCT-1006 - Front View.webp",
    "images": [
      "assets/products/cafe-tables/dct-1006/DCT-1006 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dct-1007",
    "name": "DCT-1007 Coffee Table",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dct Series Coffee Table Model 1009 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/dct-1007/DCT-1007 - Front View.webp",
    "images": [
      "assets/products/cafe-tables/dct-1007/DCT-1007 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dct-1008",
    "name": "DCT-1008 Coffee Table",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dct Series Coffee Table Model 1013 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/dct-1008/DCT-1008 - Front View.webp",
    "images": [
      "assets/products/cafe-tables/dct-1008/DCT-1008 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dct-1009",
    "name": "DCT-1009 Coffee Table",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dct Series Coffee Table Model 1014 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/dct-1009/DCT-1009 - Front View.webp",
    "images": [
      "assets/products/cafe-tables/dct-1009/DCT-1009 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dct-1010",
    "name": "DCT-1010 Coffee Table",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dct Series Coffee Table Model 1018 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/dct-1010/DCT-1010 - Front View.webp",
    "images": [
      "assets/products/cafe-tables/dct-1010/DCT-1010 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dct-1011",
    "name": "DCT-1011 Coffee Table",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dct Series Coffee Table Model 1019 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/dct-1011/DCT-1011 - Front View.webp",
    "images": [
      "assets/products/cafe-tables/dct-1011/DCT-1011 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dct-1012",
    "name": "DCT-1012 Coffee Table",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dct Series Coffee Table Model 1021 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/dct-1012/DCT-1012 - Front View.webp",
    "images": [
      "assets/products/cafe-tables/dct-1012/DCT-1012 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dct-1013",
    "name": "DCT-1013 Coffee Table",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dct Series Coffee Table Model 1022 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/dct-1013/DCT-1013 - Front View.webp",
    "images": [
      "assets/products/cafe-tables/dct-1013/DCT-1013 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dct-1014",
    "name": "DCT-1014 Coffee Table",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dct Series Coffee Table Model 1025 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/dct-1014/DCT-1014 - Front View.webp",
    "images": [
      "assets/products/cafe-tables/dct-1014/DCT-1014 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dct-1015",
    "name": "DCT-1015 Coffee Table",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dct Series Coffee Table Model 1026 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/dct-1015/DCT-1015 - Front View.webp",
    "images": [
      "assets/products/cafe-tables/dct-1015/DCT-1015 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dct-1016",
    "name": "DCT-1016 Coffee Table",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dct Series Coffee Table Model 1030 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/dct-1016/DCT-1016 - Front View.webp",
    "images": [
      "assets/products/cafe-tables/dct-1016/DCT-1016 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dct-1017",
    "name": "DCT-1017 Coffee Table",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dct Series Coffee Table Model 1032 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/dct-1017/DCT-1017 - Front View.webp",
    "images": [
      "assets/products/cafe-tables/dct-1017/DCT-1017 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dct-1018",
    "name": "DCT-1018 Coffee Table",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dct Series Coffee Table Model 1034 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/dct-1018/DCT-1018 - Front View.webp",
    "images": [
      "assets/products/cafe-tables/dct-1018/DCT-1018 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dct-1019",
    "name": "DCT-1019 Coffee Table",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dct Series Coffee Table Model 1035 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/dct-1019/DCT-1019 - Front View.webp",
    "images": [
      "assets/products/cafe-tables/dct-1019/DCT-1019 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dct-1020",
    "name": "DCT-1020 Coffee Table",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dct Series Coffee Table Model 1037 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/dct-1020/DCT-1020 - Front View.webp",
    "images": [
      "assets/products/cafe-tables/dct-1020/DCT-1020 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dct-1021",
    "name": "DCT-1021 Coffee Table",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dct Series Coffee Table Model 1044 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/dct-1021/DCT-1021 - Front View.webp",
    "images": [
      "assets/products/cafe-tables/dct-1021/DCT-1021 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dct-1022",
    "name": "DCT-1022 Coffee Table",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dct Series Coffee Table Model 1045 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/dct-1022/DCT-1022 - Front View.webp",
    "images": [
      "assets/products/cafe-tables/dct-1022/DCT-1022 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dct-1023",
    "name": "DCT-1023 Coffee Table",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dct Series Coffee Table Model 1047 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/dct-1023/DCT-1023 - Front View.webp",
    "images": [
      "assets/products/cafe-tables/dct-1023/DCT-1023 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dct-1024",
    "name": "DCT-1024 Coffee Table",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dct Series Coffee Table Model 1049 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/dct-1024/DCT-1024 - Front View.webp",
    "images": [
      "assets/products/cafe-tables/dct-1024/DCT-1024 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dct-1025",
    "name": "DCT-1025 Coffee Table",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dct Series Coffee Table Model 1050 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/dct-1025/DCT-1025 - Front View.webp",
    "images": [
      "assets/products/cafe-tables/dct-1025/DCT-1025 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dct-1026",
    "name": "DCT-1026 Coffee Table",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dct Series Coffee Table Model 1051 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/dct-1026/DCT-1026 - Front View.webp",
    "images": [
      "assets/products/cafe-tables/dct-1026/DCT-1026 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dct-1027",
    "name": "DCT-1027 Coffee Table",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dct Series Coffee Table Model 1052 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/dct-1027/DCT-1027 - Front View.webp",
    "images": [
      "assets/products/cafe-tables/dct-1027/DCT-1027 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dct-1028",
    "name": "DCT-1028 Coffee Table",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dct Series Coffee Table Model 1053 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/dct-1028/DCT-1028 - Front View.webp",
    "images": [
      "assets/products/cafe-tables/dct-1028/DCT-1028 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dct-1029",
    "name": "DCT-1029 Coffee Table",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dct Series Coffee Table Model 1054 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/dct-1029/DCT-1029 - Front View.webp",
    "images": [
      "assets/products/cafe-tables/dct-1029/DCT-1029 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dct-1030",
    "name": "DCT-1030 Coffee Table",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dct Series Coffee Table Model 1055 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/dct-1030/DCT-1030 - Front View.webp",
    "images": [
      "assets/products/cafe-tables/dct-1030/DCT-1030 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dct-1031",
    "name": "DCT-1031 Coffee Table",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dct Series Coffee Table Model 1056 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/dct-1031/DCT-1031 - Front View.webp",
    "images": [
      "assets/products/cafe-tables/dct-1031/DCT-1031 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "dct-1032",
    "name": "DCT-1032 Coffee Table",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dct Series Coffee Table Model 1057 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/dct-1032/DCT-1032 - Front View.webp",
    "images": [
      "assets/products/cafe-tables/dct-1032/DCT-1032 - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "mobile-flip-top-round-table",
    "name": "Mobile Flip Top Round Table",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Mobile Flip Top Round Table combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/mobile-flip-top-round-table/Mobile Flip Top Round Table - Front View.webp",
    "images": [
      "assets/products/cafe-tables/mobile-flip-top-round-table/Mobile Flip Top Round Table - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "mobile-round-folding-table",
    "name": "Mobile Round Folding Table",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Mobile Round Folding Table combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/mobile-round-folding-table/Mobile Round Folding Table - Front View.webp",
    "images": [
      "assets/products/cafe-tables/mobile-round-folding-table/Mobile Round Folding Table - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "white-round-folding-conference-table",
    "name": "White Round Folding Conference Table",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The White Round Folding Conference Table combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/white-round-folding-conference-table/white_round_folding_conference_table.webp",
    "images": [
      "assets/products/cafe-tables/white-round-folding-conference-table/white_round_folding_conference_table.webp"
    ],
    "colors": []
  },
  {
    "id": "de_grid",
    "name": "De-Grid",
    "category": "cafe-tables",
    "type": "table",
    "material": "Desk",
    "designer": "Bosq Ergonomics",
    "rating": 4.3,
    "badge": "",
    "description": "DE-GRID is a sturdy pantry table set designed for communal spaces, featuring a durable table with a metal frame construction paired with two matching benches. Its minimal and robust design ensures both functionality and long-lasting use.",
    "img": "assets/products/cafe-tables/de_grid/De_Grid_01.webp",
    "images": [
      "assets/products/cafe-tables/de_grid/De_Grid_01.webp"
    ],
    "colors": [],
    "tags": [
      "coffee table"
    ]
  },
  {
    "id": "cat-dark-walnut-coffee-table",
    "name": "Dark Walnut Coffee Table",
    "category": "center-tables",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Walnut Coffee Table combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/center-tables/cat-dark-walnut-coffee-table/Dark Walnut Coffee Table.webp",
    "images": [
      "assets/products/center-tables/cat-dark-walnut-coffee-table/Dark Walnut Coffee Table.webp"
    ],
    "colors": []
  },
  {
    "id": "geometric-chrome-nesting-console-tables",
    "name": "Geometric Chrome Nesting Console Tables",
    "category": "cafe-tables",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Geometric Chrome Nesting Console Tables combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/geometric-chrome-nesting-console-tables/Geometric Chrome Nesting Tables - Front View.webp",
    "images": [
      "assets/products/cafe-tables/geometric-chrome-nesting-console-tables/Geometric Chrome Nesting Tables - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-large-cream-lsectional-with-coffee-table",
    "name": "Large Cream Lsectional With Coffee Table",
    "category": "corner-sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Large Cream Lsectional With Coffee Table combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/cat-large-cream-lsectional-with-coffee-table/large_cream_lsectional_with_coffee_table.webp",
    "images": [
      "assets/products/corner-sofas/cat-large-cream-lsectional-with-coffee-table/large_cream_lsectional_with_coffee_table.webp"
    ],
    "colors": []
  },
  {
    "id": "lmw-032",
    "name": "LMW-032",
    "category": "center-tables",
    "type": "table",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.5,
    "img": "assets/products/center-tables/lmw-035/LMW-035.webp",
    "badge": "",
    "description": "The LMW-032 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Red colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-035/LMW-035.webp"
    ],
    "colors": [
      "Red"
    ],
    "tags": [
      "coffee table"
    ]
  },
  {
    "id": "lmw-033",
    "name": "LMW-033",
    "category": "center-tables",
    "type": "table",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/products/center-tables/lmw-036/LMW-036.webp",
    "badge": "",
    "description": "The LMW-033 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Brown colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-036/LMW-036.webp"
    ],
    "colors": [
      "Brown"
    ],
    "tags": [
      "coffee table"
    ]
  },
  {
    "id": "lmw-034",
    "name": "LMW-034",
    "category": "center-tables",
    "type": "table",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/products/center-tables/lmw-037/LMW-037.webp",
    "badge": "New",
    "description": "The LMW-034 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Brown colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-037/LMW-037.webp"
    ],
    "colors": [
      "Brown"
    ],
    "tags": [
      "coffee table"
    ]
  },
  {
    "id": "lmw-035",
    "name": "LMW-035",
    "category": "center-tables",
    "type": "table",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/products/center-tables/lmw-038/LMW-038.webp",
    "badge": "",
    "description": "The LMW-035 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Brown colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-038/LMW-038.webp"
    ],
    "colors": [
      "Brown"
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
    "rating": 4.9,
    "img": "assets/products/center-tables/lmw-039/LMW-039_2.webp",
    "badge": "",
    "description": "The LMW-036 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Grey or Brown colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-039/LMW-039_2.webp"
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
    "id": "lmw-037",
    "name": "LMW-037",
    "category": "center-tables",
    "type": "table",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/products/center-tables/lmw-040/LMW-040.webp",
    "badge": "Premium",
    "description": "The LMW-037 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Red colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-040/LMW-040.webp"
    ],
    "colors": [
      "Red"
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
    "rating": 4.5,
    "img": "assets/products/center-tables/lmw-041/LMW-041_2.webp",
    "badge": "",
    "description": "The LMW-038 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Grey or Brown colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-041/LMW-041_2.webp"
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
    "id": "lmw-039",
    "name": "LMW-039",
    "category": "center-tables",
    "type": "table",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/products/center-tables/lmw-042/LMW-042.webp",
    "badge": "",
    "description": "The LMW-039 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Brown colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-042/LMW-042.webp"
    ],
    "colors": [
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
    "img": "assets/products/center-tables/lmw-043/LMW-043.webp",
    "badge": "",
    "description": "The LMW-040 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Red colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-043/LMW-043.webp"
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
    "rating": 4.7,
    "img": "assets/products/center-tables/lmw-044/LMW-044.webp",
    "badge": "",
    "description": "The LMW-041 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Red colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-044/LMW-044.webp"
    ],
    "colors": [
      "Red"
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
    "rating": 4.7,
    "img": "assets/products/center-tables/lmw-045/LMW-045.webp",
    "badge": "",
    "description": "The LMW-042 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Red colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-045/LMW-045.webp"
    ],
    "colors": [
      "Red"
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
    "rating": 4.5,
    "img": "assets/products/center-tables/lmw-046/LMW-046.webp",
    "badge": "",
    "description": "The LMW-043 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Brown colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-046/LMW-046.webp"
    ],
    "colors": [
      "Brown"
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
    "rating": 4.3,
    "img": "assets/products/center-tables/lmw-047/LMW-047.webp",
    "badge": "",
    "description": "The LMW-044 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Brown colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-047/LMW-047.webp"
    ],
    "colors": [
      "Brown"
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
    "img": "assets/products/center-tables/lmw-048/LMW-048.webp",
    "badge": "",
    "description": "The LMW-045 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Red colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-048/LMW-048.webp"
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
    "rating": 4.7,
    "img": "assets/products/center-tables/lmw-049/LMW-049.webp",
    "badge": "Bestseller",
    "description": "The LMW-046 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Brown colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-049/LMW-049.webp"
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
    "rating": 4.9,
    "img": "assets/products/center-tables/lmw-050/LMW-050.webp",
    "badge": "",
    "description": "The LMW-047 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Brown colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-050/LMW-050.webp"
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
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/products/center-tables/lmw-051/LMW-051.webp",
    "badge": "Bestseller",
    "description": "The LMW-048 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Brown colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-051/LMW-051.webp"
    ],
    "colors": [
      "Brown"
    ],
    "tags": [
      "coffee table"
    ]
  },
  {
    "id": "lmw-049",
    "name": "LMW-049",
    "category": "center-tables",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/products/center-tables/lmw-052/LMW-052.webp",
    "badge": "",
    "description": "The LMW-049 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Red colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-052/LMW-052.webp"
    ],
    "colors": [
      "Red"
    ],
    "tags": [
      "coffee table"
    ]
  },
  {
    "id": "lmw-050",
    "name": "LMW-050",
    "category": "center-tables",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/products/center-tables/lmw-053/LMW-053.webp",
    "badge": "",
    "description": "The LMW-050 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Brown colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-053/LMW-053.webp"
    ],
    "colors": [
      "Brown"
    ],
    "tags": [
      "coffee table"
    ]
  },
  {
    "id": "cat-aludra-highback-chair",
    "name": "Aludra Highback Chair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Aludra Highback Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-aludra-highback-chair/Aludra Highback Chair - Front View.webp",
    "images": [
      "assets/products/chairs/cat-aludra-highback-chair/Aludra Highback Chair - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-aquila-modern-swivel-chair",
    "name": "Aquila Modern Swivel Chair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Aquila Modern Swivel Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-aquila-modern-swivel-chair/Aquila Modern Swivel Chair - Front View.webp",
    "images": [
      "assets/products/chairs/cat-aquila-modern-swivel-chair/Aquila Modern Swivel Chair - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-architectural-walnut-chair-with-white-backrest",
    "name": "Architectural Walnut Chair With White Backrest",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Architectural Walnut Chair With White Backrest combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-architectural-walnut-chair-with-white-backrest/Architectural Walnut Chair with White Backrest.webp",
    "images": [
      "assets/products/chairs/cat-architectural-walnut-chair-with-white-backrest/Architectural Walnut Chair with White Backrest.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-architectural-wood-armchair-with-cream-leather-seat",
    "name": "Architectural Wood Armchair With Cream Leather Seat",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Architectural Wood Armchair With Cream Leather Seat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-architectural-wood-armchair-with-cream-leather-seat/Architectural Wood Armchair with Cream Leather Seat.webp",
    "images": [
      "assets/products/chairs/cat-architectural-wood-armchair-with-cream-leather-seat/Architectural Wood Armchair with Cream Leather Seat.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-architectural-wooden-armchair-with-dark-cushion",
    "name": "Architectural Wooden Armchair With Dark Cushion",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Architectural Wooden Armchair With Dark Cushion combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-architectural-wooden-armchair-with-dark-cushion/Architectural Wooden Armchair with Dark Cushion.webp",
    "images": [
      "assets/products/chairs/cat-architectural-wooden-armchair-with-dark-cushion/Architectural Wooden Armchair with Dark Cushion.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-astrae-ergonomic-chair",
    "name": "Astrae Ergonomic Chair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Astrae Ergonomic Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-astrae-ergonomic-chair/Astrae Ergonomic Chair - Front View.webp",
    "images": [
      "assets/products/chairs/cat-astrae-ergonomic-chair/Astrae Ergonomic Chair - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-aura-accent-chair",
    "name": "Aura Accent Chair",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Aura Accent Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-aura-accent-chair/Aura Accent Chair - Front View.webp",
    "images": [
      "assets/products/sofas/cat-aura-accent-chair/Aura Accent Chair - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-auriga-executive-chair",
    "name": "Auriga Executive Chair",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Auriga Executive Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-auriga-executive-chair/Auriga Executive Chair - Front View.webp",
    "images": [
      "assets/products/recliners/cat-auriga-executive-chair/Auriga Executive Chair - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-bamboo-leather-armchair",
    "name": "Bamboo Leather Armchair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Bamboo Leather Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-bamboo-leather-armchair/Bamboo Leather Armchair - Single Seater.webp",
    "images": [
      "assets/products/chairs/cat-bamboo-leather-armchair/Bamboo Leather Armchair - Single Seater.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-beige-boucle-fabric-accent-tub-chair",
    "name": "Beige Boucle Fabric Accent Tub Chair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Beige Boucle Fabric Accent Tub Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-beige-boucle-fabric-accent-tub-chair/Beige Boucle Fabric Accent Tub Chair.webp",
    "images": [
      "assets/products/chairs/cat-beige-boucle-fabric-accent-tub-chair/Beige Boucle Fabric Accent Tub Chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-beige-channeltufted-club-armchair",
    "name": "Beige Channeltufted Club Armchair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Beige Channeltufted Club Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-beige-channeltufted-club-armchair/beige_channeltufted_club_armchair.webp",
    "images": [
      "assets/products/chairs/cat-beige-channeltufted-club-armchair/beige_channeltufted_club_armchair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-beige-velvet-club-chair-comboset",
    "name": "Beige Velvet Club Chair Comboset",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Beige Velvet Club Chair Comboset combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-beige-velvet-club-chair-comboset/beige_velvet_club_chair_comboset.webp",
    "images": [
      "assets/products/chairs/cat-beige-velvet-club-chair-comboset/beige_velvet_club_chair_comboset.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-blue-patterned-traditional-armchair",
    "name": "Blue Patterned Traditional Armchair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Blue Patterned Traditional Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-blue-patterned-traditional-armchair/blue_patterned_traditional_armchair.webp",
    "images": [
      "assets/products/chairs/cat-blue-patterned-traditional-armchair/blue_patterned_traditional_armchair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-blue-plaid-upholstered-armchair",
    "name": "Blue Plaid Upholstered Armchair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Blue Plaid Upholstered Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-blue-plaid-upholstered-armchair/Blue Plaid Upholstered Armchair.webp",
    "images": [
      "assets/products/chairs/cat-blue-plaid-upholstered-armchair/Blue Plaid Upholstered Armchair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-botanical-floral-wingback-armchair",
    "name": "Botanical Floral Wingback Armchair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Botanical Floral Wingback Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-botanical-floral-wingback-armchair/botanical_floral_wingback_armchair.webp",
    "images": [
      "assets/products/chairs/cat-botanical-floral-wingback-armchair/botanical_floral_wingback_armchair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-breeze-linen-armchair",
    "name": "Breeze Linen Armchair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Breeze Linen Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-breeze-linen-armchair/Breeze Linen Armchair - Single Seater.webp",
    "images": [
      "assets/products/chairs/cat-breeze-linen-armchair/Breeze Linen Armchair - Single Seater.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-brown-fabric-curved-back-barrel-chair",
    "name": "Brown Fabric Curved Back Barrel Chair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Brown Fabric Curved Back Barrel Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-brown-fabric-curved-back-barrel-chair/Brown Fabric Curved Back Barrel Chair.webp",
    "images": [
      "assets/products/chairs/cat-brown-fabric-curved-back-barrel-chair/Brown Fabric Curved Back Barrel Chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-brume-sage-green-armchair",
    "name": "Brume Sage Green Armchair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Brume Sage Green Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-brume-sage-green-armchair/Brume Sage Green Armchair - Single Seater.webp",
    "images": [
      "assets/products/chairs/cat-brume-sage-green-armchair/Brume Sage Green Armchair - Single Seater.webp"
    ],
    "colors": []
  },
  {
    "id": "calypso-charcoal-grey-velvet-recliner",
    "name": "Calypso Charcoal Grey Velvet Recliner",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Calypso Charcoal Grey Velvet Recliner combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/calypso-charcoal-grey-velvet-recliner/calypso-charcoal-grey-velvet-recliner.webp",
    "images": [
      "assets/products/recliners/calypso-charcoal-grey-velvet-recliner/calypso-charcoal-grey-velvet-recliner.webp"
    ],
    "colors": []
  },
  {
    "id": "carina-modern-recliner",
    "name": "Carina Modern Reclining Loveseat",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Carina Modern Reclining Loveseat combines premium comfort, modern styling, and dual manual reclining seats.",
    "img": "assets/products/recliners/carina-modern-recliner/carina-modern-recliner.webp",
    "images": [
      "assets/products/recliners/carina-modern-recliner/carina-modern-recliner.webp"
    ],
    "colors": []
  },
  {
    "id": "cassiopeia-highback-executive-recliner",
    "name": "Cassiopeia Highback Executive Reclining Sofa",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cassiopeia Highback Executive Reclining Sofa features high-quality brown leather upholstery, generous padding, and integrated reclining footrests for optimal support.",
    "img": "assets/products/recliners/cassiopeia-highback-executive-recliner/cassiopeia-highback-executive-recliner-angle.webp",
    "images": [
      "assets/products/recliners/cassiopeia-highback-executive-recliner/cassiopeia-highback-executive-recliner-angle.webp",
      "assets/products/recliners/cassiopeia-highback-executive-recliner/cassiopeia-highback-executive-recliner-front.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-celene-accent-chair",
    "name": "Celene Accent Chair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Celene Accent Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-celene-accent-chair/Celene Accent Chair - Angle Perspective.webp",
    "images": [
      "assets/products/chairs/cat-celene-accent-chair/Celene Accent Chair - Angle Perspective.webp",
      "assets/products/chairs/cat-celene-accent-chair/Celene Accent Chair - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-centaurus-executive-chair",
    "name": "Centaurus Executive Chair",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Centaurus Executive Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-centaurus-executive-chair/Centaurus Executive Chair - Angle Perspective.webp",
    "images": [
      "assets/products/recliners/cat-centaurus-executive-chair/Centaurus Executive Chair - Angle Perspective.webp",
      "assets/products/recliners/cat-centaurus-executive-chair/Centaurus Executive Chair - Front View.webp",
      "assets/products/recliners/cat-centaurus-executive-chair/Centaurus Executive Chair - Side View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-charcoal-grey-curved-barrel-accent-chair",
    "name": "Charcoal Grey Curved Barrel Accent Chair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Charcoal Grey Curved Barrel Accent Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-charcoal-grey-curved-barrel-accent-chair/Charcoal Grey Curved Barrel Accent Chair.webp",
    "images": [
      "assets/products/chairs/cat-charcoal-grey-curved-barrel-accent-chair/Charcoal Grey Curved Barrel Accent Chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-charcoal-grey-fabric-armchair-with-tapered-legs",
    "name": "Charcoal Grey Fabric Armchair With Tapered Legs",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Charcoal Grey Fabric Armchair With Tapered Legs combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-charcoal-grey-fabric-armchair-with-tapered-legs/Charcoal Grey Fabric Armchair with Tapered Legs.webp",
    "images": [
      "assets/products/chairs/cat-charcoal-grey-fabric-armchair-with-tapered-legs/Charcoal Grey Fabric Armchair with Tapered Legs.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cirrus-textured-armchair",
    "name": "Cirrus Textured Armchair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cirrus Textured Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-cirrus-textured-armchair/Cirrus Textured Armchair - Single Seater.webp",
    "images": [
      "assets/products/chairs/cat-cirrus-textured-armchair/Cirrus Textured Armchair - Single Seater.webp"
    ],
    "colors": []
  },
  {
    "id": "classic-gama-pvc-office-chair",
    "name": "Classic Gama PVC Cafe Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Classic Gama Pvc Office Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/classic-gama-pvc-office-chair/Classic Gama PVC Office Chair - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/classic-gama-pvc-office-chair/Classic Gama PVC Office Chair - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "classic-gama-wood-executive-chair",
    "name": "Classic Gama Wood Executive Chair",
    "category": "cafe-chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Classic Gama Wood Executive Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/classic-gama-wood-executive-chair/Classic Gama Wood Executive Chair - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/classic-gama-wood-executive-chair/Classic Gama Wood Executive Chair - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "classic-smart-swivel-chair",
    "name": "Classic Smart Swivel Chair",
    "category": "cafe-chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Classic Smart Swivel Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/classic-smart-swivel-chair/Classic Smart Swivel Chair - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/classic-smart-swivel-chair/Classic Smart Swivel Chair - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "classic-zeta-executive-chair",
    "name": "Classic Zeta Executive Chair",
    "category": "cafe-chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Classic Zeta Executive Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/classic-zeta-executive-chair/Classic Zeta Executive Chair - Front View.webp",
    "images": [
      "assets/products/cafe-chairs/classic-zeta-executive-chair/Classic Zeta Executive Chair - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cognac-leather-armchair-with-wood-frame",
    "name": "Cognac Leather Armchair With Wood Frame",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cognac Leather Armchair With Wood Frame combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-cognac-leather-armchair-with-wood-frame/Cognac Leather Armchair with Wood Frame.webp",
    "images": [
      "assets/products/chairs/cat-cognac-leather-armchair-with-wood-frame/Cognac Leather Armchair with Wood Frame.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-corsica-cream-velvet-armchair",
    "name": "Corsica Cream Velvet Armchair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Corsica Cream Velvet Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-corsica-cream-velvet-armchair/Corsica Cream Velvet Armchair - Single Seater.webp",
    "images": [
      "assets/products/chairs/cat-corsica-cream-velvet-armchair/Corsica Cream Velvet Armchair - Single Seater.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-corvus-office-chair",
    "name": "Corvus Reclining Sofa Suite",
    "category": "sofas",
    "type": "sofa",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Corvus Office Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-corvus-office-chair/Corvus Office Chair - Front View.webp",
    "images": [
      "assets/products/sofas/cat-corvus-office-chair/Corvus Office Chair - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cosma-modern-armchair",
    "name": "Cosma Modern Armchair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cosma Modern Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-cosma-modern-armchair/Cosma Modern Armchair - Front View.webp",
    "images": [
      "assets/products/chairs/cat-cosma-modern-armchair/Cosma Modern Armchair - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-boucle-rounded-swivel-armchair",
    "name": "Cream Boucle Rounded Swivel Armchair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Boucle Rounded Swivel Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-cream-boucle-rounded-swivel-armchair/cream_boucle_rounded_swivel_armchair.webp",
    "images": [
      "assets/products/chairs/cat-cream-boucle-rounded-swivel-armchair/cream_boucle_rounded_swivel_armchair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-linen-accent-armchair",
    "name": "Cream Linen Accent Armchair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Linen Accent Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-cream-linen-accent-armchair/cream_linen_accent_armchair.webp",
    "images": [
      "assets/products/chairs/cat-cream-linen-accent-armchair/cream_linen_accent_armchair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-linen-armchair-and-ottoman-combo",
    "name": "Cream Linen Armchair And Ottoman Combo",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Linen Armchair And Ottoman Combo combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-cream-linen-armchair-and-ottoman-combo/cream_linen_armchair_and_ottoman_combo.webp",
    "images": [
      "assets/products/chairs/cat-cream-linen-armchair-and-ottoman-combo/cream_linen_armchair_and_ottoman_combo.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-textured-accent-club-chair",
    "name": "Cream Textured Accent Club Chair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Textured Accent Club Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-cream-textured-accent-club-chair/cream_textured_accent_club_chair.webp",
    "images": [
      "assets/products/chairs/cat-cream-textured-accent-club-chair/cream_textured_accent_club_chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-tufted-swivel-lounge-chair",
    "name": "Cream Tufted Swivel Lounge Chair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Tufted Swivel Lounge Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-cream-tufted-swivel-lounge-chair/cream_tufted_swivel_lounge_chair.webp",
    "images": [
      "assets/products/chairs/cat-cream-tufted-swivel-lounge-chair/cream_tufted_swivel_lounge_chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-velvet-tealcushion-accent-chair",
    "name": "Cream Velvet Tealcushion Accent Chair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Velvet Tealcushion Accent Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-cream-velvet-tealcushion-accent-chair/cream_velvet_tealcushion_accent_chair.webp",
    "images": [
      "assets/products/chairs/cat-cream-velvet-tealcushion-accent-chair/cream_velvet_tealcushion_accent_chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-woven-deep-armchair",
    "name": "Cream Woven Deep Armchair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Woven Deep Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-cream-woven-deep-armchair/cream_woven_deep_armchair.webp",
    "images": [
      "assets/products/chairs/cat-cream-woven-deep-armchair/cream_woven_deep_armchair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cressida-executive-swivel-chair",
    "name": "Cressida Executive Swivel Chair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cressida Executive Swivel Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-cressida-executive-swivel-chair/Cressida Executive Swivel Chair - Front View.webp",
    "images": [
      "assets/products/chairs/cat-cressida-executive-swivel-chair/Cressida Executive Swivel Chair - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-curved-beige-fabric-accent-chair",
    "name": "Curved Beige Fabric Accent Chair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Curved Beige Fabric Accent Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-curved-beige-fabric-accent-chair/Curved Beige Fabric Accent Chair.webp",
    "images": [
      "assets/products/chairs/cat-curved-beige-fabric-accent-chair/Curved Beige Fabric Accent Chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-curved-grey-fabric-swivel-tub-chair",
    "name": "Curved Grey Fabric Swivel Tub Chair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Curved Grey Fabric Swivel Tub Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-curved-grey-fabric-swivel-tub-chair/Curved Grey Fabric Swivel Tub Chair.webp",
    "images": [
      "assets/products/chairs/cat-curved-grey-fabric-swivel-tub-chair/Curved Grey Fabric Swivel Tub Chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-curved-wood-frame-tub-chair-with-grey-cushion",
    "name": "Curved Wood Frame Tub Chair With Grey Cushion",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Curved Wood Frame Tub Chair With Grey Cushion combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-curved-wood-frame-tub-chair-with-grey-cushion/Curved Wood Frame Tub Chair with Grey Cushion.webp",
    "images": [
      "assets/products/chairs/cat-curved-wood-frame-tub-chair-with-grey-cushion/Curved Wood Frame Tub Chair with Grey Cushion.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-brown-sculptural-tub-chair",
    "name": "Dark Brown Sculptural Tub Chair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Brown Sculptural Tub Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-dark-brown-sculptural-tub-chair/Dark Brown Sculptural Tub Chair.webp",
    "images": [
      "assets/products/chairs/cat-dark-brown-sculptural-tub-chair/Dark Brown Sculptural Tub Chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-green-fabric-accent-chair-with-wood-frame",
    "name": "Dark Green Fabric Accent Chair With Wood Frame",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Green Fabric Accent Chair With Wood Frame combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-dark-green-fabric-accent-chair-with-wood-frame/Dark Green Fabric Accent Chair with Wood Frame.webp",
    "images": [
      "assets/products/chairs/cat-dark-green-fabric-accent-chair-with-wood-frame/Dark Green Fabric Accent Chair with Wood Frame.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-navy-leather-swivel-barrel-chair",
    "name": "Dark Navy Leather Swivel Barrel Chair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Navy Leather Swivel Barrel Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-dark-navy-leather-swivel-barrel-chair/Dark Navy Leather Swivel Barrel Chair.webp",
    "images": [
      "assets/products/chairs/cat-dark-navy-leather-swivel-barrel-chair/Dark Navy Leather Swivel Barrel Chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-wood-frame-armchair-with-grey-cushion",
    "name": "Dark Wood Frame Armchair With Grey Cushion",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Wood Frame Armchair With Grey Cushion combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-dark-wood-frame-armchair-with-grey-cushion/Dark Wood Frame Armchair with Grey Cushion.webp",
    "images": [
      "assets/products/chairs/cat-dark-wood-frame-armchair-with-grey-cushion/Dark Wood Frame Armchair with Grey Cushion.webp"
    ],
    "colors": []
  },
  {
    "id": "draco-swivel-executive-recliner",
    "name": "Draco Swivel Executive Recliner",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Draco Swivel Executive Recliner combines a premium executive swivel design, heavy-duty cup holders, and plush reclining leather seat support.",
    "img": "assets/products/recliners/draco-swivel-executive-recliner/draco-swivel-executive-recliner.webp",
    "images": [
      "assets/products/recliners/draco-swivel-executive-recliner/draco-swivel-executive-recliner.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-drift-textured-armchair",
    "name": "Drift Textured Armchair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Drift Textured Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-drift-textured-armchair/Drift Textured Armchair - Single Seater.webp",
    "images": [
      "assets/products/chairs/cat-drift-textured-armchair/Drift Textured Armchair - Single Seater.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dusk-boucle-armchair",
    "name": "Dusk Boucle Armchair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dusk Boucle Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-dusk-boucle-armchair/Dusk Boucle Armchair - Single Seater.webp",
    "images": [
      "assets/products/chairs/cat-dusk-boucle-armchair/Dusk Boucle Armchair - Single Seater.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-eos-modern-swivel-chair",
    "name": "Eos Modern Swivel Chair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Eos Modern Swivel Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-eos-modern-swivel-chair/Eos Modern Swivel Chair - Front View.webp",
    "images": [
      "assets/products/chairs/cat-eos-modern-swivel-chair/Eos Modern Swivel Chair - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-gray-linen-boxy-armchair",
    "name": "Gray Linen Boxy Armchair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Gray Linen Boxy Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-gray-linen-boxy-armchair/gray_linen_boxy_armchair.webp",
    "images": [
      "assets/products/chairs/cat-gray-linen-boxy-armchair/gray_linen_boxy_armchair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-grey-fabric-architectural-armchair",
    "name": "Grey Fabric Architectural Armchair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Grey Fabric Architectural Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-grey-fabric-architectural-armchair/Grey Fabric Architectural Armchair.webp",
    "images": [
      "assets/products/chairs/cat-grey-fabric-architectural-armchair/Grey Fabric Architectural Armchair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-grey-fabric-armchair-with-dark-legs",
    "name": "Grey Fabric Armchair With Dark Legs",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Grey Fabric Armchair With Dark Legs combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-grey-fabric-armchair-with-dark-legs/Grey Fabric Armchair with Dark Legs.webp",
    "images": [
      "assets/products/chairs/cat-grey-fabric-armchair-with-dark-legs/Grey Fabric Armchair with Dark Legs.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-grey-fabric-curved-back-accent-chair",
    "name": "Grey Fabric Curved Back Accent Chair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Grey Fabric Curved Back Accent Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-grey-fabric-curved-back-accent-chair/Grey Fabric Curved Back Accent Chair.webp",
    "images": [
      "assets/products/chairs/cat-grey-fabric-curved-back-accent-chair/Grey Fabric Curved Back Accent Chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-grey-fabric-swivel-barrel-chair",
    "name": "Grey Fabric Swivel Barrel Chair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Grey Fabric Swivel Barrel Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-grey-fabric-swivel-barrel-chair/Grey Fabric Swivel Barrel Chair - Front Perspective.webp",
    "images": [
      "assets/products/chairs/cat-grey-fabric-swivel-barrel-chair/Grey Fabric Swivel Barrel Chair - Front Perspective.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-grey-fabric-tub-chair-with-wooden-legs",
    "name": "Grey Fabric Tub Chair With Wooden Legs",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Grey Fabric Tub Chair With Wooden Legs combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-grey-fabric-tub-chair-with-wooden-legs/Grey Fabric Tub Chair with Wooden Legs.webp",
    "images": [
      "assets/products/chairs/cat-grey-fabric-tub-chair-with-wooden-legs/Grey Fabric Tub Chair with Wooden Legs.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-heather-gray-boxy-club-chair",
    "name": "Heather Gray Boxy Club Chair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Heather Gray Boxy Club Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-heather-gray-boxy-club-chair/heather_gray_boxy_club_chair.webp",
    "images": [
      "assets/products/chairs/cat-heather-gray-boxy-club-chair/heather_gray_boxy_club_chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-industrial-leather-wireframe-armchair",
    "name": "Industrial Leather Wireframe Armchair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Industrial Leather Wireframe Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-industrial-leather-wireframe-armchair/industrial_leather_wireframe_armchair.webp",
    "images": [
      "assets/products/chairs/cat-industrial-leather-wireframe-armchair/industrial_leather_wireframe_armchair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-light-gray-chevronpillow-club-chair",
    "name": "Light Gray Chevronpillow Club Chair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Light Gray Chevronpillow Club Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-light-gray-chevronpillow-club-chair/light_gray_chevronpillow_club_chair.webp",
    "images": [
      "assets/products/chairs/cat-light-gray-chevronpillow-club-chair/light_gray_chevronpillow_club_chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-light-grey-fabric-swivel-barrel-chair-b",
    "name": "Light Grey Fabric Swivel Barrel Chair B",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Light Grey Fabric Swivel Barrel Chair B combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-light-grey-fabric-swivel-barrel-chair-b/Light Grey Fabric Swivel Barrel Chair B.webp",
    "images": [
      "assets/products/chairs/cat-light-grey-fabric-swivel-barrel-chair-b/Light Grey Fabric Swivel Barrel Chair B.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-light-oak-armchair-with-grey-yellow-cushions",
    "name": "Light Oak Armchair With Grey Yellow Cushions",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Light Oak Armchair With Grey Yellow Cushions combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-light-oak-armchair-with-grey-yellow-cushions/Light Oak Armchair with Grey & Yellow Cushions.webp",
    "images": [
      "assets/products/chairs/cat-light-oak-armchair-with-grey-yellow-cushions/Light Oak Armchair with Grey & Yellow Cushions.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-light-oak-armchair-with-navy-cushion",
    "name": "Light Oak Armchair With Navy Cushion",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Light Oak Armchair With Navy Cushion combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-light-oak-armchair-with-navy-cushion/Light Oak Armchair with Navy Cushion.webp",
    "images": [
      "assets/products/chairs/cat-light-oak-armchair-with-navy-cushion/Light Oak Armchair with Navy Cushion.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-light-oak-armchair-with-tan-leather-cushion",
    "name": "Light Oak Armchair With Tan Leather Cushion",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Light Oak Armchair With Tan Leather Cushion combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-light-oak-armchair-with-tan-leather-cushion/Light Oak Armchair with Tan Leather Cushion.webp",
    "images": [
      "assets/products/chairs/cat-light-oak-armchair-with-tan-leather-cushion/Light Oak Armchair with Tan Leather Cushion.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-light-oak-slatted-frame-sofa",
    "name": "Light Oak Slatted Frame Sofa",
    "category": "wooden-couches",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Light Oak Slatted Frame Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wooden-couches/cat-light-oak-slatted-frame-sofa/Light Oak Slatted Frame Sofa - Perspective View.webp",
    "images": [
      "assets/products/wooden-couches/cat-light-oak-slatted-frame-sofa/Light Oak Slatted Frame Sofa - Perspective View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-light-wood-armchair-with-charcoal-seat",
    "name": "Light Wood Armchair With Charcoal Seat",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Light Wood Armchair With Charcoal Seat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-light-wood-armchair-with-charcoal-seat/Light Wood Armchair with Charcoal Seat.webp",
    "images": [
      "assets/products/chairs/cat-light-wood-armchair-with-charcoal-seat/Light Wood Armchair with Charcoal Seat.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-light-wood-lounge-armchair-with-grey-cushions",
    "name": "Light Wood Lounge Armchair With Grey Cushions",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Light Wood Lounge Armchair With Grey Cushions combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-light-wood-lounge-armchair-with-grey-cushions/Light Wood Lounge Armchair with Grey Cushions.webp",
    "images": [
      "assets/products/chairs/cat-light-wood-lounge-armchair-with-grey-cushions/Light Wood Lounge Armchair with Grey Cushions.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-marbled-blue-damask-armchair",
    "name": "Marbled Blue Damask Armchair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Marbled Blue Damask Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-marbled-blue-damask-armchair/marbled_blue_damask_armchair.webp",
    "images": [
      "assets/products/chairs/cat-marbled-blue-damask-armchair/marbled_blue_damask_armchair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-mid-century-teak-armchair-with-sage-cushions",
    "name": "Mid Century Teak Armchair With Sage Cushions",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Mid Century Teak Armchair With Sage Cushions combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-mid-century-teak-armchair-with-sage-cushions/Mid-Century Teak Armchair with Sage Cushions.webp",
    "images": [
      "assets/products/chairs/cat-mid-century-teak-armchair-with-sage-cushions/Mid-Century Teak Armchair with Sage Cushions.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-slatted-frame-sofa",
    "name": "Minimalist Wood Slatted Frame Sofa",
    "category": "wooden-couches",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Slatted Frame Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wooden-couches/cat-minimalist-wood-slatted-frame-sofa/Minimalist Wood Slatted Frame Sofa.webp",
    "images": [
      "assets/products/wooden-couches/cat-minimalist-wood-slatted-frame-sofa/Minimalist Wood Slatted Frame Sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-modern-architectural-walnut-armchair",
    "name": "Modern Architectural Walnut Armchair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Modern Architectural Walnut Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-modern-architectural-walnut-armchair/Modern Architectural Walnut Armchair.webp",
    "images": [
      "assets/products/chairs/cat-modern-architectural-walnut-armchair/Modern Architectural Walnut Armchair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-modern-grey-armchair-with-dark-frame",
    "name": "Modern Grey Armchair With Dark Frame",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Modern Grey Armchair With Dark Frame combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-modern-grey-armchair-with-dark-frame/Modern Grey Armchair with Dark Frame.webp",
    "images": [
      "assets/products/chairs/cat-modern-grey-armchair-with-dark-frame/Modern Grey Armchair with Dark Frame.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-modern-office-training-folding-chair",
    "name": "Modern Office Training Folding Chair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Modern Office Training Folding Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-modern-office-training-folding-chair/Office Training Chair - Angle Perspective.webp",
    "images": [
      "assets/products/chairs/cat-modern-office-training-folding-chair/Office Training Chair - Angle Perspective.webp",
      "assets/products/chairs/cat-modern-office-training-folding-chair/Office Training Chair - Front View.webp",
      "assets/products/chairs/cat-modern-office-training-folding-chair/Office Training Chair - Side View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-mustard-yellow-fabric-accent-chair",
    "name": "Mustard Yellow Fabric Accent Chair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Mustard Yellow Fabric Accent Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-mustard-yellow-fabric-accent-chair/Mustard Yellow Fabric Accent Chair.webp",
    "images": [
      "assets/products/chairs/cat-mustard-yellow-fabric-accent-chair/Mustard Yellow Fabric Accent Chair.webp"
    ],
    "colors": []
  },
  {
    "id": "mustard-yellow-perforated-accent-chair",
    "name": "Mustard Yellow Perforated Accent Chair",
    "category": "cafe-chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Mustard Yellow Perforated Accent Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/mustard-yellow-perforated-accent-chair/mustard_yellow_perforated_accent_chair.webp",
    "images": [
      "assets/products/cafe-chairs/mustard-yellow-perforated-accent-chair/mustard_yellow_perforated_accent_chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-nailhead-offwhite-linen-club-chair",
    "name": "Nailhead Offwhite Linen Club Chair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Nailhead Offwhite Linen Club Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-nailhead-offwhite-linen-club-chair/nailhead_offwhite_linen_club_chair.webp",
    "images": [
      "assets/products/chairs/cat-nailhead-offwhite-linen-club-chair/nailhead_offwhite_linen_club_chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-oak-crimsonpad-ladderback-chair",
    "name": "Oak Crimsonpad Ladderback Chair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Oak Crimsonpad Ladderback Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-oak-crimsonpad-ladderback-chair/oak_crimsonpad_ladderback_chair.webp",
    "images": [
      "assets/products/chairs/cat-oak-crimsonpad-ladderback-chair/oak_crimsonpad_ladderback_chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-offwhite-boucle-tub-chair-and-ottoman",
    "name": "Offwhite Boucle Tub Chair And Ottoman",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Offwhite Boucle Tub Chair And Ottoman combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-offwhite-boucle-tub-chair-and-ottoman/offwhite_boucle_tub_chair_and_ottoman.webp",
    "images": [
      "assets/products/chairs/cat-offwhite-boucle-tub-chair-and-ottoman/offwhite_boucle_tub_chair_and_ottoman.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-olive-green-leather-swivel-armchair",
    "name": "Olive Green Leather Swivel Armchair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Olive Green Leather Swivel Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-olive-green-leather-swivel-armchair/Olive Green Leather Swivel Armchair.webp",
    "images": [
      "assets/products/chairs/cat-olive-green-leather-swivel-armchair/Olive Green Leather Swivel Armchair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-pair-of-grey-fabric-accent-chairs",
    "name": "Pair Of Grey Fabric Accent Chairs",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Pair Of Grey Fabric Accent Chairs combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-pair-of-grey-fabric-accent-chairs/Pair of Grey Fabric Accent Chairs.webp",
    "images": [
      "assets/products/chairs/cat-pair-of-grey-fabric-accent-chairs/Pair of Grey Fabric Accent Chairs.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-pair-of-teak-armchairs-with-teal-and-cognac-leather",
    "name": "Pair Of Teak Armchairs With Teal And Cognac Leather",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Pair Of Teak Armchairs With Teal And Cognac Leather combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-pair-of-teak-armchairs-with-teal-and-cognac-leather/Pair of Teak Armchairs with Teal and Cognac Leather.webp",
    "images": [
      "assets/products/chairs/cat-pair-of-teak-armchairs-with-teal-and-cognac-leather/Pair of Teak Armchairs with Teal and Cognac Leather.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-paisley-pattern-velvet-brass-armchair",
    "name": "Paisley Pattern Velvet Brass Armchair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Paisley Pattern Velvet Brass Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-paisley-pattern-velvet-brass-armchair/paisley_pattern_velvet_brass_armchair.webp",
    "images": [
      "assets/products/chairs/cat-paisley-pattern-velvet-brass-armchair/paisley_pattern_velvet_brass_armchair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-pinstripe-fabric-wingback-armchair",
    "name": "Pinstripe Fabric Wingback Armchair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Pinstripe Fabric Wingback Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-pinstripe-fabric-wingback-armchair/Pinstripe Fabric Wingback Armchair.webp",
    "images": [
      "assets/products/chairs/cat-pinstripe-fabric-wingback-armchair/Pinstripe Fabric Wingback Armchair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-popart-print-wingback-armchair",
    "name": "Popart Print Wingback Armchair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Popart Print Wingback Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-popart-print-wingback-armchair/popart_print_wingback_armchair.webp",
    "images": [
      "assets/products/chairs/cat-popart-print-wingback-armchair/popart_print_wingback_armchair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-purple-velvet-accent-tub-chair",
    "name": "Purple Velvet Accent Tub Chair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Purple Velvet Accent Tub Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-purple-velvet-accent-tub-chair/Purple Velvet Accent Tub Chair.webp",
    "images": [
      "assets/products/chairs/cat-purple-velvet-accent-tub-chair/Purple Velvet Accent Tub Chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-repute-executive-office-chair",
    "name": "Repute Executive Office Workstation",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Repute Executive Office Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-repute-executive-office-chair/Repute Executive Office Chair - Angle Perspective.webp",
    "images": [
      "assets/products/office-workstations/cat-repute-executive-office-chair/Repute Executive Office Chair - Angle Perspective.webp",
      "assets/products/office-workstations/cat-repute-executive-office-chair/Repute Executive Office Chair - Front View.webp",
      "assets/products/office-workstations/cat-repute-executive-office-chair/Repute Executive Office Chair - Side View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-round-grey-fabric-accent-chair",
    "name": "Round Grey Fabric Accent Chair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Round Grey Fabric Accent Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-round-grey-fabric-accent-chair/Round Grey Fabric Accent Chair.webp",
    "images": [
      "assets/products/chairs/cat-round-grey-fabric-accent-chair/Round Grey Fabric Accent Chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-royal-purple-velvet-barrel-chair",
    "name": "Royal Purple Velvet Barrel Chair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Royal Purple Velvet Barrel Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-royal-purple-velvet-barrel-chair/royal_purple_velvet_barrel_chair.webp",
    "images": [
      "assets/products/chairs/cat-royal-purple-velvet-barrel-chair/royal_purple_velvet_barrel_chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-saddle-brown-highback-wingback-armchair",
    "name": "Saddle Brown Highback Wingback Armchair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Saddle Brown Highback Wingback Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-saddle-brown-highback-wingback-armchair/saddle_brown_highback_wingback_armchair.webp",
    "images": [
      "assets/products/chairs/cat-saddle-brown-highback-wingback-armchair/saddle_brown_highback_wingback_armchair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-scalloped-velvet-barrel-accent-chair",
    "name": "Scalloped Velvet Barrel Accent Chair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Scalloped Velvet Barrel Accent Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-scalloped-velvet-barrel-accent-chair/Scalloped Velvet Barrel Accent Chair.webp",
    "images": [
      "assets/products/chairs/cat-scalloped-velvet-barrel-accent-chair/Scalloped Velvet Barrel Accent Chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-scandinavian-dining-room-table-and-chair-set",
    "name": "Scandinavian Dining Room Table And Chair Set",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Scandinavian Dining Room Table And Chair Set combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-scandinavian-dining-room-table-and-chair-set/Scandinavian Dining Room Table and Chair Set.webp",
    "images": [
      "assets/products/chairs/cat-scandinavian-dining-room-table-and-chair-set/Scandinavian Dining Room Table and Chair Set.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-seafoam-green-plush-armchair",
    "name": "Seafoam Green Plush Armchair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Seafoam Green Plush Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-seafoam-green-plush-armchair/seafoam_green_plush_armchair.webp",
    "images": [
      "assets/products/chairs/cat-seafoam-green-plush-armchair/seafoam_green_plush_armchair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-tan-nailhead-sofa-and-chair-set",
    "name": "Tan Nailhead Sofa And Chair Set",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Tan Nailhead Sofa And Chair Set combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-tan-nailhead-sofa-and-chair-set/tan_nailhead_sofa_and_chair_set.webp",
    "images": [
      "assets/products/sofas/cat-tan-nailhead-sofa-and-chair-set/tan_nailhead_sofa_and_chair_set.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-tartan-plaid-upholstered-armchairs-set",
    "name": "Tartan Plaid Upholstered Armchairs Set",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Tartan Plaid Upholstered Armchairs Set combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-tartan-plaid-upholstered-armchairs-set/Tartan Plaid Upholstered Armchairs Set.webp",
    "images": [
      "assets/products/chairs/cat-tartan-plaid-upholstered-armchairs-set/Tartan Plaid Upholstered Armchairs Set.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-teak-armchair-with-terracotta-cushion",
    "name": "Teak Armchair With Terracotta Cushion",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Teak Armchair With Terracotta Cushion combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-teak-armchair-with-terracotta-cushion/Teak Armchair with Terracotta Cushion.webp",
    "images": [
      "assets/products/chairs/cat-teak-armchair-with-terracotta-cushion/Teak Armchair with Terracotta Cushion.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-teak-living-room-sofa-armchair-suite-set",
    "name": "Teak Living Room Sofa Armchair Suite Set",
    "category": "sofas",
    "type": "sofa",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Teak Living Room Sofa Armchair Suite Set combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-teak-living-room-sofa-armchair-suite-set/Teak Living Room Sofa & Armchair Suite Set.webp",
    "images": [
      "assets/products/sofas/cat-teak-living-room-sofa-armchair-suite-set/Teak Living Room Sofa & Armchair Suite Set.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-teal-blue-round-swivel-accent-chair",
    "name": "Teal Blue Round Swivel Accent Chair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Teal Blue Round Swivel Accent Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-teal-blue-round-swivel-accent-chair/Teal Blue Round Swivel Accent Chair.webp",
    "images": [
      "assets/products/chairs/cat-teal-blue-round-swivel-accent-chair/Teal Blue Round Swivel Accent Chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-terracotta-cylinder-tub-armchair",
    "name": "Terracotta Cylinder Tub Armchair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Terracotta Cylinder Tub Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-terracotta-cylinder-tub-armchair/Terracotta Cylinder Tub Armchair.webp",
    "images": [
      "assets/products/chairs/cat-terracotta-cylinder-tub-armchair/Terracotta Cylinder Tub Armchair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-terracotta-leather-low-profile-accent-chair",
    "name": "Terracotta Leather Low Profile Accent Chair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Terracotta Leather Low Profile Accent Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-terracotta-leather-low-profile-accent-chair/Terracotta Leather Low Profile Accent Chair.webp",
    "images": [
      "assets/products/chairs/cat-terracotta-leather-low-profile-accent-chair/Terracotta Leather Low Profile Accent Chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-terracotta-sculptural-velvet-tub-armchair",
    "name": "Terracotta Sculptural Velvet Tub Armchair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Terracotta Sculptural Velvet Tub Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-terracotta-sculptural-velvet-tub-armchair/Terracotta Sculptural Velvet Tub Armchair.webp",
    "images": [
      "assets/products/chairs/cat-terracotta-sculptural-velvet-tub-armchair/Terracotta Sculptural Velvet Tub Armchair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-terracotta-two-tone-round-tub-chair",
    "name": "Terracotta Two Tone Round Tub Chair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Terracotta Two Tone Round Tub Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-terracotta-two-tone-round-tub-chair/Terracotta Two-Tone Round Tub Chair.webp",
    "images": [
      "assets/products/chairs/cat-terracotta-two-tone-round-tub-chair/Terracotta Two-Tone Round Tub Chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-textured-boucle-tub-chair-with-wooden-frame",
    "name": "Textured Boucle Tub Chair With Wooden Frame",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Textured Boucle Tub Chair With Wooden Frame combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-textured-boucle-tub-chair-with-wooden-frame/Textured Boucle Tub Chair with Wooden Frame.webp",
    "images": [
      "assets/products/chairs/cat-textured-boucle-tub-chair-with-wooden-frame/Textured Boucle Tub Chair with Wooden Frame.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-tufted-light-blue-wingback-armchair",
    "name": "Tufted Light Blue Wingback Armchair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Tufted Light Blue Wingback Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-tufted-light-blue-wingback-armchair/Tufted Light Blue Wingback Armchair.webp",
    "images": [
      "assets/products/chairs/cat-tufted-light-blue-wingback-armchair/Tufted Light Blue Wingback Armchair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-velvet-sage-gray-plush-armchair",
    "name": "Velvet Sage Gray Plush Armchair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Velvet Sage Gray Plush Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-velvet-sage-gray-plush-armchair/velvet_sage_gray_plush_armchair.webp",
    "images": [
      "assets/products/chairs/cat-velvet-sage-gray-plush-armchair/velvet_sage_gray_plush_armchair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-vintage-floral-pattern-upholstered-club-armchair",
    "name": "Vintage Floral Pattern Upholstered Club Armchair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Vintage Floral Pattern Upholstered Club Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-vintage-floral-pattern-upholstered-club-armchair/Vintage Floral Pattern Upholstered Club Armchair.webp",
    "images": [
      "assets/products/chairs/cat-vintage-floral-pattern-upholstered-club-armchair/Vintage Floral Pattern Upholstered Club Armchair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-walnut-armchair-with-brown-leather-cushion",
    "name": "Walnut Armchair With Brown Leather Cushion",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Walnut Armchair With Brown Leather Cushion combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-walnut-armchair-with-brown-leather-cushion/Walnut Armchair with Brown Leather Cushion.webp",
    "images": [
      "assets/products/chairs/cat-walnut-armchair-with-brown-leather-cushion/Walnut Armchair with Brown Leather Cushion.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-walnut-armchair-with-grey-cushion-b",
    "name": "Walnut Armchair With Grey Cushion B",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Walnut Armchair With Grey Cushion B combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-walnut-armchair-with-grey-cushion-b/Walnut Armchair with Grey Cushion B.webp",
    "images": [
      "assets/products/chairs/cat-walnut-armchair-with-grey-cushion-b/Walnut Armchair with Grey Cushion B.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-walnut-dining-table-set-with-4-chairs",
    "name": "Walnut Dining Table Set With 4 Chairs",
    "category": "dining-tables",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Walnut Dining Table Set With 4 Chairs combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/dining-tables/cat-walnut-dining-table-set-with-4-chairs/Walnut Dining Table Set with 4 Chairs.webp",
    "images": [
      "assets/products/dining-tables/cat-walnut-dining-table-set-with-4-chairs/Walnut Dining Table Set with 4 Chairs.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-walnut-frame-armchair-with-beige-cushion",
    "name": "Walnut Frame Armchair With Beige Cushion",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Walnut Frame Armchair With Beige Cushion combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-walnut-frame-armchair-with-beige-cushion/Walnut Frame Armchair with Beige Cushion.webp",
    "images": [
      "assets/products/chairs/cat-walnut-frame-armchair-with-beige-cushion/Walnut Frame Armchair with Beige Cushion.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-walnut-frame-lounge-armchair",
    "name": "Walnut Frame Lounge Armchair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Walnut Frame Lounge Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-walnut-frame-lounge-armchair/Walnut Frame Lounge Armchair.webp",
    "images": [
      "assets/products/chairs/cat-walnut-frame-lounge-armchair/Walnut Frame Lounge Armchair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-warm-tan-tropicalpillow-armchair",
    "name": "Warm Tan Tropicalpillow Armchair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Warm Tan Tropicalpillow Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-warm-tan-tropicalpillow-armchair/warm_tan_tropicalpillow_armchair.webp",
    "images": [
      "assets/products/chairs/cat-warm-tan-tropicalpillow-armchair/warm_tan_tropicalpillow_armchair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-yellow-fabric-tub-armchair-with-wooden-legs",
    "name": "Yellow Fabric Tub Armchair With Wooden Legs",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Yellow Fabric Tub Armchair With Wooden Legs combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-yellow-fabric-tub-armchair-with-wooden-legs/Yellow Fabric Tub Armchair with Wooden Legs.webp",
    "images": [
      "assets/products/chairs/cat-yellow-fabric-tub-armchair-with-wooden-legs/Yellow Fabric Tub Armchair with Wooden Legs.webp"
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
    "img": "assets/products/chairs/lmw-001/LMW-001.webp",
    "badge": "",
    "description": "The LMW-001 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-001/LMW-001.webp"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "lmw-073",
    "name": "LMW-073",
    "category": "center-tables",
    "type": "table",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/products/chairs/lmw-002/LMW-002_2.webp",
    "badge": "",
    "description": "The LMW-073 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Grey or Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-002/LMW-002_2.webp"
    ],
    "colors": [
      "Grey",
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
    "rating": 4.7,
    "img": "assets/products/chairs/lmw-003/LMW-003.webp",
    "badge": "",
    "description": "The LMW-002 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Brown tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-003/LMW-003.webp"
    ],
    "colors": [
      "Brown"
    ]
  },
  {
    "id": "lmw-003",
    "name": "LMW-003",
    "category": "chairs",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/products/chairs/lmw-004/LMW-004.webp",
    "badge": "",
    "description": "The LMW-003 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-004/LMW-004.webp"
    ],
    "colors": [
      "Red"
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
    "img": "assets/products/chairs/lmw-005/LMW-005.webp",
    "badge": "",
    "description": "The LMW-004 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-005/LMW-005.webp"
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
    "rating": 4.7,
    "img": "assets/products/chairs/lmw-006/LMW-006.webp",
    "badge": "",
    "description": "The LMW-005 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Brown tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-006/LMW-006.webp"
    ],
    "colors": [
      "Brown"
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
    "img": "assets/products/chairs/lmw-007/LMW-007.webp",
    "badge": "",
    "description": "The LMW-006 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-007/LMW-007.webp"
    ],
    "colors": [
      "Red"
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
    "img": "assets/products/chairs/lmw-008/LMW-008.webp",
    "badge": "New",
    "description": "A perfect blend of comfort and style. The LMW-007 chair showcases a premium blend of classic craftsmanship and modern design. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-008/LMW-008.webp"
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
    "img": "assets/products/chairs/lmw-009/LMW-009.webp",
    "badge": "",
    "description": "The LMW-008 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-009/LMW-009.webp"
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
    "img": "assets/products/chairs/lmw-010/LMW-010.webp",
    "badge": "Bestseller",
    "description": "The LMW-009 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Yellow tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-010/LMW-010.webp"
    ],
    "colors": [
      "Yellow"
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
    "img": "assets/products/chairs/lmw-011/LMW-011.webp",
    "badge": "",
    "description": "The LMW-010 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-011/LMW-011.webp"
    ],
    "colors": [
      "Red"
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
    "img": "assets/products/chairs/lmw-012/LMW-012.webp",
    "badge": "",
    "description": "The LMW-011 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-012/LMW-012.webp"
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
    "img": "assets/products/chairs/lmw-013/LMW-013.webp",
    "badge": "",
    "description": "The LMW-012 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-013/LMW-013.webp"
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
    "img": "assets/products/chairs/lmw-014/LMW-014.webp",
    "badge": "",
    "description": "The LMW-013 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-014/LMW-014.webp"
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
    "img": "assets/products/chairs/lmw-015/LMW-015.webp",
    "badge": "New",
    "description": "The LMW-014 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-015/LMW-015.webp"
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
    "rating": 4.3,
    "img": "assets/products/chairs/lmw-016/LMW-016.webp",
    "badge": "",
    "description": "The LMW-015 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red or Brown tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-016/LMW-016.webp",
      "assets/products/chairs/lmw-016/LMW-016_2.webp"
    ],
    "colors": [
      "Red",
      "Brown"
    ]
  },
  {
    "id": "lmw-016",
    "name": "LMW-016",
    "category": "chairs",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.7,
    "img": "assets/products/chairs/lmw-017/LMW-017.webp",
    "badge": "",
    "description": "The LMW-016 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Brown tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-017/LMW-017.webp"
    ],
    "colors": [
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
    "rating": 4.3,
    "img": "assets/products/chairs/lmw-018/LMW-018.webp",
    "badge": "",
    "description": "The LMW-017 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-018/LMW-018.webp"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "lmw-018",
    "name": "LMW-018",
    "category": "chairs",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.7,
    "img": "assets/products/chairs/lmw-020/LMW-020_2.webp",
    "badge": "",
    "description": "The LMW-018 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful White or Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-020/LMW-020_2.webp"
    ],
    "colors": [
      "White",
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
    "rating": 4.3,
    "img": "assets/products/chairs/lmw-022/LMW-022.webp",
    "badge": "",
    "description": "A perfect blend of comfort and style. The LMW-019 chair showcases a premium blend of classic craftsmanship and modern design. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Blue tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-022/LMW-022.webp"
    ],
    "colors": [
      "Blue"
    ]
  },
  {
    "id": "cat-cherry-wood-6seater-dining-set",
    "name": "Cherry Wood Dining Set",
    "category": "dining-tables",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cherry Wood Dining Set combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/dining-tables/cat-cherry-wood-6seater-dining-set/cherry_wood_6seater_dining_set.webp",
    "images": [
      "assets/products/dining-tables/cat-cherry-wood-6seater-dining-set/cherry_wood_6seater_dining_set.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-honey-oak-8seater-dining-suite",
    "name": "Honey Oak Dining Suite",
    "category": "dining-tables",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Honey Oak Dining Suite combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/dining-tables/cat-honey-oak-8seater-dining-suite/honey_oak_8seater_dining_suite.webp",
    "images": [
      "assets/products/dining-tables/cat-honey-oak-8seater-dining-suite/honey_oak_8seater_dining_suite.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-mahogany-crossback-4seater-dining-set",
    "name": "Mahogany Crossback 4 Seater Dining Set",
    "category": "dining-tables",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Mahogany Crossback 4 Seater Dining Set combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/dining-tables/cat-mahogany-crossback-4seater-dining-set/mahogany_crossback_4seater_dining_set.webp",
    "images": [
      "assets/products/dining-tables/cat-mahogany-crossback-4seater-dining-set/mahogany_crossback_4seater_dining_set.webp"
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
    "img": "assets/products/chairs/rubco-easy-chair-cloth-type-big/easy_chair_cloth_type_big.webp",
    "images": [
      "assets/products/chairs/rubco-easy-chair-cloth-type-big/easy_chair_cloth_type_big.webp",
      "assets/products/chairs/rubco-easy-chair-cloth-type-big/easy_chair_cloth_type_big_1.webp",
      "assets/products/chairs/rubco-easy-chair-cloth-type-big/easy_chair_cloth_type_big_2.webp",
      "assets/products/chairs/rubco-easy-chair-cloth-type-big/easy_chair_cloth_type_big_3.webp",
      "assets/products/chairs/rubco-easy-chair-cloth-type-big/easy_chair_cloth_type_big_4.webp",
      "assets/products/chairs/rubco-easy-chair-cloth-type-big/easy_chair_cloth_type_big_5.webp"
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
    "img": "assets/products/chairs/rubco-easy-chair-cloth-type-small/easy_chair_cloth_type_small.webp",
    "images": [
      "assets/products/chairs/rubco-easy-chair-cloth-type-small/easy_chair_cloth_type_small.webp",
      "assets/products/chairs/rubco-easy-chair-cloth-type-small/easy_chair_cloth_type_small_1.webp",
      "assets/products/chairs/rubco-easy-chair-cloth-type-small/easy_chair_cloth_type_small_2.webp",
      "assets/products/chairs/rubco-easy-chair-cloth-type-small/easy_chair_cloth_type_small_3.webp",
      "assets/products/chairs/rubco-easy-chair-cloth-type-small/easy_chair_cloth_type_small_4.webp"
    ],
    "listingUrl": "https://rubcobangalore.com/furniture/easy-chair-cloth-type-small",
    "colors": [
      "Honey",
      "Teak"
    ]
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
    "img": "assets/products/chairs/rubco-grand-father-chair/grand_father_chair.webp",
    "images": [
      "assets/products/chairs/rubco-grand-father-chair/grand_father_chair.webp",
      "assets/products/chairs/rubco-grand-father-chair/grand_father_chair_1.webp",
      "assets/products/chairs/rubco-grand-father-chair/grand_father_chair_2.webp",
      "assets/products/chairs/rubco-grand-father-chair/grand_father_chair_3.webp"
    ],
    "listingUrl": "https://rubcobangalore.com/furniture/grand-father-chair",
    "colors": [
      "Honey",
      "Teak"
    ]
  },
  {
    "id": "cat-amethyst-sectional-sofa",
    "name": "Amethyst Sectional Sofa",
    "category": "corner-sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Amethyst Sectional Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/cat-amethyst-sectional-sofa/Amethyst Sectional Sofa - Isolated L-Shape View.webp",
    "images": [
      "assets/products/corner-sofas/cat-amethyst-sectional-sofa/Amethyst Sectional Sofa - Isolated L-Shape View.webp",
      "assets/products/corner-sofas/cat-amethyst-sectional-sofa/Amethyst Sectional Sofa - With Coffee Table View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-beige-brown-chaise-sectional",
    "name": "Beige Brown Chaise Sectional",
    "category": "corner-sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Beige Brown Chaise Sectional combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/cat-beige-brown-chaise-sectional/beige_brown_chaise_sectional.webp",
    "images": [
      "assets/products/corner-sofas/cat-beige-brown-chaise-sectional/beige_brown_chaise_sectional.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-beige-fabric-corner-sectional",
    "name": "Beige Fabric Corner Sectional",
    "category": "corner-sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Beige Fabric Corner Sectional combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/cat-beige-fabric-corner-sectional/beige_fabric_corner_sectional.webp",
    "images": [
      "assets/products/corner-sofas/cat-beige-fabric-corner-sectional/beige_fabric_corner_sectional.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-beige-leather-curved-modular-sectional-sofa-suite",
    "name": "Beige Leather Curved Modular Sectional Sofa Suite",
    "category": "corner-sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Beige Leather Curved Modular Sectional Sofa Suite combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/cat-beige-leather-curved-modular-sectional-sofa-suite/Beige Leather Curved Modular Sectional Sofa Suite.webp",
    "images": [
      "assets/products/corner-sofas/cat-beige-leather-curved-modular-sectional-sofa-suite/Beige Leather Curved Modular Sectional Sofa Suite.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-blue-leather-reclining-sectional",
    "name": "Blue Leather Reclining Sectional",
    "category": "corner-sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Blue Leather Reclining Sectional combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/cat-blue-leather-reclining-sectional/blue_leather_reclining_sectional.webp",
    "images": [
      "assets/products/corner-sofas/cat-blue-leather-reclining-sectional/blue_leather_reclining_sectional.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-charcoal-chaise-sectional-with-throw",
    "name": "Charcoal Chaise Sectional With Throw",
    "category": "corner-sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Charcoal Chaise Sectional With Throw combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/cat-charcoal-chaise-sectional-with-throw/charcoal_chaise_sectional_with_throw.webp",
    "images": [
      "assets/products/corner-sofas/cat-charcoal-chaise-sectional-with-throw/charcoal_chaise_sectional_with_throw.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-charcoal-grey-l-shape-sectional-sofa-c",
    "name": "Charcoal Grey L Shape Sectional Sofa C",
    "category": "corner-sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Charcoal Grey L Shape Sectional Sofa C combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/cat-charcoal-grey-l-shape-sectional-sofa-c/Charcoal Grey L-Shape Sectional Sofa C.webp",
    "images": [
      "assets/products/corner-sofas/cat-charcoal-grey-l-shape-sectional-sofa-c/Charcoal Grey L-Shape Sectional Sofa C.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cognac-leather-sectional-sofa-collection",
    "name": "Cognac Leather Sectional Sofa Collection",
    "category": "corner-sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cognac Leather Sectional Sofa Collection combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/cat-cognac-leather-sectional-sofa-collection/Cognac Leather Sectional Sofa Collection.webp",
    "images": [
      "assets/products/corner-sofas/cat-cognac-leather-sectional-sofa-collection/Cognac Leather Sectional Sofa Collection.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-leather-corner-sectional-sofa",
    "name": "Cream Leather Corner Sectional Sofa",
    "category": "corner-sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Leather Corner Sectional Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/cat-cream-leather-corner-sectional-sofa/Cream Leather Corner Sectional Sofa.webp",
    "images": [
      "assets/products/corner-sofas/cat-cream-leather-corner-sectional-sofa/Cream Leather Corner Sectional Sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-leather-corner-sectional-sofa-with-gold-legs",
    "name": "Cream Leather Corner Sectional Sofa With Gold Legs",
    "category": "corner-sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Leather Corner Sectional Sofa With Gold Legs combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/cat-cream-leather-corner-sectional-sofa-with-gold-legs/Cream Leather Corner Sectional Sofa with Gold Legs.webp",
    "images": [
      "assets/products/corner-sofas/cat-cream-leather-corner-sectional-sofa-with-gold-legs/Cream Leather Corner Sectional Sofa with Gold Legs.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-leather-l-shape-sectional-sofa-b",
    "name": "Cream Leather L Shape Sectional Sofa B",
    "category": "corner-sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Leather L Shape Sectional Sofa B combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/cat-cream-leather-l-shape-sectional-sofa-b/Cream Leather L-Shape Sectional Sofa B.webp",
    "images": [
      "assets/products/corner-sofas/cat-cream-leather-l-shape-sectional-sofa-b/Cream Leather L-Shape Sectional Sofa B.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-leather-modular-sectional-sofa-set",
    "name": "Cream Leather Modular Sectional Sofa Set",
    "category": "corner-sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Leather Modular Sectional Sofa Set combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/cat-cream-leather-modular-sectional-sofa-set/Cream Leather Modular Sectional Sofa Set.webp",
    "images": [
      "assets/products/corner-sofas/cat-cream-leather-modular-sectional-sofa-set/Cream Leather Modular Sectional Sofa Set.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-modular-l-sectional-sofa",
    "name": "Cream Modular L Sectional Sofa",
    "category": "corner-sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Modular L Sectional Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/cat-cream-modular-l-sectional-sofa/cream_modular_l_sectional_sofa.webp",
    "images": [
      "assets/products/corner-sofas/cat-cream-modular-l-sectional-sofa/cream_modular_l_sectional_sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-tufted-lsectional-sofa-comboset",
    "name": "Cream Tufted Lsectional Sofa Comboset",
    "category": "corner-sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Tufted Lsectional Sofa Comboset combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/cat-cream-tufted-lsectional-sofa-comboset/cream_tufted_lsectional_sofa_comboset.webp",
    "images": [
      "assets/products/corner-sofas/cat-cream-tufted-lsectional-sofa-comboset/cream_tufted_lsectional_sofa_comboset.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-curved-light-gray-chaise-lounge",
    "name": "Curved Light Gray Chaise Lounge",
    "category": "corner-sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Curved Light Gray Chaise Lounge combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/cat-curved-light-gray-chaise-lounge/curved_light_gray_chaise_lounge.webp",
    "images": [
      "assets/products/corner-sofas/cat-curved-light-gray-chaise-lounge/curved_light_gray_chaise_lounge.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-charcoal-grey-fabric-corner-sectional-sofa",
    "name": "Dark Charcoal Grey Fabric Corner Sectional Sofa",
    "category": "corner-sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Charcoal Grey Fabric Corner Sectional Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/cat-dark-charcoal-grey-fabric-corner-sectional-sofa/Dark Charcoal Grey Fabric Corner Sectional Sofa.webp",
    "images": [
      "assets/products/corner-sofas/cat-dark-charcoal-grey-fabric-corner-sectional-sofa/Dark Charcoal Grey Fabric Corner Sectional Sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-grey-l-shape-sectional-sofa",
    "name": "Dark Grey L Shape Sectional Sofa",
    "category": "corner-sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Grey L Shape Sectional Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/cat-dark-grey-l-shape-sectional-sofa/Dark Grey L-Shape Sectional Sofa - Front View.webp",
    "images": [
      "assets/products/corner-sofas/cat-dark-grey-l-shape-sectional-sofa/Dark Grey L-Shape Sectional Sofa - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-navy-leather-corner-sectional-sofa-b",
    "name": "Dark Navy Leather Corner Sectional Sofa B",
    "category": "corner-sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Navy Leather Corner Sectional Sofa B combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/cat-dark-navy-leather-corner-sectional-sofa-b/Dark Navy Leather Corner Sectional Sofa B.webp",
    "images": [
      "assets/products/corner-sofas/cat-dark-navy-leather-corner-sectional-sofa-b/Dark Navy Leather Corner Sectional Sofa B.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-navy-leather-l-shape-sectional-sofa",
    "name": "Dark Navy Leather L Shape Sectional Sofa",
    "category": "corner-sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Navy Leather L Shape Sectional Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/cat-dark-navy-leather-l-shape-sectional-sofa/Dark Navy Leather L-Shape Sectional Sofa.webp",
    "images": [
      "assets/products/corner-sofas/cat-dark-navy-leather-l-shape-sectional-sofa/Dark Navy Leather L-Shape Sectional Sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "deep-red-leather-corner-sofa-sectional",
    "name": "Deep Red Leather Corner Sofa Sectional",
    "category": "corner-sofas",
    "type": "sofa",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Deep Red Leather Corner Sofa Sectional combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/deep-red-leather-corner-sofa-sectional/deep-red-leather-corner-sofa-sectional.webp",
    "images": [
      "assets/products/corner-sofas/deep-red-leather-corner-sofa-sectional/deep-red-leather-corner-sofa-sectional.webp"
    ],
    "colors": []
  },
  {
    "id": "deep-red-leather-corner-sofa-sectional-b",
    "name": "Deep Red Leather Corner Sofa Sectional B",
    "category": "corner-sofas",
    "type": "sofa",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Deep Red Leather Corner Sofa Sectional B combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/deep-red-leather-corner-sofa-sectional-b/deep-red-leather-corner-sofa-sectional-b.webp",
    "images": [
      "assets/products/corner-sofas/deep-red-leather-corner-sofa-sectional-b/deep-red-leather-corner-sofa-sectional-b.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dusty-blue-leather-chaise-sectional",
    "name": "Dusty Blue Leather Chaise Sectional",
    "category": "corner-sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dusty Blue Leather Chaise Sectional combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/cat-dusty-blue-leather-chaise-sectional/dusty_blue_leather_chaise_sectional.webp",
    "images": [
      "assets/products/corner-sofas/cat-dusty-blue-leather-chaise-sectional/dusty_blue_leather_chaise_sectional.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-emerald-modern-sectional-chaise-sofa-set",
    "name": "Emerald Modern Sectional Chaise Sofa Set",
    "category": "corner-sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Emerald Modern Sectional Chaise Sofa Set combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/cat-emerald-modern-sectional-chaise-sofa-set/Emerald Sectional Sofa - Angle Perspective.webp",
    "images": [
      "assets/products/corner-sofas/cat-emerald-modern-sectional-chaise-sofa-set/Emerald Sectional Sofa - Angle Perspective.webp",
      "assets/products/corner-sofas/cat-emerald-modern-sectional-chaise-sofa-set/Emerald Sectional Sofa - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-gray-fabric-modular-sectional-suite",
    "name": "Gray Fabric Modular Sectional Suite",
    "category": "corner-sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Gray Fabric Modular Sectional Suite combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/cat-gray-fabric-modular-sectional-suite/gray_fabric_modular_sectional_suite.webp",
    "images": [
      "assets/products/corner-sofas/cat-gray-fabric-modular-sectional-suite/gray_fabric_modular_sectional_suite.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-grey-fabric-modular-sectional-sofa-suite",
    "name": "Grey Fabric Modular Sectional Sofa Suite",
    "category": "corner-sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Grey Fabric Modular Sectional Sofa Suite combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/cat-grey-fabric-modular-sectional-sofa-suite/Grey Fabric Modular Sectional Sofa Suite.webp",
    "images": [
      "assets/products/corner-sofas/cat-grey-fabric-modular-sectional-sofa-suite/Grey Fabric Modular Sectional Sofa Suite.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-heather-gray-lsectional-sofa",
    "name": "Heather Gray Lsectional Sofa",
    "category": "corner-sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Heather Gray Lsectional Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/cat-heather-gray-lsectional-sofa/heather_gray_lsectional_sofa.webp",
    "images": [
      "assets/products/corner-sofas/cat-heather-gray-lsectional-sofa/heather_gray_lsectional_sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-large-grey-leather-sectional-sofa-suite",
    "name": "Large Grey Leather Sectional Sofa Suite",
    "category": "corner-sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Large Grey Leather Sectional Sofa Suite combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/cat-large-grey-leather-sectional-sofa-suite/Large Grey Leather Sectional Sofa Suite.webp",
    "images": [
      "assets/products/corner-sofas/cat-large-grey-leather-sectional-sofa-suite/Large Grey Leather Sectional Sofa Suite.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-light-blue-fabric-sectional-sofa",
    "name": "Light Blue Fabric Sectional Sofa",
    "category": "corner-sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Light Blue Fabric Sectional Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/cat-light-blue-fabric-sectional-sofa/Light Blue Fabric Sectional Sofa.webp",
    "images": [
      "assets/products/corner-sofas/cat-light-blue-fabric-sectional-sofa/Light Blue Fabric Sectional Sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-light-gray-curved-sectional-set",
    "name": "Light Gray Curved Sectional Set",
    "category": "corner-sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Light Gray Curved Sectional Set combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/cat-light-gray-curved-sectional-set/light_gray_curved_sectional_set.webp",
    "images": [
      "assets/products/corner-sofas/cat-light-gray-curved-sectional-set/light_gray_curved_sectional_set.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-light-grey-l-shape-sectional-sofa",
    "name": "Light Grey L Shape Sectional Sofa",
    "category": "corner-sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Light Grey L Shape Sectional Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/cat-light-grey-l-shape-sectional-sofa/Light Grey L-Shape Sectional Sofa - Top and Front Views.webp",
    "images": [
      "assets/products/corner-sofas/cat-light-grey-l-shape-sectional-sofa/Light Grey L-Shape Sectional Sofa - Top and Front Views.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-light-grey-l-shape-sectional-sofa-b",
    "name": "Light Grey L Shape Sectional Sofa B",
    "category": "corner-sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Light Grey L Shape Sectional Sofa B combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/cat-light-grey-l-shape-sectional-sofa-b/Light Grey L-Shape Sectional Sofa B.webp",
    "images": [
      "assets/products/corner-sofas/cat-light-grey-l-shape-sectional-sofa-b/Light Grey L-Shape Sectional Sofa B.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-modern-l-shape-leather-sectional-sofa-suite-with-ottoman",
    "name": "Modern L Shape Leather Sectional Sofa Suite With Ottoman",
    "category": "corner-sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Modern L Shape Leather Sectional Sofa Suite With Ottoman combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/cat-modern-l-shape-leather-sectional-sofa-suite-with-ottoman/Modern L-Shape Leather Sectional Sofa Suite with Ottoman.webp",
    "images": [
      "assets/products/corner-sofas/cat-modern-l-shape-leather-sectional-sofa-suite-with-ottoman/Modern L-Shape Leather Sectional Sofa Suite with Ottoman.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-modern-light-beige-l-shape-sectional-sofa",
    "name": "Modern Light Beige L Shape Sectional Sofa",
    "category": "corner-sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Modern Light Beige L Shape Sectional Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/cat-modern-light-beige-l-shape-sectional-sofa/Modern Light Beige L-Shape Sectional Sofa.webp",
    "images": [
      "assets/products/corner-sofas/cat-modern-light-beige-l-shape-sectional-sofa/Modern Light Beige L-Shape Sectional Sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-modern-u-modular-sectional-suite",
    "name": "Modern U Modular Sectional Suite",
    "category": "corner-sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Modern U Modular Sectional Suite combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/cat-modern-u-modular-sectional-suite/modern_u_modular_sectional_suite.webp",
    "images": [
      "assets/products/corner-sofas/cat-modern-u-modular-sectional-suite/modern_u_modular_sectional_suite.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-oversized-light-gray-curved-sectional",
    "name": "Oversized Light Gray Curved Sectional",
    "category": "corner-sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Oversized Light Gray Curved Sectional combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/cat-oversized-light-gray-curved-sectional/oversized_light_gray_curved_sectional.webp",
    "images": [
      "assets/products/corner-sofas/cat-oversized-light-gray-curved-sectional/oversized_light_gray_curved_sectional.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-soft-gray-chaise-sectional",
    "name": "Soft Gray Chaise Sectional",
    "category": "corner-sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Soft Gray Chaise Sectional combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/cat-soft-gray-chaise-sectional/soft_gray_chaise_sectional.webp",
    "images": [
      "assets/products/corner-sofas/cat-soft-gray-chaise-sectional/soft_gray_chaise_sectional.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-tan-brown-leather-corner-recliner-sectional-sofa",
    "name": "Tan Brown Leather Corner Recliner Sectional Sofa",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Tan Brown Leather Corner Recliner Sectional Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-tan-brown-leather-corner-recliner-sectional-sofa/Tan Brown Leather Corner Recliner Sectional Sofa.webp",
    "images": [
      "assets/products/recliners/cat-tan-brown-leather-corner-recliner-sectional-sofa/Tan Brown Leather Corner Recliner Sectional Sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-tan-leather-l-shape-sectional-sofa",
    "name": "Tan Leather L Shape Sectional Sofa",
    "category": "corner-sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Tan Leather L Shape Sectional Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/corner-sofas/cat-tan-leather-l-shape-sectional-sofa/Tan Leather L-Shape Sectional Sofa.webp",
    "images": [
      "assets/products/corner-sofas/cat-tan-leather-l-shape-sectional-sofa/Tan Leather L-Shape Sectional Sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-architectural-teak-dining-table-b",
    "name": "Architectural Teak Dining Table B",
    "category": "dining-tables",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Architectural Teak Dining Table B combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/dining-tables/cat-architectural-teak-dining-table-b/Architectural Teak Dining Table B.webp",
    "images": [
      "assets/products/dining-tables/cat-architectural-teak-dining-table-b/Architectural Teak Dining Table B.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-architectural-walnut-dining-table",
    "name": "Architectural Walnut Dining Table",
    "category": "dining-tables",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Architectural Walnut Dining Table combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/dining-tables/cat-architectural-walnut-dining-table/Architectural Walnut Dining Table - Front View.webp",
    "images": [
      "assets/products/dining-tables/cat-architectural-walnut-dining-table/Architectural Walnut Dining Table - Front View.webp",
      "assets/products/dining-tables/cat-architectural-walnut-dining-table/Architectural Walnut Dining Table - Side View.webp"
    ],
    "colors": []
  },
  {
    "id": "cabin-boat-shaped-conference-table",
    "name": "Cabin Boat-Shaped Conference Table",
    "category": "office-workstations",
    "type": "conference table",
    "material": "Engineered Wood / Dark Walnut Laminate",
    "designer": "LayerMax Signature",
    "rating": 4.7,
    "badge": "",
    "description": "A boat-shaped conference table in dark walnut seating eight to ten, with a recessed cable channel down the centre and solid panel bases. Sized for mid-room board and meeting cabins.",
    "img": "assets/products/office-workstations/cabin-boat-shaped-conference-table/Cabin Boat-Shaped Conference Table - Front View.webp",
    "images": [
      "assets/products/office-workstations/cabin-boat-shaped-conference-table/Cabin Boat-Shaped Conference Table - Front View.webp",
      "assets/products/office-workstations/cabin-boat-shaped-conference-table/Cabin Boat-Shaped Conference Table - View 2.webp"
    ],
    "colors": []
  },
  {
    "id": "cabin-steel-frame-writing-desk-red",
    "name": "Cabin Steel-Frame Writing Desk — Red",
    "category": "office-workstations",
    "type": "desk",
    "material": "Dark Walnut Laminate Top / Powder-Coated Steel Frame",
    "designer": "LayerMax Signature",
    "rating": 4.7,
    "badge": "",
    "description": "A compact writing desk on a red powder-coated steel frame with a dark walnut top and a full modesty panel. A bright, low-footprint option for home offices and study rooms.",
    "img": "assets/products/office-workstations/cabin-steel-frame-writing-desk-red/Cabin Steel-Frame Writing Desk - Red - Front View.webp",
    "images": [
      "assets/products/office-workstations/cabin-steel-frame-writing-desk-red/Cabin Steel-Frame Writing Desk - Red - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cabin-computer-desk-with-keyboard-tray",
    "name": "Cabin Computer Desk with Keyboard Tray",
    "category": "office-workstations",
    "type": "desk",
    "material": "Engineered Wood / Walnut Laminate",
    "designer": "LayerMax Signature",
    "rating": 4.7,
    "badge": "",
    "description": "A walnut computer desk with a pull-out keyboard tray, a central drawer and an enclosed CPU cabinet on one side. Castors on the front legs make it easy to reposition.",
    "img": "assets/products/office-workstations/cabin-computer-desk-with-keyboard-tray/Cabin Computer Desk with Keyboard Tray - Front View.webp",
    "images": [
      "assets/products/office-workstations/cabin-computer-desk-with-keyboard-tray/Cabin Computer Desk with Keyboard Tray - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cabin-computer-table-with-drawer-pedestal",
    "name": "Cabin Computer Table with Drawer Pedestal",
    "category": "office-workstations",
    "type": "desk",
    "material": "Engineered Wood / Walnut Laminate",
    "designer": "LayerMax Signature",
    "rating": 4.7,
    "badge": "",
    "description": "A computer table combining a three-drawer pedestal, a sliding keyboard tray and an open CPU bay. A complete single-user workstation in under four feet of width.",
    "img": "assets/products/office-workstations/cabin-computer-table-with-drawer-pedestal/Cabin Computer Table with Drawer Pedestal - Front View.webp",
    "images": [
      "assets/products/office-workstations/cabin-computer-table-with-drawer-pedestal/Cabin Computer Table with Drawer Pedestal - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cabin-curved-panel-study-desk",
    "name": "Cabin Curved-Panel Study Desk",
    "category": "office-workstations",
    "type": "desk",
    "material": "Engineered Wood / Walnut Laminate",
    "designer": "LayerMax Signature",
    "rating": 4.7,
    "badge": "",
    "description": "A slim study desk with sculpted curved side panels, an under-top storage shelf and a side hook for headphones or bags. Suits bedrooms and compact study corners.",
    "img": "assets/products/office-workstations/cabin-curved-panel-study-desk/Cabin Curved-Panel Study Desk - Front View.webp",
    "images": [
      "assets/products/office-workstations/cabin-curved-panel-study-desk/Cabin Curved-Panel Study Desk - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cabin-curved-top-computer-trolley",
    "name": "Cabin Curved-Top Computer Trolley",
    "category": "office-workstations",
    "type": "desk",
    "material": "Engineered Wood / Walnut Laminate",
    "designer": "LayerMax Signature",
    "rating": 4.7,
    "badge": "",
    "description": "A mobile computer trolley with a curved worktop, a single drawer and open side storage, riding on lockable castors for flexible placement.",
    "img": "assets/products/office-workstations/cabin-curved-top-computer-trolley/Cabin Curved-Top Computer Trolley - Front View.webp",
    "images": [
      "assets/products/office-workstations/cabin-curved-top-computer-trolley/Cabin Curved-Top Computer Trolley - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cabin-compact-computer-trolley",
    "name": "Cabin Compact Computer Trolley",
    "category": "office-workstations",
    "type": "desk",
    "material": "Engineered Wood / Walnut Laminate",
    "designer": "LayerMax Signature",
    "rating": 4.7,
    "badge": "",
    "description": "A compact computer trolley on castors with a sliding keyboard shelf and an enclosed CPU compartment. Fits into alcoves and small home-office corners.",
    "img": "assets/products/office-workstations/cabin-compact-computer-trolley/Cabin Compact Computer Trolley - Front View.webp",
    "images": [
      "assets/products/office-workstations/cabin-compact-computer-trolley/Cabin Compact Computer Trolley - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cabin-computer-trolley-with-shelves",
    "name": "Cabin Computer Trolley with Shelves",
    "category": "office-workstations",
    "type": "desk",
    "material": "Engineered Wood / Walnut Laminate",
    "designer": "LayerMax Signature",
    "rating": 4.7,
    "badge": "",
    "description": "A wider mobile computer trolley with a keyboard shelf over two open storage tiers, mounted on castors for easy repositioning.",
    "img": "assets/products/office-workstations/cabin-computer-trolley-with-shelves/Cabin Computer Trolley with Shelves - Front View.webp",
    "images": [
      "assets/products/office-workstations/cabin-computer-trolley-with-shelves/Cabin Computer Trolley with Shelves - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cabin-open-shelf-computer-table",
    "name": "Cabin Open-Shelf Computer Table",
    "category": "office-workstations",
    "type": "desk",
    "material": "Engineered Wood / Walnut Laminate",
    "designer": "LayerMax Signature",
    "rating": 4.7,
    "badge": "",
    "description": "A walnut computer table with a sliding keyboard tray above two open shelf bays, finished on castors. Keeps peripherals and files within arm’s reach.",
    "img": "assets/products/office-workstations/cabin-open-shelf-computer-table/Cabin Open-Shelf Computer Table - Front View.webp",
    "images": [
      "assets/products/office-workstations/cabin-open-shelf-computer-table/Cabin Open-Shelf Computer Table - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cabin-compact-computer-trolley-grey",
    "name": "Cabin Compact Computer Trolley — Grey",
    "category": "office-workstations",
    "type": "desk",
    "material": "Engineered Wood / Grey and Charcoal Laminate",
    "designer": "LayerMax Signature",
    "rating": 4.7,
    "badge": "",
    "description": "A compact grey and charcoal computer trolley with a sliding keyboard shelf, lower storage tier and lockable castors. A neutral finish for shared workspaces.",
    "img": "assets/products/office-workstations/cabin-compact-computer-trolley-grey/Cabin Compact Computer Trolley - Grey - Front View.webp",
    "images": [
      "assets/products/office-workstations/cabin-compact-computer-trolley-grey/Cabin Compact Computer Trolley - Grey - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-espresso-wooden-dining-table",
    "name": "Dark Espresso Wooden Dining Table",
    "category": "center-tables",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Espresso Wooden Dining Table combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/center-tables/cat-dark-espresso-wooden-dining-table/Dark Espresso Wooden Dining Table.webp",
    "images": [
      "assets/products/center-tables/cat-dark-espresso-wooden-dining-table/Dark Espresso Wooden Dining Table.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-walnut-modern-executive-dining-table",
    "name": "Dark Walnut Modern Executive Dining Table",
    "category": "center-tables",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Walnut Modern Executive Dining Table combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/center-tables/cat-dark-walnut-modern-executive-dining-table/Dark Walnut Modern Executive Dining Table.webp",
    "images": [
      "assets/products/center-tables/cat-dark-walnut-modern-executive-dining-table/Dark Walnut Modern Executive Dining Table.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-walnut-rectangular-dining-table-b",
    "name": "Dark Walnut Rectangular Dining Table B",
    "category": "center-tables",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Walnut Rectangular Dining Table B combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/center-tables/cat-dark-walnut-rectangular-dining-table-b/Dark Walnut Rectangular Dining Table B.webp",
    "images": [
      "assets/products/center-tables/cat-dark-walnut-rectangular-dining-table-b/Dark Walnut Rectangular Dining Table B.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-delta-modern-office-table",
    "name": "Delta Modern Office Table",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Delta Modern Office Table combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-delta-modern-office-table/Delta Modern Office Table - Front View.webp",
    "images": [
      "assets/products/chairs/cat-delta-modern-office-table/Delta Modern Office Table - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-glass-top-dining-table-with-wooden-a-frame-base",
    "name": "Glass Top Dining Table With Wooden A Frame Base",
    "category": "center-tables",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Glass Top Dining Table With Wooden A Frame Base combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/center-tables/cat-glass-top-dining-table-with-wooden-a-frame-base/Glass Top Dining Table with Wooden A-Frame Base.webp",
    "images": [
      "assets/products/center-tables/cat-glass-top-dining-table-with-wooden-a-frame-base/Glass Top Dining Table with Wooden A-Frame Base.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-light-oak-rectangular-dining-table",
    "name": "Light Oak Rectangular Dining Table",
    "category": "center-tables",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Light Oak Rectangular Dining Table combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/center-tables/cat-light-oak-rectangular-dining-table/Light Oak Rectangular Dining Table.webp",
    "images": [
      "assets/products/center-tables/cat-light-oak-rectangular-dining-table/Light Oak Rectangular Dining Table.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-light-oak-trestle-dining-table",
    "name": "Light Oak Trestle Dining Table",
    "category": "center-tables",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Light Oak Trestle Dining Table combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/center-tables/cat-light-oak-trestle-dining-table/Light Oak Trestle Dining Table.webp",
    "images": [
      "assets/products/center-tables/cat-light-oak-trestle-dining-table/Light Oak Trestle Dining Table.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-light-wood-long-dining-table",
    "name": "Light Wood Long Dining Table",
    "category": "center-tables",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Light Wood Long Dining Table combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/center-tables/cat-light-wood-long-dining-table/Light Wood Long Dining Table.webp",
    "images": [
      "assets/products/center-tables/cat-light-wood-long-dining-table/Light Wood Long Dining Table.webp"
    ],
    "colors": []
  },
  {
    "id": "linea-walnut-sliding-door-sideboard",
    "name": "Linea Walnut Sliding-Door Sideboard",
    "category": "wardrobes-storage",
    "type": "sideboard",
    "material": "Engineered Wood / Walnut Finish",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A low-line walnut sideboard pairing three deep drawers with a lattice sliding door, so everyday storage stays hidden while the console top remains free for display. Suited to living rooms, entryways and dining spaces.",
    "img": "assets/products/wardrobes-storage/linea-walnut-sliding-door-sideboard/Linea Walnut Sliding-Door Sideboard - Front View.webp",
    "images": [
      "assets/products/wardrobes-storage/linea-walnut-sliding-door-sideboard/Linea Walnut Sliding-Door Sideboard - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "linea-grey-glass-front-crockery-cabinet",
    "name": "Linea Grey Glass-Front Crockery Cabinet",
    "category": "wardrobes-storage",
    "type": "cabinet",
    "material": "Engineered Wood / Glass with Brass Accents",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A tall crockery and bar cabinet in soft grey, with illuminated glass-front upper doors, an open service counter, and closed lower storage. Brass handles and a slim brass base lift the piece off the floor.",
    "img": "assets/products/wardrobes-storage/linea-grey-glass-front-crockery-cabinet/Linea Grey Glass-Front Crockery Cabinet - Front View.webp",
    "images": [
      "assets/products/wardrobes-storage/linea-grey-glass-front-crockery-cabinet/Linea Grey Glass-Front Crockery Cabinet - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "linea-walnut-three-drawer-chest",
    "name": "Linea Walnut Three-Drawer Chest",
    "category": "wardrobes-storage",
    "type": "chest",
    "material": "Engineered Wood / Walnut Finish",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A compact three-drawer chest in warm walnut with recessed dark handles and a contrasting inset frame. Works as a bedroom dresser, hallway console or side storage unit.",
    "img": "assets/products/wardrobes-storage/linea-walnut-three-drawer-chest/Linea Walnut Three-Drawer Chest - Front View.webp",
    "images": [
      "assets/products/wardrobes-storage/linea-walnut-three-drawer-chest/Linea Walnut Three-Drawer Chest - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "linea-oak-study-desk-with-hutch",
    "name": "Linea Oak Study Desk with Hutch",
    "category": "office-workstations",
    "type": "desk",
    "material": "Engineered Wood / Oak Finish",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A light oak study desk with an overhead open-shelf hutch and a full-height side column of drawers. Keeps books, files and desktop clutter within reach in a narrow footprint.",
    "img": "assets/products/office-workstations/linea-oak-study-desk-with-hutch/Linea Oak Study Desk with Hutch - Front View.webp",
    "images": [
      "assets/products/office-workstations/linea-oak-study-desk-with-hutch/Linea Oak Study Desk with Hutch - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "linea-teak-study-table-with-organiser",
    "name": "Linea Teak Study Table with Organiser",
    "category": "office-workstations",
    "type": "desk",
    "material": "Engineered Wood / Teak Finish",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A teak-finish study table with twin drawers, a low overhead organiser shelf, and an open lower compartment for bags or storage boxes. The curved apron gives comfortable knee clearance.",
    "img": "assets/products/office-workstations/linea-teak-study-table-with-organiser/Linea Teak Study Table with Organiser - Front View.webp",
    "images": [
      "assets/products/office-workstations/linea-teak-study-table-with-organiser/Linea Teak Study Table with Organiser - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "linea-black-study-desk-with-hutch",
    "name": "Linea Black Study Desk with Hutch",
    "category": "office-workstations",
    "type": "desk",
    "material": "Engineered Wood / Black Finish",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A matte black study desk with an integrated upper hutch and a closed side storage column. The dark finish suits contemporary home offices and shared study corners.",
    "img": "assets/products/office-workstations/linea-black-study-desk-with-hutch/Linea Black Study Desk with Hutch - Front View.webp",
    "images": [
      "assets/products/office-workstations/linea-black-study-desk-with-hutch/Linea Black Study Desk with Hutch - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "linea-fluted-glass-display-cabinet",
    "name": "Linea Fluted Glass Display Cabinet",
    "category": "wardrobes-storage",
    "type": "cabinet",
    "material": "Engineered Wood / Fluted Panels with Glass",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A tall three-bay display cabinet framed in fluted panelling, with a lit glass centre section and closed side compartments. Raised on a slim brass base for a lighter visual footprint.",
    "img": "assets/products/wardrobes-storage/linea-fluted-glass-display-cabinet/Linea Fluted Glass Display Cabinet - Front View.webp",
    "images": [
      "assets/products/wardrobes-storage/linea-fluted-glass-display-cabinet/Linea Fluted Glass Display Cabinet - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "linea-cherry-study-desk-with-bookshelf",
    "name": "Linea Cherry Study Desk with Bookshelf",
    "category": "office-workstations",
    "type": "desk",
    "material": "Engineered Wood / Cherry Finish",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A cherry-finish study desk topped with an open bookshelf hutch and paired with a closed lower cabinet. Combines writing surface, display shelving and concealed storage in one unit.",
    "img": "assets/products/office-workstations/linea-cherry-study-desk-with-bookshelf/Linea Cherry Study Desk with Bookshelf - Front View.webp",
    "images": [
      "assets/products/office-workstations/linea-cherry-study-desk-with-bookshelf/Linea Cherry Study Desk with Bookshelf - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-light-oak-dining-table",
    "name": "Minimalist Light Oak Dining Table",
    "category": "center-tables",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Light Oak Dining Table combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/center-tables/cat-minimalist-light-oak-dining-table/Minimalist Light Oak Dining Table.webp",
    "images": [
      "assets/products/center-tables/cat-minimalist-light-oak-dining-table/Minimalist Light Oak Dining Table.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-modern-dining-room-set-with-marble-table",
    "name": "Modern Dining Room Set With Marble Table",
    "category": "dining-tables",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Modern Dining Room Set With Marble Table combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/dining-tables/cat-modern-dining-room-set-with-marble-table/Modern Dining Room Set with Marble Table.webp",
    "images": [
      "assets/products/dining-tables/cat-modern-dining-room-set-with-marble-table/Modern Dining Room Set with Marble Table.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-oval-wood-dining-table-with-matching-bench",
    "name": "Oval Wood Dining Table With Matching Bench",
    "category": "dining-tables",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Oval Wood Dining Table With Matching Bench combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/dining-tables/cat-oval-wood-dining-table-with-matching-bench/Oval Wood Dining Table with Matching Bench.webp",
    "images": [
      "assets/products/dining-tables/cat-oval-wood-dining-table-with-matching-bench/Oval Wood Dining Table with Matching Bench.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-rectangular-dark-wood-dining-table",
    "name": "Rectangular Dark Wood Dining Table",
    "category": "dining-tables",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Rectangular Dark Wood Dining Table combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/dining-tables/cat-rectangular-dark-wood-dining-table/Rectangular Dark Wood Dining Table.webp",
    "images": [
      "assets/products/dining-tables/cat-rectangular-dark-wood-dining-table/Rectangular Dark Wood Dining Table.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-scandinavian-solid-wood-executive-dining-table",
    "name": "Scandinavian Solid Wood Executive Dining Table",
    "category": "center-tables",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Scandinavian Solid Wood Executive Dining Table combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/center-tables/cat-scandinavian-solid-wood-executive-dining-table/Scandinavian Solid Wood Executive Dining Table.webp",
    "images": [
      "assets/products/center-tables/cat-scandinavian-solid-wood-executive-dining-table/Scandinavian Solid Wood Executive Dining Table.webp"
    ],
    "colors": []
  },
  {
    "id": "scandinavian-table-base-white-bracket-frame-with-wooden-legs",
    "name": "Scandinavian Table Base White Bracket Frame With Wooden Legs",
    "category": "cafe-tables",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Scandinavian Table Base White Bracket Frame With Wooden Legs combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/scandinavian-table-base-white-bracket-frame-with-wooden-legs/Scandinavian Table Base White Bracket Frame with Wooden Legs.webp",
    "images": [
      "assets/products/cafe-tables/scandinavian-table-base-white-bracket-frame-with-wooden-legs/Scandinavian Table Base White Bracket Frame with Wooden Legs.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-scandinavian-white-rectangular-dining-table",
    "name": "Scandinavian White Rectangular Dining Table",
    "category": "dining-tables",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Scandinavian White Rectangular Dining Table combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/dining-tables/cat-scandinavian-white-rectangular-dining-table/Scandinavian White Rectangular Dining Table.webp",
    "images": [
      "assets/products/dining-tables/cat-scandinavian-white-rectangular-dining-table/Scandinavian White Rectangular Dining Table.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-sculptural-teak-dining-table",
    "name": "Sculptural Teak Dining Table",
    "category": "center-tables",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Sculptural Teak Dining Table combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/center-tables/cat-sculptural-teak-dining-table/Sculptural Teak Dining Table - Studio View.webp",
    "images": [
      "assets/products/center-tables/cat-sculptural-teak-dining-table/Sculptural Teak Dining Table - Studio View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-sculptural-trestle-wooden-dining-table",
    "name": "Sculptural Trestle Wooden Dining Table",
    "category": "center-tables",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Sculptural Trestle Wooden Dining Table combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/center-tables/cat-sculptural-trestle-wooden-dining-table/Sculptural Trestle Wooden Dining Table.webp",
    "images": [
      "assets/products/center-tables/cat-sculptural-trestle-wooden-dining-table/Sculptural Trestle Wooden Dining Table.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-tapered-leg-light-oak-dining-table-b",
    "name": "Tapered Leg Light Oak Dining Table B",
    "category": "center-tables",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Tapered Leg Light Oak Dining Table B combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/center-tables/cat-tapered-leg-light-oak-dining-table-b/Tapered Leg Light Oak Dining Table B.webp",
    "images": [
      "assets/products/center-tables/cat-tapered-leg-light-oak-dining-table-b/Tapered Leg Light Oak Dining Table B.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-tapered-leg-light-wood-dining-table",
    "name": "Tapered Leg Light Wood Dining Table",
    "category": "center-tables",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Tapered Leg Light Wood Dining Table combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/center-tables/cat-tapered-leg-light-wood-dining-table/Tapered Leg Light Wood Dining Table.webp",
    "images": [
      "assets/products/center-tables/cat-tapered-leg-light-wood-dining-table/Tapered Leg Light Wood Dining Table.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-tapered-leg-walnut-dining-table",
    "name": "Tapered Leg Walnut Dining Table",
    "category": "center-tables",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Tapered Leg Walnut Dining Table combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/center-tables/cat-tapered-leg-walnut-dining-table/Tapered Leg Walnut Dining Table.webp",
    "images": [
      "assets/products/center-tables/cat-tapered-leg-walnut-dining-table/Tapered Leg Walnut Dining Table.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-tapered-leg-walnut-dining-table-c",
    "name": "Tapered Leg Walnut Dining Table C",
    "category": "center-tables",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Tapered Leg Walnut Dining Table C combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/center-tables/cat-tapered-leg-walnut-dining-table-c/Tapered Leg Walnut Dining Table C.webp",
    "images": [
      "assets/products/center-tables/cat-tapered-leg-walnut-dining-table-c/Tapered Leg Walnut Dining Table C.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-tapered-leg-wood-dining-table-b",
    "name": "Tapered Leg Wood Dining Table B",
    "category": "center-tables",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Tapered Leg Wood Dining Table B combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/center-tables/cat-tapered-leg-wood-dining-table-b/Tapered Leg Wood Dining Table B.webp",
    "images": [
      "assets/products/center-tables/cat-tapered-leg-wood-dining-table-b/Tapered Leg Wood Dining Table B.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-teak-outdoor-dining-table",
    "name": "Teak Outdoor Dining Table",
    "category": "center-tables",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Teak Outdoor Dining Table combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/center-tables/cat-teak-outdoor-dining-table/Teak Outdoor Dining Table.webp",
    "images": [
      "assets/products/center-tables/cat-teak-outdoor-dining-table/Teak Outdoor Dining Table.webp"
    ],
    "colors": []
  },
  {
    "id": "lmw-052",
    "name": "LMW-052",
    "category": "dining-tables",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/products/dining-tables/lmw-055/LMW-055.webp",
    "badge": "",
    "description": "Gather and dine in elegance with the LMW-052 dining set. Crafted from premium wood to ensure long-lasting durability, this set includes a beautifully finished table and matching chairs. Perfect for daily family meals and entertaining guests alike, it brings timeless charm to your dining space.",
    "images": [
      "assets/products/dining-tables/lmw-055/LMW-055.webp",
      "assets/products/dining-tables/lmw-055/LMW-055_2.webp",
      "assets/products/dining-tables/lmw-055/LMW-055_3.webp"
    ],
    "colors": [
      "Brown",
      "Grey"
    ]
  },
  {
    "id": "lmw-053",
    "name": "LMW-053",
    "category": "dining-tables",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/products/dining-tables/lmw-056/LMW-056.webp",
    "badge": "",
    "description": "Gather and dine in elegance with the LMW-053 dining set. Crafted from premium wood to ensure long-lasting durability, this set includes a beautifully finished table and matching chairs. Perfect for daily family meals and entertaining guests alike, it brings timeless charm to your dining space.",
    "images": [
      "assets/products/dining-tables/lmw-056/LMW-056.webp"
    ],
    "colors": [
      "Brown"
    ]
  },
  {
    "id": "lmw-054",
    "name": "LMW-054",
    "category": "dining-tables",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/products/dining-tables/lmw-057/LMW-057_2.webp",
    "badge": "",
    "description": "Gather and dine in elegance with the LMW-054 dining set. Crafted from premium wood to ensure long-lasting durability, this set includes a beautifully finished table and matching chairs. Perfect for daily family meals and entertaining guests alike, it brings timeless charm to your dining space.",
    "images": [
      "assets/products/dining-tables/lmw-057/LMW-057_2.webp"
    ],
    "colors": [
      "Grey",
      "Red"
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
    "img": "assets/products/dining-tables/lmw-058/LMW-058_2.webp",
    "badge": "Premium",
    "description": "Gather and dine in elegance with the LMW-055 dining set. Crafted from premium wood to ensure long-lasting durability, this set includes a beautifully finished table and matching chairs. Perfect for daily family meals and entertaining guests alike, it brings timeless charm to your dining space.",
    "images": [
      "assets/products/dining-tables/lmw-058/LMW-058_2.webp"
    ],
    "colors": [
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
    "rating": 4.9,
    "img": "assets/products/dining-tables/lmw-059/LMW-059.webp",
    "badge": "",
    "description": "Gather and dine in elegance with the LMW-056 dining set. Crafted from premium wood to ensure long-lasting durability, this set includes a beautifully finished table and matching chairs. Perfect for daily family meals and entertaining guests alike, it brings timeless charm to your dining space.",
    "images": [
      "assets/products/dining-tables/lmw-059/LMW-059.webp"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "lmw-057",
    "name": "LMW-057",
    "category": "dining-tables",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.7,
    "img": "assets/products/dining-tables/lmw-060/LMW-060.webp",
    "badge": "",
    "description": "Gather and dine in elegance with the LMW-057 dining set. Crafted from premium wood to ensure long-lasting durability, this set includes a beautifully finished table and matching chairs. Perfect for daily family meals and entertaining guests alike, it brings timeless charm to your dining space.",
    "images": [
      "assets/products/dining-tables/lmw-060/LMW-060.webp"
    ],
    "colors": [
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
    "img": "assets/products/dining-tables/lmw-061/LMW-061.webp",
    "badge": "",
    "description": "Gather and dine in elegance with the LMW-058 dining set. Crafted from premium wood to ensure long-lasting durability, this set includes a beautifully finished table and matching chairs. Perfect for daily family meals and entertaining guests alike, it brings timeless charm to your dining space.",
    "images": [
      "assets/products/dining-tables/lmw-061/LMW-061.webp",
      "assets/products/dining-tables/lmw-061/LMW-061_2.webp"
    ],
    "colors": [
      "Red"
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
    "img": "assets/products/dining-tables/lmw-062/LMW-062.webp",
    "badge": "New",
    "description": "Gather and dine in elegance with the LMW-059 dining set. Crafted from premium wood to ensure long-lasting durability, this set includes a beautifully finished table and matching chairs. Perfect for daily family meals and entertaining guests alike, it brings timeless charm to your dining space.",
    "images": [
      "assets/products/dining-tables/lmw-062/LMW-062.webp"
    ],
    "colors": [
      "Brown"
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
    "img": "assets/products/dining-tables/lmw-063/LMW-063.webp",
    "badge": "Premium",
    "description": "Gather and dine in elegance with the LMW-060 dining set. Crafted from premium wood to ensure long-lasting durability, this set includes a beautifully finished table and matching chairs. Perfect for daily family meals and entertaining guests alike, it brings timeless charm to your dining space.",
    "images": [
      "assets/products/dining-tables/lmw-063/LMW-063.webp"
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
    "rating": 4.7,
    "img": "assets/products/dining-tables/lmw-064/LMW-064.webp",
    "badge": "",
    "description": "Gather and dine in elegance with the LMW-061 dining set. Crafted from premium wood to ensure long-lasting durability, this set includes a beautifully finished table and matching chairs. Perfect for daily family meals and entertaining guests alike, it brings timeless charm to your dining space.",
    "images": [
      "assets/products/dining-tables/lmw-064/LMW-064.webp"
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
    "rating": 4.7,
    "img": "assets/products/dining-tables/lmw-065/LMW-065_2.webp",
    "badge": "",
    "description": "Gather and dine in elegance with the LMW-062 dining set. Crafted from premium wood to ensure long-lasting durability, this set includes a beautifully finished table and matching chairs. Perfect for daily family meals and entertaining guests alike, it brings timeless charm to your dining space.",
    "images": [
      "assets/products/dining-tables/lmw-065/LMW-065_2.webp"
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
    "img": "assets/products/dining-tables/orbis/Orbis_01.webp",
    "images": [
      "assets/products/dining-tables/orbis/Orbis_01.webp",
      "assets/products/dining-tables/orbis/Orbis_03.webp",
      "assets/products/dining-tables/orbis/Orbis_04.webp"
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
    "img": "assets/products/dining-tables/rubco-dining-set-6-seater/rubco_dining_set_6_seater_1.webp",
    "images": [
      "assets/products/dining-tables/rubco-dining-set-6-seater/rubco_dining_set_6_seater_1.webp",
      "assets/products/dining-tables/rubco-dining-set-6-seater/rubco_dining_set_6_seater_2.webp",
      "assets/products/dining-tables/rubco-dining-set-6-seater/rubco_dining_set_6_seater_3.webp"
    ],
    "listingUrl": "https://rubcobangalore.com/furniture/rubco-dining-set-6-seater",
    "colors": [
      "Honey",
      "Teak"
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
    "img": "assets/products/dining-tables/rubco-dining-table-round-with-empire-leg-40/dining_table_round_with_empire_leg_40.webp",
    "images": [
      "assets/products/dining-tables/rubco-dining-table-round-with-empire-leg-40/dining_table_round_with_empire_leg_40.webp",
      "assets/products/dining-tables/rubco-dining-table-round-with-empire-leg-40/dining_table_round_with_empire_leg_40_1.webp",
      "assets/products/dining-tables/rubco-dining-table-round-with-empire-leg-40/dining_table_round_with_empire_leg_40_2.webp",
      "assets/products/dining-tables/rubco-dining-table-round-with-empire-leg-40/dining_table_round_with_empire_leg_40_3.webp",
      "assets/products/dining-tables/rubco-dining-table-round-with-empire-leg-40/dining_table_round_with_empire_leg_40_4.webp"
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
    "img": "assets/products/dining-tables/rubco-dining-table-round-with-empire-leg-48/dining_table_round_with_empire_leg_48.webp",
    "images": [
      "assets/products/dining-tables/rubco-dining-table-round-with-empire-leg-48/dining_table_round_with_empire_leg_48.webp",
      "assets/products/dining-tables/rubco-dining-table-round-with-empire-leg-48/dining_table_round_with_empire_leg_48_1.webp",
      "assets/products/dining-tables/rubco-dining-table-round-with-empire-leg-48/dining_table_round_with_empire_leg_48_2.webp",
      "assets/products/dining-tables/rubco-dining-table-round-with-empire-leg-48/dining_table_round_with_empire_leg_48_3.webp"
    ],
    "listingUrl": "https://rubcobangalore.com/furniture/dining-table-round-with-empire-leg-48",
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
    "img": "assets/products/dining-tables/rubco-oval-empire-leg-dining-table-set/rubco_oval_empire_leg_dining_table_set.webp",
    "images": [
      "assets/products/dining-tables/rubco-oval-empire-leg-dining-table-set/rubco_oval_empire_leg_dining_table_set.webp",
      "assets/products/dining-tables/rubco-oval-empire-leg-dining-table-set/rubco_oval_empire_leg_dining_table_set_1.webp",
      "assets/products/dining-tables/rubco-oval-empire-leg-dining-table-set/rubco_oval_empire_leg_dining_table_set_2.webp",
      "assets/products/dining-tables/rubco-oval-empire-leg-dining-table-set/rubco_oval_empire_leg_dining_table_set_3.webp",
      "assets/products/dining-tables/rubco-oval-empire-leg-dining-table-set/rubco_oval_empire_leg_dining_table_set_4.webp"
    ],
    "listingUrl": "https://rubcobangalore.com/furniture/oval-empire-leg-dining-table-set",
    "colors": [
      "Honey",
      "Teak"
    ]
  },
  {
    "id": "cat-camel-tan-theater-loveseat-recliner",
    "name": "Camel Tan Theater Loveseat Recliner",
    "category": "home-theatre-seating",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Camel Tan Theater Loveseat Recliner combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/home-theatre-seating/cat-camel-tan-theater-loveseat-recliner/camel_tan_theater_loveseat_recliner.webp",
    "images": [
      "assets/products/home-theatre-seating/cat-camel-tan-theater-loveseat-recliner/camel_tan_theater_loveseat_recliner.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-charcoal-leather-3seat-theater-recliner",
    "name": "Charcoal Leather 3 Seat Theater Recliner",
    "category": "home-theatre-seating",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Charcoal Leather 3 Seat Theater Recliner combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/home-theatre-seating/cat-charcoal-leather-3seat-theater-recliner/charcoal_leather_3seat_theater_recliner.webp",
    "images": [
      "assets/products/home-theatre-seating/cat-charcoal-leather-3seat-theater-recliner/charcoal_leather_3seat_theater_recliner.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-espresso-leather-3seat-theater-recliner",
    "name": "Espresso Leather 3 Seat Theater Recliner",
    "category": "home-theatre-seating",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Espresso Leather 3 Seat Theater Recliner combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/home-theatre-seating/cat-espresso-leather-3seat-theater-recliner/espresso_leather_3seat_theater_recliner.webp",
    "images": [
      "assets/products/home-theatre-seating/cat-espresso-leather-3seat-theater-recliner/espresso_leather_3seat_theater_recliner.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-light-gray-3person-theater-recliner",
    "name": "Light Gray 3 Person Theater Recliner",
    "category": "home-theatre-seating",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Light Gray 3 Person Theater Recliner combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/home-theatre-seating/cat-light-gray-3person-theater-recliner/light_gray_3person_theater_recliner.webp",
    "images": [
      "assets/products/home-theatre-seating/cat-light-gray-3person-theater-recliner/light_gray_3person_theater_recliner.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-royal-blue-theater-recliner-row",
    "name": "Royal Blue Theater Recliner Row",
    "category": "home-theatre-seating",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Royal Blue Theater Recliner Row combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/home-theatre-seating/cat-royal-blue-theater-recliner-row/royal_blue_theater_recliner_row.webp",
    "images": [
      "assets/products/home-theatre-seating/cat-royal-blue-theater-recliner-row/royal_blue_theater_recliner_row.webp"
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
    "img": "assets/products/mattresses/customise-your-mattress/rubco_iris_mattress.webp",
    "images": [
      "assets/products/mattresses/customise-your-mattress/rubco_iris_mattress.webp"
    ],
    "thicknessOptions": [
      "6 inch thickness",
      "8 inch thickness",
      "6 inch thickness Hi (4\" Rebonded + 2\" 32D S Softy + 2\" 80D 7-Zone Natural Latex Foam with 250 GSM Knitted quilt finishing)"
    ],
    "colors": []
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
    "img": "assets/products/mattresses/rubco-iris-mattress/rubco_iris_mattress.webp",
    "images": [
      "assets/products/mattresses/rubco-iris-mattress/rubco_iris_mattress.webp",
      "assets/products/mattresses/rubco-iris-mattress/rubco_iris_mattress_1.webp"
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
    "img": "assets/products/mattresses/rubco-naturala-100/rubco_naturala_100.webp",
    "images": [
      "assets/products/mattresses/rubco-naturala-100/rubco_naturala_100.webp",
      "assets/products/mattresses/rubco-naturala-100/rubco_naturala_100_1.webp",
      "assets/products/mattresses/rubco-naturala-100/rubco_naturala_100_2.webp",
      "assets/products/mattresses/rubco-naturala-100/rubco_naturala_100_3.webp"
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
    "img": "assets/products/mattresses/rubco-naturala-200/rubco_naturala_200.webp",
    "images": [
      "assets/products/mattresses/rubco-naturala-200/rubco_naturala_200.webp",
      "assets/products/mattresses/rubco-naturala-200/rubco_naturala_200_1.webp",
      "assets/products/mattresses/rubco-naturala-200/rubco_naturala_200_2.webp",
      "assets/products/mattresses/rubco-naturala-200/rubco_naturala_200_3.webp"
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
    "img": "assets/products/mattresses/rubco-naturala-400/rubco_naturala_400.webp",
    "images": [
      "assets/products/mattresses/rubco-naturala-400/rubco_naturala_400.webp",
      "assets/products/mattresses/rubco-naturala-400/rubco_naturala_400_1.webp",
      "assets/products/mattresses/rubco-naturala-400/rubco_naturala_400_2.webp",
      "assets/products/mattresses/rubco-naturala-400/rubco_naturala_400_3.webp",
      "assets/products/mattresses/rubco-naturala-400/rubco_naturala_400_4.webp"
    ],
    "listingUrl": "https://rubcobangalore.com/mattress/rubco-naturala-400",
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
    "img": "assets/products/mattresses/rubco-neo-spine-relief-100/neo_spine_relief_100.webp",
    "images": [
      "assets/products/mattresses/rubco-neo-spine-relief-100/neo_spine_relief_100.webp",
      "assets/products/mattresses/rubco-neo-spine-relief-100/neo_spine_relief_100_1.webp",
      "assets/products/mattresses/rubco-neo-spine-relief-100/neo_spine_relief_100_2.webp",
      "assets/products/mattresses/rubco-neo-spine-relief-100/neo_spine_relief_100_3.webp"
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
    "img": "assets/products/mattresses/rubco-neo-spine-relief-200/neo_spine_relief_200.webp",
    "images": [
      "assets/products/mattresses/rubco-neo-spine-relief-200/neo_spine_relief_200.webp",
      "assets/products/mattresses/rubco-neo-spine-relief-200/neo_spine_relief_200_1.webp",
      "assets/products/mattresses/rubco-neo-spine-relief-200/neo_spine_relief_200_2.webp"
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
    "img": "assets/products/mattresses/rubco-neo-spine-relief-300/neo_spine_relief_300.webp",
    "images": [
      "assets/products/mattresses/rubco-neo-spine-relief-300/neo_spine_relief_300.webp",
      "assets/products/mattresses/rubco-neo-spine-relief-300/neo_spine_relief_300_1.webp",
      "assets/products/mattresses/rubco-neo-spine-relief-300/neo_spine_relief_300_2.webp"
    ],
    "listingUrl": "https://rubcobangalore.com/mattress/neo-spine-relief-300",
    "colors": [
      "White",
      "Maroon"
    ]
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
    "img": "assets/products/mattresses/rubco-neo-spine-relief-400/neo_spine_relief_400.webp",
    "images": [
      "assets/products/mattresses/rubco-neo-spine-relief-400/neo_spine_relief_400.webp",
      "assets/products/mattresses/rubco-neo-spine-relief-400/neo_spine_relief_400_1.webp",
      "assets/products/mattresses/rubco-neo-spine-relief-400/neo_spine_relief_400_2.webp"
    ],
    "listingUrl": "https://rubcobangalore.com/mattress/neo-spine-relief-400",
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
    "img": "assets/products/mattresses/rubco-safal-mattress/rubco_safal_mattress.webp",
    "images": [
      "assets/products/mattresses/rubco-safal-mattress/rubco_safal_mattress.webp",
      "assets/products/mattresses/rubco-safal-mattress/rubco_safal_mattress_1.webp"
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
    "img": "assets/products/mattresses/rubco-sapphire-mattress/rubco_sapphire_mattress.webp",
    "images": [
      "assets/products/mattresses/rubco-sapphire-mattress/rubco_sapphire_mattress.webp",
      "assets/products/mattresses/rubco-sapphire-mattress/rubco_sapphire_mattress_1.webp"
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
    "img": "assets/products/office-chairs/ace/ACE.webp",
    "badge": "",
    "description": "The ACE Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/ace/ACE.webp",
      "assets/products/office-chairs/ace/ACE_2.webp",
      "assets/products/office-chairs/ace/ACE_3.webp",
      "assets/products/office-chairs/ace/ACE_4.webp",
      "assets/products/office-chairs/ace/ACE_5.webp"
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
    "img": "assets/products/office-chairs/alex/ALEX.webp",
    "badge": "",
    "description": "The ALEX Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/alex/ALEX.webp",
      "assets/products/office-chairs/alex/ALEX_2.webp",
      "assets/products/office-chairs/alex/ALEX_3.webp",
      "assets/products/office-chairs/alex/ALEX_4.webp",
      "assets/products/office-chairs/alex/ALEX_5.webp"
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
    "img": "assets/products/office-chairs/alto/ALTO.webp",
    "badge": "",
    "description": "The ALTO Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/alto/ALTO.webp"
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
    "img": "assets/products/office-chairs/amigo/AMIGO.webp",
    "badge": "",
    "description": "The AMIGO Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/amigo/AMIGO.webp",
      "assets/products/office-chairs/amigo/AMIGO_2.webp",
      "assets/products/office-chairs/amigo/AMIGO_3.webp"
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
    "img": "assets/products/office-chairs/amity/AMITY_2.webp",
    "badge": "",
    "description": "A perfect blend of comfort and looks, the AMITY Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Brown or Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/amity/AMITY_2.webp",
      "assets/products/office-chairs/amity/AMITY.webp",
      "assets/products/office-chairs/amity/AMITY_3.webp",
      "assets/products/office-chairs/amity/AMITY_4.webp"
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
    "img": "assets/products/office-chairs/amity---ayk/Amity _ AYK - 201.webp",
    "images": [
      "assets/products/office-chairs/amity---ayk/Amity _ AYK - 201.webp",
      "assets/products/office-chairs/amity---ayk/Amity _ AYK - 201_2.webp",
      "assets/products/office-chairs/amity---ayk/Amity _ AYK - 301.webp",
      "assets/products/office-chairs/amity---ayk/Amity _ AYK - 301_2.webp"
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
    "img": "assets/products/office-chairs/amity---ayl/Amity _ AYL - 201.webp",
    "images": [
      "assets/products/office-chairs/amity---ayl/Amity _ AYL - 201.webp",
      "assets/products/office-chairs/amity---ayl/Amity _ AYL - 201_2.webp",
      "assets/products/office-chairs/amity---ayl/Amity _ AYL - 201_3.webp",
      "assets/products/office-chairs/amity---ayl/Amity _ AYL - 201_4.webp",
      "assets/products/office-chairs/amity---ayl/Amity _ AYL - 301.webp",
      "assets/products/office-chairs/amity---ayl/Amity _ AYL - 301_2.webp"
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
    "img": "assets/products/office-chairs/amity---aym/Amity _ AYM - 101.webp",
    "images": [
      "assets/products/office-chairs/amity---aym/Amity _ AYM - 101.webp",
      "assets/products/office-chairs/amity---aym/Amity _ AYM - 101_2.webp",
      "assets/products/office-chairs/amity---aym/Amity _ AYM - 201.webp",
      "assets/products/office-chairs/amity---aym/Amity _ AYM - 301.webp"
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
    "img": "assets/products/office-chairs/amity---ayn/Amity _ AYN - 101.webp",
    "images": [
      "assets/products/office-chairs/amity---ayn/Amity _ AYN - 101.webp",
      "assets/products/office-chairs/amity---ayn/Amity _ AYN - 101_2.webp",
      "assets/products/office-chairs/amity---ayn/Amity _ AYN - 201.webp",
      "assets/products/office-chairs/amity---ayn/Amity _ AYN - 201_2.webp"
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
    "img": "assets/products/office-chairs/amity---ays/Amity _ AYS - 101.webp",
    "images": [
      "assets/products/office-chairs/amity---ays/Amity _ AYS - 101.webp",
      "assets/products/office-chairs/amity---ays/Amity _ AYS - 201.webp",
      "assets/products/office-chairs/amity---ays/Amity _ AYS - 301.webp",
      "assets/products/office-chairs/amity---ays/Amity _ AYS - 301_2.webp"
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
    "img": "assets/products/office-chairs/amity---ayt/Amity _ AYT - 201.webp",
    "images": [
      "assets/products/office-chairs/amity---ayt/Amity _ AYT - 201.webp",
      "assets/products/office-chairs/amity---ayt/Amity _ AYT - 301.webp",
      "assets/products/office-chairs/amity---ayt/Amity _ AYT - 301_2.webp",
      "assets/products/office-chairs/amity---ayt/Amity _ AYT - 301_3.webp"
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
    "img": "assets/products/office-chairs/amity---ayy/Amity _ AYY - 101.webp",
    "images": [
      "assets/products/office-chairs/amity---ayy/Amity _ AYY - 101.webp",
      "assets/products/office-chairs/amity---ayy/Amity _ AYY - 201.webp",
      "assets/products/office-chairs/amity---ayy/Amity _ AYY - 201_2.webp"
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
    "img": "assets/products/office-chairs/amity---sln/Amity _ SLN - 101.webp",
    "images": [
      "assets/products/office-chairs/amity---sln/Amity _ SLN - 101.webp",
      "assets/products/office-chairs/amity---sln/Amity _ SLN - 101_2.webp",
      "assets/products/office-chairs/amity---sln/Amity _ SLN - 201.webp",
      "assets/products/office-chairs/amity---sln/Amity _ SLN - 301.webp"
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
    "img": "assets/products/office-chairs/amity---sls/Amity _ SLS - 101.webp",
    "images": [
      "assets/products/office-chairs/amity---sls/Amity _ SLS - 101.webp",
      "assets/products/office-chairs/amity---sls/Amity _ SLS - 201.webp",
      "assets/products/office-chairs/amity---sls/Amity _ SLS - 301.webp",
      "assets/products/office-chairs/amity---sls/Amity _ SLS - 301_2.webp"
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
    "img": "assets/products/office-chairs/apex/APEX.webp",
    "badge": "",
    "description": "The APEX Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/apex/APEX.webp",
      "assets/products/office-chairs/apex/APEX_2.webp",
      "assets/products/office-chairs/apex/APEX_3.webp",
      "assets/products/office-chairs/apex/APEX_4.webp"
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
    "img": "assets/products/office-chairs/astral/ASTRAL.webp",
    "badge": "New",
    "description": "The ASTRAL Office Chair is engineered for premium ergonomic performance. Featuring gas lift, it dynamically adjusts to support your body. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/astral/ASTRAL.webp"
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
    "img": "assets/products/office-chairs/atari/ATARI.webp",
    "badge": "",
    "description": "The ATARI Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Brown, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/atari/ATARI.webp",
      "assets/products/office-chairs/atari/ATARI_2.webp"
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
    "img": "assets/products/office-chairs/aura/AURA.webp",
    "badge": "Premium",
    "description": "The AURA Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/aura/AURA.webp"
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
    "img": "assets/products/office-chairs/avis/AVIS.webp",
    "badge": "",
    "description": "The AVIS Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/avis/AVIS.webp",
      "assets/products/office-chairs/avis/AVIS_2.webp",
      "assets/products/office-chairs/avis/AVIS_3.webp"
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
    "img": "assets/products/office-chairs/base/Base.webp",
    "badge": "New",
    "description": "The Base Office Chair is engineered for premium ergonomic performance. Featuring armrest, it dynamically adjusts to support your body. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/base/Base.webp"
    ],
    "colors": [
      "Grey"
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
    "img": "assets/products/office-chairs/blue/BLUE.webp",
    "badge": "",
    "description": "Offering comfort in every hue, the BLUE Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/blue/BLUE.webp"
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
    "img": "assets/products/office-chairs/boss/BOSS.webp",
    "badge": "",
    "description": "The BOSS Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/boss/BOSS.webp"
    ],
    "colors": [
      "Red"
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
    "img": "assets/products/office-chairs/cosmo/COSMO_3.webp",
    "images": [
      "assets/products/office-chairs/cosmo/COSMO_3.webp"
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
    "img": "assets/products/office-chairs/drone/DRONE.webp",
    "badge": "New",
    "description": "The DRONE Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/drone/DRONE.webp"
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
    "img": "assets/products/office-chairs/dune/DUNE.webp",
    "badge": "",
    "description": "The DUNE Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/dune/DUNE.webp",
      "assets/products/office-chairs/dune/DUNE_2.webp",
      "assets/products/office-chairs/dune/DUNE_3.webp"
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
    "img": "assets/products/office-chairs/echo/ECHO.webp",
    "badge": "",
    "description": "The ECHO Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/echo/ECHO.webp",
      "assets/products/office-chairs/echo/ECHO_2.webp",
      "assets/products/office-chairs/echo/ECHO_3.webp",
      "assets/products/office-chairs/echo/ECHO_4.webp"
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
    "img": "assets/products/office-chairs/eclipse/ECLIPSE_2.webp",
    "badge": "",
    "description": "Designed around you, the ECLIPSE Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in White or Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/eclipse/ECLIPSE_2.webp"
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
    "img": "assets/products/office-chairs/eddie/EDDIE.webp",
    "badge": "",
    "description": "The EDDIE Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Brown or Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/eddie/EDDIE.webp",
      "assets/products/office-chairs/eddie/EDDIE_2.webp",
      "assets/products/office-chairs/eddie/EDDIE_3.webp",
      "assets/products/office-chairs/eddie/EDDIE_4.webp"
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
    "img": "assets/products/office-chairs/ella/ELLA.webp",
    "badge": "",
    "description": "The ELLA Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Red or Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/ella/ELLA.webp",
      "assets/products/office-chairs/ella/ELLA_2.webp",
      "assets/products/office-chairs/ella/ELLA_3.webp",
      "assets/products/office-chairs/ella/ELLA_4.webp",
      "assets/products/office-chairs/ella/ELLA_5.webp",
      "assets/products/office-chairs/ella/ELLA_6.webp"
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
    "img": "assets/products/office-chairs/epic/EPIC.webp",
    "badge": "",
    "description": "The EPIC Office Chair is engineered for premium ergonomic performance. Featuring gas lift, it dynamically adjusts to support your body. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/epic/EPIC.webp"
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
    "img": "assets/products/office-chairs/flare/FLARE_2.webp",
    "images": [
      "assets/products/office-chairs/flare/FLARE_2.webp"
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
    "img": "assets/products/office-chairs/genesis/GENESIS.webp",
    "badge": "",
    "description": "The GENESIS Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Red, Brown or Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/genesis/GENESIS.webp",
      "assets/products/office-chairs/genesis/GENESIS_2.webp",
      "assets/products/office-chairs/genesis/GENESIS_3.webp",
      "assets/products/office-chairs/genesis/GENESIS_4.webp"
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
    "img": "assets/products/office-chairs/grey/GREY.webp",
    "badge": "",
    "description": "Offering comfort in every hue, the GREY Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/grey/GREY.webp",
      "assets/products/office-chairs/grey/GREY_2.webp"
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
    "img": "assets/products/office-chairs/hacer---hc---u/Hacer _ HC - U - 101.webp",
    "images": [
      "assets/products/office-chairs/hacer---hc---u/Hacer _ HC - U - 101.webp",
      "assets/products/office-chairs/hacer---hc---u/Hacer _ HC - U - 301.webp"
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
    "img": "assets/products/office-chairs/hacer---hc---v/Hacer _ HC - V - 101.webp",
    "images": [
      "assets/products/office-chairs/hacer---hc---v/Hacer _ HC - V - 101.webp",
      "assets/products/office-chairs/hacer---hc---v/Hacer _ HC - V - 301.webp"
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
    "img": "assets/products/office-chairs/hacer---hc---x/Hacer _ HC - X - 101.webp",
    "images": [
      "assets/products/office-chairs/hacer---hc---x/Hacer _ HC - X - 101.webp",
      "assets/products/office-chairs/hacer---hc---x/Hacer _ HC - X - 301.webp"
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
    "img": "assets/products/office-chairs/hacer---hca/Hacer _ HCA -101.webp",
    "images": [
      "assets/products/office-chairs/hacer---hca/Hacer _ HCA -101.webp",
      "assets/products/office-chairs/hacer---hca/Hacer _ HCA -101_2.webp",
      "assets/products/office-chairs/hacer---hca/Hacer _ HCA -301.webp",
      "assets/products/office-chairs/hacer---hca/Hacer _ HCA -301_2.webp"
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
    "img": "assets/products/office-chairs/hacer---hcm/Hacer _ HCM - 101.webp",
    "images": [
      "assets/products/office-chairs/hacer---hcm/Hacer _ HCM - 101.webp",
      "assets/products/office-chairs/hacer---hcm/Hacer _ HCM - 201.webp",
      "assets/products/office-chairs/hacer---hcm/Hacer _ HCM - 201_2.webp",
      "assets/products/office-chairs/hacer---hcm/Hacer _ HCM - 201_3.webp"
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
    "img": "assets/products/office-chairs/hacer---hcr/Hacer _ HCR -101.webp",
    "images": [
      "assets/products/office-chairs/hacer---hcr/Hacer _ HCR -101.webp",
      "assets/products/office-chairs/hacer---hcr/Hacer _ HCR -101_2.webp",
      "assets/products/office-chairs/hacer---hcr/Hacer _ HCR -101_3.webp",
      "assets/products/office-chairs/hacer---hcr/Hacer _ HCR -201.webp",
      "assets/products/office-chairs/hacer---hcr/Hacer _ HCR -201_2.webp"
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
    "img": "assets/products/office-chairs/hacer---hcs/Hacer _ HCS -101.webp",
    "images": [
      "assets/products/office-chairs/hacer---hcs/Hacer _ HCS -101.webp",
      "assets/products/office-chairs/hacer---hcs/Hacer _ HCS -101_2.webp",
      "assets/products/office-chairs/hacer---hcs/Hacer _ HCS -101_3.webp",
      "assets/products/office-chairs/hacer---hcs/Hacer _ HCS -301.webp",
      "assets/products/office-chairs/hacer---hcs/Hacer _ HCS -301_2.webp"
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
    "img": "assets/products/office-chairs/hacer---hcz/Hacer _ HCZ - 101.webp",
    "images": [
      "assets/products/office-chairs/hacer---hcz/Hacer _ HCZ - 101.webp",
      "assets/products/office-chairs/hacer---hcz/Hacer _ HCZ - 201.webp",
      "assets/products/office-chairs/hacer---hcz/Hacer _ HCZ - 201_2.webp",
      "assets/products/office-chairs/hacer---hcz/Hacer _ HCZ - 301.webp"
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
    "img": "assets/products/office-chairs/halo/HALO.webp",
    "badge": "",
    "description": "The HALO Office Chair is engineered for premium ergonomic performance. Featuring adjustable seat height for perfect posture, it dynamically adjusts to support your body. Upholstered in high-quality leather and available in Grey or Blue, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/halo/HALO.webp"
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
    "img": "assets/products/office-chairs/haven/HAVEN.webp",
    "badge": "",
    "description": "The HAVEN Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/haven/HAVEN.webp",
      "assets/products/office-chairs/haven/HAVEN_2.webp"
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
    "img": "assets/products/office-chairs/hive/HIVE.webp",
    "badge": "",
    "description": "The HIVE Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, Blue or Brown, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/hive/HIVE.webp",
      "assets/products/office-chairs/hive/HIVE_2.webp",
      "assets/products/office-chairs/hive/HIVE_3.webp",
      "assets/products/office-chairs/hive/HIVE_4.webp",
      "assets/products/office-chairs/hive/HIVE_5.webp"
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
    "img": "assets/products/office-chairs/honor/HONOR.webp",
    "badge": "",
    "description": "The HONOR Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/honor/HONOR.webp"
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
    "img": "assets/products/office-chairs/hug/HUG.webp",
    "badge": "",
    "description": "The HUG Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Blue or Brown, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/hug/HUG.webp",
      "assets/products/office-chairs/hug/HUG_2.webp"
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
    "img": "assets/products/office-chairs/hulk/HULK.webp",
    "badge": "",
    "description": "The HULK Office Chair is engineered for premium ergonomic performance. Featuring gas lift, it dynamically adjusts to support your body. Upholstered in high-quality leather and available in Brown or Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/hulk/HULK.webp",
      "assets/products/office-chairs/hulk/HULK_2.webp"
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
    "img": "assets/products/office-chairs/ice/ICE.webp",
    "badge": "",
    "description": "The ICE Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey or Blue, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/ice/ICE.webp",
      "assets/products/office-chairs/ice/ICE_2.webp"
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
    "img": "assets/products/office-chairs/infinity/INFINITY.webp",
    "badge": "",
    "description": "The INFINITY Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/infinity/INFINITY.webp",
      "assets/products/office-chairs/infinity/INFINITY_2.webp",
      "assets/products/office-chairs/infinity/INFINITY_3.webp"
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
    "img": "assets/products/office-chairs/inox/INOX.webp",
    "badge": "",
    "description": "The INOX Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/inox/INOX.webp",
      "assets/products/office-chairs/inox/INOX_2.webp"
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
    "img": "assets/products/office-chairs/jacob/JACOB.webp",
    "badge": "Premium",
    "description": "The JACOB Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/jacob/JACOB.webp"
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
    "img": "assets/products/office-chairs/jade/JADE.webp",
    "badge": "New",
    "description": "The JADE Office Chair is engineered for premium ergonomic performance. Featuring gas lift, it dynamically adjusts to support your body. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/jade/JADE.webp"
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
    "img": "assets/products/office-chairs/jazz/JAZZ.webp",
    "badge": "",
    "description": "The JAZZ Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/jazz/JAZZ.webp",
      "assets/products/office-chairs/jazz/JAZZ_2.webp"
    ],
    "colors": [
      "Grey"
    ]
  },
  {
    "id": "joe",
    "name": "JOE",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Leather",
    "designer": "LayerMax Signature",
    "rating": 4.3,
    "img": "assets/products/office-chairs/joe/JOE.webp",
    "badge": "Premium",
    "description": "The JOE Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, Blue, Red, White or Yellow, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/joe/JOE.webp",
      "assets/products/office-chairs/joe/JOE_2.webp",
      "assets/products/office-chairs/joe/JOE_3.webp",
      "assets/products/office-chairs/joe/JOE_4.webp",
      "assets/products/office-chairs/joe/JOE_5.webp",
      "assets/products/office-chairs/joe/JOE_6.webp"
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
    "img": "assets/products/office-chairs/kinetic/KINETIC.webp",
    "badge": "",
    "description": "The KINETIC Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/kinetic/KINETIC.webp",
      "assets/products/office-chairs/kinetic/KINETIC_2.webp",
      "assets/products/office-chairs/kinetic/KINETIC_3.webp",
      "assets/products/office-chairs/kinetic/KINETIC_4.webp"
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
    "img": "assets/products/office-chairs/knox/KNOX.webp",
    "badge": "New",
    "description": "The KNOX Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/knox/KNOX.webp",
      "assets/products/office-chairs/knox/KNOX_2.webp"
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
    "img": "assets/products/office-chairs/lara/LARA.webp",
    "badge": "",
    "description": "The LARA Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Red or Yellow, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/lara/LARA.webp",
      "assets/products/office-chairs/lara/LARA_2.webp"
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
    "img": "assets/products/office-chairs/liberty/LIBERTY.webp",
    "badge": "",
    "description": "The LIBERTY Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Brown, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/liberty/LIBERTY.webp"
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
    "img": "assets/products/office-chairs/luna/LUNA.webp",
    "badge": "",
    "description": "The LUNA Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/luna/LUNA.webp",
      "assets/products/office-chairs/luna/LUNA_2.webp"
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
    "img": "assets/products/office-chairs/mars/MARS.webp",
    "badge": "",
    "description": "The MARS Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/mars/MARS.webp"
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
    "img": "assets/products/office-chairs/matrix/MATRIX.webp",
    "badge": "",
    "description": "The MATRIX Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, Green, Red or Brown, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/matrix/MATRIX.webp",
      "assets/products/office-chairs/matrix/MATRIX_2.webp",
      "assets/products/office-chairs/matrix/MATRIX_3.webp",
      "assets/products/office-chairs/matrix/MATRIX_4.webp",
      "assets/products/office-chairs/matrix/MATRIX_5.webp"
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
    "img": "assets/products/office-chairs/meteor/METEOR.webp",
    "badge": "",
    "description": "Add color to every conversation, the METEOR Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/meteor/METEOR.webp"
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
    "img": "assets/products/office-chairs/mylo/MYLO.webp",
    "badge": "",
    "description": "The MYLO Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/mylo/MYLO.webp"
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
    "img": "assets/products/office-chairs/neo/NEO.webp",
    "badge": "Bestseller",
    "description": "The NEO Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/neo/NEO.webp",
      "assets/products/office-chairs/neo/NEO_2.webp",
      "assets/products/office-chairs/neo/NEO_3.webp",
      "assets/products/office-chairs/neo/NEO_4.webp"
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
    "img": "assets/products/office-chairs/nexus/NEXUS.webp",
    "badge": "",
    "description": "The NEXUS Office Chair is engineered for premium ergonomic performance. Featuring headrest, it dynamically adjusts to support your body. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/nexus/NEXUS.webp"
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
    "img": "assets/products/office-chairs/ninza/NINZA.webp",
    "badge": "",
    "description": "The NINZA Office Chair is engineered for premium ergonomic performance. Featuring headrest, it dynamically adjusts to support your body. Upholstered in high-quality leather and available in Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/ninza/NINZA.webp"
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
    "img": "assets/products/office-chairs/nova/NOVA.webp",
    "badge": "Premium",
    "description": "The NOVA Office Chair is engineered for premium ergonomic performance. Featuring headrest, it dynamically adjusts to support your body. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/nova/NOVA.webp"
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
    "img": "assets/products/office-chairs/oasis/OASIS.webp",
    "badge": "",
    "description": "The OASIS Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/oasis/OASIS.webp",
      "assets/products/office-chairs/oasis/OASIS_2.webp",
      "assets/products/office-chairs/oasis/OASIS_3.webp",
      "assets/products/office-chairs/oasis/OASIS_4.webp"
    ],
    "colors": [
      "Grey"
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
    "img": "assets/products/office-chairs/oliver/OLIVER.webp",
    "badge": "",
    "description": "The OLIVER Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Brown, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/oliver/OLIVER.webp"
    ],
    "colors": [
      "Brown"
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
    "img": "assets/products/office-chairs/orion/ORION.webp",
    "badge": "",
    "description": "The ORION Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/orion/ORION.webp"
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
    "img": "assets/products/office-chairs/oscar/OSCAR.webp",
    "badge": "New",
    "description": "The OSCAR Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/oscar/OSCAR.webp"
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
    "img": "assets/products/office-chairs/otto/OTTO.webp",
    "badge": "New",
    "description": "The OTTO Office Chair is engineered for premium ergonomic performance. Featuring headrest, it dynamically adjusts to support your body. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/otto/OTTO.webp"
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
    "img": "assets/products/office-chairs/polaris/POLARIS.webp",
    "badge": "",
    "description": "The POLARIS Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Red, Brown, Grey or Blue, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/polaris/POLARIS.webp",
      "assets/products/office-chairs/polaris/POLARIS_2.webp",
      "assets/products/office-chairs/polaris/POLARIS_3.webp",
      "assets/products/office-chairs/polaris/POLARIS_4.webp",
      "assets/products/office-chairs/polaris/POLARIS_5.webp",
      "assets/products/office-chairs/polaris/POLARIS_6.webp"
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
    "img": "assets/products/office-chairs/prime/PRIME.webp",
    "badge": "",
    "description": "The PRIME Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey or Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/prime/PRIME.webp",
      "assets/products/office-chairs/prime/PRIME_2.webp",
      "assets/products/office-chairs/prime/PRIME_3.webp",
      "assets/products/office-chairs/prime/PRIME_4.webp",
      "assets/products/office-chairs/prime/PRIME_5.webp",
      "assets/products/office-chairs/prime/PRIME_6.webp"
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
    "img": "assets/products/office-chairs/proxima/PROXIMA.webp",
    "badge": "New",
    "description": "The PROXIMA Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey or Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/proxima/PROXIMA.webp",
      "assets/products/office-chairs/proxima/PROXIMA_2.webp"
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
    "img": "assets/products/office-chairs/pulse/PULSE.webp",
    "badge": "",
    "description": "The PULSE Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/pulse/PULSE.webp",
      "assets/products/office-chairs/pulse/PULSE_2.webp"
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
    "img": "assets/products/office-chairs/quasar/QUASAR.webp",
    "badge": "",
    "description": "The QUASAR Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/quasar/QUASAR.webp"
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
    "img": "assets/products/office-chairs/rafael/RAFAEL.webp",
    "badge": "",
    "description": "The RAFAEL Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey or Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/rafael/RAFAEL.webp",
      "assets/products/office-chairs/rafael/RAFAEL_2.webp"
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
    "img": "assets/products/office-chairs/red/RED.webp",
    "badge": "",
    "description": "Offering comfort in every hue, the RED Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/red/RED.webp",
      "assets/products/office-chairs/red/RED_2.webp",
      "assets/products/office-chairs/red/RED_3.webp"
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
    "img": "assets/products/office-chairs/ritz/RITZ.webp",
    "badge": "New",
    "description": "The RITZ Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/ritz/RITZ.webp"
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
    "img": "assets/products/office-chairs/sirius/SIRIUS.webp",
    "badge": "",
    "description": "Where comfort meets bold design, the SIRIUS Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Red or Brown, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/sirius/SIRIUS.webp",
      "assets/products/office-chairs/sirius/SIRIUS_2.webp"
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
    "img": "assets/products/office-chairs/slink/SLINK.webp",
    "badge": "",
    "description": "The SLINK Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Blue or Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/slink/SLINK.webp",
      "assets/products/office-chairs/slink/SLINK_2.webp",
      "assets/products/office-chairs/slink/SLINK_3.webp",
      "assets/products/office-chairs/slink/SLINK_4.webp",
      "assets/products/office-chairs/slink/SLINK_5.webp"
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
    "img": "assets/products/office-chairs/solaris/SOLARIS.webp",
    "badge": "",
    "description": "The SOLARIS Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/solaris/SOLARIS.webp"
    ],
    "colors": [
      "Grey"
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
    "img": "assets/products/office-chairs/spectra/SPECTRA.webp",
    "badge": "",
    "description": "The SPECTRA Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/spectra/SPECTRA.webp"
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
    "img": "assets/products/office-chairs/storm/STORM.webp",
    "badge": "",
    "description": "The STORM Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/storm/STORM.webp",
      "assets/products/office-chairs/storm/STORM_2.webp"
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
    "img": "assets/products/office-chairs/summit/SUMMIT.webp",
    "badge": "",
    "description": "The SUMMIT Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Red or Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/summit/SUMMIT.webp",
      "assets/products/office-chairs/summit/SUMMIT_2.webp"
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
    "img": "assets/products/office-chairs/swan/SWAN.webp",
    "badge": "New",
    "description": "The SWAN Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey or Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/swan/SWAN.webp",
      "assets/products/office-chairs/swan/SWAN_2.webp",
      "assets/products/office-chairs/swan/SWAN_3.webp",
      "assets/products/office-chairs/swan/SWAN_4.webp"
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
    "img": "assets/products/office-chairs/tag/TAG.webp",
    "badge": "New",
    "description": "The TAG Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey or Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/tag/TAG.webp",
      "assets/products/office-chairs/tag/TAG_2.webp",
      "assets/products/office-chairs/tag/TAG_3.webp",
      "assets/products/office-chairs/tag/TAG_4.webp",
      "assets/products/office-chairs/tag/TAG_5.webp",
      "assets/products/office-chairs/tag/TAG_6.webp",
      "assets/products/office-chairs/tag/TAG_7.webp"
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
    "img": "assets/products/office-chairs/titan/TITAN.webp",
    "badge": "",
    "description": "The TITAN Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/titan/TITAN.webp"
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
    "img": "assets/products/office-chairs/tom/TOM.webp",
    "badge": "",
    "description": "The TOM Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/tom/TOM.webp",
      "assets/products/office-chairs/tom/TOM_2.webp",
      "assets/products/office-chairs/tom/TOM_3.webp"
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
    "img": "assets/products/office-chairs/torq---tqn/Torq _ TQN - 101.webp",
    "images": [
      "assets/products/office-chairs/torq---tqn/Torq _ TQN - 101.webp",
      "assets/products/office-chairs/torq---tqn/Torq _ TQN - 201.webp",
      "assets/products/office-chairs/torq---tqn/Torq _ TQN - 301.webp",
      "assets/products/office-chairs/torq---tqn/Torq _ TQN - 301_2.webp"
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
    "img": "assets/products/office-chairs/torq---tqs/Torq _ TQS - 201.webp",
    "images": [
      "assets/products/office-chairs/torq---tqs/Torq _ TQS - 201.webp",
      "assets/products/office-chairs/torq---tqs/Torq _ TQS - 301.webp"
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
    "img": "assets/products/office-chairs/torq---tqx/Torq _ TQX - 201_2.webp",
    "images": [
      "assets/products/office-chairs/torq---tqx/Torq _ TQX - 201_2.webp",
      "assets/products/office-chairs/torq---tqx/Torq _ TQX - 201.webp",
      "assets/products/office-chairs/torq---tqx/Torq _ TQX - 301.webp"
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
    "img": "assets/products/office-chairs/torq---tqy/Torq _ TQY - 101.webp",
    "images": [
      "assets/products/office-chairs/torq---tqy/Torq _ TQY - 101.webp",
      "assets/products/office-chairs/torq---tqy/Torq _ TQY - 201.webp",
      "assets/products/office-chairs/torq---tqy/Torq _ TQY - 301.webp",
      "assets/products/office-chairs/torq---tqy/Torq _ TQY - 301_2.webp"
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
    "img": "assets/products/office-chairs/torq---tqz/Torq _ TQZ - 101.webp",
    "images": [
      "assets/products/office-chairs/torq---tqz/Torq _ TQZ - 101.webp",
      "assets/products/office-chairs/torq---tqz/Torq _ TQZ - 201.webp",
      "assets/products/office-chairs/torq---tqz/Torq _ TQZ - 301.webp",
      "assets/products/office-chairs/torq---tqz/Torq _ TQZ - 301_2.webp"
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
    "img": "assets/products/office-chairs/valor/VALOR.webp",
    "badge": "",
    "description": "The VALOR Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Yellow or Brown, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/valor/VALOR.webp",
      "assets/products/office-chairs/valor/VALOR_2.webp",
      "assets/products/office-chairs/valor/VALOR_3.webp",
      "assets/products/office-chairs/valor/VALOR_4.webp"
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
    "img": "assets/products/office-chairs/vega/VEGA.webp",
    "badge": "",
    "description": "The VEGA Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/vega/VEGA.webp"
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
    "img": "assets/products/office-chairs/vertex/VERTEX.webp",
    "badge": "Premium",
    "description": "The VERTEX Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/vertex/VERTEX.webp"
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
    "img": "assets/products/office-chairs/virgo/VIRGO.webp",
    "badge": "",
    "description": "The VIRGO Office Chair is engineered for premium ergonomic performance. Featuring headrest, it dynamically adjusts to support your body. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/virgo/VIRGO.webp"
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
    "img": "assets/products/office-chairs/vista/VISTA.webp",
    "badge": "",
    "description": "The VISTA Office Chair is engineered for premium ergonomic performance. Featuring headrest, it dynamically adjusts to support your body. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/vista/VISTA.webp"
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
    "img": "assets/products/office-chairs/vortex/VORTEX.webp",
    "badge": "",
    "description": "The VORTEX Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/vortex/VORTEX.webp"
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
    "img": "assets/products/office-chairs/vyom/VYOM.webp",
    "badge": "New",
    "description": "The VYOM Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/vyom/VYOM.webp"
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
    "img": "assets/products/office-chairs/waves/WAVES.webp",
    "badge": "Premium",
    "description": "The WAVES Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/waves/WAVES.webp"
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
    "img": "assets/products/office-chairs/willow---wlx/Willow _ WLX -101.webp",
    "images": [
      "assets/products/office-chairs/willow---wlx/Willow _ WLX -101.webp",
      "assets/products/office-chairs/willow---wlx/Willow _ WLX -201.webp",
      "assets/products/office-chairs/willow---wlx/Willow _ WLX -301.webp",
      "assets/products/office-chairs/willow---wlx/Willow _ WLX -301_2.webp"
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
    "img": "assets/products/office-chairs/willow---wlz/Willow _ WLZ -101.webp",
    "images": [
      "assets/products/office-chairs/willow---wlz/Willow _ WLZ -101.webp",
      "assets/products/office-chairs/willow---wlz/Willow _ WLZ -201.webp",
      "assets/products/office-chairs/willow---wlz/Willow _ WLZ -301.webp",
      "assets/products/office-chairs/willow---wlz/Willow _ WLZ -301_2.webp"
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
    "img": "assets/products/office-chairs/wolf/WOLF.webp",
    "badge": "Bestseller",
    "description": "The WOLF Office Chair is engineered for premium ergonomic performance. Featuring headrest, it dynamically adjusts to support your body. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/wolf/WOLF.webp"
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
    "img": "assets/products/office-chairs/yak/YAK.webp",
    "badge": "New",
    "description": "The YAK Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/yak/YAK.webp"
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
    "img": "assets/products/office-chairs/yellow/YELLOW.webp",
    "badge": "Bestseller",
    "description": "The YELLOW Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/yellow/YELLOW.webp",
      "assets/products/office-chairs/yellow/YELLOW_2.webp",
      "assets/products/office-chairs/yellow/YELLOW_3.webp"
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
    "img": "assets/products/office-chairs/zeal---ab/Zeal _ AB - 100.webp",
    "images": [
      "assets/products/office-chairs/zeal---ab/Zeal _ AB - 100.webp",
      "assets/products/office-chairs/zeal---ab/Zeal _ AB - 400.webp",
      "assets/products/office-chairs/zeal---ab/Zeal _ AB - 600.webp",
      "assets/products/office-chairs/zeal---ab/Zeal _ AB - 600_2.webp"
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
    "img": "assets/products/office-chairs/zen/ZEN.webp",
    "badge": "",
    "description": "The ZEN Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/zen/ZEN.webp",
      "assets/products/office-chairs/zen/ZEN_2.webp",
      "assets/products/office-chairs/zen/ZEN_3.webp",
      "assets/products/office-chairs/zen/ZEN_4.webp",
      "assets/products/office-chairs/zen/ZEN_5.webp"
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
    "img": "assets/products/office-chairs/zenith/ZENITH.webp",
    "badge": "",
    "description": "The ZENITH Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/zenith/ZENITH.webp"
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
    "img": "assets/products/office-chairs/zephyr/ZEPHYR.webp",
    "badge": "",
    "description": "The ZEPHYR Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey or Brown, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/zephyr/ZEPHYR.webp",
      "assets/products/office-chairs/zephyr/ZEPHYR_2.webp",
      "assets/products/office-chairs/zephyr/ZEPHYR_3.webp",
      "assets/products/office-chairs/zephyr/ZEPHYR_4.webp"
    ],
    "colors": [
      "Grey",
      "Brown"
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
    "img": "assets/products/office-chairs/zylo/ZYLO.webp",
    "badge": "",
    "description": "The ZYLO Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/zylo/ZYLO.webp"
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
    "img": "assets/products/office-workstations/admiral/Admiral_01.webp",
    "images": [
      "assets/products/office-workstations/admiral/Admiral_01.webp",
      "assets/products/office-workstations/admiral/Admiral_02.webp",
      "assets/products/office-workstations/admiral/Admiral_04.webp",
      "assets/products/office-workstations/admiral/Admiral_06.webp",
      "assets/products/office-workstations/admiral/Admiral_07.webp",
      "assets/products/office-workstations/admiral/Admiral_08.webp",
      "assets/products/office-workstations/admiral/Admiral_09.webp",
      "assets/products/office-workstations/admiral/Admiral_11.webp",
      "assets/products/office-workstations/admiral/Admiral_13.webp",
      "assets/products/office-workstations/admiral/Admiral_15.webp",
      "assets/products/office-workstations/admiral/Admiral_17.webp",
      "assets/products/office-workstations/admiral/Admiral_19.webp"
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
    "img": "assets/products/office-workstations/airis/Airis_01.webp",
    "images": [
      "assets/products/office-workstations/airis/Airis_01.webp",
      "assets/products/office-workstations/airis/Airis_02.webp"
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
    "img": "assets/products/office-workstations/alein/Alein_01.webp",
    "images": [
      "assets/products/office-workstations/alein/Alein_01.webp",
      "assets/products/office-workstations/alein/Alein_02.webp",
      "assets/products/office-workstations/alein/Alein_03.webp",
      "assets/products/office-workstations/alein/Alein_04.webp"
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
    "img": "assets/products/office-workstations/altair/Altair_01.webp",
    "images": [
      "assets/products/office-workstations/altair/Altair_01.webp",
      "assets/products/office-workstations/altair/Altair_02.webp",
      "assets/products/office-workstations/altair/Altair_03.webp",
      "assets/products/office-workstations/altair/Altair_04.webp"
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
    "img": "assets/products/office-workstations/angulo/Angulo_01.webp",
    "images": [
      "assets/products/office-workstations/angulo/Angulo_01.webp"
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
    "img": "assets/products/office-workstations/arvele/Arvele_01.webp",
    "images": [
      "assets/products/office-workstations/arvele/Arvele_01.webp",
      "assets/products/office-workstations/arvele/Arvele_02.webp",
      "assets/products/office-workstations/arvele/Arvele_03.webp"
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
    "img": "assets/products/office-workstations/atria/Atria_01.webp",
    "images": [
      "assets/products/office-workstations/atria/Atria_01.webp",
      "assets/products/office-workstations/atria/Atria_02.webp",
      "assets/products/office-workstations/atria/Atria_03.webp",
      "assets/products/office-workstations/atria/Atria_04.webp"
    ],
    "colors": [],
    "tags": [
      "coffee table"
    ]
  },
  {
    "id": "cat-admiral-executive-desk",
    "name": "Admiral Executive Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Admiral Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-admiral-executive-desk/Admiral Executive Desk - Angle Perspective.webp",
    "images": [
      "assets/products/office-workstations/cat-admiral-executive-desk/Admiral Executive Desk - Angle Perspective.webp",
      "assets/products/office-workstations/cat-admiral-executive-desk/Admiral Executive Desk - Close Up Detail.webp",
      "assets/products/office-workstations/cat-admiral-executive-desk/Admiral Executive Desk - Context View.webp",
      "assets/products/office-workstations/cat-admiral-executive-desk/Admiral Executive Desk - Corner Detail.webp",
      "assets/products/office-workstations/cat-admiral-executive-desk/Admiral Executive Desk - Elevation View.webp",
      "assets/products/office-workstations/cat-admiral-executive-desk/Admiral Executive Desk - Front View.webp",
      "assets/products/office-workstations/cat-admiral-executive-desk/Admiral Executive Desk - High Angle View.webp",
      "assets/products/office-workstations/cat-admiral-executive-desk/Admiral Executive Desk - Perspective View.webp",
      "assets/products/office-workstations/cat-admiral-executive-desk/Admiral Executive Desk - Profile View.webp",
      "assets/products/office-workstations/cat-admiral-executive-desk/Admiral Executive Desk - Side View.webp",
      "assets/products/office-workstations/cat-admiral-executive-desk/Admiral Executive Desk - Studio Showcase.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-aerodynamic-walnut-executive-console",
    "name": "Aerodynamic Walnut Executive Console",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Aerodynamic Walnut Executive Console combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-aerodynamic-walnut-executive-console/aerodynamic_walnut_executive_console.webp",
    "images": [
      "assets/products/office-workstations/cat-aerodynamic-walnut-executive-console/aerodynamic_walnut_executive_console.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-alien-executive-l-shaped-desk",
    "name": "Alien Executive L Shaped Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Alien Executive L Shaped Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-alien-executive-l-shaped-desk/Alien Executive Desk - Front Elevation View.webp",
    "images": [
      "assets/products/office-workstations/cat-alien-executive-l-shaped-desk/Alien Executive Desk - Front Elevation View.webp",
      "assets/products/office-workstations/cat-alien-executive-l-shaped-desk/Alien Executive Desk - Front Perspective View.webp",
      "assets/products/office-workstations/cat-alien-executive-l-shaped-desk/Alien Executive Desk - Side Credenza View.webp",
      "assets/products/office-workstations/cat-alien-executive-l-shaped-desk/Alien Executive Desk - Studio Interior View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-altair-executive-conference-table",
    "name": "Altair Executive Conference Table",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Altair Executive Conference Table combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-altair-executive-conference-table/Altair Conference Table - Base Structure View.webp",
    "images": [
      "assets/products/office-workstations/cat-altair-executive-conference-table/Altair Conference Table - Base Structure View.webp",
      "assets/products/office-workstations/cat-altair-executive-conference-table/Altair Conference Table - Room Context View.webp",
      "assets/products/office-workstations/cat-altair-executive-conference-table/Altair Conference Table - Studio Overview.webp",
      "assets/products/office-workstations/cat-altair-executive-conference-table/Altair Conference Table - Surface Detail View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-andromeda-executive-desk",
    "name": "Andromeda Executive Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Andromeda Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-andromeda-executive-desk/Andromeda Executive Desk - Front View.webp",
    "images": [
      "assets/products/office-workstations/cat-andromeda-executive-desk/Andromeda Executive Desk - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-atria-modern-desk",
    "name": "Atria Modern Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Atria Modern Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-atria-modern-desk/Atria Modern Desk - Angle Perspective.webp",
    "images": [
      "assets/products/office-workstations/cat-atria-modern-desk/Atria Modern Desk - Angle Perspective.webp",
      "assets/products/office-workstations/cat-atria-modern-desk/Atria Modern Desk - Corner Detail.webp",
      "assets/products/office-workstations/cat-atria-modern-desk/Atria Modern Desk - Front View.webp",
      "assets/products/office-workstations/cat-atria-modern-desk/Atria Modern Desk - Side View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-beige-modern-lshaped-desk-unit",
    "name": "Beige Modern Lshaped Desk Unit",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Beige Modern Lshaped Desk Unit combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-beige-modern-lshaped-desk-unit/beige_modern_lshaped_desk_unit.webp",
    "images": [
      "assets/products/office-workstations/cat-beige-modern-lshaped-desk-unit/beige_modern_lshaped_desk_unit.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-beige-tan-floating-executive-desk",
    "name": "Beige Tan Floating Executive Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Beige Tan Floating Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-beige-tan-floating-executive-desk/beige_tan_floating_executive_desk.webp",
    "images": [
      "assets/products/office-workstations/cat-beige-tan-floating-executive-desk/beige_tan_floating_executive_desk.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-corvo-executive-desk",
    "name": "Corvo Acoustic Meeting Pod",
    "category": "acoustic-pods",
    "type": "pod",
    "material": "Upholstered Acoustic Panels / Powder-Coated Steel Frame",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A two-person acoustic meeting pod with a curved shell, glass door, integrated bench seating and a fold-down work surface. Sound-insulated for private calls and focused work on an open office floor.",
    "img": "assets/products/acoustic-pods/cat-corvo-executive-desk/Corvo Executive Desk - Angle Perspective.webp",
    "images": [
      "assets/products/acoustic-pods/cat-corvo-executive-desk/Corvo Executive Desk - Angle Perspective.webp",
      "assets/products/acoustic-pods/cat-corvo-executive-desk/Corvo Executive Desk - Front View.webp",
      "assets/products/acoustic-pods/cat-corvo-executive-desk/Corvo Executive Desk - Side View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-crest-modular-executive-desk",
    "name": "Crest Acoustic Floor Screen",
    "category": "acoustic-pods",
    "type": "pod",
    "material": "Upholstered Acoustic Panel / Polished Steel Feet",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A freestanding upholstered acoustic floor screen on slim steel feet, used to zone open-plan space and dampen noise between desks. Fabric-wrapped both sides for sound absorption.",
    "img": "assets/products/acoustic-pods/cat-crest-modular-executive-desk/Crest Modular Executive Desk - Angle Perspective.webp",
    "images": [
      "assets/products/acoustic-pods/cat-crest-modular-executive-desk/Crest Modular Executive Desk - Angle Perspective.webp",
      "assets/products/acoustic-pods/cat-crest-modular-executive-desk/Crest Modular Executive Desk - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cubix-modular-workstation",
    "name": "Cubix Acoustic Meeting Pod",
    "category": "acoustic-pods",
    "type": "pod",
    "material": "Laminate Shell / Glass / Upholstered Seating",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A four-person mobile meeting pod with full-height glazing, twin bench seats and a central table, mounted on lockable castors. Ventilated and sound-insulated for enclosed discussions anywhere on the floor.",
    "img": "assets/products/acoustic-pods/cat-cubix-modular-workstation/Cubix Modular Workstation - Angle Perspective.webp",
    "images": [
      "assets/products/acoustic-pods/cat-cubix-modular-workstation/Cubix Modular Workstation - Angle Perspective.webp",
      "assets/products/acoustic-pods/cat-cubix-modular-workstation/Cubix Modular Workstation - Corner Detail.webp",
      "assets/products/acoustic-pods/cat-cubix-modular-workstation/Cubix Modular Workstation - Front View.webp",
      "assets/products/acoustic-pods/cat-cubix-modular-workstation/Cubix Modular Workstation - Side View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-curved-wood-executive-desk-comboset",
    "name": "Curved Wood Executive Desk Comboset",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Curved Wood Executive Desk Comboset combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-curved-wood-executive-desk-comboset/curved_wood_executive_desk_comboset.webp",
    "images": [
      "assets/products/office-workstations/cat-curved-wood-executive-desk-comboset/curved_wood_executive_desk_comboset.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cyris-modern-executive-desk",
    "name": "Cyris Acoustic Meeting Pod",
    "category": "acoustic-pods",
    "type": "pod",
    "material": "Laminate Shell / Glass / Upholstered Seating",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A two-person acoustic meeting pod with glazed doors, facing upholstered seats and a round café-height table. Provides a quiet, enclosed space for quick meetings and calls.",
    "img": "assets/products/acoustic-pods/cat-cyris-modern-executive-desk/Cyris Modern Executive Desk - Angle Perspective.webp",
    "images": [
      "assets/products/acoustic-pods/cat-cyris-modern-executive-desk/Cyris Modern Executive Desk - Angle Perspective.webp",
      "assets/products/acoustic-pods/cat-cyris-modern-executive-desk/Cyris Modern Executive Desk - Front View.webp",
      "assets/products/acoustic-pods/cat-cyris-modern-executive-desk/Cyris Modern Executive Desk - Side View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-brown-2drawer-study-desk-comboset",
    "name": "Dark Brown Study Desk Comboset",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Brown Study Desk Comboset combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-dark-brown-2drawer-study-desk-comboset/dark_brown_2drawer_study_desk_comboset.webp",
    "images": [
      "assets/products/office-workstations/cat-dark-brown-2drawer-study-desk-comboset/dark_brown_2drawer_study_desk_comboset.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-walnut-executive-office-desk",
    "name": "Dark Walnut Executive Office Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Walnut Executive Office Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-dark-walnut-executive-office-desk/dark_walnut_executive_office_desk.webp",
    "images": [
      "assets/products/office-workstations/cat-dark-walnut-executive-office-desk/dark_walnut_executive_office_desk.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-walnut-executive-writing-desk",
    "name": "Dark Walnut Executive Writing Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Walnut Executive Writing Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-dark-walnut-executive-writing-desk/dark_walnut_executive_writing_desk.webp",
    "images": [
      "assets/products/office-workstations/cat-dark-walnut-executive-writing-desk/dark_walnut_executive_writing_desk.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-walnut-floating-executive-desk",
    "name": "Dark Walnut Floating Executive Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Walnut Floating Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-dark-walnut-floating-executive-desk/dark_walnut_floating_executive_desk.webp",
    "images": [
      "assets/products/office-workstations/cat-dark-walnut-floating-executive-desk/dark_walnut_floating_executive_desk.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-walnut-study-desk",
    "name": "Dark Walnut Study Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Walnut Study Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-dark-walnut-study-desk/dark_walnut_study_desk.webp",
    "images": [
      "assets/products/office-workstations/cat-dark-walnut-study-desk/dark_walnut_study_desk.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-elion-modern-desk-workstation",
    "name": "Elion Modern Desk Workstation",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Elion Modern Desk Workstation combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-elion-modern-desk-workstation/Elion Modern Desk Workstation - Angle Perspective.webp",
    "images": [
      "assets/products/office-workstations/cat-elion-modern-desk-workstation/Elion Modern Desk Workstation - Angle Perspective.webp",
      "assets/products/office-workstations/cat-elion-modern-desk-workstation/Elion Modern Desk Workstation - Corner Detail.webp",
      "assets/products/office-workstations/cat-elion-modern-desk-workstation/Elion Modern Desk Workstation - Front View.webp",
      "assets/products/office-workstations/cat-elion-modern-desk-workstation/Elion Modern Desk Workstation - Side View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-elix-executive-office-desk-system",
    "name": "Elix Executive Office Desk System",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Elix Executive Office Desk System combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-elix-executive-office-desk-system/Elix Executive Desk - Angle Perspective.webp",
    "images": [
      "assets/products/office-workstations/cat-elix-executive-office-desk-system/Elix Executive Desk - Angle Perspective.webp",
      "assets/products/office-workstations/cat-elix-executive-office-desk-system/Elix Executive Desk - Corner Detail.webp",
      "assets/products/office-workstations/cat-elix-executive-office-desk-system/Elix Executive Desk - Front View.webp",
      "assets/products/office-workstations/cat-elix-executive-office-desk-system/Elix Executive Desk - Side View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-erom-modern-executive-desk",
    "name": "Erom Modern Executive Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Erom Modern Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-erom-modern-executive-desk/Erom Modern Executive Desk - Angle Perspective.webp",
    "images": [
      "assets/products/office-workstations/cat-erom-modern-executive-desk/Erom Modern Executive Desk - Angle Perspective.webp",
      "assets/products/office-workstations/cat-erom-modern-executive-desk/Erom Modern Executive Desk - Corner Detail.webp",
      "assets/products/office-workstations/cat-erom-modern-executive-desk/Erom Modern Executive Desk - Front View.webp",
      "assets/products/office-workstations/cat-erom-modern-executive-desk/Erom Modern Executive Desk - Side View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-executive-lshaped-wood-desk",
    "name": "Executive Lshaped Wood Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Executive Lshaped Wood Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-executive-lshaped-wood-desk/executive_lshaped_wood_desk.webp",
    "images": [
      "assets/products/office-workstations/cat-executive-lshaped-wood-desk/executive_lshaped_wood_desk.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-forge-modular-executive-desk",
    "name": "Forge Modular Executive Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Forge Modular Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-forge-modular-executive-desk/Forge Modular Executive Desk - Front View.webp",
    "images": [
      "assets/products/office-workstations/cat-forge-modular-executive-desk/Forge Modular Executive Desk - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-futuristic-silver-reception-desk",
    "name": "Futuristic Silver Reception Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Futuristic Silver Reception Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-futuristic-silver-reception-desk/futuristic_silver_reception_desk.webp",
    "images": [
      "assets/products/office-workstations/cat-futuristic-silver-reception-desk/futuristic_silver_reception_desk.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-futuristic-white-gold-executive-desk",
    "name": "Futuristic White Gold Executive Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Futuristic White Gold Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-futuristic-white-gold-executive-desk/futuristic_white_gold_executive_desk.webp",
    "images": [
      "assets/products/office-workstations/cat-futuristic-white-gold-executive-desk/futuristic_white_gold_executive_desk.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-gray-white-compact-study-desk",
    "name": "Gray White Compact Study Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Gray White Compact Study Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-gray-white-compact-study-desk/gray_white_compact_study_desk.webp",
    "images": [
      "assets/products/office-workstations/cat-gray-white-compact-study-desk/gray_white_compact_study_desk.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-helio-modern-executive-desk",
    "name": "Helio Modern Executive Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Helio Modern Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-helio-modern-executive-desk/Helio Modern Executive Desk - Front View.webp",
    "images": [
      "assets/products/office-workstations/cat-helio-modern-executive-desk/Helio Modern Executive Desk - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-kyro-executive-desk-system",
    "name": "Kyro Executive Desk System",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Kyro Executive Desk System combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-kyro-executive-desk-system/Kyro Executive Desk - Angle Perspective.webp",
    "images": [
      "assets/products/office-workstations/cat-kyro-executive-desk-system/Kyro Executive Desk - Angle Perspective.webp",
      "assets/products/office-workstations/cat-kyro-executive-desk-system/Kyro Executive Desk - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-light-oak-minimalist-desk",
    "name": "Light Oak Minimalist Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Light Oak Minimalist Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-light-oak-minimalist-desk/light_oak_minimalist_desk.webp",
    "images": [
      "assets/products/office-workstations/cat-light-oak-minimalist-desk/light_oak_minimalist_desk.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-lior-executive-desk-system",
    "name": "Lior Executive Desk System",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Lior Executive Desk System combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-lior-executive-desk-system/Lior Executive Desk System - Angle Perspective.webp",
    "images": [
      "assets/products/office-workstations/cat-lior-executive-desk-system/Lior Executive Desk System - Angle Perspective.webp",
      "assets/products/office-workstations/cat-lior-executive-desk-system/Lior Executive Desk System - Front View.webp",
      "assets/products/office-workstations/cat-lior-executive-desk-system/Lior Executive Desk System - Side View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-liora-height-adjustable-standing-desk",
    "name": "Liora Height Adjustable Standing Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Liora Height Adjustable Standing Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-liora-height-adjustable-standing-desk/Liora Standing Desk - Angle Perspective.webp",
    "images": [
      "assets/products/office-workstations/cat-liora-height-adjustable-standing-desk/Liora Standing Desk - Angle Perspective.webp",
      "assets/products/office-workstations/cat-liora-height-adjustable-standing-desk/Liora Standing Desk - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-luvon-executive-desk",
    "name": "Luvon Executive Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Luvon Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-luvon-executive-desk/Luvon Executive Desk - Front View.webp",
    "images": [
      "assets/products/office-workstations/cat-luvon-executive-desk/Luvon Executive Desk - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-mahogany-3drawer-office-desk",
    "name": "Mahogany Office Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Mahogany Office Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-mahogany-3drawer-office-desk/mahogany_3drawer_office_desk.webp",
    "images": [
      "assets/products/office-workstations/cat-mahogany-3drawer-office-desk/mahogany_3drawer_office_desk.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-midcentury-walnut-writing-desk",
    "name": "Midcentury Walnut Writing Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Midcentury Walnut Writing Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-midcentury-walnut-writing-desk/midcentury_walnut_writing_desk.webp",
    "images": [
      "assets/products/office-workstations/cat-midcentury-walnut-writing-desk/midcentury_walnut_writing_desk.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-beige-slate-writing-desk",
    "name": "Minimalist Beige Slate Writing Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Beige Slate Writing Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-minimalist-beige-slate-writing-desk/minimalist_beige_slate_writing_desk.webp",
    "images": [
      "assets/products/office-workstations/cat-minimalist-beige-slate-writing-desk/minimalist_beige_slate_writing_desk.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-modern-glass-top-desk-with-wooden-a-frame-legs",
    "name": "Modern Glass Top Desk With Wooden A Frame Legs",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Modern Glass Top Desk With Wooden A Frame Legs combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-modern-glass-top-desk-with-wooden-a-frame-legs/Modern Glass Top Desk with Wooden A-Frame Legs.webp",
    "images": [
      "assets/products/office-workstations/cat-modern-glass-top-desk-with-wooden-a-frame-legs/Modern Glass Top Desk with Wooden A-Frame Legs.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-modular-4-person-l-shaped-workstation-desk",
    "name": "Modular 4 Person L Shaped Workstation Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Modular 4 Person L Shaped Workstation Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-modular-4-person-l-shaped-workstation-desk/Modular 4-Person Workstation - Angle Perspective.webp",
    "images": [
      "assets/products/office-workstations/cat-modular-4-person-l-shaped-workstation-desk/Modular 4-Person Workstation - Angle Perspective.webp",
      "assets/products/office-workstations/cat-modular-4-person-l-shaped-workstation-desk/Modular 4-Person Workstation - Corner Detail.webp",
      "assets/products/office-workstations/cat-modular-4-person-l-shaped-workstation-desk/Modular 4-Person Workstation - Front View.webp",
      "assets/products/office-workstations/cat-modular-4-person-l-shaped-workstation-desk/Modular 4-Person Workstation - Side View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-modular-conference-z-line-nova",
    "name": "Modular Conference Z Line Nova",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Modular Conference Z Line Nova combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-modular-conference-z-line-nova/Modular Conference Z-Line Nova - Angle Perspective.webp",
    "images": [
      "assets/products/office-workstations/cat-modular-conference-z-line-nova/Modular Conference Z-Line Nova - Angle Perspective.webp",
      "assets/products/office-workstations/cat-modular-conference-z-line-nova/Modular Conference Z-Line Nova - Corner Detail.webp",
      "assets/products/office-workstations/cat-modular-conference-z-line-nova/Modular Conference Z-Line Nova - Front View.webp",
      "assets/products/office-workstations/cat-modular-conference-z-line-nova/Modular Conference Z-Line Nova - Side View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-nexa-4-person-modular-office-workstation",
    "name": "Nexa 4 Person Modular Office Workstation",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Nexa 4 Person Modular Office Workstation combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-nexa-4-person-modular-office-workstation/Nexa 4-Person Workstation - Angle Perspective.webp",
    "images": [
      "assets/products/office-workstations/cat-nexa-4-person-modular-office-workstation/Nexa 4-Person Workstation - Angle Perspective.webp",
      "assets/products/office-workstations/cat-nexa-4-person-modular-office-workstation/Nexa 4-Person Workstation - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-nexo-executive-desk",
    "name": "Nexo Executive Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Nexo Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-nexo-executive-desk/Nexo Executive Desk - Front View.webp",
    "images": [
      "assets/products/office-workstations/cat-nexo-executive-desk/Nexo Executive Desk - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-nova-integra-magnus-desk",
    "name": "Nova Integra Magnus Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Nova Integra Magnus Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-nova-integra-magnus-desk/Nova Integra Magnus Desk - Angle Perspective.webp",
    "images": [
      "assets/products/office-workstations/cat-nova-integra-magnus-desk/Nova Integra Magnus Desk - Angle Perspective.webp",
      "assets/products/office-workstations/cat-nova-integra-magnus-desk/Nova Integra Magnus Desk - Front View.webp",
      "assets/products/office-workstations/cat-nova-integra-magnus-desk/Nova Integra Magnus Desk - Side View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-oak-and-charcoal-lshaped-desk-comboset",
    "name": "Oak And Charcoal Lshaped Desk Comboset",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Oak And Charcoal Lshaped Desk Comboset combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-oak-and-charcoal-lshaped-desk-comboset/oak_and_charcoal_lshaped_desk_comboset.webp",
    "images": [
      "assets/products/office-workstations/cat-oak-and-charcoal-lshaped-desk-comboset/oak_and_charcoal_lshaped_desk_comboset.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-orlo-executive-desk",
    "name": "Orlo Executive Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Orlo Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-orlo-executive-desk/Orlo Executive Desk - Front View.webp",
    "images": [
      "assets/products/office-workstations/cat-orlo-executive-desk/Orlo Executive Desk - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "prestige-l-shaped-executive-desk",
    "name": "Prestige L Shaped Executive Desk",
    "category": "office-workstations",
    "type": "table",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Prestige L Shaped Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/prestige-l-shaped-executive-desk/prestige-l-shaped-executive-desk - Angle Perspective.webp",
    "images": [
      "assets/products/office-workstations/prestige-l-shaped-executive-desk/prestige-l-shaped-executive-desk - Angle Perspective.webp",
      "assets/products/office-workstations/prestige-l-shaped-executive-desk/prestige-l-shaped-executive-desk - Front View.webp",
      "assets/products/office-workstations/prestige-l-shaped-executive-desk/prestige-l-shaped-executive-desk - Context View.webp",
      "assets/products/office-workstations/prestige-l-shaped-executive-desk/prestige-l-shaped-executive-desk - Corner Detail.webp",
      "assets/products/office-workstations/prestige-l-shaped-executive-desk/prestige-l-shaped-executive-desk - Side View.webp",
      "assets/products/office-workstations/prestige-l-shaped-executive-desk/prestige-l-shaped-executive-desk - Studio Showcase.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-primor-executive-desk",
    "name": "Primor Executive Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Primor Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-primor-executive-desk/Primor Executive Desk - Angle Perspective.webp",
    "images": [
      "assets/products/office-workstations/cat-primor-executive-desk/Primor Executive Desk - Angle Perspective.webp",
      "assets/products/office-workstations/cat-primor-executive-desk/Primor Executive Desk - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-privon-executive-desk",
    "name": "Privon Executive Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Privon Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-privon-executive-desk/Privon Executive Desk - Angle Perspective.webp",
    "images": [
      "assets/products/office-workstations/cat-privon-executive-desk/Privon Executive Desk - Angle Perspective.webp",
      "assets/products/office-workstations/cat-privon-executive-desk/Privon Executive Desk - Corner Detail.webp",
      "assets/products/office-workstations/cat-privon-executive-desk/Privon Executive Desk - Front View.webp",
      "assets/products/office-workstations/cat-privon-executive-desk/Privon Executive Desk - Side View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-privon-x-executive-desk",
    "name": "Privon X Executive Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Privon X Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-privon-x-executive-desk/Privon X Executive Desk - Angle Perspective.webp",
    "images": [
      "assets/products/office-workstations/cat-privon-x-executive-desk/Privon X Executive Desk - Angle Perspective.webp",
      "assets/products/office-workstations/cat-privon-x-executive-desk/Privon X Executive Desk - Corner Detail.webp",
      "assets/products/office-workstations/cat-privon-x-executive-desk/Privon X Executive Desk - Front View.webp",
      "assets/products/office-workstations/cat-privon-x-executive-desk/Privon X Executive Desk - Side View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-rova-executive-desk",
    "name": "Rova Executive Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Rova Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-rova-executive-desk/Rova Executive Desk - Front View.webp",
    "images": [
      "assets/products/office-workstations/cat-rova-executive-desk/Rova Executive Desk - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-scandi-oak-white-executive-desk",
    "name": "Scandi Oak White Executive Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Scandi Oak White Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-scandi-oak-white-executive-desk/scandi_oak_white_executive_desk.webp",
    "images": [
      "assets/products/office-workstations/cat-scandi-oak-white-executive-desk/scandi_oak_white_executive_desk.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-scandi-walnut-white-executive-desk",
    "name": "Scandi Walnut White Executive Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Scandi Walnut White Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-scandi-walnut-white-executive-desk/scandi_walnut_white_executive_desk.webp",
    "images": [
      "assets/products/office-workstations/cat-scandi-walnut-white-executive-desk/scandi_walnut_white_executive_desk.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-sculptural-walnut-conference-table",
    "name": "Sculptural Walnut Conference Table",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Sculptural Walnut Conference Table combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-sculptural-walnut-conference-table/Sculptural Walnut Conference Table.webp",
    "images": [
      "assets/products/office-workstations/cat-sculptural-walnut-conference-table/Sculptural Walnut Conference Table.webp"
    ],
    "colors": []
  },
  {
    "id": "slate-and-birch-hutch-desk",
    "name": "Slate and Birch Hutch Desk",
    "category": "office-workstations",
    "type": "table",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Slate and Birch Hutch Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/slate-and-birch-hutch-desk/slate-and-birch-hutch-desk.webp",
    "images": [
      "assets/products/office-workstations/slate-and-birch-hutch-desk/slate-and-birch-hutch-desk.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-slate-birch-2drawer-writing-desk",
    "name": "Slate Birch Writing Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Slate Birch Writing Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-slate-birch-2drawer-writing-desk/slate_birch_2drawer_writing_desk.webp",
    "images": [
      "assets/products/office-workstations/cat-slate-birch-2drawer-writing-desk/slate_birch_2drawer_writing_desk.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-slate-gray-executive-desk-with-return",
    "name": "Slate Gray Executive Desk With Return",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Slate Gray Executive Desk With Return combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-slate-gray-executive-desk-with-return/slate_gray_executive_desk_with_return.webp",
    "images": [
      "assets/products/office-workstations/cat-slate-gray-executive-desk-with-return/slate_gray_executive_desk_with_return.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-slate-gray-modern-writing-desk",
    "name": "Slate Gray Modern Writing Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Slate Gray Modern Writing Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-slate-gray-modern-writing-desk/slate_gray_modern_writing_desk.webp",
    "images": [
      "assets/products/office-workstations/cat-slate-gray-modern-writing-desk/slate_gray_modern_writing_desk.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-sovio-minimalist-grey-executive-reception-desk",
    "name": "Sovio Minimalist Grey Executive Reception Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Sovio Minimalist Grey Executive Reception Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-sovio-minimalist-grey-executive-reception-desk/Sovio Minimalist Grey Executive Reception Desk.webp",
    "images": [
      "assets/products/office-workstations/cat-sovio-minimalist-grey-executive-reception-desk/Sovio Minimalist Grey Executive Reception Desk.webp"
    ],
    "colors": []
  },
  {
    "id": "sovio-walnut-executive-desk-with-3-drawer-pedestal",
    "name": "Sovio Walnut Executive Desk With 3 Drawer Pedestal",
    "category": "office-workstations",
    "type": "table",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Sovio Walnut Executive Desk With 3 Drawer Pedestal combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/sovio-walnut-executive-desk-with-3-drawer-pedestal/sovio-walnut-executive-desk-with-3-drawer-pedestal.webp",
    "images": [
      "assets/products/office-workstations/sovio-walnut-executive-desk-with-3-drawer-pedestal/sovio-walnut-executive-desk-with-3-drawer-pedestal.webp"
    ],
    "colors": []
  },
  {
    "id": "sovio-walnut-executive-desk-with-left-cabinet",
    "name": "Sovio Walnut Executive Desk With Left Cabinet",
    "category": "office-workstations",
    "type": "table",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Sovio Walnut Executive Desk With Left Cabinet combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/sovio-walnut-executive-desk-with-left-cabinet/sovio-walnut-executive-desk-with-left-cabinet.webp",
    "images": [
      "assets/products/office-workstations/sovio-walnut-executive-desk-with-left-cabinet/sovio-walnut-executive-desk-with-left-cabinet.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-twotone-oak-chocolate-executive-desk",
    "name": "Twotone Oak Chocolate Executive Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Twotone Oak Chocolate Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-twotone-oak-chocolate-executive-desk/twotone_oak_chocolate_executive_desk.webp",
    "images": [
      "assets/products/office-workstations/cat-twotone-oak-chocolate-executive-desk/twotone_oak_chocolate_executive_desk.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-twotone-oak-executive-desk",
    "name": "Twotone Oak Executive Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Twotone Oak Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-twotone-oak-executive-desk/twotone_oak_executive_desk.webp",
    "images": [
      "assets/products/office-workstations/cat-twotone-oak-executive-desk/twotone_oak_executive_desk.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-unox-executive-desk",
    "name": "Unox Executive Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Unox Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-unox-executive-desk/Unox Executive Desk - Front View.webp",
    "images": [
      "assets/products/office-workstations/cat-unox-executive-desk/Unox Executive Desk - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-vectron-x-executive-desk",
    "name": "Vectron X Executive Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Vectron X Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-vectron-x-executive-desk/Vectron X Executive Desk - Angle Perspective.webp",
    "images": [
      "assets/products/office-workstations/cat-vectron-x-executive-desk/Vectron X Executive Desk - Angle Perspective.webp",
      "assets/products/office-workstations/cat-vectron-x-executive-desk/Vectron X Executive Desk - Front View.webp",
      "assets/products/office-workstations/cat-vectron-x-executive-desk/Vectron X Executive Desk - Side View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-vemior-executive-desk",
    "name": "Vemior Executive Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Vemior Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-vemior-executive-desk/Vemior Executive Desk - Front View.webp",
    "images": [
      "assets/products/office-workstations/cat-vemior-executive-desk/Vemior Executive Desk - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-versa-executive-desk",
    "name": "Versa Executive Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Versa Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-versa-executive-desk/Versa Executive Desk - Front View.webp",
    "images": [
      "assets/products/office-workstations/cat-versa-executive-desk/Versa Executive Desk - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-vetra-executive-desk",
    "name": "Vetra Executive Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Vetra Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-vetra-executive-desk/Vetra Executive Desk - Front View.webp",
    "images": [
      "assets/products/office-workstations/cat-vetra-executive-desk/Vetra Executive Desk - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-viora-executive-desk",
    "name": "Viora Executive Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Viora Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-viora-executive-desk/Viora Executive Desk - Angle Perspective.webp",
    "images": [
      "assets/products/office-workstations/cat-viora-executive-desk/Viora Executive Desk - Angle Perspective.webp",
      "assets/products/office-workstations/cat-viora-executive-desk/Viora Executive Desk - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-walnut-and-charcoal-2drawer-desk",
    "name": "Walnut And Charcoal Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Walnut And Charcoal Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-walnut-and-charcoal-2drawer-desk/walnut_and_charcoal_2drawer_desk.webp",
    "images": [
      "assets/products/office-workstations/cat-walnut-and-charcoal-2drawer-desk/walnut_and_charcoal_2drawer_desk.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-walnut-conference-table-with-cable-ports",
    "name": "Walnut Conference Table With Cable Ports",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Walnut Conference Table With Cable Ports combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-walnut-conference-table-with-cable-ports/walnut_conference_table_with_cable_ports.webp",
    "images": [
      "assets/products/office-workstations/cat-walnut-conference-table-with-cable-ports/walnut_conference_table_with_cable_ports.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-walnut-executive-desk-with-drawers",
    "name": "Walnut Executive Desk With Drawers",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Walnut Executive Desk With Drawers combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-walnut-executive-desk-with-drawers/walnut_executive_desk_with_drawers.webp",
    "images": [
      "assets/products/office-workstations/cat-walnut-executive-desk-with-drawers/walnut_executive_desk_with_drawers.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-white-walnut-lshaped-executive-desk",
    "name": "White Walnut Lshaped Executive Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The White Walnut Lshaped Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-white-walnut-lshaped-executive-desk/white_walnut_lshaped_executive_desk.webp",
    "images": [
      "assets/products/office-workstations/cat-white-walnut-lshaped-executive-desk/white_walnut_lshaped_executive_desk.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-woodland-executive-desk",
    "name": "Woodland Executive Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Woodland Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-woodland-executive-desk/Woodland Executive Desk - Angle Perspective.webp",
    "images": [
      "assets/products/office-workstations/cat-woodland-executive-desk/Woodland Executive Desk - Angle Perspective.webp",
      "assets/products/office-workstations/cat-woodland-executive-desk/Woodland Executive Desk - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-xylo-executive-desk",
    "name": "Xylo Executive Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Xylo Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-xylo-executive-desk/Xylo Executive Desk - Front View.webp",
    "images": [
      "assets/products/office-workstations/cat-xylo-executive-desk/Xylo Executive Desk - Front View.webp"
    ],
    "colors": []
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
    "img": "assets/products/office-workstations/cendro/Cendro_01.webp",
    "images": [
      "assets/products/office-workstations/cendro/Cendro_01.webp",
      "assets/products/office-workstations/cendro/Cendro_02.webp",
      "assets/products/office-workstations/cendro/Cendro_03.webp",
      "assets/products/office-workstations/cendro/Cendro_04.webp",
      "assets/products/office-workstations/cendro/Cendro_05.webp",
      "assets/products/office-workstations/cendro/Cendro_06.webp"
    ],
    "colors": []
  },
  {
    "id": "chief-executive-l-shaped-desk-walnut",
    "name": "Chief Executive L-Shaped Desk — Walnut",
    "category": "office-workstations",
    "type": "desk",
    "material": "Engineered Wood / Walnut Laminate",
    "designer": "Buro Design",
    "rating": 4.8,
    "badge": "",
    "description": "An L-shaped executive desk in warm walnut, pairing a full-depth worktop with a side return, integrated open storage and a three-drawer mobile pedestal. Built for cabin offices that need work surface and filing in one footprint.",
    "img": "assets/products/office-workstations/chief-executive-l-shaped-desk-walnut/Chief Executive L-Shaped Desk - Walnut - Front View.webp",
    "images": [
      "assets/products/office-workstations/chief-executive-l-shaped-desk-walnut/Chief Executive L-Shaped Desk - Walnut - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "chief-executive-desk-with-return-dark-walnut",
    "name": "Chief Executive Desk with Return — Dark Walnut",
    "category": "office-workstations",
    "type": "desk",
    "material": "Engineered Wood / Dark Walnut Laminate",
    "designer": "Buro Design",
    "rating": 4.8,
    "badge": "",
    "description": "A dark walnut executive desk with a full modesty panel and a side return that doubles as a discussion surface. The wrapped panel construction gives the desk a solid, monolithic presence.",
    "img": "assets/products/office-workstations/chief-executive-desk-with-return-dark-walnut/Chief Executive Desk with Return - Dark Walnut - Front View.webp",
    "images": [
      "assets/products/office-workstations/chief-executive-desk-with-return-dark-walnut/Chief Executive Desk with Return - Dark Walnut - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "chief-l-shaped-desk-metal-legs-light-ash",
    "name": "Chief L-Shaped Desk with Metal Legs — Light Ash",
    "category": "office-workstations",
    "type": "desk",
    "material": "Engineered Wood / Light Ash Laminate with Steel Legs",
    "designer": "Buro Design",
    "rating": 4.8,
    "badge": "",
    "description": "A light ash L-shaped desk on slim powder-coated steel legs, supplied with a two-door storage unit and a matching three-drawer mobile pedestal. Suits open-plan managerial workspaces.",
    "img": "assets/products/office-workstations/chief-l-shaped-desk-metal-legs-light-ash/Chief L-Shaped Desk with Metal Legs - Light Ash - Front View.webp",
    "images": [
      "assets/products/office-workstations/chief-l-shaped-desk-metal-legs-light-ash/Chief L-Shaped Desk with Metal Legs - Light Ash - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "chief-l-shaped-workstation-sliding-credenza-light-ash",
    "name": "Chief L-Shaped Workstation with Sliding Credenza — Light Ash",
    "category": "office-workstations",
    "type": "desk",
    "material": "Engineered Wood / Light Ash Laminate with Steel Legs",
    "designer": "Buro Design",
    "rating": 4.8,
    "badge": "",
    "description": "A light ash workstation combining an L-shaped top on steel legs with a low sliding-door credenza and integrated drawer bank. Keeps files at desk height without blocking sightlines.",
    "img": "assets/products/office-workstations/chief-l-shaped-workstation-sliding-credenza-light-ash/Chief L-Shaped Workstation with Sliding Credenza - Light Ash - Front View.webp",
    "images": [
      "assets/products/office-workstations/chief-l-shaped-workstation-sliding-credenza-light-ash/Chief L-Shaped Workstation with Sliding Credenza - Light Ash - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "chief-three-door-storage-credenza-oak",
    "name": "Chief Three-Door Storage Credenza — Oak",
    "category": "wardrobes-storage",
    "type": "credenza",
    "material": "Engineered Wood / Oak Laminate with Fluted Panel",
    "designer": "Buro Design",
    "rating": 4.8,
    "badge": "",
    "description": "A three-door office credenza in oak with a fluted upper band and brushed brass pull handles. Provides full-width closed storage along a cabin wall or behind an executive desk.",
    "img": "assets/products/wardrobes-storage/chief-three-door-storage-credenza-oak/Chief Three-Door Storage Credenza - Oak - Front View.webp",
    "images": [
      "assets/products/wardrobes-storage/chief-three-door-storage-credenza-oak/Chief Three-Door Storage Credenza - Oak - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "chief-credenza-with-drawer-unit-oak",
    "name": "Chief Credenza with Drawer Unit — Oak",
    "category": "wardrobes-storage",
    "type": "credenza",
    "material": "Engineered Wood / Oak Laminate with Fluted Panel",
    "designer": "Buro Design",
    "rating": 4.8,
    "badge": "",
    "description": "An oak credenza combining two hinged door bays with a central two-drawer stack, finished with a fluted band and brass handles. Lockable for document storage.",
    "img": "assets/products/wardrobes-storage/chief-credenza-with-drawer-unit-oak/Chief Credenza with Drawer Unit - Oak - Front View.webp",
    "images": [
      "assets/products/wardrobes-storage/chief-credenza-with-drawer-unit-oak/Chief Credenza with Drawer Unit - Oak - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "chief-tall-glass-door-bookcase-oak",
    "name": "Chief Tall Glass-Door Bookcase — Oak",
    "category": "wardrobes-storage",
    "type": "bookcase",
    "material": "Engineered Wood / Oak Laminate with Glass Doors",
    "designer": "Buro Design",
    "rating": 4.8,
    "badge": "",
    "description": "A full-height bookcase with glazed upper doors over closed fluted-panel lower storage. Displays files and awards while keeping stationery out of sight.",
    "img": "assets/products/wardrobes-storage/chief-tall-glass-door-bookcase-oak/Chief Tall Glass-Door Bookcase - Oak - Front View.webp",
    "images": [
      "assets/products/wardrobes-storage/chief-tall-glass-door-bookcase-oak/Chief Tall Glass-Door Bookcase - Oak - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "chief-three-drawer-mobile-pedestal-oak",
    "name": "Chief Three-Drawer Mobile Pedestal — Oak",
    "category": "wardrobes-storage",
    "type": "pedestal",
    "material": "Engineered Wood / Oak Laminate with Fluted Panel",
    "designer": "Buro Design",
    "rating": 4.8,
    "badge": "",
    "description": "A compact three-drawer mobile pedestal in oak, with a fluted top drawer and brass pulls. Rolls under any Chief desk and doubles as a bedside-height side surface.",
    "img": "assets/products/wardrobes-storage/chief-three-drawer-mobile-pedestal-oak/Chief Three-Drawer Mobile Pedestal - Oak - Front View.webp",
    "images": [
      "assets/products/wardrobes-storage/chief-three-drawer-mobile-pedestal-oak/Chief Three-Drawer Mobile Pedestal - Oak - Front View.webp",
      "assets/products/wardrobes-storage/chief-three-drawer-mobile-pedestal-oak/Chief Three-Drawer Mobile Pedestal - Oak - View 2.webp"
    ],
    "colors": []
  },
  {
    "id": "chief-sideboard-with-drawer-bank-beige-gloss",
    "name": "Chief Sideboard with Drawer Bank — Beige Gloss",
    "category": "wardrobes-storage",
    "type": "sideboard",
    "material": "Engineered Wood / High-Gloss Beige with Walnut Trim",
    "designer": "Buro Design",
    "rating": 4.8,
    "badge": "",
    "description": "A high-gloss beige sideboard with a central three-drawer bank flanked by hinged door bays, set on a walnut plinth and top. Adds closed storage without visual weight.",
    "img": "assets/products/wardrobes-storage/chief-sideboard-with-drawer-bank-beige-gloss/Chief Sideboard with Drawer Bank - Beige Gloss - Front View.webp",
    "images": [
      "assets/products/wardrobes-storage/chief-sideboard-with-drawer-bank-beige-gloss/Chief Sideboard with Drawer Bank - Beige Gloss - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "chief-two-door-low-cabinet-beige-gloss",
    "name": "Chief Two-Door Low Cabinet — Beige Gloss",
    "category": "wardrobes-storage",
    "type": "cabinet",
    "material": "Engineered Wood / High-Gloss Beige with Walnut Trim",
    "designer": "Buro Design",
    "rating": 4.8,
    "badge": "",
    "description": "A desk-height two-door cabinet in high-gloss beige with a walnut top. Sits alongside an executive desk as a printer stand or accessible file store.",
    "img": "assets/products/wardrobes-storage/chief-two-door-low-cabinet-beige-gloss/Chief Two-Door Low Cabinet - Beige Gloss - Front View.webp",
    "images": [
      "assets/products/wardrobes-storage/chief-two-door-low-cabinet-beige-gloss/Chief Two-Door Low Cabinet - Beige Gloss - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "chief-mid-height-two-door-cabinet-beige-gloss",
    "name": "Chief Mid-Height Two-Door Cabinet — Beige Gloss",
    "category": "wardrobes-storage",
    "type": "cabinet",
    "material": "Engineered Wood / High-Gloss Beige with Walnut Trim",
    "designer": "Buro Design",
    "rating": 4.8,
    "badge": "",
    "description": "A mid-height two-door cabinet in high-gloss beige, tall enough for four filing levels while staying below eye line in an open cabin.",
    "img": "assets/products/wardrobes-storage/chief-mid-height-two-door-cabinet-beige-gloss/Chief Mid-Height Two-Door Cabinet - Beige Gloss - Front View.webp",
    "images": [
      "assets/products/wardrobes-storage/chief-mid-height-two-door-cabinet-beige-gloss/Chief Mid-Height Two-Door Cabinet - Beige Gloss - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "chief-tall-cabinet-with-display-band-beige-gloss",
    "name": "Chief Tall Cabinet with Display Band — Beige Gloss",
    "category": "wardrobes-storage",
    "type": "cabinet",
    "material": "Engineered Wood / High-Gloss Beige with Glass Band",
    "designer": "Buro Design",
    "rating": 4.8,
    "badge": "",
    "description": "A full-height storage cabinet in high-gloss beige, broken by a glazed display band at mid level. Closed storage above and below keeps the display shelf as the focal point.",
    "img": "assets/products/wardrobes-storage/chief-tall-cabinet-with-display-band-beige-gloss/Chief Tall Cabinet with Display Band - Beige Gloss - Front View.webp",
    "images": [
      "assets/products/wardrobes-storage/chief-tall-cabinet-with-display-band-beige-gloss/Chief Tall Cabinet with Display Band - Beige Gloss - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "chief-three-door-display-cabinet-beige-gloss",
    "name": "Chief Three-Door Display Cabinet — Beige Gloss",
    "category": "wardrobes-storage",
    "type": "cabinet",
    "material": "Engineered Wood / High-Gloss Beige with Glass Band",
    "designer": "Buro Design",
    "rating": 4.8,
    "badge": "",
    "description": "A wide three-bay cabinet in high-gloss beige with an open glazed display band across the centre. Suits reception areas and cabin walls needing both display and bulk storage.",
    "img": "assets/products/wardrobes-storage/chief-three-door-display-cabinet-beige-gloss/Chief Three-Door Display Cabinet - Beige Gloss - Front View.webp",
    "images": [
      "assets/products/wardrobes-storage/chief-three-door-display-cabinet-beige-gloss/Chief Three-Door Display Cabinet - Beige Gloss - Front View.webp"
    ],
    "colors": []
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
    "img": "assets/products/office-workstations/elion/Elion_01.webp",
    "images": [
      "assets/products/office-workstations/elion/Elion_01.webp",
      "assets/products/office-workstations/elion/Elion_02.webp",
      "assets/products/office-workstations/elion/Elion_03.webp",
      "assets/products/office-workstations/elion/Elion_04.webp"
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
    "img": "assets/products/office-workstations/elix/Elix_01.webp",
    "images": [
      "assets/products/office-workstations/elix/Elix_01.webp",
      "assets/products/office-workstations/elix/Elix_02.webp",
      "assets/products/office-workstations/elix/Elix_03.webp",
      "assets/products/office-workstations/elix/Elix_04.webp"
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
    "img": "assets/products/office-workstations/erom/Erom_01.webp",
    "images": [
      "assets/products/office-workstations/erom/Erom_01.webp",
      "assets/products/office-workstations/erom/Erom_02.webp",
      "assets/products/office-workstations/erom/Erom_03.webp",
      "assets/products/office-workstations/erom/Erom_04.webp"
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
    "img": "assets/products/office-workstations/evon/Evon_01.webp",
    "images": [
      "assets/products/office-workstations/evon/Evon_01.webp",
      "assets/products/office-workstations/evon/Evon_02.webp",
      "assets/products/office-workstations/evon/Evon_03.webp"
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
    "img": "assets/products/office-workstations/helio/Helio_01.webp",
    "images": [
      "assets/products/office-workstations/helio/Helio_01.webp",
      "assets/products/office-workstations/helio/Helio_02.webp",
      "assets/products/office-workstations/helio/Helio_03.webp",
      "assets/products/office-workstations/helio/Helio_04.webp"
    ],
    "colors": []
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
    "img": "assets/products/office-workstations/l_type_workstation/L_Type_Workstation_01.webp",
    "images": [
      "assets/products/office-workstations/l_type_workstation/L_Type_Workstation_01.webp",
      "assets/products/office-workstations/l_type_workstation/L_Type_Workstation_03.webp",
      "assets/products/office-workstations/l_type_workstation/L_Type_Workstation_05.webp",
      "assets/products/office-workstations/l_type_workstation/L_Type_Workstation_07.webp",
      "assets/products/office-workstations/l_type_workstation/L_Type_Workstation_09.webp",
      "assets/products/office-workstations/l_type_workstation/L_Type_Workstation_11.webp"
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
    "img": "assets/products/office-workstations/lior/Lior_01.webp",
    "images": [
      "assets/products/office-workstations/lior/Lior_01.webp",
      "assets/products/office-workstations/lior/Lior_02.webp",
      "assets/products/office-workstations/lior/Lior_03.webp",
      "assets/products/office-workstations/lior/Lior_04.webp",
      "assets/products/office-workstations/lior/Lior_05.webp"
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
    "img": "assets/products/office-workstations/liora/Liora_01.webp",
    "images": [
      "assets/products/office-workstations/liora/Liora_01.webp",
      "assets/products/office-workstations/liora/Liora_02.webp",
      "assets/products/office-workstations/liora/Liora_03.webp",
      "assets/products/office-workstations/liora/Liora_04.webp",
      "assets/products/office-workstations/liora/Liora_05.webp"
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
    "img": "assets/products/office-workstations/luvon/Luvon_01.webp",
    "images": [
      "assets/products/office-workstations/luvon/Luvon_01.webp",
      "assets/products/office-workstations/luvon/Luvon_02.webp",
      "assets/products/office-workstations/luvon/Luvon_03.webp",
      "assets/products/office-workstations/luvon/Luvon_04.webp"
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
    "img": "assets/products/office-workstations/lynk/Lynk_02.webp",
    "images": [
      "assets/products/office-workstations/lynk/Lynk_02.webp"
    ],
    "colors": []
  },
  {
    "id": "merit-desk-with-pedestal-and-side-cabinet",
    "name": "Merit Desk with Pedestal and Side Cabinet",
    "category": "office-workstations",
    "type": "desk",
    "material": "Engineered Wood / Walnut and Light Ash Laminate",
    "designer": "Buro Design",
    "rating": 4.7,
    "badge": "",
    "description": "A two-tone desk in walnut and light ash, fitted with a three-drawer pedestal and a two-door side cabinet at return height. The contrast fronts lift a compact cabin setup.",
    "img": "assets/products/office-workstations/merit-desk-with-pedestal-and-side-cabinet/Merit Desk with Pedestal and Side Cabinet - Front View.webp",
    "images": [
      "assets/products/office-workstations/merit-desk-with-pedestal-and-side-cabinet/Merit Desk with Pedestal and Side Cabinet - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "merit-l-shaped-desk-with-credenza",
    "name": "Merit L-Shaped Desk with Credenza",
    "category": "office-workstations",
    "type": "desk",
    "material": "Engineered Wood / Walnut and Light Ash Laminate",
    "designer": "Buro Design",
    "rating": 4.7,
    "badge": "",
    "description": "An L-shaped managerial desk with a low credenza return and a matching mobile pedestal, finished in walnut with light ash fronts.",
    "img": "assets/products/office-workstations/merit-l-shaped-desk-with-credenza/Merit L-Shaped Desk with Credenza - Front View.webp",
    "images": [
      "assets/products/office-workstations/merit-l-shaped-desk-with-credenza/Merit L-Shaped Desk with Credenza - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "merit-computer-table-with-hutch",
    "name": "Merit Computer Table with Hutch",
    "category": "office-workstations",
    "type": "desk",
    "material": "Engineered Wood / Walnut and Light Ash Laminate",
    "designer": "Buro Design",
    "rating": 4.7,
    "badge": "",
    "description": "A computer table with a raised rear hutch, pull-out keyboard tray, open CPU bay and a three-drawer pedestal. Sized for reception and back-office terminals.",
    "img": "assets/products/office-workstations/merit-computer-table-with-hutch/Merit Computer Table with Hutch - Front View.webp",
    "images": [
      "assets/products/office-workstations/merit-computer-table-with-hutch/Merit Computer Table with Hutch - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "merit-straight-writing-desk",
    "name": "Merit Straight Writing Desk",
    "category": "office-workstations",
    "type": "desk",
    "material": "Engineered Wood / Walnut Laminate with Light Ash Panel",
    "designer": "Buro Design",
    "rating": 4.7,
    "badge": "",
    "description": "A straight-top writing desk in walnut with a contrasting light ash modesty panel and a grommet for cable pass-through.",
    "img": "assets/products/office-workstations/merit-straight-writing-desk/Merit Straight Writing Desk - Front View.webp",
    "images": [
      "assets/products/office-workstations/merit-straight-writing-desk/Merit Straight Writing Desk - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "merit-two-door-low-cabinet",
    "name": "Merit Two-Door Low Cabinet",
    "category": "wardrobes-storage",
    "type": "cabinet",
    "material": "Engineered Wood / Walnut and Light Ash Laminate",
    "designer": "Buro Design",
    "rating": 4.7,
    "badge": "",
    "description": "A desk-height two-door cabinet with light ash fronts and a walnut carcass. Doubles as a printer stand beside a Merit desk.",
    "img": "assets/products/wardrobes-storage/merit-two-door-low-cabinet/Merit Two-Door Low Cabinet - Front View.webp",
    "images": [
      "assets/products/wardrobes-storage/merit-two-door-low-cabinet/Merit Two-Door Low Cabinet - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "merit-mid-height-two-door-cabinet",
    "name": "Merit Mid-Height Two-Door Cabinet",
    "category": "wardrobes-storage",
    "type": "cabinet",
    "material": "Engineered Wood / Walnut and Light Ash Laminate",
    "designer": "Buro Design",
    "rating": 4.7,
    "badge": "",
    "description": "A mid-height two-door cabinet in the Merit two-tone finish, giving extra filing levels without closing off the room.",
    "img": "assets/products/wardrobes-storage/merit-mid-height-two-door-cabinet/Merit Mid-Height Two-Door Cabinet - Front View.webp",
    "images": [
      "assets/products/wardrobes-storage/merit-mid-height-two-door-cabinet/Merit Mid-Height Two-Door Cabinet - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "merit-sideboard-with-drawer-bank",
    "name": "Merit Sideboard with Drawer Bank",
    "category": "wardrobes-storage",
    "type": "sideboard",
    "material": "Engineered Wood / Walnut and Light Ash Laminate",
    "designer": "Buro Design",
    "rating": 4.7,
    "badge": "",
    "description": "A wide sideboard pairing two door bays with a central three-drawer stack, finished in light ash over a walnut top and plinth.",
    "img": "assets/products/wardrobes-storage/merit-sideboard-with-drawer-bank/Merit Sideboard with Drawer Bank - Front View.webp",
    "images": [
      "assets/products/wardrobes-storage/merit-sideboard-with-drawer-bank/Merit Sideboard with Drawer Bank - Front View.webp"
    ],
    "colors": []
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
    "img": "assets/products/office-workstations/merit_estillo_conference/Merit_Estillo_Conference_01.webp",
    "images": [
      "assets/products/office-workstations/merit_estillo_conference/Merit_Estillo_Conference_01.webp",
      "assets/products/office-workstations/merit_estillo_conference/Merit_Estillo_Conference_02.webp",
      "assets/products/office-workstations/merit_estillo_conference/Merit_Estillo_Conference_03.webp",
      "assets/products/office-workstations/merit_estillo_conference/Merit_Estillo_Conference_04.webp"
    ],
    "colors": [],
    "tags": [
      "coffee table"
    ]
  },
  {
    "id": "cat-charcoal-padded-mobile-file-pedestal",
    "name": "Charcoal Padded Mobile File Pedestal",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Charcoal Padded Mobile File Pedestal combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-charcoal-padded-mobile-file-pedestal/charcoal_padded_mobile_file_pedestal.webp",
    "images": [
      "assets/products/wardrobes-storage/cat-charcoal-padded-mobile-file-pedestal/charcoal_padded_mobile_file_pedestal.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-espresso-and-oak-mobile-3drawer-pedestal",
    "name": "Espresso And Oak Mobile Pedestal",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Espresso And Oak Mobile Pedestal combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-espresso-and-oak-mobile-3drawer-pedestal/espresso_and_oak_mobile_3drawer_pedestal.webp",
    "images": [
      "assets/products/wardrobes-storage/cat-espresso-and-oak-mobile-3drawer-pedestal/espresso_and_oak_mobile_3drawer_pedestal.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-greige-metal-file-pedestal",
    "name": "Greige Metal File Pedestal",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Greige Metal File Pedestal combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-greige-metal-file-pedestal/greige_metal_file_pedestal.webp",
    "images": [
      "assets/products/wardrobes-storage/cat-greige-metal-file-pedestal/greige_metal_file_pedestal.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-slate-gray-3drawer-file-pedestal",
    "name": "Slate Gray File Pedestal",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Slate Gray File Pedestal combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-slate-gray-3drawer-file-pedestal/slate_gray_3drawer_file_pedestal.webp",
    "images": [
      "assets/products/wardrobes-storage/cat-slate-gray-3drawer-file-pedestal/slate_gray_3drawer_file_pedestal.webp"
    ],
    "colors": []
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
    "img": "assets/products/office-workstations/nexa_pro/Nexa_Pro_01.webp",
    "images": [
      "assets/products/office-workstations/nexa_pro/Nexa_Pro_01.webp",
      "assets/products/office-workstations/nexa_pro/Nexa_Pro_02.webp",
      "assets/products/office-workstations/nexa_pro/Nexa_Pro_03.webp",
      "assets/products/office-workstations/nexa_pro/Nexa_Pro_04.webp"
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
    "img": "assets/products/office-workstations/nexgrid/Nexgrid_01.webp",
    "images": [
      "assets/products/office-workstations/nexgrid/Nexgrid_01.webp"
    ],
    "colors": []
  },
  {
    "id": "nova-executive-l-shaped-desk",
    "name": "Nova Executive L-Shaped Desk",
    "category": "office-workstations",
    "type": "desk",
    "material": "Engineered Wood / Wenge Laminate with Zebrano Accent",
    "designer": "Buro Design",
    "rating": 4.7,
    "badge": "",
    "description": "A large L-shaped executive desk in wenge with a zebrano accent band, combining a side credenza return and a drawer pedestal. Cable routing is built into the worktop.",
    "img": "assets/products/office-workstations/nova-executive-l-shaped-desk/Nova Executive L-Shaped Desk - Front View.webp",
    "images": [
      "assets/products/office-workstations/nova-executive-l-shaped-desk/Nova Executive L-Shaped Desk - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "nova-l-shaped-desk-with-side-cabinet",
    "name": "Nova L-Shaped Desk with Side Cabinet",
    "category": "office-workstations",
    "type": "desk",
    "material": "Engineered Wood / Wenge Laminate",
    "designer": "Buro Design",
    "rating": 4.7,
    "badge": "",
    "description": "A mid-size L-shaped desk in wenge, supplied with a fixed three-drawer pedestal and a lockable two-door side cabinet at return height.",
    "img": "assets/products/office-workstations/nova-l-shaped-desk-with-side-cabinet/Nova L-Shaped Desk with Side Cabinet - Front View.webp",
    "images": [
      "assets/products/office-workstations/nova-l-shaped-desk-with-side-cabinet/Nova L-Shaped Desk with Side Cabinet - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "nova-l-shaped-desk-with-twin-pedestals",
    "name": "Nova L-Shaped Desk with Twin Pedestals",
    "category": "office-workstations",
    "type": "desk",
    "material": "Engineered Wood / Wenge Laminate",
    "designer": "Buro Design",
    "rating": 4.7,
    "badge": "",
    "description": "An L-shaped desk configured with pedestals under both the main top and the return, giving maximum drawer capacity in a single-user cabin.",
    "img": "assets/products/office-workstations/nova-l-shaped-desk-with-twin-pedestals/Nova L-Shaped Desk with Twin Pedestals - Front View.webp",
    "images": [
      "assets/products/office-workstations/nova-l-shaped-desk-with-twin-pedestals/Nova L-Shaped Desk with Twin Pedestals - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "nova-straight-writing-desk",
    "name": "Nova Straight Writing Desk",
    "category": "office-workstations",
    "type": "desk",
    "material": "Engineered Wood / Wenge Laminate",
    "designer": "Buro Design",
    "rating": 4.7,
    "badge": "",
    "description": "A clean straight-top writing desk in wenge with a full modesty panel and levelling glides. Pairs with any Nova mobile pedestal.",
    "img": "assets/products/office-workstations/nova-straight-writing-desk/Nova Straight Writing Desk - Front View.webp",
    "images": [
      "assets/products/office-workstations/nova-straight-writing-desk/Nova Straight Writing Desk - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "nova-computer-table-with-hutch",
    "name": "Nova Computer Table with Hutch",
    "category": "office-workstations",
    "type": "desk",
    "material": "Engineered Wood / Wenge Laminate",
    "designer": "Buro Design",
    "rating": 4.7,
    "badge": "",
    "description": "A computer table with a raised rear hutch, sliding keyboard tray, CPU bay and a three-drawer stack. Designed for cashier counters and back-office terminals.",
    "img": "assets/products/office-workstations/nova-computer-table-with-hutch/Nova Computer Table with Hutch - Front View.webp",
    "images": [
      "assets/products/office-workstations/nova-computer-table-with-hutch/Nova Computer Table with Hutch - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "nova-credenza-with-drawer-bank",
    "name": "Nova Credenza with Drawer Bank",
    "category": "wardrobes-storage",
    "type": "credenza",
    "material": "Engineered Wood / Wenge Laminate",
    "designer": "Buro Design",
    "rating": 4.7,
    "badge": "",
    "description": "A low credenza in wenge with two lockable door bays and a three-drawer bank. Sits behind an executive desk at return height.",
    "img": "assets/products/wardrobes-storage/nova-credenza-with-drawer-bank/Nova Credenza with Drawer Bank - Front View.webp",
    "images": [
      "assets/products/wardrobes-storage/nova-credenza-with-drawer-bank/Nova Credenza with Drawer Bank - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "nova-two-door-cabinet-accent-band",
    "name": "Nova Two-Door Cabinet with Accent Band",
    "category": "wardrobes-storage",
    "type": "cabinet",
    "material": "Engineered Wood / Wenge Laminate with Zebrano Accent",
    "designer": "Buro Design",
    "rating": 4.7,
    "badge": "",
    "description": "A desk-height two-door storage cabinet in wenge, detailed with a zebrano accent band across the door tops and a chrome pull.",
    "img": "assets/products/wardrobes-storage/nova-two-door-cabinet-accent-band/Nova Two-Door Cabinet with Accent Band - Front View.webp",
    "images": [
      "assets/products/wardrobes-storage/nova-two-door-cabinet-accent-band/Nova Two-Door Cabinet with Accent Band - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "nova-two-door-lockable-cabinet",
    "name": "Nova Two-Door Lockable Cabinet",
    "category": "wardrobes-storage",
    "type": "cabinet",
    "material": "Engineered Wood / Wenge Laminate",
    "designer": "Buro Design",
    "rating": 4.7,
    "badge": "",
    "description": "A plain-front two-door cabinet in wenge with a central lock and chrome handles. Fits under a return or stands alone as a printer base.",
    "img": "assets/products/wardrobes-storage/nova-two-door-lockable-cabinet/Nova Two-Door Lockable Cabinet - Front View.webp",
    "images": [
      "assets/products/wardrobes-storage/nova-two-door-lockable-cabinet/Nova Two-Door Lockable Cabinet - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "nova-mid-height-two-door-cabinet",
    "name": "Nova Mid-Height Two-Door Cabinet",
    "category": "wardrobes-storage",
    "type": "cabinet",
    "material": "Engineered Wood / Wenge Laminate",
    "designer": "Buro Design",
    "rating": 4.7,
    "badge": "",
    "description": "A mid-height lockable cabinet in wenge, giving three internal filing levels while staying below partition height.",
    "img": "assets/products/wardrobes-storage/nova-mid-height-two-door-cabinet/Nova Mid-Height Two-Door Cabinet - Front View.webp",
    "images": [
      "assets/products/wardrobes-storage/nova-mid-height-two-door-cabinet/Nova Mid-Height Two-Door Cabinet - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "nova-tall-glass-door-bookcase",
    "name": "Nova Tall Glass-Door Bookcase",
    "category": "wardrobes-storage",
    "type": "bookcase",
    "material": "Engineered Wood / Wenge Laminate with Glass Doors",
    "designer": "Buro Design",
    "rating": 4.7,
    "badge": "",
    "description": "A full-height bookcase in wenge with glazed upper doors over solid lower doors. Adjustable shelves take box files and reference volumes.",
    "img": "assets/products/wardrobes-storage/nova-tall-glass-door-bookcase/Nova Tall Glass-Door Bookcase - Front View.webp",
    "images": [
      "assets/products/wardrobes-storage/nova-tall-glass-door-bookcase/Nova Tall Glass-Door Bookcase - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "nova-three-drawer-mobile-pedestal",
    "name": "Nova Three-Drawer Mobile Pedestal",
    "category": "wardrobes-storage",
    "type": "pedestal",
    "material": "Engineered Wood / Wenge Laminate",
    "designer": "Buro Design",
    "rating": 4.7,
    "badge": "",
    "description": "A three-drawer mobile pedestal in wenge with a central lock and castors. Rolls under any Nova desk top.",
    "img": "assets/products/wardrobes-storage/nova-three-drawer-mobile-pedestal/Nova Three-Drawer Mobile Pedestal - Front View.webp",
    "images": [
      "assets/products/wardrobes-storage/nova-three-drawer-mobile-pedestal/Nova Three-Drawer Mobile Pedestal - Front View.webp"
    ],
    "colors": []
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
    "img": "assets/products/office-workstations/nova_integra_magnus/Nova_Integra_Magnus_01.webp",
    "images": [
      "assets/products/office-workstations/nova_integra_magnus/Nova_Integra_Magnus_01.webp",
      "assets/products/office-workstations/nova_integra_magnus/Nova_Integra_Magnus_02.webp",
      "assets/products/office-workstations/nova_integra_magnus/Nova_Integra_Magnus_03.webp",
      "assets/products/office-workstations/nova_integra_magnus/Nova_Integra_Magnus_04.webp",
      "assets/products/office-workstations/nova_integra_magnus/Nova_Integra_Magnus_05.webp",
      "assets/products/office-workstations/nova_integra_magnus/Nova_Integra_Magnus_06.webp",
      "assets/products/office-workstations/nova_integra_magnus/Nova_Integra_Magnus_07.webp"
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
    "img": "assets/products/office-workstations/nuvia/Nuvia_01.webp",
    "images": [
      "assets/products/office-workstations/nuvia/Nuvia_01.webp",
      "assets/products/office-workstations/nuvia/Nuvia_02.webp",
      "assets/products/office-workstations/nuvia/Nuvia_03.webp"
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
    "img": "assets/products/office-workstations/omnio/Omnio_01.webp",
    "images": [
      "assets/products/office-workstations/omnio/Omnio_01.webp",
      "assets/products/office-workstations/omnio/Omnio_02.webp",
      "assets/products/office-workstations/omnio/Omnio_03.webp"
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
    "img": "assets/products/office-workstations/orexa/Orexa_01.webp",
    "images": [
      "assets/products/office-workstations/orexa/Orexa_01.webp",
      "assets/products/office-workstations/orexa/Orexa_02.webp",
      "assets/products/office-workstations/orexa/Orexa_03.webp"
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
    "img": "assets/products/office-workstations/orlo/Orlo_01.webp",
    "images": [
      "assets/products/office-workstations/orlo/Orlo_01.webp",
      "assets/products/office-workstations/orlo/Orlo_03.webp",
      "assets/products/office-workstations/orlo/Orlo_04.webp",
      "assets/products/office-workstations/orlo/Orlo_05.webp"
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
    "img": "assets/products/office-workstations/prestige/Prestige_01.webp",
    "images": [
      "assets/products/office-workstations/prestige/Prestige_01.webp",
      "assets/products/office-workstations/prestige/Prestige_03.webp",
      "assets/products/office-workstations/prestige/Prestige_04.webp",
      "assets/products/office-workstations/prestige/Prestige_05.webp",
      "assets/products/office-workstations/prestige/Prestige_07.webp",
      "assets/products/office-workstations/prestige/Prestige_09.webp",
      "assets/products/office-workstations/prestige/Prestige_10.webp",
      "assets/products/office-workstations/prestige/Prestige_12.webp",
      "assets/products/office-workstations/prestige/Prestige_13.webp",
      "assets/products/office-workstations/prestige/Prestige_14.webp",
      "assets/products/office-workstations/prestige/Prestige_16.webp",
      "assets/products/office-workstations/prestige/Prestige_18.webp",
      "assets/products/office-workstations/prestige/Prestige_20.webp",
      "assets/products/office-workstations/prestige/Prestige_22.webp",
      "assets/products/office-workstations/prestige/Prestige_23.webp"
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
    "img": "assets/products/office-workstations/primor/Primor_01.webp",
    "images": [
      "assets/products/office-workstations/primor/Primor_01.webp",
      "assets/products/office-workstations/primor/Primor_02.webp",
      "assets/products/office-workstations/primor/Primor_03.webp",
      "assets/products/office-workstations/primor/Primor_04.webp",
      "assets/products/office-workstations/primor/Primor_05.webp"
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
    "img": "assets/products/office-workstations/privon/Privon_01.webp",
    "images": [
      "assets/products/office-workstations/privon/Privon_01.webp",
      "assets/products/office-workstations/privon/Privon_02.webp",
      "assets/products/office-workstations/privon/Privon_03.webp",
      "assets/products/office-workstations/privon/Privon_04.webp",
      "assets/products/office-workstations/privon/Privon_05.webp",
      "assets/products/office-workstations/privon/Privon_06.webp"
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
    "img": "assets/products/office-workstations/privon_x/Privon_X_01.webp",
    "images": [
      "assets/products/office-workstations/privon_x/Privon_X_01.webp",
      "assets/products/office-workstations/privon_x/Privon_X_02.webp",
      "assets/products/office-workstations/privon_x/Privon_X_03.webp",
      "assets/products/office-workstations/privon_x/Privon_X_04.webp",
      "assets/products/office-workstations/privon_x/Privon_X_05.webp",
      "assets/products/office-workstations/privon_x/Privon_X_06.webp"
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
    "img": "assets/products/office-workstations/repute/Repute_01.webp",
    "images": [
      "assets/products/office-workstations/repute/Repute_01.webp",
      "assets/products/office-workstations/repute/Repute_03.webp",
      "assets/products/office-workstations/repute/Repute_05.webp",
      "assets/products/office-workstations/repute/Repute_06.webp",
      "assets/products/office-workstations/repute/Repute_07.webp",
      "assets/products/office-workstations/repute/Repute_08.webp",
      "assets/products/office-workstations/repute/Repute_09.webp",
      "assets/products/office-workstations/repute/Repute_10.webp",
      "assets/products/office-workstations/repute/Repute_12.webp",
      "assets/products/office-workstations/repute/Repute_13.webp",
      "assets/products/office-workstations/repute/Repute_14.webp"
    ],
    "colors": [
      "Lyon Walnut"
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
    "img": "assets/products/office-workstations/rubco-computer-table-colonial/computer_table_colonial.webp",
    "images": [
      "assets/products/office-workstations/rubco-computer-table-colonial/computer_table_colonial.webp",
      "assets/products/office-workstations/rubco-computer-table-colonial/computer_table_colonial_1.webp",
      "assets/products/office-workstations/rubco-computer-table-colonial/computer_table_colonial_2.webp",
      "assets/products/office-workstations/rubco-computer-table-colonial/computer_table_colonial_3.webp",
      "assets/products/office-workstations/rubco-computer-table-colonial/computer_table_colonial_4.webp",
      "assets/products/office-workstations/rubco-computer-table-colonial/computer_table_colonial_5.webp"
    ],
    "listingUrl": "https://rubcobangalore.com/furniture/computer-table-colonial",
    "colors": [
      "Honey",
      "Teak"
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
    "img": "assets/products/office-workstations/rubco-semi-executive-table/semi_executive_table.webp",
    "images": [
      "assets/products/office-workstations/rubco-semi-executive-table/semi_executive_table.webp",
      "assets/products/office-workstations/rubco-semi-executive-table/semi_executive_table_1.webp",
      "assets/products/office-workstations/rubco-semi-executive-table/semi_executive_table_2.webp",
      "assets/products/office-workstations/rubco-semi-executive-table/semi_executive_table_3.webp",
      "assets/products/office-workstations/rubco-semi-executive-table/semi_executive_table_4.webp"
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
    "img": "assets/products/office-workstations/sovio/Sovio_01.webp",
    "images": [
      "assets/products/office-workstations/sovio/Sovio_01.webp",
      "assets/products/office-workstations/sovio/Sovio_02.webp",
      "assets/products/office-workstations/sovio/Sovio_03.webp",
      "assets/products/office-workstations/sovio/Sovio_04.webp",
      "assets/products/office-workstations/sovio/Sovio_05.webp",
      "assets/products/office-workstations/sovio/Sovio_06.webp",
      "assets/products/office-workstations/sovio/Sovio_07.webp"
    ],
    "colors": []
  },
  {
    "id": "supreme-executive-office-suite",
    "name": "Supreme Executive Office Suite",
    "category": "office-workstations",
    "type": "suite",
    "material": "Engineered Wood / Dark Walnut Laminate with Fluted Detailing",
    "designer": "Buro Design",
    "rating": 4.9,
    "badge": "",
    "description": "The complete Supreme cabin set: executive desk with fluted front, matching low credenzas, and a pair of full-height reeded-glass bookcases. Specified together for director and MD cabins.",
    "img": "assets/products/office-workstations/supreme-executive-office-suite/Supreme Executive Office Suite - Front View.webp",
    "images": [
      "assets/products/office-workstations/supreme-executive-office-suite/Supreme Executive Office Suite - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "supreme-executive-desk-walnut",
    "name": "Supreme Executive Desk — Walnut",
    "category": "office-workstations",
    "type": "desk",
    "material": "Engineered Wood / Dark Walnut Laminate with Fluted Panel",
    "designer": "Buro Design",
    "rating": 4.9,
    "badge": "",
    "description": "A dark walnut executive desk with a fluted modesty panel, an inset leather writing pad and flanking storage returns. A concealed desktop port keeps charging cables tidy.",
    "img": "assets/products/office-workstations/supreme-executive-desk-walnut/Supreme Executive Desk - Walnut - Front View.webp",
    "images": [
      "assets/products/office-workstations/supreme-executive-desk-walnut/Supreme Executive Desk - Walnut - Front View.webp",
      "assets/products/office-workstations/supreme-executive-desk-walnut/Supreme Executive Desk - Walnut - View 2.webp"
    ],
    "colors": []
  },
  {
    "id": "supreme-l-shaped-executive-desk-two-tone",
    "name": "Supreme L-Shaped Executive Desk — Two-Tone",
    "category": "office-workstations",
    "type": "desk",
    "material": "Engineered Wood / Walnut Top with Light Grey Base",
    "designer": "Buro Design",
    "rating": 4.9,
    "badge": "",
    "description": "A two-tone L-shaped executive desk pairing a dark walnut top with a light grey base and fluted end panel. Includes a drawer return and an inset leather writing surface.",
    "img": "assets/products/office-workstations/supreme-l-shaped-executive-desk-two-tone/Supreme L-Shaped Executive Desk - Two-Tone - Front View.webp",
    "images": [
      "assets/products/office-workstations/supreme-l-shaped-executive-desk-two-tone/Supreme L-Shaped Executive Desk - Two-Tone - Front View.webp",
      "assets/products/office-workstations/supreme-l-shaped-executive-desk-two-tone/Supreme L-Shaped Executive Desk - Two-Tone - View 2.webp"
    ],
    "colors": []
  },
  {
    "id": "supreme-executive-desk-with-storage-wenge-grey",
    "name": "Supreme Executive Desk with Storage — Wenge & Grey",
    "category": "office-workstations",
    "type": "desk",
    "material": "Engineered Wood / Wenge and Grey Laminate",
    "designer": "Buro Design",
    "rating": 4.9,
    "badge": "",
    "description": "An executive desk in wenge and grey with a three-drawer pedestal on one side and a hinged door cabinet on the other, giving mixed filing and bulk storage under one top.",
    "img": "assets/products/office-workstations/supreme-executive-desk-with-storage-wenge-grey/Supreme Executive Desk with Storage - Wenge & Grey - Front View.webp",
    "images": [
      "assets/products/office-workstations/supreme-executive-desk-with-storage-wenge-grey/Supreme Executive Desk with Storage - Wenge & Grey - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "supreme-l-shaped-desk-with-credenza-grey-walnut",
    "name": "Supreme L-Shaped Desk with Credenza — Grey & Walnut",
    "category": "office-workstations",
    "type": "desk",
    "material": "Engineered Wood / Light Grey and Walnut Laminate",
    "designer": "Buro Design",
    "rating": 4.9,
    "badge": "",
    "description": "A light grey L-shaped desk with a walnut top and a matching low credenza return carrying three drawers and a door bay.",
    "img": "assets/products/office-workstations/supreme-l-shaped-desk-with-credenza-grey-walnut/Supreme L-Shaped Desk with Credenza - Grey & Walnut - Front View.webp",
    "images": [
      "assets/products/office-workstations/supreme-l-shaped-desk-with-credenza-grey-walnut/Supreme L-Shaped Desk with Credenza - Grey & Walnut - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "supreme-tall-reeded-glass-bookcase",
    "name": "Supreme Tall Reeded-Glass Bookcase",
    "category": "wardrobes-storage",
    "type": "bookcase",
    "material": "Engineered Wood / Walnut Laminate with Reeded Glass",
    "designer": "Buro Design",
    "rating": 4.9,
    "badge": "",
    "description": "A full-height bookcase fronted with reeded glass doors over a fluted-panel storage base, finished with slim brass handles. Files stay visible but softened behind the ribbed glazing.",
    "img": "assets/products/wardrobes-storage/supreme-tall-reeded-glass-bookcase/Supreme Tall Reeded-Glass Bookcase - Front View.webp",
    "images": [
      "assets/products/wardrobes-storage/supreme-tall-reeded-glass-bookcase/Supreme Tall Reeded-Glass Bookcase - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "supreme-three-door-credenza",
    "name": "Supreme Three-Door Credenza",
    "category": "wardrobes-storage",
    "type": "credenza",
    "material": "Engineered Wood / Walnut Laminate with Fluted Panel",
    "designer": "Buro Design",
    "rating": 4.9,
    "badge": "",
    "description": "A three-door low credenza in dark walnut with a fluted band across the door tops and brass pulls. Runs the length of a cabin wall at desk height.",
    "img": "assets/products/wardrobes-storage/supreme-three-door-credenza/Supreme Three-Door Credenza - Front View.webp",
    "images": [
      "assets/products/wardrobes-storage/supreme-three-door-credenza/Supreme Three-Door Credenza - Front View.webp"
    ],
    "colors": []
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
    "img": "assets/products/office-workstations/teron/Teron_01.webp",
    "images": [
      "assets/products/office-workstations/teron/Teron_01.webp"
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
    "img": "assets/products/office-workstations/titus/Titus_01.webp",
    "images": [
      "assets/products/office-workstations/titus/Titus_01.webp",
      "assets/products/office-workstations/titus/Titus_02.webp",
      "assets/products/office-workstations/titus/Titus_03.webp",
      "assets/products/office-workstations/titus/Titus_04.webp",
      "assets/products/office-workstations/titus/Titus_05.webp"
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
    "img": "assets/products/office-workstations/tyro/Tyro_01.webp",
    "images": [
      "assets/products/office-workstations/tyro/Tyro_01.webp",
      "assets/products/office-workstations/tyro/Tyro_02.webp",
      "assets/products/office-workstations/tyro/Tyro_03.webp",
      "assets/products/office-workstations/tyro/Tyro_04.webp",
      "assets/products/office-workstations/tyro/Tyro_05.webp",
      "assets/products/office-workstations/tyro/Tyro_06.webp"
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
    "img": "assets/products/office-workstations/vectron/Vectron_02.webp",
    "images": [
      "assets/products/office-workstations/vectron/Vectron_02.webp",
      "assets/products/office-workstations/vectron/Vectron_03.webp"
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
    "img": "assets/products/office-workstations/vectron_x/Vectron_X_01.webp",
    "images": [
      "assets/products/office-workstations/vectron_x/Vectron_X_01.webp",
      "assets/products/office-workstations/vectron_x/Vectron_X_02.webp",
      "assets/products/office-workstations/vectron_x/Vectron_X_03.webp",
      "assets/products/office-workstations/vectron_x/Vectron_X_04.webp",
      "assets/products/office-workstations/vectron_x/Vectron_X_05.webp"
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
    "img": "assets/products/office-workstations/vemior/Vemior_01.webp",
    "images": [
      "assets/products/office-workstations/vemior/Vemior_01.webp",
      "assets/products/office-workstations/vemior/Vemior_02.webp",
      "assets/products/office-workstations/vemior/Vemior_03.webp",
      "assets/products/office-workstations/vemior/Vemior_04.webp"
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
    "img": "assets/products/office-workstations/viora/Viora_01.webp",
    "images": [
      "assets/products/office-workstations/viora/Viora_01.webp",
      "assets/products/office-workstations/viora/Viora_02.webp",
      "assets/products/office-workstations/viora/Viora_03.webp",
      "assets/products/office-workstations/viora/Viora_04.webp",
      "assets/products/office-workstations/viora/Viora_05.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-aether-single-seater-recliner-armchair",
    "name": "Aether Single Seater Recliner Armchair",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Aether Single Seater Recliner Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-aether-single-seater-recliner-armchair/Aether Single Seater Recliner Armchair.webp",
    "images": [
      "assets/products/recliners/cat-aether-single-seater-recliner-armchair/Aether Single Seater Recliner Armchair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-altair-single-seater-recliner-armchair",
    "name": "Altair Single Seater Recliner Armchair",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Altair Single Seater Recliner Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-altair-single-seater-recliner-armchair/Altair Single Seater Recliner Armchair.webp",
    "images": [
      "assets/products/recliners/cat-altair-single-seater-recliner-armchair/Altair Single Seater Recliner Armchair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-altair-three-seater-recliner-sofa",
    "name": "Altair Three Seater Recliner Sofa",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Altair Three Seater Recliner Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-altair-three-seater-recliner-sofa/Altair Three Seater Recliner Sofa.webp",
    "images": [
      "assets/products/recliners/cat-altair-three-seater-recliner-sofa/Altair Three Seater Recliner Sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-altair-two-seater-recliner-sofa",
    "name": "Altair Two Seater Recliner Sofa",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Altair Two Seater Recliner Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-altair-two-seater-recliner-sofa/Altair Two Seater Recliner Sofa.webp",
    "images": [
      "assets/products/recliners/cat-altair-two-seater-recliner-sofa/Altair Two Seater Recliner Sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-beige-recliner-and-marble-table-set",
    "name": "Beige Recliner And Marble Table Set",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Beige Recliner And Marble Table Set combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-beige-recliner-and-marble-table-set/beige_recliner_and_marble_table_set.webp",
    "images": [
      "assets/products/recliners/cat-beige-recliner-and-marble-table-set/beige_recliner_and_marble_table_set.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-bright-red-leather-power-motion-recliner-armchair",
    "name": "Bright Red Leather Power Motion Recliner Armchair",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Bright Red Leather Power Motion Recliner Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-bright-red-leather-power-motion-recliner-armchair/Bright Red Leather Power Motion Recliner Armchair.webp",
    "images": [
      "assets/products/recliners/cat-bright-red-leather-power-motion-recliner-armchair/Bright Red Leather Power Motion Recliner Armchair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-brown-leather-plush-power-recliner-armchair",
    "name": "Brown Leather Plush Power Recliner Armchair",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Brown Leather Plush Power Recliner Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-brown-leather-plush-power-recliner-armchair/Brown Leather Plush Power Recliner Armchair.webp",
    "images": [
      "assets/products/recliners/cat-brown-leather-plush-power-recliner-armchair/Brown Leather Plush Power Recliner Armchair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-burgundy-leather-power-recliner-armchair",
    "name": "Burgundy Leather Power Recliner Armchair",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Burgundy Leather Power Recliner Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-burgundy-leather-power-recliner-armchair/Burgundy Leather Power Recliner Armchair.webp",
    "images": [
      "assets/products/recliners/cat-burgundy-leather-power-recliner-armchair/Burgundy Leather Power Recliner Armchair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-caramel-tan-power-lift-recliner",
    "name": "Caramel Tan Power Lift Recliner",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Caramel Tan Power Lift Recliner combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-caramel-tan-power-lift-recliner/caramel_tan_power_lift_recliner.webp",
    "images": [
      "assets/products/recliners/cat-caramel-tan-power-lift-recliner/caramel_tan_power_lift_recliner.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-charcoal-fabric-double-recliner-pair",
    "name": "Charcoal Fabric Double Recliner Pair",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Charcoal Fabric Double Recliner Pair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-charcoal-fabric-double-recliner-pair/charcoal_fabric_double_recliner_pair.webp",
    "images": [
      "assets/products/recliners/cat-charcoal-fabric-double-recliner-pair/charcoal_fabric_double_recliner_pair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-charcoal-grey-fabric-power-recliner-armchair",
    "name": "Charcoal Grey Fabric Power Recliner Armchair",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Charcoal Grey Fabric Power Recliner Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-charcoal-grey-fabric-power-recliner-armchair/Charcoal Grey Fabric Power Recliner Armchair.webp",
    "images": [
      "assets/products/recliners/cat-charcoal-grey-fabric-power-recliner-armchair/Charcoal Grey Fabric Power Recliner Armchair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-charcoal-plush-double-recliner-set",
    "name": "Charcoal Plush Double Recliner Set",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Charcoal Plush Double Recliner Set combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-charcoal-plush-double-recliner-set/charcoal_plush_double_recliner_set.webp",
    "images": [
      "assets/products/recliners/cat-charcoal-plush-double-recliner-set/charcoal_plush_double_recliner_set.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-chestnut-brown-power-reclining-sofa",
    "name": "Chestnut Brown Power Reclining Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Chestnut Brown Power Reclining Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-chestnut-brown-power-reclining-sofa/chestnut_brown_power_reclining_sofa.webp",
    "images": [
      "assets/products/sofas/cat-chestnut-brown-power-reclining-sofa/chestnut_brown_power_reclining_sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-chestnut-leather-power-recliner",
    "name": "Chestnut Leather Power Recliner",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Chestnut Leather Power Recliner combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-chestnut-leather-power-recliner/chestnut_leather_power_recliner.webp",
    "images": [
      "assets/products/recliners/cat-chestnut-leather-power-recliner/chestnut_leather_power_recliner.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-chestnut-leather-whitepiping-recliner",
    "name": "Chestnut Leather Whitepiping Recliner",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Chestnut Leather Whitepiping Recliner combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-chestnut-leather-whitepiping-recliner/chestnut_leather_whitepiping_recliner.webp",
    "images": [
      "assets/products/recliners/cat-chestnut-leather-whitepiping-recliner/chestnut_leather_whitepiping_recliner.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cognac-leather-full-recliner-suite",
    "name": "Cognac Leather Full Recliner Suite",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cognac Leather Full Recliner Suite combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-cognac-leather-full-recliner-suite/cognac_leather_full_recliner_suite.webp",
    "images": [
      "assets/products/recliners/cat-cognac-leather-full-recliner-suite/cognac_leather_full_recliner_suite.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cognac-leather-power-lift-chair",
    "name": "Cognac Leather Power Lift Chair",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cognac Leather Power Lift Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-cognac-leather-power-lift-chair/cognac_leather_power_lift_chair.webp",
    "images": [
      "assets/products/recliners/cat-cognac-leather-power-lift-chair/cognac_leather_power_lift_chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cognac-leather-power-recliner-armchair",
    "name": "Cognac Leather Power Recliner Armchair",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cognac Leather Power Recliner Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-cognac-leather-power-recliner-armchair/Cognac Leather Power Recliner Armchair.webp",
    "images": [
      "assets/products/recliners/cat-cognac-leather-power-recliner-armchair/Cognac Leather Power Recliner Armchair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cognac-leather-recliner-armchair-b",
    "name": "Cognac Leather Recliner Armchair B",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cognac Leather Recliner Armchair B combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-cognac-leather-recliner-armchair-b/Cognac Leather Recliner Armchair B.webp",
    "images": [
      "assets/products/recliners/cat-cognac-leather-recliner-armchair-b/Cognac Leather Recliner Armchair B.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cognac-leather-recliner-armchair-c",
    "name": "Cognac Leather Recliner Armchair C",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cognac Leather Recliner Armchair C combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-cognac-leather-recliner-armchair-c/Cognac Leather Recliner Armchair C.webp",
    "images": [
      "assets/products/recliners/cat-cognac-leather-recliner-armchair-c/Cognac Leather Recliner Armchair C.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cognac-wovendetail-leather-recliner-set",
    "name": "Cognac Wovendetail Leather Recliner Set",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cognac Wovendetail Leather Recliner Set combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-cognac-wovendetail-leather-recliner-set/cognac_wovendetail_leather_recliner_set.webp",
    "images": [
      "assets/products/recliners/cat-cognac-wovendetail-leather-recliner-set/cognac_wovendetail_leather_recliner_set.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-leather-console-reclining-suite",
    "name": "Cream Leather Console Reclining Suite",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Leather Console Reclining Suite combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-cream-leather-console-reclining-suite/cream_leather_console_reclining_suite.webp",
    "images": [
      "assets/products/recliners/cat-cream-leather-console-reclining-suite/cream_leather_console_reclining_suite.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-leather-plush-double-recliner",
    "name": "Cream Leather Plush Double Recliner",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Leather Plush Double Recliner combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-cream-leather-plush-double-recliner/cream_leather_plush_double_recliner.webp",
    "images": [
      "assets/products/recliners/cat-cream-leather-plush-double-recliner/cream_leather_plush_double_recliner.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-leather-plush-power-recliner",
    "name": "Cream Leather Plush Power Recliner",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Leather Plush Power Recliner combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-cream-leather-plush-power-recliner/cream_leather_plush_power_recliner.webp",
    "images": [
      "assets/products/recliners/cat-cream-leather-plush-power-recliner/cream_leather_plush_power_recliner.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-leather-power-recliner-loveseat",
    "name": "Cream Leather Power Recliner Loveseat",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Leather Power Recliner Loveseat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-cream-leather-power-recliner-loveseat/cream_leather_power_recliner_loveseat.webp",
    "images": [
      "assets/products/recliners/cat-cream-leather-power-recliner-loveseat/cream_leather_power_recliner_loveseat.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-leather-power-recliner-pair-comboset",
    "name": "Cream Leather Power Recliner Pair Comboset",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Leather Power Recliner Pair Comboset combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-cream-leather-power-recliner-pair-comboset/cream_leather_power_recliner_pair_comboset.webp",
    "images": [
      "assets/products/recliners/cat-cream-leather-power-recliner-pair-comboset/cream_leather_power_recliner_pair_comboset.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-leather-power-reclining-suite",
    "name": "Cream Leather Power Reclining Suite",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Leather Power Reclining Suite combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-cream-leather-power-reclining-suite/cream_leather_power_reclining_suite.webp",
    "images": [
      "assets/products/recliners/cat-cream-leather-power-reclining-suite/cream_leather_power_reclining_suite.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-modular-reclining-living-set",
    "name": "Cream Modular Reclining Living Set",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Modular Reclining Living Set combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-cream-modular-reclining-living-set/cream_modular_reclining_living_set.webp",
    "images": [
      "assets/products/recliners/cat-cream-modular-reclining-living-set/cream_modular_reclining_living_set.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-tan-leather-power-recliner",
    "name": "Cream Tan Leather Power Recliner",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Tan Leather Power Recliner combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-cream-tan-leather-power-recliner/cream_tan_leather_power_recliner.webp",
    "images": [
      "assets/products/recliners/cat-cream-tan-leather-power-recliner/cream_tan_leather_power_recliner.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-brown-leather-double-recliner",
    "name": "Dark Brown Leather Double Recliner",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Brown Leather Double Recliner combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-dark-brown-leather-double-recliner/dark_brown_leather_double_recliner.webp",
    "images": [
      "assets/products/recliners/cat-dark-brown-leather-double-recliner/dark_brown_leather_double_recliner.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-charcoal-grey-recliner-armchair",
    "name": "Dark Charcoal Grey Recliner Armchair",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Charcoal Grey Recliner Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-dark-charcoal-grey-recliner-armchair/Dark Charcoal Grey Recliner Armchair - Front View.webp",
    "images": [
      "assets/products/recliners/cat-dark-charcoal-grey-recliner-armchair/Dark Charcoal Grey Recliner Armchair - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-charcoal-leather-recliner-armchair",
    "name": "Dark Charcoal Leather Recliner Armchair",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Charcoal Leather Recliner Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-dark-charcoal-leather-recliner-armchair/Dark Charcoal Leather Recliner Armchair.webp",
    "images": [
      "assets/products/recliners/cat-dark-charcoal-leather-recliner-armchair/Dark Charcoal Leather Recliner Armchair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-charcoal-plush-recliner-sofa",
    "name": "Dark Charcoal Plush Recliner Sofa",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Charcoal Plush Recliner Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-dark-charcoal-plush-recliner-sofa/dark_charcoal_plush_recliner_sofa.webp",
    "images": [
      "assets/products/recliners/cat-dark-charcoal-plush-recliner-sofa/dark_charcoal_plush_recliner_sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-gray-plush-power-recliner",
    "name": "Dark Gray Plush Power Recliner",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Gray Plush Power Recliner combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-dark-gray-plush-power-recliner/dark_gray_plush_power_recliner.webp",
    "images": [
      "assets/products/recliners/cat-dark-gray-plush-power-recliner/dark_gray_plush_power_recliner.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-deep-brown-leather-power-recliner-armchair",
    "name": "Deep Brown Leather Power Recliner Armchair",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Deep Brown Leather Power Recliner Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-deep-brown-leather-power-recliner-armchair/Deep Brown Leather Power Recliner Armchair.webp",
    "images": [
      "assets/products/recliners/cat-deep-brown-leather-power-recliner-armchair/Deep Brown Leather Power Recliner Armchair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-deep-burgundy-leather-recliner-armchair",
    "name": "Deep Burgundy Leather Recliner Armchair",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Deep Burgundy Leather Recliner Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-deep-burgundy-leather-recliner-armchair/Deep Burgundy Leather Recliner Armchair.webp",
    "images": [
      "assets/products/recliners/cat-deep-burgundy-leather-recliner-armchair/Deep Burgundy Leather Recliner Armchair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dove-gray-leather-double-recliner",
    "name": "Dove Gray Leather Double Recliner",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dove Gray Leather Double Recliner combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-dove-gray-leather-double-recliner/dove_gray_leather_double_recliner.webp",
    "images": [
      "assets/products/recliners/cat-dove-gray-leather-double-recliner/dove_gray_leather_double_recliner.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-eros-microfiber-full-recliner-sofa-three-seater",
    "name": "Eros Microfiber Full Recliner Sofa Three Seater",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Eros Microfiber Full Recliner Sofa Three Seater combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-eros-microfiber-full-recliner-sofa-three-seater/Eros Microfiber Full Recliner Sofa - Three Seater.webp",
    "images": [
      "assets/products/recliners/cat-eros-microfiber-full-recliner-sofa-three-seater/Eros Microfiber Full Recliner Sofa - Three Seater.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-eros-microfiber-loveseat-recliner-two-seater",
    "name": "Eros Microfiber Loveseat Recliner Two Seater",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Eros Microfiber Loveseat Recliner Two Seater combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-eros-microfiber-loveseat-recliner-two-seater/Eros Microfiber Loveseat Recliner - Two Seater.webp",
    "images": [
      "assets/products/recliners/cat-eros-microfiber-loveseat-recliner-two-seater/Eros Microfiber Loveseat Recliner - Two Seater.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-eros-microfiber-recliner-armchair-single-seater",
    "name": "Eros Microfiber Recliner Armchair Single Seater",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Eros Microfiber Recliner Armchair Single Seater combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-eros-microfiber-recliner-armchair-single-seater/Eros Microfiber Recliner Armchair - Single Seater.webp",
    "images": [
      "assets/products/recliners/cat-eros-microfiber-recliner-armchair-single-seater/Eros Microfiber Recliner Armchair - Single Seater.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-espresso-leather-padded-power-recliner",
    "name": "Espresso Leather Padded Power Recliner",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Espresso Leather Padded Power Recliner combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-espresso-leather-padded-power-recliner/espresso_leather_padded_power_recliner.webp",
    "images": [
      "assets/products/recliners/cat-espresso-leather-padded-power-recliner/espresso_leather_padded_power_recliner.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-espresso-piped-recliner-pair",
    "name": "Espresso Piped Recliner Pair",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Espresso Piped Recliner Pair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-espresso-piped-recliner-pair/espresso_piped_recliner_pair.webp",
    "images": [
      "assets/products/recliners/cat-espresso-piped-recliner-pair/espresso_piped_recliner_pair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-grey-fabric-motion-power-recliner-armchair",
    "name": "Grey Fabric Motion Power Recliner Armchair",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Grey Fabric Motion Power Recliner Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-grey-fabric-motion-power-recliner-armchair/Grey Fabric Motion Power Recliner Armchair.webp",
    "images": [
      "assets/products/recliners/cat-grey-fabric-motion-power-recliner-armchair/Grey Fabric Motion Power Recliner Armchair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-grey-fabric-power-recliner-armchair-c",
    "name": "Grey Fabric Power Recliner Armchair C",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Grey Fabric Power Recliner Armchair C combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-grey-fabric-power-recliner-armchair-c/Grey Fabric Power Recliner Armchair C.webp",
    "images": [
      "assets/products/recliners/cat-grey-fabric-power-recliner-armchair-c/Grey Fabric Power Recliner Armchair C.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-grey-leather-power-motion-recliner-sofa",
    "name": "Grey Leather Power Motion Recliner Sofa",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Grey Leather Power Motion Recliner Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-grey-leather-power-motion-recliner-sofa/Grey Leather Power Motion Recliner Sofa.webp",
    "images": [
      "assets/products/recliners/cat-grey-leather-power-motion-recliner-sofa/Grey Leather Power Motion Recliner Sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-light-beige-leather-motion-recliner-sofa",
    "name": "Light Beige Leather Motion Recliner Sofa",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Light Beige Leather Motion Recliner Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-light-beige-leather-motion-recliner-sofa/Light Beige Leather Motion Recliner Sofa.webp",
    "images": [
      "assets/products/recliners/cat-light-beige-leather-motion-recliner-sofa/Light Beige Leather Motion Recliner Sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-light-blue-and-grey-fabric-recliner-chair",
    "name": "Light Blue And Grey Fabric Recliner Chair",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Light Blue And Grey Fabric Recliner Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-light-blue-and-grey-fabric-recliner-chair/Light Blue and Grey Fabric Recliner Chair.webp",
    "images": [
      "assets/products/recliners/cat-light-blue-and-grey-fabric-recliner-chair/Light Blue and Grey Fabric Recliner Chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-light-gray-leather-double-recliner",
    "name": "Light Gray Leather Double Recliner",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Light Gray Leather Double Recliner combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-light-gray-leather-double-recliner/light_gray_leather_double_recliner.webp",
    "images": [
      "assets/products/recliners/cat-light-gray-leather-double-recliner/light_gray_leather_double_recliner.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-light-grey-fabric-power-recliner-armchair-b",
    "name": "Light Grey Fabric Power Recliner Armchair B",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Light Grey Fabric Power Recliner Armchair B combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-light-grey-fabric-power-recliner-armchair-b/Light Grey Fabric Power Recliner Armchair B.webp",
    "images": [
      "assets/products/recliners/cat-light-grey-fabric-power-recliner-armchair-b/Light Grey Fabric Power Recliner Armchair B.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-light-grey-leather-motion-recliner-sofa",
    "name": "Light Grey Leather Motion Recliner Sofa",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Light Grey Leather Motion Recliner Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-light-grey-leather-motion-recliner-sofa/Light Grey Leather Motion Recliner Sofa.webp",
    "images": [
      "assets/products/recliners/cat-light-grey-leather-motion-recliner-sofa/Light Grey Leather Motion Recliner Sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-mahogany-red-leather-power-recliner",
    "name": "Mahogany Red Leather Power Recliner",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Mahogany Red Leather Power Recliner combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-mahogany-red-leather-power-recliner/mahogany_red_leather_power_recliner.webp",
    "images": [
      "assets/products/recliners/cat-mahogany-red-leather-power-recliner/mahogany_red_leather_power_recliner.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-mocha-plush-power-recliner-couch",
    "name": "Mocha Plush Power Recliner Couch",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Mocha Plush Power Recliner Couch combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-mocha-plush-power-recliner-couch/mocha_plush_power_recliner_couch.webp",
    "images": [
      "assets/products/recliners/cat-mocha-plush-power-recliner-couch/mocha_plush_power_recliner_couch.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-mustard-yellow-3seater-recliner-sofa",
    "name": "Mustard Yellow 3 Seater Recliner Sofa",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Mustard Yellow 3 Seater Recliner Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-mustard-yellow-3seater-recliner-sofa/mustard_yellow_3seater_recliner_sofa.webp",
    "images": [
      "assets/products/recliners/cat-mustard-yellow-3seater-recliner-sofa/mustard_yellow_3seater_recliner_sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-mustard-yellow-power-recliner-sofa",
    "name": "Mustard Yellow Power Recliner Sofa",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Mustard Yellow Power Recliner Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-mustard-yellow-power-recliner-sofa/mustard_yellow_power_recliner_sofa.webp",
    "images": [
      "assets/products/recliners/cat-mustard-yellow-power-recliner-sofa/mustard_yellow_power_recliner_sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-navy-blue-leather-power-motion-recliner-armchair-b",
    "name": "Navy Blue Leather Power Motion Recliner Armchair B",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Navy Blue Leather Power Motion Recliner Armchair B combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-navy-blue-leather-power-motion-recliner-armchair-b/Navy Blue Leather Power Motion Recliner Armchair B.webp",
    "images": [
      "assets/products/recliners/cat-navy-blue-leather-power-motion-recliner-armchair-b/Navy Blue Leather Power Motion Recliner Armchair B.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-navy-blue-leather-recliner-armchair",
    "name": "Navy Blue Leather Recliner Armchair",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Navy Blue Leather Recliner Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-navy-blue-leather-recliner-armchair/Navy Blue Leather Recliner Armchair - Studio View.webp",
    "images": [
      "assets/products/recliners/cat-navy-blue-leather-recliner-armchair/Navy Blue Leather Recliner Armchair - Studio View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-olive-brown-leather-power-recliner-armchair",
    "name": "Olive Brown Leather Power Recliner Armchair",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Olive Brown Leather Power Recliner Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-olive-brown-leather-power-recliner-armchair/Olive Brown Leather Power Recliner Armchair.webp",
    "images": [
      "assets/products/recliners/cat-olive-brown-leather-power-recliner-armchair/Olive Brown Leather Power Recliner Armchair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-rich-brown-leather-swivel-recliner",
    "name": "Rich Brown Leather Swivel Recliner",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Rich Brown Leather Swivel Recliner combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-rich-brown-leather-swivel-recliner/rich_brown_leather_swivel_recliner.webp",
    "images": [
      "assets/products/recliners/cat-rich-brown-leather-swivel-recliner/rich_brown_leather_swivel_recliner.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-rust-velvet-piped-recliner-chair",
    "name": "Rust Velvet Piped Recliner Chair",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Rust Velvet Piped Recliner Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-rust-velvet-piped-recliner-chair/rust_velvet_piped_recliner_chair.webp",
    "images": [
      "assets/products/recliners/cat-rust-velvet-piped-recliner-chair/rust_velvet_piped_recliner_chair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-saddle-brown-power-reclining-sofa",
    "name": "Saddle Brown Power Reclining Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Saddle Brown Power Reclining Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-saddle-brown-power-reclining-sofa/saddle_brown_power_reclining_sofa.webp",
    "images": [
      "assets/products/sofas/cat-saddle-brown-power-reclining-sofa/saddle_brown_power_reclining_sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-sage-green-leather-power-motion-recliner-loveseat",
    "name": "Sage Green Leather Power Motion Recliner Loveseat",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Sage Green Leather Power Motion Recliner Loveseat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-sage-green-leather-power-motion-recliner-loveseat/Sage Green Leather Power Motion Recliner Loveseat.webp",
    "images": [
      "assets/products/recliners/cat-sage-green-leather-power-motion-recliner-loveseat/Sage Green Leather Power Motion Recliner Loveseat.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-sage-green-leather-power-motion-recliner-sofa-b",
    "name": "Sage Green Leather Power Motion Recliner Sofa B",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Sage Green Leather Power Motion Recliner Sofa B combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-sage-green-leather-power-motion-recliner-sofa-b/Sage Green Leather Power Motion Recliner Sofa B.webp",
    "images": [
      "assets/products/recliners/cat-sage-green-leather-power-motion-recliner-sofa-b/Sage Green Leather Power Motion Recliner Sofa B.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-slate-blue-microfiber-plush-recliner",
    "name": "Slate Blue Microfiber Plush Recliner",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Slate Blue Microfiber Plush Recliner combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-slate-blue-microfiber-plush-recliner/slate_blue_microfiber_plush_recliner.webp",
    "images": [
      "assets/products/recliners/cat-slate-blue-microfiber-plush-recliner/slate_blue_microfiber_plush_recliner.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-slate-blue-microfiber-recliner-loveseat",
    "name": "Slate Blue Microfiber Recliner Loveseat",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Slate Blue Microfiber Recliner Loveseat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-slate-blue-microfiber-recliner-loveseat/slate_blue_microfiber_recliner_loveseat.webp",
    "images": [
      "assets/products/recliners/cat-slate-blue-microfiber-recliner-loveseat/slate_blue_microfiber_recliner_loveseat.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-slate-blue-reclining-living-suite",
    "name": "Slate Blue Reclining Living Suite",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Slate Blue Reclining Living Suite combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-slate-blue-reclining-living-suite/slate_blue_reclining_living_suite.webp",
    "images": [
      "assets/products/recliners/cat-slate-blue-reclining-living-suite/slate_blue_reclining_living_suite.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-slate-gray-microfiber-recliner-loveseat",
    "name": "Slate Gray Microfiber Recliner Loveseat",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Slate Gray Microfiber Recliner Loveseat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-slate-gray-microfiber-recliner-loveseat/slate_gray_microfiber_recliner_loveseat.webp",
    "images": [
      "assets/products/recliners/cat-slate-gray-microfiber-recliner-loveseat/slate_gray_microfiber_recliner_loveseat.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-tan-leather-3piece-recliner-suite",
    "name": "Tan Leather Recliner Suite",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Tan Leather Recliner Suite combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-tan-leather-3piece-recliner-suite/tan_leather_3piece_recliner_suite.webp",
    "images": [
      "assets/products/recliners/cat-tan-leather-3piece-recliner-suite/tan_leather_3piece_recliner_suite.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-tan-leather-power-recliner-modular-sofa-with-console",
    "name": "Tan Leather Power Recliner Modular Sofa With Console",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Tan Leather Power Recliner Modular Sofa With Console combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-tan-leather-power-recliner-modular-sofa-with-console/Tan Leather Power Recliner Modular Sofa with Console.webp",
    "images": [
      "assets/products/recliners/cat-tan-leather-power-recliner-modular-sofa-with-console/Tan Leather Power Recliner Modular Sofa with Console.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-tan-plush-leather-recliner-sofa",
    "name": "Tan Plush Leather Recliner Sofa",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Tan Plush Leather Recliner Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-tan-plush-leather-recliner-sofa/tan_plush_leather_recliner_sofa.webp",
    "images": [
      "assets/products/recliners/cat-tan-plush-leather-recliner-sofa/tan_plush_leather_recliner_sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-taupe-corduroy-power-recliner",
    "name": "Taupe Corduroy Power Recliner",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Taupe Corduroy Power Recliner combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-taupe-corduroy-power-recliner/taupe_corduroy_power_recliner.webp",
    "images": [
      "assets/products/recliners/cat-taupe-corduroy-power-recliner/taupe_corduroy_power_recliner.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-taupe-leather-power-reclining-pair",
    "name": "Taupe Leather Power Reclining Pair",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Taupe Leather Power Reclining Pair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-taupe-leather-power-reclining-pair/taupe_leather_power_reclining_pair.webp",
    "images": [
      "assets/products/recliners/cat-taupe-leather-power-reclining-pair/taupe_leather_power_reclining_pair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-taupe-microfiber-power-recliner-comboset",
    "name": "Taupe Microfiber Power Recliner Comboset",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Taupe Microfiber Power Recliner Comboset combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-taupe-microfiber-power-recliner-comboset/taupe_microfiber_power_recliner_comboset.webp",
    "images": [
      "assets/products/recliners/cat-taupe-microfiber-power-recliner-comboset/taupe_microfiber_power_recliner_comboset.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-terracotta-velvet-double-recliner",
    "name": "Terracotta Velvet Double Recliner",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Terracotta Velvet Double Recliner combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-terracotta-velvet-double-recliner/terracotta_velvet_double_recliner.webp",
    "images": [
      "assets/products/recliners/cat-terracotta-velvet-double-recliner/terracotta_velvet_double_recliner.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-twotone-blue-gray-power-recliner",
    "name": "Twotone Blue Gray Power Recliner",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Twotone Blue Gray Power Recliner combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-twotone-blue-gray-power-recliner/twotone_blue_gray_power_recliner.webp",
    "images": [
      "assets/products/recliners/cat-twotone-blue-gray-power-recliner/twotone_blue_gray_power_recliner.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-white-leather-power-recliner-loveseat",
    "name": "White Leather Power Recliner Loveseat",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The White Leather Power Recliner Loveseat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-white-leather-power-recliner-loveseat/White Leather Power Recliner Loveseat.webp",
    "images": [
      "assets/products/recliners/cat-white-leather-power-recliner-loveseat/White Leather Power Recliner Loveseat.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-white-leather-recliner-armchair",
    "name": "White Leather Recliner Armchair",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The White Leather Recliner Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-white-leather-recliner-armchair/White Leather Recliner Armchair - Extended View.webp",
    "images": [
      "assets/products/recliners/cat-white-leather-recliner-armchair/White Leather Recliner Armchair - Extended View.webp"
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
    "rating": 4.4,
    "badge": "",
    "description": "The Bedroom Suite Gamma combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/bedroom_set_01/Bedroom_Set_01_01.webp",
    "images": [
      "assets/products/sleeping-beds/bedroom_set_01/Bedroom_Set_01_01.webp"
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
    "description": "The Bedroom Suite Delta combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/bedroom_set_02/Bedroom_Set_02_01.webp",
    "images": [
      "assets/products/sleeping-beds/bedroom_set_02/Bedroom_Set_02_01.webp"
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
    "rating": 4.8,
    "badge": "",
    "description": "The Bedroom Suite Epsilon combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/bedroom_set_03/Bedroom_Set_03_01.webp",
    "images": [
      "assets/products/sleeping-beds/bedroom_set_03/Bedroom_Set_03_01.webp"
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
    "rating": 4.1,
    "badge": "",
    "description": "The Bedroom Suite Zeta combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/bedroom_set_04/Bedroom_Set_04_01.webp",
    "images": [
      "assets/products/sleeping-beds/bedroom_set_04/Bedroom_Set_04_01.webp"
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
    "rating": 4.9,
    "badge": "",
    "description": "The Bedroom Suite Eta combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/bedroom_set_05/Bedroom_Set_05_01.webp",
    "images": [
      "assets/products/sleeping-beds/bedroom_set_05/Bedroom_Set_05_01.webp"
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
    "rating": 4.4,
    "badge": "",
    "description": "The Bedroom Suite Theta combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/bedroom_set_06/Bedroom_Set_06_01.webp",
    "images": [
      "assets/products/sleeping-beds/bedroom_set_06/Bedroom_Set_06_01.webp"
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
    "rating": 4.5,
    "badge": "",
    "description": "The Bedroom Suite Iota combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/bedroom_set_07/Bedroom_Set_07_01.webp",
    "images": [
      "assets/products/sleeping-beds/bedroom_set_07/Bedroom_Set_07_01.webp"
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
    "rating": 4.8,
    "badge": "",
    "description": "The Bedroom Suite Kappa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/bedroom_set_08/Bedroom_Set_08_01.webp",
    "images": [
      "assets/products/sleeping-beds/bedroom_set_08/Bedroom_Set_08_01.webp"
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
    "description": "The Bedroom Suite Lambda combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/bedroom_set_09/Bedroom_Set_09_01.webp",
    "images": [
      "assets/products/sleeping-beds/bedroom_set_09/Bedroom_Set_09_01.webp"
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
    "rating": 4.9,
    "badge": "",
    "description": "The Bedroom Suite Mu combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/bedroom_set_10/Bedroom_Set_10_01.webp",
    "images": [
      "assets/products/sleeping-beds/bedroom_set_10/Bedroom_Set_10_01.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-angled-wood-frame-daybed-couch",
    "name": "Angled Wood Frame Daybed Couch",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Angled Wood Frame Daybed Couch combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-angled-wood-frame-daybed-couch/Angled Wood Frame Daybed Couch - View 1.webp",
    "images": [
      "assets/products/sleeping-beds/cat-angled-wood-frame-daybed-couch/Angled Wood Frame Daybed Couch - View 1.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-bedroom-suite-beta",
    "name": "Bedroom Suite Beta",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Bedroom Suite Beta combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-bedroom-suite-beta/Bedroom Suite Beta - Angle Perspective.webp",
    "images": [
      "assets/products/sleeping-beds/cat-bedroom-suite-beta/Bedroom Suite Beta - Angle Perspective.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-beige-boucle-lowprofile-platform-bed",
    "name": "Beige Boucle Lowprofile Platform Bed",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Beige Boucle Lowprofile Platform Bed combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-beige-boucle-lowprofile-platform-bed/beige_boucle_lowprofile_platform_bed.webp",
    "images": [
      "assets/products/sleeping-beds/cat-beige-boucle-lowprofile-platform-bed/beige_boucle_lowprofile_platform_bed.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-charcoal-channel-tufted-bed",
    "name": "Charcoal Channel Tufted Bed",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Charcoal Channel Tufted Bed combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-charcoal-channel-tufted-bed/charcoal_channel_tufted_bed.webp",
    "images": [
      "assets/products/sleeping-beds/cat-charcoal-channel-tufted-bed/charcoal_channel_tufted_bed.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-charcoal-velvet-tufted-platform-bed",
    "name": "Charcoal Velvet Tufted Platform Bed",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Charcoal Velvet Tufted Platform Bed combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-charcoal-velvet-tufted-platform-bed/charcoal_velvet_tufted_platform_bed.webp",
    "images": [
      "assets/products/sleeping-beds/cat-charcoal-velvet-tufted-platform-bed/charcoal_velvet_tufted_platform_bed.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-contemporary-ash-wood-bed",
    "name": "Contemporary Ash Wood Bed",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Contemporary Ash Wood Bed combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-contemporary-ash-wood-bed/Contemporary Ash Wood Bed - Angle Perspective.webp",
    "images": [
      "assets/products/sleeping-beds/cat-contemporary-ash-wood-bed/Contemporary Ash Wood Bed - Angle Perspective.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-linen-lowprofile-platform-bed",
    "name": "Cream Linen Lowprofile Platform Bed",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Linen Lowprofile Platform Bed combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-cream-linen-lowprofile-platform-bed/cream_linen_lowprofile_platform_bed.webp",
    "images": [
      "assets/products/sleeping-beds/cat-cream-linen-lowprofile-platform-bed/cream_linen_lowprofile_platform_bed.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-upholstered-bed-with-rose-blanket",
    "name": "Cream Upholstered Bed With Rose Blanket",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Upholstered Bed With Rose Blanket combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-cream-upholstered-bed-with-rose-blanket/cream_upholstered_bed_with_rose_blanket.webp",
    "images": [
      "assets/products/sleeping-beds/cat-cream-upholstered-bed-with-rose-blanket/cream_upholstered_bed_with_rose_blanket.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-espresso-single-bed-with-arched-headboard",
    "name": "Dark Espresso Single Bed With Arched Headboard",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Espresso Single Bed With Arched Headboard combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-dark-espresso-single-bed-with-arched-headboard/Dark Espresso Single Bed with Arched Headboard.webp",
    "images": [
      "assets/products/sleeping-beds/cat-dark-espresso-single-bed-with-arched-headboard/Dark Espresso Single Bed with Arched Headboard.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-gray-modern-platform-bed",
    "name": "Dark Gray Modern Platform Bed",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Gray Modern Platform Bed combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-dark-gray-modern-platform-bed/dark_gray_modern_platform_bed.webp",
    "images": [
      "assets/products/sleeping-beds/cat-dark-gray-modern-platform-bed/dark_gray_modern_platform_bed.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-gray-wingheadboard-bed",
    "name": "Dark Gray Wingheadboard Bed",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Gray Wingheadboard Bed combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-dark-gray-wingheadboard-bed/dark_gray_wingheadboard_bed.webp",
    "images": [
      "assets/products/sleeping-beds/cat-dark-gray-wingheadboard-bed/dark_gray_wingheadboard_bed.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dusty-rose-velvet-tufted-bed",
    "name": "Dusty Rose Velvet Tufted Bed",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dusty Rose Velvet Tufted Bed combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-dusty-rose-velvet-tufted-bed/dusty_rose_velvet_tufted_bed.webp",
    "images": [
      "assets/products/sleeping-beds/cat-dusty-rose-velvet-tufted-bed/dusty_rose_velvet_tufted_bed.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-elthira-leather-upholstered-bed-frame",
    "name": "Elthira Leather Upholstered Bed Frame",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Elthira Leather Upholstered Bed Frame combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-elthira-leather-upholstered-bed-frame/Elthira Leather Bed Frame - Angle Perspective.webp",
    "images": [
      "assets/products/sleeping-beds/cat-elthira-leather-upholstered-bed-frame/Elthira Leather Bed Frame - Angle Perspective.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-emerald-velvet-tufted-bed-frame",
    "name": "Emerald Velvet Tufted Bed Frame",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Emerald Velvet Tufted Bed Frame combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-emerald-velvet-tufted-bed-frame/emerald_velvet_tufted_bed_frame.webp",
    "images": [
      "assets/products/sleeping-beds/cat-emerald-velvet-tufted-bed-frame/emerald_velvet_tufted_bed_frame.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-eternia-modern-ash-bedroom-set",
    "name": "Eternia Modern Ash Bedroom Set",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Eternia Modern Ash Bedroom Set combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-eternia-modern-ash-bedroom-set/Eternia Modern Ash Bedroom Set - Angle Perspective.webp",
    "images": [
      "assets/products/sleeping-beds/cat-eternia-modern-ash-bedroom-set/Eternia Modern Ash Bedroom Set - Angle Perspective.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-hospitality-bedroom-study-suite",
    "name": "Hospitality Bedroom Study Suite",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Hospitality Bedroom Study Suite combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-hospitality-bedroom-study-suite/Hospitality Suite - Angle Perspective.webp",
    "images": [
      "assets/products/sleeping-beds/cat-hospitality-bedroom-study-suite/Hospitality Suite - Angle Perspective.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-light-oak-single-bed-and-nightstand",
    "name": "Light Oak Single Bed And Nightstand",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Light Oak Single Bed And Nightstand combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-light-oak-single-bed-and-nightstand/light_oak_single_bed_and_nightstand.webp",
    "images": [
      "assets/products/sleeping-beds/cat-light-oak-single-bed-and-nightstand/light_oak_single_bed_and_nightstand.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-low-profile-wooden-platform-bed-kappa",
    "name": "Low Profile Wooden Platform Bed Kappa",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Low Profile Wooden Platform Bed Kappa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-low-profile-wooden-platform-bed-kappa/Low Profile Wooden Platform Bed Kappa.webp",
    "images": [
      "assets/products/sleeping-beds/cat-low-profile-wooden-platform-bed-kappa/Low Profile Wooden Platform Bed Kappa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-bed-frame-lambda",
    "name": "Minimalist Wood Bed Frame",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Bed Frame combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-bed-frame-lambda/Minimalist Wood Bed Frame Lambda.webp",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-bed-frame-lambda/Minimalist Wood Bed Frame Lambda.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-bed-theta",
    "name": "Minimalist Wood Bed",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Bed combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-bed-theta/Minimalist Wood Bed Theta.webp",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-bed-theta/Minimalist Wood Bed Theta.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-bed-with-cane-headboard",
    "name": "Minimalist Wood Bed With Cane Headboard",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Bed With Cane Headboard combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-bed-with-cane-headboard/Minimalist Wood Bed with Cane Headboard.webp",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-bed-with-cane-headboard/Minimalist Wood Bed with Cane Headboard.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-bed-with-headboard-shelf",
    "name": "Minimalist Wood Bed With Headboard",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Bed With Headboard Shelf combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-bed-with-headboard-shelf/Minimalist Wood Bed with Headboard Shelf.webp",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-bed-with-headboard-shelf/Minimalist Wood Bed with Headboard Shelf.webp",
      "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-chi/Minimalist Wood Daybed Platform Bed Chi.webp",
      "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-phi/Minimalist Wood Daybed Platform Bed Phi.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-daybed-platform-bed-mu",
    "name": "Minimalist Wood Daybed Platform Bed",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Daybed Platform Bed combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-mu/Minimalist Wood Daybed Platform Bed Mu.webp",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-mu/Minimalist Wood Daybed Platform Bed Mu.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-daybed-platform-bed-nu",
    "name": "Minimalist Wood Daybed Platform Bed",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Daybed Platform Bed combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-nu/Minimalist Wood Daybed Platform Bed Nu.webp",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-nu/Minimalist Wood Daybed Platform Bed Nu.webp",
      "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-sigma/Minimalist Wood Daybed Platform Bed Sigma.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-daybed-platform-bed-omicron",
    "name": "Minimalist Wood Daybed Platform Bed",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Daybed Platform Bed combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-omicron/Minimalist Wood Daybed Platform Bed Omicron.webp",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-omicron/Minimalist Wood Daybed Platform Bed Omicron.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-daybed-platform-bed-pi",
    "name": "Minimalist Wood Daybed Platform Bed",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Daybed Platform Bed combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-pi/Minimalist Wood Daybed Platform Bed Pi.webp",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-pi/Minimalist Wood Daybed Platform Bed Pi.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-daybed-platform-bed-rho",
    "name": "Minimalist Wood Daybed Platform Bed",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Daybed Platform Bed combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-rho/Minimalist Wood Daybed Platform Bed Rho.webp",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-rho/Minimalist Wood Daybed Platform Bed Rho.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-daybed-platform-bed-tau",
    "name": "Minimalist Wood Daybed Platform Bed",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Daybed Platform Bed combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-tau/Minimalist Wood Daybed Platform Bed Tau.webp",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-tau/Minimalist Wood Daybed Platform Bed Tau.webp",
      "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-upsilon/Minimalist Wood Daybed Platform Bed Upsilon.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-daybed-platform-bed-xi",
    "name": "Minimalist Wood Daybed Platform Bed",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Daybed Platform Bed combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-xi/Minimalist Wood Daybed Platform Bed Xi.webp",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-xi/Minimalist Wood Daybed Platform Bed Xi.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-platform-bed-alpha",
    "name": "Minimalist Wood Platform Bed",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Platform Bed combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-platform-bed-alpha/Minimalist Wood Platform Bed Alpha - Low View.webp",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-platform-bed-alpha/Minimalist Wood Platform Bed Alpha - Low View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-platform-bed-beta",
    "name": "Minimalist Wood Platform Bed",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Platform Bed combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-platform-bed-beta/Minimalist Wood Platform Bed Beta - High Perspective View.webp",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-platform-bed-beta/Minimalist Wood Platform Bed Beta - High Perspective View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-platform-bed-delta",
    "name": "Minimalist Wood Platform Bed",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Platform Bed combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-platform-bed-delta/Minimalist Wood Platform Bed Delta - Studio View.webp",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-platform-bed-delta/Minimalist Wood Platform Bed Delta - Studio View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-platform-bed-epsilon",
    "name": "Minimalist Wood Platform Bed",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Platform Bed combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-platform-bed-epsilon/Minimalist Wood Platform Bed Epsilon - Studio View.webp",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-platform-bed-epsilon/Minimalist Wood Platform Bed Epsilon - Studio View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-platform-bed-eta",
    "name": "Minimalist Wood Platform Bed",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Platform Bed combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-platform-bed-eta/Minimalist Wood Platform Bed Eta - Distance View.webp",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-platform-bed-eta/Minimalist Wood Platform Bed Eta - Distance View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-platform-bed-gamma",
    "name": "Minimalist Wood Platform Bed",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Platform Bed combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-platform-bed-gamma/Minimalist Wood Platform Bed Gamma - Distance View.webp",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-platform-bed-gamma/Minimalist Wood Platform Bed Gamma - Distance View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-platform-bed-zeta",
    "name": "Minimalist Wood Platform Bed",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Platform Bed combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-platform-bed-zeta/Minimalist Wood Platform Bed Zeta - Side View.webp",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-platform-bed-zeta/Minimalist Wood Platform Bed Zeta - Side View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-modern-ash-bed-with-upholstered-headboard",
    "name": "Modern Ash Bed With Upholstered Headboard",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Modern Ash Bed With Upholstered Headboard combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-modern-ash-bed-with-upholstered-headboard/Modern Ash Bed with Upholstered Headboard.webp",
    "images": [
      "assets/products/sleeping-beds/cat-modern-ash-bed-with-upholstered-headboard/Modern Ash Bed with Upholstered Headboard.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-modern-walnut-bed-frame-with-grey-headboard",
    "name": "Modern Walnut Bed Frame With Grey Headboard",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Modern Walnut Bed Frame With Grey Headboard combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-modern-walnut-bed-frame-with-grey-headboard/Modern Walnut Bed Frame with Grey Headboard.webp",
    "images": [
      "assets/products/sleeping-beds/cat-modern-walnut-bed-frame-with-grey-headboard/Modern Walnut Bed Frame with Grey Headboard.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-navy-blue-tufted-platform-bed",
    "name": "Navy Blue Tufted Platform Bed",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Navy Blue Tufted Platform Bed combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-navy-blue-tufted-platform-bed/navy_blue_tufted_platform_bed.webp",
    "images": [
      "assets/products/sleeping-beds/cat-navy-blue-tufted-platform-bed/navy_blue_tufted_platform_bed.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-nestor-oak-wood-bedroom-suite-set",
    "name": "Nestor Oak Wood Bedroom Suite Set",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Nestor Oak Wood Bedroom Suite Set combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-nestor-oak-wood-bedroom-suite-set/Nestor Bedroom Suite Set.webp",
    "images": [
      "assets/products/sleeping-beds/cat-nestor-oak-wood-bedroom-suite-set/Nestor Bedroom Suite Set.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-oak-bed-frame-with-upholstered-headboard",
    "name": "Oak Bed Frame With Upholstered Headboard",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Oak Bed Frame With Upholstered Headboard combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-oak-bed-frame-with-upholstered-headboard/oak_bed_frame_with_upholstered_headboard.webp",
    "images": [
      "assets/products/sleeping-beds/cat-oak-bed-frame-with-upholstered-headboard/oak_bed_frame_with_upholstered_headboard.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-oak-hydraulic-storage-bed",
    "name": "Oak Hydraulic Storage Bed",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Oak Hydraulic Storage Bed combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-oak-hydraulic-storage-bed/oak_hydraulic_storage_bed.webp",
    "images": [
      "assets/products/sleeping-beds/cat-oak-hydraulic-storage-bed/oak_hydraulic_storage_bed.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-oak-wood-bed-with-dark-headboard",
    "name": "Oak Wood Bed With Dark Headboard",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Oak Wood Bed With Dark Headboard combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-oak-wood-bed-with-dark-headboard/oak_wood_bed_with_dark_headboard.webp",
    "images": [
      "assets/products/sleeping-beds/cat-oak-wood-bed-with-dark-headboard/oak_wood_bed_with_dark_headboard.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-oak-wood-single-bed-with-grey-panel-headboard",
    "name": "Oak Wood Single Bed With Grey Panel Headboard",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Oak Wood Single Bed With Grey Panel Headboard combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-oak-wood-single-bed-with-grey-panel-headboard/Oak Wood Single Bed with Grey Panel Headboard.webp",
    "images": [
      "assets/products/sleeping-beds/cat-oak-wood-single-bed-with-grey-panel-headboard/Oak Wood Single Bed with Grey Panel Headboard.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-pine-wood-single-bed-and-desk-set",
    "name": "Pine Wood Single Bed And Desk Set",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Pine Wood Single Bed And Desk Set combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-pine-wood-single-bed-and-desk-set/pine_wood_single_bed_and_desk_set.webp",
    "images": [
      "assets/products/sleeping-beds/cat-pine-wood-single-bed-and-desk-set/pine_wood_single_bed_and_desk_set.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-rose-pink-upholstered-bed-frame",
    "name": "Rose Pink Upholstered Bed Frame",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Rose Pink Upholstered Bed Frame combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-rose-pink-upholstered-bed-frame/rose_pink_upholstered_bed_frame.webp",
    "images": [
      "assets/products/sleeping-beds/cat-rose-pink-upholstered-bed-frame/rose_pink_upholstered_bed_frame.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-spindle-wood-frame-daybed",
    "name": "Spindle Wood Frame Daybed",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Spindle Wood Frame Daybed combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-spindle-wood-frame-daybed/Spindle Wood Frame Daybed - Perspective.webp",
    "images": [
      "assets/products/sleeping-beds/cat-spindle-wood-frame-daybed/Spindle Wood Frame Daybed - Perspective.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-tufted-beige-platform-bed",
    "name": "Tufted Beige Platform Bed",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Tufted Beige Platform Bed combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-tufted-beige-platform-bed/tufted_beige_platform_bed.webp",
    "images": [
      "assets/products/sleeping-beds/cat-tufted-beige-platform-bed/tufted_beige_platform_bed.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-walnut-single-bed-frame-alpha",
    "name": "Walnut Single Bed Frame Alpha",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Walnut Single Bed Frame Alpha combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-walnut-single-bed-frame-alpha/Walnut Single Bed Frame Alpha - Distance.webp",
    "images": [
      "assets/products/sleeping-beds/cat-walnut-single-bed-frame-alpha/Walnut Single Bed Frame Alpha - Distance.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-walnut-single-bed-with-straight-headboard",
    "name": "Walnut Single Bed With Straight Headboard",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Walnut Single Bed With Straight Headboard combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-walnut-single-bed-with-straight-headboard/Walnut Single Bed with Straight Headboard.webp",
    "images": [
      "assets/products/sleeping-beds/cat-walnut-single-bed-with-straight-headboard/Walnut Single Bed with Straight Headboard.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-walnut-storage-bed-with-bookshelf-headboard",
    "name": "Walnut Storage Bed With Bookshelf Headboard",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Walnut Storage Bed With Bookshelf Headboard combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-walnut-storage-bed-with-bookshelf-headboard/walnut_storage_bed_with_bookshelf_headboard.webp",
    "images": [
      "assets/products/sleeping-beds/cat-walnut-storage-bed-with-bookshelf-headboard/walnut_storage_bed_with_bookshelf_headboard.webp"
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
    "img": "assets/products/sleeping-beds/eternia_modern_ash/Eternia_Modern_Ash_01.webp",
    "images": [
      "assets/products/sleeping-beds/eternia_modern_ash/Eternia_Modern_Ash_01.webp"
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
    "img": "assets/products/sleeping-beds/hospitality_suite_type_02/Hospitality_Suite_Type_02_01.webp",
    "images": [
      "assets/products/sleeping-beds/hospitality_suite_type_02/Hospitality_Suite_Type_02_01.webp"
    ],
    "colors": []
  },
  {
    "id": "lmw-063",
    "name": "LMW-063",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.5,
    "img": "assets/products/sleeping-beds/lmw-066/LMW-066.webp",
    "badge": "",
    "description": "Transform your bedroom into a peaceful sanctuary with the LMW-063 bed. Built with a solid wood frame for superior stability, it features a beautifully styled headboard and clean modern lines. A refined centerpiece designed to provide a supportive foundation for a restful and comfortable night's sleep.",
    "images": [
      "assets/products/sleeping-beds/lmw-066/LMW-066.webp"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "lmw-064",
    "name": "LMW-064",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/products/sleeping-beds/lmw-067/LMW-067.webp",
    "badge": "Bestseller",
    "description": "Transform your bedroom into a peaceful sanctuary with the LMW-064 bed. Built with a solid wood frame for superior stability, it features a beautifully styled headboard and clean modern lines. A refined centerpiece designed to provide a supportive foundation for a restful and comfortable night's sleep.",
    "images": [
      "assets/products/sleeping-beds/lmw-067/LMW-067.webp"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "lmw-065",
    "name": "LMW-065",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/products/sleeping-beds/lmw-068/LMW-068.webp",
    "badge": "",
    "description": "Transform your bedroom into a peaceful sanctuary with the LMW-065 bed. Built with a solid wood frame for superior stability, it features a beautifully styled headboard and clean modern lines. A refined centerpiece designed to provide a supportive foundation for a restful and comfortable night's sleep.",
    "images": [
      "assets/products/sleeping-beds/lmw-068/LMW-068.webp"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "lmw-066",
    "name": "LMW-066",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/products/sleeping-beds/lmw-069/LMW-069.webp",
    "badge": "New",
    "description": "Transform your bedroom into a peaceful sanctuary with the LMW-066 bed. Built with a solid wood frame for superior stability, it features a beautifully styled headboard and clean modern lines. A refined centerpiece designed to provide a supportive foundation for a restful and comfortable night's sleep.",
    "images": [
      "assets/products/sleeping-beds/lmw-069/LMW-069.webp"
    ],
    "colors": [
      "Brown"
    ]
  },
  {
    "id": "lmw-067",
    "name": "LMW-067",
    "category": "sleeping-beds",
    "type": "bed",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.9,
    "img": "assets/products/sleeping-beds/lmw-070/LMW-070.webp",
    "badge": "",
    "description": "Transform your bedroom into a peaceful sanctuary with the LMW-067 bed. Built with a solid wood frame for superior stability, it features a beautifully styled headboard and clean modern lines. A refined centerpiece designed to provide a supportive foundation for a restful and comfortable night's sleep.",
    "images": [
      "assets/products/sleeping-beds/lmw-070/LMW-070.webp"
    ],
    "colors": [
      "Brown"
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
    "img": "assets/products/sleeping-beds/lmw-071/LMW-071.webp",
    "badge": "",
    "description": "Transform your bedroom into a peaceful sanctuary with the LMW-068 bed. Built with a solid wood frame for superior stability, it features a beautifully styled headboard and clean modern lines. A refined centerpiece designed to provide a supportive foundation for a restful and comfortable night's sleep.",
    "images": [
      "assets/products/sleeping-beds/lmw-071/LMW-071.webp"
    ],
    "colors": [
      "Brown"
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
    "img": "assets/products/sleeping-beds/lmw-072/LMW-072.webp",
    "badge": "",
    "description": "Transform your bedroom into a peaceful sanctuary with the LMW-069 bed. Built with a solid wood frame for superior stability, it features a beautifully styled headboard and clean modern lines. A refined centerpiece designed to provide a supportive foundation for a restful and comfortable night's sleep.",
    "images": [
      "assets/products/sleeping-beds/lmw-072/LMW-072.webp"
    ],
    "colors": [
      "Red"
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
    "img": "assets/products/sleeping-beds/lmw-073/LMW-073.webp",
    "badge": "",
    "description": "Transform your bedroom into a peaceful sanctuary with the LMW-070 bed. Built with a solid wood frame for superior stability, it features a beautifully styled headboard and clean modern lines. A refined centerpiece designed to provide a supportive foundation for a restful and comfortable night's sleep.",
    "images": [
      "assets/products/sleeping-beds/lmw-073/LMW-073.webp"
    ],
    "colors": [
      "Grey",
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
    "rating": 4.7,
    "img": "assets/products/sleeping-beds/lmw-074/LMW-074.webp",
    "badge": "",
    "description": "Transform your bedroom into a peaceful sanctuary with the LMW-071 bed. Built with a solid wood frame for superior stability, it features a beautifully styled headboard and clean modern lines. A refined centerpiece designed to provide a supportive foundation for a restful and comfortable night's sleep.",
    "images": [
      "assets/products/sleeping-beds/lmw-074/LMW-074.webp"
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
    "rating": 4.7,
    "img": "assets/products/sleeping-beds/lmw-075/LMW-075.webp",
    "badge": "",
    "description": "Transform your bedroom into a peaceful sanctuary with the LMW-072 bed. Built with a solid wood frame for superior stability, it features a beautifully styled headboard and clean modern lines. A refined centerpiece designed to provide a supportive foundation for a restful and comfortable night's sleep.",
    "images": [
      "assets/products/sleeping-beds/lmw-075/LMW-075.webp"
    ],
    "colors": [
      "Red"
    ]
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
    "img": "assets/products/sleeping-beds/nestor_bed/Nestor_Bed_01.webp",
    "images": [
      "assets/products/sleeping-beds/nestor_bed/Nestor_Bed_01.webp"
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
    "img": "assets/products/sleeping-beds/noble_campus_bed/Noble_Campus_Bed_01.webp",
    "images": [
      "assets/products/sleeping-beds/noble_campus_bed/Noble_Campus_Bed_01.webp"
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
    "img": "assets/products/sleeping-beds/rubco-cot-captain/cot_captain.webp",
    "images": [
      "assets/products/sleeping-beds/rubco-cot-captain/cot_captain.webp"
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
    "img": "assets/products/sleeping-beds/rubco-cot-colonial/cot_colonial.webp",
    "images": [
      "assets/products/sleeping-beds/rubco-cot-colonial/cot_colonial.webp"
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
    "img": "assets/products/sleeping-beds/rubco-cot-correll/cot_correll.webp",
    "images": [
      "assets/products/sleeping-beds/rubco-cot-correll/cot_correll.webp"
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
    "img": "assets/products/sleeping-beds/rubco-cot-emrald/cot_emrald.webp",
    "images": [
      "assets/products/sleeping-beds/rubco-cot-emrald/cot_emrald.webp"
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
    "img": "assets/products/sleeping-beds/rubco-dimond-cot/dimond_cot.webp",
    "images": [
      "assets/products/sleeping-beds/rubco-dimond-cot/dimond_cot.webp"
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
    "img": "assets/products/sleeping-beds/rubco-diwan-cot-one-side/diwan_cot_one_side.webp",
    "images": [
      "assets/products/sleeping-beds/rubco-diwan-cot-one-side/diwan_cot_one_side.webp"
    ],
    "listingUrl": "https://rubcobangalore.com/furniture/diwan-cot-one-side",
    "colors": [
      "Honey",
      "Teak"
    ]
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
    "description": "The Single Bed & Study Set is a complete oak-finish bedroom suite for students and single rooms, pairing a storage single bed with a hutch study desk, a two-door wardrobe and a drawer bedside unit. Clean engineered-wood construction with grey accents ties the pieces together for a coordinated, space-efficient setup.",
    "img": "assets/products/sleeping-beds/single_bed_study_set/Single_Bed_Study_Set_01.webp",
    "images": [
      "assets/products/sleeping-beds/single_bed_study_set/Single_Bed_Study_Set_01.webp"
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
    "description": "The Woodland bedroom set brings a warm natural-oak look to the room, combining a cushioned-headboard storage bed with a fluted-panel wardrobe, a dresser with mirror and a matching bedside unit. Built in durable engineered wood, the coordinated suite balances soft upholstery with ribbed timber detailing for a modern, cohesive bedroom.",
    "img": "assets/products/sleeping-beds/woodland/Woodland_01.webp",
    "images": [
      "assets/products/sleeping-beds/woodland/Woodland_01.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-aether-three-seater-sofa",
    "name": "Aether Three Seater Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Aether Three Seater Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-aether-three-seater-sofa/Aether Three Seater Sofa.webp",
    "images": [
      "assets/products/sofas/cat-aether-three-seater-sofa/Aether Three Seater Sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-aether-two-seater-loveseat-sofa",
    "name": "Aether Two Seater Loveseat Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Aether Two Seater Loveseat Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-aether-two-seater-loveseat-sofa/Aether Two Seater Loveseat Sofa.webp",
    "images": [
      "assets/products/sofas/cat-aether-two-seater-loveseat-sofa/Aether Two Seater Loveseat Sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-alaska-loveseat-sofa",
    "name": "Alaska Loveseat Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Alaska Loveseat Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-alaska-loveseat-sofa/Alaska Loveseat Sofa - Two Seater.webp",
    "images": [
      "assets/products/sofas/cat-alaska-loveseat-sofa/Alaska Loveseat Sofa - Two Seater.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-arcus-boucle-loveseat-sofa",
    "name": "Arcus Boucle Loveseat Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Arcus Boucle Loveseat Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-arcus-boucle-loveseat-sofa/Arcus Boucle Loveseat Sofa - Two Seater.webp",
    "images": [
      "assets/products/sofas/cat-arcus-boucle-loveseat-sofa/Arcus Boucle Loveseat Sofa - Two Seater.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-aspen-full-sofa",
    "name": "Aspen Full Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Aspen Full Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-aspen-full-sofa/Aspen Full Sofa - Three Seater.webp",
    "images": [
      "assets/products/sofas/cat-aspen-full-sofa/Aspen Full Sofa - Three Seater.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-aspen-loveseat-sofa",
    "name": "Aspen Loveseat Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Aspen Loveseat Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-aspen-loveseat-sofa/Aspen Loveseat Sofa - Two Seater.webp",
    "images": [
      "assets/products/sofas/cat-aspen-loveseat-sofa/Aspen Loveseat Sofa - Two Seater.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-bamboo-leather-full-sofa",
    "name": "Bamboo Leather Full Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Bamboo Leather Full Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-bamboo-leather-full-sofa/Bamboo Leather Full Sofa - Three Seater.webp",
    "images": [
      "assets/products/sofas/cat-bamboo-leather-full-sofa/Bamboo Leather Full Sofa - Three Seater.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-bamboo-leather-loveseat",
    "name": "Bamboo Leather Loveseat",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Bamboo Leather Loveseat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-bamboo-leather-loveseat/Bamboo Leather Loveseat - Two Seater.webp",
    "images": [
      "assets/products/sofas/cat-bamboo-leather-loveseat/Bamboo Leather Loveseat - Two Seater.webp"
    ],
    "colors": []
  },
  {
    "id": "white-lattice-back-brass-bar-stool",
    "name": "White Lattice-Back Brass Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Moulded Polypropylene / Antique Brass Steel",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "A counter-height bar stool with a moulded white polypropylene shell, its curved back pierced in a lattice weave, seated on four tapered antique-brass steel legs with a square footrest. Wipe-clean and stackable-friendly for cafés, bars and kitchen islands.",
    "img": "assets/products/cafe-bar-stools/white-lattice-back-brass-bar-stool/White Lattice-Back Brass Bar Stool - Front View.webp",
    "images": [
      "assets/products/cafe-bar-stools/white-lattice-back-brass-bar-stool/White Lattice-Back Brass Bar Stool - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-beige-chenille-plush-sofa",
    "name": "Beige Chenille Plush Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Beige Chenille Plush Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-beige-chenille-plush-sofa/beige_chenille_plush_sofa.webp",
    "images": [
      "assets/products/sofas/cat-beige-chenille-plush-sofa/beige_chenille_plush_sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-beige-chevronpillow-loveseat",
    "name": "Beige Chevronpillow Loveseat",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Beige Chevronpillow Loveseat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-beige-chevronpillow-loveseat/beige_chevronpillow_loveseat.webp",
    "images": [
      "assets/products/sofas/cat-beige-chevronpillow-loveseat/beige_chevronpillow_loveseat.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-beige-living-room-sofa-set",
    "name": "Beige Living Room Sofa Set",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Beige Living Room Sofa Set combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-beige-living-room-sofa-set/beige_living_room_sofa_set.webp",
    "images": [
      "assets/products/sofas/cat-beige-living-room-sofa-set/beige_living_room_sofa_set.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-beige-modern-3piece-living-suite",
    "name": "Beige Modern Living Suite",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Beige Modern Living Suite combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-beige-modern-3piece-living-suite/beige_modern_3piece_living_suite.webp",
    "images": [
      "assets/products/sofas/cat-beige-modern-3piece-living-suite/beige_modern_3piece_living_suite.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-beige-modern-living-room-suite",
    "name": "Beige Modern Living Room Suite",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Beige Modern Living Room Suite combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-beige-modern-living-room-suite/beige_modern_living_room_suite.webp",
    "images": [
      "assets/products/sofas/cat-beige-modern-living-room-suite/beige_modern_living_room_suite.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-beige-plush-classic-living-room-suite",
    "name": "Beige Plush Classic Living Room Suite",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Beige Plush Classic Living Room Suite combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-beige-plush-classic-living-room-suite/beige_plush_classic_living_room_suite.webp",
    "images": [
      "assets/products/sofas/cat-beige-plush-classic-living-room-suite/beige_plush_classic_living_room_suite.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-breeze-linen-full-sofa",
    "name": "Breeze Linen Full Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Breeze Linen Full Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-breeze-linen-full-sofa/Breeze Linen Full Sofa - Three Seater.webp",
    "images": [
      "assets/products/sofas/cat-breeze-linen-full-sofa/Breeze Linen Full Sofa - Three Seater.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-breeze-linen-loveseat",
    "name": "Breeze Linen Loveseat",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Breeze Linen Loveseat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-breeze-linen-loveseat/Breeze Linen Loveseat - Two Seater.webp",
    "images": [
      "assets/products/sofas/cat-breeze-linen-loveseat/Breeze Linen Loveseat - Two Seater.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-brown-fabric-living-room-suite",
    "name": "Brown Fabric Living Room Suite",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Brown Fabric Living Room Suite combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-brown-fabric-living-room-suite/brown_fabric_living_room_suite.webp",
    "images": [
      "assets/products/sofas/cat-brown-fabric-living-room-suite/brown_fabric_living_room_suite.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-brume-sage-green-full-sofa",
    "name": "Brume Sage Green Full Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Brume Sage Green Full Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-brume-sage-green-full-sofa/Brume Sage Green Full Sofa - Three Seater.webp",
    "images": [
      "assets/products/sofas/cat-brume-sage-green-full-sofa/Brume Sage Green Full Sofa - Three Seater.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-brume-sage-green-loveseat",
    "name": "Brume Sage Green Loveseat",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Brume Sage Green Loveseat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-brume-sage-green-loveseat/Brume Sage Green Loveseat - Two Seater.webp",
    "images": [
      "assets/products/sofas/cat-brume-sage-green-loveseat/Brume Sage Green Loveseat - Two Seater.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-calypso-dusty-pink-velvet-loveseat",
    "name": "Calypso Dusty Pink Velvet Loveseat",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Calypso Dusty Pink Velvet Loveseat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-calypso-dusty-pink-velvet-loveseat/Calypso Dusty Pink Velvet Loveseat - Two Seater.webp",
    "images": [
      "assets/products/sofas/cat-calypso-dusty-pink-velvet-loveseat/Calypso Dusty Pink Velvet Loveseat - Two Seater.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-calypso-velvet-full-sofa",
    "name": "Calypso Velvet Full Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Calypso Velvet Full Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-calypso-velvet-full-sofa/Calypso Velvet Full Sofa - Three Seater.webp",
    "images": [
      "assets/products/sofas/cat-calypso-velvet-full-sofa/Calypso Velvet Full Sofa - Three Seater.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-charcoal-scandi-slim-sofa",
    "name": "Charcoal Scandi Slim Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Charcoal Scandi Slim Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-charcoal-scandi-slim-sofa/charcoal_scandi_slim_sofa.webp",
    "images": [
      "assets/products/sofas/cat-charcoal-scandi-slim-sofa/charcoal_scandi_slim_sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-charcoal-woven-loveseat",
    "name": "Charcoal Woven Loveseat",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Charcoal Woven Loveseat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-charcoal-woven-loveseat/charcoal_woven_loveseat.webp",
    "images": [
      "assets/products/sofas/cat-charcoal-woven-loveseat/charcoal_woven_loveseat.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cirrus-textured-full-sofa",
    "name": "Cirrus Textured Full Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cirrus Textured Full Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-cirrus-textured-full-sofa/Cirrus Textured Full Sofa - Three Seater.webp",
    "images": [
      "assets/products/sofas/cat-cirrus-textured-full-sofa/Cirrus Textured Full Sofa - Three Seater.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cognac-leather-sofa-pair",
    "name": "Cognac Leather Sofa Pair",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cognac Leather Sofa Pair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-cognac-leather-sofa-pair/cognac_leather_sofa_pair.webp",
    "images": [
      "assets/products/sofas/cat-cognac-leather-sofa-pair/cognac_leather_sofa_pair.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cognac-leather-tufted-4-seater-sofa",
    "name": "Cognac Leather Tufted 4 Seater Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cognac Leather Tufted 4 Seater Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-cognac-leather-tufted-4-seater-sofa/Cognac Leather Tufted 4-Seater Sofa.webp",
    "images": [
      "assets/products/sofas/cat-cognac-leather-tufted-4-seater-sofa/Cognac Leather Tufted 4-Seater Sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-copper-velvet-piped-3seater-sofa",
    "name": "Copper Velvet Piped 3 Seater Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Copper Velvet Piped 3 Seater Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-copper-velvet-piped-3seater-sofa/copper_velvet_piped_3seater_sofa.webp",
    "images": [
      "assets/products/sofas/cat-copper-velvet-piped-3seater-sofa/copper_velvet_piped_3seater_sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-corsica-cream-velvet-full-sofa",
    "name": "Corsica Cream Velvet Full Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Corsica Cream Velvet Full Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-corsica-cream-velvet-full-sofa/Corsica Cream Velvet Full Sofa - Three Seater.webp",
    "images": [
      "assets/products/sofas/cat-corsica-cream-velvet-full-sofa/Corsica Cream Velvet Full Sofa - Three Seater.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-corsica-cream-velvet-loveseat",
    "name": "Corsica Cream Velvet Loveseat",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Corsica Cream Velvet Loveseat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-corsica-cream-velvet-loveseat/Corsica Cream Velvet Loveseat - Two Seater.webp",
    "images": [
      "assets/products/sofas/cat-corsica-cream-velvet-loveseat/Corsica Cream Velvet Loveseat - Two Seater.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-beige-leather-loveseat-sofa",
    "name": "Cream Beige Leather Loveseat Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Beige Leather Loveseat Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-cream-beige-leather-loveseat-sofa/Cream Beige Leather Loveseat Sofa.webp",
    "images": [
      "assets/products/sofas/cat-cream-beige-leather-loveseat-sofa/Cream Beige Leather Loveseat Sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-boucle-plush-3seater-sofa",
    "name": "Cream Boucle Plush 3 Seater Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Boucle Plush 3 Seater Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-cream-boucle-plush-3seater-sofa/cream_boucle_plush_3seater_sofa.webp",
    "images": [
      "assets/products/sofas/cat-cream-boucle-plush-3seater-sofa/cream_boucle_plush_3seater_sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-buttontufted-3seater-sofa",
    "name": "Cream Buttontufted 3 Seater Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Buttontufted 3 Seater Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-cream-buttontufted-3seater-sofa/cream_buttontufted_3seater_sofa.webp",
    "images": [
      "assets/products/sofas/cat-cream-buttontufted-3seater-sofa/cream_buttontufted_3seater_sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-full-living-room-suite",
    "name": "Cream Full Living Room Suite",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Full Living Room Suite combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-cream-full-living-room-suite/cream_full_living_room_suite.webp",
    "images": [
      "assets/products/sofas/cat-cream-full-living-room-suite/cream_full_living_room_suite.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-leather-sofa-with-red-accent-pillows",
    "name": "Cream Leather Sofa With Red Accent Pillows",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Leather Sofa With Red Accent Pillows combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-cream-leather-sofa-with-red-accent-pillows/Cream Leather Sofa with Red Accent Pillows.webp",
    "images": [
      "assets/products/sofas/cat-cream-leather-sofa-with-red-accent-pillows/Cream Leather Sofa with Red Accent Pillows.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-linen-chevronpillow-loveseat",
    "name": "Cream Linen Chevronpillow Loveseat",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Linen Chevronpillow Loveseat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-cream-linen-chevronpillow-loveseat/cream_linen_chevronpillow_loveseat.webp",
    "images": [
      "assets/products/sofas/cat-cream-linen-chevronpillow-loveseat/cream_linen_chevronpillow_loveseat.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-linen-tuxedo-sofa-with-gold-legs",
    "name": "Cream Linen Tuxedo Sofa With Gold Legs",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Linen Tuxedo Sofa With Gold Legs combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-cream-linen-tuxedo-sofa-with-gold-legs/cream_linen_tuxedo_sofa_with_gold_legs.webp",
    "images": [
      "assets/products/sofas/cat-cream-linen-tuxedo-sofa-with-gold-legs/cream_linen_tuxedo_sofa_with_gold_legs.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-linen-velvetcushion-loveseat",
    "name": "Cream Linen Velvetcushion Loveseat",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Linen Velvetcushion Loveseat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-cream-linen-velvetcushion-loveseat/cream_linen_velvetcushion_loveseat.webp",
    "images": [
      "assets/products/sofas/cat-cream-linen-velvetcushion-loveseat/cream_linen_velvetcushion_loveseat.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-plush-deepseat-sofa",
    "name": "Cream Plush Deepseat Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Plush Deepseat Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-cream-plush-deepseat-sofa/cream_plush_deepseat_sofa.webp",
    "images": [
      "assets/products/sofas/cat-cream-plush-deepseat-sofa/cream_plush_deepseat_sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-textured-3seater-sofa",
    "name": "Cream Textured 3 Seater Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Textured 3 Seater Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-cream-textured-3seater-sofa/cream_textured_3seater_sofa.webp",
    "images": [
      "assets/products/sofas/cat-cream-textured-3seater-sofa/cream_textured_3seater_sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-textured-modular-armless-sofa",
    "name": "Cream Textured Modular Armless Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Textured Modular Armless Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-cream-textured-modular-armless-sofa/cream_textured_modular_armless_sofa.webp",
    "images": [
      "assets/products/sofas/cat-cream-textured-modular-armless-sofa/cream_textured_modular_armless_sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-velvet-flared-loveseat",
    "name": "Cream Velvet Flared Loveseat",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Velvet Flared Loveseat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-cream-velvet-flared-loveseat/cream_velvet_flared_loveseat.webp",
    "images": [
      "assets/products/sofas/cat-cream-velvet-flared-loveseat/cream_velvet_flared_loveseat.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-velvety-plush-sofa",
    "name": "Cream Velvety Plush Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Velvety Plush Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-cream-velvety-plush-sofa/cream_velvety_plush_sofa.webp",
    "images": [
      "assets/products/sofas/cat-cream-velvety-plush-sofa/cream_velvety_plush_sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-blue-fabric-sofa-with-wooden-base",
    "name": "Dark Blue Fabric Sofa With Wooden Base",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Blue Fabric Sofa With Wooden Base combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-dark-blue-fabric-sofa-with-wooden-base/Dark Blue Fabric Sofa with Wooden Base.webp",
    "images": [
      "assets/products/sofas/cat-dark-blue-fabric-sofa-with-wooden-base/Dark Blue Fabric Sofa with Wooden Base.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-charcoal-grey-fabric-sofa",
    "name": "Dark Charcoal Grey Fabric Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Charcoal Grey Fabric Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-dark-charcoal-grey-fabric-sofa/Dark Charcoal Grey Fabric Sofa.webp",
    "images": [
      "assets/products/sofas/cat-dark-charcoal-grey-fabric-sofa/Dark Charcoal Grey Fabric Sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-chocolate-brown-fabric-3-seater-sofa",
    "name": "Dark Chocolate Brown Fabric 3 Seater Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Chocolate Brown Fabric 3 Seater Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-dark-chocolate-brown-fabric-3-seater-sofa/Dark Chocolate Brown Fabric 3-Seater Sofa.webp",
    "images": [
      "assets/products/sofas/cat-dark-chocolate-brown-fabric-3-seater-sofa/Dark Chocolate Brown Fabric 3-Seater Sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-grey-fabric-modular-sofa-collection",
    "name": "Dark Grey Fabric Modular Sofa Collection",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Grey Fabric Modular Sofa Collection combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-dark-grey-fabric-modular-sofa-collection/Dark Grey Fabric Modular Sofa Collection.webp",
    "images": [
      "assets/products/sofas/cat-dark-grey-fabric-modular-sofa-collection/Dark Grey Fabric Modular Sofa Collection.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-grey-leather-sofa-with-copper-accents",
    "name": "Dark Grey Leather Sofa With Copper Accents",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Grey Leather Sofa With Copper Accents combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-dark-grey-leather-sofa-with-copper-accents/Dark Grey Leather Sofa with Copper Accents.webp",
    "images": [
      "assets/products/sofas/cat-dark-grey-leather-sofa-with-copper-accents/Dark Grey Leather Sofa with Copper Accents.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-teal-velvet-sofa",
    "name": "Dark Teal Velvet Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Teal Velvet Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-dark-teal-velvet-sofa/Dark Teal Velvet Sofa.webp",
    "images": [
      "assets/products/sofas/cat-dark-teal-velvet-sofa/Dark Teal Velvet Sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-wood-frame-loveseat-with-grey-cushions",
    "name": "Dark Wood Frame Loveseat With Grey Cushions",
    "category": "wooden-couches",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Wood Frame Loveseat With Grey Cushions combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wooden-couches/cat-dark-wood-frame-loveseat-with-grey-cushions/Dark Wood Frame Loveseat with Grey Cushions.webp",
    "images": [
      "assets/products/wooden-couches/cat-dark-wood-frame-loveseat-with-grey-cushions/Dark Wood Frame Loveseat with Grey Cushions.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-wood-frame-sofa-with-cream-cushions",
    "name": "Dark Wood Frame Sofa With Cream Cushions",
    "category": "wooden-couches",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Wood Frame Sofa With Cream Cushions combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wooden-couches/cat-dark-wood-frame-sofa-with-cream-cushions/Dark Wood Frame Sofa with Cream Cushions.webp",
    "images": [
      "assets/products/wooden-couches/cat-dark-wood-frame-sofa-with-cream-cushions/Dark Wood Frame Sofa with Cream Cushions.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-deep-purple-velvet-curved-sofa",
    "name": "Deep Purple Velvet Curved Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Deep Purple Velvet Curved Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-deep-purple-velvet-curved-sofa/Deep Purple Velvet Curved Sofa.webp",
    "images": [
      "assets/products/sofas/cat-deep-purple-velvet-curved-sofa/Deep Purple Velvet Curved Sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-drift-textured-full-sofa",
    "name": "Drift Textured Full Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Drift Textured Full Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-drift-textured-full-sofa/Drift Textured Full Sofa - Three Seater.webp",
    "images": [
      "assets/products/sofas/cat-drift-textured-full-sofa/Drift Textured Full Sofa - Three Seater.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-drift-textured-loveseat",
    "name": "Drift Textured Loveseat",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Drift Textured Loveseat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-drift-textured-loveseat/Drift Textured Loveseat - Two Seater.webp",
    "images": [
      "assets/products/sofas/cat-drift-textured-loveseat/Drift Textured Loveseat - Two Seater.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-duckegg-blue-soft-fabric-sofa",
    "name": "Duckegg Blue Soft Fabric Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Duckegg Blue Soft Fabric Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-duckegg-blue-soft-fabric-sofa/duckegg_blue_soft_fabric_sofa.webp",
    "images": [
      "assets/products/sofas/cat-duckegg-blue-soft-fabric-sofa/duckegg_blue_soft_fabric_sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dusk-boucle-full-sofa",
    "name": "Dusk Boucle Full Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dusk Boucle Full Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-dusk-boucle-full-sofa/Dusk Boucle Full Sofa - Three Seater.webp",
    "images": [
      "assets/products/sofas/cat-dusk-boucle-full-sofa/Dusk Boucle Full Sofa - Three Seater.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dusk-boucle-loveseat",
    "name": "Dusk Boucle Loveseat",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dusk Boucle Loveseat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-dusk-boucle-loveseat/Dusk Boucle Loveseat - Two Seater.webp",
    "images": [
      "assets/products/sofas/cat-dusk-boucle-loveseat/Dusk Boucle Loveseat - Two Seater.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-echo-modern-velvet-living-room-suite",
    "name": "Echo Modern Velvet Living Room Suite",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Echo Modern Velvet Living Room Suite combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-echo-modern-velvet-living-room-suite/Echo Living Room Suite - Angle Perspective.webp",
    "images": [
      "assets/products/sofas/cat-echo-modern-velvet-living-room-suite/Echo Living Room Suite - Angle Perspective.webp",
      "assets/products/sofas/cat-echo-modern-velvet-living-room-suite/Echo Living Room Suite - Front View.webp",
      "assets/products/sofas/cat-echo-modern-velvet-living-room-suite/Echo Living Room Suite - Side View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-ember-boucle-low-profile-sofa",
    "name": "Ember Boucle Low Profile Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Ember Boucle Low Profile Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-ember-boucle-low-profile-sofa/Ember Boucle Sofa - Angle Perspective.webp",
    "images": [
      "assets/products/sofas/cat-ember-boucle-low-profile-sofa/Ember Boucle Sofa - Angle Perspective.webp",
      "assets/products/sofas/cat-ember-boucle-low-profile-sofa/Ember Boucle Sofa - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-estillo-executive-suite",
    "name": "Estillo Executive Suite",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Estillo Executive Suite combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-estillo-executive-suite/Estillo Executive Suite - Angle Perspective.webp",
    "images": [
      "assets/products/sofas/cat-estillo-executive-suite/Estillo Executive Suite - Angle Perspective.webp",
      "assets/products/sofas/cat-estillo-executive-suite/Estillo Executive Suite - Context View.webp",
      "assets/products/sofas/cat-estillo-executive-suite/Estillo Executive Suite - Corner Detail.webp",
      "assets/products/sofas/cat-estillo-executive-suite/Estillo Executive Suite - Front View.webp",
      "assets/products/sofas/cat-estillo-executive-suite/Estillo Executive Suite - High Angle View.webp",
      "assets/products/sofas/cat-estillo-executive-suite/Estillo Executive Suite - Side View.webp",
      "assets/products/sofas/cat-estillo-executive-suite/Estillo Executive Suite - Studio Showcase.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-golden-yellow-fabric-loveseat",
    "name": "Golden Yellow Fabric Loveseat",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Golden Yellow Fabric Loveseat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-golden-yellow-fabric-loveseat/golden_yellow_fabric_loveseat.webp",
    "images": [
      "assets/products/sofas/cat-golden-yellow-fabric-loveseat/golden_yellow_fabric_loveseat.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-grey-fabric-loveseat-sofa",
    "name": "Grey Fabric Loveseat Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Grey Fabric Loveseat Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-grey-fabric-loveseat-sofa/Grey Fabric Loveseat Sofa - Front View.webp",
    "images": [
      "assets/products/sofas/cat-grey-fabric-loveseat-sofa/Grey Fabric Loveseat Sofa - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-grey-leather-sofa-set",
    "name": "Grey Leather Sofa Set",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Grey Leather Sofa Set combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-grey-leather-sofa-set/Grey Leather Sofa Set.webp",
    "images": [
      "assets/products/sofas/cat-grey-leather-sofa-set/Grey Leather Sofa Set.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-heather-gray-loveseat",
    "name": "Heather Gray Loveseat",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Heather Gray Loveseat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-heather-gray-loveseat/heather_gray_loveseat.webp",
    "images": [
      "assets/products/sofas/cat-heather-gray-loveseat/heather_gray_loveseat.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-heather-gray-straightline-sofa",
    "name": "Heather Gray Straightline Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Heather Gray Straightline Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-heather-gray-straightline-sofa/heather_gray_straightline_sofa.webp",
    "images": [
      "assets/products/sofas/cat-heather-gray-straightline-sofa/heather_gray_straightline_sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-honey-yellow-tropicalpillow-sofa",
    "name": "Honey Yellow Tropicalpillow Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Honey Yellow Tropicalpillow Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-honey-yellow-tropicalpillow-sofa/honey_yellow_tropicalpillow_sofa.webp",
    "images": [
      "assets/products/sofas/cat-honey-yellow-tropicalpillow-sofa/honey_yellow_tropicalpillow_sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-ice-blue-soft-fabric-loveseat",
    "name": "Ice Blue Soft Fabric Loveseat",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Ice Blue Soft Fabric Loveseat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-ice-blue-soft-fabric-loveseat/ice_blue_soft_fabric_loveseat.webp",
    "images": [
      "assets/products/sofas/cat-ice-blue-soft-fabric-loveseat/ice_blue_soft_fabric_loveseat.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-japandi-teak-frame-3seater-sofa",
    "name": "Japandi Teak Frame 3 Seater Sofa",
    "category": "wooden-couches",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Japandi Teak Frame 3 Seater Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wooden-couches/cat-japandi-teak-frame-3seater-sofa/japandi_teak_frame_3seater_sofa.webp",
    "images": [
      "assets/products/wooden-couches/cat-japandi-teak-frame-3seater-sofa/japandi_teak_frame_3seater_sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-light-beige-paisleypillow-loveseat",
    "name": "Light Beige Paisleypillow Loveseat",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Light Beige Paisleypillow Loveseat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-light-beige-paisleypillow-loveseat/light_beige_paisleypillow_loveseat.webp",
    "images": [
      "assets/products/sofas/cat-light-beige-paisleypillow-loveseat/light_beige_paisleypillow_loveseat.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-light-gray-chenille-loveseat",
    "name": "Light Gray Chenille Loveseat",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Light Gray Chenille Loveseat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-light-gray-chenille-loveseat/light_gray_chenille_loveseat.webp",
    "images": [
      "assets/products/sofas/cat-light-gray-chenille-loveseat/light_gray_chenille_loveseat.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-light-gray-modern-3seater-sofa",
    "name": "Light Gray Modern 3 Seater Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Light Gray Modern 3 Seater Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-light-gray-modern-3seater-sofa/light_gray_modern_3seater_sofa.webp",
    "images": [
      "assets/products/sofas/cat-light-gray-modern-3seater-sofa/light_gray_modern_3seater_sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-light-gray-modern-loveseat",
    "name": "Light Gray Modern Loveseat",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Light Gray Modern Loveseat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-light-gray-modern-loveseat/light_gray_modern_loveseat.webp",
    "images": [
      "assets/products/sofas/cat-light-gray-modern-loveseat/light_gray_modern_loveseat.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-light-wood-frame-sofa-with-grey-cushions",
    "name": "Light Wood Frame Sofa With Grey Cushions",
    "category": "wooden-couches",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Light Wood Frame Sofa With Grey Cushions combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wooden-couches/cat-light-wood-frame-sofa-with-grey-cushions/Light Wood Frame Sofa with Grey Cushions.webp",
    "images": [
      "assets/products/wooden-couches/cat-light-wood-frame-sofa-with-grey-cushions/Light Wood Frame Sofa with Grey Cushions.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-mid-century-navy-velvet-sofa",
    "name": "Mid Century Navy Velvet Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Mid Century Navy Velvet Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-mid-century-navy-velvet-sofa/Mid Century Navy Velvet Sofa.webp",
    "images": [
      "assets/products/sofas/cat-mid-century-navy-velvet-sofa/Mid Century Navy Velvet Sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-mid-century-teak-living-room-suite-furniture-set",
    "name": "Mid Century Teak Living Room Suite Furniture Set",
    "category": "wooden-couches",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Mid Century Teak Living Room Suite Furniture Set combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wooden-couches/cat-mid-century-teak-living-room-suite-furniture-set/Mid-Century Teak Living Room Suite Furniture Set.webp",
    "images": [
      "assets/products/wooden-couches/cat-mid-century-teak-living-room-suite-furniture-set/Mid-Century Teak Living Room Suite Furniture Set.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-mid-century-teak-living-room-suite-with-tan-cushions",
    "name": "Mid Century Teak Living Room Suite With Tan Cushions",
    "category": "wooden-couches",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Mid Century Teak Living Room Suite With Tan Cushions combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wooden-couches/cat-mid-century-teak-living-room-suite-with-tan-cushions/Mid-Century Teak Living Room Suite with Tan Cushions.webp",
    "images": [
      "assets/products/wooden-couches/cat-mid-century-teak-living-room-suite-with-tan-cushions/Mid-Century Teak Living Room Suite with Tan Cushions.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-mid-century-teak-sofa-collection-with-blue-upholstery",
    "name": "Mid Century Teak Sofa Collection With Blue Upholstery",
    "category": "wooden-couches",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Mid Century Teak Sofa Collection With Blue Upholstery combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wooden-couches/cat-mid-century-teak-sofa-collection-with-blue-upholstery/Mid-Century Teak Sofa Collection with Blue Upholstery.webp",
    "images": [
      "assets/products/wooden-couches/cat-mid-century-teak-sofa-collection-with-blue-upholstery/Mid-Century Teak Sofa Collection with Blue Upholstery.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-mid-century-teak-sofa-with-olive-green-cushions",
    "name": "Mid Century Teak Sofa With Olive Green Cushions",
    "category": "wooden-couches",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Mid Century Teak Sofa With Olive Green Cushions combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wooden-couches/cat-mid-century-teak-sofa-with-olive-green-cushions/Mid-Century Teak Sofa with Olive Green Cushions.webp",
    "images": [
      "assets/products/wooden-couches/cat-mid-century-teak-sofa-with-olive-green-cushions/Mid-Century Teak Sofa with Olive Green Cushions.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-midgray-fabric-full-living-suite",
    "name": "Midgray Fabric Full Living Suite",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Midgray Fabric Full Living Suite combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-midgray-fabric-full-living-suite/midgray_fabric_full_living_suite.webp",
    "images": [
      "assets/products/sofas/cat-midgray-fabric-full-living-suite/midgray_fabric_full_living_suite.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-midgray-woven-fabric-3seater-sofa",
    "name": "Midgray Woven Fabric 3 Seater Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Midgray Woven Fabric 3 Seater Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-midgray-woven-fabric-3seater-sofa/midgray_woven_fabric_3seater_sofa.webp",
    "images": [
      "assets/products/sofas/cat-midgray-woven-fabric-3seater-sofa/midgray_woven_fabric_3seater_sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-midgray-woven-fabric-sofa",
    "name": "Midgray Woven Fabric Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Midgray Woven Fabric Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-midgray-woven-fabric-sofa/midgray_woven_fabric_sofa.webp",
    "images": [
      "assets/products/sofas/cat-midgray-woven-fabric-sofa/midgray_woven_fabric_sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-modern-grey-leather-sofa-with-blue-pillows",
    "name": "Modern Grey Leather Sofa With Blue Pillows",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Modern Grey Leather Sofa With Blue Pillows combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-modern-grey-leather-sofa-with-blue-pillows/Modern Grey Leather Sofa with Blue Pillows.webp",
    "images": [
      "assets/products/sofas/cat-modern-grey-leather-sofa-with-blue-pillows/Modern Grey Leather Sofa with Blue Pillows.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-modern-white-fabric-sofa",
    "name": "Modern White Fabric Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Modern White Fabric Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-modern-white-fabric-sofa/Modern White Fabric Sofa - Front View.webp",
    "images": [
      "assets/products/sofas/cat-modern-white-fabric-sofa/Modern White Fabric Sofa - Front View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-modular-mauve-sofa-suite-with-screen-panels",
    "name": "Modular Mauve Sofa Suite With Screen Panels",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Modular Mauve Sofa Suite With Screen Panels combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-modular-mauve-sofa-suite-with-screen-panels/Modular Mauve Sofa Suite with Screen Panels.webp",
    "images": [
      "assets/products/sofas/cat-modular-mauve-sofa-suite-with-screen-panels/Modular Mauve Sofa Suite with Screen Panels.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-navy-blue-leather-lounge-suite",
    "name": "Navy Blue Leather Lounge Suite",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Navy Blue Leather Lounge Suite combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-navy-blue-leather-lounge-suite/navy_blue_leather_lounge_suite.webp",
    "images": [
      "assets/products/sofas/cat-navy-blue-leather-lounge-suite/navy_blue_leather_lounge_suite.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-oatmeal-gray-twotone-sofa",
    "name": "Oatmeal Gray Twotone Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Oatmeal Gray Twotone Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-oatmeal-gray-twotone-sofa/oatmeal_gray_twotone_sofa.webp",
    "images": [
      "assets/products/sofas/cat-oatmeal-gray-twotone-sofa/oatmeal_gray_twotone_sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-oatmeal-linen-3seater-sofa",
    "name": "Oatmeal Linen 3 Seater Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Oatmeal Linen 3 Seater Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-oatmeal-linen-3seater-sofa/oatmeal_linen_3seater_sofa.webp",
    "images": [
      "assets/products/sofas/cat-oatmeal-linen-3seater-sofa/oatmeal_linen_3seater_sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-oatmeal-textured-loveseat",
    "name": "Oatmeal Textured Loveseat",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Oatmeal Textured Loveseat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-oatmeal-textured-loveseat/oatmeal_textured_loveseat.webp",
    "images": [
      "assets/products/sofas/cat-oatmeal-textured-loveseat/oatmeal_textured_loveseat.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-ocean-blue-velvet-modern-sofa",
    "name": "Ocean Blue Velvet Modern Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Ocean Blue Velvet Modern Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-ocean-blue-velvet-modern-sofa/ocean_blue_velvet_modern_sofa.webp",
    "images": [
      "assets/products/sofas/cat-ocean-blue-velvet-modern-sofa/ocean_blue_velvet_modern_sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-offwhite-plush-3seater-sofa",
    "name": "Offwhite Plush 3 Seater Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Offwhite Plush 3 Seater Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-offwhite-plush-3seater-sofa/offwhite_plush_3seater_sofa.webp",
    "images": [
      "assets/products/sofas/cat-offwhite-plush-3seater-sofa/offwhite_plush_3seater_sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-offwhite-plush-deep-modular-sofa",
    "name": "Offwhite Plush Deep Modular Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Offwhite Plush Deep Modular Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-offwhite-plush-deep-modular-sofa/offwhite_plush_deep_modular_sofa.webp",
    "images": [
      "assets/products/sofas/cat-offwhite-plush-deep-modular-sofa/offwhite_plush_deep_modular_sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-olive-green-fabric-3-seater-sofa",
    "name": "Olive Green Fabric 3 Seater Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Olive Green Fabric 3 Seater Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-olive-green-fabric-3-seater-sofa/Olive Green Fabric 3-Seater Sofa.webp",
    "images": [
      "assets/products/sofas/cat-olive-green-fabric-3-seater-sofa/Olive Green Fabric 3-Seater Sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-olive-green-modern-sofa",
    "name": "Olive Green Modern Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Olive Green Modern Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-olive-green-modern-sofa/olive_green_modern_sofa.webp",
    "images": [
      "assets/products/sofas/cat-olive-green-modern-sofa/olive_green_modern_sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-orange-velvet-square-arm-tub-sofa",
    "name": "Orange Velvet Square Arm Tub Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Orange Velvet Square Arm Tub Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-orange-velvet-square-arm-tub-sofa/Orange Velvet Square Arm Tub Sofa.webp",
    "images": [
      "assets/products/sofas/cat-orange-velvet-square-arm-tub-sofa/Orange Velvet Square Arm Tub Sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-organic-pebble-modular-lounge-sofa",
    "name": "Organic Pebble Modular Lounge Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Organic Pebble Modular Lounge Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-organic-pebble-modular-lounge-sofa/organic_pebble_modular_lounge_sofa.webp",
    "images": [
      "assets/products/sofas/cat-organic-pebble-modular-lounge-sofa/organic_pebble_modular_lounge_sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-sage-green-fabric-loveseat",
    "name": "Sage Green Fabric Loveseat",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Sage Green Fabric Loveseat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-sage-green-fabric-loveseat/sage_green_fabric_loveseat.webp",
    "images": [
      "assets/products/sofas/cat-sage-green-fabric-loveseat/sage_green_fabric_loveseat.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-sage-olive-fabric-loveseat",
    "name": "Sage Olive Fabric Loveseat",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Sage Olive Fabric Loveseat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-sage-olive-fabric-loveseat/sage_olive_fabric_loveseat.webp",
    "images": [
      "assets/products/sofas/cat-sage-olive-fabric-loveseat/sage_olive_fabric_loveseat.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-scandi-twotone-beige-brown-sofa",
    "name": "Scandi Twotone Beige Brown Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Scandi Twotone Beige Brown Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-scandi-twotone-beige-brown-sofa/scandi_twotone_beige_brown_sofa.webp",
    "images": [
      "assets/products/sofas/cat-scandi-twotone-beige-brown-sofa/scandi_twotone_beige_brown_sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-sculptural-wood-frame-sofa-with-tan-upholstery",
    "name": "Sculptural Wood Frame Sofa With Tan Upholstery",
    "category": "wooden-couches",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Sculptural Wood Frame Sofa With Tan Upholstery combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wooden-couches/cat-sculptural-wood-frame-sofa-with-tan-upholstery/Sculptural Wood Frame Sofa with Tan Upholstery.webp",
    "images": [
      "assets/products/wooden-couches/cat-sculptural-wood-frame-sofa-with-tan-upholstery/Sculptural Wood Frame Sofa with Tan Upholstery.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-soft-gray-velvet-sofa",
    "name": "Soft Gray Velvet Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Soft Gray Velvet Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-soft-gray-velvet-sofa/soft_gray_velvet_sofa.webp",
    "images": [
      "assets/products/sofas/cat-soft-gray-velvet-sofa/soft_gray_velvet_sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-soft-oatmeal-stripedpillow-sofa",
    "name": "Soft Oatmeal Stripedpillow Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Soft Oatmeal Stripedpillow Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-soft-oatmeal-stripedpillow-sofa/soft_oatmeal_stripedpillow_sofa.webp",
    "images": [
      "assets/products/sofas/cat-soft-oatmeal-stripedpillow-sofa/soft_oatmeal_stripedpillow_sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-tan-brown-fabric-3-seater-sofa",
    "name": "Tan Brown Fabric 3 Seater Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Tan Brown Fabric 3 Seater Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-tan-brown-fabric-3-seater-sofa/Tan Brown Fabric 3-Seater Sofa.webp",
    "images": [
      "assets/products/sofas/cat-tan-brown-fabric-3-seater-sofa/Tan Brown Fabric 3-Seater Sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-tan-brown-leather-2-seater-sofa-b",
    "name": "Tan Brown Leather 2 Seater Sofa B",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Tan Brown Leather 2 Seater Sofa B combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-tan-brown-leather-2-seater-sofa-b/Tan Brown Leather 2-Seater Sofa B.webp",
    "images": [
      "assets/products/sofas/cat-tan-brown-leather-2-seater-sofa-b/Tan Brown Leather 2-Seater Sofa B.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-tan-brown-leather-3-seater-sofa-b",
    "name": "Tan Brown Leather 3 Seater Sofa B",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Tan Brown Leather 3 Seater Sofa B combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-tan-brown-leather-3-seater-sofa-b/Tan Brown Leather 3-Seater Sofa B.webp",
    "images": [
      "assets/products/sofas/cat-tan-brown-leather-3-seater-sofa-b/Tan Brown Leather 3-Seater Sofa B.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-tan-leather-3-seater-sofa",
    "name": "Tan Leather 3 Seater Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Tan Leather 3 Seater Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-tan-leather-3-seater-sofa/Tan Leather 3-Seater Sofa.webp",
    "images": [
      "assets/products/sofas/cat-tan-leather-3-seater-sofa/Tan Leather 3-Seater Sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-taupe-corduroy-modern-loveseat",
    "name": "Taupe Corduroy Modern Loveseat",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Taupe Corduroy Modern Loveseat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-taupe-corduroy-modern-loveseat/taupe_corduroy_modern_loveseat.webp",
    "images": [
      "assets/products/sofas/cat-taupe-corduroy-modern-loveseat/taupe_corduroy_modern_loveseat.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-taupe-tweed-curved-barrel-sofa",
    "name": "Taupe Tweed Curved Barrel Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Taupe Tweed Curved Barrel Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-taupe-tweed-curved-barrel-sofa/taupe_tweed_curved_barrel_sofa.webp",
    "images": [
      "assets/products/sofas/cat-taupe-tweed-curved-barrel-sofa/taupe_tweed_curved_barrel_sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-teak-frame-loveseat-with-green-leather-cushions",
    "name": "Teak Frame Loveseat With Green Leather Cushions",
    "category": "wooden-couches",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Teak Frame Loveseat With Green Leather Cushions combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wooden-couches/cat-teak-frame-loveseat-with-green-leather-cushions/Teak Frame Loveseat with Green Leather Cushions.webp",
    "images": [
      "assets/products/wooden-couches/cat-teak-frame-loveseat-with-green-leather-cushions/Teak Frame Loveseat with Green Leather Cushions.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-traditional-cream-nailhead-sofa",
    "name": "Traditional Cream Nailhead Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Traditional Cream Nailhead Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-traditional-cream-nailhead-sofa/traditional_cream_nailhead_sofa.webp",
    "images": [
      "assets/products/sofas/cat-traditional-cream-nailhead-sofa/traditional_cream_nailhead_sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-tufted-beige-fabric-sofa",
    "name": "Tufted Beige Fabric Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Tufted Beige Fabric Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-tufted-beige-fabric-sofa/Tufted Beige Fabric Sofa.webp",
    "images": [
      "assets/products/sofas/cat-tufted-beige-fabric-sofa/Tufted Beige Fabric Sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-tufted-grey-velvet-sofa",
    "name": "Tufted Grey Velvet Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Tufted Grey Velvet Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-tufted-grey-velvet-sofa/Tufted Grey Velvet Sofa.webp",
    "images": [
      "assets/products/sofas/cat-tufted-grey-velvet-sofa/Tufted Grey Velvet Sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-twotone-cream-and-brown-sofa",
    "name": "Twotone Cream And Brown Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Twotone Cream And Brown Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-twotone-cream-and-brown-sofa/twotone_cream_and_brown_sofa.webp",
    "images": [
      "assets/products/sofas/cat-twotone-cream-and-brown-sofa/twotone_cream_and_brown_sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-warm-cream-textured-cushion-sofa",
    "name": "Warm Cream Textured Cushion Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Warm Cream Textured Cushion Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-warm-cream-textured-cushion-sofa/warm_cream_textured_cushion_sofa.webp",
    "images": [
      "assets/products/sofas/cat-warm-cream-textured-cushion-sofa/warm_cream_textured_cushion_sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-warm-gray-plush-couch",
    "name": "Warm Gray Plush Couch",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Warm Gray Plush Couch combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-warm-gray-plush-couch/warm_gray_plush_couch.webp",
    "images": [
      "assets/products/sofas/cat-warm-gray-plush-couch/warm_gray_plush_couch.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-white-fabric-3-seater-sofa-b",
    "name": "White Fabric 3 Seater Sofa B",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The White Fabric 3 Seater Sofa B combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-white-fabric-3-seater-sofa-b/White Fabric 3-Seater Sofa B.webp",
    "images": [
      "assets/products/sofas/cat-white-fabric-3-seater-sofa-b/White Fabric 3-Seater Sofa B.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-mahogany-3drawer-locking-pedestal",
    "name": "Mahogany Locking Pedestal",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Mahogany Locking Pedestal combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-mahogany-3drawer-locking-pedestal/mahogany_3drawer_locking_pedestal.webp",
    "images": [
      "assets/products/wardrobes-storage/cat-mahogany-3drawer-locking-pedestal/mahogany_3drawer_locking_pedestal.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-taupe-3drawer-locking-pedestal",
    "name": "Taupe Locking Pedestal",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Taupe Locking Pedestal combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-taupe-3drawer-locking-pedestal/taupe_3drawer_locking_pedestal.webp",
    "images": [
      "assets/products/wardrobes-storage/cat-taupe-3drawer-locking-pedestal/taupe_3drawer_locking_pedestal.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-terracotta-compact-mobile-cabinet",
    "name": "Terracotta Compact Mobile Cabinet",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Terracotta Compact Mobile Cabinet combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-terracotta-compact-mobile-cabinet/terracotta_compact_mobile_cabinet.webp",
    "images": [
      "assets/products/wardrobes-storage/cat-terracotta-compact-mobile-cabinet/terracotta_compact_mobile_cabinet.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-beech-wood-3drawer-pedestal-cabinet",
    "name": "Beech Wood Pedestal Cabinet",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Beech Wood Pedestal Cabinet combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-beech-wood-3drawer-pedestal-cabinet/beech_wood_3drawer_pedestal_cabinet.webp",
    "images": [
      "assets/products/wardrobes-storage/cat-beech-wood-3drawer-pedestal-cabinet/beech_wood_3drawer_pedestal_cabinet.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-beige-metallic-locking-file-cabinet",
    "name": "Beige Metallic Locking File Cabinet",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Beige Metallic Locking File Cabinet combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-beige-metallic-locking-file-cabinet/beige_metallic_locking_file_cabinet.webp",
    "images": [
      "assets/products/wardrobes-storage/cat-beige-metallic-locking-file-cabinet/beige_metallic_locking_file_cabinet.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-beige-mobile-pedestal-file-cabinet",
    "name": "Beige Mobile Pedestal File Cabinet",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Beige Mobile Pedestal File Cabinet combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-beige-mobile-pedestal-file-cabinet/beige_mobile_pedestal_file_cabinet.webp",
    "images": [
      "assets/products/wardrobes-storage/cat-beige-mobile-pedestal-file-cabinet/beige_mobile_pedestal_file_cabinet.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-blue-tufted-chesterfield-leather-sofa",
    "name": "Blue Tufted Chesterfield Leather Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Blue Tufted Chesterfield Leather Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-blue-tufted-chesterfield-leather-sofa/Blue Tufted Chesterfield Leather Sofa.webp",
    "images": [
      "assets/products/sofas/cat-blue-tufted-chesterfield-leather-sofa/Blue Tufted Chesterfield Leather Sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-brown-tufted-chesterfield-leather-sofa",
    "name": "Brown Tufted Chesterfield Leather Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Brown Tufted Chesterfield Leather Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-brown-tufted-chesterfield-leather-sofa/Brown Tufted Chesterfield Leather Sofa.webp",
    "images": [
      "assets/products/sofas/cat-brown-tufted-chesterfield-leather-sofa/Brown Tufted Chesterfield Leather Sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-charcoal-grey-tufted-leather-chesterfield-sofa",
    "name": "Charcoal Grey Tufted Leather Chesterfield Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Charcoal Grey Tufted Leather Chesterfield Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-charcoal-grey-tufted-leather-chesterfield-sofa/Charcoal Grey Tufted Leather Chesterfield Sofa.webp",
    "images": [
      "assets/products/sofas/cat-charcoal-grey-tufted-leather-chesterfield-sofa/Charcoal Grey Tufted Leather Chesterfield Sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-charcoal-mobile-pedestal-cabinet-comboset",
    "name": "Charcoal Mobile Pedestal Cabinet Comboset",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Charcoal Mobile Pedestal Cabinet Comboset combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-charcoal-mobile-pedestal-cabinet-comboset/charcoal_mobile_pedestal_cabinet_comboset.webp",
    "images": [
      "assets/products/wardrobes-storage/cat-charcoal-mobile-pedestal-cabinet-comboset/charcoal_mobile_pedestal_cabinet_comboset.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-charcoal-tall-bookshelf-tower",
    "name": "Charcoal Tall Bookshelf Tower",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Charcoal Tall Bookshelf Tower combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-charcoal-tall-bookshelf-tower/charcoal_tall_bookshelf_tower.webp",
    "images": [
      "assets/products/wardrobes-storage/cat-charcoal-tall-bookshelf-tower/charcoal_tall_bookshelf_tower.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-tufted-chesterfield-loveseat",
    "name": "Cream Tufted Chesterfield Loveseat",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Tufted Chesterfield Loveseat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-cream-tufted-chesterfield-loveseat/cream_tufted_chesterfield_loveseat.webp",
    "images": [
      "assets/products/sofas/cat-cream-tufted-chesterfield-loveseat/cream_tufted_chesterfield_loveseat.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-brown-tufted-leather-chesterfield-sofa",
    "name": "Dark Brown Tufted Leather Chesterfield Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Brown Tufted Leather Chesterfield Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-dark-brown-tufted-leather-chesterfield-sofa/Dark Brown Tufted Leather Chesterfield Sofa.webp",
    "images": [
      "assets/products/sofas/cat-dark-brown-tufted-leather-chesterfield-sofa/Dark Brown Tufted Leather Chesterfield Sofa.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-oak-rustic-tall-wardrobe",
    "name": "Dark Oak Rustic Tall Wardrobe",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Oak Rustic Tall Wardrobe combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-dark-oak-rustic-tall-wardrobe/dark_oak_rustic_tall_wardrobe.webp",
    "images": [
      "assets/products/wardrobes-storage/cat-dark-oak-rustic-tall-wardrobe/dark_oak_rustic_tall_wardrobe.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-walnut-mobile-3drawer-file-cabinet",
    "name": "Dark Walnut Mobile File Cabinet",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Walnut Mobile File Cabinet combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-dark-walnut-mobile-3drawer-file-cabinet/dark_walnut_mobile_3drawer_file_cabinet.webp",
    "images": [
      "assets/products/wardrobes-storage/cat-dark-walnut-mobile-3drawer-file-cabinet/dark_walnut_mobile_3drawer_file_cabinet.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-edge-mobile-pedestal-filing-cabinet",
    "name": "Edge Mobile Pedestal Filing Cabinet",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Edge Mobile Pedestal Filing Cabinet combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-edge-mobile-pedestal-filing-cabinet/Edge Mobile Filing Cabinet - Angle Perspective.webp",
    "images": [
      "assets/products/wardrobes-storage/cat-edge-mobile-pedestal-filing-cabinet/Edge Mobile Filing Cabinet - Angle Perspective.webp",
      "assets/products/wardrobes-storage/cat-edge-mobile-pedestal-filing-cabinet/Edge Mobile Filing Cabinet - Corner Detail.webp",
      "assets/products/wardrobes-storage/cat-edge-mobile-pedestal-filing-cabinet/Edge Mobile Filing Cabinet - Front View.webp",
      "assets/products/wardrobes-storage/cat-edge-mobile-pedestal-filing-cabinet/Edge Mobile Filing Cabinet - Side View.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-fluted-glass-illuminated-wardrobe",
    "name": "Fluted Glass Illuminated Wardrobe",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Fluted Glass Illuminated Wardrobe combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-fluted-glass-illuminated-wardrobe/fluted_glass_illuminated_wardrobe.webp",
    "images": [
      "assets/products/wardrobes-storage/cat-fluted-glass-illuminated-wardrobe/fluted_glass_illuminated_wardrobe.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-industrial-gray-low-storage-cabinet",
    "name": "Industrial Gray Low Storage Cabinet",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Industrial Gray Low Storage Cabinet combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-industrial-gray-low-storage-cabinet/industrial_gray_low_storage_cabinet.webp",
    "images": [
      "assets/products/wardrobes-storage/cat-industrial-gray-low-storage-cabinet/industrial_gray_low_storage_cabinet.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-light-oak-vanity-tower-with-mirror",
    "name": "Light Oak Vanity Tower With Mirror",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Light Oak Vanity Tower With Mirror combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-light-oak-vanity-tower-with-mirror/light_oak_vanity_tower_with_mirror.webp",
    "images": [
      "assets/products/wardrobes-storage/cat-light-oak-vanity-tower-with-mirror/light_oak_vanity_tower_with_mirror.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-max-fluted-panel-wardrobe-vanity-unit",
    "name": "Max Fluted Panel Wardrobe Vanity Unit",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Max Fluted Panel Wardrobe Vanity Unit combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-max-fluted-panel-wardrobe-vanity-unit/Max Fluted Wardrobe - Angle Perspective.webp",
    "images": [
      "assets/products/wardrobes-storage/cat-max-fluted-panel-wardrobe-vanity-unit/Max Fluted Wardrobe - Angle Perspective.webp",
      "assets/products/wardrobes-storage/cat-max-fluted-panel-wardrobe-vanity-unit/Max Fluted Wardrobe - Corner Detail.webp",
      "assets/products/wardrobes-storage/cat-max-fluted-panel-wardrobe-vanity-unit/Max Fluted Wardrobe - Front View.webp",
      "assets/products/wardrobes-storage/cat-max-fluted-panel-wardrobe-vanity-unit/Max Fluted Wardrobe - Side View.webp",
      "assets/products/wardrobes-storage/cat-max-fluted-panel-wardrobe-vanity-unit/Max Fluted Wardrobe - Studio Showcase.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-modern-sliding-mirror-wardrobe",
    "name": "Modern Sliding Mirror Wardrobe",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Modern Sliding Mirror Wardrobe combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-modern-sliding-mirror-wardrobe/modern_sliding_mirror_wardrobe.webp",
    "images": [
      "assets/products/wardrobes-storage/cat-modern-sliding-mirror-wardrobe/modern_sliding_mirror_wardrobe.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-nordic-oak-3drawer-nightstand",
    "name": "Nordic Oak Nightstand",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Nordic Oak Nightstand combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-nordic-oak-3drawer-nightstand/nordic_oak_3drawer_nightstand.webp",
    "images": [
      "assets/products/wardrobes-storage/cat-nordic-oak-3drawer-nightstand/nordic_oak_3drawer_nightstand.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-oak-3drawer-locking-nightstand",
    "name": "Oak Locking Nightstand",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Oak Locking Nightstand combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-oak-3drawer-locking-nightstand/oak_3drawer_locking_nightstand.webp",
    "images": [
      "assets/products/wardrobes-storage/cat-oak-3drawer-locking-nightstand/oak_3drawer_locking_nightstand.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-oak-entryway-wardrobe-and-shoe-bench",
    "name": "Oak Entryway Wardrobe And Shoe Bench",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Oak Entryway Wardrobe And Shoe Bench combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-oak-entryway-wardrobe-and-shoe-bench/oak_entryway_wardrobe_and_shoe_bench.webp",
    "images": [
      "assets/products/wardrobes-storage/cat-oak-entryway-wardrobe-and-shoe-bench/oak_entryway_wardrobe_and_shoe_bench.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-oak-fulllength-mirror-dressing-tower",
    "name": "Oak Fulllength Mirror Dressing Tower",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Oak Fulllength Mirror Dressing Tower combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-oak-fulllength-mirror-dressing-tower/oak_fulllength_mirror_dressing_tower.webp",
    "images": [
      "assets/products/wardrobes-storage/cat-oak-fulllength-mirror-dressing-tower/oak_fulllength_mirror_dressing_tower.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-offwhite-4door-modern-wardrobe",
    "name": "Offwhite Modern Wardrobe",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Offwhite Modern Wardrobe combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-offwhite-4door-modern-wardrobe/offwhite_4door_modern_wardrobe.webp",
    "images": [
      "assets/products/wardrobes-storage/cat-offwhite-4door-modern-wardrobe/offwhite_4door_modern_wardrobe.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-offwhite-scandi-3door-wardrobe",
    "name": "Offwhite Scandi Wardrobe",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Offwhite Scandi Wardrobe combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-offwhite-scandi-3door-wardrobe/offwhite_scandi_3door_wardrobe.webp",
    "images": [
      "assets/products/wardrobes-storage/cat-offwhite-scandi-3door-wardrobe/offwhite_scandi_3door_wardrobe.webp"
    ],
    "colors": []
  },
  {
    "id": "scandinavian-wood-desk-and-credenza-set",
    "name": "Scandinavian Wood Desk and Credenza Set",
    "category": "office-workstations",
    "type": "table",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Scandinavian Wood Desk and Credenza Set combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/scandinavian-wood-desk-and-credenza-set/scandinavian-wood-desk-and-credenza-set.webp",
    "images": [
      "assets/products/office-workstations/scandinavian-wood-desk-and-credenza-set/scandinavian-wood-desk-and-credenza-set.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-slate-gray-low-file-cabinet",
    "name": "Slate Gray Low File Cabinet",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Slate Gray Low File Cabinet combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-slate-gray-low-file-cabinet/slate_gray_low_file_cabinet.webp",
    "images": [
      "assets/products/wardrobes-storage/cat-slate-gray-low-file-cabinet/slate_gray_low_file_cabinet.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-slate-gray-mobile-file-cabinet",
    "name": "Slate Gray Mobile File Cabinet",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Slate Gray Mobile File Cabinet combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-slate-gray-mobile-file-cabinet/slate_gray_mobile_file_cabinet.webp",
    "images": [
      "assets/products/wardrobes-storage/cat-slate-gray-mobile-file-cabinet/slate_gray_mobile_file_cabinet.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-taupe-locking-2drawer-file-cabinet",
    "name": "Taupe Locking File Cabinet",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Taupe Locking File Cabinet combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-taupe-locking-2drawer-file-cabinet/taupe_locking_2drawer_file_cabinet.webp",
    "images": [
      "assets/products/wardrobes-storage/cat-taupe-locking-2drawer-file-cabinet/taupe_locking_2drawer_file_cabinet.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-walnut-2door-tall-wardrobe",
    "name": "Walnut Tall Wardrobe",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Walnut Tall Wardrobe combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-walnut-2door-tall-wardrobe/walnut_2door_tall_wardrobe.webp",
    "images": [
      "assets/products/wardrobes-storage/cat-walnut-2door-tall-wardrobe/walnut_2door_tall_wardrobe.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-walnut-fluted-tambour-sideboard",
    "name": "Walnut Fluted Tambour Sideboard",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Walnut Fluted Tambour Sideboard combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-walnut-fluted-tambour-sideboard/walnut_fluted_tambour_sideboard.webp",
    "images": [
      "assets/products/wardrobes-storage/cat-walnut-fluted-tambour-sideboard/walnut_fluted_tambour_sideboard.webp"
    ],
    "colors": []
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
    "img": "assets/products/wardrobes-storage/edge/Edge_01.webp",
    "images": [
      "assets/products/wardrobes-storage/edge/Edge_01.webp",
      "assets/products/wardrobes-storage/edge/Edge_02.webp",
      "assets/products/wardrobes-storage/edge/Edge_03.webp",
      "assets/products/wardrobes-storage/edge/Edge_04.webp"
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
    "img": "assets/products/wardrobes-storage/elio/Elio_01.webp",
    "images": [
      "assets/products/wardrobes-storage/elio/Elio_01.webp",
      "assets/products/wardrobes-storage/elio/Elio_02.webp"
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
    "img": "assets/products/wardrobes-storage/forge/Forge_01.webp",
    "images": [
      "assets/products/wardrobes-storage/forge/Forge_01.webp",
      "assets/products/wardrobes-storage/forge/Forge_02.webp",
      "assets/products/wardrobes-storage/forge/Forge_03.webp",
      "assets/products/wardrobes-storage/forge/Forge_04.webp"
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
    "img": "assets/products/wardrobes-storage/nexo/Nexo_01.webp",
    "images": [
      "assets/products/wardrobes-storage/nexo/Nexo_01.webp",
      "assets/products/wardrobes-storage/nexo/Nexo_02.webp",
      "assets/products/wardrobes-storage/nexo/Nexo_03.webp",
      "assets/products/wardrobes-storage/nexo/Nexo_04.webp"
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
    "img": "assets/products/wardrobes-storage/oria/Oria_01.webp",
    "images": [
      "assets/products/wardrobes-storage/oria/Oria_01.webp",
      "assets/products/wardrobes-storage/oria/Oria_02.webp",
      "assets/products/wardrobes-storage/oria/Oria_03.webp"
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
    "img": "assets/products/wardrobes-storage/orin/Orin_01.webp",
    "images": [
      "assets/products/wardrobes-storage/orin/Orin_01.webp",
      "assets/products/wardrobes-storage/orin/Orin_02.webp"
    ],
    "colors": []
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
    "img": "assets/products/wardrobes-storage/rova/Rova_01.webp",
    "images": [
      "assets/products/wardrobes-storage/rova/Rova_01.webp",
      "assets/products/wardrobes-storage/rova/Rova_02.webp",
      "assets/products/wardrobes-storage/rova/Rova_03.webp",
      "assets/products/wardrobes-storage/rova/Rova_04.webp"
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
    "img": "assets/products/wardrobes-storage/rubco-book-shelf-simple/book_shelf_simple.webp",
    "images": [
      "assets/products/wardrobes-storage/rubco-book-shelf-simple/book_shelf_simple.webp",
      "assets/products/wardrobes-storage/rubco-book-shelf-simple/book_shelf_simple_1.webp"
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
    "img": "assets/products/wardrobes-storage/rubco-chest-of-drawers-3-chests/chest_of_drawers_3_chests.webp",
    "images": [
      "assets/products/wardrobes-storage/rubco-chest-of-drawers-3-chests/chest_of_drawers_3_chests.webp",
      "assets/products/wardrobes-storage/rubco-chest-of-drawers-3-chests/chest_of_drawers_3_chests_1.webp",
      "assets/products/wardrobes-storage/rubco-chest-of-drawers-3-chests/chest_of_drawers_3_chests_2.webp"
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
    "img": "assets/products/wardrobes-storage/rubco-chest-of-drawers-5-chests/chest_of_drawers_5_chests.webp",
    "images": [
      "assets/products/wardrobes-storage/rubco-chest-of-drawers-5-chests/chest_of_drawers_5_chests.webp",
      "assets/products/wardrobes-storage/rubco-chest-of-drawers-5-chests/chest_of_drawers_5_chests_1.webp",
      "assets/products/wardrobes-storage/rubco-chest-of-drawers-5-chests/chest_of_drawers_5_chests_2.webp",
      "assets/products/wardrobes-storage/rubco-chest-of-drawers-5-chests/chest_of_drawers_5_chests_3.webp"
    ],
    "listingUrl": "https://rubcobangalore.com/furniture/chest-of-drawers-5-chests",
    "colors": [
      "Honey",
      "Teak"
    ]
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
    "img": "assets/products/wardrobes-storage/rubco-pooja-stand/pooja_stand.webp",
    "images": [
      "assets/products/wardrobes-storage/rubco-pooja-stand/pooja_stand.webp",
      "assets/products/wardrobes-storage/rubco-pooja-stand/pooja_stand_1.webp",
      "assets/products/wardrobes-storage/rubco-pooja-stand/pooja_stand_2.webp",
      "assets/products/wardrobes-storage/rubco-pooja-stand/pooja_stand_3.webp",
      "assets/products/wardrobes-storage/rubco-pooja-stand/pooja_stand_4.webp"
    ],
    "listingUrl": "https://rubcobangalore.com/furniture/pooja-stand",
    "colors": [
      "Honey",
      "Teak"
    ]
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
    "img": "assets/products/wardrobes-storage/rubco-shelf-small/shelf_small.webp",
    "images": [
      "assets/products/wardrobes-storage/rubco-shelf-small/shelf_small.webp",
      "assets/products/wardrobes-storage/rubco-shelf-small/shelf_small_1.webp",
      "assets/products/wardrobes-storage/rubco-shelf-small/shelf_small_2.webp",
      "assets/products/wardrobes-storage/rubco-shelf-small/shelf_small_3.webp"
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
    "img": "assets/products/wardrobes-storage/unox/Unox_01.webp",
    "images": [
      "assets/products/wardrobes-storage/unox/Unox_01.webp",
      "assets/products/wardrobes-storage/unox/Unox_02.webp",
      "assets/products/wardrobes-storage/unox/Unox_03.webp",
      "assets/products/wardrobes-storage/unox/Unox_04.webp"
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
    "img": "assets/products/wardrobes-storage/versa/Versa_01.webp",
    "images": [
      "assets/products/wardrobes-storage/versa/Versa_01.webp",
      "assets/products/wardrobes-storage/versa/Versa_02.webp",
      "assets/products/wardrobes-storage/versa/Versa_03.webp",
      "assets/products/wardrobes-storage/versa/Versa_04.webp"
    ],
    "colors": []
  },
  {
    "id": "lmw-020",
    "name": "LMW-020",
    "category": "wooden-couches",
    "type": "couch",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.9,
    "img": "assets/products/wooden-couches/lmw-023/LMW-023.webp",
    "badge": "",
    "description": "Indulge in luxury with the LMW-020 wooden couch. Designed for premium comfort and relaxed seating, it features a sturdy wood frame. Its spacious contoured seat and elegant Red finish make it the perfect statement addition to your living area, executive office, or lobby.",
    "images": [
      "assets/products/wooden-couches/lmw-023/LMW-023.webp"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "lmw-021",
    "name": "LMW-021",
    "category": "wooden-couches",
    "type": "couch",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.7,
    "img": "assets/products/wooden-couches/lmw-024/LMW-024.webp",
    "badge": "",
    "description": "Indulge in luxury with the LMW-021 wooden couch. Designed for premium comfort and relaxed seating, it features a sturdy wood frame. Its spacious contoured seat and elegant Red finish make it the perfect statement addition to your living area, executive office, or lobby.",
    "images": [
      "assets/products/wooden-couches/lmw-024/LMW-024.webp"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "lmw-022",
    "name": "LMW-022",
    "category": "wooden-couches",
    "type": "couch",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.7,
    "img": "assets/products/wooden-couches/lmw-025/LMW-025.webp",
    "badge": "",
    "description": "Indulge in luxury with the LMW-022 wooden couch. Designed for premium comfort and relaxed seating, it features a sturdy wood frame. Its spacious contoured seat and elegant Brown finish make it the perfect statement addition to your living area, executive office, or lobby.",
    "images": [
      "assets/products/wooden-couches/lmw-025/LMW-025.webp"
    ],
    "colors": [
      "Brown"
    ]
  },
  {
    "id": "lmw-023",
    "name": "LMW-023",
    "category": "wooden-couches",
    "type": "couch",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.7,
    "img": "assets/products/wooden-couches/lmw-026/LMW-026.webp",
    "badge": "",
    "description": "Indulge in luxury with the LMW-023 wooden couch. Designed for premium comfort and relaxed seating, it features a sturdy wood frame. Its spacious contoured seat and elegant Red finish make it the perfect statement addition to your living area, executive office, or lobby.",
    "images": [
      "assets/products/wooden-couches/lmw-026/LMW-026.webp"
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
    "rating": 4.5,
    "img": "assets/products/wooden-couches/lmw-027/LMW-027.webp",
    "badge": "",
    "description": "Indulge in luxury with the LMW-024 wooden couch. Designed for premium comfort and relaxed seating, it features a sturdy wood frame. Its spacious contoured seat and elegant Brown finish make it the perfect statement addition to your living area, executive office, or lobby.",
    "images": [
      "assets/products/wooden-couches/lmw-027/LMW-027.webp"
    ],
    "colors": [
      "Brown"
    ]
  },
  {
    "id": "lmw-025",
    "name": "LMW-025",
    "category": "wooden-couches",
    "type": "couch",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/products/wooden-couches/lmw-028/LMW-028.webp",
    "badge": "New",
    "description": "Indulge in luxury with the LMW-025 wooden couch. Designed for premium comfort and relaxed seating, it features a sturdy wood frame. Its spacious contoured seat and elegant Red finish make it the perfect statement addition to your living area, executive office, or lobby.",
    "images": [
      "assets/products/wooden-couches/lmw-028/LMW-028.webp"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "lmw-026",
    "name": "LMW-026",
    "category": "wooden-couches",
    "type": "couch",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/products/wooden-couches/lmw-029/LMW-029.webp",
    "badge": "Bestseller",
    "description": "Indulge in luxury with the LMW-026 wooden couch. Designed for premium comfort and relaxed seating, it features a sturdy wood frame. Its spacious contoured seat and elegant Red finish make it the perfect statement addition to your living area, executive office, or lobby.",
    "images": [
      "assets/products/wooden-couches/lmw-029/LMW-029.webp"
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
    "rating": 4.9,
    "img": "assets/products/wooden-couches/lmw-030/LMW-030.webp",
    "badge": "",
    "description": "Indulge in luxury with the LMW-027 wooden couch. Designed for premium comfort and relaxed seating, it features a sturdy wood frame. Its spacious contoured seat and elegant Red finish make it the perfect statement addition to your living area, executive office, or lobby.",
    "images": [
      "assets/products/wooden-couches/lmw-030/LMW-030.webp"
    ],
    "colors": [
      "Red"
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
    "img": "assets/products/wooden-couches/lmw-031/LMW-031.webp",
    "badge": "Premium",
    "description": "Indulge in luxury with the LMW-028 wooden couch. Designed for premium comfort and relaxed seating, it features a sturdy wood frame. Its spacious contoured seat and elegant Red finish make it the perfect statement addition to your living area, executive office, or lobby.",
    "images": [
      "assets/products/wooden-couches/lmw-031/LMW-031.webp"
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
    "rating": 4.7,
    "img": "assets/products/wooden-couches/lmw-032/LMW-032.webp",
    "badge": "New",
    "description": "Indulge in luxury with the LMW-029 wooden couch. Designed for premium comfort and relaxed seating, it features a sturdy wood frame. Its spacious contoured seat and elegant Red finish make it the perfect statement addition to your living area, executive office, or lobby.",
    "images": [
      "assets/products/wooden-couches/lmw-032/LMW-032.webp"
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
    "rating": 4.7,
    "img": "assets/products/wooden-couches/lmw-033/LMW-033.webp",
    "badge": "",
    "description": "Indulge in luxury with the LMW-030 wooden couch. Designed for premium comfort and relaxed seating, it features a sturdy wood frame. Its spacious contoured seat and elegant Brown finish make it the perfect statement addition to your living area, executive office, or lobby.",
    "images": [
      "assets/products/wooden-couches/lmw-033/LMW-033.webp"
    ],
    "colors": [
      "Brown"
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
    "img": "assets/products/wooden-couches/lmw-034/LMW-034.webp",
    "badge": "",
    "description": "Indulge in luxury with the LMW-031 wooden couch. Designed for premium comfort and relaxed seating, it features a sturdy wood frame. Its spacious contoured seat and elegant Red finish make it the perfect statement addition to your living area, executive office, or lobby.",
    "images": [
      "assets/products/wooden-couches/lmw-034/LMW-034.webp"
    ],
    "colors": [
      "Red"
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
    "img": "assets/products/wooden-couches/rubco-antiq-sofa-311/rubco_antiq_sofa_3_1_1.webp",
    "images": [
      "assets/products/wooden-couches/rubco-antiq-sofa-311/rubco_antiq_sofa_3_1_1.webp",
      "assets/products/wooden-couches/rubco-antiq-sofa-311/rubco_antiq_sofa_3_1_1_1.webp",
      "assets/products/wooden-couches/rubco-antiq-sofa-311/rubco_antiq_sofa_3_1_1_2.webp",
      "assets/products/wooden-couches/rubco-antiq-sofa-311/rubco_antiq_sofa_3_1_1_3.webp",
      "assets/products/wooden-couches/rubco-antiq-sofa-311/rubco_antiq_sofa_3_1_1_4.webp"
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
    "img": "assets/products/wooden-couches/rubco-perl-sofa-311/rubco_perl_sofa_3_1_1.webp",
    "images": [
      "assets/products/wooden-couches/rubco-perl-sofa-311/rubco_perl_sofa_3_1_1.webp",
      "assets/products/wooden-couches/rubco-perl-sofa-311/rubco_perl_sofa_3_1_1_1.webp",
      "assets/products/wooden-couches/rubco-perl-sofa-311/rubco_perl_sofa_3_1_1_2.webp",
      "assets/products/wooden-couches/rubco-perl-sofa-311/rubco_perl_sofa_3_1_1_3.webp",
      "assets/products/wooden-couches/rubco-perl-sofa-311/rubco_perl_sofa_3_1_1_4.webp",
      "assets/products/wooden-couches/rubco-perl-sofa-311/rubco_perl_sofa_3_1_1_5.webp"
    ],
    "listingUrl": "https://rubcobangalore.com/furniture/rubco-perl-sofa",
    "colors": [
      "Honey",
      "Teak"
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
    "img": "assets/products/wooden-couches/rubco-reeper-sofa/reeper_sofa_1.webp",
    "images": [
      "assets/products/wooden-couches/rubco-reeper-sofa/reeper_sofa_1.webp",
      "assets/products/wooden-couches/rubco-reeper-sofa/reeper_sofa_2.webp",
      "assets/products/wooden-couches/rubco-reeper-sofa/reeper_sofa_3.webp"
    ],
    "listingUrl": "https://rubcobangalore.com/furniture/reeper-sofa",
    "colors": [
      "Honey",
      "Teak"
    ]
  },
  {
    "id": "cat-minimalist-wood-slatted-bed",
    "name": "Minimalist Wood Slatted Bed",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Slatted Bed combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-slatted-bed/Minimalist Wood Slatted Bed - Angle Perspective.webp",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-slatted-bed/Minimalist Wood Slatted Bed - Angle Perspective.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-slatted-bed-psi",
    "name": "Minimalist Wood Slatted Bed",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Slatted Bed combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-slatted-bed-psi/Minimalist Wood Slatted Bed Psi.webp",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-slatted-bed-psi/Minimalist Wood Slatted Bed Psi.webp"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-walnut-single-bed-with-black-headboard",
    "name": "Dark Walnut Single Bed With Black Headboard",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Walnut Single Bed With Black Headboard combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-dark-walnut-single-bed-with-black-headboard/Dark Walnut Single Bed with Black Headboard.webp",
    "images": [
      "assets/products/sleeping-beds/cat-dark-walnut-single-bed-with-black-headboard/Dark Walnut Single Bed with Black Headboard.webp"
    ],
    "colors": []
  },
  {
    "id": "black-leather-reclining-sofa",
    "name": "Black Leather Reclining Sofa & Loveseat",
    "category": "sofas",
    "type": "sofa",
    "material": "Premium Leather / Motion Recliner System",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Black Leather Reclining Sofa & Loveseat combines premium top-grain leather, exceptional reclining comfort, and long-lasting build quality.",
    "img": "assets/products/sofas/black-leather-reclining-sofa/black-leather-reclining-sofa.webp",
    "images": [
      "assets/products/sofas/black-leather-reclining-sofa/black-leather-reclining-sofa.webp",
      "assets/products/sofas/black-leather-reclining-sofa/black-leather-reclining-sofa-loveseat.webp"
    ],
    "colors": []
  }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = PRODUCTS;
}


