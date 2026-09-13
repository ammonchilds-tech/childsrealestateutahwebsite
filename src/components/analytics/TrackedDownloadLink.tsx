"use client";

import * as React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface TrackedDownloadLinkProps extends Omit<ButtonProps, "onClick"> {
  href: string;
  eventName: string;
  fileName: string;
  children: React.ReactNode;
}

export function TrackedDownloadLink({
  href,
  eventName,
  fileName,
  children,
  ...buttonProps
}: TrackedDownloadLinkProps) {
  return (
    <Button asChild {...buttonProps}>
      <a
        href={href}
        download
        onClick={() => {
          if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", eventName, { file_name: fileName });
          }
        }}
      >
        {children}
      </a>
    </Button>
  );
}
