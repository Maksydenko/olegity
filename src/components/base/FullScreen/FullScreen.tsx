import { FC, ReactNode } from "react";
import clsx from "clsx";

interface FullScreenProps {
  className?: string;
  children?: ReactNode;
  background?: ReactNode;
}
const FullScreen: FC<FullScreenProps> = ({
  className,
  children,
  background,
}) => {
  return (
    <div className={clsx(className, "full-screen")}>
      {children && <div className="full-screen__body">{children}</div>}
      {background && (
        <div className="full-screen__background">{background}</div>
      )}
    </div>
  );
};

export default FullScreen;
