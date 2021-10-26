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
    <li className="border-b-2 md:border-b-0 border-gray-500 md:px-5 py-5 md:pt-3 md:pb-2 leading-none">
      <NavLink to={to} className="text-lg">
        {children}
      </NavLink>
    </li>
  );
}

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="my-0"
      viewBox="0 0 24 24"
      width="45"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}

export default function NavBar() {
  const [mobileMenuActive, setMobileMenuActive] = React.useState(false);
  return (
    <nav className="md:flex flex-row p-10 px-8 md:px-20">
      <div className="flex flex-row justify-between">
        <div className="pr-12 py-2 text-2xl">
          <Link to="/">Zach Taylor</Link>
        </div>
        <div
          className="flex items-center md:hidden"
          role="button"
          tabIndex={0}
          onClick={() => setMobileMenuActive((prev) => !prev)}
          onKeyDown={() => setMobileMenuActive((prev) => !prev)}
        >
          <MenuIcon />
        </div>
      </div>
      <ul
        className={`mt-5 border-t-2 border-gray-500 md:mt-0 md:border-t-0 md:flex flex-col md:flex-row ${
          !mobileMenuActive && "hidden"
        }`}
      >
        {LINKS.map((link) => (
          <NavBarLink key={link.to} to={link.to}>
            {link.name}
          </NavBarLink>
        ))}
      </ul>
    </nav>
  );
}
