import IOrder from '../interfaces/IOrder';
import { http } from './http';

export default class OrderClient {
  static async findAll(): Promise<IOrder[]> {
    const { data } = await http.get<IOrder[]>("/orders-orders/orders");
    return data;
  };
}
