const ResponsiveObjectOut = ({ className, pc, children, object }) => {
  const pcClass = `responsive-object-out${pc ? "_pc" : ""}`;

  return (
    <section className={`${className} ${pcClass}`}>
      <div className={`${pcClass}__content`}>
        <div className={`${pcClass}__container`}>
          <div className={`${pcClass}__body`}>{children}</div>
        </div>
      </div>
      {object}
    </section>
  );
};

export default ResponsiveObjectOut;
