import { useScrollLock } from "@hooks/useScrollLock";

import Body from "./Body";

function Popup(props) {
  const { isLockedScroll, setIsLockedScroll } = useScrollLock();

  function handleClick() {
    setIsLockedScroll(!isLockedScroll);
  }

  const { className, button, children } = props;

  return (
    <div className={`${className}__popup popup`}>
      <button
        className={`${className}__popup-button popup__button`}
        onClick={handleClick}
      >
        {button}
      </button>
      {isLockedScroll && <Body onClick={handleClick}>{children}</Body>}
    </div>
  );
}

export default Popup;
