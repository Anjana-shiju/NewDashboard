import React from 'react';

const DashboardCard = () => {
  return (
    <div 
      className="bg-white shadow-sm border border-gray-100 flex flex-col p-5 overflow-hidden w-full max-w-[382px]"
      style={{ 
        height: 'auto',
        minHeight: '274px',
        borderRadius: '20px'
      }}
    >
      {/* 1. Calendar Strip */}
      <div className="flex justify-between items-center mb-5 px-1">
        {['sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'].map((day, index) => {
          const isSelected = day === 'Mon';
          return (
            <div key={day} className="flex flex-col items-center gap-1">
              <span className={`text-[10px] font-medium ${isSelected ? 'text-[#2ECC71]' : 'text-gray-400'}`}>
                {day}
              </span>
              
              {isSelected ? (
                /* Highlighted: Green Pill */
                <div className="w-[34px] h-[52px] bg-[#2ECC71] rounded-full flex flex-col items-center justify-end pb-1 shadow-sm">
                   <span className="text-white text-[9px] font-bold mb-1">Mon</span>
                   <div className="w-[26px] h-[26px] bg-white rounded-full flex items-center justify-center">
                      <span className="text-[#2ECC71] text-[12px] font-extrabold">03</span>
                   </div>
                </div>
              ) : (
                /* Normal State */
                <div className="w-[34px] h-[52px] bg-[#F8F9FA] rounded-full flex items-center justify-center border border-gray-50">
                  <span className="text-gray-400 text-[13px] font-bold">
                    {String(index + 2).padStart(2, '0')}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 2. Total Sales Section */}
      <div className="flex justify-between items-center mb-6 px-1">
        <div className="flex items-center gap-2">
          {/* Your Custom Dollar SVG */}
          <svg width="11" height="18" viewBox="0 0 13 21" fill="none">
            <path d="M6.49927 0C6.84422 -1.95416e-07 7.17507 0.122889 7.41913 0.341671C7.66318 0.560454 7.80049 0.857234 7.80088 1.16681V3.11062H8.23816C8.86414 3.11011 9.48409 3.22046 10.0625 3.43537C10.6408 3.65028 11.1663 3.96551 11.6086 4.363C12.051 4.76049 12.4016 5.23243 12.6404 5.75175C12.8791 6.27108 13.0013 6.82758 13 7.38938C13 7.69883 12.863 7.99562 12.6192 8.21444C12.3754 8.43326 12.0447 8.55619 11.6998 8.55619C11.355 8.55619 11.0243 8.43326 10.7805 8.21444C10.5367 7.99562 10.3997 7.69883 10.3997 7.38938C10.3997 6.30919 9.43446 5.44425 8.23816 5.44425H4.32456C3.37249 5.44425 2.59884 6.13988 2.59884 6.98775C2.59884 7.62431 2.75825 7.88287 2.87086 8.00756C3.00248 8.15194 3.24379 8.29894 3.77028 8.45906L10.0589 10.3294C10.7609 10.5433 11.5477 10.8675 12.1357 11.5119C12.7441 12.1761 12.9985 13.0187 12.9985 14.0122C12.9974 15.0407 12.5414 16.0266 11.7309 16.7536C10.9203 17.4805 9.82137 17.889 8.67544 17.8894H7.79941V19.8332C7.79941 20.1426 7.66243 20.4394 7.41861 20.6582C7.17479 20.8771 6.84409 21 6.49927 21C6.15445 21 5.82375 20.8771 5.57993 20.6582C5.3361 20.4394 5.19912 20.1426 5.19912 19.8332V17.8894H4.76038C4.13452 17.8897 3.51473 17.7792 2.93652 17.5643C2.35831 17.3493 1.83306 17.034 1.39084 16.6365C0.948628 16.2391 0.59815 15.7672 0.359486 15.2479C0.120822 14.7287 -0.00133588 14.1723 1.10177e-05 13.6106C1.10177e-05 13.3012 0.13699 13.0044 0.380814 12.7856C0.624638 12.5667 0.955335 12.4438 1.30016 12.4438C1.64497 12.4438 1.97567 12.5667 2.2195 12.7856C2.46332 13.0044 2.6003 13.3012 2.6003 13.6106C2.6003 14.6908 3.56407 15.5557 4.76184 15.5557H8.67544C9.62605 15.5557 10.3997 14.8601 10.3997 14.0122C10.3997 13.3757 10.2418 13.1171 10.1277 12.9924C9.99606 12.8481 9.75475 12.7011 9.22826 12.5409L2.94106 10.6706C2.23907 10.4567 1.45079 10.1325 0.862874 9.48806C0.254483 8.82394 1.10177e-05 7.98131 1.10177e-05 6.98775C0.00117387 5.95911 0.457307 4.97296 1.26819 4.24597C2.07908 3.51898 3.17838 3.11062 4.32456 3.11062H5.19912V1.16812C5.19951 0.858546 5.33682 0.561767 5.58087 0.342985C5.82493 0.124202 6.15578 0.00131221 6.50073 0.0013124" fill="#2ECC71"/>
          </svg>
          <span className="text-[11px] font-bold text-[#1A2D42] tracking-tight uppercase">TOTAL SALES</span>
        </div>
        <div className="flex items-center gap-3">
  <span className="text-[20px] font-black text-gray-900 leading-none">₹ 90K</span>
  {/* Green box ഒഴിവാക്കി, ടെക്സ്റ്റ് സൈസ് കൂട്ടിയത് */}
  <div className="flex items-center gap-1 text-[#2ECC71] text-[14px] font-bold">
    <span className="text-[15px]">▲</span> 5%
  </div>
</div>
      </div>

      {/* 3. Stats Grid */}
      <div className="grid grid-cols-3 gap-3">
        
        {/* Customers */}
        <div className="bg-[#FFFDF2] p-3 rounded-[18px] border border-[#FFF9E0] relative h-[95px] flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="bg-[#F2C94C]/15 w-7 h-7 rounded-full flex items-center justify-center">
              <svg width="15" height="12" viewBox="0 0 17 12" fill="none"><path d="M14.5313 9.70322C15.0635 9.70322 15.4857 9.3936 15.8653 8.96039C16.643 8.07294 15.3665 7.36297 14.8797 7.01654C14.3851 6.66353 13.8323 6.46303 13.2725 6.41636M12.5629 5.10161C13.0334 5.10161 13.4846 4.92846 13.8173 4.62026C14.15 4.31206 14.3369 3.89404 14.3369 3.45818C14.3369 3.02231 14.15 2.6043 13.8173 2.2961C13.4846 1.98789 13.0334 1.81475 12.5629 1.81475M2.07945 9.70322C1.54726 9.70322 1.12505 9.3936 0.745423 8.96039C-0.0322847 8.07294 1.24426 7.36297 1.73104 7.01654C2.22562 6.66353 2.77768 6.46237 3.33825 6.41636M3.69305 5.10161C3.22256 5.10161 2.77135 4.92846 2.43866 4.62026C2.10598 4.31206 1.91908 3.89404 1.91908 3.45818C1.91908 3.02231 2.10598 2.6043 2.43866 2.2961C2.77135 1.98789 3.22256 1.81475 3.69305 1.81475M5.52662 7.80407C4.80142 8.21953 2.90044 9.06754 4.05778 10.1285C4.62474 10.6472 5.25414 11.018 6.04675 11.018H10.5654C11.358 11.018 11.9874 10.6472 12.553 10.1285C13.711 9.06754 11.81 8.21953 11.0848 7.80407C10.2495 7.32682 9.28746 7.07408 8.30607 7.07408C7.32469 7.07408 6.36263 7.32682 5.52733 7.80407M10.7889 2.8008C10.7889 3.10295 10.7247 3.40214 10.5999 3.68128C10.4751 3.96043 10.2921 4.21407 10.0615 4.42772C9.83088 4.64137 9.5571 4.81085 9.25578 4.92647C8.95446 5.0421 8.63151 5.10161 8.30536 5.10161C7.97922 5.10161 7.65627 5.0421 7.35495 4.92647C7.05363 4.81085 6.77985 4.64137 6.54923 4.42772C6.31861 4.21407 6.13567 3.96043 6.01086 3.68128C5.88605 3.40214 5.82181 3.10295 5.82181 2.8008C5.82181 2.19059 6.08347 1.60537 6.54923 1.17389C7.01498 0.742406 7.64668 0.5 8.30536 0.5C8.96404 0.5 9.59575 0.742406 10.0615 1.17389C10.5273 1.60537 10.7889 2.19059 10.7889 2.8008Z" stroke="#F2C94C" strokeWidth="1.2"/></svg>
            </div>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 9L9 1M9 1H3M9 1V7" stroke="#999" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div>
            <p className="text-[9px] font-bold text-gray-400 uppercase">Customers</p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-[16px] font-black text-gray-900 leading-none">1K</span>
              <span className="text-[#2ECC71] text-[9px] font-bold leading-none">▲ 5%</span>
            </div>
          </div>
        </div>

        {/* Total Orders */}
        <div className="bg-[#F8F4FF] p-3 rounded-[18px] border border-[#F0E8FF] relative h-[95px] flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="bg-[#9B51E0]/15 w-7 h-7 rounded-full flex items-center justify-center">
              <svg width="15" height="13" viewBox="0 0 15 13" fill="none"><path d="M1.02553 2.12273H14.3359L12.2342 8.61269H3.12716L1.02553 2.12273ZM1.02553 2.12273L0.500122 0.500244M6.62989 10.8842C6.62989 11.1424 6.51918 11.39 6.32211 11.5725C6.12504 11.7551 5.85776 11.8577 5.57907 11.8577C5.30038 11.8577 5.0331 11.7551 4.83603 11.5725C4.63896 11.39 4.52825 11.1424 4.52825 10.8842M10.8332 10.8842C10.8332 11.1424 10.7224 11.39 10.5254 11.5725C10.3283 11.7551 10.061 11.8577 9.78234 11.8577C9.50364 11.8577 9.23636 11.7551 9.0393 11.5725C8.84223 11.39 8.73152 11.1424 8.73152 10.8842" stroke="#9B51E0" strokeWidth="1.2"/></svg>
            </div>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 9L9 1M9 1H3M9 1V7" stroke="#999" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div>
            <p className="text-[9px] font-bold text-gray-400 uppercase">Total Orders</p>
            <div className="flex items-center gap-6 mt-0.5"> {/* Gap added here */}
              <span className="text-[16px] font-black text-gray-900 leading-none">800</span>
              <span className="text-[#EB5757] text-[9px] font-bold leading-none">5%</span>
            </div>
          </div>
        </div>

        {/* Inventory */}
        <div className="bg-[#FFF2F2] p-3 rounded-[18px] border border-[#FFE8E8] relative h-[95px] flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="bg-[#EB5757]/15 w-7 h-7 rounded-full flex items-center justify-center">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.22896 12.0295C5.73098 12.0295 5.25492 11.8434 4.30341 11.4723C1.93467 10.548 0.75 10.0861 0.75 9.30835V3.87556M6.22896 12.0295C6.72693 12.0295 7.20299 11.8434 8.15451 11.4723C10.5232 10.548 11.7079 10.0861 11.7079 9.30835V3.87556M6.22896 12.0295V6.40669M0.75 3.87556C0.75 4.22128 1.23824 4.43954 2.2141 4.87549L3.99172 5.6707C5.08994 6.16136 5.63845 6.40669 6.22896 6.40669M0.75 3.87556C0.75 3.53041 1.23824 3.31215 2.2141 2.87619L3.18509 2.44193M11.7079 3.87556C11.7079 4.22128 11.2197 4.43954 10.2438 4.87549L8.4662 5.6707C7.36797 6.16136 6.81947 6.40669 6.22896 6.40669M11.7079 3.87556C11.7079 3.53041 11.2197 3.31215 10.2438 2.87619L9.27282 2.44193" stroke="#EB5757" strokeWidth="1.2"/></svg>
            </div>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 9L9 1M9 1H3M9 1V7" stroke="#999" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div>
            <p className="text-[9px] font-bold text-gray-400 uppercase">Inventory</p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-[16px] font-black text-gray-900 leading-none">25</span>
              {/* Your Custom Alert SVG */}
              <svg width="14" height="12" viewBox="0 0 17 14" fill="none">
                <path d="M9.33458 0.817647C9.2257 0.591301 9.05337 0.396094 8.83551 0.252308C8.61765 0.108522 8.36221 0.0214027 8.09572 0C7.83065 0.0226874 7.5769 0.110401 7.36057 0.254112C7.14425 0.397824 6.97317 0.592342 6.86495 0.817647L0.290037 11.3646C-0.390126 12.4522 0.16858 13.3449 1.52081 13.3449H14.6706C16.0229 13.3449 16.5816 12.4522 15.9014 11.3646L9.33458 0.817647ZM8.90543 11.0945H7.286V9.59423H8.90543V11.0945ZM8.90543 8.09396H7.286V3.59315H8.90543V8.09396Z" fill="#E74C3C"/>
              </svg>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardCard;