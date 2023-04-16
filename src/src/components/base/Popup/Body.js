function Body(props) {
  const { onPopupActive, children } = props;

  function handlePopupClose(event) {
    if (!event.target.closest(".popup__box")) {
      onPopupActive();
    }
  }

  return (
    <div className="popup__body" onClick={handlePopupClose}>
      <div className="popup__content">
        <div className="popup__box">
          <button className="popup__cross" onClick={onPopupActive}></button>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Body;
