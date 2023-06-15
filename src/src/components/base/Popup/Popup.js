import Body from "./Body";

import { useScrollLock } from "@hooks/useScrollLock";

const Popup = ({ className, button, children }) => {
  const { isScrollLocked, setIsScrollLocked } = useScrollLock();
  const handleClick = () => setIsScrollLocked(!isScrollLocked);

  return (
    <div className={`${className}__popup popup`}>
      <button className="popup__button" onClick={handleClick}>
        {button}
      </button>
      {isScrollLocked && <Body onClick={handleClick}>{children}</Body>}
    </div>
  );
};

export default Popup;
