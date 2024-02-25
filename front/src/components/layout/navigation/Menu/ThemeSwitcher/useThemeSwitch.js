import { useState, useEffect } from "react";

import { isBrowser } from "@constants/isBrowser.const";

export const useThemeSwitch = () => {
  const prefersDark = "(prefers-color-scheme: dark)";

  const isDarkTheme = isBrowser && window.matchMedia(prefersDark).matches;
  const systemTheme = isDarkTheme ? "dark" : "light";

  const storageTheme = isBrowser ? localStorage.getItem("theme") : null;

  // Set the theme from local storage, the system theme, or the default
  const [theme, setTheme] = useState(storageTheme || "system");

  const handleUpdateSystemTheme = (e) => {
    const { matches } = e;
    setTheme(matches ? "dark" : "light");
  };

  useEffect(() => {
    const { documentElement } = document;

    if (theme === "system") {
      localStorage.removeItem("theme");
      documentElement.setAttribute("data-theme", systemTheme);

      const systemThemeQuery = window.matchMedia(prefersDark);
      systemThemeQuery.addEventListener("change", handleUpdateSystemTheme);

      return () => {
        systemThemeQuery.removeEventListener("change", handleUpdateSystemTheme);
      };
    } else {
      localStorage.setItem("theme", theme);
      documentElement.setAttribute("data-theme", theme);
    }
  }, [theme, systemTheme]);

  return {
    theme,
    setTheme,
  };
};
