'use client';

import { useEffect, useState } from 'react';
import { Article } from '@/types';

export default function ArticleList() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch('/api/articles')
      .then(res => res.json())
      .then(data => setArticles(Array.isArray(data) ? data : []));
  }, []);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {articles.map(article => (
        <article key={article.id} className="border rounded-lg overflow-hidden">
          {article.images?.[0] && (
            <img 
              src={article.images[0].url}
              alt={article.images[0].caption}
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-4">
            <h2 className="text-xl font-bold">{article.title}</h2>
            <p className="mt-2 text-gray-600">{article.content}</p>
          </div>
        </article>
      ))}
    </div>
  );
}