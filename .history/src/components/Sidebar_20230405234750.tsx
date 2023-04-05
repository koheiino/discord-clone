import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannnel from './SidebarChannnel';

const Sidebar = () => {
  return (
    <div className='sidebar flex h-screen bg-gray-700'>
      {/* sidevbarLeft */}
      <div className="sidebarLeft flex flex-col items-center mt-0.5 bg-gray-900
      py-0.5 px-4">
        <div className="flex serverIcon w-16 h-16 bg-gray-700 
        rounded-full justify-between items-center mt-5">
            <img className='w-15 
            ' src="./logo192.png" alt="" />
        </div>
        <div className="flex serverIcon w-16 h-16 bg-gray-700 
        rounded-full justify-between items-center mt-5">
            <img className='w-15 
            ' src="./logo192.png" alt="" />
        </div>
      </div>
      {/* sidebarRight */}
      <div className="sidebarRight bg-gray-600 w-80">
        <div className="sidebarTop text-white flex items-center justify-between p-5">
            <h3>Discord</h3>
            <ExpandMoreIcon />
        </div>
        <div className="sidebarChannels p-3">
          <div className="sidebarChannelsHeader flex text-white justify-between m-1 items-center">
            <div className="sidebarHeader flex">
              <ExpandMoreIcon />
              <h4>いのちゃんねる</h4>
            </div>
            <AddIcon className='cursor-pointer' />
          </div>
          <div className="sidebarChannelsList ">
            <SidebarChannnel />
            <SidebarChannnel />
            <SidebarChannnel />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar