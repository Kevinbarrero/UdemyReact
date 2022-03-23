import {Component} from 'react'
import '../styles/producto.css';
import Button from './Button'
const styles= {
    producto:{
        border: '1px solid #eee',
        boxShadow: '0 5px 5px rgba(0,0,0,0.1)',
        width: '30%',
        padding: '10px 15px',
        borderRadius: '5px'
    },
    img:{
        width: '100%',
        height: '70%',
        
    }
}
class Producto extends Component{
    render(){
        const { producto, agregarAlCarro } = this.props
        return(
            <div style = {styles.producto}>
                <img alt= {producto.name} style={styles.img} src={producto.img}/>
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
                <Button onClick={() => agregarAlCarro(producto)}>
                    Agregar al carro
                </Button>
            </div>
        )
    }
}
export default Producto