export const addItem = (itemToAdd) => {
    return {
      type: 'cart/addItem',
      payload: itemToAdd,
    };
  };

  export const removeAll = () => {
    return {
      type: 'cart/removeAll',
      payload: initialCart
    }

  }
  
  export const changeItemQuantity = (name, newQuantity ) => {
   return {
      type: 'cart/changeItemQuantity',
      payload: {
        name,
        newQuantity
      }
    }
  }
  
  
  const initialCart = [];
  export const cartReducer = (cart = initialCart, action) => {
    switch (action.type) {
      case 'cart/addItem': {
        const { name, price, img, type } = action.payload;
        
        // if the item already exists, increase the quantity by 1, otherwise set it to 1
        const quantity = cart[name] ? cart[name].quantity + 1 : 1;
        const newItem = { price, img, type, quantity };
  
        // Add the new item to the cart (or replace it if it existed already)
        return { 
          ...cart, 
          [name]: newItem 
        };
      }
        
      case 'cart/removeAll':
        return initialCart;

        case 'cart/changeItemQuantity': {
          const { name, newQuantity } = action.payload;
        
          return {
            ...cart,
            [name]: {
              ...cart[name],
              quantity: Math.max(0, newQuantity),
            } 
          }
        }
      default: {
        return cart;
      }
    }
  };
