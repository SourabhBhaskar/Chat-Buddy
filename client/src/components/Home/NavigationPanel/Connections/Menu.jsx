import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import gsap from "gsap";
import { Icon } from "@iconify/react";
import { icons } from "../../../../utils/icons.util";
import { useRemoveConnection } from "../../../../Hooks/userConnections/useRemoveConnection.hook";
import { useFavoriteConnection } from "../../../../Hooks/userConnections/useFavoriteConnection.hook";
import { useBlockConnection } from "../../../../Hooks/userConnections/useBlockConnection.hook";


// Menu Item
function MenuItem({ icon, text, onClick }) {
  return (
    <li onClick={onClick} className="truncate px-4 py-2 rounded-md flex items-center gap-2 transition-all hover:bg-primary-light-hover dark:hover:bg-primary-dark-hover text-primary-light dark:text-secondary-dark dark:hover:text-primary-dark">
      <Icon icon={icon} />
      <span>{text}</span>
    </li>
  );
}

// Menu
function Menu({ value={} }) {
  const menuRef = useRef(null);
  const dispatch = useDispatch();
  const [btnHover, setBtnHover] = useState(false);
  const removeConnection = useRemoveConnection();
  const favoriteConnection = useFavoriteConnection();
  const blockConnection = useBlockConnection();

  const handleFavorite = async (e) => {
    e.stopPropagation();
    favoriteConnection.submit({ connectionEmail: value.bio.email, isFavorite: !value.settings.isFavorite })
  }

  const handleBlcok = async (e) => {
    e.stopPropagation();
    blockConnection.submit({ connectionEmail: value.bio.email, isBlocked: !value.settings.isBlocked })
  }
  
  const handleDelete = async (e) => {
    e.stopPropagation();
    removeConnection.submit({ connectionEmail: value.bio.email });
  }



  useEffect(() => {
    const element = menuRef.current;
    if (element) {
      if (btnHover)
        gsap.to(element, { y: -5, opacity: 1, display: "block"});
      else
        gsap.to(element, { y: 25, opacity: 0, display: "none"});
    }
    return () => gsap.killTweensOf(element);
  }, [btnHover]);

  return (
    <div className="relative">
      <button
        onMouseEnter={() => setBtnHover(true)}
        onMouseLeave={() => setBtnHover(false)}
        className="peer transition-all text-secondary-light hover:text-primary-light dark:text-secondary-dark dark:hover:text-primary-dark">
        <Icon icon={ favoriteConnection.isLoading || blockConnection.isLoading || removeConnection.isLoading ? icons.loader : icons.menu} />
      </button>
      <ul
        onMouseEnter={() => setBtnHover(true)}
        onMouseLeave={() => setBtnHover(false)}
        ref={menuRef}
        className="absolute right-0 z-10 hidden shadow-md p-2 rounded-md border-[1px] border-primary-light dark:border-primary-dark bg-secondary-light dark:bg-secondary-dark">
        <MenuItem text={ value.settings.isFavorite ? "Unfavorite" : "Favorite"} icon={icons.favorite} onClick={handleFavorite} />
        <MenuItem text={ value.settings.isBlocked ? "Unblock" : "Block"} icon={icons.block} onClick={handleBlcok} />
        <MenuItem text={"Delete"} icon={icons.delete} onClick={handleDelete} />
      </ul>
    </div>
  );
}


export default Menu;
