"use client";

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart: React.FC = () => {
    const data = [
        { name: 'MON', Visit: 4000, Click: 2400, amt: 2400 },
        { name: 'TUE', Visit: 3000, Click: 1398, amt: 2210 },
        { name: 'WED', Visit: 2000, Click: 6000, amt: 2290 },
        { name: 'THU', Visit: 2780, Click: 3908, amt: 2000 },
        { name: 'FRI', Visit: 1890, Click: 4800, amt: 2181 },
        { name: 'SAT', Visit: 2390, Click: 3800, amt: 2500 },
        { name: 'SUN', Visit: 3490, Click: 4300, amt: 2100 },
    ];

    return (
        <div style={{ width: '100%', height: "400px",backgroundColor: "#0c0238", borderRadius: "8px" }}>
            <h2 style={{ textAlign: 'center', fontWeight: "bold", fontSize: "24px", margin: "8px" }}>Weekly Recap</h2>
            <ResponsiveContainer width="100%" height="100%" style={{
                paddingBottom: "50px"
            }}>
                <LineChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip/>
                    <Legend />
                    <Line type="monotone" dataKey="Click" stroke="skyblue" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="Visit" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;