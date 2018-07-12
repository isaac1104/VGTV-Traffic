import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Icon, Spin } from 'antd';

class ETAData extends Component {
  componentDidMount() {
    this.props.fetchDistanceData();
  }

  renderDistanceData() {
    const { data, isFetching } = this.props.data;
    const style = {
      text: {
        color: '#fff',
        marginLeft: '30px'
      },
      spin: {
        display: 'flex',
        justifyContent: 'center'
      }
    }

    if (isFetching) {
      return (
        <div style={style.spin}>
          <Spin
            indicator={<Icon type="loading" />}
            size='large'
            tip='Fetching Traffic Data...'
          />
        </div>
      );
    }
    return (
      <div>
        <h1 style={{ color: '#fff', marginLeft: '30px' }}><Icon type="home" /> ETA To:</h1>
        {data.map(data => {
          return <h3 key={data.destination} style={style.text}>{data.destination}: {data.duration}</h3>
        })}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderDistanceData()}
      </div>
    );
  }
}

function mapStateToProps({ data }) {
  return {
    data
  }
}

export default connect(mapStateToProps, actions)(ETAData);
