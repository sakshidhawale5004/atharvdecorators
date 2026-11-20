import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { a as useRouterState, f as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as ArrowRight, a as Phone, c as Menu, d as Linkedin, f as Instagram, g as ArrowUpRight, h as Check, i as Play, l as MapPin, m as ChevronDown, n as X, o as Pause, p as Facebook, r as Search, s as MessageSquare, t as Youtube, u as Mail } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/atharv-site-4E3k8nXG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
/**
* Link000 - Clean baseline link with smooth opacity transition
*/
var Link000 = import_react.forwardRef(({ children, className, active, asChild = false, ...props }, ref) => {
	if (asChild && import_react.isValidElement(children)) {
		const child = children;
		return import_react.cloneElement(child, {
			ref,
			...props,
			className: cn("relative inline-flex items-center text-sm font-medium transition-colors duration-200", active ? "text-amber-400 font-semibold" : "text-white/90 hover:text-white", child.props.className, className)
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		ref,
		className: cn("relative inline-flex items-center text-sm font-medium transition-colors duration-200", active ? "text-amber-400 font-semibold" : "text-white/90 hover:text-white", className),
		...props,
		children
	});
});
Link000.displayName = "Link000";
/**
* Link001 - Underline Left to Right reveal on hover
* Premium sliding underline from left to right with smooth ease (as in Skiper UI)
*/
var Link001 = import_react.forwardRef(({ children, className, active, underlineColor = "bg-amber-400", asChild = false, ...props }, ref) => {
	if (asChild && import_react.isValidElement(children)) {
		const child = children;
		return import_react.cloneElement(child, {
			ref,
			...props,
			className: cn("group relative inline-flex items-center text-[15px] font-medium tracking-wide transition-colors duration-250", active ? "text-white font-semibold" : "text-white/85 hover:text-white", child.props.className, className),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "relative z-10 py-1 inline-flex items-center gap-1.5",
				children: child.props.children
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				className: cn("absolute bottom-0 left-0 h-[2px] transition-all duration-300 ease-out group-hover:w-full", underlineColor, active ? "w-full" : "w-0")
			})] })
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		ref,
		className: cn("group relative inline-flex items-center text-[15px] font-medium tracking-wide transition-colors duration-250", active ? "text-white font-semibold" : "text-white/85 hover:text-white", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "relative z-10 py-1 inline-flex items-center gap-1.5",
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			className: cn("absolute bottom-0 left-0 h-[2px] transition-all duration-300 ease-out group-hover:w-full", underlineColor, active ? "w-full" : "w-0")
		})]
	});
});
Link001.displayName = "Link001";
/**
* Link002 - Underline Right to Left
*/
var Link002 = import_react.forwardRef(({ children, className, active, underlineColor = "bg-amber-400", asChild = false, ...props }, ref) => {
	if (asChild && import_react.isValidElement(children)) {
		const child = children;
		return import_react.cloneElement(child, {
			ref,
			...props,
			className: cn("group relative inline-flex items-center text-[15px] font-medium tracking-wide transition-colors duration-250", active ? "text-white font-semibold" : "text-white/85 hover:text-white", child.props.className, className),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "relative z-10 py-1 inline-flex items-center gap-1.5",
				children: child.props.children
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				className: cn("absolute bottom-0 right-0 h-[2px] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0", underlineColor, active ? "w-full" : "w-0")
			})] })
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		ref,
		className: cn("group relative inline-flex items-center text-[15px] font-medium tracking-wide transition-colors duration-250", active ? "text-white font-semibold" : "text-white/85 hover:text-white", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "relative z-10 py-1 inline-flex items-center gap-1.5",
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			className: cn("absolute bottom-0 right-0 h-[2px] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0", underlineColor, active ? "w-full" : "w-0")
		})]
	});
});
Link002.displayName = "Link002";
/**
* Link003 - Underline Center reveal
* Expands outward from center
*/
var Link003 = import_react.forwardRef(({ children, className, active, underlineColor = "bg-amber-400", asChild = false, ...props }, ref) => {
	if (asChild && import_react.isValidElement(children)) {
		const child = children;
		return import_react.cloneElement(child, {
			ref,
			...props,
			className: cn("group relative inline-flex items-center text-[15px] font-medium tracking-wide transition-colors duration-250", active ? "text-white font-semibold" : "text-white/85 hover:text-white", child.props.className, className),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "relative z-10 py-1 inline-flex items-center gap-1.5",
				children: child.props.children
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				className: cn("absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 transition-all duration-300 ease-out group-hover:w-full", underlineColor, active ? "w-full" : "w-0")
			})] })
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		ref,
		className: cn("group relative inline-flex items-center text-[15px] font-medium tracking-wide transition-colors duration-250", active ? "text-white font-semibold" : "text-white/85 hover:text-white", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "relative z-10 py-1 inline-flex items-center gap-1.5",
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			className: cn("absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 transition-all duration-300 ease-out group-hover:w-full", underlineColor, active ? "w-full" : "w-0")
		})]
	});
});
Link003.displayName = "Link003";
/**
* Link004 - Height Reveal
*/
var Link004 = import_react.forwardRef(({ children, className, active, asChild = false, ...props }, ref) => {
	if (asChild && import_react.isValidElement(children)) {
		const child = children;
		return import_react.cloneElement(child, {
			ref,
			...props,
			className: cn("group relative inline-flex items-center px-3 py-1.5 text-sm font-medium tracking-wide overflow-hidden rounded-md transition-colors duration-250", active ? "text-slate-950 font-semibold" : "text-white hover:text-slate-950", child.props.className, className),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				className: cn("absolute inset-0 z-0 bg-amber-400 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0", active ? "translate-y-0" : "")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "relative z-10 inline-flex items-center gap-1.5",
				children: child.props.children
			})] })
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		ref,
		className: cn("group relative inline-flex items-center px-3 py-1.5 text-sm font-medium tracking-wide overflow-hidden rounded-md transition-colors duration-250", active ? "text-slate-950 font-semibold" : "text-white hover:text-slate-950", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			className: cn("absolute inset-0 z-0 bg-amber-400 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0", active ? "translate-y-0" : "")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "relative z-10 inline-flex items-center gap-1.5",
			children
		})]
	});
});
Link004.displayName = "Link004";
/**
* Link005 - Width Reveal
*/
var Link005 = import_react.forwardRef(({ children, className, active, asChild = false, ...props }, ref) => {
	if (asChild && import_react.isValidElement(children)) {
		const child = children;
		return import_react.cloneElement(child, {
			ref,
			...props,
			className: cn("group relative inline-flex items-center px-3 py-1.5 text-sm font-medium tracking-wide overflow-hidden rounded-md transition-colors duration-250", active ? "text-slate-950 font-semibold" : "text-white hover:text-slate-950", child.props.className, className),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				className: cn("absolute inset-0 z-0 bg-amber-400 -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0", active ? "translate-x-0" : "")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "relative z-10 inline-flex items-center gap-1.5",
				children: child.props.children
			})] })
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		ref,
		className: cn("group relative inline-flex items-center px-3 py-1.5 text-sm font-medium tracking-wide overflow-hidden rounded-md transition-colors duration-250", active ? "text-slate-950 font-semibold" : "text-white hover:text-slate-950", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			className: cn("absolute inset-0 z-0 bg-amber-400 -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0", active ? "translate-x-0" : "")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "relative z-10 inline-flex items-center gap-1.5",
			children
		})]
	});
});
Link005.displayName = "Link005";
var company = {
	phone: "+91 8879 555 125",
	telephone: "tel:+918879555125",
	email: "atharvdecorators1@gmail.com"
};
var services = [
	{
		number: "01",
		title: "Interior Painting & Finishing",
		href: "/interior-painting-finishing",
		image: "/atharv-images/interior-painting-hero.webp",
		summary: "Thoughtful colours and refined interior finishes, delivered with care.",
		heading: "Flawless finishes that transform your interiors.",
		description: "Interior painting and finishing shape the look and feel of a space. We focus on considered colour, careful preparation and refined finishes that complement the way you live and work.",
		points: [
			"Interior painting planned around your space",
			"Carefully prepared surfaces and clean, even coats",
			"Finishes suited to residential and commercial interiors"
		],
		gallery: [{
			src: "/atharv-images/interior-painting-hero.webp",
			alt: "Beautifully finished modern living room with designer ceiling"
		}, {
			src: "/atharv-images/project-curved-architecture.jpeg",
			alt: "Modern architectural interior with reflective surfaces"
		}]
	},
	{
		number: "02",
		title: "Exterior Painting & Building Repainting",
		href: "/exterior-painting-building-repainting",
		image: "/atharv-images/exterior-painting-repairing.webp",
		summary: "Building repainting that refreshes your façade and elevates its appearance.",
		heading: "A considered new finish for your building’s exterior.",
		description: "Give your building a renewed first impression with exterior painting and repainting. Every project begins with the building itself, its surfaces and the finish that suits its setting.",
		points: [
			"Exterior painting for residential and commercial buildings",
			"Repainting to renew the look of existing façades",
			"Work coordinated with your building and site requirements"
		],
		gallery: [{
			src: "/atharv-images/exterior-painting-repairing.webp",
			alt: "Building with scaffolding undergoing exterior painting"
		}, {
			src: "/atharv-images/project-towers-construction.jpeg",
			alt: "Commercial towers under construction"
		}]
	},
	{
		number: "03",
		title: "Civil Repairs & Structural Maintenance",
		href: "/civil-repairs-structural-maintenance",
		image: "/atharv-images/civil-repairs-maintenance.webp",
		summary: "Careful building maintenance focused on strength, safety and longevity.",
		heading: "Restore strength, stability and structural integrity.",
		description: "Thoughtful civil repairs help extend the life and functionality of a building. We assess the issue, understand its cause and carry out repair work with durability and the site in mind.",
		points: [
			"Civil repair and ongoing structural maintenance",
			"Site-specific repair planning and execution",
			"Work focused on long-term durability and function"
		],
		gallery: [{
			src: "/atharv-images/civil-repairs-maintenance.webp",
			alt: "Construction workers with safety gear at repair site"
		}, {
			src: "/atharv-images/project-site-architects.jpeg",
			alt: "Construction professionals at a building site"
		}]
	},
	{
		number: "04",
		title: "Waterproofing Solutions",
		href: "/waterproofing-solutions",
		image: "/atharv-images/waterproofing-solutions.webp",
		summary: "Purposeful waterproofing to help protect your property from moisture.",
		heading: "Lasting protection against leaks and moisture damage.",
		description: "Seepage and dampness need the right response for the conditions on site. We provide tailored waterproofing solutions based on where moisture occurs and the needs of your building.",
		points: [
			"Waterproofing planned around your site conditions",
			"Solutions for leaks, seepage and moisture exposure",
			"An approach shaped by the building and its requirements"
		],
		gallery: [{
			src: "/atharv-images/waterproofing-solutions.webp",
			alt: "Worker applying waterproof coating on a surface"
		}]
	},
	{
		number: "05",
		title: "Texture, PU & Polishing Works",
		href: "/texture-pu-polishing-works",
		image: "/atharv-images/texture-pu-polishing.webp",
		summary: "Distinctive surface treatments with a premium architectural finish.",
		heading: "Premium surface finishes, made to leave a lasting impression.",
		description: "Texture finishes, PU coatings and polishing bring depth and character to interior spaces and surfaces. Our specialist finishes pair considered detail with everyday durability.",
		points: [
			"Decorative texture finishes for interior walls",
			"PU coatings and surface polishing",
			"Architectural details with a refined, durable finish"
		]
	},
	{
		number: "06",
		title: "Road & Miscellaneous Civil Works",
		href: "/road-miscellaneous-civil-works",
		image: "/atharv-images/road-civil-works-hero.webp",
		summary: "Reliable civil and road works, planned for long-term performance.",
		heading: "Civil infrastructure built around your project’s needs.",
		description: "Road and miscellaneous civil works take careful coordination and a practical understanding of site requirements. We undertake infrastructure works for residential, commercial and industrial settings.",
		points: [
			"Road and internal access works",
			"Civil works for residential, commercial and industrial sites",
			"Project-specific execution focused on lasting performance"
		]
	}
];
var homePath = "/";
var servicesPath = "/services";
var aboutPath = "/about";
var projectsPath = "/projects";
var contactPath = "/contact";
function Logo({ footer = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		className: "ad-logo",
		src: "/atharv-images/atharv-decorators-logo.webp",
		alt: "Atharv Decorators",
		width: "557",
		height: "136",
		loading: footer ? "lazy" : "eager"
	});
}
function SearchModal({ isOpen, onClose }) {
	const [query, setQuery] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		function handleKeyDown(e) {
			if (e.key === "Escape") onClose();
		}
		if (isOpen) {
			window.addEventListener("keydown", handleKeyDown);
			document.body.style.overflow = "hidden";
		}
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			document.body.style.overflow = "";
		};
	}, [isOpen, onClose]);
	if (!isOpen) return null;
	const filteredServices = services.filter((s) => s.title.toLowerCase().includes(query.toLowerCase()) || s.summary.toLowerCase().includes(query.toLowerCase()));
	const filteredProjects = projects.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#0a0e16] text-white shadow-2xl animate-in zoom-in-95 duration-200",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 border-b border-white/10 px-5 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-5 w-5 text-amber-400 shrink-0" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						autoFocus: true,
						type: "text",
						placeholder: "Search services, projects, keywords... (Press Esc to close)",
						value: query,
						onChange: (e) => setQuery(e.target.value),
						className: "w-full bg-transparent text-base text-white placeholder-white/40 focus:outline-none"
					}),
					query && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setQuery(""),
						className: "text-xs uppercase tracking-wider text-white/40 hover:text-white",
						children: "Clear"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "rounded p-1 text-white/50 hover:bg-white/10 hover:text-white",
						"aria-label": "Close search",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-h-[60vh] overflow-y-auto p-4 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-400",
						children: "Services"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 space-y-1",
						children: [filteredServices.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: service.href,
							onClick: onClose,
							className: "flex items-center justify-between rounded-lg px-3 py-2.5 text-sm hover:bg-white/10 transition-colors group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-serif text-amber-400 font-bold",
									children: service.number
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-white/90 group-hover:text-amber-400 font-medium",
									children: service.title
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								size: 14,
								className: "text-white/40 group-hover:text-amber-400 transition-colors"
							})]
						}, service.number)), filteredServices.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-3 py-2 text-xs text-white/40",
							children: "No matching services"
						})]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-400",
						children: "Projects"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 space-y-1",
						children: filteredProjects.slice(0, 5).map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: projectsPath,
							onClick: onClose,
							className: "flex items-center justify-between rounded-lg px-3 py-2.5 text-sm hover:bg-white/10 transition-colors group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: project.image,
									alt: project.title,
									className: "w-8 h-8 rounded object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-white/90 group-hover:text-amber-400 font-medium",
									children: project.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-white/50",
									children: project.category
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								size: 14,
								className: "text-white/40 group-hover:text-amber-400 transition-colors"
							})]
						}, project.title))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-white/10 pt-3 flex items-center justify-between px-3 text-xs text-white/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"Press ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
								className: "rounded bg-white/10 px-1.5 py-0.5 text-white/80",
								children: "ESC"
							}),
							" to exit"
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: projectsPath,
							onClick: onClose,
							className: "hover:text-amber-400",
							children: "View all projects →"
						})]
					})
				]
			})]
		})
	});
}
function Header() {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [isSearchOpen, setIsSearchOpen] = (0, import_react.useState)(false);
	const [isScrolled, setIsScrolled] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	(0, import_react.useEffect)(() => {
		function handleScroll() {
			setIsScrolled(window.scrollY > 20);
		}
		function handleKeyDown(e) {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
				e.preventDefault();
				setIsSearchOpen(true);
			}
		}
		window.addEventListener("scroll", handleScroll, { passive: true });
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);
	const isServicesActive = pathname === servicesPath || services.some((service) => pathname === service.href);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `ad-header${isScrolled ? " is-scrolled" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ad-topbar",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ad-topbar-inner",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ad-topbar-contact",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: company.telephone,
							className: "ad-topbar-link",
							title: "Call Us",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								size: 12,
								className: "ad-topbar-icon"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+91 8879 555 125" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ad-topbar-sep",
							children: "•"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `mailto:${company.email}`,
							className: "ad-topbar-link",
							title: "Email Us",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
								size: 12,
								className: "ad-topbar-icon"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "atharvdecorators1@gmail.com" })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ad-topbar-badge hidden sm:inline-flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Civil Repairs • Painting • Waterproofing" })
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "ad-header-inner",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					"aria-label": "Atharv Decorators home",
					className: "ad-brand-link",
					onClick: () => setIsOpen(false),
					from: "/",
					to: homePath,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Main navigation",
					className: `ad-nav${isOpen ? " is-open" : ""}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link001, {
							asChild: true,
							active: pathname === homePath,
							underlineColor: "bg-amber-500",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								"aria-current": pathname === homePath ? "page" : void 0,
								className: `ad-nav-link${pathname === homePath ? " is-active" : ""}`,
								onClick: () => setIsOpen(false),
								to: homePath,
								children: "Home"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link001, {
							asChild: true,
							active: pathname === aboutPath,
							underlineColor: "bg-amber-500",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								"aria-current": pathname === aboutPath ? "page" : void 0,
								className: `ad-nav-link${pathname === aboutPath ? " is-active" : ""}`,
								onClick: () => setIsOpen(false),
								from: "/",
								to: aboutPath,
								children: "About"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ad-nav-dropdown-container",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link001, {
								asChild: true,
								active: isServicesActive,
								underlineColor: "bg-amber-500",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									"aria-current": isServicesActive ? "page" : void 0,
									className: `ad-nav-link ad-services-trigger${isServicesActive ? " is-active" : ""}`,
									onClick: () => setIsOpen(false),
									from: "/",
									to: servicesPath,
									children: ["Services ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
										className: "ad-nav-chevron",
										size: 13
									})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "ad-nav-service-menu",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									className: "ad-nav-service-overview",
									onClick: () => setIsOpen(false),
									from: "/",
									to: servicesPath,
									children: ["View all services ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										"aria-hidden": "true",
										size: 14
									})]
								}), services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									"aria-current": pathname === service.href ? "page" : void 0,
									onClick: () => setIsOpen(false),
									from: "/",
									to: service.href,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: service.number }),
										" ",
										service.title
									]
								}, service.number))]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link001, {
							asChild: true,
							active: pathname === projectsPath,
							underlineColor: "bg-amber-500",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								"aria-current": pathname === projectsPath ? "page" : void 0,
								className: `ad-nav-link${pathname === projectsPath ? " is-active" : ""}`,
								onClick: () => setIsOpen(false),
								from: "/",
								to: projectsPath,
								children: "Projects"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link001, {
							asChild: true,
							active: pathname === contactPath,
							underlineColor: "bg-amber-500",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								"aria-current": pathname === contactPath ? "page" : void 0,
								className: `ad-nav-link${pathname === contactPath ? " is-active" : ""}`,
								onClick: () => setIsOpen(false),
								from: "/",
								to: contactPath,
								children: "Contact"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:hidden mt-3 pt-3 border-t border-white/20 flex flex-col gap-2 w-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: company.telephone,
								className: "flex items-center justify-center gap-2 py-2.5 px-4 rounded-full border border-amber-500 text-amber-300 font-bold text-xs hover:bg-amber-500/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									size: 13,
									className: "text-amber-400"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Call +91 8879 555 125" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${company.email}`,
								className: "flex items-center justify-center gap-2 py-2.5 px-4 rounded-full border border-white/20 text-white/90 font-medium text-xs hover:bg-white/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
									size: 13,
									className: "text-amber-400"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: company.email })]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ad-header-actions",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "ad-search-pill-btn",
							onClick: () => setIsSearchOpen(true),
							"aria-label": "Search website",
							title: "Search (Ctrl+K)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 15 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: company.telephone,
							className: "ad-pill-outline-btn hidden md:inline-flex",
							title: "Call +91 8879 555 125",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								size: 13,
								className: "text-amber-500"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Call Now" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							"aria-expanded": isOpen,
							"aria-label": isOpen ? "Close navigation" : "Open navigation",
							className: "ad-menu-toggle lg:hidden",
							onClick: () => setIsOpen((current) => !current),
							size: "icon",
							variant: "outline",
							children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
								"aria-hidden": "true",
								size: 17
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
								"aria-hidden": "true",
								size: 17
							})
						})
					]
				})
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchModal, {
		isOpen: isSearchOpen,
		onClose: () => setIsSearchOpen(false)
	})] });
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "ad-footer",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "ad-container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ad-footer-main",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ad-footer-brand",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							"aria-label": "Atharv Decorators home",
							className: "ad-brand-link",
							from: "/",
							to: homePath,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { footer: true })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Civil repairs, building painting and waterproofing, delivered with care for your property and the people who use it." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "ad-footer-label",
						children: "Explore"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Footer navigation",
						className: "ad-footer-links",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								from: "/",
								to: homePath,
								children: "Home"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								from: "/",
								to: aboutPath,
								children: "About us"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								from: "/",
								to: servicesPath,
								children: "Our services"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								from: "/",
								to: projectsPath,
								children: "Projects"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								from: "/",
								to: contactPath,
								children: "Contact us"
							})
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "ad-footer-label",
						children: "Get in touch"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ad-footer-links",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: company.telephone,
								children: company.phone
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${company.email}`,
								children: company.email
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								from: "/",
								to: contactPath,
								children: "Enquire about a project"
							})
						]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ad-footer-bottom",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Atharv Decorators. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Considered craftsmanship. Lasting work." })]
			})]
		})
	});
}
function SitePreloader() {
	const [visible, setVisible] = (0, import_react.useState)(true);
	const [fading, setFading] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const fadeTimer = setTimeout(() => {
			setFading(true);
		}, 600);
		const hideTimer = setTimeout(() => {
			setVisible(false);
		}, 1100);
		return () => {
			clearTimeout(fadeTimer);
			clearTimeout(hideTimer);
		};
	}, []);
	if (!visible) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `ad-site-preloader${fading ? " is-fading" : ""}`,
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "ad-preloader-content",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ad-preloader-brand",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/atharv-images/atharv-decorators-logo.webp",
						alt: "Atharv Decorators",
						className: "ad-preloader-logo-horizontal",
						width: "240",
						height: "58"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ad-preloader-bar",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ad-preloader-fill" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ad-preloader-subtitle",
					children: "CIVIL REPAIRS • PAINTING • WATERPROOFING"
				})
			]
		})
	});
}
function SiteFrame({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "atharv-site",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SitePreloader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Eyebrow({ children, light = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: light ? "ad-eyebrow" : "ad-kicker",
		children
	});
}
function PageHero({ title, eyebrow, backgroundImage = "/atharv-images/project-futuristic-building.jpeg" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-label": eyebrow,
		className: "ad-page-hero",
		style: {
			backgroundImage: `linear-gradient(90deg, rgba(10,16,20,0.92) 0%, rgba(10,16,20,0.72) 48%, rgba(10,16,20,0.52) 100%), url("${backgroundImage}")`,
			backgroundSize: "cover",
			backgroundPosition: "center"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "ad-container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Breadcrumb",
				className: "ad-breadcrumb",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: homePath,
						children: "Home"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						children: "/"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-current": "page",
						children: eyebrow
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "ad-display",
				children: title
			})]
		})
	});
}
var clientShowcaseLogos = [
	{
		name: "R Galleria",
		src: "/atharv-images/client-r-galleria.webp"
	},
	{
		name: "Runwal Greens",
		src: "/atharv-images/client-runwal-greens.webp"
	},
	{
		name: "Rebel Foods",
		src: "/atharv-images/client-rebel-foods.webp"
	},
	{
		name: "Amazon",
		src: "/atharv-images/client-amazon.webp"
	},
	{
		name: "Turner",
		src: "/atharv-images/client-turner.webp"
	},
	{
		name: "Taj Hotels",
		src: "/atharv-images/client-taj.webp"
	},
	{
		name: "MSC Bank",
		src: "/atharv-images/client-msc-bank.webp"
	},
	{
		name: "Talwalkars",
		src: "/atharv-images/client-talwalkars.webp"
	},
	{
		name: "L&T Construction",
		src: "/atharv-images/client-lt-construction.webp"
	},
	{
		name: "MAN Infraconstruction",
		src: "/atharv-images/client-man-infra.webp"
	},
	{
		name: "Unity Construction",
		src: "/atharv-images/client-unity-construction.webp"
	},
	{
		name: "Balsan Developers",
		src: "/atharv-images/client-balsan-developers.webp"
	}
];
var sectorCards = [
	{
		title: "Residential",
		icon: "/atharv-images/icon-residential.png",
		description: "Thoughtfully designed homes that balance comfort, functionality, and personal style. We create living spaces that reflect your lifestyle and feel truly yours."
	},
	{
		title: "Commercial",
		icon: "/atharv-images/icon-commercial.png",
		description: "Smart, efficient interiors designed to enhance productivity and brand identity. We craft workspaces that are functional, modern, and future-ready."
	},
	{
		title: "Hospitality",
		icon: "/atharv-images/icon-hospitality.png",
		description: "Inviting interiors that create memorable experiences for guests. Designed to blend aesthetics, comfort, and operational efficiency seamlessly."
	},
	{
		title: "Multipurpose",
		icon: "/atharv-images/icon-multipurpose.png",
		description: "Flexible spaces designed to adapt to multiple functions with ease. Intelligent planning ensures versatility without compromising on design or comfort."
	}
];
var featured3x3Projects = [
	{
		id: "perpustakaan-nasional-jakarta",
		title: "Perpustakaan Nasional Jakarta",
		category: "Public Building",
		image: "/atharv-images/project-site-3.jpg",
		alt: "Perpustakaan Nasional Jakarta - Public Building",
		summary: "Iconic public library and cultural center featuring expansive glass facades and refined architectural finishes.",
		location: "Jakarta, Indonesia",
		scope: "Architectural Finishing & Surface Treatments",
		client: "National Heritage & Cultural Board",
		year: "2023 - 2024",
		area: "128,000 sq.ft.",
		duration: "14 Months",
		status: "Completed",
		heading: "Preserving national heritage with modern architectural protection.",
		description: "The National Library of Indonesia (Perpustakaan Nasional Jakarta) stands as one of Southeast Asia's foremost cultural and educational landmarks. Atharv Decorators was commissioned to execute comprehensive architectural finishing, exterior facade treatment, and specialized weather-proof protective coatings. The project required rigorous coordination to protect interior archival facilities while modernizing exterior concrete and glass surfaces under high tropical humidity.",
		narrative2: "Our specialist teams deployed low-VOC interior treatments across the reading halls and archival stacks to prevent moisture buildup and safeguard centuries of literary history. The exterior concrete structures received high-durability elastomeric coatings engineered to resist fungal growth and thermal movement.",
		highlights: [
			"Precision surface restoration on exterior concrete reliefs",
			"High-durability anti-fungal PU coatings for tropical climates",
			"Acoustic sealing and dust-free interior painting for library wings",
			"Structural joint sealing and glass facade waterproofing"
		]
	},
	{
		id: "silver-grid-office",
		title: "Silver Grid Office",
		category: "Office Building",
		image: "/atharv-images/project-site-4.jpg",
		alt: "Silver Grid Office - Contemporary Office Building",
		summary: "Geometric modern corporate workplace with angular glazing, premium insulation and civil structural maintenance.",
		location: "Commercial Business District",
		scope: "Civil Repairs & Exterior Glazing",
		client: "Apex Corporate Real Estate",
		year: "2023",
		area: "94,000 sq.ft.",
		duration: "9 Months",
		status: "Completed",
		heading: "Geometric architectural elegance engineered for modern corporate life.",
		description: "Silver Grid Office represents the cutting edge of contemporary commercial workplace design. Atharv Decorators undertook structural civil repairs, joint waterproofing, and premium polyurethane coating across its distinctive multi-angled glass and steel facade. The result is a resilient corporate landmark protected against thermal expansion and severe weather.",
		narrative2: "In addition to structural sealing, our team refinished the double-height executive reception with diamond-honed marble polishing and hand-crafted metallic PU wall accents, creating an imposing corporate entryway that speaks of permanence.",
		highlights: [
			"Structural sealant injection across high-wind facade joints",
			"Energy-reflective exterior elastomeric paint coatings",
			"Comprehensive lobby refurbishment and marble PU polishing",
			"Rapid turnaround civil works executed with minimal business downtime"
		]
	},
	{
		id: "java-news-agency",
		title: "Java News Agency",
		category: "Office Building",
		image: "/atharv-images/project-site-9.jpg",
		alt: "Java News Agency - Modern Media Headquarters",
		summary: "Curvilinear glass skyscraper designed for high-density broadcast media operations with weather-resistant exterior coatings.",
		location: "Metropolitan Media Center",
		scope: "Exterior Waterproofing & Painting",
		client: "Java Media & Broadcasting Network",
		year: "2024",
		area: "175,000 sq.ft.",
		duration: "16 Months",
		status: "Completed",
		heading: "Dynamic curvilinear skyscraper engineered for 24/7 broadcasting resilience.",
		description: "Home to high-density round-the-clock news broadcasts, Java News Agency required specialized structural weatherproofing and acoustic-grade exterior treatments. Our engineering team deployed advanced rope-access painting and multi-layer elastomeric waterproofing systems, sealing the exterior against monsoon conditions while providing a spotless aesthetic.",
		narrative2: "High-level rooftop communication antenna decks were treated with elastomeric membrane tanking to ensure zero water ingress into critical electronic broadcasting infrastructure situated directly beneath the roof slabs.",
		highlights: [
			"Specialized rope-access exterior coatings for curvilinear glass facade",
			"Multi-tier damp-proof membrane installations across rooftop transmission arrays",
			"High-performance polyurethane surface protection against UV oxidation",
			"Zero disruption to live 24/7 news broadcast studios"
		]
	},
	{
		id: "the-phiramada",
		title: "The Phiramada",
		category: "Art Center",
		image: "/atharv-images/project-site-5.jpg",
		alt: "The Phiramada - Architectural Art Center",
		summary: "Sculptural tiered cultural pavilion with deep fluted concrete reliefs and protective architectural coatings.",
		location: "Cultural Arts District",
		scope: "Texture & Decorative PU Coatings",
		client: "National Arts & Culture Foundation",
		year: "2023",
		area: "62,000 sq.ft.",
		duration: "8 Months",
		status: "Completed",
		heading: "Sculptural tiered concrete artistry brought to life with bespoke textures.",
		description: "With bold pyramid-inspired geometry and expansive public exhibition galleries, The Phiramada presented unique architectural demands. Atharv Decorators applied artisan-grade textural finishes and breathable polyurethane sealants to preserve the sculptural raw concrete look while providing long-term waterproofing.",
		narrative2: "Interior exhibition halls were coated with gallery-standard matte finishes formulated to diffuse directional spotlights, giving visiting art curators the ideal chromatic background for global exhibitions.",
		highlights: [
			"Artisan textured wall plastering complementing brutalist architecture",
			"Hydrophobic clear sealants preserving exposed concrete tone",
			"Gallery-grade neutral white interior coatings with ultra-low VOC emissions",
			"Waterproofed sunken amphitheater and rainwater drainage channels"
		]
	},
	{
		id: "black-badoo-gym",
		title: "Black Badoo Gym",
		category: "Sport Center",
		image: "/atharv-images/project-site-2.jpg",
		alt: "Black Badoo Gym - Modern Sport Center",
		summary: "State-of-the-art sports and fitness complex enclosed in dark architectural glass with seamless waterproofing.",
		location: "Urban Athletic Park",
		scope: "Structural Glazing & Waterproofing",
		client: "Badoo Fitness Enterprises",
		year: "2024",
		area: "48,000 sq.ft.",
		duration: "6 Months",
		status: "Completed",
		heading: "High-performance athletic arena engineered with heavy-duty waterproofing.",
		description: "Black Badoo Gym combines rigorous athletic utility with a dramatic dark architectural aesthetic. Atharv Decorators was engaged to waterproof high-humidity zones (indoor pools, steam rooms, saunas), execute structural civil reinforcement, and apply slip-resistant industrial coatings across dynamic workout arenas.",
		narrative2: "The exterior features a bold charcoal palette finished with UV-resistant polyurethane enamel, resisting environmental staining and preserving its sleek silhouette through extreme weather changes.",
		highlights: [
			"Heavy-duty waterproof tanking for hydrotherapy pools and steam suites",
			"Impact-resistant PU wall and floor coatings for heavy lifting zones",
			"Matte charcoal architectural facade finishing with anti-graffiti shields",
			"Precision sealing of floor-to-ceiling panoramic glass panels"
		]
	},
	{
		id: "thinkpod-stadium",
		title: "Thinkpod Stadium",
		category: "Sport Center",
		image: "/atharv-images/project-site-1.jpg",
		alt: "Thinkpod Stadium - Futuristic Civic Arena",
		summary: "Monumental fluid arena structure built for international sporting events with heavy-duty civil works and protective coatings.",
		location: "National Sports Complex",
		scope: "Civic Infrastructure & Concrete Sealing",
		client: "Sports Authority of India & Civic Council",
		year: "2022 - 2024",
		area: "320,000 sq.ft.",
		duration: "22 Months",
		status: "Completed",
		heading: "Monumental civic sporting arena built for thousands with enduring strength.",
		description: "Thinkpod Stadium is an international standard sports arena hosting athletic competitions and civic events. Atharv Decorators managed large-scale civil repairs, expansion joint waterproofing, concourse resurfacing, and high-build weather-resistant painting across grandstands, concourses, and external perimeter colonnades.",
		narrative2: "Engineered to withstand the footfall of tens of thousands of spectators, all pedestrian bridges, rampways, and viewing corridors were reinforced with polyurethane elastomeric floor sealants and anti-slip quartz broadcasting.",
		highlights: [
			"Heavy-capacity expansion joint sealing across 320,000 sq.ft of grandstands",
			"Weather-shield exterior painting enduring direct tropical sun and monsoon downpours",
			"Anti-carbonation concrete coatings protecting structural pylons",
			"Slip-resistant pedestrian coatings across multi-tier stadium ramps"
		]
	},
	{
		id: "cikuya-station",
		title: "Cikuya Station",
		category: "Public Transportation",
		image: "/atharv-images/project-site-7.jpg",
		alt: "Cikuya Station - Public Transportation Transit Hub",
		summary: "High-capacity subterranean transit platform engineered with coffered vaulted arches and durable civil treatments.",
		location: "Central Transit Corridor",
		scope: "Road & Miscellaneous Civil Works",
		client: "Metropolitan Rail & Transport Corporation",
		year: "2023",
		area: "115,000 sq.ft.",
		duration: "12 Months",
		status: "Completed",
		heading: "Subterranean vaulted transit infrastructure engineered for non-stop traffic.",
		description: "Cikuya Station represents high-capacity public transit engineering at its most intricate. Serving thousands of commuters daily, our team delivered subterranean negative-side waterproofing, vault ceiling rehabilitation, durable pedestrian floor polishing, and heavy-duty civil masonry.",
		narrative2: "The subterranean location required rigorous damp-proof injections and micro-cement masonry repair, followed by specialized vapor-permeable anti-fungal coatings that prevent moisture condensation on vaulted ceiling ribs.",
		highlights: [
			"Negative-side hydrostatic pressure waterproofing in underground tunnels",
			"Restoration and protective coating of historic coffered concrete ceiling arches",
			"Abrasion-resistant epoxy road and concourse surface treatments",
			"Round-the-clock nocturnal execution maintaining uninterrupted rail operations"
		]
	},
	{
		id: "souta-airport",
		title: "Souta Airport",
		category: "Public Transportation",
		image: "/atharv-images/project-site-8.jpg",
		alt: "Souta Airport - Public Transportation Terminal",
		summary: "Air terminal galleria featuring soaring ribbed vaults, polished high-gloss surfaces and premium finishes.",
		location: "International Gateway",
		scope: "High-Gloss PU Polishing & Civil Repairs",
		client: "Airports Authority & Consortium",
		year: "2023 - 2024",
		area: "290,000 sq.ft.",
		duration: "18 Months",
		status: "Completed",
		heading: "Soaring aviation terminal galleria elevated through pristine finishes.",
		description: "Souta Airport's departure terminal features breathtaking soaring white ribbed vaults and reflective open gallerias. Atharv Decorators performed high-spec polyurethane wall and ceiling spray finishing, structural expansion joint sealing, and stone floor polishing to meet global international airport standards.",
		narrative2: "Our technical craftsmen applied reflective white polyurethane lacquer across expansive parabolic arches, amplifying natural skylight illumination while ensuring effortless cleanability and fire-retardant performance.",
		highlights: [
			"High-gloss polyurethane coatings delivering uniform 95%+ light reflectivity",
			"Fire-retardant intumescent painting across exposed structural steel rafters",
			"Vibration-resistant sealants absorbing jet engine sound resonance",
			"Ultra-smooth terrazzo and marble floor resurfacing with diamond polishing"
		]
	},
	{
		id: "ophelia-luxury-hotel",
		title: "Ophelia Luxury Hotel",
		category: "Commercial Building",
		image: "/atharv-images/project-site-6.jpg",
		alt: "Ophelia Luxury Hotel - Commercial Hospitality Building",
		summary: "Five-star resort hospitality destination with infinity pool deck waterproofing and architectural surface detailing.",
		location: "Luxury Coastal Enclave",
		scope: "Civil Repairs, PU Coating & Waterproofing",
		client: "Ophelia Luxury Hotels & Resorts",
		year: "2024",
		area: "145,000 sq.ft.",
		duration: "15 Months",
		status: "Completed",
		heading: "Five-star coastal sanctuary crafted with weather-defying luxury finishes.",
		description: "Perched along an exclusive coastal headland, Ophelia Luxury Hotel is subject to intense saline winds, marine humidity, and sun exposure. Atharv Decorators executed bespoke civil repair works, multi-layer infinity pool waterproofing, tropical exterior masonry repainting, and hand-finished PU woodwork polishing across suites and oceanfront cabanas.",
		narrative2: "Marine-grade crystalline waterproofing was integrated into all infinity swimming pools, beachfront retaining walls, and sea-facing decks, guaranteeing long-term resistance against salt-water degradation and chlorinated water penetration.",
		highlights: [
			"Marine-grade crystalline waterproofing for cliffside infinity swimming pools",
			"Salt-spray and UV-resistant exterior elastomeric painting systems",
			"Fine hand-applied PU furniture and woodwork polishing across luxury villas",
			"Moisture-proof waterproofing barriers behind marble bathroom walls"
		]
	}
];
var latestCollageProjects = [
	{
		image: "/atharv-images/unsplash-luxury-facade.jpg",
		alt: "Contemporary architectural skyscraper with glass facade"
	},
	{
		image: "/atharv-images/unsplash-modern-interior.jpg",
		alt: "Luxury interior finish and architecture"
	},
	{
		image: "/atharv-images/unsplash-corporate-atrium.jpg",
		alt: "Corporate architectural atrium interior"
	},
	{
		image: "/atharv-images/commercial-glass-building.jpg",
		alt: "Glass commercial corporate office"
	},
	{
		image: "/atharv-images/unsplash-tower-construction.jpg",
		alt: "High-rise structural tower development"
	}
];
function SectorCardsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "ad-container ad-sectors-strip-wrapper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ad-sectors-strip",
			children: sectorCards.map((sector) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ad-sector-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: sector.icon,
						alt: sector.title,
						className: "ad-sector-icon"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: sector.title }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: sector.description })
				]
			}, sector.title))
		})
	});
}
function WhoWeAreSection({ stat1 = {
	count: "150+",
	label: "Completed Projects"
}, stat2 = {
	count: "98%",
	label: "Happy Clients"
}, stat3 = {
	count: "256+",
	label: "Expert Workers"
}, image = "/atharv-images/project-towers-construction.jpeg" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-label": "Who We Are",
		className: "ad-container ad-who-we-are-section",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ad-who-visual",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: "High rise towers under construction",
				loading: "lazy"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "ad-who-content",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ad-section-eyebrow",
					children: "Who We Are"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "ad-section-heading",
					children: "We create buildings that meet your needs"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "ad-section-desc",
					children: "With over 25+ years of industry experience and 150+ successfully completed projects, Atharva Decorators is a trusted name in civil repairs, waterproofing, and painting solutions. We deliver durable workmanship, modern techniques, and timely execution—ensuring structures remain safe, strong, and visually refined."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ad-who-stats-row",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ad-who-stat-item",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: stat1.count }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: stat1.label })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ad-who-stat-item",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: stat2.count }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: stat2.label })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ad-who-stat-item",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: stat3.count }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: stat3.label })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: aboutPath,
					className: "ad-gold-btn",
					children: ["Discover More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 15 })]
				})
			]
		})]
	});
}
function ReplicaServicesGridSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-labelledby": "ad-replica-services-title",
		className: "ad-replica-services-section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "ad-container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ad-replica-services-header",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "ad-replica-services-title",
					children: "Sure, we construct impressive structures"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ad-title-underline" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ad-replica-services-grid",
				children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ad-replica-service-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ad-replica-service-img",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: service.image,
							alt: service.title,
							loading: "lazy"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ad-replica-service-body",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: service.title }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: service.summary }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: service.href,
								className: "ad-learn-more-btn",
								children: ["Learn More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
							})
						]
					})]
				}, service.number))
			})]
		})
	});
}
function CompanyReputationSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-label": "Our Company Reputation",
		className: "ad-company-gold-section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "ad-container ad-company-gold-grid",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ad-company-gold-left",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ad-eyebrow-white",
						children: "Our Company"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Our work is our reputation, and we protect it with every project we do" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ad-white-underline" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: aboutPath,
						className: "ad-white-btn",
						children: ["Discover More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 15 })]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ad-company-gold-right",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "At Atharva Decorators, we deliver high-quality civil repair and painting services that enhance the safety, durability, and aesthetics of buildings. Backed by skilled professionals, modern tools, and industry-standard practices, we ensure every project is executed with precision and care." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ad-two-images-wrapper",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/atharv-images/commercial-construction.webp",
							alt: "Construction building with cranes",
							loading: "lazy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/atharv-images/project-excavator-action.jpeg",
							alt: "Excavator at construction site under blue sky",
							loading: "lazy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ad-floating-exp-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "25+" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "INDUSTRY EXPERIENCE" })]
						})
					]
				})]
			})]
		})
	});
}
function LatestProjectsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-labelledby": "ad-latest-title",
		className: "ad-latest-proj-section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "ad-container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ad-latest-proj-header",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ad-latest-proj-header-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ad-section-eyebrow",
						children: "Our Latest Project"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "ad-latest-title",
						children: "Construction makes dreams happen"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ad-latest-proj-header-right",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A showcase of our recently completed projects reflecting quality workmanship, timely execution, and lasting results." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: projectsPath,
						className: "ad-gold-btn",
						children: ["View All Projects ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 15 })]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ad-latest-collage-grid",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ad-collage-top",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ad-collage-item",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: latestCollageProjects[0].image,
							alt: latestCollageProjects[0].alt,
							loading: "lazy"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ad-collage-item",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: latestCollageProjects[1].image,
							alt: latestCollageProjects[1].alt,
							loading: "lazy"
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ad-collage-bottom",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "ad-collage-item",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: latestCollageProjects[2].image,
								alt: latestCollageProjects[2].alt,
								loading: "lazy"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "ad-collage-item",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: latestCollageProjects[3].image,
								alt: latestCollageProjects[3].alt,
								loading: "lazy"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "ad-collage-item",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: latestCollageProjects[4].image,
								alt: latestCollageProjects[4].alt,
								loading: "lazy"
							})
						})
					]
				})]
			})]
		})
	});
}
function ClientsShowcaseSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-label": "Clients Who Trust Us",
		className: "ad-clients-gold-section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "ad-container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ad-clients-gold-header",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Proud to Serve Clients Who Trust Us to Transform Their Spaces" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Our clients choose us for our commitment to excellence, transparent processes, and results that deliver long-term value. From small-scale projects to large developments, our diverse client base reflects the trust we've earned through consistent performance." })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ad-clients-gold-body",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ad-clients-team-img",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/atharv-images/engineers-architects-site.jpg",
						alt: "Engineers and architects on site",
						loading: "lazy",
						onError: (e) => {
							e.currentTarget.src = "/atharv-images/project-site-architects.jpeg";
						}
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ad-clients-card-grid",
					children: clientShowcaseLogos.map((client) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ad-client-white-card",
						title: client.name,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: client.src,
							alt: client.name,
							loading: "lazy"
						})
					}, client.name))
				})]
			})]
		})
	});
}
function ServiceAboutSplit({ kicker = "About", heading, description1, description2, image1 = "/atharv-images/commercial-construction.webp", image2 = "/atharv-images/project-excavator-action.jpeg" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-label": "About Service",
		className: "ad-container ad-service-about-split",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "ad-service-about-left",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ad-section-eyebrow",
					children: kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: heading }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ad-gold-bar" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "ad-service-about-right",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: description1 }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: description2 }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ad-service-two-photos",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: image1,
						alt: "Construction project site",
						loading: "lazy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: image2,
						alt: "Active construction machinery",
						loading: "lazy"
					})]
				})
			]
		})]
	});
}
function FeaturedProjects3x3Section({ kicker = "Featured Project", title = "Our Featured Project", description = "A curated showcase of our recently completed projects reflecting quality workmanship, timely execution, and lasting results." }) {
	const [selectedProject, setSelectedProject] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-labelledby": "ad-featured-3x3-title",
		className: "ad-featured-projects-section",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "ad-container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ad-featured-projects-header",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ad-eyebrow-gold",
						children: kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "ad-featured-3x3-title",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: description })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ad-projects-3x3-grid",
				children: featured3x3Projects.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ad-project-tile group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.image,
						alt: item.alt,
						loading: "lazy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ad-project-tile-overlay",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ad-project-tile-content",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "ad-project-tile-title",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "ad-project-tile-cat",
									children: item.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 mt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: `/projects/${item.id}`,
										className: "ad-project-tile-btn",
										children: "View Project"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "ad-project-tile-quick-btn",
										onClick: (e) => {
											e.stopPropagation();
											setSelectedProject(item);
										},
										title: "Quick Preview",
										children: "Quick View"
									})]
								})
							]
						})
					})]
				}, idx))
			})]
		}), selectedProject && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectModal, {
			project: selectedProject,
			onClose: () => setSelectedProject(null)
		})]
	});
}
function ProjectModal({ project, onClose }) {
	(0, import_react.useEffect)(() => {
		function handleKeyDown(e) {
			if (e.key === "Escape") onClose();
		}
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [onClose]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/15 bg-[#0b0f17] text-white shadow-2xl animate-in zoom-in-95 duration-200",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					className: "absolute top-4 right-4 z-10 rounded-full bg-black/70 p-2 text-white/80 hover:bg-black hover:text-white transition-colors",
					"aria-label": "Close modal",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-[16/10] w-full overflow-hidden bg-slate-900",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: project.image,
							alt: project.alt || project.title,
							className: "w-full h-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-transparent to-black/30" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-4 left-6 right-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-block rounded-full bg-amber-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-400 border border-amber-500/40",
								children: project.category
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-2xl sm:text-3xl font-semibold text-white",
								children: project.title
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-white/80 leading-relaxed",
							children: project.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-4 pt-3 border-t border-white/10 text-xs sm:text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white/40 block text-xs",
								children: "Scope of Work"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-white/90",
								children: project.scope
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white/40 block text-xs",
								children: "Location"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-amber-400",
								children: project.location
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-3 flex flex-wrap items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: `/projects/${project.id}`,
									onClick: onClose,
									className: "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold text-xs uppercase tracking-wider hover:brightness-105 transition-all shadow-md",
									children: ["View Full Project Page ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: contactPath,
									onClick: onClose,
									className: "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-amber-500/60 text-amber-300 font-semibold text-xs hover:bg-amber-500/10 transition-colors",
									children: "Enquire About Project"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: company.telephone,
									className: "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-white/20 text-white font-medium text-xs hover:bg-white/5 transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
										size: 13,
										className: "text-amber-400"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Call Us" })]
								})
							]
						})
					]
				})
			]
		})
	});
}
function PowerfulSolutionsBanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-label": "Construction Solutions Call to Action",
		className: "ad-powerful-solutions-banner",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "ad-container ad-powerful-solutions-inner",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Powerful straightforward solutions for your construction needs" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Comprehensive civil repairs, premium architectural painting, and certified waterproofing solutions tailored to your building requirements." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ad-banner-btn-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: servicesPath,
						className: "ad-gold-btn",
						children: ["Discover More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 15 })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: contactPath,
						className: "ad-white-btn",
						children: ["Get a Quote ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 15 })]
					})]
				})
			]
		})
	});
}
function VisionMissionSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-label": "Vision and Mission",
		className: "ad-vision-mission-section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "ad-container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "We’re growing, and we want you to join us" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ad-vision-mission-grid",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ad-vision-mission-item",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Vision" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "To be the most trusted and innovative civil repair and painting solutions provider, transforming spaces with quality, reliability, and modern craftsmanship." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ad-vision-mission-item",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Mission" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "To deliver durable, professional, and customer-focused repair and painting services using advanced techniques, skilled teams, and sustainable practices." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ad-vision-mission-item",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Motto" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Building lasting trust through engineering precision, uncompromising safety, and flawless surface protection across every square foot." })]
					})
				]
			})]
		})
	});
}
function CoreValuesSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-label": "Core Values",
		className: "ad-container ad-core-values-section",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "ad-core-values-card",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Core Values" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Expertise You Can Trust" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Professional Workmanship" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Timely Project Delivery" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Transparent & Hassle-Free Service" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "End-to-End Solutions" })
			] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ad-core-values-img",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/atharv-images/project-site-architects.jpeg",
				alt: "Architectural construction tower structure",
				loading: "lazy"
			})
		})]
	});
}
function TrustedBrandsLegacySection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-label": "Our Trusted Heritage",
		className: "ad-container py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-md overflow-hidden shadow-xl border border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/atharv-images/unsplash-tower-construction.jpg",
					alt: "Site engineer and architect on site",
					className: "w-full aspect-[1.1] object-cover",
					loading: "lazy",
					onError: (e) => {
						e.currentTarget.src = "/atharv-images/project-site-architects.jpeg";
					}
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight",
					children: "We are trusted by 35,000+ world-class brands and organizations of all sizes"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-muted-foreground text-sm leading-relaxed mb-6",
					children: [
						"A second-generation entrepreneur, ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Avinash Deshmukh" }),
						" carries forward a legacy of excellence started by his father, ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Mr. Parshuram Deshmukh" }),
						". After graduating in Chemistry in ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "1998" }),
						", he gained hands-on experience in painting and project execution before founding ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Atharva Decorators in 2001" }),
						". Guided by innovation, integrity, and quality, he continues to transform spaces across Maharashtra."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-3 gap-4 pt-4 border-t border-border",
					children: clientShowcaseLogos.slice(0, 6).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-3 bg-secondary/30 rounded flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: c.src,
							alt: c.name,
							className: "max-h-8 object-contain"
						})
					}, c.name))
				})
			] })]
		})
	});
}
function ContactFloatingBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "ad-container ad-contact-strip-wrapper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "ad-contact-floating-bar",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ad-contact-bar-item",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ad-contact-bar-icon",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 22 })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ad-contact-bar-text",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Our Location" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Mumbai & Thane, Maharashtra, India" })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ad-contact-bar-item",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ad-contact-bar-icon",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 22 })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ad-contact-bar-text",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Phone" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: company.telephone,
							className: "hover:text-amber-400 transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: company.phone })
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ad-contact-bar-item",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ad-contact-bar-icon",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 22 })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ad-contact-bar-text",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Mail Address" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${company.email}`,
							className: "hover:text-amber-400 transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: company.email })
						})]
					})]
				})
			]
		})
	});
}
function HeroVideoBackground({ isPlaying }) {
	const iframeRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!iframeRef.current) return;
		const func = isPlaying ? "playVideo" : "pauseVideo";
		iframeRef.current.contentWindow?.postMessage(JSON.stringify({
			event: "command",
			func,
			args: ""
		}), "*");
	}, [isPlaying]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "ad-hero-video-bg-container",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ad-hero-video-poster" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ad-hero-video-wrapper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					ref: iframeRef,
					className: "ad-hero-video-iframe",
					src: "https://www.youtube-nocookie.com/embed/BF_4wxrrByY?autoplay=1&mute=1&loop=1&playlist=BF_4wxrrByY&controls=0&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1&playsinline=1&enablejsapi=1",
					title: "Atharv Decorators Nagothane Bungalow Project Video",
					allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
					tabIndex: -1
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ad-hero-video-overlay" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ad-hero-video-vignette" })
		]
	});
}
function HomePage() {
	const [isVideoPlaying, setIsVideoPlaying] = (0, import_react.useState)(true);
	const toggleVideoPlay = () => {
		setIsVideoPlaying((prev) => !prev);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			"aria-labelledby": "ad-home-title",
			className: "ad-hero-video-section",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroVideoBackground, { isPlaying: isVideoPlaying }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ad-container ad-hero-video-inner",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ad-hero-video-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
							light: true,
							children: "Building care, thoughtfully delivered"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "ad-display ad-hero-title ad-hero-video-title",
							id: "ad-home-title",
							children: [
								"Building strength.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Delivering trust." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "ad-hero-text ad-hero-video-desc",
							children: "Professional civil repair, painting and waterproofing solutions for residential, commercial and corporate spaces. Engineered with architectural precision, premium materials, and lasting durability."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ad-hero-video-actions",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									className: "ad-primary-cta ad-hero-quote-btn",
									size: "default",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: contactPath,
										children: "Get A Quote"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									className: "ad-hero-outline-btn",
									size: "default",
									variant: "ghost",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: servicesPath,
										children: ["Explore Services ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
											"aria-hidden": "true",
											size: 15
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "ad-text-cta ad-hero-call-pill",
									href: company.telephone,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ad-call-status-dot" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Call ", company.phone] })]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ad-hero-video-controls-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "ad-video-playpause-btn",
						onClick: toggleVideoPlay,
						"aria-label": isVideoPlaying ? "Pause background video" : "Play background video",
						title: isVideoPlaying ? "Pause Video" : "Play Video",
						children: isVideoPlaying ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { size: 22 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
							size: 22,
							className: "ml-1"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ad-hero-video-stat-card hidden lg:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "ad-hero-video-stat-number",
							children: "25+"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ad-hero-video-stat-text",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Years Experience" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Nagothane Bungalow & 150+ Sites" })]
						})]
					})]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectorCardsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhoWeAreSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReplicaServicesGridSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompanyReputationSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LatestProjectsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientsShowcaseSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PowerfulSolutionsBanner, {})
	] });
}
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "About Us",
			title: "A legacy built on trust.",
			backgroundImage: "/atharv-images/project-modern-architecture.jpeg"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhoWeAreSection, {
			stat1: {
				count: "4K",
				label: "Project Done"
			},
			stat2: {
				count: "98%",
				label: "Happy Clients"
			},
			stat3: {
				count: "256+",
				label: "Professional Workers"
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustedBrandsLegacySection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreValuesSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisionMissionSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PowerfulSolutionsBanner, {})
	] });
}
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Our Services",
			title: "Complete care for your property.",
			backgroundImage: "/atharv-images/project-glass-building.jpeg"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectorCardsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReplicaServicesGridSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompanyReputationSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedProjects3x3Section, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PowerfulSolutionsBanner, {})
	] });
}
var projects = [
	{
		title: "Perpustakaan Nasional Jakarta",
		category: "Public Building",
		image: "/atharv-images/project-site-3.jpg",
		alt: "Perpustakaan Nasional Jakarta - Public Building",
		summary: "Iconic public library and cultural center featuring expansive glass facades and refined architectural finishes.",
		location: "Jakarta, Indonesia",
		scope: "Architectural Finishing & Surface Treatments"
	},
	{
		title: "Silver Grid Office",
		category: "Office Building",
		image: "/atharv-images/project-site-4.jpg",
		alt: "Silver Grid Office - Contemporary Office Building",
		summary: "Geometric modern corporate workplace with angular glazing, premium insulation and civil structural maintenance.",
		location: "Commercial Business District",
		scope: "Civil Repairs & Exterior Glazing"
	},
	{
		title: "Java News Agency",
		category: "Office Building",
		image: "/atharv-images/project-site-9.jpg",
		alt: "Java News Agency - Modern Media Headquarters",
		summary: "Curvilinear glass skyscraper designed for high-density broadcast media operations with weather-resistant exterior coatings.",
		location: "Metropolitan Media Center",
		scope: "Exterior Waterproofing & Painting"
	},
	{
		title: "The Phiramada",
		category: "Art Center",
		image: "/atharv-images/project-site-5.jpg",
		alt: "The Phiramada - Architectural Art Center",
		summary: "Sculptural tiered cultural pavilion with deep fluted concrete reliefs and protective architectural coatings.",
		location: "Cultural Arts District",
		scope: "Texture & Decorative PU Coatings"
	},
	{
		title: "Black Badoo Gym",
		category: "Sport Center",
		image: "/atharv-images/project-site-2.jpg",
		alt: "Black Badoo Gym - Modern Sport Center",
		summary: "State-of-the-art sports and fitness complex enclosed in dark architectural glass with seamless waterproofing.",
		location: "Urban Athletic Park",
		scope: "Structural Glazing & Waterproofing"
	},
	{
		title: "Thinkpod Stadium",
		category: "Sport Center",
		image: "/atharv-images/project-site-1.jpg",
		alt: "Thinkpod Stadium - Futuristic Civic Arena",
		summary: "Monumental fluid arena structure built for international sporting events with heavy-duty civil works and protective coatings.",
		location: "National Sports Complex",
		scope: "Civic Infrastructure & Concrete Sealing"
	},
	{
		title: "Cikuya Station",
		category: "Public Transportation",
		image: "/atharv-images/project-site-7.jpg",
		alt: "Cikuya Station - Public Transportation Transit Hub",
		summary: "High-capacity subterranean transit platform engineered with coffered vaulted arches and durable civil treatments.",
		location: "Central Transit Corridor",
		scope: "Road & Miscellaneous Civil Works"
	},
	{
		title: "Souta Airport",
		category: "Public Transportation",
		image: "/atharv-images/project-site-8.jpg",
		alt: "Souta Airport - Public Transportation Terminal",
		summary: "Air terminal galleria featuring soaring ribbed vaults, polished high-gloss surfaces and premium finishes.",
		location: "International Gateway",
		scope: "High-Gloss PU Polishing & Civil Repairs"
	},
	{
		title: "Ophelia Luxury Hotel",
		category: "Commercial Building",
		image: "/atharv-images/project-site-6.jpg",
		alt: "Ophelia Luxury Hotel - Commercial Hospitality Building",
		summary: "Five-star resort hospitality destination with infinity pool deck waterproofing and architectural surface detailing.",
		location: "Luxury Coastal Enclave",
		scope: "Civil Repairs, PU Coating & Waterproofing"
	},
	{
		title: "Commercial tower development",
		category: "Commercial buildings",
		image: "/atharv-images/project-towers-construction.jpeg",
		alt: "Commercial towers under construction with cranes against the sky"
	},
	{
		title: "Contemporary glass architecture",
		category: "Building exteriors",
		image: "/atharv-images/project-glass-building.jpeg",
		alt: "Modern dark glass office building with reflective facade"
	},
	{
		title: "A new perspective on the skyline",
		category: "Architectural buildings",
		image: "/atharv-images/project-angular-building.jpeg",
		alt: "Angular modern building with geometric glass facade"
	},
	{
		title: "Care on every construction site",
		category: "Project delivery",
		image: "/atharv-images/project-site-architects.jpeg",
		alt: "Construction professionals with blueprints at a building site"
	},
	{
		title: "A refreshed building exterior",
		category: "Painting & restoration",
		image: "/atharv-images/exterior-painting-repairing.webp",
		alt: "Building with scaffolding undergoing exterior painting and repair"
	}
];
function ProjectsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Our Projects",
			title: "Construction makes dreams happen.",
			backgroundImage: "/atharv-images/project-tower-site.jpeg"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceAboutSplit, {
			kicker: "About Project",
			heading: "Our work is our reputation, and we protect it with every project we do",
			description1: "We deliver high-quality civil repair, building painting and certified waterproofing solutions for residential societies, commercial developments and corporate campuses.",
			description2: "Backed by 25+ years of trusted engineering experience, our team approaches every structure with thorough inspection, premium materials, and impeccable craftsmanship."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedProjects3x3Section, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LatestProjectsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PowerfulSolutionsBanner, {})
	] });
}
function ContactEnquiryForm() {
	function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const name = String(formData.get("name") ?? "").trim();
		const phone = String(formData.get("phone") ?? "").trim();
		const email = String(formData.get("email") ?? "").trim();
		const workType = String(formData.get("workType") ?? "General enquiry");
		const message = String(formData.get("message") ?? "").trim();
		const subject = encodeURIComponent(`Project enquiry — ${workType}`);
		const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nWork type: ${workType}\n\nProject details:\n${message}`);
		window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "ad-contact-form",
		onSubmit: handleSubmit,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ad-contact-form-heading",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Tell us what you have in mind" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "ad-heading",
						id: "ad-contact-form-title",
						children: "Drop us a line."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Fill out the form below and share your project details. We’ll get back to you with the right solution." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ad-form-grid",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "ad-form-field",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							autoComplete: "name",
							name: "name",
							placeholder: "Name",
							required: true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "ad-form-field",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Phone" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							autoComplete: "tel",
							name: "phone",
							placeholder: "Phone",
							required: true,
							type: "tel"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "ad-form-field",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Email" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							autoComplete: "email",
							name: "email",
							placeholder: "Email",
							required: true,
							type: "email"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "ad-form-field",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Subject" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "subject",
							placeholder: "Subject",
							required: true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "ad-form-field ad-form-message",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Select the type of Work" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							defaultValue: "",
							name: "workType",
							required: true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								disabled: true,
								value: "",
								children: "Choose a service"
							}), services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: service.title,
								children: service.title
							}, service.number))]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "ad-form-field ad-form-message",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Message" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							name: "message",
							placeholder: "A few details about your project",
							required: true,
							rows: 4
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				className: "ad-gold-btn mt-6",
				size: "default",
				type: "submit",
				children: ["Send My Message ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
					"aria-hidden": "true",
					size: 16
				})]
			})
		]
	});
}
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Contact Us",
			title: "Let’s talk about your project.",
			backgroundImage: "/atharv-images/construction-skyline.jpg"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactFloatingBar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "ad-contact-title",
			className: "ad-contact-page-section pt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ad-container ad-contact-page-grid",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ad-contact-page-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Good work starts with a conversation" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "ad-heading",
							id: "ad-contact-title",
							children: ["A considered start. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "A lasting result." })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "ad-body-copy",
							children: "Have a project in mind or need expert guidance for your civil, painting, or waterproofing requirements? Our team is here to help with reliable solutions and honest advice. Reach out to us today to discuss your needs or schedule a site inspection."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ad-contact-direct-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Direct Support & Site Inspections" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Speak directly with our senior project coordinator for immediate site assessments, pricing estimates, and technical queries across Mumbai & Thane." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "ad-contact-direct-actions",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: company.telephone,
										className: "ad-direct-call-btn",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 14 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Call +91 8879 555 125" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "https://wa.me/918879555125?text=Hello%20Atharv%20Decorators,%20I%20would%20like%20to%20inquire%20about%20civil%20repair%20and%20painting%20services",
										target: "_blank",
										rel: "noreferrer",
										className: "ad-direct-whatsapp-btn",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, {
											size: 14,
											className: "text-[#25d366]"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "WhatsApp Inquiry" })]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-base font-bold text-foreground mb-4",
								children: "Our Social Media"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://facebook.com",
										target: "_blank",
										rel: "noreferrer",
										className: "w-10 h-10 rounded bg-[#c49a32] text-black flex items-center justify-center hover:scale-110 transition-transform",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { size: 18 })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://youtube.com",
										target: "_blank",
										rel: "noreferrer",
										className: "w-10 h-10 rounded bg-[#c49a32] text-black flex items-center justify-center hover:scale-110 transition-transform",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { size: 18 })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://instagram.com",
										target: "_blank",
										rel: "noreferrer",
										className: "w-10 h-10 rounded bg-[#c49a32] text-black flex items-center justify-center hover:scale-110 transition-transform",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { size: 18 })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://linkedin.com",
										target: "_blank",
										rel: "noreferrer",
										className: "w-10 h-10 rounded bg-[#c49a32] text-black flex items-center justify-center hover:scale-110 transition-transform",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { size: 18 })
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 rounded-md overflow-hidden border border-border shadow-md aspect-[16/9]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								title: "Atharv Decorators Location",
								src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120638.1685361009!2d72.9099882!3d19.1098485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b713bf39d107%3A0xb35a09e5399ec6eb!2sThane%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000",
								width: "100%",
								height: "100%",
								style: { border: 0 },
								loading: "lazy",
								allowFullScreen: true
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactEnquiryForm, {})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PowerfulSolutionsBanner, {})
	] });
}
function ServiceDetailPage({ service }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: service.title,
			title: service.title,
			backgroundImage: "/atharv-images/project-futuristic-building.jpeg"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceAboutSplit, {
			kicker: "About",
			heading: service.heading,
			description1: service.description,
			description2: service.points.join(". ") + "."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedProjects3x3Section, {
			kicker: "FEatured Project",
			title: "Our Featured Project",
			description: "A showcase of our recently completed projects reflecting quality workmanship, timely execution, and lasting results."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PowerfulSolutionsBanner, {})
	] });
}
function ProjectDetailPage({ project }) {
	const currentIndex = featured3x3Projects.findIndex((p) => p.id === project.id);
	const prevProject = featured3x3Projects[(currentIndex - 1 + featured3x3Projects.length) % featured3x3Projects.length];
	const nextProject = featured3x3Projects[(currentIndex + 1) % featured3x3Projects.length];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: `${project.category} • ${project.location}`,
			title: project.title,
			backgroundImage: project.image
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "ad-project-meta-bar",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ad-container",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ad-project-meta-grid",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ad-project-meta-item",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ad-meta-label",
								children: "Location"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ad-meta-value",
								children: project.location
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ad-project-meta-item",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ad-meta-label",
								children: "Category"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ad-meta-value",
								children: project.category
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ad-project-meta-item",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ad-meta-label",
								children: "Client"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ad-meta-value",
								children: project.client
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ad-project-meta-item",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ad-meta-label",
								children: "Project Scale"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ad-meta-value",
								children: project.area
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ad-project-meta-item",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ad-meta-label",
								children: "Duration"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ad-meta-value",
								children: project.duration
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ad-project-meta-item",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ad-meta-label",
								children: "Scope"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ad-meta-value",
								children: project.scope
							})]
						})
					]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "ad-project-overview-section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ad-container",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ad-project-overview-grid",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ad-project-overview-copy",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "ad-eyebrow-gold",
								children: "Project Case Study"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "ad-project-heading",
								children: project.heading
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "ad-project-lead",
								children: project.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "ad-project-body",
								children: project.description
							}),
							project.narrative2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "ad-project-body",
								children: project.narrative2
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "ad-project-highlights",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "ad-highlights-title",
									children: "Key Engineering & Execution Highlights"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "ad-highlights-list",
									children: project.highlights.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "ad-highlight-icon text-amber-500",
										size: 16
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: h })] }, i))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "ad-project-cta-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: contactPath,
									className: "ad-pill-solid-btn",
									children: ["Enquire About Similar Project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: company.telephone,
									className: "ad-pill-outline-btn",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
										size: 13,
										className: "text-amber-500"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Call +91 8879 555 125" })]
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ad-project-overview-visual",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ad-project-image-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: project.image,
								alt: project.alt || project.title,
								className: "ad-project-showcase-img"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "ad-project-badge-overlay",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ad-badge-gold",
									children: "Atharv Decorators • 25+ Years Excellence"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "ad-badge-subtitle",
									children: "Delivered with architectural precision & ISO compliance"
								})]
							})]
						})
					})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedProjects3x3Section, {
			kicker: "More Works",
			title: "Explore Related Projects",
			description: "Discover our diverse portfolio across residential, commercial, industrial, and civic landmarks."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "ad-project-nav-section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ad-container",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ad-project-nav-grid",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: `/projects/${prevProject.id}`,
							className: "ad-project-nav-link ad-project-nav-prev",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ad-nav-direction",
									children: "← Previous Project"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ad-nav-proj-title",
									children: prevProject.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ad-nav-proj-cat",
									children: prevProject.category
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: projectsPath,
							className: "ad-project-nav-all",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View All 9 Projects" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: `/projects/${nextProject.id}`,
							className: "ad-project-nav-link ad-project-nav-next",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ad-nav-direction",
									children: "Next Project →"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ad-nav-proj-title",
									children: nextProject.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ad-nav-proj-cat",
									children: nextProject.category
								})
							]
						})
					]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PowerfulSolutionsBanner, {})
	] });
}
//#endregion
export { ProjectsPage as a, featured3x3Projects as c, ProjectDetailPage as i, services as l, ContactPage as n, ServiceDetailPage as o, HomePage as r, ServicesPage as s, AboutPage as t };
