import React from 'react';

const RoundedButton = ({ label, icon: Icon }) => {
  return (
    <button className="bg-white text-black px-6 py-3 flex items-center gap-2 rounded-full hover:bg-purple transition-all duration-300 ease-in-out transform hover:text-white group">
      {Icon && (
        <span className="rotate-[-20deg] transition-transform duration-300 ease-in-out group-hover:rotate-[0deg]">
          <Icon size={18} />
        </span>
      )}
      {label}
    </button>
  );
};

export default RoundedButton;
