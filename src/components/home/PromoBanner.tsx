import Link from "next/link";
import { Sparkles } from "lucide-react";

export function PromoBanner() {
  return (
    <div className="bg-accent text-primary py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 text-center flex-wrap">
        <Sparkles className="h-5 w-5 flex-shrink-0" />
        <p className="text-base font-semibold">
          <span className="font-bold">Limited Time Offer:</span> List with us and get everything in our{" "}
          <span className="font-bold">Prestige package</span> for the price of Distinction — just{" "}
          <span className="font-bold">2%</span>.
        </p>
        <Link
          href="#listing-packages"
          className="text-base font-bold underline underline-offset-2 hover:opacity-70 transition-opacity flex-shrink-0"
        >
          See what&apos;s included →
        </Link>
      </div>
    </div>
  );
}
