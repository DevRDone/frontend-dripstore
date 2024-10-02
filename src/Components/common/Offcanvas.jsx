import { useEffect, useRef, useState } from "react";
import { StyledOffcanvas, OffcanvasContent } from "./styles";
import useIsSmallScreen from "../../hooks/useIsSmallScreen";
import { MdOutlineClose } from "react-icons/md";

const Offcanvas = ({ title, content, isOpen, onClose, closeBtn = false }) => {
  const offcanvasRef = useRef(null);
  const isSmallScreen = useIsSmallScreen();

  // Prevent scroll when Offcanvas is open
  useEffect(() => {
    if (isOpen && isSmallScreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <StyledOffcanvas $isopen={isOpen}>
      <OffcanvasContent
        ref={offcanvasRef}
        className="offcanvas-content"
        $isopen={isOpen}
      >
        {closeBtn && (
          <button className="close-btn" onClick={onClose}>
            <MdOutlineClose />
          </button>
        )}
        {content}
      </OffcanvasContent>
    </StyledOffcanvas>
  );
};

export default Offcanvas;
