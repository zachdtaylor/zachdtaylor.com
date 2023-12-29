import { ThinLayout } from "~/components/layout";
import { ItemPreview } from "~/components/lib";

export function meta() {
  return [
    { title: "Talks" },
    { name: "description", content: "Watch talks by Zach Taylor." },
  ];
}

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
        <ItemPreview
          to="/blog/building-a-simple-search-ui-with-remix"
          title="Building a Simple Search UI with Remix"
          description="I gave this talk at a Remix Utah meetup. Unfortunately, it was not recorded, but it was essentially a talk version of the blog post you can find by clicking the title above."
          date="June 2, 2022"
        />
      </ul>
    </ThinLayout>
  );
}
