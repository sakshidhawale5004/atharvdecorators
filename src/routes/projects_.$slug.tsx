import { createFileRoute, notFound } from "@tanstack/react-router";
import { ProjectDetailPage, featured3x3Projects } from "@/components/atharv/atharv-site";

export const Route = createFileRoute("/projects_/$slug")({
  component: ProjectRouteComponent,
  head: ({ params }) => {
    const project = featured3x3Projects.find((p) => p.id === params.slug);
    const title = project ? `${project.title} | Projects | Atharv Decorators` : "Project Details | Atharv Decorators";
    const description = project?.summary || "Project details from Atharv Decorators.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
});

function ProjectRouteComponent() {
  const { slug } = Route.useParams();
  const project = featured3x3Projects.find((p) => p.id === slug);
  if (!project) {
    throw notFound();
  }
  return <ProjectDetailPage project={project} />;
}
