import { useEffect, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  Facebook,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  ShieldCheck,
  X,
  Youtube,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Link001 } from "@/components/ui/skiper40";

const company = {
  phone: "+91 8879 555 125",
  telephone: "tel:+918879555125",
  email: "atharvdecorators1@gmail.com",
};

export const services = [
  {
    number: "01",
    title: "Interior Painting & Finishing",
    href: "/interior-painting-finishing",
    image: "/atharv-images/interior-painting-hero.webp",
    summary: "Thoughtful colours and refined interior finishes, delivered with care.",
    heading: "Flawless finishes that transform your interiors.",
    description:
      "Interior painting and finishing shape the look and feel of a space. We focus on considered colour, careful preparation and refined finishes that complement the way you live and work.",
    points: [
      "Interior painting planned around your space",
      "Carefully prepared surfaces and clean, even coats",
      "Finishes suited to residential and commercial interiors",
    ],
    gallery: [
      { src: "/atharv-images/interior-painting-hero.webp", alt: "Beautifully finished modern living room with designer ceiling" },
      { src: "/atharv-images/project-curved-architecture.jpeg", alt: "Modern architectural interior with reflective surfaces" },
    ],
  },
  {
    number: "02",
    title: "Exterior Painting & Building Repainting",
    href: "/exterior-painting-building-repainting",
    image: "/atharv-images/exterior-painting-repairing.webp",
    summary: "Building repainting that refreshes your façade and elevates its appearance.",
    heading: "A considered new finish for your building’s exterior.",
    description:
      "Give your building a renewed first impression with exterior painting and repainting. Every project begins with the building itself, its surfaces and the finish that suits its setting.",
    points: [
      "Exterior painting for residential and commercial buildings",
      "Repainting to renew the look of existing façades",
      "Work coordinated with your building and site requirements",
    ],
    gallery: [
      { src: "/atharv-images/exterior-painting-repairing.webp", alt: "Building with scaffolding undergoing exterior painting" },
      { src: "/atharv-images/project-towers-construction.jpeg", alt: "Commercial towers under construction" },
    ],
  },
  {
    number: "03",
    title: "Civil Repairs & Structural Maintenance",
    href: "/civil-repairs-structural-maintenance",
    image: "/atharv-images/civil-repairs-maintenance.webp",
    summary: "Careful building maintenance focused on strength, safety and longevity.",
    heading: "Restore strength, stability and structural integrity.",
    description:
      "Thoughtful civil repairs help extend the life and functionality of a building. We assess the issue, understand its cause and carry out repair work with durability and the site in mind.",
    points: [
      "Civil repair and ongoing structural maintenance",
      "Site-specific repair planning and execution",
      "Work focused on long-term durability and function",
    ],
    gallery: [
      { src: "/atharv-images/civil-repairs-maintenance.webp", alt: "Construction workers with safety gear at repair site" },
      { src: "/atharv-images/project-site-architects.jpeg", alt: "Construction professionals at a building site" },
    ],
  },
  {
    number: "04",
    title: "Waterproofing Solutions",
    href: "/waterproofing-solutions",
    image: "/atharv-images/waterproofing-solutions.webp",
    summary: "Purposeful waterproofing to help protect your property from moisture.",
    heading: "Lasting protection against leaks and moisture damage.",
    description:
      "Seepage and dampness need the right response for the conditions on site. We provide tailored waterproofing solutions based on where moisture occurs and the needs of your building.",
    points: [
      "Waterproofing planned around your site conditions",
      "Solutions for leaks, seepage and moisture exposure",
      "An approach shaped by the building and its requirements",
    ],
    gallery: [
      { src: "/atharv-images/waterproofing-solutions.webp", alt: "Worker applying waterproof coating on a surface" },
    ],
  },
  {
    number: "05",
    title: "Texture, PU & Polishing Works",
    href: "/texture-pu-polishing-works",
    image: "/atharv-images/texture-pu-polishing.webp",
    summary: "Distinctive surface treatments with a premium architectural finish.",
    heading: "Premium surface finishes, made to leave a lasting impression.",
    description:
      "Texture finishes, PU coatings and polishing bring depth and character to interior spaces and surfaces. Our specialist finishes pair considered detail with everyday durability.",
    points: [
      "Decorative texture finishes for interior walls",
      "PU coatings and surface polishing",
      "Architectural details with a refined, durable finish",
    ],
  },
  {
    number: "06",
    title: "Road & Miscellaneous Civil Works",
    href: "/road-miscellaneous-civil-works",
    image: "/atharv-images/road-civil-works-hero.webp",
    summary: "Reliable civil and road works, planned for long-term performance.",
    heading: "Civil infrastructure built around your project’s needs.",
    description:
      "Road and miscellaneous civil works take careful coordination and a practical understanding of site requirements. We undertake infrastructure works for residential, commercial and industrial settings.",
    points: [
      "Road and internal access works",
      "Civil works for residential, commercial and industrial sites",
      "Project-specific execution focused on lasting performance",
    ],
  },
 ] as const;

type Service = (typeof services)[number];

const homePath = "/" as const;
const servicesPath = "/services" as const;
const aboutPath = "/about" as const;
const projectsPath = "/projects" as const;
const contactPath = "/contact" as const;

function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <img
      className="ad-logo"
      src="/atharv-images/atharv-decorators-logo.webp"
      alt="Atharv Decorators"
      width="557"
      height="136"
      loading={footer ? "lazy" : "eager"}
    />
  );
}

function QuoteButton({ className = "" }: { className?: string }) {
  return (
    <Button asChild className={`ad-header-cta ${className}`} size="sm" variant="outline">
      <a href={`mailto:${company.email}?subject=Project%20enquiry`}>Discuss your project</a>
    </Button>
  );
}

