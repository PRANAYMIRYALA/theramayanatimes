import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ArticleCard from '@/components/ArticleCard';
import Header from '@/components/Header';
import ShareButtons from '@/components/ShareButtons';
import { getNewsBySlug, getRelatedNews } from '@/lib/news';

export function generateMetadata({ params }) {
  const article = getNewsBySlug(params.slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: article.title,
    description: article.content,
    openGraph: {
      title: article.title,
      description: article.content,
      images: [{ url: article.image }],
      type: 'article',
    },
  };
}

export default function ArticlePage({ params }) {
  const article = getNewsBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const related = getRelatedNews(article.category, article.slug);

  return (
    <div>
      <Header />
      <main className="container-news py-8">
        <article className="mx-auto max-w-4xl space-y-6 border-b border-neutral-200 pb-8">
          <p className="inline-block rounded bg-red-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-700">
            {article.category}
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight text-neutral-950 md:text-5xl">
            {article.title}
          </h1>
          <p className="text-sm text-neutral-500">{article.date}</p>

          <div className="relative h-72 overflow-hidden rounded md:h-[420px]">
            <Image src={article.image} alt={article.title} fill className="object-cover" sizes="100vw" priority />
          </div>

          <p className="text-lg leading-8 text-neutral-800">{article.content}</p>

          <div className="space-y-3 border-t border-neutral-200 pt-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-neutral-600">Share this story</p>
            <ShareButtons title={article.title} />
          </div>
        </article>

        <section className="mx-auto mt-10 max-w-6xl space-y-6">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
            <h2 className="font-serif text-3xl font-bold text-neutral-900">Related News</h2>
            <Link href="/" className="text-sm font-semibold uppercase tracking-wide text-red-700 hover:text-red-900">
              Back to Home
            </Link>
          </div>
          {related.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <ArticleCard key={item.id} article={item} />
              ))}
            </div>
          ) : (
            <p className="text-neutral-600">No related articles available at the moment.</p>
          )}
        </section>
      </main>
    </div>
  );
}
