import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Vendors",
  description: `Trusted vendors and service providers recommended by ${SITE_NAME}.`,
  openGraph: {
    title: `Trusted Vendors | ${SITE_NAME}`,
    description: `Trusted vendors and service providers recommended by ${SITE_NAME}.`,
    url: "/vendors",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Trusted Vendors | ${SITE_NAME}`,
    description: `Trusted vendors and service providers recommended by ${SITE_NAME}.`,
  },
};

const categories = [
  {
    name: "Cleaning Services",
    vendors: [
      { business: "Mardie Rae Cleaning", contact: "", phone: "385.900.3947", email: "", services: "Cleaning Services" },
      { business: "Olive's Cleaning Service", contact: "Tory", phone: "801.856.0765", email: "", services: "Cleaning Services (under $25/hr)" },
      { business: "Wendy Trujillo", contact: "Wendy Trujillo", phone: "901.236.1815", email: "", services: "Cleaning Services" },
    ],
  },
  {
    name: "Handyman",
    vendors: [
      { business: "B.H Handy Man Services", contact: "Brian Hardy", phone: "801.380.0445", email: "bc.hardy47@gmail.com", services: "Handyman Services" },
    ],
  },
  {
    name: "Lending",
    vendors: [
      { business: "Work Harding Home Mortgage", contact: "Ryan Harding", phone: "801.380.4226", email: "ryan@workharding.com", services: "Lending" },
      { business: "Creekside Mortgage", contact: "Travis Lemmon", phone: "801.310.9741", email: "travislemmon@gmail.com", services: "Lending" },
      { business: "Lanny Baxter – Lender", contact: "Lanny Baxter", phone: "801.472.8488", email: "lannybaxter@gmail.com", services: "Lending" },
    ],
  },
  {
    name: "Painting Services",
    vendors: [
      { business: "Matrix Painting LLC", contact: "Dusty Saxton (GM)", phone: "435.229.6561", email: "", services: "Painting" },
      { business: "Valley Pro Painting", contact: "Pedro Gonzalez", phone: "801.500.1304", email: "", services: "Painting" },
    ],
  },
  {
    name: "General Contractor Services",
    vendors: [
      { business: "Wilson Contracting Services", contact: "Brad Wilson", phone: "801.404.0827", email: "brad.wcs@gmail.com", services: "General Contractor" },
    ],
  },
  {
    name: "Flooring & Design",
    vendors: [
      { business: "Ogden's Flooring and Design", contact: "Nathan Laws", phone: "801.739.2703", email: "nathan@ogdensflooring.com", services: "Flooring – 361 W 2540 N Lehi, UT" },
      { business: "Gilardo Sanchez Tile", contact: "Gilardo Sanchez", phone: "801.615.3396", email: "", services: "Tile Work" },
    ],
  },
  {
    name: "Roofing",
    vendors: [
      { business: "Powerhouse Roofing", contact: "Yasir", phone: "801.874.9083", email: "", services: "Roofing" },
      { business: "Don Van Tassell Roofing", contact: "Don Van Tassell", phone: "801.368.9895", email: "", services: "Roofing" },
      { business: "Cali Roofing", contact: "Ramirez", phone: "801.358.4083", email: "caliroofing@hotmail.com", services: "Roofing" },
      { business: "Arches Roofing", contact: "Kyle Dyson", phone: "385.414.0509", email: "", services: "Roofing" },
      { business: "Loyal Solar and Roofing", contact: "Ridge Payne", phone: "801.940.555", email: "", services: "Solar & Roofing" },
    ],
  },
  {
    name: "Electrician",
    vendors: [
      { business: "Silverado Electric", contact: "Shawn Allred", phone: "801.836.8962", email: "silveradoelectric@gmail.com", services: "Electrical" },
    ],
  },
  {
    name: "HVAC",
    vendors: [
      { business: "Air Wize HVAC", contact: "Tyler Bennett", phone: "801.396.0069", email: "tylerbennett@airwizehvac.com", services: "HVAC / Heating and Air" },
    ],
  },
  {
    name: "Home Inspections",
    vendors: [
      { business: "House Inspect Services", contact: "Wayne Henson", phone: "801.404.0300", email: "inspectorgowayne@gmail.com", services: "Home Inspection" },
      { business: "Vital Home Solutions", contact: "Mike Fisher", phone: "801.657.3969", email: "", services: "Mold Remediation" },
      { business: "Precision Radon Services", contact: "", phone: "385.336.7793", email: "", services: "Radon Mitigation" },
    ],
  },
  {
    name: "Landscaping",
    vendors: [
      { business: "Calvin Dudley Landscaping", contact: "Calvin Dudley", phone: "801.717.7535", email: "cal22@live.com", services: "Landscaping" },
      { business: "Utah Professional Lawn Care and Design", contact: "Luis Uribe", phone: "801.310.8730", email: "", services: "Landscaping" },
      { business: "Emilianno Cruz Landscaping", contact: "Emilianno Cruz", phone: "801.227.9188", email: "", services: "Landscaping" },
    ],
  },
  {
    name: "Professional Organizing",
    vendors: [
      { business: "Reset Your Nest", contact: "Julie Knudsen", phone: "", email: "julieknudsen@resetyournest.com", services: "Professional Organizer" },
    ],
  },
  {
    name: "Junk Removal",
    vendors: [
      { business: "Nathan Junk Removal", contact: "", phone: "801.669.0298", email: "", services: "Junk Removal" },
      { business: "1-800-GOT-JUNK", contact: "", phone: "1.800.468.5865", email: "", services: "Junk Removal" },
    ],
  },
  {
    name: "Christmas Lights",
    vendors: [
      { business: "Angel Christmas Lights", contact: "Angel", phone: "801.836.3659", email: "", services: "Christmas Light Installation" },
    ],
  },
  {
    name: "Tax Services",
    vendors: [
      { business: "Mansker Tax Service CPA", contact: "", phone: "385.482.5470", email: "", services: "Tax Services / CPA" },
    ],
  },
  {
    name: "Financial Services",
    vendors: [
      { business: "Ryan Pace", contact: "Ryan Pace", phone: "801.979.2271", email: "ryan.pace@nm.com", services: "Financial Services" },
    ],
  },
  {
    name: "Sewer Scope",
    vendors: [
      { business: "Utah Trenchless", contact: "Garrett", phone: "405.421.1888", email: "", services: "Sewer Scope" },
      { business: "Utah Trenchless", contact: "Nathan", phone: "702.788.0535", email: "", services: "Sewer Scope" },
    ],
  },
];

export default function VendorsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-primary py-24 text-white text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Trusted Vendors
          </h1>
          <p className="text-white/80 text-lg">
            Our recommended network of service providers to help you every step of the way.
          </p>
          <p className="mt-4 text-white/70 text-sm italic">
            Make sure you mention Childs Real Estate Team, Ammon and Tasha, sent you!
          </p>
        </div>
      </section>

      {/* Vendor Categories */}
      <section className="mx-auto max-w-7xl px-6 py-20 space-y-16">
        {categories.map((category) => (
          <div key={category.name}>
            <h2 className="font-serif text-2xl font-semibold text-primary mb-6 pb-2 border-b border-border">
              {category.name}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {category.vendors.map((vendor, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border bg-white p-6 shadow-sm flex flex-col gap-2"
                >
                  <h3 className="font-semibold text-base text-foreground leading-snug">
                    {vendor.business}
                  </h3>
                  {vendor.contact && (
                    <p className="text-sm text-muted-foreground">{vendor.contact}</p>
                  )}
                  <p className="text-xs text-accent font-medium mt-1">{vendor.services}</p>
                  <div className="mt-2 space-y-1">
                    {vendor.phone && (
                      <p className="text-sm text-foreground">{vendor.phone}</p>
                    )}
                    {vendor.email && (
                      <p className="text-sm text-foreground">{vendor.email}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
