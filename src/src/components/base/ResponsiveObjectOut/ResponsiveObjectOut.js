function ResponsiveObjectOut(props) {
  const { className, pc, children, object } = props;
  const responsiveObjectOut = `responsive-object-out${pc ? "_pc" : ""}`;

  return (
    <section className={`${className} ${responsiveObjectOut}`}>
      <div className={`${responsiveObjectOut}__content`}>
        <div className={`${responsiveObjectOut}__container`}>
          <div className={`${responsiveObjectOut}__body`}>{children}</div>
        </div>
      </div>
      {object}
    </section>
  );
}

export default ResponsiveObjectOut;
