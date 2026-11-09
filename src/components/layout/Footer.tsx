"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp, Phone, Mail, MapPin } from "lucide-react";
import {
  NAV_GROUPS,
  OFFICE,
  SCHEDULE_MEETING_URL,
  MLS_DISCLAIMER,
  BHHS_DISCLAIMER,
} from "@/lib/constants";

export function Footer() {
  const [mlsExpanded, setMlsExpanded] = useState(false);

  return (
    <footer className="bg-ink text-white border-t-4 border-gold">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-10">
          {/* Brand */}
          <div className="col-span-2 space-y-4">
            <Image
              src="/images/logo-white.png"
              alt="Childs Real Estate"
              width={480}
              height={180}
              className="w-56 h-auto"
            />
            <p className="text-white text-sm leading-relaxed">
              {OFFICE.name}
            </p>
            <div className="space-y-2 text-sm text-white">
              <a
                href={`tel:${OFFICE.phone}`}
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Phone className="h-4 w-4 text-accent" />
                {OFFICE.phone}
              </a>
              <a
                href={`mailto:${OFFICE.email}`}
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4 text-accent" />
                {OFFICE.email}
              </a>
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                {OFFICE.address}
              </p>
            </div>
          </div>

          {/* Navigation, grouped the same way as the header menu */}
          {NAV_GROUPS.map((group) => (
            <nav key={group.label} aria-label={`${group.label} links`}>
              <h4 className="font-heading text-lg font-semibold mb-4 text-gold">
                {group.label}
              </h4>
              <ul className="space-y-2.5 text-sm">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-white/85 hover:text-accent transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
                {group.label === "About" && (
                  <li>
                    <a
                      href={SCHEDULE_MEETING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/85 hover:text-accent transition-colors"
                    >
                      Schedule a Meeting
                    </a>
                  </li>
                )}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      {/* Compliance */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className="bg-white/10 px-3 py-1.5 rounded text-xs font-semibold tracking-wider">
              Simple Choice Real Estate
            </div>
            {/* Equal Housing */}
            <div className="bg-white/10 px-3 py-1.5 rounded text-xs font-semibold tracking-wider">
              EQUAL HOUSING OPPORTUNITY
            </div>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs mb-4">
            {[
              { label: "Terms of Service", href: "/terms" },
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Accessibility", href: "/accessibility" },
              { label: "Fair Housing Statement", href: "/fair-housing" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white underline-offset-2 hover:text-accent hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="text-white text-xs leading-relaxed mb-4">
            {BHHS_DISCLAIMER}
          </p>

          {/* MLS Disclaimer - collapsible */}
          <div>
            <button
              onClick={() => setMlsExpanded(!mlsExpanded)}
              className="flex items-center gap-1 text-white text-xs hover:text-white/70 transition-colors"
              aria-expanded={mlsExpanded}
            >
              MLS Disclaimer
              {mlsExpanded ? (
                <ChevronUp className="h-3 w-3" />
              ) : (
                <ChevronDown className="h-3 w-3" />
              )}
            </button>
            {mlsExpanded && (
              <p className="text-white text-xs leading-relaxed mt-2">
                {MLS_DISCLAIMER}
              </p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
