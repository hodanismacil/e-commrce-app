
export type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
};

export const getCartItems = (): CartItem[] => {
  const storedItems = localStorage.getItem("cartItems");
  return storedItems ? JSON.parse(storedItems) : [];
};

export const saveCartItems = (items: CartItem[]) => {
  localStorage.setItem("cartItems", JSON.stringify(items));
};

export const addToCart = (product: Omit<CartItem, "quantity">) => {
  const cart = getCartItems();

  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCartItems(cart);
};