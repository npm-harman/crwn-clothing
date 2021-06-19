import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartDropdownHidden } from '../../redux/cart/cart.actions'

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartDropdownHidden }) => (
    <div className='cart-icon' onClick={toggleCartDropdownHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartDropdownHidden: () => dispatch(toggleCartDropdownHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);