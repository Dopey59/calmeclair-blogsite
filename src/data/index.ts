// Auto-generated index file
import { article1 } from './articles/article-1';

export const allArticles = [
  article1
];

export function getArticleById(id: number) {
  return allArticles.find(article => article.id === id);
}

export function getArticleBySlug(slug: string) {
  return allArticles.find(article => article.slug === slug);
}

export function getArticlesByCategory(category: 'stress' | 'anxiete') {
  return allArticles.filter(article => article.category === category);
}

export function getLatestArticles(limit: number = 10) {
  return [...allArticles]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}
