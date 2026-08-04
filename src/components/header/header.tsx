"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";

export type NavSubLink = {
  label: string;
  href: string;
};

export type NavLink = {
  label: string;
  href: string;
  items?: NavSubLink[];
};

export type HeaderProps = {
  /** Nav items shown in the bottom bar. Falls back to sample KEC links if not provided. */
  navItems?: NavLink[];
  /** Where the "Login" button on the far right points. */
  loginHref?: string;
  /** Called when the user submits the faculty search box. */
  onSearch?: (query: string) => void;
};

const defaultNavItems: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "About KEC",
    href: "/about/history",
    items: [
      { label: "History", href: "/about/history" },
      { label: "Administration", href: "/about/administration" },
      { label: "Vision & Mission", href: "/about/vision" },
      { label: "Principal's Message", href: "/about/principal-message" },
      { label: "Affiliation", href: "/about/affiliation" },
      { label: "Allotment & Surrender Report", href: "/about/allotment" },
    ],
  },
  {
    label: "Academic",
    href: "/academic",
    items: [
      { label: "Admission", href: "/academic/admission" },
      { label: "Academic Regulations", href: "/academic/regulations" },
      { label: "Academic Calendar", href: "/academic/calender" },
      { label: "Computer Center Labs", href: "/academic/computer-lab" },
      { label: "List of Holidays", href: "/academic/holidays" },
      { label: "Attendance", href: "/academic/attendance" },
      { label: "Syllabus", href: "/academic/syllabus" },
      { label: "Disciplinary Rules", href: "/academic/rules" },
      { label: "Online Fee Payment Tutorial", href: "/academic/payment-tutorial" },
      { label: "Anti Ragging", href: "/academic/anti-ragging" },
      { label: "MoM of Academic Council", href: "/academic/academic-council" },
      { label: "Notice from Govt.", href: "/academic/notice" },
    ],
  },
  {
    label: "Departments",
    href: "/department/civil",
    items: [
      { label: "Civil Engineering", href: "/department/civil" },
      { label: "Mechanical Engineering", href: "/department/mech" },
      { label: "Mechanical and Smart Manufacturing", href: "/department/msm" },
      { label: "Electronics Engineering (VLSI Design and Technology", href: "/department/ece" },
      { label: "Computer Sc. & Engineering", href: "/department/cse" },
      { label: "Electrical & Electronics Engg.", href: "/department/eee" },
      { label: "Applied Sc. & Humanities", href: "/department/ash" },
      { label: "Food Processing", href: "/department/fp" },
    ],
  },
  {
    label: "Facilities",
    href: "/facilities",
    items: [
      { label: "Bank", href: "facilities/bank" },
      { label: "Central Library", href: "/facilities/library" },
      { label: "Computer Centre", href: "/facilities/computer-centre" },
      { label: "Club", href: "/facilities/club" },
      { label: "Guest House", href: "/facilities/guest-house" },
      { label: "Gymnasium", href: "/facilities/gymnasium" },
      { label: "Health Centre", href: "/facilities/health-centre" },
      { label: "Hostels", href: "/facilities/hostels" },
      { label: "Medical Facilities", href: "/facilities/medical-facilities" },
      { label: "Placement", href: "/facilities/placement" },
      { label: "Sports Facilities", href: "/facilities/sports-facilities" },
      { label: "Startup Cell", href: "/facilities/startup-cell"},
      { label: "Useful Link", href: "/facilities/useful-link" },
      { label: "Wi Fi", href: "/facilities/wi-fi" },
    ],
  },
  {
    label: "Training & Placement",
    href: "/training-placement/about",
    items: [
      { label: "About Placement", href: "/training-placement/about" },
      { label: "Placement Brochure", href: "/training-placement/brochure" },
      { label: "Rules of training & Placement", href: "/training-placement/rules" },
      { label: "Tips for Resume", href: "/training-placement/resume-tips" },
      { label: "Placed Students", href: "/training-placement/placed-students" },
      { label: "Student Placement Coordinator", href: "/training-placement/co-ordinator" },
      { label: "Placement Portal", href: "https://tpo.keckatihar.in/" },
    ],
  },
  {
    label: "Approval",
    href: "/approval",
    items: [
      { label: "AICTE Approval", href: "/approval/aicte" },
      { label: "AKU Approval", href: "/approval/ugc" },
      { label: "Grievance", href: "/approval/grievance" },
      { label: "Mandatory Disclosure", href: "/approval/mandatory-disclosure" },
    ],
  },
  {
    label: "RTI",
    href: "/rti",
    items: [
      { label: "RTI Act 2005", href: "/rti/act" },
      { label: "RTI Application Form", href: "/rti/application" },
      { label: "RTI Status", href: "/rti/status" },
      { label: "Public Information Cell", href: "/rti/public-information-cell" },
    ],
  },
  {
    label: "Gallery",
    href: "/gallery",
    items: [
      { label: "Photo Gallery", href: "/gallery/photos" },
      { label: "Video Gallery", href: "/gallery/videos" },
    ],
  },
  { label: "NBA", href: "/nba" },
  { label: "Downloads", href: "/downloads" },
];

