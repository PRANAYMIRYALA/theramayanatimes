import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedNews({ article }) {
  if (!article) return null;

  return (
    <article className="grid gap-4 border-b border-neutral-200 pb-8 md:grid-cols-2 md:gap-6">
      <div className="relative min-h-64 overflow-hidden rounded">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-red-700">Featured Story</p>
        <Link href={`/news/${article.slug}`}>
          <h1 className="font-serif text-3xl font-bold leading-tight text-neutral-950 hover:text-red-700 sm:text-4xl">
            {article.title}
          </h1>
        </Link>
        <p className="text-sm text-neutral-500">{article.date}</p>
        <p className="text-base leading-7 text-neutral-700">{article.content}</p>
      </div>
    </article>
  );
}
