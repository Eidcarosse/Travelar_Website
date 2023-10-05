import React from "react";

const StCntxt = React.createContext({msg : "No Provider for Consumbers, StateContext"}); 

export const StProvider = StCntxt.Provider;
export default StCntxt;