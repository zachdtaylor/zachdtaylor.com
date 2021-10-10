import type { MetaFunction } from "remix";
import { Link } from "remix";
import NavBar from "~/components/navbar";
import Layout from "~/components/layout";
import Logo from "~/components/logo";

export let meta: MetaFunction = () => {
  return {
    title: "Home",
    description: "Come see what Zach Taylor has to offer.",
  };
};

function HomeHero() {
  return (
    <div className="py-36 grid grid-flow-row md:grid-cols-2">
      <div className="md:my-auto">
        <p className="text-4xl mb-2">
          Hi, I'm <span className="text-purple-400">Zach</span> Taylor.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-xl">
          I'm passionate about a lot of things. Code is one of my favorites.
        </p>
      </div>
      <Logo />
    </div>
  );
}

type LinkCardProps = {
  to: string;
  children: React.ReactNode;
};

function LinkCard({ to, children }: LinkCardProps) {
  return (
    <Link to={to}>
      <div className="p-24 text-center hover:text-purple-400 rounded-md bg-gray-100 dark:bg-gray-700 text-5xl h-full">
        {children}
      </div>
    </Link>
  );
}

export default function Index() {
  return (
    <div>
      <NavBar />
      <Layout>
        <HomeHero />
        <div className="py-36 grid grid-flow-row md:grid-cols-2 gap-4">
          <LinkCard to="/blog">Read My Blog</LinkCard>
          <LinkCard to="/projects">See My Projects</LinkCard>
          <LinkCard to="/talks">Watch My Talks</LinkCard>
          <LinkCard to="/about">About Me</LinkCard>
        </div>
      </Layout>
    </div>
  );
}
