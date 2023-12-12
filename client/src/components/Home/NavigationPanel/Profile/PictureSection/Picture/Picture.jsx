import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useSelector } from "react-redux";
import ViewPicture from "./ViewPicture";


// Picture
function Picture({ children, picture}) {
    const { isPictureUploading } = useSelector(state => state.BooleanSlice);
    const pictureRef = useRef(null);
    const [isViewing, setIsViewing] = useState(false);

    useEffect(() => {
        gsap.to(
            pictureRef.current,
            {
                outline: isPictureUploading ? "2px solid #7269ef" : "0px",
                duration: 1,
                ease: "ease",
                repeat: isPictureUploading ? -1 : 0
            }
        );

        return () => gsap.killTweensOf(pictureRef.current);
    }, [isPictureUploading]);

    return (
        <>
            <div ref={pictureRef} className='w-[96px] h-[96px] rounded-full p-1 relative mx-auto border-[1px] border-l-primary-border dark:border-d-primary-border'>
                <img onClick={() => setIsViewing(true)} src={picture} alt={"pic"} className="w-full h-full rounded-full" />
                { children }
            </div>
            <ViewPicture picture={picture} isViewing={isViewing} exit={() => setIsViewing(false)} />
        </>
    );
}

export default Picture;


