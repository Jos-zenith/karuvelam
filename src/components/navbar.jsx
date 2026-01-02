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
    <header className="fixed top-0 inset-x-0 z-40 bg-[#020908]/90 backdrop-blur-md border-b border-emerald-900/60">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3">
        <Link
          to="/"
          className="font-semibold text-emerald-300 text-xs tracking-[0.24em]"
        >
          VICTORI
        </Link>

        {/* smoother on mobile: wrap + smaller tracking */}
        <div className="flex flex-wrap gap-x-3 gap-y-1 justify-end max-w-[75%]">
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-[10px] sm:text-[11px] uppercase text-gray-300 
                         tracking-[0.16em] hover:text-techblue transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

