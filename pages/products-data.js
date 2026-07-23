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
    "img": "assets/products/acoustic-pods/arqis/Arqis_01.png",
    "images": [
      "assets/products/acoustic-pods/arqis/Arqis_01.png",
      "assets/products/acoustic-pods/arqis/Arqis_02.png",
      "assets/products/acoustic-pods/arqis/Arqis_03.png",
      "assets/products/acoustic-pods/arqis/Arqis_04.png"
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
    "img": "assets/products/acoustic-pods/canio/Canio_01.png",
    "images": [
      "assets/products/acoustic-pods/canio/Canio_01.png",
      "assets/products/acoustic-pods/canio/Canio_02.png",
      "assets/products/acoustic-pods/canio/Canio_03.png"
    ],
    "colors": []
  },
  {
    "id": "cat-arqis-acoustic-office-phone-pod",
    "name": "Arqis Acoustic Office Phone Pod",
    "category": "acoustic-pods",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Arqis Acoustic Office Phone Pod combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/acoustic-pods/cat-arqis-acoustic-office-phone-pod/Arqis Acoustic Phone Pod - Architectural Context View.png",
    "images": [
      "assets/products/acoustic-pods/cat-arqis-acoustic-office-phone-pod/Arqis Acoustic Phone Pod - Architectural Context View.png",
      "assets/products/acoustic-pods/cat-arqis-acoustic-office-phone-pod/Arqis Acoustic Phone Pod - Interior Desk View.png",
      "assets/products/acoustic-pods/cat-arqis-acoustic-office-phone-pod/Arqis Acoustic Phone Pod - Studio Cutout View.png"
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
    "img": "assets/products/acoustic-pods/corvo/Corvo_01.png",
    "images": [
      "assets/products/acoustic-pods/corvo/Corvo_01.png",
      "assets/products/acoustic-pods/corvo/Corvo_02.png",
      "assets/products/acoustic-pods/corvo/Corvo_03.png",
      "assets/products/acoustic-pods/corvo/Corvo_04.png"
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
    "img": "assets/products/acoustic-pods/crest/Crest_01.png",
    "images": [
      "assets/products/acoustic-pods/crest/Crest_01.png",
      "assets/products/acoustic-pods/crest/Crest_02.png",
      "assets/products/acoustic-pods/crest/Crest_03.png"
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
    "img": "assets/products/acoustic-pods/cubix/Cubix_01.png",
    "images": [
      "assets/products/acoustic-pods/cubix/Cubix_01.png",
      "assets/products/acoustic-pods/cubix/Cubix_02.png",
      "assets/products/acoustic-pods/cubix/Cubix_03.png",
      "assets/products/acoustic-pods/cubix/Cubix_04.png"
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
    "img": "assets/products/acoustic-pods/cyris/Cyris_01.png",
    "images": [
      "assets/products/acoustic-pods/cyris/Cyris_01.png",
      "assets/products/acoustic-pods/cyris/Cyris_02.png",
      "assets/products/acoustic-pods/cyris/Cyris_03.png",
      "assets/products/acoustic-pods/cyris/Cyris_04.png"
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
    "img": "assets/products/acoustic-pods/velor/Velor_01.png",
    "images": [
      "assets/products/acoustic-pods/velor/Velor_01.png",
      "assets/products/acoustic-pods/velor/Velor_02.png",
      "assets/products/acoustic-pods/velor/Velor_03.png",
      "assets/products/acoustic-pods/velor/Velor_04.png"
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
    "img": "assets/products/cafe-bar-stools/black-tufted-hydraulic-swivel-bar-stool/Black Tufted Swivel Bar Stool - Angle Perspective.png",
    "images": [
      "assets/products/cafe-bar-stools/black-tufted-hydraulic-swivel-bar-stool/Black Tufted Swivel Bar Stool - Angle Perspective.png",
      "assets/products/cafe-bar-stools/black-tufted-hydraulic-swivel-bar-stool/Black Tufted Swivel Bar Stool - Corner Detail.png",
      "assets/products/cafe-bar-stools/black-tufted-hydraulic-swivel-bar-stool/Black Tufted Swivel Bar Stool - Front View.png"
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
    "img": "assets/products/cafe-bar-stools/molded-perforated-bar-stools/molded_perforated_bar_stools.png",
    "images": [
      "assets/products/cafe-bar-stools/molded-perforated-bar-stools/molded_perforated_bar_stools.png"
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
    "img": "assets/products/cafe-bar-stools/boho-black-cane-counter-stool/boho_black_cane_counter_stool.png",
    "images": [
      "assets/products/cafe-bar-stools/boho-black-cane-counter-stool/boho_black_cane_counter_stool.png"
    ],
    "colors": []
  },
  {
    "id": "dbs-52",
    "name": "DBS-52 Dining Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Dining Bar Stool Model 052 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-52/DBS-52 - Front View.png",
    "images": [
      "assets/products/cafe-bar-stools/dbs-52/DBS-52 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dbs-53",
    "name": "DBS-53 Dining Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Dining Bar Stool Model 053 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-53/DBS-53 - Front View.png",
    "images": [
      "assets/products/cafe-bar-stools/dbs-53/DBS-53 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dbs-54",
    "name": "DBS-54 Dining Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Dining Bar Stool Model 055 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-54/DBS-54 - Front View.png",
    "images": [
      "assets/products/cafe-bar-stools/dbs-54/DBS-54 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dbs-55",
    "name": "DBS-55 Dining Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Dining Bar Stool Model 056 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-55/DBS-55 - Front View.png",
    "images": [
      "assets/products/cafe-bar-stools/dbs-55/DBS-55 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dbs-56",
    "name": "DBS-56 Dining Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Dining Bar Stool Model 057 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-56/DBS-56 - Front View.png",
    "images": [
      "assets/products/cafe-bar-stools/dbs-56/DBS-56 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dbs-57",
    "name": "DBS-57 Dining Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Dining Bar Stool Model 058 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-57/DBS-57 - Front View.png",
    "images": [
      "assets/products/cafe-bar-stools/dbs-57/DBS-57 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dbs-58",
    "name": "DBS-58 Dining Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Dining Bar Stool Model 059 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-58/DBS-58 - Front View.png",
    "images": [
      "assets/products/cafe-bar-stools/dbs-58/DBS-58 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dbs-59",
    "name": "DBS-59 Dining Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Dining Bar Stool Model 060 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-59/DBS-59 - Front View.png",
    "images": [
      "assets/products/cafe-bar-stools/dbs-59/DBS-59 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dbs-60",
    "name": "DBS-60 Dining Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Dining Bar Stool Model 061 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-60/DBS-60 - Front View.png",
    "images": [
      "assets/products/cafe-bar-stools/dbs-60/DBS-60 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dbs-61",
    "name": "DBS-61 Dining Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Dining Bar Stool Model 062 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-61/DBS-61 - Front View.png",
    "images": [
      "assets/products/cafe-bar-stools/dbs-61/DBS-61 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dbs-62",
    "name": "DBS-62 Dining Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Dining Bar Stool Model 063 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-62/DBS-62 - Front View.png",
    "images": [
      "assets/products/cafe-bar-stools/dbs-62/DBS-62 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dbs-63",
    "name": "DBS-63 Dining Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Dining Bar Stool Model 064 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-63/DBS-63 - Front View.png",
    "images": [
      "assets/products/cafe-bar-stools/dbs-63/DBS-63 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dbs-64",
    "name": "DBS-64 Dining Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Dining Bar Stool Model 065 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-64/DBS-64 - Front View.png",
    "images": [
      "assets/products/cafe-bar-stools/dbs-64/DBS-64 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dbs-66",
    "name": "DBS-66 Dining Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Dining Bar Stool Model 066 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-66/DBS-66 - Front View.png",
    "images": [
      "assets/products/cafe-bar-stools/dbs-66/DBS-66 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dbs-67",
    "name": "DBS-67 Dining Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Dining Bar Stool Model 068 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-67/DBS-67 - Front View.png",
    "images": [
      "assets/products/cafe-bar-stools/dbs-67/DBS-67 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dbs-68",
    "name": "DBS-68 Dining Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Dining Bar Stool Model 069 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-68/DBS-68 - Front View.png",
    "images": [
      "assets/products/cafe-bar-stools/dbs-68/DBS-68 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dbs-69",
    "name": "DBS-69 Dining Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Dining Bar Stool Model 075 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-69/DBS-69 - Front View.png",
    "images": [
      "assets/products/cafe-bar-stools/dbs-69/DBS-69 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dbs-65",
    "name": "DBS-65 Dining Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Dining Bar Stool Model 65 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-65/DBS-65 - Front View.png",
    "images": [
      "assets/products/cafe-bar-stools/dbs-65/DBS-65 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dbs-70",
    "name": "DBS-70 Dining Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Dining Bar Stool Model 652 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-70/DBS-70 - Front View.png",
    "images": [
      "assets/products/cafe-bar-stools/dbs-70/DBS-70 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dbs-71",
    "name": "DBS-71 Dining Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Dining Bar Stool Model 653 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-71/DBS-71 - Front View.png",
    "images": [
      "assets/products/cafe-bar-stools/dbs-71/DBS-71 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dbs-72",
    "name": "DBS-72 Dining Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Dining Bar Stool Model 658 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-72/DBS-72 - Front View.png",
    "images": [
      "assets/products/cafe-bar-stools/dbs-72/DBS-72 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dbs-73",
    "name": "DBS-73 Dining Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Dining Bar Stool Model 661 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-73/DBS-73 - Front View.png",
    "images": [
      "assets/products/cafe-bar-stools/dbs-73/DBS-73 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dbs-74",
    "name": "DBS-74 Dining Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Dining Bar Stool Model 665 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-74/DBS-74 - Front View.png",
    "images": [
      "assets/products/cafe-bar-stools/dbs-74/DBS-74 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dbs-75",
    "name": "DBS-75 Dining Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Dining Bar Stool Model 666 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-75/DBS-75 - Front View.png",
    "images": [
      "assets/products/cafe-bar-stools/dbs-75/DBS-75 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dbs-76",
    "name": "DBS-76 Dining Bar Stool",
    "category": "cafe-bar-stools",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbs Series Dining Bar Stool Model 668 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-bar-stools/dbs-76/DBS-76 - Front View.png",
    "images": [
      "assets/products/cafe-bar-stools/dbs-76/DBS-76 - Front View.png"
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
    "img": "assets/products/cafe-bar-stools/industrial-red-metal-tolix-bar-stool/Red Tolix Bar Stool - Angle Perspective.png",
    "images": [
      "assets/products/cafe-bar-stools/industrial-red-metal-tolix-bar-stool/Red Tolix Bar Stool - Angle Perspective.png",
      "assets/products/cafe-bar-stools/industrial-red-metal-tolix-bar-stool/Red Tolix Bar Stool - Front View.png"
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
    "img": "assets/products/cafe-bar-stools/industrial-tolix-bar-stool/Industrial Tolix Bar Stool - Angle Perspective.png",
    "images": [
      "assets/products/cafe-bar-stools/industrial-tolix-bar-stool/Industrial Tolix Bar Stool - Angle Perspective.png",
      "assets/products/cafe-bar-stools/industrial-tolix-bar-stool/Industrial Tolix Bar Stool - Front View.png"
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
    "img": "assets/products/cafe-bar-stools/industrial-tolix-bar-stool-high-angle/Industrial Tolix Bar Stool High Angle - Angle Perspective.png",
    "images": [
      "assets/products/cafe-bar-stools/industrial-tolix-bar-stool-high-angle/Industrial Tolix Bar Stool High Angle - Angle Perspective.png",
      "assets/products/cafe-bar-stools/industrial-tolix-bar-stool-high-angle/Industrial Tolix Bar Stool High Angle - Front View.png"
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
    "img": "assets/products/cafe-bar-stools/industrial-white-tolix-bar-stool-with-wood-seat/White Tolix Wood Seat Bar Stool - Angle Perspective.png",
    "images": [
      "assets/products/cafe-bar-stools/industrial-white-tolix-bar-stool-with-wood-seat/White Tolix Wood Seat Bar Stool - Angle Perspective.png",
      "assets/products/cafe-bar-stools/industrial-white-tolix-bar-stool-with-wood-seat/White Tolix Wood Seat Bar Stool - Front View.png"
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
    "img": "assets/products/cafe-bar-stools/lime-green-eames-shell-bar-stool/Lime Green Eames Bar Stool - Angle Perspective.png",
    "images": [
      "assets/products/cafe-bar-stools/lime-green-eames-shell-bar-stool/Lime Green Eames Bar Stool - Angle Perspective.png",
      "assets/products/cafe-bar-stools/lime-green-eames-shell-bar-stool/Lime Green Eames Bar Stool - Front View.png"
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
    "img": "assets/products/cafe-bar-stools/modern-white-hydraulic-swivel-bar-stool/White Swivel Bar Stool - Angle Perspective.png",
    "images": [
      "assets/products/cafe-bar-stools/modern-white-hydraulic-swivel-bar-stool/White Swivel Bar Stool - Angle Perspective.png",
      "assets/products/cafe-bar-stools/modern-white-hydraulic-swivel-bar-stool/White Swivel Bar Stool - Front View.png"
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
    "img": "assets/products/cafe-bar-stools/orange-molded-bar-stool/orange_molded_bar_stool.png",
    "images": [
      "assets/products/cafe-bar-stools/orange-molded-bar-stool/orange_molded_bar_stool.png"
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
    "img": "assets/products/cafe-chairs/beam/Beam.png",
    "badge": "Bestseller",
    "description": "The Beam Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Blue, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/cafe-chairs/beam/Beam.png"
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
    "img": "assets/products/cafe-chairs/black/BLACK.png",
    "badge": "Bestseller",
    "description": "Add color to every conversation, the BLACK Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/cafe-chairs/black/BLACK.png"
    ],
    "colors": [
      "Red"
    ]
  },
  {
    "id": "cat-architectural-wood-dining-chair-b",
    "name": "Architectural Wood Dining Chair B",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Architectural Wood Dining Chair B combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-architectural-wood-dining-chair-b/Architectural Wood Dining Chair B.jpg",
    "images": [
      "assets/products/chairs/cat-architectural-wood-dining-chair-b/Architectural Wood Dining Chair B.jpg"
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
    "img": "assets/products/office-workstations/cat-black-and-walnut-lshaped-desk/black_and_walnut_lshaped_desk.png",
    "images": [
      "assets/products/office-workstations/cat-black-and-walnut-lshaped-desk/black_and_walnut_lshaped_desk.png"
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
    "img": "assets/products/office-workstations/cat-black-electric-standing-desk/black_electric_standing_desk.png",
    "images": [
      "assets/products/office-workstations/cat-black-electric-standing-desk/black_electric_standing_desk.png"
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
    "img": "assets/products/cafe-tables/black-folding-semicircular-banquet-table/black_folding_semicircular_banquet_table.png",
    "images": [
      "assets/products/cafe-tables/black-folding-semicircular-banquet-table/black_folding_semicircular_banquet_table.png"
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
    "img": "assets/products/cafe-chairs/black-lattice-patio-dining-chair/black_lattice_patio_dining_chair.png",
    "images": [
      "assets/products/cafe-chairs/black-lattice-patio-dining-chair/black_lattice_patio_dining_chair.png"
    ],
    "colors": []
  },
  {
    "id": "cat-black-leather-3seat-power-recliner",
    "name": "Black Leather 3Seat Power Recliner",
    "category": "recliners",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Black Leather 3Seat Power Recliner combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-black-leather-3seat-power-recliner/black_leather_3seat_power_recliner.png",
    "images": [
      "assets/products/recliners/cat-black-leather-3seat-power-recliner/black_leather_3seat_power_recliner.png"
    ],
    "colors": []
  },
  {
    "id": "cat-black-leather-3seat-theater-row",
    "name": "Black Leather 3Seat Theater Row",
    "category": "home-theatre-seating",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Black Leather 3Seat Theater Row combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/home-theatre-seating/cat-black-leather-3seat-theater-row/black_leather_3seat_theater_row.png",
    "images": [
      "assets/products/home-theatre-seating/cat-black-leather-3seat-theater-row/black_leather_3seat_theater_row.png"
    ],
    "colors": []
  },
  {
    "id": "cat-black-leather-4seat-theater-recliner-row",
    "name": "Black Leather 4Seat Theater Recliner Row",
    "category": "home-theatre-seating",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Black Leather 4Seat Theater Recliner Row combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/home-theatre-seating/cat-black-leather-4seat-theater-recliner-row/black_leather_4seat_theater_recliner_row.png",
    "images": [
      "assets/products/home-theatre-seating/cat-black-leather-4seat-theater-recliner-row/black_leather_4seat_theater_recliner_row.png"
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
    "img": "assets/products/sofas/cat-black-leather-channeltufted-loveseat/black_leather_channeltufted_loveseat.png",
    "images": [
      "assets/products/sofas/cat-black-leather-channeltufted-loveseat/black_leather_channeltufted_loveseat.png"
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
    "img": "assets/products/recliners/cat-black-leather-ergonomic-power-recliner/black_leather_ergonomic_power_recliner.png",
    "images": [
      "assets/products/recliners/cat-black-leather-ergonomic-power-recliner/black_leather_ergonomic_power_recliner.png"
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
    "img": "assets/products/recliners/cat-black-leather-executive-recliner/black_leather_executive_recliner.png",
    "images": [
      "assets/products/recliners/cat-black-leather-executive-recliner/black_leather_executive_recliner.png"
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
    "img": "assets/products/recliners/cat-black-leather-recliner-living-set/black_leather_recliner_living_set.png",
    "images": [
      "assets/products/recliners/cat-black-leather-recliner-living-set/black_leather_recliner_living_set.png"
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
    "img": "assets/products/corner-sofas/cat-black-leather-sectional-sofa-with-orange-accent/Black Leather Sectional Sofa with Orange Accent.jpg",
    "images": [
      "assets/products/corner-sofas/cat-black-leather-sectional-sofa-with-orange-accent/Black Leather Sectional Sofa with Orange Accent.jpg"
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
    "img": "assets/products/sofas/cat-black-leather-sofa-chair-table-suite/black_leather_sofa_chair_table_suite.png",
    "images": [
      "assets/products/sofas/cat-black-leather-sofa-chair-table-suite/black_leather_sofa_chair_table_suite.png"
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
    "img": "assets/products/home-theatre-seating/cat-black-leather-theater-recliner/black_leather_theater_recliner.png",
    "images": [
      "assets/products/home-theatre-seating/cat-black-leather-theater-recliner/black_leather_theater_recliner.png"
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
    "img": "assets/products/corner-sofas/cat-black-leather-u-reclining-sectional/black_leather_u_reclining_sectional.png",
    "images": [
      "assets/products/corner-sofas/cat-black-leather-u-reclining-sectional/black_leather_u_reclining_sectional.png"
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
    "img": "assets/products/recliners/cat-black-leather-verticalstitch-recliner-comboset/black_leather_verticalstitch_recliner_comboset.png",
    "images": [
      "assets/products/recliners/cat-black-leather-verticalstitch-recliner-comboset/black_leather_verticalstitch_recliner_comboset.png"
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
    "img": "assets/products/cafe-tables/black-metal-folding-utility-table/black_metal_folding_utility_table.png",
    "images": [
      "assets/products/cafe-tables/black-metal-folding-utility-table/black_metal_folding_utility_table.png"
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
    "img": "assets/products/sofas/cat-black-tufted-fabric-3-seater-sofa/Black Tufted Fabric 3-Seater Sofa.jpg",
    "images": [
      "assets/products/sofas/cat-black-tufted-fabric-3-seater-sofa/Black Tufted Fabric 3-Seater Sofa.jpg"
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
    "img": "assets/products/chairs/cat-brown-molded-tub-accent-chair/Brown Molded Tub Accent Chair.jpg",
    "images": [
      "assets/products/chairs/cat-brown-molded-tub-accent-chair/Brown Molded Tub Accent Chair.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-carved-mahogany-dining-chair",
    "name": "Carved Mahogany Dining Chair",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Carved Mahogany Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-carved-mahogany-dining-chair/carved_mahogany_dining_chair.png",
    "images": [
      "assets/products/chairs/cat-carved-mahogany-dining-chair/carved_mahogany_dining_chair.png"
    ],
    "colors": []
  },
  {
    "id": "cat-carved-teak-wooden-dining-chair",
    "name": "Carved Teak Wooden Dining Chair",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Carved Teak Wooden Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-carved-teak-wooden-dining-chair/Carved Teak Wooden Dining Chair.jpg",
    "images": [
      "assets/products/chairs/cat-carved-teak-wooden-dining-chair/Carved Teak Wooden Dining Chair.jpg"
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
    "img": "assets/products/cafe-chairs/charcoal-matte-stackable-dining-chair/charcoal_matte_stackable_dining_chair.png",
    "images": [
      "assets/products/cafe-chairs/charcoal-matte-stackable-dining-chair/charcoal_matte_stackable_dining_chair.png"
    ],
    "colors": []
  },
  {
    "id": "cat-cherry-wood-geometric-dining-chair",
    "name": "Cherry Wood Geometric Dining Chair",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cherry Wood Geometric Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-cherry-wood-geometric-dining-chair/cherry_wood_geometric_dining_chair.png",
    "images": [
      "assets/products/chairs/cat-cherry-wood-geometric-dining-chair/cherry_wood_geometric_dining_chair.png"
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
    "img": "assets/products/cafe-tables/chrome-cafe-pedestal-table-base/chrome-cafe-pedestal-table-base - Angle Perspective.png",
    "images": [
      "assets/products/cafe-tables/chrome-cafe-pedestal-table-base/chrome-cafe-pedestal-table-base - Angle Perspective.png",
      "assets/products/cafe-tables/chrome-cafe-pedestal-table-base/chrome-cafe-pedestal-table-base - Corner Detail.png",
      "assets/products/cafe-tables/chrome-cafe-pedestal-table-base/chrome-cafe-pedestal-table-base - Front View.png",
      "assets/products/cafe-tables/chrome-cafe-pedestal-table-base/chrome-cafe-pedestal-table-base - Side View.png",
      "assets/products/cafe-tables/chrome-cafe-pedestal-table-base/chrome-cafe-pedestal-table-base - Studio Showcase.png"
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
    "img": "assets/products/cafe-chairs/chrome-spindle-back-dining-chair-with-wooden-seat/Chrome Spindle Back Dining Chair with Wooden Seat.png",
    "images": [
      "assets/products/cafe-chairs/chrome-spindle-back-dining-chair-with-wooden-seat/Chrome Spindle Back Dining Chair with Wooden Seat.png"
    ],
    "colors": []
  },
  {
    "id": "chrome-wire-spindle-dining-chair",
    "name": "Chrome Wire Spindle Dining Chair",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Chrome Wire Spindle Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/chrome-wire-spindle-dining-chair/Chrome Spindle Chair - Angle Perspective.png",
    "images": [
      "assets/products/cafe-chairs/chrome-wire-spindle-dining-chair/Chrome Spindle Chair - Angle Perspective.png",
      "assets/products/cafe-chairs/chrome-wire-spindle-dining-chair/Chrome Spindle Chair - Front View.png"
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
    "img": "assets/products/sofas/cat-cognac-black-leather-sofa-set/Cognac & Black Leather Sofa Set.jpg",
    "images": [
      "assets/products/sofas/cat-cognac-black-leather-sofa-set/Cognac & Black Leather Sofa Set.jpg"
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
    "img": "assets/products/chairs/cat-cognac-leather-armchair-with-black-frame/Cognac Leather Armchair with Black Frame.jpg",
    "images": [
      "assets/products/chairs/cat-cognac-leather-armchair-with-black-frame/Cognac Leather Armchair with Black Frame.jpg"
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
    "img": "assets/products/cafe-chairs/crimson-red-sculptural-designer-chair/crimson_red_sculptural_designer_chair.png",
    "images": [
      "assets/products/cafe-chairs/crimson-red-sculptural-designer-chair/crimson_red_sculptural_designer_chair.png"
    ],
    "colors": []
  },
  {
    "id": "cube-modern-modular-table",
    "name": "Cube Modern Modular Table",
    "category": "cafe-tables",
    "type": "table",
    "material": "MDF / Metal",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cube Modern Modular Table combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/cube-modern-modular-table/Cube Modern Modular Table - Front View.png",
    "images": [
      "assets/products/cafe-tables/cube-modern-modular-table/Cube Modern Modular Table - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "da-70",
    "name": "DA-70 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Da Series Dining Chair Model 070 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/da-70/DA-70 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/da-70/DA-70 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "da-71",
    "name": "DA-71 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Da Series Dining Chair Model 604 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/da-71/DA-71 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/da-71/DA-71 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "da-72",
    "name": "DA-72 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Da Series Dining Chair Model 605 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/da-72/DA-72 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/da-72/DA-72 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "da-73",
    "name": "DA-73 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Da Series Dining Chair Model 606 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/da-73/DA-73 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/da-73/DA-73 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "da-74",
    "name": "DA-74 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Da Series Dining Chair Model 617 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/da-74/DA-74 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/da-74/DA-74 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "da-75",
    "name": "DA-75 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Da Series Dining Chair Model 618 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/da-75/DA-75 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/da-75/DA-75 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "cat-danish-teak-slatted-dining-chair",
    "name": "Danish Teak Slatted Dining Chair",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Danish Teak Slatted Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-danish-teak-slatted-dining-chair/danish_teak_slatted_dining_chair.png",
    "images": [
      "assets/products/chairs/cat-danish-teak-slatted-dining-chair/danish_teak_slatted_dining_chair.png"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-mahogany-wooden-dining-chair",
    "name": "Dark Mahogany Wooden Dining Chair",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Mahogany Wooden Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-dark-mahogany-wooden-dining-chair/Dark Mahogany Wooden Dining Chair.jpg",
    "images": [
      "assets/products/chairs/cat-dark-mahogany-wooden-dining-chair/Dark Mahogany Wooden Dining Chair.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-wood-frame-dining-chair-with-grey-seat",
    "name": "Dark Wood Frame Dining Chair With Grey Seat",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Wood Frame Dining Chair With Grey Seat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-dark-wood-frame-dining-chair-with-grey-seat/Dark Wood Frame Dining Chair with Grey Seat.jpg",
    "images": [
      "assets/products/chairs/cat-dark-wood-frame-dining-chair-with-grey-seat/Dark Wood Frame Dining Chair with Grey Seat.jpg"
    ],
    "colors": []
  },
  {
    "id": "dbc-151",
    "name": "DBC-151 Dining Chair",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbc Series Dining Chair Model 151 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dbc-151/DBC-151 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dbc-151/DBC-151 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dbc-152",
    "name": "DBC-152 Dining Chair",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbc Series Dining Chair Model 152 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dbc-152/DBC-152 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dbc-152/DBC-152 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dbc-153",
    "name": "DBC-153 Dining Chair",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbc Series Dining Chair Model 156 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dbc-153/DBC-153 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dbc-153/DBC-153 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dbc-154",
    "name": "DBC-154 Dining Chair",
    "category": "cafe-banquet-equipment",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbc Series Dining Chair Model 162 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-banquet-equipment/dbc-154/DBC-154 - Front View.png",
    "images": [
      "assets/products/cafe-banquet-equipment/dbc-154/DBC-154 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dbc-155",
    "name": "DBC-155 Dining Chair",
    "category": "cafe-banquet-equipment",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbc Series Dining Chair Model 163 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-banquet-equipment/dbc-155/DBC-155 - Front View.png",
    "images": [
      "assets/products/cafe-banquet-equipment/dbc-155/DBC-155 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dbc-156",
    "name": "DBC-156 Dining Chair",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbc Series Dining Chair Model 166 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dbc-156/DBC-156 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dbc-156/DBC-156 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dbc-157",
    "name": "DBC-157 Dining Chair",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbc Series Dining Chair Model 167 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dbc-157/DBC-157 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dbc-157/DBC-157 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dbc-158",
    "name": "DBC-158 Dining Chair",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbc Series Dining Chair Model 168 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dbc-158/DBC-158 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dbc-158/DBC-158 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dbc-159",
    "name": "DBC-159 Dining Chair",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbc Series Dining Chair Model 169 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dbc-159/DBC-159 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dbc-159/DBC-159 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dbc-160",
    "name": "DBC-160 Dining Chair",
    "category": "cafe-chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbc Series Dining Chair Model 170 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dbc-160/DBC-160 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dbc-160/DBC-160 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dbc-161",
    "name": "DBC-161 Dining Chair",
    "category": "cafe-banquet-equipment",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbc Series Dining Chair Model 171 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-banquet-equipment/dbc-161/DBC-161 - Front View.png",
    "images": [
      "assets/products/cafe-banquet-equipment/dbc-161/DBC-161 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dbc-162",
    "name": "DBC-162 Dining Chair",
    "category": "cafe-banquet-equipment",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbc Series Dining Chair Model 172 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-banquet-equipment/dbc-162/DBC-162 - Front View.png",
    "images": [
      "assets/products/cafe-banquet-equipment/dbc-162/DBC-162 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dbc-163",
    "name": "DBC-163 Dining Chair",
    "category": "cafe-banquet-equipment",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbc Series Dining Chair Model 173 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-banquet-equipment/dbc-163/DBC-163 - Front View.png",
    "images": [
      "assets/products/cafe-banquet-equipment/dbc-163/DBC-163 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dbc-164",
    "name": "DBC-164 Dining Chair",
    "category": "cafe-banquet-equipment",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbc Series Dining Chair Model 174 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-banquet-equipment/dbc-164/DBC-164 - Front View.png",
    "images": [
      "assets/products/cafe-banquet-equipment/dbc-164/DBC-164 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dbc-165",
    "name": "DBC-165 Dining Chair",
    "category": "cafe-banquet-equipment",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dbc Series Dining Chair Model 175 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-banquet-equipment/dbc-165/DBC-165 - Front View.png",
    "images": [
      "assets/products/cafe-banquet-equipment/dbc-165/DBC-165 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-79",
    "name": "DMC-79 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 079 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-79/DMC-79 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-79/DMC-79 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-80",
    "name": "DMC-80 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 080 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-80/DMC-80 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-80/DMC-80 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-81",
    "name": "DMC-81 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 083 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-81/DMC-81 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-81/DMC-81 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-82",
    "name": "DMC-82 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 085 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-82/DMC-82 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-82/DMC-82 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-83",
    "name": "DMC-83 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 088 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-83/DMC-83 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-83/DMC-83 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-84",
    "name": "DMC-84 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 091 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-84/DMC-84 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-84/DMC-84 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-85",
    "name": "DMC-85 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 093 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-85/DMC-85 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-85/DMC-85 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-86",
    "name": "DMC-86 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 098 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-86/DMC-86 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-86/DMC-86 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-87",
    "name": "DMC-87 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 104 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-87/DMC-87 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-87/DMC-87 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-88",
    "name": "DMC-88 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 105 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-88/DMC-88 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-88/DMC-88 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-89",
    "name": "DMC-89 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 107 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-89/DMC-89 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-89/DMC-89 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-90",
    "name": "DMC-90 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 108 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-90/DMC-90 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-90/DMC-90 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-91",
    "name": "DMC-91 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 114 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-91/DMC-91 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-91/DMC-91 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-92",
    "name": "DMC-92 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 116 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-92/DMC-92 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-92/DMC-92 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-93",
    "name": "DMC-93 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 118 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-93/DMC-93 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-93/DMC-93 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-94",
    "name": "DMC-94 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 119 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-94/DMC-94 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-94/DMC-94 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-95",
    "name": "DMC-95 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 120 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-95/DMC-95 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-95/DMC-95 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-96",
    "name": "DMC-96 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 121 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-96/DMC-96 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-96/DMC-96 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-97",
    "name": "DMC-97 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 123 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-97/DMC-97 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-97/DMC-97 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-98",
    "name": "DMC-98 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 125 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-98/DMC-98 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-98/DMC-98 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-99",
    "name": "DMC-99 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 128 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-99/DMC-99 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-99/DMC-99 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-100",
    "name": "DMC-100 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 129 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-100/DMC-100 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-100/DMC-100 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-101",
    "name": "DMC-101 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 130 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-101/DMC-101 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-101/DMC-101 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-102",
    "name": "DMC-102 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 132 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-102/DMC-102 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-102/DMC-102 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-103",
    "name": "DMC-103 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 134 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-103/DMC-103 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-103/DMC-103 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-104",
    "name": "DMC-104 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 135 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-104/DMC-104 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-104/DMC-104 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-105",
    "name": "DMC-105 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 136 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-105/DMC-105 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-105/DMC-105 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-106",
    "name": "DMC-106 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 137 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-106/DMC-106 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-106/DMC-106 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-107",
    "name": "DMC-107 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 138 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-107/DMC-107 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-107/DMC-107 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-108",
    "name": "DMC-108 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 140 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-108/DMC-108 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-108/DMC-108 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-109",
    "name": "DMC-109 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 141 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-109/DMC-109 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-109/DMC-109 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-110",
    "name": "DMC-110 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 143 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-110/DMC-110 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-110/DMC-110 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-111",
    "name": "DMC-111 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 144 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-111/DMC-111 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-111/DMC-111 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-112",
    "name": "DMC-112 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 149 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-112/DMC-112 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-112/DMC-112 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-113",
    "name": "DMC-113 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 150 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-113/DMC-113 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-113/DMC-113 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-114",
    "name": "DMC-114 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 157 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-114/DMC-114 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-114/DMC-114 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-115",
    "name": "DMC-115 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 158 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-115/DMC-115 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-115/DMC-115 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-116",
    "name": "DMC-116 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 247 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-116/DMC-116 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-116/DMC-116 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-117",
    "name": "DMC-117 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 248 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-117/DMC-117 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-117/DMC-117 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-118",
    "name": "DMC-118 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 249 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-118/DMC-118 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-118/DMC-118 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-119",
    "name": "DMC-119 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 250 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-119/DMC-119 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-119/DMC-119 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-120",
    "name": "DMC-120 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 260 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-120/DMC-120 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-120/DMC-120 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-121",
    "name": "DMC-121 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 276 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-121/DMC-121 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-121/DMC-121 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-122",
    "name": "DMC-122 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 277 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-122/DMC-122 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-122/DMC-122 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "dmc-123",
    "name": "DMC-123 Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dmc Series Dining Chair Model 278 combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/dmc-123/DMC-123 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dmc-123/DMC-123 - Front View.png"
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
    "img": "assets/products/cafe-chairs/dpc-3/DPC-3 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dpc-3/DPC-3 - Front View.png"
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
    "img": "assets/products/cafe-chairs/dpc-4/DPC-4 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dpc-4/DPC-4 - Front View.png"
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
    "img": "assets/products/cafe-chairs/dpc-5/DPC-5 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dpc-5/DPC-5 - Front View.png"
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
    "img": "assets/products/cafe-chairs/dpc-6/DPC-6 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dpc-6/DPC-6 - Front View.png"
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
    "img": "assets/products/cafe-chairs/dpc-7/DPC-7 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dpc-7/DPC-7 - Front View.png"
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
    "img": "assets/products/cafe-chairs/dpc-8/DPC-8 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dpc-8/DPC-8 - Front View.png"
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
    "img": "assets/products/cafe-chairs/dpc-9/DPC-9 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dpc-9/DPC-9 - Front View.png"
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
    "img": "assets/products/cafe-chairs/dpc-10/DPC-10 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dpc-10/DPC-10 - Front View.png"
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
    "img": "assets/products/cafe-chairs/dpc-11/DPC-11 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dpc-11/DPC-11 - Front View.png"
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
    "img": "assets/products/cafe-chairs/dpc-12/DPC-12 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dpc-12/DPC-12 - Front View.png"
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
    "img": "assets/products/cafe-chairs/dpc-13/DPC-13 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dpc-13/DPC-13 - Front View.png"
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
    "img": "assets/products/cafe-chairs/dpc-14/DPC-14 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dpc-14/DPC-14 - Front View.png"
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
    "img": "assets/products/cafe-chairs/dpc-15/DPC-15 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dpc-15/DPC-15 - Front View.png"
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
    "img": "assets/products/cafe-chairs/dpc-16/DPC-16 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dpc-16/DPC-16 - Front View.png"
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
    "img": "assets/products/cafe-chairs/dpc-17/DPC-17 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dpc-17/DPC-17 - Front View.png"
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
    "img": "assets/products/cafe-chairs/dpc-18/DPC-18 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dpc-18/DPC-18 - Front View.png"
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
    "img": "assets/products/cafe-chairs/dwc-26/DWC-26 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dwc-26/DWC-26 - Front View.png"
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
    "img": "assets/products/cafe-chairs/dwc-27/DWC-27 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dwc-27/DWC-27 - Front View.png"
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
    "img": "assets/products/cafe-chairs/dwc-28/DWC-28 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dwc-28/DWC-28 - Front View.png"
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
    "img": "assets/products/cafe-chairs/dwc-29/DWC-29 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dwc-29/DWC-29 - Front View.png"
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
    "img": "assets/products/cafe-chairs/dwc-30/DWC-30 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dwc-30/DWC-30 - Front View.png"
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
    "img": "assets/products/cafe-chairs/dwc-31/DWC-31 - Front View.png",
    "images": [
      "assets/products/cafe-chairs/dwc-31/DWC-31 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "cat-espresso-ladderback-dining-chair",
    "name": "Espresso Ladderback Dining Chair",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Espresso Ladderback Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-espresso-ladderback-dining-chair/espresso_ladderback_dining_chair.png",
    "images": [
      "assets/products/chairs/cat-espresso-ladderback-dining-chair/espresso_ladderback_dining_chair.png"
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
    "img": "assets/products/cafe-chairs/faceted-gray-molded-dining-chair/faceted_gray_molded_dining_chair.png",
    "images": [
      "assets/products/cafe-chairs/faceted-gray-molded-dining-chair/faceted_gray_molded_dining_chair.png"
    ],
    "colors": []
  },
  {
    "id": "fire-black-spindle-dining-chair",
    "name": "Fire Black Spindle Dining Chair",
    "category": "cafe-chairs",
    "type": "chair",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Fire Black Spindle Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/fire-black-spindle-dining-chair/Fire Spindle Chair - Angle Perspective.png",
    "images": [
      "assets/products/cafe-chairs/fire-black-spindle-dining-chair/Fire Spindle Chair - Angle Perspective.png",
      "assets/products/cafe-chairs/fire-black-spindle-dining-chair/Fire Spindle Chair - Front View.png",
      "assets/products/cafe-chairs/fire-black-spindle-dining-chair/Fire Spindle Chair - Side View.png"
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
    "img": "assets/products/office-workstations/cat-futuristic-cantilever-executive-desk/futuristic_cantilever_executive_desk.png",
    "images": [
      "assets/products/office-workstations/cat-futuristic-cantilever-executive-desk/futuristic_cantilever_executive_desk.png"
    ],
    "colors": []
  },
  {
    "id": "cat-grey-patterned-fabric-dining-chair",
    "name": "Grey Patterned Fabric Dining Chair",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Grey Patterned Fabric Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-grey-patterned-fabric-dining-chair/Grey Patterned Fabric Dining Chair.jpg",
    "images": [
      "assets/products/chairs/cat-grey-patterned-fabric-dining-chair/Grey Patterned Fabric Dining Chair.jpg"
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
    "img": "assets/products/chairs/cat-grey-sculptural-armchair-with-black-frame/Grey Sculptural Armchair with Black Frame.jpg",
    "images": [
      "assets/products/chairs/cat-grey-sculptural-armchair-with-black-frame/Grey Sculptural Armchair with Black Frame.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-highback-wood-dining-chair-with-grey-cushion",
    "name": "Highback Wood Dining Chair With Grey Cushion",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Highback Wood Dining Chair With Grey Cushion combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-highback-wood-dining-chair-with-grey-cushion/Highback Wood Dining Chair with Grey Cushion.jpg",
    "images": [
      "assets/products/chairs/cat-highback-wood-dining-chair-with-grey-cushion/Highback Wood Dining Chair with Grey Cushion.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-light-oak-ladder-back-dining-chair-with-cream-seat",
    "name": "Light Oak Ladder Back Dining Chair With Cream Seat",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Light Oak Ladder Back Dining Chair With Cream Seat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-light-oak-ladder-back-dining-chair-with-cream-seat/Light Oak Ladder Back Dining Chair with Cream Seat.jpg",
    "images": [
      "assets/products/chairs/cat-light-oak-ladder-back-dining-chair-with-cream-seat/Light Oak Ladder Back Dining Chair with Cream Seat.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-light-wood-dining-chair-with-slatted-back",
    "name": "Light Wood Dining Chair With Slatted Back",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Light Wood Dining Chair With Slatted Back combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-light-wood-dining-chair-with-slatted-back/Light Wood Dining Chair with Slatted Back.jpg",
    "images": [
      "assets/products/chairs/cat-light-wood-dining-chair-with-slatted-back/Light Wood Dining Chair with Slatted Back.jpg"
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
    "img": "assets/products/cafe-chairs/lime-green-lattice-patio-chair/lime_green_lattice_patio_chair.png",
    "images": [
      "assets/products/cafe-chairs/lime-green-lattice-patio-chair/lime_green_lattice_patio_chair.png"
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
    "img": "assets/products/cafe-chairs/matte-black-sleek-molded-dining-chair/matte_black_sleek_molded_dining_chair.png",
    "images": [
      "assets/products/cafe-chairs/matte-black-sleek-molded-dining-chair/matte_black_sleek_molded_dining_chair.png"
    ],
    "colors": []
  },
  {
    "id": "cat-mid-century-teak-dining-chairs-row-with-tweed-seats",
    "name": "Mid Century Teak Dining Chairs Row With Tweed Seats",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Mid Century Teak Dining Chairs Row With Tweed Seats combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-mid-century-teak-dining-chairs-row-with-tweed-seats/Mid-Century Teak Dining Chairs Row with Tweed Seats.jpg",
    "images": [
      "assets/products/chairs/cat-mid-century-teak-dining-chairs-row-with-tweed-seats/Mid-Century Teak Dining Chairs Row with Tweed Seats.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-mid-century-teak-dining-chairs-set-with-blue-seats",
    "name": "Mid Century Teak Dining Chairs Set With Blue Seats",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Mid Century Teak Dining Chairs Set With Blue Seats combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-mid-century-teak-dining-chairs-set-with-blue-seats/Mid-Century Teak Dining Chairs Set with Blue Seats.jpg",
    "images": [
      "assets/products/chairs/cat-mid-century-teak-dining-chairs-set-with-blue-seats/Mid-Century Teak Dining Chairs Set with Blue Seats.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-mid-century-teak-dining-chairs-set-with-mustard-seats",
    "name": "Mid Century Teak Dining Chairs Set With Mustard Seats",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Mid Century Teak Dining Chairs Set With Mustard Seats combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-mid-century-teak-dining-chairs-set-with-mustard-seats/Mid-Century Teak Dining Chairs Set with Mustard Seats.jpg",
    "images": [
      "assets/products/chairs/cat-mid-century-teak-dining-chairs-set-with-mustard-seats/Mid-Century Teak Dining Chairs Set with Mustard Seats.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-mid-century-teak-dining-chairs-set-with-navy-seats",
    "name": "Mid Century Teak Dining Chairs Set With Navy Seats",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Mid Century Teak Dining Chairs Set With Navy Seats combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-mid-century-teak-dining-chairs-set-with-navy-seats/Mid-Century Teak Dining Chairs Set with Navy Seats.jpg",
    "images": [
      "assets/products/chairs/cat-mid-century-teak-dining-chairs-set-with-navy-seats/Mid-Century Teak Dining Chairs Set with Navy Seats.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-mid-century-teak-dining-chairs-set-with-navy-seats-b",
    "name": "Mid Century Teak Dining Chairs Set With Navy Seats B",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Mid Century Teak Dining Chairs Set With Navy Seats B combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-mid-century-teak-dining-chairs-set-with-navy-seats-b/Mid-Century Teak Dining Chairs Set with Navy Seats B.jpg",
    "images": [
      "assets/products/chairs/cat-mid-century-teak-dining-chairs-set-with-navy-seats-b/Mid-Century Teak Dining Chairs Set with Navy Seats B.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-midcentury-walnut-dining-chair-set",
    "name": "Midcentury Walnut Dining Chair Set",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Midcentury Walnut Dining Chair Set combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-midcentury-walnut-dining-chair-set/midcentury_walnut_dining_chair_set.png",
    "images": [
      "assets/products/chairs/cat-midcentury-walnut-dining-chair-set/midcentury_walnut_dining_chair_set.png"
    ],
    "colors": []
  },
  {
    "id": "cat-mission-oak-redvelvet-dining-chairs",
    "name": "Mission Oak Redvelvet Dining Chairs",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Mission Oak Redvelvet Dining Chairs combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-mission-oak-redvelvet-dining-chairs/mission_oak_redvelvet_dining_chairs.png",
    "images": [
      "assets/products/chairs/cat-mission-oak-redvelvet-dining-chairs/mission_oak_redvelvet_dining_chairs.png"
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
    "img": "assets/products/cafe-chairs/modern-black-molded-shell-wire-base-dining-chair/Black Molded Shell Wire Base Dining Chair.png",
    "images": [
      "assets/products/cafe-chairs/modern-black-molded-shell-wire-base-dining-chair/Black Molded Shell Wire Base Dining Chair.png"
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
    "img": "assets/products/cafe-chairs/modern-white-molded-shell-dark-wood-legs-dining-chair/White Molded Shell Dark Wood Legs Dining Chair.png",
    "images": [
      "assets/products/cafe-chairs/modern-white-molded-shell-dark-wood-legs-dining-chair/White Molded Shell Dark Wood Legs Dining Chair.png"
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
    "img": "assets/products/cafe-chairs/modern-white-molded-shell-wooden-eiffel-legs-dining-chair/White Molded Shell Wooden Eiffel Legs Dining Chair.png",
    "images": [
      "assets/products/cafe-chairs/modern-white-molded-shell-wooden-eiffel-legs-dining-chair/White Molded Shell Wooden Eiffel Legs Dining Chair.png"
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
    "img": "assets/products/cafe-chairs/nordic-black-and-wood-dining-chair/nordic_black_and_wood_dining_chair.png",
    "images": [
      "assets/products/cafe-chairs/nordic-black-and-wood-dining-chair/nordic_black_and_wood_dining_chair.png"
    ],
    "colors": []
  },
  {
    "id": "cat-oak-bluepad-slatted-dining-chair",
    "name": "Oak Bluepad Slatted Dining Chair",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Oak Bluepad Slatted Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-oak-bluepad-slatted-dining-chair/oak_bluepad_slatted_dining_chair.png",
    "images": [
      "assets/products/chairs/cat-oak-bluepad-slatted-dining-chair/oak_bluepad_slatted_dining_chair.png"
    ],
    "colors": []
  },
  {
    "id": "cat-oak-highback-slatted-dining-chair",
    "name": "Oak Highback Slatted Dining Chair",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Oak Highback Slatted Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-oak-highback-slatted-dining-chair/oak_highback_slatted_dining_chair.png",
    "images": [
      "assets/products/chairs/cat-oak-highback-slatted-dining-chair/oak_highback_slatted_dining_chair.png"
    ],
    "colors": []
  },
  {
    "id": "cat-oak-redpad-ladderback-dining-chair",
    "name": "Oak Redpad Ladderback Dining Chair",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Oak Redpad Ladderback Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-oak-redpad-ladderback-dining-chair/oak_redpad_ladderback_dining_chair.png",
    "images": [
      "assets/products/chairs/cat-oak-redpad-ladderback-dining-chair/oak_redpad_ladderback_dining_chair.png"
    ],
    "colors": []
  },
  {
    "id": "cat-oak-slatted-padded-dining-chair",
    "name": "Oak Slatted Padded Dining Chair",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Oak Slatted Padded Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-oak-slatted-padded-dining-chair/oak_slatted_padded_dining_chair.png",
    "images": [
      "assets/products/chairs/cat-oak-slatted-padded-dining-chair/oak_slatted_padded_dining_chair.png"
    ],
    "colors": []
  },
  {
    "id": "cat-oak-xback-dining-chair",
    "name": "Oak Xback Dining Chair",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Oak Xback Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-oak-xback-dining-chair/oak_xback_dining_chair.png",
    "images": [
      "assets/products/chairs/cat-oak-xback-dining-chair/oak_xback_dining_chair.png"
    ],
    "colors": []
  },
  {
    "id": "cat-pair-of-dark-wood-dining-chairs-with-black-leather",
    "name": "Pair Of Dark Wood Dining Chairs With Black Leather",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Pair Of Dark Wood Dining Chairs With Black Leather combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-pair-of-dark-wood-dining-chairs-with-black-leather/Pair of Dark Wood Dining Chairs with Black Leather.jpg",
    "images": [
      "assets/products/chairs/cat-pair-of-dark-wood-dining-chairs-with-black-leather/Pair of Dark Wood Dining Chairs with Black Leather.jpg"
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
    "img": "assets/products/chairs/cat-pair-of-mustard-yellow-armchairs-with-black-frame/Pair of Mustard Yellow Armchairs with Black Frame.jpg",
    "images": [
      "assets/products/chairs/cat-pair-of-mustard-yellow-armchairs-with-black-frame/Pair of Mustard Yellow Armchairs with Black Frame.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-pair-of-teak-dining-chairs-with-green-seats",
    "name": "Pair Of Teak Dining Chairs With Green Seats",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Pair Of Teak Dining Chairs With Green Seats combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-pair-of-teak-dining-chairs-with-green-seats/Pair of Teak Dining Chairs with Green Seats - Front View.jpg",
    "images": [
      "assets/products/chairs/cat-pair-of-teak-dining-chairs-with-green-seats/Pair of Teak Dining Chairs with Green Seats - Front View.jpg",
      "assets/products/chairs/cat-pair-of-teak-dining-chairs-with-green-seats/Pair of Teak Dining Chairs with Green Seats - Side View.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-pair-of-teak-dining-chairs-with-turquoise-seats",
    "name": "Pair Of Teak Dining Chairs With Turquoise Seats",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Pair Of Teak Dining Chairs With Turquoise Seats combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-pair-of-teak-dining-chairs-with-turquoise-seats/Pair of Teak Dining Chairs with Turquoise Seats.jpg",
    "images": [
      "assets/products/chairs/cat-pair-of-teak-dining-chairs-with-turquoise-seats/Pair of Teak Dining Chairs with Turquoise Seats.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-row-of-4-teak-dining-chairs-with-black-seats",
    "name": "Row Of 4 Teak Dining Chairs With Black Seats",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Row Of 4 Teak Dining Chairs With Black Seats combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-row-of-4-teak-dining-chairs-with-black-seats/Row of 4 Teak Dining Chairs with Black Seats.jpg",
    "images": [
      "assets/products/chairs/cat-row-of-4-teak-dining-chairs-with-black-seats/Row of 4 Teak Dining Chairs with Black Seats.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-row-of-6-teak-dining-chairs-with-grey-seats-b",
    "name": "Row Of 6 Teak Dining Chairs With Grey Seats B",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Row Of 6 Teak Dining Chairs With Grey Seats B combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-row-of-6-teak-dining-chairs-with-grey-seats-b/Row of 6 Teak Dining Chairs with Grey Seats B.jpg",
    "images": [
      "assets/products/chairs/cat-row-of-6-teak-dining-chairs-with-grey-seats-b/Row of 6 Teak Dining Chairs with Grey Seats B.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-row-of-8-teak-dining-chairs-with-grey-seats",
    "name": "Row Of 8 Teak Dining Chairs With Grey Seats",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Row Of 8 Teak Dining Chairs With Grey Seats combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-row-of-8-teak-dining-chairs-with-grey-seats/Row of 8 Teak Dining Chairs with Grey Seats.jpg",
    "images": [
      "assets/products/chairs/cat-row-of-8-teak-dining-chairs-with-grey-seats/Row of 8 Teak Dining Chairs with Grey Seats.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-row-of-teak-dining-chairs-with-beige-seats",
    "name": "Row Of Teak Dining Chairs With Beige Seats",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Row Of Teak Dining Chairs With Beige Seats combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-row-of-teak-dining-chairs-with-beige-seats/Row of Teak Dining Chairs with Beige Seats.jpg",
    "images": [
      "assets/products/chairs/cat-row-of-teak-dining-chairs-with-beige-seats/Row of Teak Dining Chairs with Beige Seats.jpg"
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
    "img": "assets/products/cafe-chairs/rust-geometric-molded-chair/rust_geometric_molded_chair.png",
    "images": [
      "assets/products/cafe-chairs/rust-geometric-molded-chair/rust_geometric_molded_chair.png"
    ],
    "colors": []
  },
  {
    "id": "cat-rustic-solid-wood-dining-chair",
    "name": "Rustic Solid Wood Dining Chair",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Rustic Solid Wood Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-rustic-solid-wood-dining-chair/Rustic Solid Wood Dining Chair.jpg",
    "images": [
      "assets/products/chairs/cat-rustic-solid-wood-dining-chair/Rustic Solid Wood Dining Chair.jpg"
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
    "img": "assets/products/cafe-tables/scandinavian-table-base-black-cross-frame-with-wooden-legs/Scandinavian Table Base Black Cross Frame with Wooden Legs.png",
    "images": [
      "assets/products/cafe-tables/scandinavian-table-base-black-cross-frame-with-wooden-legs/Scandinavian Table Base Black Cross Frame with Wooden Legs.png"
    ],
    "colors": []
  },
  {
    "id": "cat-scandinavian-walnut-dining-chair",
    "name": "Scandinavian Walnut Dining Chair",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Scandinavian Walnut Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-scandinavian-walnut-dining-chair/Scandinavian Walnut Dining Chair.jpg",
    "images": [
      "assets/products/chairs/cat-scandinavian-walnut-dining-chair/Scandinavian Walnut Dining Chair.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-scandinavian-wood-dining-chair-with-sage-cushion",
    "name": "Scandinavian Wood Dining Chair With Sage Cushion",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Scandinavian Wood Dining Chair With Sage Cushion combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-scandinavian-wood-dining-chair-with-sage-cushion/Scandinavian Wood Dining Chair with Sage Cushion.jpg",
    "images": [
      "assets/products/chairs/cat-scandinavian-wood-dining-chair-with-sage-cushion/Scandinavian Wood Dining Chair with Sage Cushion.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-sculptural-walnut-dining-chair-with-white-seat",
    "name": "Sculptural Walnut Dining Chair With White Seat",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Sculptural Walnut Dining Chair With White Seat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-sculptural-walnut-dining-chair-with-white-seat/Sculptural Walnut Dining Chair with White Seat.jpg",
    "images": [
      "assets/products/chairs/cat-sculptural-walnut-dining-chair-with-white-seat/Sculptural Walnut Dining Chair with White Seat.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-sculptural-wood-dining-chair-with-cream-cushion",
    "name": "Sculptural Wood Dining Chair With Cream Cushion",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Sculptural Wood Dining Chair With Cream Cushion combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-sculptural-wood-dining-chair-with-cream-cushion/Sculptural Wood Dining Chair with Cream Cushion.jpg",
    "images": [
      "assets/products/chairs/cat-sculptural-wood-dining-chair-with-cream-cushion/Sculptural Wood Dining Chair with Cream Cushion.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-set-of-6-teak-dining-chairs-with-brown-seats",
    "name": "Set Of 6 Teak Dining Chairs With Brown Seats",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Set Of 6 Teak Dining Chairs With Brown Seats combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-set-of-6-teak-dining-chairs-with-brown-seats/Set of 6 Teak Dining Chairs with Brown Seats.jpg",
    "images": [
      "assets/products/chairs/cat-set-of-6-teak-dining-chairs-with-brown-seats/Set of 6 Teak Dining Chairs with Brown Seats.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-set-of-6-teak-dining-chairs-with-olive-green-seats",
    "name": "Set Of 6 Teak Dining Chairs With Olive Green Seats",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Set Of 6 Teak Dining Chairs With Olive Green Seats combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-set-of-6-teak-dining-chairs-with-olive-green-seats/Set of 6 Teak Dining Chairs with Olive Green Seats.jpg",
    "images": [
      "assets/products/chairs/cat-set-of-6-teak-dining-chairs-with-olive-green-seats/Set of 6 Teak Dining Chairs with Olive Green Seats.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-set-of-teak-dining-chairs-with-blue-upholstery",
    "name": "Set Of Teak Dining Chairs With Blue Upholstery",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Set Of Teak Dining Chairs With Blue Upholstery combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-set-of-teak-dining-chairs-with-blue-upholstery/Set of Teak Dining Chairs with Blue Upholstery.jpg",
    "images": [
      "assets/products/chairs/cat-set-of-teak-dining-chairs-with-blue-upholstery/Set of Teak Dining Chairs with Blue Upholstery.jpg"
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
    "img": "assets/products/cafe-chairs/stainless-steel-ladder-back-dining-chair/Stainless Steel Ladder Back Dining Chair.png",
    "images": [
      "assets/products/cafe-chairs/stainless-steel-ladder-back-dining-chair/Stainless Steel Ladder Back Dining Chair.png"
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
    "img": "assets/products/cafe-chairs/sweden-orange-plastic-ergonomic-chair/Sweden Orange Chair - Angle Perspective.png",
    "images": [
      "assets/products/cafe-chairs/sweden-orange-plastic-ergonomic-chair/Sweden Orange Chair - Angle Perspective.png",
      "assets/products/cafe-chairs/sweden-orange-plastic-ergonomic-chair/Sweden Orange Chair - Front View.png"
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
    "img": "assets/products/cafe-chairs/sweedan/Sweedan - Front View.png",
    "images": [
      "assets/products/cafe-chairs/sweedan/Sweedan - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "cat-teak-and-cane-midcentury-dining-chair",
    "name": "Teak And Cane Midcentury Dining Chair",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Teak And Cane Midcentury Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-teak-and-cane-midcentury-dining-chair/teak_and_cane_midcentury_dining_chair.png",
    "images": [
      "assets/products/chairs/cat-teak-and-cane-midcentury-dining-chair/teak_and_cane_midcentury_dining_chair.png"
    ],
    "colors": []
  },
  {
    "id": "cat-teak-dining-chair-with-blue-upholstery",
    "name": "Teak Dining Chair With Blue Upholstery",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Teak Dining Chair With Blue Upholstery combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-teak-dining-chair-with-blue-upholstery/Teak Dining Chair with Blue Upholstery.jpg",
    "images": [
      "assets/products/chairs/cat-teak-dining-chair-with-blue-upholstery/Teak Dining Chair with Blue Upholstery.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-teak-dining-chair-with-green-upholstery",
    "name": "Teak Dining Chair With Green Upholstery",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Teak Dining Chair With Green Upholstery combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-teak-dining-chair-with-green-upholstery/Teak Dining Chair with Green Upholstery.jpg",
    "images": [
      "assets/products/chairs/cat-teak-dining-chair-with-green-upholstery/Teak Dining Chair with Green Upholstery.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-teak-dining-chair-with-grey-cushion-b",
    "name": "Teak Dining Chair With Grey Cushion B",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Teak Dining Chair With Grey Cushion B combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-teak-dining-chair-with-grey-cushion-b/Teak Dining Chair with Grey Cushion B.jpg",
    "images": [
      "assets/products/chairs/cat-teak-dining-chair-with-grey-cushion-b/Teak Dining Chair with Grey Cushion B.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-teak-dining-chair-with-yellow-velvet-seat",
    "name": "Teak Dining Chair With Yellow Velvet Seat",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Teak Dining Chair With Yellow Velvet Seat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-teak-dining-chair-with-yellow-velvet-seat/Teak Dining Chair with Yellow Velvet Seat.jpg",
    "images": [
      "assets/products/chairs/cat-teak-dining-chair-with-yellow-velvet-seat/Teak Dining Chair with Yellow Velvet Seat.jpg"
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
    "img": "assets/products/wooden-couches/cat-teak-frame-loveseat-sofa-with-black-leather/Teak Frame Loveseat Sofa with Black Leather.jpg",
    "images": [
      "assets/products/wooden-couches/cat-teak-frame-loveseat-sofa-with-black-leather/Teak Frame Loveseat Sofa with Black Leather.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-teak-highslat-dining-chair",
    "name": "Teak Highslat Dining Chair",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Teak Highslat Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-teak-highslat-dining-chair/teak_highslat_dining_chair.png",
    "images": [
      "assets/products/chairs/cat-teak-highslat-dining-chair/teak_highslat_dining_chair.png"
    ],
    "colors": []
  },
  {
    "id": "cat-teak-ladder-back-dining-chair-with-tweed-seat",
    "name": "Teak Ladder Back Dining Chair With Tweed Seat",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Teak Ladder Back Dining Chair With Tweed Seat combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-teak-ladder-back-dining-chair-with-tweed-seat/Teak Ladder Back Dining Chair with Tweed Seat.jpg",
    "images": [
      "assets/products/chairs/cat-teak-ladder-back-dining-chair-with-tweed-seat/Teak Ladder Back Dining Chair with Tweed Seat.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-teak-ladderback-dining-chair",
    "name": "Teak Ladderback Dining Chair",
    "category": "chairs",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Teak Ladderback Dining Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-teak-ladderback-dining-chair/teak_ladderback_dining_chair.png",
    "images": [
      "assets/products/chairs/cat-teak-ladderback-dining-chair/teak_ladderback_dining_chair.png"
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
    "img": "assets/products/chairs/cat-teak-slatted-garden-chair/teak_slatted_garden_chair.png",
    "images": [
      "assets/products/chairs/cat-teak-slatted-garden-chair/teak_slatted_garden_chair.png"
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
    "img": "assets/products/office-workstations/cat-walnut-black-compact-writing-desk/walnut_black_compact_writing_desk.png",
    "images": [
      "assets/products/office-workstations/cat-walnut-black-compact-writing-desk/walnut_black_compact_writing_desk.png"
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
    "img": "assets/products/office-workstations/walnut-credenza-executive-desk/walnut-credenza-executive-desk.png",
    "images": [
      "assets/products/office-workstations/walnut-credenza-executive-desk/walnut-credenza-executive-desk.png"
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
    "img": "assets/products/office-workstations/cat-walnut-veneer-black-executive-desk/walnut_veneer_black_executive_desk.png",
    "images": [
      "assets/products/office-workstations/cat-walnut-veneer-black-executive-desk/walnut_veneer_black_executive_desk.png"
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
    "img": "assets/products/cafe-chairs/white-molded-scandi-dining-chair/white_molded_scandi_dining_chair.png",
    "images": [
      "assets/products/cafe-chairs/white-molded-scandi-dining-chair/white_molded_scandi_dining_chair.png"
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
    "img": "assets/products/cafe-chairs/chronos/CHRONOS_2.png",
    "badge": "New",
    "description": "The CHRONOS Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, Green or Yellow, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/cafe-chairs/chronos/CHRONOS_2.png",
      "assets/products/cafe-chairs/chronos/CHRONOS_3.png"
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
    "img": "assets/products/cafe-chairs/ola/OLA.png",
    "badge": "",
    "description": "The OLA Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Green or Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/cafe-chairs/ola/OLA.png",
      "assets/products/cafe-chairs/ola/OLA_2.png",
      "assets/products/cafe-chairs/ola/OLA_3.png"
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
    "img": "assets/products/cafe-chairs/onyx/ONYX.png",
    "badge": "",
    "description": "The ONYX Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Red, Blue, Yellow, White or Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/cafe-chairs/onyx/ONYX.png",
      "assets/products/cafe-chairs/onyx/ONYX_2.png",
      "assets/products/cafe-chairs/onyx/ONYX_3.png",
      "assets/products/cafe-chairs/onyx/ONYX_4.png",
      "assets/products/cafe-chairs/onyx/ONYX_5.png",
      "assets/products/cafe-chairs/onyx/ONYX_6.png"
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
    "img": "assets/products/mattresses/rubco-onyx-mattress/rubco_onyx_mattress.jpg",
    "images": [
      "assets/products/mattresses/rubco-onyx-mattress/rubco_onyx_mattress.jpg",
      "assets/products/mattresses/rubco-onyx-mattress/rubco_onyx_mattress_1.jpg",
      "assets/products/mattresses/rubco-onyx-mattress/rubco_onyx_mattress_2.jpg"
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
    "img": "assets/products/office-chairs/stelle/STELLE.png",
    "badge": "New",
    "description": "The STELLE Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Brown, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/stelle/STELLE.png",
      "assets/products/office-chairs/stelle/STELLE_2.png",
      "assets/products/office-chairs/stelle/STELLE_3.png"
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
    "img": "assets/products/office-chairs/stelle---stm/Stelle _ STM - 301.png",
    "images": [
      "assets/products/office-chairs/stelle---stm/Stelle _ STM - 301.png",
      "assets/products/office-chairs/stelle---stm/Stelle _ STM -101.png",
      "assets/products/office-chairs/stelle---stm/Stelle _ STM -201.png",
      "assets/products/office-chairs/stelle---stm/Stelle _ STM -201_2.png"
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
    "img": "assets/products/office-chairs/stelle---stz/Stelle _ STZ - 101.png",
    "images": [
      "assets/products/office-chairs/stelle---stz/Stelle _ STZ - 101.png",
      "assets/products/office-chairs/stelle---stz/Stelle _ STZ - 101_2.png",
      "assets/products/office-chairs/stelle---stz/Stelle _ STZ - 201.png",
      "assets/products/office-chairs/stelle---stz/Stelle _ STZ - 301.png"
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
    "img": "assets/products/cafe-chairs/zest/ZEST.png",
    "badge": "",
    "description": "The ZEST Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Blue or Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/cafe-chairs/zest/ZEST.png",
      "assets/products/cafe-chairs/zest/ZEST_2.png"
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
    "img": "assets/products/cafe-tables/convertible-multi-functional-table/Convertible Multi Functional Table - Front View.png",
    "images": [
      "assets/products/cafe-tables/convertible-multi-functional-table/Convertible Multi Functional Table - Front View.png"
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
    "img": "assets/products/office-workstations/cat-crescent-reception-counter/Crescent Reception Counter - Front View.png",
    "images": [
      "assets/products/office-workstations/cat-crescent-reception-counter/Crescent Reception Counter - Front View.png"
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
    "img": "assets/products/cafe-tables/dct-1001/DCT-1001 - Front View.png",
    "images": [
      "assets/products/cafe-tables/dct-1001/DCT-1001 - Front View.png"
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
    "img": "assets/products/cafe-tables/dct-1002/DCT-1002 - Front View.png",
    "images": [
      "assets/products/cafe-tables/dct-1002/DCT-1002 - Front View.png"
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
    "img": "assets/products/cafe-tables/dct-1003/DCT-1003 - Front View.png",
    "images": [
      "assets/products/cafe-tables/dct-1003/DCT-1003 - Front View.png"
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
    "img": "assets/products/cafe-tables/dct-1004/DCT-1004 - Front View.png",
    "images": [
      "assets/products/cafe-tables/dct-1004/DCT-1004 - Front View.png"
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
    "img": "assets/products/cafe-tables/dct-1005/DCT-1005 - Front View.png",
    "images": [
      "assets/products/cafe-tables/dct-1005/DCT-1005 - Front View.png"
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
    "img": "assets/products/cafe-tables/dct-1006/DCT-1006 - Front View.png",
    "images": [
      "assets/products/cafe-tables/dct-1006/DCT-1006 - Front View.png"
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
    "img": "assets/products/cafe-tables/dct-1007/DCT-1007 - Front View.png",
    "images": [
      "assets/products/cafe-tables/dct-1007/DCT-1007 - Front View.png"
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
    "img": "assets/products/cafe-tables/dct-1008/DCT-1008 - Front View.png",
    "images": [
      "assets/products/cafe-tables/dct-1008/DCT-1008 - Front View.png"
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
    "img": "assets/products/cafe-tables/dct-1009/DCT-1009 - Front View.png",
    "images": [
      "assets/products/cafe-tables/dct-1009/DCT-1009 - Front View.png"
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
    "img": "assets/products/cafe-tables/dct-1010/DCT-1010 - Front View.png",
    "images": [
      "assets/products/cafe-tables/dct-1010/DCT-1010 - Front View.png"
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
    "img": "assets/products/cafe-tables/dct-1011/DCT-1011 - Front View.png",
    "images": [
      "assets/products/cafe-tables/dct-1011/DCT-1011 - Front View.png"
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
    "img": "assets/products/cafe-tables/dct-1012/DCT-1012 - Front View.png",
    "images": [
      "assets/products/cafe-tables/dct-1012/DCT-1012 - Front View.png"
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
    "img": "assets/products/cafe-tables/dct-1013/DCT-1013 - Front View.png",
    "images": [
      "assets/products/cafe-tables/dct-1013/DCT-1013 - Front View.png"
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
    "img": "assets/products/cafe-tables/dct-1014/DCT-1014 - Front View.png",
    "images": [
      "assets/products/cafe-tables/dct-1014/DCT-1014 - Front View.png"
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
    "img": "assets/products/cafe-tables/dct-1015/DCT-1015 - Front View.png",
    "images": [
      "assets/products/cafe-tables/dct-1015/DCT-1015 - Front View.png"
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
    "img": "assets/products/cafe-tables/dct-1016/DCT-1016 - Front View.png",
    "images": [
      "assets/products/cafe-tables/dct-1016/DCT-1016 - Front View.png"
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
    "img": "assets/products/cafe-tables/dct-1017/DCT-1017 - Front View.png",
    "images": [
      "assets/products/cafe-tables/dct-1017/DCT-1017 - Front View.png"
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
    "img": "assets/products/cafe-tables/dct-1018/DCT-1018 - Front View.png",
    "images": [
      "assets/products/cafe-tables/dct-1018/DCT-1018 - Front View.png"
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
    "img": "assets/products/cafe-tables/dct-1019/DCT-1019 - Front View.png",
    "images": [
      "assets/products/cafe-tables/dct-1019/DCT-1019 - Front View.png"
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
    "img": "assets/products/cafe-tables/dct-1020/DCT-1020 - Front View.png",
    "images": [
      "assets/products/cafe-tables/dct-1020/DCT-1020 - Front View.png"
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
    "img": "assets/products/cafe-tables/dct-1021/DCT-1021 - Front View.png",
    "images": [
      "assets/products/cafe-tables/dct-1021/DCT-1021 - Front View.png"
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
    "img": "assets/products/cafe-tables/dct-1022/DCT-1022 - Front View.png",
    "images": [
      "assets/products/cafe-tables/dct-1022/DCT-1022 - Front View.png"
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
    "img": "assets/products/cafe-tables/dct-1023/DCT-1023 - Front View.png",
    "images": [
      "assets/products/cafe-tables/dct-1023/DCT-1023 - Front View.png"
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
    "img": "assets/products/cafe-tables/dct-1024/DCT-1024 - Front View.png",
    "images": [
      "assets/products/cafe-tables/dct-1024/DCT-1024 - Front View.png"
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
    "img": "assets/products/cafe-tables/dct-1025/DCT-1025 - Front View.png",
    "images": [
      "assets/products/cafe-tables/dct-1025/DCT-1025 - Front View.png"
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
    "img": "assets/products/cafe-tables/dct-1026/DCT-1026 - Front View.png",
    "images": [
      "assets/products/cafe-tables/dct-1026/DCT-1026 - Front View.png"
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
    "img": "assets/products/cafe-tables/dct-1027/DCT-1027 - Front View.png",
    "images": [
      "assets/products/cafe-tables/dct-1027/DCT-1027 - Front View.png"
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
    "img": "assets/products/cafe-tables/dct-1028/DCT-1028 - Front View.png",
    "images": [
      "assets/products/cafe-tables/dct-1028/DCT-1028 - Front View.png"
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
    "img": "assets/products/cafe-tables/dct-1029/DCT-1029 - Front View.png",
    "images": [
      "assets/products/cafe-tables/dct-1029/DCT-1029 - Front View.png"
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
    "img": "assets/products/cafe-tables/dct-1030/DCT-1030 - Front View.png",
    "images": [
      "assets/products/cafe-tables/dct-1030/DCT-1030 - Front View.png"
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
    "img": "assets/products/cafe-tables/dct-1031/DCT-1031 - Front View.png",
    "images": [
      "assets/products/cafe-tables/dct-1031/DCT-1031 - Front View.png"
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
    "img": "assets/products/cafe-tables/dct-1032/DCT-1032 - Front View.png",
    "images": [
      "assets/products/cafe-tables/dct-1032/DCT-1032 - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "de",
    "name": "De",
    "category": "cafe-tables",
    "type": "cafe",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The De combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-tables/de/De - Front View.png",
    "images": [
      "assets/products/cafe-tables/de/De - Front View.png"
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
    "img": "assets/products/cafe-tables/mobile-flip-top-round-table/Mobile Flip Top Round Table - Front View.png",
    "images": [
      "assets/products/cafe-tables/mobile-flip-top-round-table/Mobile Flip Top Round Table - Front View.png"
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
    "img": "assets/products/cafe-tables/mobile-round-folding-table/Mobile Round Folding Table - Front View.png",
    "images": [
      "assets/products/cafe-tables/mobile-round-folding-table/Mobile Round Folding Table - Front View.png"
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
    "img": "assets/products/cafe-tables/white-round-folding-conference-table/white_round_folding_conference_table.png",
    "images": [
      "assets/products/cafe-tables/white-round-folding-conference-table/white_round_folding_conference_table.png"
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
    "img": "assets/products/cafe-tables/de_grid/De_Grid_01.png",
    "images": [
      "assets/products/cafe-tables/de_grid/De_Grid_01.png"
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
    "img": "assets/products/center-tables/cat-dark-walnut-coffee-table/Dark Walnut Coffee Table.jpg",
    "images": [
      "assets/products/center-tables/cat-dark-walnut-coffee-table/Dark Walnut Coffee Table.jpg"
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
    "img": "assets/products/cafe-tables/geometric-chrome-nesting-console-tables/Geometric Chrome Nesting Tables - Front View.png",
    "images": [
      "assets/products/cafe-tables/geometric-chrome-nesting-console-tables/Geometric Chrome Nesting Tables - Front View.png"
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
    "img": "assets/products/corner-sofas/cat-large-cream-lsectional-with-coffee-table/large_cream_lsectional_with_coffee_table.png",
    "images": [
      "assets/products/corner-sofas/cat-large-cream-lsectional-with-coffee-table/large_cream_lsectional_with_coffee_table.png"
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
    "img": "assets/products/center-tables/lmw-035/LMW-035.png",
    "badge": "",
    "description": "The LMW-035 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Red colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-035/LMW-035.png"
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
    "img": "assets/products/center-tables/lmw-036/LMW-036.png",
    "badge": "",
    "description": "The LMW-036 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Brown colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-036/LMW-036.png"
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
    "img": "assets/products/center-tables/lmw-037/LMW-037.png",
    "badge": "New",
    "description": "The LMW-037 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Brown colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-037/LMW-037.png"
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
    "img": "assets/products/center-tables/lmw-038/LMW-038.png",
    "badge": "",
    "description": "The LMW-038 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Brown colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-038/LMW-038.png"
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
    "img": "assets/products/center-tables/lmw-039/LMW-039_2.png",
    "badge": "",
    "description": "The LMW-039 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Grey or Brown colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-039/LMW-039_2.png"
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
    "img": "assets/products/center-tables/lmw-040/LMW-040.png",
    "badge": "Premium",
    "description": "The LMW-040 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Red colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-040/LMW-040.png"
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
    "img": "assets/products/center-tables/lmw-041/LMW-041_2.png",
    "badge": "",
    "description": "The LMW-041 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Grey or Brown colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-041/LMW-041_2.png"
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
    "img": "assets/products/center-tables/lmw-042/LMW-042.png",
    "badge": "",
    "description": "The LMW-042 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Brown colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-042/LMW-042.png"
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
    "img": "assets/products/center-tables/lmw-043/LMW-043.png",
    "badge": "",
    "description": "The LMW-043 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Red colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-043/LMW-043.png"
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
    "img": "assets/products/center-tables/lmw-044/LMW-044.png",
    "badge": "",
    "description": "The LMW-044 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Red colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-044/LMW-044.png"
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
    "img": "assets/products/center-tables/lmw-045/LMW-045.png",
    "badge": "",
    "description": "The LMW-045 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Red colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-045/LMW-045.png"
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
    "img": "assets/products/center-tables/lmw-046/LMW-046.png",
    "badge": "",
    "description": "The LMW-046 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Brown colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-046/LMW-046.png"
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
    "img": "assets/products/center-tables/lmw-047/LMW-047.png",
    "badge": "",
    "description": "The LMW-047 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Brown colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-047/LMW-047.png"
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
    "img": "assets/products/center-tables/lmw-048/LMW-048.png",
    "badge": "",
    "description": "The LMW-048 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Red colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-048/LMW-048.png"
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
    "img": "assets/products/center-tables/lmw-049/LMW-049.png",
    "badge": "Bestseller",
    "description": "The LMW-049 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Brown colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-049/LMW-049.png"
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
    "img": "assets/products/center-tables/lmw-050/LMW-050.png",
    "badge": "",
    "description": "The LMW-050 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Brown colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-050/LMW-050.png"
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
    "img": "assets/products/center-tables/lmw-051/LMW-051.png",
    "badge": "Bestseller",
    "description": "The LMW-051 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Brown colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-051/LMW-051.png"
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
    "img": "assets/products/center-tables/lmw-052/LMW-052.png",
    "badge": "",
    "description": "The LMW-052 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Red colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-052/LMW-052.png"
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
    "img": "assets/products/center-tables/lmw-053/LMW-053.png",
    "badge": "",
    "description": "The LMW-053 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined Brown colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-053/LMW-053.png"
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
    "img": "assets/products/center-tables/lmw-054/LMW-054_4.png",
    "badge": "",
    "description": "The LMW-054 side table is a sleek and functional addition to modern interiors. Crafted with premium wood and displaying a rich natural grain, it offers sturdy construction and versatile surface utility. An ideal accent piece, nightstand, or end table in a refined White, Grey or Brown colorway for your home or executive suite.",
    "images": [
      "assets/products/center-tables/lmw-054/LMW-054_4.png"
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
    "id": "cat-aludra-highback-chair",
    "name": "Aludra Highback Chair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Aludra Highback Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-aludra-highback-chair/Aludra Highback Chair - Front View.png",
    "images": [
      "assets/products/chairs/cat-aludra-highback-chair/Aludra Highback Chair - Front View.png"
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
    "img": "assets/products/chairs/cat-aquila-modern-swivel-chair/Aquila Modern Swivel Chair - Front View.png",
    "images": [
      "assets/products/chairs/cat-aquila-modern-swivel-chair/Aquila Modern Swivel Chair - Front View.png"
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
    "img": "assets/products/chairs/cat-architectural-walnut-chair-with-white-backrest/Architectural Walnut Chair with White Backrest.jpg",
    "images": [
      "assets/products/chairs/cat-architectural-walnut-chair-with-white-backrest/Architectural Walnut Chair with White Backrest.jpg"
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
    "img": "assets/products/chairs/cat-architectural-wood-armchair-with-cream-leather-seat/Architectural Wood Armchair with Cream Leather Seat.jpg",
    "images": [
      "assets/products/chairs/cat-architectural-wood-armchair-with-cream-leather-seat/Architectural Wood Armchair with Cream Leather Seat.jpg"
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
    "img": "assets/products/chairs/cat-architectural-wooden-armchair-with-dark-cushion/Architectural Wooden Armchair with Dark Cushion.jpg",
    "images": [
      "assets/products/chairs/cat-architectural-wooden-armchair-with-dark-cushion/Architectural Wooden Armchair with Dark Cushion.jpg"
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
    "img": "assets/products/chairs/cat-astrae-ergonomic-chair/Astrae Ergonomic Chair - Front View.png",
    "images": [
      "assets/products/chairs/cat-astrae-ergonomic-chair/Astrae Ergonomic Chair - Front View.png"
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
    "img": "assets/products/sofas/cat-aura-accent-chair/Aura Accent Chair - Front View.png",
    "images": [
      "assets/products/sofas/cat-aura-accent-chair/Aura Accent Chair - Front View.png"
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
    "img": "assets/products/recliners/cat-auriga-executive-chair/Auriga Executive Chair - Front View.png",
    "images": [
      "assets/products/recliners/cat-auriga-executive-chair/Auriga Executive Chair - Front View.png"
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
    "img": "assets/products/chairs/cat-bamboo-leather-armchair/Bamboo Leather Armchair - Single Seater.png",
    "images": [
      "assets/products/chairs/cat-bamboo-leather-armchair/Bamboo Leather Armchair - Single Seater.png"
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
    "img": "assets/products/chairs/cat-beige-boucle-fabric-accent-tub-chair/Beige Boucle Fabric Accent Tub Chair.jpg",
    "images": [
      "assets/products/chairs/cat-beige-boucle-fabric-accent-tub-chair/Beige Boucle Fabric Accent Tub Chair.jpg"
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
    "img": "assets/products/chairs/cat-beige-channeltufted-club-armchair/beige_channeltufted_club_armchair.png",
    "images": [
      "assets/products/chairs/cat-beige-channeltufted-club-armchair/beige_channeltufted_club_armchair.png"
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
    "img": "assets/products/chairs/cat-beige-velvet-club-chair-comboset/beige_velvet_club_chair_comboset.png",
    "images": [
      "assets/products/chairs/cat-beige-velvet-club-chair-comboset/beige_velvet_club_chair_comboset.png"
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
    "img": "assets/products/chairs/cat-blue-patterned-traditional-armchair/blue_patterned_traditional_armchair.png",
    "images": [
      "assets/products/chairs/cat-blue-patterned-traditional-armchair/blue_patterned_traditional_armchair.png"
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
    "img": "assets/products/chairs/cat-blue-plaid-upholstered-armchair/Blue Plaid Upholstered Armchair.jpg",
    "images": [
      "assets/products/chairs/cat-blue-plaid-upholstered-armchair/Blue Plaid Upholstered Armchair.jpg"
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
    "img": "assets/products/chairs/cat-botanical-floral-wingback-armchair/botanical_floral_wingback_armchair.png",
    "images": [
      "assets/products/chairs/cat-botanical-floral-wingback-armchair/botanical_floral_wingback_armchair.png"
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
    "img": "assets/products/chairs/cat-breeze-linen-armchair/Breeze Linen Armchair - Single Seater.png",
    "images": [
      "assets/products/chairs/cat-breeze-linen-armchair/Breeze Linen Armchair - Single Seater.png"
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
    "img": "assets/products/chairs/cat-brown-fabric-curved-back-barrel-chair/Brown Fabric Curved Back Barrel Chair.jpg",
    "images": [
      "assets/products/chairs/cat-brown-fabric-curved-back-barrel-chair/Brown Fabric Curved Back Barrel Chair.jpg"
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
    "img": "assets/products/chairs/cat-brume-sage-green-armchair/Brume Sage Green Armchair - Single Seater.png",
    "images": [
      "assets/products/chairs/cat-brume-sage-green-armchair/Brume Sage Green Armchair - Single Seater.png"
    ],
    "colors": []
  },
  {
    "id": "cat-calypso-charcoal-grey-velvet-armchair",
    "name": "Calypso Charcoal Grey Velvet Armchair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Calypso Charcoal Grey Velvet Armchair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-calypso-charcoal-grey-velvet-armchair/Calypso Charcoal Grey Velvet Armchair - Single Seater.png",
    "images": [
      "assets/products/chairs/cat-calypso-charcoal-grey-velvet-armchair/Calypso Charcoal Grey Velvet Armchair - Single Seater.png"
    ],
    "colors": []
  },
  {
    "id": "cat-carina-modern-chair",
    "name": "Carina Modern Chair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Carina Modern Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-carina-modern-chair/Carina Modern Chair - Front View.png",
    "images": [
      "assets/products/chairs/cat-carina-modern-chair/Carina Modern Chair - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "cat-cassiopeia-highback-executive-chair",
    "name": "Cassiopeia Highback Executive Chair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cassiopeia Highback Executive Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-cassiopeia-highback-executive-chair/Cassiopeia Highback Executive Chair - Angle Perspective.png",
    "images": [
      "assets/products/chairs/cat-cassiopeia-highback-executive-chair/Cassiopeia Highback Executive Chair - Angle Perspective.png",
      "assets/products/chairs/cat-cassiopeia-highback-executive-chair/Cassiopeia Highback Executive Chair - Front View.png"
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
    "img": "assets/products/chairs/cat-celene-accent-chair/Celene Accent Chair - Angle Perspective.png",
    "images": [
      "assets/products/chairs/cat-celene-accent-chair/Celene Accent Chair - Angle Perspective.png",
      "assets/products/chairs/cat-celene-accent-chair/Celene Accent Chair - Front View.png"
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
    "img": "assets/products/recliners/cat-centaurus-executive-chair/Centaurus Executive Chair - Angle Perspective.png",
    "images": [
      "assets/products/recliners/cat-centaurus-executive-chair/Centaurus Executive Chair - Angle Perspective.png",
      "assets/products/recliners/cat-centaurus-executive-chair/Centaurus Executive Chair - Front View.png",
      "assets/products/recliners/cat-centaurus-executive-chair/Centaurus Executive Chair - Side View.png"
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
    "img": "assets/products/chairs/cat-charcoal-grey-curved-barrel-accent-chair/Charcoal Grey Curved Barrel Accent Chair.jpg",
    "images": [
      "assets/products/chairs/cat-charcoal-grey-curved-barrel-accent-chair/Charcoal Grey Curved Barrel Accent Chair.jpg"
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
    "img": "assets/products/chairs/cat-charcoal-grey-fabric-armchair-with-tapered-legs/Charcoal Grey Fabric Armchair with Tapered Legs.jpg",
    "images": [
      "assets/products/chairs/cat-charcoal-grey-fabric-armchair-with-tapered-legs/Charcoal Grey Fabric Armchair with Tapered Legs.jpg"
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
    "img": "assets/products/chairs/cat-cirrus-textured-armchair/Cirrus Textured Armchair - Single Seater.png",
    "images": [
      "assets/products/chairs/cat-cirrus-textured-armchair/Cirrus Textured Armchair - Single Seater.png"
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
    "img": "assets/products/cafe-chairs/classic-gama-pvc-office-chair/Classic Gama PVC Office Chair - Front View.png",
    "images": [
      "assets/products/cafe-chairs/classic-gama-pvc-office-chair/Classic Gama PVC Office Chair - Front View.png"
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
    "img": "assets/products/cafe-chairs/classic-gama-wood-executive-chair/Classic Gama Wood Executive Chair - Front View.png",
    "images": [
      "assets/products/cafe-chairs/classic-gama-wood-executive-chair/Classic Gama Wood Executive Chair - Front View.png"
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
    "img": "assets/products/cafe-chairs/classic-smart-swivel-chair/Classic Smart Swivel Chair - Front View.png",
    "images": [
      "assets/products/cafe-chairs/classic-smart-swivel-chair/Classic Smart Swivel Chair - Front View.png"
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
    "img": "assets/products/cafe-chairs/classic-zeta-executive-chair/Classic Zeta Executive Chair - Front View.png",
    "images": [
      "assets/products/cafe-chairs/classic-zeta-executive-chair/Classic Zeta Executive Chair - Front View.png"
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
    "img": "assets/products/chairs/cat-cognac-leather-armchair-with-wood-frame/Cognac Leather Armchair with Wood Frame.jpg",
    "images": [
      "assets/products/chairs/cat-cognac-leather-armchair-with-wood-frame/Cognac Leather Armchair with Wood Frame.jpg"
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
    "img": "assets/products/chairs/cat-corsica-cream-velvet-armchair/Corsica Cream Velvet Armchair - Single Seater.png",
    "images": [
      "assets/products/chairs/cat-corsica-cream-velvet-armchair/Corsica Cream Velvet Armchair - Single Seater.png"
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
    "img": "assets/products/sofas/cat-corvus-office-chair/Corvus Office Chair - Front View.png",
    "images": [
      "assets/products/sofas/cat-corvus-office-chair/Corvus Office Chair - Front View.png"
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
    "img": "assets/products/chairs/cat-cosma-modern-armchair/Cosma Modern Armchair - Front View.png",
    "images": [
      "assets/products/chairs/cat-cosma-modern-armchair/Cosma Modern Armchair - Front View.png"
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
    "img": "assets/products/chairs/cat-cream-boucle-rounded-swivel-armchair/cream_boucle_rounded_swivel_armchair.png",
    "images": [
      "assets/products/chairs/cat-cream-boucle-rounded-swivel-armchair/cream_boucle_rounded_swivel_armchair.png"
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
    "img": "assets/products/chairs/cat-cream-linen-accent-armchair/cream_linen_accent_armchair.png",
    "images": [
      "assets/products/chairs/cat-cream-linen-accent-armchair/cream_linen_accent_armchair.png"
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
    "img": "assets/products/chairs/cat-cream-linen-armchair-and-ottoman-combo/cream_linen_armchair_and_ottoman_combo.png",
    "images": [
      "assets/products/chairs/cat-cream-linen-armchair-and-ottoman-combo/cream_linen_armchair_and_ottoman_combo.png"
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
    "img": "assets/products/chairs/cat-cream-textured-accent-club-chair/cream_textured_accent_club_chair.png",
    "images": [
      "assets/products/chairs/cat-cream-textured-accent-club-chair/cream_textured_accent_club_chair.png"
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
    "img": "assets/products/chairs/cat-cream-tufted-swivel-lounge-chair/cream_tufted_swivel_lounge_chair.png",
    "images": [
      "assets/products/chairs/cat-cream-tufted-swivel-lounge-chair/cream_tufted_swivel_lounge_chair.png"
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
    "img": "assets/products/chairs/cat-cream-velvet-tealcushion-accent-chair/cream_velvet_tealcushion_accent_chair.png",
    "images": [
      "assets/products/chairs/cat-cream-velvet-tealcushion-accent-chair/cream_velvet_tealcushion_accent_chair.png"
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
    "img": "assets/products/chairs/cat-cream-woven-deep-armchair/cream_woven_deep_armchair.png",
    "images": [
      "assets/products/chairs/cat-cream-woven-deep-armchair/cream_woven_deep_armchair.png"
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
    "img": "assets/products/chairs/cat-cressida-executive-swivel-chair/Cressida Executive Swivel Chair - Front View.png",
    "images": [
      "assets/products/chairs/cat-cressida-executive-swivel-chair/Cressida Executive Swivel Chair - Front View.png"
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
    "img": "assets/products/chairs/cat-curved-beige-fabric-accent-chair/Curved Beige Fabric Accent Chair.jpg",
    "images": [
      "assets/products/chairs/cat-curved-beige-fabric-accent-chair/Curved Beige Fabric Accent Chair.jpg"
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
    "img": "assets/products/chairs/cat-curved-grey-fabric-swivel-tub-chair/Curved Grey Fabric Swivel Tub Chair.jpg",
    "images": [
      "assets/products/chairs/cat-curved-grey-fabric-swivel-tub-chair/Curved Grey Fabric Swivel Tub Chair.jpg"
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
    "img": "assets/products/chairs/cat-curved-wood-frame-tub-chair-with-grey-cushion/Curved Wood Frame Tub Chair with Grey Cushion.jpg",
    "images": [
      "assets/products/chairs/cat-curved-wood-frame-tub-chair-with-grey-cushion/Curved Wood Frame Tub Chair with Grey Cushion.jpg"
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
    "img": "assets/products/chairs/cat-dark-brown-sculptural-tub-chair/Dark Brown Sculptural Tub Chair.jpg",
    "images": [
      "assets/products/chairs/cat-dark-brown-sculptural-tub-chair/Dark Brown Sculptural Tub Chair.jpg"
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
    "img": "assets/products/chairs/cat-dark-green-fabric-accent-chair-with-wood-frame/Dark Green Fabric Accent Chair with Wood Frame.jpg",
    "images": [
      "assets/products/chairs/cat-dark-green-fabric-accent-chair-with-wood-frame/Dark Green Fabric Accent Chair with Wood Frame.jpg"
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
    "img": "assets/products/chairs/cat-dark-navy-leather-swivel-barrel-chair/Dark Navy Leather Swivel Barrel Chair.jpg",
    "images": [
      "assets/products/chairs/cat-dark-navy-leather-swivel-barrel-chair/Dark Navy Leather Swivel Barrel Chair.jpg"
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
    "img": "assets/products/chairs/cat-dark-wood-frame-armchair-with-grey-cushion/Dark Wood Frame Armchair with Grey Cushion.jpg",
    "images": [
      "assets/products/chairs/cat-dark-wood-frame-armchair-with-grey-cushion/Dark Wood Frame Armchair with Grey Cushion.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-draco-swivel-executive-chair",
    "name": "Draco Swivel Executive Chair",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Draco Swivel Executive Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-draco-swivel-executive-chair/Draco Swivel Executive Chair - Front View.png",
    "images": [
      "assets/products/chairs/cat-draco-swivel-executive-chair/Draco Swivel Executive Chair - Front View.png"
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
    "img": "assets/products/chairs/cat-drift-textured-armchair/Drift Textured Armchair - Single Seater.png",
    "images": [
      "assets/products/chairs/cat-drift-textured-armchair/Drift Textured Armchair - Single Seater.png"
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
    "img": "assets/products/chairs/cat-dusk-boucle-armchair/Dusk Boucle Armchair - Single Seater.png",
    "images": [
      "assets/products/chairs/cat-dusk-boucle-armchair/Dusk Boucle Armchair - Single Seater.png"
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
    "img": "assets/products/chairs/cat-eos-modern-swivel-chair/Eos Modern Swivel Chair - Front View.png",
    "images": [
      "assets/products/chairs/cat-eos-modern-swivel-chair/Eos Modern Swivel Chair - Front View.png"
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
    "img": "assets/products/chairs/cat-gray-linen-boxy-armchair/gray_linen_boxy_armchair.png",
    "images": [
      "assets/products/chairs/cat-gray-linen-boxy-armchair/gray_linen_boxy_armchair.png"
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
    "img": "assets/products/chairs/cat-grey-fabric-architectural-armchair/Grey Fabric Architectural Armchair.jpg",
    "images": [
      "assets/products/chairs/cat-grey-fabric-architectural-armchair/Grey Fabric Architectural Armchair.jpg"
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
    "img": "assets/products/chairs/cat-grey-fabric-armchair-with-dark-legs/Grey Fabric Armchair with Dark Legs.jpg",
    "images": [
      "assets/products/chairs/cat-grey-fabric-armchair-with-dark-legs/Grey Fabric Armchair with Dark Legs.jpg"
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
    "img": "assets/products/chairs/cat-grey-fabric-curved-back-accent-chair/Grey Fabric Curved Back Accent Chair.jpg",
    "images": [
      "assets/products/chairs/cat-grey-fabric-curved-back-accent-chair/Grey Fabric Curved Back Accent Chair.jpg"
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
    "img": "assets/products/chairs/cat-grey-fabric-swivel-barrel-chair/Grey Fabric Swivel Barrel Chair - Front Perspective.jpg",
    "images": [
      "assets/products/chairs/cat-grey-fabric-swivel-barrel-chair/Grey Fabric Swivel Barrel Chair - Front Perspective.jpg"
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
    "img": "assets/products/chairs/cat-grey-fabric-tub-chair-with-wooden-legs/Grey Fabric Tub Chair with Wooden Legs.jpg",
    "images": [
      "assets/products/chairs/cat-grey-fabric-tub-chair-with-wooden-legs/Grey Fabric Tub Chair with Wooden Legs.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-grey-leather-living-room-sofa-armchairs-set",
    "name": "Grey Leather Living Room Sofa Armchairs Set",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Grey Leather Living Room Sofa Armchairs Set combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-grey-leather-living-room-sofa-armchairs-set/Grey Leather Living Room Sofa & Armchairs Set.jpg",
    "images": [
      "assets/products/chairs/cat-grey-leather-living-room-sofa-armchairs-set/Grey Leather Living Room Sofa & Armchairs Set.jpg"
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
    "img": "assets/products/chairs/cat-heather-gray-boxy-club-chair/heather_gray_boxy_club_chair.png",
    "images": [
      "assets/products/chairs/cat-heather-gray-boxy-club-chair/heather_gray_boxy_club_chair.png"
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
    "img": "assets/products/chairs/cat-industrial-leather-wireframe-armchair/industrial_leather_wireframe_armchair.png",
    "images": [
      "assets/products/chairs/cat-industrial-leather-wireframe-armchair/industrial_leather_wireframe_armchair.png"
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
    "img": "assets/products/chairs/cat-light-gray-chevronpillow-club-chair/light_gray_chevronpillow_club_chair.png",
    "images": [
      "assets/products/chairs/cat-light-gray-chevronpillow-club-chair/light_gray_chevronpillow_club_chair.png"
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
    "img": "assets/products/chairs/cat-light-grey-fabric-swivel-barrel-chair-b/Light Grey Fabric Swivel Barrel Chair B.jpg",
    "images": [
      "assets/products/chairs/cat-light-grey-fabric-swivel-barrel-chair-b/Light Grey Fabric Swivel Barrel Chair B.jpg"
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
    "img": "assets/products/chairs/cat-light-oak-armchair-with-grey-yellow-cushions/Light Oak Armchair with Grey & Yellow Cushions.jpg",
    "images": [
      "assets/products/chairs/cat-light-oak-armchair-with-grey-yellow-cushions/Light Oak Armchair with Grey & Yellow Cushions.jpg"
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
    "img": "assets/products/chairs/cat-light-oak-armchair-with-navy-cushion/Light Oak Armchair with Navy Cushion.jpg",
    "images": [
      "assets/products/chairs/cat-light-oak-armchair-with-navy-cushion/Light Oak Armchair with Navy Cushion.jpg"
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
    "img": "assets/products/chairs/cat-light-oak-armchair-with-tan-leather-cushion/Light Oak Armchair with Tan Leather Cushion.jpg",
    "images": [
      "assets/products/chairs/cat-light-oak-armchair-with-tan-leather-cushion/Light Oak Armchair with Tan Leather Cushion.jpg"
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
    "img": "assets/products/wooden-couches/cat-light-oak-slatted-frame-sofa/Light Oak Slatted Frame Sofa - Perspective View.jpg",
    "images": [
      "assets/products/wooden-couches/cat-light-oak-slatted-frame-sofa/Light Oak Slatted Frame Sofa - Perspective View.jpg"
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
    "img": "assets/products/chairs/cat-light-wood-armchair-with-charcoal-seat/Light Wood Armchair with Charcoal Seat.jpg",
    "images": [
      "assets/products/chairs/cat-light-wood-armchair-with-charcoal-seat/Light Wood Armchair with Charcoal Seat.jpg"
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
    "img": "assets/products/chairs/cat-light-wood-lounge-armchair-with-grey-cushions/Light Wood Lounge Armchair with Grey Cushions.jpg",
    "images": [
      "assets/products/chairs/cat-light-wood-lounge-armchair-with-grey-cushions/Light Wood Lounge Armchair with Grey Cushions.jpg"
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
    "img": "assets/products/chairs/cat-marbled-blue-damask-armchair/marbled_blue_damask_armchair.png",
    "images": [
      "assets/products/chairs/cat-marbled-blue-damask-armchair/marbled_blue_damask_armchair.png"
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
    "img": "assets/products/chairs/cat-mid-century-teak-armchair-with-sage-cushions/Mid-Century Teak Armchair with Sage Cushions.jpg",
    "images": [
      "assets/products/chairs/cat-mid-century-teak-armchair-with-sage-cushions/Mid-Century Teak Armchair with Sage Cushions.jpg"
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
    "img": "assets/products/wooden-couches/cat-minimalist-wood-slatted-frame-sofa/Minimalist Wood Slatted Frame Sofa.jpg",
    "images": [
      "assets/products/wooden-couches/cat-minimalist-wood-slatted-frame-sofa/Minimalist Wood Slatted Frame Sofa.jpg"
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
    "img": "assets/products/chairs/cat-modern-architectural-walnut-armchair/Modern Architectural Walnut Armchair.jpg",
    "images": [
      "assets/products/chairs/cat-modern-architectural-walnut-armchair/Modern Architectural Walnut Armchair.jpg"
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
    "img": "assets/products/chairs/cat-modern-grey-armchair-with-dark-frame/Modern Grey Armchair with Dark Frame.jpg",
    "images": [
      "assets/products/chairs/cat-modern-grey-armchair-with-dark-frame/Modern Grey Armchair with Dark Frame.jpg"
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
    "img": "assets/products/chairs/cat-modern-office-training-folding-chair/Office Training Chair - Angle Perspective.png",
    "images": [
      "assets/products/chairs/cat-modern-office-training-folding-chair/Office Training Chair - Angle Perspective.png",
      "assets/products/chairs/cat-modern-office-training-folding-chair/Office Training Chair - Front View.png",
      "assets/products/chairs/cat-modern-office-training-folding-chair/Office Training Chair - Side View.png"
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
    "img": "assets/products/chairs/cat-mustard-yellow-fabric-accent-chair/Mustard Yellow Fabric Accent Chair.jpg",
    "images": [
      "assets/products/chairs/cat-mustard-yellow-fabric-accent-chair/Mustard Yellow Fabric Accent Chair.jpg"
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
    "img": "assets/products/cafe-chairs/mustard-yellow-perforated-accent-chair/mustard_yellow_perforated_accent_chair.png",
    "images": [
      "assets/products/cafe-chairs/mustard-yellow-perforated-accent-chair/mustard_yellow_perforated_accent_chair.png"
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
    "img": "assets/products/chairs/cat-nailhead-offwhite-linen-club-chair/nailhead_offwhite_linen_club_chair.png",
    "images": [
      "assets/products/chairs/cat-nailhead-offwhite-linen-club-chair/nailhead_offwhite_linen_club_chair.png"
    ],
    "colors": []
  },
  {
    "id": "cat-nova-executive-office-chair",
    "name": "Nova Executive Office Cabinet",
    "category": "wardrobes-storage",
    "type": "storage",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Nova Executive Office Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-nova-executive-office-chair/Nova Executive Office Chair - Angle Perspective.png",
    "images": [
      "assets/products/wardrobes-storage/cat-nova-executive-office-chair/Nova Executive Office Chair - Angle Perspective.png",
      "assets/products/wardrobes-storage/cat-nova-executive-office-chair/Nova Executive Office Chair - Context View.png",
      "assets/products/wardrobes-storage/cat-nova-executive-office-chair/Nova Executive Office Chair - Corner Detail.png",
      "assets/products/wardrobes-storage/cat-nova-executive-office-chair/Nova Executive Office Chair - Elevation View.png",
      "assets/products/wardrobes-storage/cat-nova-executive-office-chair/Nova Executive Office Chair - Front View.png",
      "assets/products/wardrobes-storage/cat-nova-executive-office-chair/Nova Executive Office Chair - High Angle View.png",
      "assets/products/wardrobes-storage/cat-nova-executive-office-chair/Nova Executive Office Chair - Profile View.png",
      "assets/products/wardrobes-storage/cat-nova-executive-office-chair/Nova Executive Office Chair - Side View.png",
      "assets/products/wardrobes-storage/cat-nova-executive-office-chair/Nova Executive Office Chair - Studio Showcase.png"
    ],
    "colors": []
  },
  {
    "id": "cat-nova-modern-swivel-chair",
    "name": "Nova Modern Swivel Chair",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Nova Modern Swivel Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-nova-modern-swivel-chair/Nova Modern Swivel Chair - Front View.png",
    "images": [
      "assets/products/office-workstations/cat-nova-modern-swivel-chair/Nova Modern Swivel Chair - Front View.png"
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
    "img": "assets/products/chairs/cat-oak-crimsonpad-ladderback-chair/oak_crimsonpad_ladderback_chair.png",
    "images": [
      "assets/products/chairs/cat-oak-crimsonpad-ladderback-chair/oak_crimsonpad_ladderback_chair.png"
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
    "img": "assets/products/chairs/cat-offwhite-boucle-tub-chair-and-ottoman/offwhite_boucle_tub_chair_and_ottoman.png",
    "images": [
      "assets/products/chairs/cat-offwhite-boucle-tub-chair-and-ottoman/offwhite_boucle_tub_chair_and_ottoman.png"
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
    "img": "assets/products/chairs/cat-olive-green-leather-swivel-armchair/Olive Green Leather Swivel Armchair.jpg",
    "images": [
      "assets/products/chairs/cat-olive-green-leather-swivel-armchair/Olive Green Leather Swivel Armchair.jpg"
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
    "img": "assets/products/chairs/cat-pair-of-grey-fabric-accent-chairs/Pair of Grey Fabric Accent Chairs.jpg",
    "images": [
      "assets/products/chairs/cat-pair-of-grey-fabric-accent-chairs/Pair of Grey Fabric Accent Chairs.jpg"
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
    "img": "assets/products/chairs/cat-pair-of-teak-armchairs-with-teal-and-cognac-leather/Pair of Teak Armchairs with Teal and Cognac Leather.jpg",
    "images": [
      "assets/products/chairs/cat-pair-of-teak-armchairs-with-teal-and-cognac-leather/Pair of Teak Armchairs with Teal and Cognac Leather.jpg"
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
    "img": "assets/products/chairs/cat-paisley-pattern-velvet-brass-armchair/paisley_pattern_velvet_brass_armchair.png",
    "images": [
      "assets/products/chairs/cat-paisley-pattern-velvet-brass-armchair/paisley_pattern_velvet_brass_armchair.png"
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
    "img": "assets/products/chairs/cat-pinstripe-fabric-wingback-armchair/Pinstripe Fabric Wingback Armchair.jpg",
    "images": [
      "assets/products/chairs/cat-pinstripe-fabric-wingback-armchair/Pinstripe Fabric Wingback Armchair.jpg"
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
    "img": "assets/products/chairs/cat-popart-print-wingback-armchair/popart_print_wingback_armchair.png",
    "images": [
      "assets/products/chairs/cat-popart-print-wingback-armchair/popart_print_wingback_armchair.png"
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
    "img": "assets/products/chairs/cat-purple-velvet-accent-tub-chair/Purple Velvet Accent Tub Chair.jpg",
    "images": [
      "assets/products/chairs/cat-purple-velvet-accent-tub-chair/Purple Velvet Accent Tub Chair.jpg"
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
    "img": "assets/products/office-workstations/cat-repute-executive-office-chair/Repute Executive Office Chair - Angle Perspective.png",
    "images": [
      "assets/products/office-workstations/cat-repute-executive-office-chair/Repute Executive Office Chair - Angle Perspective.png",
      "assets/products/office-workstations/cat-repute-executive-office-chair/Repute Executive Office Chair - Front View.png",
      "assets/products/office-workstations/cat-repute-executive-office-chair/Repute Executive Office Chair - Side View.png"
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
    "img": "assets/products/chairs/cat-round-grey-fabric-accent-chair/Round Grey Fabric Accent Chair.jpg",
    "images": [
      "assets/products/chairs/cat-round-grey-fabric-accent-chair/Round Grey Fabric Accent Chair.jpg"
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
    "img": "assets/products/chairs/cat-royal-purple-velvet-barrel-chair/royal_purple_velvet_barrel_chair.png",
    "images": [
      "assets/products/chairs/cat-royal-purple-velvet-barrel-chair/royal_purple_velvet_barrel_chair.png"
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
    "img": "assets/products/chairs/cat-saddle-brown-highback-wingback-armchair/saddle_brown_highback_wingback_armchair.png",
    "images": [
      "assets/products/chairs/cat-saddle-brown-highback-wingback-armchair/saddle_brown_highback_wingback_armchair.png"
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
    "img": "assets/products/chairs/cat-scalloped-velvet-barrel-accent-chair/Scalloped Velvet Barrel Accent Chair.jpg",
    "images": [
      "assets/products/chairs/cat-scalloped-velvet-barrel-accent-chair/Scalloped Velvet Barrel Accent Chair.jpg"
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
    "img": "assets/products/chairs/cat-scandinavian-dining-room-table-and-chair-set/Scandinavian Dining Room Table and Chair Set.jpg",
    "images": [
      "assets/products/chairs/cat-scandinavian-dining-room-table-and-chair-set/Scandinavian Dining Room Table and Chair Set.jpg"
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
    "img": "assets/products/chairs/cat-seafoam-green-plush-armchair/seafoam_green_plush_armchair.png",
    "images": [
      "assets/products/chairs/cat-seafoam-green-plush-armchair/seafoam_green_plush_armchair.png"
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
    "img": "assets/products/sofas/cat-tan-nailhead-sofa-and-chair-set/tan_nailhead_sofa_and_chair_set.png",
    "images": [
      "assets/products/sofas/cat-tan-nailhead-sofa-and-chair-set/tan_nailhead_sofa_and_chair_set.png"
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
    "img": "assets/products/chairs/cat-tartan-plaid-upholstered-armchairs-set/Tartan Plaid Upholstered Armchairs Set.jpg",
    "images": [
      "assets/products/chairs/cat-tartan-plaid-upholstered-armchairs-set/Tartan Plaid Upholstered Armchairs Set.jpg"
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
    "img": "assets/products/chairs/cat-teak-armchair-with-terracotta-cushion/Teak Armchair with Terracotta Cushion.jpg",
    "images": [
      "assets/products/chairs/cat-teak-armchair-with-terracotta-cushion/Teak Armchair with Terracotta Cushion.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-teak-living-room-sofa-armchair-suite-set",
    "name": "Teak Living Room Sofa Armchair Suite Set",
    "category": "chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Teak Living Room Sofa Armchair Suite Set combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/chairs/cat-teak-living-room-sofa-armchair-suite-set/Teak Living Room Sofa & Armchair Suite Set.jpg",
    "images": [
      "assets/products/chairs/cat-teak-living-room-sofa-armchair-suite-set/Teak Living Room Sofa & Armchair Suite Set.jpg"
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
    "img": "assets/products/chairs/cat-teal-blue-round-swivel-accent-chair/Teal Blue Round Swivel Accent Chair.jpg",
    "images": [
      "assets/products/chairs/cat-teal-blue-round-swivel-accent-chair/Teal Blue Round Swivel Accent Chair.jpg"
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
    "img": "assets/products/chairs/cat-terracotta-cylinder-tub-armchair/Terracotta Cylinder Tub Armchair.jpg",
    "images": [
      "assets/products/chairs/cat-terracotta-cylinder-tub-armchair/Terracotta Cylinder Tub Armchair.jpg"
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
    "img": "assets/products/chairs/cat-terracotta-leather-low-profile-accent-chair/Terracotta Leather Low Profile Accent Chair.jpg",
    "images": [
      "assets/products/chairs/cat-terracotta-leather-low-profile-accent-chair/Terracotta Leather Low Profile Accent Chair.jpg"
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
    "img": "assets/products/chairs/cat-terracotta-sculptural-velvet-tub-armchair/Terracotta Sculptural Velvet Tub Armchair.jpg",
    "images": [
      "assets/products/chairs/cat-terracotta-sculptural-velvet-tub-armchair/Terracotta Sculptural Velvet Tub Armchair.jpg"
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
    "img": "assets/products/chairs/cat-terracotta-two-tone-round-tub-chair/Terracotta Two-Tone Round Tub Chair.jpg",
    "images": [
      "assets/products/chairs/cat-terracotta-two-tone-round-tub-chair/Terracotta Two-Tone Round Tub Chair.jpg"
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
    "img": "assets/products/chairs/cat-textured-boucle-tub-chair-with-wooden-frame/Textured Boucle Tub Chair with Wooden Frame.jpg",
    "images": [
      "assets/products/chairs/cat-textured-boucle-tub-chair-with-wooden-frame/Textured Boucle Tub Chair with Wooden Frame.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-titus-executive-chair",
    "name": "Titus Executive Chair",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Titus Executive Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-titus-executive-chair/Titus Executive Chair - Front View.png",
    "images": [
      "assets/products/office-workstations/cat-titus-executive-chair/Titus Executive Chair - Front View.png"
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
    "img": "assets/products/chairs/cat-tufted-light-blue-wingback-armchair/Tufted Light Blue Wingback Armchair.jpg",
    "images": [
      "assets/products/chairs/cat-tufted-light-blue-wingback-armchair/Tufted Light Blue Wingback Armchair.jpg"
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
    "img": "assets/products/chairs/cat-velvet-sage-gray-plush-armchair/velvet_sage_gray_plush_armchair.png",
    "images": [
      "assets/products/chairs/cat-velvet-sage-gray-plush-armchair/velvet_sage_gray_plush_armchair.png"
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
    "img": "assets/products/chairs/cat-vintage-floral-pattern-upholstered-club-armchair/Vintage Floral Pattern Upholstered Club Armchair.jpg",
    "images": [
      "assets/products/chairs/cat-vintage-floral-pattern-upholstered-club-armchair/Vintage Floral Pattern Upholstered Club Armchair.jpg"
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
    "img": "assets/products/chairs/cat-walnut-armchair-with-brown-leather-cushion/Walnut Armchair with Brown Leather Cushion.jpg",
    "images": [
      "assets/products/chairs/cat-walnut-armchair-with-brown-leather-cushion/Walnut Armchair with Brown Leather Cushion.jpg"
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
    "img": "assets/products/chairs/cat-walnut-armchair-with-grey-cushion-b/Walnut Armchair with Grey Cushion B.jpg",
    "images": [
      "assets/products/chairs/cat-walnut-armchair-with-grey-cushion-b/Walnut Armchair with Grey Cushion B.jpg"
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
    "img": "assets/products/dining-tables/cat-walnut-dining-table-set-with-4-chairs/Walnut Dining Table Set with 4 Chairs.jpg",
    "images": [
      "assets/products/dining-tables/cat-walnut-dining-table-set-with-4-chairs/Walnut Dining Table Set with 4 Chairs.jpg"
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
    "img": "assets/products/chairs/cat-walnut-frame-armchair-with-beige-cushion/Walnut Frame Armchair with Beige Cushion.jpg",
    "images": [
      "assets/products/chairs/cat-walnut-frame-armchair-with-beige-cushion/Walnut Frame Armchair with Beige Cushion.jpg"
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
    "img": "assets/products/chairs/cat-walnut-frame-lounge-armchair/Walnut Frame Lounge Armchair.jpg",
    "images": [
      "assets/products/chairs/cat-walnut-frame-lounge-armchair/Walnut Frame Lounge Armchair.jpg"
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
    "img": "assets/products/chairs/cat-warm-tan-tropicalpillow-armchair/warm_tan_tropicalpillow_armchair.png",
    "images": [
      "assets/products/chairs/cat-warm-tan-tropicalpillow-armchair/warm_tan_tropicalpillow_armchair.png"
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
    "img": "assets/products/chairs/cat-yellow-fabric-tub-armchair-with-wooden-legs/Yellow Fabric Tub Armchair with Wooden Legs.jpg",
    "images": [
      "assets/products/chairs/cat-yellow-fabric-tub-armchair-with-wooden-legs/Yellow Fabric Tub Armchair with Wooden Legs.jpg"
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
    "img": "assets/products/chairs/lmw-001/LMW-001.png",
    "badge": "",
    "description": "The LMW-001 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-001/LMW-001.png"
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
    "img": "assets/products/chairs/lmw-002/LMW-002_2.png",
    "badge": "",
    "description": "The LMW-002 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Grey or Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-002/LMW-002_2.png"
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
    "img": "assets/products/chairs/lmw-003/LMW-003.png",
    "badge": "",
    "description": "The LMW-003 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Brown tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-003/LMW-003.png"
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
    "img": "assets/products/chairs/lmw-004/LMW-004.png",
    "badge": "",
    "description": "The LMW-004 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-004/LMW-004.png"
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
    "img": "assets/products/chairs/lmw-005/LMW-005.png",
    "badge": "",
    "description": "The LMW-005 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-005/LMW-005.png"
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
    "img": "assets/products/chairs/lmw-006/LMW-006.png",
    "badge": "",
    "description": "The LMW-006 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Brown tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-006/LMW-006.png"
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
    "img": "assets/products/chairs/lmw-007/LMW-007.png",
    "badge": "",
    "description": "The LMW-007 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-007/LMW-007.png"
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
    "img": "assets/products/chairs/lmw-008/LMW-008.png",
    "badge": "New",
    "description": "A perfect blend of comfort and style. The LMW-008 chair showcases a premium blend of classic craftsmanship and modern design. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-008/LMW-008.png"
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
    "img": "assets/products/chairs/lmw-009/LMW-009.png",
    "badge": "",
    "description": "The LMW-009 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-009/LMW-009.png"
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
    "img": "assets/products/chairs/lmw-010/LMW-010.png",
    "badge": "Bestseller",
    "description": "The LMW-010 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Yellow tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-010/LMW-010.png"
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
    "img": "assets/products/chairs/lmw-011/LMW-011.png",
    "badge": "",
    "description": "The LMW-011 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-011/LMW-011.png"
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
    "img": "assets/products/chairs/lmw-012/LMW-012.png",
    "badge": "",
    "description": "The LMW-012 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-012/LMW-012.png"
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
    "img": "assets/products/chairs/lmw-013/LMW-013.png",
    "badge": "",
    "description": "The LMW-013 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-013/LMW-013.png"
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
    "img": "assets/products/chairs/lmw-014/LMW-014.png",
    "badge": "",
    "description": "The LMW-014 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-014/LMW-014.png"
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
    "img": "assets/products/chairs/lmw-015/LMW-015.png",
    "badge": "New",
    "description": "The LMW-015 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-015/LMW-015.png"
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
    "img": "assets/products/chairs/lmw-016/LMW-016.png",
    "badge": "",
    "description": "The LMW-016 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red or Brown tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-016/LMW-016.png",
      "assets/products/chairs/lmw-016/LMW-016_2.png"
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
    "img": "assets/products/chairs/lmw-017/LMW-017.png",
    "badge": "",
    "description": "The LMW-017 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Brown tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-017/LMW-017.png"
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
    "img": "assets/products/chairs/lmw-018/LMW-018.png",
    "badge": "",
    "description": "The LMW-018 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-018/LMW-018.png"
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
    "img": "assets/products/chairs/lmw-019/LMW-019.png",
    "badge": "",
    "description": "The LMW-019 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-019/LMW-019.png"
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
    "img": "assets/products/chairs/lmw-020/LMW-020_2.png",
    "badge": "",
    "description": "The LMW-020 chair represents a perfect balance of comfort, style, and utility. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful White or Red tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-020/LMW-020_2.png"
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
    "img": "assets/products/chairs/lmw-021/LMW-021.png",
    "badge": "New",
    "description": "Combining ergonomic comfort with timeless wooden aesthetics. The LMW-021 chair showcases a premium blend of classic craftsmanship and modern design. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Brown or Blue tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-021/LMW-021.png",
      "assets/products/chairs/lmw-021/LMW-021_2.png",
      "assets/products/chairs/lmw-021/LMW-021_4.png",
      "assets/products/chairs/lmw-021/LMW-021_5.png"
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
    "img": "assets/products/chairs/lmw-022/LMW-022.png",
    "badge": "",
    "description": "A perfect blend of comfort and style. The LMW-022 chair showcases a premium blend of classic craftsmanship and modern design. Crafted from solid wood with a robust structure, it provides comfortable, sturdy support. Finished in a beautiful Blue tone, it adds warmth and sophistication to any dining room, office, or living space.",
    "images": [
      "assets/products/chairs/lmw-022/LMW-022.png"
    ],
    "colors": [
      "Blue"
    ]
  },
  {
    "id": "cat-cherry-wood-6seater-dining-set",
    "name": "Cherry Wood 6Seater Dining Set",
    "category": "dining-tables",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cherry Wood 6Seater Dining Set combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/dining-tables/cat-cherry-wood-6seater-dining-set/cherry_wood_6seater_dining_set.png",
    "images": [
      "assets/products/dining-tables/cat-cherry-wood-6seater-dining-set/cherry_wood_6seater_dining_set.png"
    ],
    "colors": []
  },
  {
    "id": "cat-honey-oak-8seater-dining-suite",
    "name": "Honey Oak 8Seater Dining Suite",
    "category": "dining-tables",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Honey Oak 8Seater Dining Suite combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/dining-tables/cat-honey-oak-8seater-dining-suite/honey_oak_8seater_dining_suite.png",
    "images": [
      "assets/products/dining-tables/cat-honey-oak-8seater-dining-suite/honey_oak_8seater_dining_suite.png"
    ],
    "colors": []
  },
  {
    "id": "cat-mahogany-crossback-4seater-dining-set",
    "name": "Mahogany Crossback 4Seater Dining Set",
    "category": "dining-tables",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Mahogany Crossback 4Seater Dining Set combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/dining-tables/cat-mahogany-crossback-4seater-dining-set/mahogany_crossback_4seater_dining_set.png",
    "images": [
      "assets/products/dining-tables/cat-mahogany-crossback-4seater-dining-set/mahogany_crossback_4seater_dining_set.png"
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
    "img": "assets/products/chairs/rubco-easy-chair-cloth-type-big/easy_chair_cloth_type_big.jpg",
    "images": [
      "assets/products/chairs/rubco-easy-chair-cloth-type-big/easy_chair_cloth_type_big.jpg",
      "assets/products/chairs/rubco-easy-chair-cloth-type-big/easy_chair_cloth_type_big_1.jpg",
      "assets/products/chairs/rubco-easy-chair-cloth-type-big/easy_chair_cloth_type_big_2.jpg",
      "assets/products/chairs/rubco-easy-chair-cloth-type-big/easy_chair_cloth_type_big_3.jpg",
      "assets/products/chairs/rubco-easy-chair-cloth-type-big/easy_chair_cloth_type_big_4.jpg",
      "assets/products/chairs/rubco-easy-chair-cloth-type-big/easy_chair_cloth_type_big_5.jpg"
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
    "img": "assets/products/chairs/rubco-easy-chair-cloth-type-small/easy_chair_cloth_type_small.jpg",
    "images": [
      "assets/products/chairs/rubco-easy-chair-cloth-type-small/easy_chair_cloth_type_small.jpg",
      "assets/products/chairs/rubco-easy-chair-cloth-type-small/easy_chair_cloth_type_small_1.jpg",
      "assets/products/chairs/rubco-easy-chair-cloth-type-small/easy_chair_cloth_type_small_2.jpg",
      "assets/products/chairs/rubco-easy-chair-cloth-type-small/easy_chair_cloth_type_small_3.jpg",
      "assets/products/chairs/rubco-easy-chair-cloth-type-small/easy_chair_cloth_type_small_4.jpg"
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
    "img": "assets/products/chairs/rubco-grand-father-chair/grand_father_chair.jpg",
    "images": [
      "assets/products/chairs/rubco-grand-father-chair/grand_father_chair.jpg",
      "assets/products/chairs/rubco-grand-father-chair/grand_father_chair_1.jpg",
      "assets/products/chairs/rubco-grand-father-chair/grand_father_chair_2.jpg",
      "assets/products/chairs/rubco-grand-father-chair/grand_father_chair_3.jpg"
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
    "img": "assets/products/corner-sofas/cat-amethyst-sectional-sofa/Amethyst Sectional Sofa - Isolated L-Shape View.png",
    "images": [
      "assets/products/corner-sofas/cat-amethyst-sectional-sofa/Amethyst Sectional Sofa - Isolated L-Shape View.png",
      "assets/products/corner-sofas/cat-amethyst-sectional-sofa/Amethyst Sectional Sofa - With Coffee Table View.png"
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
    "img": "assets/products/corner-sofas/cat-beige-brown-chaise-sectional/beige_brown_chaise_sectional.png",
    "images": [
      "assets/products/corner-sofas/cat-beige-brown-chaise-sectional/beige_brown_chaise_sectional.png"
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
    "img": "assets/products/corner-sofas/cat-beige-fabric-corner-sectional/beige_fabric_corner_sectional.png",
    "images": [
      "assets/products/corner-sofas/cat-beige-fabric-corner-sectional/beige_fabric_corner_sectional.png"
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
    "img": "assets/products/corner-sofas/cat-beige-leather-curved-modular-sectional-sofa-suite/Beige Leather Curved Modular Sectional Sofa Suite.jpg",
    "images": [
      "assets/products/corner-sofas/cat-beige-leather-curved-modular-sectional-sofa-suite/Beige Leather Curved Modular Sectional Sofa Suite.jpg"
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
    "img": "assets/products/corner-sofas/cat-blue-leather-reclining-sectional/blue_leather_reclining_sectional.png",
    "images": [
      "assets/products/corner-sofas/cat-blue-leather-reclining-sectional/blue_leather_reclining_sectional.png"
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
    "img": "assets/products/corner-sofas/cat-charcoal-chaise-sectional-with-throw/charcoal_chaise_sectional_with_throw.png",
    "images": [
      "assets/products/corner-sofas/cat-charcoal-chaise-sectional-with-throw/charcoal_chaise_sectional_with_throw.png"
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
    "img": "assets/products/corner-sofas/cat-charcoal-grey-l-shape-sectional-sofa-c/Charcoal Grey L-Shape Sectional Sofa C.jpg",
    "images": [
      "assets/products/corner-sofas/cat-charcoal-grey-l-shape-sectional-sofa-c/Charcoal Grey L-Shape Sectional Sofa C.jpg"
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
    "img": "assets/products/corner-sofas/cat-cognac-leather-sectional-sofa-collection/Cognac Leather Sectional Sofa Collection.jpg",
    "images": [
      "assets/products/corner-sofas/cat-cognac-leather-sectional-sofa-collection/Cognac Leather Sectional Sofa Collection.jpg"
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
    "img": "assets/products/corner-sofas/cat-cream-leather-corner-sectional-sofa/Cream Leather Corner Sectional Sofa.jpg",
    "images": [
      "assets/products/corner-sofas/cat-cream-leather-corner-sectional-sofa/Cream Leather Corner Sectional Sofa.jpg"
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
    "img": "assets/products/corner-sofas/cat-cream-leather-corner-sectional-sofa-with-gold-legs/Cream Leather Corner Sectional Sofa with Gold Legs.jpg",
    "images": [
      "assets/products/corner-sofas/cat-cream-leather-corner-sectional-sofa-with-gold-legs/Cream Leather Corner Sectional Sofa with Gold Legs.jpg"
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
    "img": "assets/products/corner-sofas/cat-cream-leather-l-shape-sectional-sofa-b/Cream Leather L-Shape Sectional Sofa B.jpg",
    "images": [
      "assets/products/corner-sofas/cat-cream-leather-l-shape-sectional-sofa-b/Cream Leather L-Shape Sectional Sofa B.jpg"
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
    "img": "assets/products/corner-sofas/cat-cream-leather-modular-sectional-sofa-set/Cream Leather Modular Sectional Sofa Set.jpg",
    "images": [
      "assets/products/corner-sofas/cat-cream-leather-modular-sectional-sofa-set/Cream Leather Modular Sectional Sofa Set.jpg"
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
    "img": "assets/products/corner-sofas/cat-cream-modular-l-sectional-sofa/cream_modular_l_sectional_sofa.png",
    "images": [
      "assets/products/corner-sofas/cat-cream-modular-l-sectional-sofa/cream_modular_l_sectional_sofa.png"
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
    "img": "assets/products/corner-sofas/cat-cream-tufted-lsectional-sofa-comboset/cream_tufted_lsectional_sofa_comboset.png",
    "images": [
      "assets/products/corner-sofas/cat-cream-tufted-lsectional-sofa-comboset/cream_tufted_lsectional_sofa_comboset.png"
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
    "img": "assets/products/corner-sofas/cat-curved-light-gray-chaise-lounge/curved_light_gray_chaise_lounge.png",
    "images": [
      "assets/products/corner-sofas/cat-curved-light-gray-chaise-lounge/curved_light_gray_chaise_lounge.png"
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
    "img": "assets/products/corner-sofas/cat-dark-charcoal-grey-fabric-corner-sectional-sofa/Dark Charcoal Grey Fabric Corner Sectional Sofa.jpg",
    "images": [
      "assets/products/corner-sofas/cat-dark-charcoal-grey-fabric-corner-sectional-sofa/Dark Charcoal Grey Fabric Corner Sectional Sofa.jpg"
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
    "img": "assets/products/corner-sofas/cat-dark-grey-l-shape-sectional-sofa/Dark Grey L-Shape Sectional Sofa - Front View.jpg",
    "images": [
      "assets/products/corner-sofas/cat-dark-grey-l-shape-sectional-sofa/Dark Grey L-Shape Sectional Sofa - Front View.jpg"
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
    "img": "assets/products/corner-sofas/cat-dark-navy-leather-corner-sectional-sofa-b/Dark Navy Leather Corner Sectional Sofa B.jpg",
    "images": [
      "assets/products/corner-sofas/cat-dark-navy-leather-corner-sectional-sofa-b/Dark Navy Leather Corner Sectional Sofa B.jpg"
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
    "img": "assets/products/corner-sofas/cat-dark-navy-leather-l-shape-sectional-sofa/Dark Navy Leather L-Shape Sectional Sofa.jpg",
    "images": [
      "assets/products/corner-sofas/cat-dark-navy-leather-l-shape-sectional-sofa/Dark Navy Leather L-Shape Sectional Sofa.jpg"
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
    "img": "assets/products/corner-sofas/deep-red-leather-corner-sofa-sectional/deep-red-leather-corner-sofa-sectional.jpg",
    "images": [
      "assets/products/corner-sofas/deep-red-leather-corner-sofa-sectional/deep-red-leather-corner-sofa-sectional.jpg"
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
    "img": "assets/products/corner-sofas/deep-red-leather-corner-sofa-sectional-b/deep-red-leather-corner-sofa-sectional-b.jpg",
    "images": [
      "assets/products/corner-sofas/deep-red-leather-corner-sofa-sectional-b/deep-red-leather-corner-sofa-sectional-b.jpg"
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
    "img": "assets/products/corner-sofas/cat-dusty-blue-leather-chaise-sectional/dusty_blue_leather_chaise_sectional.png",
    "images": [
      "assets/products/corner-sofas/cat-dusty-blue-leather-chaise-sectional/dusty_blue_leather_chaise_sectional.png"
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
    "img": "assets/products/corner-sofas/cat-emerald-modern-sectional-chaise-sofa-set/Emerald Sectional Sofa - Angle Perspective.png",
    "images": [
      "assets/products/corner-sofas/cat-emerald-modern-sectional-chaise-sofa-set/Emerald Sectional Sofa - Angle Perspective.png",
      "assets/products/corner-sofas/cat-emerald-modern-sectional-chaise-sofa-set/Emerald Sectional Sofa - Front View.png"
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
    "img": "assets/products/corner-sofas/cat-gray-fabric-modular-sectional-suite/gray_fabric_modular_sectional_suite.png",
    "images": [
      "assets/products/corner-sofas/cat-gray-fabric-modular-sectional-suite/gray_fabric_modular_sectional_suite.png"
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
    "img": "assets/products/corner-sofas/cat-grey-fabric-modular-sectional-sofa-suite/Grey Fabric Modular Sectional Sofa Suite.jpg",
    "images": [
      "assets/products/corner-sofas/cat-grey-fabric-modular-sectional-sofa-suite/Grey Fabric Modular Sectional Sofa Suite.jpg"
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
    "img": "assets/products/corner-sofas/cat-heather-gray-lsectional-sofa/heather_gray_lsectional_sofa.png",
    "images": [
      "assets/products/corner-sofas/cat-heather-gray-lsectional-sofa/heather_gray_lsectional_sofa.png"
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
    "img": "assets/products/corner-sofas/cat-large-grey-leather-sectional-sofa-suite/Large Grey Leather Sectional Sofa Suite.jpg",
    "images": [
      "assets/products/corner-sofas/cat-large-grey-leather-sectional-sofa-suite/Large Grey Leather Sectional Sofa Suite.jpg"
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
    "img": "assets/products/corner-sofas/cat-light-blue-fabric-sectional-sofa/Light Blue Fabric Sectional Sofa.jpg",
    "images": [
      "assets/products/corner-sofas/cat-light-blue-fabric-sectional-sofa/Light Blue Fabric Sectional Sofa.jpg"
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
    "img": "assets/products/corner-sofas/cat-light-gray-curved-sectional-set/light_gray_curved_sectional_set.png",
    "images": [
      "assets/products/corner-sofas/cat-light-gray-curved-sectional-set/light_gray_curved_sectional_set.png"
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
    "img": "assets/products/corner-sofas/cat-light-grey-l-shape-sectional-sofa/Light Grey L-Shape Sectional Sofa - Top and Front Views.jpg",
    "images": [
      "assets/products/corner-sofas/cat-light-grey-l-shape-sectional-sofa/Light Grey L-Shape Sectional Sofa - Top and Front Views.jpg"
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
    "img": "assets/products/corner-sofas/cat-light-grey-l-shape-sectional-sofa-b/Light Grey L-Shape Sectional Sofa B.jpg",
    "images": [
      "assets/products/corner-sofas/cat-light-grey-l-shape-sectional-sofa-b/Light Grey L-Shape Sectional Sofa B.jpg"
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
    "img": "assets/products/corner-sofas/cat-modern-l-shape-leather-sectional-sofa-suite-with-ottoman/Modern L-Shape Leather Sectional Sofa Suite with Ottoman.jpg",
    "images": [
      "assets/products/corner-sofas/cat-modern-l-shape-leather-sectional-sofa-suite-with-ottoman/Modern L-Shape Leather Sectional Sofa Suite with Ottoman.jpg"
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
    "img": "assets/products/corner-sofas/cat-modern-light-beige-l-shape-sectional-sofa/Modern Light Beige L-Shape Sectional Sofa.jpg",
    "images": [
      "assets/products/corner-sofas/cat-modern-light-beige-l-shape-sectional-sofa/Modern Light Beige L-Shape Sectional Sofa.jpg"
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
    "img": "assets/products/corner-sofas/cat-modern-u-modular-sectional-suite/modern_u_modular_sectional_suite.png",
    "images": [
      "assets/products/corner-sofas/cat-modern-u-modular-sectional-suite/modern_u_modular_sectional_suite.png"
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
    "img": "assets/products/corner-sofas/cat-oversized-light-gray-curved-sectional/oversized_light_gray_curved_sectional.png",
    "images": [
      "assets/products/corner-sofas/cat-oversized-light-gray-curved-sectional/oversized_light_gray_curved_sectional.png"
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
    "img": "assets/products/corner-sofas/cat-soft-gray-chaise-sectional/soft_gray_chaise_sectional.png",
    "images": [
      "assets/products/corner-sofas/cat-soft-gray-chaise-sectional/soft_gray_chaise_sectional.png"
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
    "img": "assets/products/recliners/cat-tan-brown-leather-corner-recliner-sectional-sofa/Tan Brown Leather Corner Recliner Sectional Sofa.jpg",
    "images": [
      "assets/products/recliners/cat-tan-brown-leather-corner-recliner-sectional-sofa/Tan Brown Leather Corner Recliner Sectional Sofa.jpg"
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
    "img": "assets/products/corner-sofas/cat-tan-leather-l-shape-sectional-sofa/Tan Leather L-Shape Sectional Sofa.jpg",
    "images": [
      "assets/products/corner-sofas/cat-tan-leather-l-shape-sectional-sofa/Tan Leather L-Shape Sectional Sofa.jpg"
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
    "img": "assets/products/dining-tables/cat-architectural-teak-dining-table-b/Architectural Teak Dining Table B.jpg",
    "images": [
      "assets/products/dining-tables/cat-architectural-teak-dining-table-b/Architectural Teak Dining Table B.jpg"
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
    "img": "assets/products/dining-tables/cat-architectural-walnut-dining-table/Architectural Walnut Dining Table - Front View.jpg",
    "images": [
      "assets/products/dining-tables/cat-architectural-walnut-dining-table/Architectural Walnut Dining Table - Front View.jpg",
      "assets/products/dining-tables/cat-architectural-walnut-dining-table/Architectural Walnut Dining Table - Side View.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-cabin-executive-computer-table",
    "name": "Cabin Executive Computer Table",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cabin Executive Computer Table combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-cabin-executive-computer-table/Cabin Executive Computer Table - Angle Perspective.png",
    "images": [
      "assets/products/office-workstations/cat-cabin-executive-computer-table/Cabin Executive Computer Table - Angle Perspective.png",
      "assets/products/office-workstations/cat-cabin-executive-computer-table/Cabin Executive Computer Table - Close Up Detail.png",
      "assets/products/office-workstations/cat-cabin-executive-computer-table/Cabin Executive Computer Table - Context View.png",
      "assets/products/office-workstations/cat-cabin-executive-computer-table/Cabin Executive Computer Table - Corner Detail.png",
      "assets/products/office-workstations/cat-cabin-executive-computer-table/Cabin Executive Computer Table - Elevation View.png",
      "assets/products/office-workstations/cat-cabin-executive-computer-table/Cabin Executive Computer Table - Front View.png",
      "assets/products/office-workstations/cat-cabin-executive-computer-table/Cabin Executive Computer Table - High Angle View.png",
      "assets/products/office-workstations/cat-cabin-executive-computer-table/Cabin Executive Computer Table - Perspective View.png",
      "assets/products/office-workstations/cat-cabin-executive-computer-table/Cabin Executive Computer Table - Profile View.png",
      "assets/products/office-workstations/cat-cabin-executive-computer-table/Cabin Executive Computer Table - Side View.png",
      "assets/products/office-workstations/cat-cabin-executive-computer-table/Cabin Executive Computer Table - Studio Showcase.png"
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
    "img": "assets/products/center-tables/cat-dark-espresso-wooden-dining-table/Dark Espresso Wooden Dining Table.jpg",
    "images": [
      "assets/products/center-tables/cat-dark-espresso-wooden-dining-table/Dark Espresso Wooden Dining Table.jpg"
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
    "img": "assets/products/center-tables/cat-dark-walnut-modern-executive-dining-table/Dark Walnut Modern Executive Dining Table.jpg",
    "images": [
      "assets/products/center-tables/cat-dark-walnut-modern-executive-dining-table/Dark Walnut Modern Executive Dining Table.jpg"
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
    "img": "assets/products/center-tables/cat-dark-walnut-rectangular-dining-table-b/Dark Walnut Rectangular Dining Table B.jpg",
    "images": [
      "assets/products/center-tables/cat-dark-walnut-rectangular-dining-table-b/Dark Walnut Rectangular Dining Table B.jpg"
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
    "img": "assets/products/chairs/cat-delta-modern-office-table/Delta Modern Office Table - Front View.png",
    "images": [
      "assets/products/chairs/cat-delta-modern-office-table/Delta Modern Office Table - Front View.png"
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
    "img": "assets/products/center-tables/cat-glass-top-dining-table-with-wooden-a-frame-base/Glass Top Dining Table with Wooden A-Frame Base.jpg",
    "images": [
      "assets/products/center-tables/cat-glass-top-dining-table-with-wooden-a-frame-base/Glass Top Dining Table with Wooden A-Frame Base.jpg"
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
    "img": "assets/products/center-tables/cat-light-oak-rectangular-dining-table/Light Oak Rectangular Dining Table.jpg",
    "images": [
      "assets/products/center-tables/cat-light-oak-rectangular-dining-table/Light Oak Rectangular Dining Table.jpg"
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
    "img": "assets/products/center-tables/cat-light-oak-trestle-dining-table/Light Oak Trestle Dining Table.jpg",
    "images": [
      "assets/products/center-tables/cat-light-oak-trestle-dining-table/Light Oak Trestle Dining Table.jpg"
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
    "img": "assets/products/center-tables/cat-light-wood-long-dining-table/Light Wood Long Dining Table.jpg",
    "images": [
      "assets/products/center-tables/cat-light-wood-long-dining-table/Light Wood Long Dining Table.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-linea-dresser-study-table-set",
    "name": "Linea Dresser Study Table Set",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Linea Dresser Study Table Set combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-linea-dresser-study-table-set/Linea Dresser Study Table Set - Angle Perspective.png",
    "images": [
      "assets/products/wardrobes-storage/cat-linea-dresser-study-table-set/Linea Dresser Study Table Set - Angle Perspective.png",
      "assets/products/wardrobes-storage/cat-linea-dresser-study-table-set/Linea Dresser Study Table Set - Context View.png",
      "assets/products/wardrobes-storage/cat-linea-dresser-study-table-set/Linea Dresser Study Table Set - Corner Detail.png",
      "assets/products/wardrobes-storage/cat-linea-dresser-study-table-set/Linea Dresser Study Table Set - Elevation View.png",
      "assets/products/wardrobes-storage/cat-linea-dresser-study-table-set/Linea Dresser Study Table Set - Front View.png",
      "assets/products/wardrobes-storage/cat-linea-dresser-study-table-set/Linea Dresser Study Table Set - High Angle View.png",
      "assets/products/wardrobes-storage/cat-linea-dresser-study-table-set/Linea Dresser Study Table Set - Side View.png",
      "assets/products/wardrobes-storage/cat-linea-dresser-study-table-set/Linea Dresser Study Table Set - Studio Showcase.png"
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
    "img": "assets/products/center-tables/cat-minimalist-light-oak-dining-table/Minimalist Light Oak Dining Table.jpg",
    "images": [
      "assets/products/center-tables/cat-minimalist-light-oak-dining-table/Minimalist Light Oak Dining Table.jpg"
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
    "img": "assets/products/dining-tables/cat-modern-dining-room-set-with-marble-table/Modern Dining Room Set with Marble Table.jpg",
    "images": [
      "assets/products/dining-tables/cat-modern-dining-room-set-with-marble-table/Modern Dining Room Set with Marble Table.jpg"
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
    "img": "assets/products/dining-tables/cat-oval-wood-dining-table-with-matching-bench/Oval Wood Dining Table with Matching Bench.jpg",
    "images": [
      "assets/products/dining-tables/cat-oval-wood-dining-table-with-matching-bench/Oval Wood Dining Table with Matching Bench.jpg"
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
    "img": "assets/products/dining-tables/cat-rectangular-dark-wood-dining-table/Rectangular Dark Wood Dining Table.jpg",
    "images": [
      "assets/products/dining-tables/cat-rectangular-dark-wood-dining-table/Rectangular Dark Wood Dining Table.jpg"
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
    "img": "assets/products/center-tables/cat-scandinavian-solid-wood-executive-dining-table/Scandinavian Solid Wood Executive Dining Table.jpg",
    "images": [
      "assets/products/center-tables/cat-scandinavian-solid-wood-executive-dining-table/Scandinavian Solid Wood Executive Dining Table.jpg"
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
    "img": "assets/products/cafe-tables/scandinavian-table-base-white-bracket-frame-with-wooden-legs/Scandinavian Table Base White Bracket Frame with Wooden Legs.png",
    "images": [
      "assets/products/cafe-tables/scandinavian-table-base-white-bracket-frame-with-wooden-legs/Scandinavian Table Base White Bracket Frame with Wooden Legs.png"
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
    "img": "assets/products/dining-tables/cat-scandinavian-white-rectangular-dining-table/Scandinavian White Rectangular Dining Table.png",
    "images": [
      "assets/products/dining-tables/cat-scandinavian-white-rectangular-dining-table/Scandinavian White Rectangular Dining Table.png"
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
    "img": "assets/products/center-tables/cat-sculptural-teak-dining-table/Sculptural Teak Dining Table - Studio View.jpg",
    "images": [
      "assets/products/center-tables/cat-sculptural-teak-dining-table/Sculptural Teak Dining Table - Studio View.jpg"
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
    "img": "assets/products/center-tables/cat-sculptural-trestle-wooden-dining-table/Sculptural Trestle Wooden Dining Table.jpg",
    "images": [
      "assets/products/center-tables/cat-sculptural-trestle-wooden-dining-table/Sculptural Trestle Wooden Dining Table.jpg"
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
    "img": "assets/products/center-tables/cat-tapered-leg-light-oak-dining-table-b/Tapered Leg Light Oak Dining Table B.jpg",
    "images": [
      "assets/products/center-tables/cat-tapered-leg-light-oak-dining-table-b/Tapered Leg Light Oak Dining Table B.jpg"
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
    "img": "assets/products/center-tables/cat-tapered-leg-light-wood-dining-table/Tapered Leg Light Wood Dining Table.jpg",
    "images": [
      "assets/products/center-tables/cat-tapered-leg-light-wood-dining-table/Tapered Leg Light Wood Dining Table.jpg"
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
    "img": "assets/products/center-tables/cat-tapered-leg-walnut-dining-table/Tapered Leg Walnut Dining Table.jpg",
    "images": [
      "assets/products/center-tables/cat-tapered-leg-walnut-dining-table/Tapered Leg Walnut Dining Table.jpg"
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
    "img": "assets/products/center-tables/cat-tapered-leg-walnut-dining-table-c/Tapered Leg Walnut Dining Table C.jpg",
    "images": [
      "assets/products/center-tables/cat-tapered-leg-walnut-dining-table-c/Tapered Leg Walnut Dining Table C.jpg"
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
    "img": "assets/products/center-tables/cat-tapered-leg-wood-dining-table-b/Tapered Leg Wood Dining Table B.jpg",
    "images": [
      "assets/products/center-tables/cat-tapered-leg-wood-dining-table-b/Tapered Leg Wood Dining Table B.jpg"
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
    "img": "assets/products/center-tables/cat-teak-outdoor-dining-table/Teak Outdoor Dining Table.jpg",
    "images": [
      "assets/products/center-tables/cat-teak-outdoor-dining-table/Teak Outdoor Dining Table.jpg"
    ],
    "colors": []
  },
  {
    "id": "lmw-055",
    "name": "LMW-055",
    "category": "dining-tables",
    "type": "chair",
    "material": "Wood",
    "designer": "LayerMax Artistry",
    "rating": 4.3,
    "img": "assets/products/dining-tables/lmw-055/LMW-055.png",
    "badge": "",
    "description": "Gather and dine in elegance with the LMW-055 dining set. Crafted from premium wood to ensure long-lasting durability, this set includes a beautifully finished table and matching chairs. Perfect for daily family meals and entertaining guests alike, it brings timeless charm to your dining space.",
    "images": [
      "assets/products/dining-tables/lmw-055/LMW-055.png",
      "assets/products/dining-tables/lmw-055/LMW-055_2.png",
      "assets/products/dining-tables/lmw-055/LMW-055_3.png"
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
    "img": "assets/products/dining-tables/lmw-056/LMW-056.png",
    "badge": "",
    "description": "Gather and dine in elegance with the LMW-056 dining set. Crafted from premium wood to ensure long-lasting durability, this set includes a beautifully finished table and matching chairs. Perfect for daily family meals and entertaining guests alike, it brings timeless charm to your dining space.",
    "images": [
      "assets/products/dining-tables/lmw-056/LMW-056.png"
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
    "img": "assets/products/dining-tables/lmw-057/LMW-057_2.png",
    "badge": "",
    "description": "Gather and dine in elegance with the LMW-057 dining set. Crafted from premium wood to ensure long-lasting durability, this set includes a beautifully finished table and matching chairs. Perfect for daily family meals and entertaining guests alike, it brings timeless charm to your dining space.",
    "images": [
      "assets/products/dining-tables/lmw-057/LMW-057_2.png"
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
    "img": "assets/products/dining-tables/lmw-058/LMW-058_2.png",
    "badge": "Premium",
    "description": "Gather and dine in elegance with the LMW-058 dining set. Crafted from premium wood to ensure long-lasting durability, this set includes a beautifully finished table and matching chairs. Perfect for daily family meals and entertaining guests alike, it brings timeless charm to your dining space.",
    "images": [
      "assets/products/dining-tables/lmw-058/LMW-058_2.png"
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
    "img": "assets/products/dining-tables/lmw-059/LMW-059.png",
    "badge": "",
    "description": "Gather and dine in elegance with the LMW-059 dining set. Crafted from premium wood to ensure long-lasting durability, this set includes a beautifully finished table and matching chairs. Perfect for daily family meals and entertaining guests alike, it brings timeless charm to your dining space.",
    "images": [
      "assets/products/dining-tables/lmw-059/LMW-059.png"
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
    "img": "assets/products/dining-tables/lmw-060/LMW-060.png",
    "badge": "",
    "description": "Gather and dine in elegance with the LMW-060 dining set. Crafted from premium wood to ensure long-lasting durability, this set includes a beautifully finished table and matching chairs. Perfect for daily family meals and entertaining guests alike, it brings timeless charm to your dining space.",
    "images": [
      "assets/products/dining-tables/lmw-060/LMW-060.png"
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
    "img": "assets/products/dining-tables/lmw-061/LMW-061.png",
    "badge": "",
    "description": "Gather and dine in elegance with the LMW-061 dining set. Crafted from premium wood to ensure long-lasting durability, this set includes a beautifully finished table and matching chairs. Perfect for daily family meals and entertaining guests alike, it brings timeless charm to your dining space.",
    "images": [
      "assets/products/dining-tables/lmw-061/LMW-061.png",
      "assets/products/dining-tables/lmw-061/LMW-061_2.png"
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
    "img": "assets/products/dining-tables/lmw-062/LMW-062.png",
    "badge": "New",
    "description": "Gather and dine in elegance with the LMW-062 dining set. Crafted from premium wood to ensure long-lasting durability, this set includes a beautifully finished table and matching chairs. Perfect for daily family meals and entertaining guests alike, it brings timeless charm to your dining space.",
    "images": [
      "assets/products/dining-tables/lmw-062/LMW-062.png"
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
    "img": "assets/products/dining-tables/lmw-063/LMW-063.png",
    "badge": "Premium",
    "description": "Gather and dine in elegance with the LMW-063 dining set. Crafted from premium wood to ensure long-lasting durability, this set includes a beautifully finished table and matching chairs. Perfect for daily family meals and entertaining guests alike, it brings timeless charm to your dining space.",
    "images": [
      "assets/products/dining-tables/lmw-063/LMW-063.png"
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
    "img": "assets/products/dining-tables/lmw-064/LMW-064.png",
    "badge": "",
    "description": "Gather and dine in elegance with the LMW-064 dining set. Crafted from premium wood to ensure long-lasting durability, this set includes a beautifully finished table and matching chairs. Perfect for daily family meals and entertaining guests alike, it brings timeless charm to your dining space.",
    "images": [
      "assets/products/dining-tables/lmw-064/LMW-064.png"
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
    "img": "assets/products/dining-tables/lmw-065/LMW-065_2.png",
    "badge": "",
    "description": "Gather and dine in elegance with the LMW-065 dining set. Crafted from premium wood to ensure long-lasting durability, this set includes a beautifully finished table and matching chairs. Perfect for daily family meals and entertaining guests alike, it brings timeless charm to your dining space.",
    "images": [
      "assets/products/dining-tables/lmw-065/LMW-065_2.png"
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
    "img": "assets/products/dining-tables/orbis/Orbis_01.png",
    "images": [
      "assets/products/dining-tables/orbis/Orbis_01.png",
      "assets/products/dining-tables/orbis/Orbis_02.png",
      "assets/products/dining-tables/orbis/Orbis_03.png",
      "assets/products/dining-tables/orbis/Orbis_04.png"
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
    "img": "assets/products/dining-tables/rubco-dining-set-6-seater/rubco_dining_set_6_seater_1.jpg",
    "images": [
      "assets/products/dining-tables/rubco-dining-set-6-seater/rubco_dining_set_6_seater_1.jpg",
      "assets/products/dining-tables/rubco-dining-set-6-seater/rubco_dining_set_6_seater_2.jpg",
      "assets/products/dining-tables/rubco-dining-set-6-seater/rubco_dining_set_6_seater_3.jpg"
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
    "img": "assets/products/dining-tables/rubco-dining-table-round-with-empire-leg-40/dining_table_round_with_empire_leg_40.jpg",
    "images": [
      "assets/products/dining-tables/rubco-dining-table-round-with-empire-leg-40/dining_table_round_with_empire_leg_40.jpg",
      "assets/products/dining-tables/rubco-dining-table-round-with-empire-leg-40/dining_table_round_with_empire_leg_40_1.jpg",
      "assets/products/dining-tables/rubco-dining-table-round-with-empire-leg-40/dining_table_round_with_empire_leg_40_2.jpg",
      "assets/products/dining-tables/rubco-dining-table-round-with-empire-leg-40/dining_table_round_with_empire_leg_40_3.jpg",
      "assets/products/dining-tables/rubco-dining-table-round-with-empire-leg-40/dining_table_round_with_empire_leg_40_4.jpg"
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
    "img": "assets/products/dining-tables/rubco-dining-table-round-with-empire-leg-48/dining_table_round_with_empire_leg_48.jpg",
    "images": [
      "assets/products/dining-tables/rubco-dining-table-round-with-empire-leg-48/dining_table_round_with_empire_leg_48.jpg",
      "assets/products/dining-tables/rubco-dining-table-round-with-empire-leg-48/dining_table_round_with_empire_leg_48_1.jpg",
      "assets/products/dining-tables/rubco-dining-table-round-with-empire-leg-48/dining_table_round_with_empire_leg_48_2.jpg",
      "assets/products/dining-tables/rubco-dining-table-round-with-empire-leg-48/dining_table_round_with_empire_leg_48_3.jpg"
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
    "img": "assets/products/dining-tables/rubco-oval-empire-leg-dining-table-set/rubco_oval_empire_leg_dining_table_set.jpg",
    "images": [
      "assets/products/dining-tables/rubco-oval-empire-leg-dining-table-set/rubco_oval_empire_leg_dining_table_set.jpg",
      "assets/products/dining-tables/rubco-oval-empire-leg-dining-table-set/rubco_oval_empire_leg_dining_table_set_1.jpg",
      "assets/products/dining-tables/rubco-oval-empire-leg-dining-table-set/rubco_oval_empire_leg_dining_table_set_2.jpg",
      "assets/products/dining-tables/rubco-oval-empire-leg-dining-table-set/rubco_oval_empire_leg_dining_table_set_3.jpg",
      "assets/products/dining-tables/rubco-oval-empire-leg-dining-table-set/rubco_oval_empire_leg_dining_table_set_4.jpg"
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
    "img": "assets/products/home-theatre-seating/cat-camel-tan-theater-loveseat-recliner/camel_tan_theater_loveseat_recliner.png",
    "images": [
      "assets/products/home-theatre-seating/cat-camel-tan-theater-loveseat-recliner/camel_tan_theater_loveseat_recliner.png"
    ],
    "colors": []
  },
  {
    "id": "cat-charcoal-leather-3seat-theater-recliner",
    "name": "Charcoal Leather 3Seat Theater Recliner",
    "category": "home-theatre-seating",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Charcoal Leather 3Seat Theater Recliner combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/home-theatre-seating/cat-charcoal-leather-3seat-theater-recliner/charcoal_leather_3seat_theater_recliner.png",
    "images": [
      "assets/products/home-theatre-seating/cat-charcoal-leather-3seat-theater-recliner/charcoal_leather_3seat_theater_recliner.png"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-gray-3seat-theater-recliner",
    "name": "Dark Gray 3Seat Theater Recliner",
    "category": "home-theatre-seating",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Gray 3Seat Theater Recliner combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/home-theatre-seating/cat-dark-gray-3seat-theater-recliner/dark_gray_3seat_theater_recliner.png",
    "images": [
      "assets/products/home-theatre-seating/cat-dark-gray-3seat-theater-recliner/dark_gray_3seat_theater_recliner.png"
    ],
    "colors": []
  },
  {
    "id": "cat-espresso-leather-3seat-theater-recliner",
    "name": "Espresso Leather 3Seat Theater Recliner",
    "category": "home-theatre-seating",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Espresso Leather 3Seat Theater Recliner combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/home-theatre-seating/cat-espresso-leather-3seat-theater-recliner/espresso_leather_3seat_theater_recliner.png",
    "images": [
      "assets/products/home-theatre-seating/cat-espresso-leather-3seat-theater-recliner/espresso_leather_3seat_theater_recliner.png"
    ],
    "colors": []
  },
  {
    "id": "cat-light-gray-3person-theater-recliner",
    "name": "Light Gray 3Person Theater Recliner",
    "category": "home-theatre-seating",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Light Gray 3Person Theater Recliner combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/home-theatre-seating/cat-light-gray-3person-theater-recliner/light_gray_3person_theater_recliner.png",
    "images": [
      "assets/products/home-theatre-seating/cat-light-gray-3person-theater-recliner/light_gray_3person_theater_recliner.png"
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
    "img": "assets/products/home-theatre-seating/cat-royal-blue-theater-recliner-row/royal_blue_theater_recliner_row.png",
    "images": [
      "assets/products/home-theatre-seating/cat-royal-blue-theater-recliner-row/royal_blue_theater_recliner_row.png"
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
    "img": "assets/products/mattresses/customise-your-mattress/rubco_iris_mattress.jpg",
    "images": [
      "assets/products/mattresses/customise-your-mattress/rubco_iris_mattress.jpg"
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
    "img": "assets/products/mattresses/rubco-iris-mattress/rubco_iris_mattress.jpg",
    "images": [
      "assets/products/mattresses/rubco-iris-mattress/rubco_iris_mattress.jpg",
      "assets/products/mattresses/rubco-iris-mattress/rubco_iris_mattress_1.jpg"
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
    "img": "assets/products/mattresses/rubco-naturala-100/rubco_naturala_100.jpg",
    "images": [
      "assets/products/mattresses/rubco-naturala-100/rubco_naturala_100.jpg",
      "assets/products/mattresses/rubco-naturala-100/rubco_naturala_100_1.jpg",
      "assets/products/mattresses/rubco-naturala-100/rubco_naturala_100_2.jpg",
      "assets/products/mattresses/rubco-naturala-100/rubco_naturala_100_3.jpg"
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
    "img": "assets/products/mattresses/rubco-naturala-200/rubco_naturala_200.jpg",
    "images": [
      "assets/products/mattresses/rubco-naturala-200/rubco_naturala_200.jpg",
      "assets/products/mattresses/rubco-naturala-200/rubco_naturala_200_1.jpg",
      "assets/products/mattresses/rubco-naturala-200/rubco_naturala_200_2.jpg",
      "assets/products/mattresses/rubco-naturala-200/rubco_naturala_200_3.jpg"
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
    "img": "assets/products/mattresses/rubco-naturala-400/rubco_naturala_400.jpg",
    "images": [
      "assets/products/mattresses/rubco-naturala-400/rubco_naturala_400.jpg",
      "assets/products/mattresses/rubco-naturala-400/rubco_naturala_400_1.jpg",
      "assets/products/mattresses/rubco-naturala-400/rubco_naturala_400_2.jpg",
      "assets/products/mattresses/rubco-naturala-400/rubco_naturala_400_3.jpg",
      "assets/products/mattresses/rubco-naturala-400/rubco_naturala_400_4.jpg"
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
    "img": "assets/products/mattresses/rubco-neo-spine-relief-100/neo_spine_relief_100.jpg",
    "images": [
      "assets/products/mattresses/rubco-neo-spine-relief-100/neo_spine_relief_100.jpg",
      "assets/products/mattresses/rubco-neo-spine-relief-100/neo_spine_relief_100_1.jpg",
      "assets/products/mattresses/rubco-neo-spine-relief-100/neo_spine_relief_100_2.jpg",
      "assets/products/mattresses/rubco-neo-spine-relief-100/neo_spine_relief_100_3.jpg"
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
    "img": "assets/products/mattresses/rubco-neo-spine-relief-200/neo_spine_relief_200.jpg",
    "images": [
      "assets/products/mattresses/rubco-neo-spine-relief-200/neo_spine_relief_200.jpg",
      "assets/products/mattresses/rubco-neo-spine-relief-200/neo_spine_relief_200_1.jpg",
      "assets/products/mattresses/rubco-neo-spine-relief-200/neo_spine_relief_200_2.jpg"
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
    "img": "assets/products/mattresses/rubco-neo-spine-relief-300/neo_spine_relief_300.jpg",
    "images": [
      "assets/products/mattresses/rubco-neo-spine-relief-300/neo_spine_relief_300.jpg",
      "assets/products/mattresses/rubco-neo-spine-relief-300/neo_spine_relief_300_1.jpg",
      "assets/products/mattresses/rubco-neo-spine-relief-300/neo_spine_relief_300_2.jpg"
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
    "img": "assets/products/mattresses/rubco-neo-spine-relief-400/neo_spine_relief_400.jpg",
    "images": [
      "assets/products/mattresses/rubco-neo-spine-relief-400/neo_spine_relief_400.jpg",
      "assets/products/mattresses/rubco-neo-spine-relief-400/neo_spine_relief_400_1.jpg",
      "assets/products/mattresses/rubco-neo-spine-relief-400/neo_spine_relief_400_2.jpg"
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
    "img": "assets/products/mattresses/rubco-safal-mattress/rubco_safal_mattress.jpg",
    "images": [
      "assets/products/mattresses/rubco-safal-mattress/rubco_safal_mattress.jpg",
      "assets/products/mattresses/rubco-safal-mattress/rubco_safal_mattress_1.jpg"
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
    "img": "assets/products/mattresses/rubco-sapphire-mattress/rubco_sapphire_mattress.jpg",
    "images": [
      "assets/products/mattresses/rubco-sapphire-mattress/rubco_sapphire_mattress.jpg",
      "assets/products/mattresses/rubco-sapphire-mattress/rubco_sapphire_mattress_1.jpg"
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
    "img": "assets/products/office-chairs/ace/ACE.png",
    "badge": "",
    "description": "The ACE Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/ace/ACE.png",
      "assets/products/office-chairs/ace/ACE_2.png",
      "assets/products/office-chairs/ace/ACE_3.png",
      "assets/products/office-chairs/ace/ACE_4.png",
      "assets/products/office-chairs/ace/ACE_5.png"
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
    "img": "assets/products/office-chairs/alex/ALEX.png",
    "badge": "",
    "description": "The ALEX Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/alex/ALEX.png",
      "assets/products/office-chairs/alex/ALEX_2.png",
      "assets/products/office-chairs/alex/ALEX_3.png",
      "assets/products/office-chairs/alex/ALEX_4.png",
      "assets/products/office-chairs/alex/ALEX_5.png"
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
    "img": "assets/products/office-chairs/alto/ALTO.png",
    "badge": "",
    "description": "The ALTO Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/alto/ALTO.png"
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
    "img": "assets/products/office-chairs/amigo/AMIGO.png",
    "badge": "",
    "description": "The AMIGO Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/amigo/AMIGO.png",
      "assets/products/office-chairs/amigo/AMIGO_2.png",
      "assets/products/office-chairs/amigo/AMIGO_3.png"
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
    "img": "assets/products/office-chairs/amity/AMITY_2.png",
    "badge": "",
    "description": "A perfect blend of comfort and looks, the AMITY Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Brown or Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/amity/AMITY_2.png",
      "assets/products/office-chairs/amity/AMITY.png",
      "assets/products/office-chairs/amity/AMITY_3.png",
      "assets/products/office-chairs/amity/AMITY_4.png"
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
    "img": "assets/products/office-chairs/amity---ayk/Amity _ AYK - 201.png",
    "images": [
      "assets/products/office-chairs/amity---ayk/Amity _ AYK - 201.png",
      "assets/products/office-chairs/amity---ayk/Amity _ AYK - 201_2.png",
      "assets/products/office-chairs/amity---ayk/Amity _ AYK - 301.png",
      "assets/products/office-chairs/amity---ayk/Amity _ AYK - 301_2.png"
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
    "img": "assets/products/office-chairs/amity---ayl/Amity _ AYL - 201.png",
    "images": [
      "assets/products/office-chairs/amity---ayl/Amity _ AYL - 201.png",
      "assets/products/office-chairs/amity---ayl/Amity _ AYL - 201_2.png",
      "assets/products/office-chairs/amity---ayl/Amity _ AYL - 201_3.png",
      "assets/products/office-chairs/amity---ayl/Amity _ AYL - 201_4.png",
      "assets/products/office-chairs/amity---ayl/Amity _ AYL - 301.png",
      "assets/products/office-chairs/amity---ayl/Amity _ AYL - 301_2.png"
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
    "img": "assets/products/office-chairs/amity---aym/Amity _ AYM - 101.png",
    "images": [
      "assets/products/office-chairs/amity---aym/Amity _ AYM - 101.png",
      "assets/products/office-chairs/amity---aym/Amity _ AYM - 101_2.png",
      "assets/products/office-chairs/amity---aym/Amity _ AYM - 201.png",
      "assets/products/office-chairs/amity---aym/Amity _ AYM - 301.png"
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
    "img": "assets/products/office-chairs/amity---ayn/Amity _ AYN - 101.png",
    "images": [
      "assets/products/office-chairs/amity---ayn/Amity _ AYN - 101.png",
      "assets/products/office-chairs/amity---ayn/Amity _ AYN - 101_2.png",
      "assets/products/office-chairs/amity---ayn/Amity _ AYN - 201.png",
      "assets/products/office-chairs/amity---ayn/Amity _ AYN - 201_2.png"
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
    "img": "assets/products/office-chairs/amity---ays/Amity _ AYS - 101.png",
    "images": [
      "assets/products/office-chairs/amity---ays/Amity _ AYS - 101.png",
      "assets/products/office-chairs/amity---ays/Amity _ AYS - 201.png",
      "assets/products/office-chairs/amity---ays/Amity _ AYS - 301.png",
      "assets/products/office-chairs/amity---ays/Amity _ AYS - 301_2.png"
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
    "img": "assets/products/office-chairs/amity---ayt/Amity _ AYT - 201.png",
    "images": [
      "assets/products/office-chairs/amity---ayt/Amity _ AYT - 201.png",
      "assets/products/office-chairs/amity---ayt/Amity _ AYT - 301.png",
      "assets/products/office-chairs/amity---ayt/Amity _ AYT - 301_2.png",
      "assets/products/office-chairs/amity---ayt/Amity _ AYT - 301_3.png"
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
    "img": "assets/products/office-chairs/amity---ayy/Amity _ AYY - 101.png",
    "images": [
      "assets/products/office-chairs/amity---ayy/Amity _ AYY - 101.png",
      "assets/products/office-chairs/amity---ayy/Amity _ AYY - 201.png",
      "assets/products/office-chairs/amity---ayy/Amity _ AYY - 201_2.png"
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
    "img": "assets/products/office-chairs/amity---sln/Amity _ SLN - 101.png",
    "images": [
      "assets/products/office-chairs/amity---sln/Amity _ SLN - 101.png",
      "assets/products/office-chairs/amity---sln/Amity _ SLN - 101_2.png",
      "assets/products/office-chairs/amity---sln/Amity _ SLN - 201.png",
      "assets/products/office-chairs/amity---sln/Amity _ SLN - 301.png"
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
    "img": "assets/products/office-chairs/amity---sls/Amity _ SLS - 101.png",
    "images": [
      "assets/products/office-chairs/amity---sls/Amity _ SLS - 101.png",
      "assets/products/office-chairs/amity---sls/Amity _ SLS - 201.png",
      "assets/products/office-chairs/amity---sls/Amity _ SLS - 301.png",
      "assets/products/office-chairs/amity---sls/Amity _ SLS - 301_2.png"
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
    "img": "assets/products/office-chairs/apex/APEX.png",
    "badge": "",
    "description": "The APEX Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/apex/APEX.png",
      "assets/products/office-chairs/apex/APEX_2.png",
      "assets/products/office-chairs/apex/APEX_3.png",
      "assets/products/office-chairs/apex/APEX_4.png"
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
    "img": "assets/products/office-chairs/astral/ASTRAL.png",
    "badge": "New",
    "description": "The ASTRAL Office Chair is engineered for premium ergonomic performance. Featuring gas lift, it dynamically adjusts to support your body. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/astral/ASTRAL.png"
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
    "img": "assets/products/office-chairs/atari/ATARI.png",
    "badge": "",
    "description": "The ATARI Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Brown, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/atari/ATARI.png",
      "assets/products/office-chairs/atari/ATARI_2.png"
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
    "img": "assets/products/office-chairs/aura/AURA.png",
    "badge": "Premium",
    "description": "The AURA Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/aura/AURA.png"
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
    "img": "assets/products/office-chairs/avis/AVIS.png",
    "badge": "",
    "description": "The AVIS Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/avis/AVIS.png",
      "assets/products/office-chairs/avis/AVIS_2.png",
      "assets/products/office-chairs/avis/AVIS_3.png"
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
    "img": "assets/products/office-chairs/base/Base.png",
    "badge": "New",
    "description": "The Base Office Chair is engineered for premium ergonomic performance. Featuring armrest, it dynamically adjusts to support your body. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/base/Base.png"
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
    "img": "assets/products/office-chairs/blue/BLUE.png",
    "badge": "",
    "description": "Offering comfort in every hue, the BLUE Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/blue/BLUE.png"
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
    "img": "assets/products/office-chairs/boss/BOSS.png",
    "badge": "",
    "description": "The BOSS Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/boss/BOSS.png"
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
    "img": "assets/products/office-chairs/cosmo/COSMO_3.png",
    "images": [
      "assets/products/office-chairs/cosmo/COSMO_3.png"
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
    "img": "assets/products/office-chairs/drone/DRONE.png",
    "badge": "New",
    "description": "The DRONE Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/drone/DRONE.png"
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
    "img": "assets/products/office-chairs/dune/DUNE.png",
    "badge": "",
    "description": "The DUNE Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/dune/DUNE.png",
      "assets/products/office-chairs/dune/DUNE_2.png",
      "assets/products/office-chairs/dune/DUNE_3.png"
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
    "img": "assets/products/office-chairs/echo/ECHO.png",
    "badge": "",
    "description": "The ECHO Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/echo/ECHO.png",
      "assets/products/office-chairs/echo/ECHO_2.png",
      "assets/products/office-chairs/echo/ECHO_3.png",
      "assets/products/office-chairs/echo/ECHO_4.png"
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
    "img": "assets/products/office-chairs/eclipse/ECLIPSE_2.png",
    "badge": "",
    "description": "Designed around you, the ECLIPSE Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in White or Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/eclipse/ECLIPSE_2.png"
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
    "img": "assets/products/office-chairs/eddie/EDDIE.png",
    "badge": "",
    "description": "The EDDIE Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Brown or Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/eddie/EDDIE.png",
      "assets/products/office-chairs/eddie/EDDIE_2.png",
      "assets/products/office-chairs/eddie/EDDIE_3.png",
      "assets/products/office-chairs/eddie/EDDIE_4.png"
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
    "img": "assets/products/office-chairs/ella/ELLA.png",
    "badge": "",
    "description": "The ELLA Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Red or Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/ella/ELLA.png",
      "assets/products/office-chairs/ella/ELLA_2.png",
      "assets/products/office-chairs/ella/ELLA_3.png",
      "assets/products/office-chairs/ella/ELLA_4.png",
      "assets/products/office-chairs/ella/ELLA_5.png",
      "assets/products/office-chairs/ella/ELLA_6.png"
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
    "img": "assets/products/office-chairs/epic/EPIC.png",
    "badge": "",
    "description": "The EPIC Office Chair is engineered for premium ergonomic performance. Featuring gas lift, it dynamically adjusts to support your body. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/epic/EPIC.png"
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
    "img": "assets/products/office-chairs/flare/FLARE_2.png",
    "images": [
      "assets/products/office-chairs/flare/FLARE_2.png"
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
    "img": "assets/products/office-chairs/genesis/GENESIS.png",
    "badge": "",
    "description": "The GENESIS Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Red, Brown or Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/genesis/GENESIS.png",
      "assets/products/office-chairs/genesis/GENESIS_2.png",
      "assets/products/office-chairs/genesis/GENESIS_3.png",
      "assets/products/office-chairs/genesis/GENESIS_4.png"
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
    "img": "assets/products/office-chairs/grey/GREY.png",
    "badge": "",
    "description": "Offering comfort in every hue, the GREY Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/grey/GREY.png",
      "assets/products/office-chairs/grey/GREY_2.png"
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
    "img": "assets/products/office-chairs/hacer---hc---u/Hacer _ HC - U - 101.png",
    "images": [
      "assets/products/office-chairs/hacer---hc---u/Hacer _ HC - U - 101.png",
      "assets/products/office-chairs/hacer---hc---u/Hacer _ HC - U - 301.png"
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
    "img": "assets/products/office-chairs/hacer---hc---v/Hacer _ HC - V - 101.png",
    "images": [
      "assets/products/office-chairs/hacer---hc---v/Hacer _ HC - V - 101.png",
      "assets/products/office-chairs/hacer---hc---v/Hacer _ HC - V - 301.png"
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
    "img": "assets/products/office-chairs/hacer---hc---x/Hacer _ HC - X - 101.png",
    "images": [
      "assets/products/office-chairs/hacer---hc---x/Hacer _ HC - X - 101.png",
      "assets/products/office-chairs/hacer---hc---x/Hacer _ HC - X - 301.png"
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
    "img": "assets/products/office-chairs/hacer---hca/Hacer _ HCA -101.png",
    "images": [
      "assets/products/office-chairs/hacer---hca/Hacer _ HCA -101.png",
      "assets/products/office-chairs/hacer---hca/Hacer _ HCA -101_2.png",
      "assets/products/office-chairs/hacer---hca/Hacer _ HCA -301.png",
      "assets/products/office-chairs/hacer---hca/Hacer _ HCA -301_2.png"
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
    "img": "assets/products/office-chairs/hacer---hcm/Hacer _ HCM - 101.png",
    "images": [
      "assets/products/office-chairs/hacer---hcm/Hacer _ HCM - 101.png",
      "assets/products/office-chairs/hacer---hcm/Hacer _ HCM - 201.png",
      "assets/products/office-chairs/hacer---hcm/Hacer _ HCM - 201_2.png",
      "assets/products/office-chairs/hacer---hcm/Hacer _ HCM - 201_3.png"
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
    "img": "assets/products/office-chairs/hacer---hcr/Hacer _ HCR -101.png",
    "images": [
      "assets/products/office-chairs/hacer---hcr/Hacer _ HCR -101.png",
      "assets/products/office-chairs/hacer---hcr/Hacer _ HCR -101_2.png",
      "assets/products/office-chairs/hacer---hcr/Hacer _ HCR -101_3.png",
      "assets/products/office-chairs/hacer---hcr/Hacer _ HCR -201.png",
      "assets/products/office-chairs/hacer---hcr/Hacer _ HCR -201_2.png"
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
    "img": "assets/products/office-chairs/hacer---hcs/Hacer _ HCS -101.png",
    "images": [
      "assets/products/office-chairs/hacer---hcs/Hacer _ HCS -101.png",
      "assets/products/office-chairs/hacer---hcs/Hacer _ HCS -101_2.png",
      "assets/products/office-chairs/hacer---hcs/Hacer _ HCS -101_3.png",
      "assets/products/office-chairs/hacer---hcs/Hacer _ HCS -301.png",
      "assets/products/office-chairs/hacer---hcs/Hacer _ HCS -301_2.png"
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
    "img": "assets/products/office-chairs/hacer---hcz/Hacer _ HCZ - 101.png",
    "images": [
      "assets/products/office-chairs/hacer---hcz/Hacer _ HCZ - 101.png",
      "assets/products/office-chairs/hacer---hcz/Hacer _ HCZ - 201.png",
      "assets/products/office-chairs/hacer---hcz/Hacer _ HCZ - 201_2.png",
      "assets/products/office-chairs/hacer---hcz/Hacer _ HCZ - 301.png"
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
    "img": "assets/products/office-chairs/halo/HALO.png",
    "badge": "",
    "description": "The HALO Office Chair is engineered for premium ergonomic performance. Featuring adjustable seat height for perfect posture, it dynamically adjusts to support your body. Upholstered in high-quality leather and available in Grey or Blue, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/halo/HALO.png"
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
    "img": "assets/products/office-chairs/haven/HAVEN.png",
    "badge": "",
    "description": "The HAVEN Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/haven/HAVEN.png",
      "assets/products/office-chairs/haven/HAVEN_2.png"
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
    "img": "assets/products/office-chairs/hive/HIVE.png",
    "badge": "",
    "description": "The HIVE Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, Blue or Brown, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/hive/HIVE.png",
      "assets/products/office-chairs/hive/HIVE_2.png",
      "assets/products/office-chairs/hive/HIVE_3.png",
      "assets/products/office-chairs/hive/HIVE_4.png",
      "assets/products/office-chairs/hive/HIVE_5.png"
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
    "img": "assets/products/office-chairs/honor/HONOR.png",
    "badge": "",
    "description": "The HONOR Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/honor/HONOR.png"
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
    "img": "assets/products/office-chairs/hug/HUG.png",
    "badge": "",
    "description": "The HUG Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Blue or Brown, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/hug/HUG.png",
      "assets/products/office-chairs/hug/HUG_2.png"
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
    "img": "assets/products/office-chairs/hulk/HULK.png",
    "badge": "",
    "description": "The HULK Office Chair is engineered for premium ergonomic performance. Featuring gas lift, it dynamically adjusts to support your body. Upholstered in high-quality leather and available in Brown or Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/hulk/HULK.png",
      "assets/products/office-chairs/hulk/HULK_2.png"
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
    "img": "assets/products/office-chairs/ice/ICE.png",
    "badge": "",
    "description": "The ICE Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey or Blue, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/ice/ICE.png",
      "assets/products/office-chairs/ice/ICE_2.png"
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
    "img": "assets/products/office-chairs/infinity/INFINITY.png",
    "badge": "",
    "description": "The INFINITY Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/infinity/INFINITY.png",
      "assets/products/office-chairs/infinity/INFINITY_2.png",
      "assets/products/office-chairs/infinity/INFINITY_3.png"
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
    "img": "assets/products/office-chairs/inox/INOX.png",
    "badge": "",
    "description": "The INOX Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/inox/INOX.png",
      "assets/products/office-chairs/inox/INOX_2.png"
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
    "img": "assets/products/office-chairs/jacob/JACOB.png",
    "badge": "Premium",
    "description": "The JACOB Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/jacob/JACOB.png"
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
    "img": "assets/products/office-chairs/jade/JADE.png",
    "badge": "New",
    "description": "The JADE Office Chair is engineered for premium ergonomic performance. Featuring gas lift, it dynamically adjusts to support your body. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/jade/JADE.png"
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
    "img": "assets/products/office-chairs/jazz/JAZZ.png",
    "badge": "",
    "description": "The JAZZ Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/jazz/JAZZ.png",
      "assets/products/office-chairs/jazz/JAZZ_2.png"
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
    "img": "assets/products/office-chairs/joe/JOE.png",
    "badge": "Premium",
    "description": "The JOE Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, Blue, Red, White or Yellow, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/joe/JOE.png",
      "assets/products/office-chairs/joe/JOE_2.png",
      "assets/products/office-chairs/joe/JOE_3.png",
      "assets/products/office-chairs/joe/JOE_4.png",
      "assets/products/office-chairs/joe/JOE_5.png",
      "assets/products/office-chairs/joe/JOE_6.png"
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
    "img": "assets/products/office-chairs/kinetic/KINETIC.png",
    "badge": "",
    "description": "The KINETIC Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/kinetic/KINETIC.png",
      "assets/products/office-chairs/kinetic/KINETIC_2.png",
      "assets/products/office-chairs/kinetic/KINETIC_3.png",
      "assets/products/office-chairs/kinetic/KINETIC_4.png"
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
    "img": "assets/products/office-chairs/knox/KNOX.png",
    "badge": "New",
    "description": "The KNOX Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/knox/KNOX.png",
      "assets/products/office-chairs/knox/KNOX_2.png"
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
    "img": "assets/products/office-chairs/lara/LARA.png",
    "badge": "",
    "description": "The LARA Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Red or Yellow, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/lara/LARA.png",
      "assets/products/office-chairs/lara/LARA_2.png"
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
    "img": "assets/products/office-chairs/liberty/LIBERTY.png",
    "badge": "",
    "description": "The LIBERTY Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Brown, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/liberty/LIBERTY.png"
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
    "img": "assets/products/office-chairs/luna/LUNA.png",
    "badge": "",
    "description": "The LUNA Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/luna/LUNA.png",
      "assets/products/office-chairs/luna/LUNA_2.png",
      "assets/products/office-chairs/luna/LUNA_3.png"
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
    "img": "assets/products/office-chairs/mars/MARS.png",
    "badge": "",
    "description": "The MARS Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/mars/MARS.png"
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
    "img": "assets/products/office-chairs/matrix/MATRIX.png",
    "badge": "",
    "description": "The MATRIX Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, Green, Red or Brown, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/matrix/MATRIX.png",
      "assets/products/office-chairs/matrix/MATRIX_2.png",
      "assets/products/office-chairs/matrix/MATRIX_3.png",
      "assets/products/office-chairs/matrix/MATRIX_4.png",
      "assets/products/office-chairs/matrix/MATRIX_5.png"
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
    "img": "assets/products/office-chairs/meteor/METEOR.png",
    "badge": "",
    "description": "Add color to every conversation, the METEOR Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/meteor/METEOR.png"
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
    "img": "assets/products/office-chairs/mylo/MYLO.png",
    "badge": "",
    "description": "The MYLO Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/mylo/MYLO.png"
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
    "img": "assets/products/office-chairs/neo/NEO.png",
    "badge": "Bestseller",
    "description": "The NEO Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/neo/NEO.png",
      "assets/products/office-chairs/neo/NEO_2.png",
      "assets/products/office-chairs/neo/NEO_3.png",
      "assets/products/office-chairs/neo/NEO_4.png"
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
    "img": "assets/products/office-chairs/nexus/NEXUS.png",
    "badge": "",
    "description": "The NEXUS Office Chair is engineered for premium ergonomic performance. Featuring headrest, it dynamically adjusts to support your body. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/nexus/NEXUS.png"
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
    "img": "assets/products/office-chairs/ninza/NINZA.png",
    "badge": "",
    "description": "The NINZA Office Chair is engineered for premium ergonomic performance. Featuring headrest, it dynamically adjusts to support your body. Upholstered in high-quality leather and available in Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/ninza/NINZA.png"
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
    "img": "assets/products/office-chairs/nova/NOVA.png",
    "badge": "Premium",
    "description": "The NOVA Office Chair is engineered for premium ergonomic performance. Featuring headrest, it dynamically adjusts to support your body. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/nova/NOVA.png"
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
    "img": "assets/products/office-chairs/oasis/OASIS.png",
    "badge": "",
    "description": "The OASIS Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/oasis/OASIS.png",
      "assets/products/office-chairs/oasis/OASIS_2.png",
      "assets/products/office-chairs/oasis/OASIS_3.png",
      "assets/products/office-chairs/oasis/OASIS_4.png"
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
    "img": "assets/products/office-chairs/oliver/OLIVER.png",
    "badge": "",
    "description": "The OLIVER Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Brown, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/oliver/OLIVER.png"
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
    "img": "assets/products/office-chairs/orion/ORION.png",
    "badge": "",
    "description": "The ORION Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/orion/ORION.png"
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
    "img": "assets/products/office-chairs/oscar/OSCAR.png",
    "badge": "New",
    "description": "The OSCAR Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/oscar/OSCAR.png"
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
    "img": "assets/products/office-chairs/otto/OTTO.png",
    "badge": "New",
    "description": "The OTTO Office Chair is engineered for premium ergonomic performance. Featuring headrest, it dynamically adjusts to support your body. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/otto/OTTO.png"
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
    "img": "assets/products/office-chairs/polaris/POLARIS.png",
    "badge": "",
    "description": "The POLARIS Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Red, Brown, Grey or Blue, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/polaris/POLARIS.png",
      "assets/products/office-chairs/polaris/POLARIS_2.png",
      "assets/products/office-chairs/polaris/POLARIS_3.png",
      "assets/products/office-chairs/polaris/POLARIS_4.png",
      "assets/products/office-chairs/polaris/POLARIS_5.png",
      "assets/products/office-chairs/polaris/POLARIS_6.png"
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
    "img": "assets/products/office-chairs/prime/PRIME.png",
    "badge": "",
    "description": "The PRIME Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey or Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/prime/PRIME.png",
      "assets/products/office-chairs/prime/PRIME_2.png",
      "assets/products/office-chairs/prime/PRIME_3.png",
      "assets/products/office-chairs/prime/PRIME_4.png",
      "assets/products/office-chairs/prime/PRIME_5.png",
      "assets/products/office-chairs/prime/PRIME_6.png"
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
    "img": "assets/products/office-chairs/proxima/PROXIMA.png",
    "badge": "New",
    "description": "The PROXIMA Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey or Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/proxima/PROXIMA.png",
      "assets/products/office-chairs/proxima/PROXIMA_2.png"
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
    "img": "assets/products/office-chairs/pulse/PULSE.png",
    "badge": "",
    "description": "The PULSE Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/pulse/PULSE.png",
      "assets/products/office-chairs/pulse/PULSE_2.png"
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
    "img": "assets/products/office-chairs/quasar/QUASAR.png",
    "badge": "",
    "description": "The QUASAR Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/quasar/QUASAR.png"
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
    "img": "assets/products/office-chairs/rafael/RAFAEL.png",
    "badge": "",
    "description": "The RAFAEL Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey or Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/rafael/RAFAEL.png",
      "assets/products/office-chairs/rafael/RAFAEL_2.png"
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
    "img": "assets/products/office-chairs/red/RED.png",
    "badge": "",
    "description": "Offering comfort in every hue, the RED Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/red/RED.png",
      "assets/products/office-chairs/red/RED_2.png",
      "assets/products/office-chairs/red/RED_3.png"
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
    "img": "assets/products/office-chairs/ritz/RITZ.png",
    "badge": "New",
    "description": "The RITZ Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/ritz/RITZ.png"
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
    "img": "assets/products/office-chairs/sirius/SIRIUS.png",
    "badge": "",
    "description": "Where comfort meets bold design, the SIRIUS Office Chair provides the ultimate professional seating experience. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Red or Brown, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/sirius/SIRIUS.png",
      "assets/products/office-chairs/sirius/SIRIUS_2.png"
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
    "img": "assets/products/office-chairs/slink/SLINK.png",
    "badge": "",
    "description": "The SLINK Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Blue or Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/slink/SLINK.png",
      "assets/products/office-chairs/slink/SLINK_2.png",
      "assets/products/office-chairs/slink/SLINK_3.png",
      "assets/products/office-chairs/slink/SLINK_4.png",
      "assets/products/office-chairs/slink/SLINK_5.png"
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
    "img": "assets/products/office-chairs/solaris/SOLARIS.png",
    "badge": "",
    "description": "The SOLARIS Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/solaris/SOLARIS.png"
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
    "img": "assets/products/office-chairs/spectra/SPECTRA.png",
    "badge": "",
    "description": "The SPECTRA Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/spectra/SPECTRA.png"
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
    "img": "assets/products/office-chairs/storm/STORM.png",
    "badge": "",
    "description": "The STORM Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/storm/STORM.png",
      "assets/products/office-chairs/storm/STORM_2.png"
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
    "img": "assets/products/office-chairs/summit/SUMMIT.png",
    "badge": "",
    "description": "The SUMMIT Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Red or Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/summit/SUMMIT.png",
      "assets/products/office-chairs/summit/SUMMIT_2.png"
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
    "img": "assets/products/office-chairs/swan/SWAN.png",
    "badge": "New",
    "description": "The SWAN Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey or Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/swan/SWAN.png",
      "assets/products/office-chairs/swan/SWAN_2.png",
      "assets/products/office-chairs/swan/SWAN_3.png",
      "assets/products/office-chairs/swan/SWAN_4.png"
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
    "img": "assets/products/office-chairs/tag/TAG.png",
    "badge": "New",
    "description": "The TAG Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey or Red, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/tag/TAG.png",
      "assets/products/office-chairs/tag/TAG_2.png",
      "assets/products/office-chairs/tag/TAG_3.png",
      "assets/products/office-chairs/tag/TAG_4.png",
      "assets/products/office-chairs/tag/TAG_5.png",
      "assets/products/office-chairs/tag/TAG_6.png",
      "assets/products/office-chairs/tag/TAG_7.png"
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
    "img": "assets/products/office-chairs/titan/TITAN.png",
    "badge": "",
    "description": "The TITAN Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/titan/TITAN.png"
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
    "img": "assets/products/office-chairs/tom/TOM.png",
    "badge": "",
    "description": "The TOM Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/tom/TOM.png",
      "assets/products/office-chairs/tom/TOM_2.png",
      "assets/products/office-chairs/tom/TOM_3.png"
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
    "img": "assets/products/office-chairs/torq---tqn/Torq _ TQN - 101.png",
    "images": [
      "assets/products/office-chairs/torq---tqn/Torq _ TQN - 101.png",
      "assets/products/office-chairs/torq---tqn/Torq _ TQN - 201.png",
      "assets/products/office-chairs/torq---tqn/Torq _ TQN - 301.png",
      "assets/products/office-chairs/torq---tqn/Torq _ TQN - 301_2.png"
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
    "img": "assets/products/office-chairs/torq---tqs/Torq _ TQS - 201.png",
    "images": [
      "assets/products/office-chairs/torq---tqs/Torq _ TQS - 201.png",
      "assets/products/office-chairs/torq---tqs/Torq _ TQS - 301.png"
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
    "img": "assets/products/office-chairs/torq---tqx/Torq _ TQX - 201_2.png",
    "images": [
      "assets/products/office-chairs/torq---tqx/Torq _ TQX - 201_2.png",
      "assets/products/office-chairs/torq---tqx/Torq _ TQX - 201.png",
      "assets/products/office-chairs/torq---tqx/Torq _ TQX - 301.png"
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
    "img": "assets/products/office-chairs/torq---tqy/Torq _ TQY - 101.png",
    "images": [
      "assets/products/office-chairs/torq---tqy/Torq _ TQY - 101.png",
      "assets/products/office-chairs/torq---tqy/Torq _ TQY - 201.png",
      "assets/products/office-chairs/torq---tqy/Torq _ TQY - 301.png",
      "assets/products/office-chairs/torq---tqy/Torq _ TQY - 301_2.png"
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
    "img": "assets/products/office-chairs/torq---tqz/Torq _ TQZ - 101.png",
    "images": [
      "assets/products/office-chairs/torq---tqz/Torq _ TQZ - 101.png",
      "assets/products/office-chairs/torq---tqz/Torq _ TQZ - 201.png",
      "assets/products/office-chairs/torq---tqz/Torq _ TQZ - 301.png",
      "assets/products/office-chairs/torq---tqz/Torq _ TQZ - 301_2.png"
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
    "img": "assets/products/office-chairs/valor/VALOR.png",
    "badge": "",
    "description": "The VALOR Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Yellow or Brown, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/valor/VALOR.png",
      "assets/products/office-chairs/valor/VALOR_2.png",
      "assets/products/office-chairs/valor/VALOR_3.png",
      "assets/products/office-chairs/valor/VALOR_4.png"
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
    "img": "assets/products/office-chairs/vega/VEGA.png",
    "badge": "",
    "description": "The VEGA Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/vega/VEGA.png"
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
    "img": "assets/products/office-chairs/vertex/VERTEX.png",
    "badge": "Premium",
    "description": "The VERTEX Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/vertex/VERTEX.png"
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
    "img": "assets/products/office-chairs/virgo/VIRGO.png",
    "badge": "",
    "description": "The VIRGO Office Chair is engineered for premium ergonomic performance. Featuring headrest, it dynamically adjusts to support your body. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/virgo/VIRGO.png"
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
    "img": "assets/products/office-chairs/vista/VISTA.png",
    "badge": "",
    "description": "The VISTA Office Chair is engineered for premium ergonomic performance. Featuring headrest, it dynamically adjusts to support your body. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/vista/VISTA.png"
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
    "img": "assets/products/office-chairs/vortex/VORTEX.png",
    "badge": "",
    "description": "The VORTEX Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/vortex/VORTEX.png"
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
    "img": "assets/products/office-chairs/vyom/VYOM.png",
    "badge": "New",
    "description": "The VYOM Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/vyom/VYOM.png"
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
    "img": "assets/products/office-chairs/waves/WAVES.png",
    "badge": "Premium",
    "description": "The WAVES Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/waves/WAVES.png"
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
    "img": "assets/products/office-chairs/willow---wlx/Willow _ WLX -101.png",
    "images": [
      "assets/products/office-chairs/willow---wlx/Willow _ WLX -101.png",
      "assets/products/office-chairs/willow---wlx/Willow _ WLX -201.png",
      "assets/products/office-chairs/willow---wlx/Willow _ WLX -301.png",
      "assets/products/office-chairs/willow---wlx/Willow _ WLX -301_2.png"
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
    "img": "assets/products/office-chairs/willow---wlz/Willow _ WLZ -101.png",
    "images": [
      "assets/products/office-chairs/willow---wlz/Willow _ WLZ -101.png",
      "assets/products/office-chairs/willow---wlz/Willow _ WLZ -201.png",
      "assets/products/office-chairs/willow---wlz/Willow _ WLZ -301.png",
      "assets/products/office-chairs/willow---wlz/Willow _ WLZ -301_2.png"
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
    "img": "assets/products/office-chairs/wolf/WOLF.png",
    "badge": "Bestseller",
    "description": "The WOLF Office Chair is engineered for premium ergonomic performance. Featuring headrest, it dynamically adjusts to support your body. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/wolf/WOLF.png"
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
    "img": "assets/products/office-chairs/yak/YAK.png",
    "badge": "New",
    "description": "The YAK Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/yak/YAK.png"
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
    "img": "assets/products/office-chairs/yellow/YELLOW.png",
    "badge": "Bestseller",
    "description": "The YELLOW Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/yellow/YELLOW.png",
      "assets/products/office-chairs/yellow/YELLOW_2.png",
      "assets/products/office-chairs/yellow/YELLOW_3.png"
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
    "img": "assets/products/office-chairs/zeal---ab/Zeal _ AB - 100.png",
    "images": [
      "assets/products/office-chairs/zeal---ab/Zeal _ AB - 100.png",
      "assets/products/office-chairs/zeal---ab/Zeal _ AB - 400.png",
      "assets/products/office-chairs/zeal---ab/Zeal _ AB - 600.png",
      "assets/products/office-chairs/zeal---ab/Zeal _ AB - 600_2.png"
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
    "img": "assets/products/office-chairs/zen/ZEN.png",
    "badge": "",
    "description": "The ZEN Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality fabric and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/zen/ZEN.png",
      "assets/products/office-chairs/zen/ZEN_2.png",
      "assets/products/office-chairs/zen/ZEN_3.png",
      "assets/products/office-chairs/zen/ZEN_4.png",
      "assets/products/office-chairs/zen/ZEN_5.png"
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
    "img": "assets/products/office-chairs/zenith/ZENITH.png",
    "badge": "",
    "description": "The ZENITH Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/zenith/ZENITH.png"
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
    "img": "assets/products/office-chairs/zephyr/ZEPHYR.png",
    "badge": "",
    "description": "The ZEPHYR Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey or Brown, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/zephyr/ZEPHYR.png",
      "assets/products/office-chairs/zephyr/ZEPHYR_2.png",
      "assets/products/office-chairs/zephyr/ZEPHYR_3.png",
      "assets/products/office-chairs/zephyr/ZEPHYR_4.png"
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
    "img": "assets/products/office-chairs/zylo/ZYLO.png",
    "badge": "",
    "description": "The ZYLO Office Chair is engineered for premium ergonomic performance. Featuring customizable ergonomic controls and a contoured backrest, it is designed to promote healthy posture. Upholstered in high-quality leather and available in Grey, it brings modern styling and exceptional durability to any workspace.",
    "images": [
      "assets/products/office-chairs/zylo/ZYLO.png"
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
    "img": "assets/products/office-workstations/admiral/Admiral_01.png",
    "images": [
      "assets/products/office-workstations/admiral/Admiral_01.png",
      "assets/products/office-workstations/admiral/Admiral_02.png",
      "assets/products/office-workstations/admiral/Admiral_03.png",
      "assets/products/office-workstations/admiral/Admiral_04.png",
      "assets/products/office-workstations/admiral/Admiral_05.png",
      "assets/products/office-workstations/admiral/Admiral_06.png",
      "assets/products/office-workstations/admiral/Admiral_07.png",
      "assets/products/office-workstations/admiral/Admiral_08.png",
      "assets/products/office-workstations/admiral/Admiral_09.png",
      "assets/products/office-workstations/admiral/Admiral_10.png",
      "assets/products/office-workstations/admiral/Admiral_11.png",
      "assets/products/office-workstations/admiral/Admiral_12.png",
      "assets/products/office-workstations/admiral/Admiral_13.png",
      "assets/products/office-workstations/admiral/Admiral_14.png",
      "assets/products/office-workstations/admiral/Admiral_15.png",
      "assets/products/office-workstations/admiral/Admiral_16.png",
      "assets/products/office-workstations/admiral/Admiral_17.png",
      "assets/products/office-workstations/admiral/Admiral_18.png",
      "assets/products/office-workstations/admiral/Admiral_19.png",
      "assets/products/office-workstations/admiral/Admiral_20.png"
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
    "img": "assets/products/office-workstations/airis/Airis_01.png",
    "images": [
      "assets/products/office-workstations/airis/Airis_01.png",
      "assets/products/office-workstations/airis/Airis_02.png"
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
    "img": "assets/products/office-workstations/alein/Alein_01.png",
    "images": [
      "assets/products/office-workstations/alein/Alein_01.png",
      "assets/products/office-workstations/alein/Alein_02.png",
      "assets/products/office-workstations/alein/Alein_03.png",
      "assets/products/office-workstations/alein/Alein_04.png"
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
    "img": "assets/products/office-workstations/altair/Altair_01.png",
    "images": [
      "assets/products/office-workstations/altair/Altair_01.png",
      "assets/products/office-workstations/altair/Altair_02.png",
      "assets/products/office-workstations/altair/Altair_03.png",
      "assets/products/office-workstations/altair/Altair_04.png"
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
    "img": "assets/products/office-workstations/angulo/Angulo_01.png",
    "images": [
      "assets/products/office-workstations/angulo/Angulo_01.png"
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
    "img": "assets/products/office-workstations/arvele/Arvele_01.png",
    "images": [
      "assets/products/office-workstations/arvele/Arvele_01.png",
      "assets/products/office-workstations/arvele/Arvele_02.png",
      "assets/products/office-workstations/arvele/Arvele_03.png"
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
    "img": "assets/products/office-workstations/atria/Atria_01.png",
    "images": [
      "assets/products/office-workstations/atria/Atria_01.png",
      "assets/products/office-workstations/atria/Atria_02.png",
      "assets/products/office-workstations/atria/Atria_03.png",
      "assets/products/office-workstations/atria/Atria_04.png"
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
    "img": "assets/products/office-workstations/cabin_computer_tables/Cabin_Computer_Tables_01.png",
    "images": [
      "assets/products/office-workstations/cabin_computer_tables/Cabin_Computer_Tables_01.png",
      "assets/products/office-workstations/cabin_computer_tables/Cabin_Computer_Tables_02.png",
      "assets/products/office-workstations/cabin_computer_tables/Cabin_Computer_Tables_03.png",
      "assets/products/office-workstations/cabin_computer_tables/Cabin_Computer_Tables_04.png",
      "assets/products/office-workstations/cabin_computer_tables/Cabin_Computer_Tables_05.png",
      "assets/products/office-workstations/cabin_computer_tables/Cabin_Computer_Tables_06.png",
      "assets/products/office-workstations/cabin_computer_tables/Cabin_Computer_Tables_07.png",
      "assets/products/office-workstations/cabin_computer_tables/Cabin_Computer_Tables_08.png",
      "assets/products/office-workstations/cabin_computer_tables/Cabin_Computer_Tables_09.png",
      "assets/products/office-workstations/cabin_computer_tables/Cabin_Computer_Tables_10.png",
      "assets/products/office-workstations/cabin_computer_tables/Cabin_Computer_Tables_11.png"
    ],
    "colors": [
      "Moldau Acacia Dark CABIN"
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
    "img": "assets/products/office-workstations/cat-admiral-executive-desk/Admiral Executive Desk - Angle Perspective.png",
    "images": [
      "assets/products/office-workstations/cat-admiral-executive-desk/Admiral Executive Desk - Angle Perspective.png",
      "assets/products/office-workstations/cat-admiral-executive-desk/Admiral Executive Desk - Close Up Detail.png",
      "assets/products/office-workstations/cat-admiral-executive-desk/Admiral Executive Desk - Context View.png",
      "assets/products/office-workstations/cat-admiral-executive-desk/Admiral Executive Desk - Corner Detail.png",
      "assets/products/office-workstations/cat-admiral-executive-desk/Admiral Executive Desk - Elevation View.png",
      "assets/products/office-workstations/cat-admiral-executive-desk/Admiral Executive Desk - Front View.png",
      "assets/products/office-workstations/cat-admiral-executive-desk/Admiral Executive Desk - High Angle View.png",
      "assets/products/office-workstations/cat-admiral-executive-desk/Admiral Executive Desk - Perspective View.png",
      "assets/products/office-workstations/cat-admiral-executive-desk/Admiral Executive Desk - Profile View.png",
      "assets/products/office-workstations/cat-admiral-executive-desk/Admiral Executive Desk - Side View.png",
      "assets/products/office-workstations/cat-admiral-executive-desk/Admiral Executive Desk - Studio Showcase.png"
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
    "img": "assets/products/office-workstations/cat-aerodynamic-walnut-executive-console/aerodynamic_walnut_executive_console.png",
    "images": [
      "assets/products/office-workstations/cat-aerodynamic-walnut-executive-console/aerodynamic_walnut_executive_console.png"
    ],
    "colors": []
  },
  {
    "id": "cat-airis-height-adjustable-standing-desk",
    "name": "Airis Height Adjustable Standing Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Airis Height Adjustable Standing Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-airis-height-adjustable-standing-desk/Airis Standing Desk - Isolated View.png",
    "images": [
      "assets/products/office-workstations/cat-airis-height-adjustable-standing-desk/Airis Standing Desk - Isolated View.png",
      "assets/products/office-workstations/cat-airis-height-adjustable-standing-desk/Airis Standing Desk - Room Context View.png"
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
    "img": "assets/products/office-workstations/cat-alien-executive-l-shaped-desk/Alien Executive Desk - Front Elevation View.png",
    "images": [
      "assets/products/office-workstations/cat-alien-executive-l-shaped-desk/Alien Executive Desk - Front Elevation View.png",
      "assets/products/office-workstations/cat-alien-executive-l-shaped-desk/Alien Executive Desk - Front Perspective View.png",
      "assets/products/office-workstations/cat-alien-executive-l-shaped-desk/Alien Executive Desk - Side Credenza View.png",
      "assets/products/office-workstations/cat-alien-executive-l-shaped-desk/Alien Executive Desk - Studio Interior View.png"
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
    "img": "assets/products/office-workstations/cat-altair-executive-conference-table/Altair Conference Table - Base Structure View.png",
    "images": [
      "assets/products/office-workstations/cat-altair-executive-conference-table/Altair Conference Table - Base Structure View.png",
      "assets/products/office-workstations/cat-altair-executive-conference-table/Altair Conference Table - Room Context View.png",
      "assets/products/office-workstations/cat-altair-executive-conference-table/Altair Conference Table - Studio Overview.png",
      "assets/products/office-workstations/cat-altair-executive-conference-table/Altair Conference Table - Surface Detail View.png"
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
    "img": "assets/products/office-workstations/cat-andromeda-executive-desk/Andromeda Executive Desk - Front View.png",
    "images": [
      "assets/products/office-workstations/cat-andromeda-executive-desk/Andromeda Executive Desk - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "cat-angulo-l-shaped-executive-desk",
    "name": "Angulo L Shaped Executive Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Angulo L Shaped Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-angulo-l-shaped-executive-desk/Angulo L-Shaped Executive Desk - Front View.png",
    "images": [
      "assets/products/office-workstations/cat-angulo-l-shaped-executive-desk/Angulo L-Shaped Executive Desk - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "cat-arvele-executive-desk-system",
    "name": "Arvele Executive Desk System",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Arvele Executive Desk System combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-arvele-executive-desk-system/Arvele Executive Desk - Angle Perspective.png",
    "images": [
      "assets/products/office-workstations/cat-arvele-executive-desk-system/Arvele Executive Desk - Angle Perspective.png",
      "assets/products/office-workstations/cat-arvele-executive-desk-system/Arvele Executive Desk - Front View.png",
      "assets/products/office-workstations/cat-arvele-executive-desk-system/Arvele Executive Desk - Side View.png"
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
    "img": "assets/products/office-workstations/cat-atria-modern-desk/Atria Modern Desk - Angle Perspective.png",
    "images": [
      "assets/products/office-workstations/cat-atria-modern-desk/Atria Modern Desk - Angle Perspective.png",
      "assets/products/office-workstations/cat-atria-modern-desk/Atria Modern Desk - Corner Detail.png",
      "assets/products/office-workstations/cat-atria-modern-desk/Atria Modern Desk - Front View.png",
      "assets/products/office-workstations/cat-atria-modern-desk/Atria Modern Desk - Side View.png"
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
    "img": "assets/products/office-workstations/cat-beige-modern-lshaped-desk-unit/beige_modern_lshaped_desk_unit.png",
    "images": [
      "assets/products/office-workstations/cat-beige-modern-lshaped-desk-unit/beige_modern_lshaped_desk_unit.png"
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
    "img": "assets/products/office-workstations/cat-beige-tan-floating-executive-desk/beige_tan_floating_executive_desk.png",
    "images": [
      "assets/products/office-workstations/cat-beige-tan-floating-executive-desk/beige_tan_floating_executive_desk.png"
    ],
    "colors": []
  },
  {
    "id": "cat-canio-modern-desk",
    "name": "Canio Modern Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Canio Modern Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-canio-modern-desk/Canio Modern Desk - Angle Perspective.png",
    "images": [
      "assets/products/office-workstations/cat-canio-modern-desk/Canio Modern Desk - Angle Perspective.png",
      "assets/products/office-workstations/cat-canio-modern-desk/Canio Modern Desk - Front View.png",
      "assets/products/office-workstations/cat-canio-modern-desk/Canio Modern Desk - Side View.png"
    ],
    "colors": []
  },
  {
    "id": "cat-cendro-executive-desk",
    "name": "Cendro Executive Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cendro Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-cendro-executive-desk/Cendro Executive Desk - Angle Perspective.png",
    "images": [
      "assets/products/office-workstations/cat-cendro-executive-desk/Cendro Executive Desk - Angle Perspective.png",
      "assets/products/office-workstations/cat-cendro-executive-desk/Cendro Executive Desk - Context View.png",
      "assets/products/office-workstations/cat-cendro-executive-desk/Cendro Executive Desk - Corner Detail.png",
      "assets/products/office-workstations/cat-cendro-executive-desk/Cendro Executive Desk - Front View.png",
      "assets/products/office-workstations/cat-cendro-executive-desk/Cendro Executive Desk - Side View.png",
      "assets/products/office-workstations/cat-cendro-executive-desk/Cendro Executive Desk - Studio Showcase.png"
    ],
    "colors": []
  },
  {
    "id": "cat-chief-executive-office-suite",
    "name": "Chief Executive Office Suite",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Chief Executive Office Suite combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-chief-executive-office-suite/Chief Executive Office Suite - Alternative View.png",
    "images": [
      "assets/products/wardrobes-storage/cat-chief-executive-office-suite/Chief Executive Office Suite - Alternative View.png",
      "assets/products/wardrobes-storage/cat-chief-executive-office-suite/Chief Executive Office Suite - Angle Perspective.png",
      "assets/products/wardrobes-storage/cat-chief-executive-office-suite/Chief Executive Office Suite - Close Up Detail.png",
      "assets/products/wardrobes-storage/cat-chief-executive-office-suite/Chief Executive Office Suite - Context View.png",
      "assets/products/wardrobes-storage/cat-chief-executive-office-suite/Chief Executive Office Suite - Corner Detail.png",
      "assets/products/wardrobes-storage/cat-chief-executive-office-suite/Chief Executive Office Suite - Elevation View.png",
      "assets/products/wardrobes-storage/cat-chief-executive-office-suite/Chief Executive Office Suite - Front View.png",
      "assets/products/wardrobes-storage/cat-chief-executive-office-suite/Chief Executive Office Suite - Full View.png",
      "assets/products/wardrobes-storage/cat-chief-executive-office-suite/Chief Executive Office Suite - High Angle View.png",
      "assets/products/wardrobes-storage/cat-chief-executive-office-suite/Chief Executive Office Suite - Overview View.png",
      "assets/products/wardrobes-storage/cat-chief-executive-office-suite/Chief Executive Office Suite - Perspective View.png",
      "assets/products/wardrobes-storage/cat-chief-executive-office-suite/Chief Executive Office Suite - Profile View.png",
      "assets/products/wardrobes-storage/cat-chief-executive-office-suite/Chief Executive Office Suite - Side View.png",
      "assets/products/wardrobes-storage/cat-chief-executive-office-suite/Chief Executive Office Suite - Studio Showcase.png"
    ],
    "colors": []
  },
  {
    "id": "cat-corvo-executive-desk",
    "name": "Corvo Executive Desk",
    "category": "acoustic-pods",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Corvo Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/acoustic-pods/cat-corvo-executive-desk/Corvo Executive Desk - Angle Perspective.png",
    "images": [
      "assets/products/acoustic-pods/cat-corvo-executive-desk/Corvo Executive Desk - Angle Perspective.png",
      "assets/products/acoustic-pods/cat-corvo-executive-desk/Corvo Executive Desk - Front View.png",
      "assets/products/acoustic-pods/cat-corvo-executive-desk/Corvo Executive Desk - Side View.png"
    ],
    "colors": []
  },
  {
    "id": "cat-crest-modular-executive-desk",
    "name": "Crest Modular Executive Desk",
    "category": "acoustic-pods",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Crest Modular Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/acoustic-pods/cat-crest-modular-executive-desk/Crest Modular Executive Desk - Angle Perspective.png",
    "images": [
      "assets/products/acoustic-pods/cat-crest-modular-executive-desk/Crest Modular Executive Desk - Angle Perspective.png",
      "assets/products/acoustic-pods/cat-crest-modular-executive-desk/Crest Modular Executive Desk - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "cat-cubix-modular-workstation",
    "name": "Cubix Modular Workstation",
    "category": "acoustic-pods",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cubix Modular Workstation combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/acoustic-pods/cat-cubix-modular-workstation/Cubix Modular Workstation - Angle Perspective.png",
    "images": [
      "assets/products/acoustic-pods/cat-cubix-modular-workstation/Cubix Modular Workstation - Angle Perspective.png",
      "assets/products/acoustic-pods/cat-cubix-modular-workstation/Cubix Modular Workstation - Corner Detail.png",
      "assets/products/acoustic-pods/cat-cubix-modular-workstation/Cubix Modular Workstation - Front View.png",
      "assets/products/acoustic-pods/cat-cubix-modular-workstation/Cubix Modular Workstation - Side View.png"
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
    "img": "assets/products/office-workstations/cat-curved-wood-executive-desk-comboset/curved_wood_executive_desk_comboset.png",
    "images": [
      "assets/products/office-workstations/cat-curved-wood-executive-desk-comboset/curved_wood_executive_desk_comboset.png"
    ],
    "colors": []
  },
  {
    "id": "cat-cyris-modern-executive-desk",
    "name": "Cyris Modern Executive Desk",
    "category": "acoustic-pods",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cyris Modern Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/acoustic-pods/cat-cyris-modern-executive-desk/Cyris Modern Executive Desk - Angle Perspective.png",
    "images": [
      "assets/products/acoustic-pods/cat-cyris-modern-executive-desk/Cyris Modern Executive Desk - Angle Perspective.png",
      "assets/products/acoustic-pods/cat-cyris-modern-executive-desk/Cyris Modern Executive Desk - Front View.png",
      "assets/products/acoustic-pods/cat-cyris-modern-executive-desk/Cyris Modern Executive Desk - Side View.png"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-brown-2drawer-study-desk-comboset",
    "name": "Dark Brown 2Drawer Study Desk Comboset",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Brown 2Drawer Study Desk Comboset combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-dark-brown-2drawer-study-desk-comboset/dark_brown_2drawer_study_desk_comboset.png",
    "images": [
      "assets/products/office-workstations/cat-dark-brown-2drawer-study-desk-comboset/dark_brown_2drawer_study_desk_comboset.png"
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
    "img": "assets/products/office-workstations/cat-dark-walnut-executive-office-desk/dark_walnut_executive_office_desk.png",
    "images": [
      "assets/products/office-workstations/cat-dark-walnut-executive-office-desk/dark_walnut_executive_office_desk.png"
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
    "img": "assets/products/office-workstations/cat-dark-walnut-executive-writing-desk/dark_walnut_executive_writing_desk.png",
    "images": [
      "assets/products/office-workstations/cat-dark-walnut-executive-writing-desk/dark_walnut_executive_writing_desk.png"
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
    "img": "assets/products/office-workstations/cat-dark-walnut-floating-executive-desk/dark_walnut_floating_executive_desk.png",
    "images": [
      "assets/products/office-workstations/cat-dark-walnut-floating-executive-desk/dark_walnut_floating_executive_desk.png"
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
    "img": "assets/products/office-workstations/cat-dark-walnut-study-desk/dark_walnut_study_desk.png",
    "images": [
      "assets/products/office-workstations/cat-dark-walnut-study-desk/dark_walnut_study_desk.png"
    ],
    "colors": []
  },
  {
    "id": "cat-elio-executive-desk",
    "name": "Elio Executive Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Elio Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-elio-executive-desk/Elio Executive Desk - Angle Perspective.png",
    "images": [
      "assets/products/office-workstations/cat-elio-executive-desk/Elio Executive Desk - Angle Perspective.png",
      "assets/products/office-workstations/cat-elio-executive-desk/Elio Executive Desk - Front View.png"
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
    "img": "assets/products/office-workstations/cat-elion-modern-desk-workstation/Elion Modern Desk Workstation - Angle Perspective.png",
    "images": [
      "assets/products/office-workstations/cat-elion-modern-desk-workstation/Elion Modern Desk Workstation - Angle Perspective.png",
      "assets/products/office-workstations/cat-elion-modern-desk-workstation/Elion Modern Desk Workstation - Corner Detail.png",
      "assets/products/office-workstations/cat-elion-modern-desk-workstation/Elion Modern Desk Workstation - Front View.png",
      "assets/products/office-workstations/cat-elion-modern-desk-workstation/Elion Modern Desk Workstation - Side View.png"
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
    "img": "assets/products/office-workstations/cat-elix-executive-office-desk-system/Elix Executive Desk - Angle Perspective.png",
    "images": [
      "assets/products/office-workstations/cat-elix-executive-office-desk-system/Elix Executive Desk - Angle Perspective.png",
      "assets/products/office-workstations/cat-elix-executive-office-desk-system/Elix Executive Desk - Corner Detail.png",
      "assets/products/office-workstations/cat-elix-executive-office-desk-system/Elix Executive Desk - Front View.png",
      "assets/products/office-workstations/cat-elix-executive-office-desk-system/Elix Executive Desk - Side View.png"
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
    "img": "assets/products/office-workstations/cat-erom-modern-executive-desk/Erom Modern Executive Desk - Angle Perspective.png",
    "images": [
      "assets/products/office-workstations/cat-erom-modern-executive-desk/Erom Modern Executive Desk - Angle Perspective.png",
      "assets/products/office-workstations/cat-erom-modern-executive-desk/Erom Modern Executive Desk - Corner Detail.png",
      "assets/products/office-workstations/cat-erom-modern-executive-desk/Erom Modern Executive Desk - Front View.png",
      "assets/products/office-workstations/cat-erom-modern-executive-desk/Erom Modern Executive Desk - Side View.png"
    ],
    "colors": []
  },
  {
    "id": "cat-evon-executive-desk-system",
    "name": "Evon Executive Desk System",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Evon Executive Desk System combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-evon-executive-desk-system/Evon Executive Desk System - Front View.png",
    "images": [
      "assets/products/office-workstations/cat-evon-executive-desk-system/Evon Executive Desk System - Front View.png"
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
    "img": "assets/products/office-workstations/cat-executive-lshaped-wood-desk/executive_lshaped_wood_desk.png",
    "images": [
      "assets/products/office-workstations/cat-executive-lshaped-wood-desk/executive_lshaped_wood_desk.png"
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
    "img": "assets/products/office-workstations/cat-forge-modular-executive-desk/Forge Modular Executive Desk - Front View.png",
    "images": [
      "assets/products/office-workstations/cat-forge-modular-executive-desk/Forge Modular Executive Desk - Front View.png"
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
    "img": "assets/products/office-workstations/cat-futuristic-silver-reception-desk/futuristic_silver_reception_desk.png",
    "images": [
      "assets/products/office-workstations/cat-futuristic-silver-reception-desk/futuristic_silver_reception_desk.png"
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
    "img": "assets/products/office-workstations/cat-futuristic-white-gold-executive-desk/futuristic_white_gold_executive_desk.png",
    "images": [
      "assets/products/office-workstations/cat-futuristic-white-gold-executive-desk/futuristic_white_gold_executive_desk.png"
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
    "img": "assets/products/office-workstations/cat-gray-white-compact-study-desk/gray_white_compact_study_desk.png",
    "images": [
      "assets/products/office-workstations/cat-gray-white-compact-study-desk/gray_white_compact_study_desk.png"
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
    "img": "assets/products/office-workstations/cat-helio-modern-executive-desk/Helio Modern Executive Desk - Front View.png",
    "images": [
      "assets/products/office-workstations/cat-helio-modern-executive-desk/Helio Modern Executive Desk - Front View.png"
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
    "img": "assets/products/office-workstations/cat-kyro-executive-desk-system/Kyro Executive Desk - Angle Perspective.png",
    "images": [
      "assets/products/office-workstations/cat-kyro-executive-desk-system/Kyro Executive Desk - Angle Perspective.png",
      "assets/products/office-workstations/cat-kyro-executive-desk-system/Kyro Executive Desk - Front View.png"
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
    "img": "assets/products/office-workstations/cat-light-oak-minimalist-desk/light_oak_minimalist_desk.png",
    "images": [
      "assets/products/office-workstations/cat-light-oak-minimalist-desk/light_oak_minimalist_desk.png"
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
    "img": "assets/products/office-workstations/cat-lior-executive-desk-system/Lior Executive Desk System - Angle Perspective.png",
    "images": [
      "assets/products/office-workstations/cat-lior-executive-desk-system/Lior Executive Desk System - Angle Perspective.png",
      "assets/products/office-workstations/cat-lior-executive-desk-system/Lior Executive Desk System - Front View.png",
      "assets/products/office-workstations/cat-lior-executive-desk-system/Lior Executive Desk System - Side View.png"
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
    "img": "assets/products/office-workstations/cat-liora-height-adjustable-standing-desk/Liora Standing Desk - Angle Perspective.png",
    "images": [
      "assets/products/office-workstations/cat-liora-height-adjustable-standing-desk/Liora Standing Desk - Angle Perspective.png",
      "assets/products/office-workstations/cat-liora-height-adjustable-standing-desk/Liora Standing Desk - Front View.png"
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
    "img": "assets/products/office-workstations/cat-luvon-executive-desk/Luvon Executive Desk - Front View.png",
    "images": [
      "assets/products/office-workstations/cat-luvon-executive-desk/Luvon Executive Desk - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "cat-lynk-executive-desk-system",
    "name": "Lynk Executive Desk System",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Lynk Executive Desk System combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-lynk-executive-desk-system/Lynk Executive Desk System - Front View.png",
    "images": [
      "assets/products/office-workstations/cat-lynk-executive-desk-system/Lynk Executive Desk System - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "cat-mahogany-3drawer-office-desk",
    "name": "Mahogany 3Drawer Office Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Mahogany 3Drawer Office Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-mahogany-3drawer-office-desk/mahogany_3drawer_office_desk.png",
    "images": [
      "assets/products/office-workstations/cat-mahogany-3drawer-office-desk/mahogany_3drawer_office_desk.png"
    ],
    "colors": []
  },
  {
    "id": "cat-merit-estillo-conference-table",
    "name": "Merit Estillo Conference Table",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Merit Estillo Conference Table combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-merit-estillo-conference-table/Merit Estillo Conference Table - Angle Perspective.png",
    "images": [
      "assets/products/office-workstations/cat-merit-estillo-conference-table/Merit Estillo Conference Table - Angle Perspective.png",
      "assets/products/office-workstations/cat-merit-estillo-conference-table/Merit Estillo Conference Table - Corner Detail.png",
      "assets/products/office-workstations/cat-merit-estillo-conference-table/Merit Estillo Conference Table - Front View.png",
      "assets/products/office-workstations/cat-merit-estillo-conference-table/Merit Estillo Conference Table - Side View.png"
    ],
    "colors": []
  },
  {
    "id": "cat-merit-executive-office-suite",
    "name": "Merit Executive Office Suite",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Merit Executive Office Suite combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-merit-executive-office-suite/Merit Executive Office Suite - Angle Perspective.png",
    "images": [
      "assets/products/office-workstations/cat-merit-executive-office-suite/Merit Executive Office Suite - Angle Perspective.png",
      "assets/products/office-workstations/cat-merit-executive-office-suite/Merit Executive Office Suite - Context View.png",
      "assets/products/office-workstations/cat-merit-executive-office-suite/Merit Executive Office Suite - Corner Detail.png",
      "assets/products/office-workstations/cat-merit-executive-office-suite/Merit Executive Office Suite - Front View.png",
      "assets/products/office-workstations/cat-merit-executive-office-suite/Merit Executive Office Suite - High Angle View.png",
      "assets/products/office-workstations/cat-merit-executive-office-suite/Merit Executive Office Suite - Side View.png",
      "assets/products/office-workstations/cat-merit-executive-office-suite/Merit Executive Office Suite - Studio Showcase.png"
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
    "img": "assets/products/office-workstations/cat-midcentury-walnut-writing-desk/midcentury_walnut_writing_desk.png",
    "images": [
      "assets/products/office-workstations/cat-midcentury-walnut-writing-desk/midcentury_walnut_writing_desk.png"
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
    "img": "assets/products/office-workstations/cat-minimalist-beige-slate-writing-desk/minimalist_beige_slate_writing_desk.png",
    "images": [
      "assets/products/office-workstations/cat-minimalist-beige-slate-writing-desk/minimalist_beige_slate_writing_desk.png"
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
    "img": "assets/products/office-workstations/cat-modern-glass-top-desk-with-wooden-a-frame-legs/Modern Glass Top Desk with Wooden A-Frame Legs.jpg",
    "images": [
      "assets/products/office-workstations/cat-modern-glass-top-desk-with-wooden-a-frame-legs/Modern Glass Top Desk with Wooden A-Frame Legs.jpg"
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
    "img": "assets/products/office-workstations/cat-modular-4-person-l-shaped-workstation-desk/Modular 4-Person Workstation - Angle Perspective.png",
    "images": [
      "assets/products/office-workstations/cat-modular-4-person-l-shaped-workstation-desk/Modular 4-Person Workstation - Angle Perspective.png",
      "assets/products/office-workstations/cat-modular-4-person-l-shaped-workstation-desk/Modular 4-Person Workstation - Corner Detail.png",
      "assets/products/office-workstations/cat-modular-4-person-l-shaped-workstation-desk/Modular 4-Person Workstation - Front View.png",
      "assets/products/office-workstations/cat-modular-4-person-l-shaped-workstation-desk/Modular 4-Person Workstation - Side View.png"
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
    "img": "assets/products/office-workstations/cat-modular-conference-z-line-nova/Modular Conference Z-Line Nova - Angle Perspective.png",
    "images": [
      "assets/products/office-workstations/cat-modular-conference-z-line-nova/Modular Conference Z-Line Nova - Angle Perspective.png",
      "assets/products/office-workstations/cat-modular-conference-z-line-nova/Modular Conference Z-Line Nova - Corner Detail.png",
      "assets/products/office-workstations/cat-modular-conference-z-line-nova/Modular Conference Z-Line Nova - Front View.png",
      "assets/products/office-workstations/cat-modular-conference-z-line-nova/Modular Conference Z-Line Nova - Side View.png"
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
    "img": "assets/products/office-workstations/cat-nexa-4-person-modular-office-workstation/Nexa 4-Person Workstation - Angle Perspective.png",
    "images": [
      "assets/products/office-workstations/cat-nexa-4-person-modular-office-workstation/Nexa 4-Person Workstation - Angle Perspective.png",
      "assets/products/office-workstations/cat-nexa-4-person-modular-office-workstation/Nexa 4-Person Workstation - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "cat-nexgrid-modular-workstation",
    "name": "Nexgrid Modular Workstation",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Nexgrid Modular Workstation combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-nexgrid-modular-workstation/Nexgrid Modular Workstation - Front View.png",
    "images": [
      "assets/products/office-workstations/cat-nexgrid-modular-workstation/Nexgrid Modular Workstation - Front View.png"
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
    "img": "assets/products/office-workstations/cat-nexo-executive-desk/Nexo Executive Desk - Front View.png",
    "images": [
      "assets/products/office-workstations/cat-nexo-executive-desk/Nexo Executive Desk - Front View.png"
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
    "img": "assets/products/office-workstations/cat-nova-integra-magnus-desk/Nova Integra Magnus Desk - Angle Perspective.png",
    "images": [
      "assets/products/office-workstations/cat-nova-integra-magnus-desk/Nova Integra Magnus Desk - Angle Perspective.png",
      "assets/products/office-workstations/cat-nova-integra-magnus-desk/Nova Integra Magnus Desk - Front View.png",
      "assets/products/office-workstations/cat-nova-integra-magnus-desk/Nova Integra Magnus Desk - Side View.png"
    ],
    "colors": []
  },
  {
    "id": "cat-nuvia-executive-desk-system",
    "name": "Nuvia Executive Desk System",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Nuvia Executive Desk System combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-nuvia-executive-desk-system/Nuvia Executive Desk System - Front View.png",
    "images": [
      "assets/products/office-workstations/cat-nuvia-executive-desk-system/Nuvia Executive Desk System - Front View.png"
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
    "img": "assets/products/office-workstations/cat-oak-and-charcoal-lshaped-desk-comboset/oak_and_charcoal_lshaped_desk_comboset.png",
    "images": [
      "assets/products/office-workstations/cat-oak-and-charcoal-lshaped-desk-comboset/oak_and_charcoal_lshaped_desk_comboset.png"
    ],
    "colors": []
  },
  {
    "id": "cat-omnio-executive-desk",
    "name": "Omnio Executive Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Omnio Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-omnio-executive-desk/Omnio Executive Desk - Angle Perspective.png",
    "images": [
      "assets/products/office-workstations/cat-omnio-executive-desk/Omnio Executive Desk - Angle Perspective.png",
      "assets/products/office-workstations/cat-omnio-executive-desk/Omnio Executive Desk - Front View.png",
      "assets/products/office-workstations/cat-omnio-executive-desk/Omnio Executive Desk - Side View.png"
    ],
    "colors": []
  },
  {
    "id": "cat-orbis-executive-desk",
    "name": "Orbis Executive Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Orbis Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-orbis-executive-desk/Orbis Executive Desk - Front View.png",
    "images": [
      "assets/products/office-workstations/cat-orbis-executive-desk/Orbis Executive Desk - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "orin-executive-desk-system",
    "name": "Orin Executive Desk System",
    "category": "office-workstations",
    "type": "table",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Orin Executive Desk System combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/orin-executive-desk-system/orin-executive-desk-system - Angle Perspective.png",
    "images": [
      "assets/products/office-workstations/orin-executive-desk-system/orin-executive-desk-system - Angle Perspective.png",
      "assets/products/office-workstations/orin-executive-desk-system/orin-executive-desk-system - Front View.png"
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
    "img": "assets/products/office-workstations/cat-orlo-executive-desk/Orlo Executive Desk - Front View.png",
    "images": [
      "assets/products/office-workstations/cat-orlo-executive-desk/Orlo Executive Desk - Front View.png"
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
    "img": "assets/products/office-workstations/prestige-l-shaped-executive-desk/prestige-l-shaped-executive-desk - Angle Perspective.png",
    "images": [
      "assets/products/office-workstations/prestige-l-shaped-executive-desk/prestige-l-shaped-executive-desk - Angle Perspective.png",
      "assets/products/office-workstations/prestige-l-shaped-executive-desk/prestige-l-shaped-executive-desk - Front View.png",
      "assets/products/office-workstations/prestige-l-shaped-executive-desk/prestige-l-shaped-executive-desk - Context View.png",
      "assets/products/office-workstations/prestige-l-shaped-executive-desk/prestige-l-shaped-executive-desk - Corner Detail.png",
      "assets/products/office-workstations/prestige-l-shaped-executive-desk/prestige-l-shaped-executive-desk - Side View.png",
      "assets/products/office-workstations/prestige-l-shaped-executive-desk/prestige-l-shaped-executive-desk - Studio Showcase.png"
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
    "img": "assets/products/office-workstations/cat-primor-executive-desk/Primor Executive Desk - Angle Perspective.png",
    "images": [
      "assets/products/office-workstations/cat-primor-executive-desk/Primor Executive Desk - Angle Perspective.png",
      "assets/products/office-workstations/cat-primor-executive-desk/Primor Executive Desk - Front View.png"
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
    "img": "assets/products/office-workstations/cat-privon-executive-desk/Privon Executive Desk - Angle Perspective.png",
    "images": [
      "assets/products/office-workstations/cat-privon-executive-desk/Privon Executive Desk - Angle Perspective.png",
      "assets/products/office-workstations/cat-privon-executive-desk/Privon Executive Desk - Corner Detail.png",
      "assets/products/office-workstations/cat-privon-executive-desk/Privon Executive Desk - Front View.png",
      "assets/products/office-workstations/cat-privon-executive-desk/Privon Executive Desk - Side View.png"
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
    "img": "assets/products/office-workstations/cat-privon-x-executive-desk/Privon X Executive Desk - Angle Perspective.png",
    "images": [
      "assets/products/office-workstations/cat-privon-x-executive-desk/Privon X Executive Desk - Angle Perspective.png",
      "assets/products/office-workstations/cat-privon-x-executive-desk/Privon X Executive Desk - Corner Detail.png",
      "assets/products/office-workstations/cat-privon-x-executive-desk/Privon X Executive Desk - Front View.png",
      "assets/products/office-workstations/cat-privon-x-executive-desk/Privon X Executive Desk - Side View.png"
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
    "img": "assets/products/office-workstations/cat-rova-executive-desk/Rova Executive Desk - Front View.png",
    "images": [
      "assets/products/office-workstations/cat-rova-executive-desk/Rova Executive Desk - Front View.png"
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
    "img": "assets/products/office-workstations/cat-scandi-oak-white-executive-desk/scandi_oak_white_executive_desk.png",
    "images": [
      "assets/products/office-workstations/cat-scandi-oak-white-executive-desk/scandi_oak_white_executive_desk.png"
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
    "img": "assets/products/office-workstations/cat-scandi-walnut-white-executive-desk/scandi_walnut_white_executive_desk.png",
    "images": [
      "assets/products/office-workstations/cat-scandi-walnut-white-executive-desk/scandi_walnut_white_executive_desk.png"
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
    "img": "assets/products/office-workstations/cat-sculptural-walnut-conference-table/Sculptural Walnut Conference Table.jpg",
    "images": [
      "assets/products/office-workstations/cat-sculptural-walnut-conference-table/Sculptural Walnut Conference Table.jpg"
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
    "img": "assets/products/office-workstations/slate-and-birch-hutch-desk/slate-and-birch-hutch-desk.png",
    "images": [
      "assets/products/office-workstations/slate-and-birch-hutch-desk/slate-and-birch-hutch-desk.png"
    ],
    "colors": []
  },
  {
    "id": "cat-slate-birch-2drawer-writing-desk",
    "name": "Slate Birch 2Drawer Writing Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Slate Birch 2Drawer Writing Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-slate-birch-2drawer-writing-desk/slate_birch_2drawer_writing_desk.png",
    "images": [
      "assets/products/office-workstations/cat-slate-birch-2drawer-writing-desk/slate_birch_2drawer_writing_desk.png"
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
    "img": "assets/products/office-workstations/cat-slate-gray-executive-desk-with-return/slate_gray_executive_desk_with_return.png",
    "images": [
      "assets/products/office-workstations/cat-slate-gray-executive-desk-with-return/slate_gray_executive_desk_with_return.png"
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
    "img": "assets/products/office-workstations/cat-slate-gray-modern-writing-desk/slate_gray_modern_writing_desk.png",
    "images": [
      "assets/products/office-workstations/cat-slate-gray-modern-writing-desk/slate_gray_modern_writing_desk.png"
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
    "img": "assets/products/office-workstations/cat-sovio-minimalist-grey-executive-reception-desk/Sovio Minimalist Grey Executive Reception Desk.png",
    "images": [
      "assets/products/office-workstations/cat-sovio-minimalist-grey-executive-reception-desk/Sovio Minimalist Grey Executive Reception Desk.png"
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
    "img": "assets/products/office-workstations/sovio-walnut-executive-desk-with-3-drawer-pedestal/sovio-walnut-executive-desk-with-3-drawer-pedestal.png",
    "images": [
      "assets/products/office-workstations/sovio-walnut-executive-desk-with-3-drawer-pedestal/sovio-walnut-executive-desk-with-3-drawer-pedestal.png"
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
    "img": "assets/products/office-workstations/sovio-walnut-executive-desk-with-left-cabinet/sovio-walnut-executive-desk-with-left-cabinet.png",
    "images": [
      "assets/products/office-workstations/sovio-walnut-executive-desk-with-left-cabinet/sovio-walnut-executive-desk-with-left-cabinet.png"
    ],
    "colors": []
  },
  {
    "id": "cat-supreme-executive-office-suite",
    "name": "Supreme Executive Office Suite",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Supreme Executive Office Suite combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-supreme-executive-office-suite/Supreme Executive Suite - Angle Perspective.png",
    "images": [
      "assets/products/office-workstations/cat-supreme-executive-office-suite/Supreme Executive Suite - Angle Perspective.png",
      "assets/products/office-workstations/cat-supreme-executive-office-suite/Supreme Executive Suite - Context View.png",
      "assets/products/office-workstations/cat-supreme-executive-office-suite/Supreme Executive Suite - Corner Detail.png",
      "assets/products/office-workstations/cat-supreme-executive-office-suite/Supreme Executive Suite - Front View.png",
      "assets/products/office-workstations/cat-supreme-executive-office-suite/Supreme Executive Suite - High Angle View.png",
      "assets/products/office-workstations/cat-supreme-executive-office-suite/Supreme Executive Suite - Side View.png",
      "assets/products/office-workstations/cat-supreme-executive-office-suite/Supreme Executive Suite - Studio Showcase.png"
    ],
    "colors": []
  },
  {
    "id": "cat-teron-executive-desk-system",
    "name": "Teron Executive Desk System",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Teron Executive Desk System combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-teron-executive-desk-system/Teron Executive Desk System - Front View.png",
    "images": [
      "assets/products/office-workstations/cat-teron-executive-desk-system/Teron Executive Desk System - Front View.png"
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
    "img": "assets/products/office-workstations/cat-twotone-oak-chocolate-executive-desk/twotone_oak_chocolate_executive_desk.png",
    "images": [
      "assets/products/office-workstations/cat-twotone-oak-chocolate-executive-desk/twotone_oak_chocolate_executive_desk.png"
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
    "img": "assets/products/office-workstations/cat-twotone-oak-executive-desk/twotone_oak_executive_desk.png",
    "images": [
      "assets/products/office-workstations/cat-twotone-oak-executive-desk/twotone_oak_executive_desk.png"
    ],
    "colors": []
  },
  {
    "id": "cat-tyro-executive-desk-system",
    "name": "Tyro Executive Desk System",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Tyro Executive Desk System combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-tyro-executive-desk-system/Tyro Executive Desk System - Front View.png",
    "images": [
      "assets/products/office-workstations/cat-tyro-executive-desk-system/Tyro Executive Desk System - Front View.png"
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
    "img": "assets/products/office-workstations/cat-unox-executive-desk/Unox Executive Desk - Front View.png",
    "images": [
      "assets/products/office-workstations/cat-unox-executive-desk/Unox Executive Desk - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "cat-vectron-executive-desk",
    "name": "Vectron Executive Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Vectron Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-vectron-executive-desk/Vectron Executive Desk - Angle Perspective.png",
    "images": [
      "assets/products/office-workstations/cat-vectron-executive-desk/Vectron Executive Desk - Angle Perspective.png",
      "assets/products/office-workstations/cat-vectron-executive-desk/Vectron Executive Desk - Front View.png"
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
    "img": "assets/products/office-workstations/cat-vectron-x-executive-desk/Vectron X Executive Desk - Angle Perspective.png",
    "images": [
      "assets/products/office-workstations/cat-vectron-x-executive-desk/Vectron X Executive Desk - Angle Perspective.png",
      "assets/products/office-workstations/cat-vectron-x-executive-desk/Vectron X Executive Desk - Front View.png",
      "assets/products/office-workstations/cat-vectron-x-executive-desk/Vectron X Executive Desk - Side View.png"
    ],
    "colors": []
  },
  {
    "id": "cat-velor-executive-desk",
    "name": "Velor Executive Desk",
    "category": "acoustic-pods",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Velor Executive Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/acoustic-pods/cat-velor-executive-desk/Velor Executive Desk - Angle Perspective.png",
    "images": [
      "assets/products/acoustic-pods/cat-velor-executive-desk/Velor Executive Desk - Angle Perspective.png",
      "assets/products/acoustic-pods/cat-velor-executive-desk/Velor Executive Desk - Corner Detail.png",
      "assets/products/acoustic-pods/cat-velor-executive-desk/Velor Executive Desk - Front View.png",
      "assets/products/acoustic-pods/cat-velor-executive-desk/Velor Executive Desk - Side View.png"
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
    "img": "assets/products/office-workstations/cat-vemior-executive-desk/Vemior Executive Desk - Front View.png",
    "images": [
      "assets/products/office-workstations/cat-vemior-executive-desk/Vemior Executive Desk - Front View.png"
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
    "img": "assets/products/office-workstations/cat-versa-executive-desk/Versa Executive Desk - Front View.png",
    "images": [
      "assets/products/office-workstations/cat-versa-executive-desk/Versa Executive Desk - Front View.png"
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
    "img": "assets/products/office-workstations/cat-vetra-executive-desk/Vetra Executive Desk - Front View.png",
    "images": [
      "assets/products/office-workstations/cat-vetra-executive-desk/Vetra Executive Desk - Front View.png"
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
    "img": "assets/products/office-workstations/cat-viora-executive-desk/Viora Executive Desk - Angle Perspective.png",
    "images": [
      "assets/products/office-workstations/cat-viora-executive-desk/Viora Executive Desk - Angle Perspective.png",
      "assets/products/office-workstations/cat-viora-executive-desk/Viora Executive Desk - Front View.png"
    ],
    "colors": []
  },
  {
    "id": "cat-walnut-and-charcoal-2drawer-desk",
    "name": "Walnut And Charcoal 2Drawer Desk",
    "category": "office-workstations",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Walnut And Charcoal 2Drawer Desk combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/office-workstations/cat-walnut-and-charcoal-2drawer-desk/walnut_and_charcoal_2drawer_desk.png",
    "images": [
      "assets/products/office-workstations/cat-walnut-and-charcoal-2drawer-desk/walnut_and_charcoal_2drawer_desk.png"
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
    "img": "assets/products/office-workstations/cat-walnut-conference-table-with-cable-ports/walnut_conference_table_with_cable_ports.png",
    "images": [
      "assets/products/office-workstations/cat-walnut-conference-table-with-cable-ports/walnut_conference_table_with_cable_ports.png"
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
    "img": "assets/products/office-workstations/cat-walnut-executive-desk-with-drawers/walnut_executive_desk_with_drawers.png",
    "images": [
      "assets/products/office-workstations/cat-walnut-executive-desk-with-drawers/walnut_executive_desk_with_drawers.png"
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
    "img": "assets/products/office-workstations/cat-white-walnut-lshaped-executive-desk/white_walnut_lshaped_executive_desk.png",
    "images": [
      "assets/products/office-workstations/cat-white-walnut-lshaped-executive-desk/white_walnut_lshaped_executive_desk.png"
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
    "img": "assets/products/office-workstations/cat-woodland-executive-desk/Woodland Executive Desk - Angle Perspective.png",
    "images": [
      "assets/products/office-workstations/cat-woodland-executive-desk/Woodland Executive Desk - Angle Perspective.png",
      "assets/products/office-workstations/cat-woodland-executive-desk/Woodland Executive Desk - Front View.png"
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
    "img": "assets/products/office-workstations/cat-xylo-executive-desk/Xylo Executive Desk - Front View.png",
    "images": [
      "assets/products/office-workstations/cat-xylo-executive-desk/Xylo Executive Desk - Front View.png"
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
    "img": "assets/products/office-workstations/cendro/Cendro_01.png",
    "images": [
      "assets/products/office-workstations/cendro/Cendro_01.png",
      "assets/products/office-workstations/cendro/Cendro_02.png",
      "assets/products/office-workstations/cendro/Cendro_03.png",
      "assets/products/office-workstations/cendro/Cendro_04.png",
      "assets/products/office-workstations/cendro/Cendro_05.png",
      "assets/products/office-workstations/cendro/Cendro_06.png"
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
    "img": "assets/products/office-workstations/chief/Chief_01.png",
    "images": [
      "assets/products/office-workstations/chief/Chief_01.png",
      "assets/products/office-workstations/chief/Chief_02.png",
      "assets/products/office-workstations/chief/Chief_03.png",
      "assets/products/office-workstations/chief/Chief_04.png",
      "assets/products/office-workstations/chief/Chief_05.png",
      "assets/products/office-workstations/chief/Chief_06.png",
      "assets/products/office-workstations/chief/Chief_07.png",
      "assets/products/office-workstations/chief/Chief_08.png",
      "assets/products/office-workstations/chief/Chief_09.png",
      "assets/products/office-workstations/chief/Chief_10.png",
      "assets/products/office-workstations/chief/Chief_11.png",
      "assets/products/office-workstations/chief/Chief_12.png",
      "assets/products/office-workstations/chief/Chief_13.png",
      "assets/products/office-workstations/chief/Chief_14.png"
    ],
    "colors": [
      "Cappuccino & Walnut Bronze"
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
    "img": "assets/products/office-workstations/elion/Elion_01.png",
    "images": [
      "assets/products/office-workstations/elion/Elion_01.png",
      "assets/products/office-workstations/elion/Elion_02.png",
      "assets/products/office-workstations/elion/Elion_03.png",
      "assets/products/office-workstations/elion/Elion_04.png"
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
    "img": "assets/products/office-workstations/elix/Elix_01.png",
    "images": [
      "assets/products/office-workstations/elix/Elix_01.png",
      "assets/products/office-workstations/elix/Elix_02.png",
      "assets/products/office-workstations/elix/Elix_03.png",
      "assets/products/office-workstations/elix/Elix_04.png"
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
    "img": "assets/products/office-workstations/erom/Erom_01.png",
    "images": [
      "assets/products/office-workstations/erom/Erom_01.png",
      "assets/products/office-workstations/erom/Erom_02.png",
      "assets/products/office-workstations/erom/Erom_03.png",
      "assets/products/office-workstations/erom/Erom_04.png"
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
    "img": "assets/products/office-workstations/evon/Evon_01.png",
    "images": [
      "assets/products/office-workstations/evon/Evon_01.png",
      "assets/products/office-workstations/evon/Evon_02.png",
      "assets/products/office-workstations/evon/Evon_03.png"
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
    "img": "assets/products/office-workstations/helio/Helio_01.png",
    "images": [
      "assets/products/office-workstations/helio/Helio_01.png",
      "assets/products/office-workstations/helio/Helio_02.png",
      "assets/products/office-workstations/helio/Helio_03.png",
      "assets/products/office-workstations/helio/Helio_04.png"
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
    "img": "assets/products/office-workstations/l_type_workstation/L_Type_Workstation_01.png",
    "images": [
      "assets/products/office-workstations/l_type_workstation/L_Type_Workstation_01.png",
      "assets/products/office-workstations/l_type_workstation/L_Type_Workstation_02.png",
      "assets/products/office-workstations/l_type_workstation/L_Type_Workstation_03.png",
      "assets/products/office-workstations/l_type_workstation/L_Type_Workstation_04.png",
      "assets/products/office-workstations/l_type_workstation/L_Type_Workstation_05.png",
      "assets/products/office-workstations/l_type_workstation/L_Type_Workstation_06.png",
      "assets/products/office-workstations/l_type_workstation/L_Type_Workstation_07.png",
      "assets/products/office-workstations/l_type_workstation/L_Type_Workstation_08.png",
      "assets/products/office-workstations/l_type_workstation/L_Type_Workstation_09.png",
      "assets/products/office-workstations/l_type_workstation/L_Type_Workstation_10.png",
      "assets/products/office-workstations/l_type_workstation/L_Type_Workstation_11.png",
      "assets/products/office-workstations/l_type_workstation/L_Type_Workstation_12.png"
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
    "img": "assets/products/office-workstations/lior/Lior_01.png",
    "images": [
      "assets/products/office-workstations/lior/Lior_01.png",
      "assets/products/office-workstations/lior/Lior_02.png",
      "assets/products/office-workstations/lior/Lior_03.png",
      "assets/products/office-workstations/lior/Lior_04.png",
      "assets/products/office-workstations/lior/Lior_05.png"
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
    "img": "assets/products/office-workstations/liora/Liora_01.png",
    "images": [
      "assets/products/office-workstations/liora/Liora_01.png",
      "assets/products/office-workstations/liora/Liora_02.png",
      "assets/products/office-workstations/liora/Liora_03.png",
      "assets/products/office-workstations/liora/Liora_04.png",
      "assets/products/office-workstations/liora/Liora_05.png",
      "assets/products/office-workstations/liora/Liora_06.png"
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
    "img": "assets/products/office-workstations/luvon/Luvon_01.png",
    "images": [
      "assets/products/office-workstations/luvon/Luvon_01.png",
      "assets/products/office-workstations/luvon/Luvon_02.png",
      "assets/products/office-workstations/luvon/Luvon_03.png",
      "assets/products/office-workstations/luvon/Luvon_04.png"
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
    "img": "assets/products/office-workstations/lynk/Lynk_02.png",
    "images": [
      "assets/products/office-workstations/lynk/Lynk_02.png"
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
    "img": "assets/products/office-workstations/merit/Merit_01.png",
    "images": [
      "assets/products/office-workstations/merit/Merit_01.png",
      "assets/products/office-workstations/merit/Merit_02.png",
      "assets/products/office-workstations/merit/Merit_03.png",
      "assets/products/office-workstations/merit/Merit_04.png",
      "assets/products/office-workstations/merit/Merit_05.png",
      "assets/products/office-workstations/merit/Merit_06.png",
      "assets/products/office-workstations/merit/Merit_07.png",
      "assets/products/office-workstations/merit/Merit_08.png",
      "assets/products/office-workstations/merit/Merit_09.png",
      "assets/products/office-workstations/merit/Merit_10.png",
      "assets/products/office-workstations/merit/Merit_11.png",
      "assets/products/office-workstations/merit/Merit_12.png",
      "assets/products/office-workstations/merit/Merit_13.png",
      "assets/products/office-workstations/merit/Merit_14.png",
      "assets/products/office-workstations/merit/Merit_15.png",
      "assets/products/office-workstations/merit/Merit_16.png"
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
    "img": "assets/products/office-workstations/merit_estillo_conference/Merit_Estillo_Conference_01.png",
    "images": [
      "assets/products/office-workstations/merit_estillo_conference/Merit_Estillo_Conference_01.png",
      "assets/products/office-workstations/merit_estillo_conference/Merit_Estillo_Conference_02.png",
      "assets/products/office-workstations/merit_estillo_conference/Merit_Estillo_Conference_03.png",
      "assets/products/office-workstations/merit_estillo_conference/Merit_Estillo_Conference_04.png"
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
    "img": "assets/products/office-workstations/modular_conference_z_line_nova/Modular_Conference_Z_Line_Nova_01.png",
    "images": [
      "assets/products/office-workstations/modular_conference_z_line_nova/Modular_Conference_Z_Line_Nova_01.png",
      "assets/products/office-workstations/modular_conference_z_line_nova/Modular_Conference_Z_Line_Nova_02.png",
      "assets/products/office-workstations/modular_conference_z_line_nova/Modular_Conference_Z_Line_Nova_03.png",
      "assets/products/office-workstations/modular_conference_z_line_nova/Modular_Conference_Z_Line_Nova_04.png",
      "assets/products/office-workstations/modular_conference_z_line_nova/Modular_Conference_Z_Line_Nova_05.png",
      "assets/products/office-workstations/modular_conference_z_line_nova/Modular_Conference_Z_Line_Nova_06.png"
    ],
    "colors": [
      "Vermount"
    ],
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
    "img": "assets/products/wardrobes-storage/cat-charcoal-padded-mobile-file-pedestal/charcoal_padded_mobile_file_pedestal.png",
    "images": [
      "assets/products/wardrobes-storage/cat-charcoal-padded-mobile-file-pedestal/charcoal_padded_mobile_file_pedestal.png"
    ],
    "colors": []
  },
  {
    "id": "cat-espresso-and-oak-mobile-3drawer-pedestal",
    "name": "Espresso And Oak Mobile 3Drawer Pedestal",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Espresso And Oak Mobile 3Drawer Pedestal combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-espresso-and-oak-mobile-3drawer-pedestal/espresso_and_oak_mobile_3drawer_pedestal.png",
    "images": [
      "assets/products/wardrobes-storage/cat-espresso-and-oak-mobile-3drawer-pedestal/espresso_and_oak_mobile_3drawer_pedestal.png"
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
    "img": "assets/products/wardrobes-storage/cat-greige-metal-file-pedestal/greige_metal_file_pedestal.png",
    "images": [
      "assets/products/wardrobes-storage/cat-greige-metal-file-pedestal/greige_metal_file_pedestal.png"
    ],
    "colors": []
  },
  {
    "id": "cat-slate-gray-3drawer-file-pedestal",
    "name": "Slate Gray 3Drawer File Pedestal",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Slate Gray 3Drawer File Pedestal combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-slate-gray-3drawer-file-pedestal/slate_gray_3drawer_file_pedestal.png",
    "images": [
      "assets/products/wardrobes-storage/cat-slate-gray-3drawer-file-pedestal/slate_gray_3drawer_file_pedestal.png"
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
    "img": "assets/products/office-workstations/nexa_pro/Nexa_Pro_01.png",
    "images": [
      "assets/products/office-workstations/nexa_pro/Nexa_Pro_01.png",
      "assets/products/office-workstations/nexa_pro/Nexa_Pro_02.png",
      "assets/products/office-workstations/nexa_pro/Nexa_Pro_03.png",
      "assets/products/office-workstations/nexa_pro/Nexa_Pro_04.png"
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
    "img": "assets/products/office-workstations/nexgrid/Nexgrid_01.png",
    "images": [
      "assets/products/office-workstations/nexgrid/Nexgrid_01.png"
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
    "img": "assets/products/office-workstations/nova-workstation/Nova_01.png",
    "images": [
      "assets/products/office-workstations/nova-workstation/Nova_01.png",
      "assets/products/office-workstations/nova-workstation/Nova_02.png",
      "assets/products/office-workstations/nova-workstation/Nova_03.png",
      "assets/products/office-workstations/nova-workstation/Nova_04.png",
      "assets/products/office-workstations/nova-workstation/Nova_05.png",
      "assets/products/office-workstations/nova-workstation/Nova_06.png",
      "assets/products/office-workstations/nova-workstation/Nova_07.png",
      "assets/products/office-workstations/nova-workstation/Nova_08.png",
      "assets/products/office-workstations/nova-workstation/Nova_09.png",
      "assets/products/office-workstations/nova-workstation/Nova_10.png",
      "assets/products/office-workstations/nova-workstation/Nova_11.png",
      "assets/products/office-workstations/nova-workstation/Nova_12.png",
      "assets/products/office-workstations/nova-workstation/Nova_13.png",
      "assets/products/office-workstations/nova-workstation/Nova_14.png",
      "assets/products/office-workstations/nova-workstation/Nova_15.png",
      "assets/products/office-workstations/nova-workstation/Nova_16.png"
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
    "img": "assets/products/office-workstations/nova_integra_magnus/Nova_Integra_Magnus_01.png",
    "images": [
      "assets/products/office-workstations/nova_integra_magnus/Nova_Integra_Magnus_01.png",
      "assets/products/office-workstations/nova_integra_magnus/Nova_Integra_Magnus_02.png",
      "assets/products/office-workstations/nova_integra_magnus/Nova_Integra_Magnus_03.png",
      "assets/products/office-workstations/nova_integra_magnus/Nova_Integra_Magnus_04.png",
      "assets/products/office-workstations/nova_integra_magnus/Nova_Integra_Magnus_05.png",
      "assets/products/office-workstations/nova_integra_magnus/Nova_Integra_Magnus_06.png",
      "assets/products/office-workstations/nova_integra_magnus/Nova_Integra_Magnus_07.png"
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
    "img": "assets/products/office-workstations/nuvia/Nuvia_01.png",
    "images": [
      "assets/products/office-workstations/nuvia/Nuvia_01.png",
      "assets/products/office-workstations/nuvia/Nuvia_02.png",
      "assets/products/office-workstations/nuvia/Nuvia_03.png"
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
    "img": "assets/products/office-workstations/omnio/Omnio_01.png",
    "images": [
      "assets/products/office-workstations/omnio/Omnio_01.png",
      "assets/products/office-workstations/omnio/Omnio_02.png",
      "assets/products/office-workstations/omnio/Omnio_03.png"
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
    "img": "assets/products/office-workstations/orexa/Orexa_01.png",
    "images": [
      "assets/products/office-workstations/orexa/Orexa_01.png",
      "assets/products/office-workstations/orexa/Orexa_02.png",
      "assets/products/office-workstations/orexa/Orexa_03.png"
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
    "img": "assets/products/office-workstations/orlo/Orlo_01.png",
    "images": [
      "assets/products/office-workstations/orlo/Orlo_01.png",
      "assets/products/office-workstations/orlo/Orlo_03.png",
      "assets/products/office-workstations/orlo/Orlo_04.png",
      "assets/products/office-workstations/orlo/Orlo_05.png"
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
    "img": "assets/products/office-workstations/prestige/Prestige_01.png",
    "images": [
      "assets/products/office-workstations/prestige/Prestige_01.png",
      "assets/products/office-workstations/prestige/Prestige_02.png",
      "assets/products/office-workstations/prestige/Prestige_03.png",
      "assets/products/office-workstations/prestige/Prestige_04.png",
      "assets/products/office-workstations/prestige/Prestige_05.png",
      "assets/products/office-workstations/prestige/Prestige_06.png",
      "assets/products/office-workstations/prestige/Prestige_07.png",
      "assets/products/office-workstations/prestige/Prestige_08.png",
      "assets/products/office-workstations/prestige/Prestige_09.png",
      "assets/products/office-workstations/prestige/Prestige_10.png",
      "assets/products/office-workstations/prestige/Prestige_11.png",
      "assets/products/office-workstations/prestige/Prestige_12.png",
      "assets/products/office-workstations/prestige/Prestige_13.png",
      "assets/products/office-workstations/prestige/Prestige_14.png",
      "assets/products/office-workstations/prestige/Prestige_15.png",
      "assets/products/office-workstations/prestige/Prestige_16.png",
      "assets/products/office-workstations/prestige/Prestige_17.png",
      "assets/products/office-workstations/prestige/Prestige_18.png",
      "assets/products/office-workstations/prestige/Prestige_19.png",
      "assets/products/office-workstations/prestige/Prestige_20.png",
      "assets/products/office-workstations/prestige/Prestige_21.png",
      "assets/products/office-workstations/prestige/Prestige_22.png",
      "assets/products/office-workstations/prestige/Prestige_23.png",
      "assets/products/office-workstations/prestige/Prestige_24.png",
      "assets/products/office-workstations/prestige/Prestige_25.png",
      "assets/products/office-workstations/prestige/Prestige_26.png",
      "assets/products/office-workstations/prestige/Prestige_27.png",
      "assets/products/office-workstations/prestige/Prestige_28.png",
      "assets/products/office-workstations/prestige/Prestige_29.png",
      "assets/products/office-workstations/prestige/Prestige_30.png",
      "assets/products/office-workstations/prestige/Prestige_31.png",
      "assets/products/office-workstations/prestige/Prestige_32.png",
      "assets/products/office-workstations/prestige/Prestige_33.png",
      "assets/products/office-workstations/prestige/Prestige_34.png"
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
    "img": "assets/products/office-workstations/primor/Primor_01.png",
    "images": [
      "assets/products/office-workstations/primor/Primor_01.png",
      "assets/products/office-workstations/primor/Primor_02.png",
      "assets/products/office-workstations/primor/Primor_03.png",
      "assets/products/office-workstations/primor/Primor_04.png",
      "assets/products/office-workstations/primor/Primor_05.png",
      "assets/products/office-workstations/primor/Primor_06.png"
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
    "img": "assets/products/office-workstations/privon/Privon_01.png",
    "images": [
      "assets/products/office-workstations/privon/Privon_01.png",
      "assets/products/office-workstations/privon/Privon_02.png",
      "assets/products/office-workstations/privon/Privon_03.png",
      "assets/products/office-workstations/privon/Privon_04.png",
      "assets/products/office-workstations/privon/Privon_05.png",
      "assets/products/office-workstations/privon/Privon_06.png"
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
    "img": "assets/products/office-workstations/privon_x/Privon_X_01.png",
    "images": [
      "assets/products/office-workstations/privon_x/Privon_X_01.png",
      "assets/products/office-workstations/privon_x/Privon_X_02.png",
      "assets/products/office-workstations/privon_x/Privon_X_03.png",
      "assets/products/office-workstations/privon_x/Privon_X_04.png",
      "assets/products/office-workstations/privon_x/Privon_X_05.png",
      "assets/products/office-workstations/privon_x/Privon_X_06.png"
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
    "img": "assets/products/office-workstations/repute/Repute_01.png",
    "images": [
      "assets/products/office-workstations/repute/Repute_01.png",
      "assets/products/office-workstations/repute/Repute_02.png",
      "assets/products/office-workstations/repute/Repute_03.png",
      "assets/products/office-workstations/repute/Repute_04.png",
      "assets/products/office-workstations/repute/Repute_05.png",
      "assets/products/office-workstations/repute/Repute_06.png",
      "assets/products/office-workstations/repute/Repute_07.png",
      "assets/products/office-workstations/repute/Repute_08.png",
      "assets/products/office-workstations/repute/Repute_09.png",
      "assets/products/office-workstations/repute/Repute_10.png",
      "assets/products/office-workstations/repute/Repute_11.png",
      "assets/products/office-workstations/repute/Repute_12.png",
      "assets/products/office-workstations/repute/Repute_13.png",
      "assets/products/office-workstations/repute/Repute_14.png",
      "assets/products/office-workstations/repute/Repute_15.png",
      "assets/products/office-workstations/repute/Repute_16.png",
      "assets/products/office-workstations/repute/Repute_17.png"
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
    "img": "assets/products/office-workstations/rubco-computer-table-colonial/computer_table_colonial.jpg",
    "images": [
      "assets/products/office-workstations/rubco-computer-table-colonial/computer_table_colonial.jpg",
      "assets/products/office-workstations/rubco-computer-table-colonial/computer_table_colonial_1.jpg",
      "assets/products/office-workstations/rubco-computer-table-colonial/computer_table_colonial_2.jpg",
      "assets/products/office-workstations/rubco-computer-table-colonial/computer_table_colonial_3.jpg",
      "assets/products/office-workstations/rubco-computer-table-colonial/computer_table_colonial_4.jpg",
      "assets/products/office-workstations/rubco-computer-table-colonial/computer_table_colonial_5.jpg"
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
    "img": "assets/products/office-workstations/rubco-semi-executive-table/semi_executive_table.jpg",
    "images": [
      "assets/products/office-workstations/rubco-semi-executive-table/semi_executive_table.jpg",
      "assets/products/office-workstations/rubco-semi-executive-table/semi_executive_table_1.jpg",
      "assets/products/office-workstations/rubco-semi-executive-table/semi_executive_table_2.jpg",
      "assets/products/office-workstations/rubco-semi-executive-table/semi_executive_table_3.jpg",
      "assets/products/office-workstations/rubco-semi-executive-table/semi_executive_table_4.jpg"
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
    "img": "assets/products/office-workstations/sovio/Sovio_01.png",
    "images": [
      "assets/products/office-workstations/sovio/Sovio_01.png",
      "assets/products/office-workstations/sovio/Sovio_02.png",
      "assets/products/office-workstations/sovio/Sovio_03.png",
      "assets/products/office-workstations/sovio/Sovio_04.png",
      "assets/products/office-workstations/sovio/Sovio_05.png",
      "assets/products/office-workstations/sovio/Sovio_06.png",
      "assets/products/office-workstations/sovio/Sovio_07.png"
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
    "img": "assets/products/office-workstations/supreme/Supreme_01.png",
    "images": [
      "assets/products/office-workstations/supreme/Supreme_01.png",
      "assets/products/office-workstations/supreme/Supreme_02.png",
      "assets/products/office-workstations/supreme/Supreme_03.png",
      "assets/products/office-workstations/supreme/Supreme_04.png",
      "assets/products/office-workstations/supreme/Supreme_05.png",
      "assets/products/office-workstations/supreme/Supreme_06.png",
      "assets/products/office-workstations/supreme/Supreme_07.png",
      "assets/products/office-workstations/supreme/Supreme_08.png",
      "assets/products/office-workstations/supreme/Supreme_09.png",
      "assets/products/office-workstations/supreme/Supreme_10.png",
      "assets/products/office-workstations/supreme/Supreme_11.png",
      "assets/products/office-workstations/supreme/Supreme_12.png",
      "assets/products/office-workstations/supreme/Supreme_13.png",
      "assets/products/office-workstations/supreme/Supreme_14.png",
      "assets/products/office-workstations/supreme/Supreme_15.png",
      "assets/products/office-workstations/supreme/Supreme_16.png",
      "assets/products/office-workstations/supreme/Supreme_17.png"
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
    "img": "assets/products/office-workstations/teron/Teron_01.png",
    "images": [
      "assets/products/office-workstations/teron/Teron_01.png"
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
    "img": "assets/products/office-workstations/titus/Titus_01.png",
    "images": [
      "assets/products/office-workstations/titus/Titus_01.png",
      "assets/products/office-workstations/titus/Titus_02.png",
      "assets/products/office-workstations/titus/Titus_03.png",
      "assets/products/office-workstations/titus/Titus_04.png",
      "assets/products/office-workstations/titus/Titus_05.png",
      "assets/products/office-workstations/titus/Titus_06.png"
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
    "img": "assets/products/office-workstations/tyro/Tyro_01.png",
    "images": [
      "assets/products/office-workstations/tyro/Tyro_01.png",
      "assets/products/office-workstations/tyro/Tyro_02.png",
      "assets/products/office-workstations/tyro/Tyro_03.png",
      "assets/products/office-workstations/tyro/Tyro_04.png",
      "assets/products/office-workstations/tyro/Tyro_05.png",
      "assets/products/office-workstations/tyro/Tyro_06.png"
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
    "img": "assets/products/office-workstations/vectron/Vectron_02.png",
    "images": [
      "assets/products/office-workstations/vectron/Vectron_02.png",
      "assets/products/office-workstations/vectron/Vectron_03.png"
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
    "img": "assets/products/office-workstations/vectron_x/Vectron_X_01.png",
    "images": [
      "assets/products/office-workstations/vectron_x/Vectron_X_01.png",
      "assets/products/office-workstations/vectron_x/Vectron_X_02.png",
      "assets/products/office-workstations/vectron_x/Vectron_X_03.png",
      "assets/products/office-workstations/vectron_x/Vectron_X_04.png",
      "assets/products/office-workstations/vectron_x/Vectron_X_05.png"
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
    "img": "assets/products/office-workstations/vemior/Vemior_01.png",
    "images": [
      "assets/products/office-workstations/vemior/Vemior_01.png",
      "assets/products/office-workstations/vemior/Vemior_02.png",
      "assets/products/office-workstations/vemior/Vemior_03.png",
      "assets/products/office-workstations/vemior/Vemior_04.png",
      "assets/products/office-workstations/vemior/Vemior_05.png"
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
    "img": "assets/products/office-workstations/viora/Viora_01.png",
    "images": [
      "assets/products/office-workstations/viora/Viora_01.png",
      "assets/products/office-workstations/viora/Viora_02.png",
      "assets/products/office-workstations/viora/Viora_03.png",
      "assets/products/office-workstations/viora/Viora_04.png",
      "assets/products/office-workstations/viora/Viora_05.png"
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
    "img": "assets/products/recliners/cat-aether-single-seater-recliner-armchair/Aether Single Seater Recliner Armchair.png",
    "images": [
      "assets/products/recliners/cat-aether-single-seater-recliner-armchair/Aether Single Seater Recliner Armchair.png"
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
    "img": "assets/products/recliners/cat-altair-single-seater-recliner-armchair/Altair Single Seater Recliner Armchair.png",
    "images": [
      "assets/products/recliners/cat-altair-single-seater-recliner-armchair/Altair Single Seater Recliner Armchair.png"
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
    "img": "assets/products/recliners/cat-altair-three-seater-recliner-sofa/Altair Three Seater Recliner Sofa.png",
    "images": [
      "assets/products/recliners/cat-altair-three-seater-recliner-sofa/Altair Three Seater Recliner Sofa.png"
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
    "img": "assets/products/recliners/cat-altair-two-seater-recliner-sofa/Altair Two Seater Recliner Sofa.png",
    "images": [
      "assets/products/recliners/cat-altair-two-seater-recliner-sofa/Altair Two Seater Recliner Sofa.png"
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
    "img": "assets/products/recliners/cat-beige-recliner-and-marble-table-set/beige_recliner_and_marble_table_set.png",
    "images": [
      "assets/products/recliners/cat-beige-recliner-and-marble-table-set/beige_recliner_and_marble_table_set.png"
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
    "img": "assets/products/recliners/cat-bright-red-leather-power-motion-recliner-armchair/Bright Red Leather Power Motion Recliner Armchair.jpg",
    "images": [
      "assets/products/recliners/cat-bright-red-leather-power-motion-recliner-armchair/Bright Red Leather Power Motion Recliner Armchair.jpg"
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
    "img": "assets/products/recliners/cat-brown-leather-plush-power-recliner-armchair/Brown Leather Plush Power Recliner Armchair.jpg",
    "images": [
      "assets/products/recliners/cat-brown-leather-plush-power-recliner-armchair/Brown Leather Plush Power Recliner Armchair.jpg"
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
    "img": "assets/products/recliners/cat-burgundy-leather-power-recliner-armchair/Burgundy Leather Power Recliner Armchair.jpg",
    "images": [
      "assets/products/recliners/cat-burgundy-leather-power-recliner-armchair/Burgundy Leather Power Recliner Armchair.jpg"
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
    "img": "assets/products/recliners/cat-caramel-tan-power-lift-recliner/caramel_tan_power_lift_recliner.png",
    "images": [
      "assets/products/recliners/cat-caramel-tan-power-lift-recliner/caramel_tan_power_lift_recliner.png"
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
    "img": "assets/products/recliners/cat-charcoal-fabric-double-recliner-pair/charcoal_fabric_double_recliner_pair.png",
    "images": [
      "assets/products/recliners/cat-charcoal-fabric-double-recliner-pair/charcoal_fabric_double_recliner_pair.png"
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
    "img": "assets/products/recliners/cat-charcoal-grey-fabric-power-recliner-armchair/Charcoal Grey Fabric Power Recliner Armchair.jpg",
    "images": [
      "assets/products/recliners/cat-charcoal-grey-fabric-power-recliner-armchair/Charcoal Grey Fabric Power Recliner Armchair.jpg"
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
    "img": "assets/products/recliners/cat-charcoal-plush-double-recliner-set/charcoal_plush_double_recliner_set.png",
    "images": [
      "assets/products/recliners/cat-charcoal-plush-double-recliner-set/charcoal_plush_double_recliner_set.png"
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
    "img": "assets/products/sofas/cat-chestnut-brown-power-reclining-sofa/chestnut_brown_power_reclining_sofa.png",
    "images": [
      "assets/products/sofas/cat-chestnut-brown-power-reclining-sofa/chestnut_brown_power_reclining_sofa.png"
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
    "img": "assets/products/recliners/cat-chestnut-leather-power-recliner/chestnut_leather_power_recliner.png",
    "images": [
      "assets/products/recliners/cat-chestnut-leather-power-recliner/chestnut_leather_power_recliner.png"
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
    "img": "assets/products/recliners/cat-chestnut-leather-whitepiping-recliner/chestnut_leather_whitepiping_recliner.png",
    "images": [
      "assets/products/recliners/cat-chestnut-leather-whitepiping-recliner/chestnut_leather_whitepiping_recliner.png"
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
    "img": "assets/products/recliners/cat-cognac-leather-full-recliner-suite/cognac_leather_full_recliner_suite.png",
    "images": [
      "assets/products/recliners/cat-cognac-leather-full-recliner-suite/cognac_leather_full_recliner_suite.png"
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
    "img": "assets/products/recliners/cat-cognac-leather-power-lift-chair/cognac_leather_power_lift_chair.png",
    "images": [
      "assets/products/recliners/cat-cognac-leather-power-lift-chair/cognac_leather_power_lift_chair.png"
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
    "img": "assets/products/recliners/cat-cognac-leather-power-recliner-armchair/Cognac Leather Power Recliner Armchair.jpg",
    "images": [
      "assets/products/recliners/cat-cognac-leather-power-recliner-armchair/Cognac Leather Power Recliner Armchair.jpg"
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
    "img": "assets/products/recliners/cat-cognac-leather-recliner-armchair-b/Cognac Leather Recliner Armchair B.jpg",
    "images": [
      "assets/products/recliners/cat-cognac-leather-recliner-armchair-b/Cognac Leather Recliner Armchair B.jpg"
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
    "img": "assets/products/recliners/cat-cognac-leather-recliner-armchair-c/Cognac Leather Recliner Armchair C.jpg",
    "images": [
      "assets/products/recliners/cat-cognac-leather-recliner-armchair-c/Cognac Leather Recliner Armchair C.jpg"
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
    "img": "assets/products/recliners/cat-cognac-wovendetail-leather-recliner-set/cognac_wovendetail_leather_recliner_set.png",
    "images": [
      "assets/products/recliners/cat-cognac-wovendetail-leather-recliner-set/cognac_wovendetail_leather_recliner_set.png"
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
    "img": "assets/products/recliners/cat-cream-leather-console-reclining-suite/cream_leather_console_reclining_suite.png",
    "images": [
      "assets/products/recliners/cat-cream-leather-console-reclining-suite/cream_leather_console_reclining_suite.png"
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
    "img": "assets/products/recliners/cat-cream-leather-plush-double-recliner/cream_leather_plush_double_recliner.png",
    "images": [
      "assets/products/recliners/cat-cream-leather-plush-double-recliner/cream_leather_plush_double_recliner.png"
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
    "img": "assets/products/recliners/cat-cream-leather-plush-power-recliner/cream_leather_plush_power_recliner.png",
    "images": [
      "assets/products/recliners/cat-cream-leather-plush-power-recliner/cream_leather_plush_power_recliner.png"
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
    "img": "assets/products/recliners/cat-cream-leather-power-recliner-loveseat/cream_leather_power_recliner_loveseat.png",
    "images": [
      "assets/products/recliners/cat-cream-leather-power-recliner-loveseat/cream_leather_power_recliner_loveseat.png"
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
    "img": "assets/products/recliners/cat-cream-leather-power-recliner-pair-comboset/cream_leather_power_recliner_pair_comboset.png",
    "images": [
      "assets/products/recliners/cat-cream-leather-power-recliner-pair-comboset/cream_leather_power_recliner_pair_comboset.png"
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
    "img": "assets/products/recliners/cat-cream-leather-power-reclining-suite/cream_leather_power_reclining_suite.png",
    "images": [
      "assets/products/recliners/cat-cream-leather-power-reclining-suite/cream_leather_power_reclining_suite.png"
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
    "img": "assets/products/recliners/cat-cream-modular-reclining-living-set/cream_modular_reclining_living_set.png",
    "images": [
      "assets/products/recliners/cat-cream-modular-reclining-living-set/cream_modular_reclining_living_set.png"
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
    "img": "assets/products/recliners/cat-cream-tan-leather-power-recliner/cream_tan_leather_power_recliner.png",
    "images": [
      "assets/products/recliners/cat-cream-tan-leather-power-recliner/cream_tan_leather_power_recliner.png"
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
    "img": "assets/products/recliners/cat-dark-brown-leather-double-recliner/dark_brown_leather_double_recliner.png",
    "images": [
      "assets/products/recliners/cat-dark-brown-leather-double-recliner/dark_brown_leather_double_recliner.png"
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
    "img": "assets/products/recliners/cat-dark-charcoal-grey-recliner-armchair/Dark Charcoal Grey Recliner Armchair - Front View.jpg",
    "images": [
      "assets/products/recliners/cat-dark-charcoal-grey-recliner-armchair/Dark Charcoal Grey Recliner Armchair - Front View.jpg"
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
    "img": "assets/products/recliners/cat-dark-charcoal-leather-recliner-armchair/Dark Charcoal Leather Recliner Armchair.jpg",
    "images": [
      "assets/products/recliners/cat-dark-charcoal-leather-recliner-armchair/Dark Charcoal Leather Recliner Armchair.jpg"
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
    "img": "assets/products/recliners/cat-dark-charcoal-plush-recliner-sofa/dark_charcoal_plush_recliner_sofa.png",
    "images": [
      "assets/products/recliners/cat-dark-charcoal-plush-recliner-sofa/dark_charcoal_plush_recliner_sofa.png"
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
    "img": "assets/products/recliners/cat-dark-gray-plush-power-recliner/dark_gray_plush_power_recliner.png",
    "images": [
      "assets/products/recliners/cat-dark-gray-plush-power-recliner/dark_gray_plush_power_recliner.png"
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
    "img": "assets/products/recliners/cat-deep-brown-leather-power-recliner-armchair/Deep Brown Leather Power Recliner Armchair.jpg",
    "images": [
      "assets/products/recliners/cat-deep-brown-leather-power-recliner-armchair/Deep Brown Leather Power Recliner Armchair.jpg"
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
    "img": "assets/products/recliners/cat-deep-burgundy-leather-recliner-armchair/Deep Burgundy Leather Recliner Armchair.jpg",
    "images": [
      "assets/products/recliners/cat-deep-burgundy-leather-recliner-armchair/Deep Burgundy Leather Recliner Armchair.jpg"
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
    "img": "assets/products/recliners/cat-dove-gray-leather-double-recliner/dove_gray_leather_double_recliner.png",
    "images": [
      "assets/products/recliners/cat-dove-gray-leather-double-recliner/dove_gray_leather_double_recliner.png"
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
    "img": "assets/products/recliners/cat-eros-microfiber-full-recliner-sofa-three-seater/Eros Microfiber Full Recliner Sofa - Three Seater.png",
    "images": [
      "assets/products/recliners/cat-eros-microfiber-full-recliner-sofa-three-seater/Eros Microfiber Full Recliner Sofa - Three Seater.png"
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
    "img": "assets/products/recliners/cat-eros-microfiber-loveseat-recliner-two-seater/Eros Microfiber Loveseat Recliner - Two Seater.png",
    "images": [
      "assets/products/recliners/cat-eros-microfiber-loveseat-recliner-two-seater/Eros Microfiber Loveseat Recliner - Two Seater.png"
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
    "img": "assets/products/recliners/cat-eros-microfiber-recliner-armchair-single-seater/Eros Microfiber Recliner Armchair - Single Seater.png",
    "images": [
      "assets/products/recliners/cat-eros-microfiber-recliner-armchair-single-seater/Eros Microfiber Recliner Armchair - Single Seater.png"
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
    "img": "assets/products/recliners/cat-espresso-leather-padded-power-recliner/espresso_leather_padded_power_recliner.png",
    "images": [
      "assets/products/recliners/cat-espresso-leather-padded-power-recliner/espresso_leather_padded_power_recliner.png"
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
    "img": "assets/products/recliners/cat-espresso-piped-recliner-pair/espresso_piped_recliner_pair.png",
    "images": [
      "assets/products/recliners/cat-espresso-piped-recliner-pair/espresso_piped_recliner_pair.png"
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
    "img": "assets/products/recliners/cat-grey-fabric-motion-power-recliner-armchair/Grey Fabric Motion Power Recliner Armchair.jpg",
    "images": [
      "assets/products/recliners/cat-grey-fabric-motion-power-recliner-armchair/Grey Fabric Motion Power Recliner Armchair.jpg"
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
    "img": "assets/products/recliners/cat-grey-fabric-power-recliner-armchair-c/Grey Fabric Power Recliner Armchair C.jpg",
    "images": [
      "assets/products/recliners/cat-grey-fabric-power-recliner-armchair-c/Grey Fabric Power Recliner Armchair C.jpg"
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
    "img": "assets/products/recliners/cat-grey-leather-power-motion-recliner-sofa/Grey Leather Power Motion Recliner Sofa.jpg",
    "images": [
      "assets/products/recliners/cat-grey-leather-power-motion-recliner-sofa/Grey Leather Power Motion Recliner Sofa.jpg"
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
    "img": "assets/products/recliners/cat-light-beige-leather-motion-recliner-sofa/Light Beige Leather Motion Recliner Sofa.jpg",
    "images": [
      "assets/products/recliners/cat-light-beige-leather-motion-recliner-sofa/Light Beige Leather Motion Recliner Sofa.jpg"
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
    "img": "assets/products/recliners/cat-light-blue-and-grey-fabric-recliner-chair/Light Blue and Grey Fabric Recliner Chair.jpg",
    "images": [
      "assets/products/recliners/cat-light-blue-and-grey-fabric-recliner-chair/Light Blue and Grey Fabric Recliner Chair.jpg"
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
    "img": "assets/products/recliners/cat-light-gray-leather-double-recliner/light_gray_leather_double_recliner.png",
    "images": [
      "assets/products/recliners/cat-light-gray-leather-double-recliner/light_gray_leather_double_recliner.png"
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
    "img": "assets/products/recliners/cat-light-grey-fabric-power-recliner-armchair-b/Light Grey Fabric Power Recliner Armchair B.jpg",
    "images": [
      "assets/products/recliners/cat-light-grey-fabric-power-recliner-armchair-b/Light Grey Fabric Power Recliner Armchair B.jpg"
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
    "img": "assets/products/recliners/cat-light-grey-leather-motion-recliner-sofa/Light Grey Leather Motion Recliner Sofa.jpg",
    "images": [
      "assets/products/recliners/cat-light-grey-leather-motion-recliner-sofa/Light Grey Leather Motion Recliner Sofa.jpg"
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
    "img": "assets/products/recliners/cat-mahogany-red-leather-power-recliner/mahogany_red_leather_power_recliner.png",
    "images": [
      "assets/products/recliners/cat-mahogany-red-leather-power-recliner/mahogany_red_leather_power_recliner.png"
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
    "img": "assets/products/recliners/cat-mocha-plush-power-recliner-couch/mocha_plush_power_recliner_couch.png",
    "images": [
      "assets/products/recliners/cat-mocha-plush-power-recliner-couch/mocha_plush_power_recliner_couch.png"
    ],
    "colors": []
  },
  {
    "id": "cat-mustard-yellow-3seater-recliner-sofa",
    "name": "Mustard Yellow 3Seater Recliner Sofa",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Mustard Yellow 3Seater Recliner Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-mustard-yellow-3seater-recliner-sofa/mustard_yellow_3seater_recliner_sofa.png",
    "images": [
      "assets/products/recliners/cat-mustard-yellow-3seater-recliner-sofa/mustard_yellow_3seater_recliner_sofa.png"
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
    "img": "assets/products/recliners/cat-mustard-yellow-power-recliner-sofa/mustard_yellow_power_recliner_sofa.png",
    "images": [
      "assets/products/recliners/cat-mustard-yellow-power-recliner-sofa/mustard_yellow_power_recliner_sofa.png"
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
    "img": "assets/products/recliners/cat-navy-blue-leather-power-motion-recliner-armchair-b/Navy Blue Leather Power Motion Recliner Armchair B.jpg",
    "images": [
      "assets/products/recliners/cat-navy-blue-leather-power-motion-recliner-armchair-b/Navy Blue Leather Power Motion Recliner Armchair B.jpg"
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
    "img": "assets/products/recliners/cat-navy-blue-leather-recliner-armchair/Navy Blue Leather Recliner Armchair - Studio View.jpg",
    "images": [
      "assets/products/recliners/cat-navy-blue-leather-recliner-armchair/Navy Blue Leather Recliner Armchair - Studio View.jpg"
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
    "img": "assets/products/recliners/cat-olive-brown-leather-power-recliner-armchair/Olive Brown Leather Power Recliner Armchair.jpg",
    "images": [
      "assets/products/recliners/cat-olive-brown-leather-power-recliner-armchair/Olive Brown Leather Power Recliner Armchair.jpg"
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
    "img": "assets/products/recliners/cat-rich-brown-leather-swivel-recliner/rich_brown_leather_swivel_recliner.png",
    "images": [
      "assets/products/recliners/cat-rich-brown-leather-swivel-recliner/rich_brown_leather_swivel_recliner.png"
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
    "img": "assets/products/recliners/cat-rust-velvet-piped-recliner-chair/rust_velvet_piped_recliner_chair.png",
    "images": [
      "assets/products/recliners/cat-rust-velvet-piped-recliner-chair/rust_velvet_piped_recliner_chair.png"
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
    "img": "assets/products/sofas/cat-saddle-brown-power-reclining-sofa/saddle_brown_power_reclining_sofa.png",
    "images": [
      "assets/products/sofas/cat-saddle-brown-power-reclining-sofa/saddle_brown_power_reclining_sofa.png"
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
    "img": "assets/products/recliners/cat-sage-green-leather-power-motion-recliner-loveseat/Sage Green Leather Power Motion Recliner Loveseat.jpg",
    "images": [
      "assets/products/recliners/cat-sage-green-leather-power-motion-recliner-loveseat/Sage Green Leather Power Motion Recliner Loveseat.jpg"
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
    "img": "assets/products/recliners/cat-sage-green-leather-power-motion-recliner-sofa-b/Sage Green Leather Power Motion Recliner Sofa B.jpg",
    "images": [
      "assets/products/recliners/cat-sage-green-leather-power-motion-recliner-sofa-b/Sage Green Leather Power Motion Recliner Sofa B.jpg"
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
    "img": "assets/products/recliners/cat-slate-blue-microfiber-plush-recliner/slate_blue_microfiber_plush_recliner.png",
    "images": [
      "assets/products/recliners/cat-slate-blue-microfiber-plush-recliner/slate_blue_microfiber_plush_recliner.png"
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
    "img": "assets/products/recliners/cat-slate-blue-microfiber-recliner-loveseat/slate_blue_microfiber_recliner_loveseat.png",
    "images": [
      "assets/products/recliners/cat-slate-blue-microfiber-recliner-loveseat/slate_blue_microfiber_recliner_loveseat.png"
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
    "img": "assets/products/recliners/cat-slate-blue-reclining-living-suite/slate_blue_reclining_living_suite.png",
    "images": [
      "assets/products/recliners/cat-slate-blue-reclining-living-suite/slate_blue_reclining_living_suite.png"
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
    "img": "assets/products/recliners/cat-slate-gray-microfiber-recliner-loveseat/slate_gray_microfiber_recliner_loveseat.png",
    "images": [
      "assets/products/recliners/cat-slate-gray-microfiber-recliner-loveseat/slate_gray_microfiber_recliner_loveseat.png"
    ],
    "colors": []
  },
  {
    "id": "cat-tan-leather-3piece-recliner-suite",
    "name": "Tan Leather 3Piece Recliner Suite",
    "category": "recliners",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Tan Leather 3Piece Recliner Suite combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/recliners/cat-tan-leather-3piece-recliner-suite/tan_leather_3piece_recliner_suite.png",
    "images": [
      "assets/products/recliners/cat-tan-leather-3piece-recliner-suite/tan_leather_3piece_recliner_suite.png"
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
    "img": "assets/products/recliners/cat-tan-leather-power-recliner-modular-sofa-with-console/Tan Leather Power Recliner Modular Sofa with Console.jpg",
    "images": [
      "assets/products/recliners/cat-tan-leather-power-recliner-modular-sofa-with-console/Tan Leather Power Recliner Modular Sofa with Console.jpg"
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
    "img": "assets/products/recliners/cat-tan-plush-leather-recliner-sofa/tan_plush_leather_recliner_sofa.png",
    "images": [
      "assets/products/recliners/cat-tan-plush-leather-recliner-sofa/tan_plush_leather_recliner_sofa.png"
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
    "img": "assets/products/recliners/cat-taupe-corduroy-power-recliner/taupe_corduroy_power_recliner.png",
    "images": [
      "assets/products/recliners/cat-taupe-corduroy-power-recliner/taupe_corduroy_power_recliner.png"
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
    "img": "assets/products/recliners/cat-taupe-leather-power-reclining-pair/taupe_leather_power_reclining_pair.png",
    "images": [
      "assets/products/recliners/cat-taupe-leather-power-reclining-pair/taupe_leather_power_reclining_pair.png"
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
    "img": "assets/products/recliners/cat-taupe-microfiber-power-recliner-comboset/taupe_microfiber_power_recliner_comboset.png",
    "images": [
      "assets/products/recliners/cat-taupe-microfiber-power-recliner-comboset/taupe_microfiber_power_recliner_comboset.png"
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
    "img": "assets/products/recliners/cat-terracotta-velvet-double-recliner/terracotta_velvet_double_recliner.png",
    "images": [
      "assets/products/recliners/cat-terracotta-velvet-double-recliner/terracotta_velvet_double_recliner.png"
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
    "img": "assets/products/recliners/cat-twotone-blue-gray-power-recliner/twotone_blue_gray_power_recliner.png",
    "images": [
      "assets/products/recliners/cat-twotone-blue-gray-power-recliner/twotone_blue_gray_power_recliner.png"
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
    "img": "assets/products/recliners/cat-white-leather-power-recliner-loveseat/White Leather Power Recliner Loveseat.jpg",
    "images": [
      "assets/products/recliners/cat-white-leather-power-recliner-loveseat/White Leather Power Recliner Loveseat.jpg"
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
    "img": "assets/products/recliners/cat-white-leather-recliner-armchair/White Leather Recliner Armchair - Extended View.jpg",
    "images": [
      "assets/products/recliners/cat-white-leather-recliner-armchair/White Leather Recliner Armchair - Extended View.jpg"
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
    "img": "assets/products/sleeping-beds/bedroom_set_01/Bedroom_Set_01_01.png",
    "images": [
      "assets/products/sleeping-beds/bedroom_set_01/Bedroom_Set_01_01.png"
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
    "img": "assets/products/sleeping-beds/bedroom_set_02/Bedroom_Set_02_01.png",
    "images": [
      "assets/products/sleeping-beds/bedroom_set_02/Bedroom_Set_02_01.png",
      "assets/products/sleeping-beds/bedroom_set_02/Bedroom_Set_02_02.png",
      "assets/products/sleeping-beds/bedroom_set_02/Bedroom_Set_02_03.png",
      "assets/products/sleeping-beds/bedroom_set_02/Bedroom_Set_02_04.png"
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
    "img": "assets/products/sleeping-beds/bedroom_set_03/Bedroom_Set_03_01.png",
    "images": [
      "assets/products/sleeping-beds/bedroom_set_03/Bedroom_Set_03_01.png",
      "assets/products/sleeping-beds/bedroom_set_03/Bedroom_Set_03_02.png",
      "assets/products/sleeping-beds/bedroom_set_03/Bedroom_Set_03_03.png",
      "assets/products/sleeping-beds/bedroom_set_03/Bedroom_Set_03_04.png",
      "assets/products/sleeping-beds/bedroom_set_03/Bedroom_Set_03_05.png",
      "assets/products/sleeping-beds/bedroom_set_03/Bedroom_Set_03_06.png"
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
    "img": "assets/products/sleeping-beds/bedroom_set_04/Bedroom_Set_04_01.png",
    "images": [
      "assets/products/sleeping-beds/bedroom_set_04/Bedroom_Set_04_01.png",
      "assets/products/sleeping-beds/bedroom_set_04/Bedroom_Set_04_02.png",
      "assets/products/sleeping-beds/bedroom_set_04/Bedroom_Set_04_03.png",
      "assets/products/sleeping-beds/bedroom_set_04/Bedroom_Set_04_04.png",
      "assets/products/sleeping-beds/bedroom_set_04/Bedroom_Set_04_05.png",
      "assets/products/sleeping-beds/bedroom_set_04/Bedroom_Set_04_06.png"
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
    "img": "assets/products/sleeping-beds/bedroom_set_05/Bedroom_Set_05_01.png",
    "images": [
      "assets/products/sleeping-beds/bedroom_set_05/Bedroom_Set_05_01.png",
      "assets/products/sleeping-beds/bedroom_set_05/Bedroom_Set_05_02.png",
      "assets/products/sleeping-beds/bedroom_set_05/Bedroom_Set_05_03.png",
      "assets/products/sleeping-beds/bedroom_set_05/Bedroom_Set_05_04.png",
      "assets/products/sleeping-beds/bedroom_set_05/Bedroom_Set_05_05.png",
      "assets/products/sleeping-beds/bedroom_set_05/Bedroom_Set_05_06.png"
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
    "img": "assets/products/sleeping-beds/bedroom_set_06/Bedroom_Set_06_01.png",
    "images": [
      "assets/products/sleeping-beds/bedroom_set_06/Bedroom_Set_06_01.png",
      "assets/products/sleeping-beds/bedroom_set_06/Bedroom_Set_06_02.png",
      "assets/products/sleeping-beds/bedroom_set_06/Bedroom_Set_06_03.png",
      "assets/products/sleeping-beds/bedroom_set_06/Bedroom_Set_06_04.png",
      "assets/products/sleeping-beds/bedroom_set_06/Bedroom_Set_06_05.png",
      "assets/products/sleeping-beds/bedroom_set_06/Bedroom_Set_06_06.png"
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
    "img": "assets/products/sleeping-beds/bedroom_set_07/Bedroom_Set_07_01.png",
    "images": [
      "assets/products/sleeping-beds/bedroom_set_07/Bedroom_Set_07_01.png",
      "assets/products/sleeping-beds/bedroom_set_07/Bedroom_Set_07_02.png",
      "assets/products/sleeping-beds/bedroom_set_07/Bedroom_Set_07_03.png",
      "assets/products/sleeping-beds/bedroom_set_07/Bedroom_Set_07_04.png",
      "assets/products/sleeping-beds/bedroom_set_07/Bedroom_Set_07_05.png",
      "assets/products/sleeping-beds/bedroom_set_07/Bedroom_Set_07_06.png"
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
    "img": "assets/products/sleeping-beds/bedroom_set_08/Bedroom_Set_08_01.png",
    "images": [
      "assets/products/sleeping-beds/bedroom_set_08/Bedroom_Set_08_01.png",
      "assets/products/sleeping-beds/bedroom_set_08/Bedroom_Set_08_02.png",
      "assets/products/sleeping-beds/bedroom_set_08/Bedroom_Set_08_03.png",
      "assets/products/sleeping-beds/bedroom_set_08/Bedroom_Set_08_04.png",
      "assets/products/sleeping-beds/bedroom_set_08/Bedroom_Set_08_05.png",
      "assets/products/sleeping-beds/bedroom_set_08/Bedroom_Set_08_06.png"
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
    "img": "assets/products/sleeping-beds/bedroom_set_09/Bedroom_Set_09_01.png",
    "images": [
      "assets/products/sleeping-beds/bedroom_set_09/Bedroom_Set_09_01.png",
      "assets/products/sleeping-beds/bedroom_set_09/Bedroom_Set_09_02.png",
      "assets/products/sleeping-beds/bedroom_set_09/Bedroom_Set_09_03.png",
      "assets/products/sleeping-beds/bedroom_set_09/Bedroom_Set_09_04.png",
      "assets/products/sleeping-beds/bedroom_set_09/Bedroom_Set_09_05.png",
      "assets/products/sleeping-beds/bedroom_set_09/Bedroom_Set_09_06.png",
      "assets/products/sleeping-beds/bedroom_set_09/Bedroom_Set_09_07.png"
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
    "img": "assets/products/sleeping-beds/bedroom_set_10/Bedroom_Set_10_01.png",
    "images": [
      "assets/products/sleeping-beds/bedroom_set_10/Bedroom_Set_10_01.png",
      "assets/products/sleeping-beds/bedroom_set_10/Bedroom_Set_10_02.png",
      "assets/products/sleeping-beds/bedroom_set_10/Bedroom_Set_10_03.png",
      "assets/products/sleeping-beds/bedroom_set_10/Bedroom_Set_10_04.png",
      "assets/products/sleeping-beds/bedroom_set_10/Bedroom_Set_10_05.png",
      "assets/products/sleeping-beds/bedroom_set_10/Bedroom_Set_10_06.png",
      "assets/products/sleeping-beds/bedroom_set_10/Bedroom_Set_10_07.png"
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
    "img": "assets/products/sleeping-beds/bedroom_set_11/Bedroom_Set_11_01.png",
    "images": [
      "assets/products/sleeping-beds/bedroom_set_11/Bedroom_Set_11_01.png",
      "assets/products/sleeping-beds/bedroom_set_11/Bedroom_Set_11_02.png",
      "assets/products/sleeping-beds/bedroom_set_11/Bedroom_Set_11_03.png",
      "assets/products/sleeping-beds/bedroom_set_11/Bedroom_Set_11_04.png",
      "assets/products/sleeping-beds/bedroom_set_11/Bedroom_Set_11_05.png",
      "assets/products/sleeping-beds/bedroom_set_11/Bedroom_Set_11_06.png",
      "assets/products/sleeping-beds/bedroom_set_11/Bedroom_Set_11_07.png"
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
    "img": "assets/products/sleeping-beds/bedroom_set_12/Bedroom_Set_12_01.png",
    "images": [
      "assets/products/sleeping-beds/bedroom_set_12/Bedroom_Set_12_01.png",
      "assets/products/sleeping-beds/bedroom_set_12/Bedroom_Set_12_02.png",
      "assets/products/sleeping-beds/bedroom_set_12/Bedroom_Set_12_03.png",
      "assets/products/sleeping-beds/bedroom_set_12/Bedroom_Set_12_04.png",
      "assets/products/sleeping-beds/bedroom_set_12/Bedroom_Set_12_05.png"
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
    "img": "assets/products/sleeping-beds/cat-angled-wood-frame-daybed-couch/Angled Wood Frame Daybed Couch - View 1.jpg",
    "images": [
      "assets/products/sleeping-beds/cat-angled-wood-frame-daybed-couch/Angled Wood Frame Daybed Couch - View 1.jpg",
      "assets/products/sleeping-beds/cat-angled-wood-frame-daybed-couch/Angled Wood Frame Daybed Couch - View 2.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-bedroom-suite-alpha",
    "name": "Bedroom Suite Alpha",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Bedroom Suite Alpha combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-bedroom-suite-alpha/Bedroom Suite Alpha - Front View.png",
    "images": [
      "assets/products/sleeping-beds/cat-bedroom-suite-alpha/Bedroom Suite Alpha - Front View.png"
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
    "img": "assets/products/sleeping-beds/cat-bedroom-suite-beta/Bedroom Suite Beta - Angle Perspective.png",
    "images": [
      "assets/products/sleeping-beds/cat-bedroom-suite-beta/Bedroom Suite Beta - Angle Perspective.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-beta/Bedroom Suite Beta - Front View.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-beta/Bedroom Suite Beta - Side View.png"
    ],
    "colors": []
  },
  {
    "id": "cat-bedroom-suite-delta",
    "name": "Bedroom Suite Delta",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Bedroom Suite Delta combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-bedroom-suite-delta/Bedroom Suite Delta - Angle Perspective.png",
    "images": [
      "assets/products/sleeping-beds/cat-bedroom-suite-delta/Bedroom Suite Delta - Angle Perspective.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-delta/Bedroom Suite Delta - Context View.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-delta/Bedroom Suite Delta - Corner Detail.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-delta/Bedroom Suite Delta - Front View.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-delta/Bedroom Suite Delta - Side View.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-delta/Bedroom Suite Delta - Studio Showcase.png"
    ],
    "colors": []
  },
  {
    "id": "cat-bedroom-suite-epsilon",
    "name": "Bedroom Suite Epsilon",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Bedroom Suite Epsilon combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-bedroom-suite-epsilon/Bedroom Suite Epsilon - Angle Perspective.png",
    "images": [
      "assets/products/sleeping-beds/cat-bedroom-suite-epsilon/Bedroom Suite Epsilon - Angle Perspective.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-epsilon/Bedroom Suite Epsilon - Context View.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-epsilon/Bedroom Suite Epsilon - Corner Detail.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-epsilon/Bedroom Suite Epsilon - Front View.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-epsilon/Bedroom Suite Epsilon - Side View.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-epsilon/Bedroom Suite Epsilon - Studio Showcase.png"
    ],
    "colors": []
  },
  {
    "id": "cat-bedroom-suite-eta",
    "name": "Bedroom Suite Eta",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Bedroom Suite Eta combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-bedroom-suite-eta/Bedroom Suite Eta - Angle Perspective.png",
    "images": [
      "assets/products/sleeping-beds/cat-bedroom-suite-eta/Bedroom Suite Eta - Angle Perspective.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-eta/Bedroom Suite Eta - Context View.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-eta/Bedroom Suite Eta - Corner Detail.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-eta/Bedroom Suite Eta - Front View.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-eta/Bedroom Suite Eta - Side View.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-eta/Bedroom Suite Eta - Studio Showcase.png"
    ],
    "colors": []
  },
  {
    "id": "cat-bedroom-suite-gamma",
    "name": "Bedroom Suite Gamma",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Bedroom Suite Gamma combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-bedroom-suite-gamma/Bedroom Suite Gamma - Angle Perspective.png",
    "images": [
      "assets/products/sleeping-beds/cat-bedroom-suite-gamma/Bedroom Suite Gamma - Angle Perspective.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-gamma/Bedroom Suite Gamma - Context View.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-gamma/Bedroom Suite Gamma - Corner Detail.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-gamma/Bedroom Suite Gamma - Front View.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-gamma/Bedroom Suite Gamma - Side View.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-gamma/Bedroom Suite Gamma - Studio Showcase.png"
    ],
    "colors": []
  },
  {
    "id": "cat-bedroom-suite-iota",
    "name": "Bedroom Suite Iota",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Bedroom Suite Iota combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-bedroom-suite-iota/Bedroom Suite Iota - Angle Perspective.png",
    "images": [
      "assets/products/sleeping-beds/cat-bedroom-suite-iota/Bedroom Suite Iota - Angle Perspective.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-iota/Bedroom Suite Iota - Context View.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-iota/Bedroom Suite Iota - Corner Detail.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-iota/Bedroom Suite Iota - Front View.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-iota/Bedroom Suite Iota - High Angle View.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-iota/Bedroom Suite Iota - Side View.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-iota/Bedroom Suite Iota - Studio Showcase.png"
    ],
    "colors": []
  },
  {
    "id": "cat-bedroom-suite-kappa",
    "name": "Bedroom Suite Kappa",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Bedroom Suite Kappa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-bedroom-suite-kappa/Bedroom Suite Kappa - Angle Perspective.png",
    "images": [
      "assets/products/sleeping-beds/cat-bedroom-suite-kappa/Bedroom Suite Kappa - Angle Perspective.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-kappa/Bedroom Suite Kappa - Context View.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-kappa/Bedroom Suite Kappa - Corner Detail.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-kappa/Bedroom Suite Kappa - Front View.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-kappa/Bedroom Suite Kappa - High Angle View.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-kappa/Bedroom Suite Kappa - Side View.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-kappa/Bedroom Suite Kappa - Studio Showcase.png"
    ],
    "colors": []
  },
  {
    "id": "cat-bedroom-suite-lambda",
    "name": "Bedroom Suite Lambda",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Bedroom Suite Lambda combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-bedroom-suite-lambda/Bedroom Suite Lambda - Angle Perspective.png",
    "images": [
      "assets/products/sleeping-beds/cat-bedroom-suite-lambda/Bedroom Suite Lambda - Angle Perspective.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-lambda/Bedroom Suite Lambda - Context View.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-lambda/Bedroom Suite Lambda - Corner Detail.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-lambda/Bedroom Suite Lambda - Front View.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-lambda/Bedroom Suite Lambda - High Angle View.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-lambda/Bedroom Suite Lambda - Side View.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-lambda/Bedroom Suite Lambda - Studio Showcase.png"
    ],
    "colors": []
  },
  {
    "id": "cat-bedroom-suite-mu",
    "name": "Bedroom Suite Mu",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Bedroom Suite Mu combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-bedroom-suite-mu/Bedroom Suite Mu - Angle Perspective.png",
    "images": [
      "assets/products/sleeping-beds/cat-bedroom-suite-mu/Bedroom Suite Mu - Angle Perspective.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-mu/Bedroom Suite Mu - Corner Detail.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-mu/Bedroom Suite Mu - Front View.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-mu/Bedroom Suite Mu - Side View.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-mu/Bedroom Suite Mu - Studio Showcase.png"
    ],
    "colors": []
  },
  {
    "id": "cat-bedroom-suite-theta",
    "name": "Bedroom Suite Theta",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Bedroom Suite Theta combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-bedroom-suite-theta/Bedroom Suite Theta - Angle Perspective.png",
    "images": [
      "assets/products/sleeping-beds/cat-bedroom-suite-theta/Bedroom Suite Theta - Angle Perspective.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-theta/Bedroom Suite Theta - Context View.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-theta/Bedroom Suite Theta - Corner Detail.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-theta/Bedroom Suite Theta - Front View.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-theta/Bedroom Suite Theta - Side View.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-theta/Bedroom Suite Theta - Studio Showcase.png"
    ],
    "colors": []
  },
  {
    "id": "cat-bedroom-suite-zeta",
    "name": "Bedroom Suite Zeta",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Bedroom Suite Zeta combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-bedroom-suite-zeta/Bedroom Suite Zeta - Angle Perspective.png",
    "images": [
      "assets/products/sleeping-beds/cat-bedroom-suite-zeta/Bedroom Suite Zeta - Angle Perspective.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-zeta/Bedroom Suite Zeta - Context View.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-zeta/Bedroom Suite Zeta - Corner Detail.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-zeta/Bedroom Suite Zeta - Front View.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-zeta/Bedroom Suite Zeta - Side View.png",
      "assets/products/sleeping-beds/cat-bedroom-suite-zeta/Bedroom Suite Zeta - Studio Showcase.png"
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
    "img": "assets/products/sleeping-beds/cat-beige-boucle-lowprofile-platform-bed/beige_boucle_lowprofile_platform_bed.png",
    "images": [
      "assets/products/sleeping-beds/cat-beige-boucle-lowprofile-platform-bed/beige_boucle_lowprofile_platform_bed.png"
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
    "img": "assets/products/sleeping-beds/cat-charcoal-channel-tufted-bed/charcoal_channel_tufted_bed.png",
    "images": [
      "assets/products/sleeping-beds/cat-charcoal-channel-tufted-bed/charcoal_channel_tufted_bed.png"
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
    "img": "assets/products/sleeping-beds/cat-charcoal-velvet-tufted-platform-bed/charcoal_velvet_tufted_platform_bed.png",
    "images": [
      "assets/products/sleeping-beds/cat-charcoal-velvet-tufted-platform-bed/charcoal_velvet_tufted_platform_bed.png"
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
    "img": "assets/products/sleeping-beds/cat-contemporary-ash-wood-bed/Contemporary Ash Wood Bed - Angle Perspective.jpg",
    "images": [
      "assets/products/sleeping-beds/cat-contemporary-ash-wood-bed/Contemporary Ash Wood Bed - Angle Perspective.jpg"
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
    "img": "assets/products/sleeping-beds/cat-cream-linen-lowprofile-platform-bed/cream_linen_lowprofile_platform_bed.png",
    "images": [
      "assets/products/sleeping-beds/cat-cream-linen-lowprofile-platform-bed/cream_linen_lowprofile_platform_bed.png"
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
    "img": "assets/products/sleeping-beds/cat-cream-upholstered-bed-with-rose-blanket/cream_upholstered_bed_with_rose_blanket.png",
    "images": [
      "assets/products/sleeping-beds/cat-cream-upholstered-bed-with-rose-blanket/cream_upholstered_bed_with_rose_blanket.png"
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
    "img": "assets/products/sleeping-beds/cat-dark-espresso-single-bed-with-arched-headboard/Dark Espresso Single Bed with Arched Headboard.png",
    "images": [
      "assets/products/sleeping-beds/cat-dark-espresso-single-bed-with-arched-headboard/Dark Espresso Single Bed with Arched Headboard.png"
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
    "img": "assets/products/sleeping-beds/cat-dark-gray-modern-platform-bed/dark_gray_modern_platform_bed.png",
    "images": [
      "assets/products/sleeping-beds/cat-dark-gray-modern-platform-bed/dark_gray_modern_platform_bed.png"
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
    "img": "assets/products/sleeping-beds/cat-dark-gray-wingheadboard-bed/dark_gray_wingheadboard_bed.png",
    "images": [
      "assets/products/sleeping-beds/cat-dark-gray-wingheadboard-bed/dark_gray_wingheadboard_bed.png"
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
    "img": "assets/products/sleeping-beds/cat-dusty-rose-velvet-tufted-bed/dusty_rose_velvet_tufted_bed.png",
    "images": [
      "assets/products/sleeping-beds/cat-dusty-rose-velvet-tufted-bed/dusty_rose_velvet_tufted_bed.png"
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
    "img": "assets/products/sleeping-beds/cat-elthira-leather-upholstered-bed-frame/Elthira Leather Bed Frame - Angle Perspective.png",
    "images": [
      "assets/products/sleeping-beds/cat-elthira-leather-upholstered-bed-frame/Elthira Leather Bed Frame - Angle Perspective.png",
      "assets/products/sleeping-beds/cat-elthira-leather-upholstered-bed-frame/Elthira Leather Bed Frame - Front View.png"
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
    "img": "assets/products/sleeping-beds/cat-emerald-velvet-tufted-bed-frame/emerald_velvet_tufted_bed_frame.png",
    "images": [
      "assets/products/sleeping-beds/cat-emerald-velvet-tufted-bed-frame/emerald_velvet_tufted_bed_frame.png"
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
    "img": "assets/products/sleeping-beds/cat-eternia-modern-ash-bedroom-set/Eternia Modern Ash Bedroom Set - Angle Perspective.png",
    "images": [
      "assets/products/sleeping-beds/cat-eternia-modern-ash-bedroom-set/Eternia Modern Ash Bedroom Set - Angle Perspective.png",
      "assets/products/sleeping-beds/cat-eternia-modern-ash-bedroom-set/Eternia Modern Ash Bedroom Set - Front View.png",
      "assets/products/sleeping-beds/cat-eternia-modern-ash-bedroom-set/Eternia Modern Ash Bedroom Set - Side View.png"
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
    "img": "assets/products/sleeping-beds/cat-hospitality-bedroom-study-suite/Hospitality Suite - Angle Perspective.png",
    "images": [
      "assets/products/sleeping-beds/cat-hospitality-bedroom-study-suite/Hospitality Suite - Angle Perspective.png",
      "assets/products/sleeping-beds/cat-hospitality-bedroom-study-suite/Hospitality Suite - Corner Detail.png",
      "assets/products/sleeping-beds/cat-hospitality-bedroom-study-suite/Hospitality Suite - Front View.png",
      "assets/products/sleeping-beds/cat-hospitality-bedroom-study-suite/Hospitality Suite - Side View.png"
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
    "img": "assets/products/sleeping-beds/cat-light-oak-single-bed-and-nightstand/light_oak_single_bed_and_nightstand.png",
    "images": [
      "assets/products/sleeping-beds/cat-light-oak-single-bed-and-nightstand/light_oak_single_bed_and_nightstand.png"
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
    "img": "assets/products/sleeping-beds/cat-low-profile-wooden-platform-bed-kappa/Low Profile Wooden Platform Bed Kappa.jpg",
    "images": [
      "assets/products/sleeping-beds/cat-low-profile-wooden-platform-bed-kappa/Low Profile Wooden Platform Bed Kappa.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-bed-frame-lambda",
    "name": "Minimalist Wood Bed Frame Lambda",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Bed Frame Lambda combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-bed-frame-lambda/Minimalist Wood Bed Frame Lambda.jpg",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-bed-frame-lambda/Minimalist Wood Bed Frame Lambda.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-bed-theta",
    "name": "Minimalist Wood Bed Theta",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Bed Theta combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-bed-theta/Minimalist Wood Bed Theta.jpg",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-bed-theta/Minimalist Wood Bed Theta.jpg"
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
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-bed-with-cane-headboard/Minimalist Wood Bed with Cane Headboard.jpg",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-bed-with-cane-headboard/Minimalist Wood Bed with Cane Headboard.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-bed-with-headboard-shelf",
    "name": "Minimalist Wood Bed With Headboard Shelf",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Bed With Headboard Shelf combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-bed-with-headboard-shelf/Minimalist Wood Bed with Headboard Shelf.jpg",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-bed-with-headboard-shelf/Minimalist Wood Bed with Headboard Shelf.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-daybed-platform-bed-chi",
    "name": "Minimalist Wood Daybed Platform Bed Chi",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Daybed Platform Bed Chi combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-chi/Minimalist Wood Daybed Platform Bed Chi.jpg",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-chi/Minimalist Wood Daybed Platform Bed Chi.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-daybed-platform-bed-mu",
    "name": "Minimalist Wood Daybed Platform Bed Mu",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Daybed Platform Bed Mu combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-mu/Minimalist Wood Daybed Platform Bed Mu.jpg",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-mu/Minimalist Wood Daybed Platform Bed Mu.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-daybed-platform-bed-nu",
    "name": "Minimalist Wood Daybed Platform Bed Nu",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Daybed Platform Bed Nu combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-nu/Minimalist Wood Daybed Platform Bed Nu.jpg",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-nu/Minimalist Wood Daybed Platform Bed Nu.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-daybed-platform-bed-omicron",
    "name": "Minimalist Wood Daybed Platform Bed Omicron",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Daybed Platform Bed Omicron combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-omicron/Minimalist Wood Daybed Platform Bed Omicron.jpg",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-omicron/Minimalist Wood Daybed Platform Bed Omicron.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-daybed-platform-bed-phi",
    "name": "Minimalist Wood Daybed Platform Bed Phi",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Daybed Platform Bed Phi combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-phi/Minimalist Wood Daybed Platform Bed Phi.jpg",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-phi/Minimalist Wood Daybed Platform Bed Phi.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-daybed-platform-bed-pi",
    "name": "Minimalist Wood Daybed Platform Bed Pi",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Daybed Platform Bed Pi combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-pi/Minimalist Wood Daybed Platform Bed Pi.jpg",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-pi/Minimalist Wood Daybed Platform Bed Pi.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-daybed-platform-bed-rho",
    "name": "Minimalist Wood Daybed Platform Bed Rho",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Daybed Platform Bed Rho combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-rho/Minimalist Wood Daybed Platform Bed Rho.jpg",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-rho/Minimalist Wood Daybed Platform Bed Rho.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-daybed-platform-bed-sigma",
    "name": "Minimalist Wood Daybed Platform Bed Sigma",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Daybed Platform Bed Sigma combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-sigma/Minimalist Wood Daybed Platform Bed Sigma.jpg",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-sigma/Minimalist Wood Daybed Platform Bed Sigma.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-daybed-platform-bed-tau",
    "name": "Minimalist Wood Daybed Platform Bed Tau",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Daybed Platform Bed Tau combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-tau/Minimalist Wood Daybed Platform Bed Tau.jpg",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-tau/Minimalist Wood Daybed Platform Bed Tau.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-daybed-platform-bed-upsilon",
    "name": "Minimalist Wood Daybed Platform Bed Upsilon",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Daybed Platform Bed Upsilon combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-upsilon/Minimalist Wood Daybed Platform Bed Upsilon.jpg",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-upsilon/Minimalist Wood Daybed Platform Bed Upsilon.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-daybed-platform-bed-xi",
    "name": "Minimalist Wood Daybed Platform Bed Xi",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Daybed Platform Bed Xi combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-xi/Minimalist Wood Daybed Platform Bed Xi.jpg",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-daybed-platform-bed-xi/Minimalist Wood Daybed Platform Bed Xi.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-platform-bed-alpha",
    "name": "Minimalist Wood Platform Bed Alpha",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Platform Bed Alpha combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-platform-bed-alpha/Minimalist Wood Platform Bed Alpha - Low View.jpg",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-platform-bed-alpha/Minimalist Wood Platform Bed Alpha - Low View.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-platform-bed-beta",
    "name": "Minimalist Wood Platform Bed Beta",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Platform Bed Beta combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-platform-bed-beta/Minimalist Wood Platform Bed Beta - High Perspective View.jpg",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-platform-bed-beta/Minimalist Wood Platform Bed Beta - High Perspective View.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-platform-bed-delta",
    "name": "Minimalist Wood Platform Bed Delta",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Platform Bed Delta combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-platform-bed-delta/Minimalist Wood Platform Bed Delta - Studio View.jpg",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-platform-bed-delta/Minimalist Wood Platform Bed Delta - Studio View.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-platform-bed-epsilon",
    "name": "Minimalist Wood Platform Bed Epsilon",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Platform Bed Epsilon combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-platform-bed-epsilon/Minimalist Wood Platform Bed Epsilon - Studio View.jpg",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-platform-bed-epsilon/Minimalist Wood Platform Bed Epsilon - Studio View.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-platform-bed-eta",
    "name": "Minimalist Wood Platform Bed Eta",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Platform Bed Eta combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-platform-bed-eta/Minimalist Wood Platform Bed Eta - Distance View.jpg",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-platform-bed-eta/Minimalist Wood Platform Bed Eta - Distance View.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-platform-bed-gamma",
    "name": "Minimalist Wood Platform Bed Gamma",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Platform Bed Gamma combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-platform-bed-gamma/Minimalist Wood Platform Bed Gamma - Distance View.jpg",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-platform-bed-gamma/Minimalist Wood Platform Bed Gamma - Distance View.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-platform-bed-zeta",
    "name": "Minimalist Wood Platform Bed Zeta",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Platform Bed Zeta combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-platform-bed-zeta/Minimalist Wood Platform Bed Zeta - Side View.jpg",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-platform-bed-zeta/Minimalist Wood Platform Bed Zeta - Side View.jpg"
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
    "img": "assets/products/sleeping-beds/cat-modern-ash-bed-with-upholstered-headboard/Modern Ash Bed with Upholstered Headboard.jpg",
    "images": [
      "assets/products/sleeping-beds/cat-modern-ash-bed-with-upholstered-headboard/Modern Ash Bed with Upholstered Headboard.jpg"
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
    "img": "assets/products/sleeping-beds/cat-modern-walnut-bed-frame-with-grey-headboard/Modern Walnut Bed Frame with Grey Headboard.jpg",
    "images": [
      "assets/products/sleeping-beds/cat-modern-walnut-bed-frame-with-grey-headboard/Modern Walnut Bed Frame with Grey Headboard.jpg"
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
    "img": "assets/products/sleeping-beds/cat-navy-blue-tufted-platform-bed/navy_blue_tufted_platform_bed.png",
    "images": [
      "assets/products/sleeping-beds/cat-navy-blue-tufted-platform-bed/navy_blue_tufted_platform_bed.png"
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
    "img": "assets/products/sleeping-beds/cat-nestor-oak-wood-bedroom-suite-set/Nestor Bedroom Suite Set.png",
    "images": [
      "assets/products/sleeping-beds/cat-nestor-oak-wood-bedroom-suite-set/Nestor Bedroom Suite Set.png"
    ],
    "colors": []
  },
  {
    "id": "cat-nestor-oak-wood-single-bed-with-upholstered-headboard",
    "name": "Nestor Oak Wood Single Bed With Upholstered Headboard",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Nestor Oak Wood Single Bed With Upholstered Headboard combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-nestor-oak-wood-single-bed-with-upholstered-headboard/Nestor Single Bed - Front Perspective.png",
    "images": [
      "assets/products/sleeping-beds/cat-nestor-oak-wood-single-bed-with-upholstered-headboard/Nestor Single Bed - Front Perspective.png",
      "assets/products/sleeping-beds/cat-nestor-oak-wood-single-bed-with-upholstered-headboard/Nestor Single Bed - Side Perspective.png"
    ],
    "colors": []
  },
  {
    "id": "cat-noble-luxury-upholstered-king-bedroom-suite",
    "name": "Noble Luxury Upholstered King Bedroom Suite",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Noble Luxury Upholstered King Bedroom Suite combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-noble-luxury-upholstered-king-bedroom-suite/Noble Luxury Upholstered King Bedroom Suite.png",
    "images": [
      "assets/products/sleeping-beds/cat-noble-luxury-upholstered-king-bedroom-suite/Noble Luxury Upholstered King Bedroom Suite.png"
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
    "img": "assets/products/sleeping-beds/cat-oak-bed-frame-with-upholstered-headboard/oak_bed_frame_with_upholstered_headboard.png",
    "images": [
      "assets/products/sleeping-beds/cat-oak-bed-frame-with-upholstered-headboard/oak_bed_frame_with_upholstered_headboard.png"
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
    "img": "assets/products/sleeping-beds/cat-oak-hydraulic-storage-bed/oak_hydraulic_storage_bed.png",
    "images": [
      "assets/products/sleeping-beds/cat-oak-hydraulic-storage-bed/oak_hydraulic_storage_bed.png"
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
    "img": "assets/products/sleeping-beds/cat-oak-wood-bed-with-dark-headboard/oak_wood_bed_with_dark_headboard.png",
    "images": [
      "assets/products/sleeping-beds/cat-oak-wood-bed-with-dark-headboard/oak_wood_bed_with_dark_headboard.png"
    ],
    "colors": []
  },
  {
    "id": "cat-oak-wood-single-bed-study-bedroom-suite-set",
    "name": "Oak Wood Single Bed Study Bedroom Suite Set",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Oak Wood Single Bed Study Bedroom Suite Set combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-oak-wood-single-bed-study-bedroom-suite-set/Oak Wood Single Bed Study Bedroom Suite Set.png",
    "images": [
      "assets/products/sleeping-beds/cat-oak-wood-single-bed-study-bedroom-suite-set/Oak Wood Single Bed Study Bedroom Suite Set.png"
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
    "img": "assets/products/sleeping-beds/cat-oak-wood-single-bed-with-grey-panel-headboard/Oak Wood Single Bed with Grey Panel Headboard.png",
    "images": [
      "assets/products/sleeping-beds/cat-oak-wood-single-bed-with-grey-panel-headboard/Oak Wood Single Bed with Grey Panel Headboard.png"
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
    "img": "assets/products/sleeping-beds/cat-pine-wood-single-bed-and-desk-set/pine_wood_single_bed_and_desk_set.png",
    "images": [
      "assets/products/sleeping-beds/cat-pine-wood-single-bed-and-desk-set/pine_wood_single_bed_and_desk_set.png"
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
    "img": "assets/products/sleeping-beds/cat-rose-pink-upholstered-bed-frame/rose_pink_upholstered_bed_frame.png",
    "images": [
      "assets/products/sleeping-beds/cat-rose-pink-upholstered-bed-frame/rose_pink_upholstered_bed_frame.png"
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
    "img": "assets/products/sleeping-beds/cat-spindle-wood-frame-daybed/Spindle Wood Frame Daybed - Perspective.jpg",
    "images": [
      "assets/products/sleeping-beds/cat-spindle-wood-frame-daybed/Spindle Wood Frame Daybed - Perspective.jpg",
      "assets/products/sleeping-beds/cat-spindle-wood-frame-daybed/Spindle Wood Frame Daybed - Side.jpg"
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
    "img": "assets/products/sleeping-beds/cat-tufted-beige-platform-bed/tufted_beige_platform_bed.png",
    "images": [
      "assets/products/sleeping-beds/cat-tufted-beige-platform-bed/tufted_beige_platform_bed.png"
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
    "img": "assets/products/sleeping-beds/cat-walnut-single-bed-frame-alpha/Walnut Single Bed Frame Alpha - Distance.jpg",
    "images": [
      "assets/products/sleeping-beds/cat-walnut-single-bed-frame-alpha/Walnut Single Bed Frame Alpha - Distance.jpg",
      "assets/products/sleeping-beds/cat-walnut-single-bed-frame-alpha/Walnut Single Bed Frame Alpha - Perspective.jpg",
      "assets/products/sleeping-beds/cat-walnut-single-bed-frame-alpha/Walnut Single Bed Frame Alpha - Side.jpg"
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
    "img": "assets/products/sleeping-beds/cat-walnut-single-bed-with-straight-headboard/Walnut Single Bed with Straight Headboard.png",
    "images": [
      "assets/products/sleeping-beds/cat-walnut-single-bed-with-straight-headboard/Walnut Single Bed with Straight Headboard.png"
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
    "img": "assets/products/sleeping-beds/cat-walnut-storage-bed-with-bookshelf-headboard/walnut_storage_bed_with_bookshelf_headboard.png",
    "images": [
      "assets/products/sleeping-beds/cat-walnut-storage-bed-with-bookshelf-headboard/walnut_storage_bed_with_bookshelf_headboard.png"
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
    "img": "assets/products/sleeping-beds/eternia_modern_ash/Eternia_Modern_Ash_01.png",
    "images": [
      "assets/products/sleeping-beds/eternia_modern_ash/Eternia_Modern_Ash_01.png",
      "assets/products/sleeping-beds/eternia_modern_ash/Eternia_Modern_Ash_02.png",
      "assets/products/sleeping-beds/eternia_modern_ash/Eternia_Modern_Ash_03.png",
      "assets/products/sleeping-beds/eternia_modern_ash/Eternia_Modern_Ash_04.png",
      "assets/products/sleeping-beds/eternia_modern_ash/Eternia_Modern_Ash_05.png",
      "assets/products/sleeping-beds/eternia_modern_ash/Eternia_Modern_Ash_06.png",
      "assets/products/sleeping-beds/eternia_modern_ash/Eternia_Modern_Ash_07.png"
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
    "img": "assets/products/sleeping-beds/hospitality_suite_type_02/Hospitality_Suite_Type_02_01.png",
    "images": [
      "assets/products/sleeping-beds/hospitality_suite_type_02/Hospitality_Suite_Type_02_01.png",
      "assets/products/sleeping-beds/hospitality_suite_type_02/Hospitality_Suite_Type_02_02.png",
      "assets/products/sleeping-beds/hospitality_suite_type_02/Hospitality_Suite_Type_02_03.png",
      "assets/products/sleeping-beds/hospitality_suite_type_02/Hospitality_Suite_Type_02_04.png",
      "assets/products/sleeping-beds/hospitality_suite_type_02/Hospitality_Suite_Type_02_05.png",
      "assets/products/sleeping-beds/hospitality_suite_type_02/Hospitality_Suite_Type_02_06.png",
      "assets/products/sleeping-beds/hospitality_suite_type_02/Hospitality_Suite_Type_02_07.png"
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
    "img": "assets/products/sleeping-beds/lmw-066/LMW-066.png",
    "badge": "",
    "description": "Transform your bedroom into a peaceful sanctuary with the LMW-066 bed. Built with a solid wood frame for superior stability, it features a beautifully styled headboard and clean modern lines. A refined centerpiece designed to provide a supportive foundation for a restful and comfortable night's sleep.",
    "images": [
      "assets/products/sleeping-beds/lmw-066/LMW-066.png"
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
    "img": "assets/products/sleeping-beds/lmw-067/LMW-067.png",
    "badge": "Bestseller",
    "description": "Transform your bedroom into a peaceful sanctuary with the LMW-067 bed. Built with a solid wood frame for superior stability, it features a beautifully styled headboard and clean modern lines. A refined centerpiece designed to provide a supportive foundation for a restful and comfortable night's sleep.",
    "images": [
      "assets/products/sleeping-beds/lmw-067/LMW-067.png"
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
    "img": "assets/products/sleeping-beds/lmw-068/LMW-068.png",
    "badge": "",
    "description": "Transform your bedroom into a peaceful sanctuary with the LMW-068 bed. Built with a solid wood frame for superior stability, it features a beautifully styled headboard and clean modern lines. A refined centerpiece designed to provide a supportive foundation for a restful and comfortable night's sleep.",
    "images": [
      "assets/products/sleeping-beds/lmw-068/LMW-068.png",
      "assets/products/sleeping-beds/lmw-068/LMW-068_2.png"
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
    "img": "assets/products/sleeping-beds/lmw-069/LMW-069.png",
    "badge": "New",
    "description": "Transform your bedroom into a peaceful sanctuary with the LMW-069 bed. Built with a solid wood frame for superior stability, it features a beautifully styled headboard and clean modern lines. A refined centerpiece designed to provide a supportive foundation for a restful and comfortable night's sleep.",
    "images": [
      "assets/products/sleeping-beds/lmw-069/LMW-069.png"
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
    "img": "assets/products/sleeping-beds/lmw-070/LMW-070.png",
    "badge": "",
    "description": "Transform your bedroom into a peaceful sanctuary with the LMW-070 bed. Built with a solid wood frame for superior stability, it features a beautifully styled headboard and clean modern lines. A refined centerpiece designed to provide a supportive foundation for a restful and comfortable night's sleep.",
    "images": [
      "assets/products/sleeping-beds/lmw-070/LMW-070.png"
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
    "img": "assets/products/sleeping-beds/lmw-071/LMW-071.png",
    "badge": "",
    "description": "Transform your bedroom into a peaceful sanctuary with the LMW-071 bed. Built with a solid wood frame for superior stability, it features a beautifully styled headboard and clean modern lines. A refined centerpiece designed to provide a supportive foundation for a restful and comfortable night's sleep.",
    "images": [
      "assets/products/sleeping-beds/lmw-071/LMW-071.png",
      "assets/products/sleeping-beds/lmw-071/LMW-071_2.png"
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
    "img": "assets/products/sleeping-beds/lmw-072/LMW-072.png",
    "badge": "",
    "description": "Transform your bedroom into a peaceful sanctuary with the LMW-072 bed. Built with a solid wood frame for superior stability, it features a beautifully styled headboard and clean modern lines. A refined centerpiece designed to provide a supportive foundation for a restful and comfortable night's sleep.",
    "images": [
      "assets/products/sleeping-beds/lmw-072/LMW-072.png",
      "assets/products/sleeping-beds/lmw-072/LMW-072_2.png"
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
    "img": "assets/products/sleeping-beds/lmw-073/LMW-073.png",
    "badge": "",
    "description": "Transform your bedroom into a peaceful sanctuary with the LMW-073 bed. Built with a solid wood frame for superior stability, it features a beautifully styled headboard and clean modern lines. A refined centerpiece designed to provide a supportive foundation for a restful and comfortable night's sleep.",
    "images": [
      "assets/products/sleeping-beds/lmw-073/LMW-073.png",
      "assets/products/sleeping-beds/lmw-073/LMW-073_2.png"
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
    "img": "assets/products/sleeping-beds/lmw-074/LMW-074.png",
    "badge": "",
    "description": "Transform your bedroom into a peaceful sanctuary with the LMW-074 bed. Built with a solid wood frame for superior stability, it features a beautifully styled headboard and clean modern lines. A refined centerpiece designed to provide a supportive foundation for a restful and comfortable night's sleep.",
    "images": [
      "assets/products/sleeping-beds/lmw-074/LMW-074.png"
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
    "img": "assets/products/sleeping-beds/lmw-075/LMW-075.png",
    "badge": "",
    "description": "Transform your bedroom into a peaceful sanctuary with the LMW-075 bed. Built with a solid wood frame for superior stability, it features a beautifully styled headboard and clean modern lines. A refined centerpiece designed to provide a supportive foundation for a restful and comfortable night's sleep.",
    "images": [
      "assets/products/sleeping-beds/lmw-075/LMW-075.png"
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
    "img": "assets/products/sleeping-beds/nestor_bed/Nestor_Bed_01.png",
    "images": [
      "assets/products/sleeping-beds/nestor_bed/Nestor_Bed_01.png",
      "assets/products/sleeping-beds/nestor_bed/Nestor_Bed_02.png",
      "assets/products/sleeping-beds/nestor_bed/Nestor_Bed_03.png",
      "assets/products/sleeping-beds/nestor_bed/Nestor_Bed_04.png",
      "assets/products/sleeping-beds/nestor_bed/Nestor_Bed_05.png",
      "assets/products/sleeping-beds/nestor_bed/Nestor_Bed_06.png"
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
    "img": "assets/products/sleeping-beds/noble_campus_bed/Noble_Campus_Bed_01.png",
    "images": [
      "assets/products/sleeping-beds/noble_campus_bed/Noble_Campus_Bed_01.png",
      "assets/products/sleeping-beds/noble_campus_bed/Noble_Campus_Bed_02.png",
      "assets/products/sleeping-beds/noble_campus_bed/Noble_Campus_Bed_03.png"
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
    "img": "assets/products/sleeping-beds/rubco-cot-captain/cot_captain.jpg",
    "images": [
      "assets/products/sleeping-beds/rubco-cot-captain/cot_captain.jpg",
      "assets/products/sleeping-beds/rubco-cot-captain/cot_captain_1.jpg",
      "assets/products/sleeping-beds/rubco-cot-captain/cot_captain_2.jpg"
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
    "img": "assets/products/sleeping-beds/rubco-cot-colonial/cot_colonial.jpg",
    "images": [
      "assets/products/sleeping-beds/rubco-cot-colonial/cot_colonial.jpg",
      "assets/products/sleeping-beds/rubco-cot-colonial/cot_colonial_1.jpg"
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
    "img": "assets/products/sleeping-beds/rubco-cot-correll/cot_correll.jpg",
    "images": [
      "assets/products/sleeping-beds/rubco-cot-correll/cot_correll.jpg",
      "assets/products/sleeping-beds/rubco-cot-correll/cot_correll_1.jpg",
      "assets/products/sleeping-beds/rubco-cot-correll/cot_correll_2.jpg",
      "assets/products/sleeping-beds/rubco-cot-correll/cot_correll_3.jpg"
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
    "img": "assets/products/sleeping-beds/rubco-cot-emrald/cot_emrald.jpg",
    "images": [
      "assets/products/sleeping-beds/rubco-cot-emrald/cot_emrald.jpg",
      "assets/products/sleeping-beds/rubco-cot-emrald/cot_emrald_1.jpg"
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
    "img": "assets/products/sleeping-beds/rubco-dimond-cot/dimond_cot.jpg",
    "images": [
      "assets/products/sleeping-beds/rubco-dimond-cot/dimond_cot.jpg",
      "assets/products/sleeping-beds/rubco-dimond-cot/dimond_cot_1.jpg",
      "assets/products/sleeping-beds/rubco-dimond-cot/dimond_cot_2.jpg"
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
    "img": "assets/products/sleeping-beds/rubco-diwan-cot-one-side/diwan_cot_one_side.jpg",
    "images": [
      "assets/products/sleeping-beds/rubco-diwan-cot-one-side/diwan_cot_one_side.jpg",
      "assets/products/sleeping-beds/rubco-diwan-cot-one-side/diwan_cot_one_side_1.jpg",
      "assets/products/sleeping-beds/rubco-diwan-cot-one-side/diwan_cot_one_side_2.jpg",
      "assets/products/sleeping-beds/rubco-diwan-cot-one-side/diwan_cot_one_side_3.jpg"
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
    "description": "",
    "img": "assets/products/sleeping-beds/single_bed_study_set/Single_Bed_Study_Set_01.png",
    "images": [
      "assets/products/sleeping-beds/single_bed_study_set/Single_Bed_Study_Set_01.png",
      "assets/products/sleeping-beds/single_bed_study_set/Single_Bed_Study_Set_02.png",
      "assets/products/sleeping-beds/single_bed_study_set/Single_Bed_Study_Set_03.png",
      "assets/products/sleeping-beds/single_bed_study_set/Single_Bed_Study_Set_04.png",
      "assets/products/sleeping-beds/single_bed_study_set/Single_Bed_Study_Set_05.png",
      "assets/products/sleeping-beds/single_bed_study_set/Single_Bed_Study_Set_06.png",
      "assets/products/sleeping-beds/single_bed_study_set/Single_Bed_Study_Set_07.png"
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
    "img": "assets/products/sleeping-beds/woodland/Woodland_01.png",
    "images": [
      "assets/products/sleeping-beds/woodland/Woodland_01.png",
      "assets/products/sleeping-beds/woodland/Woodland_02.png",
      "assets/products/sleeping-beds/woodland/Woodland_03.png",
      "assets/products/sleeping-beds/woodland/Woodland_04.png",
      "assets/products/sleeping-beds/woodland/Woodland_05.png",
      "assets/products/sleeping-beds/woodland/Woodland_06.png",
      "assets/products/sleeping-beds/woodland/Woodland_07.png"
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
    "img": "assets/products/sofas/cat-aether-three-seater-sofa/Aether Three Seater Sofa.png",
    "images": [
      "assets/products/sofas/cat-aether-three-seater-sofa/Aether Three Seater Sofa.png"
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
    "img": "assets/products/sofas/cat-aether-two-seater-loveseat-sofa/Aether Two Seater Loveseat Sofa.png",
    "images": [
      "assets/products/sofas/cat-aether-two-seater-loveseat-sofa/Aether Two Seater Loveseat Sofa.png"
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
    "img": "assets/products/sofas/cat-alaska-loveseat-sofa/Alaska Loveseat Sofa - Two Seater.png",
    "images": [
      "assets/products/sofas/cat-alaska-loveseat-sofa/Alaska Loveseat Sofa - Two Seater.png"
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
    "img": "assets/products/sofas/cat-arcus-boucle-loveseat-sofa/Arcus Boucle Loveseat Sofa - Two Seater.png",
    "images": [
      "assets/products/sofas/cat-arcus-boucle-loveseat-sofa/Arcus Boucle Loveseat Sofa - Two Seater.png"
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
    "img": "assets/products/sofas/cat-aspen-full-sofa/Aspen Full Sofa - Three Seater.png",
    "images": [
      "assets/products/sofas/cat-aspen-full-sofa/Aspen Full Sofa - Three Seater.png"
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
    "img": "assets/products/sofas/cat-aspen-loveseat-sofa/Aspen Loveseat Sofa - Two Seater.png",
    "images": [
      "assets/products/sofas/cat-aspen-loveseat-sofa/Aspen Loveseat Sofa - Two Seater.png"
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
    "img": "assets/products/sofas/cat-bamboo-leather-full-sofa/Bamboo Leather Full Sofa - Three Seater.png",
    "images": [
      "assets/products/sofas/cat-bamboo-leather-full-sofa/Bamboo Leather Full Sofa - Three Seater.png"
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
    "img": "assets/products/sofas/cat-bamboo-leather-loveseat/Bamboo Leather Loveseat - Two Seater.png",
    "images": [
      "assets/products/sofas/cat-bamboo-leather-loveseat/Bamboo Leather Loveseat - Two Seater.png"
    ],
    "colors": []
  },
  {
    "id": "basket-storage-unit",
    "name": "Basket Storage Unit",
    "category": "cafe-chairs",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Basket Storage Unit combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/cafe-chairs/basket-storage-unit/Basket Storage Unit - Front View.png",
    "images": [
      "assets/products/cafe-chairs/basket-storage-unit/Basket Storage Unit - Front View.png"
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
    "img": "assets/products/sofas/cat-beige-chenille-plush-sofa/beige_chenille_plush_sofa.png",
    "images": [
      "assets/products/sofas/cat-beige-chenille-plush-sofa/beige_chenille_plush_sofa.png"
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
    "img": "assets/products/sofas/cat-beige-chevronpillow-loveseat/beige_chevronpillow_loveseat.png",
    "images": [
      "assets/products/sofas/cat-beige-chevronpillow-loveseat/beige_chevronpillow_loveseat.png"
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
    "img": "assets/products/sofas/cat-beige-living-room-sofa-set/beige_living_room_sofa_set.png",
    "images": [
      "assets/products/sofas/cat-beige-living-room-sofa-set/beige_living_room_sofa_set.png"
    ],
    "colors": []
  },
  {
    "id": "cat-beige-modern-3piece-living-suite",
    "name": "Beige Modern 3Piece Living Suite",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Beige Modern 3Piece Living Suite combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-beige-modern-3piece-living-suite/beige_modern_3piece_living_suite.png",
    "images": [
      "assets/products/sofas/cat-beige-modern-3piece-living-suite/beige_modern_3piece_living_suite.png"
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
    "img": "assets/products/sofas/cat-beige-modern-living-room-suite/beige_modern_living_room_suite.png",
    "images": [
      "assets/products/sofas/cat-beige-modern-living-room-suite/beige_modern_living_room_suite.png"
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
    "img": "assets/products/sofas/cat-beige-plush-classic-living-room-suite/beige_plush_classic_living_room_suite.png",
    "images": [
      "assets/products/sofas/cat-beige-plush-classic-living-room-suite/beige_plush_classic_living_room_suite.png"
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
    "img": "assets/products/sofas/cat-breeze-linen-full-sofa/Breeze Linen Full Sofa - Three Seater.png",
    "images": [
      "assets/products/sofas/cat-breeze-linen-full-sofa/Breeze Linen Full Sofa - Three Seater.png"
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
    "img": "assets/products/sofas/cat-breeze-linen-loveseat/Breeze Linen Loveseat - Two Seater.png",
    "images": [
      "assets/products/sofas/cat-breeze-linen-loveseat/Breeze Linen Loveseat - Two Seater.png"
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
    "img": "assets/products/sofas/cat-brown-fabric-living-room-suite/brown_fabric_living_room_suite.png",
    "images": [
      "assets/products/sofas/cat-brown-fabric-living-room-suite/brown_fabric_living_room_suite.png"
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
    "img": "assets/products/sofas/cat-brume-sage-green-full-sofa/Brume Sage Green Full Sofa - Three Seater.png",
    "images": [
      "assets/products/sofas/cat-brume-sage-green-full-sofa/Brume Sage Green Full Sofa - Three Seater.png"
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
    "img": "assets/products/sofas/cat-brume-sage-green-loveseat/Brume Sage Green Loveseat - Two Seater.png",
    "images": [
      "assets/products/sofas/cat-brume-sage-green-loveseat/Brume Sage Green Loveseat - Two Seater.png"
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
    "img": "assets/products/sofas/cat-calypso-dusty-pink-velvet-loveseat/Calypso Dusty Pink Velvet Loveseat - Two Seater.png",
    "images": [
      "assets/products/sofas/cat-calypso-dusty-pink-velvet-loveseat/Calypso Dusty Pink Velvet Loveseat - Two Seater.png"
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
    "img": "assets/products/sofas/cat-calypso-velvet-full-sofa/Calypso Velvet Full Sofa - Three Seater.png",
    "images": [
      "assets/products/sofas/cat-calypso-velvet-full-sofa/Calypso Velvet Full Sofa - Three Seater.png"
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
    "img": "assets/products/sofas/cat-charcoal-scandi-slim-sofa/charcoal_scandi_slim_sofa.png",
    "images": [
      "assets/products/sofas/cat-charcoal-scandi-slim-sofa/charcoal_scandi_slim_sofa.png"
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
    "img": "assets/products/sofas/cat-charcoal-woven-loveseat/charcoal_woven_loveseat.png",
    "images": [
      "assets/products/sofas/cat-charcoal-woven-loveseat/charcoal_woven_loveseat.png"
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
    "img": "assets/products/sofas/cat-cirrus-textured-full-sofa/Cirrus Textured Full Sofa - Three Seater.png",
    "images": [
      "assets/products/sofas/cat-cirrus-textured-full-sofa/Cirrus Textured Full Sofa - Three Seater.png"
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
    "img": "assets/products/sofas/cat-cognac-leather-sofa-pair/cognac_leather_sofa_pair.png",
    "images": [
      "assets/products/sofas/cat-cognac-leather-sofa-pair/cognac_leather_sofa_pair.png"
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
    "img": "assets/products/sofas/cat-cognac-leather-tufted-4-seater-sofa/Cognac Leather Tufted 4-Seater Sofa.jpg",
    "images": [
      "assets/products/sofas/cat-cognac-leather-tufted-4-seater-sofa/Cognac Leather Tufted 4-Seater Sofa.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-copper-velvet-piped-3seater-sofa",
    "name": "Copper Velvet Piped 3Seater Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Copper Velvet Piped 3Seater Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-copper-velvet-piped-3seater-sofa/copper_velvet_piped_3seater_sofa.png",
    "images": [
      "assets/products/sofas/cat-copper-velvet-piped-3seater-sofa/copper_velvet_piped_3seater_sofa.png"
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
    "img": "assets/products/sofas/cat-corsica-cream-velvet-full-sofa/Corsica Cream Velvet Full Sofa - Three Seater.png",
    "images": [
      "assets/products/sofas/cat-corsica-cream-velvet-full-sofa/Corsica Cream Velvet Full Sofa - Three Seater.png"
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
    "img": "assets/products/sofas/cat-corsica-cream-velvet-loveseat/Corsica Cream Velvet Loveseat - Two Seater.png",
    "images": [
      "assets/products/sofas/cat-corsica-cream-velvet-loveseat/Corsica Cream Velvet Loveseat - Two Seater.png"
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
    "img": "assets/products/sofas/cat-cream-beige-leather-loveseat-sofa/Cream Beige Leather Loveseat Sofa.jpg",
    "images": [
      "assets/products/sofas/cat-cream-beige-leather-loveseat-sofa/Cream Beige Leather Loveseat Sofa.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-boucle-plush-3seater-sofa",
    "name": "Cream Boucle Plush 3Seater Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Boucle Plush 3Seater Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-cream-boucle-plush-3seater-sofa/cream_boucle_plush_3seater_sofa.png",
    "images": [
      "assets/products/sofas/cat-cream-boucle-plush-3seater-sofa/cream_boucle_plush_3seater_sofa.png"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-buttontufted-3seater-sofa",
    "name": "Cream Buttontufted 3Seater Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Buttontufted 3Seater Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-cream-buttontufted-3seater-sofa/cream_buttontufted_3seater_sofa.png",
    "images": [
      "assets/products/sofas/cat-cream-buttontufted-3seater-sofa/cream_buttontufted_3seater_sofa.png"
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
    "img": "assets/products/sofas/cat-cream-full-living-room-suite/cream_full_living_room_suite.png",
    "images": [
      "assets/products/sofas/cat-cream-full-living-room-suite/cream_full_living_room_suite.png"
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
    "img": "assets/products/sofas/cat-cream-leather-sofa-with-red-accent-pillows/Cream Leather Sofa with Red Accent Pillows.jpg",
    "images": [
      "assets/products/sofas/cat-cream-leather-sofa-with-red-accent-pillows/Cream Leather Sofa with Red Accent Pillows.jpg"
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
    "img": "assets/products/sofas/cat-cream-linen-chevronpillow-loveseat/cream_linen_chevronpillow_loveseat.png",
    "images": [
      "assets/products/sofas/cat-cream-linen-chevronpillow-loveseat/cream_linen_chevronpillow_loveseat.png"
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
    "img": "assets/products/sofas/cat-cream-linen-tuxedo-sofa-with-gold-legs/cream_linen_tuxedo_sofa_with_gold_legs.png",
    "images": [
      "assets/products/sofas/cat-cream-linen-tuxedo-sofa-with-gold-legs/cream_linen_tuxedo_sofa_with_gold_legs.png"
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
    "img": "assets/products/sofas/cat-cream-linen-velvetcushion-loveseat/cream_linen_velvetcushion_loveseat.png",
    "images": [
      "assets/products/sofas/cat-cream-linen-velvetcushion-loveseat/cream_linen_velvetcushion_loveseat.png"
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
    "img": "assets/products/sofas/cat-cream-plush-deepseat-sofa/cream_plush_deepseat_sofa.png",
    "images": [
      "assets/products/sofas/cat-cream-plush-deepseat-sofa/cream_plush_deepseat_sofa.png"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-textured-3seater-sofa",
    "name": "Cream Textured 3Seater Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Textured 3Seater Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-cream-textured-3seater-sofa/cream_textured_3seater_sofa.png",
    "images": [
      "assets/products/sofas/cat-cream-textured-3seater-sofa/cream_textured_3seater_sofa.png"
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
    "img": "assets/products/sofas/cat-cream-textured-modular-armless-sofa/cream_textured_modular_armless_sofa.png",
    "images": [
      "assets/products/sofas/cat-cream-textured-modular-armless-sofa/cream_textured_modular_armless_sofa.png"
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
    "img": "assets/products/sofas/cat-cream-velvet-flared-loveseat/cream_velvet_flared_loveseat.png",
    "images": [
      "assets/products/sofas/cat-cream-velvet-flared-loveseat/cream_velvet_flared_loveseat.png"
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
    "img": "assets/products/sofas/cat-cream-velvety-plush-sofa/cream_velvety_plush_sofa.png",
    "images": [
      "assets/products/sofas/cat-cream-velvety-plush-sofa/cream_velvety_plush_sofa.png"
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
    "img": "assets/products/sofas/cat-dark-blue-fabric-sofa-with-wooden-base/Dark Blue Fabric Sofa with Wooden Base.jpg",
    "images": [
      "assets/products/sofas/cat-dark-blue-fabric-sofa-with-wooden-base/Dark Blue Fabric Sofa with Wooden Base.jpg"
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
    "img": "assets/products/sofas/cat-dark-charcoal-grey-fabric-sofa/Dark Charcoal Grey Fabric Sofa.jpg",
    "images": [
      "assets/products/sofas/cat-dark-charcoal-grey-fabric-sofa/Dark Charcoal Grey Fabric Sofa.jpg"
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
    "img": "assets/products/sofas/cat-dark-chocolate-brown-fabric-3-seater-sofa/Dark Chocolate Brown Fabric 3-Seater Sofa.jpg",
    "images": [
      "assets/products/sofas/cat-dark-chocolate-brown-fabric-3-seater-sofa/Dark Chocolate Brown Fabric 3-Seater Sofa.jpg"
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
    "img": "assets/products/sofas/cat-dark-grey-fabric-modular-sofa-collection/Dark Grey Fabric Modular Sofa Collection.jpg",
    "images": [
      "assets/products/sofas/cat-dark-grey-fabric-modular-sofa-collection/Dark Grey Fabric Modular Sofa Collection.jpg"
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
    "img": "assets/products/sofas/cat-dark-grey-leather-sofa-with-copper-accents/Dark Grey Leather Sofa with Copper Accents.jpg",
    "images": [
      "assets/products/sofas/cat-dark-grey-leather-sofa-with-copper-accents/Dark Grey Leather Sofa with Copper Accents.jpg"
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
    "img": "assets/products/sofas/cat-dark-teal-velvet-sofa/Dark Teal Velvet Sofa.jpg",
    "images": [
      "assets/products/sofas/cat-dark-teal-velvet-sofa/Dark Teal Velvet Sofa.jpg"
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
    "img": "assets/products/wooden-couches/cat-dark-wood-frame-loveseat-with-grey-cushions/Dark Wood Frame Loveseat with Grey Cushions.jpg",
    "images": [
      "assets/products/wooden-couches/cat-dark-wood-frame-loveseat-with-grey-cushions/Dark Wood Frame Loveseat with Grey Cushions.jpg"
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
    "img": "assets/products/wooden-couches/cat-dark-wood-frame-sofa-with-cream-cushions/Dark Wood Frame Sofa with Cream Cushions.jpg",
    "images": [
      "assets/products/wooden-couches/cat-dark-wood-frame-sofa-with-cream-cushions/Dark Wood Frame Sofa with Cream Cushions.jpg"
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
    "img": "assets/products/sofas/cat-deep-purple-velvet-curved-sofa/Deep Purple Velvet Curved Sofa.jpg",
    "images": [
      "assets/products/sofas/cat-deep-purple-velvet-curved-sofa/Deep Purple Velvet Curved Sofa.jpg"
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
    "img": "assets/products/sofas/cat-drift-textured-full-sofa/Drift Textured Full Sofa - Three Seater.png",
    "images": [
      "assets/products/sofas/cat-drift-textured-full-sofa/Drift Textured Full Sofa - Three Seater.png"
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
    "img": "assets/products/sofas/cat-drift-textured-loveseat/Drift Textured Loveseat - Two Seater.png",
    "images": [
      "assets/products/sofas/cat-drift-textured-loveseat/Drift Textured Loveseat - Two Seater.png"
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
    "img": "assets/products/sofas/cat-duckegg-blue-soft-fabric-sofa/duckegg_blue_soft_fabric_sofa.png",
    "images": [
      "assets/products/sofas/cat-duckegg-blue-soft-fabric-sofa/duckegg_blue_soft_fabric_sofa.png"
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
    "img": "assets/products/sofas/cat-dusk-boucle-full-sofa/Dusk Boucle Full Sofa - Three Seater.png",
    "images": [
      "assets/products/sofas/cat-dusk-boucle-full-sofa/Dusk Boucle Full Sofa - Three Seater.png"
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
    "img": "assets/products/sofas/cat-dusk-boucle-loveseat/Dusk Boucle Loveseat - Two Seater.png",
    "images": [
      "assets/products/sofas/cat-dusk-boucle-loveseat/Dusk Boucle Loveseat - Two Seater.png"
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
    "img": "assets/products/sofas/cat-echo-modern-velvet-living-room-suite/Echo Living Room Suite - Angle Perspective.png",
    "images": [
      "assets/products/sofas/cat-echo-modern-velvet-living-room-suite/Echo Living Room Suite - Angle Perspective.png",
      "assets/products/sofas/cat-echo-modern-velvet-living-room-suite/Echo Living Room Suite - Front View.png",
      "assets/products/sofas/cat-echo-modern-velvet-living-room-suite/Echo Living Room Suite - Side View.png"
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
    "img": "assets/products/sofas/cat-ember-boucle-low-profile-sofa/Ember Boucle Sofa - Angle Perspective.png",
    "images": [
      "assets/products/sofas/cat-ember-boucle-low-profile-sofa/Ember Boucle Sofa - Angle Perspective.png",
      "assets/products/sofas/cat-ember-boucle-low-profile-sofa/Ember Boucle Sofa - Front View.png"
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
    "img": "assets/products/sofas/cat-estillo-executive-suite/Estillo Executive Suite - Angle Perspective.png",
    "images": [
      "assets/products/sofas/cat-estillo-executive-suite/Estillo Executive Suite - Angle Perspective.png",
      "assets/products/sofas/cat-estillo-executive-suite/Estillo Executive Suite - Context View.png",
      "assets/products/sofas/cat-estillo-executive-suite/Estillo Executive Suite - Corner Detail.png",
      "assets/products/sofas/cat-estillo-executive-suite/Estillo Executive Suite - Front View.png",
      "assets/products/sofas/cat-estillo-executive-suite/Estillo Executive Suite - High Angle View.png",
      "assets/products/sofas/cat-estillo-executive-suite/Estillo Executive Suite - Side View.png",
      "assets/products/sofas/cat-estillo-executive-suite/Estillo Executive Suite - Studio Showcase.png"
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
    "img": "assets/products/sofas/cat-golden-yellow-fabric-loveseat/golden_yellow_fabric_loveseat.png",
    "images": [
      "assets/products/sofas/cat-golden-yellow-fabric-loveseat/golden_yellow_fabric_loveseat.png"
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
    "img": "assets/products/sofas/cat-grey-fabric-loveseat-sofa/Grey Fabric Loveseat Sofa - Front View.jpg",
    "images": [
      "assets/products/sofas/cat-grey-fabric-loveseat-sofa/Grey Fabric Loveseat Sofa - Front View.jpg"
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
    "img": "assets/products/sofas/cat-grey-leather-sofa-set/Grey Leather Sofa Set.jpg",
    "images": [
      "assets/products/sofas/cat-grey-leather-sofa-set/Grey Leather Sofa Set.jpg"
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
    "img": "assets/products/sofas/cat-heather-gray-loveseat/heather_gray_loveseat.png",
    "images": [
      "assets/products/sofas/cat-heather-gray-loveseat/heather_gray_loveseat.png"
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
    "img": "assets/products/sofas/cat-heather-gray-straightline-sofa/heather_gray_straightline_sofa.png",
    "images": [
      "assets/products/sofas/cat-heather-gray-straightline-sofa/heather_gray_straightline_sofa.png"
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
    "img": "assets/products/sofas/cat-honey-yellow-tropicalpillow-sofa/honey_yellow_tropicalpillow_sofa.png",
    "images": [
      "assets/products/sofas/cat-honey-yellow-tropicalpillow-sofa/honey_yellow_tropicalpillow_sofa.png"
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
    "img": "assets/products/sofas/cat-ice-blue-soft-fabric-loveseat/ice_blue_soft_fabric_loveseat.png",
    "images": [
      "assets/products/sofas/cat-ice-blue-soft-fabric-loveseat/ice_blue_soft_fabric_loveseat.png"
    ],
    "colors": []
  },
  {
    "id": "cat-japandi-teak-frame-3seater-sofa",
    "name": "Japandi Teak Frame 3Seater Sofa",
    "category": "wooden-couches",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Japandi Teak Frame 3Seater Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wooden-couches/cat-japandi-teak-frame-3seater-sofa/japandi_teak_frame_3seater_sofa.png",
    "images": [
      "assets/products/wooden-couches/cat-japandi-teak-frame-3seater-sofa/japandi_teak_frame_3seater_sofa.png"
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
    "img": "assets/products/sofas/cat-light-beige-paisleypillow-loveseat/light_beige_paisleypillow_loveseat.png",
    "images": [
      "assets/products/sofas/cat-light-beige-paisleypillow-loveseat/light_beige_paisleypillow_loveseat.png"
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
    "img": "assets/products/sofas/cat-light-gray-chenille-loveseat/light_gray_chenille_loveseat.png",
    "images": [
      "assets/products/sofas/cat-light-gray-chenille-loveseat/light_gray_chenille_loveseat.png"
    ],
    "colors": []
  },
  {
    "id": "cat-light-gray-modern-3seater-sofa",
    "name": "Light Gray Modern 3Seater Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Light Gray Modern 3Seater Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-light-gray-modern-3seater-sofa/light_gray_modern_3seater_sofa.png",
    "images": [
      "assets/products/sofas/cat-light-gray-modern-3seater-sofa/light_gray_modern_3seater_sofa.png"
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
    "img": "assets/products/sofas/cat-light-gray-modern-loveseat/light_gray_modern_loveseat.png",
    "images": [
      "assets/products/sofas/cat-light-gray-modern-loveseat/light_gray_modern_loveseat.png"
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
    "img": "assets/products/wooden-couches/cat-light-wood-frame-sofa-with-grey-cushions/Light Wood Frame Sofa with Grey Cushions.jpg",
    "images": [
      "assets/products/wooden-couches/cat-light-wood-frame-sofa-with-grey-cushions/Light Wood Frame Sofa with Grey Cushions.jpg"
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
    "img": "assets/products/sofas/cat-mid-century-navy-velvet-sofa/Mid Century Navy Velvet Sofa.jpg",
    "images": [
      "assets/products/sofas/cat-mid-century-navy-velvet-sofa/Mid Century Navy Velvet Sofa.jpg"
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
    "img": "assets/products/wooden-couches/cat-mid-century-teak-living-room-suite-furniture-set/Mid-Century Teak Living Room Suite Furniture Set.jpg",
    "images": [
      "assets/products/wooden-couches/cat-mid-century-teak-living-room-suite-furniture-set/Mid-Century Teak Living Room Suite Furniture Set.jpg"
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
    "img": "assets/products/wooden-couches/cat-mid-century-teak-living-room-suite-with-tan-cushions/Mid-Century Teak Living Room Suite with Tan Cushions.jpg",
    "images": [
      "assets/products/wooden-couches/cat-mid-century-teak-living-room-suite-with-tan-cushions/Mid-Century Teak Living Room Suite with Tan Cushions.jpg"
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
    "img": "assets/products/wooden-couches/cat-mid-century-teak-sofa-collection-with-blue-upholstery/Mid-Century Teak Sofa Collection with Blue Upholstery.jpg",
    "images": [
      "assets/products/wooden-couches/cat-mid-century-teak-sofa-collection-with-blue-upholstery/Mid-Century Teak Sofa Collection with Blue Upholstery.jpg"
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
    "img": "assets/products/wooden-couches/cat-mid-century-teak-sofa-with-olive-green-cushions/Mid-Century Teak Sofa with Olive Green Cushions.jpg",
    "images": [
      "assets/products/wooden-couches/cat-mid-century-teak-sofa-with-olive-green-cushions/Mid-Century Teak Sofa with Olive Green Cushions.jpg"
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
    "img": "assets/products/sofas/cat-midgray-fabric-full-living-suite/midgray_fabric_full_living_suite.png",
    "images": [
      "assets/products/sofas/cat-midgray-fabric-full-living-suite/midgray_fabric_full_living_suite.png"
    ],
    "colors": []
  },
  {
    "id": "cat-midgray-woven-fabric-3seater-sofa",
    "name": "Midgray Woven Fabric 3Seater Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Midgray Woven Fabric 3Seater Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-midgray-woven-fabric-3seater-sofa/midgray_woven_fabric_3seater_sofa.png",
    "images": [
      "assets/products/sofas/cat-midgray-woven-fabric-3seater-sofa/midgray_woven_fabric_3seater_sofa.png"
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
    "img": "assets/products/sofas/cat-midgray-woven-fabric-sofa/midgray_woven_fabric_sofa.png",
    "images": [
      "assets/products/sofas/cat-midgray-woven-fabric-sofa/midgray_woven_fabric_sofa.png"
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
    "img": "assets/products/sofas/cat-modern-grey-leather-sofa-with-blue-pillows/Modern Grey Leather Sofa with Blue Pillows.jpg",
    "images": [
      "assets/products/sofas/cat-modern-grey-leather-sofa-with-blue-pillows/Modern Grey Leather Sofa with Blue Pillows.jpg"
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
    "img": "assets/products/sofas/cat-modern-white-fabric-sofa/Modern White Fabric Sofa - Front View.jpg",
    "images": [
      "assets/products/sofas/cat-modern-white-fabric-sofa/Modern White Fabric Sofa - Front View.jpg"
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
    "img": "assets/products/sofas/cat-modular-mauve-sofa-suite-with-screen-panels/Modular Mauve Sofa Suite with Screen Panels.jpg",
    "images": [
      "assets/products/sofas/cat-modular-mauve-sofa-suite-with-screen-panels/Modular Mauve Sofa Suite with Screen Panels.jpg"
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
    "img": "assets/products/sofas/cat-navy-blue-leather-lounge-suite/navy_blue_leather_lounge_suite.png",
    "images": [
      "assets/products/sofas/cat-navy-blue-leather-lounge-suite/navy_blue_leather_lounge_suite.png"
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
    "img": "assets/products/sofas/cat-oatmeal-gray-twotone-sofa/oatmeal_gray_twotone_sofa.png",
    "images": [
      "assets/products/sofas/cat-oatmeal-gray-twotone-sofa/oatmeal_gray_twotone_sofa.png"
    ],
    "colors": []
  },
  {
    "id": "cat-oatmeal-linen-3seater-sofa",
    "name": "Oatmeal Linen 3Seater Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Oatmeal Linen 3Seater Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-oatmeal-linen-3seater-sofa/oatmeal_linen_3seater_sofa.png",
    "images": [
      "assets/products/sofas/cat-oatmeal-linen-3seater-sofa/oatmeal_linen_3seater_sofa.png"
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
    "img": "assets/products/sofas/cat-oatmeal-textured-loveseat/oatmeal_textured_loveseat.png",
    "images": [
      "assets/products/sofas/cat-oatmeal-textured-loveseat/oatmeal_textured_loveseat.png"
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
    "img": "assets/products/sofas/cat-ocean-blue-velvet-modern-sofa/ocean_blue_velvet_modern_sofa.png",
    "images": [
      "assets/products/sofas/cat-ocean-blue-velvet-modern-sofa/ocean_blue_velvet_modern_sofa.png"
    ],
    "colors": []
  },
  {
    "id": "cat-offwhite-plush-3seater-sofa",
    "name": "Offwhite Plush 3Seater Sofa",
    "category": "sofas",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Offwhite Plush 3Seater Sofa combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sofas/cat-offwhite-plush-3seater-sofa/offwhite_plush_3seater_sofa.png",
    "images": [
      "assets/products/sofas/cat-offwhite-plush-3seater-sofa/offwhite_plush_3seater_sofa.png"
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
    "img": "assets/products/sofas/cat-offwhite-plush-deep-modular-sofa/offwhite_plush_deep_modular_sofa.png",
    "images": [
      "assets/products/sofas/cat-offwhite-plush-deep-modular-sofa/offwhite_plush_deep_modular_sofa.png"
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
    "img": "assets/products/sofas/cat-olive-green-fabric-3-seater-sofa/Olive Green Fabric 3-Seater Sofa.jpg",
    "images": [
      "assets/products/sofas/cat-olive-green-fabric-3-seater-sofa/Olive Green Fabric 3-Seater Sofa.jpg"
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
    "img": "assets/products/sofas/cat-olive-green-modern-sofa/olive_green_modern_sofa.png",
    "images": [
      "assets/products/sofas/cat-olive-green-modern-sofa/olive_green_modern_sofa.png"
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
    "img": "assets/products/sofas/cat-orange-velvet-square-arm-tub-sofa/Orange Velvet Square Arm Tub Sofa.jpg",
    "images": [
      "assets/products/sofas/cat-orange-velvet-square-arm-tub-sofa/Orange Velvet Square Arm Tub Sofa.jpg"
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
    "img": "assets/products/sofas/cat-organic-pebble-modular-lounge-sofa/organic_pebble_modular_lounge_sofa.png",
    "images": [
      "assets/products/sofas/cat-organic-pebble-modular-lounge-sofa/organic_pebble_modular_lounge_sofa.png"
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
    "img": "assets/products/sofas/cat-sage-green-fabric-loveseat/sage_green_fabric_loveseat.png",
    "images": [
      "assets/products/sofas/cat-sage-green-fabric-loveseat/sage_green_fabric_loveseat.png"
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
    "img": "assets/products/sofas/cat-sage-olive-fabric-loveseat/sage_olive_fabric_loveseat.png",
    "images": [
      "assets/products/sofas/cat-sage-olive-fabric-loveseat/sage_olive_fabric_loveseat.png"
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
    "img": "assets/products/sofas/cat-scandi-twotone-beige-brown-sofa/scandi_twotone_beige_brown_sofa.png",
    "images": [
      "assets/products/sofas/cat-scandi-twotone-beige-brown-sofa/scandi_twotone_beige_brown_sofa.png"
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
    "img": "assets/products/wooden-couches/cat-sculptural-wood-frame-sofa-with-tan-upholstery/Sculptural Wood Frame Sofa with Tan Upholstery.jpg",
    "images": [
      "assets/products/wooden-couches/cat-sculptural-wood-frame-sofa-with-tan-upholstery/Sculptural Wood Frame Sofa with Tan Upholstery.jpg"
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
    "img": "assets/products/sofas/cat-soft-gray-velvet-sofa/soft_gray_velvet_sofa.png",
    "images": [
      "assets/products/sofas/cat-soft-gray-velvet-sofa/soft_gray_velvet_sofa.png"
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
    "img": "assets/products/sofas/cat-soft-oatmeal-stripedpillow-sofa/soft_oatmeal_stripedpillow_sofa.png",
    "images": [
      "assets/products/sofas/cat-soft-oatmeal-stripedpillow-sofa/soft_oatmeal_stripedpillow_sofa.png"
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
    "img": "assets/products/sofas/cat-tan-brown-fabric-3-seater-sofa/Tan Brown Fabric 3-Seater Sofa.jpg",
    "images": [
      "assets/products/sofas/cat-tan-brown-fabric-3-seater-sofa/Tan Brown Fabric 3-Seater Sofa.jpg"
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
    "img": "assets/products/sofas/cat-tan-brown-leather-2-seater-sofa-b/Tan Brown Leather 2-Seater Sofa B.jpg",
    "images": [
      "assets/products/sofas/cat-tan-brown-leather-2-seater-sofa-b/Tan Brown Leather 2-Seater Sofa B.jpg"
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
    "img": "assets/products/sofas/cat-tan-brown-leather-3-seater-sofa-b/Tan Brown Leather 3-Seater Sofa B.jpg",
    "images": [
      "assets/products/sofas/cat-tan-brown-leather-3-seater-sofa-b/Tan Brown Leather 3-Seater Sofa B.jpg"
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
    "img": "assets/products/sofas/cat-tan-leather-3-seater-sofa/Tan Leather 3-Seater Sofa.jpg",
    "images": [
      "assets/products/sofas/cat-tan-leather-3-seater-sofa/Tan Leather 3-Seater Sofa.jpg"
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
    "img": "assets/products/sofas/cat-taupe-corduroy-modern-loveseat/taupe_corduroy_modern_loveseat.png",
    "images": [
      "assets/products/sofas/cat-taupe-corduroy-modern-loveseat/taupe_corduroy_modern_loveseat.png"
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
    "img": "assets/products/sofas/cat-taupe-tweed-curved-barrel-sofa/taupe_tweed_curved_barrel_sofa.png",
    "images": [
      "assets/products/sofas/cat-taupe-tweed-curved-barrel-sofa/taupe_tweed_curved_barrel_sofa.png"
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
    "img": "assets/products/wooden-couches/cat-teak-frame-loveseat-with-green-leather-cushions/Teak Frame Loveseat with Green Leather Cushions.jpg",
    "images": [
      "assets/products/wooden-couches/cat-teak-frame-loveseat-with-green-leather-cushions/Teak Frame Loveseat with Green Leather Cushions.jpg"
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
    "img": "assets/products/sofas/cat-traditional-cream-nailhead-sofa/traditional_cream_nailhead_sofa.png",
    "images": [
      "assets/products/sofas/cat-traditional-cream-nailhead-sofa/traditional_cream_nailhead_sofa.png"
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
    "img": "assets/products/sofas/cat-tufted-beige-fabric-sofa/Tufted Beige Fabric Sofa.jpg",
    "images": [
      "assets/products/sofas/cat-tufted-beige-fabric-sofa/Tufted Beige Fabric Sofa.jpg"
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
    "img": "assets/products/sofas/cat-tufted-grey-velvet-sofa/Tufted Grey Velvet Sofa.jpg",
    "images": [
      "assets/products/sofas/cat-tufted-grey-velvet-sofa/Tufted Grey Velvet Sofa.jpg"
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
    "img": "assets/products/sofas/cat-twotone-cream-and-brown-sofa/twotone_cream_and_brown_sofa.png",
    "images": [
      "assets/products/sofas/cat-twotone-cream-and-brown-sofa/twotone_cream_and_brown_sofa.png"
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
    "img": "assets/products/sofas/cat-warm-cream-textured-cushion-sofa/warm_cream_textured_cushion_sofa.png",
    "images": [
      "assets/products/sofas/cat-warm-cream-textured-cushion-sofa/warm_cream_textured_cushion_sofa.png"
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
    "img": "assets/products/sofas/cat-warm-gray-plush-couch/warm_gray_plush_couch.png",
    "images": [
      "assets/products/sofas/cat-warm-gray-plush-couch/warm_gray_plush_couch.png"
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
    "img": "assets/products/sofas/cat-white-fabric-3-seater-sofa-b/White Fabric 3-Seater Sofa B.jpg",
    "images": [
      "assets/products/sofas/cat-white-fabric-3-seater-sofa-b/White Fabric 3-Seater Sofa B.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-mahogany-3drawer-locking-pedestal",
    "name": "Mahogany 3Drawer Locking Pedestal",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Mahogany 3Drawer Locking Pedestal combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-mahogany-3drawer-locking-pedestal/mahogany_3drawer_locking_pedestal.png",
    "images": [
      "assets/products/wardrobes-storage/cat-mahogany-3drawer-locking-pedestal/mahogany_3drawer_locking_pedestal.png"
    ],
    "colors": []
  },
  {
    "id": "cat-taupe-3drawer-locking-pedestal",
    "name": "Taupe 3Drawer Locking Pedestal",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Taupe 3Drawer Locking Pedestal combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-taupe-3drawer-locking-pedestal/taupe_3drawer_locking_pedestal.png",
    "images": [
      "assets/products/wardrobes-storage/cat-taupe-3drawer-locking-pedestal/taupe_3drawer_locking_pedestal.png"
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
    "img": "assets/products/wardrobes-storage/cat-terracotta-compact-mobile-cabinet/terracotta_compact_mobile_cabinet.png",
    "images": [
      "assets/products/wardrobes-storage/cat-terracotta-compact-mobile-cabinet/terracotta_compact_mobile_cabinet.png"
    ],
    "colors": []
  },
  {
    "id": "cat-beech-wood-3drawer-pedestal-cabinet",
    "name": "Beech Wood 3Drawer Pedestal Cabinet",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Beech Wood 3Drawer Pedestal Cabinet combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-beech-wood-3drawer-pedestal-cabinet/beech_wood_3drawer_pedestal_cabinet.png",
    "images": [
      "assets/products/wardrobes-storage/cat-beech-wood-3drawer-pedestal-cabinet/beech_wood_3drawer_pedestal_cabinet.png"
    ],
    "colors": []
  },
  {
    "id": "cat-beige-fabric-pedestal-swivel-tub-chair",
    "name": "Beige Fabric Pedestal Swivel Tub Chair",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Beige Fabric Pedestal Swivel Tub Chair combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-beige-fabric-pedestal-swivel-tub-chair/Beige Fabric Pedestal Swivel Tub Chair.jpg",
    "images": [
      "assets/products/wardrobes-storage/cat-beige-fabric-pedestal-swivel-tub-chair/Beige Fabric Pedestal Swivel Tub Chair.jpg"
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
    "img": "assets/products/wardrobes-storage/cat-beige-metallic-locking-file-cabinet/beige_metallic_locking_file_cabinet.png",
    "images": [
      "assets/products/wardrobes-storage/cat-beige-metallic-locking-file-cabinet/beige_metallic_locking_file_cabinet.png"
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
    "img": "assets/products/wardrobes-storage/cat-beige-mobile-pedestal-file-cabinet/beige_mobile_pedestal_file_cabinet.png",
    "images": [
      "assets/products/wardrobes-storage/cat-beige-mobile-pedestal-file-cabinet/beige_mobile_pedestal_file_cabinet.png"
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
    "img": "assets/products/sofas/cat-blue-tufted-chesterfield-leather-sofa/Blue Tufted Chesterfield Leather Sofa.jpg",
    "images": [
      "assets/products/sofas/cat-blue-tufted-chesterfield-leather-sofa/Blue Tufted Chesterfield Leather Sofa.jpg"
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
    "img": "assets/products/sofas/cat-brown-tufted-chesterfield-leather-sofa/Brown Tufted Chesterfield Leather Sofa.jpg",
    "images": [
      "assets/products/sofas/cat-brown-tufted-chesterfield-leather-sofa/Brown Tufted Chesterfield Leather Sofa.jpg"
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
    "img": "assets/products/sofas/cat-charcoal-grey-tufted-leather-chesterfield-sofa/Charcoal Grey Tufted Leather Chesterfield Sofa.jpg",
    "images": [
      "assets/products/sofas/cat-charcoal-grey-tufted-leather-chesterfield-sofa/Charcoal Grey Tufted Leather Chesterfield Sofa.jpg"
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
    "img": "assets/products/wardrobes-storage/cat-charcoal-mobile-pedestal-cabinet-comboset/charcoal_mobile_pedestal_cabinet_comboset.png",
    "images": [
      "assets/products/wardrobes-storage/cat-charcoal-mobile-pedestal-cabinet-comboset/charcoal_mobile_pedestal_cabinet_comboset.png"
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
    "img": "assets/products/wardrobes-storage/cat-charcoal-tall-bookshelf-tower/charcoal_tall_bookshelf_tower.png",
    "images": [
      "assets/products/wardrobes-storage/cat-charcoal-tall-bookshelf-tower/charcoal_tall_bookshelf_tower.png"
    ],
    "colors": []
  },
  {
    "id": "cat-cream-boucle-chesterfield-comboset",
    "name": "Cream Boucle Chesterfield Comboset",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Cream Boucle Chesterfield Comboset combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-cream-boucle-chesterfield-comboset/cream_boucle_chesterfield_comboset.png",
    "images": [
      "assets/products/wardrobes-storage/cat-cream-boucle-chesterfield-comboset/cream_boucle_chesterfield_comboset.png"
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
    "img": "assets/products/sofas/cat-cream-tufted-chesterfield-loveseat/cream_tufted_chesterfield_loveseat.png",
    "images": [
      "assets/products/sofas/cat-cream-tufted-chesterfield-loveseat/cream_tufted_chesterfield_loveseat.png"
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
    "img": "assets/products/sofas/cat-dark-brown-tufted-leather-chesterfield-sofa/Dark Brown Tufted Leather Chesterfield Sofa.jpg",
    "images": [
      "assets/products/sofas/cat-dark-brown-tufted-leather-chesterfield-sofa/Dark Brown Tufted Leather Chesterfield Sofa.jpg"
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
    "img": "assets/products/wardrobes-storage/cat-dark-oak-rustic-tall-wardrobe/dark_oak_rustic_tall_wardrobe.png",
    "images": [
      "assets/products/wardrobes-storage/cat-dark-oak-rustic-tall-wardrobe/dark_oak_rustic_tall_wardrobe.png"
    ],
    "colors": []
  },
  {
    "id": "cat-dark-walnut-mobile-3drawer-file-cabinet",
    "name": "Dark Walnut Mobile 3Drawer File Cabinet",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Dark Walnut Mobile 3Drawer File Cabinet combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-dark-walnut-mobile-3drawer-file-cabinet/dark_walnut_mobile_3drawer_file_cabinet.png",
    "images": [
      "assets/products/wardrobes-storage/cat-dark-walnut-mobile-3drawer-file-cabinet/dark_walnut_mobile_3drawer_file_cabinet.png"
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
    "img": "assets/products/wardrobes-storage/cat-edge-mobile-pedestal-filing-cabinet/Edge Mobile Filing Cabinet - Angle Perspective.png",
    "images": [
      "assets/products/wardrobes-storage/cat-edge-mobile-pedestal-filing-cabinet/Edge Mobile Filing Cabinet - Angle Perspective.png",
      "assets/products/wardrobes-storage/cat-edge-mobile-pedestal-filing-cabinet/Edge Mobile Filing Cabinet - Corner Detail.png",
      "assets/products/wardrobes-storage/cat-edge-mobile-pedestal-filing-cabinet/Edge Mobile Filing Cabinet - Front View.png",
      "assets/products/wardrobes-storage/cat-edge-mobile-pedestal-filing-cabinet/Edge Mobile Filing Cabinet - Side View.png"
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
    "img": "assets/products/wardrobes-storage/cat-fluted-glass-illuminated-wardrobe/fluted_glass_illuminated_wardrobe.png",
    "images": [
      "assets/products/wardrobes-storage/cat-fluted-glass-illuminated-wardrobe/fluted_glass_illuminated_wardrobe.png"
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
    "img": "assets/products/wardrobes-storage/cat-industrial-gray-low-storage-cabinet/industrial_gray_low_storage_cabinet.png",
    "images": [
      "assets/products/wardrobes-storage/cat-industrial-gray-low-storage-cabinet/industrial_gray_low_storage_cabinet.png"
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
    "img": "assets/products/wardrobes-storage/cat-light-oak-vanity-tower-with-mirror/light_oak_vanity_tower_with_mirror.png",
    "images": [
      "assets/products/wardrobes-storage/cat-light-oak-vanity-tower-with-mirror/light_oak_vanity_tower_with_mirror.png"
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
    "img": "assets/products/wardrobes-storage/cat-max-fluted-panel-wardrobe-vanity-unit/Max Fluted Wardrobe - Angle Perspective.png",
    "images": [
      "assets/products/wardrobes-storage/cat-max-fluted-panel-wardrobe-vanity-unit/Max Fluted Wardrobe - Angle Perspective.png",
      "assets/products/wardrobes-storage/cat-max-fluted-panel-wardrobe-vanity-unit/Max Fluted Wardrobe - Context View.png",
      "assets/products/wardrobes-storage/cat-max-fluted-panel-wardrobe-vanity-unit/Max Fluted Wardrobe - Corner Detail.png",
      "assets/products/wardrobes-storage/cat-max-fluted-panel-wardrobe-vanity-unit/Max Fluted Wardrobe - Front View.png",
      "assets/products/wardrobes-storage/cat-max-fluted-panel-wardrobe-vanity-unit/Max Fluted Wardrobe - Side View.png",
      "assets/products/wardrobes-storage/cat-max-fluted-panel-wardrobe-vanity-unit/Max Fluted Wardrobe - Studio Showcase.png"
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
    "img": "assets/products/wardrobes-storage/cat-modern-sliding-mirror-wardrobe/modern_sliding_mirror_wardrobe.png",
    "images": [
      "assets/products/wardrobes-storage/cat-modern-sliding-mirror-wardrobe/modern_sliding_mirror_wardrobe.png"
    ],
    "colors": []
  },
  {
    "id": "cat-nordic-oak-3drawer-nightstand",
    "name": "Nordic Oak 3Drawer Nightstand",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Nordic Oak 3Drawer Nightstand combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-nordic-oak-3drawer-nightstand/nordic_oak_3drawer_nightstand.png",
    "images": [
      "assets/products/wardrobes-storage/cat-nordic-oak-3drawer-nightstand/nordic_oak_3drawer_nightstand.png"
    ],
    "colors": []
  },
  {
    "id": "cat-oak-3drawer-locking-nightstand",
    "name": "Oak 3Drawer Locking Nightstand",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Oak 3Drawer Locking Nightstand combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-oak-3drawer-locking-nightstand/oak_3drawer_locking_nightstand.png",
    "images": [
      "assets/products/wardrobes-storage/cat-oak-3drawer-locking-nightstand/oak_3drawer_locking_nightstand.png"
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
    "img": "assets/products/wardrobes-storage/cat-oak-entryway-wardrobe-and-shoe-bench/oak_entryway_wardrobe_and_shoe_bench.png",
    "images": [
      "assets/products/wardrobes-storage/cat-oak-entryway-wardrobe-and-shoe-bench/oak_entryway_wardrobe_and_shoe_bench.png"
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
    "img": "assets/products/wardrobes-storage/cat-oak-fulllength-mirror-dressing-tower/oak_fulllength_mirror_dressing_tower.png",
    "images": [
      "assets/products/wardrobes-storage/cat-oak-fulllength-mirror-dressing-tower/oak_fulllength_mirror_dressing_tower.png"
    ],
    "colors": []
  },
  {
    "id": "cat-offwhite-4door-modern-wardrobe",
    "name": "Offwhite 4Door Modern Wardrobe",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Offwhite 4Door Modern Wardrobe combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-offwhite-4door-modern-wardrobe/offwhite_4door_modern_wardrobe.png",
    "images": [
      "assets/products/wardrobes-storage/cat-offwhite-4door-modern-wardrobe/offwhite_4door_modern_wardrobe.png"
    ],
    "colors": []
  },
  {
    "id": "cat-offwhite-scandi-3door-wardrobe",
    "name": "Offwhite Scandi 3Door Wardrobe",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Offwhite Scandi 3Door Wardrobe combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-offwhite-scandi-3door-wardrobe/offwhite_scandi_3door_wardrobe.png",
    "images": [
      "assets/products/wardrobes-storage/cat-offwhite-scandi-3door-wardrobe/offwhite_scandi_3door_wardrobe.png"
    ],
    "colors": []
  },
  {
    "id": "cat-oria-office-planter-storage-credenza",
    "name": "Oria Office Planter Storage Credenza",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Oria Office Planter Storage Credenza combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-oria-office-planter-storage-credenza/Oria Planter Credenza - Angle Perspective.png",
    "images": [
      "assets/products/wardrobes-storage/cat-oria-office-planter-storage-credenza/Oria Planter Credenza - Angle Perspective.png",
      "assets/products/wardrobes-storage/cat-oria-office-planter-storage-credenza/Oria Planter Credenza - Front View.png",
      "assets/products/wardrobes-storage/cat-oria-office-planter-storage-credenza/Oria Planter Credenza - Side View.png"
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
    "img": "assets/products/office-workstations/scandinavian-wood-desk-and-credenza-set/scandinavian-wood-desk-and-credenza-set.jpg",
    "images": [
      "assets/products/office-workstations/scandinavian-wood-desk-and-credenza-set/scandinavian-wood-desk-and-credenza-set.jpg"
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
    "img": "assets/products/wardrobes-storage/cat-slate-gray-low-file-cabinet/slate_gray_low_file_cabinet.png",
    "images": [
      "assets/products/wardrobes-storage/cat-slate-gray-low-file-cabinet/slate_gray_low_file_cabinet.png"
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
    "img": "assets/products/wardrobes-storage/cat-slate-gray-mobile-file-cabinet/slate_gray_mobile_file_cabinet.png",
    "images": [
      "assets/products/wardrobes-storage/cat-slate-gray-mobile-file-cabinet/slate_gray_mobile_file_cabinet.png"
    ],
    "colors": []
  },
  {
    "id": "cat-taupe-locking-2drawer-file-cabinet",
    "name": "Taupe Locking 2Drawer File Cabinet",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Taupe Locking 2Drawer File Cabinet combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-taupe-locking-2drawer-file-cabinet/taupe_locking_2drawer_file_cabinet.png",
    "images": [
      "assets/products/wardrobes-storage/cat-taupe-locking-2drawer-file-cabinet/taupe_locking_2drawer_file_cabinet.png"
    ],
    "colors": []
  },
  {
    "id": "cat-walnut-2door-tall-wardrobe",
    "name": "Walnut 2Door Tall Wardrobe",
    "category": "wardrobes-storage",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Walnut 2Door Tall Wardrobe combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/wardrobes-storage/cat-walnut-2door-tall-wardrobe/walnut_2door_tall_wardrobe.png",
    "images": [
      "assets/products/wardrobes-storage/cat-walnut-2door-tall-wardrobe/walnut_2door_tall_wardrobe.png"
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
    "img": "assets/products/wardrobes-storage/cat-walnut-fluted-tambour-sideboard/walnut_fluted_tambour_sideboard.png",
    "images": [
      "assets/products/wardrobes-storage/cat-walnut-fluted-tambour-sideboard/walnut_fluted_tambour_sideboard.png"
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
    "img": "assets/products/wardrobes-storage/edge/Edge_01.png",
    "images": [
      "assets/products/wardrobes-storage/edge/Edge_01.png",
      "assets/products/wardrobes-storage/edge/Edge_02.png",
      "assets/products/wardrobes-storage/edge/Edge_03.png",
      "assets/products/wardrobes-storage/edge/Edge_04.png"
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
    "img": "assets/products/wardrobes-storage/elio/Elio_01.png",
    "images": [
      "assets/products/wardrobes-storage/elio/Elio_01.png",
      "assets/products/wardrobes-storage/elio/Elio_02.png"
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
    "img": "assets/products/wardrobes-storage/forge/Forge_01.png",
    "images": [
      "assets/products/wardrobes-storage/forge/Forge_01.png",
      "assets/products/wardrobes-storage/forge/Forge_02.png",
      "assets/products/wardrobes-storage/forge/Forge_03.png",
      "assets/products/wardrobes-storage/forge/Forge_04.png"
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
    "img": "assets/products/wardrobes-storage/linea_dresser_study_table/Linea_Dresser_Study_Table_01.png",
    "images": [
      "assets/products/wardrobes-storage/linea_dresser_study_table/Linea_Dresser_Study_Table_01.png",
      "assets/products/wardrobes-storage/linea_dresser_study_table/Linea_Dresser_Study_Table_02.png",
      "assets/products/wardrobes-storage/linea_dresser_study_table/Linea_Dresser_Study_Table_03.png",
      "assets/products/wardrobes-storage/linea_dresser_study_table/Linea_Dresser_Study_Table_04.png",
      "assets/products/wardrobes-storage/linea_dresser_study_table/Linea_Dresser_Study_Table_05.png",
      "assets/products/wardrobes-storage/linea_dresser_study_table/Linea_Dresser_Study_Table_06.png",
      "assets/products/wardrobes-storage/linea_dresser_study_table/Linea_Dresser_Study_Table_07.png",
      "assets/products/wardrobes-storage/linea_dresser_study_table/Linea_Dresser_Study_Table_08.png",
      "assets/products/wardrobes-storage/linea_dresser_study_table/Linea_Dresser_Study_Table_09.png",
      "assets/products/wardrobes-storage/linea_dresser_study_table/Linea_Dresser_Study_Table_10.png",
      "assets/products/wardrobes-storage/linea_dresser_study_table/Linea_Dresser_Study_Table_11.png",
      "assets/products/wardrobes-storage/linea_dresser_study_table/Linea_Dresser_Study_Table_12.png",
      "assets/products/wardrobes-storage/linea_dresser_study_table/Linea_Dresser_Study_Table_13.png",
      "assets/products/wardrobes-storage/linea_dresser_study_table/Linea_Dresser_Study_Table_14.png",
      "assets/products/wardrobes-storage/linea_dresser_study_table/Linea_Dresser_Study_Table_15.png",
      "assets/products/wardrobes-storage/linea_dresser_study_table/Linea_Dresser_Study_Table_16.png",
      "assets/products/wardrobes-storage/linea_dresser_study_table/Linea_Dresser_Study_Table_17.png",
      "assets/products/wardrobes-storage/linea_dresser_study_table/Linea_Dresser_Study_Table_18.png"
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
    "img": "assets/products/wardrobes-storage/max_sliding_wardrobes/Max_Sliding_Wardrobes_01.png",
    "images": [
      "assets/products/wardrobes-storage/max_sliding_wardrobes/Max_Sliding_Wardrobes_01.png",
      "assets/products/wardrobes-storage/max_sliding_wardrobes/Max_Sliding_Wardrobes_02.png",
      "assets/products/wardrobes-storage/max_sliding_wardrobes/Max_Sliding_Wardrobes_03.png",
      "assets/products/wardrobes-storage/max_sliding_wardrobes/Max_Sliding_Wardrobes_04.png",
      "assets/products/wardrobes-storage/max_sliding_wardrobes/Max_Sliding_Wardrobes_05.png",
      "assets/products/wardrobes-storage/max_sliding_wardrobes/Max_Sliding_Wardrobes_06.png",
      "assets/products/wardrobes-storage/max_sliding_wardrobes/Max_Sliding_Wardrobes_07.png",
      "assets/products/wardrobes-storage/max_sliding_wardrobes/Max_Sliding_Wardrobes_08.png",
      "assets/products/wardrobes-storage/max_sliding_wardrobes/Max_Sliding_Wardrobes_09.png",
      "assets/products/wardrobes-storage/max_sliding_wardrobes/Max_Sliding_Wardrobes_10.png",
      "assets/products/wardrobes-storage/max_sliding_wardrobes/Max_Sliding_Wardrobes_11.png",
      "assets/products/wardrobes-storage/max_sliding_wardrobes/Max_Sliding_Wardrobes_12.png",
      "assets/products/wardrobes-storage/max_sliding_wardrobes/Max_Sliding_Wardrobes_13.png",
      "assets/products/wardrobes-storage/max_sliding_wardrobes/Max_Sliding_Wardrobes_14.png",
      "assets/products/wardrobes-storage/max_sliding_wardrobes/Max_Sliding_Wardrobes_15.png",
      "assets/products/wardrobes-storage/max_sliding_wardrobes/Max_Sliding_Wardrobes_16.png",
      "assets/products/wardrobes-storage/max_sliding_wardrobes/Max_Sliding_Wardrobes_17.png",
      "assets/products/wardrobes-storage/max_sliding_wardrobes/Max_Sliding_Wardrobes_18.png",
      "assets/products/wardrobes-storage/max_sliding_wardrobes/Max_Sliding_Wardrobes_19.png",
      "assets/products/wardrobes-storage/max_sliding_wardrobes/Max_Sliding_Wardrobes_20.png"
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
    "img": "assets/products/wardrobes-storage/nexo/Nexo_01.png",
    "images": [
      "assets/products/wardrobes-storage/nexo/Nexo_01.png",
      "assets/products/wardrobes-storage/nexo/Nexo_02.png",
      "assets/products/wardrobes-storage/nexo/Nexo_03.png",
      "assets/products/wardrobes-storage/nexo/Nexo_04.png"
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
    "img": "assets/products/wardrobes-storage/oria/Oria_01.png",
    "images": [
      "assets/products/wardrobes-storage/oria/Oria_01.png",
      "assets/products/wardrobes-storage/oria/Oria_02.png",
      "assets/products/wardrobes-storage/oria/Oria_03.png"
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
    "img": "assets/products/wardrobes-storage/orin/Orin_01.png",
    "images": [
      "assets/products/wardrobes-storage/orin/Orin_01.png",
      "assets/products/wardrobes-storage/orin/Orin_02.png"
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
    "img": "assets/products/wardrobes-storage/rova/Rova_01.png",
    "images": [
      "assets/products/wardrobes-storage/rova/Rova_01.png",
      "assets/products/wardrobes-storage/rova/Rova_02.png",
      "assets/products/wardrobes-storage/rova/Rova_03.png",
      "assets/products/wardrobes-storage/rova/Rova_04.png"
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
    "img": "assets/products/wardrobes-storage/rubco-book-shelf-simple/book_shelf_simple.jpg",
    "images": [
      "assets/products/wardrobes-storage/rubco-book-shelf-simple/book_shelf_simple.jpg",
      "assets/products/wardrobes-storage/rubco-book-shelf-simple/book_shelf_simple_1.jpg"
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
    "img": "assets/products/wardrobes-storage/rubco-chest-of-drawers-3-chests/chest_of_drawers_3_chests.jpg",
    "images": [
      "assets/products/wardrobes-storage/rubco-chest-of-drawers-3-chests/chest_of_drawers_3_chests.jpg",
      "assets/products/wardrobes-storage/rubco-chest-of-drawers-3-chests/chest_of_drawers_3_chests_1.jpg",
      "assets/products/wardrobes-storage/rubco-chest-of-drawers-3-chests/chest_of_drawers_3_chests_2.jpg"
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
    "img": "assets/products/wardrobes-storage/rubco-chest-of-drawers-5-chests/chest_of_drawers_5_chests.jpg",
    "images": [
      "assets/products/wardrobes-storage/rubco-chest-of-drawers-5-chests/chest_of_drawers_5_chests.jpg",
      "assets/products/wardrobes-storage/rubco-chest-of-drawers-5-chests/chest_of_drawers_5_chests_1.jpg",
      "assets/products/wardrobes-storage/rubco-chest-of-drawers-5-chests/chest_of_drawers_5_chests_2.jpg",
      "assets/products/wardrobes-storage/rubco-chest-of-drawers-5-chests/chest_of_drawers_5_chests_3.jpg"
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
    "img": "assets/products/wardrobes-storage/rubco-pooja-stand/pooja_stand.jpg",
    "images": [
      "assets/products/wardrobes-storage/rubco-pooja-stand/pooja_stand.jpg",
      "assets/products/wardrobes-storage/rubco-pooja-stand/pooja_stand_1.jpg",
      "assets/products/wardrobes-storage/rubco-pooja-stand/pooja_stand_2.jpg",
      "assets/products/wardrobes-storage/rubco-pooja-stand/pooja_stand_3.jpg",
      "assets/products/wardrobes-storage/rubco-pooja-stand/pooja_stand_4.jpg"
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
    "img": "assets/products/wardrobes-storage/rubco-shelf-small/shelf_small.jpg",
    "images": [
      "assets/products/wardrobes-storage/rubco-shelf-small/shelf_small.jpg",
      "assets/products/wardrobes-storage/rubco-shelf-small/shelf_small_1.jpg",
      "assets/products/wardrobes-storage/rubco-shelf-small/shelf_small_2.jpg",
      "assets/products/wardrobes-storage/rubco-shelf-small/shelf_small_3.jpg"
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
    "img": "assets/products/wardrobes-storage/unox/Unox_01.png",
    "images": [
      "assets/products/wardrobes-storage/unox/Unox_01.png",
      "assets/products/wardrobes-storage/unox/Unox_02.png",
      "assets/products/wardrobes-storage/unox/Unox_03.png",
      "assets/products/wardrobes-storage/unox/Unox_04.png"
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
    "img": "assets/products/wardrobes-storage/versa/Versa_01.png",
    "images": [
      "assets/products/wardrobes-storage/versa/Versa_01.png",
      "assets/products/wardrobes-storage/versa/Versa_02.png",
      "assets/products/wardrobes-storage/versa/Versa_03.png",
      "assets/products/wardrobes-storage/versa/Versa_04.png"
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
    "img": "assets/products/wooden-couches/lmw-023/LMW-023.png",
    "badge": "",
    "description": "Indulge in luxury with the LMW-023 wooden couch. Designed for premium comfort and relaxed seating, it features a sturdy wood frame. Its spacious contoured seat and elegant Red finish make it the perfect statement addition to your living area, executive office, or lobby.",
    "images": [
      "assets/products/wooden-couches/lmw-023/LMW-023.png"
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
    "img": "assets/products/wooden-couches/lmw-024/LMW-024.png",
    "badge": "",
    "description": "Indulge in luxury with the LMW-024 wooden couch. Designed for premium comfort and relaxed seating, it features a sturdy wood frame. Its spacious contoured seat and elegant Red finish make it the perfect statement addition to your living area, executive office, or lobby.",
    "images": [
      "assets/products/wooden-couches/lmw-024/LMW-024.png"
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
    "img": "assets/products/wooden-couches/lmw-025/LMW-025.png",
    "badge": "",
    "description": "Indulge in luxury with the LMW-025 wooden couch. Designed for premium comfort and relaxed seating, it features a sturdy wood frame. Its spacious contoured seat and elegant Brown finish make it the perfect statement addition to your living area, executive office, or lobby.",
    "images": [
      "assets/products/wooden-couches/lmw-025/LMW-025.png"
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
    "img": "assets/products/wooden-couches/lmw-026/LMW-026.png",
    "badge": "",
    "description": "Indulge in luxury with the LMW-026 wooden couch. Designed for premium comfort and relaxed seating, it features a sturdy wood frame. Its spacious contoured seat and elegant Red finish make it the perfect statement addition to your living area, executive office, or lobby.",
    "images": [
      "assets/products/wooden-couches/lmw-026/LMW-026.png"
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
    "img": "assets/products/wooden-couches/lmw-027/LMW-027.png",
    "badge": "",
    "description": "Indulge in luxury with the LMW-027 wooden couch. Designed for premium comfort and relaxed seating, it features a sturdy wood frame. Its spacious contoured seat and elegant Brown finish make it the perfect statement addition to your living area, executive office, or lobby.",
    "images": [
      "assets/products/wooden-couches/lmw-027/LMW-027.png"
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
    "img": "assets/products/wooden-couches/lmw-028/LMW-028.png",
    "badge": "New",
    "description": "Indulge in luxury with the LMW-028 wooden couch. Designed for premium comfort and relaxed seating, it features a sturdy wood frame. Its spacious contoured seat and elegant Red finish make it the perfect statement addition to your living area, executive office, or lobby.",
    "images": [
      "assets/products/wooden-couches/lmw-028/LMW-028.png"
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
    "img": "assets/products/wooden-couches/lmw-029/LMW-029.png",
    "badge": "Bestseller",
    "description": "Indulge in luxury with the LMW-029 wooden couch. Designed for premium comfort and relaxed seating, it features a sturdy wood frame. Its spacious contoured seat and elegant Red finish make it the perfect statement addition to your living area, executive office, or lobby.",
    "images": [
      "assets/products/wooden-couches/lmw-029/LMW-029.png"
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
    "img": "assets/products/wooden-couches/lmw-030/LMW-030.png",
    "badge": "",
    "description": "Indulge in luxury with the LMW-030 wooden couch. Designed for premium comfort and relaxed seating, it features a sturdy wood frame. Its spacious contoured seat and elegant Red finish make it the perfect statement addition to your living area, executive office, or lobby.",
    "images": [
      "assets/products/wooden-couches/lmw-030/LMW-030.png"
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
    "img": "assets/products/wooden-couches/lmw-031/LMW-031.png",
    "badge": "Premium",
    "description": "Indulge in luxury with the LMW-031 wooden couch. Designed for premium comfort and relaxed seating, it features a sturdy wood frame. Its spacious contoured seat and elegant Red finish make it the perfect statement addition to your living area, executive office, or lobby.",
    "images": [
      "assets/products/wooden-couches/lmw-031/LMW-031.png"
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
    "img": "assets/products/wooden-couches/lmw-032/LMW-032.png",
    "badge": "New",
    "description": "Indulge in luxury with the LMW-032 wooden couch. Designed for premium comfort and relaxed seating, it features a sturdy wood frame. Its spacious contoured seat and elegant Red finish make it the perfect statement addition to your living area, executive office, or lobby.",
    "images": [
      "assets/products/wooden-couches/lmw-032/LMW-032.png"
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
    "img": "assets/products/wooden-couches/lmw-033/LMW-033.png",
    "badge": "",
    "description": "Indulge in luxury with the LMW-033 wooden couch. Designed for premium comfort and relaxed seating, it features a sturdy wood frame. Its spacious contoured seat and elegant Brown finish make it the perfect statement addition to your living area, executive office, or lobby.",
    "images": [
      "assets/products/wooden-couches/lmw-033/LMW-033.png"
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
    "img": "assets/products/wooden-couches/lmw-034/LMW-034.png",
    "badge": "",
    "description": "Indulge in luxury with the LMW-034 wooden couch. Designed for premium comfort and relaxed seating, it features a sturdy wood frame. Its spacious contoured seat and elegant Red finish make it the perfect statement addition to your living area, executive office, or lobby.",
    "images": [
      "assets/products/wooden-couches/lmw-034/LMW-034.png"
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
    "img": "assets/products/wooden-couches/rubco-antiq-sofa-311/rubco_antiq_sofa_3_1_1.jpg",
    "images": [
      "assets/products/wooden-couches/rubco-antiq-sofa-311/rubco_antiq_sofa_3_1_1.jpg",
      "assets/products/wooden-couches/rubco-antiq-sofa-311/rubco_antiq_sofa_3_1_1_1.jpg",
      "assets/products/wooden-couches/rubco-antiq-sofa-311/rubco_antiq_sofa_3_1_1_2.jpg",
      "assets/products/wooden-couches/rubco-antiq-sofa-311/rubco_antiq_sofa_3_1_1_3.jpg",
      "assets/products/wooden-couches/rubco-antiq-sofa-311/rubco_antiq_sofa_3_1_1_4.jpg"
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
    "img": "assets/products/wooden-couches/rubco-perl-sofa-311/rubco_perl_sofa_3_1_1.jpg",
    "images": [
      "assets/products/wooden-couches/rubco-perl-sofa-311/rubco_perl_sofa_3_1_1.jpg",
      "assets/products/wooden-couches/rubco-perl-sofa-311/rubco_perl_sofa_3_1_1_1.jpg",
      "assets/products/wooden-couches/rubco-perl-sofa-311/rubco_perl_sofa_3_1_1_2.jpg",
      "assets/products/wooden-couches/rubco-perl-sofa-311/rubco_perl_sofa_3_1_1_3.jpg",
      "assets/products/wooden-couches/rubco-perl-sofa-311/rubco_perl_sofa_3_1_1_4.jpg",
      "assets/products/wooden-couches/rubco-perl-sofa-311/rubco_perl_sofa_3_1_1_5.jpg"
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
    "img": "assets/products/wooden-couches/rubco-reeper-sofa/reeper_sofa_1.jpg",
    "images": [
      "assets/products/wooden-couches/rubco-reeper-sofa/reeper_sofa_1.jpg",
      "assets/products/wooden-couches/rubco-reeper-sofa/reeper_sofa_2.jpg",
      "assets/products/wooden-couches/rubco-reeper-sofa/reeper_sofa_3.jpg"
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
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-slatted-bed/Minimalist Wood Slatted Bed - Angle Perspective.jpg",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-slatted-bed/Minimalist Wood Slatted Bed - Angle Perspective.jpg",
      "assets/products/sleeping-beds/cat-minimalist-wood-slatted-bed/Minimalist Wood Slatted Bed - Front View.jpg"
    ],
    "colors": []
  },
  {
    "id": "cat-minimalist-wood-slatted-bed-psi",
    "name": "Minimalist Wood Slatted Bed Psi",
    "category": "sleeping-beds",
    "type": "furniture",
    "material": "Premium Upholstery / Solid Wood",
    "designer": "LayerMax Signature",
    "rating": 4.8,
    "badge": "",
    "description": "The Minimalist Wood Slatted Bed Psi combines modern design, exceptional comfort, and lasting durability.",
    "img": "assets/products/sleeping-beds/cat-minimalist-wood-slatted-bed-psi/Minimalist Wood Slatted Bed Psi.jpg",
    "images": [
      "assets/products/sleeping-beds/cat-minimalist-wood-slatted-bed-psi/Minimalist Wood Slatted Bed Psi.jpg"
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
    "img": "assets/products/sleeping-beds/cat-dark-walnut-single-bed-with-black-headboard/Dark Walnut Single Bed with Black Headboard.png",
    "images": [
      "assets/products/sleeping-beds/cat-dark-walnut-single-bed-with-black-headboard/Dark Walnut Single Bed with Black Headboard.png"
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
    "img": "assets/products/sofas/black-leather-reclining-sofa/black-leather-reclining-sofa.jpg",
    "images": [
      "assets/products/sofas/black-leather-reclining-sofa/black-leather-reclining-sofa.jpg",
      "assets/products/sofas/black-leather-reclining-sofa/black-leather-reclining-sofa-loveseat.jpg"
    ],
    "colors": []
  }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = PRODUCTS;
}
