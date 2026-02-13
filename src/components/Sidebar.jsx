import React from 'react';
import LogoImage from '../assets/logooos.png'; 

// 1. Props sweekarikunnu (isOpen, onClose)
const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Sidebar - Transition and Visibility Logic */}
      <aside className={`
        fixed left-0 top-0 h-screen bg-white border-r border-gray-100 z-50 p-8 flex flex-col 
        transition-transform duration-300 w-[260px]
        lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        
        {/* LOGO AREA with Close Button for Mobile */}
        <div className="mb-8 flex justify-between items-center w-full">
          <img src={LogoImage} alt="Logo" className="h-14 w-auto object-contain" />
          
          {/* Close Button - Padding and Margin adjusted to stop cutting off */}
          <button 
            className="lg:hidden text-gray-400 p-2 hover:bg-gray-50 rounded-full transition-colors mr-[-8px]" 
            onClick={onClose}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* NAVIGATION AREA - Ningalude same Icons and Style */}
        <nav className="flex flex-col h-full overflow-y-auto no-scrollbar">
          
          {/* DASHBOARD */}
          <div 
            style={{ 
              background: 'linear-gradient(90deg, #E5FFF0 27%, #27AE60 150%)',
              width: '164.63px',
              height: '49.28px'
            }}
            className="flex items-center gap-4 px-4 py-3 rounded-[6px] cursor-pointer text-[#27AE60] font-bold shadow-sm mb-10 shrink-0"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            <span className="text-[16px]">Dashboard</span>
          </div>

          {/* OTHER ITEMS */}
          <div className="space-y-6 flex-1">
            {/* PRODUCTS */}
            <div className="flex items-center gap-4 px-4 py-1 text-[#8F8F8F] cursor-pointer hover:text-[#27AE60] transition-all">
              <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
                <path d="M19.5 6.06152V17.0312L10 22.5166L0.5 17.0312V6.06152L10 0.576172L19.5 6.06152ZM14.124 4.65918L7.58301 8.45312L6.83594 8.88574L7.58398 9.31836L9.75 10.5684L10 10.7129L10.25 10.5684L16.8057 6.78418L17.5557 6.35059L16.8057 5.91797L14.625 4.6582L14.374 4.51367L14.124 4.65918ZM9.75 2.13281L3.19434 5.91797L2.44434 6.35059L3.19434 6.78418L5.36426 8.03613L5.61523 8.18164L5.86523 8.03613L12.4053 4.24219L13.1533 3.80957L12.4053 3.37695L10.25 2.13281L10 1.98828L9.75 2.13281ZM9.38867 11.7715L9.13867 11.627L6.91699 10.3438L6.16699 9.91113V18.8926L6.41699 19.0361L8.63867 20.3193L9.38867 20.7529V11.7715ZM4.94434 9.20508L4.69434 9.06152L2.47266 7.77832L1.72266 7.34473V16.3262L1.97266 16.4707L4.19434 17.7539L4.94434 18.1865V9.20508Z" stroke="currentColor"/>
              </svg>
              <span className="text-[16px]">Products</span>
            </div>

            {/* PROMOTION */}
            <div className="flex items-center gap-4 px-4 py-1 text-[#8F8F8F] cursor-pointer hover:text-[#27AE60] transition-all">
              <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
                <path d="M12.676 1.66057L6.024 4.85457C5.52193 5.09926 4.9509 5.16353 4.407 5.03657C4.17752 4.97965 3.94562 4.93294 3.712 4.89657C1.887 4.68957 0.75 6.13357 0.75 7.79457V8.70657C0.75 10.3666 1.887 11.8116 3.712 11.6026C3.94587 11.568 4.17783 11.5216 4.407 11.4636C4.95101 11.3369 5.52205 11.4015 6.024 11.6466L12.676 14.8396C14.203 15.5726 14.967 15.9396 15.818 15.6536C16.67 15.3676 16.962 14.7546 17.546 13.5286C18.3385 11.8819 18.7501 10.078 18.7501 8.25057C18.7501 6.42315 18.3385 4.61919 17.546 2.97257C16.962 1.74657 16.67 1.13257 15.818 0.847569C14.967 0.561569 14.203 0.926569 12.676 1.66057Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.24986 11.2495V5.24951M9.20786 19.5195L7.71686 20.7495C4.35486 18.0835 4.76586 16.8125 4.76586 11.7495H5.89986C6.35986 14.6095 7.44486 15.9655 8.94286 16.9465C9.86486 17.5505 10.0549 18.8215 9.20786 19.5195Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[16px]">Promotion</span>
            </div>

            {/* ORDERS */}
            <div className="flex items-center gap-4 px-4 py-1 text-[#8F8F8F] cursor-pointer hover:text-[#27AE60] transition-all">
              <svg width="20" height="19" viewBox="0 0 20 19" fill="none">
                <path d="M8.94141 16.2637C9.03367 16.2638 9.14724 16.3486 9.14746 16.502C9.14746 16.9644 8.97109 17.4042 8.66504 17.7246C8.35975 18.0441 7.95066 18.2188 7.5293 18.2188C7.10792 18.2187 6.69882 18.0441 6.39355 17.7246C6.0875 17.4042 5.91211 16.9644 5.91211 16.502C5.91233 16.3485 6.02586 16.2637 6.11816 16.2637ZM14.5879 16.2637C14.6802 16.2637 14.7937 16.3485 14.7939 16.502C14.7939 16.9644 14.6185 17.4042 14.3125 17.7246C14.0073 18.0441 13.5981 18.2187 13.1768 18.2188C12.7554 18.2188 12.3463 18.044 12.041 17.7246C11.735 17.4042 11.5586 16.9644 11.5586 16.502C11.5588 16.3485 11.6724 16.2637 11.7646 16.2637C11.8569 16.2637 11.9705 16.3485 11.9707 16.502C11.9707 16.8232 12.0921 17.1362 12.3154 17.3701C12.5396 17.6048 12.8494 17.7412 13.1768 17.7412C13.504 17.7411 13.813 17.6047 14.0371 17.3701C14.2605 17.1362 14.3818 16.8233 14.3818 16.502C14.3821 16.3486 14.4956 16.2638 14.5879 16.2637ZM0.65332 0.508789C0.740792 0.481413 0.86147 0.525689 0.901367 0.664062L4.19922 12.1328L4.30273 12.4941H16.2344L16.3428 12.1406L19.0957 3.13574L19.3467 2.97168C19.4449 3.00251 19.5312 3.12953 19.4893 3.27637L16.666 13.1289C16.6342 13.2397 16.5461 13.2929 16.4707 13.293H4.23535L0.510742 0.813477C0.468728 0.666588 0.555105 0.539633 0.65332 0.508789Z" fill="currentColor" />
              </svg>
              <span className="text-[16px]">Orders</span>
            </div>

            {/* MORE */}
            <div className="flex items-center gap-4 px-4 py-1 text-[#8F8F8F] cursor-pointer hover:text-[#27AE60] transition-all mt-auto pb-10">
              <svg width="22" height="17" viewBox="0 0 22 17" fill="none">
                <path d="M1 15.2857H12.4286M1 8.14286H21M1 1H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[16px]">More</span>
            </div>
          </div>
        </nav>
      </aside>

      {/* 3. Backdrop for Mobile: Sidebar open aayirikumpol background click cheythaal close aakan */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-[1px] z-40 lg:hidden" 
          onClick={onClose}
        />
      )}
    </>
  );
};

export default Sidebar;