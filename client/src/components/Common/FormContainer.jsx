import React from 'react';
import { useTheme } from '../Common/Theme';


function FormContainer({ children, handleSubmit }) {
  const { primaryBg } = useTheme();

  return (
    <form id='authForm' onSubmit={handleSubmit} className={`w-[90%] max-w-[500px] h-auto flex flex-col gap-3 text-white p-10 mx-auto rounded-md ${primaryBg}`}>
        {children}
    </form>
  )
}

export default FormContainer