import { Container, Row, Col } from 'react-bootstrap'

const Fotter = () => {
    const currentyear = new Date().getFullYear();
    return (
        <footer>
            <Container>
                <Row>
                    <Col className='py-3 text-center'>
                        <p>ecomerce &copy;{currentyear}</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Fotter
