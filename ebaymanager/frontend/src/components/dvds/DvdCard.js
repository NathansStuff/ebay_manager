import React, { Component, Fragment } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

export class DvdCard extends Component {
  render() {
    return (
      <Fragment>
        <Card style={{ width: '18rem' }}>
          <Card.Header>TITLE</Card.Header>
          <Card.Img variant='top' src='holder.js/100px180?text=Image cap' />
          <Card.Body>
            <Card.Title>Barcode</Card.Title>
          </Card.Body>
          <ListGroup className='list-group-flush'>
            <ListGroupItem>CEX Buy</ListGroupItem>
            <ListGroupItem>CEX Sell</ListGroupItem>
            <ListGroupItem>CEX Trade</ListGroupItem>
            <ListGroupItem>
              URL 1<button>Delete</button>
            </ListGroupItem>
            <ListGroupItem>URL 2</ListGroupItem>
            <button>Delete</button>
          </ListGroup>
          <Card.Body>
            <Card.Link href='#'>Card Link</Card.Link>
            <Card.Link href='#'>Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Fragment>
    );
  }
}

export default DvdCard;
