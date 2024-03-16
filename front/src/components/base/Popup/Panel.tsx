import { FC, ReactNode } from "react";
import { Dialog } from "@headlessui/react";

interface BoxProps {
  children: ReactNode;
  onClose: () => void;
}

const Panel: FC<BoxProps> = ({ children, onClose }) => {
  return (
    <Dialog.Panel className="popup__panel">
      <div className="popup__box">{children}</div>
      <button className="popup__cross" type="button" onClick={onClose}></button>
    </Dialog.Panel>
  );
};

export default Panel;
