import React from 'react';

export const SupportTicketsCard = () => {
  const tickets = [
    { id: '#101', date: '2023-10-01', name: 'John Doe / Order' },
    { id: '#111', date: '2023-10-01', name: 'Alan John / Payment' },
  ];

  return (
    <div 
      className="bg-white shadow-sm p-2 flex flex-col shrink-0"
      style={{ 
        width: '353px',       /* */
        height: '156.56px',   /* */
        borderRadius: '12px'  /* */
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4 px-1">
  <h3 className="text-[12px] font-bold text-[#1A2D42] uppercase tracking-wider">
    SUPPORT TICKETS
  </h3>
  <button 
    
    className="text-[#22AD5C] text-[12px] font-bold hover:underline appearance-none border-none outline-none p-0"
    style={{ background: 'none', boxShadow: 'none' }} 
  >
    View All
  </button>
</div>

     
      <div className="flex flex-col gap-3">
        {tickets.map((ticket, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
             
              <div className="w-[40px] h-[34px] bg-[#F1F2F4] rounded-md flex items-center justify-center shrink-0">
                <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.5 0C3.81 0 0 3.81 0 8.5C0 13.19 3.81 17 8.5 17H9V20C13.86 17.66 17 13 17 8.5C17 3.81 13.19 0 8.5 0ZM9.5 14.5H7.5V12.5H9.5V14.5ZM9.5 11H7.5C7.5 7.75 10.5 8 10.5 6C10.5 4.9 9.6 4 8.5 4C7.4 4 6.5 4.9 6.5 6H4.5C4.5 3.79 6.29 2 8.5 2C10.71 2 12.5 3.79 12.5 6C12.5 8.5 9.5 8.75 9.5 11Z" fill="#1A2D42"/>
                </svg>
              </div>
              
             
              <div className="flex flex-col justify-center">
                <span className="text-[11px] text-[#B2B2B2] font-medium leading-none mb-1">
                  {ticket.id} &nbsp; {ticket.date}
                </span>
                <span className="text-[13px] text-[#1A2D42] font-bold leading-none">
                  {ticket.name}
                </span>
              </div>
            </div>

           
            <div 
              className="flex items-center justify-center shrink-0"
              style={{ 
                width: '40.11px',          
                height: '32px',            
                backgroundColor: 'rgba(243, 156, 18, 0.2)', 
                borderRadius: '25px'       
              }}
            >
              <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M17.0205 2.61024C17.1371 2.3599 17.0286 2.06248 16.7783 1.94593L12.6987 0.0467505C12.4483 -0.0697928 12.1509 0.0386745 12.0343 0.289019C11.9178 0.539363 12.0263 0.836784 12.2766 0.953328L15.9029 2.64149L14.2148 6.2678C14.0982 6.51814 14.2067 6.81556 14.457 6.93211C14.7074 7.04865 15.0048 6.94018 15.1213 6.68984L17.0205 2.61024ZM0.171387 8.37866L0.342696 8.8484L16.7385 2.86896L16.5672 2.39922L16.3959 1.92948L7.70986e-05 7.90892L0.171387 8.37866Z" 
                  fill="#1A2D42" 
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportTicketsCard;