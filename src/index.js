import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Materi/Router/Home/Home';
import Data from './Materi/Router/Home/Data';
import Bio from './Materi/Router/Home/Bio/Bio';
import MaleBio from './Materi/Router/Home/Bio/MaleBio';
import FemaleBio from './Materi/Router/Home/Bio/FemaleBio';
import About from './Materi/Router/Home/About';
import Empty from './Materi/Router/Home/Empty';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App/>}>
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
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
