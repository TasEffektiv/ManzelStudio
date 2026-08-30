import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Manzel Studio | Melbourne Building Designers",
    short_name: "Manzel Studio",
    description:
      "Manzel Studio is a design-led building design studio in Melbourne creating thoughtful, functional and inspiring spaces, from concept to creation.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1f1f21",
    icons: [
      {
        src: "/icon.svg",
        sizes: "512x512",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
