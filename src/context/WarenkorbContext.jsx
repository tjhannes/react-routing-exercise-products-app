import { useState } from "react";
import { createContext } from "react";

export const WarenkorbContext = createContext("");

export default function WarenkorbProvider({ children }) {
  const [warenkorb, setWarenkorb] = useState([]);

  return (
    <WarenkorbContext.Provider value={{ warenkorb, setWarenkorb }}>
      {children}
    </WarenkorbContext.Provider>
  );
}
