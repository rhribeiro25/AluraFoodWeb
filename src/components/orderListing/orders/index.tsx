import axios from 'axios';
import { useState, useEffect } from 'react';
import IOrder from '../../../interfaces/IOrder';
import estilos from './Order.module.scss';
import Product from '../products';

interface OrderProps {
  order: IOrder
}

const Order = ({ order }: OrderProps) => {


  return (<section className={estilos.Order}>
    <div className={estilos.Titulo}>
    {order.orderItems?.map(item => <Product product={item.product} key={item.product.id} />)}
    </div>

  </section>)
}

export default Order
