import React, { Component } from 'react';
import GridColumn from './GridColumn';
import './ProductGrid.css';
import { Product } from './types/Product';

type ProductGridProps = {
    products: Product[],
    addToCartEvent: (p:Product) => any;
}

export default class ProductGrid extends Component<ProductGridProps, {}> {

    render(){
        const { products, addToCartEvent } = this.props;
        const block = Math.round(products.length/4);
        const productsArrayView: Array<Array<Product>> = [[],[],[],[]];

        products.forEach( (product, index) => {
            var rownIdx = Math.trunc((index + block) / block);
            console.log(rownIdx)
            productsArrayView[rownIdx-1].push(product);
        });
        
        console.log(productsArrayView);

        return (<div className="container-grid">
            <div className="row">
                <GridColumn addToCartEvent={addToCartEvent} products={productsArrayView[0]}/>
                <GridColumn addToCartEvent={addToCartEvent} products={productsArrayView[1]}/>
                <GridColumn addToCartEvent={addToCartEvent} products={productsArrayView[2]}/>
                <GridColumn addToCartEvent={addToCartEvent} products={productsArrayView[3]}/>
            </div>
        </div>)
    }    
}