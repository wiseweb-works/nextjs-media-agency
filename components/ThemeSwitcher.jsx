"use client";

import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <button
      id="theme-toggle"
      onClick={toggleTheme}
      accessKey="t"
      title="(Alt + T)"
      className="rounded-full p-1.5 bg-blue-900/80 dark:bg-blue-800/30 hover:bg-gray-200 dark:hover:bg-gray-700 text-2xl"
    >
      {theme === "light" ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeSwitcher;
