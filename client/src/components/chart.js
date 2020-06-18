import React from "react";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
export default function Chart(props) {
    return (
        <LineChart
            width={500}
            height={300}
            data={props.data}
            margin={{
                top: 5, right: 30, left: 20, bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={props.xkey} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey={props.ykey} stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
    );
}
