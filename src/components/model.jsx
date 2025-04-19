import { createPortal } from "react-dom";
import { useRef, useImperativeHandle, forwardRef } from "react";

const Model = forwardRef(function Model({}, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md bg-stone-400"
    >
      <p className="text-xl text-neutral-800">
        Please enter data in the fields
      </p>
      <form method="dialog">
        <button className="p-6 text-2xl text-neutral-600 rounded-xl hover:text-neutral-900">
          Okay
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Model;
