import PropTypes from "prop-types";
import Link from "next/link";

const NavbarItem = ({ className, title, icon, pathname }) => {
  return (
    <li>
      <Link href={pathname}>
        <a
          className={`px-6 py-2 mr-4 text-base text-gray-50 transition duration-300 ease-in-out border-b border-opacity-0 border-brand hover:border-opacity-80 focus:outline-none ${className && className}`}
        >
          {icon && <i className={`fa ${icon} mr-2`}></i>}
          {title}
        </a>
      </Link>
    </li>
  );
};
NavbarItem.propTypes = {
  className: PropTypes.string,
  title: PropTypes.node.isRequired,
  icon: PropTypes.string,
  pathname: PropTypes.string.isRequired,
};
export default NavbarItem;
