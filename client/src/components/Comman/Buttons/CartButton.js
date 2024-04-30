import React from "react";

function CartButton({ type, children, color, bgColor,onClick, className, ...rest }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-${color}-700  border border-${color}-200 hover:bg-${bgColor} focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:border-${color}-500 dark:text-${color}-500 dark:hover:text-${color}-600  border-3 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default CartButton;
