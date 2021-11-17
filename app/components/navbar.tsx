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
  return (
    <nav className="md:flex flex-row p-10 px-8 md:px-20">
      <div className="flex flex-row justify-between">
        <div className="pr-12 py-2 text-2xl">
          <Link to="/">Zach Taylor</Link>
        </div>
        <div
          id="nav-menu-button"
          className="flex items-center md:hidden"
          role="button"
          tabIndex={0}
        >
          <MenuIcon />
        </div>
      </div>
      <ul
        id="nav-list"
        className="mt-5 border-t-2 border-gray-500 md:mt-0 md:border-t-0 hidden md:flex flex-col md:flex-row"
      >
        {LINKS.map((link) => (
          <NavBarLink key={link.to} to={link.to}>
            {link.name}
          </NavBarLink>
        ))}
      </ul>
      {/* No need to load all of React for one button */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('nav-menu-button').onclick = () => {
              const list = document.getElementById('nav-list')
              if (list.classList.contains('hidden')) {
                list.classList.remove('hidden')
              } else {
                list.classList.add('hidden')
              }
            }
          })
        `,
        }}
      />
    </nav>
  );
}
