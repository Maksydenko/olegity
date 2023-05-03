export const getModifierClassName = (
  isActive,
  className,
  modifier = "active"
) => `${className}${isActive ? ` ${className}_${modifier}` : ""}`;
