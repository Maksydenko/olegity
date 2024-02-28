import { Link } from "react-router-dom";
import clsx from "clsx";

const Btn = ({ className, path, children, type = "button", router = true }) => {
  if (router) {
    return (
      <Link className={clsx(className, "btn")} to={path}>
        {children}
      </Link>
    );
  }

  const Tag = path ? "a" : "button";

  return (
    <Tag
      className={clsx(className, "btn")}
      {...(path
        ? {
            href: path,
          }
        : type)}
    >
      {children}
    </Tag>
  );
};

export default Btn;
