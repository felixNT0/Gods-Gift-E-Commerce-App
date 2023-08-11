import { Button } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Promotion = () => {
  const getRandomImageURL = () => {
    const width = 800; // Adjust as needed
    const height = 600; // Adjust as needed
    const randomBagNumber = Math.floor(Math.random() * 1000); // Generate a random number
    return `https://source.unsplash.com/${width}x${height}/?bag&sig=${randomBagNumber}`;
  };
  return (
    <Carousel
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
    >
      <div className=" relative bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl text-D19650 font-semibold mb-4">
                Save big on selected items!
              </h2>
              <p className="text-gray-600 mb-4">
                Get up to 50% off on selected items from our e-commerce store.
                Don't miss out!
              </p>
              <Button
                style={{ borderRadius: 50, marginTop: 10, color: "white" }}
                variant="contained"
                color="primary"
              >
                Shop Now
              </Button>
            </div>
            <div className="md:ml-16">
              <img
                src={getRandomImageURL()}
                alt="Promotion1"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" relative bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl text-D19650  font-semibold mb-4">
                Limited Time Offer
              </h2>
              <p className="text-gray-600 mb-4">
                Get up to 50% off on selected items from our e-commerce store.
                Don't miss out!
              </p>
              <Button
                style={{ borderRadius: 50, marginTop: 10, color: "white" }}
                variant="contained"
                color="primary"
              >
                Shop Now
              </Button>
            </div>
            <div className="md:ml-16">
              <img
                src={getRandomImageURL()}
                alt="Promotion2"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" relative bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl text-D19650  font-semibold mb-4">
                New arrivals just for you!
              </h2>
              <p className="text-gray-600 mb-4">
                Get up to 50% off on selected items from our e-commerce store.
                Don't miss out!
              </p>
              <Button
                style={{ borderRadius: 50, marginTop: 10, color: "white" }}
                variant="contained"
                color="primary"
              >
                Shop Now
              </Button>
            </div>
            <div className="md:ml-16">
              <img
                src={getRandomImageURL()}
                alt="Promotion3"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Promotion;
