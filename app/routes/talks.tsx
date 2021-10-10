import type { MetaFunction } from "remix";
import NavBar from "~/components/navbar";

export let meta: MetaFunction = () => {
  return {
    title: "Talks",
    description: "Watch talks by Zach Taylor.",
  };
};

export default function Talks() {
  return (
    <div>
      <NavBar />
    </div>
  );
}
