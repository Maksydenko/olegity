export const getActiveClassName = (className, isActive) =>
  `${className}${isActive ? ` ${className}_active` : ""}`;
