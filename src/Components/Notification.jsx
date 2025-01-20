import React from 'react'

const Notification = ({ message, type, onClose }) => {
  return (
    <div
    className={`fixed top-4 right-4 p-4 rounded shadow-lg font-fira ${
      type === "success" ? "bg-green-500" : "bg-red-500"
    } text-white`}
  >
    {message}
    <button className="ml-4" onClick={onClose}>
      ✖
    </button>
  </div>    
  )
}

export default Notification
