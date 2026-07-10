import React from "react";

const Contact = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center mb-5">
        <div className="col-lg-8 text-center">
          <h2 className="fw-bold text-primary">Contact Us</h2>
          <p className="text-muted">
            We'd love to hear from you. Send us a message or visit our location.
          </p>
        </div>
      </div>

      <div className="row g-4">
        {/* Form */}
        <div className="col-lg-6">
          <div className="card shadow-sm border-0 rounded-4 h-100">
            <div className="card-body p-4">
              <h3 className="mb-4">Send a Message</h3>

              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Enter phone number"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter subject"
                    />
                  </div>

                  <div className="col-12 mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      rows="5"
                      className="form-control"
                      placeholder="Write your message..."
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-2">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="col-lg-6">
          <div className="card shadow-sm border-0 rounded-4 h-100">
            <div className="card-body p-4">
              <h3 className="mb-4">Our Location</h3>

              <div className="ratio ratio-4x3 rounded overflow-hidden">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps?q=Vadodara,Gujarat&output=embed"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>

              <div className="mt-4">
                <h5>Office Address</h5>
                <p className="text-muted mb-2">
                  123 Business Street
                  <br />
                  Vadodara, Gujarat - 390001
                </p>

                <p className="mb-1">
                  <strong>Email:</strong> info@example.com
                </p>

                <p className="mb-1">
                  <strong>Phone:</strong> +91 98765 43210
                </p>

                <p className="mb-0">
                  <strong>Hours:</strong> Mon - Sat (9 AM - 6 PM)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
