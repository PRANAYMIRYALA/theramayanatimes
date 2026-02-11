import ArticleCard from '@/components/ArticleCard';
import FeaturedNews from '@/components/FeaturedNews';
import Header from '@/components/Header';
import TagList from '@/components/TagList';
import TrendingSidebar from '@/components/TrendingSidebar';
import { getFeaturedNews, getLatestNews, getTrendingNews } from '@/lib/news';

const categoryTags = ['India', 'World', 'Tech', 'AI'];

export default function HomePage({ searchParams }) {
  const category = searchParams?.category;
  const featured = getFeaturedNews();
  const latest = getLatestNews();
  const filteredLatest = category ? latest.filter((item) => item.category === category) : latest;
  const trending = getTrendingNews();

  return (
    <div>
      <Header />
      <main className="container-news py-8">
        <div className="mb-8">
          <FeaturedNews article={featured} />
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <section className="space-y-6 lg:col-span-2">
            <div className="flex flex-col gap-3 border-b border-neutral-200 pb-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="font-serif text-3xl font-bold text-neutral-900">
                Latest News {category ? `: ${category}` : ''}
              </h2>
              <TagList tags={categoryTags} />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {filteredLatest.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </section>

          <TrendingSidebar items={trending} />
        </div>
      </main>
    </div>
  );
}
