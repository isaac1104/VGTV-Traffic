import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

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
      }
    }

    if (isFetching || !data.rows) {
      return <h1 style={style.text}>Loading...</h1>
    }
    return data.rows[0].elements.map(dest => {
      return (
        <h3 key={dest.duration.value} style={style.text}>{dest.duration.text}</h3>
      )
    });
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
