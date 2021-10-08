import type { MetaFunction, LinksFunction, LoaderFunction } from "remix";
import { useRouteData } from "remix";

export let meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!",
  };
};

export let links: LinksFunction = () => {
  return [];
};

// export let loader: LoaderFunction = async () => {};

export default function Index() {
  let data = useRouteData();

  return <div style={{ textAlign: "center", padding: 20 }}>Hi</div>;
}
