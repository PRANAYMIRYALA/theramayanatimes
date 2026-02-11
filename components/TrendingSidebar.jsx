import Link from 'next/link';

export default function TrendingSidebar({ items }) {
  return (
    <aside className="rounded border border-neutral-200 p-4">
      <h3 className="mb-4 font-serif text-2xl font-bold text-neutral-900">Trending</h3>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={item.id} className="border-b border-neutral-200 pb-4 last:border-0 last:pb-0">
            <p className="text-xs font-bold text-red-700">#{index + 1}</p>
            <Link href={`/news/${item.slug}`} className="font-serif text-lg font-semibold hover:text-red-700">
              {item.title}
            </Link>
            <p className="text-xs uppercase tracking-wide text-neutral-500">{item.category}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
