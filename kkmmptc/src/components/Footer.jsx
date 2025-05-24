import React from 'react';

function Footer() {
  return (
    <div className="bg-dark text-light py-2 px-3">
      <div className="container">
        <div className="row">
          {/* Address Section */}
          <div className="col-md-6 mb-3">
            <h5 className="text-uppercase">College Address</h5>
            <address className="mb-0">
              <strong>The Principal</strong><br />
              K Karunakaran Memorial<br />
              Model Polytechnic College<br />
              Kallettumkara.P.O.<br />
              Thrissur District. PIN-680 683<br /><br />
              <strong>Phone:</strong> 0480-2720746<br />
              <strong>Mobile:</strong> 8547005080<br />
              <strong>Email:</strong>{' '}
              <a href="mailto:mptmala@ihrd.ac.in" className="text-light">
                mptmala@ihrd.ac.in
              </a>
            </address>
          </div>

          {/* Links and Location Section */}
          <div className="col-md-6 mb-3">
            <div className="row">
              {/* Important Links */}
              <div className="col-md-6">
                <h5 className="text-uppercase">Important Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="https://ihrd.ac.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light link-underline-dark"
                    >
                      IHRD
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.dtekerala.gov.in/index.php/en/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light link-underline-dark"
                    >
                      Technical Education
                    </a>
                  </li>
                </ul>
              </div>

              {/* Location Section */}
              <div className="col-md-6">
                <h5 className="text-uppercase">Location</h5>
                <div className="mt-3">
                  <iframe
                    title="KKMMPTC Map"
                    src="https://www.google.com/maps?q=K+Karunakaran+Memorial+Model+Polytechnic+College,+Kallettumkara&output=embed"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
                <a
                  href="https://www.google.com/maps/place/K+Karunakaran+Memorial+Model+Polytechnic+College/@10.3629676,76.2734195,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light d-block"
                  style={{textDecoration:'none'}}
                >
                  📍 View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social + Logo */}
        <div className="text-center my-1">
          <img
            src="/ihrdlogorx.png"
            alt="IHRD Logo"
            style={{ width: '80px', marginBottom: '10px' }}
          />
          <div>
            <a
              href="https://www.facebook.com/KKMMPTC.MALA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light mx-2"
            >
              <i className="bi bi-facebook fs-4"></i>
            </a>
            <a
              href="https://www.instagram.com/ihrdianz_of_mptc?igsh=MWk2bGVkaG9icW9xMg=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-light mx-2"
            >
              <i className="bi bi-instagram fs-4"></i>
            </a>
            <a
              href="https://www.youtube.com/@kkmmptconline7935"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light mx-2"
            >
              <i className="bi bi-youtube fs-4"></i>
            </a>
          </div>
        </div>

        <div className="text-center pt-3 border-top mt-3">
          <small>
            &copy; {new Date().getFullYear()} Model Polytechnic College. All Rights Reserved.
          </small>
        </div>
      </div>
    </div>
  );
}

export default Footer;
