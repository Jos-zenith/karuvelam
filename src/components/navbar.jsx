import { Link } from "react-router-dom";

export default function NavBar() {
  const items = [
    { href: "/", label: "HOME" },
    { href: "/problem", label: "CRISIS" },
    { href: "/impact", label: "IMPACT" },
    { href: "/engine", label: "B2B ENGINE" },
    { href: "/moat", label: "MOAT" },
    { href: "/restoration", label: "RESTORATION" },
    { href: "/dataviz", label: "DATA VIZ" },
    { href: "/calculator", label: "CALCULATOR" },
    { href: "/local", label: "LOCAL IMPACT" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-020908/80 backdrop-blur border-b border-emerald-900">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 text-xs tracking-[0.18em]">
        <Link to="/" className="font-semibold text-emerald-300">
          VICTORI
        </Link>
        <div className="flex flex-wrap gap-3">
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-[10px] md:text-[11px] uppercase text-gray-300 hover:text-techblue"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
