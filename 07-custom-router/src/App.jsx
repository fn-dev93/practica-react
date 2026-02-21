import { lazy, Suspense } from "react";

import Router from "./router";
import "./App.css";
import Route from "./Route";

const AboutPageLazy = lazy(() => import("./pages/About.jsx"));
const SearchPageLazy = lazy(() => import("./pages/Search.jsx"));
const HomePageLazy = lazy(() => import("./pages/Home.jsx"));

const routes = [
  { path: "/search/:query", component: SearchPageLazy },
  { path: "/:language/about", component: AboutPageLazy },
];

function App() {
  return (
    <>
      <main>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Router routes={routes}>
            <Route path="/" component={HomePageLazy} />
            <Route path="/about" component={AboutPageLazy} />
          </Router>
        </Suspense>
      </main>
    </>
  );
}

export default App;
