import { React, useState, useContext, createContext } from "react";

const lodaingContext = createContext({});

export function useLoadingContext() {
  return useContext(lodaingContext);
}
export function LoadingContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  return (
    <lodaingContext.Provider value={{ loading, setLoading }}>
      {children}
    </lodaingContext.Provider>
  );
}
