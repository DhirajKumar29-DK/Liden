import Link from "next/link";
import { projectsData } from "@/data/projects";

const playgroundConfigs = [
  { effectClass: "align-center speed-50 has-scale-large", changeHeader: true, bgcolor: "#ebebeb" },
  { effectClass: "align-left has-scale-small", changeHeader: false, bgcolor: "#111111" },
  { effectClass: "align-right has-scale-medium", changeHeader: true, bgcolor: "#ffba00" },
  { effectClass: "align-center has-scale-small", changeHeader: false, bgcolor: "#192327" },
  { effectClass: "speed-50 align-left has-scale-large", changeHeader: true, bgcolor: "#e2dbd5" },
  { effectClass: "align-center has-scale-small", changeHeader: false, bgcolor: "#292926" },
  { effectClass: "align-right has-scale-medium", changeHeader: true, bgcolor: "#ededed" },
  { effectClass: "speed-50 align-left has-scale-large", changeHeader: false, bgcolor: "#4b4d4f" },
  { effectClass: "align-right has-scale-medium", changeHeader: true, bgcolor: "#ededed" },
];

export default function PlaygroundPage() {
  return (
    <>
      {/* Hero Section */}
      <div id="hero" className="fixed-hero">
        <div id="hero-styles">
          <div id="hero-caption" className="content-full-width parallax-scroll-caption text-align-center hero-full-caption">
            <div className="inner">
              <h1 className="hero-title caption-timeline generate-spans">
                <span>Virtual</span> <span>Playground</span>
              </h1>
              <div className="hero-subtitle caption-timeline onload-shuffle">
                <span>Where concepts evolve into masterpieces</span>
              </div>
            </div>
            <div className="external-caption"></div>
          </div>
        </div>
      </div>
      {/* /Hero Section */}

      {/* Main Content */}
      <div id="main-content">
        <div id="main-page-content">
          <div id="itemsWrapperLinks">
            <div id="itemsWrapper" className="webgl-fitthumbs fx-one">
              {/* ClaPat Slider */}
              <div id="clapat-webgl-slider" className="clapat-slider-wrapper showcase-gallery preview-mode-enabled">
                <div id="trigger-slides" className="clapat-slider">
                  <div className="clapat-slider-viewport">
                    {projectsData.map((project, idx) => {
                      const cfg = playgroundConfigs[idx % playgroundConfigs.length];
                      return (
                        <div className="clapat-slide" key={project.id || idx}>
                          <div className={`slide-effects ${cfg.effectClass}`}>
                            <div className="slide-inner-height" data-centerline="VIEW">
                              <div className="slide-moving">
                                <div
                                  className={`trigger-item ${cfg.changeHeader ? "change-header" : ""}`}
                                  data-centerline="OPEN"
                                  data-projectbgcolor={cfg.bgcolor}
                                >
                                  <div className="img-mask">
                                    <Link className="slide-link" data-type="page-transition" href={`/project/${project.slug}`}></Link>
                                    <div className="section-image trigger-item-link">
                                      <img src={project.heroImage} className="item-image grid__item-img" alt={project.title} />
                                      {project.id === "04" && (
                                        <div className="hero-video-wrapper">
                                          <video loop muted playsInline className="bgvid">
                                            <source src="/images/04hero.mp4" type="video/mp4" />
                                          </video>
                                        </div>
                                      )}
                                    </div>
                                    <img src={project.heroImage} className="grid__item-img grid__item-img--large" alt={project.title} />
                                  </div>
                                </div>
                                <div className="slide-caption">
                                  <div className="slide-title">
                                    <span>{project.title}</span>
                                  </div>
                                  <div className="slide-cat">
                                    <span>{project.category}</span>
                                  </div>
                                  <div className="slide-date">
                                    <span>2024</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* /ClaPat Main Slider */}

                <div className="slider-zoom-wrapper"></div>
                <div className="slider-thumbs-wrapper"></div>
                <div className="slider-close-preview"></div>
              </div>
              {/* /ClaPat Slider */}
            </div>
          </div>
        </div>
      </div>
      {/* /Main Content */}
    </>
  );
}
