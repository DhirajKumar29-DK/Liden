import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";

export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  projectsData.forEach((project) => {
    params.push({ slug: project.slug });
    params.push({ slug: project.numSlug });
  });
  return params;
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const targetSlug = resolvedParams.slug;

  const project = projectsData.find(
    (p) =>
      p.slug === targetSlug ||
      p.numSlug === targetSlug ||
      p.id === targetSlug
  );

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <div id="hero" className="has-image autoscroll">
        <div id="hero-styles">
          <div id="hero-caption" className="content-full-width parallax-scroll-caption">
            <div className="inner">
              <h1 className="hero-title caption-timeline">
                <span>{project.title}</span>
              </h1>
              <div className="hero-subtitle caption-timeline onload-shuffle">
                <span>{project.subtitle}</span>
              </div>
            </div>
            <div id="hero-footer" className="">
              <div className="hero-footer-left">
                <div className="button-wrap left scroll-down">
                  <div className="icon-wrap parallax-wrap">
                    <div className="button-icon parallax-element">
                      <i className="fa-solid fa-arrow-down"></i>
                    </div>
                  </div>
                  <div className="button-text sticky left">
                    <span data-hover="SCROLL TO EXPLORE">SCROLL TO EXPLORE</span>
                  </div>
                </div>
              </div>
              <div className="hero-footer-right">
                <div id="share" className="page-action-content" data-text="SHARE:"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="hero-image-wrapper" className="change-header-color hero-pixels-cover parallax-scroll-image">
        <div id="hero-background-layer" className="parallax-scroll-image">
          <div id="hero-bg-image" style={{ backgroundImage: `url(${project.heroImage})` }}></div>
        </div>
      </div>
      {/* /Hero Section */}

      {/* Main Content */}
      <div id="main-content">
        <div id="main-page-content">
          {/* Row */}
          <div className="content-row small row_padding_top light-section" data-bgcolor="#ebebeb">
            <figure>
              <a href={project.images[0] || project.heroImage} className="image-link">
                <img src={project.images[0] || project.heroImage} alt={project.title} />
              </a>
              <figcaption>Caption</figcaption>
            </figure>
          </div>
          {/* /Row */}

          {/* Row */}
          <div className="content-row small row_padding_bottom light-section text-align-center" data-bgcolor="#ebebeb">
            <hr />
            <hr className="destroy" />
            <p className="bigger has-opacity">{project.description}</p>
          </div>
          {/* /Row */}

          {/* Row */}
          {project.images[1] && (
            <div className="content-row full light-section disable-header-gradient change-header-color" data-bgcolor="#ebebeb">
              <figure className="has-parallax">
                <img src={project.images[1]} alt={project.title} />
              </figure>
            </div>
          )}
          {/* /Row */}

          {/* Row - Characteristics */}
          {project.characteristics && project.characteristics.length > 0 && (
            <div className="content-row small row_padding_top row_padding_bottom light-section text-align-center" data-bgcolor="#ebebeb">
              <div className="pinned-lists-wrapper scale-mode" data-duration="3x">
                <p className="smaller">Characteristics</p>
                <ul className="pinned-lists">
                  {project.characteristics.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {/* /Row */}

          {/* Row - Slider Carousel */}
          <div className="content-row full light-section" data-bgcolor="#ebebeb">
            <div className="clapat-slider-wrapper content-slider looped-carousel has-animation autocenter dark-cursor">
              <div className="clapat-slider">
                <div className="clapat-slider-viewport">
                  {project.images.map((imgSrc, idx) => (
                    <div className="clapat-slide" key={idx}>
                      <div className="slide-img">
                        <img src={imgSrc} alt={`${project.title} slide ${idx + 1}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="clapat-controls">
                <div className="clapat-button-next slider-button-next"></div>
                <div className="clapat-button-prev slider-button-prev"></div>
                <div className="clapat-pagination"></div>
              </div>
            </div>
            <hr className="destroy" />
            <hr className="destroy" />
            <hr />
          </div>
          {/* /Row */}
        </div>
        {/* /Main Page Content */}

        {/* Project Navigation */}
        <div id="project-nav" className="pinned-nav-caption auto-trigger move-title-onload change-header" data-next-bgcolor="#111111">
          <div className="next-project-wrap">
            <div id="next-project-caption" className="text-align-center content-full-width">
              <div className="next-caption-wrapper">
                <Link
                  className="next-ajax-link-project"
                  data-type="page-transition"
                  href={`/project/${project.nextProjectSlug}`}
                  data-firstline="Next"
                  data-secondline="Project"
                ></Link>
                <div className="next-caption">
                  <div className="next-hero-title caption-timeline has-shuffle-title" data-firstline="Keep" data-secondline="Scrolling">
                    <span>{project.nextProjectTitle}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="next-hero-progress">
              <span></span>
            </div>
            <div className="next-project-image-wrapper">
              <div className="next-project-image next-project-image-effects">
                <div className="next-project-image-bg" style={{ backgroundImage: `url(${project.nextProjectImage})` }}></div>
              </div>
            </div>
          </div>
        </div>
        {/* /Project Navigation */}
      </div>
      {/* /Main Content */}
    </>
  );
}
