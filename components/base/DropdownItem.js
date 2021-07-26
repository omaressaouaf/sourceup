import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

const DropdownItem = ({ title, icon, image, pathname, ...otherProps }) => {
  return (
    <Link href={pathname || "#"} {...otherProps}>
      <a
        className="text-gray-700 px-4 py-2 flex items-start text-sm font-semibold gap-2"
        role="menuitem"
        tabIndex="-1"
        id="menu-item-0"
      >
        {icon && <i className={`fa ${icon} mr-2`}></i>}
        {image && <Image src={image} width="35" height="23" alt={title} />}
        {title}
      </a>
    </Link>
  );
};

DropdownItem.propTypes = {
  title: PropTypes.node.isRequired,
  icon: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
};

export default DropdownItem;
