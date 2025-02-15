const Menu = ({ className = "", innerClassName = "", isOpen = null, onClick: handleClick = () => {} }) => {

  return (
    <button
      className={`btn ${className} border-0 p-0 d-inline-block`}
      onClick={handleClick}
    >
      <div
        className={`rounded ${innerClassName}`}
        style={{ width: "25px", height: "2px" }}
      ></div>
      <div
        className={`rounded ${innerClassName}`}
        style={{ width: "25px", height: "2px", margin: "5px 0" }}
      ></div>
      <div
        className={`rounded ${innerClassName}`}
        style={{ width: "25px", height: "2px" }}
      ></div>
    </button>
  );
};


export default Menu;
