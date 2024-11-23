import React from 'react';
import { Calendar } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'iPad Air vs iPad Pro: Which One Is Right for You?',
      excerpt: 'A comprehensive comparison of iPad Air and iPad Pro to help you make an informed decision...',
      date: '2024-03-15',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      title: 'Best iPads for Students in 2024',
      excerpt: 'Discover the top iPads for studying, note-taking, and academic success...',
      date: '2024-03-10',
      image: 'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      title: 'Essential iPad Accessories for Productivity',
      excerpt: 'A guide to must-have accessories to maximize your iPad experience...',
      date: '2024-03-05',
      image: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">iPad Guide Blog</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay up to date with the latest iPad models, buying guides, and tech tips.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                <Calendar size={16} />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <h2 className="text-xl font-bold mb-2 hover:text-blue-600">
                <a href="#">{post.title}</a>
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <a
                href="#"
                className="text-blue-600 font-medium hover:text-blue-700"
              >
                Read More →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}