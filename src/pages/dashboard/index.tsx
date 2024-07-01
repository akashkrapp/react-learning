import React, { useState } from 'react';
import Header from '../../common/header';
import Sidebar from '../../common/sidebar';
import { Box } from '@mui/material';



function Dashboard() {
  const [
    name, setName
  ] = useState()
  
  return (
    <div className="pageMainWrapper">
        <Header/>
        
        <div className="innerWrapper">
        <Sidebar/>
            <Box>
                <div className="userBox">
                  <p className="data">
                    type here
                  </p>
                  <input type="text" value={name} onChange={(e:any)=> setName(e.target.value)} />
                 <p>{name}</p>
                </div>
            </Box>
        </div>
      
    </div>
  );
}

export default Dashboard;
