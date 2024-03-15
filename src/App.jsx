import { Component } from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Navbar from './components/Navbar'

class App extends Component {
  state = {
    productos: [
      { name: 'Tomate', price: 150000, url: '/img/productos/tomate.jpg' },
      { name: 'Aguacate', price: 2000, url: '/img/productos/aguacate.jpg' },
      { name: 'Lechuga', price: 400, url: '/img/productos/lechuga.jpg' }
    ],
    carro: [
      // { name: 'Tomate', price: 1500, url: '/img/productos/tomate.jpg', cantidad: 1 }
    ]
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state

    if (carro.find(x => x.name === producto.name)){
      
      const newCarro = carro.map(car => car.name === producto.name
          ? ({
              ...car,
              cantidad: car.cantidad + 1
            })
          : car)

      return this.setState({
        carro: newCarro
      })

    }

    this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1
      })
    })
  }

  render() {
    return (
      <>
        <Navbar carro={this.state.carro}/>
        <Layout>
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </>
    )
  }
}

export default App
