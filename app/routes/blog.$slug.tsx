import { useParams } from "react-router";
import type { MetaFunction, LinksFunction, LoaderFunction } from "remix";

export let meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!",
  };
};

export let links: LinksFunction = () => {
  return [];
};

export let loader: LoaderFunction = () => {
  return "hi";
};

export default function BlogPost() {
  const params = useParams();
  return <div>{params.slug}</div>;
}
