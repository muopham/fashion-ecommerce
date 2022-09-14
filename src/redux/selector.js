import { createSelector } from "@reduxjs/toolkit";

const cartItem = (state) => state.cart;

export const cartTotalPriceSelector = createSelector([cartItem], (cart) =>
  cart.reduce(
    (total, current) => (total += current.price * current.quantity),
    0
  )
);
