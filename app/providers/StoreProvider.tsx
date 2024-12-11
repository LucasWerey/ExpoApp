import React from "react";
import { Provider } from "jotai";
import { store } from "@store/index";

type StoreProviderProps = {
  children: React.ReactNode;
};

const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
