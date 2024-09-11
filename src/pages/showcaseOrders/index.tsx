import React from 'react';
import Banner from '../../components/banner';
import ListOrders from '../../components/orderListing';
import NavBar from '../../components/navBar';
import Rodape from '../../components/footer';

function ShowcaseOrders() {
  return (
    <>
      <NavBar />
      <ListOrders />
      <Rodape />
    </>
  );
}

export default ShowcaseOrders;
