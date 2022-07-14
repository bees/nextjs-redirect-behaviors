import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const testRoutes = [
  "/both-defined",
  "/config-only",
  "/config-only?fromRoute=true",
  "/middleware-only",
];

export default function ToPage() {
  const { push, pathname, query } = useRouter();

  return (
    <div>
      <pre>path: {pathname}</pre>
      <pre>search: {JSON.stringify(query)}</pre>
      <ul>
        {testRoutes.map((route) => (
          <React.Fragment key={route}>
            <li>
              <Link href={route}>
                <a>Next link to {route}</a>
              </Link>
            </li>
            <li>
              <button onClick={() => push(route)}>
                Router redirect to {route}
              </button>
            </li>
          </React.Fragment>
        ))}
      </ul>
      <a href="https://github.com/bees/nextjs-redirect-behaviors/blob/main/middleware.ts">
        Middleware definition
      </a>
      <a href="https://github.com/bees/nextjs-redirect-behaviors/blob/main/next.config.js">
        Next config definition
      </a>
    </div>
  );
}
