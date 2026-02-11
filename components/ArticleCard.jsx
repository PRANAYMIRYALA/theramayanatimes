import Image from 'next/image';
import Link from 'next/link';

export default function ArticleCard({ article }) {
  return (
    <article className="group space-y-3 border-b border-neutral-200 pb-5">
      <div className="relative h-48 overflow-hidden rounded">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <p className="text-xs font-semibold uppercase tracking-wider text-red-700">{article.category}</p>
      <Link href={`/news/${article.slug}`}>
        <h2 className="font-serif text-xl font-bold leading-snug text-neutral-900 group-hover:text-red-700">
          {article.title}
        </h2>
      </Link>
      <p className="text-sm text-neutral-500">{article.date}</p>
    </article>
  );
}
