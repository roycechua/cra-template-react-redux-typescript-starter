import React, { useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";

const Dashboard = () => {
    const history = useHistory();

    return (
        <div>
            <div>Dashboard</div>
            <button onClick={()=>{
                window.localStorage.setItem("EBOOK_READER_AUTH_TOKEN", '');
                window.localStorage.clear();
                history.replace('/')
            }}>Reset</button>
        </div>
    )
}

export default Dashboard;
