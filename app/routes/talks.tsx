import type { MetaFunction } from "remix";
import { ThinLayout } from "~/components/layout";
import { ItemPreview } from "~/components/lib";

export let meta: MetaFunction = () => {
  return {
    title: "Talks",
    description: "Watch talks by Zach Taylor.",
  };
};

export default function Talks() {
  return (
    <ThinLayout>
      <h1 className="text-4xl py-16">Talks</h1>
      <ul>
        <ItemPreview
          external
          to="https://www.youtube.com/watch?v=Ge_kMRt1bBI"
          title="Improving Your Apps with Custom Hooks and React-Query"
          description="In this talk I over two things that have greatly helped me improve the quality of my React code: custom hooks and react-query."
          date="March 31, 2021"
        />
      </ul>
    </ThinLayout>
  );
}
