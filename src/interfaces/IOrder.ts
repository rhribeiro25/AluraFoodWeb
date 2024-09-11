import IOrderItem from "./IOrderItem";

export default interface IOrder {
  id: number
  orderItems: IOrderItem[]
  orderStatus: string
  orderDate: string
}