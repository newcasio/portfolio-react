import React from 'react';

import './sidebar.css';

function Sidebar(){
    return(
        <div className="sidebar_wrapper">
           <img
      className="profile_pic"
      src={require("../../resources/person.png")}
      alt="Mr Placeholder"
    />
        </div>
    )
}

export default Sidebar;