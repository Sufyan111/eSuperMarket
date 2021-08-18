export const productReducer = (state = { product: ["Pens"] }, action) => {
  console.log(state);
  if (action.type === "ADD_PRODUCT") {
    return {
      ...state,
      product: [...state.product, ...action.data],
    };
  }
  if (action.type === "REMOVE_PRODUCT") {
    state.product.pop();

    return {
      product: [...state.product],
    };
  }
  return state;
};
