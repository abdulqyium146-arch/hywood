import Link from "next/link";

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-gray-100 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-2">
        <ol className="flex items-center flex-wrap gap-1 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-yellow-600 transition-colors">
              Home
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-1">
              <span className="text-gray-400">/</span>
              {item.href ? (
                <Link href={item.href} className="hover:text-yellow-600 transition-colors">
                  {item.name}
                </Link>
              ) : (
                <span style={{ color: "#0B1F3A" }} className="font-medium">
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
