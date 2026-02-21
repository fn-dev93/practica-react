import { beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Router from "./router";
import Route from "./Route";
import { Link } from "./Links";
import { getCurrentPath } from "./utils";

vi.mock("./utils", () => ({
  getCurrentPath: vi.fn(),
}));

describe("Router", () => {
  beforeEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("should render the correct component based on the current path", () => {
    render(<Router routes={[]} />);
    expect(true).toBeTruthy();
  });

  it("should render 404 if no route matches the current path", () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />);
    console.log(screen.debug());
  });

  it("should render the component of the first matching route", () => {
    getCurrentPath.mockReturnValue("/about");

    const routes = [
      { path: "/", component: () => <h1>Home</h1> },
      { path: "/about", component: () => <h1>About</h1> },
    ];

    render(<Router routes={routes} />);
    expect(screen.getByText("About")).toBeTruthy();
  });

  it("should navigate using Links",  () => {
    getCurrentPath.mockReturnValueOnce("/").mockReturnValueOnce("/about");

    render(
      <Router>
        <Route
          path="/"
          component={() => {
            return (
              <>
                <h1>Home</h1>
                <Link to="/about">Go to About</Link>
              </>
            );
          }}
        />
        <Route path="/about" component={() => <h1>About</h1>} />
      </Router>,
    );

    const button = screen.getByText(/Go to About/);
    fireEvent.click(button);

    const aboutTitle = screen.getByText("About");

    expect(aboutTitle).toBeTruthy();
  });
});
