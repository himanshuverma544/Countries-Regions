export default function Divider({
  className = "",
  dividerLineClassName = "",
  textClassName = "px-3",
  text = ""
}) {
  
  return (
    <div className={`d-flex align-items-center ${className}`}>
      <hr className={`flex-grow-1 ${dividerLineClassName}`} />
      {text && <span className={`mx-3 ${textClassName}`}>{text}</span>}
      <hr className={`flex-grow-1 ${dividerLineClassName}`} />
    </div>
  );
}
