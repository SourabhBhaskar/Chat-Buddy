import React, { useState } from "react";
import defaultPic from "../../../../assets/profile.jpg";
import ViewPicture from "./ViewPicture";


// Picture
function Picture({ children, picture}) {
    const [viewPicture, setViewPicture] = useState(false);

    return (
        <>
            <div className='w-auto h-auto flex justify-center relative '>
                <div onClick={() => setViewPicture(true)} className={`w-[96px] h-[96px] p-1 rounded-full border-[1px] border-primary-light dark:border-primary-dark `}>
                    <div className="w-full h-full relative rounded-full overflow-hidden load-picture ">
                        <img src={picture || defaultPic} className="w-full h-full rounded-full " />
                    </div>
                </div>
                {children}
            </div>
            { viewPicture && <ViewPicture picture={picture} viewPicture={viewPicture} setViewPicture={() => setViewPicture(!viewPicture)} />}
        </>
    );
}

export default Picture;


