import React from 'react';


function Footer({ goto, description, handleNavigate }) {
  return (
    <div className="w-full">
        <div className="flex justify-center gap-2">
            <p className="text-gray-400">{description}</p>
            <a className="text-[#7269EF] font-semibold hover:underline" onClick={handleNavigate}>{goto}</a>
        </div>
        <p className="text-center text-gray-400 mt-2">
            &copy; 2023 Chat-Buddy. Crafted with ❤️ by Bhaskar
        </p>
    </div>
  )
}

export default Footer