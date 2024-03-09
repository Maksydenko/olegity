import clsx from "clsx";

const Btn = ({ className, path, children, type = "button" }) => {
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
