import React from "react";
import {
  Dialog,
  Slide,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { useAppContext } from "../../../../contexts/useAppContext";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

const CartDialog = () => {
  const { isCartDialogOpen, toggleCartDialog } = useAppContext();

  console.log(isCartDialogOpen);

  return (
    <Dialog
      open={isCartDialogOpen}
      TransitionComponent={Slide}
      TransitionProps={{ direction: "down" }}
      fullWidth
      maxWidth="md"
      onClose={() => toggleCartDialog()}
    >
      <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
        <Slide
          direction="left"
          in={isCartDialogOpen}
          mountOnEnter
          unmountOnExit
        >
          <div className="pointer-events-auto w-screen max-w-md">
            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
              <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                <div className="flex items-start justify-between">
                  <Typography variant="h6">Shopping cart</Typography>
                  <div className="ml-3 flex h-7 items-center">
                    <CloseIcon
                      onClick={() => toggleCartDialog()}
                      className="cursor-pointer"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flow-root">
                    <List
                      role="list"
                      className="-my-6 divide-y divide-gray-200"
                    >
                      {products.map((product) => (
                        <ListItem key={product.id} className="flex py-6">
                          <ListItemAvatar>
                            <Avatar
                              alt={product.imageAlt}
                              src={product.imageSrc}
                            />
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              <Typography variant="subtitle1">
                                <a href={product.href}>{product.name}</a>
                              </Typography>
                            }
                            secondary={
                              <React.Fragment>
                                <Typography
                                  component="span"
                                  variant="body2"
                                  color="textPrimary"
                                >
                                  {product.price}
                                </Typography>
                                <Typography
                                  component="span"
                                  variant="body2"
                                  color="textSecondary"
                                >
                                  {` - ${product.color}`}
                                </Typography>
                              </React.Fragment>
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                  </div>
                </div>
              </div>

              <Divider />

              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <Typography>Subtotal</Typography>
                  <Typography>$262.00</Typography>
                </div>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className="mt-0.5"
                >
                  Shipping and taxes calculated at checkout.
                </Typography>
                <div className="mt-6">
                  <Button
                    href="#"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Checkout
                  </Button>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                  <Typography>
                    or
                    <Button onClick={() => toggleCartDialog()} color="primary">
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </Button>
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </Dialog>
  );
};

export default CartDialog;
