import React from "react";
import {
  Bar,
  BarChart,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const COLORS = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444", "#06b6d4"];

const RechartSetup = ({ charts }) => {
  if (!charts || charts.length === 0) {
    return null;
  }

  return (
    <div className="space-y-8">
      {charts.map((c, i) => (
        <div key={i} className="border border-gray-200 rounded-xl p-4 bg-white">
          <h4 className="font-semibold text-gray-800 mb-3">📊 {c.title}</h4>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              {/* BAR CHART */}
              {c.type === "bar" && (
                <BarChart data={c.data}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                    {c.data.map((_, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              )}

              {/* LINE CHART */}
              {c.type === "line" && (
                <LineChart data={c.data}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#6366f1"
                    strokeWidth={3}
                  />
                </LineChart>
              )}

              {/* PIE CHART */}
              {c.type === "pie" && (
                <PieChart>
                  <Tooltip />
                  <Pie
                    data={c.data}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={100}
                    label
                  >
                    {c.data.map((_, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              )}
            </ResponsiveContainer>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RechartSetup;
