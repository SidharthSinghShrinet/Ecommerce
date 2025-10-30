import React from "react";
import { AxiosInstance } from "../routes/axiosInstance";
import { toast } from "react-toastify";

const ProductCard = (props) => {
  let { id, title, price, salePrice, image } = props.product;

  async function addToCart(item) {
    console.log(item);
    let res = await AxiosInstance.post("/shop/cart/add", {
      productId: item.id,
    });
    console.log(res);
    if (res.data.success) {
        toast.success("Added to cart")
    }
  }

  return (
    <div className="p-3 sm:p-4 flex justify-center">
      <div className="w-full max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition flex flex-col">
        <img
          src={
            image ||
            "https://www.dropicts.com/wp-content/uploads/Dropicts-Feautred-Images-Beauty-Product-02.jpg"
          }
          alt={title}
          className="h-40 sm:h-56 md:h-64 w-full object-cover rounded-t-xl"
        />
        <div className="p-4 flex flex-col gap-2 flex-1">
          <h1 className="text-lg sm:text-xl font-bold text-gray-800 truncate">
            {title}
          </h1>
          <div className="flex flex-col sm:flex-row justify-between items-center font-semibold gap-1">
            <del className="text-gray-500">Rs.{price}</del>
            <span className="text-purple-700">Rs.{salePrice}</span>
          </div>
          <button
            onClick={() => addToCart(props.product)}
            className="mt-3 w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 rounded-lg font-semibold hover:from-blue-500 hover:to-purple-600 transition"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
