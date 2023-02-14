import React from "react";

class ClassComponent extends React.Component {
    state = {value: 0}
    SUM = () => {
        if(this.state.value < 10) {
        this.setState({value: this.state.value + 1});
        }
    }
    MIN = () => {
        if (this.state.value > 0) {
        this.setState({value: this.state.value - 1});
    }
    }

    render () {
        return (
            <div>
                <h1>INI ADALAH CLASS COMPONENT</h1>
                <h2>React ini dibuat oleh {this.props.nama}</h2>
                <p>Pertambahan & Pengurangan dibawah ini dibuat menggunakan state</p>
                <button onClick={this.SUM}>+</button>
                <span>{` `}{this.state.value} {` `}</span>
                <button onClick={this.MIN}>-</button>
                <p>Pertambahan Maksimal = 10 <br></br>Pengurangan Hanya Sampai = 0</p>
            </div>
        )
    }
}

class NewComponent extends React.Component{
    render () {
        return (
            <div>
                <h1>INI ADALAH CLASS NewComponent</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ipsam sint ut, amet officiis inventore distinctio nostrum sed? Praesentium nulla totam odio officia, amet veritatis tempora facere odit consequuntur voluptatem!</p>
                <img src="https://eduwork.id/assets/favicon.png" alt="gambar"></img>
            </div>
            )
    }
}
export default ClassComponent;
export {NewComponent};