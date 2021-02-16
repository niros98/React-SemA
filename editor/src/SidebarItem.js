import React from 'react' 

export default function SidebarItem({ name, active, handleClick }) {
  return (
    <button 
      className={`sidebar-item ${active ? 'active' : ''}`} /*active for show where the mouse */
      onClick={handleClick}  /*set as selected item */
      
    >
      {name} 
    </button>
  )
}
