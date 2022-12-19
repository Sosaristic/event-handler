import React, {useState, createContext, useContext} from "react";

export const sideBarContext = createContext()

export function SideBarProvider({children}){
    const [sideBar, setSideBar] = useState(false)

    const toogleSideBar = ()=>{
        
        setSideBar((state)=> !state)
    }
const value = {sideBar, toogleSideBar}
    return(
        <sideBarContext.Provider value={value}>
            {children}
        </sideBarContext.Provider>
    )

}

export function useSideBar(){
const context = useContext(sideBarContext)
if(context == undefined){
    throw new Error("useSideBar must be withina count provider")
}
return context
} 



