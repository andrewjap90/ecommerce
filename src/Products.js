import React, { Component} from 'react';
import {Link} from 'react-router-dom';

import Item from './components/Item'
import Cart from './components/cart'


class Products extends Component {
  constructor(props){
    super(props)
    this.state={}
  }


render() {
  return (
    <div>
    <div className="header">
		<div className="container">
			<div className="header-grid">
				<div className="header-grid-left animated wow slideInLeft" data-wow-delay=".5s">

				</div>
				<div className="header-grid-right animated wow slideInRight" data-wow-delay=".5s">

				</div>
				<div className="clearfix"> </div>
			</div>
			<div className="logo-nav">
				<div className="logo-nav-left animated wow zoomIn" data-wow-delay=".5s">
					<h1><Link to="/">Best Store <span>Shop anywhere</span></Link></h1>
				</div>


				<div className="logo-nav-right">
					<div className="search-box">
						<div id="sb-search" className="sb-search">
							<form>
								<input className="sb-search-input" placeholder="Enter your search term..." type="search" id="search"/>
								<input className="sb-search-submit" type="submit" value=""/>
								<span className="sb-icon-search"> </span>
							</form>
						</div>
					</div>
				</div>
				<div className="header-right">
					<div className="cart box_1">
						<a href="checkout.html">
							<h3> <div className="total">
								<span className="simpleCart_total"></span> (<span id="simpleCart_quantity" className="simpleCart_quantity"></span> items)</div>
								<img src="images/bag.png" alt="" />
							</h3>
						</a>
						<p><a href="javascript:;" className="simpleCart_empty">Empty Cart</a></p>
						<div className="clearfix"> </div>
					</div>
				</div>
				<div className="clearfix"> </div>
			</div>
      <div>
	    <div className="breadcrumbs">
		  <div className="container">
			<ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
				<li><Link to="/"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</Link></li>
				<li className="active">Products</li>
			</ol>
		</div>
	</div>
  <div className="new-collections">
    <div className="container">
      <h3 className="animated wow zoomIn" data-wow-delay=".5s">New Collections</h3>
      <div className="new-collections-grids">
        <div className="col-md-3 new-collections-grid">
          <div className="new-collections-grid1 animated wow slideInUp" data-wow-delay=".5s">
            <div className="new-collections-grid1-image">
              <a href="single.html" className="product-image"><img src="images/7.jpg" alt=" " className="img-responsive" /></a>
              <div className="new-collections-grid1-image-pos">
                <a href="single.html">Quick View</a>
              </div>
              <div className="new-collections-grid1-right">
                <div className="rating">
                  <div className="rating-left">
                    <img src="images/2.png" alt=" " className="img-responsive" />
                  </div>
                  <div className="rating-left">
                    <img src="images/2.png" alt=" " className="img-responsive" />
                  </div>
                  <div className="rating-left">
                    <img src="images/2.png" alt=" " className="img-responsive" />
                  </div>
                  <div className="rating-left">
                    <img src="images/1.png" alt=" " className="img-responsive" />
                  </div>
                  <div className="rating-left">
                    <img src="images/1.png" alt=" " className="img-responsive" />
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>
            </div>
            <h4><a href="single.html">Formal Shirt</a></h4>
            <p>Vel illum qui dolorem eum fugiat.</p>
            <div className="new-collections-grid1-left simpleCart_shelfItem">
              <p><i>$325</i> <span className="item_price">$250</span><a className="item_add" href="#">add to cart </a></p>
            </div>
          </div>
          <div className="new-collections-grid1 animated wow slideInUp" data-wow-delay=".5s">
            <div className="new-collections-grid1-image">
              <a href="single.html" className="product-image"><img src="images/8.jpg" alt=" " className="img-responsive" /></a>
              <div className="new-collections-grid1-image-pos">
                <a href="single.html">Quick View</a>
              </div>
              <div className="new-collections-grid1-right">
                <div className="rating">
                  <div className="rating-left">
                    <img src="images/2.png" alt=" " className="img-responsive" />
                  </div>
                  <div className="rating-left">
                    <img src="images/2.png" alt=" " className="img-responsive" />
                  </div>
                  <div className="rating-left">
                    <img src="images/1.png" alt=" " className="img-responsive" />
                  </div>
                  <div className="rating-left">
                    <img src="images/1.png" alt=" " className="img-responsive" />
                  </div>
                  <div className="rating-left">
                    <img src="images/1.png" alt=" " className="img-responsive" />
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>
            </div>
            <h4><a href="single.html">Running Shoes</a></h4>
            <p>Vel illum qui dolorem eum fugiat.</p>
            <div className="new-collections-grid1-left simpleCart_shelfItem">
              <p><i>$280</i> <span className="item_price">$150</span><a className="item_add" href="#">add to cart </a></p>
            </div>
          </div>
        </div>
        <div className="col-md-6 new-collections-grid">
          <div className="new-collections-grid1 new-collections-grid1-image-width animated wow slideInUp" data-wow-delay=".5s">
            <div className="new-collections-grid1-image">
              <a href="single.html" className="product-image"><img src="images/5.jpg" alt=" " className="img-responsive" /></a>
              <div className="new-collections-grid1-image-pos new-collections-grid1-image-pos1">
                <a href="single.html">Quick View</a>
              </div>
              <div className="new-collections-grid1-right new-collections-grid1-right-rate">
                <div className="rating">
                  <div className="rating-left">
                    <img src="images/2.png" alt=" " className="img-responsive" />
                  </div>
                  <div className="rating-left">
                    <img src="images/2.png" alt=" " className="img-responsive" />
                  </div>
                  <div className="rating-left">
                    <img src="images/2.png" alt=" " className="img-responsive" />
                  </div>
                  <div className="rating-left">
                    <img src="images/2.png" alt=" " className="img-responsive" />
                  </div>
                  <div className="rating-left">
                    <img src="images/1.png" alt=" " className="img-responsive" />
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>
              <div className="new-one">
                <p>New</p>
              </div>
            </div>
            <h4><a href="single.html">Dining Table</a></h4>
            <p>Vel illum qui dolorem eum fugiat.</p>
            <div className="new-collections-grid1-left simpleCart_shelfItem">
              <p><i>$580</i> <span className="item_price">$550</span><a className="item_add" href="#">add to cart </a></p>
            </div>
          </div>
          <div className="new-collections-grid-sub-grids">
            <div className="new-collections-grid1-sub">
              <div className="new-collections-grid1 animated wow slideInUp" data-wow-delay=".5s">
                <div className="new-collections-grid1-image">
                  <a href="single.html" className="product-image"><img src="images/6.jpg" alt=" " className="img-responsive" /></a>
                  <div className="new-collections-grid1-image-pos">
                    <a href="single.html">Quick View</a>
                  </div>
                  <div className="new-collections-grid1-right">
                    <div className="rating">
                      <div className="rating-left">
                        <img src="images/2.png" alt=" " className="img-responsive" />
                      </div>
                      <div className="rating-left">
                        <img src="images/2.png" alt=" " className="img-responsive" />
                      </div>
                      <div className="rating-left">
                        <img src="images/2.png" alt=" " className="img-responsive" />
                      </div>
                      <div className="rating-left">
                        <img src="images/2.png" alt=" " className="img-responsive" />
                      </div>
                      <div className="rating-left">
                        <img src="images/2.png" alt=" " className="img-responsive" />
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                  </div>
                </div>
                <h4><a href="single.html">Wall Lamp</a></h4>
                <p>Vel illum qui dolorem eum fugiat.</p>
                <div className="new-collections-grid1-left simpleCart_shelfItem">
                  <p><i>$480</i> <span className="item_price">$400</span><a className="item_add" href="#">add to cart </a></p>
                </div>
              </div>
            </div>
            <div className="new-collections-grid1-sub">
              <div className="new-collections-grid1 animated wow slideInUp" data-wow-delay=".5s">
                <div className="new-collections-grid1-image">
                  <a href="single.html" className="product-image"><img src="images/9.jpg" alt=" " className="img-responsive" /></a>
                  <div className="new-collections-grid1-image-pos">
                    <a href="single.html">Quick View</a>
                  </div>
                  <div className="new-collections-grid1-right">
                    <div className="rating">
                      <div className="rating-left">
                        <img src="images/2.png" alt=" " className="img-responsive" />
                      </div>
                      <div className="rating-left">
                        <img src="images/1.png" alt=" " className="img-responsive" />
                      </div>
                      <div className="rating-left">
                        <img src="images/1.png" alt=" " className="img-responsive" />
                      </div>
                      <div className="rating-left">
                        <img src="images/1.png" alt=" " className="img-responsive" />
                      </div>
                      <div className="rating-left">
                        <img src="images/1.png" alt=" " className="img-responsive" />
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                  </div>
                </div>
                <h4><a href="single.html">Wall Lamp</a></h4>
                <p>Vel illum qui dolorem eum fugiat.</p>
                <div className="new-collections-grid1-left simpleCart_shelfItem">
                  <p><i>$280</i> <span className="item_price">$150</span><a className="item_add" href="#">add to cart </a></p>
                </div>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
        <div className="col-md-3 new-collections-grid">
          <div className="new-collections-grid1 animated wow slideInUp" data-wow-delay=".5s">
            <div className="new-collections-grid1-image">
              <a href="single.html" className="product-image"><img src="images/10.jpg" alt=" " className="img-responsive" /></a>
              <div className="new-collections-grid1-image-pos">
                <a href="single.html">Quick View</a>
              </div>
              <div className="new-collections-grid1-right">
                <div className="rating">
                  <div className="rating-left">
                    <img src="images/2.png" alt=" " className="img-responsive" />
                  </div>
                  <div className="rating-left">
                    <img src="images/2.png" alt=" " className="img-responsive" />
                  </div>
                  <div className="rating-left">
                    <img src="images/2.png" alt=" " className="img-responsive" />
                  </div>
                  <div className="rating-left">
                    <img src="images/1.png" alt=" " className="img-responsive" />
                  </div>
                  <div className="rating-left">
                    <img src="images/1.png" alt=" " className="img-responsive" />
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>
            </div>
            <h4><a href="single.html">Pearl & Stone Anklet</a></h4>
            <p>Vel illum qui dolorem eum fugiat.</p>
            <div className="new-collections-grid1-left simpleCart_shelfItem">
              <p><i>$180</i> <span className="item_price">$120</span><a className="item_add" href="#">add to cart </a></p>
            </div>
          </div>
          <div className="new-collections-grid1 animated wow slideInUp" data-wow-delay=".5s">
            <div className="new-collections-grid1-image">
              <a href="single.html" className="product-image"><img src="images/11.jpg" alt=" " className="img-responsive" /></a>
              <div className="new-collections-grid1-image-pos">
                <a href="single.html">Quick View</a>
              </div>
              <div className="new-collections-grid1-right">
                <div className="rating">
                  <div className="rating-left">
                    <img src="images/2.png" alt=" " className="img-responsive" />
                  </div>
                  <div className="rating-left">
                    <img src="images/2.png" alt=" " className="img-responsive" />
                  </div>
                  <div className="rating-left">
                    <img src="images/2.png" alt=" " className="img-responsive" />
                  </div>
                  <div className="rating-left">
                    <img src="images/2.png" alt=" " className="img-responsive" />
                  </div>
                  <div className="rating-left">
                    <img src="images/1.png" alt=" " className="img-responsive" />
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>
            </div>
            <h4><a href="single.html">Stones Bangles</a></h4>
            <p>Vel illum qui dolorem eum fugiat.</p>
            <div className="new-collections-grid1-left simpleCart_shelfItem">
              <p><i>$340</i> <span className="item_price">$257</span><a className="item_add" href="#">add to cart </a></p>
            </div>
          </div>
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
  </div>


				<nav className="numbering animated wow slideInRight" data-wow-delay=".5s">
				  <ul className="pagination paging">
					<li>
					  <a href="#" aria-label="Previous">
						<span aria-hidden="true">&laquo;</span>
					  </a>
					</li>
					<li className="active"><a href="#">1<span className="sr-only">(current)</span></a></li>
					<li><a href="#">2</a></li>
					<li><a href="#">3</a></li>
					<li><a href="#">4</a></li>
					<li><a href="#">5</a></li>
					<li>
					  <a href="#" aria-label="Next">
						<span aria-hidden="true">&raquo;</span>
					  </a>
					</li>
				  </ul>
				</nav>
			<div className="clearfix"></div>
    </div>
  </div>
</div>
</div>

    )
  }
}

export default Products
