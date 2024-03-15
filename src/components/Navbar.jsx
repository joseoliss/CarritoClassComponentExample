import { Component } from "react";
import Logo from './Logo'
import Carro from './Carro'

const styles = {
  navbar: {
    display: 'flex',
    felxDIrection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position:'relative',
    padding: '0 50px',
    boxShadow: '0 3px 3px rgb(0,0,0,0.1)',
    backgroundColor: '#363636'
  }
}

class Navbar extends Component{
  render(){

    const { carro } = this.props

    return (
      <nav style={styles.navbar}>
       <Logo/>
       <Carro carro={carro}/>
      </nav>
    )
  }
}

export default Navbar;