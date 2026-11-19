import React from "react";
import { cn } from "@/lib/utils";

export interface SkiperLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
  underlineColor?: string;
  asChild?: boolean;
}

/**
 * Link000 - Clean baseline link with smooth opacity transition
 */
export const Link000 = React.forwardRef<HTMLAnchorElement, SkiperLinkProps>(
  ({ children, className, active, asChild = false, ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<any>;
      return React.cloneElement(child, {
        ref,
        ...props,
        className: cn(
          "relative inline-flex items-center text-sm font-medium transition-colors duration-200",
          active ? "text-amber-400 font-semibold" : "text-white/90 hover:text-white",
          child.props.className,
          className
        ),
      });
    }

    return (
      <a
        ref={ref}
        className={cn(
          "relative inline-flex items-center text-sm font-medium transition-colors duration-200",
          active ? "text-amber-400 font-semibold" : "text-white/90 hover:text-white",
          className
        )}
        {...props}
      >
        {children}
      </a>
    );
  }
);
Link000.displayName = "Link000";

/**
 * Link001 - Underline Left to Right reveal on hover
 * Premium sliding underline from left to right with smooth ease (as in Skiper UI)
 */
export const Link001 = React.forwardRef<HTMLAnchorElement, SkiperLinkProps>(
  ({ children, className, active, underlineColor = "bg-amber-400", asChild = false, ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<any>;
      return React.cloneElement(child, {
        ref,
        ...props,
        className: cn(
          "group relative inline-flex items-center text-[15px] font-medium tracking-wide transition-colors duration-250",
          active ? "text-white font-semibold" : "text-white/85 hover:text-white",
          child.props.className,
          className
        ),
        children: (
          <>
            <span className="relative z-10 py-1 inline-flex items-center gap-1.5">{child.props.children}</span>
            <span
              aria-hidden="true"
              className={cn(
                "absolute bottom-0 left-0 h-[2px] transition-all duration-300 ease-out group-hover:w-full",
                underlineColor,
                active ? "w-full" : "w-0"
              )}
            />
          </>
        ),
      });
    }

    return (
      <a
        ref={ref}
        className={cn(
          "group relative inline-flex items-center text-[15px] font-medium tracking-wide transition-colors duration-250",
          active ? "text-white font-semibold" : "text-white/85 hover:text-white",
          className
        )}
        {...props}
      >
        <span className="relative z-10 py-1 inline-flex items-center gap-1.5">{children}</span>
        <span
          aria-hidden="true"
          className={cn(
            "absolute bottom-0 left-0 h-[2px] transition-all duration-300 ease-out group-hover:w-full",
            underlineColor,
            active ? "w-full" : "w-0"
          )}
        />
      </a>
    );
  }
);
Link001.displayName = "Link001";

/**
 * Link002 - Underline Right to Left
 */
export const Link002 = React.forwardRef<HTMLAnchorElement, SkiperLinkProps>(
  ({ children, className, active, underlineColor = "bg-amber-400", asChild = false, ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<any>;
      return React.cloneElement(child, {
        ref,
        ...props,
        className: cn(
          "group relative inline-flex items-center text-[15px] font-medium tracking-wide transition-colors duration-250",
          active ? "text-white font-semibold" : "text-white/85 hover:text-white",
          child.props.className,
          className
        ),
        children: (
          <>
            <span className="relative z-10 py-1 inline-flex items-center gap-1.5">{child.props.children}</span>
            <span
              aria-hidden="true"
              className={cn(
                "absolute bottom-0 right-0 h-[2px] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0",
                underlineColor,
                active ? "w-full" : "w-0"
              )}
            />
          </>
        ),
      });
    }

    return (
      <a
        ref={ref}
        className={cn(
          "group relative inline-flex items-center text-[15px] font-medium tracking-wide transition-colors duration-250",
          active ? "text-white font-semibold" : "text-white/85 hover:text-white",
          className
        )}
        {...props}
      >
        <span className="relative z-10 py-1 inline-flex items-center gap-1.5">{children}</span>
        <span
          aria-hidden="true"
          className={cn(
            "absolute bottom-0 right-0 h-[2px] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0",
            underlineColor,
            active ? "w-full" : "w-0"
          )}
        />
      </a>
    );
  }
);
Link002.displayName = "Link002";

/**
 * Link003 - Underline Center reveal
 * Expands outward from center
 */
