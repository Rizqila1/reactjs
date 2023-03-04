import React, { useEffect, useState } from "react";
import axios from "axios";
import "../CSS/data.css"
import { Container } from "react-bootstrap";
import Loader from "../Loader/Loader";

const Data = () => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then ((response) => {
            // console.log("RES", response);
            setTimeout(() => {
                setLoading(false)
                setUser(response.data);
            }, 1000)
        })
        .catch ((error) => {
            console.log(error);
        });
    }, []);


    return (
            <Container fluid>
                <br/>
                <h2 className="topTitle">Data Client</h2>
                <div className="d-flex justify-content-center">
                <table style={{width: "95%"}}>
                    {loading? <Loader/> :
                        <tbody style={{border: "2px solid #222222"}}>
                            <tr className="tRow">
                                <th className="tHead">NAME</th>
                                <th className="tHead">EMAIL</th>
                                <th className="tHead">PHONE NUMBER</th>
                                <th className="tHead">ADDRESS</th>
                                <th className="tHead">WEBSITE</th>
                            </tr>
                            {user.map((data) =>
                            <tr key={data.id} className="tRow-data">
                                <td className="td">{data.name}</td>
                                <td className="td">{data.email}</td>
                                <td className="td">{data.phone}</td>
                                <td className="td">{data.address.city}{` `}{data.address.street}{` `}{data.address.suite}</td>
                                <td className="td">{data.website}</td>
                            </tr>
                            )}
                        </tbody>
                    }
                </table>
                </div>
            </Container>
    )
};

export default Data;