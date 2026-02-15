import React from 'react';

const OrderDashboard = () => {
  const orders = [
    { id: '#123655', name: 'John Doe', amount: '₹2500', status: 'success' },
    { id: '#123655', name: 'John Doe', amount: '₹3000', status: 'warning' },
    { id: '#123655', name: 'John Doe', amount: '₹250', status: 'delivery' },
    { id: '#123655', name: 'John Doe', amount: '₹500', status: 'error' },
    { id: '#123655', name: 'John Doe', amount: '₹10,000', status: 'success' },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'success':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.7749 23.5499C5.27164 23.5499 0 18.2783 0 11.7749C0 5.27164 5.27164 0 11.7749 0C18.2783 0 23.5499 5.27164 23.5499 11.7749C23.5499 18.2783 18.2783 23.5499 11.7749 23.5499ZM10.389 14.2948L7.13326 11.0367L5.88747 12.2824L9.56008 15.9574C9.78089 16.1782 10.0803 16.3022 10.3926 16.3022C10.7048 16.3022 11.0042 16.1782 11.2251 15.9574L18.2335 8.95132L16.983 7.70082L10.389 14.2948Z" fill="#27AE60"/>
          </svg>
        );
      case 'warning':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M11.7749 17.6624C12.1086 17.6624 12.3884 17.5494 12.6145 17.3233C12.8406 17.0972 12.9532 16.8178 12.9524 16.4849C12.9516 16.1521 12.8386 15.8726 12.6133 15.6465C12.388 15.4205 12.1086 15.3074 11.7749 15.3074C11.4413 15.3074 11.1619 15.4205 10.9366 15.6465C10.7113 15.8726 10.5982 16.1521 10.5974 16.4849C10.5967 16.8178 10.7097 17.0976 10.9366 17.3245C11.1634 17.5513 11.4429 17.664 11.7749 17.6624ZM11.7749 12.9524C12.1086 12.9524 12.3884 12.8394 12.6145 12.6133C12.8406 12.3872 12.9532 12.1078 12.9524 11.7749V7.06496C12.9524 6.73134 12.8394 6.45188 12.6133 6.22659C12.3872 6.00129 12.1078 5.88826 11.7749 5.88747C11.4421 5.88669 11.1626 5.99972 10.9366 6.22659C10.7113 6.45345 10.5974 6.73291 10.5974 7.06496V11.7749C10.5974 12.1086 10.7105 12.3884 10.9366 12.6145C11.1626 12.8406 11.4421 12.9532 11.7749 12.9524ZM11.7749 23.5499C10.1461 23.5499 8.61533 23.2406 7.18271 22.622C5.7501 22.0034 4.50392 21.1647 3.44417 20.1057C2.38443 19.0468 1.54566 17.8006 0.927867 16.3672C0.310075 14.9338 0.000786486 13.403 1.4905e-06 11.7749C-0.000783505 10.1469 0.308505 8.61612 0.927867 7.18271C1.54723 5.74931 2.386 4.50313 3.44417 3.44417C4.50235 2.38521 5.74853 1.54644 7.18271 0.927865C8.6169 0.309289 10.1476 0 11.7749 0C13.4022 0 14.933 0.309289 16.3672 0.927865C17.8014 1.54644 19.0475 2.38521 20.1057 3.44417C21.1639 4.50313 22.003 5.74931 22.6232 7.18271C23.2433 8.61612 23.5522 10.1469 23.5499 11.7749C23.5475 13.403 23.2382 14.9338 22.622 16.3672C22.0058 17.8006 21.167 19.0468 20.1057 20.1057C19.0444 21.1647 17.7982 22.0038 16.3672 22.6232C14.9361 23.2426 13.4054 23.5515 11.7749 23.5499Z" fill="#F39C12"/>
          </svg>
        );
      case 'delivery':
        return (
          <div className="bg-[#16A085] rounded-full w-6 h-6 flex items-center justify-center">
            <svg width="13" height="9" viewBox="0 0 13 9" fill="none">
              <path d="M1.85909 5.7277C1.51826 5.7277 1.2394 5.98545 1.2394 6.30047C1.2394 6.6155 1.51826 6.87324 1.85909 6.87324C2.19991 6.87324 2.47877 6.6155 2.47877 6.30047C2.47877 5.98545 2.19991 5.7277 1.85909 5.7277ZM1.85909 4.58216C2.88776 4.58216 3.71813 5.34967 3.71813 6.30047C3.71813 7.25127 2.88776 8.01878 1.85909 8.01878C0.830415 8.01878 4.1008e-05 7.25127 4.1008e-05 6.30047C4.1008e-05 5.34967 0.830415 4.58216 1.85909 4.58216ZM7.43622 0.57277H10.5346V1.71831H7.43622V0.57277ZM3.09845 0H4.9575V1.14554H3.09845V2.66338L5.26734 5.15493H7.43622V2.29108H9.91495C11.2844 2.29108 12.3937 3.31634 12.3937 4.58216V6.30047H11.1543C11.1543 7.25127 10.3239 8.01878 9.29527 8.01878C8.2666 8.01878 7.43622 7.25127 7.43622 6.30047H4.64765L1.85909 3.06432V1.14554C1.85909 0.841724 1.98966 0.550351 2.22209 0.335521C2.45451 0.12069 2.76975 0 3.09845 0ZM9.29527 6.87324C9.63609 6.87324 9.91495 6.6155 9.91495 6.30047H8.67559C8.67559 6.6155 8.95444 6.87324 9.29527 6.87324Z" fill="white"/>
            </svg>
          </div>
        );
      case 'error':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.7749 23.5499C14.8979 23.5499 17.8929 22.3093 20.1011 20.1011C22.3093 17.8929 23.5499 14.8979 23.5499 11.7749C23.5499 8.65204 22.3093 5.65703 20.1011 3.4488C17.8929 1.24057 14.8979 0 11.7749 0C8.65204 0 5.65703 1.24057 3.4488 3.4488C1.24057 5.65703 0 8.65204 0 11.7749C0 14.8979 1.24057 17.8929 3.4488 20.1011C5.65703 22.3093 8.65204 23.5499 11.7749 23.5499ZM8.39946 6.31922C8.12045 6.05923 7.75141 5.91769 7.37009 5.92442C6.98878 5.93115 6.62496 6.08562 6.35529 6.35529C6.08562 6.62496 5.93115 6.98878 5.92442 7.37009C5.91769 7.75141 6.05923 8.12045 6.31922 8.39946L15.1504 17.2307C15.4294 17.4907 15.7985 17.6322 16.1798 17.6255C16.5611 17.6187 16.9249 17.4643 17.1946 17.1946C17.4643 16.9249 17.6187 16.5611 17.6255 16.1798C17.6322 15.7985 17.4907 15.4294 17.2307 15.1504L8.39946 6.31922Z" fill="#E74C3C"/>
          </svg>
        );
      default: return null;
    }
  };

  return (
    <div className="w-full">
      
     
      <div className="flex gap-6 mb-5 overflow-x-auto no-scrollbar">
        <button style={{ width: '200.85px', height: '40px', backgroundColor: 'rgba(39, 174, 96, 0.25)' }}
                className="flex-shrink-0 border border-[#27AE60] rounded-[12px] font-bold text-gray-800 text-sm uppercase">
          Recent Orders
        </button>
        <button style={{ width: '200.85px', height: '40px' }}
                className="flex-shrink-0 bg-white border border-gray-100 rounded-[12px] font-bold text-gray-500 text-sm uppercase shadow-sm">
          On-Time Delivery
        </button>
        <button style={{ width: '200.85px', height: '40px' }}
                className="flex-shrink-0 bg-white border border-gray-100 rounded-[12px] font-bold text-gray-500 text-sm uppercase shadow-sm">
          Delivery Updates
        </button>
      </div>

     
      <div style={{ width: '650.24px' }}
           className="bg-white rounded-[12px] shadow-sm flex flex-col max-w-full overflow-hidden h-fit">
  
       
        <div className="overflow-x-auto lg:overflow-hidden no-scrollbar">
    
         
          <div className="min-w-[600px] md:min-w-full grid grid-cols-4 p-6 border-b border-gray-50 text-gray-800 font-semibold text-lg">
            <span>Order Id</span>
            <span>Name</span>
            <span>Amount</span>
            <span className="text-center">Status</span>
          </div>

         
          <div className="min-w-[600px] md:min-w-full px-6 pb-2">
            {orders.map((order, index) => (
              <div key={index} className="grid grid-cols-4 items-center py-3 text-gray-600 font-medium border-b border-gray-50 last:border-0">
                <span>{order.id}</span>
                <span>{order.name}</span>
                <span>{order.amount}</span>
                <div className="flex justify-center">
                  {getStatusIcon(order.status)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDashboard;