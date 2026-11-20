import { m as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as featured3x3Projects, i as ProjectDetailPage } from "./atharv-site-nihMsy2t.mjs";
import { t as Route } from "./projects_._slug-CVuVhWuJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects_._slug-D1EYHsRU.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectRouteComponent() {
	const { slug } = Route.useParams();
	const project = featured3x3Projects.find((p) => p.id === slug);
	if (!project) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectDetailPage, { project });
}
//#endregion
export { ProjectRouteComponent as component };
