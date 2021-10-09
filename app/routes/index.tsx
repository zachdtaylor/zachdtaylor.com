import type { MetaFunction } from "remix";
import NavBar from "~/components/navbar";
import Layout from "~/components/layout";

export let meta: MetaFunction = () => {
  return {
    title: "Home",
    description: "Come see what Zach Taylor has to offer.",
  };
};

function HomeHero() {
  return (
    <div className="py-5 flex flex-row">
      <div>
        <p className="text-4xl mb-2">
          Hi, I'm <span className="text-purple-400">Zach</span> Taylor.
        </p>
        <p className="text-gray-400 text-xl">
          I'm passionate about a lot of things. Code is one of my favorites.
        </p>
      </div>
    </div>
  );
}

export default function Index() {
  return (
    <div>
      <NavBar />
      <Layout>
        <HomeHero />
      </Layout>
    </div>
  );
}
