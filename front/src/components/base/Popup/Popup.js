import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";

const Popup = ({
  className,
  children,
  button,
  isForceOpen,
  setIsForceOpen,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isForceOpenIsUndefined = typeof isForceOpen === "undefined";

  const handleOpen = () => {
    if (!isForceOpenIsUndefined && setIsForceOpen) {
      setIsForceOpen(true);
    } else {
      setIsOpen(true);
    }
  };

  const handleClose = () => {
    if (!isForceOpenIsUndefined && setIsForceOpen) {
      setIsForceOpen(false);
    } else {
      setIsOpen(false);
    }
  };

  const condition =
    !isForceOpenIsUndefined && setIsForceOpen ? isForceOpen : isOpen;

  return (
    <>
      <button
        className={clsx(className, "popup popup_btn")}
        type="button"
        onClick={handleOpen}
      >
        {button}
      </button>
      <Transition appear show={condition}>
        <Dialog className={clsx(className, "popup")} onClose={handleClose}>
          <div className="popup__body">
            <Transition.Child
              className="popup__bg"
              enter="popup__enter"
              enterFrom="popup__enter-from"
              enterTo="popup__enter-to"
              leave="popup__leave"
              leaveFrom="popup__leave-from"
              leaveTo="popup__leave-to"
            />
            <Transition.Child
              className="popup__content"
              enter="popup__enter popup__enter_content"
              enterFrom="popup__enter-from popup__enter-from_content"
              enterTo="popup__enter-to popup__enter-to_content"
              leave="popup__leave popup__leave_content"
              leaveFrom="popup__leave-from popup__leave-from_content"
              leaveTo="popup__leave-to popup__leave-to_content"
            >
              <Dialog.Panel className="popup__box">
                <div className="popup__children">{children}</div>
                <button
                  className="popup__cross"
                  type="button"
                  onClick={handleClose}
                ></button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Popup;
