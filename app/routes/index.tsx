import type { MetaFunction } from "remix";

export let meta: MetaFunction = () => {
  return {
    title: "Home",
    description: "Welcome to remix!",
  };
};

export default function Index() {
  return <div>Hi</div>;
}
