const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      const newItem = action.payload;
      const temp = state.filter(
        (e) =>
          e.slug === newItem.slug &&
          e.color === newItem.color &&
          e.size === newItem.size
      );
      if (temp.length > 0) {
        state = state.filter(
          (e) =>
            e.slug !== newItem.slug ||
            e.color !== newItem.color ||
            e.size !== newItem.size
        );
        return (state = [
          ...state,
          {
            title: newItem.title,
            avatar: newItem.avatar,
            slug: newItem.slug,
            color: newItem.color,
            size: newItem.size,
            price: newItem.price,
            quantity: newItem.quantity + temp[0].quantity,
          },
        ]);
      } else {
        return (state = [
          ...state,
          {
            ...newItem,
          },
        ]);
      }
    },
    update: (state, action) => {
      const newItem = action.payload;
      return state.map((item) => {
        if (
          newItem.slug === item.slug &&
          newItem.color === item.color &&
          newItem.size === item.size
        ) {
          return {
            ...item,
            quantity: newItem.quantity,
          };
        }
        return item;
      });
    },
    remove: (state, action) => {
      const newItem = action.payload;
      return (state = state.filter(
        (e) =>
          e.slug !== newItem.slug ||
          e.size !== newItem.size ||
          e.color !== newItem.color
      ));
    },

    clear: (state) => {
      return (state = []);
    },
  },
});

export const { add, update, remove, clear } = cartSlice.actions;
export default cartSlice.reducer;
