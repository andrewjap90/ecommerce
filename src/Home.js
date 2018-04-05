import React, { Component } from 'react';
import {Link} from 'react-router-dom'

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
  				<div className="header-grid-left animated wow slideInLeft" data-wow-delay=".5s">
  					<ul>
  						<li><i className="glyphicon glyphicon-envelope" aria-hidden="true"></i><a href="mailto:info@example.com">@example.com</a></li>
  						<li><i className="glyphicon glyphicon-earphone" aria-hidden="true"></i>+1234 567 892</li>
  						<li><i className="glyphicon glyphicon-log-in" aria-hidden="true"></i><a href="login.html">Login</a></li>
  						<li><i className="glyphicon glyphicon-book" aria-hidden="true"></i><a href="register.html">Register</a></li>
  					</ul>
  				</div>
  				<div className="header-grid-right animated wow slideInRight" data-wow-delay=".5s">
  					<ul className="social-icons">
  						<li><a href="#" className="facebook"></a></li>
  						<li><a href="#" className="twitter"></a></li>
  						<li><a href="#" className="g"></a></li>
  						<li><a href="#" className="instagram"></a></li>
  					</ul>
  				</div>
  				<div className="clearfix"> </div>
  			</div>
  			<div className="logo-nav">
  				<div className="logo-nav-left animated wow zoomIn" data-wow-delay=".5s">
  					<h1><Link to= "/">Best Store <span>Shop Free</span></Link></h1>
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
  	<div className="banner">
  		<div className="container">
  			<div className="banner-info animated wow zoomIn" data-wow-delay=".5s">
  				<h3>Free Online Shopping</h3>
  				<h4>Up to <span>50% <i>Off/-</i></span></h4>
  				<div className="wmuSlider example1">
  					<div className="wmuSliderWrapper">
  						<article>
  							<div className="banner-wrap">
  								<div className="banner-info1">
  									<p>T-Shirts + Formal Pants + Jewellery + Cosmetics</p>
  								</div>
  							</div>
  						</article>
  						<article >
  							<div className="banner-wrap">
  								<div className="banner-info1">
  									<p>Toys + Furniture + Lighting + Watches</p>
  								</div>
  							</div>
  						</article>
  						<article >
  							<div className="banner-wrap">
  								<div className="banner-info1">
  									<p>Tops + Books & Media + Sports</p>
  								</div>
  							</div>
  						</article>
  					</div>
  				</div>
  			</div>
  		</div>
  	</div>
  	<div className="banner-bottom">
  		<div className="container">
  			<div className="banner-bottom-grids">
  				<div className="banner-bottom-grid-left animated wow slideInLeft" data-wow-delay=".5s">
  					<div className="grid">
  						<figure className="effect-julia">
  							<img src="images/4.jpg" alt=" " className="img-responsive" />
  							<figcaption>
  								<h3>Best <span>Store</span><i> in online shopping</i></h3>
  								<div>
  									<p>Cupidatat non proident, sunt</p>
  									<p>Officia deserunt mollit anim</p>
  									<p>Laboris nisi ut aliquip consequat</p>
  								</div>
  							</figcaption>
  						</figure>
  					</div>
  				</div>
  				<div className="banner-bottom-grid-left1 animated wow slideInUp" data-wow-delay=".5s">
  					<div className="banner-bottom-grid-left-grid left1-grid grid-left-grid1">
  						<div className="banner-bottom-grid-left-grid1">
  							<img src="images/1.jpg" alt=" " className="img-responsive" />
  						</div>
  						<div className="banner-bottom-grid-left1-pos">
  							<p>Discount 45%</p>
  						</div>
  					</div>
  					<div className="banner-bottom-grid-left-grid left1-grid grid-left-grid1">
  						<div className="banner-bottom-grid-left-grid1">
  							<img src="images/2.jpg" alt=" " className="img-responsive" />
  						</div>
  						<div className="banner-bottom-grid-left1-position">
  							<div className="banner-bottom-grid-left1-pos1">
  								<p>Latest New Collections</p>
  							</div>
  						</div>
  					</div>
  				</div>
  				<div className="banner-bottom-grid-right animated wow slideInRight" data-wow-delay=".5s">
  					<div className="banner-bottom-grid-left-grid grid-left-grid1">
  						<div className="banner-bottom-grid-left-grid1">
  							<img src="images/3.jpg" alt=" " className="img-responsive" />
  						</div>
  						<div className="grid-left-grid1-pos">
  							<p>top and classNameic designs <span>2016 Collection</span></p>
  						</div>
  					</div>
  				</div>
  				<div className="clearfix"> </div>
  			</div>
  		</div>
  	</div>
  	<div className="new-collections">
  		<div className="container">
  			<h3 className="animated wow zoomIn" data-wow-delay=".5s">New Collections</h3>
  			<p className="est animated wow zoomIn" data-wow-delay=".5s">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
  				deserunt mollit anim id est laborum.</p>
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
  	<div className="timer">
  		<div className="container">
  			<div className="timer-grids">
  				<div className="col-md-8 timer-grid-left animated wow slideInLeft" data-wow-delay=".5s">
  					<h3><a href="products.html">sunt in culpa qui officia deserunt mollit</a></h3>
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
  					<div className="new-collections-grid1-left simpleCart_shelfItem timer-grid-left-price">
  						<p><i>$580</i> <span className="item_price">$550</span></p>
  						<h4>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
  							nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
  							qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui
  							dolorem eum fugiat quo voluptas nulla pariatur.</h4>
  						<p><a className="item_add timer_add" href="#">add to cart </a></p>
  					</div>
  					<div id="counter"> </div>
  				</div>
  				<div className="col-md-4 timer-grid-right animated wow slideInRight" data-wow-delay=".5s">
  					<div className="timer-grid-right1">
  						<img src="images/17.jpg" alt=" " className="img-responsive" />
  						<div className="timer-grid-right-pos">
  							<h4>Special Offer</h4>
  						</div>
  					</div>
  				</div>
  				<div className="clearfix"> </div>
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
  )
}
}
export default Home
