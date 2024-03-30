import { FC } from "react";
import clsx from "clsx";

interface LoaderProps {
  className?: string;
}

const Loader: FC<LoaderProps> = ({ className }) => (
  <div className={clsx(className, "loader")}>
    <span className="dot"></span>
    <span className="dot"></span>
    <span className="dot"></span>
    <span className="dot"></span>
    <span className="dot"></span>
  </div>
);

export default Loader;
