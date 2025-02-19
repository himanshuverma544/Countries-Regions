import { Link } from "react-router-dom";

import { Home } from "../../routes.js";


export default function Page() {

  return (
    <div
      className="page-404 d-flex flex-column align-items-center justify-content-center gap-1"
      style={{ height: "40vh" }}
    >
      <div className="status-code fs-1 fw-medium">
        404
      </div>
      <div className="error-name fs-3 fw-medium">
        Not Found
      </div>
      <Link
        className="mt-3"
        to={Home.pathname}
      >
        Go to Homepage
      </Link>
    </div>
  );
}