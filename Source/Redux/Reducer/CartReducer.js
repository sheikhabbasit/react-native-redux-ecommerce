import {CartActions} from '../Actions/CartActions';

export const CartReducer = (
  state = {cartItems: [], totalQuantity: 0, idWithQuantity: {}},
  payload,
) => {
  switch (payload.type) {
    case CartActions.ADD:
      // when there is nothing in the cart
      if (!state.cartItems) {
        console.log('first run');
        return {
          ...state,
          cartItems: [payload.data.product],
          totalQuantity: 1,
          idWithQuantity: {[payload.data.product.id]: 1},
        };
      } else {
        // when there is something in the cart already with same value
        if (state.cartItems.find(item => item.id === payload.data.product.id)) {
          console.log('second run with same data');
          return {
            ...state,
            totalQuantity: state.totalQuantity + 1,
            idWithQuantity: {
              ...state.idWithQuantity,
              [payload.data.product.id]:
                state.idWithQuantity[payload.data.product.id] + 1,
            },
          };
        }
        // if product was never added before
        console.log('second run with new data');
        return {
          ...state,
          cartItems: [...state.cartItems, payload.data.product],
          totalQuantity: state.totalQuantity + 1,
          idWithQuantity: {
            ...state.idWithQuantity,
            [payload.data.product.id]: 1,
          },
        };
      }

    case CartActions.REMOVE:
      return {...initialState};

    default:
      return state;
  }
};
