import Offcanvas from "../../common/Offcanvas";
import useIsSmallScreen from "../../../hooks/useIsSmallScreen";
import SidebarContent from "./SidebarContent";

const Sidebar = ({ isOffcanvasOpen, onOffcanvasToggle }) => {
  const isSmallScreen = useIsSmallScreen();

  return (
    <>
      {isSmallScreen ? (
        <Offcanvas
          title="Filtrar por"
          content={<SidebarContent />}
          isOpen={isOffcanvasOpen}
          onClose={onOffcanvasToggle}
          closeBtn={true}
        />
      ) : (
        <SidebarContent />
      )}
    </>
  );
};

export default Sidebar;
