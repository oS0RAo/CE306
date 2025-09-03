const products = [
  { price: 1500, discount: 10 },
  { price: 2500, discount: 20 },
  { price: 10500, discount: 50 },
  { price: 900, discount: 15 },
  { price: 1150, discount: 25 }
];

function calculateTotal() {
  let total = 0;
  products.forEach(product => {
    const priceAfterDiscount = product.price - (product.price * product.discount / 100);
    total += priceAfterDiscount;
  });
console.log(`Total price: $${total.toFixed(2)}`);
}

calculateTotal();