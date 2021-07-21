import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addDvd } from '../../actions/dvds';

export class DvdForm extends Component {
  state = {
    barcode: '',
    title: '',
    imageUrl: '',
    cexSell: '',
    cexBuy: '',
    cexTrade: '',
  };

  static propTypes = {
    addDvd: PropTypes.func.isRequired,
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { barcode, title, imageUrl, cexSell, cexBuy, cexTrade } = this.state;
    const dvd = { barcode, title, imageUrl, cexSell, cexBuy, cexTrade };
    this.props.addDvd(dvd);
    this.setState({
      barcode: '',
      title: '',
      imageUrl: '',
      cexSell: '',
      cexBuy: '',
      cexTrade: '',
    }); //Clears state on good and bad post requests atm
  };

  render() {
    const { barcode, title, imageUrl, cexSell, cexBuy, cexTrade } = this.state;
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
            <label>Image Url</label>
            <input
              className='form-control'
              type='text'
              name='imageUrl'
              onChange={this.onChange}
              value={imageUrl}
            />
          </div>
          <div className='form-group'>
            <label>cexSell</label>
            <input
              className='form-control'
              type='number'
              name='cexSell'
              onChange={this.onChange}
              value={cexSell}
            />
          </div>
          <div className='form-group'>
            <label>cexBuy</label>
            <input
              className='form-control'
              type='number'
              name='cexBuy'
              onChange={this.onChange}
              value={cexBuy}
            />
          </div>
          <div className='form-group'>
            <label>cexTrade</label>
            <input
              className='form-control'
              type='number'
              name='cexTrade'
              onChange={this.onChange}
              value={cexTrade}
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

export default connect(null, { addDvd })(DvdForm);
