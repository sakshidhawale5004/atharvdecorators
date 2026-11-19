import { createFileRoute } from "@tanstack/react-router";

import { ServiceDetailPage, services } from "@/components/atharv/atharv-site";

export const Route = createFileRoute("/exterior-painting-building-repainting")({
  component: () => <ServiceDetailPage service={services[1]} />,
  head: () => ({
    meta: [
      { title: "Exterior Painting & Building Repainting | Atharv Decorators" },
      { name: "description", content: "Refresh your building's exterior with tailored painting and repainting by Atharv Decorators. Explore the service and enquire." },
      { property: "og:title", content: "Exterior Painting & Building Repainting | Atharv Decorators" },
      { property: "og:description", content: "A considered new finish for your building’s exterior." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});