import { l as lazyRouteComponent, u as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as featured3x3Projects } from "./atharv-site-BslrFpwy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects_._slug-Dsr63bPk.js
var $$splitComponentImporter = () => import("./projects_._slug-BKewB_f-.mjs");
var Route = createFileRoute("/projects_/$slug")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: ({ params }) => {
		const project = featured3x3Projects.find((p) => p.id === params.slug);
		const title = project ? `${project.title} | Projects | Atharv Decorators` : "Project Details | Atharv Decorators";
		const description = project?.summary || "Project details from Atharv Decorators.";
		return { meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			}
		] };
	}
});
//#endregion
export { Route as t };
