"use client";

import Link from "next/link";
import Image from "next/image";

import { Phone, Mail, MapPin, ArrowUpRight, Map } from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { ModeToggle } from "../ui/mode-toggle";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Admissions", href: "/admission" },
  { label: "Academics", href: "/academics" },
  { label: "Departments", href: "/departments" },
  { label: "Placements", href: "/placements" },
  { label: "Contact", href: "/contact" },
];

const importantLinks = [
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Product & Services", href: "/products-services" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Refund / Cancellation", href: "/refund-cancellation" },
  { label: "Fee Structure", href: "/fee-structure" },
];

const socials = [
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/people/Katihar-Engineering-College/61564963783682/",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/keckatiharofficial/",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/katihar-engineering-college-dstte-govt-of-bihar-327aaa326/",
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/channel/UCJu8sFs4jAp6sZIPsa8Qs5g",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/keckatihar",
  },
  {
    icon: FaWhatsapp,
    href: "https://www.whatsapp.com/channel/0029VaeIPrnFHWptfQRrpo0Q",
  },
];

export default function Footer() {
  return (
    <footer className="border-t bg-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top Grid */}

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Link href="/" aria-label="Katihar Engineering College home">
                <Image
                  src="/brand/kec.png"
                  alt="Katihar Engineering College Logo"
                  width={100}
                  height={100}
                  priority
                  className="shrink-0"
                />
              </Link>

              <h3 className="text-xl font-bold text-slate-900">
                Katihar Engineering College
              </h3>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              Empowering future engineers through quality education, innovation,
              research, and holistic development.
            </p>

            <p className="mt-6 border-t pt-4 text-sm text-slate-500">
              Website serving students since <strong>January 2019</strong>
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h4 className="mb-5 text-lg font-semibold">Quick Links</h4>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-slate-600 transition hover:text-blue-600"
                  >
                    <ArrowUpRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important */}

          <div>
            <h4 className="mb-5 text-lg font-semibold">Important Links</h4>

            <ul className="space-y-3">
              {importantLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-slate-600 transition hover:text-blue-600"
                  >
                    <ArrowUpRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h4 className="mb-5 text-lg font-semibold">Contact</h4>

            <div className="space-y-5 text-slate-600">
              <div className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#0e6e4a]" />

                <div>
                  <address className="not-italic leading-6 text-slate-600">
                    Katihar Engineering College
                    <br />
                    Hirdayganj
                    <br />
                    Hajipur, Katihar - 854109
                    <br />
                    Bihar, India
                  </address>

                  <Link
                    href="https://maps.google.com/?q=Katihar+Engineering+College+Katihar+Bihar+854109"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-5 inline-flex items-center gap-3 whitespace-nowrap rounded-xl border border-[#0e6e4a]/30 bg-[#0e6e4a]/10 px-4 py-3 font-medium text-[#0e6e4a] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#0e6e4a] hover:bg-[#0e6e4a] hover:text-white hover:shadow-lg"
                  >
                    <div className="rounded-full bg-white p-1 transition-colors group-hover:bg-[#0f8a5c]">
                      <Map className="h-4 w-4" />
                    </div>

                    <span className="text-sm font-semibold">
                      View on Google Maps
                    </span>

                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#0e6e4a]" />

                <span>06452-239122</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#0e6e4a]" />
                <Link
                  href="mailto:principalranjanakri84@gmail.com"
                  className="hover:text-blue-600 transition-colors"
                >
                  principalranjanakri84@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}

        <div className="my-12 h-px bg-slate-200" />

        {/* Social */}

        <div className="flex flex-col items-center gap-6">
          <h4 className="text-lg font-semibold">Follow Us</h4>

          <div className="flex gap-4">
            {socials.map(({ icon: Icon, href }, index) => (
              <Link
                key={index}
                href={href}
                target="_blank"
                className="rounded-full border bg-white p-3 transition hover:-translate-y-1 hover:border-[#0e6e4a] hover:bg-[#0e6e4a] hover:text-white"
              >
                <Icon size={20} />
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}

        <div className="my-10 h-px bg-slate-200" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-500 lg:flex-row">
          <p>© 2026 Katihar Engineering College. All Rights Reserved.</p>

          <p>
            Designed & Developed by
            <span className="ml-2 font-semibold text-blue-700 cursor-pointer">
              KEC Web Team ❤️
            </span>
          </p>
{/* 
            <div>
              <ModeToggle />
            </div> */}
          <div className="flex gap-6">
            <Link href="/">Privacy</Link>

            <Link href="/">Terms</Link>

            <Link href="/">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
