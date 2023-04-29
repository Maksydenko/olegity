export const classActive = (className, isActive) =>
  `${className}${isActive ? ` ${className}_active` : ""}`;
