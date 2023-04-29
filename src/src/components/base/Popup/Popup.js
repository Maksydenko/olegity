import { useLockScroll } from "@hooks/useLockScroll";

import Body from "./Body";

const Popup = ({ className, button, children }) => {
  const { isLockedScroll, setIsLockedScroll } = useLockScroll();
  const handleClick = () => setIsLockedScroll(!isLockedScroll);

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
};

export default Popup;
