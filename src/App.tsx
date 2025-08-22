import  { useState, useEffect } from "react";
import TimeFrameSelector from "./components/TimeFrameSelector";
import StockChart from "./components/StockChart";

interface StockData {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

function App() {
  const [data, setData] = useState<StockData[]>([]);
  const [timeFrame, setTimeFrame] = useState<"daily" | "hourly" | "weekly" | "monthly">("daily");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const baseUrl = import.meta.env.VITE_STOCK_API;
        const response = await fetch(`${baseUrl}/${timeFrame}/NASDAQ`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Fetched data:", result);

        const formatted: StockData[] = result?.candles?.map((item: any) => ({
          date: item.date,
          open: item.open,
          high: item.high,
          low: item.low,
          close: item.close,
        }));

        setData(formatted || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [timeFrame]);

  return (
    <div style={{ padding: 20, border: "1px solid black", margin: "20px auto", width: 500 }}>
      <TimeFrameSelector timeFrame={timeFrame} setTimeFrame={setTimeFrame} />
      <StockChart data={data} loading={loading} />
    </div>
  );
}

export default App;
