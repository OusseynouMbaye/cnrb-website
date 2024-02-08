// import { useEffect, useState } from "preact/hooks";
import { useEffect, useState } from "react";
// import { FunctionalComponent } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage?.getItem("theme") ?? "light");
  // const [theme, setTheme] = useState(typeof window !== 'undefined' ? localStorage.getItem("theme") ?? "light" : "light");

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button onClick={handleClick}>{theme === "light" ? "🌙" : "🌞"}</button>
  );
}
