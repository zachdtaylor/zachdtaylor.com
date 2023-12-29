import { ThinLayout } from "~/components/layout";
import { ItemPreview } from "~/components/lib";

export function meta() {
  return [
    { title: "Projects" },
    { name: "description", content: "Check out Zach Taylor's projects." },
  ];
}

export default function Projects() {
  return (
    <ThinLayout>
      <h1 className="text-4xl py-16">Projects</h1>
      <ul>
        <ItemPreview
          external
          to="https://birdie.fly.dev/"
          title="schmerdle"
          description="A wordle clone written completely with Phoenix LiveView."
        />
        <ItemPreview
          external
          to="https://github.com/zachtylr21/use-async-machine"
          title="use-async-machine"
          description="A hook for using an async state machine"
        />
        <ItemPreview
          external
          to="https://github.com/zachtylr21/react-ssr"
          title="react-ssr"
          description="An experimental React and esbuild-based web framework"
        />
        <ItemPreview
          external
          to="https://github.com/zachtylr21/tweet-on-time-remix"
          title="tweet-on-time"
          description="A simple web app that lets you schedule tweets to be sent at a specific time. Written with Remix."
        />
      </ul>
    </ThinLayout>
  );
}
