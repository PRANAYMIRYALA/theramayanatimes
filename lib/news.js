import newsData from '@/data/news.json';

function sortByDateDesc(items) {
  return [...items].sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getAllNews() {
  return sortByDateDesc(newsData);
}

export function getFeaturedNews() {
  return getAllNews()[0] || null;
}

export function getLatestNews() {
  return getAllNews();
}

export function getTrendingNews() {
  return getAllNews().slice(0, 5);
}

export function getRelatedNews(category, slug) {
  return getAllNews()
    .filter((item) => item.category === category && item.slug !== slug)
    .slice(0, 3);
}

export function getNewsBySlug(slug) {
  return getAllNews().find((item) => item.slug === slug) || null;
}
