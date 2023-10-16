import React from 'react';
import { Icon  } from '@iconify/react';




// Sender 
function SenderMessage({ Message }){
    const { time, message } = Message;

    return (
        <div className='w-full h-auto flex justify-end py-2'>   
            <div className='flex flex-col items-end'>
                <div className={`flex flex-col gap-1 bg-[#7269ef] rounded-t-lg rounded-bl-lg p-4 text-white`}>
                    <p>{message}</p>
                    <div className='flex gap-1 items-center justify-end opacity-70'>
                        <i className="fa-regular fa-clock text-[0.6rem]"></i>
                        <p className='text-[0.7rem]'>{time}</p>
                    </div>
                </div>
                <div className='border-t-[5px] border-l-[10px] border-t-[#7269ef] border-l-[#262e35]'></div>
            </div>
        </div>
    );
}


// Receiver
function ReceiverMessage({ Message }){
    const { time, message } = Message;

    return (
        <div className='flex gap-3 text-white'>
            <div className='flex items-end'>
                <img src='https://picsum.photos/id/237/100/100' className='w-[40px] h-[40px] rounded-full' />
            </div>
            <div>
                <div className='flex flex-col items-start'>
                    <div className='flex gap-1'>
                        <div className={`flex flex-col gap-1 bg-[#7269ef] rounded-t-lg rounded-br-lg p-3 text-white`}>
                            <p className='text-[15px]'>{message}</p>
                            <div className='flex gap-1 items-center justify-end opacity-70'>
                                <i className="fa-regular fa-clock text-[9px] text-gray-100 "></i>
                                <p className='text-[11px] text-gray-100 text-end'>{time}</p>
                            </div>
                        </div>
                        <Icon icon="ph:dots-three-vertical-bold" className='text-gray-400' />
                    </div>
                    <div className='border-t-[5px] border-r-[10px] border-t-[#7269ef] border-r-[#262e35]'></div>
                </div>
                <div className='flex justify-between gap-6'>
                    <p className='text-[14px] text-gray-400 font-[500]'>Sourabh Bhaskar</p>
                </div>
            </div>
        </div>
    );
}


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
export function Message({ message }) {
    const { direction } = message;
  
    return (
        <>
            { direction==='sent' && <SenderMessage Message={message}/> }
            { direction==='received' && <ReceiverMessage Message={message} /> }
            { direction==='time' && <Time Message={message} /> }
        </>
    );
}