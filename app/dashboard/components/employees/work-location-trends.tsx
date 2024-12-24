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
        className='[&_.recharts-tooltip-cursor]:fill-zinc-200 dark:[&_.recharts-tooltip-cursor]:fill-zinc-800'
      >
        <XAxis dataKey='name' stroke='#888888' fontSize={12} />
        <YAxis stroke='#888888' fontSize={12} />
        <Tooltip
          separator=': '
          formatter={(value, name) => {
            if (name === "wfh") {
              return [value, "Work from home"];
            } else if (name === "office") {
              return [value, "Work from office"];
            }
          }}
          labelClassName='font-bold'
          wrapperClassName='!text-sm dark:!bg-black rounded-md dark:!border-border'
        />
        <Legend
          iconType='circle'
          formatter={(value) => {
            if (value === "wfh") {
              return <div className='text-sm'>Work from Home</div>;
            } else if (value === "office") {
              return <div className='text-sm'>Work from Office</div>;
            }
          }}
        />
        <Bar dataKey='office' stackId={1} fill='#ec4899' />
        <Bar dataKey='wfh' stackId={1} fill='#6b7280' radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
