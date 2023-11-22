import React from 'react'

function Main({ children }) {
  return (
    <main className="w-full min-h-screen relative flex flex-col justify-center gap-8 text-white">
      {children}
    </main>
  )
}

export default Main;