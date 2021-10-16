import type { LinksFunction } from "remix";
import { Meta, Links, Scripts, LiveReload, Outlet } from "remix";
import NavBar from "./components/navbar";

import tailwindUrl from "./styles/tailwind.css";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindUrl }];
};

function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <Meta />
        <Links />
      </head>
      <body className="dark:text-white dark:bg-gray-800 text-gray-700">
        {children}

        {/* <Scripts /> */}
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <NavBar />
      <Outlet />
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document>
      <h1>App Error</h1>
      <pre>{error.message}</pre>
      <p>
        Replace this UI with what you want users to see when your app throws
        uncaught errors.
      </p>
    </Document>
  );
}
