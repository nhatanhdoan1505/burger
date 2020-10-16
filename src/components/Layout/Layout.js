import React, { Component } from 'react';
import "./Layout.css";
import Aux from "../../hoc/Au";
import Toolbar from '../UI/Navigation/ToolBar/Toolbar';
import SideDrawer from '../UI/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    drawerToggleClickHandler = () => {
        this.setState(prevState => {
            return {showSideDrawer : !prevState.showSideDrawer}        
        })
    }
    render () {
        return(
            <Aux>
                <Toolbar drawerToggleClick={this.drawerToggleClickHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}/>
                <main className="Content">
                {this.props.children}
                </main>
            </Aux>
        )
    }
}
export default Layout;