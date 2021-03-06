import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from '../Navbar'
import ProductGrid from '../ProductGrid'
import {Product} from '../types/Product'
import AWS from 'aws-sdk';

interface HomePageProps {}
type HomePageState = {
    products: Product[]
}

export default class HomePage extends Component<
    HomePageProps,
    HomePageState
> {

    state: HomePageState = {
        products: []
    }

    queryProducts(){

        AWS.config.update({
            region: "eu-west-1"
        });

        
        const docClient = new AWS.DynamoDB.DocumentClient();
        var params = {
            TableName : "catalog_products",
            FilterExpression: "contains (category, :cat1)",
            ExpressionAttributeValues: {
                ":cat1":"st_patricks_day"
            }
        };
    
        docClient.scan(params, function(err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        });


        const url = 'http://localhost:8080/catalog.json'
        fetch(url)
            .then(response => response.json())
            .then(json => {
                console.log(json.product)
                this.setState({ products:json.product })
            })
    }

    componentDidMount(){
        console.log("did m")
        this.queryProducts();
    }

    inputChange = (e: React.FormEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        //this.setState({input:newValue});
    }

    addToCartEvent = (product: Product) => {
        console.log(product);
    }

    render(){
        const { products } = this.state;
        console.log("state", products)
        return (
            <Container>
                <Navbar /*onCategoryChange={this.inputChange}*//>
                <ProductGrid addToCartEvent={this.addToCartEvent} products={products}/>
            </Container>
        )
    }
}
