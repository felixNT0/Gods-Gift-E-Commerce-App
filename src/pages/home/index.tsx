import { useState, useEffect } from "react";
import EcommerceOnboardingModal from "./components/modal/EcommerceOnboardingModal";
import Navbar from "../../components/navbar";
import Promotion from "./components/promotion-session";
import ProductCard from "./components/product-card";
import Footer from "../../components/footer";
import Banner from "./components/banner";
import OtherProducts from "./components/other-products";
import { Box } from "@mui/material";
import CartDialog from "./components/cart";
import { useAppContext } from "../../contexts/useAppContext";
import PromoCard from "./components/promo-card";
import AppServices from "./components/app-services";

function HomePage() {
  const [isBannerOpen, setIsBannerOpen] = useState(false);

  const getRandomImageURL = () => {
    const width = 400; // Adjust as needed
    const height = 300; // Adjust as needed
    const randomBagNumber = Math.floor(Math.random() * 1000); // Generate a random number
    return `https://source.unsplash.com/${width}x${height}/?bag&sig=${randomBagNumber}`;
  };

  const bagProducts = [
    {
      id: 1,
      title: "Sample Bag 1",
      description: "A stylish and durable bag.",
      price: 99.99,
      imageUrl: getRandomImageURL(),
    },
    {
      id: 2,
      title: "Sample Bag 2",
      description: "A versatile bag for all occasions.",
      price: 129.99,
      imageUrl: getRandomImageURL(),
    },
    {
      id: 3,
      title: "Sample Bag 1",
      description: "A stylish and durable bag.",
      price: 99.99,
      imageUrl: getRandomImageURL(),
    },
    {
      id: 4,
      title: "Sample Bag 2",
      description: "A versatile bag for all occasions.",
      price: 129.99,
      imageUrl: getRandomImageURL(),
    },
    {
      id: 1,
      title: "Sample Bag 1",
      description: "A stylish and durable bag.",
      price: 99.99,
      imageUrl: getRandomImageURL(),
    },
    {
      id: 2,
      title: "Sample Bag 2",
      description: "A versatile bag for all occasions.",
      price: 129.99,
      imageUrl: getRandomImageURL(),
    },
    {
      id: 3,
      title: "Sample Bag 1",
      description: "A stylish and durable bag.",
      price: 99.99,
      imageUrl: getRandomImageURL(),
    },
    {
      id: 4,
      title: "Sample Bag 2",
      description: "A versatile bag for all occasions.",
      price: 129.99,
      imageUrl: getRandomImageURL(),
    },
  ];

  const { isWelcomeModalOpen, toggleWelcomeModal } = useAppContext();

  // "https://picsum.photos/200/300?random=1";

  useEffect(() => {
    if (!isWelcomeModalOpen) {
      toggleWelcomeModal();
    }
  }, []);
  return (
    <>
      <Box component="nav">
        <Navbar />
      </Box>
      <Box component="main">
        <div className="mt-[68px]">
          {!isBannerOpen && <Banner onClose={() => setIsBannerOpen(true)} />}
          <Promotion />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
            {bagProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <OtherProducts />
          <PromoCard />
          <AppServices />
          <Footer />
        </div>
        <EcommerceOnboardingModal />
        <CartDialog />
      </Box>
    </>
  );
}

export default HomePage;
