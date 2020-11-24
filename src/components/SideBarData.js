
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faFolder,faList,faAddressCard,faPhone } from "@fortawesome/free-solid-svg-icons";


export const SideBarData = [
  {
    label: "Home",
    icon: <FontAwesomeIcon icon={faHome} />,
    link: "/",
    className: "nav-text",
  },
  {
    label: "Entry",
    icon: <FontAwesomeIcon icon={faList} />,
    link: "/entry",
    className: "nav-text",
  },
    {
    label: "Entry Log",
    icon: <FontAwesomeIcon icon={faFolder} />,
    link: "/entry-log",
    className: "nav-text",
  },
  {
    label: "About",
    icon: <FontAwesomeIcon icon={faAddressCard} />,
    link: "/about",
    className: "nav-text",
  },
  {
    label: "Contact",
    icon: <FontAwesomeIcon icon={faPhone} />,
    link: "/contact",
    className: "nav-text",
  },
];