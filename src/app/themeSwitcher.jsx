"use client"; // обязательно!

import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="themeSwitcher"
    >
      {theme === "light" ? (
        <img src="/image/moon.png" alt="" />  
      ) 
      : 
      (
        <img src="/image/sun.png" />
      )
      }
    </button>
  );
}
