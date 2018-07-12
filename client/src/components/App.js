import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Map from './Map';
import { Layout } from 'antd';
const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <Sidebar />
        <Layout>
          <Content>
            <Map />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
