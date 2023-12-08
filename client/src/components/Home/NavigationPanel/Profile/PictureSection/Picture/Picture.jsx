import { useState } from "react";
import ViewPicture from "./ViewPicture";


// Picture
function Picture({ children, picture }) {
    const [view, setView] = useState(false);
    const handleViewPicture = () => setView(!view);

    return (
        <div className='w-full h-auto relative'>
            <div className='w-[96px] h-[96px] rounded-full p-1 m-2 relative mx-auto border-[1px] border-l-primary-border dark:border-d-primary-border '>
                <img onClick={handleViewPicture} src={picture} alt={"pic"} className="w-full h-full rounded-full" />
                { children }
            </div>
            {view && ( <ViewPicture picture={picture} exit={handleViewPicture} />)}
        </div>
    );
}

export default Picture;
