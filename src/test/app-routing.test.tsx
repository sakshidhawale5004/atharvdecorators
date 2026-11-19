import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it.each([
    "/about",
    "/services",
    "/projects",
    "/contact",
    "/exterior-painting-building-repainting",
    "/interior-painting-finishing",
    "/waterproofing-solutions",
    "/civil-repairs-structural-maintenance",
    "/texture-pu-polishing-works",
    "/road-miscellaneous-civil-works",
  ])("matches the requested page at %s", (pathname) => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes(pathname);
    const trailingSlashMatches = router.matchRoutes(`${pathname}/`);

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
    expect(trailingSlashMatches.at(-1)?.routeId).not.toBe(rootRouteId);
  });
});
