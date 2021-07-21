import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;

    // ERRORS
    if (error !== prevProps.error) {
      // Barcode
      if (error.msg.barcode)
        alert.error(`Barcode: ${error.msg.barcode.join()}`);
      // Title
      if (error.msg.title) alert.error(`Title: ${error.msg.title.join()}`);
      // Login
      if (error.msg.non_field_errors)
        alert.error(error.msg.non_field_errors.join());
    }

    // MESSAGES
    if (message !== prevProps.message) {
      // DVD Items
      if (message.dvdDeleted) alert.success(message.dvdDeleted);
      if (message.dvdAdded) alert.success(message.dvdAdded);
    }
  }
  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
