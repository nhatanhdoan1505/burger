import React from 'react';
import Aux from '../../../hoc/Au';
import Button from '../Button/Button';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
    .map(iKey => {
        return (
            <li key={iKey}><span style={{textTransform: 'capitalize'}}>{iKey}: </span><span>{props.ingredients[iKey]}</span></li>
        )
    })
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients: </p>
            {ingredientsSummary}
            <p><strong>Total Price: {props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue Checkout</p>
            <Button btnType={"Danger"} clicked={props.purchaseCancel}>Cancel</Button>
            <Button btnType={"Success"} clicked={props.purchaseContinue}>Continue</Button>
        </Aux>
    )
}

export default orderSummary;