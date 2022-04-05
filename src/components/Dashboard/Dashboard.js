import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    return (
        <div>
            <h1>data:{data.length}</h1>
        </div>
    );
};

export default Dashboard;
