import { createFileRoute } from "@tanstack/react-router";

import { ServiceDetailPage, services } from "@/components/atharv/atharv-site";

export const Route = createFileRoute("/civil-repairs-structural-maintenance")({
  component: () => <ServiceDetailPage service={services[2]} />,
  head: () => ({
    meta: [
      { title: "Civil Repairs & Structural Maintenance | Atharv Decorators" },
      { name: "description", content: "Restore building strength, stability and function with civil repairs and structural maintenance by Atharv Decorators." },
      { property: "og:title", content: "Civil Repairs & Structural Maintenance | Atharv Decorators" },
      { property: "og:description", content: "Careful building maintenance focused on strength, safety and longevity." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});