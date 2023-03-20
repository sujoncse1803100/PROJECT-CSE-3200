import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faLinkedin,
  faTwitter,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div className=" bg-dark mb-0 text-white mt-5">
      <div className="container pt-5 pb-2">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <h1 style={{ color: "white" }}>
              POWER <span style={{ color: "yellow" }}>X</span>
            </h1>
          </div>
          <div className="col-md-2 col-sm-6">
            <p>
              <b>Need help ?</b>
            </p>
            <p>Hekp Center</p>
            <p>Email Support</p>
            <p>Live Chat</p>
            <p>Gift Cirtificate</p>
            <p>Sent Us Feedback</p>
          </div>
          <div className="col-md-2 col-sm-6">
            <p>
              <b>Digital Resources</b>
            </p>
            <p>Articles</p>
            <p>E-books</p>
          </div>
          <div className="col-md-2 col-sm-6">
            <p>
              <b>Contact With Us</b>
            </p>
            <div className="d-flex mt-2 mb-2">
              <a
                className="me-2"
                href="https://web.facebook.com/sujonali8276/"
                // target="_blank"
              >
                <FontAwesomeIcon
                  style={{ height: "20px", width: "20px", color: "white" }}
                  icon={faFacebook}
                />
              </a>
              <a
                className="me-2"
                href="https://web.facebook.com/sujonali8276/"
                // target="_blank"
              >
                <FontAwesomeIcon
                  style={{ height: "20px", width: "20px", color: "white" }}
                  icon={faYoutube}
                />
              </a>
              <a
                className="me-2"
                href="https://web.facebook.com/sujonali8276/"
                // target="_blank"
              >
                <FontAwesomeIcon
                  style={{ height: "20px", width: "20px", color: "white" }}
                  icon={faLinkedin}
                />
              </a>
              <a
                className="me-2"
                href="https://web.facebook.com/sujonali8276/"
                // target="_blank"
              >
                <FontAwesomeIcon
                  style={{ height: "20px", width: "20px", color: "white" }}
                  icon={faTwitter}
                />
              </a>
              <a
                className="me-2"
                href="https://web.facebook.com/sujonali8276/"
                // target="_blank"
              >
                <FontAwesomeIcon
                  style={{ height: "20px", width: "20px", color: "white" }}
                  icon={faWhatsapp}
                />
              </a>
            </div>
            <p>Forum</p>
          </div>
          <div className="col-md-3 col-sm-12">
            <p>
              <b>Join Our Newsletter</b>
            </p>
            <p>
              Get exclusive news, features and updates from The Shredder Weight
              Loss Academy
            </p>
          </div>
        </div>
        <p className="text-center mt-5">&copy; 2021, Sujon Ali. All Rights Deserved</p>
      </div>
    </div>
  );
};
