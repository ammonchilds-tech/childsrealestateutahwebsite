import { SOCIAL_LINKS, type SocialLink } from "@/lib/constants";
import { cn } from "@/lib/utils";

function Icon({ platform }: { platform: SocialLink["platform"] }) {
  const common = { viewBox: "0 0 24 24", className: "h-[18px] w-[18px]", "aria-hidden": true } as const;
  switch (platform) {
    case "instagram":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common} fill="currentColor">
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg {...common} fill="currentColor">
          <path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.7a5.7 5.7 0 1 0 4.9 5.7V9.1a7.4 7.4 0 0 0 4.3 1.4V7.4a4.3 4.3 0 0 1-3.2-1.6z" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common} fill="currentColor">
          <path d="M14 8h3V4h-3c-2.8 0-4 1.7-4 4.3V10H7v4h3v8h4v-8h3l1-4h-4V8.6c0-.4.3-.6.6-.6z" />
        </svg>
      );
  }
}

/** The same social links, in the same order, everywhere on the site. */
export function SocialLinks({
  variant = "dark",
  className,
}: {
  /** "dark" = on a black background; "light" = on white. */
  variant?: "dark" | "light";
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-2.5", className)} aria-label="Childs Real Estate on social media">
      {SOCIAL_LINKS.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            title={link.label}
            aria-label={`${link.label} (opens in a new tab)`}
            className={cn(
              "flex h-10 w-10 items-center justify-center transition-colors",
              variant === "dark"
                ? "bg-white/10 text-white hover:bg-gold hover:text-ink"
                : "bg-ink text-white hover:bg-gold hover:text-ink",
            )}
          >
            <Icon platform={link.platform} />
          </a>
        </li>
      ))}
    </ul>
  );
}
