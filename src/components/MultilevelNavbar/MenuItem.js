import React, { useState } from "react";
const MenuItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a href={item.link} className={`${item.subMenu ? "navIcon" : ""}`}>
        {item.title}
      </a>
      {isHovered && item.subMenu && (
        <ul className={`sub-menu`}>
          {item.subMenu.map((childItem) => (
            <MenuItem key={childItem.id} item={childItem} />
          ))}
        </ul>
      )}
    </li>
  );
};
export default MenuItem;
