import React from 'react';
import './BurgerControl.css';

const BurgerControl = (props) => {
    return (
        <div className="BurgerControl">
            <div className="Label">{props.label}</div>
            <button 
                className="Less" 
                onClick={props.removed}
                disabled={props.disabled}
                ><p>Less</p></button>
            <button className="More" onClick={props.added}><p>More</p></button>
        </div>
    )
}

export default BurgerControl;