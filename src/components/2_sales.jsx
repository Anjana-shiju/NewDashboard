import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', Electronics: 20000, Grocery: 30000, Decors: 15000 },
  { name: 'Feb', Electronics: 26000, Grocery: 20000, Decors: 17000 },
  { name: 'Mar', Electronics: 24500, Grocery: 13000, Decors: 25000 }, 
  { name: 'Apr', Electronics: 35000, Grocery: 16000, Decors: 19000 },
  { name: 'May', Electronics: 36000, Grocery: 19000, Decors: 13000 },
];

const SalesOverTimeCard = () => {
  return (
    <div 
      className="bg-white p-6 shadow-sm border border-gray-100 flex flex-col justify-between"
      style={{ 
        width: '400px', 
        height: '274px', 
        borderRadius: '20px' 
      }}
    >
      <h3 className="text-[14px] font-bold text-[#1A2D42] uppercase tracking-wide">
        Sales Over Time
      </h3>
      
      <div className="flex-1 w-full mt-4 mb-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
           
            <CartesianGrid vertical={false} stroke="#F1F5F9" strokeWidth={1} />
            
            <XAxis 
              dataKey="name" 
              axisLine={{ stroke: '#E5E7EB' }} 
              tickLine={false} 
              tick={{ fontSize: 11, fontWeight: 500, fill: '#64748B' }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 11, fontWeight: 500, fill: '#64748B' }} 
              domain={[0, 40000]}
              ticks={[0, 10000, 20000, 30000, 40000]}
            />
            <Tooltip />
            
           
            <Line 
              type="monotone" 
              dataKey="Electronics" 
              stroke="#1A1042" 
              strokeWidth={3} 
              dot={{ r: 4, fill: '#1A1042', strokeWidth: 2, stroke: '#fff' }} 
            />
            <Line 
              type="monotone" 
              dataKey="Grocery" 
              stroke="#0096A1" 
              strokeWidth={3} 
              dot={{ r: 4, fill: '#0096A1', strokeWidth: 2, stroke: '#fff' }} 
            />
            <Line 
              type="monotone" 
              dataKey="Decors" 
              stroke="#D37E46" 
              strokeWidth={3} 
              dot={{ r: 4, fill: '#D37E46', strokeWidth: 2, stroke: '#fff' }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Legend Section */}
      <div className="flex gap-4 mt-2">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-[#1A1042] rounded-md shadow-sm"></div>
          <span className="text-[11px] font-bold text-gray-600">Electronics</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-[#0096A1] rounded-md shadow-sm"></div>
          <span className="text-[11px] font-bold text-gray-600">Grocery</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-[#D37E46] rounded-md shadow-sm"></div>
          <span className="text-[11px] font-bold text-gray-600">Decors</span>
        </div>
      </div>
    </div>
  );
};

export default SalesOverTimeCard;