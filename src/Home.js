import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Item from './components/Item'

class Home extends Component {
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
  				<div className="header-grid-right animated wow slideInRight" data-wow-delay=".5s">
  					<ul className="social-icons">
  						<li><a href="#" className="facebook"></a></li>
  						<li><a href="#" className="twitter"></a></li>
  						<li><a href="#" className="g"></a></li>
  						<li><a href="#" className="instagram"></a></li>
  					</ul>
  				</div>
  				<div className="clearfix"></div>
  			</div>
  			<div className="logo-nav">
  				<div className="logo-nav-left animated wow zoomIn" data-wow-delay=".5s">
  					<h1><Link to= "/">Best Store <span> Freedom Shop </span></Link></h1>
  				</div>


  				<div className="logo-nav-right">
  					<div className="search-box">
  						<div id="sb-search" className="sb-search">
  							<form>
  								<input className="sb-search-input" placeholder="Enter your search term..." type="search" id="search"/>
  								<input className="sb-search-submit" type="submit" defaultValue=""/>
  								<span className="sb-icon-search"> </span>
  							</form>
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
  		</div>
  	</div>
  	<div className="new-collections">
  		<div className="container">
  			<h3 className="animated wow zoomIn" data-wow-delay=".5s">New Collections</h3>
  			<div className="new-collections-grids">
  				<div className="col-md-3 new-collections-grid">
  					<div className="new-collections-grid1 animated wow slideInUp" data-wow-delay=".5s">
  						<div className="new-collections-grid1-image">
  							<a href="single.html" className="product-image"><img src="https://image.spreadshirtmedia.com/image-server/v1/mp/products/P1007525971MPC1012697857/views/1,width=378,height=378,appearanceId=1,backgroundColor=E8E8E8,version=1485256808/dont-be-that-guy-men-s-t-shirt.jpg" alt=" " className="img-responsive" /></a>
                <div className="new-collections-grid1-image-pos">
                  <a href="single.html">Quick View</a>
  						</div>
  						<h4><a href="single.html">Formal Shirt</a></h4>
  						<p>Vel illum qui dolorem eum fugiat.</p>
  						<div className="new-collections-grid1-left simpleCart_shelfItem">
  							<p><i>$325</i> <span className="item_price">$250</span><a className="item_add" href="#">add to cart </a></p>
  						</div>
  					</div>
  					<div className="new-collections-grid1 animated wow slideInUp" data-wow-delay=".5s">
  						<div className="new-collections-grid1-image">
  							<a href="single.html" className="product-image"><img src="https://rumahjersey.co.id/wp-content/uploads/2014/09/Adidas-Manchester-United-Home-Jersey-17-18-393x505.jpg" alt=" " className="img-responsive" /></a>
  							<div className="new-collections-grid1-image-pos">
  								<a href="single.html">Quick View</a>
  							</div>
  							<div className="new-collections-grid1-right">

  							</div>
  						</div>
  						<h4><a href="single.html">Running Shoes</a></h4>
  						<p>Vel illum qui dolorem eum fugiat.</p>
  						<div className="new-collections-grid1-left simpleCart_shelfItem">
  							<p><i>$280</i> <span className="item_price">$150</span><a className="item_add" href="#">add to cart </a></p>
  						</div>
  					</div>
  				</div>



  	<div className="collections-bottom">
  		<div className="container">
  			<div className="collections-bottom-grids">
  				<div className="collections-bottom-grid animated wow slideInLeft" data-wow-delay=".5s">
  					<h3>45% Offer For <span>Women & Childrens</span></h3>
  				</div>
  			</div>
  			<div className="newsletter animated wow slideInUp" data-wow-delay=".5s">
  				<h3>Newsletter</h3>
  				<p>Join us now to get all news and special offers.</p>
  				<form>
  					<span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>
  					<input type="email" defaultValue="Enter your email address" required=""/>
  					<input type="submit" defaultValue="Join Us" />
  				</form>
  			</div>
  		</div>
  	</div>
      </div>
      </div>
      </div>
      </div>
    </div>
  </div>
</div>
  )
}
}
export default Home
