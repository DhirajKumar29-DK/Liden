"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const isHighlights = ["/index-highlights.html", "/index-highlights", "/highlights"].includes(pathname);
  const isPlayground = ["/index-playground.html", "/index-playground", "/playground"].includes(pathname);

  return (
    <footer className="clapat-footer hidden">
      <div id="footer-container">
        {isHighlights ? (
          <>
            <div className="button-icon-link left cp-button-prev fade-slide-element fadeout-element">
              <div className="icon-wrap-scale">
                <div className="icon-wrap parallax-wrap">
                  <div className="button-icon parallax-element">
                    <i className="fa-solid fa-arrow-left"></i>
                  </div>
                </div>
              </div>
              <div className="button-text sticky left">
                <span data-hover="Prev">Prev</span>
              </div>
            </div>

            <div className="progress-info fade-slide-element fadeout-element">
              <div className="progress-info-fill">Scroll or Drag</div>
              <div className="progress-info-fill-2">Scroll or Drag</div>
            </div>

            <div className="button-icon-link right cp-button-next fade-slide-element fadeout-element">
              <div className="icon-wrap-scale">
                <div className="icon-wrap parallax-wrap">
                  <div className="button-icon parallax-element">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div className="button-text sticky right">
                <span data-hover="Next">Next</span>
              </div>
            </div>
          </>
        ) : isPlayground ? (
          <>
            <div className="button-icon-link left cp-button-prev fade-slide-element fadeout-element">
              <div className="icon-wrap-scale">
                <div className="icon-wrap parallax-wrap">
                  <div className="button-icon parallax-element">
                    <i className="fa-solid fa-arrow-down"></i>
                  </div>
                </div>
              </div>
              <div className="button-text sticky left">
                <span data-hover="Prev">Prev</span>
              </div>
            </div>

            <div className="progress-info fade-slide-element fadeout-element">
              <div className="progress-info-fill">Scroll or Drag</div>
              <div className="progress-info-fill-2">Scroll or Drag</div>
            </div>

            <div className="button-icon-link right cp-button-next fade-slide-element fadeout-element">
              <div className="icon-wrap-scale">
                <div className="icon-wrap parallax-wrap">
                  <div className="button-icon parallax-element">
                    <i className="fa-solid fa-arrow-up"></i>
                  </div>
                </div>
              </div>
              <div className="button-text sticky right">
                <span data-hover="Next">Next</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div id="backtotop" className="button-wrap left">
              <div className="icon-wrap parallax-wrap">
                <div className="button-icon parallax-element">
                  <i className="fa-solid fa-angle-up"></i>
                </div>
              </div>
              <div className="button-text sticky left">
                <span data-hover="Back Top">Back Top</span>
              </div>
            </div>

            <div className="footer-middle">
              <div className="copyright">
                2024 ©{" "}
                <a className="link" target="_blank" rel="noopener noreferrer" href="https://www.clapat.com/">
                  ClaPat
                </a>
                . All rights reserved.
              </div>
            </div>

            <div className="socials-wrap">
              <div className="socials-icon">
                <i className="fa-solid fa-share-nodes"></i>
              </div>
              <div className="socials-text">Follow Us</div>
              <ul className="socials">
                <li>
                  <span className="parallax-wrap">
                    <a className="parallax-element" href="https://www.dribbble.com/clapat" target="_blank" rel="noopener noreferrer">
                      Db
                    </a>
                  </span>
                </li>
                <li>
                  <span className="parallax-wrap">
                    <a className="parallax-element" href="https://www.twitter.com/clapatdesign" target="_blank" rel="noopener noreferrer">
                      Tx
                    </a>
                  </span>
                </li>
                <li>
                  <span className="parallax-wrap">
                    <a className="parallax-element" href="https://www.behance.com/clapat" target="_blank" rel="noopener noreferrer">
                      Be
                    </a>
                  </span>
                </li>
                <li>
                  <span className="parallax-wrap">
                    <a className="parallax-element" href="https://www.facebook.com/clapat.ro" target="_blank" rel="noopener noreferrer">
                      Fb
                    </a>
                  </span>
                </li>
                <li>
                  <span className="parallax-wrap">
                    <a className="parallax-element" href="https://www.instagram.com/clapat.themes/" target="_blank" rel="noopener noreferrer">
                      In
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </footer>
  );
}
