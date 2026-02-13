import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export const OrderStatusCard = () => {
  const orderData = [
    { name: 'Pending', value: 15, color: '#FCD771' },
    { name: 'Processing', value: 20, color: '#FFB366' },
    { name: 'Out For Delivery', value: 25, color: '#6C5CE7' }, 
    { name: 'Delivered', value: 30, color: '#72E2A1' },
    { name: 'Cancelled', value: 10, color: '#FF7675' },
  ];

  return (
    <div 
      className="bg-white shadow-sm flex flex-col p-6 shrink-0 relative"
      style={{ width: '396.18px', height: '210.79px', borderRadius: '12px' }}
    >
      <h3 className="text-[12px] font-bold text-[#1A2D42] uppercase tracking-wider mb-4">
        ORDER STATUS
      </h3>
      
      <div className="flex items-center justify-between flex-1 relative">
        <div className="w-[125px] h-[125px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
             <Pie
  data={orderData}
 
  innerRadius={35} 
  outerRadius={55}
  dataKey="value"
 
  startAngle={200} 
  endAngle={600}
  stroke="none"
 
  labelLine={false}
  label={({ cx, cy, midAngle, innerRadius, outerRadius, index }) => {
   
    if (index !== 2) return null;
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text 
        x={x} y={y} 
        fill="white" 
        textAnchor="middle" 
        dominantBaseline="central"
        className="text-[10px] font-bold"
      >
        25%
      </text>
    );
  }}
>
  {orderData.map((entry, index) => (
    <Cell key={`cell-${index}`} fill={entry.color} />
  ))}
</Pie>
            </PieChart>
          </ResponsiveContainer>
          
          
        </div>

       
        <div className="absolute left-[95px] top-[3px] pointer-events-none z-10">
          <svg width="125" height="90" viewBox="0 0 105 42" fill="none">
            <path 
              
              d="M0 0.5H55V39H305" 
              stroke="#6C5CE7" 
              strokeWidth="1.2" 
            />
          </svg>
        </div>

        <div className="space-y-2 pr-2 z-10">
          {orderData.map((item) => (
            <div key={item.name} className="flex items-center gap-3">
              <div 
                className="w-[10px] h-[10px] rounded-full shrink-0" 
                style={{ backgroundColor: item.color }} 
              />
              <span className={`text-[13px] whitespace-nowrap ${
                item.name === 'Out For Delivery' ? 'text-[#1A2D42] font-bold' : 'text-[#B2B2B2]'
              }`}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export const DeliveryAgentsCard = () => {
  const deliveryStats = [
    { label: 'Total Agents', value: '30' },
    { label: 'Active Agents', value: '20' },
    { label: 'On-Time Delivery', value: '95%' },
  ];

  return (
    <div 
      className="bg-white shadow-sm flex flex-col p-0 shrink-0"
      style={{ width: '396.18px', height: '210.79px', borderRadius: '12px' }}
    >
      
     <div className="flex justify-between items-center mb-5 px-[15px] pt-4"> 
  <h3 className="text-[12px] font-bold text-[#1A2D42] uppercase tracking-wider">
    DELIVERY AGENTS
  </h3>
  
  <button 
    className="text-[#22AD5C] text-[12px] font-bold hover:underline !bg-transparent !p-0 !border-none !shadow-none outline-none"
    
    style={{ background: 'none', border: 'none', padding: 0 }} 
  >
    View All
  </button>
</div>
     
      <div className="flex flex-col gap-2 items-center">
        {deliveryStats.map((stat) => (
          <div 
            key={stat.label} 
            className="flex justify-between items-center px-4 bg-[#EAF7EE]"
            style={{ 
              width: '365.06px',  /* */
              height: '43px',    /* */
              borderRadius: '10px' /* */
            }}
          >
            <span className="text-[#22AD5C] font-semibold text-[13px]">{stat.label}</span>
            <span className="text-[#1A2D42] font-bold text-[14px]">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};


const CombinedDashboard = () => (
  <div className="flex gap-6">
    <OrderStatusCard />
    <DeliveryAgentsCard />
  </div>
);

export default CombinedDashboard;