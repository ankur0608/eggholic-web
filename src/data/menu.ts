export interface MenuItem {
    name: string;
    price: number;
    desc: string;
    eggs?: number;
    imageUrl?: string;
}

export interface MenuCategory {
    id: string;
    label: string;
    bg: string;
    items: MenuItem[];
}

let cachedMenuData: MenuCategory[] | null = null;
let fetchPromise: Promise<MenuCategory[]> | null = null;

export async function fetchDynamicMenu(): Promise<MenuCategory[]> {
    if (cachedMenuData) return cachedMenuData;
    if (fetchPromise) return fetchPromise;

    fetchPromise = (async () => {
        try {
            const res = await fetch('/api/proxy/items');
            if (!res.ok) throw new Error("Failed to fetch menu items");
            const data = await res.json();
            
            if (!data.success || !data.items) {
                cachedMenuData = originalMenuData;
                return originalMenuData;
            }

            const groups: Record<string, MenuItem[]> = {};
            data.items.forEach((item: any) => {
                const cat = item.category || 'Other';
                if (!groups[cat]) groups[cat] = [];
                groups[cat].push({
                    name: item.name,
                    price: item.price,
                    desc: item.description || '',
                    imageUrl: item.imageUrl
                });
            });

            const colors = [
                'F59E0B/1C1C1E', '1C1C1E/F59E0B', 'FFFBEB/D97706',
                'FEF3C7/D97706', 'D97706/FFFBEB', '1C1C1E/FCD34D'
            ];
            
            cachedMenuData = Object.entries(groups).map(([label, items], index) => ({
                id: label.toLowerCase().replace(/\s+/g, '-'),
                label,
                bg: colors[index % colors.length],
                items
            }));
            return cachedMenuData;
        } catch (error) {
            console.error("Error fetching menu:", error);
            cachedMenuData = originalMenuData;
            return originalMenuData;
        } finally {
            fetchPromise = null;
        }
    })();
    return fetchPromise;
}

