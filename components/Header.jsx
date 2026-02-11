import Link from 'next/link';
import BreakingTicker from './BreakingTicker';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'India', href: '/?category=India' },
  { label: 'World', href: '/?category=World' },
  { label: 'Tech', href: '/?category=Tech' },
  { label: 'AI', href: '/?category=AI' },
];

export default function Header() {
  return (
    <header className="border-b border-neutral-200">
      <BreakingTicker />
      <div className="container-news py-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <Link href="/" className="font-serif text-3xl font-bold tracking-wide text-neutral-950">
            THE RAMAYANA TIMES
          </Link>
          <nav className="flex flex-wrap gap-4 text-sm font-semibold uppercase tracking-wide text-neutral-700">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="hover:text-red-700">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
