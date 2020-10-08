import React from 'react';
import BurgerControl from './BurgerControl/BurgerControl';
import './BurgerControls.css';

const controls = [{
        label: "Salad",
        type: 'salad'
    },
    {
        label: "Meat",
        type: 'meat'
    },
    {
        label: "Cheese",
        type: 'cheese'
    },
    {
        label: "Bacon",
        type: 'bacon'
    }
];

const burgerControls = (props) => {
    return ( 
        <div className = "BurgerControls" > 
        <p>Current Price <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctr => ( <
                BurgerControl 
                key = {ctr.label}
                label = {ctr.label}
                added = {() => props.ingredientsAdded(ctr.type)}
                removed = {() => props.ingredientsRemoved(ctr.type)}
                disabled = {props.disabled[ctr.type]}
                />  
            ))} 
            <button 
            className="OrderButton"
            disabled={!props.purchaseable}
            onClick={props.ordered}
            >ORDER NOW</button>
        </div>

    )
}


export default burgerControls;