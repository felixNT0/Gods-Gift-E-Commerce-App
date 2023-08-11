import { createContext, useContext, useState } from "react";

export const defaultContactVariable = {
  first_name: "",
  last_name: "",
  id: "",
  contact_status: "",
};

export const AppContext = createContext<any>({
  toggleCartDialog: () => {},
  toggleWelcomeModal: () => {},

  isCartDialogOpen: false,
  isWelcomeModalOpen: false,
});

const AppContextProvider = ({ children }: any) => {
  const [isCartDialogOpen, setIsCartDialogOpen] = useState<boolean>(false);

  const toggleCartDialog = () => {
    setIsCartDialogOpen(!isCartDialogOpen);
  };

  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState<boolean>(false);

  const toggleWelcomeModal = () => {
    setIsWelcomeModalOpen(!isWelcomeModalOpen);
  };
  return (
    <AppContext.Provider
      value={{
        isCartDialogOpen,
        toggleCartDialog,
        toggleWelcomeModal,
        isWelcomeModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

export const useAppContext = () => useContext(AppContext);
