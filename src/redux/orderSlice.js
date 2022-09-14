const { createSlice } = require("@reduxjs/toolkit");

const orderSlice = createSlice({
  name: "order",
  initialState: [],
  reducers: {
    add: (state, action) => {
      const newOrder = action.payload;
      return (state = [
        ...state,
        {
          ...newOrder,
        },
      ]);
    },
  },
});

export const { add } = orderSlice.actions;
export default orderSlice.reducer;
