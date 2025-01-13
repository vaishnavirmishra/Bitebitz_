import React from 'react';

function Tag({symbol, title, description, className}) {
  return (
    <div className={`bg-opacity-50 bg-gray-200 gap-2 flex items-center rounded-full ${className}`}>
      <div className="icon text-3xl p-6 bg-gray-200 bg-opacity-50 rounded-full">
        {symbol && React.createElement(symbol)} {/* Dynamically create icon */}
      </div>
      
      <div className="content pr-6 pb-2">
        <h2 className='font-semibold'>{title}</h2>
        <p dangerouslySetInnerHTML={{ __html: description }} className='text-xs text-white' />
      </div>
    </div>
  );
}

export default Tag;