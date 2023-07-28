"use client";
import * as React from "react";
import "./style.css";
import { useTheme } from "next-themes";

export default function ToogleDarkMode() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    console.log(theme);
    theme && theme == "dark" ? setTheme("light") : setTheme("dark");
  };
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <label className="switch">
        <input type="checkbox" onClick={changeTheme} />
        <span className="slider"></span>
      </label>
    </>
  );
}
