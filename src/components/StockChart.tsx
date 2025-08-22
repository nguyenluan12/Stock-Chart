import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

interface StockData {
  date: string;
  close: number;
}

interface StockChartProps {
  data: StockData[];
  loading: boolean;
}

const StockChart: React.FC<StockChartProps> = ({ data, loading }) => {
  if (loading) return <p>Loading...</p>;

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis dataKey="close" />
        <Tooltip />
        <Line type="monotone" dataKey="close" stroke="#ff7300" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default StockChart;
