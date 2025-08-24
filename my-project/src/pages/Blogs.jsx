import React from 'react';
import img from '../assets/home.jpg';

const Resources = () => {
  // Placeholder data for the articles.
  const articles = [
    {
      id: 1,
      category: 'Uncategorized',
      title: 'Empowering Your Child: The Importance of Therapy for Everyday Challenges',
      author: 'ADMIN',
      date: 'JUNE 13, 2024',
      image: img, 
      excerpt: 'Navigating Mental Health: Understanding Subtle Symptoms and Diverse Manifestations Parents...',
    },
    {
      id: 2,
      category: 'Uncategorized',
      title: 'Finding Your Mental Health Match: A Guide to Online Therapy Sessions with Vichaaran',
      author: 'ADMIN',
      date: 'JUNE 13, 2024',
      image: img,
      excerpt: 'Finding Your Mental Health Match: A Guide to Online Therapy...',
    },
    {
      id: 3,
      category: 'Uncategorized',
      title: 'Nurturing Interpersonal Relationships: The Heart of Mental Health',
      author: 'ADMIN',
      date: 'JUNE 7, 2024',
      image: img,
      excerpt: 'Nurturing Interpersonal Relationships: The Heart of Mental Health Interpersonal relationships...',
    },
    {
      id: 4,
      category: 'Uncategorized',
      title: 'Embracing Vulnerability: Nurturing Mental Health in Romantic Relationships',
      author: 'ADMIN',
      date: 'JUNE 7, 2024',
      image: img,
      excerpt: 'Embracing Vulnerability: Nurturing Mental Health in Romantic Relationships Learning to...',
    },
    // Add more articles here as needed
  ];

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <main className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map(article => (
            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="w-full h-48 overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-sm font-semibold text-gray-500 uppercase">{article.category}</span>
                <h2 className="text-xl font-bold text-gray-800 mt-2 mb-2">{article.title}</h2>
                <div className="text-xs text-gray-500 mb-4">
                  <span className="font-semibold">{article.author}</span> | <span>{article.date}</span>
                </div>
                <p className="text-gray-600 flex-grow">{article.excerpt}</p>
                <a href="#" className="mt-4 text-blue-600 hover:underline font-semibold">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Resources;