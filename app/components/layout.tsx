import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return <div className="px-8 md:px-20">{children}</div>;
}

export function BlogLayout({ children }: LayoutProps) {
  return <div className="px-8 md:px-52">{children}</div>;
}
