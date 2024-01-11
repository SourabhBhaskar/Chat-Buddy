import React from "react";
import defaultPic from "../../../../assets/profile.jpg";
import ViewPicture from "./ViewPicture";


// Picture
function Picture({ children, picture}) {
    return (
        <div className='w-auto h-auto flex justify-center relative'>
            <div className={`w-[96px] h-[96px] p-1 rounded-full border-[1px] border-primary-light dark:border-primary-dark `}>
                <div className="border-2 w-full h-full relative rounded-full overflow-hidden load-picture ">
                    <img src={picture || defaultPic} className="w-full h-full rounded-full " />
                </div>
            </div>
            {children}
        </div>
    );
}

export default Picture;


