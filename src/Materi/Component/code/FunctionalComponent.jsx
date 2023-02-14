import { useState } from "react";

const FunctionalComponent = ({math}) =>  {
    let [value, setValue] = useState(2);

    let times = () => {     
        if (value < 1) {
            setValue(value + 2);
        } 
        else {setValue(value * 2)};
    }
    let divide = () => {
        if (value <= 2 && value > 0) {
        setValue(value - 2);
        }
        else{
            setValue(value / 2);
        }
    }

    
    return (
         <div>
    <h1>FUNCTIONAL COMPONENT - {math} </h1>
    <p>KETIKA ANGKA MENCAPAI 2 LALU DITEKAN TOMBOL PEMBAGIAN MAKA AKAN DIKURANGI 2</p>
    <button onClick={times}>X</button>
    <span>{` `} {value} {` `}</span>
    <button onClick={divide}>/</button>
        </div>
    )
}

const FunctionalComponent2 = () => {
    const [value, setValue] = useState(0);

    let SUM = () => {
        if(value < 10) {
        setValue(value + 1);
        }
    }
    
    let MIN = () => {
        if (value > 0) {
        setValue(value - 1)
    }
    }

    return (
        <div>
            <h1>FUNCTIONAL COMPONENT 2</h1>
            <h2>Membuat state menggunakan functional component</h2>
            <button onClick={SUM}>+</button>
            <span>{` `} {value} {` `}</span>
            <button onClick={MIN}>-</button>
            <p>Pertambahan Maksimal = 10 <br></br>Pengurangan Hanya Sampai = 0</p>
        </div>
    )
}

export default FunctionalComponent;
export {FunctionalComponent2};