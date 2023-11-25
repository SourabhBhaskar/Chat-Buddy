import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { icons } from "../../../utils/icons.util";


function Input({
  type,
  name,
  value,
  isDisabled = false,
  handleSubmit,
  setActiveInputField,
  inputEditButton = true
}) {
  const [newValue, setNewValue] = useState(value);

  const handleChange = (e) => {
    setNewValue(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setActiveInputField(name);
    if(isDisabled){
      setActiveInputField('');
      handleSubmit({ name: name, value: newValue });
    }
  };

  useEffect(() => {
    setNewValue(value);
  }, [value]);

  return (
    <div className='my-4 relative'>
      <form onSubmit={handleSubmitForm} className='text-[15px] flex flex-col justify-between relative'>
        <label className='text-[14px] font-semibold truncate text-l-secondary-txt-color dark:text-d-secondary-txt-color'>{name}</label>
        { !isDisabled && <p className='transition-all pr-8 truncate text-l-primary-txt-color dark:text-d-primary-txt-color'>{value}</p>}
        { isDisabled && <input
          type={type}
          name={name}
          value={newValue}
          onChange={handleChange}
          disabled={!isDisabled}
          className='peer w-full pr-6 bg-transparent text-l-primary-txt-color dark:text-d-primary-txt-color'
        />}
        {inputEditButton && 
        <button type="submit" className='absolute right-0 bottom-[6px] text-l-secondary-txt-color dark:text-d-secondary-txt-color hover:text-l-primary-txt-color hover:dark:text-d-primary-txt-color'>
          <Icon icon={`${isDisabled ? icons.save : icons.edit}`} />
        </button>}
        <span className='w-0 h-[2px] peer-enabled:w-[50%] absolute bottom-0 left-1/2 bg-l-secondary-txt-color dark:bg-d-secondary-txt-color transition-all'></span>
        <span className='w-0 h-[2px] peer-enabled:w-[50%] absolute bottom-0 right-1/2 bg-l-secondary-txt-color dark:bg-d-secondary-txt-color transition-all'></span>
        <span className='w-0 h-[2px] peer-focus:w-[50%] absolute bottom-0 left-1/2 bg-[#7269ef] transition-all'></span>
        <span className='w-0 h-[2px] peer-focus:w-[50%] absolute bottom-0 right-1/2 bg-[#7269ef] transition-all'></span>
      </form>
    </div>
  );
}

export default Input;
