import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/atharv/atharv-site";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Atharv Decorators | Building Care, Painting & Civil Works" },
      { name: "description", content: "Professional building painting, civil repairs, waterproofing and interior finishes by Atharv Decorators, delivering quality since 2001." },
      { property: "og:title", content: "Atharv Decorators | Building Care, Painting & Civil Works" },
      { property: "og:description", content: "Professional civil repairs, painting and waterproofing for residential, commercial and corporate spaces." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
