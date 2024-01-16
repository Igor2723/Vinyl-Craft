export function calculateShipping(price) {
  switch (currency) {
    case 'US':
      return price * 10.86;
    case 'AU':
      return price * 12.33;
      case 'Asia':
      return price * 7.90;
    default:
      return price;
  }
}
export function calculateTotal(cart) {
    let totalUSD = 0;
    Object.keys(cart).forEach((itemName) => {
      totalUSD += cart[itemName].price * cart[itemName].quantity;
    });
    return totalUSD.toFixed(2);
  }
  export function calculateTotalQuantity(cart) {
    let totalQuantity = 0;
    Object.keys(cart).forEach((itemName) => {
      totalQuantity += cart[itemName].quantity;
    });
    return totalQuantity;
  }