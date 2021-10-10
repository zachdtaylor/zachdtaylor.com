import type { MetaFunction } from "remix";
import NavBar from "~/components/navbar";

export let meta: MetaFunction = () => {
  return {
    title: "Projects",
    description: "Check out Zach Taylor's projects.",
  };
};

export default function Projects() {
  return (
    <div>
      <NavBar />
    </div>
  );
}
