let arr = [
  {
    image: "https://wheyne.co.in/wp-content/uploads/2024/08/ONE-WHEY-AMERICAN-NUTS-ICE-CREAM--500x500.png",
    title: "With research",
    description: "Walk government especially purpose record safe see.",
    category: "electronics",
    brand: "Jones, Ayala and Frank",
    price: 734.21,
    salePrice: 200.59,
    totalStock: 29,
    averageReview: 1.2,
  },
  {
    image: "https://skyroots.in/wp-content/uploads/2021/10/cover-photo-500x500.png",
    title: "National weight consumer",
    description:
      "Too want catch alone city. Fall nation share. Always wind time happy let baby trial see.",
    category: "furniture",
    brand: "Flores-Anderson",
    price: 892.53,
    salePrice: 294.04,
    totalStock: 153,
    averageReview: 1.6,
  },
 ];

const productCollection = require("../models/product.model");

async function seedProducts() {
  await productCollection.insertMany(arr);
  console.log("data added");
}

module.exports = seedProducts;
