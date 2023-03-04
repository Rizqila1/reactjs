import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/bio.css"

const Bio = () => {
    return (
        <div className="main">
            <br/>
            <h1 className="text">Choose By Gender</h1>
                <div className="d-flex justify-content-around">
                    <Link to='/bio/female' className="bio">Female</Link>
                    <Link to='/bio/male' className="bio">Male</Link>
                </div>
        </div>
    )
}

export default Bio;