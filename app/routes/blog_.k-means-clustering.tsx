import { redirect } from "@remix-run/node";

export function loader() {
  return redirect('/blog/k-means-clustering.html')
}