import { createFileRoute } from "@tanstack/react-router";

import { ServiceDetailPage, services } from "@/components/atharv/atharv-site";

export const Route = createFileRoute("/interior-painting-finishing")({
  component: () => <ServiceDetailPage service={services[0]} />,
  head: () => ({
    meta: [
      { title: "Interior Painting & Finishing | Atharv Decorators" },
      { name: "description", content: "Discover considered interior painting and refined finishes for homes and businesses from Atharv Decorators." },
      { property: "og:title", content: "Interior Painting & Finishing | Atharv Decorators" },
      { property: "og:description", content: "Flawless finishes that transform your interiors." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});