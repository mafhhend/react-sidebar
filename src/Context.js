import { createContext, useContext, useState } from "react";

// context should wrap all of the app
const AppContext = createContext();

/* 
1. Provider
2. Consumer
*/

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModal] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);


  const openModal = () => setIsModal(true);

  const closeModal = () => setIsModal(false);


  // children because I want to see all of the components :
  return <AppContext.Provider value={{isSidebarOpen,isModalOpen,setIsSidebarOpen,setIsModal,openSidebar,closeSidebar,openModal,closeModal}}>{children}</AppContext.Provider>;
};

//if we don't want to import AppContext EveryWhere :
//custom Hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
//tip : to make a custom hook we MUST use use+name_hook

export { AppContext, AppProvider };
