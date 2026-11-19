import { createFileRoute } from "@tanstack/react-router";

import { ProjectsPage } from "@/components/atharv/atharv-site";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects & Building Work | Atharv Decorators" },
      { name: "description", content: "Explore building, painting, waterproofing and civil works imagery from Atharv Decorators." },
      { property: "og:title", content: "Projects & Building Work | Atharv Decorators" },
      { property: "og:description", content: "A closer look at painting, building care and civil works." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});