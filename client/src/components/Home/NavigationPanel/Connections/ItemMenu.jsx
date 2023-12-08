import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dropdownMenuParent, dropdownMenuChild, useTheme } from '../../Common/Theme';
import { setIsChatRoomOpen } from '../../../context/Boolean/booleanSlice';



// Menu
export default function ItemMenu(){
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const { commonBgHover, primaryBg, border, secondaryTxt } = useTheme();

    const handleMenuClick = (e) =>{
      e.stopPropagation();
      setIsEditing(!isEditing);
    } 

    const handleProfile = (e) => {
      alert("Profile")
      e.stopPropagation();
      setIsChatRoomOpen(true);
    }

    const handleShare = (e) => {
      e.stopPropagation();
    }

    const handleBlock = (e) => {
      e.stopPropagation();
    }

    const handleDelete = (e) => {
      e.stopPropagation();
    }

    return (
      <div className='text-[#a6b0cf] relative flex items-center'>
        <button onClick={handleMenuClick}>
          <Icon icon="ri-more-2-fill"/>
        </button>
        { isEditing && 
        <div className={`border-[1px] absolute right-full top-full rounded-md p-3 shadow-lg ${secondaryTxt} ${border} ${ primaryBg }`}>
          <button onClick={handleProfile} className={`flex items-center justify-between w-[150px] py-1 px-4 rounded-sm ${ commonBgHover }`}>Profile<Icon icon="ri:user-2-line"  /> </button>
          <button onClick={handleShare} className={`flex items-center justify-between w-[150px] py-1 px-4 rounded-sm ${ commonBgHover }`}>Share<Icon icon="ri:share-line"  /> </button>
          <button onClick={handleDelete} className={`flex items-center justify-between w-[150px] py-1 px-4 rounded-sm ${ commonBgHover }`}>Remove<Icon icon="ri:delete-bin-line" /></button>   
        </div>}
      </div>
    );
  } 
