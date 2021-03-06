import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from '../Navbar'
import {Product} from '../types/Product'

interface DetailPageProps {}
type DetailPageState = {
    products: Product[]
}

export default class DetailPage extends Component<
    DetailPageProps,
    DetailPageState
> {

    state: DetailPageState = {
        products: []
    }

    render(){
        const { products } = this.state;
        console.log("state", products)
        return (
            <Container>
                <h3>Detail</h3>
            </Container>
        )
    }
}
