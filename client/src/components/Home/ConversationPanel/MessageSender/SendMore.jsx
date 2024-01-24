import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap/gsap-core";
import { Icon } from "@iconify/react";
import { icons } from "../../../../utils/icons.util";
import IconButton from "../../IconButton";


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
  const sendMoreRef = useRef(null);
  const [sendMore, setSendMore] = useState(false);

  useEffect(() => {
    const element = sendMoreRef.current;
    if(element){
      if(sendMore)
        gsap.to(element, { bottom: '140%', opacity: 1, display: 'block' });
      else 
        gsap.to(element, { bottom: '80%', opacity: 0, display: 'hidden' });
    }
  }, [sendMore]);

  return (
    <>
      <IconButton icon={icons.addMore} onClick={() => setSendMore(!sendMore)} >
        <ul ref={sendMoreRef} className={`w-auto h-auto absolute right-0 p-2 rounded-md shadow-md bg-secondary-light dark:bg-secondary-dark`}>
          <li className="flex items-center gap-2 text-lg text-primary-light dark:text-primary-dark px-6 py-[6px] rounded-sm hover:bg-primary-light-hover dark:hover:bg-primary-dark-hover">
            <Icon icon={icons} onClick={() => sendMore(!sendMore)} />
            <span>Image</span>
          </li>
          <li className="flex items-center gap-2 text-lg text-primary-light dark:text-primary-dark px-6 py-[6px] rounded-sm hover:bg-primary-light-hover dark:hover:bg-primary-dark-hover">
            <Icon icon={icons} onClick={() => sendMore(!sendMore)} />
            <span>Image</span>
          </li>
          <li className="flex items-center gap-2 text-lg text-primary-light dark:text-primary-dark px-6 py-[6px] rounded-sm hover:bg-primary-light-hover dark:hover:bg-primary-dark-hover">
            <Icon icon={icons} onClick={() => sendMore(!sendMore)} />
            <span>Image</span>
          </li>
        </ul>
      </IconButton>
      {/* { sendMore && <div className="border-2 w-full h-[150px] absolute left-0 bottom-full"></div> } */}
    </>
  );
}


export default React.memo(SendMore);























      {/* <div
        ref={sendOptionRef}
        className="p-4 absolute left-0 bottom-[300%] z-10 hidden flex-col rounded-md rounded-bl-[0px] shadow-md border-[1px] border-l-primary-border dark:border-d-primary-border  bg-l-secondary-bg-color dark:bg-d-secondary-bg-color">
        <Option key="image" text="Image" accept="image/*" icon={icons.imageFile} files={files} setFiles={setFiles} isSelectingFileOption={isSelectingFileOption} />
        <Option key="audio" text="Audio" accept="audio/*" icon={icons.audioFile} files={files} setFiles={setFiles} isSelectingFileOption={isSelectingFileOption} />
        <Option key="vidoe" text="Video" accept="video/*" icon={icons.vidoeFile} files={files} setFiles={setFiles} isSelectingFileOption={isSelectingFileOption} />
      </div> */}