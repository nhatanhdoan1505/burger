import React, { Component } from 'react'
import Aux from "../../hoc/Au"
import Burger from "../../components/Burger/Burger";
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/UI/OrderSummary/OrderSummary';

const INGREDIENTS_PRICE = {
    salad: 0.5,
    cheese: 0.3,
    meat: 1.4,
    bacon: 0.7
}


class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad : 0,
            bacon : 0,
            meat : 0,
            cheese : 0
        },
        price: 4,
        purchase: false,
        purchasing: false,

    }

    updatePurchaseable = (ingredients) => {

        const sum = Object.keys(ingredients)
        .map(iKey => {
            return ingredients[iKey];
        })
        .reduce((sum, el) => {
            return sum + el;
        })
        
        this.setState({purchase: sum > 0});
    }

    addIngredientHandler = (type) => {
        let oldCount = this.state.ingredients[type];
        let updateCount = oldCount + 1;
        let updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updateCount;
        let priceAdition = INGREDIENTS_PRICE[type];
        let oldPrice = this.state.price;
        let newPrice = priceAdition + oldPrice;
        this.setState({price: newPrice , ingredients: updateIngredients});
        this.updatePurchaseable(updateIngredients);
    }

    removeIngredientHandler = (type) => {
        let oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        let updateCount = oldCount - 1;
        let updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updateCount;
        let priceDeduction = INGREDIENTS_PRICE[type];
        let oldPrice = this.state.price;
        let newPrice = oldPrice - priceDeduction;
        this.setState({price: newPrice , ingredients: updateIngredients});
        this.updatePurchaseable(updateIngredients);
    }

    purchasingHandler = () => {
        this.setState({purchasing: true});
    }

    cancelModalHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        alert("Continue");
    }

    render() {
        
        let disableInfo = {
            ...this.state.ingredients
        };

        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0;
        }
        console.log(this.state.purchase);
        return(
        <Aux>   
            
            <Burger ingredients={this.state.ingredients}/>
            <Modal 
            show={this.state.purchasing}
            clicked={this.cancelModalHandler}>
                <OrderSummary 
                    ingredients={this.state.ingredients} 
                    purchaseCancel={this.purchaseCancelHandler}
                    purchaseContinue={this.purchaseContinueHandler}
                    totalPrice={this.state.price}
                />
            </Modal>
            <BurgerControls 
                ingredientsAdded = {this.addIngredientHandler}
                ingredientsRemoved = {this.removeIngredientHandler}
                disabled={disableInfo}
                purchaseable={this.state.purchase}
                price={this.state.price}
                ordered={this.purchasingHandler}/>
        </Aux>
        );
    }
}

export default BurgerBuilder;
