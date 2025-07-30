import React from "react";

const Footer = () => {
  return (
    <div class="container">
      {" "}
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        {" "}
        <div class="col-md-4 d-flex align-items-center">
          {" "}
          <a
            href="/"
            class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            aria-label="Bootstrap"
          >
            {" "}
            {/* <svg class="bi" width="30" height="24" aria-hidden="true">
              <use xlink:href="#bootstrap"></use>
            </svg> */}
            <i
              className="bi bi-building"
              style={{ fontSize: "2rem", color: "#4267B2" }}
            ></i>{" "}
          </a>{" "}
          <span class="mb-3 mb-md-0 text-body-secondary">
            © 2025 SmartCare Hospital, Inc
          </span>{" "}
        </div>{" "}
        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          {" "}
          <li class="ms-3">
            <a
              class="text-body-secondary"
              href="https://www.instagram.com/"
              aria-label="Instagram"
            >
              <i
                className="bi bi-instagram"
                style={{ fontSize: "2rem", color: "#4267B2" }}
              ></i>
            </a>
          </li>{" "}
          <li class="ms-3">
            <a
              class="text-body-secondary"
              href="https://www.facebook.com/"
              aria-label="Facebook"
            >
              {/* <svg class="bi" width="24" height="24">
                <use xlink:href="#facebook"></use>
              </svg> */}
              <i
                className="bi bi-facebook"
                style={{ fontSize: "2rem", color: "#4267B2" }}
              ></i>
            </a>
          </li>{" "}
        </ul>{" "}
      </footer>{" "}
    </div>
  );
};

export default Footer;
