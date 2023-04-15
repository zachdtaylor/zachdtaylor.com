import { Link } from "@remix-run/react";

type ItemPreviewProps = {
  to: string;
  external?: boolean;
  title: string;
  description: string;
  date?: string;
  isJupyter?: boolean;
};

export function ItemPreview({
  to,
  external = false,
  title,
  date,
  description,
  isJupyter,
}: ItemPreviewProps) {
  const linkClassName = "text-2xl hover:text-purple-400";
  return (
    <li className="py-6">
      {external ? (
        <a href={to} className={linkClassName}>
          {title}
        </a>
      ) : (
        <Link to={to} className={linkClassName}>
          {title}{" "}
          <span className="text-gray-500 text-sm">
            {isJupyter ? "(Jupyter Notebook)" : ""}
          </span>
        </Link>
      )}
      {date && <p className="text-gray-500 dark:text-gray-400">{date}</p>}
      <p className="py-2">{description}</p>
    </li>
  );
}
