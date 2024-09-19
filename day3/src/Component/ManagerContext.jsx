import React, { createContext, useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          Id: Date.now(),
          Name: action.name,
          Description: action.description,
        },
      ];
    case "remove":
      console.log(action.id);
      return state.filter((item) => item.Id !== action.id);

    default:
      throw new Error("action type is not match");
  }
}
export const ManageContext = createContext();

export const ManageProvider = ({ children }) => { 
  const [state, disatch] = useReducer(reducer, []);
  return (
    <ManageContext.Provider value={{state,disatch}}>
      {children}
    </ManageContext.Provider>
  );
};
