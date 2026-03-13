"use client";

import Link from "next/link";
import Image from "next/image";

export function FAB() {
  return (
    <Link
      href="/contact"
      aria-label="Contact us"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center border border-[#C9A96E]/30 hover:border-[#C9A96E]/70 group"
    >
      <Image
        src="/images/logo-icon.png"
        alt=""
        width={40}
        height={40}
        className="w-9 h-9 opacity-90 group-hover:opacity-100 transition-opacity"
      />
    </Link>
  );
}
