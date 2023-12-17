import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap/gsap-core";
import { Icon } from "@iconify/react";
import { icons } from "../../../../utils/icons.util";
import IconButton from "../Common/IconButton";


// Send More Options
function Option({ text, accept, icon, files, setFiles, isSelectingFileOption }) {
  const inpRef = useRef(null);

  const handleChange = (e) => {
    const fileArray = Array.from(e.target.files);
    setFiles([ ...files, ...fileArray]);
    isSelectingFileOption(false);
  }

  return (
    <button onClick={() => inpRef.current.click()} className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-l-primary-hoverBg-color dark:hover:bg-d-primary-hoverBg-color transition-all">
       <input
        ref={inpRef}
        onChange={handleChange}
        type="file"
        accept={accept}
        multiple
        style={{ display: "none" }}
      />
      <Icon icon={icon} width="18" height="18" />
      <p>{text}</p>
    </button>
  );
}



// Send More
function SendMore({ files, setFiles }) {
  const sendOptionRef = useRef(null);
  const [selectingFileOption, isSelectingFileOption] = useState(false);

  useEffect(() => {
    const menu = sendOptionRef.current;
    gsap.fromTo(
      menu,
      { y: selectingFileOption ? "200" : "150" },
      {
        y: selectingFileOption ? "150" : "200",
        duration: 0.5,
        ease: "ease",
        opacity: selectingFileOption ? 1 : 0,
        display: selectingFileOption ? "flex" : "none",
      }
    );
  }, [selectingFileOption]);

  return (
    <div className="h-full flex relative">
      <IconButton onClick={() => isSelectingFileOption(!selectingFileOption)}>
        <Icon icon={icons.addMore} width="24" height="24" className={`transition-all duration-500 ${selectingFileOption && 'rotate-180'}`} />
      </IconButton>
      <div
        ref={sendOptionRef}
        className="p-4 absolute left-0 bottom-[300%] z-10 hidden flex-col rounded-md rounded-bl-[0px] shadow-md border-[1px] border-l-primary-border dark:border-d-primary-border  bg-l-secondary-bg-color dark:bg-d-secondary-bg-color">
        <Option key="image" text="Image" accept="image/*" icon={icons.imageFile} files={files} setFiles={setFiles} isSelectingFileOption={isSelectingFileOption} />
        <Option key="audio" text="Audio" accept="audio/*" icon={icons.audioFile} files={files} setFiles={setFiles} isSelectingFileOption={isSelectingFileOption} />
        <Option key="vidoe" text="Video" accept="video/*" icon={icons.vidoeFile} files={files} setFiles={setFiles} isSelectingFileOption={isSelectingFileOption} />
      </div>
    </div>
  );
}


export default React.memo(SendMore);
