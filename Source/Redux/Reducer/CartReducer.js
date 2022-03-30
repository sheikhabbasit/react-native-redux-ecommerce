import {CartActions} from '../Actions/CartActions';

const initialState = {cartItems: [], totalQuantity: 0, idWithQuantity: {}};

export const CartReducer = (state = initialState, payload) => {
  switch (payload.type) {
    case CartActions.ADD:
      // when there is nothing in the cart
      if (!state.cartItems) {
        return {
          ...state,
          cartItems: [payload.data.product],
          totalQuantity: 1,
          idWithQuantity: {[payload.data.product.id]: 1},
        };
      } else {
        // when there is something in the cart already with same value
        if (state.cartItems.find(item => item.id === payload.data.product.id)) {
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

    case CartActions.REDUCE:
      // when there is nothing in the carT
      if (state.cartItems.length === 0) {
        return;
      }

      if (state.idWithQuantity[payload.data.product.id] === 1) {
        return {
          ...state,
          idWithQuantity: {
            ...state.idWithQuantity,
            [payload.data.product.id]: 0,
          },
          totalQuantity: state.totalQuantity - 1,
          cartItems: state.cartItems.filter(
            item => item.id !== payload.data.product.id,
          ),
        };
      }

      if (state.idWithQuantity[payload.data.product.id] > 1) {
        return {
          ...state,
          idWithQuantity: {
            ...state.idWithQuantity,
            [payload.data.product.id]:
              state.idWithQuantity[payload.data.product.id] - 1,
          },
          totalQuantity: state.totalQuantity - 1,
        };
      }

    case CartActions.REMOVE:
      return {
        ...state,
        idWithQuantity: {
          ...state.idWithQuantity,
          [payload.data.product.id]: 0,
        },
        totalQuantity:
          state.totalQuantity - state.idWithQuantity[payload.data.product.id],
        cartItems: state.cartItems.filter(
          item => item.id !== payload.data.product.id,
        ),
      };

    case CartActions.EMPTY_CART:
      return initialState;

    default:
      return state;
  }
};
