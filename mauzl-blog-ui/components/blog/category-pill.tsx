import Link from "next/link";

interface CategoryPillProps {
  name: string;
  icon: string;
  colorClass: string;
}

export function CategoryPill({ name, icon, colorClass }: CategoryPillProps) {
  return (
    <Link
      href={`/blogs?category=${name.toLowerCase()}`}
      className="group flex items-center gap-2 rounded-full border px-4 py-2 transition-colors hover:border-primary"
    >
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${colorClass}`}
      >
        <span className="text-lg">{icon}</span>
      </div>
      <span className="font-medium group-hover:text-primary transition-colors">
        {name}
      </span>
    </Link>
  );
}
