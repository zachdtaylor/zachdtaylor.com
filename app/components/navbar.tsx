import React from "react";
import { Link, NavLink } from "remix";

const LINKS = [
  { name: "Blog", to: "/blog" },
  { name: "Projects", to: "/projects" },
  { name: "Talks", to: "/talks" },
  { name: "About", to: "/about" },
];

type NavBarItemProps = {
  to: string;
  children: React.ReactNode;
};

function NavBarLink({ to, children }: NavBarItemProps) {
  return (
    <li className="px-5 pt-3 pb-2 leading-none">
      <NavLink to={to} className="text-lg">
        {children}
      </NavLink>
    </li>
  );
}

export default function NavBar() {
  return (
    <nav className="flex flex-row p-10 px-8 md:px-20">
      <div className="pr-12 py-2 text-2xl">
        <Link to="/">Zach Taylor</Link>
      </div>
      <ul className="flex flex-row">
        {LINKS.map((link) => (
          <NavBarLink key={link.to} to={link.to}>
            {link.name}
          </NavBarLink>
        ))}
      </ul>
    </nav>
  );
}
