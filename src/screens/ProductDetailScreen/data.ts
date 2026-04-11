export const PRODUCTS_DATA: Record<
  string,
  {
    id: string;
    name: string;
    price: string;
    categoryLabel: string;
    tag: string;
    description: string;
    imageSource: any;
    related: Array<{
      id: string;
      name: string;
      price: string;
      imageSource: any;
    }>;
  }
> = {
  // ── COLLECTION TAHNYC
  "vitamine-c": {
    id: "vitamine-c",
    name: "Vitamine C",
    price: "39,99 $",
    categoryLabel: "ECO SKINCARE",
    tag: "ECO-FRIENDLY",
    description:
      "Une formule concentrée pour un teint éclatant et une peau protégée contre les agressions extérieures.",
    imageSource: require("../../../assets/images/products/GM1.webp"),
    related: [
      {
        id: "molecule-serum",
        name: "Molecule Serum",
        price: "45,00 $",
        imageSource: require("../../../assets/images/products/GM2.webp"),
      },
      {
        id: "complex-creme",
        name: "Complex Crème",
        price: "52,00 $",
        imageSource: require("../../../assets/images/products/GM3.webp"),
      },
    ],
  },
  "molecule-serum": {
    id: "molecule-serum",
    name: "Molecule Serum",
    price: "45,00 $",
    categoryLabel: "ECO SKINCARE",
    tag: "ECO-FRIENDLY",
    description:
      "Hydratation profonde grâce à notre technologie moléculaire brevetée pour une régénération cellulaire optimale.",
    imageSource: require("../../../assets/images/products/GM2.webp"),
    related: [
      {
        id: "vitamine-c",
        name: "Vitamine C",
        price: "39,99 $",
        imageSource: require("../../../assets/images/products/GM1.webp"),
      },
      {
        id: "complex-creme",
        name: "Complex Crème",
        price: "52,00 $",
        imageSource: require("../../../assets/images/products/GM3.webp"),
      },
    ],
  },
  "complex-creme": {
    id: "complex-creme",
    name: "Complex Crème",
    price: "52,00 $",
    categoryLabel: "ECO SKINCARE",
    tag: "ECO-FRIENDLY",
    description:
      "Une texture riche et onctueuse qui scelle l'hydratation et renforce la barrière cutanée.",
    imageSource: require("../../../assets/images/products/GM3.webp"),
    related: [
      {
        id: "vitamine-c",
        name: "Vitamine C",
        price: "39,99 $",
        imageSource: require("../../../assets/images/products/GM1.webp"),
      },
      {
        id: "molecule-serum",
        name: "Molecule Serum",
        price: "45,00 $",
        imageSource: require("../../../assets/images/products/GM2.webp"),
      },
    ],
  },

  // ── COLLECTION BROM & JAKOBSEN
  "brom-serum": {
    id: "brom-serum",
    name: "Hygge Serum",
    price: "55,00 $",
    categoryLabel: "NORDIC PURITY",
    tag: "ORGANIC",
    description:
      "L'essence de la pureté scandinave. Un sérum apaisant pour les peaux les plus sensibles.",
    imageSource: require("../../../assets/images/products/BromJakobsen-brand.webp"),
    related: [
      {
        id: "vitamine-c",
        name: "Vitamine C",
        price: "39,99 $",
        imageSource: require("../../../assets/images/products/GM1.webp"),
      },
      {
        id: "molecule-serum",
        name: "Molecule Serum",
        price: "45,00 $",
        imageSource: require("../../../assets/images/products/GM2.webp"),
      },
    ],
  },

  // ── COLLECTION LUMIO
  "lumio-oil": {
    id: "lumio-oil",
    name: "Huile Éclat",
    price: "48,00 $",
    categoryLabel: "LUMINOUS CARE",
    tag: "NATURAL",
    description:
      "Une huile légère qui pénètre instantanément pour un fini glowy sans effet gras.",
    imageSource: require("../../../assets/images/products/Lumio-brand.webp"),
    related: [
      {
        id: "lumio-essence",
        name: "Essence MG7",
        price: "34,00 $",
        imageSource: require("../../../assets/images/products/MG7.webp"),
      },
      {
        id: "molecule-serum",
        name: "Molecule Serum",
        price: "45,00 $",
        imageSource: require("../../../assets/images/products/GM2.webp"),
      },
    ],
  },
  "lumio-essence": {
    id: "lumio-essence",
    name: "Essence MG7",
    price: "34,00 $",
    categoryLabel: "LUMINOUS CARE",
    tag: "NATURAL",
    description:
      "Préparez votre peau à recevoir ses soins avec cette essence énergisante aux minéraux marins.",
    imageSource: require("../../../assets/images/products/MG7.webp"),
    related: [
      {
        id: "lumio-oil",
        name: "Huile Éclat",
        price: "48,00 $",
        imageSource: require("../../../assets/images/products/Lumio-brand.webp"),
      },
      {
        id: "vitamine-c",
        name: "Vitamine C",
        price: "39,99 $",
        imageSource: require("../../../assets/images/products/GM1.webp"),
      },
    ],
  },
};
