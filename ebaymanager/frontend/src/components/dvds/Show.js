import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteDvd } from '../../actions/dvds';
import { getSingleDvd } from '../../actions/singleDvd';
export class Show extends Component {
  static propTypes = {
    singleDvd: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getSingleDvd(this.props.id);
  }

  render() {
    return (
      <Fragment>
        <h1>{this.props.id}
        {this.props.singleDvd.barcode}
        </h1>
        
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  singleDvd: state.singleDvd.singleDvd,
});

export default connect(mapStateToProps, {
  getSingleDvd,
})(Show);
