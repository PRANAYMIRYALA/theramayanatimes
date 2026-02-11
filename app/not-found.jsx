import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="container-news py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-red-700">404</p>
      <h1 className="mt-2 font-serif text-4xl font-bold text-neutral-900">Article not found</h1>
      <p className="mt-4 text-neutral-600">The story you are trying to read may have been moved or removed.</p>
      <Link href="/" className="mt-8 inline-block rounded bg-neutral-900 px-6 py-3 font-semibold text-white hover:bg-neutral-700">
        Return to homepage
      </Link>
    </main>
  );
}
