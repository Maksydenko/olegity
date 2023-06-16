export const handleClassName = (
  isActive,
  className,
  modifier = "active",
  onlyModifier
) => {
  const defaultClassName = onlyModifier ? "" : className;
  const splitter = isActive ? (onlyModifier ? "" : " ") : "";
  const modifiedClassName = isActive ? `${className}_${modifier}` : "";

  return defaultClassName + splitter + modifiedClassName;
};
