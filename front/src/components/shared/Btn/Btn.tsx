import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import clsx from "clsx";

interface BtnProps {
  className?: string;
  path?: string;
  children: ReactNode;
  type?: ButtonHTMLAttributes<any>["type"];
}

const Btn: FC<BtnProps> = ({ className, path, children, type = "button" }) => {
  const Tag = path ? "a" : "button";

  return (
    <Tag
      className={clsx(className, "btn")}
      {...(path
        ? {
            href: path,
          }
        : {
            type,
          })}
    >
      {children}
    </Tag>
  );
};

export default Btn;
