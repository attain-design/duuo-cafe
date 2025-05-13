
import React, { useEffect, useRef } from 'react';
import { Coffee, Cake, Utensils } from 'lucide-react';
import { cn } from '@/lib/utils';
import { initScrollAnimations } from '@/utils/scrollAnimation';

const menuCategories = [
  {
    id: 'kaffee',
    title: 'Unsere Kaffeespezialitäten',
    icon: <Coffee className="h-6 w-6" />,
    items: [
      {
        id: 1,
        name: 'Espresso',
        description: 'Kräftig und aromatisch, frisch zubereitet aus feinsten Bohnen',
        image: 'https://images.unsplash.com/photo-1501747315-124a0eaca060?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 2,
        name: 'Cappuccino',
        description: 'Samtiger Espresso mit cremigem Milchschaum, perfekt ausbalanciert',
        image: 'https://images.unsplash.com/photo-1600056781444-55f3b64235e3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 3,
        name: 'Latte Macchiato',
        description: 'Milder Kaffeegenuss mit extra viel frisch aufgeschäumter Milch',
        image: 'https://images.unsplash.com/photo-1724776771684-3be189d45853?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
  },
  {
    id: 'kuchen',
    title: 'Hausgemachte Kuchen & Desserts',
    icon: <Cake className="h-6 w-6" />,
    items: [
      {
        id: 4,
        name: 'Apfelstrudel',
        description: 'Nach traditionellem Rezept, mit frischen Äpfeln und Zimtzucker',
        image: 'https://images.unsplash.com/photo-1657313938000-23c4322dbe22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 5,
        name: 'Käsekuchen',
        description: 'Cremig und locker, mit knusprigem Mürbeteigboden',
        image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 6,
        name: 'Schokoladentorte',
        description: 'Intensiver Schokoladengenuss mit zartschmelzendem Kern',
        image: 'https://plus.unsplash.com/premium_photo-1715015439764-1e8d37d5c6c9?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
  },
  {
    id: 'snacks',
    title: 'Kleine Gerichte & Snacks',
    icon: <Utensils className="h-6 w-6" />,
    items: [
      {
        id: 7,
        name: 'Avocado Toast',
        description: 'Frisch getoastetes Sauerteigbrot mit cremiger Avocado und Gewürzen',
        image: 'https://images.unsplash.com/photo-1603046891744-1f76eb10aec7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 8,
        name: 'Quiche Lorraine',
        description: 'Klassische Quiche mit Speck und Käse, warm serviert',
        image: 'https://images.unsplash.com/photo-1650844010413-3f24dc1c182b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 9,
        name: 'Mediterranes Sandwich',
        description: 'Mit Mozzarella, sonnengetrockneten Tomaten und frischem Basilikum',
        image: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
  },
];

const Menu = () => {
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  return (
    <section id="menu" className="bg-cafe-light py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-2 text-center text-4xl font-bold text-cafe-dark fade-in-up">Unsere Speisekarte</h2>
        <p className="mb-12 text-center text-lg text-cafe-dark/80 fade-in-up" style={{ transitionDelay: '0.1s' }}>
          Entdecken Sie unsere Auswahl an Kaffeespezialitäten und hausgemachten Leckereien
        </p>

        {menuCategories.map((category, categoryIndex) => (
          <div key={category.id} className="mb-16">
            <div className="mb-8 flex items-center justify-center fade-in-up" style={{ transitionDelay: `${0.2 + categoryIndex * 0.1}s` }}>
              <div className="mr-3 text-cafe-main">{category.icon}</div>
              <h3 className="text-2xl font-bold text-cafe-dark">{category.title}</h3>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item, itemIndex) => (
                <div 
                  key={item.id} 
                  className="menu-item group fade-in-up" 
                  style={{ transitionDelay: `${0.3 + categoryIndex * 0.1 + itemIndex * 0.1}s` }}
                >
                  <div className="relative h-64 overflow-hidden rounded-t-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="menu-item-image"
                    />
                  </div>
                  <div className="bg-white p-6">
                    <h4 className="mb-2 text-xl font-bold text-cafe-dark">{item.name}</h4>
                    <p className="text-cafe-dark/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
