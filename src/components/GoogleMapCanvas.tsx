"use client";

export default function GoogleMapCanvas() {
  return (
    <div className="content-row dark-section" data-bgcolor="#0c0c0c">
      <div className="clipped-image-wrapper">
        <div className="clipped-image-pin">
          <div className="clipped-image">
            <div id="map_canvas" className="w-full h-[450px] bg-[#111] flex items-center justify-center border border-[#222] rounded-lg overflow-hidden">
              <iframe
                title="Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2543635164!2d-74.11976373946229!3d40.69767013778844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="clipped-image-gradient"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
