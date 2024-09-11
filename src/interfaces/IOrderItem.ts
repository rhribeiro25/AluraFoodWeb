import IProduct from "./IProduct";

export default interface IOrderItem {
  id: number
  description: string
  qtt: number
  product: IProduct
}