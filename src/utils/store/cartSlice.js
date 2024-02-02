export const createCartSlice = (set) => ({
  items: [],
  total: 0,
  addItem: (item) =>
    set((state) => {
      const updatedItems = [...state.items];
      const newItem = { ...item, quantity: 1 };
      const existingItemIndex = updatedItems.findIndex(
        (item) => item._id === newItem._id
      );
      if (existingItemIndex !== -1) {
        const updatedQuantity = updatedItems[existingItemIndex].quantity + 1;
        updatedItems[existingItemIndex].quantity = updatedQuantity;
      } else {
        updatedItems.push(newItem);
      }
      const updatedTotal = updatedItems.reduce(
        (acc, item) => acc + item.precio * item.quantity,
        0
      );
      return {
        items: updatedItems,
        total: updatedTotal,
      };
    }),
  removeItem: (item) =>
    set((state) => {
      const updatedItems = [...state.items];
      const idToRemove = item._id;
      const indexToRemove = updatedItems.findIndex(
        (item) => item._id === idToRemove
      );
      if (updatedItems[indexToRemove].quantity > 1) {
        const updatedQuantity = updatedItems[indexToRemove].quantity - 1;
        updatedItems[indexToRemove].quantity = updatedQuantity;
      } else {
        updatedItems.splice(indexToRemove, 1);
      }
      const updatedTotal = updatedItems.reduce(
        (acc, item) => acc + item.precio * item.quantity,
        0
      );
      return {
        items: updatedItems,
        total: updatedTotal,
      };
    }),
});

