import React, { useState } from 'react';
import { Icon  } from '@iconify/react';
import { useSelector } from 'react-redux';




// Sender 
function SenderMessage({ Message }){
    const { time, message, status } = Message;

    return (
        <div className='flex justify-end gap-3 text-white my-1'>
            <div className='w-[80%] flex justify-end items-start'>
                <div className='flex gap-2 bg-[#a6b0cf11] rounded-b-lg rounded-tl-lg px-3'>
                    <p className='py-2 text-[15px] flex items-center'>{message}</p>
                    <div className='flex-shrink-0 flex items-end gap-1 pb-1'>
                        <p className='text-[11px] font-extralight flex items-end text-gray-300'>{time}</p>
                        { status === 'send' && <Icon icon="bi:check2" className='font-bold' /> }
                        { status === 'sent' && <Icon icon="bi:check2-all" /> }
                        { status === 'read' && <Icon icon="bi:check2-all" className='text-[#25D366]' /> }
                    </div>
                </div>
                <div className='border-t-[10px] border-t-[#a6b0cf11] border-r-[5px] border-r-[#262e35] '></div>
            </div>
        </div>
    );
}


// Receiver
function ReceiverMessage({ Message }){
    const { time, message } = Message;

    return (
        <div className='flex gap-3 text-white my-1'>
            <div className='w-[80%] flex justify-start items-start'>
                <div className='border-t-[10px] border-l-[5px] border-t-[#7269ef] border-l-[#262e35]'></div>
                <div className='flex gap-1 bg-[#7269ef] rounded-b-lg rounded-tr-lg px-3'>
                    <p className='py-2 text-[15px] flex items-center'>{message}</p>
                    <div className='flex-shrink-0 flex items-end gap-1 pb-1'>
                        <p className='text-[11px] font-extralight flex items-end text-gray-300'>{time}</p>
                    </div>
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