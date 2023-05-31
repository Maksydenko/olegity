export const getModifierClassName = (
  isActive,
  className,
  modifier = "active",
  noNamespace
) =>
  `${className}${
    isActive ? ` ${noNamespace ? "" : className}_${modifier}` : ""
  }`;
