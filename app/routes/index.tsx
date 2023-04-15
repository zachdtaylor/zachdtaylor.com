import Layout from "~/components/layout";
import Logo from "~/components/logo";

export function meta() {
  return {
    title: "Home",
    description: "Come see what Zach Taylor has to offer.",
  };
}

function HomeHero() {
  return (
    <div className="py-10 md:py-36 grid grid-flow-row md:grid-cols-2">
      <div className="md:my-auto">
        <p className="text-4xl mb-2">
          Hi, I'm <span className="text-purple-400">Zach</span> Taylor.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-xl">
          I'm passionate about a lot of things. Code is one of my favorites.
        </p>
      </div>
      <Logo className="invisible md:visible" />
    </div>
  );
}

export default function Index() {
  return (
    <Layout>
      <HomeHero />
    </Layout>
  );
}
