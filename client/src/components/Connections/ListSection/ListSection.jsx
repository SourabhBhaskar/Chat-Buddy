import React from 'react';
import Item from './Item';
import { useTheme } from '../../Common/Theme';

function ListSection({ All, List }) {
  const { primaryBg } = useTheme();
  const listKeyArr = Object.keys(List).sort();

  return (
    <section className='flex-grow overflow-scroll hide-scrollbar mx-4 mt-4'>
      {listKeyArr.map((key) => {
        const keyValueEmailArr = List[key]
        if (keyValueEmailArr.length) {
          return (
            <div key={key}>
               <h1 className='flex items-end text-[#7269ef] font-medium w-full h-[54px]'>{key}</h1>
               <div className={`rounded-lg py-4 ${primaryBg}`}>
                 {keyValueEmailArr.map(e => <Item key={e} value={All[e]} />)}
               </div>
             </div>
          );
        }
        return null;
      })}
    </section>
  );
}

export default React.memo(ListSection);


