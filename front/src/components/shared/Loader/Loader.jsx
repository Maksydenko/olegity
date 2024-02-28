import clsx from "clsx";

const Loader = (className) => (
  <div className={clsx(className, "loader")}>
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
  </div>
);

export default Loader;
