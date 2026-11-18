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
