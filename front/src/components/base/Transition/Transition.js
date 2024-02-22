import { CSSTransition } from "react-transition-group";

import { handleClassName } from "@utils/className.util";

const Transition = ({
  condition,
  className,
  modifier,
  children,
  timeout = 300,
  unmountOnExit = true,
}) => {
  const modifiedClassName = handleClassName(
    !!modifier,
    `${className}__alert`,
    modifier
  );

  return (
    <CSSTransition
      in={condition}
      classNames={`${modifiedClassName} alert`}
      timeout={timeout}
      unmountOnExit={unmountOnExit}
    >
      {children}
    </CSSTransition>
  );
};

export default Transition;
