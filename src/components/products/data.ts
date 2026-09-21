export interface ProductSpecs {
  gsmRange: string;
  paperGrade: string;
  coversMaterials: string;
  coverType?: string;
  rulings: string;
  rulingColors: string;
  bindingMaterial?: string;
  typesOfLocks?: string;
  dailyCapacity: string;
}

export interface ProductCollection {
  id: string;
  legacyId?: string;
  name: string;
  folderName: string;
  description: string;
  bullets: string[];
  coverImage: string;
  images: string[];
  bgColor: string;
  features: string[];
  specs: ProductSpecs;
}

export const collections: ProductCollection[] = [
  {
    "id": "center-pinned-notebook",
    "name": "Center Pinned Notebooks",
    "folderName": "1. Centere Pinned Notebook",
    "description": "Classic center-pinned notebooks with secure staple binding. Built with high-brightness woodfree paper for students and high-volume school supplies.",
    "bullets": [
      "Pinned tight with rust-resistant staples",
      "High-opacity smooth ruled sheets",
      "Export-ready packing in bundles & pallets"
    ],
    "coverImage": "/images/Products/1. Centere Pinned Notebook/1. Centere Pinned Notebook.png",
    "images": [
      "/images/Products/1. Centere Pinned Notebook/01_14x8.png",
      "/images/Products/1. Centere Pinned Notebook/01_200x155.png",
      "/images/Products/1. Centere Pinned Notebook/01_21x16.png",
      "/images/Products/1. Centere Pinned Notebook/01_22x17.png",
      "/images/Products/1. Centere Pinned Notebook/02_14x8.png",
      "/images/Products/1. Centere Pinned Notebook/02_200x155.png",
      "/images/Products/1. Centere Pinned Notebook/02_21x16.png",
      "/images/Products/1. Centere Pinned Notebook/02_22x17.png",
      "/images/Products/1. Centere Pinned Notebook/1-A4 Poly Center Pinned NB 01.png",
      "/images/Products/1. Centere Pinned Notebook/1-A4 Poly Center Pinned NB 02.png",
      "/images/Products/1. Centere Pinned Notebook/20x15.5 cm notebook.png",
      "/images/Products/1. Centere Pinned Notebook/Craft cover Center pinned book.png",
      "/images/Products/1. Centere Pinned Notebook/Venter book Notebook_01.png",
      "/images/Products/1. Centere Pinned Notebook/Venter book Notebook_02.png",
      "/images/Products/1. Centere Pinned Notebook/Venter book Notebook_03.png",
      "/images/Products/1. Centere Pinned Notebook/centered pin 22x17 cm _01.png",
      "/images/Products/1. Centere Pinned Notebook/centered pin 22x17 cm _02.png"
    ],
    "bgColor": "#eef6ee",
    "features": ["Export Ready", "OEM Available", "Custom Specs"],
    "legacyId": "Set_03",
    "specs": {
      "gsmRange": "44 to 140",
      "paperGrade": "Wood Pulp, Bagasse, Recycled, Cotton Paper",
      "coversMaterials": "Kraft, Mapletho, FBB, Duplex, Poly Propelene",
      "rulings": "Straight Line, Square, Seyes, Plain, Custom",
      "rulingColors": "1+1 Color, 2+2 Color, 3+3 color",
      "dailyCapacity": "200,000 pcs"
    }
  },
  {
    "id": "spiral-notebook",
    "name": "Spiral Notebooks",
    "folderName": "2. Spiral notebook",
    "description": "Flexible single-spiral notebooks engineered for effortless 360-degree flat opening, smooth daily writing, and durable classroom or office performance.",
    "bullets": [
      "Continuous durable metal/plastic spiral",
      "Micro-perforated options for clean tear-out",
      "Available in A4, A5, 7x5, and pocket formats"
    ],
    "coverImage": "/images/Products/2. Spiral notebook/2 Spiral Notebooks.png",
    "images": [
      "/images/Products/2. Spiral notebook/A4 Spiral Notebook silver spring reverse book foile _01.png",
      "/images/Products/2. Spiral notebook/A4 Spiral Notebook silver spring reverse book foile _02.png",
      "/images/Products/2. Spiral notebook/Spiral Notebook (10.8 x8 )IN_01.png",
      "/images/Products/2. Spiral notebook/Spiral Notebook (10.8 x8 )IN_02.png",
      "/images/Products/2. Spiral notebook/Spiral Notebook (10.8 x8 )IN_03.png",
      "/images/Products/2. Spiral notebook/Spiral Notebook (10.8 x8 )IN_04.png",
      "/images/Products/2. Spiral notebook/Spiral Notebook 4x5.5 silver spring.png",
      "/images/Products/2. Spiral notebook/Spiral Notebook 4x5.5 silver spring_01.png",
      "/images/Products/2. Spiral notebook/Spiral Notebook 4x5.5 silver spring_02.png",
      "/images/Products/2. Spiral notebook/Spiral Notebook 4x5.5 silver spring_03.png",
      "/images/Products/2. Spiral notebook/Spiral Notebook 4x5.5 silver spring_04.png",
      "/images/Products/2. Spiral notebook/Spiral Notebook 7x5_01.png",
      "/images/Products/2. Spiral notebook/Spiral Notebook 7x5_02.png",
      "/images/Products/2. Spiral notebook/Spiral Notebook 7x5_03.png",
      "/images/Products/2. Spiral notebook/Spiral Notebook 7x5_04.png",
      "/images/Products/2. Spiral notebook/Spiral Notebook A4_01.png",
      "/images/Products/2. Spiral notebook/Spiral Notebook A4_02.png",
      "/images/Products/2. Spiral notebook/Spiral Notebook A4_03.png",
      "/images/Products/2. Spiral notebook/Spiral Notebook A4_04.png",
      "/images/Products/2. Spiral notebook/Spiral Notebook A5_01.png",
      "/images/Products/2. Spiral notebook/Spiral Notebook A5_02.png",
      "/images/Products/2. Spiral notebook/Stenobook_01.png",
      "/images/Products/2. Spiral notebook/Stenobook_02.png",
      "/images/Products/2. Spiral notebook/Stenobook_03.png",
      "/images/Products/2. Spiral notebook/Stenobook_04.png"
    ],
    "bgColor": "#f6f1f4",
    "features": ["Export Ready", "OEM Available", "Custom Specs"],
    "legacyId": "Set_11",
    "specs": {
      "gsmRange": "44 to 140",
      "paperGrade": "Wood Pulp, Bagasse, Recycled, Cotton Paper",
      "coversMaterials": "Kraft, Mapletho, FBB, Duplex, Poly Propelene",
      "rulings": "Straight Line, Square, Seyes, Plain, Custom",
      "rulingColors": "1+1 Color, 2+2 Color, 3+3 color",
      "bindingMaterial": "Zinc Coated Metal Silver, Nylon Coated Color, Color PVC",
      "typesOfLocks": "G Lock & L Lock",
      "dailyCapacity": "100,000 pcs"
    }
  },
  {
    "id": "double-wire-notebooks",
    "name": "Double Wire Bound Notebooks",
    "folderName": "3. Double Wire Notebooks",
    "description": "Twin-loop wiro-bound notebooks offering superior structural stability, lay-flat ease, and refined executive aesthetics for professional journals and project planners.",
    "bullets": [
      "Twin-loop heavy-gauge steel wiro binding",
      "Polypropylene and rigid greyboard cover styles",
      "Ideal for corporate, academic & executive use"
    ],
    "coverImage": "/images/Products/3. Double Wire Notebooks/1. Double Wire Notebooks.png",
    "images": [
      "/images/Products/3. Double Wire Notebooks/3x5 Poly memo book.png",
      "/images/Products/3. Double Wire Notebooks/6x9 Double Wire Writting Pad.png",
      "/images/Products/3. Double Wire Notebooks/8.35 x 6 inc_ 5 Subject Poly Book.png",
      "/images/Products/3. Double Wire Notebooks/A4 29.7 x 21 Double Wiro notebook.png",
      "/images/Products/3. Double Wire Notebooks/Black Double wiro Notebook_01.png",
      "/images/Products/3. Double Wire Notebooks/Black Double wiro Notebook_05_Saudi.png",
      "/images/Products/3. Double Wire Notebooks/Black Double wiro Notebook_06_Saudi.png",
      "/images/Products/3. Double Wire Notebooks/copper Double wiro Notebook_01.png"
    ],
    "bgColor": "#f0f4f8",
    "features": ["Export Ready", "OEM Available", "Custom Specs"],
    "legacyId": "Set_02",
    "specs": {
      "gsmRange": "44 to 140",
      "paperGrade": "Wood Pulp, Bagasse, Recycled, Cotton Paper",
      "coversMaterials": "Kraft, Mapletho, FBB, Duplex, Poly Propelene",
      "rulings": "Straight Line, Square, Seyes, Plain, Custom",
      "rulingColors": "1+1 Color, 2+2 Color, 3+3 color",
      "bindingMaterial": "Nylon Coated Color Wiro",
      "dailyCapacity": "75,000 pcs"
    }
  },
  {
    "id": "composition-book",
    "name": "Composition Books",
    "folderName": "4. Composition Book",
    "description": "Traditional American & global standard composition books featuring sewn center signatures, reinforced cloth spine tape, and classic marbled or custom graphic covers.",
    "bullets": [
      "Sewn center signatures with reinforced cloth tape",
      "Standard wide and college ruling formats",
      "Meets strict US retail and school district specs"
    ],
    "coverImage": "/images/Products/4. Composition Book/1. Composition Notebook.png",
    "images": [
      "/images/Products/4. Composition Book/24.7 x 90 cm Freagrence Book_14.png",
      "/images/Products/4. Composition Book/24.7 x 90 cm Freagrence Book_15.png",
      "/images/Products/4. Composition Book/24.7 x 90 cm_Animal Composition Notebook_06.png",
      "/images/Products/4. Composition Book/24.7 x 90 cm_Animal Composition Notebook_07.png",
      "/images/Products/4. Composition Book/24.7 x 90 cm_Assorted Composition Notebook_01.png",
      "/images/Products/4. Composition Book/24.7 x 90 cm_Assorted Composition Notebook_02.png",
      "/images/Products/4. Composition Book/24.7 x 90 cm_BW Marble Composition Notebook_03.png",
      "/images/Products/4. Composition Book/24.7 x 90 cm_Neon Composition Notebook_04.png",
      "/images/Products/4. Composition Book/24.7 x 90 cm_Neon Composition Notebook_05.png"
    ],
    "bgColor": "#f1f0f9",
    "features": ["Export Ready", "OEM Available", "Custom Specs"],
    "legacyId": "Set_10",
    "specs": {
      "gsmRange": "44 to 100",
      "paperGrade": "Wood Pulp, Bagasse, Recycled, Cotton Paper",
      "coversMaterials": "Kraft, Mapletho, FBB, Duplex, Poly Propelene",
      "coverType": "Stiff & Semi Stiff",
      "rulings": "Straight Line, Square, Seyes, Plain, Custom",
      "rulingColors": "1+1 Color, 2+2 Color, 3+3 color",
      "dailyCapacity": "75,000 pcs"
    }
  },
  {
    "id": "counter-books",
    "name": "Counter Books",
    "folderName": "5. Counter Books",
    "description": "Hardwearing ledger and record-keeping counter books tailored for commercial transactions, inventories, and institutional bookkeeping with long shelf life.",
    "bullets": [
      "Hard case bound spine with reinforced corners",
      "High-gsm ledger grade paper",
      "Available in 1, 2, 3, and 4 quire page counts"
    ],
    "coverImage": "/images/Products/5. Counter Books/1. Counter books.png",
    "images": [
      "/images/Products/5. Counter Books/29.7 x 21cm_A4 Counter Notebook_07.png",
      "/images/Products/5. Counter Books/29.7 x 21cm_A4 Counter Notebook_08.png",
      "/images/Products/5. Counter Books/29.7 x 21cm_A5 Counter Notebook_09.png",
      "/images/Products/5. Counter Books/29.7 x 21cm_A5 Counter Notebook_10.png",
      "/images/Products/5. Counter Books/33 x 21cm_Counter Notebook_11.png",
      "/images/Products/5. Counter Books/33 x 21cm_Counter Notebook_12.png",
      "/images/Products/5. Counter Books/33 x 21cm_Counter Notebook_13.png"
    ],
    "bgColor": "#eef6ee",
    "features": ["Export Ready", "OEM Available", "Custom Specs"],
    "legacyId": "Set_01",
    "specs": {
      "gsmRange": "44 to 100",
      "paperGrade": "Wood Pulp, Bagasse, Recycled, Cotton Paper",
      "coversMaterials": "Kraft, Mapletho, FBB, Duplex, Poly Propelene",
      "coverType": "Stiff & Semi Stiff",
      "rulings": "Straight Line, Square, Seyes, Plain, Custom",
      "rulingColors": "1+1 Color, 2+2 Color, 3+3 color",
      "dailyCapacity": "75,000 pcs"
    }
  },
  {
    "id": "case-bound-books",
    "name": "Case Bound Books",
    "folderName": "6. Case Bound books",
    "description": "Premium hardbound case-bound notebooks and journals featuring rigid board covers, cloth or leatherette finishing, and archival thread-sewn bindings.",
    "bullets": [
      "Sturdy 1.5mm - 2.5mm rigid greyboard core",
      "Thread-sewn signatures for 180-degree lay-flat",
      "Custom debossing, foil stamping & ribbon markers"
    ],
    "coverImage": "/images/Products/6. Case Bound books/1. Case Bound Books.png",
    "images": [
      "/images/Products/6. Case Bound books/001.png"
    ],
    "bgColor": "#f1f0f9",
    "features": ["Export Ready", "OEM Available", "Custom Specs"],
    "legacyId": "Set_07",
    "specs": {
      "gsmRange": "44 to 100",
      "paperGrade": "Wood Pulp, Bagasse, Recycled, Cotton Paper",
      "coversMaterials": "0.8mm to 1.5mm Mill Board",
      "coverType": "PVC With Foiling or Screen Printing / Printed Art Paper",
      "rulings": "Straight Line, Square, Seyes, Plain, Custom",
      "rulingColors": "1+1 Color, 2+2 Color, 3+3 color",
      "dailyCapacity": "30,000 pcs"
    }
  },
  {
    "id": "index-cards",
    "name": "Index Cards",
    "folderName": "7. Index Card",
    "description": "Precision-cut heavyweight index cards in standard 3x5, 4x6, and 5x8 formats. Ideal for flashcards, study notes, recipes, and structured office records.",
    "bullets": [
      "Clean rotary precision-cut edges",
      "Bright white and assorted neon colorways",
      "Available in shrink-wrapped packs of 50/100"
    ],
    "coverImage": "/images/Products/7. Index Card/1. Index Cards.png",
    "images": [
      "/images/Products/7. Index Card/3x5_Neon Index Card.png",
      "/images/Products/7. Index Card/3x5_Neon Index Card_02.png",
      "/images/Products/7. Index Card/4x6_Index Card.png"
    ],
    "bgColor": "#f0f4f8",
    "features": ["Export Ready", "OEM Available", "Custom Specs"],
    "legacyId": "Set_08",
    "specs": {
      "gsmRange": "80 to 150",
      "paperGrade": "Wood Pulp, Bagasse, Recycled",
      "coversMaterials": "Tray / Loose Leaf",
      "coverType": "Art Paper / FBB",
      "rulings": "Straight Line, Square, Plain, Custom",
      "rulingColors": "1 Color / 2 Color",
      "dailyCapacity": "120,000 pcs"
    }
  },
  {
    "id": "construction-paper-and-pad",
    "name": "Construction Paper & Pads",
    "folderName": "8. Construction Paper and Pad",
    "description": "Vibrant, high-density colored construction paper pads designed for school art curricula, origami, scrapbooking, and all creative crafting applications.",
    "bullets": [
      "All-purpose high-bulk heavyweight construction stock",
      "Fade-resistant assorted vibrant color palette",
      "Clean tear-off glued padded headers"
    ],
    "coverImage": "/images/Products/8. Construction Paper and Pad/1. Construction Paper.png",
    "images": [
      "/images/Products/8. Construction Paper and Pad/18 x 12 In Construction  Paper.png",
      "/images/Products/8. Construction Paper and Pad/9 x 12 In Construction  Paper.png",
      "/images/Products/8. Construction Paper and Pad/9 x 12 In Construction Paper Pad.png"
    ],
    "bgColor": "#f6f1f4",
    "features": ["Export Ready", "OEM Available", "Custom Specs"],
    "legacyId": "Set_05",
    "specs": {
      "gsmRange": "80 to 120",
      "paperGrade": "High Bright / Low Bright",
      "coversMaterials": "Printed Paper",
      "coverType": "Loose Leaf / FBB / Duplex",
      "rulings": "Straight Line, Square, Plain, Custom",
      "rulingColors": "1 Color / 2 Color",
      "dailyCapacity": "80,000 pcs"
    }
  },
  {
    "id": "penmanship-and-primary-tablet",
    "name": "Penmanship & Primary Tablets",
    "folderName": "9. Penmenship and Primary tablet",
    "description": "Early-learning primary tablets and penmanship workbooks with dotted midlines, top baseline ruling, and smooth writing surfaces for handwriting development.",
    "bullets": [
      "Standard grade-level DNealian and Zaner-Bloser rulings",
      "Top-bound heavy chipboard backing",
      "High opacity for early pencil and crayon use"
    ],
    "coverImage": "/images/Products/9. Penmenship and Primary tablet/1. Primary Tablets & Journals.png",
    "images": [
      "/images/Products/9. Penmenship and Primary tablet/11 x 8.5 In_Primary Tablet.png",
      "/images/Products/9. Penmenship and Primary tablet/9.75 x 7.5 In Penmenship book.png"
    ],
    "bgColor": "#eef6ee",
    "features": ["Export Ready", "OEM Available", "Custom Specs"],
    "legacyId": "Set_09",
    "specs": {
      "gsmRange": "54 to 120",
      "paperGrade": "Wood Pulp, Bagasse, Recycled, Cotton Paper",
      "coversMaterials": "Printed Paper",
      "coverType": "FBB / Duplex / Art Paper",
      "rulings": "Straight Line, Square, Plain, Custom",
      "rulingColors": "1+1 Color / 2+2 Color",
      "dailyCapacity": "40,000 pcs"
    }
  },
  {
    "id": "refill-paper-and-pad",
    "name": "Refill Paper & Pads",
    "folderName": "10. Refill Paper and Pad",
    "description": "Pre-punched binder filler paper and refill sheets packed in multi-sheet reams. Compatible with 2-ring, 3-ring, and 4-ring standard binder mechanisms.",
    "bullets": [
      "Reinforced hole-punched margin options",
      "College, wide, and graph ruling variations",
      "Available in 100, 200, and 500 sheet master packs"
    ],
    "coverImage": "/images/Products/10. Refill Paper and Pad/1 Refill Paper & Pads.png",
    "images": [
      "/images/Products/10. Refill Paper and Pad/10.5 x 8 In Filler Paper.png",
      "/images/Products/10. Refill Paper and Pad/10.5 x 8 In Filler Paper_500 sheets.png",
      "/images/Products/10. Refill Paper and Pad/29.7 x 21cm_A4 Refill Pad.png",
      "/images/Products/10. Refill Paper and Pad/A4_29.7 x 21 cm_Rifil Pad.png"
    ],
    "bgColor": "#f0f4f8",
    "features": ["Export Ready", "OEM Available", "Custom Specs"],
    "legacyId": "Set_12",
    "specs": {
      "gsmRange": "54 to 120",
      "paperGrade": "Wood Pulp, Bagasse, Recycled, Cotton Paper",
      "coversMaterials": "Printed Paper",
      "coverType": "FBB / Duplex / Art Paper",
      "rulings": "Straight Line, Square, Plain, Custom",
      "rulingColors": "1+1 Color / 2+2 Color",
      "dailyCapacity": "40,000 pcs"
    }
  },
  {
    "id": "writing-pad-and-legal-pad",
    "name": "Writing Pads & Legal Pads",
    "folderName": "11. Writing Pad & Legal Pad",
    "description": "Professional top-stapled and perforated legal pads and desk writing tablets in Canary Yellow and Bright White with sturdy rigid backings.",
    "bullets": [
      "Easy-tear micro-perforated headers",
      "Classic Canary Yellow and Clean White stocks",
      "Rigid extra-thick backboard for handheld writing"
    ],
    "coverImage": "/images/Products/11. Writing Pad & Legal Pad/1. Legal & Writing Pads.png",
    "images": [
      "/images/Products/11. Writing Pad & Legal Pad/5x8 Inc_Writing Pad.png",
      "/images/Products/11. Writing Pad & Legal Pad/A4_11.69x8.26 White Legal Pad.png",
      "/images/Products/11. Writing Pad & Legal Pad/A4_11.69x8.26 yellow Legal Pad.png",
      "/images/Products/11. Writing Pad & Legal Pad/A4_block notes.png",
      "/images/Products/11. Writing Pad & Legal Pad/A5_5x8 White Legal Pad.png",
      "/images/Products/11. Writing Pad & Legal Pad/A5_5x8 yellow Legal Pad.png",
      "/images/Products/11. Writing Pad & Legal Pad/A5_block notes.png",
      "/images/Products/11. Writing Pad & Legal Pad/Spiral Notebook 5x8.png"
    ],
    "bgColor": "#f1f0f9",
    "features": ["Export Ready", "OEM Available", "Custom Specs"],
    "legacyId": "Set_06",
    "specs": {
      "gsmRange": "54 to 120",
      "paperGrade": "Wood Pulp, Bagasse, Recycled, Cotton Paper",
      "coversMaterials": "Printed Paper / Loose Leaf",
      "coverType": "FBB / Duplex / Art Paper",
      "rulings": "Straight Line, Square, Plain, Custom",
      "rulingColors": "1+1 Color / 2+2 Color W/ Perforation",
      "dailyCapacity": "40,000 pcs"
    }
  },
  {
    "id": "drawing-and-sketch-books",
    "name": "Drawing & Sketch Books",
    "folderName": "12. Drawing & Sketch Books",
    "description": "Premium heavyweight cartridge and multimedia sketch pads for sketching, technical drawing, and mixed media art. Ready for custom buyer specifications.",
    "bullets": [
      "Acid-free archival grade drawing paper",
      "Spiral and glue-bound formats available",
      "Custom sizing and cover treatments on request"
    ],
    "coverImage": "/images/Products/12. Drawing & Sketch Books/drawing_sketch_cover.png",
    "images": [
      "/images/Products/12. Drawing & Sketch Books/A4 Drawing Book.png",
      "/images/Products/12. Drawing & Sketch Books/A3 Drawing pad.png",
      "/images/Products/12. Drawing & Sketch Books/A3 Sketch Pad.png"
    ],
    "bgColor": "#f6f1f4",
    "features": ["Export Ready", "OEM Available", "Custom Specs"],
    "legacyId": "Set_04",
    "specs": {
      "gsmRange": "80 to 120",
      "paperGrade": "Wood Pulp, Bagasse, Recycled, Cotton Paper",
      "coversMaterials": "Printed Paper / Loose Leaf / Poly",
      "coverType": "FBB / Duplex / Art Paper",
      "rulings": "plain / border printed",
      "rulingColors": "with or without perforation",
      "dailyCapacity": "50,000 pcs"
    }
  }
];

export const defaultSpecs = { 
  sizes: ['A4', 'A5', 'B5', 'F/S', 'Letter (8.5x11 in)', 'Custom sizes on request'], 
  gsm: ['54 GSM', '57 GSM', '60 GSM', '70 GSM', '80 GSM', '100+ GSM Drawing'], 
  ruling: ['Single Line / Ruled', 'College Ruled', 'Wide Ruled', 'Square Grid', 'French Ruled', 'Dotted Midline', 'Blank'], 
  covers: ['Soft Cover (250 - 400 GSM)', 'Hard Cover (Greyboard 1.5 - 2.5mm)', 'Polypropylene (PP)', 'Kraft Cover', 'Gloss/Matt Laminated'], 
  branding: 'Custom OEM & Private Label printing, embossing, and bespoke foil stamping', 
  packaging: 'Shrink-wrapped sets, Master Heavy-Duty Export Cartons, Palletized container loading', 
  moq: '1 x 20ft Container (Mixed categories allowed)', 
  capacity: '20ft: ~12-14 Tons | 40ft HQ: ~26-28 Tons' 
};
