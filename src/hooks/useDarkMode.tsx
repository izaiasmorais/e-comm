import { useEffect, useState } from "react";

export function useDarkMode() {
  const [theme, setTheme] = useState("light");

  function setMode(mode: "light" | "dark") {
    localStorage.setItem("theme", mode);
    setTheme(mode);
  }

  function themeToggler() {
    theme === "light" ? setMode("dark") : setMode("light");

    console.log(theme);
  }

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return [theme, themeToggler];
}
