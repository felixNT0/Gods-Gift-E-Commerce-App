// src/components/EcommerceOnboardingModal.tsx
import React from "react";
import { Slide, useMediaQuery, useTheme, Dialog } from "@mui/material";
import MainOnboardingPage from "./MainOnboardingPage";
import { useAppContext } from "../../../../contexts/useAppContext";
import { Close } from "@mui/icons-material";

const EcommerceOnboardingModal: React.FC = () => {
  const { isWelcomeModalOpen, toggleWelcomeModal } = useAppContext();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isSmallScreen ? 350 : 500,
    bgcolor: "background.paper",
    // border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Dialog
      open={isWelcomeModalOpen}
      onClose={() => toggleWelcomeModal()}
      TransitionComponent={Slide}
      // TransitionProps={{ direction: "up" }}
      fullWidth
      maxWidth="sm"
    >
      <div className="relative flex w-full items-center overflow-hidden  bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
        <Close
          onClick={() => toggleWelcomeModal()}
          className="h-6 w-6 text-black absolute right-4 top-4 cursor-pointer sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
          // aria-hidden="true"
        />
        {/* <Box sx={style}> */}
        <div className="w-full grid-cols-1 items-start">
          <MainOnboardingPage />
        </div>
        {/* </Box> */}
      </div>
    </Dialog>
  );
};

export default EcommerceOnboardingModal;
