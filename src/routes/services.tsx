import { createFileRoute } from "@tanstack/react-router";

import { ServicesPage } from "@/components/atharv/atharv-site";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Building Painting, Repairs & Waterproofing | Atharv Decorators" },
      { name: "description", content: "Explore Atharv Decorators' six building care services, including painting, waterproofing, structural repairs and civil works." },
      { property: "og:title", content: "Building Painting, Repairs & Waterproofing | Atharv Decorators" },
      { property: "og:description", content: "Six considered building care services, tailored to your property and project." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});