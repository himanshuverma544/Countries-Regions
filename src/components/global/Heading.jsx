export default function Heading({ className = "", text = "Welcome" }) {

  return (
    <div className={`row ${className}`}>
      <div className="left-line-cont col-12 col-md-5 d-flex align-items-start">
        <hr style={{ width: "95%", height: "2px", backgroundColor: "#000" }}/>
      </div>
      <h1 className="col-12 col-md-2 heading text-center text-uppercase">
        {`${text}`}
      </h1>
      <div className="right-line-cont col-12 col-md-5 d-flex justify-content-end align-items-end">
        <hr style={{ width: "95%", height: "2px", backgroundColor: "#000" }}/>
      </div>
    </div>
  );
}
