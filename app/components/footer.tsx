import { GitHubIcon, TwitterIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t-2 border-gray-600 w-full px-8 md:px-20 py-10 mt-auto">
      <div className="mb-6">
        <h1 className="text-2xl mb-1">Zach Taylor</h1>
        <div className="grid grid-cols-2 gap-1 w-20">
          <GitHubIcon />
          <TwitterIcon />
        </div>
      </div>
      <p className="text-gray-500 dark:text-gray-400 mb-0">
        All rights reserved © Zach Taylor
      </p>
    </footer>
  );
}
