import type { MetadataRoute } from "next";
import { gallery, siteUrl } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
      images: gallery.map((img) => `${siteUrl}${img.src}`),
    },
  ];
}
