import React, { useState, useRef, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '@iconify/react';
import { useTheme } from '../../../Common/Theme';
import ExpendableComponent from '../ExpendableComponent';
import InputField from '../../../Profile/InfoSection/InputField';



function EditableField({ fieldName, fieldData }){
    const dispatch = useDispatch();
    const {} = useTheme();
    const inputRef = useRef(null);
    const [isEditing, setIsEditing] = useState(false);
    const [changedData, setChangedData] = useState(fieldData)
    const { themeMode } = useSelector((state) => state.NavigateModesSlice);

  
    function handleStartEditing(){
      setIsEditing(true);
    }
  
    // On input change
    function handleChange(e) {
      setChangedData(e.target.value);
    }
  
    // Auto focuse for input
    useEffect(() => {
      if (isEditing) {
        inputRef.current.focus();
      }
    }, [isEditing]);
  
    
    // handle save changes
    function handleSaveChanges(haveToSave){
      if(haveToSave){
        // dispatch(_editYourProfile({ field: fieldName, data: fieldData }));
      }else{
        setChangedData(fieldData);
      }
      setIsEditing(false);
    }
  
    return (
      <div className={`px-4 py-2 rounded-md `}>
        <h1 className={`text-[15px]  ${ '' }`}>{fieldName}</h1>
        <div className='flex justify-between items-center text-white'>
          <input
            className={`w-full bg-transparent font-medium text-[14px] pr-4  ${ ''}`}
            onChange={handleChange}
            value={changedData}
            disabled={!isEditing}
            ref={inputRef} 
          />
          {!isEditing &&
          <button onClick={handleStartEditing} className={`p-1 text-[14px] ${ '' }`} >
            <Icon icon="uil:edit" />
          </button>}
          {isEditing &&
          <div className="w-[130px] flex justify-between gap-2 text-sm mx-auto">
            <button onClick={()=>handleSaveChanges(true)} className="w-[60px] px-2 py-1 rounded-md bg-[#7269ef] text-white shadow-md transition-all duration-300 hover:bg-[#5c54d3]">Save</button>
            <button onClick={()=>handleSaveChanges(false)} className="w-[60px] px-2 py-1 rounded-md bg-[#7269ef] text-white shadow-md transition-all duration-300 hover:bg-[#5c54d3]">Cancel</button>
          </div>}
        </div>
      </div>
    );
  }



// Personal info
function PersonalInfo() {
    const { username, mobile_number, email, password, location } = useSelector(
        (state) => state.UserSlice
      );
    return(
        <ExpendableComponent p={"Personal info"} key={'personal-info'}>
            <EditableField fieldName={'Username'} fieldData={username} />
            <EditableField fieldName={'Mobile Number'} fieldData={mobile_number} />
            <EditableField fieldName={'Email'} fieldData={email} />
            <EditableField fieldName={'Password'} fieldData={password} />
            <EditableField fieldName={'Location'} fieldData={location} />
            {/* <InputField field="Username" data={username} /> */}
        </ExpendableComponent>
    );
}

export default PersonalInfo;


