import { useFullHeight } from "./useFullHeight";

import { handleClassName } from "@utils/className.util";

const FullScreen = ({ className, modifier, children, background }) => {
  const height = useFullHeight();

  const modifiedClassName = handleClassName(
    !!modifier,
    `${className}__full-screen`,
    modifier
  );

  const fullScreenStyle = {
    minHeight: height,
  };

  return (
    <div className={`${modifiedClassName} full-screen`} style={fullScreenStyle}>
      <div className="full-screen__body">{children}</div>
      {background}
    </div>
  );
};

export default FullScreen;
