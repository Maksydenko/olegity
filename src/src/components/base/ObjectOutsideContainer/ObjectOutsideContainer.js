const ResponsiveObjectOut = ({ className, pc, children, object }) => {
  const getClassName = `object-outside-container${pc ? "_pc" : ""}`;

  return (
    <section className={`${className} ${getClassName}`}>
      <div className={`${getClassName}__content`}>
        <div className={`${getClassName}__container`}>
          <div className={`${getClassName}__body`}>{children}</div>
        </div>
      </div>
      {object}
    </section>
  );
};

export default ResponsiveObjectOut;
