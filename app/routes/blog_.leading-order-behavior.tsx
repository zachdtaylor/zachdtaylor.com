import { redirect } from "@remix-run/node";

export function loader() {
  return redirect("/blog/leading-order-behavior.html");
}
