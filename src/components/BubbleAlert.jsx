import React, { Component } from 'react'

const styles = {
  bubbleAlert:{
    backgroundColor: '#E9725A',
    borderRadius: '15px',
    color: '#fff',
    padding: '2px 10px',
    fontSize: '0.9rem',
    width: '15px',
    position: 'absolute'
  }
}

export class BubbleAlert extends Component {
  getNumber(counter) { return counter <= 9  ? counter : '9+' }

  render() {
    const counter = this.props.contador

    return (
      <div style={styles.bubbleAlert}>{this.getNumber(counter)}</div>
    )
  }
}

export default BubbleAlert