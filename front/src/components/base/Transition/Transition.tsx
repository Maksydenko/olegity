import { FC, ReactNode } from "react";
import { Transition as RootTransition } from "@headlessui/react";
import clsx from "clsx";

interface TransitionProps {
  className?: string;
  children: ReactNode;
  appear?: boolean;
  show: boolean;
}

const Transition: FC<TransitionProps> = ({
  className,
  children,
  appear = true,
  show,
}) => {
  return (
    <RootTransition appear={appear} show={show}>
      <RootTransition.Child
        className={clsx(className, "transition")}
        enter="transition__enter"
        enterFrom="transition__enter-from"
        enterTo="transition__enter-to"
        leave="transition__leave"
        leaveFrom="transition__leave-from"
        leaveTo="transition__leave-to"
      >
        {children}
      </RootTransition.Child>
    </RootTransition>
  );
};

export default Transition;
