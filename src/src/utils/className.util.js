export const handleClassName = (
  isActive,
  className,
  modifier = "active",
  onlyModifier
) =>
  `${onlyModifier ? "" : className}${
    isActive ? (onlyModifier ? "" : " ") : ""
  }${isActive ? `${className}_${modifier}` : ""}`;
