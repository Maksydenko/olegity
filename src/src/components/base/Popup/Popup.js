import Body from "./Body";
import Transition from "@base/Transition/Transition";

import { useScrollLock } from "@hooks/useScrollLock";

import { handleClassName } from "@utils/className.util";

const Popup = ({ className, modifier, children, button }) => {
  const { isScrollLocked, setIsScrollLocked } = useScrollLock();
  const handleClick = () => setIsScrollLocked(!isScrollLocked);

  const modifiedClassName = handleClassName(
    !!modifier,
    `${className}__popup`,
    modifier
  );
  const defaultClassName = handleClassName(isScrollLocked, "popup");

  return (
    <div className={`${modifiedClassName} ${defaultClassName}`}>
      <button className="popup__button" onClick={handleClick}>
        {button}
      </button>
      <Transition condition={isScrollLocked} className="popup">
        <Body onClick={handleClick}>{children}</Body>
      </Transition>
    </div>
  );
};

export default Popup;
