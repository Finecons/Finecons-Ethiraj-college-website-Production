import React from "react";
import { LineChart, Line, Area, AreaChart, ResponsiveContainer } from "recharts";


const GradientLineChart = ({data}) => {
  return (
    <ResponsiveContainer width="100%" height={150}>
      <AreaChart data={data}>
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d4a373" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#d4a373" stopOpacity={0} />
          </linearGradient>
        </defs>
        {/* Area with Gradient */}
        <Area
          type="monotone"
          dataKey="value"
          stroke="#d4a373"
          fill="url(#colorGradient)"
        />
        {/* Line */}
        <Line
          type="monotone"
          dataKey="value"
          stroke="#d4a373"
          strokeWidth={2}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default GradientLineChart;
