import React from 'react'

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 text-white bg-black">
      <h1 className="text-2xl font-bold">Netflix GPT</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#login" className="hover:underline">Login</a></li>
          <li><a href="#signup" className="hover:underline">Sign Up</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header