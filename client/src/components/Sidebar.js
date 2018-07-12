import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
const { Sider } = Layout;

class Sidebar extends Component {
  render() {
    const style = {
      text: {
        color: '#fff',
        marginLeft: '30px'
      },
      container: {
        marginTop: '20px'
      }
    }

    return (
      <Sider width={300}>
        <div style={style.container}>
          <h1 style={style.text}><Icon type="home" /> ETA To:</h1>
          <h3 style={style.text}>Fullerton</h3>
          <h3 style={style.text}>Cerritos</h3>
          <h3 style={style.text}>Lake Forest</h3>
          <h3 style={style.text}>Newport Beach</h3>
          <h3 style={style.text}>Los Angeles</h3>
        </div>
      </Sider>
    );
  }
}

export default Sidebar;
