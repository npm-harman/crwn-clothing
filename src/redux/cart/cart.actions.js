import cartActionTypes from './cart.types';

export const toggleCartDropdownHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_DROPDOWN_HIDDEN
});

export const addItemToCart = item => ({
    type: cartActionTypes.ADD_ITEM_TO_CART,
    payload: item
});