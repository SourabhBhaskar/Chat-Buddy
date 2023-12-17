import React, { useRef, useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { icons } from '../../../../utils/icons.util';
import { gsap } from "gsap/gsap-core";


// File
const File =  React.memo(({ file, removeFile }) => {
    const fileType = file.type.split('/')[0];
    const [fileURL, setFileURL] = useState(URL.createObjectURL(file));
    return (
      <div className='flex-shrink-0 shadow-md h-full aspect-square relative rounded-md overflow-hidden'>
        <Icon onClick={() => removeFile(file.name)} icon={icons.cancel} className='absolute right-0 z-10 cursor-pointer ' />
        {fileType === 'image' && <img src={fileURL} alt={file.name} className='w-full h-full' />}
        {fileType === 'audio' && <audio src={fileURL} type="audio/*" className='w-full h-full' controls />}
        {fileType === 'video' && <video src={fileURL} className='w-full h-full' />}
      </div>
    );
})


// Fils
function Files({ files, setFiles }) {
    const [showFiles, setShowFiles] = useState(false);
    const fileRef = useRef(null);
    const fileSliderRef = useRef(null);
    
    const removeFile = (fileNmae) => {
        const updatedFiles = files.filter((file) => file.name !== fileNmae);
        setFiles(updatedFiles);
    }

    useEffect(() => {
      const fileBox = fileRef.current;
      gsap.fromTo(
        fileBox,
        { y: showFiles ? "80" : "0" },
        {
          y: showFiles ? "0" : "80",
          duration: 0.5,
          ease: "ease",
          opacity:  showFiles ? 1 : 0,
          display: showFiles ? "flex" : "none",
        }
      );
    }, [showFiles]);

    useEffect(() => {
      setShowFiles(files.length ? true : false);
      fileSliderRef.current.scrollLeft = fileSliderRef.current.scrollWidth;
    }, [files.length])

  return (
    <div ref={fileRef} className='w-full h-[100px] p-2 absolute left-0 bottom-[80px] hidden border-t-[1px] shadow-md bg-l-primary-bg-color dark:bg-d-primary-bg-color border-l-primary-border dark:border-d-primary-border '>
        <div ref={fileSliderRef} className='flex gap-2 overflow-scroll hide-scrollbar transition-all'>
          {files.map((file, index) => <File key={file.name + index} file={file} fileIndex={index} removeFile={removeFile} />)}           
        </div>
        <button onClick={() => setFiles([])} className='h-full aspect-square flex justify-center items-center rounded-md font-semibold'>
          Clear All
        </button>
    </div>
  )
}



export default React.memo(Files);