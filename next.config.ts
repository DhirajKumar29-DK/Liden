import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/index.html", destination: "/" },
      { source: "/about.html", destination: "/about" },
      { source: "/contact.html", destination: "/contact" },
      { source: "/resources.html", destination: "/resources" },
      { source: "/index-highlights.html", destination: "/highlights" },
      { source: "/index-highlights", destination: "/highlights" },
      { source: "/index-portfolio.html", destination: "/portfolio" },
      { source: "/index-portfolio", destination: "/portfolio" },
      { source: "/index-playground.html", destination: "/playground" },
      { source: "/index-playground", destination: "/playground" },
      { source: "/project01.html", destination: "/project/bobs-specials" },
      { source: "/project02.html", destination: "/project/this-is-willo" },
      { source: "/project03.html", destination: "/project/the-infin" },
      { source: "/project04.html", destination: "/project/the-invincibles" },
      { source: "/project05.html", destination: "/project/provenance" },
      { source: "/project06.html", destination: "/project/unbreak" },
      { source: "/project07.html", destination: "/project/kouch-dominion" },
      { source: "/project08.html", destination: "/project/vx-lab" },
      { source: "/project09.html", destination: "/project/mimco-blue" },
      { source: "/project01", destination: "/project/bobs-specials" },
      { source: "/project02", destination: "/project/this-is-willo" },
      { source: "/project03", destination: "/project/the-infin" },
      { source: "/project04", destination: "/project/the-invincibles" },
      { source: "/project05", destination: "/project/provenance" },
      { source: "/project06", destination: "/project/unbreak" },
      { source: "/project07", destination: "/project/kouch-dominion" },
      { source: "/project08", destination: "/project/vx-lab" },
      { source: "/project09", destination: "/project/mimco-blue" },
    ];
  },
};

export default nextConfig;
