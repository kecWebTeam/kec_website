"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";

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
        href: "/about",
        items: [
            { label: "History", href: "/about/history" },
            { label: "Vision & Mission", href: "/about/vision-mission" },
            { label: "Principal's Message", href: "/about/principal-message" },
            { label: "Governing Body", href: "/about/governing-body" },
        ],
    },
    {
        label: "Academic",
        href: "/academic",
        items: [
            { label: "Courses Offered", href: "/academic/courses" },
            { label: "Academic Calendar", href: "/academic/calendar" },
            { label: "Syllabus", href: "/academic/syllabus" },
            { label: "Result", href: "/academic/result" },
        ],
    },
    {
        label: "Departments",
        href: "/departments",
        items: [
            { label: "Computer Science", href: "/departments/cse" },
            { label: "Electrical Engineering", href: "/departments/ee" },
            { label: "Mechanical Engineering", href: "/departments/me" },
            { label: "Civil Engineering", href: "/departments/ce" },
        ],
    },
    {
        label: "Facilities",
        href: "/facilities",
        items: [
            { label: "Library", href: "/facilities/library" },
            { label: "Hostel", href: "/facilities/hostel" },
            { label: "Sports", href: "/facilities/sports" },
            { label: "Transport", href: "/facilities/transport" },
        ],
    },
    {
        label: "Training & Placement",
        href: "/training-placement",
        items: [
            { label: "Placement Cell", href: "/training-placement/cell" },
            { label: "Recruiters", href: "/training-placement/recruiters" },
            { label: "Training Programs", href: "/training-placement/programs" },
            { label: "Internships", href: "/training-placement/internships" },
        ],
    },
    {
        label: "Approval",
        href: "/approval",
        items: [
            { label: "AICTE Approval", href: "/approval/aicte" },
            { label: "UGC Recognition", href: "/approval/ugc" },
            { label: "State Govt Approval", href: "/approval/state-govt" },
        ],
    },
    {
        label: "RTI",
        href: "/rti",
        items: [
            { label: "RTI Act", href: "/rti/act" },
            { label: "PIO Details", href: "/rti/pio" },
            { label: "RTI Application", href: "/rti/application" },
        ],
    },
    {
        label: "Gallery",
        href: "/gallery",
        items: [
            { label: "Photo Gallery", href: "/gallery/photos" },
            { label: "Video Gallery", href: "/gallery/videos" },
            { label: "Events", href: "/gallery/events" },
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

    const handleSearchSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSearch?.(query);
    };

    return (
        <>
            <header className="topbar">
                <div className="brand">
                    <Link href="/" aria-label="Katihar Engineering College home">
                        <Image
                            src="/brand/kec.png"
                            alt="Katihar Engineering College Logo"
                            width={120}
                            height={120}
                            priority
                            className="seal"
                        />
                    </Link>

                    <div className="brand-text">
                        <p className="hindi">कटिहार अभियन्त्रण महाविद्यालय</p>
                        <h1>Katihar Engineering College</h1>
                        <p className="city">Katihar</p>
                        <p className="dept">( Dept. of Science &amp; Technology, Govt. of Bihar )</p>
                    </div>
                </div>

                <form className="search-wrap" onSubmit={handleSearchSubmit}>
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Search Faculty"
                            aria-label="Search Faculty"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button type="submit" aria-label="Search">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                        </button>
                    </div>
                </form>
            </header>

            <nav className="mainnav">
                <label className="hamburger" htmlFor="menu-toggle" aria-label="Toggle menu">
                    &#9776;
                </label>
                <input type="checkbox" id="menu-toggle" className="menu-toggle-input" />

                <ul className="nav-list">
                    {navItems.map((item) => (
                        <li key={item.label} className={item.items ? "has-dropdown" : ""}>
                            <a href={item.href}>
                                <span>{item.label}</span>
                                {item.items && (
                                    <svg
                                        className="arrow"
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
                                <ul className="dropdown">
                                    {item.items.map((sub) => (
                                        <li key={sub.label}>
                                            <a href={sub.href}>{sub.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                    <li className="login">
                        <a href={loginHref}>Login</a>
                    </li>
                </ul>
            </nav>

            <style jsx>{`
        :global(:root) {
          --primary: #0e6e4a;
          --primary-hover: #0f8a5c;
          --primary-dark: #094d33;
          --tan-border: #cfe6d8;
          --gold: #b5883f;
          --text-dark: #1a1a1a;
          --text-muted: #5a5a5a;
        }

        .topbar {
          background: #fff;
          border-top: 6px solid var(--tan-border);
          border-bottom: 6px solid var(--tan-border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 40px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .seal {
          width: 90px;
          height: 90px;
          flex-shrink: 0;
        }

        .brand-text .hindi {
          font-size: 14px;
          color: var(--gold);
          font-weight: 600;
          margin: 0 0 2px;
        }

        .brand-text h1 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 26px;
          font-weight: 700;
          color: var(--primary);
          margin: 0;
          line-height: 1.2;
        }

        .brand-text .city {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 22px;
          font-weight: 700;
          color: var(--primary);
          margin: 0 0 4px;
        }

        .brand-text .dept {
          font-size: 13px;
          font-style: italic;
          color: var(--text-muted);
          margin: 0;
        }

        .search-wrap {
          display: flex;
          align-items: center;
          margin: 0;
        }

        .search-box {
          display: flex;
          align-items: stretch;
          border: 1px solid #ccc;
          border-radius: 6px;
          overflow: hidden;
          min-width: 280px;
        }

        .search-box input {
          border: none;
          outline: none;
          padding: 12px 16px;
          font-size: 15px;
          width: 100%;
          color: var(--text-dark);
        }

        .search-box button {
          background: var(--primary);
          border: none;
          color: #fff;
          padding: 0 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease;
        }

        .search-box button:hover {
          background: var(--primary-hover);
        }

        .mainnav {
          background: var(--primary);
          position: relative;
        }

        .menu-toggle-input {
          display: none;
        }

        .nav-list {
          list-style: none;
          display: flex;
          margin: 0;
          padding: 0;
          flex-wrap: wrap;
        }

        .nav-list > li {
          position: relative;
        }

        .nav-list > li > a {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #fff;
          text-decoration: none;
          font-size: 15px;
          font-weight: 600;
          padding: 16px 22px;
          white-space: nowrap;
          transition: background 0.2s ease;
        }

        .nav-list > li > a:hover {
          background: var(--primary-hover);
        }

        .arrow {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform: rotate(45deg);
        }

        .has-dropdown:hover .arrow {
          transform: rotate(225deg);
        }

        .login {
          margin-left: auto;
        }

        .dropdown {
          list-style: none;
          margin: 0;
          padding: 8px 0;
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 230px;
          background: #fff;
          border-radius: 0 0 8px 8px;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.15);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-8px);
          transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s;
          z-index: 20;
        }

        .has-dropdown:hover .dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown li a {
          display: block;
          padding: 10px 18px;
          color: var(--text-dark);
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          white-space: nowrap;
          border-left: 3px solid transparent;
          transition: background 0.2s ease, border-color 0.2s ease, padding 0.2s ease;
        }

        .dropdown li a:hover {
          background: #f0faf5;
          border-left-color: var(--primary);
          padding-left: 22px;
          color: var(--primary-dark);
        }

        .hamburger {
          display: none;
          background: none;
          border: none;
          color: #fff;
          font-size: 24px;
          padding: 14px 22px;
          cursor: pointer;
        }

        @media (max-width: 900px) {
          .topbar {
            padding: 14px 20px;
            justify-content: center;
            text-align: center;
          }
          .brand {
            flex-direction: column;
            text-align: center;
          }
          .search-box {
            min-width: 100%;
          }
          .hamburger {
            display: block;
            margin-left: auto;
          }
          .nav-list {
            display: none;
            flex-direction: column;
            width: 100%;
          }
          .menu-toggle-input:checked ~ .nav-list {
            display: flex;
          }
          .login {
            margin-left: 0;
          }
          .mainnav {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
          }
          .dropdown {
            position: static;
            box-shadow: none;
            opacity: 1;
            visibility: visible;
            transform: none;
            display: none;
            background: var(--primary-dark);
          }
          .has-dropdown:hover .dropdown,
          .has-dropdown:focus-within .dropdown {
            display: block;
          }
          .dropdown li a {
            color: #fff;
          }
          .dropdown li a:hover {
            background: rgba(255, 255, 255, 0.1);
          }
        }
      `}</style>
        </>
    );
}