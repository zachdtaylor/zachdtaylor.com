import type { MetaFunction } from "remix";
import NavBar from "~/components/navbar";

export let meta: MetaFunction = () => {
  return {
    title: "About",
    description: "Learn more about Zach Taylor.",
  };
};

export default function About() {
  return (
    <div>
      <NavBar />
    </div>
  );
}
