export default function Menu({ className = "", title = "", children, isOpen = false, onClickClose = () => {} }) {

  return (
    <>
      <div
        className={`
          offcanvas offcanvas-end text-bg-white
          ${isOpen ? "show" : "hide"}
          ${className}
        `}
        tabindex="-1"
        id="menu"
        aria-labelledby="menu"
      >
        <div className="offcanvas-header">
          {title &&
            <h5 id="title" className="offcanvas-title">
              {title}
            </h5>
          }
          <button
            type="button"
            className="btn-close btn-close-dark"
            data-bs-dismiss="menu"
            aria-label="Close"
            onClick={onClickClose}
          >
          </button>
        </div>
        <div className="offcanvas-body">
          {children}
        </div>
      </div>
      {isOpen && <div className="offcanvas-backdrop show" onClick={onClickClose}></div>}
    </>
  );
}