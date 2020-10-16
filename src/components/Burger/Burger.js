import React from 'react';
import './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';



const burger = (props) => {
    let tranformIngredients = Object.keys(props.ingredients)
        .map(iKey => {
            return [...Array(props.ingredients[iKey])].map((_, i) => {
                return <BurgerIngredients type={iKey} key={iKey+i}/>
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        })
        
    if(tranformIngredients.length === 0){
        tranformIngredients = <p>Start adding ingredients</p>
    }
    return(
        <div className="Burger">
            <BurgerIngredients type="bread-top"/>
                {tranformIngredients}
            <BurgerIngredients type="bread-bottom"/>
        </div>
    )
}

export default burger;

