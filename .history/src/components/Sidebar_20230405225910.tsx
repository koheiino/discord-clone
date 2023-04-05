import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar flex h-screen bg-gray-700'>
      {/* sidevbarLeft */}
      <div className="sidebarLeft flex flex-col items-center mt-0.5 bg-black
      py-0.5 px-4">
        <div className="flex serverIcon w-16 h-16 bg-gray-400 
        rounded-full justify-between items-center">
            <img className='w-15 
            ' src="./logo192.png" alt="" />
        </div>
        <div className="flex serverIcon w-16 h-16 bg-gray-400 
        rounded-full justify-between items-center">
            <img className='w-15 
            ' src="./logo192.png" alt="" />
        </div>
      </div>
      {/* sidebarRight */}
      <div className="sidebarRight">
        <div className="sidebarTop">
            <h3>Discord</h3>
        </div>
      </div>
    </div>
  )
}

export default Sidebar