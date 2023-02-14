import React from "react";
import ClassComponent, { NewComponent } from "./code/ClassComponent";
import FunctionalComponent, { FunctionalComponent2 } from "./code/FunctionalComponent";

class Component extends React.Component {
    render () {
        return (
            <div>
                <ClassComponent nama="Rizqila"/>
                <FunctionalComponent math="TIMES AND DIVIDE"/>
                <FunctionalComponent2/>
                <NewComponent/>
            </div>
        )
    }
}

export default Component;