import React from 'react';
import Header from '../../common/header';
import Sidebar from '../../common/sidebar';



function Dashboard() {
  return (
    <div className="pageMainWrapper">
        <Header/>
        <Sidebar/>
        <div className="innerWrapper">
            <p>content here</p>
        </div>
      
    </div>
  );
}

export default Dashboard;
