import { renderToString } from "react-dom/server";
import { describe, it, expect } from "vitest";
import { Link001 } from "@/components/ui/skiper40";
import { Header } from "@/components/atharv/atharv-site";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen";
import { QueryClient } from "@tanstack/react-query";

describe("Render test with RouterProvider", () => {
  it("renders Link001 with asChild", () => {
    const html = renderToString(
      <Link001 asChild>
        <a href="/">Test</a>
      </Link001>
    );
    expect(html).toContain("Test");
    expect(html).toContain("bg-amber-400");
  });

  it("renders full router with Header and HomePage without errors", async () => {
    const router = createRouter({
      routeTree,
      context: { queryClient: new QueryClient() },
    });
    await router.load();
    const html = renderToString(<RouterProvider router={router} />);
    expect(html).not.toContain("This page didn't load");
    expect(html).toContain("Atharv Decorators");
  });
});
