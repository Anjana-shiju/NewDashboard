import React from 'react';

const InventoryLevelsCard = () => {
  // ... (inventoryData ഉം scalePoints ഉം പഴയത് തന്നെ)
  const inventoryData = [
    { label: 'Personal care & Hygiene', inStock: 400, lowStock: 30, outOfStock: 10 },
    { label: 'Grocery & Kitchen', inStock: 800, lowStock: 50, outOfStock: 20 },
    { label: 'Baby & Kids', inStock: 300, lowStock: 20, outOfStock: 5 },
    { label: 'Household Essentials', inStock: 500, lowStock: 40, outOfStock: 15 },
    { label: 'Health & Wellness', inStock: 200, lowStock: 10, outOfStock: 5 },
    { label: 'Home & Living', inStock: 250, lowStock: 25, outOfStock: 10 },
    { label: 'Electronics & Accessories', inStock: 350, lowStock: 15, outOfStock: 5 },
    { label: 'Office & School', inStock: 150, lowStock: 20, outOfStock: 5 },
    { label: 'Seasonal & Holiday', inStock: 100, lowStock: 10, outOfStock: 5 },
    { label: 'Pet Care', inStock: 200, lowStock: 15, outOfStock: 5 },
  ];

  const scalePoints = [0, 200, 400, 600, 800, 1000];

  return (
    <div 
      className="bg-white shadow-sm p-5 flex flex-col shrink-0 rounded-[12px] max-w-full overflow-hidden"
      style={{ 
        width: '505.92px',     
        height: '390.13px'
      }}
    >
      <h3 className="text-[12px] font-bold text-[#1A2D42] uppercase tracking-wider mb-4">
        INVENTORY LEVELS
      </h3>

      <div className="flex justify-center gap-4 mb-3 text-[11px] font-medium text-[#4A4A4A]">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#27AE60] rounded-sm"></div> In Stock
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#F39C12] rounded-sm"></div> Low Stock
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#E74C3C] rounded-sm"></div> Out of Stock
        </div>
      </div>

      {/* ഡെസ്ക്ടോപ്പിൽ (lg) overflow-hidden നൽകി സ്ക്രോൾ ബാർ കളഞ്ഞു */}
      <div className="flex-1 flex flex-col min-h-0 overflow-x-auto lg:overflow-x-hidden no-scrollbar">
        {/* മൊബൈലിൽ മാത്രം min-w കൊടുക്കുന്നു */}
        <div className="flex-1 relative min-w-[460px] lg:min-w-0">
          
          <div className="absolute inset-0 flex justify-between ml-[140px] pointer-events-none pr-1">
            {scalePoints.map((point) => (
              <div key={point} className="h-full border-r border-[#E5E7EB] w-0"></div>
            ))}
          </div>

          <div className="relative z-10 space-y-[8px]">
            {inventoryData.map((item, index) => (
              <div key={index} className="flex items-center h-[18px]">
                <span className="text-[10px] text-[#4A4A4A] w-[130px] shrink-0 text-right mr-3 font-medium truncate">
                  {item.label}
                </span>
                <div className="flex-1 flex h-full rounded-sm overflow-hidden bg-transparent pr-1">
                  <div 
                    style={{ width: `${(item.inStock / 1000) * 100}%` }} 
                    className="bg-[#27AE60] h-full flex items-center justify-end pr-1"
                  >
                    <span className="text-[8px] text-white font-bold">{item.inStock}</span>
                  </div>
                  <div style={{ width: `${(item.lowStock / 1000) * 100}%` }} className="bg-[#F39C12] h-full"></div>
                  <div style={{ width: `${(item.outOfStock / 1000) * 100}%` }} className="bg-[#E74C3C] h-full"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between ml-[140px] text-[10px] text-[#9CA3AF] font-medium pt-2 pb-1 pr-1">
            {scalePoints.map(val => (
              <span key={val} className="w-0 flex justify-center whitespace-nowrap">
                {val}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryLevelsCard;