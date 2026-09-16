import Link from "next/link";
import { projectsData } from "@/data/projects";

export default function HighlightsPage() {
  return (
    <>
      {/* Main Content */}
      <div id="main-content">
        <div id="main-page-content">
          <div id="itemsWrapperLinks">
            <div id="itemsWrapper" className="webgl-fitthumbs fx-one">
              {/* ClaPat Slider */}
              <div id="clapat-webgl-slider" className="clapat-slider-wrapper showcase-carousel">
                <div id="trigger-slides" className="clapat-slider">
                  {/* ClaPat Main Slider */}
                  <div className="clapat-slider-viewport">
                    {projectsData.map((project, index) => (
                      <div className="clapat-slide" key={project.id || index}>
                        <div className="slide-effects">
                          <div className="slide-inner-height" data-centerline="OPEN">
                            <div className="slide-moving">
                              <div className="trigger-item">
                                <div className="img-mask pixels-cover">
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
                                <div className="slide-date">
                                  <span>2024</span>
                                </div>
                                <div className="slide-cat">
                                  <span>{project.category}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* /ClaPat Main Slider */}
                </div>
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
