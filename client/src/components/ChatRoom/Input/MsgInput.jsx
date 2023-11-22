import React, { useRef, useState } from 'react';


function MsgInput({ inpRef }) {
    const [inpValue, setInpValue] = useState('');

    const handleChange = (e) => {
        // if (last_seen === 'online' || last_seen === 'typing...') debouncedHandleChange();
        // else console.log(`${username} is not online`);
    };
    
    return (
        <input
            onChange={handleChange}
            type="text"
            placeholder="Type a message"
            className='w-[90%] h-[45px] px-5 rounded-md placeholder:text-l-secondary-txt-color placeholder:dark:text-d-secondary-txt-color bg-l-primary-hoverBg-color dark:bg-d-primary-hoverBg-color text-l-primary-txt-color dark:text-d-primary-txt-color'
            ref={inpRef}
        />
    );
}

export default MsgInput;