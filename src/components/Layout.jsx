import React,{ Component } from 'react'
import Title from './Title'

const styles = {
  layout:{
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left'
  },
  container: {
    width: '1200px'
  }
}

class Layout extends Component{  
  render(){
    return (
      <div style={styles.layout}>
        <Title/>
        <div style={styles.container}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout;