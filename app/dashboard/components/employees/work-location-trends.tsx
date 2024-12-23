"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    office: 4000,
    wfh: 2400,
  },
  {
    name: "Feb",
    office: 3000,
    wfh: 1398,
  },
  {
    name: "Mar",
    office: 2000,
    wfh: 9800,
  },
  {
    name: "April",
    office: 2780,
    wfh: 3908,
  },
  {
    name: "May",
    office: 1890,
    wfh: 4800,
  },
  {
    name: "June",
    office: 2390,
    wfh: 3800,
  },
  {
    name: "July",
    office: 3490,
    wfh: 4300,
  },
  {
    name: "Aug",
    office: 3490,
    wfh: 4300,
  },
  {
    name: "Sep",
    office: 7890,
    wfh: 2300,
  },
  {
    name: "Oct",
    office: 3490,
    wfh: 4300,
  },
  {
    name: "Nov",
    office: 3490,
    wfh: 4300,
  },
  {
    name: "Dec",
    office: 3490,
    wfh: 4300,
  },
];

export default function WorkLocationTrends() {
  return (
    <ResponsiveContainer width='100%' height={350}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey='name' stroke='#888888' font />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='office' fill='#ec4899' />
        <Bar dataKey='wfh' fill='#6b7280' />
      </BarChart>
    </ResponsiveContainer>
  );
}
