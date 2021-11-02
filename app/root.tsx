import { LinksFunction, LoaderFunction, useLoaderData } from "remix";
import { Meta, Links, Scripts, LiveReload, Outlet, redirect } from "remix";
import Footer from "./components/footer";
import NavBar from "./components/navbar";

import tailwindUrl from "./styles/tailwind.css";

function ensureSecure(request: Request) {
  const proto = request.headers.get("x-forwarded-proto");
  if (proto === "http") {
    const secureUrl = new URL(request.url);
    secureUrl.protocol = "https:";
    throw redirect(secureUrl.toString());
  }
}

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindUrl }];
};

export let loader: LoaderFunction = ({ request }) => {
  ensureSecure(request);
  return null;
};

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

        <Scripts />
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
