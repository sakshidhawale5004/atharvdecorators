import { createFileRoute } from "@tanstack/react-router";

import { ServiceDetailPage, services } from "@/components/atharv/atharv-site";

export const Route = createFileRoute("/road-miscellaneous-civil-works")({
  component: () => <ServiceDetailPage service={services[5]} />,
  head: () => ({
    meta: [
      { title: "Road & Miscellaneous Civil Works | Atharv Decorators" },
      { name: "description", content: "Explore reliable road, internal access and miscellaneous civil works for residential, commercial and industrial sites by Atharv Decorators." },
      { property: "og:title", content: "Road & Miscellaneous Civil Works | Atharv Decorators" },
      { property: "og:description", content: "Civil infrastructure built around your project’s needs." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});