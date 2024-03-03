import { Dialog } from "@headlessui/react";

const Box = ({ children, onClose }) => {
  return (
    <Dialog.Panel className="popup__box">
      <div className="popup__children">{children}</div>
      <button className="popup__cross" type="button" onClick={onClose}></button>
    </Dialog.Panel>
  );
};

export default Box;
