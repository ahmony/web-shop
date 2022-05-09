import React from 'react'
import { useParams } from 'react-router-dom'

interface propsInt
{
    items: {
        id: number,
        title: string,
        price: number,
        description: string,
        quantity: number,
        img: string
    }[]
}

const Single = (props: propsInt): JSX.Element =>
{
    const { items } = props;
    const { name } = useParams();
    const data = items.filter((item: any) => item.title === name);
    let options = [];
    for (let i = 1; i <= data[0].quantity; i++)
    {
        options.push(<option key={i} value={i}>{i}</option>);
    }
    return (
        <div>

            <section className="shopHeading text-center bg-light py-5">
                <h2 className="fw-bolder">Single product page</h2>
                <p className="fw-lighter">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
            </section>

            <section className="single py-5">
                <article className="container">
                    {<div className="row align-items-center">
                        <div className="col-md-6">
                            <img
                                src={data[0].img}
                                alt=""
                                className="img-fluid rounded shadow-lg"
                            />
                        </div>
                        <div className="col-md-6">
                            <div className="price d-flex justify-content-between">
                                <h5>{data[0].title}</h5>
                                <h5>{data[0].price}$</h5>
                            </div>
                            <select className="form-select" aria-label="Default select example">
                                {options}
                            </select>
                            <p className="py-4">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Cupiditate architecto accusantium nulla esse sed sunt ad
                                dignissimos exercitationem minima porro. Lorem ipsum, dolor sit
                                amet consectetur adipisicing elit. A dolorum in voluptas quod
                                autem exercitationem.
                            </p>
                            <a href="" className="button">Add to cart</a>
                        </div>
                    </div>}
                </article>
            </section>
        </div>
    )
}

export default Single;