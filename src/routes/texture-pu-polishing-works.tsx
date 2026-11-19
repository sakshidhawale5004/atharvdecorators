import { createFileRoute } from "@tanstack/react-router";

import { ServiceDetailPage, services } from "@/components/atharv/atharv-site";

export const Route = createFileRoute("/texture-pu-polishing-works")({
  component: () => <ServiceDetailPage service={services[4]} />,
  head: () => ({
    meta: [
      { title: "Texture, PU & Polishing Works | Atharv Decorators" },
      { name: "description", content: "Give your interiors and surfaces a refined architectural finish with texture work, PU coatings and polishing by Atharv Decorators." },
      { property: "og:title", content: "Texture, PU & Polishing Works | Atharv Decorators" },
      { property: "og:description", content: "Premium surface finishes, made to leave a lasting impression." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});