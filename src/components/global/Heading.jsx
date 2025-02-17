export default function Heading({ className = "", text = "Welcome" }) {

  return (
    <div className={`d-flex flex-column align-items-center justify-items-center flex-sm-row ${className}`}>
      <hr className="divider-1 w-100 border-2 border-black mb-sm-5"></hr>
      <div className="px-4 text-center fs-1 fw-semibold">
        {text}
      </div>
      <hr className="divider-2 w-100 border-2 border-black mt-sm-5"></hr>
    </div>
  );
}
