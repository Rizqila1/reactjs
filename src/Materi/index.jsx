import React from "react";
import Content from "./Lifecycle/Content";
import Header from "./Lifecycle/Header";





export default class Life extends React.Component {
    render () {

        return (
            <div>
                <Header/>
                <Content/>
            </div>
        )
    }
}