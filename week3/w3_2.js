let product_price = 40;
let discount_percentage = 25;
let final_price = product_price - (product_price * (discount_percentage / 100));

if (final_price <= 0){
    console.log("price:0");
}
else if (final_price <= 500){
    let price_with_shipping = final_price + 50;
    console.log(`+Shipping Fee:${price_with_shipping}฿`)
}
else if (final_price > 500){
    let extra_discount = final_price * 0.10;
    let final_price_with_extra_discount = final_price - extra_discount;
    console.log(`-Extra Discount(10%): ${final_price_with_extra_discount}`);
}