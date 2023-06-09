import React, { useState } from "react";
import { useContext } from "react";

const OneContext = React.createContext();

export const OneProvider = ({ children }) => {
  const [one, setOne] = useState(JSON.parse(localStorage.getItem("one")));

  const betterSetOne = (data) => {
    setOne(data);
    if (data) {
      localStorage.setItem("one", JSON.stringify(data));
    } else {
      localStorage.removeItem("one");
    }
  };

  return (
    <OneContext.Provider value={[one, betterSetOne]}>
      {children}
    </OneContext.Provider>
  );
};

export const useOne = () => useContext(OneContext);
