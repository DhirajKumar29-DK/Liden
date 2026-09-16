import Link from "next/link";

export default function Header() {
  return (
    <header className="clapat-header classic-menu invert-header" data-menucolor="#0c0c0c">
      {/* Gradient */}
      <div className="header-gradient"></div>
      {/* /Gradient */}

      <div id="header-container">
        {/* Logo */}
        <div id="clapat-logo" className="hide-ball">
          <Link className="ajax-link" data-type="page-transition" href="/">
            <img className="black-logo" src="/images/logo.png" alt="ClaPat Logo" />
            <img className="white-logo" src="/images/logo-white.png" alt="ClaPat Logo" />
          </Link>
        </div>
        {/* /Logo */}

        {/* Navigation */}
        <nav className="clapat-nav-wrapper">
          <div className="nav-height">
            <ul data-breakpoint="1025" className="flexnav">
              <li className="menu-timeline link">
                <Link className="ajax-link" data-type="page-transition" href="/">
                  <div className="before-span">
                    <span data-hover="Index">Index</span>
                  </div>
                </Link>
              </li>
              <li className="menu-timeline link">
                <Link className="ajax-link" data-type="page-transition" href="/highlights">
                  <div className="before-span">
                    <span data-hover="Projects">Projects</span>
                  </div>
                </Link>
                <ul>
                  <li>
                    <Link className="ajax-link" href="/highlights" data-type="page-transition">
                      Highlights
                    </Link>
                  </li>
                  <li>
                    <Link className="ajax-link" href="/portfolio" data-type="page-transition">
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link className="ajax-link" href="/playground" data-type="page-transition">
                      Playground
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-timeline link">
                <Link className="ajax-link" data-type="page-transition" href="/about">
                  <div className="before-span">
                    <span data-hover="Agency">Agency</span>
                  </div>
                </Link>
              </li>
              <li className="menu-timeline link">
                <Link className="ajax-link" data-type="page-transition" href="/resources">
                  <div className="before-span">
                    <span data-hover="Resources">Resources</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* /Navigation */}

        {/* Header Button */}
        <Link className="header-button ajax-link" data-type="page-transition" href="/contact">
          <div className="button-icon-link right">
            <div className="icon-wrap-scale">
              <div className="icon-wrap parallax-wrap">
                <div className="button-icon parallax-element">
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="button-text sticky right">
              <span data-hover="Let's Talk">Let's Talk</span>
            </div>
          </div>
        </Link>
        {/* /Header Button */}

        {/* Menu Burger */}
        <div className="button-wrap right menu burger-lines">
          <div className="icon-wrap parallax-wrap">
            <div className="button-icon parallax-element">
              <div id="burger-wrapper">
                <div id="menu-burger">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <div className="button-text sticky right">
            <span data-hover="Menu">Menu</span>
          </div>
        </div>
        {/* /Menu Burger */}
      </div>
    </header>
  );
}
