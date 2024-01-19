import { useState } from "react";
import { useDispatch } from "react-redux";
import { Icon } from "@iconify/react";
import { icons } from "../../../../utils/icons.util";
import { useUserBio } from "../../../../Hooks/userBio/useUserBio.hook";


// InputTextField
function InputTextField({
  type,
  name,
  value,
  isDisabled = true,
}) {
  const dispatch = useDispatch();
  const [inpVal, setInpVal] = useState(value);
  const [isActive, setIsActive] = useState(true);
  const userBio = useUserBio();

  function handleBtnClick(){
    setIsActive(!isActive);
    if(!isActive)
      userBio.submit({ [name.replace(" ", "_").toLowerCase()]: inpVal })
    setInpVal(value);
  }


  return (
    <div className='px-2 py-3'>
      <h1 className="text-sm font-semibold text-secondary-light dark:text-secondary-dark">{name}</h1>
      <div className="flex items-end gap-2 relative">
        { isActive && <h1 className="w-full text-sm text-primary-light dark:text-primary-dark">{value}</h1> }
        { !isActive && <input type={type} value={inpVal} onChange={(e) => setInpVal(e.target.value)} disabled={isDisabled || isActive} className="w-full text-sm peer bg-transparent text-primary-light dark:text-primary-dark" required />}
        { !isDisabled && <button onClick={handleBtnClick}>
        { !userBio.isLoading &&  <Icon icon={isActive ? icons.edit : icons.save} className="transition-all text-secondary-light hover:text-primary-light dark:text-secondary-dark dark:hover:text-primary-dark" />}
        { userBio.isLoading && <Icon icon={icons.loader} className="text-main-color" />}
        </button>}
        <span className='w-0 h-[2px] peer-enabled:w-[50%] absolute -bottom-1 left-1/2 bg-[#7269ef] transition-all'></span>
        <span className='w-0 h-[2px] peer-enabled:w-[50%] absolute -bottom-1 right-1/2 bg-[#7269ef] transition-all'></span>
      </div>
    </div>
  );
}

export default InputTextField;
