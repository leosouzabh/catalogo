import './CardProduct.css';
import { Product } from "./types/Product";
import * as Icon from 'react-bootstrap-icons';

type CardProductProps = {
    product: Product;
    addToCartEvent: (p:Product) => any;
}

const CardProduct = (props:CardProductProps) => {
        const { product, addToCartEvent } = props;
        const imgUrl = `https://leo-bucket-cert1.s3-eu-west-1.amazonaws.com/catalogo/product/${product.img}`;
        console.log(imgUrl);
        return (
            <div className="card card-product">
                <img className="card-img-top" src={imgUrl}></img>
                <div className="card-body body-product">
                    <p className="card-text">
                        <b>{product.price}€</b>
                        <Icon.BagPlus size={24} color="#b293c5" onClick={() => {addToCartEvent(product)}} style={{float:"right"}}/> 
                    </p>
                </div>
            </div>
        );
        
    } 
    
//    <Icon.CartPlus size={30} style={{float:"right"}}/>
export default CardProduct;