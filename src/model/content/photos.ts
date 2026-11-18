// Photos for the About page's interests gallery.
// Put full-size originals in image-originals/ and run `npm run optimize:images`.

export interface Photo {
  src: string;
  label: string;
  description: string;
  fit: string;        // tailwind object-fit / object-position classes
  aspect: string;     // CSS aspect-ratio of the tile
  colSpan?: string;   // tailwind col-span class
}

export const interestPhotos: Photo[] = [
  {
    src: "/images/interests/photography.jpg",
    label: "PHOTOGRAPHY",
    description: "Limpkin in flight — wildlife photography with a telephoto lens at a local wetland.",
    fit: "object-cover object-center",
    aspect: "2/1",
    colSpan: "col-span-2 sm:col-span-2",
  },
  {
    src: "/images/interests/drawing.jpg",
    label: "DRAWING",
    description: "Pencil sketch of Monkey D. Luffy (One Piece) — graphite on sketchbook paper.",
    fit: "object-cover object-top",
    aspect: "1/1",
    colSpan: "col-span-1",
  },
  {
    src: "/images/interests/guitar.jpg",
    label: "GUITAR",
    description: "Playing a resonator / dobro guitar — the metal cone gives it a distinctly warm, bluesy tone.",
    fit: "object-cover object-center",
    aspect: "4/3",
    colSpan: "col-span-1",
  },
  {
    src: "/images/interests/longboard.jpg",
    label: "LONGBOARD",
    description: "Sector Nine drop-through longboard — POV top-down shot on asphalt.",
    fit: "object-cover object-top",
    aspect: "4/3",
    colSpan: "col-span-1",
  },
  {
    src: "/images/interests/setup.jpg",
    label: "DEV SETUP",
    description: "Dual-monitor coding setup — VSCode + terminal on the left, docs on the right. Late-night session.",
    fit: "object-cover object-center",
    aspect: "4/3",
    colSpan: "col-span-1",
  },
  {
    src: "/images/interests/zeena.jpg",
    label: "ZEENA: my cat & first code reviewer",
    description: "she stole my seat while I was coding one day, and I never had the heart to move her. from 2009-2022, she was my loyal companion and toughest critic.",
    fit: "object-cover object-center",
    aspect: "4/3",
    colSpan: "col-span-1",
  },
];

// Photography page. Originals in image-originals/photography/ (Canon EOS Rebel T3i
// unless noted); captions say what's in the frame and the year it was taken.
const shot = (file: string, label: string, description: string, colSpan = "col-span-1"): Photo => ({
  src: `/images/photography/${file}`,
  label,
  description,
  fit: "object-cover object-center",
  aspect: colSpan === "col-span-1" ? "3/2" : "3/1",
  colSpan,
});

export const photographyPhotos: Photo[] = [
  shot("NewOrleansGreenery.jpg", "NEW ORLEANS", "A mansion reflected in a still pond under live oaks, New Orleans. 2019.", "sm:col-span-2"),
  shot("Jellyfish.jpg", "JELLYFISH", "A glowing blue jellyfish drifting in a dark aquarium tank. 2019."),
  shot("Crow.jpg", "CROW", "A crow pausing on the pavement. Shot on a Canon EOS 5D Mark III, 2022."),
  shot("LakeBench.jpg", "LAKESIDE PAVILION", "A lakeside pavilion silhouetted against the setting sun. 2024."),
  shot("Dandelion.jpg", "DANDELION", "A dandelion seed head against a soft green background. 2019."),
  shot("LakeSunset.jpg", "LAKE SUNSET", "Sunset over the water from a rocky shoreline. 2024."),
  shot("LakeTree.jpg", "SHORELINE", "The sun dropping toward the lake behind shoreline brush. 2024."),
  shot("BlackandWhiteStreet.jpg", "STREET", "A narrow street in black and white. 2019."),
  shot("RingNecklace.jpg", "RING", "An engraved ring on a chain, with a shallow depth of field. 2019."),
  shot("RazerLanceHead.jpg", "LANCEHEAD", "A Razer Lancehead mouse with purple underglow, shot in low light. 2021."),
  shot("Basketball.jpg", "BASKETBALL", "A basketball resting on textured pavement, from a low angle. 2024."),
  shot("SkateBoard.jpg", "LONGBOARD", "Longboard and sneakers, shot top-down. 2024."),
];
