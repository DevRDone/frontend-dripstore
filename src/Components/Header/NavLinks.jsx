import { useLocation } from "react-router-dom";
import { navLinks } from "../../lib/constants";

const NavLinks = () => {
  const location = useLocation();

  const isActive = (url) => {
    if (location.pathname === url) {
      return "active";
    }
    return "";
  };

  return (
    <>
      {navLinks.map((link) => (
        <li key={link.name}>
          <a href={link.path} className={isActive(link.path)}>
            {link.name}
          </a>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
