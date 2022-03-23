import { Component } from "react";
import Button from "./Button";
class Input extends Component{

    render(){
        return(
            <input
                value={this.props.value}
                onChange={this.props.onChange}
            />
        )
    }
}

class App extends Component{
    state = {
        nombre: '',
        apellido:'',
    }

    updateValues = (prop, value) => {
        this.setState({[prop]: value})
    }
    render(){
        return(
            <div>
                Nombre Completo: {`${this.state.nombre} ${this.state.apellido}`}
                <Input value= {this.state.nombre}
                        onChange={e => this.updateValues('nombre', e.target.value)}/>
                <Input value= {this.state.apellido}
                        onChange={e => this.updateValues('apellido', e.target.value)}/>
                <p>
                    <Button>Enviar</Button>
                </p>
            </div>

        )
    }
}
class button extends Component {
    state = {
        valor: 3
    }
    render(){
        return(
            <div>
                <button 
                        className={`btn`} 
                        onClick={() => this.setState({valor: 2})}>
                    Enviar en App
                </button>
            </div>
            )
    }
}


export default App