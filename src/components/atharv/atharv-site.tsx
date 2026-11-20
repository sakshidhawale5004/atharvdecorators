import { useEffect, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  ShieldCheck,
  X,
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

const clientLogos = [
  { name: "Taj Hotels", src: "/atharv-images/client-taj.webp" },
  { name: "MSC Bank", src: "/atharv-images/client-msc-bank.webp" },
  { name: "Talwalkars", src: "/atharv-images/client-talwalkars.webp" },
  { name: "L&T Construction", src: "/atharv-images/client-lt-construction.webp" },
  { name: "MAN Infraconstruction", src: "/atharv-images/client-man-infra.webp" },
  { name: "Unity Construction", src: "/atharv-images/client-unity-construction.webp" },
  { name: "Turner", src: "/atharv-images/client-turner.webp" },
  { name: "Amazon", src: "/atharv-images/client-amazon.webp" },
  { name: "Balsan Developers", src: "/atharv-images/client-balsan-developers.webp" },
  { name: "Rebel Foods", src: "/atharv-images/client-rebel-foods.webp" },
  { name: "Runwal Greens", src: "/atharv-images/client-runwal-greens.webp" },
  { name: "R Galleria", src: "/atharv-images/client-r-galleria.webp" },
] as const;

function ClientLogosSection() {
  return (
    <section aria-label="Trusted Clients" className="py-14 border-b border-border bg-[#f8f9fb] dark:bg-card">
      <div className="ad-container">
        <p className="text-center text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-8">
          Trusted by Industry Leaders &amp; Prestigious Developments
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center justify-items-center">
          {clientLogos.map((client) => (
            <div
              key={client.name}
              className="p-3 flex items-center justify-center grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300"
              title={client.name}
            >
              <img
                src={client.src}
                alt={client.name}
                className="max-h-12 w-auto object-contain transition-transform duration-200 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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

      <div aria-label="Our experience" className="ad-container ad-trustbar">
        <div className="ad-trustbar-inner">
          <div className="ad-trust-intro">
            <strong>Trusted to care for buildings.</strong>
            <span>Experience that shows in every detail.</span>
          </div>
          <div className="ad-stat">
            <strong>25+</strong>
            <span>Years of experience</span>
          </div>
          <div className="ad-stat">
            <strong>150+</strong>
            <span>Projects completed</span>
          </div>
          <div className="ad-stat">
            <strong>6</strong>
            <span>Specialist services</span>
          </div>
        </div>
      </div>

      <ClientLogosSection />

      <section aria-labelledby="ad-about-title" className="ad-container ad-about-section">
        <div className="ad-about-visual">
          <div className="ad-about-image">
            <img
              alt="Construction professionals working together at a building site"
              height="512"
              loading="lazy"
              src="/atharv-images/project-team-site.jpg"
              width="768"
            />
          </div>
          <div className="ad-about-note">
            <span aria-hidden="true" className="ad-note-icon">
              <ShieldCheck size={20} />
            </span>
            <span>
              <strong>Quality in every detail</strong>
              <span>Careful work, from first inspection to finish.</span>
            </span>
          </div>
        </div>
        <div>
          <Eyebrow>Built on experience, guided by care</Eyebrow>
          <h2 className="ad-heading" id="ad-about-title">
            A stronger standard for <em>building care.</em>
          </h2>
          <p className="ad-body-copy">
            Atharv Decorators is a trusted name in civil repairs, waterproofing, painting and
            interior works. Since 2001, we have worked with residential societies, businesses and
            independent property owners with a focus on quality, safety and lasting value.
          </p>
          <ArrowLink to={aboutPath}>Get to know us</ArrowLink>
        </div>
      </section>

      <section aria-labelledby="ad-services-title" className="ad-section ad-services-section">
        <div className="ad-container">
          <div className="ad-section-topline">
            <div>
              <Eyebrow>Made for your building</Eyebrow>
              <h2 className="ad-heading" id="ad-services-title">
                Care from <em>ground to finish.</em>
              </h2>
            </div>
            <p className="ad-body-copy">
              Practical, considered solutions for the spaces you live, work and build in.
            </p>
          </div>
          <ServiceGrid />
        </div>
      </section>

      <section aria-labelledby="ad-projects-title" className="ad-section ad-project-section">
        <div className="ad-container">
          <div className="ad-section-topline">
            <div>
              <Eyebrow light>Built for people and place</Eyebrow>
              <h2 className="ad-heading" id="ad-projects-title">
                Spaces that <em>stand out.</em>
              </h2>
            </div>
            <p className="ad-body-copy">
              From refined interiors to building restoration, good work is designed to last.
            </p>
          </div>
          <div className="ad-project-grid">
            <article className="ad-feature-card">
              <div className="ad-feature-image">
                <img
                  alt="Contemporary civic building with sweeping glazed rooflines"
                  height="667"
                  loading="lazy"
                  src="/atharv-images/modern-atrium.jpg"
                  width="1000"
                />
              </div>
              <span>Architecture &amp; shared spaces</span>
            </article>
            <article className="ad-feature-card">
              <div className="ad-feature-image">
                <img
                  alt="Distinctive modern public building with contemporary architecture"
                  height="683"
                  loading="lazy"
                  src="/atharv-images/curved-civic-building.jpg"
                  width="1024"
                />
              </div>
              <span>Thoughtful finishes</span>
            </article>
            <div className="ad-project-aside">
              <ShieldCheck aria-hidden="true" size={24} />
              <p>Careful planning and considered execution, shaped around every property.</p>
              <strong>Good work is seen in the details.</strong>
              <ArrowLink to={projectsPath}>Explore our projects</ArrowLink>
            </div>
          </div>
        </div>
      </section>
      <ContactBand />
    </SiteFrame>
  );
}

export function AboutPage() {
  return (
    <SiteFrame>
      <PageHero eyebrow="About us" title="A legacy built on trust." backgroundImage="/atharv-images/project-modern-architecture.jpeg" />
      <section aria-labelledby="ad-company-title" className="ad-container ad-about-section">
        <div className="ad-about-visual">
          <div className="ad-about-image">
            <img
              alt="Building professionals collaborating on a construction site"
              height="512"
              loading="lazy"
              src="/atharv-images/project-team-site.jpg"
              width="768"
            />
          </div>
          <div className="ad-about-note">
            <span aria-hidden="true" className="ad-note-icon">
              <Check size={20} />
            </span>
            <span>
              <strong>Serving since 2001</strong>
              <span>Built on skill, honesty and lasting care.</span>
            </span>
          </div>
        </div>
        <div>
          <Eyebrow>Our story</Eyebrow>
          <h2 className="ad-heading" id="ad-company-title">
            Experience, handed down. <em>Quality, carried forward.</em>
          </h2>
          <p className="ad-body-copy">
            Atharv Decorators was founded in 2001 by Avinash Deshmukh, continuing a legacy begun by
            his father, Mr. Parshuram Deshmukh. After graduating in Chemistry in 1998, Avinash built
            his experience in painting and project execution, bringing a practical understanding of
            the work to every project.
          </p>
          <p className="ad-body-copy">
            Today, we work with residential societies, commercial buildings, businesses and
            independent property owners, bringing civil repairs, waterproofing, painting and
            finishing together with thoughtful attention to each site.
          </p>
        </div>
      </section>
      <section aria-labelledby="ad-principles-title" className="ad-section ad-services-section">
        <div className="ad-container">
          <div className="ad-section-topline">
            <div>
              <Eyebrow>What guides our work</Eyebrow>
              <h2 className="ad-heading" id="ad-principles-title">
                Every project starts with <em>care.</em>
              </h2>
            </div>
          </div>
          <div className="ad-value-strip">
            <div className="ad-value-item">
              <ShieldCheck aria-hidden="true" />
              <span>Quality workmanship</span>
            </div>
            <div className="ad-value-item">
              <Clock3 aria-hidden="true" />
              <span>Reliable project delivery</span>
            </div>
            <div className="ad-value-item">
              <Layers3 aria-hidden="true" />
              <span>End-to-end solutions</span>
            </div>
          </div>
        </div>
      </section>
      <ContactBand />
    </SiteFrame>
  );
}

export function ServicesPage() {
  return (
    <SiteFrame>
      <PageHero eyebrow="Our services" title="Complete care for your property." backgroundImage="/atharv-images/project-glass-building.jpeg" />
      <section aria-labelledby="ad-services-title" className="ad-section ad-services-section">
        <div className="ad-container">
          <div className="ad-section-topline">
            <div>
              <Eyebrow>Our scope of work</Eyebrow>
              <h2 className="ad-heading" id="ad-services-title">
                Six ways to <em>care for your building.</em>
              </h2>
            </div>
            <p className="ad-body-copy">
              From building repaints to interior finishes, our work is tailored to the space and
              the people who use it.
            </p>
          </div>
          <ServiceGrid />
        </div>
      </section>
      <ContactBand />
    </SiteFrame>
  );
}

const projects = [
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
      <PageHero eyebrow="Our projects" title="Built with care. Made to last." backgroundImage="/atharv-images/project-tower-site.jpeg" />
      <section aria-labelledby="ad-project-gallery-title" className="ad-section ad-project-gallery-section">
        <div className="ad-container">
          <div className="ad-section-topline">
            <div>
              <Eyebrow>Across every surface and structure</Eyebrow>
              <h2 className="ad-heading" id="ad-project-gallery-title">
                A closer look at <em>building care.</em>
              </h2>
            </div>
            <p className="ad-body-copy">
              Painting, building care and civil works come together in the places where we live, work and gather.
            </p>
          </div>
          <div className="ad-project-gallery">
            {projects.map((project, index) => (
              <figure className="ad-gallery-item" key={project.image}>
                <div className="ad-gallery-image">
                  <img
                    alt={project.alt}
                    decoding="async"
                    height="680"
                    loading={index < 3 ? "eager" : "lazy"}
                    src={project.image}
                    width="1000"
                  />
                  <span className="ad-gallery-index">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <figcaption>
                  <span>{project.category}</span>
                  <strong>{project.title}</strong>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <ContactBand />
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
    const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nWork type: ${workType}\n\nProject details:\n${message}`);

    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="ad-contact-form" onSubmit={handleSubmit}>
      <div className="ad-contact-form-heading">
        <Eyebrow>Tell us what you have in mind</Eyebrow>
        <h2 className="ad-heading" id="ad-contact-form-title">Drop us a line.</h2>
        <p>Your enquiry opens in your email app, ready for you to send.</p>
      </div>
      <div className="ad-form-grid">
        <label className="ad-form-field">
          <span>Your name</span>
          <input autoComplete="name" name="name" placeholder="Name" required />
        </label>
        <label className="ad-form-field">
          <span>Phone</span>
          <input autoComplete="tel" name="phone" placeholder="Your phone number" required type="tel" />
        </label>
        <label className="ad-form-field">
          <span>Email address</span>
          <input autoComplete="email" name="email" placeholder="you@example.com" required type="email" />
        </label>
        <label className="ad-form-field">
          <span>Type of work</span>
          <select defaultValue="" name="workType" required>
            <option disabled value="">Choose a service</option>
            {services.map((service) => <option key={service.number} value={service.title}>{service.title}</option>)}
          </select>
        </label>
        <label className="ad-form-field ad-form-message">
          <span>How can we help?</span>
          <textarea name="message" placeholder="A few details about your project" required rows={5} />
        </label>
      </div>
      <Button className="ad-primary-cta ad-contact-submit" size="default" type="submit">
        Prepare your enquiry <ArrowUpRight aria-hidden="true" size={16} />
      </Button>
    </form>
  );
}

export function ContactPage() {
  return (
    <SiteFrame>
      <PageHero eyebrow="Contact us" title="Let’s talk about your project." backgroundImage="/atharv-images/project-site-architects.jpeg" />
      <section aria-labelledby="ad-contact-title" className="ad-contact-page-section">
        <div className="ad-container ad-contact-page-grid">
          <div className="ad-contact-page-copy">
            <Eyebrow>Good work starts with a conversation</Eyebrow>
            <h2 className="ad-heading" id="ad-contact-title">A considered start. <em>A lasting result.</em></h2>
            <p className="ad-body-copy">
              Get in touch about civil repairs, painting, waterproofing or your next building project.
              We’re here to help you find the right way forward.
            </p>
            <div className="ad-contact-details">
              <a className="ad-contact-detail" href={company.telephone}>
                <span className="ad-contact-icon"><Phone aria-hidden="true" size={18} /></span>
                <span><span>Call our team</span><strong>{company.phone}</strong></span>
                <ArrowUpRight aria-hidden="true" className="ad-contact-detail-arrow" size={17} />
              </a>
              <a className="ad-contact-detail" href={`mailto:${company.email}`}>
                <span className="ad-contact-icon"><Mail aria-hidden="true" size={18} /></span>
                <span><span>Email us</span><strong>{company.email}</strong></span>
                <ArrowUpRight aria-hidden="true" className="ad-contact-detail-arrow" size={17} />
              </a>
              <div className="ad-contact-location">
                <MapPin aria-hidden="true" size={17} />
                <span>Working with residential, commercial and corporate properties.</span>
              </div>
            </div>
          </div>
          <ContactEnquiryForm />
        </div>
      </section>
      <ContactBand />
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
      <section aria-labelledby="ad-service-detail-title" className="ad-container ad-detail-layout">
        <div className="ad-detail-copy">
          <Eyebrow>About this service</Eyebrow>
          <h2 id="ad-service-detail-title">{service.heading}</h2>
          <p>{service.description}</p>
          <ul className="ad-detail-points">
            {service.points.map((point) => (
              <li key={point}>
                <Check aria-hidden="true" size={15} /> {point}
              </li>
            ))}
          </ul>
          <Button asChild className="ad-primary-cta" size="default">
            <a href={`mailto:${company.email}?subject=${encodeURIComponent(service.title)}%20enquiry`}>
              Ask about this service <ArrowRight aria-hidden="true" size={16} />
            </a>
          </Button>
        </div>
        <div className="ad-detail-image">
          <img alt={service.title} height="677" loading="eager" src={service.image} width="1000" />
        </div>
        <div className="ad-detail-proof">
          <ValueStrip />
        </div>
      </section>

      {/* Featured Projects Gallery for this service (as on reference site) */}
      <section aria-labelledby="ad-service-gallery-title" className="ad-section ad-project-gallery-section">
        <div className="ad-container">
          <div className="ad-section-topline">
            <div>
              <Eyebrow>Featured Project Work</Eyebrow>
              <h2 className="ad-heading" id="ad-service-gallery-title">
                On-site execution &amp; <em>workmanship.</em>
              </h2>
            </div>
            <p className="ad-body-copy">
              A curated gallery of civil repairs, painting, restoration and waterproofing projects delivered across Maharashtra.
            </p>
          </div>
          <div className="ad-project-gallery">
            {projects.slice(0, 6).map((project, index) => (
              <figure className="ad-gallery-item" key={project.title}>
                <div className="ad-gallery-image">
                  <img
                    alt={project.alt}
                    decoding="async"
                    height="680"
                    loading="lazy"
                    src={project.image}
                    width="1000"
                  />
                  <span className="ad-gallery-index">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <figcaption>
                  <span>{project.category}</span>
                  <strong>{project.title}</strong>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="ad-related-services-title" className="ad-section ad-services-section">
        <div className="ad-container">
          <div className="ad-section-topline">
            <div>
              <Eyebrow>Whole-building solutions</Eyebrow>
              <h2 className="ad-heading" id="ad-related-services-title">
                More ways we can <em>help.</em>
              </h2>
            </div>
            <ArrowLink to={servicesPath}>See all services</ArrowLink>
          </div>
          <ServiceGrid items={services.filter((item) => item.number !== service.number).slice(0, 3)} />
        </div>
      </section>
      <ContactBand />
    </SiteFrame>
  );
}