import clsx from "clsx";

const ResponsiveObjectOut = ({ className, children, object }) => {
  return (
    <div className={clsx(className, "object-outside-container")}>
      <div className="object-outside-container__content">
        <div className="object-outside-container__container">
          <div className="object-outside-container__body">{children}</div>
        </div>
      </div>
      <div className="object-outside-container__object">{object}</div>
    </div>
  );
};

export default ResponsiveObjectOut;
