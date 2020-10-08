import React from 'react';
import "./Layout.css";
import Aux from "../../hoc/Au";
import Toolbar from '../UI/Navigation/ToolBar/Toolbar';

const layout = (props) => (
    <Aux>
        <Toolbar/>
        <main className="Content">
            {props.children}
        </main>
    </Aux>
)

export default layout;