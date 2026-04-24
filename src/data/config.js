import Product1 from '../assets/product1.jpg';
import Product2 from '../assets/product2.jpg';
import Product3 from '../assets/product3.jpg';
import Product4 from '../assets/product4.jpg';
import Product5 from '../assets/product5.jpg';
import Product6 from '../assets/product6.jpg';
import Product7 from '../assets/product7.jpg';
import Product8 from '../assets/product8.jpg';
import Product9 from '../assets/product9.jpg';
import Product10 from '../assets/product10.jpg';
import Product11 from '../assets/product11.jpg';
import Product12 from '../assets/product12.jpg';

import {
  faCertificate, faTruckFast, faCrown, faUserTie, faGlobe,
  faBoxOpen, faLayerGroup, faScissors, faGem, faShoePrints
} from '@fortawesome/free-solid-svg-icons';

export const BrandConfig = {
  name: "Ayortum Men Store",
  hero: {
    heading: "Premium Fabrics for the Modern Gentleman",
    description:
      "Discover an exclusive collection of luxury Swiss Cotton, Italian Wools, and bespoke accessories. Tailored for excellence, delivered nationwide.",
  },
  contact: {
    phone: "+234 9036560360",
    whatsapp: "https://wa.me/2349036560360",
    email: "sales@ayortummenstore.com",
    address: "Ibadan, Lagos Nigeria",
    instagram: "https://www.instagram.com/ayortummenstore/",
    workingDays: "Monday – Saturday, 9:00 AM – 6:00 PM",
    shortDescription:
      "Have a custom request or need help choosing the right fabric? Reach out to our concierge team today.",
  },
  footer: {
    description:
      "Ayortummenstore is Nigeria's premier destination for high-quality men's textiles and luxury footwear. Elevating traditional attire one yard at a time.",
  },
  theme: {
    primaryButton: "#D4AF37",
    secondaryButton: "#0A0A0A",
  },
};

export const categories = [
  { id: 1, name: "Swiss Cotton",       slug: "swiss-cotton", icon: faBoxOpen     },
  { id: 2, name: "Luxury Wools",       slug: "luxury-wools", icon: faLayerGroup  },
  { id: 3, name: "Senator Materials",  slug: "senator",      icon: faScissors    },
  { id: 4, name: "Premium Lace",       slug: "lace",         icon: faGem         },
  { id: 5, name: "Footwear",           slug: "footwear",     icon: faShoePrints  },
];

export const whyChooseUs = [
  { id: 1, icon: faCertificate, title: "Authentic Quality",  description: "100% genuine Swiss Cotton and Italian Wools sourced directly."                        },
  { id: 2, icon: faTruckFast,   title: "Swift Delivery",     description: "Same-day delivery in Lagos; 2–3 days nationwide delivery across Nigeria."              },
  { id: 3, icon: faCrown,       title: "Exclusive Designs",  description: "Limited edition patterns curated for the modern gentleman's wardrobe."                  },
  { id: 4, icon: faUserTie,     title: "Expert Styling",     description: "Personalised fabric consultations via WhatsApp for every occasion."                     },
  { id: 5, icon: faGlobe,       title: "Global Reach",       description: "Reliable international shipping to the UK, USA, and Canada."                           },
];

// Products use placeholder images instead of local imports so the
// component works without the actual asset files present.
export const products = [
  { id: 1,  name: "Cambric Aticu",    arrival: "top",     price: "DM for Price",  yardage: "", image: Product1,     category: "Swiss Cotton",      description: ""                         },
  { id: 2,  name: "Premium Fabric",    arrival: "regular", price: "₦8,000",  yardage: "1 Yard", image: Product2,    category: "Luxury Wools",      description: ""                              },
  { id: 3,  name: "Premium stock wool",      arrival: "top",     price: "₦8,000",  yardage: "1 Yard",      image: Product3,         category: "Swiss Cotton",          description: ""                                 },
  { id: 4,  name: "FDCP of size 40-46",     arrival: "regular", price: "₦75,000",  yardage: null, image: Product4,      category: "Footwear", description: ""                              },
  { id: 5,  name: "New Pedro Pam of size 40-46",       arrival: "top",     price: "₦50,000", yardage: null, image: Product5,        category: "Footwear",      description: ""                              },
  { id: 6,  name: "Cambric Men lace",   arrival: "regular", price: "DM for Price",  yardage: null, image: Product6,        category: "Luxury Wools",      description: ""                         },
  { id: 7,  name: "Swiss Cotton",        arrival: "regular", price: "₦50,000",  yardage: "5 Yards", image: Product7,        category: "Swiss Cotton",      description: ""                   },
  { id: 8,  name: "Dubai Button Jalamia",         arrival: "top",     price: "DM for Price",  yardage: null,      image: Product8,         category: "Jalamia",          description: "Sleek Morocco Jab Available in different color"                              },
  { id: 9,  name: "WILHEMS",          arrival: "regular", price: "₦350,000",  yardage: "5 Yards", image: Product9,      category: "Senator Materials",      description: "Made in Austria, Available in different colors."                         },
  { id: 10, name: "Givenchy Palm Slippers",    arrival: "regular", price: "₦60,000",  yardage: null, image: Product10,       category: "Footwear", description: ""                         },
  { id: 11, name: "Birkenstock Zurich Suede Sandals",            arrival: "regular", price: "₦70,000",  yardage: null, image: Product11,      category: "Footwear",      description: "Upper, 100% suede Lining, 100% Natural Leather Sole sizes 40 - 46"                         },
  { id: 12, name: "Men Lace",     arrival: "top",     price: "₦240,000",  yardage: "10 Yards", image: Product12,       category: "Premium Lace",      description: "Hign Quality Lace Fabrics with long-lasting colour and texture."                          },
];

export const testimonials = [
  { id: 1, name: "Olawale Johnson", text: "The Swiss Dot quality is unmatched. Exactly as seen on IG!",                                    rating: 5, verified: true },
  { id: 2, name: "Ibrahim K.",      text: "Fast delivery to Abuja. Professional packaging and clear communication.",                        rating: 5, verified: true },
  { id: 3, name: "Emeka Okafor",    text: "My new plug for Senator materials. The patterns are very unique.",                               rating: 5, verified: true },
  { id: 4, name: "David O.",        text: "Seamless shipping to the UK. The cashmere is premium and soft.",                                 rating: 5, verified: true },
];
