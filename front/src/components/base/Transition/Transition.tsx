import { FC, ReactNode } from "react";

import { Transition as RootTransition } from "@headlessui/react";

interface TransitionProps {
  className?: string;
  children: ReactNode;
  appear?: boolean;
  show: boolean;
}

const Transition: FC<TransitionProps> = ({
  className = "transition",
  children,
  appear = true,
  show,
}) => {
  return (
    <RootTransition appear={appear} show={show}>
      <RootTransition.Child
        className={className}
        enter={`${className}__enter`}
        enterFrom={`${className}__enter-from`}
        enterTo={`${className}__enter-to`}
        leave={`${className}__leave`}
        leaveFrom={`${className}__leave-from`}
        leaveTo={`${className}__leave-to`}
      >
        {children}
      </RootTransition.Child>
    </RootTransition>
  );
};

export default Transition;
