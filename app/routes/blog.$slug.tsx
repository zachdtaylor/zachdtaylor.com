import { useParams } from "react-router-dom";
import type { MetaFunction } from "remix";

export let meta: MetaFunction = () => {
  return {
    title: "Blog post",
    description: "Welcome to remix!",
  };
};

export default function BlogPost() {
  const params = useParams();
  console.log(params.slug);
  return <div>{params.slug}</div>;
}
