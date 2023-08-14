import { createContext, useState, useEffect } from "react"; 

const contextApp = createContext(null);

function ContextProvider({children}) {
  const [contentView, setContentView] = useState("workflow")
 
  return (
    <contextApp.Provider 
      value={
        {contentView, setContentView}
      }
    >
      {children}
    </contextApp.Provider>
  )
}

export {contextApp, ContextProvider};