export interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: 'stress' | 'anxiete';
  publishedAt: string;
  readingTime: number;
  author: {
    name: string;
    avatar: string;
  };
  image: string;
  tags: string[];
  metaDescription: string;
  keywords: string[];
  references?: Array<{
    title: string;
    url: string;
    source: string;
    year?: string;
  }>;
}
