import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <div id="hero">
        <div id="hero-styles">
          <div id="hero-caption" className="content-full-width parallax-scroll-caption text-align-center hero-full-caption">
            <div className="inner">
              <h1 className="hero-title caption-timeline generate-spans">
                <span>Creative</span> <span>Design Agency</span>
              </h1>
              <div className="hero-subtitle caption-timeline onload-shuffle">
                <span>We are passionate about</span> <span>creating memorable experience</span>
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
              <div id="info-text">Our Short Story</div>
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
              {/* Row - Clipped Image & Video */}
              <div className="content-row light-section" data-bgcolor="#ebebeb">
                <div className="clipped-image-wrapper">
                  <div className="clipped-image-pin">
                    <div className="clipped-image">
                      <img src="/images/about.jpg" alt="About Image" />
                      <div className="content-video-wrapper">
                        <video loop muted playsInline className="bgvid">
                          <source src="/images/about.mp4" type="video/mp4" />
                        </video>
                      </div>
                      <div className="clipped-image-gradient"></div>
                    </div>
                  </div>
                  <div className="clipped-image-content">
                    <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
                  </div>
                </div>
              </div>
              {/* /Row */}

              {/* Row - Recognitions */}
              <div className="content-row row_padding_top text-align-center light-section" data-bgcolor="#ebebeb">
                <div className="pinned-lists-wrapper brick-mode" data-duration="5x">
                  <p>Our Recognitions </p>
                  <ul className="pinned-lists">
                    <li>Over the past</li>
                    <li>decades</li>
                    <li>we have been</li>
                    <li>honored to</li>
                    <li>receive all these</li>
                    <li>awards</li>
                  </ul>
                </div>
              </div>
              {/* /Row */}

              {/* Row - Flex Lists (Awards) */}
              <div className="content-row full row_padding_left row_padding_right row_padding_bottom text-align-center light-section" data-bgcolor="#ebebeb">
                <hr />
                <ul className="flex-lists-wrapper">
                  <li className="flex-list link has-animation">
                    <span className="flex-list-left">Awwwards</span>
                    <span className="flex-list-center">Developer Award, Site of the Day, Honorable Mention</span>
                    <span className="flex-list-right">x08 Awards</span>
                  </li>
                  <li className="flex-list link has-animation">
                    <span className="flex-list-left">CSS Design Awards</span>
                    <span className="flex-list-center">Website of the Day, Special Kudos</span>
                    <span className="flex-list-right">x06 Awards</span>
                  </li>
                  <li className="flex-list link has-animation">
                    <span className="flex-list-left">Behance</span>
                    <span className="flex-list-center">Featured UX/UI and XD Design</span>
                    <span className="flex-list-right">x04 Awards</span>
                  </li>
                  <li className="flex-list link has-animation">
                    <span className="flex-list-left">CSS Light</span>
                    <span className="flex-list-center">Featured Website, Featured Design</span>
                    <span className="flex-list-right">x12 Awards</span>
                  </li>
                  <li className="flex-list link has-animation">
                    <span className="flex-list-left">FWA Awards</span>
                    <span className="flex-list-center">FWA of the day, FWA of the month</span>
                    <span className="flex-list-right">x04 Awards</span>
                  </li>
                  <li className="flex-list link has-animation">
                    <span className="flex-list-left">One Page Love</span>
                    <span className="flex-list-center">Site of the Day</span>
                    <span className="flex-list-right">x10 Awards</span>
                  </li>
                  <li className="flex-list link has-animation">
                    <span className="flex-list-left">SiteInspire</span>
                    <span className="flex-list-center">Featured Website</span>
                    <span className="flex-list-right">x08 Awards</span>
                  </li>
                  <li className="flex-list link has-animation">
                    <span className="flex-list-left">CSS Winner</span>
                    <span className="flex-list-center">Site of the Day, Special Mention</span>
                    <span className="flex-list-right">x12 Awards</span>
                  </li>
                </ul>
                <hr className="destroy" />
              </div>
              {/* /Row */}

              {/* Row - Services */}
              <div className="content-row full row_padding_left row_padding_right row_padding_bottom text-align-center light-section" data-bgcolor="#ebebeb">
                <div className="pinned-lists-wrapper zipper-mode" data-duration="3x">
                  <p>You need it? We do it</p>
                  <ul className="pinned-lists">
                    <li>Branding</li>
                    <li>Web Design</li>
                    <li>Motion</li>
                    <li>Development</li>
                    <li>Marketing</li>
                    <li>Apps</li>
                  </ul>
                </div>
              </div>
              {/* /Row */}

              {/* Row - Team Members */}
              <div className="content-row full row_padding_left row_padding_right light-section" data-bgcolor="#ebebeb">
                <div className="team-wrapper-grid">
                  <div className="team-intro-grid">
                    <h1 className="has-shuffle">Our Team</h1>
                  </div>

                  <ul className="team-members-grid">
                    <li>
                      <div className="team-member-inner">
                        <a data-centerline="Hello" target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/clapatdesign">
                          <div className="team-member-image pixels-cover">
                            <img alt="Team Member Image" src="/images/team1.jpg" />
                          </div>
                        </a>
                        <div className="team-member-caption">
                          <span>Olivia Smith</span> <span>Co-Founder</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="team-member-inner">
                        <a data-centerline="Bonjour" target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/clapatdesign">
                          <div className="team-member-image pixels-cover">
                            <img alt="Team Member Image" src="/images/team2.jpg" />
                          </div>
                        </a>
                        <div className="team-member-caption">
                          <span>Lucas Martin</span> <span>Co-Founder</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="team-member-inner">
                        <a data-centerline="Hallo" target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/clapatdesign">
                          <div className="team-member-image pixels-cover">
                            <img alt="Team Member Image" src="/images/team3.jpg" />
                          </div>
                        </a>
                        <div className="team-member-caption">
                          <span>Emma Müller</span> <span>Web Designer</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="team-member-inner">
                        <a data-centerline="Salut" target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/clapatdesign">
                          <div className="team-member-image pixels-cover">
                            <img alt="Team Member Image" src="/images/team4.jpg" />
                          </div>
                        </a>
                        <div className="team-member-caption">
                          <span>Andrei Popescu</span> <span>Web Developer</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="team-member-inner">
                        <a data-centerline="Hola" target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/clapatdesign">
                          <div className="team-member-image pixels-cover">
                            <img alt="Team Member Image" src="/images/team5.jpg" />
                          </div>
                        </a>
                        <div className="team-member-caption">
                          <span>Lucía García</span> <span>SEO Specialist</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="team-member-inner">
                        <Link className="ajax-link" data-centerline="Apply" data-type="page-transition" href="/contact">
                          <div className="team-member-image pixels-cover">
                            <img alt="Team Member Image" src="/images/team6.jpg" />
                          </div>
                        </Link>
                        <div className="team-member-caption">
                          <span>Now Hiring</span> <span>Art Director</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /Row */}
            </div>
          </div>
        </div>

        {/* Page Navigation */}
        <div id="page-nav" className="move-nav-onload">
          <div className="page-nav-wrap">
            <div className="page-nav-caption nav-full-caption content-full-width text-align-center">
              <div className="inner">
                <Link className="next-ajax-link-page" data-type="page-transition" data-centerline="GO TO" href="/contact">
                  <div className="next-hero-title caption-timeline">
                    <span>Let’s Create</span> <span>Something Great</span>
                  </div>
                </Link>
                <div className="next-hero-subtitle caption-timeline">
                  <span>Together, we can make a real difference</span>
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
