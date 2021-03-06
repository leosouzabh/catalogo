import Carousel from 'react-bootstrap/Carousel'
import React, { Component } from 'react';
import { Product } from './types/Product';
import CardProduct from './CardProduct';

type GridColumnProps = {
    products: Product[],
    addToCartEvent: (p:Product) => any;
}

export default class GridColumn extends Component<GridColumnProps, {}> {

    render(){
        const { products, addToCartEvent } = this.props;

        return (
            <div className="col-md-3">
                {products.map( (product:Product) => {
                    return (<CardProduct addToCartEvent={addToCartEvent} product={product} />);
                })}
            </div>
        )
    }
}


