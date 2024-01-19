import React from 'react';


function Footer({ goto, description, handleNavigate }) {
  return (
    <div className="w-full px-4">
        <div className="flex justify-center gap-2 py-2">
            <p className="text-md text-secondary-light dark:text-secondary-dark ">{description}</p>
            <a className="text-main-color font-semibold hover:underline" onClick={handleNavigate}>{goto}</a>
        </div>
        <p className="text-sm text-center text-secondary-light dark:text-secondary-dark ">
            &copy; 2023 ChatBuddy. Crafted with ❤️ by Bhaskar
        </p>
    </div>
  )
}

export default Footer