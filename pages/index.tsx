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
  const browserSearch = React.useRef("");
  React.useEffect(() => {
    browserSearch.current = window.location.pathname;
  }, [pathname]);

  return (
    <div>
      <pre>path: {pathname}</pre>
      <pre>browser pathname: {browserSearch.current}</pre>
      <pre>router search: {JSON.stringify(query)}</pre>
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
      <br />
      <a href="https://github.com/bees/nextjs-redirect-behaviors/blob/main/next.config.js">
        Next config definition
      </a>
    </div>
  );
}
