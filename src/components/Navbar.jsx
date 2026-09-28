import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GraduationCap, Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "../data/siteData.js";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // Shadow once scrolled; slide the bar away while scrolling down and bring
  // it back as soon as the visitor scrolls up.
  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 8);

      const diff = y - lastY;
      if (Math.abs(diff) < 6) return; // ignore tiny movements
      setIsHidden(diff > 0 && y > 140);
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  const linkClasses = ({ isActive }) =>
    `relative text-sm font-medium transition-colors duration-300 ${
      isActive ? "text-brand" : "text-body hover:text-brand"
    } after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:rounded-full after:bg-accent after:transition-all after:duration-300 ${
      isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
    }`;

  const mobileLinkClasses = ({ isActive }) =>
    `rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
      isActive
        ? "bg-brand-soft text-brand"
        : "text-body hover:bg-page-alt hover:text-brand"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-page/85 backdrop-blur-md transition-[transform,box-shadow] duration-300 ${
        isScrolled ? "shadow-card" : ""
      } ${isHidden && !isOpen ? "-translate-y-full" : "translate-y-0"}`}
    >
      <nav className="section-container flex h-16 items-center justify-between lg:h-20">
        {/* Brand */}
        <NavLink to="/" className="group flex shrink-0 items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-white transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
            <GraduationCap size={20} strokeWidth={2.25} />
          </span>
          <span className="font-display text-lg font-bold text-heading">
            {siteConfig.brandName}
          </span>
        </NavLink>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"} className={linkClasses}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <NavLink to="/contact" className="btn-primary hidden !py-2.5 md:inline-flex">
          Contact
        </NavLink>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-heading transition-colors hover:bg-page-alt md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden bg-page transition-[max-height] duration-500 ease-in-out md:hidden ${
          isOpen ? "max-h-96 border-t border-line" : "max-h-0"
        }`}
      >
        <div className="section-container flex flex-col gap-1 py-4">
          {navLinks.map((link, index) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={handleLinkClick}
              className={mobileLinkClasses}
              style={{
                transitionDelay: isOpen ? `${index * 40}ms` : "0ms",
              }}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={handleLinkClick}
            className="btn-primary mt-2"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </header>
  );
}
