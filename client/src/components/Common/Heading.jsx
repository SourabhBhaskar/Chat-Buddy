import { Icon } from "@iconify/react";



// Only Heading
export function Heading({ text }){

  return (
    <section className={`h-[70px] text-[1.2rem] font-medium flex-shrink-0 flex items-center gap-2 px-4 text-l-primary-txt-color dark:text-d-primary-txt-color`}>
      <h1>{text}</h1>
    </section>
  )
}

// Button with Heading
export function BtnHeading({ text, exit }){
  const handleBackClick = () =>  exit();

  return (
    <section className={`h-[70px] text-[1.2rem] font-medium flex-shrink-0 flex items-center gap-2 px-4 text-l-primary-txt-color dark:text-d-primary-txt-color`}>
      <button onClick={handleBackClick} ><Icon icon="ic:sharp-arrow-back" className='text-l-secondary-txt-color hover:text-l-primary-txt-color dark:text-d-secondary-txt-color dark:hover:text-d-primary-txt-color' /></button>
      <h1>{text}</h1>
    </section>
  )
}

// Heading With Button but with space between
export function Heading_Btn({text, handleAddItemClick}){
  const handleClick = () => handleAddItemClick();
  return (
    <section className={`h-[70px] text-[1.2rem] font-medium flex-shrink-0 flex justify-between items-center gap-2 px-4 text-l-primary-txt-color dark:text-d-primary-txt-color`}>
      <h1>{text}</h1>
      <button onClick={handleClick} className="" ><Icon icon="ri:user-add-line" className='text-l-secondary-txt-color hover:text-l-primary-txt-color dark:text-d-secondary-txt-color dark:hover:text-d-primary-txt-color' /></button>
    </section>
  )
}