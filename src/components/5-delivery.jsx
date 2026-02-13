import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
export const DeliveryAgentsCard = () => {
  const deliveryStats = [
    { label: 'Total Agents', value: '30' },
    { label: 'Active Agents', value: '20' },
    { label: 'On-Time Delivery', value: '95%' },
  ];

  return (
    <div 
      className="bg-white shadow-sm overflow-hidden p-5 shrink-0"
      style={{ width: '383.48px', height: '210.79px', borderRadius: '12px' }}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[11px] font-bold text-[#1A2D42] uppercase tracking-wider">
          Delivery Agents
        </h3>
        <button className="text-[#22AD5C] text-[12px] font-bold hover:underline">View All</button>
      </div>
      <div className="space-y-2">
        {deliveryStats.map((stat) => (
          <div 
            key={stat.label} 
            className="flex justify-between items-center px-4 py-2.5 rounded-[8px] bg-[#EAF7EE]"
          >
            <span className="text-[#22AD5C] font-semibold text-[13px]">{stat.label}</span>
            <span className="text-[#1A2D42] font-bold text-[14px]">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DeliveryAgentsCard ;