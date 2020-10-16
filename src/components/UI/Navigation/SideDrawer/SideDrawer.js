import React from 'react';
import './SideDrawer.css';
import Logo from '../../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../Backdrop/Backdrop';
import Aux from '../../../../hoc/Au';

const sideDrawer = (props) => {
    let attachedClasses = ["SideDrawer", "Close"];
    if(props.open){
        attachedClasses = ["SideDrawer", "Open"];
    }
    return (
        <Aux>
        <Backdrop show={props.open} canceled={props.closed}/>
        <div className={attachedClasses.join(" ")}>
            <div className="Logos">
                <Logo/>
            </div>
            <nav className="">
            <NavigationItems/>
            </nav>
        </div>
        </Aux>
    )
}

export default sideDrawer;