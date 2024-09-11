import IPrato from '../../../interfaces/IProduct';
import estilos from './Product.module.scss';

interface ProductsProps {
  product: IPrato
}

const Product = ({ product }: ProductsProps) => {
  return (<div className={estilos.Prato}>
    {/* <div className={estilos.Container}>
      <div>
        <div className={estilos.EfeitoTorcao}>
          <img src={product.name} alt={product.name}/>
        </div>
      </div>
    </div> */}
    <div className={estilos.Conteudo}>
      <h3>{product.id}</h3>
      <div className={estilos.Tag}>
        {product.name}
      </div>
      <div>
        {product.description}
      </div>
    </div>
  </div>)
}

export default Product