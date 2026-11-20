import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { c as Outlet, d as createRootRouteWithContext, f as Link, i as HeadContent, l as lazyRouteComponent, p as useRouter, r as Scripts, s as createRouter, u as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as Route$12 } from "./projects_._slug-CVuVhWuJ.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-N3QJxbn0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DBuXILmB.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message: describeThrown(error),
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var MAX_SERIALIZED_LENGTH = 2e3;
function describeThrown(error) {
	if (error instanceof Response) return `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`;
	if (error instanceof Error) return error.message;
	if (typeof error === "string") return error;
	const { message } = error ?? {};
	if (typeof message === "string" && message.length > 0) return message;
	try {
		return JSON.stringify(error)?.slice(0, MAX_SERIALIZED_LENGTH) ?? String(error);
	} catch {
		return String(error);
	}
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$11 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Atharv Decorators | Building Care & Civil Works" },
			{
				name: "description",
				content: "Atharv Decorators: building painting, civil repairs and waterproofing since 2001."
			},
			{
				name: "author",
				content: "Atharv Decorators"
			},
			{
				property: "og:title",
				content: "Atharv Decorators | Building Care & Civil Works"
			},
			{
				property: "og:description",
				content: "Building painting, civil repairs and waterproofing since 2001."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&family=Outfit:wght@300;400;500;600;700&display=swap"
			},
			...[{
				rel: "stylesheet",
				href: styles_default
			}],
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$11.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$10 = () => import("./routes-JtZ9TxeA.mjs");
var Route$10 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$10, "component"),
	head: () => ({ meta: [
		{ title: "Atharv Decorators | Building Care, Painting & Civil Works" },
		{
			name: "description",
			content: "Professional building painting, civil repairs, waterproofing and interior finishes by Atharv Decorators, delivering quality since 2001."
		},
		{
			property: "og:title",
			content: "Atharv Decorators | Building Care, Painting & Civil Works"
		},
		{
			property: "og:description",
			content: "Professional civil repairs, painting and waterproofing for residential, commercial and corporate spaces."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] })
});
var $$splitComponentImporter$9 = () => import("./about-BuS39lek.mjs");
var Route$9 = createFileRoute("/about")({
	component: lazyRouteComponent($$splitComponentImporter$9, "component"),
	head: () => ({ meta: [
		{ title: "About Atharv Decorators | Building Care Since 2001" },
		{
			name: "description",
			content: "Meet Atharv Decorators: a family legacy of building repairs, painting and waterproofing, carried forward since 2001."
		},
		{
			property: "og:title",
			content: "About Atharv Decorators | Building Care Since 2001"
		},
		{
			property: "og:description",
			content: "Experience, handed down. Quality, carried forward. Meet the Atharv Decorators team."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] })
});
var $$splitComponentImporter$8 = () => import("./civil-repairs-structural-maintenance-t_MT3TV2.mjs");
var Route$8 = createFileRoute("/civil-repairs-structural-maintenance")({
	component: lazyRouteComponent($$splitComponentImporter$8, "component"),
	head: () => ({ meta: [
		{ title: "Civil Repairs & Structural Maintenance | Atharv Decorators" },
		{
			name: "description",
			content: "Restore building strength, stability and function with civil repairs and structural maintenance by Atharv Decorators."
		},
		{
			property: "og:title",
			content: "Civil Repairs & Structural Maintenance | Atharv Decorators"
		},
		{
			property: "og:description",
			content: "Careful building maintenance focused on strength, safety and longevity."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] })
});
var $$splitComponentImporter$7 = () => import("./contact-oozZNLaP.mjs");
var Route$7 = createFileRoute("/contact")({
	component: lazyRouteComponent($$splitComponentImporter$7, "component"),
	head: () => ({ meta: [
		{ title: "Contact Atharv Decorators | Request a Project Enquiry" },
		{
			name: "description",
			content: "Contact Atharv Decorators about building painting, civil repairs, waterproofing and your next project."
		},
		{
			property: "og:title",
			content: "Contact Atharv Decorators | Request a Project Enquiry"
		},
		{
			property: "og:description",
			content: "Call, email or prepare a project enquiry for the Atharv Decorators team."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] })
});
var $$splitComponentImporter$6 = () => import("./exterior-painting-building-repainting--AJsgaKI.mjs");
var Route$6 = createFileRoute("/exterior-painting-building-repainting")({
	component: lazyRouteComponent($$splitComponentImporter$6, "component"),
	head: () => ({ meta: [
		{ title: "Exterior Painting & Building Repainting | Atharv Decorators" },
		{
			name: "description",
			content: "Refresh your building's exterior with tailored painting and repainting by Atharv Decorators. Explore the service and enquire."
		},
		{
			property: "og:title",
			content: "Exterior Painting & Building Repainting | Atharv Decorators"
		},
		{
			property: "og:description",
			content: "A considered new finish for your building’s exterior."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] })
});
var $$splitComponentImporter$5 = () => import("./interior-painting-finishing-DzA2FVNv.mjs");
var Route$5 = createFileRoute("/interior-painting-finishing")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => ({ meta: [
		{ title: "Interior Painting & Finishing | Atharv Decorators" },
		{
			name: "description",
			content: "Discover considered interior painting and refined finishes for homes and businesses from Atharv Decorators."
		},
		{
			property: "og:title",
			content: "Interior Painting & Finishing | Atharv Decorators"
		},
		{
			property: "og:description",
			content: "Flawless finishes that transform your interiors."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] })
});
var $$splitComponentImporter$4 = () => import("./projects-C6vklbHi.mjs");
var Route$4 = createFileRoute("/projects")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({ meta: [
		{ title: "Projects & Building Work | Atharv Decorators" },
		{
			name: "description",
			content: "Explore building, painting, waterproofing and civil works imagery from Atharv Decorators."
		},
		{
			property: "og:title",
			content: "Projects & Building Work | Atharv Decorators"
		},
		{
			property: "og:description",
			content: "A closer look at painting, building care and civil works."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] })
});
var $$splitComponentImporter$3 = () => import("./road-miscellaneous-civil-works-CBao7pc8.mjs");
var Route$3 = createFileRoute("/road-miscellaneous-civil-works")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [
		{ title: "Road & Miscellaneous Civil Works | Atharv Decorators" },
		{
			name: "description",
			content: "Explore reliable road, internal access and miscellaneous civil works for residential, commercial and industrial sites by Atharv Decorators."
		},
		{
			property: "og:title",
			content: "Road & Miscellaneous Civil Works | Atharv Decorators"
		},
		{
			property: "og:description",
			content: "Civil infrastructure built around your project’s needs."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] })
});
var $$splitComponentImporter$2 = () => import("./services-Cs2CCGvU.mjs");
var Route$2 = createFileRoute("/services")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [
		{ title: "Building Painting, Repairs & Waterproofing | Atharv Decorators" },
		{
			name: "description",
			content: "Explore Atharv Decorators' six building care services, including painting, waterproofing, structural repairs and civil works."
		},
		{
			property: "og:title",
			content: "Building Painting, Repairs & Waterproofing | Atharv Decorators"
		},
		{
			property: "og:description",
			content: "Six considered building care services, tailored to your property and project."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] })
});
var $$splitComponentImporter$1 = () => import("./texture-pu-polishing-works-4-LuNcEw.mjs");
var Route$1 = createFileRoute("/texture-pu-polishing-works")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({ meta: [
		{ title: "Texture, PU & Polishing Works | Atharv Decorators" },
		{
			name: "description",
			content: "Give your interiors and surfaces a refined architectural finish with texture work, PU coatings and polishing by Atharv Decorators."
		},
		{
			property: "og:title",
			content: "Texture, PU & Polishing Works | Atharv Decorators"
		},
		{
			property: "og:description",
			content: "Premium surface finishes, made to leave a lasting impression."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] })
});
var $$splitComponentImporter = () => import("./waterproofing-solutions-D5nUfm5U.mjs");
var Route = createFileRoute("/waterproofing-solutions")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({ meta: [
		{ title: "Waterproofing Solutions for Buildings | Atharv Decorators" },
		{
			name: "description",
			content: "Protect your property with site-specific waterproofing solutions from Atharv Decorators. Learn about the service and enquire."
		},
		{
			property: "og:title",
			content: "Waterproofing Solutions for Buildings | Atharv Decorators"
		},
		{
			property: "og:description",
			content: "Lasting protection against leaks and moisture damage."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] })
});
var rootRouteChildren = {
	IndexRoute: Route$10.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$11
	}),
	AboutRoute: Route$9.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$11
	}),
	CivilRepairsStructuralMaintenanceRoute: Route$8.update({
		id: "/civil-repairs-structural-maintenance",
		path: "/civil-repairs-structural-maintenance",
		getParentRoute: () => Route$11
	}),
	ContactRoute: Route$7.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$11
	}),
	ExteriorPaintingBuildingRepaintingRoute: Route$6.update({
		id: "/exterior-painting-building-repainting",
		path: "/exterior-painting-building-repainting",
		getParentRoute: () => Route$11
	}),
	InteriorPaintingFinishingRoute: Route$5.update({
		id: "/interior-painting-finishing",
		path: "/interior-painting-finishing",
		getParentRoute: () => Route$11
	}),
	ProjectsRoute: Route$4.update({
		id: "/projects",
		path: "/projects",
		getParentRoute: () => Route$11
	}),
	RoadMiscellaneousCivilWorksRoute: Route$3.update({
		id: "/road-miscellaneous-civil-works",
		path: "/road-miscellaneous-civil-works",
		getParentRoute: () => Route$11
	}),
	ServicesRoute: Route$2.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => Route$11
	}),
	TexturePuPolishingWorksRoute: Route$1.update({
		id: "/texture-pu-polishing-works",
		path: "/texture-pu-polishing-works",
		getParentRoute: () => Route$11
	}),
	WaterproofingSolutionsRoute: Route.update({
		id: "/waterproofing-solutions",
		path: "/waterproofing-solutions",
		getParentRoute: () => Route$11
	}),
	ProjectsSlugRoute: Route$12.update({
		id: "/projects_/$slug",
		path: "/projects/$slug",
		getParentRoute: () => Route$11
	})
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
