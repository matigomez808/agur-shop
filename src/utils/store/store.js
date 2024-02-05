import { create } from "zustand";
import { createCartSlice } from "./cartSlice";
import { createFormSlice } from "./formSlice";
import { createShippingSlice } from "./shippingSlice";

const useMyBoundStore = create((...a) => ({
  ...createCartSlice(...a),
  ...createFormSlice(...a),
  ...createShippingSlice(...a)
}))

export default useMyBoundStore