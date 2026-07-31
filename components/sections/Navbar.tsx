"use client";

import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Container } from "@/components/ui/Container";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { navLinks, site } from "@/data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section[id]")
    );
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (menuOpen) firstLinkRef.current?.focus();
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <a
          href="#home"
          className="group flex shrink-0 items-center gap-3"
          aria-label={`${site.name} — Home`}
        >
          <span className="flex h-9 w-9 items-center justify-center border border-line bg-surface font-mono text-sm font-medium text-ink transition-colors group-hover:border-line-strong">
            {site.monogram}
          </span>
          <span className="hidden text-sm font-medium tracking-tight text-ink sm:inline">
            {site.name}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={
                activeId === link.href.slice(1) ? "location" : undefined
              }
              className="relative font-mono text-xs uppercase tracking-[0.15em] text-ink-soft transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:text-ink hover:after:scale-x-100 aria-[current=location]:text-ink aria-[current=location]:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className="flex h-10 w-10 items-center justify-center rounded-sm text-ink transition-colors hover:bg-surface lg:hidden"
          >
            {menuOpen ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </Container>

      <div
        id="mobile-menu"
        inert={!menuOpen}
        className={`grid transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <Container className="border-t border-line py-4">
            <nav aria-label="Mobile">
              <ul className="flex flex-col">
                {navLinks.map((link, index) => (
                  <li key={link.href}>
                    <a
                      ref={index === 0 ? firstLinkRef : undefined}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      aria-current={
                        activeId === link.href.slice(1) ? "location" : undefined
                      }
                      className="flex items-center justify-between py-3 font-mono text-sm uppercase tracking-[0.15em] text-ink-soft transition-colors hover:text-ink aria-[current=location]:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Container>
        </div>
      </div>
    </header>
  );
}
