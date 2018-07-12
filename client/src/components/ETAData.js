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

    if (isFetching || !data.rows) {
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
        <h1 style={{ color: '#fff' }}><Icon type="home" /> ETA To:</h1>
        {data.rows[0].elements.map(dest => {
          return <h3 key={dest.duration.value} style={style.text}>{dest.duration.text}</h3>
        })}
      </div>
    );
  }

  render() {
    console.log(this.props.data);
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
