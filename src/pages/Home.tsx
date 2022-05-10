import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { productsStateInt } from '../redux/reducers/products';

const Home = (): JSX.Element =>
{

    const scrollToProducts = (e: any) =>
    {
        e.preventDefault();
        const my_element = document.getElementById("current")!;
        my_element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
    }

    const products: productsStateInt[] = useSelector((state: any) => state.products)

    return (
        <div>
            <div
                id="carouselExampleCaptions"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./img/slide_1.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block text-end">
                            <p className="lead">Woman collection</p>
                            <h2 className="display-4 fw-bold mb-3">
                                Show
                                <span
                                > your <br />personal </span>style
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur <br />
                                adipisicing elit. Tenetur, veniam!
                            </p>
                            <a style={{ cursor: 'pointer' }} onClick={scrollToProducts} className="button">View collection</a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="./img/slide_2.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block text-start">
                            <p className="lead">Man collection</p>
                            <h2 className="display-4 fw-bold mb-3">
                                Show
                                <span> your <br />
                                    personal </span>style
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur <br />
                                adipisicing elit. Tenetur, veniam!
                            </p>
                            <a style={{ cursor: 'pointer' }} onClick={scrollToProducts} className="button">View collection</a>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <section id='current' className="products py-5">
                <article className="container">
                    <div className="row">

                        {products.map((item: any) =>
                        {
                            return <div className="col-md-4 col-sm-6" key={item.id}>
                                <div className="card" >
                                    <div className="holder">
                                        <Link to={`/single/${item.title}`}><img src={item.img} style={{ cursor: 'pointer' }} className="card-img-top" alt="..." /></Link>
                                    </div>
                                    <div className="card-body">
                                        <div className="price d-flex justify-content-between">
                                            <h5 className="card-title">{item.title}</h5>
                                            <h5>{item.price}$</h5>
                                        </div>
                                        <p className="card-text">
                                            {item.description}
                                        </p>
                                        <Link to={`/single/${item.title}`} className="button">Shop now</Link>
                                    </div>
                                </div>
                            </div>
                        })}

                    </div>
                </article>
            </section>

            <section className="about py-5 bg-light">
                <article className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 text-center">
                            <div className="border p-3 border-dark rounded">
                                <i className="fa-solid fa-hand-holding-dollar"></i>
                                <h5 className="fw-bolder my-2">Money back guarantee</h5>
                                <p>Lorem, ipsum dolor.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 text-center">
                            <div className="border p-3 border-dark rounded">
                                <i className="fa-solid fa-truck"></i>
                                <h5 className="fw-bolder my-2">Free delivery</h5>
                                <p>Lorem, ipsum dolor.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 text-center">
                            <div className="border p-3 border-dark rounded">
                                <i className="fa-solid fa-headset"></i>
                                <h5 className="fw-bolder my-2">Always support</h5>
                                <p>Lorem, ipsum dolor.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 text-center">
                            <div className="border p-3 border-dark rounded">
                                <i className="fa-solid fa-credit-card"></i>
                                <h5 className="fw-bolder my-2">Secure payments</h5>
                                <p>Lorem, ipsum dolor.</p>
                            </div>
                        </div>
                    </div>
                </article>
            </section>

            <section className="discoverOff d-flex align-items-center">
                <article className="container text-end">
                    <p className="lead">Woman Collection</p>
                    <h2 className="display-4 fw-bolder">50% OFF</h2>
                    <a style={{ cursor: 'pointer' }} onClick={scrollToProducts} className="button mb-2">Discover now</a>
                    <p>Limited time offer</p>
                </article>
            </section>
        </div >
    )
}

export default Home;