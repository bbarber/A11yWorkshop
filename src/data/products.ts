import { Product } from '../types/index';

const createPlaceholder = (productId: number, color: string, label: string): string => {
  const svg = `
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="${color}"/>
      <text x="50%" y="40%" font-size="24" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">
        ${label}
      </text>
      <text x="50%" y="60%" font-size="16" fill="white" text-anchor="middle" dominant-baseline="middle">
        Product ${productId}
      </text>
    </svg>
  `;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Mechanical RGB Keyboard",
    description: "Professional-grade mechanical keyboard with hot-swappable switches, per-key RGB lighting, and programmable macro keys. Perfect for coding marathons.",
    price: 149.99,
    category: "Peripherals",
    image: createPlaceholder(1, "#4F46E5", "Keyboard"),
    inStock: true,
    rating: 4.7,
    reviews: 156
  },
  {
    id: 2,
    name: "Vertical Ergonomic Mouse",
    description: "Reduces strain with a vertical grip design. Precision tracking, 8 programmable buttons, and wireless connectivity with 2.4GHz USB receiver.",
    price: 79.99,
    category: "Peripherals",
    image: createPlaceholder(2, "#4F46E5", "Mouse"),
    inStock: true,
    rating: 4.6,
    reviews: 203
  },
  {
    id: 3,
    name: "Dual Monitor Arm Mount",
    description: "Articulating VESA mount for two monitors up to 27\". Full range of motion, cable management, and tool-free installation.",
    price: 89.99,
    category: "Desk Setup",
    image: createPlaceholder(3, "#06B6D4", "Monitor Arm"),
    inStock: true,
    rating: 4.8,
    reviews: 412
  },
  {
    id: 4,
    name: "USB-C 42-in-1 Docking Station",
    description: "Connect to dual 4K displays, Gigabit Ethernet, 100W charging, and SD card reader. Universal compatibility with laptops and tablets.",
    price: 159.99,
    category: "Connectivity",
    image: createPlaceholder(4, "#06B6D4", "Hub/Dock"),
    inStock: true,
    rating: 4.5,
    reviews: 324
  },
  {
    id: 5,
    name: "Wireless ANC Headphones",
    description: "Active noise cancellation, 40-hour battery life, and premium audio quality. Perfect for focused development work and virtual meetings.",
    price: 199.99,
    category: "Audio",
    image: createPlaceholder(5, "#4F46E5", "Headphones"),
    inStock: true,
    rating: 4.7,
    reviews: 538
  },
  {
    id: 6,
    name: "4K USB-C Monitor 32\"",
    description: "Stunning 4K resolution with USB-C connectivity for display and 90W charging. Ideal for dev work with sharp pixel density for code readability.",
    price: 449.99,
    category: "Displays",
    image: createPlaceholder(6, "#10B981", "Monitor"),
    inStock: false,
    rating: 4.9,
    reviews: 287
  },
  {
    id: 7,
    name: "LED Desk Lamp with Blue Light Filter",
    description: "Adjustable brightness and color temperature to reduce eye strain during long coding sessions. USB rechargeable with touch controls.",
    price: 59.99,
    category: "Lighting",
    image: createPlaceholder(7, "#F59E0B", "Desk Lamp"),
    inStock: true,
    rating: 4.6,
    reviews: 445
  },
  {
    id: 8,
    name: "Custom Keycap Set",
    description: "Premium double-shot keycaps with developer-themed legends. MX compatible with smooth, durable PBT material and unique colorways.",
    price: 89.99,
    category: "Accessories",
    image: createPlaceholder(8, "#F59E0B", "Keycaps"),
    inStock: true,
    rating: 4.8,
    reviews: 198
  },
  {
    id: 9,
    name: "Programmable Macro Pad",
    description: "8-key programmable pad with RGB lighting. Create shortcuts for your favorite dev tools, git commands, and repetitive tasks.",
    price: 64.99,
    category: "Peripherals",
    image: createPlaceholder(9, "#4F46E5", "Macro Pad"),
    inStock: true,
    rating: 4.5,
    reviews: 267
  },
  {
    id: 10,
    name: "Extended XL Mousepad",
    description: "900x400mm gaming-grade mousepad with precision weave. Smooth tracking surface for keyboard and mouse. Non-slip rubber base.",
    price: 34.99,
    category: "Peripherals",
    image: createPlaceholder(10, "#EC4899", "Mousepad"),
    inStock: true,
    rating: 4.7,
    reviews: 512
  },
  {
    id: 11,
    name: "Developer Hoodie",
    description: "Comfortable 100% cotton blend hoodie with subtle 'Debug Mode Enabled' design. Perfect for office or home development sessions.",
    price: 64.99,
    category: "Merch",
    image: createPlaceholder(11, "#EC4899", "Hoodie"),
    inStock: true,
    rating: 4.6,
    reviews: 289
  },
  {
    id: 12,
    name: "Desk Cable Organizer Kit",
    description: "Complete cable management solution with clips, ties, and routing channels. Keep your desk clean and organized for maximum productivity.",
    price: 29.99,
    category: "Organization",
    image: createPlaceholder(12, "#8B5CF6", "Cable Kit"),
    inStock: true,
    rating: 4.4,
    reviews: 378
  }
];
