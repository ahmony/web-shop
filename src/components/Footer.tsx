import React from 'react'

const Footer = (): JSX.Element =>
{
    return (
        <footer className="py-5 bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <h4>About</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                            obcaecati dignissimos animi earum voluptas repellendus.
                        </p>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Top products</h4>
                        <ul className="list-unstyled">
                            <li><a href="single.html">Jeans</a></li>
                            <li><a href="">Bags</a></li>
                            <li><a href="">Accessories</a></li>
                            <li><a href="">Phones</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Quick links</h4>
                        <ul className="list-unstyled">
                            <li><a href="">Home</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Shop</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <a href=""
                        ><img className="img-fluid rounded" src='../img/logo.png' alt="" /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;