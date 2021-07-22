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
    const imgStyle = {
      width: '100%',
      display: 'block',
      'margin-left': 'auto',
      'margin-right': 'auto',
    };

    const tableStyle = {
      width: '100%',
      'font-size': '25px',
    };

    const titleStyle = {
      'font-size': '45px',
      'text-align': 'center',
    };

    const cardStyle = {
      'margin-top': '10px',
    };

    const buttonDivStyle = {
      'display': 'flex',
      'justify-content': 'space-between',
      'width': '100%',
    };

    return (
      <Fragment>
        <div class='card' style={cardStyle}>
          <div class='row'>
            <aside class='col-sm-5 border-right'>
              <img src={this.props.singleDvd.imageUrl} style={imgStyle} />
            </aside>
            <aside class='col-sm-7'>
              <article class='card-body p-5'>
                <h3 class='title mb-3' style={titleStyle}>
                  {this.props.singleDvd.title}
                </h3>

                <dl class='item-property'>
                  <table style={tableStyle}>
                    <tbody>
                      <tr>
                        <td>Cex Sell</td>
                        <td>{this.props.singleDvd.cexSell}</td>
                      </tr>
                      <tr>
                        <td>Cex Buy</td>
                        <td>{this.props.singleDvd.cexBuy}</td>
                      </tr>
                      <tr>
                        <td>Cex Trade</td>
                        <td>{this.props.singleDvd.cexTrade}</td>
                      </tr>
                    </tbody>
                  </table>
                </dl>
                <div style={buttonDivStyle}>
                  <a
                    href='#'
                    class='btn btn-lg rounded btn-primary text-uppercase'
                  >
                    {' '}
                    Edit{' '}
                  </a>
                  <a
                    href='#'
                    class='btn btn-lg rounded btn-danger text-uppercase'
                  >
                    {' '}
                    <i class='fas fa-shopping-cart'></i> Delete{' '}
                  </a>
                </div>
              </article>
            </aside>
          </div>
        </div>
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
