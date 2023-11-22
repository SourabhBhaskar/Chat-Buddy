import { useEffect, useState } from "react";
import { useTheme } from "../../Common/Theme";
import { Icon } from "@iconify/react";


function Input({
  type,
  name,
  value,
  isDisabled = false,
  handleSubmit,
  setActiveInputField,
  inputEditButton = true
}) {
  const { primaryTxt, secondaryTxt, secondaryTxtWithHover, border } =
    useTheme();
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
    <div className={`my-4 relative`}>
      <form
        onSubmit={handleSubmitForm}
        className={`text-[15px] flex flex-col justify-between relative`}>
        <h1 className={`text-[14px] font-semibold ${secondaryTxt}`}>{name}</h1>
        { !isDisabled && <p className={`transition-all ${primaryTxt}`}>{value}</p>}
        { isDisabled && <input
          type={type}
          name={name}
          value={newValue}
          onChange={handleChange}
          disabled={!isDisabled}
          className={`peer w-full pr-6 bg-transparent ${primaryTxt}`}
        />}
        {inputEditButton && <button
          type="submit"
          className={`absolute right-0 bottom-[6px] ${secondaryTxtWithHover}`}>
          <Icon icon={`${isDisabled ? "lucide:check-square" : "uil:edit"}`} />
        </button>}
        <span className="w-0 h-0 absolute bottom-0 border-b-2 border-[#abb4d2] peer-enabled:w-full peer-focus:w-0 transition-all duration-400"></span>
        <span className="w-0 h-0 absolute bottom-0 border-b-2 border-[#7269ef] mx-auto peer-focus:w-full transition-all duration-800"></span>
      </form>
    </div>
  );
}

export default Input;
