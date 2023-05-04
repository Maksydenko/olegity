export const getModifierClassName = (
  isActive,
  className,
  modifier = "active",
  noNamespace = true
) =>
  `${className}${
    isActive ? ` ${noNamespace ? className : ""}_${modifier}` : ""
  }`;
