import React from 'react';
import { connect } from 'react-redux';

import './cart-dropdown.styles.scss';

import CartItem from '../cart-item/cart-item.component';

import CustomButton from '../custom-button/custom-button.component';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items' >
            {
                cartItems.map(item => < CartItem key={item.id} item={item} />)
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default connect(mapStateToProps)(CartDropdown);