export default function Header({
  navItems = defaultNavItems,
  loginHref = "/login",
  onSearch,
}: HeaderProps) {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <>
      {/* Top bar: logo + brand text + search */}
      <header className="flex flex-wrap items-center justify-between gap-5 border-y-[6px] border-[#cfe6d8] bg-white px-10 py-3.5 max-[900px]:justify-center max-[900px]:px-5 max-[900px]:text-center">
        <div className="flex items-center gap-4.5 max-[900px]:flex-col max-[900px]:text-center">
          <Logo />
        </div>

        <form className="m-0 flex items-center" onSubmit={handleSearchSubmit}>
          <div className="flex min-w-70 items-stretch overflow-hidden rounded-md border border-[#ccc] max-[900px]:min-w-full">
            <input
              type="text"
              placeholder="Search Faculty"
              aria-label="Search Faculty"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full border-none px-4 py-3 text-[15px] text-[#1a1a1a] outline-none"
            />
            <button
              type="submit"
              aria-label="Search"
              className="flex items-center justify-center bg-[#0e6e4a] px-5 text-white transition-colors duration-200 hover:bg-[#0f8a5c]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
        </form>
      </header>

      {/* Main navigation */}
      <nav className="relative bg-[#0e6e4a] max-[900px]:flex max-[900px]:flex-wrap max-[900px]:items-center">
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="hidden px-5.5 py-3.5 text-2xl text-white max-[900px]:ml-auto max-[900px]:block"
        >
          &#9776;
        </button>

        <ul
          className={`m-0 flex list-none flex-wrap p-0 max-[900px]:w-full max-[900px]:flex-col ${menuOpen ? "max-[900px]:flex" : "max-[900px]:hidden"
            }`}
        >
          {navItems.map((item) => (
            <li key={item.label} className="group relative">
              <a
                href={item.href}
                className="flex items-center gap-1.5 whitespace-nowrap px-5.5 py-4 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#0f8a5c]"
              >
                <span>{item.label}</span>
                {item.items && (
                  <svg
                    className="rotate-45 transition-transform duration-300 ease-in-out group-hover:rotate-225"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 8L12 8 12 16"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      transform="rotate(45 12 12)"
                    />
                  </svg>
                )}
              </a>

              {item.items && (
                <ul
                  className="invisible absolute left-0 top-full z-20 min-w-57.5 -translate-y-2 rounded-b-lg bg-white py-2 opacity-0 shadow-[0_10px_24px_rgba(0,0,0,0.15)] transition-all duration-250 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 max-[900px]:static max-[900px]:hidden max-[900px]:translate-y-0 max-[900px]:bg-[#094d33] max-[900px]:opacity-100 max-[900px]:shadow-none max-[900px]:group-hover:block max-[900px]:group-focus-within:block"
                >
                  {item.items.map((sub) => (
                    <li key={sub.label}>
                      <a
                        href={sub.href}
                        className="block whitespace-nowrap border-l-[3px] border-transparent px-4.5 py-2.5 text-sm font-medium text-[#1a1a1a] transition-all duration-200 hover:border-l-[#0e6e4a] hover:bg-[#f0faf5] hover:pl-5.5 hover:text-[#094d33] max-[900px]:text-white max-[900px]:hover:bg-white/10"
                      >
                        {sub.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="max-[900px]:ml-0 md:ml-auto">
            <a
              href={loginHref}
              className="flex items-center gap-1.5 whitespace-nowrap px-5.5 py-4 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#0f8a5c]"
            >
              Login
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}