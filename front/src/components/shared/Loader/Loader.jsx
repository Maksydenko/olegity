import clsx from "clsx";

const Loader = (className) => (
  <div className={clsx(className, "loader")}>
    <span className="dot"></span>
    <span className="dot"></span>
    <span className="dot"></span>
    <span className="dot"></span>
    <span className="dot"></span>
  </div>
);

export default Loader;
