import React from "react";
import Hook from "./Hook/Hook";
import Top from "./Hook/Top";

export default class Main extends React.Component {
    render () {

        return (
            <div>
                <Top/>
                <Hook/>
            </div>
        )
    }
}