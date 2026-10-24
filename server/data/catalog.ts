// Catalogue, in "featured" order within each category (what the nursery wants to sell first).
// art: how the illustration is drawn. leaf = foliage colour, pot = planter colour.

export type Art = 'trail' | 'palm' | 'lily' | 'upright' | 'broad' | 'monstera' | 'fig' | 'succulent' | 'blades' | 'cylinder'
  | 'fern' | 'flower' | 'herb' | 'tree' | 'pot' | 'bag' | 'bottle' | 'tool' | 'can' | 'pebbles'

export interface Product {
  sku: string
  slug: string
  name: string
  botanical?: string
  category: 'indoor-plants' | 'outdoor-plants' | 'planters' | 'plant-care'
  price: number
  mrp: number
  size: string
  light?: string
  water?: string
  petSafe?: boolean
  stock: number
  art: Art
  leaf: string
  pot: string
  desc: string
}

export const CATEGORIES = [
  { slug: 'indoor-plants', name: 'Indoor plants', blurb: 'Easy greens for homes and offices' },
  { slug: 'outdoor-plants', name: 'Outdoor plants', blurb: 'For balconies, terraces and gardens' },
  { slug: 'planters', name: 'Planters', blurb: 'Ceramic, terracotta and self-watering pots' },
  { slug: 'plant-care', name: 'Plant care', blurb: 'Soil, food and tools' },
] as const

const p = (x: Product) => x

