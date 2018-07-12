import React, { Component } from 'react';

class ETAData extends Component {
  render() {
    const style = {
      text: {
        color: '#fff',
        marginLeft: '30px'
      }
    }

    return (
      <div>
        <h3 style={style.text}>Fullerton</h3>
        <h3 style={style.text}>Cerritos</h3>
        <h3 style={style.text}>Newport Beach</h3>
        <h3 style={style.text}>Los Angeles</h3>
      </div>
    );
  }
}

export default ETAData;
