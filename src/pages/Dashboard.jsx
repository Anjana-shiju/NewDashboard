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
      
      {/* 1. SIDEBAR: Mobile-il slide aakum, Desktop-il (lg) fixed aayi nilkkum */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />

      {/* 2. MAIN AREA: lg:pl-[260px] add cheythittundu. Ithu kaaranam desktop-il content sidebar-inu purakil pokilla */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden lg:pl-[260px]">
        
        {/* NAVBAR: Hamburger trigger */}
        <Navbar onMenuClick={() => setIsSidebarOpen(true)} />

        <main className="p-4 md:p-8 overflow-y-auto no-scrollbar">
          {/* TOP SECTION: Stats and Reports */}
          <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
            <div className="flex flex-col gap-6 w-full md:w-auto">
              <div className="bg-white shadow-sm overflow-hidden shrink-0 w-full md:w-[382px] h-[274px] rounded-[20px]">
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

          {/* BOTTOM SECTION: Inventory and Orders */}
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="shrink-0 w-full md:w-auto overflow-x-auto no-scrollbar">
              <InventoryLevelsCard />
            </div>
            <div className="shrink-0 w-full md:w-auto overflow-x-auto no-scrollbar">
              <OrderDashboard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;