import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar flex:35% h-screen bg-gray-400'>
      {/* sidevbarLeft */}
      <div className="sidebarLeft">
        <div className="serverIcon">
            <img src="./logo192.png" alt="" />
        </div>
        <div className="serverIcon">
            <img src="./logo192.png" alt="" />
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
