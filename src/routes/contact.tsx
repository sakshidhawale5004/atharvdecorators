import { createFileRoute } from "@tanstack/react-router";

import { ContactPage } from "@/components/atharv/atharv-site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Atharv Decorators | Request a Project Enquiry" },
      { name: "description", content: "Contact Atharv Decorators about building painting, civil repairs, waterproofing and your next project." },
      { property: "og:title", content: "Contact Atharv Decorators | Request a Project Enquiry" },
      { property: "og:description", content: "Call, email or prepare a project enquiry for the Atharv Decorators team." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});