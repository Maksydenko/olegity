import { handleClassName } from "@utils/className.util";

const FullScreen = ({ className, modifier, children, background }) => {
  const modifiedClassName = handleClassName(
    !!modifier,
    `${className}__full-screen`,
    modifier
  );

  return (
    <div className={`${modifiedClassName} full-screen`}>
      <div className="full-screen__body">{children}</div>
      {background}
    </div>
  );
};

export default FullScreen;
