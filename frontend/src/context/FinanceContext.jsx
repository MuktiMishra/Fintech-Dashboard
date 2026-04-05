import React, { createContext, useContext, useReducer } from "react";
import { transactions as mockTransactions } from "../data/transactions";

const FinanceContext = createContext();

const initialState = {
  transactions: mockTransactions,
  filters: {
    search: "",
    type: "all",
    sortBy: "latest",
  },
};

function financeReducer(state, action) {
  switch (action.type) {
    case "SET_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload,
        },
      };

    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (item) => item.id !== action.payload
        ),
      };

    case "SET_TRANSACTIONS":
      return {
        ...state,
        transactions: action.payload,
      };

    default:
      return state;
  }
}

export function FinanceProvider({ children }) {
  const [state, dispatch] = useReducer(financeReducer, initialState);

  return (
    <FinanceContext.Provider value={{ state, dispatch }}>
      {children}
    </FinanceContext.Provider>
  );
}

export function useFinance() {
  return useContext(FinanceContext);
}