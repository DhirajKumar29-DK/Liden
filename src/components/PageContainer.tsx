"use client";

import { usePathname } from "next/navigation";
import { projectsData } from "@/data/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PageContainer({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  let bgColor = "#ebebeb";
  let contentTheme = "dark-content";

  if (["/index-playground.html", "/index-playground", "/playground"].includes(pathname)) {
    bgColor = "#000000";
    contentTheme = "light-content";
  } else if (["/contact.html", "/contact"].includes(pathname)) {
    bgColor = "#0c0c0c";
    contentTheme = "light-content";
  } else if (pathname.startsWith("/project/")) {
    const slug = pathname.replace("/project/", "");
    const project = projectsData.find(
      (p) => p.slug === slug || p.numSlug === slug || p.htmlSlug === slug
    );
    if (project) {
      bgColor = project.bgColor || "#ebebeb";
      contentTheme = project.theme || "dark-content";
    }
  }

  return (
    <div id="clapat-page-content" className={contentTheme} data-bgcolor={bgColor}>
      <Header />
      <div id="content-scroll">
        <div id="main">{children}</div>
        <Footer />
      </div>
      <div id="app"></div>
    </div>
  );
}
