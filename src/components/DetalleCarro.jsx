import React, { Component } from 'react'

const styles = {
  detalleCarro: {
    position: 'absolute',
    right: '10px',
    backgroundColor: 'rgb(54,54,54)', // Color de fondo del div
    border: '1px solid #ccc', // Borde del div
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Sombra del div
    padding: '10px', // Espaciado interno del div
    borderRadius: '5px', // Borde redondeado del div
    maxWidth: '400px', // Ancho máximo del div
    zIndex: '999', // Z-index para asegurarse de que esté por encima de otros elementos
  },
  tabla: {
    width: '100%', // Ajustar la tabla al 100% del ancho del div
    borderCollapse: 'collapse', // Colapso de bordes de la tabla
  },
  th: {
    padding: '8px', // Espaciado interno del encabezado de la tabla
    borderBottom: '1px solid #ddd', // Borde inferior del encabezado de la tabla
    textAlign: 'left', // Alineación del texto del encabezado de la tabla
  },
  td: {
    padding: '8px', // Espaciado interno de las celdas de la tabla
    borderBottom: '1px solid #ddd', // Borde inferior de las celdas de la tabla
    textAlign: 'left', // Alineación del texto de las celdas de la tabla
  },
  tdRight: {
    padding: '8px', // Espaciado interno de las celdas de la tabla
    borderBottom: '1px solid #ddd', // Borde inferior de las celdas de la tabla
    textAlign: 'right', // Alineación del texto de las celdas de la tabla
  },
  total: {
    marginTop: '10px', // Espacio entre la tabla y el total
    textAlign: 'right',
    marginRight: '7px'
  },
}

export class DetalleCarro extends Component {
  render() {
    const { carro } = this.props
    const total = carro.reduce((acc, el) => acc + el.price * el.cantidad, 0).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return (
      <div>
        <div style={styles.detalleCarro}>
        <table style={styles.tabla}>
          <thead>
            <tr>
              <th style={styles.th}>Cantidad</th>
              <th style={styles.th}>Detalle</th>
              <th style={styles.th}>Precio</th>
            </tr>
          </thead>
          <tbody>
          {carro.map(c => {
            return (
              <tr key={c.name}>
                <td style={styles.td}>{c.cantidad}</td>
                <td style={styles.td}>{c.name}</td>
                <td style={styles.tdRight}>{
                  c.price.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
                }</td>
              </tr>
            )
          })}
          </tbody>
        </table>
        <div style={styles.total}>
          Total: <span>{ total}</span>
        </div>
      </div>
      </div>
    )
  }
}

export default DetalleCarro
