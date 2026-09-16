import Link from "next/link";
import { projectsData } from "@/data/projects";

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <div id="hero">
        <div id="hero-styles">
          <div id="hero-caption" className="content-full-width parallax-scroll-caption text-align-center hero-full-caption">
            <div className="inner">
              <h1 className="hero-title caption-timeline generate-spans">
                <span>Crafting</span> <span>Digital Assets</span>
              </h1>
              <div className="hero-subtitle caption-timeline onload-shuffle">
                <span>Designing digital experiences that</span> <span>leave a lasting impression</span>
              </div>
            </div>
          </div>
          <div id="hero-footer" className="has-border">
            <div className="hero-footer-left">
              <div className="button-wrap left scroll-down">
                <div className="icon-wrap parallax-wrap">
                  <div className="button-icon parallax-element">
                    <i className="fa-solid fa-arrow-down"></i>
                  </div>
                </div>
                <div className="button-text sticky left">
                  <span data-hover="Scroll to Explore">Scroll to Explore</span>
                </div>
              </div>
            </div>
            <div className="hero-footer-right">
              <div id="info-text">All Case Studies</div>
            </div>
          </div>
        </div>
      </div>
      {/* /Hero Section */}

      {/* Main Content */}
      <div id="main-content">
        <div id="main-page-content">
          <div id="itemsWrapperLinks">
            <div id="itemsWrapper" className="webgl-fitthumbs fx-one">
              {/* View Filters */}
              <div className="view-filters">
                <div id="filters-wrapper" className="link">
                  <div className="active-filter-bg"></div>
                  <ul id="filters" className="filters-options-wrapper">
                    <li className="filters-timeline link active">
                      <a id="all" className="filter-option is_active" href="#" data-filter="">
                        All
                      </a>
                    </li>
                    <li className="filters-timeline link">
                      <a className="filter-option" href="#" data-filter="design-filter">
                        Design
                      </a>
                    </li>
                    <li className="filters-timeline link">
                      <a className="filter-option" href="#" data-filter="video-filter">
                        Video
                      </a>
                    </li>
                    <li className="filters-timeline link">
                      <a className="filter-option" href="#" data-filter="photo-filter">
                        Photo
                      </a>
                    </li>
                  </ul>
                  <div className="toggle-filters">Filters</div>
                </div>
              </div>
              {/* /View Filters */}

              {/* ClaPat Portfolio Grid */}
              <div className="showcase-portfolio expand-grid">
                {projectsData.map((project, idx) => {
                  const filterClass = idx % 3 === 0 ? "photo-filter" : idx % 3 === 1 ? "design-filter" : "video-filter";
                  return (
                    <div className={`clapat-item ${filterClass}`} key={project.id || idx}>
                      <div className="slide-inner trigger-item" data-centerline="OPEN">
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
                        <div className="slide-caption trigger-item-link-secondary">
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
                  );
                })}
              </div>
              {/* /ClaPat Portfolio Grid */}
            </div>
          </div>
        </div>

        {/* Page Navigation */}
        <div id="page-nav" className="move-nav-onload">
          <div className="page-nav-wrap">
            <div className="page-nav-caption nav-full-caption content-full-width text-align-center">
              <div className="inner">
                <Link className="next-ajax-link-page" data-type="page-transition" data-centerline="GO TO" href="/index-playground.html">
                  <div className="next-hero-title caption-timeline">
                    <span>Virtual</span> <span>Playground</span>
                  </div>
                </Link>
                <div className="next-hero-subtitle caption-timeline">
                  <span>Where concepts evolve into masterpieces</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Navigation */}
      </div>
      {/* /Main Content */}
    </>
  );
}
