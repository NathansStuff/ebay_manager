import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getDvds, deleteDvd } from '../../actions/dvds';
import DvdCard from './DvdCard';

export class Dvds extends Component {
  static propTypes = {
    dvds: PropTypes.array.isRequired,
    getDvds: PropTypes.func.isRequired,
    deleteDvd: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getDvds();
  }

  render() {
    return (
      <Fragment>
        <h2>Dvds List</h2>

        {this.props.dvds.map(dvd => (
          <DvdCard key={dvd.id} dvd={dvd} deleteDvd={this.props.deleteDvd} />
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  dvds: state.dvds.dvds,
});

export default connect(mapStateToProps, {
  getDvds,
  deleteDvd,
})(Dvds);
