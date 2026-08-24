"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

interface EntranceContextProps {
  isEntranceComplete: boolean;
}

const EntranceContext = React.createContext<EntranceContextProps>({
  isEntranceComplete: true, // Default to true for SSR/static safety on other pages
});

export function EntranceProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Initial state matches SSR: if we are on home, entrance is not complete yet.
  const [isEntranceComplete, setIsEntranceComplete] = React.useState(!isHome);

  React.useEffect(() => {
    if (!isHome) {
      setIsEntranceComplete(true);
      return;
    }

    // If we transitioned to Home, start/restart sequence
    setIsEntranceComplete(false);
    
    const timer = setTimeout(() => {
      setIsEntranceComplete(true);
    }, 1100);

    return () => clearTimeout(timer);
  }, [pathname, isHome]);

  return (
    <EntranceContext.Provider value={{ isEntranceComplete }}>
      {children}
    </EntranceContext.Provider>
  );
}

export function useEntrance() {
  return React.useContext(EntranceContext);
}
