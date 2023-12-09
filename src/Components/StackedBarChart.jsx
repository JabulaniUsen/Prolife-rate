import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
 {
    name: 'Jan',
    value1: 28,
    value2: 20,
    value3: 36,
 },
 {
    name: 'Feb',
    value1: 20,
    value2: 29,
    value3: 32,
 },
 {
    name: 'Mar',
    value1: 30,
    value2: 82,
    value3: 24,
 },
 {
    name: 'Apr',
    value1: 100,
    value2: 60,
    value3: 32,
 },
 {
    name: 'May',
    value1: 90,
    value2: 80,
    value3: 20,
 },
 {
    name: 'Jun',
    value1: 78,
    value2: 60,
    value3: 20,
 },
 {
    name: 'Jul',
    value1: 90,
    value2: 60,
    value3: 37,
 },
 {
    name: 'Aug',
    value1: 81,
    value2: 40,
    value3: 30,
 },
 {
    name: 'Sep',
    value1: 89,
    value2: 23,
    value3: 30,
 },
 {
    name: 'Oct',
    value1: 90,
    value2: 23,
    value3: 32,
 },
 {
    name: 'Nov',
    value1: 10,
    value2: 23,
    value3: 30,
 },
 {
    name: 'Dec',
    value1: 90,
    value2: 20,
    value3: 32,
 },
];

const StackedBarChart = () => (
 <BarChart
    width={600}
    height={350}
    data={data}
    margin={{
      top: 20,
      right: 30,
      left: 20,
      bottom: 5,
    }}
 >
    <CartesianGrid strokeDasharray="3 3" />
    {/* <XAxis dataKey="name" /> */}
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="value3" stackId="a" fill="#0ba5ec" />
    <Bar dataKey="value2" stackId="a" fill="#2b99c8" />
    <Bar dataKey="value1" stackId="a" fill="#7cd4fd" />
 </BarChart>
);

export default StackedBarChart;