import { createFileRoute } from "@tanstack/react-router";

import { ServiceDetailPage, services } from "@/components/atharv/atharv-site";

export const Route = createFileRoute("/waterproofing-solutions")({
  component: () => <ServiceDetailPage service={services[3]} />,
  head: () => ({
    meta: [
      { title: "Waterproofing Solutions for Buildings | Atharv Decorators" },
      { name: "description", content: "Protect your property with site-specific waterproofing solutions from Atharv Decorators. Learn about the service and enquire." },
      { property: "og:title", content: "Waterproofing Solutions for Buildings | Atharv Decorators" },
      { property: "og:description", content: "Lasting protection against leaks and moisture damage." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});