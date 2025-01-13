import React from 'react';

function ContactCard({ symbol, title, desc, desc2, className }) {
  return (
    <div className={`flex gap-4 ${className} items-center`}>
      <div className="text-3xl text-white bg-[#19baab] p-4 rounded-full">
        {symbol && React.createElement(symbol)}
      </div>
      <div className="flex flex-col">
        <div className="text-2xl">{title}</div>
        <div className="text-gray-400 text-xl font-poppins">{desc}</div>
        {desc2 && <div className="text-gray-400 font-poppins text-xl">{desc2}</div>}
      </div>
    </div>
  );
}

export default ContactCard;