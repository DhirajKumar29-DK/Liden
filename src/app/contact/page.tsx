"use client";

import React, { useState, useEffect } from "react";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comments: "",
    verify: "",
  });
  const [statusMsg, setStatusMsg] = useState("");

  useEffect(() => {
    // Initialize contact map if script is loaded
    if (typeof window !== "undefined" && (window as any).ContactMap) {
      setTimeout(() => {
        (window as any).ContactMap();
      }, 300);
    }
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("work@nanotech.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (formData.verify.trim() !== "4") {
      setStatusMsg("Captcha validation failed! (1 + 3 = 4)");
      return;
    }

    setIsSubmitting(true);
    setStatusMsg("Sending message...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatusMsg(data.message || "Thank you! Your message has been sent successfully.");
        setFormData({ name: "", email: "", comments: "", verify: "" });
      } else {
        setStatusMsg(data.message || "Failed to send message. Please try again.");
      }
    } catch {
      setStatusMsg("An error occurred while sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div id="hero">
        <div id="hero-styles">
          <div id="hero-caption" className="content-full-width parallax-scroll-caption text-align-center hero-full-caption">
            <div className="inner">
              <h1 className="hero-title caption-timeline generate-spans">
                <span>Let’s Create</span> <span>Something Great</span>
              </h1>
              <div className="hero-subtitle caption-timeline onload-shuffle">
                <span>Together, we can make a real difference</span>
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
              <div id="info-text">
                <a href="mailto:office@nanotech.com" className="link">
                  office@nanotech.com
                </a>
              </div>
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
              {/* Row - Map Canvas */}
              <div className="content-row dark-section" data-bgcolor="#0c0c0c">
                <div className="clipped-image-wrapper">
                  <div className="clipped-image-pin">
                    <div className="clipped-image">
                      <div id="map_canvas" style={{ width: "100%", height: "100%", minHeight: "500px" }}>
                        <iframe
                          width="100%"
                          height="100%"
                          frameBorder="0"
                          style={{
                            border: 0,
                            width: "100%",
                            height: "100%",
                            minHeight: "500px",
                            filter: "grayscale(100%) invert(92%) contrast(120%)",
                          }}
                          src="https://maps.google.com/maps?q=35%20M%20Str%2C%20New%20York%2C%20USA&t=&z=14&ie=UTF8&iwloc=&output=embed"
                          allowFullScreen
                        ></iframe>
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

              {/* Row - Contact Form */}
              <div className="content-row row_padding_top row_padding_bottom dark-section text-align-center" data-bgcolor="#0c0c0c">
                <h2 className="has-shuffle">Let's Talk</h2>
                <hr /><hr />

                <div id="contact-formular">
                  {statusMsg && (
                    <div id="message" style={{ color: "#ffba00", marginBottom: "20px", fontSize: "16px" }}>
                      {statusMsg}
                    </div>
                  )}

                  <form action="javascript:void(0);" onSubmit={handleSubmit} name="contactform" id="contactform">
                    <div className="name-box">
                      <input
                        name="name"
                        type="text"
                        id="name"
                        size={30}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="What's Your Name"
                        required
                      />
                      <label className="input_label"></label>
                    </div>
                    <div className="email-box">
                      <input
                        name="email"
                        type="email"
                        id="email"
                        size={30}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Your Email"
                        required
                      />
                      <label className="input_label"></label>
                    </div>
                    <div className="message-box">
                      <textarea
                        name="comments"
                        cols={40}
                        rows={4}
                        id="comments"
                        value={formData.comments}
                        onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                        placeholder="Tell Us About Your Project"
                        required
                      ></textarea>
                      <label className="input_label slow"></label>
                    </div>

                    <div className="verify-box">
                      <ul className="verify-sum">
                        <li>1</li>
                        <li>+</li>
                        <li>3</li>
                        <li>=</li>
                      </ul>
                      <input
                        name="verify"
                        type="text"
                        id="verify"
                        size={4}
                        value={formData.verify}
                        onChange={(e) => setFormData({ ...formData, verify: e.target.value })}
                        required
                      />
                      <p className="required">
                        <span>*</span> Captcha Validation
                      </p>
                    </div>

                    <div className="button-box has-animation" data-delay="100">
                      <div className="clapat-button-wrap parallax-wrap hide-ball">
                        <div className="clapat-button parallax-element">
                          <div className="button-border rounded">
                            <input
                              type="submit"
                              className="send_message"
                              id="submit"
                              value={isSubmitting ? "Sending..." : "Send Mail"}
                              disabled={isSubmitting}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* /Row */}

              {/* Row - Contact Info Boxes */}
              <div className="content-row dark-section text-align-center" data-bgcolor="#0c0c0c">
                <div className="one_third has-animation" data-delay="100">
                  <div className="box-icon-wrapper block-boxes">
                    <div className="box-icon">
                      <i className="fa fa-paper-plane fa-2x" aria-hidden="true"></i>
                    </div>
                    <div className="box-icon-content">
                      <h6 className="no-margins">
                        <a href="mailto:office@nanotech.com" className="link">
                          <span>office@nanotech.com</span>
                        </a>
                      </h6>
                      <p>Email</p>
                    </div>
                  </div>
                </div>

                <div className="one_third has-animation" data-delay="200">
                  <div className="box-icon-wrapper block-boxes">
                    <div className="box-icon">
                      <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
                    </div>
                    <div className="box-icon-content">
                      <h6 className="no-margins">
                        <a
                          href="https://maps.google.com/?q=35+M+Str+New+York+USA"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link"
                        >
                          35 M Str, New York, USA
                        </a>
                      </h6>
                      <p>Address</p>
                    </div>
                  </div>
                </div>

                <div className="one_third last has-animation" data-delay="300">
                  <div className="box-icon-wrapper block-boxes">
                    <div className="box-icon">
                      <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
                    </div>
                    <div className="box-icon-content">
                      <h6 className="no-margins">
                        <a href="tel:004077635748901" className="link">
                          0040 (7763) 574-8901
                        </a>
                      </h6>
                      <p>Phone</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Row */}

              {/* Row - Copy Mail */}
              <div className="content-row full row_padding_top row_padding_bottom dark-section text-align-center" data-bgcolor="#0c0c0c">
                <p className="bigger has-shuffle no-margins">Ready to work together? Apply Now!</p>
                <div
                  id="copy-email"
                  onClick={handleCopyEmail}
                  style={{ cursor: "pointer" }}
                  data-hover-message="Copy Mail"
                  data-clicked-message="Copied"
                >
                  <span>{copied ? "Copied" : "work@nanotech.com"}</span>
                </div>
              </div>
              {/* /Row */}
            </div>
          </div>
        </div>
      </div>
      {/* /Main Content */}
    </>
  );
}
