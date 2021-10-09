import React from "react";
import { Link } from "remix";

const LINKS = [
  { name: "Blog", to: "/blog" },
  { name: "About", to: "/about" },
];

type NavBarItemProps = {
  to: string;
  children: React.ReactNode;
};

function NavBarLink({ to, children }: NavBarItemProps) {
  return (
    <li className="px-5 pt-3 pb-2">
      <Link to={to} className="text-lg">
        {children}
      </Link>
    </li>
  );
}

export default function NavBar() {
  return (
    <nav className="flex flex-row p-10 px-16">
      <div className="pr-10 py-2 text-2xl">
        <Link to="/">Zach Taylor</Link>
      </div>
      <ul className="flex flex-row">
        {LINKS.map((link) => (
          <NavBarLink to={link.to}>{link.name}</NavBarLink>
        ))}
      </ul>
    </nav>
  );
}
