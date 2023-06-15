import { handleClassName } from "@utils/className.util";

const ResponsiveObjectOut = ({ className, modifier, children, object }) => {
  const modifiedClassName = handleClassName(
    modifier,
    "object-outside-container",
    modifier,
    modifier
  );

  return (
    <section className={`${className} ${modifiedClassName}`}>
      <div className={`${modifiedClassName}__content`}>
        <div className={`${modifiedClassName}__container`}>
          <div className={`${modifiedClassName}__body`}>{children}</div>
        </div>
      </div>
      {object}
    </section>
  );
};

export default ResponsiveObjectOut;
