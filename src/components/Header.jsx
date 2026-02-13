import React from 'react';
import profileImg from '../assets/img.jpg'; 

const Header = ({ onMenuClick }) => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-5 w-full bg-transparent gap-4 md:gap-0">
      
     
      <div className="flex items-center gap-3 shrink-0 w-full md:w-auto overflow-x-auto no-scrollbar">
        
        
        <button 
          onClick={onMenuClick}
          className="md:hidden flex items-center justify-center bg-white min-w-[40px] h-[40px] shadow-sm border border-gray-100 rounded-lg cursor-pointer hover:bg-gray-50 active:scale-95 transition-all"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#27AE60" strokeWidth="2.5">
            <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

      
        <button className="flex items-center gap-2 bg-white px-4 h-[40px] shadow-sm border border-gray-100 rounded-full cursor-pointer hover:bg-gray-50 transition-all whitespace-nowrap">
          <div className="bg-[#FFF8E5] w-7 h-7 flex items-center justify-center rounded-full shrink-0">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5.89474 12.8947C5.89474 13.1879 6.01118 13.469 6.21846 13.6763C6.42574 13.8836 6.70687 14 7 14C7.29313 14 7.57426 13.8836 7.78154 13.6763C7.98882 13.469 8.10526 13.1879 8.10526 12.8947V8.10526H12.8947C13.1879 8.10526 13.469 7.98882 13.6763 7.78154C13.8836 7.57426 14 7.29313 14 7C14 6.70687 13.8836 6.42574 13.6763 6.21846C13.469 6.01118 13.1879 5.89474 12.8947 5.89474H8.10526V1.10526C8.10526 0.812129 7.98882 0.531001 7.78154 0.323724C7.57426 0.116447 7.29313 0 7 0C6.70687 0 6.42574 0.116447 6.21846 0.323724C6.01118 0.531001 5.89474 0.812129 5.89474 1.10526V5.89474H1.10526C0.812129 5.89474 0.531001 6.01118 0.323724 6.21846C0.116447 6.42574 0 6.70687 0 7C0 7.29313 0.116447 7.57426 0.323724 7.78154C0.531001 7.98882 0.812129 8.10526 1.10526 8.10526H5.89474V12.8947Z" fill="#F39C12"/>
            </svg>
          </div>
          <span className="text-[12px] font-bold text-[#3B3B3B]">Add Product</span>
        </button>

       
        <button className="flex items-center gap-2 bg-white px-4 h-[40px] shadow-sm border border-gray-100 rounded-full cursor-pointer hover:bg-gray-50 transition-all whitespace-nowrap">
          <div className="bg-[#FFF8E5] w-7 h-7 flex items-center justify-center rounded-full shrink-0">
            <svg width="15" height="10" viewBox="0 0 15 10" fill="none">
              <path d="M2.14291 7.14286C1.75005 7.14286 1.42862 7.46429 1.42862 7.85714C1.42862 8.25 1.75005 8.57143 2.14291 8.57143C2.53577 8.57143 2.85719 8.25 2.85719 7.85714C2.85719 7.46429 2.53577 7.14286 2.14291 7.14286ZM2.14291 5.71429C3.32862 5.71429 4.28577 6.67143 4.28577 7.85714C4.28577 9.04286 3.32862 10 2.14291 10C0.957195 10 5.14984e-05 9.04286 5.14984e-05 7.85714C5.14984e-05 6.67143 0.957195 5.71429 2.14291 5.71429ZM8.57148 0.714286H12.1429V2.14286H8.57148V0.714286ZM3.57148 0H5.71434V1.42857H3.57148V3.32143L6.07148 6.42857H8.57148V2.85714H11.4286C13.0072 2.85714 14.2858 4.13571 14.2858 5.71429V7.85714H12.8572C12.8572 9.04286 11.9001 10 10.7143 10C9.52862 10 8.57148 9.04286 8.57148 7.85714H5.35719L2.14291 3.82143V1.42857C2.14291 1.04969 2.29342 0.686328 2.56133 0.418419C2.82924 0.15051 3.1926 0 3.57148 0ZM10.7143 8.57143C11.1072 8.57143 11.4286 8.25 11.4286 7.85714H10.0001C10.0001 8.25 10.3215 8.57143 10.7143 8.57143Z" fill="#F39C12"/>
            </svg>
          </div>
          <span className="text-[12px] font-bold text-[#3B3B3B]">Assign Delivery</span>
        </button>
      </div>

      
      <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-6 w-full md:w-auto md:ml-auto">
        
        
        <div className="relative w-full md:w-[505px]">
          <span className="absolute inset-y-0 left-5 flex items-center text-gray-400">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full h-[40px] bg-white pl-12 pr-4 shadow-sm border border-gray-100 outline-none text-[14px] rounded-full focus:border-green-300 transition-all"
          />
        </div>

       
        <div className="flex items-center justify-center md:justify-start gap-4 w-full md:w-auto">
          
          <div className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-full shadow-sm border border-gray-100 cursor-pointer hover:bg-gray-50">
             <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
               <path d="M0 15.971C0 17.5681 1.22131 18.7894 2.81841 18.7894H15.971C17.5681 18.7894 18.7894 17.5681 18.7894 15.971V8.45524H0V15.971ZM15.971 1.87894H14.0921V0.939471C14.0921 0.375789 13.7163 0 13.1526 0C12.5889 0 12.2131 0.375789 12.2131 0.939471V1.87894H6.5763V0.939471C6.5763 0.375789 6.20051 0 5.63683 0C5.07315 0 4.69736 0.375789 4.69736 0.939471V1.87894H2.81841C1.22131 1.87894 0 3.10026 0 4.69736V6.5763H18.7894V4.69736C18.7894 3.10026 17.5681 1.87894 15.971 1.87894Z" fill="#3B3B3B"/>
             </svg>
          </div>

         
          <div className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-full shadow-sm border border-gray-100 cursor-pointer hover:bg-gray-50">
             <svg width="22" height="23" viewBox="0 0 22 23" fill="none">
               <path d="M0.0335881 14.6551C-0.204846 16.2549 0.859713 17.3646 2.16271 17.9178C7.15864 20.0409 14.1102 20.0409 19.1061 17.9178C20.4091 17.3646 21.4737 16.2537 21.2352 14.6551C21.0897 13.6716 20.3654 12.8533 19.8292 12.0535C19.1274 10.9931 19.058 9.8374 19.0569 8.60715C19.058 3.85371 15.2878 0 10.6344 0C5.98102 0 2.21084 3.85371 2.21084 8.60715C2.21084 9.8374 2.14144 10.9942 1.43845 12.0535C0.90337 12.8533 0.180231 13.6716 0.0335881 14.6551Z" fill="#3B3B3B"/>
               <path d="M7.14844 19.5103C7.62748 21.49 9.31982 22.9532 11.3322 22.9532C13.3457 22.9532 15.0359 21.49 15.516 19.5103" fill="#3B3B3B"/>
             </svg>
          </div>

         
          <div className="w-[44px] h-[44px] rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
             <img src={profileImg} alt="User Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;