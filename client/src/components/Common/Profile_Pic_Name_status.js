export default function Profile_Pic_Name_status({pic, name, children}){
    return (
      <section className='w-full h-[222px] flex-shrink-0 border-2'>
        <div className='border-[1px] border-gray-700 w-[96px] h-[96px] mx-auto rounded-full p-1 my-6'>
          <img src={pic} alt={name} className='w-full h-full bg-red-600 rounded-full' />
        </div>
        <h1 className='w-full text-center font-[600]'>{name}</h1>
        {children}
      </section>
    );
  }