export const originalMenuData: MenuCategory[] = [
    {
        id: 'starters', label: 'Starters', bg: 'F59E0B/1C1C1E',
        items: [
            { name: 'Vagariyu', price: 100, desc: 'Gujarati spiced egg scramble with aromatic tempering' },
            { name: 'Egg Kofta', price: 120, desc: 'Crispy egg dumplings in a rich tangy masala' },
            { name: 'Egg Salad', price: 100, desc: 'Fresh garden salad topped with sliced boiled eggs' },
            { name: 'Boiled Egg Tadka', price: 110, desc: 'Soft boiled eggs finished with a sizzling spice tadka' },
            { name: 'Boiled Egg Chinese Tadka', price: 130, desc: 'Indo-Chinese twist on boiled eggs with soy and ginger' },
            { name: 'Crunchy Biscuit Pie', price: 120, desc: 'Egg-filled flaky biscuit pie with a satisfying crunch' },
            { name: 'Classic Egg Roll', price: 150, desc: 'Egg and veggie roll wrapped in a soft flaky paratha' },
            { name: 'Schezwan Egg Roll', price: 160, desc: 'Spicy Schezwan sauce egg roll with crunchy vegetables' },
            { name: 'Crispy Italian Omelet', price: 200, desc: 'Golden crispy-edged omelet stuffed with herbs and veggies' },
        ]
    },
    {
        id: 'kheema', label: 'Kheema', bg: '1C1C1E/F59E0B',
        items: [
            { name: 'Green Kheema', price: 130, desc: 'Egg mince tossed with fresh green herbs and spices' },
            { name: 'Red Kheema', price: 130, desc: 'Fiery red masala egg mince with bold flavors' },
            { name: 'Katki Kheema', price: 130, desc: 'Classic Surat-style egg kheema with a local touch' },
            { name: 'Kolhapuri Kheema', price: 140, desc: 'Extra spicy Kolhapuri masala egg mince' },
            { name: 'Garlic Kheema', price: 170, desc: 'Richly flavored egg kheema loaded with roasted garlic' },
            { name: 'Red Gotala', price: 130, desc: 'Mumbai-style egg scramble in a fiery red masala base' },
            { name: 'Green Gotala', price: 130, desc: 'Fresh green herb egg scramble with a tangy Surat spin' },
            { name: 'Egg Goti Gotala', price: 160, desc: 'Chunky egg pieces in bold masala gotala style' },
            { name: 'Egg Bhurji', price: 110, desc: 'Classic scrambled eggs with onions, tomatoes, and spices' },
            { name: 'Lasaniya Kachu', price: 130, desc: 'Aromatic garlic-infused egg preparation, Surat specialty' },
        ]
    },
    {
        id: 'omelet', label: 'Omelet', bg: 'FFFBEB/D97706',
        items: [
            { name: 'Regular Omelet', price: 80, desc: 'Simple two-egg omelet – seasoned and timeless' },
            { name: 'Bombay Omelet', price: 100, desc: 'Mumbai-style masala omelet with onion, chilli, tomato' },
            { name: 'Cheese Omelet', price: 120, desc: 'Fluffy omelet with generous melted cheese filling' },
            { name: 'Desi Masala Omelet', price: 140, desc: 'Packed with desi spices, herbs, and crunchy vegetables' },
            { name: 'American Cheese Omelet', price: 190, desc: 'Thick three-egg omelet loaded with American cheese' },
            { name: 'Limbu Mari Omelet', price: 90, desc: 'Zesty lemon-pepper omelet with a Surat twist' },
            { name: 'Surti Rasawala Omelet', price: 130, desc: 'Surat special – omelet served in a light flavorful gravy' },
            { name: 'Paper Cheese Omelet', price: 100, desc: 'Thin crispy omelet topped with melted cheese' },
        ]
    },
    {
        id: 'halffry', label: 'Half Fry', bg: 'FEF3C7/D97706',
        items: [
            { name: 'Regular Half Fry', price: 100, desc: 'Sunny-side up eggs with a perfectly set yolk' },
            { name: 'Lasan Fry', price: 130, desc: 'Sunny-side up eggs in a fragrant garlic butter base' },
            { name: 'Green Fry', price: 160, desc: 'Eggs fried over a bed of fresh green chilli herb paste' },
            { name: 'Masala Fry', price: 120, desc: 'Eggs fried with a spiced onion-tomato masala' },
            { name: 'Tomato Half Fry', price: 130, desc: 'Soft fried eggs nestled in a tangy tomato gravy' },
        ]
    },
    {
        id: 'rice', label: 'Rice', bg: 'D97706/FFFBEB',
        items: [
            { name: 'Jeera Rice with Egg Dal Tadka', price: 220, desc: 'Fragrant cumin rice with a hearty egg dal tadka' },
            { name: 'Egg Fried Rice', price: 170, desc: 'Wok-tossed fried rice with scrambled eggs and vegetables' },
            { name: 'Special Egg Gupchup Rice', price: 260, desc: "Chef's special puffed rice preparation with eggs" },
            { name: 'Egg Pulao', price: 160, desc: 'Mildly spiced aromatic pulao with whole boiled eggs' },
            { name: 'Egg Biryani', price: 220, desc: 'Slow-cooked layered biryani with boiled eggs and spices' },
        ]
    },
    {
        id: 'specials', label: 'Main Course', bg: '1C1C1E/FCD34D',
        items: [
            { name: 'Egg Makhani', price: 310, eggs: 4, desc: 'Creamy butter tomato gravy with perfectly poached eggs' },
            { name: 'Egg Angara', price: 180, eggs: 2, desc: 'Smoky charcoal-flavored egg curry with bold masalas' },
            { name: 'Egg Mamna', price: 280, eggs: 4, desc: 'Rich nut-based gravy with tender eggs' },
            { name: 'Egg Lahori', price: 180, eggs: 3, desc: 'Lahori masala egg curry with whole eggs' },
            { name: 'Royal Egg Mughlai', price: 300, eggs: 4, desc: 'Regal Mughlai-style eggs in a creamy aromatic curry' },
            { name: 'Caribbean Fry', price: 300, eggs: 4, desc: 'Exotic Caribbean-spiced fried eggs with tropical flair' },
            { name: 'Mexican Fry', price: 280, eggs: 4, desc: 'Salsa and jalapeño-spiced eggs with a Mexican twist' },
            { name: 'Kachchi Lahori', price: 240, eggs: 3, desc: 'Raw-marinated eggs cooked in intense Lahori spices' },
            { name: 'Egg Toofani', price: 280, eggs: 4, desc: 'A fiery stormy egg curry – not for the faint-hearted' },
            { name: 'Malai Kurma', price: 300, eggs: 4, desc: 'Creamy coconut and cream egg korma, mildly spiced' },
            { name: 'Shahi Egg Kurma', price: 280, eggs: 4, desc: 'Royal egg kurma with dry fruits and rich cream sauce' },
            { name: 'Kashmiri Kofta', price: 290, eggs: 4, desc: 'Egg kofta in a Kashmiri saffron and fennel gravy' },
            { name: 'Creamy Malai Rasam', price: 280, eggs: 4, desc: 'Unique fusion of eggs in a creamy malai rasam broth' },
            { name: 'Egg Sunflower', price: 280, eggs: 4, desc: 'Eggs arranged sunflower-style in an aromatic gravy' },
            { name: 'Special Egg Sizzler', price: 399, desc: 'Rice + Starter + Egg Gravy – sizzling on one plate' },
        ]
    }
];
