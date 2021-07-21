import React, { Fragment } from 'react';
import Form from './form';
import Dvds from './Dvds';
import DvdCard from './DvdCard';
export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <DvdCard />
      <Dvds />
    </Fragment>
  );
}