export const Link003 = React.forwardRef<HTMLAnchorElement, SkiperLinkProps>(
  ({ children, className, active, underlineColor = "bg-amber-400", asChild = false, ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<any>;
      return React.cloneElement(child, {
        ref,
        ...props,
        className: cn(
          "group relative inline-flex items-center text-[15px] font-medium tracking-wide transition-colors duration-250",
          active ? "text-white font-semibold" : "text-white/85 hover:text-white",
          child.props.className,
          className
        ),
        children: (
          <>
            <span className="relative z-10 py-1 inline-flex items-center gap-1.5">{child.props.children}</span>
            <span
              aria-hidden="true"
              className={cn(
                "absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 transition-all duration-300 ease-out group-hover:w-full",
                underlineColor,
                active ? "w-full" : "w-0"
              )}
            />
          </>
        ),
      });
    }

    return (
      <a
        ref={ref}
        className={cn(
          "group relative inline-flex items-center text-[15px] font-medium tracking-wide transition-colors duration-250",
          active ? "text-white font-semibold" : "text-white/85 hover:text-white",
          className
        )}
        {...props}
      >
        <span className="relative z-10 py-1 inline-flex items-center gap-1.5">{children}</span>
        <span
          aria-hidden="true"
          className={cn(
            "absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 transition-all duration-300 ease-out group-hover:w-full",
            underlineColor,
            active ? "w-full" : "w-0"
          )}
        />
      </a>
    );
  }
);
Link003.displayName = "Link003";

/**
 * Link004 - Height Reveal
 */
export const Link004 = React.forwardRef<HTMLAnchorElement, SkiperLinkProps>(
  ({ children, className, active, asChild = false, ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<any>;
      return React.cloneElement(child, {
        ref,
        ...props,
        className: cn(
          "group relative inline-flex items-center px-3 py-1.5 text-sm font-medium tracking-wide overflow-hidden rounded-md transition-colors duration-250",
          active ? "text-slate-950 font-semibold" : "text-white hover:text-slate-950",
          child.props.className,
          className
        ),
        children: (
          <>
            <span
              aria-hidden="true"
              className={cn(
                "absolute inset-0 z-0 bg-amber-400 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0",
                active ? "translate-y-0" : ""
              )}
            />
            <span className="relative z-10 inline-flex items-center gap-1.5">{child.props.children}</span>
          </>
        ),
      });
    }

    return (
      <a
        ref={ref}
        className={cn(
          "group relative inline-flex items-center px-3 py-1.5 text-sm font-medium tracking-wide overflow-hidden rounded-md transition-colors duration-250",
          active ? "text-slate-950 font-semibold" : "text-white hover:text-slate-950",
          className
        )}
        {...props}
      >
        <span
          aria-hidden="true"
          className={cn(
            "absolute inset-0 z-0 bg-amber-400 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0",
            active ? "translate-y-0" : ""
          )}
        />
        <span className="relative z-10 inline-flex items-center gap-1.5">{children}</span>
      </a>
    );
  }
);
Link004.displayName = "Link004";

/**
 * Link005 - Width Reveal
 */
export const Link005 = React.forwardRef<HTMLAnchorElement, SkiperLinkProps>(
  ({ children, className, active, asChild = false, ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<any>;
      return React.cloneElement(child, {
        ref,
        ...props,
        className: cn(
          "group relative inline-flex items-center px-3 py-1.5 text-sm font-medium tracking-wide overflow-hidden rounded-md transition-colors duration-250",
          active ? "text-slate-950 font-semibold" : "text-white hover:text-slate-950",
          child.props.className,
          className
        ),
        children: (
          <>
            <span
              aria-hidden="true"
              className={cn(
                "absolute inset-0 z-0 bg-amber-400 -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0",
                active ? "translate-x-0" : ""
              )}
            />
            <span className="relative z-10 inline-flex items-center gap-1.5">{child.props.children}</span>
          </>
        ),
      });
    }

    return (
      <a
        ref={ref}
        className={cn(
          "group relative inline-flex items-center px-3 py-1.5 text-sm font-medium tracking-wide overflow-hidden rounded-md transition-colors duration-250",
          active ? "text-slate-950 font-semibold" : "text-white hover:text-slate-950",
          className
        )}
        {...props}
      >
        <span
          aria-hidden="true"
          className={cn(
            "absolute inset-0 z-0 bg-amber-400 -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0",
            active ? "translate-x-0" : ""
          )}
        />
        <span className="relative z-10 inline-flex items-center gap-1.5">{children}</span>
      </a>
    );
  }
);
Link005.displayName = "Link005";
