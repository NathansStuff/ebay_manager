import React, { Fragment } from 'react';
import Form from './form';
import Dvds from './Dvds';
export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Dvds />
    </Fragment>
  );
}