function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
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

  const filteredServices = services.filter((s) =>
    s.title.toLowerCase().includes(query.toLowerCase()) ||
    s.summary.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#0a0e16] text-white shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
          <Search className="h-5 w-5 text-amber-400 shrink-0" />
          <input
            autoFocus
            type="text"
            placeholder="Search services, projects, keywords... (Press Esc to close)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-base text-white placeholder-white/40 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-xs uppercase tracking-wider text-white/40 hover:text-white"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="rounded p-1 text-white/50 hover:bg-white/10 hover:text-white"
            aria-label="Close search"
          >
            <X size={18} />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          <div>
            <div className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-400">Services</div>
            <div className="mt-1 space-y-1">
              {filteredServices.map((service) => (
                <Link
                  key={service.number}
                  to={service.href}
                  onClick={onClose}
                  className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm hover:bg-white/10 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-amber-400 font-bold">{service.number}</span>
                    <span className="text-white/90 group-hover:text-amber-400 font-medium">{service.title}</span>
                  </div>
                  <ArrowRight size={14} className="text-white/40 group-hover:text-amber-400 transition-colors" />
                </Link>
              ))}
              {filteredServices.length === 0 && (
                <div className="px-3 py-2 text-xs text-white/40">No matching services</div>
              )}
            </div>
          </div>

          <div>
            <div className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-400">Projects</div>
            <div className="mt-1 space-y-1">
              {filteredProjects.slice(0, 5).map((project) => (
                <Link
                  key={project.title}
                  to={projectsPath}
                  onClick={onClose}
                  className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm hover:bg-white/10 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <img src={project.image} alt={project.title} className="w-8 h-8 rounded object-cover" />
                    <div>
                      <div className="text-white/90 group-hover:text-amber-400 font-medium">{project.title}</div>
                      <div className="text-xs text-white/50">{project.category}</div>
                    </div>
                  </div>
                  <ArrowRight size={14} className="text-white/40 group-hover:text-amber-400 transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 pt-3 flex items-center justify-between px-3 text-xs text-white/40">
            <span>Press <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-white/80">ESC</kbd> to exit</span>
            <Link to={projectsPath} onClick={onClose} className="hover:text-amber-400">View all projects &rarr;</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }
    function handleKeyDown(e: KeyboardEvent) {
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

  return (
    <>
      <header className={`ad-header${isScrolled ? " is-scrolled" : ""}`}>
        <div className="ad-container ad-header-inner">
          <Link
            aria-label="Atharv Decorators home"
            className="ad-brand-link"
            onClick={() => setIsOpen(false)}
            from="/"
            to={homePath}
          >
            <Logo />
          </Link>
          <Button
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            className="ad-menu-toggle"
            onClick={() => setIsOpen((current) => !current)}
            size="icon"
            variant="outline"
          >
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>

          <nav aria-label="Main navigation" className={`ad-nav${isOpen ? " is-open" : ""}`}>
            <Link001
              asChild
              active={pathname === homePath}
              underlineColor="bg-amber-400"
            >
              <Link
                aria-current={pathname === homePath ? "page" : undefined}
                className={`ad-nav-link${pathname === homePath ? " is-active" : ""}`}
                onClick={() => setIsOpen(false)}
                to={homePath}
              >
                Home
              </Link>
            </Link001>

            <Link001
              asChild
              active={pathname === aboutPath}
              underlineColor="bg-amber-400"
            >
              <Link
                aria-current={pathname === aboutPath ? "page" : undefined}
                className={`ad-nav-link${pathname === aboutPath ? " is-active" : ""}`}
                onClick={() => setIsOpen(false)}
                from="/"
                to={aboutPath}
              >
                About
              </Link>
            </Link001>

            <div className="ad-nav-dropdown-container">
              <Link001
                asChild
                active={isServicesActive}
                underlineColor="bg-amber-400"
              >
                <Link
                  aria-current={isServicesActive ? "page" : undefined}
                  className={`ad-nav-link ad-services-trigger${isServicesActive ? " is-active" : ""}`}
                  onClick={() => setIsOpen(false)}
                  from="/"
                  to={servicesPath}
                >
                  Services <ChevronDown className="ad-nav-chevron" size={14} />
                </Link>
              </Link001>

              <div className="ad-nav-service-menu">
                <Link className="ad-nav-service-overview" onClick={() => setIsOpen(false)} from="/" to={servicesPath}>
                  View all services <ArrowRight aria-hidden="true" size={14} />
                </Link>
                {services.map((service) => (
                  <Link
                    aria-current={pathname === service.href ? "page" : undefined}
                    key={service.number}
                    onClick={() => setIsOpen(false)}
                    from="/"
                    to={service.href}
                  >
                    <span>{service.number}</span> {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link001
              asChild
              active={pathname === projectsPath}
              underlineColor="bg-amber-400"
            >
              <Link
                aria-current={pathname === projectsPath ? "page" : undefined}
                className={`ad-nav-link${pathname === projectsPath ? " is-active" : ""}`}
                onClick={() => setIsOpen(false)}
                from="/"
                to={projectsPath}
              >
                Projects
              </Link>
            </Link001>

            <Link001
              asChild
              active={pathname === contactPath}
              underlineColor="bg-amber-400"
            >
              <Link
                aria-current={pathname === contactPath ? "page" : undefined}
                className={`ad-nav-link${pathname === contactPath ? " is-active" : ""}`}
                onClick={() => setIsOpen(false)}
                from="/"
                to={contactPath}
              >
                Contact
              </Link>
            </Link001>

            <span className="ad-nav-divider" aria-hidden="true" />

            <button
              type="button"
              className="ad-search-btn"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search website"
              title="Search (Ctrl+K)"
            >
              <Search size={18} />
            </button>
          </nav>
        </div>
      </header>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}

export function Footer() {
  return (
    <footer className="ad-footer">
      <div className="ad-container">
        <div className="ad-footer-main">
          <div className="ad-footer-brand">
            <Link aria-label="Atharv Decorators home" className="ad-brand-link" from="/" to={homePath}>
              <Logo footer />
            </Link>
            <p>
              Civil repairs, building painting and waterproofing, delivered with care for your
              property and the people who use it.
            </p>
          </div>
          <div>
            <h2 className="ad-footer-label">Explore</h2>
            <nav aria-label="Footer navigation" className="ad-footer-links">
              <Link from="/" to={homePath}>Home</Link>
              <Link from="/" to={aboutPath}>About us</Link>
              <Link from="/" to={servicesPath}>Our services</Link>
              <Link from="/" to={projectsPath}>Projects</Link>
              <Link from="/" to={contactPath}>Contact us</Link>
            </nav>
          </div>
          <div>
            <h2 className="ad-footer-label">Get in touch</h2>
            <div className="ad-footer-links">
              <a href={company.telephone}>{company.phone}</a>
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <Link from="/" to={contactPath}>Enquire about a project</Link>
            </div>
          </div>
        </div>
        <div className="ad-footer-bottom">
          <span>© {new Date().getFullYear()} Atharv Decorators. All rights reserved.</span>
          <span>Considered craftsmanship. Lasting work.</span>
        </div>
      </div>
    </footer>
  );
}

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div className="atharv-site">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={light ? "ad-eyebrow" : "ad-kicker"}>{children}</p>;
}

function ArrowLink({ to, children }: { to: Service["href"] | typeof aboutPath | typeof servicesPath; children: ReactNode }) {
  return (
    <Link className="ad-link" from="/" to={to}>
      {children} <ArrowRight aria-hidden="true" size={15} />
    </Link>
  );
}

function ServiceGrid({ items = services }: { items?: readonly Service[] }) {
  return (
    <div className="ad-service-grid">
      {items.map((service) => (
        <article className="ad-service-card" key={service.number}>
          <Link
            aria-label={`Explore ${service.title}`}
            className="ad-service-image"
            title={service.title}
            from="/"
            to={service.href}
          >
            <img alt={service.title} height="677" loading="lazy" src={service.image} width="1000" />
            <span aria-hidden="true" className="ad-service-number">
              {service.number}
            </span>
          </Link>
          <div className="ad-service-content">
            <h3>{service.title}</h3>
            <p>{service.summary}</p>
            <ArrowLink to={service.href}>Explore service</ArrowLink>
          </div>
        </article>
      ))}
    </div>
  );
}

function PageHero({
  title,
  eyebrow,
  backgroundImage = "/atharv-images/project-futuristic-building.jpeg",
}: {
  title: string;
  eyebrow: string;
  backgroundImage?: string;
}) {
  return (
    <section
      aria-label={eyebrow}
      className="ad-page-hero"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(10,16,20,0.92) 0%, rgba(10,16,20,0.72) 48%, rgba(10,16,20,0.52) 100%), url("${backgroundImage}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="ad-container">
        <nav aria-label="Breadcrumb" className="ad-breadcrumb">
          <Link to={homePath}>Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{eyebrow}</span>
        </nav>
        <h1 className="ad-display">{title}</h1>
      </div>
    </section>
  );
}

function ValueStrip() {
  return (
    <div aria-label="How we work" className="ad-value-strip">
      <div className="ad-value-item">
        <ShieldCheck aria-hidden="true" />
        <span>Quality-led work</span>
      </div>
      <div className="ad-value-item">
        <Clock3 aria-hidden="true" />
        <span>Reliable execution</span>
      </div>
      <div className="ad-value-item">
        <Layers3 aria-hidden="true" />
        <span>End-to-end solutions</span>
      </div>
    </div>
  );
}

function ContactBand() {
  return (
    <section aria-labelledby="ad-contact-title" className="ad-contact-cta">
      <div className="ad-container ad-contact-inner">
        <div>
          <Eyebrow light>Start with a conversation</Eyebrow>
          <h2 className="ad-display" id="ad-contact-title">
            Let’s talk about your space.
          </h2>
          <p>Tell us about your building or project and we’ll help you find the right way forward.</p>
        </div>
        <Button asChild className="ad-cta-button" size="default">
          <a href={`mailto:${company.email}?subject=Project%20enquiry`}>
            Get in touch <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </Button>
      </div>
    </section>
  );
}

export const clientShowcaseLogos = [
  { name: "R Galleria", src: "/atharv-images/client-r-galleria.webp" },
  { name: "Runwal Greens", src: "/atharv-images/client-runwal-greens.webp" },
  { name: "Rebel Foods", src: "/atharv-images/client-rebel-foods.webp" },
  { name: "Amazon", src: "/atharv-images/client-amazon.webp" },
  { name: "Turner", src: "/atharv-images/client-turner.webp" },
  { name: "Taj Hotels", src: "/atharv-images/client-taj.webp" },
  { name: "MSC Bank", src: "/atharv-images/client-msc-bank.webp" },
  { name: "Talwalkars", src: "/atharv-images/client-talwalkars.webp" },
  { name: "L&T Construction", src: "/atharv-images/client-lt-construction.webp" },
  { name: "MAN Infraconstruction", src: "/atharv-images/client-man-infra.webp" },
  { name: "Unity Construction", src: "/atharv-images/client-unity-construction.webp" },
  { name: "Balsan Developers", src: "/atharv-images/client-balsan-developers.webp" },
] as const;

export const sectorCards = [
  {
    title: "Residential",
    icon: "/atharv-images/icon-residential.png",
    description:
      "Thoughtfully designed homes that balance comfort, functionality, and personal style. We create living spaces that reflect your lifestyle and feel truly yours.",
  },
  {
    title: "Commercial",
    icon: "/atharv-images/icon-commercial.png",
    description:
      "Smart, efficient interiors designed to enhance productivity and brand identity. We craft workspaces that are functional, modern, and future-ready.",
  },
  {
    title: "Hospitality",
    icon: "/atharv-images/icon-hospitality.png",
    description:
      "Inviting interiors that create memorable experiences for guests. Designed to blend aesthetics, comfort, and operational efficiency seamlessly.",
  },
  {
    title: "Multipurpose",
    icon: "/atharv-images/icon-multipurpose.png",
    description:
      "Flexible spaces designed to adapt to multiple functions with ease. Intelligent planning ensures versatility without compromising on design or comfort.",
  },
] as const;

export const featured3x3Projects = [
  { image: "/atharv-images/modern-architectural-facade.jpg", alt: "Contemporary geometric architectural facade" },
  { image: "/atharv-images/project-angular-building.jpeg", alt: "Angular modern building with geometric glass facade" },
  { image: "/atharv-images/curved-civic-building.jpg", alt: "Curved civic building with reflective facade" },
  { image: "/atharv-images/project-modern-architecture.jpeg", alt: "Stepped white geometric building facade" },
  { image: "/atharv-images/commercial-glass-building.jpg", alt: "Contemporary glass commercial building" },
  { image: "/atharv-images/project-futuristic-building.jpeg", alt: "Curved futuristic civic building with sweeping rooflines" },
  { image: "/atharv-images/modern-atrium.jpg", alt: "Modern architectural glass atrium interior" },
  { image: "/atharv-images/project-curved-architecture.jpeg", alt: "Modern curved architectural structure" },
  { image: "/atharv-images/interior-painting-hero.webp", alt: "Contemporary luxury residential villa with pool and interior finish" },
] as const;

export const latestCollageProjects = [
  { image: "/atharv-images/curved-civic-building.jpg", alt: "Curved civic building with reflective pool" },
  { image: "/atharv-images/project-angular-building.jpeg", alt: "Angular geometric cantilever facade" },
  { image: "/atharv-images/project-modern-architecture.jpeg", alt: "Stepped white facade" },
  { image: "/atharv-images/commercial-glass-building.jpg", alt: "Glass commercial corporate office" },
  { image: "/atharv-images/project-futuristic-building.jpeg", alt: "Futuristic sweeping architectural structure" },
] as const;

/* Sector Cards Strip Section (Reference 16) */
export function SectorCardsSection() {
  return (
    <div className="ad-container ad-sectors-strip-wrapper">
      <div className="ad-sectors-strip">
        {sectorCards.map((sector) => (
          <div key={sector.title} className="ad-sector-card">
            <img src={sector.icon} alt={sector.title} className="ad-sector-icon" />
            <h3>{sector.title}</h3>
            <p>{sector.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Who We Are Section (Reference 11 & 18) */
export function WhoWeAreSection({
  stat1 = { count: "150+", label: "Completed Projects" },
  stat2 = { count: "98%", label: "Happy Clients" },
  stat3 = { count: "256+", label: "Expert Workers" },
  image = "/atharv-images/project-towers-construction.jpeg",
}: {
  stat1?: { count: string; label: string };
  stat2?: { count: string; label: string };
  stat3?: { count: string; label: string };
  image?: string;
}) {
  return (
    <section aria-label="Who We Are" className="ad-container ad-who-we-are-section">
      <div className="ad-who-visual">
        <img src={image} alt="High rise towers under construction" loading="lazy" />
      </div>
      <div className="ad-who-content">
        <span className="ad-section-eyebrow">Who We Are</span>
        <h2 className="ad-section-heading">We create buildings that meet your needs</h2>
        <p className="ad-section-desc">
          With over 25+ years of industry experience and 150+ successfully completed projects, Atharva
          Decorators is a trusted name in civil repairs, waterproofing, and painting solutions. We deliver
          durable workmanship, modern techniques, and timely execution—ensuring structures remain safe,
          strong, and visually refined.
        </p>
        <div className="ad-who-stats-row">
          <div className="ad-who-stat-item">
            <strong>{stat1.count}</strong>
            <span>{stat1.label}</span>
          </div>
          <div className="ad-who-stat-item">
            <strong>{stat2.count}</strong>
            <span>{stat2.label}</span>
          </div>
          <div className="ad-who-stat-item">
            <strong>{stat3.count}</strong>
            <span>{stat3.label}</span>
          </div>
        </div>
        <Link to={aboutPath} className="ad-gold-btn">
          Discover More <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}

/* Services Grid Section (Reference 15) */
export function ReplicaServicesGridSection() {
  return (
    <section aria-labelledby="ad-replica-services-title" className="ad-replica-services-section">
      <div className="ad-container">
        <div className="ad-replica-services-header">
          <h2 id="ad-replica-services-title">Sure, we construct impressive structures</h2>
          <div className="ad-title-underline" />
        </div>
        <div className="ad-replica-services-grid">
          {services.map((service) => (
            <div key={service.number} className="ad-replica-service-card">
              <div className="ad-replica-service-img">
                <img src={service.image} alt={service.title} loading="lazy" />
              </div>
              <div className="ad-replica-service-body">
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <Link to={service.href} className="ad-learn-more-btn">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Company Reputation Gold Section (Reference 8 & 17) */
export function CompanyReputationSection() {
  return (
    <section aria-label="Our Company Reputation" className="ad-company-gold-section">
      <div className="ad-container ad-company-gold-grid">
        <div className="ad-company-gold-left">
          <div className="ad-eyebrow-white">Our Company</div>
          <h2>Our work is our reputation, and we protect it with every project we do</h2>
          <div className="ad-white-underline" />
          <Link to={aboutPath} className="ad-white-btn">
            Discover More <ArrowRight size={15} />
          </Link>
        </div>
        <div className="ad-company-gold-right">
          <p>
            At Atharva Decorators, we deliver high-quality civil repair and painting services that enhance
            the safety, durability, and aesthetics of buildings. Backed by skilled professionals, modern
            tools, and industry-standard practices, we ensure every project is executed with precision and
            care.
          </p>
          <div className="ad-two-images-wrapper">
            <img
              src="/atharv-images/commercial-construction.webp"
              alt="Construction building with cranes"
              loading="lazy"
            />
            <img
              src="/atharv-images/project-excavator-action.jpeg"
              alt="Excavator at construction site under blue sky"
              loading="lazy"
            />
            <div className="ad-floating-exp-card">
              <strong>25+</strong>
              <span>INDUSTRY EXPERIENCE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Latest Projects Showcase Collage (Reference 13) */
export function LatestProjectsSection() {
  return (
    <section aria-labelledby="ad-latest-title" className="ad-latest-proj-section">
      <div className="ad-container">
        <div className="ad-latest-proj-header">
          <div className="ad-latest-proj-header-left">
            <span className="ad-section-eyebrow">Our Latest Project</span>
            <h2 id="ad-latest-title">Construction makes dreams happen</h2>
          </div>
          <div className="ad-latest-proj-header-right">
            <p>
              A showcase of our recently completed projects reflecting quality workmanship, timely
              execution, and lasting results.
            </p>
            <Link to={projectsPath} className="ad-gold-btn">
              View All Projects <ArrowRight size={15} />
            </Link>
          </div>
        </div>
        <div className="ad-latest-collage-grid">
          <div className="ad-collage-top">
            <div className="ad-collage-item">
              <img src={latestCollageProjects[0].image} alt={latestCollageProjects[0].alt} loading="lazy" />
            </div>
            <div className="ad-collage-item">
              <img src={latestCollageProjects[1].image} alt={latestCollageProjects[1].alt} loading="lazy" />
            </div>
          </div>
          <div className="ad-collage-bottom">
            <div className="ad-collage-item">
              <img src={latestCollageProjects[2].image} alt={latestCollageProjects[2].alt} loading="lazy" />
            </div>
            <div className="ad-collage-item">
              <img src={latestCollageProjects[3].image} alt={latestCollageProjects[3].alt} loading="lazy" />
            </div>
            <div className="ad-collage-item">
              <img src={latestCollageProjects[4].image} alt={latestCollageProjects[4].alt} loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Client Showcase Section (Reference 14) */
export function ClientsShowcaseSection() {
  return (
    <section aria-label="Clients Who Trust Us" className="ad-clients-gold-section">
      <div className="ad-container">
        <div className="ad-clients-gold-header">
          <h2>Proud to Serve Clients Who Trust Us to Transform Their Spaces</h2>
          <p>
            Our clients choose us for our commitment to excellence, transparent processes, and results that
            deliver long-term value. From small-scale projects to large developments, our diverse client
            base reflects the trust we've earned through consistent performance.
          </p>
        </div>
        <div className="ad-clients-gold-body">
          <div className="ad-clients-team-img">
            <img
              src="/atharv-images/building-construction-worker-site-with-architect.jpg.jpeg"
              alt="Engineers and architects on site"
              loading="lazy"
            />
          </div>
          <div className="ad-clients-card-grid">
            {clientShowcaseLogos.map((client) => (
              <div key={client.name} className="ad-client-white-card" title={client.name}>
                <img src={client.src} alt={client.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Service Page About Split Section (Reference 1-7) */
export function ServiceAboutSplit({
  kicker = "About",
  heading,
  description1,
  description2,
  image1 = "/atharv-images/commercial-construction.webp",
  image2 = "/atharv-images/project-excavator-action.jpeg",
}: {
  kicker?: string;
  heading: string;
  description1: string;
  description2: string;
  image1?: string;
  image2?: string;
}) {
  return (
    <section aria-label="About Service" className="ad-container ad-service-about-split">
      <div className="ad-service-about-left">
        <div className="ad-section-eyebrow">{kicker}</div>
        <h2>{heading}</h2>
        <div className="ad-gold-bar" />
      </div>
      <div className="ad-service-about-right">
        <p>{description1}</p>
        <p>{description2}</p>
        <div className="ad-service-two-photos">
          <img src={image1} alt="Construction project site" loading="lazy" />
          <img src={image2} alt="Active construction machinery" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

/* Featured Projects 3x3 Grid (Reference 1-7) */
export function FeaturedProjects3x3Section({
  kicker = "FEatured Project",
  title = "Our Featured Project",
  description = "A curated showcase of our recently completed projects reflecting quality workmanship, timely execution, and lasting results.",
}: {
  kicker?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section aria-labelledby="ad-featured-3x3-title" className="ad-featured-projects-section">
      <div className="ad-container">
        <div className="ad-featured-projects-header">
          <div className="ad-eyebrow-gold">{kicker}</div>
          <h2 id="ad-featured-3x3-title">{title}</h2>
          <p>{description}</p>
        </div>
        <div className="ad-projects-3x3-grid">
          {featured3x3Projects.map((item, idx) => (
            <div key={idx} className="ad-project-tile">
              <img src={item.image} alt={item.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Powerful Solutions Banner (Reference 7, 12) */
export function PowerfulSolutionsBanner() {
  return (
    <section aria-label="Construction Solutions Call to Action" className="ad-powerful-solutions-banner">
      <div className="ad-container ad-powerful-solutions-inner">
        <h2>Powerful straightforward solutions for your construction needs</h2>
        <p>
          Comprehensive civil repairs, premium architectural painting, and certified waterproofing
          solutions tailored to your building requirements.
        </p>
        <div className="ad-banner-btn-row">
          <Link to={servicesPath} className="ad-gold-btn">
            Discover More <ArrowRight size={15} />
          </Link>
          <Link to={contactPath} className="ad-white-btn">
            Get a Quote <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* Vision, Mission, Motto Section (Reference 9) */
export function VisionMissionSection() {
  return (
    <section aria-label="Vision and Mission" className="ad-vision-mission-section">
      <div className="ad-container">
        <h2>We’re growing, and we want you to join us</h2>
        <div className="ad-vision-mission-grid">
          <div className="ad-vision-mission-item">
            <h3>Vision</h3>
            <p>
              To be the most trusted and innovative civil repair and painting solutions provider,
              transforming spaces with quality, reliability, and modern craftsmanship.
            </p>
          </div>
          <div className="ad-vision-mission-item">
            <h3>Mission</h3>
            <p>
              To deliver durable, professional, and customer-focused repair and painting services using
              advanced techniques, skilled teams, and sustainable practices.
            </p>
          </div>
          <div className="ad-vision-mission-item">
            <h3>Motto</h3>
            <p>
              Building lasting trust through engineering precision, uncompromising safety, and flawless
              surface protection across every square foot.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Core Values Section (Reference 8) */
export function CoreValuesSection() {
  return (
    <section aria-label="Core Values" className="ad-container ad-core-values-section">
      <div className="ad-core-values-card">
        <h3>Core Values</h3>
        <ul>
          <li>Expertise You Can Trust</li>
          <li>Professional Workmanship</li>
          <li>Timely Project Delivery</li>
          <li>Transparent &amp; Hassle-Free Service</li>
          <li>End-to-End Solutions</li>
        </ul>
      </div>
      <div className="ad-core-values-img">
        <img
          src="/atharv-images/project-site-architects.jpeg"
          alt="Architectural construction tower structure"
          loading="lazy"
        />
      </div>
    </section>
  );
}

/* Trusted Brands Legacy Section (Reference 10) */
export function TrustedBrandsLegacySection() {
  return (
    <section aria-label="Our Trusted Heritage" className="ad-container py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="rounded-md overflow-hidden shadow-xl">
          <img
            src="/atharv-images/building-construction-worker-site-with-architect.jpg.jpeg"
            alt="Site engineer and architect on site"
            className="w-full aspect-[1.1] object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            We are trusted by 35,000+ world-class brands and organizations of all sizes
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            A second-generation entrepreneur, <strong>Avinash Deshmukh</strong> carries forward a legacy of
            excellence started by his father, <strong>Mr. Parshuram Deshmukh</strong>. After graduating in
            Chemistry in <strong>1998</strong>, he gained hands-on experience in painting and project
            execution before founding <strong>Atharva Decorators in 2001</strong>. Guided by innovation,
            integrity, and quality, he continues to transform spaces across Maharashtra.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
            {clientShowcaseLogos.slice(0, 6).map((c) => (
              <div key={c.name} className="p-3 bg-secondary/30 rounded flex items-center justify-center">
                <img src={c.src} alt={c.name} className="max-h-8 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Contact Floating Bar (Reference 19) */
export function ContactFloatingBar() {
  return (
    <div className="ad-container ad-contact-strip-wrapper">
      <div className="ad-contact-floating-bar">
        <div className="ad-contact-bar-item">
          <div className="ad-contact-bar-icon">
            <MapPin size={22} />
          </div>
          <div className="ad-contact-bar-text">
            <strong>Our Location</strong>
            <span>Mumbai &amp; Thane, Maharashtra, India</span>
          </div>
        </div>
        <div className="ad-contact-bar-item">
          <div className="ad-contact-bar-icon">
            <Phone size={22} />
          </div>
          <div className="ad-contact-bar-text">
            <strong>Phone</strong>
            <a href={company.telephone} className="hover:text-amber-400 transition-colors">
              <span>{company.phone}</span>
            </a>
          </div>
        </div>
        <div className="ad-contact-bar-item">
          <div className="ad-contact-bar-icon">
            <Mail size={22} />
          </div>
          <div className="ad-contact-bar-text">
            <strong>Mail Address</strong>
            <a href={`mailto:${company.email}`} className="hover:text-amber-400 transition-colors">
              <span>{company.email}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   PAGE DEFINITIONS (Using the exact replica reference structure)
   ========================================================================== */

export function HomePage() {
  return (
    <SiteFrame>
      <section aria-labelledby="ad-home-title" className="ad-hero">
        <div className="ad-container ad-hero-inner">
          <div className="ad-hero-copy">
            <Eyebrow light>Building care, thoughtfully delivered</Eyebrow>
            <h1 className="ad-display ad-hero-title" id="ad-home-title">
              Built with care.
              <br />
              <em>Made to last.</em>
            </h1>
            <p className="ad-hero-text">
              Professional civil repair, painting and waterproofing for residential, commercial and
              corporate spaces.
            </p>
            <div className="ad-hero-actions">
              <Button asChild className="ad-primary-cta" size="default">
                <Link to={servicesPath}>
                  Explore our services <ArrowRight aria-hidden="true" size={16} />
                </Link>
              </Button>
              <a className="ad-text-cta" href={company.telephone}>
                Call {company.phone} <ArrowUpRight aria-hidden="true" size={15} />
              </a>
            </div>
          </div>
          <div aria-label="Modern commercial building under construction" className="ad-hero-visual">
            <div className="ad-hero-photo">
              <img
                alt="Contemporary glass commercial building with landscape and reflective façade"
                fetchPriority="high"
                height="512"
                src="/atharv-images/commercial-glass-building.jpg"
                width="768"
              />
            </div>
            <div aria-label="25 years of industry experience" className="ad-hero-stamp">
              <strong>25+</strong>
              <span>Years of industry<br />experience</span>
            </div>
            <p className="ad-hero-index"><strong>01</strong> / 06 · Thoughtful work, enduring spaces</p>
          </div>
        </div>
      </section>

      {/* Sector Cards Strip (Reference 16) */}
      <SectorCardsSection />

      {/* Who We Are (Reference 18) */}
      <WhoWeAreSection />

      {/* Replica Services Grid (Reference 15) */}
      <ReplicaServicesGridSection />

      {/* Company Reputation with 25+ Badge (Reference 17) */}
      <CompanyReputationSection />

      {/* Latest Projects Showcase Collage (Reference 13) */}
      <LatestProjectsSection />

      {/* Clients Showcase (Reference 14) */}
      <ClientsShowcaseSection />

      {/* Powerful Solutions CTA Banner (Reference 7, 12) */}
      <PowerfulSolutionsBanner />
    </SiteFrame>
  );
}

export function AboutPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="About Us"
        title="A legacy built on trust."
        backgroundImage="/atharv-images/project-modern-architecture.jpeg"
      />

      {/* Who We Are (Reference 11) */}
      <WhoWeAreSection
        stat1={{ count: "4K", label: "Project Done" }}
        stat2={{ count: "98%", label: "Happy Clients" }}
        stat3={{ count: "256+", label: "Professional Workers" }}
      />

      {/* Trusted Brands & Founder Heritage (Reference 10) */}
      <TrustedBrandsLegacySection />

      {/* Core Values Section (Reference 8) */}
      <CoreValuesSection />

      {/* Vision, Mission, Motto (Reference 9) */}
      <VisionMissionSection />

      {/* Powerful Solutions CTA Banner (Reference 12) */}
      <PowerfulSolutionsBanner />
    </SiteFrame>
  );
}

export function ServicesPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Our Services"
        title="Complete care for your property."
        backgroundImage="/atharv-images/project-glass-building.jpeg"
      />

      {/* Sector Cards Strip (Reference 16) */}
      <SectorCardsSection />

      {/* Services Grid (Reference 15) */}
      <ReplicaServicesGridSection />

      {/* Company Reputation Section (Reference 17) */}
      <CompanyReputationSection />

      {/* Featured Projects 3x3 Grid (Reference 1-7) */}
      <FeaturedProjects3x3Section />

      {/* Powerful Solutions CTA Banner (Reference 12) */}
      <PowerfulSolutionsBanner />
    </SiteFrame>
  );
}

export const projects = [
  { title: "Commercial tower development", category: "Commercial buildings", image: "/atharv-images/project-towers-construction.jpeg", alt: "Commercial towers under construction with cranes against the sky" },
  { title: "Contemporary glass architecture", category: "Building exteriors", image: "/atharv-images/project-glass-building.jpeg", alt: "Modern dark glass office building with reflective facade" },
  { title: "A new perspective on the skyline", category: "Architectural buildings", image: "/atharv-images/project-angular-building.jpeg", alt: "Angular modern building with geometric glass facade" },
  { title: "Care on every construction site", category: "Project delivery", image: "/atharv-images/project-site-architects.jpeg", alt: "Construction professionals with blueprints at a building site" },
  { title: "A refreshed building exterior", category: "Painting & restoration", image: "/atharv-images/exterior-painting-repairing.webp", alt: "Building with scaffolding undergoing exterior painting and repair" },
  { title: "Purpose-built road works", category: "Road & civil works", image: "/atharv-images/road-civil-works-hero.webp", alt: "Road construction with heavy yellow machinery at work" },
  { title: "Interior finishing details", category: "Interior finishes", image: "/atharv-images/interior-painting-hero.webp", alt: "Beautifully finished modern living room interior with designer ceiling" },
  { title: "Building from the ground up", category: "Civil construction", image: "/atharv-images/project-excavator-action.jpeg", alt: "Excavator pouring dirt at an active construction site" },
  { title: "Practical waterproofing", category: "Waterproofing", image: "/atharv-images/waterproofing-solutions.webp", alt: "Worker applying waterproof coating on a surface" },
  { title: "Structural repair in progress", category: "Civil repairs", image: "/atharv-images/civil-repairs-maintenance.webp", alt: "Construction workers with safety gear at a repair site" },
  { title: "Refined surface finishes", category: "Texture & polishing", image: "/atharv-images/texture-pu-polishing.webp", alt: "Detailed textured wall panel finish with herringbone pattern" },
  { title: "Modern architectural landmark", category: "Architecture", image: "/atharv-images/project-modern-architecture.jpeg", alt: "Modern white architectural building with geometric facade" },
  { title: "Futuristic civic building", category: "Commercial buildings", image: "/atharv-images/project-futuristic-building.jpeg", alt: "Curved futuristic civic building with sweeping design" },
  { title: "Contemporary structure", category: "Building exteriors", image: "/atharv-images/project-curved-architecture.jpeg", alt: "Modern glass and concrete civic structure with reflective pool" },
] as const;

export function ProjectsPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Our Projects"
        title="Construction makes dreams happen."
        backgroundImage="/atharv-images/project-tower-site.jpeg"
      />

      {/* About Project Section (Reference 1) */}
      <ServiceAboutSplit
        kicker="About Project"
        heading="Our work is our reputation, and we protect it with every project we do"
        description1="We deliver high-quality civil repair, building painting and certified waterproofing solutions for residential societies, commercial developments and corporate campuses."
        description2="Backed by 25+ years of trusted engineering experience, our team approaches every structure with thorough inspection, premium materials, and impeccable craftsmanship."
      />

      {/* Featured Projects 3x3 Grid (Reference 1) */}
      <FeaturedProjects3x3Section />

      {/* Latest Projects Showcase Collage (Reference 13) */}
      <LatestProjectsSection />

      {/* Powerful Solutions CTA Banner (Reference 12) */}
      <PowerfulSolutionsBanner />
    </SiteFrame>
  );
}

function ContactEnquiryForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const workType = String(formData.get("workType") ?? "General enquiry");
    const message = String(formData.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Project enquiry — ${workType}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nWork type: ${workType}\n\nProject details:\n${message}`,
    );

    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="ad-contact-form" onSubmit={handleSubmit}>
      <div className="ad-contact-form-heading">
        <Eyebrow>Tell us what you have in mind</Eyebrow>
        <h2 className="ad-heading" id="ad-contact-form-title">
          Drop us a line.
        </h2>
        <p>Fill out the form below and share your project details. We’ll get back to you with the right solution.</p>
      </div>
      <div className="ad-form-grid">
        <label className="ad-form-field">
          <span>Name</span>
          <input autoComplete="name" name="name" placeholder="Name" required />
        </label>
        <label className="ad-form-field">
          <span>Phone</span>
          <input autoComplete="tel" name="phone" placeholder="Phone" required type="tel" />
        </label>
        <label className="ad-form-field">
          <span>Email</span>
          <input autoComplete="email" name="email" placeholder="Email" required type="email" />
        </label>
        <label className="ad-form-field">
          <span>Subject</span>
          <input name="subject" placeholder="Subject" required />
        </label>
        <label className="ad-form-field ad-form-message">
          <span>Select the type of Work</span>
          <select defaultValue="" name="workType" required>
            <option disabled value="">
              Choose a service
            </option>
            {services.map((service) => (
              <option key={service.number} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </label>
        <label className="ad-form-field ad-form-message">
          <span>Message</span>
          <textarea name="message" placeholder="A few details about your project" required rows={4} />
        </label>
      </div>
      <Button className="ad-gold-btn mt-6" size="default" type="submit">
        Send My Message <ArrowUpRight aria-hidden="true" size={16} />
      </Button>
    </form>
  );
}

export function ContactPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Contact Us"
        title="Let’s talk about your project."
        backgroundImage="/atharv-images/construction-skyline.jpg"
      />

      {/* Contact Floating Bar (Reference 19) */}
      <ContactFloatingBar />

      <section aria-labelledby="ad-contact-title" className="ad-contact-page-section pt-4">
        <div className="ad-container ad-contact-page-grid">
          <div className="ad-contact-page-copy">
            <Eyebrow>Good work starts with a conversation</Eyebrow>
            <h2 className="ad-heading" id="ad-contact-title">
              A considered start. <em>A lasting result.</em>
            </h2>
            <p className="ad-body-copy">
              Have a project in mind or need expert guidance for your civil, painting, or waterproofing requirements?
              Our team is here to help with reliable solutions and honest advice. Reach out to us today to discuss your
              needs or schedule a site inspection.
            </p>
            <div className="mt-8">
              <h3 className="text-base font-bold text-foreground mb-4">Our Social Media</h3>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded bg-[#c49a32] text-black flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded bg-[#c49a32] text-black flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Youtube size={18} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded bg-[#c49a32] text-black flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded bg-[#c49a32] text-black flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
            <div className="mt-10 rounded-md overflow-hidden border border-border shadow-md aspect-[16/9]">
              <iframe
                title="Atharv Decorators Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120638.1685361009!2d72.9099882!3d19.1098485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b713bf39d107%3A0xb35a09e5399ec6eb!2sThane%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
          <ContactEnquiryForm />
        </div>
      </section>

      {/* Powerful Solutions CTA Banner (Reference 12) */}
      <PowerfulSolutionsBanner />
    </SiteFrame>
  );
}

export function ServiceDetailPage({ service }: { service: Service }) {
  return (
    <SiteFrame>
      <PageHero
        eyebrow={service.title}
        title={service.title}
        backgroundImage="/atharv-images/project-futuristic-building.jpeg"
      />

      {/* Service Page About Split Section (Reference 1-7) */}
      <ServiceAboutSplit
        kicker="About"
        heading={service.heading}
        description1={service.description}
        description2={service.points.join(". ") + "."}
      />

      {/* Featured Projects 3x3 Grid (Reference 1-7) */}
      <FeaturedProjects3x3Section
        kicker="FEatured Project"
        title="Our Featured Project"
        description="A showcase of our recently completed projects reflecting quality workmanship, timely execution, and lasting results."
      />

      {/* Powerful Solutions CTA Banner (Reference 7, 12) */}
      <PowerfulSolutionsBanner />
    </SiteFrame>
  );
}