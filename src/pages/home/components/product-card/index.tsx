import { useState } from "react";
import { motion } from "framer-motion";
import QuickViewModal from "../quick-view-modal";
import { Button, useMediaQuery, useTheme } from "@mui/material";

function ProductCard({ product }: any) {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <motion.div
        className="max-w-sm rounded overflow-hidden shadow-md hover:shadow-lg relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ height: "auto" }}
      >
        <img
          src={product?.imageUrl}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
        {isHovered && !isSmallScreen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-0 left-0 right-0 w-full p-4 flex justify-center items-center bg-white bg-opacity-80 shadow-md"
            style={{ zIndex: 1 }} // Ensure the buttons appear above the image
          >
            <Button
              onClick={() => setIsOpen(true)}
              color="primary"
              variant="contained"
              fullWidth
            >
              Quick View
            </Button>
          </motion.div>
        )}
        <div className="p-4 text-center">
          <h2 className="text-lg text-black font-semibold">{product.title}</h2>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-green-600 mt-2">${product.price.toFixed(2)}</p>
        </div>
        {isSmallScreen && (
          <Button
            onClick={() => setIsOpen(true)}
            color="primary"
            variant="contained"
            fullWidth
          >
            Quick View
          </Button>
        )}
      </motion.div>
      <QuickViewModal setOpen={setIsOpen} open={isOpen} />
    </>
  );
}

export default ProductCard;
