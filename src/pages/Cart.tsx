import React from 'react'
import { useSelector } from 'react-redux';
import { cartStateInt } from '../redux/reducers/cart';

const Cart = (): JSX.Element =>
{
    const cartProducts = useSelector((state: any) => state.cart);
    let id = 0;
    return (

        <section className="single py-5">
            <article className="container">
                <div className="row align-items-center">
                    <div className="col-md-10 mx-auto">
                        <table className="table table-striped table-hover shadow-lg">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartProducts.map((product: cartStateInt) => <tr key={id}>
                                    <th scope="row">{++id}</th>
                                    <td>{product.title}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.quantity * product.price}$</td>
                                </tr>)}
                            </tbody>
                        </table>
                        <h5>Costs: {cartProducts.reduce((total: any, value: any) => total + value.price * value.quantity, 0)}$</h5>
                        <a href="" className="button mt-4">Payment process</a>
                    </div>
                </div>
            </article>
        </section>

    )
};

export default Cart;
