import React, { Component } from 'react'
import Producto from './Prodcuto'

const styles = {
  productos:{
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  gap: {
    width: '10px'
  }
}

class Productos extends Component {
  render(){
    const productos = this.props.productos

    return (
      <div style={styles.productos}>
        {productos.map(producto => { 
          return (
            <Producto
              agregarAlCarro={this.props.agregarAlCarro}
              key={producto.name}
              producto={producto}
            />
          ) 
        })}
      </div>
    )
  }
}

export default Productos;
