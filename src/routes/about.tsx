import { createFileRoute } from "@tanstack/react-router";

import { AboutPage } from "@/components/atharv/atharv-site";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Atharv Decorators | Building Care Since 2001" },
      { name: "description", content: "Meet Atharv Decorators: a family legacy of building repairs, painting and waterproofing, carried forward since 2001." },
      { property: "og:title", content: "About Atharv Decorators | Building Care Since 2001" },
      { property: "og:description", content: "Experience, handed down. Quality, carried forward. Meet the Atharv Decorators team." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});