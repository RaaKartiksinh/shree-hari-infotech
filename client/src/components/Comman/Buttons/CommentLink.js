import React from "react";
import { Link as RouterLink } from "react-router-dom";

function Link({ to, className, children, ...rest }) {
  return (
    <RouterLink to={to} className={className} {...rest}>
      {children}
    </RouterLink>
  );
}

function CommentLink({ to, className, children, ...rest }) {
  return (
    <div
      className={`mt-2 mb-2 text-center font-medium text-gray-800 hover:text-gray-800 dark:text-gray-500 ${className}`}
    >
      <Link
        to={to}
        className="text-base flex items-center justify-center"
        {...rest}
      >
        {children}
      </Link>
    </div>
  );
}

export default CommentLink;
