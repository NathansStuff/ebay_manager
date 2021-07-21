import React, { Fragment } from 'react';
import DvdForm from './DvdForm';
import Dvds from './Dvds';
export default function Dashboard() {
  return (
    <Fragment>
      <DvdForm />
      <Dvds />
    </Fragment>
  );
}
