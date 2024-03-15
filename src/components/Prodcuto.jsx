import React,{ Component } from 'react'
import Button from './Button'

const styles = {
  producto:{
    border: '1px solid rgb(68 68 68)',
    boxShadow: '0 5px 5px rgb(0, 0, 0, 0.5)',
    width: '30%',
    padding: '10px 15px 10px',
    marginTop: '10px',
    borderRadius: '5px'
  },
  img: {
    width: '100%'
  }
}


class Producto extends Component{  
  render(){
    const {producto, agregarAlCarro} = this.props

    return (
      <div style={styles.producto}>
        <img style={styles.img} src={producto.url} alt={producto.name} />
        <h3>{producto.name}</h3>
        <p>{producto.price}</p>
        <Button onClick={() => agregarAlCarro(producto)}>
          Agregar al carro
        </Button>
      </div>
    )
  }
}

export default Producto;