import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cartStateInt } from '../redux/reducers/cart';
import { deleteFromCart } from '../redux/actions/actions';

const Cart = (): JSX.Element =>
{
    const cartProducts = useSelector((state: any) => state.cart);
    const dispatch = useDispatch();
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
                                    <th scope='col'>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartProducts.map((product: cartStateInt) => <tr key={id}>
                                    <th scope="row">{++id}</th>
                                    <td>{product.title}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.quantity * product.price}$</td>
                                    <td><button onClick={() => dispatch(deleteFromCart(product.title, product.id))} className='btn btn-danger'>X</button></td>
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
