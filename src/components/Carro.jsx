import React, { Component } from 'react'
import BubbleAlert from './BubbleAlert'
import DetalleCarro from './DetalleCarro'

const styles = {
  carro: {
    backgroundColor: '#359A2C',
    color: '#fff',
    border: 'none',
    padding: '15px',
    margin: '5px',
    borderRadius: '15px',
    cursor: 'pointer'
  },
  bubble: {
    position: 'relative',
    left: -10,
    textAlign: 'center'
  }
}

export class Carro extends Component {
  state = { mostrarDetalle: false };

  mostrarDetalle = () => {
    this.setState({ mostrarDetalle: !this.state.mostrarDetalle });
  }

  render() {
    const { carro } = this.props
    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)

    return (
      <div style={styles.div}>
        <span style={styles.bubble}>
          {cantidad !== 0
            ? <BubbleAlert contador={cantidad}/>
            : null
          }
        </span>
        <button style={styles.carro} onClick={() => this.mostrarDetalle()}>Carrito</button>
        {this.state.mostrarDetalle ? <DetalleCarro carro={carro}/> : null}
      </div>
    )
  }
}

export default Carro
