import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getDvds } from '../../actions/dvds';

export class Dvds extends Component {
  static propTypes = {
    dvds: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getDvds();
  }

  render() {
    return (
      <Fragment>
        <h2>Dvds List</h2>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Barcode</th>
              <th>Title</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.dvds.map(dvd => (
              <tr key={dvd.id}>
                <td>{dvd.id}</td>
                <td>{dvd.barcode}</td>
                <td>{dvd.title}</td>
                <td>
                  <button className='btn btn-danger btn-sm'>DELETE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  dvds: state.dvds.dvds,
});

export default connect(mapStateToProps, { getDvds })(Dvds);
