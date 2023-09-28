// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Counter() {
//   const navigate = useNavigate();
//   const [count, setCount] = useState(0);

//   const handleIncrement = () => {
//     setCount(count + 1);
//   };

//   const handleDecrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={handleIncrement}>Increment</button>
//       <button onClick={handleDecrement}>Decrement</button>
//       <button onClick={()=>navigate('/home')}>Go to home</button>
//     </div>
//   );
// }

// function CounterList() {
//   const numberOfCounters = 10;

//   return (
//     <div>
//       {Array.from({ length: numberOfCounters }, (_, index) => (
//         <Counter key={index} />
//       ))}
//     </div>
//   );
// }

// export default CounterList;
