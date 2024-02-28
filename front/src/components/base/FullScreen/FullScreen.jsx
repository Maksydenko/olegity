import clsx from "clsx";

const FullScreen = ({ className, children, background }) => {

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
