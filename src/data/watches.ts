export interface Watch {
  id: string;
  name: string;
  description: string;
  price: number;
  brand: string;
  category: "classic" | "sport" | "luxury" | "casual";
  tag: "New" | "Best Seller" | "Limited Edition" | "Sale" | null;
  imageUrl: string;
}

// Hublot images list. Add/remove filenames as needed; mapping will loop when fewer.
export const HUBLOT_IMAGES: string[] = [
  "/assets/images/hublot/hublot-1.jpg",
  "/assets/images/hublot/hublot-2.jpg",
  "/assets/images/hublot/hublot-3.jpg",
  "/assets/images/hublot/hublot-4.jpg",
  "/assets/images/hublot/hublot-5.jpg",
  "/assets/images/hublot/hublot-6.jpg",
  "/assets/images/hublot/hublot-7.jpg",
  "/assets/images/hublot/hublot-8.jpg",
];

export const getHublotImageUrl = (index: number): string => {
  const list = HUBLOT_IMAGES.filter(Boolean);
  const count = list.length;
  if (count === 0) return "/placeholder.svg"; // fallback if none uploaded yet
  return list[index % count]; // repeat when fewer; use first N when more
};

export const watches: Watch[] = [
  {
    id: "1",
    name: "Hublot LPIO1",
    description: "Swiss-made automatic movement with sapphire crystal glass and genuine leather strap.",
    brand: "Hublot",
    price: 1600,
    category: "luxury",
    tag: "Best Seller",
    imageUrl: getHublotImageUrl(0),
  },
  {
    id: "2",
    name: "Hublot LP0K2",
    description: "Water-resistant to 200m with luminous hands and rotating bezel for diving.",
    brand: "Hublot",
    price: 1600,
    category: "casual",
    tag: "New",
    imageUrl: getHublotImageUrl(1),
  },
  {
    id: "3",
    name: "Hublot LP0H3",
    description: "moon phase complication and exhibition caseback.",
    brand: "Hublot",
    price: 1600,
    category: "luxury",
    tag: "Limited Edition",
    imageUrl: getHublotImageUrl(2),
  },
  {
    id: "4",
    name: "Hublot LP0F4",
    description: "Clean dial design with Japanese quartz movement and mesh steel band.",
    brand: "Hublot",
    price: 1600,
    category: "casual",
    tag: null,
    imageUrl: getHublotImageUrl(3),
  },
  {
    id: "5",
    name: "Hublot LP0U5",
    description: "Pilot-style chronograph with dual time zone and anti-reflective coating.",
    brand: "Hublot",
    price: 1600,
    category: "casual",
    tag: "Best Seller",
    imageUrl: getHublotImageUrl(4),
  },
  {
    id: "6",
    name: "Hublot LP0Y6",
    description: "Timeless design with Roman numerals and genuine alligator leather strap.",
    brand: "Hublot",
    price: 1600,
    category: "classic",
    tag: "New",
    imageUrl: getHublotImageUrl(5),
  },
  {
    id: "7",
    name: "Hublot LPH07",
    description: "All-black ceramic case with scratch-resistant sapphire and silicone strap.",
    brand: "Hublot",
    price: 1600,
    category: "casual",
    tag: null,
    imageUrl: getHublotImageUrl(6),
  },
  {
    id: "8",
    name: "Hublot LP0D8",
    description: "Diamond-studded bezel with mother of pearl dial and Swiss movement.",
    brand: "Hublot",
    price: 1600,
    category: "luxury",
    tag: "Limited Edition",
    imageUrl: getHublotImageUrl(7),
  },
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
};

export const generateWhatsAppLink = (
  watch: Watch,
  whatsappNumber: string
): string => {
  const message = `Hi Lakhan, I am interested in the watch: ${watch.name} priced at ${formatPrice(watch.price)}. I saw it on your website and would like to know more / place an order.`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
};
