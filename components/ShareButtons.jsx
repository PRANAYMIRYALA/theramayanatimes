'use client';

export default function ShareButtons({ title }) {
  const encodedTitle = encodeURIComponent(title);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const encodedUrl = encodeURIComponent(currentUrl);

  const whatsappUrl = `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
      >
        <span aria-hidden>🟢</span> WhatsApp
      </a>
      <a
        href={twitterUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
      >
        <span aria-hidden>✖</span> Twitter/X
      </a>
    </div>
  );
}
