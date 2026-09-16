import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div id="hero">
        <div id="hero-styles">
          <div id="hero-caption" className="content-full-width parallax-scroll-caption text-align-center hero-full-caption landing-page-title">
            <div className="inner">
              <h1 className="hero-title caption-timeline">
                <span>Nanotech</span>
              </h1>

              <div className="hero-subtitle caption-timeline onload-shuffle">
                <span>Bringing brands to life</span> <span>through creative web solutions</span>
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
              <span>Featured Projects</span>
            </div>
          </div>
        </div>
      </div>
      {/* /Hero Section */}

      {/* Main Content */}
      <div id="main-content">
        {/* Main Page Content */}
        <div id="main-page-content">
          {/* Fit Thumb Screen Effects */}
          <div id="itemsWrapperLinks">
            <div id="itemsWrapper" className="webgl-fitthumbs fx-one">
              {/* ClaPat Portfolio Grid */}
              <div className="showcase-portfolio expand-grid filp-grid">
                {/* Project 01 */}
                <div className="clapat-item not-expanded">
                  <div className="slide-inner trigger-item" data-centerline="OPEN">
                    <div className="img-mask pixels-cover">
                      <Link className="slide-link" data-type="page-transition" href="/project/bobs-specials"></Link>
                      <div className="section-image trigger-item-link">
                        <img src="/images/01hero.jpg" className="item-image grid__item-img" alt="Bob's Specials" />
                      </div>
                      <img src="/images/01hero.jpg" className="grid__item-img grid__item-img--large" alt="Bob's Specials" />
                    </div>
                    <div className="slide-caption trigger-item-link-secondary">
                      <div className="slide-title">
                        <span>Bob's Specials</span>
                      </div>
                      <div className="slide-date">
                        <span>2024</span>
                      </div>
                      <div className="slide-cat">
                        <span>Branding</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 02 */}
                <div className="clapat-item expanded">
                  <div className="slide-inner trigger-item" data-centerline="OPEN">
                    <div className="img-mask pixels-cover">
                      <Link className="slide-link" data-type="page-transition" href="/project/this-is-willo"></Link>
                      <div className="section-image trigger-item-link">
                        <img src="/images/02hero.jpg" className="item-image grid__item-img" alt="This is Willo" />
                      </div>
                      <img src="/images/02hero.jpg" className="grid__item-img grid__item-img--large" alt="This is Willo" />
                    </div>
                    <div className="slide-caption trigger-item-link-secondary">
                      <div className="slide-title">
                        <span>This is Willo</span>
                      </div>
                      <div className="slide-date">
                        <span>2024</span>
                      </div>
                      <div className="slide-cat">
                        <span>Web Design</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 03 */}
                <div className="clapat-item not-expanded">
                  <div className="slide-inner trigger-item" data-centerline="OPEN">
                    <div className="img-mask pixels-cover">
                      <Link className="slide-link" data-type="page-transition" href="/project/the-infin"></Link>
                      <div className="section-image trigger-item-link">
                        <img src="/images/03hero.jpg" className="item-image grid__item-img" alt="The Infin" />
                      </div>
                      <img src="/images/03hero.jpg" className="grid__item-img grid__item-img--large" alt="The Infin" />
                    </div>
                    <div className="slide-caption trigger-item-link-secondary">
                      <div className="slide-title">
                        <span>The Infin</span>
                      </div>
                      <div className="slide-date">
                        <span>2024</span>
                      </div>
                      <div className="slide-cat">
                        <span>Photography</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /ClaPat Portfolio Grid */}

              {/* Row - Scaling Images */}
              <div className="content-row full row_padding_top row_padding_left row_padding_right light-section fadeout-element" data-bgcolor="transparent">
                <h1 className="text-align-center">
                  We help businesses <span className="has-scale-image hide-ball" data-img="/images/client-01.png" data-bgcolor="#000"></span> to innovate and{" "}
                  <span className="has-scale-image hide-ball" data-img="/images/client-02.png" data-bgcolor="#000"></span> remain highly relevant to their customers by developing{" "}
                  <span className="has-scale-image hide-ball" data-img="/images/client-03.png" data-bgcolor="#000"></span> edge digital products
                </h1>
              </div>
              {/* /Row */}

              {/* Row - The Challenge */}
              <div className="content-row light-section row_padding_bottom" data-bgcolor="#ebebeb">
                <hr />
                <hr />
                <div className="one_half"></div>
                <div className="one_half last">
                  <p className="bigger has-shuffle">The Challenge</p>
                  <p className="has-opacity" data-delay="0">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                  </p>
                  <div className="button-wrap right button-link has-animation">
                    <div className="icon-wrap parallax-wrap">
                      <div className="button-icon parallax-element">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </div>
                    <Link className="ajax-link" data-type="page-transition" href="/about">
                      <div className="button-text sticky right">
                        <span data-hover="About Us">About Us</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              {/* /Row */}

              {/* Row - Projects List */}
              <div className="content-row full text-align-center dark-section" data-bgcolor="#ebebeb">
                <div className="projects-list-wrapper invert-header-color">
                  <ul className="projects-list-captions">
                    <li data-centerline="OPEN">
                      <Link className="list-link" data-type="page-transition" href="/project/the-invincibles"></Link>
                      <span>The Invincibles</span>
                    </li>
                    <li data-centerline="OPEN">
                      <Link className="list-link" data-type="page-transition" href="/project/provenance"></Link>
                      <span>Provenance</span>
                    </li>
                    <li data-centerline="OPEN">
                      <Link className="list-link" data-type="page-transition" href="/project/unbreak"></Link>
                      <span>Unbreak</span>
                    </li>
                    <li data-centerline="OPEN">
                      <Link className="list-link" data-type="page-transition" href="/project/kouch-dominion"></Link>
                      <span>Kouch Dominion</span>
                    </li>
                    <li data-centerline="OPEN">
                      <Link className="list-link" data-type="page-transition" href="/project/vx-lab"></Link>
                      <span>VX Lab</span>
                    </li>
                    <li data-centerline="OPEN">
                      <Link className="list-link" data-type="page-transition" href="/project/mimco-blue"></Link>
                      <span>Mimco Blue</span>
                    </li>
                  </ul>

                  <ul className="projects-list-images">
                    <li className="trigger-item">
                      <div className="img-mask">
                        <div className="section-image trigger-item-link">
                          <img src="/images/04hero.jpg" className="item-image grid__item-img" alt="The Invincibles" />
                          <div className="hero-video-wrapper">
                            <video loop muted className="bgvid">
                              <source src="/images/04hero.mp4" type="video/mp4" />
                            </video>
                          </div>
                        </div>
                        <img src="/images/04hero.jpg" className="grid__item-img grid__item-img--large" alt="The Invincibles" />
                      </div>
                    </li>
                    <li className="trigger-item">
                      <div className="img-mask">
                        <div className="section-image trigger-item-link">
                          <img src="/images/05hero.jpg" className="item-image grid__item-img" alt="Provenance" />
                        </div>
                        <img src="/images/05hero.jpg" className="grid__item-img grid__item-img--large" alt="Provenance" />
                      </div>
                    </li>
                    <li className="trigger-item">
                      <div className="img-mask">
                        <div className="section-image trigger-item-link">
                          <img src="/images/06hero.jpg" className="item-image grid__item-img" alt="Unbreak" />
                        </div>
                        <img src="/images/06hero.jpg" className="grid__item-img grid__item-img--large" alt="Unbreak" />
                      </div>
                    </li>
                    <li className="trigger-item">
                      <div className="img-mask">
                        <div className="section-image trigger-item-link">
                          <img src="/images/07hero.jpg" className="item-image grid__item-img" alt="Kouch Dominion" />
                        </div>
                        <img src="/images/07hero.jpg" className="grid__item-img grid__item-img--large" alt="Kouch Dominion" />
                      </div>
                    </li>
                    <li className="trigger-item">
                      <div className="img-mask">
                        <div className="section-image trigger-item-link">
                          <img src="/images/08hero.jpg" className="item-image grid__item-img" alt="VX Lab" />
                        </div>
                        <img src="/images/08hero.jpg" className="grid__item-img grid__item-img--large" alt="VX Lab" />
                      </div>
                    </li>
                    <li className="trigger-item">
                      <div className="img-mask">
                        <div className="section-image trigger-item-link">
                          <img src="/images/09hero.jpg" className="item-image grid__item-img" alt="Mimco Blue" />
                        </div>
                        <img src="/images/09hero.jpg" className="grid__item-img grid__item-img--large" alt="Mimco Blue" />
                      </div>
                    </li>
                    <li className="pixels-cover"></li>
                  </ul>
                </div>
              </div>
              {/* /Row */}

              {/* Row - Continue Exploring */}
              <div className="content-row small text-align-center light-section" data-bgcolor="#ebebeb">
                <hr />
                <hr />
                <hr />
                <p className="bigger has-shuffle no-margins">Continue Exploring Our Work</p>
                <hr />
                <div className="button-box has-animation" data-delay="100">
                  <div className="clapat-button-wrap parallax-wrap hide-ball">
                    <div className="clapat-button parallax-element">
                      <div className="button-border rounded parallax-element-second">
                        <Link className="ajax-link" data-type="page-transition" href="/portfolio">
                          <span data-hover="All Projects">All Projects</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Row */}
            </div>
          </div>
          {/* Fit Thumb Screen Effects */}
        </div>
        {/* /Main Page Content */}

        {/* Page Navigation */}
        <div id="page-nav" className="move-nav-onload">
          <div className="page-nav-wrap">
            <div className="page-nav-caption nav-full-caption content-full-width text-align-center">
              <div className="inner">
                <Link className="next-ajax-link-page" data-type="page-transition" data-centerline="GO TO" href="/about">
                  <div className="next-hero-title caption-timeline">
                    <span>Creative</span> <span>Design Agency</span>
                  </div>
                </Link>
                <div className="next-hero-subtitle caption-timeline">
                  <span>We are passionate about</span> <span>creating memorable experience</span>
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
