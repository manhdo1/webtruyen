"use client";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
export interface IProviderProps {
  children: React.ReactNode;
}

export default function Provider({ children }: IProviderProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
