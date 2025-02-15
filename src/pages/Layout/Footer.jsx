export default function Footer() {

  return (
    <footer className="d-flex flex-column align-items-center justify-content-center gap-3 p-5">
      <div className="social-links d-flex justify-content-center align-items-center gap-4 p-3 fs-1">
        <i className="fa-brands fa-square-facebook"></i>
        <i className="fa-brands fa-square-twitter"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-square-youtube"></i>
      </div>
      <div className="email-address fs-7 fw-medium">
        example@email.com
      </div>
      <div className="copyright-text text-center fs-7 fw-medium">
        Copyright &copy; 2020 Name. All rights reserved.
      </div>
    </footer>
  );
}
