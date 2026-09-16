import Link from "next/link";

export default function ResourcesPage() {
  return (
    <>
      {/* Hero Section */}
      <div id="hero">
        <div id="hero-styles">
          <div id="hero-caption" className="content-full-width parallax-scroll-caption text-align-center hero-full-caption">
            <div className="inner">
              <h1 className="hero-title caption-timeline generate-spans">
                <span>Typography</span>
              </h1>
              <div className="hero-subtitle caption-timeline onload-shuffle">
                <span>Bold headings and subtle details</span> <span>convey your content</span>
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
              <div id="info-text">Featured Elements</div>
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
              {/* Row - Headings */}
              <div className="content-row full row_padding_top row_padding_left row_padding_right light-section" data-bgcolor="#ebebeb">
                <div className="one_half">
                  <h5>Primary Headings</h5>
                </div>
                <div className="one_half last">
                  <h1 className="has-shuffle">Heading 1</h1>
                  <h2 className="has-shuffle">Heading 2</h2>
                  <h3 className="has-shuffle">Heading 3</h3>
                  <h4 className="has-shuffle">Heading 4</h4>
                  <h5 className="has-shuffle">Heading 5</h5>
                  <h6 className="has-shuffle">Heading 6</h6>
                </div>
              </div>
              {/* /Row */}

              <div className="content-row full light-section" data-bgcolor="#ebebeb">
                <hr /><hr /><hr className="animated-line has-animation" /><hr /><hr /><hr />
              </div>

              {/* Row - Anchor Links */}
              <div className="content-row full row_padding_left row_padding_right light-section" data-bgcolor="#ebebeb">
                <div className="one_half">
                  <h5>Anchor Links</h5>
                </div>
                <div className="one_half last">
                  <p>
                    If you paste in a URL, like{" "}
                    <a className="link" href="https://clapat.com/" target="_blank" rel="noopener noreferrer">
                      https://clapat.com
                    </a>{" "}
                    - it'll automatically be linked up. But if you want to customise your anchor text, you can do that too! Here's a link to the{" "}
                    <a className="link" href="https://clapat.com/" target="_blank" rel="noopener noreferrer">
                      ClaPat website
                    </a>
                    .
                  </p>
                </div>
              </div>
              {/* /Row */}

              <div className="content-row full light-section" data-bgcolor="#ebebeb">
                <hr /><hr /><hr className="animated-line has-animation" /><hr /><hr /><hr />
              </div>

              {/* Row - Floating Images */}
              <div className="content-row full row_padding_left row_padding_right light-section" data-bgcolor="#ebebeb">
                <div className="one_half">
                  <h5>Floating Images</h5>
                </div>
                <div className="one_half last">
                  <p>
                    This is a text with a{" "}
                    <span className="has-hover-image hide-ball" data-img="/images/shortcodes/image01.jpg">
                      floating image
                    </span>{" "}
                    which you can use as{" "}
                    <span className="has-hover-image vertical hide-ball" data-img="/images/shortcodes/pinned01.jpg">
                      many times
                    </span>{" "}
                    you want in each paragraph.
                  </p>
                </div>
              </div>
              {/* /Row */}

              <div className="content-row full light-section" data-bgcolor="#ebebeb">
                <hr /><hr /><hr className="animated-line has-animation" /><hr /><hr /><hr />
              </div>

              {/* Row - Blockquote */}
              <div className="content-row full row_padding_left row_padding_right light-section" data-bgcolor="#ebebeb">
                <div className="one_half">
                  <h5>Blockquote</h5>
                </div>
                <div className="one_half last">
                  <blockquote className="has-shuffle">
                    A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.
                  </blockquote>
                </div>
              </div>
              {/* /Row */}

              <div className="content-row full light-section" data-bgcolor="#ebebeb">
                <hr /><hr /><hr className="animated-line has-animation" /><hr /><hr /><hr />
              </div>

              {/* Row - Tables */}
              <div className="content-row full row_padding_left row_padding_right light-section" data-bgcolor="#ebebeb">
                <div className="one_half">
                  <h5>TABLES</h5>
                </div>
                <div className="one_half last">
                  <table>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Heading</th>
                        <th>Heading</th>
                        <th>Heading</th>
                        <th>Heading</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* /Row */}

              <div className="content-row full light-section" data-bgcolor="#ebebeb">
                <hr /><hr /><hr className="animated-line has-animation" /><hr /><hr /><hr />
              </div>

              {/* Row - Highlighting */}
              <div className="content-row full row_padding_left row_padding_right light-section" data-bgcolor="#ebebeb">
                <div className="one_half">
                  <h5>HIGHLIGHTING</h5>
                </div>
                <div className="one_half last">
                  <p>
                    <mark>Highlighting text</mark> can help bring important information immediately to the reader's attention. When creating a highlighting text, all you need to do is add a <code>==</code> before and after your text in a <strong>Markdown card</strong>.
                  </p>
                </div>
              </div>
              {/* /Row */}

              <div className="content-row full light-section" data-bgcolor="#ebebeb">
                <hr /><hr /><hr className="animated-line has-animation" /><hr /><hr /><hr />
              </div>

              {/* Row - Lists */}
              <div className="content-row full row_padding_left row_padding_right light-section" data-bgcolor="#ebebeb">
                <div className="one_half">
                  <h5>LISTS</h5>
                </div>
                <div className="one_half last">
                  <div className="one_half">
                    <p className="bigger">Unordered list</p>
                    <ul>
                      <li>Item number one</li>
                      <li>
                        Item number two
                        <ul>
                          <li>Nested item one</li>
                          <li>Nested item two</li>
                        </ul>
                      </li>
                      <li>Item number three</li>
                    </ul>
                  </div>

                  <div className="one_half last">
                    <p className="bigger">Ordered list</p>
                    <ol>
                      <li>Item number one</li>
                      <li>
                        Item number two
                        <ol>
                          <li>Nested item one</li>
                          <li>Nested item two</li>
                        </ol>
                      </li>
                      <li>Item number three</li>
                    </ol>
                  </div>
                </div>
              </div>
              {/* /Row */}

              <div className="content-row full light-section" data-bgcolor="#ebebeb">
                <hr /><hr /><hr className="animated-line has-animation" /><hr /><hr /><hr />
              </div>

              {/* Row - Code */}
              <div className="content-row full row_padding_left row_padding_right light-section" data-bgcolor="#ebebeb">
                <div className="one_half">
                  <h5>CODE</h5>
                </div>
                <div className="one_half last">
                  <pre>
                    <code>
                      {`.my-element {
  display: block;
  width: 100%;
}`}
                    </code>
                  </pre>
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
