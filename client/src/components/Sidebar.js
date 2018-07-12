import React, { Component } from 'react';
import ETAData from './ETAData';
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
          <ETAData />
        </div>
      </Sider>
    );
  }
}

export default Sidebar;
