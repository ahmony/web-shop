import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { productsStateInt } from '../redux/reducers/products';

const Collection = (): JSX.Element =>
{
    useEffect(() =>
    {
        window.scrollTo(0, 0);
    }, [])

    const products: productsStateInt[] = useSelector((state: any) => state.products)
    const [searchState, setSearchState] = useState(products);
    const searchChange = (event: any) =>
    {
        setSearchState(() => products.filter(person =>
            person.title.toLowerCase().includes(event.target.value)
        ))
    }

    return (
        <div className='container'>
            <div className="row d-flex justify-content-center">
                <div className="col-md-8">
                    <div className="search">
                        <i className="fa fa-search"></i>
                        <input onChange={searchChange} type="text" className="form-control" placeholder='Search our collection...' />
                    </div>
                </div>
            </div>
            <br />

            <div className="row">
                {searchState.map((item: any) =>
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
        </div>
    )
}

export default Collection;