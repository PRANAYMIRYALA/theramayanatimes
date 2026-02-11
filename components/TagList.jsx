export default function TagList({ tags }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-neutral-300 px-3 py-1 text-xs font-semibold tracking-wide text-neutral-700"
        >
          #{tag}
        </span>
      ))}
    </div>
  );
}
