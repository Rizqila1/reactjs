import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./Router/Home/About";
import Bio from "./Router/Home/Bio/Bio";
import FemaleBio from "./Router/Home/Bio/FemaleBio";
import MaleBio from "./Router/Home/Bio/MaleBio";
import Data from "./Router/Home/Data";
import Empty from "./Router/Home/Empty";
import Home from "./Router/Home/Home";
import RouterIndex from "./Router/Index";


const Main = () => {
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<RouterIndex/>}>
                            <Route path="/home" element={<Home/>}></Route>
                            <Route path="/data" element={<Data/>}></Route>
                            <Route path="/bio" element={<Bio/>}></Route>
                            <Route path="/bio/male" element={<MaleBio/>}></Route>
                            <Route path="/bio/female" element={<FemaleBio/>}></Route>
                            <Route path="/about/:list" element={<About/>}></Route>
                            <Route path="/empty/:params" element={<Empty/>}></Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        )
    };

export default Main;