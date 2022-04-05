import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    return (
        <div className='flex gap-10 mt-5 mb-4 ml-1'>
            <LineChart width={400} height={400} data={data}>
                <Line dataKey={'sell'}>
                </Line>
                <Line dataKey={'investment'}></Line>
                <Line dataKey={'revenue'}></Line>
                <XAxis dataKey="month" />
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>

            </LineChart>

            <div>
                <BarChart width={400} height={400} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                    <Bar dataKey="month" fill="#82ca9d" />

                </BarChart>
            </div>
        </div>




    );
};



export default Dashboard;