export const PRODUCTS: Product[] = [
  // ---- indoor plants
  p({ sku: 'LL-IN-01', slug: 'money-plant-golden-pothos', name: 'Money Plant (Golden Pothos)', botanical: 'Epipremnum aureum', category: 'indoor-plants', price: 299, mrp: 399, size: '30–40 cm with 4" nursery pot', light: 'Low to bright indirect', water: 'Once a week', petSafe: false, stock: 40, art: 'trail', leaf: '#7cb342', pot: '#d9c7a7', desc: 'The easiest plant there is. Trails beautifully from a shelf and forgives a missed watering or two.' }),
  p({ sku: 'LL-IN-02', slug: 'areca-palm', name: 'Areca Palm', botanical: 'Dypsis lutescens', category: 'indoor-plants', price: 649, mrp: 799, size: '60–75 cm with 8" pot', light: 'Bright indirect', water: 'Twice a week in summer', petSafe: true, stock: 18, art: 'palm', leaf: '#689f38', pot: '#c96f4a', desc: 'Feathery fronds that make a corner feel like a resort. A pet-friendly air purifier.' }),
  p({ sku: 'LL-IN-03', slug: 'peace-lily', name: 'Peace Lily', botanical: 'Spathiphyllum wallisii', category: 'indoor-plants', price: 449, mrp: 549, size: '35–45 cm with 5" pot', light: 'Low to medium', water: 'When the leaves droop slightly', petSafe: false, stock: 22, art: 'lily', leaf: '#2e7d32', pot: '#efe9df', desc: 'Glossy leaves and white blooms. Tells you when it is thirsty by drooping, then perks right back up.' }),
  p({ sku: 'LL-IN-04', slug: 'zz-plant', name: 'ZZ Plant', botanical: 'Zamioculcas zamiifolia', category: 'indoor-plants', price: 699, mrp: 899, size: '40–50 cm with 6" pot', light: 'Low to bright indirect', water: 'Every 2–3 weeks', petSafe: false, stock: 15, art: 'upright', leaf: '#1b5e20', pot: '#37474f', desc: 'Waxy, upright stems that thrive on neglect. Perfect for offices with only tube lights.' }),
  p({ sku: 'LL-IN-05', slug: 'rubber-plant-burgundy', name: 'Rubber Plant (Burgundy)', botanical: 'Ficus elastica', category: 'indoor-plants', price: 549, mrp: 699, size: '45–55 cm with 6" pot', light: 'Bright indirect', water: 'Once a week', petSafe: false, stock: 12, art: 'broad', leaf: '#4a1f2b', pot: '#d9c7a7', desc: 'Big, dark, glossy leaves on a sturdy stem. Grows into a statement plant within a couple of years.' }),
  p({ sku: 'LL-IN-06', slug: 'monstera-deliciosa', name: 'Monstera Deliciosa', botanical: 'Monstera deliciosa', category: 'indoor-plants', price: 1199, mrp: 1499, size: '60–70 cm with 8" pot', light: 'Bright indirect', water: 'Once a week', petSafe: false, stock: 9, art: 'monstera', leaf: '#2e7d32', pot: '#efe9df', desc: 'The split-leaf favourite. New leaves unfurl with more holes as the plant matures.' }),
  p({ sku: 'LL-IN-07', slug: 'fiddle-leaf-fig', name: 'Fiddle Leaf Fig', botanical: 'Ficus lyrata', category: 'indoor-plants', price: 1499, mrp: 1899, size: '80–90 cm with 10" pot', light: 'Bright, some direct morning sun', water: 'Once a week', petSafe: false, stock: 6, art: 'fig', leaf: '#33691e', pot: '#c96f4a', desc: 'Large violin-shaped leaves. Likes a bright spot and to be left there.' }),
  p({ sku: 'LL-IN-08', slug: 'jade-plant', name: 'Jade Plant', botanical: 'Crassula ovata', category: 'indoor-plants', price: 349, mrp: 449, size: '15–20 cm with 4" ceramic pot', light: 'Bright, direct sun', water: 'Every 2 weeks', petSafe: false, stock: 30, art: 'succulent', leaf: '#558b2f', pot: '#efe9df', desc: 'A lucky succulent with thick, coin-like leaves. A popular housewarming gift.' }),
  p({ sku: 'LL-IN-09', slug: 'aglaonema-red', name: 'Aglaonema Lipstick Red', botanical: 'Aglaonema', category: 'indoor-plants', price: 599, mrp: 749, size: '30–35 cm with 5" pot', light: 'Medium indirect', water: 'Once a week', petSafe: false, stock: 14, art: 'broad', leaf: '#c2185b', pot: '#37474f', desc: 'Green leaves edged in bright pink-red. Colour without flowers.' }),
  p({ sku: 'LL-IN-10', slug: 'calathea-rattlesnake', name: 'Calathea Rattlesnake', botanical: 'Goeppertia insignis', category: 'indoor-plants', price: 749, mrp: 899, size: '35–40 cm with 5" pot', light: 'Medium indirect', water: 'Keep soil lightly moist', petSafe: true, stock: 8, art: 'lily', leaf: '#558b2f', pot: '#d9c7a7', desc: 'Wavy, patterned leaves with purple undersides that fold up at night.' }),
  p({ sku: 'LL-IN-11', slug: 'spider-plant', name: 'Spider Plant', botanical: 'Chlorophytum comosum', category: 'indoor-plants', price: 299, mrp: 349, size: '25–30 cm with 4" pot', light: 'Bright indirect', water: 'Once a week', petSafe: true, stock: 26, art: 'blades', leaf: '#9ccc65', pot: '#efe9df', desc: 'Arching striped leaves and baby plantlets you can pot up and give away.' }),
  p({ sku: 'LL-IN-12', slug: 'snake-plant-laurentii', name: 'Snake Plant Laurentii', botanical: 'Dracaena trifasciata', category: 'indoor-plants', price: 499, mrp: 649, size: '40–50 cm with 6" pot', light: 'Low to bright indirect', water: 'Every 2–3 weeks', petSafe: false, stock: 20, art: 'blades', leaf: '#33691e', pot: '#c96f4a', desc: 'Tall, sword-like leaves with yellow edges. Nearly indestructible and great in bedrooms.' }),
  p({ sku: 'LL-IN-13', slug: 'snake-plant-moonshine', name: 'Snake Plant Moonshine', botanical: 'Dracaena trifasciata', category: 'indoor-plants', price: 649, mrp: 799, size: '35–40 cm with 6" ceramic pot', light: 'Low to bright indirect', water: 'Every 2–3 weeks', petSafe: false, stock: 11, art: 'blades', leaf: '#a5c8a0', pot: '#efe9df', desc: 'A silvery-green snake plant that looks almost frosted. Same easy care as its cousins.' }),
  p({ sku: 'LL-IN-14', slug: 'snake-plant-cylindrica', name: 'Snake Plant Cylindrica', botanical: 'Dracaena angolensis', category: 'indoor-plants', price: 549, mrp: 699, size: '30–40 cm with 5" pot', light: 'Low to bright indirect', water: 'Every 3 weeks', petSafe: false, stock: 0, art: 'cylinder', leaf: '#558b2f', pot: '#37474f', desc: 'Round, spear-like leaves that fan out from the base. Architectural and very low effort.' }),
  p({ sku: 'LL-IN-15', slug: 'boston-fern', name: 'Boston Fern', botanical: 'Nephrolepis exaltata', category: 'indoor-plants', price: 399, mrp: 499, size: '30–35 cm with 6" hanging pot', light: 'Medium indirect, humid', water: 'Keep soil moist', petSafe: true, stock: 13, art: 'fern', leaf: '#7cb342', pot: '#d9c7a7', desc: 'Soft, arching fronds that love a humid bathroom.' }),
  p({ sku: 'LL-IN-16', slug: 'philodendron-birkin', name: 'Philodendron Birkin', botanical: 'Philodendron', category: 'indoor-plants', price: 899, mrp: 1099, size: '25–30 cm with 5" pot', light: 'Bright indirect', water: 'Once a week', petSafe: false, stock: 7, art: 'broad', leaf: '#43a047', pot: '#efe9df', desc: 'Dark leaves with fine cream pinstripes. Every new leaf has a slightly different pattern.' }),

  // ---- outdoor plants
  p({ sku: 'LL-OUT-01', slug: 'tulsi-holy-basil', name: 'Tulsi (Holy Basil)', botanical: 'Ocimum tenuiflorum', category: 'outdoor-plants', price: 149, mrp: 199, size: '20–25 cm with 5" pot', light: 'Full sun', water: 'Daily in summer', petSafe: true, stock: 50, art: 'herb', leaf: '#558b2f', pot: '#c96f4a', desc: 'Rama tulsi for the balcony or courtyard. Fragrant leaves for kadha and chai.' }),
  p({ sku: 'LL-OUT-02', slug: 'hibiscus-red', name: 'Hibiscus (Red)', botanical: 'Hibiscus rosa-sinensis', category: 'outdoor-plants', price: 299, mrp: 399, size: '35–45 cm with 6" pot', light: 'Full sun', water: 'Every 2 days', petSafe: true, stock: 21, art: 'flower', leaf: '#d32f2f', pot: '#c96f4a', desc: 'Big red flowers almost all year. A temple-garden classic.' }),
  p({ sku: 'LL-OUT-03', slug: 'bougainvillea-pink', name: 'Bougainvillea (Pink)', botanical: 'Bougainvillea glabra', category: 'outdoor-plants', price: 349, mrp: 449, size: '40–50 cm with 6" pot', light: 'Full sun', water: 'Twice a week', petSafe: true, stock: 17, art: 'flower', leaf: '#e91e63', pot: '#d9c7a7', desc: 'Sheets of magenta colour on a sunny wall. Loves heat and a little neglect.' }),
  p({ sku: 'LL-OUT-04', slug: 'curry-leaf-plant', name: 'Curry Leaf Plant', botanical: 'Murraya koenigii', category: 'outdoor-plants', price: 249, mrp: 299, size: '30–40 cm with 6" pot', light: 'Full sun', water: 'Every 2 days', petSafe: true, stock: 28, art: 'tree', leaf: '#33691e', pot: '#c96f4a', desc: 'Fresh kadi patta for your tadka, straight from the balcony.' }),
  p({ sku: 'LL-OUT-05', slug: 'mogra-jasmine', name: 'Mogra (Arabian Jasmine)', botanical: 'Jasminum sambac', category: 'outdoor-plants', price: 299, mrp: 349, size: '30–35 cm with 6" pot', light: 'Full sun', water: 'Every 2 days', petSafe: true, stock: 19, art: 'flower', leaf: '#fafafa', pot: '#c96f4a', desc: 'Intensely fragrant white flowers from April to August.' }),
  p({ sku: 'LL-OUT-06', slug: 'lemon-plant', name: 'Lemon Plant (Grafted)', botanical: 'Citrus limon', category: 'outdoor-plants', price: 449, mrp: 599, size: '45–60 cm with 8" pot', light: 'Full sun', water: 'Twice a week', petSafe: true, stock: 10, art: 'tree', leaf: '#558b2f', pot: '#d9c7a7', desc: 'A grafted plant that can fruit in its first year. Needs a sunny terrace.' }),
  p({ sku: 'LL-OUT-07', slug: 'adenium-desert-rose', name: 'Adenium (Desert Rose)', botanical: 'Adenium obesum', category: 'outdoor-plants', price: 499, mrp: 649, size: '20–30 cm with 6" pot', light: 'Full sun', water: 'Once a week', petSafe: false, stock: 9, art: 'flower', leaf: '#ec407a', pot: '#37474f', desc: 'A swollen bonsai-like trunk topped with pink flowers. Thrives in heat.' }),
  p({ sku: 'LL-OUT-08', slug: 'rosemary', name: 'Rosemary', botanical: 'Salvia rosmarinus', category: 'outdoor-plants', price: 249, mrp: 299, size: '20–25 cm with 5" pot', light: 'Full sun', water: 'When the top soil is dry', petSafe: true, stock: 16, art: 'herb', leaf: '#5d7f5d', pot: '#efe9df', desc: 'A fragrant herb for cooking and for brushing past on the way out.' }),
  p({ sku: 'LL-OUT-09', slug: 'aloe-vera', name: 'Aloe Vera', botanical: 'Aloe barbadensis', category: 'outdoor-plants', price: 199, mrp: 249, size: '20–25 cm with 5" pot', light: 'Full sun to bright', water: 'Every 2 weeks', petSafe: false, stock: 35, art: 'succulent', leaf: '#7cb342', pot: '#c96f4a', desc: 'Soothing gel for sunburns and kitchen burns. Happy in a hot window too.' }),

  // ---- planters
  p({ sku: 'LL-PT-01', slug: 'ceramic-planter-white-6in', name: 'Glazed Ceramic Planter, White (6")', category: 'planters', price: 449, mrp: 549, size: '6" diameter, drainage hole + saucer', stock: 30, art: 'pot', leaf: '#ffffff', pot: '#efe9df', desc: 'A clean glossy white pot that suits every plant. Comes with a matching saucer.' }),
  p({ sku: 'LL-PT-02', slug: 'terracotta-pot-8in', name: 'Terracotta Pot (8")', category: 'planters', price: 249, mrp: 299, size: '8" diameter, drainage hole', stock: 45, art: 'pot', leaf: '#ffffff', pot: '#c96f4a', desc: 'Hand-thrown terracotta from Khurja. Breathes, so roots stay healthy.' }),
  p({ sku: 'LL-PT-03', slug: 'self-watering-planter-grey', name: 'Self-watering Planter, Grey (7")', category: 'planters', price: 599, mrp: 749, size: '7" with water-level indicator', stock: 20, art: 'pot', leaf: '#ffffff', pot: '#78909c', desc: 'A reservoir that waters for up to two weeks. Ideal if you travel.' }),
  p({ sku: 'LL-PT-04', slug: 'hanging-macrame-planter', name: 'Macramé Hanging Planter', category: 'planters', price: 399, mrp: 499, size: 'Fits 4–6" pots, 90 cm drop', stock: 18, art: 'pot', leaf: '#ffffff', pot: '#d7ccc8', desc: 'Hand-knotted cotton hanger for trailing plants.' }),
  p({ sku: 'LL-PT-05', slug: 'matte-black-planter-10in', name: 'Matte Black Planter (10")', category: 'planters', price: 899, mrp: 1099, size: '10" diameter, drainage hole', stock: 12, art: 'pot', leaf: '#ffffff', pot: '#263238', desc: 'A heavy, modern pot for floor plants like monstera and fiddle leaf fig.' }),
  p({ sku: 'LL-PT-06', slug: 'balcony-rail-planter', name: 'Balcony Rail Planter (2 ft)', category: 'planters', price: 549, mrp: 649, size: '60 cm long, fits rails up to 6 cm', stock: 14, art: 'pot', leaf: '#ffffff', pot: '#558b2f', desc: 'Hooks over the railing to grow herbs and flowers in a tiny space.' }),

  // ---- plant care
  p({ sku: 'LL-PC-01', slug: 'organic-potting-mix-5kg', name: 'Organic Potting Mix (5 kg)', category: 'plant-care', price: 299, mrp: 349, size: '5 kg bag', stock: 60, art: 'bag', leaf: '#6d4c41', pot: '#8d6e63', desc: 'Cocopeat, compost and perlite, ready to use for almost every houseplant.' }),
  p({ sku: 'LL-PC-02', slug: 'vermicompost-2kg', name: 'Vermicompost (2 kg)', category: 'plant-care', price: 199, mrp: 249, size: '2 kg bag', stock: 55, art: 'bag', leaf: '#5d4037', pot: '#a1887f', desc: 'Earthworm compost to mix in every couple of months.' }),
  p({ sku: 'LL-PC-03', slug: 'neem-oil-spray', name: 'Cold-pressed Neem Oil Spray', category: 'plant-care', price: 249, mrp: 299, size: '250 ml spray bottle', stock: 40, art: 'bottle', leaf: '#827717', pot: '#c0ca33', desc: 'A gentle organic spray for mealybugs, aphids and spider mites.' }),
  p({ sku: 'LL-PC-04', slug: 'pruning-shears', name: 'Bypass Pruning Shears', category: 'plant-care', price: 449, mrp: 549, size: '20 cm, carbon steel', stock: 22, art: 'tool', leaf: '#455a64', pot: '#ef6c00', desc: 'Sharp shears for clean cuts on stems up to 15 mm.' }),
  p({ sku: 'LL-PC-05', slug: 'watering-can-1l', name: 'Indoor Watering Can (1 L)', category: 'plant-care', price: 349, mrp: 399, size: '1 litre, long spout', stock: 25, art: 'can', leaf: '#00897b', pot: '#26a69a', desc: 'A long thin spout that reaches under leaves without splashing.' }),
  p({ sku: 'LL-PC-06', slug: 'decorative-pebbles', name: 'Decorative White Pebbles (1 kg)', category: 'plant-care', price: 179, mrp: 229, size: '1 kg pouch', stock: 33, art: 'pebbles', leaf: '#eceff1', pot: '#b0bec5', desc: 'Top-dress your pots for a finished look. Also helps keep fungus gnats away.' }),
]

export const FEATURED = ['money-plant-golden-pothos', 'areca-palm', 'peace-lily', 'monstera-deliciosa', 'tulsi-holy-basil', 'jade-plant', 'ceramic-planter-white-6in', 'organic-potting-mix-5kg']

export const FREE_DELIVERY_FROM = 799
export const DELIVERY_FEE = 99
export const PAGE_SIZE = 8

export const bySku = (sku: string) => PRODUCTS.find((x) => x.sku === sku)
export const bySlug = (slug: string) => PRODUCTS.find((x) => x.slug === slug)
