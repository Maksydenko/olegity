import { useState, useEffect } from "react";

import { isBrowser } from "@constants/isBrowser.const";

export const useThemeSwitch = () => {
  const prefersDark = "(prefers-color-scheme: dark)";

  const isDarkTheme = isBrowser && window.matchMedia(prefersDark).matches;
  const systemTheme = isDarkTheme ? "dark" : "light";

  const storageTheme = isBrowser ? localStorage.getItem("theme") : null;

  // Set the current theme from local storage, the system theme, or the default
  const [currentTheme, setCurrentTheme] = useState(storageTheme || "system");

  const handleUpdateSystemTheme = (e) => {
    const { matches } = e;
    setCurrentTheme(matches ? "dark" : "light");
  };

  useEffect(() => {
    const { documentElement } = document;

    if (currentTheme === "system") {
      localStorage.removeItem("theme");
      documentElement.setAttribute("data-theme", systemTheme);

      const systemThemeQuery = window.matchMedia(prefersDark);
      systemThemeQuery.addEventListener("change", handleUpdateSystemTheme);

      return () => {
        systemThemeQuery.removeEventListener("change", handleUpdateSystemTheme);
      };
    } else {
      localStorage.setItem("theme", currentTheme);
      documentElement.setAttribute("data-theme", currentTheme);
    }
  }, [currentTheme, systemTheme]);

  return {
    currentTheme,
    setCurrentTheme,
  };
};
