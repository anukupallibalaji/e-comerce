import { Row, Col } from 'react-bootstrap'
//import products from '../products'  
import Product from '../components/Product';
import axios from 'axios';
import { useEffect, useState } from 'react'


const Homescreen = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchproducts = async () => {
            const { data } = await axios.get("/products");
            setProducts(data)
        }
        fetchproducts();
    }, [])
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Homescreen
