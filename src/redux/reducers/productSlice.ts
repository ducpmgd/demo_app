import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICardItem } from "components/cardItem/interface";

interface IProductState {
  products: ICardItem[];
}

const initialState = {
  products: [],
} as IProductState;

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProducts: (state, action: PayloadAction<ICardItem[]>) => {
      const data = action.payload;
      state.products = data;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateProducts } = productSlice.actions;

export default productSlice.reducer;
