import React from 'react';
import Banner from '../../components/banner';
import OrderDataGrid from '../../components/orderDataGrid';
import NavBar from '../../components/navBar';
import Rodape from '../../components/footer';

function ShowcaseOrders() {
  return (
    <>
      <NavBar />
      <OrderDataGrid />
      <Rodape />
    </>
  );
}

export default ShowcaseOrders;
