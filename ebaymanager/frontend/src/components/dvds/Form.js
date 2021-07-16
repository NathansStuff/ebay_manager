import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addDvd } from '../../actions/dvds';

export class form extends Component {
  EMPTY_STATE = {
    barcode: '',
    title: '',
  };

  state = EMPTY_STATE;

  static propTypes = {
    addDvd: PropTypes.func.isRequired,
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { barcode, title } = this.state;
    const dvd = { barcode, title };
    this.props.addDvd(dvd);
    this.setState(this.EMPTY_STATE);
  };

  render() {
    const { barcode, title } = this.state;
    return (
      <div className='card card-body mt-4 mb-4'>
        <h2>Add DVD</h2>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Barcode</label>
            <input
              className='form-control'
              type='number'
              name='barcode'
              onChange={this.onChange}
              value={barcode}
            />
          </div>
          <div className='form-group'>
            <label>Title</label>
            <input
              className='form-control'
              type='text'
              name='title'
              onChange={this.onChange}
              value={title}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addDvd })(form);
