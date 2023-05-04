export const getModifierClassName = (
  isActive,
  className,
  modifier = "active",
  noNamespace = false
) =>
  `${className}${
    isActive ? ` ${noNamespace ? "" : className}_${modifier}` : ""
  }`;
