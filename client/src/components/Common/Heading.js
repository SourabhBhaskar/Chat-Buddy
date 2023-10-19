import React, {  } from "react";



// Heading
function Heading({ text }){
    return (
      <h1 className={`text-xl font-semibold `}>{text}</h1>
    );
}


export default React.memo(Heading);