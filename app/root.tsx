import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import Footer from "./components/footer";
import NavBar from "./components/navbar";

import tailwindUrl from "~/styles/tailwind.css";
import { Links, LiveReload, Meta, Outlet, useRouteError } from "@remix-run/react";

function ensureSecure(request: Request) {
  const proto = request.headers.get("x-forwarded-proto");
  if (proto === "http") {
    const secureUrl = new URL(request.url);
    secureUrl.protocol = "https:";
    throw redirect(secureUrl.toString());
  }
}

export function links() {
  return [{ rel: "stylesheet", href: tailwindUrl }];
}

export function loader({ request }: LoaderFunctionArgs) {
  ensureSecure(request);
  return null;
}

function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg" />
        <Meta />
        <Links />
      </head>
      <body className="dark:text-white dark:bg-gray-800 text-gray-700 h-screen flex flex-col text-lg">
        {children}

        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <NavBar />
      <main className="mb-20">
        <Outlet />
      </main>
      <Footer />
    </Document>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return (
    <Document>
      <h1>App Error</h1>
      <p>Oops, something went wrong. 😕</p>
      <pre>{error instanceof Error ? error.message : null}</pre>
    </Document>
  );
}
