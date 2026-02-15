import React, { useState } from 'react';
import DashboardStats from '../components/1_statscard';
import SalesOverTimeCard from '../components/2_sales';
import GenerateReportsCard from '../components/3_report';
import Navbar from '../components/Header';
import Sidebar from '../components/Sidebar';
import { OrderStatusCard, DeliveryAgentsCard } from '../components/45_order';
import SupportTicketsCard from '../components/6_supportcard';
import InventoryLevelsCard from '../components/7_inventory';
import OrderDashboard from '../components/8_recentorders';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-[#F1F4F5] overflow-hidden relative"> 
      
     
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />

     
      <div className="flex-1 flex flex-col min-w-0 lg:pl-[260px] overflow-x-hidden">
        
      
        <Navbar onMenuClick={() => setIsSidebarOpen(true)} />

        <main className="p-4 md:p-8 overflow-y-auto no-scrollbar">
         
          <div className="flex flex-col md:flex-row items-start gap-3 mb-6">
            <div className="flex flex-col gap-6 w-full md:w-auto">
              <div className="bg-white shadow-sm overflow-hidden shrink-0 w-full md:w-[400px] h-[274px] rounded-[20px]">
                <DashboardStats />
              </div>
              <OrderStatusCard /> 
            </div>

            <div className="flex flex-col gap-6 w-full md:w-auto">
              <div className="bg-white shadow-sm overflow-hidden shrink-0 w-full md:w-[382px] h-[274px] rounded-[20px]">
                <SalesOverTimeCard />
              </div>
              <DeliveryAgentsCard /> 
            </div>

            <div className="flex flex-col gap-2 w-full md:w-[353px]">
              <div className="bg-white shadow-sm overflow-hidden border border-gray-100 shrink-0 w-full h-[340.65px] rounded-[15px]">
                <GenerateReportsCard />
              </div>
              <SupportTicketsCard />
            </div>
          </div>

         
          {/* Dashboard.jsx ലെ അവസാനത്തെ സെക്ഷൻ ഇതുപോലെ മാറ്റുക */}
<div className="flex flex-col lg:flex-row items-start lg:items-end gap-6 lg:gap-3"> 
  <div className="w-full lg:w-auto shrink-0">
    <InventoryLevelsCard />
  </div>
  <div className="w-full lg:w-auto shrink-0">
    <OrderDashboard />
  </div>
</div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;