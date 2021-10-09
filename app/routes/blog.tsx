import type { MetaFunction } from "remix";
import NavBar from "~/components/navbar";

export let meta: MetaFunction = () => {
  return {
    title: "Blog",
    description: "Read Zach Taylor's blog.",
  };
};

export default function Blog() {
  return (
    <div>
      <NavBar />
    </div>
  );
}
