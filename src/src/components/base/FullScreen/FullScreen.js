import { useFullHeight } from "./useFullHeight";

import { handleClassName } from "@utils/className.util";

const FullScreen = ({ className, modifier, children, background }) => {
  const height = useFullHeight();

  const modifiedClassName = handleClassName(
    !!modifier,
    `${className}__popup`,
    modifier
  );

  const style = {
    minHeight: height,
  };

  return (
    <section className={`${modifiedClassName} full-screen`} style={style}>
      <div className="full-screen__body">{children}</div>
      {background}
    </section>
  );
};

export default FullScreen;
