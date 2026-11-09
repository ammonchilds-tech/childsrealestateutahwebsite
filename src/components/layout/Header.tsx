"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, Phone, Mail, MessageSquare } from "lucide-react";
import { NAV_GROUPS, OFFICE, type NavGroup } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

/** True when `href` is the current page or a page underneath it (e.g. /blog → /blog/some-post). */
function isActivePath(pathname: string, href: string) {
  // Links to a section of a page (/sell#home-value) never count as "the page you're on".
  if (href.includes("#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

function groupIsActive(pathname: string, group: NavGroup) {
  return group.items.some((item) => isActivePath(pathname, item.href));
}

function DesktopNavGroup({
  group,
  pathname,
  open,
  onOpen,
  onClose,
  onToggle,
}: {
  group: NavGroup;
  pathname: string;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Hovering opens the menu just before the click lands; remember when, so that click doesn't close it again.
  const hoverOpenedAt = useRef(0);
  const active = groupIsActive(pathname, group);
  const panelId = `nav-panel-${group.label.toLowerCase()}`;

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  // Small delay so the menu doesn't vanish while the mouse moves from button to panel.
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(onClose, 150);
  };

  useEffect(() => cancelClose, []);

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        if (!open) hoverOpenedAt.current = Date.now();
        onOpen();
      }}
      onMouseLeave={scheduleClose}
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          onClose();
          buttonRef.current?.focus();
        }
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) onClose();
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => {
          if (open && Date.now() - hoverOpenedAt.current < 500) return;
          onToggle();
        }}
        className={cn(
          "flex items-center gap-1 px-4 py-2 rounded-md text-[15px] font-medium transition-colors",
          active || open ? "text-gold bg-white/5" : "text-white/85 hover:text-gold hover:bg-white/5"
        )}
      >
        {group.label}
        <ChevronDown
          className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div id={panelId} className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
          <ul className="w-80 rounded-lg bg-ink border border-white/10 shadow-2xl p-2">
            {group.items.map((item) => {
              const current = isActivePath(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    aria-current={current ? "page" : undefined}
                    className={cn(
                      "block rounded-md px-4 py-3 transition-colors",
                      current ? "bg-white/10" : "hover:bg-white/5 focus-visible:bg-white/5"
                    )}
                  >
                    <span
                      className={cn(
                        "block text-sm font-semibold",
                        current ? "text-gold" : "text-white"
                      )}
                    >
                      {item.label}
                    </span>
                    {item.description && (
                      <span className="block text-xs text-white/60 mt-0.5">{item.description}</span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Close the desktop dropdown when clicking anywhere else on the page.
  useEffect(() => {
    if (!openGroup) return;
    const handle = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenGroup(null);
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [openGroup]);

  const handleMobileOpenChange = (next: boolean) => {
    // When the menu opens, expand the section for the page the visitor is on.
    if (next) {
      setMobileSection(NAV_GROUPS.find((g) => groupIsActive(pathname, g))?.label ?? null);
    }
    setMobileOpen(next);
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-gold focus:px-4 focus:py-2 focus:text-ink focus:font-semibold"
      >
        Skip to main content
      </a>

      {/* Top bar */}
      <div className="hidden md:block bg-ink text-white text-sm border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${OFFICE.phone}`}
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              {OFFICE.phone}
            </a>
            <a
              href={`mailto:${OFFICE.email}`}
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              {OFFICE.email}
            </a>
          </div>
          <p className="text-white/70 text-xs">{OFFICE.name}</p>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 bg-ink/95 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-20 md:h-24">
          <Link href="/" className="flex items-center" aria-label="Childs Real Estate home">
            <Image
              src="/images/logo-white.png"
              alt="Childs Real Estate"
              width={480}
              height={180}
              className="h-14 md:h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav ref={navRef} aria-label="Main" className="hidden lg:flex items-center gap-1">
            {NAV_GROUPS.map((group) => (
              <DesktopNavGroup
                key={group.label}
                group={group}
                pathname={pathname}
                open={openGroup === group.label}
                onOpen={() => setOpenGroup(group.label)}
                onClose={() => setOpenGroup((g) => (g === group.label ? null : g))}
                onToggle={() => setOpenGroup((g) => (g === group.label ? null : group.label))}
              />
            ))}
            <Button asChild variant="accent" className="ml-3 gap-2 font-bold">
              <Link href="/contact">
                <Image src="/images/logo-icon.png" alt="" width={18} height={18} className="w-[18px] h-[18px] shrink-0" />
                Get In Touch
              </Link>
            </Button>
          </nav>

          {/* Mobile: call button + menu trigger */}
          <div className="flex items-center gap-1 lg:hidden">
            <a
              href={`tel:${OFFICE.phone}`}
              className="p-2 text-gold"
              aria-label={`Call ${OFFICE.phone}`}
            >
              <Phone className="h-6 w-6" />
            </a>
            <Sheet open={mobileOpen} onOpenChange={handleMobileOpenChange}>
              <SheetTrigger asChild>
                <button className="p-2 text-white" aria-label="Open menu">
                  <Menu className="h-7 w-7" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] max-w-sm p-0 h-dvh">
                <SheetTitle className="sr-only">Site menu</SheetTitle>
                <div className="flex flex-col h-full">
                  <div className="px-4 py-2 border-b border-border shrink-0">
                    <Image
                      src="/images/logo.png"
                      alt="Childs Real Estate"
                      width={480}
                      height={180}
                      className="h-20 w-auto"
                    />
                  </div>

                  {/* The two things most visitors want, right at the top */}
                  <div className="grid grid-cols-2 gap-3 p-4 border-b border-border shrink-0">
                    <Button asChild variant="accent" className="gap-2 font-bold h-12">
                      <a href={`tel:${OFFICE.phone}`}>
                        <Phone className="h-4 w-4 shrink-0" /> Call Us
                      </a>
                    </Button>
                    <SheetClose asChild>
                      <Button asChild variant="outline" className="gap-2 font-bold h-12 px-3">
                        <Link href="/contact">
                          <MessageSquare className="h-4 w-4 shrink-0" /> Get In Touch
                        </Link>
                      </Button>
                    </SheetClose>
                  </div>

                  <nav
                    aria-label="Main"
                    className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-4"
                  >
                    <SheetClose asChild>
                      <Link
                        href="/"
                        className={cn(
                          "block px-4 py-3 rounded-md text-base font-semibold transition-colors",
                          pathname === "/" ? "text-accent bg-accent/10" : "text-foreground hover:bg-accent/5"
                        )}
                      >
                        Home
                      </Link>
                    </SheetClose>
                    {NAV_GROUPS.map((group) => {
                      const expanded = mobileSection === group.label;
                      const sectionId = `mobile-nav-${group.label.toLowerCase()}`;
                      return (
                        <div key={group.label}>
                          <button
                            type="button"
                            aria-expanded={expanded}
                            aria-controls={sectionId}
                            onClick={() => setMobileSection(expanded ? null : group.label)}
                            className={cn(
                              "w-full flex items-center justify-between px-4 py-3 rounded-md text-base font-semibold transition-colors",
                              groupIsActive(pathname, group) ? "text-accent" : "text-foreground",
                              "hover:bg-accent/5"
                            )}
                          >
                            {group.label}
                            <ChevronDown
                              className={cn("h-5 w-5 transition-transform", expanded && "rotate-180")}
                              aria-hidden="true"
                            />
                          </button>
                          {expanded && (
                            <ul id={sectionId} className="mb-2 ml-4 border-l border-border">
                              {group.items.map((item) => {
                                const current = isActivePath(pathname, item.href);
                                return (
                                  <li key={item.href}>
                                    <SheetClose asChild>
                                      <Link
                                        href={item.href}
                                        aria-current={current ? "page" : undefined}
                                        className={cn(
                                          "block pl-4 pr-3 py-2.5 text-[15px] transition-colors",
                                          current
                                            ? "text-accent font-semibold"
                                            : "text-foreground/80 hover:text-accent"
                                        )}
                                      >
                                        {item.label}
                                      </Link>
                                    </SheetClose>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </div>
                      );
                    })}
                  </nav>

                  <div className="p-6 border-t border-border shrink-0 space-y-3 text-sm text-muted-foreground">
                    <a href={`mailto:${OFFICE.email}`} className="flex items-center gap-2">
                      <Mail className="h-4 w-4" /> {OFFICE.email}
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
