import React from 'react';
import { Icon  } from '@iconify/react';
import { icons } from '../../../../utils/icons.util';
import { useSelector } from 'react-redux';


// Get Time 
function getTime(timestamps){
    if(!timestamps)
        return null;
    const date = new Date(timestamps);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const time = `${formattedHours}:${minutes} ${amOrPm}`;
    return time;
}


// Sender 
const SenderMessage = React.memo(({ Message }) => {
    const { message, status, time } = Message;
    const sendTime = getTime(time.send);

    return (
        <div className='flex justify-end gap-3 my-1'>
            <div className='w-[80%] flex justify-end items-start'>
                <div className='flex gap-2 rounded-b-lg rounded-tl-lg px-3 shadow-md bg-l-primary-hoverBg-color dark:bg-d-primary-hoverBg-color'>
                    <p className='py-2 text-[15px] flex items-center text-l-primary-txt-color dark:text-d-primary-txt-color'>{message}</p>
                    <div className='flex-shrink-0 flex items-end gap-1 pb-1'>
                        <p className='text-[11px] flex items-end text-l-secondary-txt-color dark:text-d-secondary-txt-color'>{ sendTime }</p>
                        { status === 'send' && <Icon icon={icons.oneCheck} className='font-bold text-l-secondary-txt-color dark:text-d-secondary-txt-color' /> }
                        { status === 'delivered' && <Icon icon={icons.twoCheck}  className='font-bold text-l-secondary-txt-color dark:text-d-secondary-txt-color' /> }
                        { status === 'seen' && <Icon icon={icons.twoCheck} className='text-[#25D366]' /> }
                    </div>
                </div>
                <div className='border-t-[10px] border-r-[5px] border-r-transparent border-t-l-primary-hoverBg-color dark:border-t-d-primary-hoverBg-color'></div>
            </div>
        </div>
    );
})




// Receiver
const ReceiverMessage = React.memo(({ Message }) => {
    const { message, time } = Message;
    const sendTime = getTime(time.send);

    return (
        <div className='flex gap-3 my-1'>
            <div className='w-[80%] flex justify-start items-start'>
                <div className={`border-t-[10px] border-l-[5px] border-t-[#7269ef] border-l-transparent`}></div>
                <div className='flex gap-1 bg-[#7269ef] rounded-b-lg rounded-tr-lg px-3 shadow-md'>
                    <p className='py-2 text-[15px] flex items-center text-white'>{message}</p>
                    <div className='flex-shrink-0 flex items-end gap-1 pb-1'>
                        <p className={`text-[11px] flex items-end text-[#dddddd]`}>{sendTime}</p>
                    </div>
                </div>
            </div>
        </div>
    );
})



// Day Time
function Time({ Message }){
    const dayTime = 'Today';
    return (
        <div className='w-full h-auto flex justify-center py-4'>  
            <p className='text-white opacity-90 bg-[#fff1] p-2 rounded-lg text-xs'>Today</p>
        </div>
    );
}


// Messages
function Message({ message }) {
    const messageSenderId = message.from;
    const userId = useSelector(state => state.UserSlice).email;
    return (
        <>
            { userId === messageSenderId && <SenderMessage Message={message} /> }
            { userId !== messageSenderId && <ReceiverMessage Message={message} /> }
            {/* { from==='time' && <Time Message={message} /> } */}
        </>
    );
}


// Export 
export default React.memo(Message);
