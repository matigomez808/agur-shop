import { shippingPrices } from "@Data/shippingInfo";

export const createShippingSlice = (set) => ({
  shippingOptions: ["standard", "fancy"],
  selectedOption: null,
  shippingPrice: null,
  shippingLocation: null,
  setSelectedOption: (option) =>
    set((state) => ({
      selectedOption: option,
    })),
  setShippingLocation: (provincia) =>
    set((state) => ({
      shippingLocation: provincia,
    })),
  setShippingPrice: () => {
    set((state) => {
      const provincia = state.shippingLocation;
      const option = state.selectedOption;
      const price = shippingPrices[provincia][option]
      return {shippingPrice: price,}
  });
  },
});
