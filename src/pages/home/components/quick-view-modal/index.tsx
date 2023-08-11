import React, { useState } from "react";
import {
  Dialog,
  Slide,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { Close, Star as StarIcon } from "@mui/icons-material";

interface Color {
  name: string;
  class: string;
  selectedClass: string;
}

interface Size {
  name: string;
  inStock: boolean;
}

interface Product {
  name: string;
  price: string;
  rating: number;
  reviewCount: number;
  href: string;
  imageSrc: string;
  imageAlt: string;
  colors: Color[];
  sizes: Size[];
}

const product: Product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  rating: 3.9,
  reviewCount: 117,
  href: "#",
  imageSrc:
    "https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg",
  imageAlt: "Two each of gray, white, and black shirts arranged on table.",
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: true },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    // ... (other sizes)
  ],
};

function classNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const Example: React.FC = ({ open, setOpen }: any) => {
  const [selectedColor, setSelectedColor] = useState<Color>(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<Size>(product.sizes[2]);

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      TransitionComponent={Slide}
      TransitionProps={{ direction: "up" }}
      fullWidth
      maxWidth="md"
    >
      <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
        <Close
          onClick={() => setOpen(false)}
          className="h-6 w-6 text-black absolute right-4 top-4 cursor-pointer sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
          aria-hidden="true"
        />

        <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
          <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="object-cover object-center"
            />
          </div>
          <div className="sm:col-span-8 lg:col-span-7">
            <Typography
              variant="h4"
              component="h2"
              className="text-2xl font-bold text-gray-900 sm:pr-12"
            >
              {product.name}
            </Typography>

            <section aria-labelledby="information-heading" className="mt-2">
              <Typography
                variant="h5"
                id="information-heading"
                component="h3"
                className="sr-only"
              >
                Product information
              </Typography>

              <Typography
                variant="h4"
                component="p"
                className="text-2xl text-gray-900"
              >
                {product.price}
              </Typography>

              {/* Reviews */}
              <div className="mt-6">
                <Typography variant="h6" component="h4" className="sr-only">
                  Reviews
                </Typography>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.rating > rating
                            ? "text-gray-900"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <Typography variant="body2" className="sr-only">
                    {product.rating} out of 5 stars
                  </Typography>
                  <a
                    href="#"
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {product.reviewCount} reviews
                  </a>
                </div>
              </div>
            </section>

            <section aria-labelledby="options-heading" className="mt-10">
              <Typography
                variant="h6"
                id="options-heading"
                component="h4"
                className="sr-only"
              >
                Product options
              </Typography>

              <form>
                {/* Colors */}
                <div>
                  <Typography
                    variant="subtitle1"
                    className="text-sm font-medium text-gray-900"
                  >
                    Color
                  </Typography>

                  <RadioGroup
                    value={selectedColor.name}
                    onChange={(e) =>
                      setSelectedColor(
                        product.colors.find(
                          (color) => color.name === e.target.value
                        ) || selectedColor
                      )
                    }
                    className="mt-4"
                  >
                    {product.colors.map((color) => (
                      <FormControlLabel
                        key={color.name}
                        value={color.name}
                        control={<Radio />}
                        label={color.name}
                      />
                    ))}
                  </RadioGroup>
                </div>

                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <Typography
                      variant="subtitle1"
                      component="h4"
                      className="text-sm font-medium text-gray-900"
                    >
                      Size
                    </Typography>
                    <a
                      href="#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Size guide
                    </a>
                  </div>

                  <RadioGroup
                    value={selectedSize.name}
                    onChange={(e) =>
                      setSelectedSize(
                        product.sizes.find(
                          (size) => size.name === e.target.value
                        ) || selectedSize
                      )
                    }
                    className="mt-4"
                  >
                    <div className="grid grid-cols-4 gap-4">
                      {product.sizes.map((size) => (
                        <FormControlLabel
                          key={size.name}
                          value={size.name}
                          control={<Radio />}
                          label={size.name}
                          disabled={!size.inStock}
                        />
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <Button
                  type="submit"
                  className="mt-6 w-full"
                  variant="contained"
                  color="primary"
                  disabled={!selectedSize.inStock}
                >
                  Add to bag
                </Button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default Example;
