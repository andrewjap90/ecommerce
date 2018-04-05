import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state={}
  }
  render(){
    return(
      <div>
        <div className="logo-nav-left1">
          <nav className="navbar navbar-default">
          <div className="navbar-header nav_2">
            <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
        <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li className="dropdown active">
            <Link to="/products" className="dropdown-toggle act" data-toggle="dropdown">Products <b className="caret"></b></Link>
              <ul className="dropdown-menu multi-column columns-3">
                <div className="row">
                  <div className="col-sm-4">
                    <ul className="multi-column-dropdown">
                      <h6>Mens Wear</h6>
                      <li><a href="products.html">Clothing</a></li>
                      <li><a href="products.html">Wallets</a></li>
                      <li><a href="products.html">Shoes</a></li>
                      <li><a href="products.html">Watches</a></li>
                      <li><a href="products.html">Accessories</a></li>
                    </ul>
                  </div>
                  <div className="col-sm-4">
                    <ul className="multi-column-dropdown">
                      <h6>Womens Wear</h6>
                      <li><a href="products.html">Clothing</a></li>
                      <li><a href="products.html">Wallets,Bags</a></li>
                      <li><a href="products.html">Footwear</a></li>
                      <li><a href="products.html">Watches</a></li>
                      <li><a href="products.html">Accessories</a></li>
                      <li><a href="products.html">Jewellery</a></li>
                      <li><a href="products.html">Beauty & Grooming</a></li>
                    </ul>
                  </div>
                  <div className="col-sm-4">
                    <ul className="multi-column-dropdown">
                      <h6>Kids Wear</h6>
                      <li><a href="products.html">Kids Home Fashion</a></li>
                      <li><a href="products.html">Boys Clothing</a></li>
                      <li><a href="products.html">Girls Clothing</a></li>
                      <li><a href="products.html">Shoes</a></li>
                      <li><a href="products.html">Brand Stores</a></li>
                    </ul>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">Furniture <b className="caret"></b></a>
              <ul className="dropdown-menu multi-column columns-3">
                <div className="row">
                  <div className="col-sm-4">
                    <ul className="multi-column-dropdown">
                      <h6>Home Collection</h6>
                      <li><a href="furniture.html">Cookware</a></li>
                      <li><a href="furniture.html">Sofas</a></li>
                      <li><a href="furniture.html">Dining Tables</a></li>
                      <li><a href="furniture.html">Shoe Racks</a></li>
                      <li><a href="furniture.html">Home Decor</a></li>
                    </ul>
                  </div>
                  <div className="col-sm-4">
                    <ul className="multi-column-dropdown">
                      <h6>Office Collection</h6>
                      <li><a href="furniture.html">Carpets</a></li>
                      <li><a href="furniture.html">Tables</a></li>
                      <li><a href="furniture.html">Sofas</a></li>
                      <li><a href="furniture.html">Shoe Racks</a></li>
                      <li><a href="furniture.html">Sockets</a></li>
                      <li><a href="furniture.html">Electrical Machines</a></li>
                    </ul>
                  </div>
                  <div className="col-sm-4">
                    <ul className="multi-column-dropdown">
                      <h6>Decorations</h6>
                      <li><a href="furniture.html">Toys</a></li>
                      <li><a href="furniture.html">Wall Clock</a></li>
                      <li><a href="furniture.html">Lighting</a></li>
                      <li><a href="furniture.html">Top Brands</a></li>
                    </ul>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </ul>
            </li>
            <li><a href="short-codes.html">Short Codes</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>
        </nav>
        </div>
      </div>
    )
  }
}
export default Navbar
