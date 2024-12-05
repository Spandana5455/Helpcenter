import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Button, Carousel, Card } from 'react-bootstrap';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import cdimg1 from './images/cdimg1.png';
import cdimg2 from './images/cdimg2.png';
import cdimg3 from './images/cdimg3.png';
import cdimg4 from './images/cdimg4.png';
import './ProductPage.css';

const ProductPage = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <h1 className="fw-bold">Comfortable Sofa</h1>
                    <p>Spacious and stylish sofa, perfect for any living room</p>

                    <h4 className="fw-bold">Price: <span style={{ color: '#000' }}>₹64,999</span></h4>
                    <p>Inclusive of all taxes</p>

                    <p>Review: 
                        <span className="ms-2">
                            {[...Array(5)].map((_, i) => <FaStar key={i} color="gold" />)}
                        </span>
                    </p>

                    <p className="text-danger fw-bold">Free Delivery</p>

                    <div className="d-flex align-items-center mb-2">
                        <FaMapMarkerAlt className="me-2 text-warning" />
                        <span>
                            Delivering to Hyderabad 500032 - <a href="#" className="text-decoration-underline">update location</a>
                        </span>
                    </div>
                    <p className="text-danger">Available to ship in 2-3 days</p>

                    <div className="p-3 border rounded bg-light d-flex justify-content-between align-items-center" style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <div>
                            <p className="fw-bold text-dark">
                                <span className="badge bg-warning text-dark me-2">🏷️</span>Coupon Discount
                            </p>
                            <p>Save 10%</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <Button variant="outline-success" className="fw-bold px-3 py-1">Apply</Button>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card border-0">
                        <Carousel>
                            <Carousel.Item>
                                <img src={cdimg1} alt="Comfortable Sofa" className="d-block w-100 img-fluid rounded" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={cdimg2} alt="Second Slide" className="d-block w-100 img-fluid rounded" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={cdimg3} alt="Third Slide" className="d-block w-100 img-fluid rounded" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={cdimg4} alt="Fourth Slide" className="d-block w-100 img-fluid rounded" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-6">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td><h5>Payment</h5></td>
                                <td className="text-right">Secure Transaction</td>
                            </tr>
                            <tr>
                                <td><h5>Ships From</h5></td>
                                <td className="text-right">Drop Quick</td>
                            </tr>
                            <tr>
                                <td><h5>Sold By</h5></td>
                                <td className="text-right">-</td>
                            </tr>
                            <tr>
                                <td><h5>Details</h5></td>
                                <td className="text-right">-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="col-md-6">
                    <div className="mb-3">
                        <h5 className="fw-bold">Brand Material:</h5>
                    </div>
                    <div className="mb-3">
                        <h5 className="fw-bold">Warranty Type:</h5>
                    </div>
                    <div className="mb-3">
                        <h5 className="fw-bold">Brand Color:</h5>
                    </div>

                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><span className="fw-bold">Additional Information</span></Accordion.Header>
                            <Accordion.Body>
                                Additional details about the product can go here.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><span className="fw-bold">Sofa Information</span></Accordion.Header>
                            <Accordion.Body>
                                Sofa dimensions, materials, and other information can go here.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><span className="fw-bold">About this item</span></Accordion.Header>
                            <Accordion.Body>
                                General information about the item, including usage and care instructions.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>

            <div className="d-flex justify-content-center mt-4">
                <Button variant="success" className="fw-bold me-5 btn-custom-padding">Add to cart</Button>
                <Button variant="success" className="fw-bold me-5 btn-custom-padding">Buy Now</Button>
            </div>

            <SimilarItems />
        </div>
    );
};

const items = [
    { id: 1, title: "Sofa 1", subtitle: "Comfortable Sofa", description: "Spacious and stylish sofa, perfect for any living room.", price: "₹64,999", rating: 5, image: cdimg1 },
    { id: 2, title: "Sofa 2", subtitle: "Modern Sofa", description: "A sleek and modern design to elevate your space.", price: "₹58,499", rating: 4, image: cdimg2 },
    { id: 3, title: "Sofa 3", subtitle: "Classic Sofa", description: "Timeless elegance for your cozy living area.", price: "₹72,999", rating: 5, image: cdimg3 },
    { id: 4, title: "Sofa 4", subtitle: "Luxury Sofa", description: "Premium quality and unmatched comfort.", price: "₹89,999", rating: 4, image: cdimg4 }
];

function SimilarItems() {
    return (
        <div className="container mt-5">
            <h3 className="fw-bold">Similar Items</h3>
            <div className="row">
                {items.map((item) => (
                    <div className="col-md-3 mb-4" key={item.id}>
                        <Card className="h-100 text-center border rounded shadow-sm">
                            <div className="card-img-container">
                                <img src={item.image} alt={item.title} className="card-img" />
                            </div>
                            <Card.Body>
                                <Card.Title className="fw-bold">{item.title}</Card.Title>
                                <Card.Subtitle className="d-flex justify-content-start mb-2">{item.subtitle}</Card.Subtitle>
                                <Card.Text className="d-flex justify-content-start text-start">{item.description}</Card.Text>
                                <div className="d-flex justify-content-start mb-2">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <FaStar key={i} color="gold" />
                                    ))}
                                </div>
                                <h5 className="fw-bold d-flex justify-content-start">{item.price}</h5>
                                <div className="d-flex justify-content-around mt-4 gap-5">
                                    <Button variant="outline-success" className="fw-normal padding">Add to cart</Button>
                                    <Button variant="btn btn-success" className="fw-normal padding">View Details</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductPage;






