import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Childs Real Estate",
    short_name: "Childs RE",
    description: "Luxury real estate in Utah County and the Salt Lake Valley",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#C9A96E",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
