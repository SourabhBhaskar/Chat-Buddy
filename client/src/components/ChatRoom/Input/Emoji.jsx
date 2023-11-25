import React from 'react';
import { Icon } from '@iconify/react';
import { icons } from '../../../utils/icons.util';


function Emoji(){
    return (
        <div className="flex items-center">
        <button  className='text-l-secondary-txt-color dark:text-d-secondary-txt-color hover:text-l-primary-txt-color hover:dark:text-d-primary-txt-color'>
            <Icon icon={icons.emoji} className="text-xl" />
        </button>
        </div>
    )
}

export default Emoji