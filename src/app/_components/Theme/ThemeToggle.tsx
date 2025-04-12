"use client";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const useDark = stored === "dark" || (!stored && prefersDark);

    document.documentElement.setAttribute(
      "data-theme",
      useDark ? "dark" : "light"
    );
    setIsDark(useDark);
  }, []);

  const toggle = () => {
    const newTheme = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggle}
      className="w-8 h-8 text-gray-600 flex items-center justify-center"
    >
      {isDark ? (
        <MdSunny className="h-full w-full text-gray-600 " />
      ) : (
        <FaMoon className="h-5 w-full text-gray-600 " />
      )}
    </button>
  );
}
