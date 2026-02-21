import { useEffect, useState, Children } from "react";
import { EVENTS } from "./consts";
import { match } from "path-to-regexp";
import { getCurrentPath } from "./utils";

export default function Router({
  routes = [],
  defaultComponent: DefaultComponent = () => <h1>Page Not Found</h1>,
  children,
}) {
  const [currentPath, setCurrentPath] = useState(getCurrentPath());

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(getCurrentPath());
    };

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);

  let routeParams = {};

  // add routes from children
  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type;
    const isRoute = name === "Route";

    return isRoute ? props : null;
  });

  const routesToUse = routes.concat(routesFromChildren).filter(Boolean);

  const Page = routesToUse.find((route) => {
    if (route.path === currentPath) return true;

    const matchedUrl = match(route.path, { decode: decodeURIComponent });
    const matched = matchedUrl(currentPath);
    if (!matched) return false;

    routeParams = matched.params;
    return true;
  })?.component;

  return Page ? (
    <Page {...routeParams} />
  ) : (
    <DefaultComponent {...routeParams} />
  );
}
