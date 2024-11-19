import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

export default function Modal({ isOpen, children }) {
  const content = useRef(null);
  const [hasFocus, setHasFocus] = useState(false);

  useEffect(() => {
    if (isOpen && content.current) {
      gsap.fromTo(
        content.current,
        { y: 150, opacity: 0 },
        { y: 0, opacity: 1 },
      );
    }
  }, [isOpen]);
  const handleFocus = () => setHasFocus(true);
  const handleBlur = () => setHasFocus(false);

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <>
      <div
        className={`fixed w-screen h-[100dvh] top-0 left-0 flex  justify-center z-10 bg-black/80 ${hasFocus ? "items-start pt-12" : "items-center"}`}
        // onClick={onClose}
      >
        <div
          ref={content}
          className={`bg-[#37C100] px-4 py-8 text-center text-[20px] w-[90%]  border-[#E7FF2B] border-2 rounded-[23px]`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col items-center">
            {" "}
            {React.Children.map(children, (child) =>
              React.cloneElement(child, {
                onFocus: handleFocus,
                onBlur: handleBlur,
              }),
            )}
          </div>
        </div>
      </div>
    </>,
    document.getElementById("modal-root"),
  );
}
