import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
const CartProduct = (props) => {
  console.log(props);

  let { id, title, salePrice, image, quantity } = props.item;

  return (
    <div className="p-3 mb-3 rounded shadow flex gap-2 relative">
      <img src={image} height={80} width={80} className="rounded" alt="" />
      <div>
        <h1 className="font-semibold capitalize">{title}</h1>

        <div className="flex gap-2 mt-3">
          <AddIcon
            onClick={() => props.onIncrease(props.item)}
            className="shadow-md rounded-full hover:text-green-400 cursor-pointer"
          />
          {quantity}
          <RemoveIcon
            onClick={() => props.onDecrease(props.item)}
            className="shadow-md rounded-full hover:text-red-400 cursor-pointer"
          />

          <DeleteIcon
            onClick={() => props.onRemove(props.item)}
            className="absolute right-2 bottom-2 cursor-pointer hover:text-red-600"
          />
        </div>

        <p className="pt-4 font-semibold">
          Rs. {Number(quantity * salePrice).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CartProduct;
