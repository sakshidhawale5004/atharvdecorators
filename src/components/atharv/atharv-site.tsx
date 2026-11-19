import { useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, Clock3, Layers3, Menu, ShieldCheck, X } from "lucide-react";

import { Button } from "@/components/ui/button";

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
    image: "/atharv-images/interior-painting-finishing.webp",
    summary: "Thoughtful colours and refined interior finishes, delivered with care.",
    heading: "Flawless finishes that transform your interiors.",
    description:
      "Interior painting and finishing shape the look and feel of a space. We focus on considered colour, careful preparation and refined finishes that complement the way you live and work.",
    points: [
      "Interior painting planned around your space",
      "Carefully prepared surfaces and clean, even coats",
      "Finishes suited to residential and commercial interiors",
    ],
  },
  {
    number: "02",
    title: "Exterior Painting & Building Repainting",
    href: "/exterior-painting-building-repainting",
    image: "/atharv-images/exterior-building-restoration.webp",
    summary: "Building repainting that refreshes your façade and elevates its appearance.",
    heading: "A considered new finish for your building’s exterior.",
    description:
      "Give your building a renewed first impression with exterior painting and repainting. Every project begins with the building itself, its surfaces and the finish that suits its setting.",
    points: [
      "Exterior painting for residential and commercial buildings",
      "Repainting to renew the look of existing façades",
      "Work coordinated with your building and site requirements",
    ],
  },
  {
    number: "03",
    title: "Civil Repairs & Structural Maintenance",
    href: "/civil-repairs-structural-maintenance",
    image: "/atharv-images/structural-repairs.webp",
    summary: "Careful building maintenance focused on strength, safety and longevity.",
    heading: "Restore strength, stability and structural integrity.",
    description:
      "Thoughtful civil repairs help extend the life and functionality of a building. We assess the issue, understand its cause and carry out repair work with durability and the site in mind.",
    points: [
      "Civil repair and ongoing structural maintenance",
      "Site-specific repair planning and execution",
      "Work focused on long-term durability and function",
    ],
  },
  {
    number: "04",
    title: "Waterproofing Solutions",
    href: "/waterproofing-solutions",
    image: "/atharv-images/waterproofing.webp",
    summary: "Purposeful waterproofing to help protect your property from moisture.",
    heading: "Lasting protection against leaks and moisture damage.",
    description:
      "Seepage and dampness need the right response for the conditions on site. We provide tailored waterproofing solutions based on where moisture occurs and the needs of your building.",
    points: [
      "Waterproofing planned around your site conditions",
      "Solutions for leaks, seepage and moisture exposure",
      "An approach shaped by the building and its requirements",
    ],
  },
  {
    number: "05",
    title: "Texture, PU & Polishing Works",
    href: "/texture-pu-polishing-works",
    image: "/atharv-images/texture-polishing.webp",
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
    image: "/atharv-images/road-civil-works.webp",
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

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <header className="ad-header">
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
          <Link
            aria-current={pathname === homePath ? "page" : undefined}
            className={`ad-nav-link${pathname === homePath ? " is-active" : ""}`}
            onClick={() => setIsOpen(false)}
            to={homePath}
          >
            Home
          </Link>
          <Link
            aria-current={pathname === aboutPath ? "page" : undefined}
            className={`ad-nav-link${pathname === aboutPath ? " is-active" : ""}`}
            onClick={() => setIsOpen(false)}
            from="/"
            to={aboutPath}
          >
            About
          </Link>
          <Link
            aria-current={pathname === servicesPath ? "page" : undefined}
            className={`ad-nav-link${pathname.startsWith(servicesPath) ? " is-active" : ""}`}
            onClick={() => setIsOpen(false)}
            from="/"
            to={servicesPath}
          >
            Services
          </Link>
          <QuoteButton />
        </nav>
      </div>
    </header>
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
            </nav>
          </div>
          <div>
            <h2 className="ad-footer-label">Get in touch</h2>
            <div className="ad-footer-links">
              <a href={company.telephone}>{company.phone}</a>
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <a href={`mailto:${company.email}?subject=Project%20enquiry`}>Enquire about a project</a>
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

function PageHero({ title, eyebrow }: { title: string; eyebrow: string }) {
  return (
    <section aria-label={eyebrow} className="ad-page-hero">
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
              <ArrowLink to={servicesPath}>See what we do</ArrowLink>
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
      <PageHero eyebrow="About us" title="A legacy built on trust." />
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
      <PageHero eyebrow="Our services" title="Complete care for your property." />
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

export function ServiceDetailPage({ service }: { service: Service }) {
  return (
    <SiteFrame>
      <PageHero eyebrow={service.title} title={service.title} />
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