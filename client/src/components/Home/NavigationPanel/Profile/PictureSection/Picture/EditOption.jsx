import React, { useEffect, useRef } from "react";
import { gsap } from "gsap/gsap-core";


function EditOption({ isEditing, setEditOption }) {
  const menuRef = useRef(null);
  const menuOptionsRef = useRef(null);
  const EditOption = [
    "View photo",
    "Take photo",
    "Upload photo",
    "Remove photo",
  ];

  useEffect(() => {
    const menu = menuRef.current;
    gsap.fromTo(
      menu,
      { y: isEditing ? "40" : "0" },
      {
        y: isEditing ? "0" : "40",
        duration: 0.5,
        ease: "ease",
        opacity: isEditing ? 1 : 0,
        display: isEditing ? "block" : "none",
      }
    );
  }, [isEditing]);

  return (
    <div
      ref={menuRef}
      className="w-auto absolute left-[-94px] top-[50px] rounded-md overflow-scroll hidden z-50 shadow-lg border-[1px] p-4 hide-scrollbar dark:bg-d-primary-bg-color bg-l-primary-bg-color border-l-primary-border dark:border-d-primary-border ">
      {EditOption.map((value) => (
        <p
          ref={menuOptionsRef}
          onClick={() => setEditOption(value)}
          className="menu-options w-full h-auto truncate p-2 text-center rounded-md transition-all cursor-pointer overflow-hidden hover:bg-l-primary-hoverBg-color text-l-secondary-txt-color hover:text-l-primary-txt-color dark:hover:bg-d-primary-hoverBg-color dark:text-d-secondary-txt-color dark:hover:text-d-primary-txt-color"
          key={value}>
          {value}
        </p>
      ))}
    </div>
  );
}


export default EditOption;
