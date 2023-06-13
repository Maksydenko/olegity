import { useScrollLock } from "@hooks/useScrollLock";

import Body from "./Body";

const Popup = ({ className, button, children }) => {
  const { isScrollLocked, setIsScrollLocked } = useScrollLock();
  const handleClick = () => setIsScrollLocked(!isScrollLocked);

  return (
    <div className={`${className}__popup popup`}>
      <button
        className={`${className}__popup-button popup__button`}
        onClick={handleClick}
      >
        {button}
      </button>
      {isScrollLocked && <Body onClick={handleClick}>{children}</Body>}
    </div>
  );
};

export default Popup;
