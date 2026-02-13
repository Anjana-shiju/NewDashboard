import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';

const GenerateReportsCard = () => {
  const reportTypes = [
    { id: 'payment', label: 'Payment Reports', checked: true },
    { id: 'order', label: 'Order Reports', checked: false },
    { id: 'inventory', label: 'Inventory Reports', checked: false },
    { id: 'customer', label: 'Customer Reports', checked: false },
    { id: 'delivery', label: 'Delivery Reports', checked: false },
    { id: 'promotion', label: 'Promotion Reports', checked: false },
  ];

  return (
    <div 
      className="bg-white shadow-sm border border-gray-100 flex flex-col overflow-hidden"
      style={{ 
        width: '353px', 
        height: '337.65px', 
        borderRadius: '12px' 
      }}
    >
      {/* Content Section */}
      <div className="p-6 flex-1">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-[12px] font-bold text-[#1A2D42] uppercase tracking-wide">
            Generate Reports
          </h3>
          <ArrowUpRight className="w-5 h-5 text-[#F39C12] cursor-pointer" />
        </div>

        <div>
          <p className="text-[14px] font-bold text-[#1A2D42] mb-4">Select Report Type</p>
          
          {/* Report List */}
          <div className="space-y-3">
            {reportTypes.map((report) => (
              <div key={report.id} className="flex justify-between items-center">
                <span className="text-[13px] text-gray-600 font-medium">{report.label}</span>
                
                {/* Checkbox with #27AE6040 background */}
                <div 
                  className="w-[18px] h-[18px] rounded flex items-center justify-center border-none"
                  style={{ backgroundColor: '#27AE6040' }}
                >
                  {report.checked && <Check size={12} className="text-[#27AE60]" strokeWidth={4} />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons - Fixed sizing and spacing */}
      <div className="px-6 pb-5 flex justify-between items-center">
        {/* Share Button */}
        <button 
          className="flex items-center justify-center font-bold text-[13px] transition-all hover:bg-orange-50"
          style={{ 
            width: '145px', // Adjusted to fit with gap
            height: '30px', 
            border: '1.5px solid #F39C12', 
            color: '#F39C12', 
            borderRadius: '6px',
            backgroundColor: '#FFFFFF'
          }}
        >
          Share
        </button>

        {/* Download Button */}
        <button 
          className="flex items-center justify-center font-bold text-[13px] text-white transition-all hover:opacity-90"
          style={{ 
            width: '145px', 
            height: '30px', 
            backgroundColor: '#F39C12', 
            borderRadius: '6px'
          }}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default GenerateReportsCard;