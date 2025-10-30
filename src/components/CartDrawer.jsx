import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { AxiosInstance } from "../routes/axiosInstance";
import CloseIcon from "@mui/icons-material/Close";
import CartProduct from "./CartProduct";
import { toast } from "react-toastify";

export default function CartDrawer() {
  const [open, setOpen] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);

  async function getCartItems() {
    let res = await AxiosInstance.get("/shop/cart/get");
    console.log(res);
    if (res.data.success) {
      setCartItems(res.data.data.items);
    }
  }

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
    getCartItems();
  };

  const onIncrease = async (product) => {
    console.log(product);
    let { productId } = product;
    await AxiosInstance.post("/shop/cart/add", { productId });
    getCartItems();
  };

  const onDecrease = async (product) => {
    let { productId } = product;
    await AxiosInstance.patch("/shop/cart/update", { productId });
    getCartItems();
  };

  const onClearAll = async (product) => {
    await AxiosInstance.delete("/shop/cart/clear");
    getCartItems();
  };

  const onRemove = async (product) => {
    await AxiosInstance.delete(`/shop/cart/delete/${product.productId}`);
    getCartItems();
  };

  const totalPrice = cartItems.reduce((sum, item) => {
    return sum + item.salePrice * item.quantity;
  }, 0);

  const DrawerList = (
    <Box sx={{ width: 350 }} role="presentation">
      <header className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-extrabold">My Cart</h1>
        <CloseIcon onClick={toggleDrawer(false)} />
      </header>

      <Divider />

      <h3
        onClick={onClearAll}
        className="text-end py-2 px-4 font-semibold cursor-pointer hover:underline"
      >
        Clear cart
      </h3>

      <section className="p-4">
        {cartItems.length === 0 ? (
          <h2>Cart is empty</h2>
        ) : (
          cartItems.map((item, idx) => {
            return (
              <CartProduct
                item={item}
                key={idx}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                onRemove={onRemove}
              />
            );
          })
        )}
      </section>

      {cartItems.length === 0 ? null : (
        <div className="">
          <section className="p-4 bg-gray-100 font-bold text-2xl">
            <h1 className="text-center">
              Grand Total : {Number(totalPrice).toFixed(2)}
            </h1>
          </section>

          <div className=" text-center p-5 mx-5 my-3 rounded-3xl cursor-pointer hover:bg-green-600 hover:text-white bg-green-400 font-bold text-2xl">
            Checkout
          </div>
        </div>
      )}
    </Box>
  );

  return (
    <div>
      <button onClick={toggleDrawer(true)}>Cart</button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
