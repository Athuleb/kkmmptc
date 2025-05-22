import React from 'react';

function Footer() {
  return (
    <div className="bg-dark text-light py-4 px-3">
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
              <strong>Email:</strong> <a href="mailto:mptmala@ihrd.ac.in" className="text-light">mptmala@ihrd.ac.in</a>
            </address>
          </div>

          {/* Links Section */}
          <div className="col-md-6 mb-3">
            <h5 className="text-uppercase">Important Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://ihrd.ac.in" target="_blank" rel="noopener noreferrer" className="text-light link-underline-dark">
                  IHRD
                </a>
              </li>
              <li>
                <a href="https://www.dtekerala.gov.in/index.php/en/" target="_blank" rel="noopener noreferrer" className="text-light link-underline-dark">
                  Technical Education
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-3 border-top mt-3">
          <small>&copy; {new Date().getFullYear()} Model Polytechnic College. All Rights Reserved.</small>
        </div>
      </div>
    </div>
  );
}

export default Footer;
