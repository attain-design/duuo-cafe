
import React from 'react';
import { Instagram } from 'lucide-react';

const instagramPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'https://www.instagram.com/',
    alt: 'Frisch zubereiteter Cappuccino mit Latte Art',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1515215316771-2742baa337f4?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'https://www.instagram.com/',
    alt: 'Schokoladen Muffins mit Beeren',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1518739745383-0ef26e9dd7fd?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'https://www.instagram.com/',
    alt: 'Hausgemachte Croissants auf einem Holzbrett',
  },
];

const InstagramFeed = () => {
  return (
    <section id="galerie" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center justify-center">
          <Instagram className="mb-4 h-8 w-8 text-cafe-main" />
          <h2 className="mb-2 text-center text-4xl font-bold text-cafe-dark">Folgen Sie uns auf Instagram</h2>
          <p className="text-center text-lg text-cafe-dark/80">
            @cafe_sonnenschein
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-image overflow-hidden rounded-lg"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="h-80 w-full object-cover transition-all duration-500"
              />
            </a>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-cafe-main px-6 py-3 text-white transition-all duration-300 hover:bg-cafe-dark"
          >
            <Instagram className="mr-2 h-5 w-5" />
            Mehr auf Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
