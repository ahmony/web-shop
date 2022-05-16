import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { productsStateInt } from '../redux/reducers/products';
import { useEffect } from 'react';
import { addToCart } from '../redux/actions/actions';


const Single = (): JSX.Element =>
{
    useEffect(() =>
    {
        const element = document.getElementById('current') as HTMLElement;
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
    }, []);


    const products: productsStateInt[] = useSelector((state: any) => state.products)
    const { name } = useParams();
    const dispatch = useDispatch();
    const [product] = products.filter((item: any) => item.title === name);

    let options = [];
    for (let i = 1; i <= product.quantity; i++)
    {
        options.push(<option key={i} value={i}>{i}</option>);
    }
    const optionChange = (event: any) =>
    {
        product.quantity = event.target.value;
    }

    return (
        <div>

            <section className="shopHeading text-center bg-light py-5">
                <h2 className="fw-bolder">Single product page</h2>
                <p className="fw-lighter">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
            </section>

            <section id='current' className="single py-5">
                <article className="container">
                    {<div className="row align-items-center">
                        <div className="col-md-6">
                            <img
                                src={product.img}
                                alt=""
                                className="img-fluid rounded shadow-lg"
                            />
                        </div>
                        <div className="col-md-6">
                            <div className="price d-flex justify-content-between">
                                <h5>{product.title}</h5>
                                <h5>{product.price}$</h5>
                            </div>
                            <select onClick={optionChange} className="form-select" aria-label="Default select example">
                                {options}
                            </select>
                            <p className="py-4">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Cupiditate architecto accusantium nulla esse sed sunt ad
                                dignissimos exercitationem minima porro. Lorem ipsum, dolor sit
                                amet consectetur adipisicing elit. A dolorum in voluptas quod
                                autem exercitationem.
                            </p>
                            <a style={{ cursor: 'pointer' }} onClick={() => dispatch(addToCart(product))} className="button">Add to cart</a>
                        </div>
                    </div>}
                </article>
            </section>
        </div>
    )
}

export default Single;