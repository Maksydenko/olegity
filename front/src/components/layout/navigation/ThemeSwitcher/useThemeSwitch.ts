import { useState, useEffect, useLayoutEffect } from "react";

import { isBrowser } from "@/constants/isBrowser.const";

import { TypeSetState } from "@/types/setState.type";

interface IUseSwitchTheme {
  (): {
    currentTheme: string;
    setCurrentTheme: TypeSetState<string>;
  };
}

export const useThemeSwitch: IUseSwitchTheme = () => {
  const prefersDark = "(prefers-color-scheme: dark)";

  const isDarkTheme = isBrowser && window.matchMedia(prefersDark).matches;
  const systemTheme = isDarkTheme ? "dark" : "light";

  const storageTheme = isBrowser ? localStorage.getItem("theme") : null;

  // Set the current theme from local storage, the system theme, or the default
  const [currentTheme, setCurrentTheme] = useState(storageTheme || "system");

  // Handle update system theme
  interface IHandleUpdateSystemTheme {
    (e: MediaQueryListEvent): void;
  }
  const handleUpdateSystemTheme: IHandleUpdateSystemTheme = (e) => {
    const { matches } = e;
    setCurrentTheme(matches ? "dark" : "light");
  };

  useLayoutEffect(() => {
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
