import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Clock from 'react-live-clock';
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
        marginLeft: '20px'
      },
      spin: {
        marginTop: '20px',
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
        <h1 style={{ color: '#fff', marginLeft: '20px' }}><Icon type="home" /> ETA To:</h1>
        {data.map(data => {
          return <h3 key={data.destination} style={style.text}>{data.destination}: {data.duration}</h3>
        })}
      </div>
    );
  }

  render() {
    return (
      <Fragment>
        <Clock
          format={'h:mm:ssa'}
          ticking={true}
          timezone={'US/Pacific'}
        />
        {this.renderDistanceData()}
      </Fragment>
    );
  }
}

function mapStateToProps({ data }) {
  return {
    data
  }
}

export default connect(mapStateToProps, actions)(ETAData);
