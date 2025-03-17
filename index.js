import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";

const mockData = [
  { time: "08:00", MOVA: 12, AI: 10 },
  { time: "08:15", MOVA: 15, AI: 13 },
  { time: "08:30", MOVA: 18, AI: 16 },
  { time: "08:45", MOVA: 14, AI: 12 },
  { time: "09:00", MOVA: 20, AI: 18 },
];

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(mockData);
  }, []);

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">LHEVA AI Dashboard</h1>
      
      <Card className="mb-6">
        <CardContent>
          <h2 className="text-xl font-semibold mb-4">Traffic Signal Phase Timings</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <XAxis dataKey="time" stroke="#ffffff" />
              <YAxis stroke="#ffffff" />
              <Tooltip />
              <Line type="monotone" dataKey="MOVA" stroke="#ff7300" strokeWidth={2} />
              <Line type="monotone" dataKey="AI" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      
      <Button className="mt-4">Download Report</Button>
    </div>
  );
}