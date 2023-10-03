import React from 'react';




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
        <div className='w-full h-auto flex justify-start py-2'>   
            <div className='flex flex-col items-start'>
                <div className={`flex flex-col gap-1 bg-[#fff1] rounded-t-lg rounded-br-lg p-4 text-white`}>
                    <p>{message}</p>
                    <div className='flex gap-1 items-center justify-start opacity-70'>
                        <i className="fa-regular fa-clock text-[0.6rem]"></i>
                        <p className='text-[0.7rem]'>{time}</p>
                    </div>
                </div>
                <div className='border-t-[5px] border-r-[10px] border-t-[#fff1] border-r-[#262e35]'></div>
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