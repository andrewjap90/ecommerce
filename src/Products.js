import React, { Component} from 'react';
import {Link} from 'react-router-dom'

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
					<ul>
						<li><i className="glyphicon glyphicon-envelope" aria-hidden="true"></i><a href="mailto:info@example.com">@example.com</a></li>
						<li><i className="glyphicon glyphicon-earphone" aria-hidden="true"></i>+1234 <span>567</span> 892</li>
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
					<h1><a href="index.html">Best Store <span>Shop anywhere</span></a></h1>
				</div>
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
							<li><a href="index.html">Home</a></li>
							 <li className="dropdown active">
								<Link to="/products" className="dropdown-toggle act" data-toggle="dropdown">Products <b className="caret"></b></Link>
								<ul className="dropdown-menu multi-column columns-3">
									<div className="row">
										<div className="col-sm-4">
											<ul className="multi-column-dropdown">
												<h6>Men's Wear</h6>
												<li><a href="products.html">Clothing</a></li>
												<li><a href="products.html">Wallets</a></li>
												<li><a href="products.html">Shoes</a></li>
												<li><a href="products.html">Watches</a></li>
												<li><a href="products.html">Accessories</a></li>
											</ul>
										</div>
										<div className="col-sm-4">
											<ul className="multi-column-dropdown">
												<h6>Women's Wear</h6>
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
												<h6>Kid's Wear</h6>
												<li><a href="products.html">Kids Home Fashion</a></li>
												<li><a href="products.html">Boy's Clothing</a></li>
												<li><a href="products.html">Girl's Clothing</a></li>
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
							<li><a href="mail.html">Mail Us</a></li>
						</ul>
					</div>
					</nav>
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
		</div>
	</div>
	<div className="breadcrumbs">
		<div className="container">
			<ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
				<li><a href="index.html"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</a></li>
				<li className="active">Products</li>
			</ol>
		</div>
	</div>
	<div className="products">
		<div className="container">
			<div className="col-md-4 products-left">
				<div className="filter-price animated wow slideInUp" data-wow-delay=".5s">
					<h3>Filter By Price</h3>
					<ul className="dropdown-menu1">
							<li><a href="">
							<div id="slider-range"></div>
							</a></li>
					</ul>

				</div>
				<div className="categories animated wow slideInUp" data-wow-delay=".5s">
					<h3>Categories</h3>
					<ul className="cate">
						<li><a href="products.html">Best Selling</a> <span>(15)</span></li>
						<li><a href="products.html">Man</a> <span>(16)</span></li>
							<ul>
								<li><a href="products.html">Accessories</a> <span>(2)</span></li>
								<li><a href="products.html">Coats & Jackets</a> <span>(5)</span></li>
								<li><a href="products.html">Jeans</a> <span>(1)</span></li>
								<li><a href="products.html">New Arrivals</a> <span>(0)</span></li>
								<li><a href="products.html">Suits</a> <span>(1)</span></li>
								<li><a href="products.html">Casual Shirts</a> <span>(0)</span></li>
							</ul>
						<li><a href="products.html">Sales</a> <span>(15)</span></li>
						<li><a href="products.html">Woman</a> <span>(15)</span></li>
							<ul>
								<li><a href="products.html">Accessories</a> <span>(2)</span></li>
								<li><a href="products.html">New Arrivals</a> <span>(0)</span></li>
								<li><a href="products.html">Dresses</a> <span>(1)</span></li>
								<li><a href="products.html">Casual Shirts</a> <span>(0)</span></li>
								<li><a href="products.html">Shorts</a> <span>(4)</span></li>
							</ul>
					</ul>
				</div>
				<div className="new-products animated wow slideInUp" data-wow-delay=".5s">
					<h3>New Products</h3>
					<div className="new-products-grids">
						<div className="new-products-grid">
							<div className="new-products-grid-left">
								<a href="single.html"><img src="images/6.jpg" alt=" " className="img-responsive" /></a>
							</div>
							<div className="new-products-grid-right">
								<h4><a href="single.html">occaecat cupidatat</a></h4>
								<div className="rating">
									<div className="rating-left">
										<img src="images/2.png" alt=" " className="img-responsive"/>
									</div>
									<div className="rating-left">
										<img src="images/2.png" alt=" " className="img-responsive"/>
									</div>
									<div className="rating-left">
										<img src="images/2.png" alt=" " className="img-responsive"/>
									</div>
									<div className="rating-left">
										<img src="images/1.png" alt=" " className="img-responsive"/>
									</div>
									<div className="rating-left">
										<img src="images/1.png" alt=" " className="img-responsive"/>
									</div>
									<div className="clearfix"> </div>
								</div>
								<div className="simpleCart_shelfItem new-products-grid-right-add-cart">
									<p> <span className="item_price">$180</span><a className="item_add" href="#">add to cart </a></p>
								</div>
							</div>
							<div className="clearfix"> </div>
						</div>
						<div className="new-products-grid">
							<div className="new-products-grid-left">
								<a href="single.html"><img src="images/26.jpg" alt=" " className="img-responsive" /></a>
							</div>
							<div className="new-products-grid-right">
								<h4><a href="single.html">eum fugiat quo</a></h4>
								<div className="rating">
									<div className="rating-left">
										<img src="images/2.png" alt=" " className="img-responsive"/>
									</div>
									<div className="rating-left">
										<img src="images/2.png" alt=" " className="img-responsive"/>
									</div>
									<div className="rating-left">
										<img src="images/2.png" alt=" " className="img-responsive"/>
									</div>
									<div className="rating-left">
										<img src="images/1.png" alt=" " className="img-responsive"/>
									</div>
									<div className="rating-left">
										<img src="images/1.png" alt=" " className="img-responsive"/>
									</div>
									<div className="clearfix"> </div>
								</div>
								<div className="simpleCart_shelfItem new-products-grid-right-add-cart">
									<p> <span className="item_price">$250</span><a className="item_add" href="#">add to cart </a></p>
								</div>
							</div>
							<div className="clearfix"> </div>
						</div>
						<div className="new-products-grid">
							<div className="new-products-grid-left">
								<a href="single.html"><img src="images/11.jpg" alt=" " className="img-responsive" /></a>
							</div>
							<div className="new-products-grid-right">
								<h4><a href="single.html">officia deserunt</a></h4>
								<div className="rating">
									<div className="rating-left">
										<img src="images/2.png" alt=" " className="img-responsive"/>
									</div>
									<div className="rating-left">
										<img src="images/2.png" alt=" " className="img-responsive"/>
									</div>
									<div className="rating-left">
										<img src="images/2.png" alt=" " className="img-responsive"/>
									</div>
									<div className="rating-left">
										<img src="images/1.png" alt=" " className="img-responsive"/>
									</div>
									<div className="rating-left">
										<img src="images/1.png" alt=" " className="img-responsive"/>
									</div>
									<div className="clearfix"> </div>
								</div>
								<div className="simpleCart_shelfItem new-products-grid-right-add-cart">
									<p> <span className="item_price">$259</span><a className="item_add" href="#">add to cart </a></p>
								</div>
							</div>
							<div className="clearfix"> </div>
						</div>
					</div>
				</div>
				<div className="men-position animated wow slideInUp" data-wow-delay=".5s">
					<a href="single.html"><img src="images/27.jpg" alt=" " className="img-responsive" /></a>
					<div className="men-position-pos">
						<h4>Summer collection</h4>
						<h5><span>55%</span> Flat Discount</h5>
					</div>
				</div>
			</div>
			<div className="col-md-8 products-right">
				<div className="products-right-grid">
					<div className="products-right-grids animated wow slideInRight" data-wow-delay=".5s">
						<div className="sorting">
							<select id="country" className="frm-field required sect">
								<option value="null">Default sorting</option>
								<option value="null">Sort by popularity</option>
								<option value="null">Sort by average rating</option>
								<option value="null">Sort by price</option>
							</select>
						</div>
						<div className="sorting-left">
							<select id="country1"  className="frm-field required sect">
								<option value="null">Item on page 9</option>
								<option value="null">Item on page 18</option>
								<option value="null">Item on page 32</option>
								<option value="null">All</option>
							</select>
						</div>
						<div className="clearfix"> </div>
					</div>
					<div className="products-right-grids-position animated wow slideInRight" data-wow-delay=".5s">
						<img src="images/18.jpg" alt=" " className="img-responsive" />
						<div className="products-right-grids-position1">
							<h4>2016 New Collection</h4>
							<p>Temporibus autem quibusdam et aut officiis debitis aut rerum
								necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae
								non recusandae.</p>
						</div>
					</div>
				</div>
				<div className="products-right-grids-bottom">
					<div className="col-md-4 products-right-grids-bottom-grid">
						<div className="new-collections-grid1 products-right-grid1 animated wow slideInUp" data-wow-delay=".5s">
							<div className="new-collections-grid1-image">
								<a href="single.html" className="product-image"><img src="images/19.jpg" alt=" " className="img-responsive"/></a>
								<div className="new-collections-grid1-image-pos products-right-grids-pos">
									<a href="single.html">Quick View</a>
								</div>
								<div className="new-collections-grid1-right products-right-grids-pos-right">
									<div className="rating">
										<div className="rating-left">
											<img src="images/2.png" alt=" " className="img-responsive"/>
										</div>
										<div className="rating-left">
											<img src="images/2.png" alt=" " className="img-responsive"/>
										</div>
										<div className="rating-left">
											<img src="images/2.png" alt=" " className="img-responsive"/>
										</div>
										<div className="rating-left">
											<img src="images/1.png" alt=" " className="img-responsive"/>
										</div>
										<div className="rating-left">
											<img src="images/1.png" alt=" " className="img-responsive"/>
										</div>
										<div className="clearfix"> </div>
									</div>
								</div>
							</div>
							<h4><a href="single.html">Formal Shirt</a></h4>
							<p>Vel illum qui dolorem.</p>
							<div className="simpleCart_shelfItem products-right-grid1-add-cart">
								<p><i>$325</i> <span className="item_price">$250</span><a className="item_add" href="#">add to cart </a></p>
							</div>
						</div>
						<div className="new-collections-grid1 products-right-grid1 animated wow slideInUp" data-wow-delay=".5s">
							<div className="new-collections-grid1-image">
								<a href="single.html" className="product-image"><img src="images/21.jpg" alt=" " className="img-responsive"/></a>
								<div className="new-collections-grid1-image-pos products-right-grids-pos">
									<a href="single.html">Quick View</a>
								</div>
								<div className="new-collections-grid1-right products-right-grids-pos-right">
									<div className="rating">
										<div className="rating-left">
											<img src="images/2.png" alt=" " className="img-responsive"/>
										</div>
										<div className="rating-left">
											<img src="images/2.png" alt=" " className="img-responsive"/>
										</div>
										<div className="rating-left">
											<img src="images/2.png" alt=" " className="img-responsive"/>
										</div>
										<div className="rating-left">
											<img src="images/1.png" alt=" " className="img-responsive"/>
										</div>
										<div className="rating-left">
											<img src="images/1.png" alt=" " className="img-responsive"/>
										</div>
										<div className="clearfix"> </div>
									</div>
								</div>
							</div>
							<h4><a href="single.html">Casual Shoes</a></h4>
							<p>Vel illum qui dolorem.</p>
							<div className="simpleCart_shelfItem products-right-grid1-add-cart">
								<p><i>$325</i> <span className="item_price">$250</span><a className="item_add" href="#">add to cart </a></p>
							</div>
						</div>
						<div className="new-collections-grid1 products-right-grid1 animated wow slideInUp" data-wow-delay=".5s">
							<div className="new-collections-grid1-image">
								<a href="single.html" className="product-image"><img src="images/24.jpg" alt=" " className="img-responsive"/></a>
								<div className="new-collections-grid1-image-pos products-right-grids-pos">
									<a href="single.html">Quick View</a>
								</div>
								<div className="new-collections-grid1-right products-right-grids-pos-right">
									<div className="rating">
										<div className="rating-left">
											<img src="images/2.png" alt=" " className="img-responsive"/>
										</div>
										<div className="rating-left">
											<img src="images/2.png" alt=" " className="img-responsive"/>
										</div>
										<div className="rating-left">
											<img src="images/2.png" alt=" " className="img-responsive"/>
										</div>
										<div className="rating-left">
											<img src="images/1.png" alt=" " className="img-responsive"/>
										</div>
										<div className="rating-left">
											<img src="images/1.png" alt=" " className="img-responsive"/>
										</div>
										<div className="clearfix"> </div>
									</div>
								</div>
							</div>
							<h4><a href="single.html">Blazer</a></h4>
							<p>Vel illum qui dolorem.</p>
							<div className="simpleCart_shelfItem products-right-grid1-add-cart">
								<p><i>$585</i> <span className="item_price">$489</span><a className="item_add" href="#">add to cart </a></p>
							</div>
						</div>
					</div>
					<div className="col-md-4 products-right-grids-bottom-grid">
						<div className="new-collections-grid1 products-right-grid1 animated wow slideInUp" data-wow-delay=".5s">
							<div className="new-collections-grid1-image">
								<a href="single.html" className="product-image"><img src="images/7.jpg" alt=" " className="img-responsive"/></a>
								<div className="new-collections-grid1-image-pos products-right-grids-pos">
									<a href="single.html">Quick View</a>
								</div>
								<div className="new-collections-grid1-right products-right-grids-pos-right">
									<div className="rating">
										<div className="rating-left">
											<img src="images/2.png" alt=" " className="img-responsive"/>
										</div>
										<div className="rating-left">
											<img src="images/2.png" alt=" " className="img-responsive"/>
										</div>
										<div className="rating-left">
											<img src="images/2.png" alt=" " className="img-responsive"/>
										</div>
										<div className="rating-left">
											<img src="images/1.png" alt=" " className="img-responsive"/>
										</div>
										<div className="rating-left">
											<img src="images/1.png" alt=" " className="img-responsive"/>
										</div>
										<div className="clearfix"> </div>
									</div>
								</div>
							</div>
							<h4><a href="single.html">Formal Shirt</a></h4>
							<p>Vel illum qui dolorem.</p>
							<div className="simpleCart_shelfItem products-right-grid1-add-cart">
								<p><i>$280</i> <span className="item_price">$250</span><a className="item_add" href="#">add to cart </a></p>
							</div>
						</div>
						<div className="new-collections-grid1 products-right-grid1 animated wow slideInUp" data-wow-delay=".5s">
							<div className="new-collections-grid1-image">
								<a href="single.html" className="product-image"><img src="images/22.jpg" alt=" " className="img-responsive"/></a>
								<div className="new-collections-grid1-image-pos products-right-grids-pos">
									<a href="single.html">Quick View</a>
								</div>
								<div className="new-collections-grid1-right products-right-grids-pos-right">
									<div className="rating">
										<div className="rating-left">
											<img src="images/2.png" alt=" " className="img-responsive"/>
										</div>
										<div className="rating-left">
											<img src="images/2.png" alt=" " className="img-responsive"/>
										</div>
										<div className="rating-left">
											<img src="images/2.png" alt=" " className="img-responsive"/>
										</div>
										<div className="rating-left">
											<img src="images/1.png" alt=" " className="img-responsive"/>
										</div>
										<div className="rating-left">
											<img src="images/1.png" alt=" " className="img-responsive"/>
										</div>
										<div className="clearfix"> </div>
									</div>
								</div>
							</div>
							<h4><a href="single.html">Casual Shoes</a></h4>
							<p>Vel illum qui dolorem.</p>
							<div className="simpleCart_shelfItem products-right-grid1-add-cart">
								<p><i>$500</i> <span className="item_price">$480</span><a className="item_add" href="#">add to cart </a></p>
							</div>
						</div>
						<div className="new-collections-grid1 products-right-grid1 animated wow slideInUp" data-wow-delay=".5s">
							<div className="new-collections-grid1-image">
								<a href="single.html" className="product-image"><img src="images/25.jpg" alt=" " className="img-responsive"/></a>
								<div className="new-collections-grid1-image-pos products-right-grids-pos">
									<a href="single.html">Quick View</a>
								</div>
								<div className="new-collections-grid1-right products-right-grids-pos-right">
									<div className="rating">
										<div className="rating-left">
											<img src="images/2.png" alt=" " className="img-responsive"/>
										</div>
										<div className="rating-left">
											<img src="images/2.png" alt=" " className="img-responsive"/>
										</div>
										<div className="rating-left">
											<img src="images/2.png" alt=" " className="img-responsive"/>
										</div>
										<div className="rating-left">
											<img src="images/1.png" alt=" " className="img-responsive"/>
										</div>
										<div className="rating-left">
											<img src="images/1.png" alt=" " className="img-responsive"/>
										</div>
										<div className="clearfix"> </div>
									</div>
								</div>
							</div>
							<h4><a href="single.html">Blazer</a></h4>
							<p>Vel illum qui dolorem.</p>
							<div className="simpleCart_shelfItem products-right-grid1-add-cart">
								<p><i>$585</i> <span className="item_price">$489</span><a className="item_add" href="#">add to cart </a></p>
							</div>
						</div>
					</div>
					<div className="col-md-4 products-right-grids-bottom-grid">
						<div className="new-collections-grid1 products-right-grid1 animated wow slideInUp" data-wow-delay=".5s">
							<div className="new-collections-grid1-image">
								<a href="single.html" className="product-image"><img src="images/20.jpg" alt=" " className="img-responsive"/></a>
								<div className="new-collections-grid1-image-pos products-right-grids-pos">
									<a href="single.html">Quick View</a>
								</div>
								<div className="new-collections-grid1-right products-right-grids-pos-right">
									<div className="rating">
										<div className="rating-left">
											<img src="images/2.png" alt=" " className="img-responsive"/>
										</div>
										<div className="rating-left">
											<img src="images/2.png" alt=" " className="img-responsive"/>
										</div>
										<div className="rating-left">
											<img src="images/2.png" alt=" " className="img-responsive"/>
										</div>
										<div className="rating-left">
											<img src="images/1.png" alt=" " className="img-responsive"/>
										</div>
										<div className="rating-left">
											<img src="images/1.png" alt=" " className="img-responsive"/>
										</div>
										<div className="clearfix"> </div>
									</div>
								</div>
							</div>
							<h4><a href="single.html">Formal Shirt</a></h4>
							<p>Vel illum qui dolorem.</p>
							<div className="simpleCart_shelfItem products-right-grid1-add-cart">
								<p><i>$305</i> <span className="item_price">$280</span><a className="item_add" href="#">add to cart </a></p>
							</div>
						</div>
						<div className="new-collections-grid1 products-right-grid1 animated wow slideInUp" data-wow-delay=".5s">
							<div className="new-collections-grid1-image">
								<a href="single.html" className="product-image"><img src="images/23.jpg" alt=" " className="img-responsive"/></a>
								<div className="new-collections-grid1-image-pos products-right-grids-pos">
									<a href="single.html">Quick View</a>
								</div>
								<div className="new-collections-grid1-right products-right-grids-pos-right">
									<div className="rating">
										<div className="rating-left">
											<img src="images/2.png" alt=" " className="img-responsive"/>
										</div>
										<div className="rating-left">
											<img src="images/2.png" alt=" " className="img-responsive"/>
										</div>
										<div className="rating-left">
											<img src="images/2.png" alt=" " className="img-responsive"/>
										</div>
										<div className="rating-left">
											<img src="images/1.png" alt=" " className="img-responsive"/>
										</div>
										<div className="rating-left">
											<img src="images/1.png" alt=" " className="img-responsive"/>
										</div>
										<div className="clearfix"> </div>
									</div>
								</div>
							</div>
							<h4><a href="single.html">Casual Shoes</a></h4>
							<p>Vel illum qui dolorem.</p>
							<div className="simpleCart_shelfItem products-right-grid1-add-cart">
								<p><i>$389</i> <span className="item_price">$299</span><a className="item_add" href="#">add to cart </a></p>
							</div>
						</div>
						<div className="new-collections-grid1 products-right-grid1 animated wow slideInUp" data-wow-delay=".5s">
							<div className="new-collections-grid1-image">
								<a href="single.html" className="product-image"><img src="images/26.jpg" alt=" " className="img-responsive"/></a>
								<div className="new-collections-grid1-image-pos products-right-grids-pos">
									<a href="single.html">Quick View</a>
								</div>
								<div className="new-collections-grid1-right products-right-grids-pos-right">
									<div className="rating">
										<div className="rating-left">
											<img src="images/2.png" alt=" " className="img-responsive"/>
										</div>
										<div className="rating-left">
											<img src="images/2.png" alt=" " className="img-responsive"/>
										</div>
										<div className="rating-left">
											<img src="images/2.png" alt=" " className="img-responsive"/>
										</div>
										<div className="rating-left">
											<img src="images/1.png" alt=" " className="img-responsive"/>
										</div>
										<div className="rating-left">
											<img src="images/1.png" alt=" " className="img-responsive"/>
										</div>
										<div className="clearfix"> </div>
									</div>
								</div>
							</div>
							<h4><a href="single.html">Blazer</a></h4>
							<p>Vel illum qui dolorem.</p>
							<div className="simpleCart_shelfItem products-right-grid1-add-cart">
								<p><i>$585</i> <span className="item_price">$489</span><a className="item_add" href="#">add to cart </a></p>
							</div>
						</div>
					</div>
					<div className="clearfix"> </div>
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
			</div>
			<div className="clearfix"> </div>
		</div>
	</div>

	<div className="footer">
		<div className="container">
			<div className="footer-grids">
				<div className="col-md-3 footer-grid animated wow slideInLeft" data-wow-delay=".5s">
					<h3>About Us</h3>
					<p>Duis aute irure dolor in reprehenderit in voluptate velit esse.<span>Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit.</span></p>
				</div>
				<div className="col-md-3 footer-grid animated wow slideInLeft" data-wow-delay=".6s">
					<h3>Contact Info</h3>
					<ul>
						<li><i className="glyphicon glyphicon-map-marker" aria-hidden="true"></i>1234k Avenue, 4th block, <span>New York City.</span></li>
						<li><i className="glyphicon glyphicon-envelope" aria-hidden="true"></i><a href="mailto:info@example.com">info@example.com</a></li>
						<li><i className="glyphicon glyphicon-earphone" aria-hidden="true"></i>+1234 567 567</li>
					</ul>
				</div>
				<div className="col-md-3 footer-grid animated wow slideInLeft" data-wow-delay=".7s">
					<h3>Flickr Posts</h3>
					<div className="footer-grid-left">
						<a href="single.html"><img src="images/13.jpg" alt=" " className="img-responsive" /></a>
					</div>
					<div className="footer-grid-left">
						<a href="single.html"><img src="images/14.jpg" alt=" " className="img-responsive" /></a>
					</div>
					<div className="footer-grid-left">
						<a href="single.html"><img src="images/15.jpg" alt=" " className="img-responsive" /></a>
					</div>
					<div className="footer-grid-left">
						<a href="single.html"><img src="images/16.jpg" alt=" " className="img-responsive" /></a>
					</div>
					<div className="footer-grid-left">
						<a href="single.html"><img src="images/13.jpg" alt=" " className="img-responsive" /></a>
					</div>
					<div className="footer-grid-left">
						<a href="single.html"><img src="images/14.jpg" alt=" " className="img-responsive" /></a>
					</div>
					<div className="footer-grid-left">
						<a href="single.html"><img src="images/15.jpg" alt=" " className="img-responsive" /></a>
					</div>
					<div className="footer-grid-left">
						<a href="single.html"><img src="images/16.jpg" alt=" " className="img-responsive" /></a>
					</div>
					<div className="footer-grid-left">
						<a href="single.html"><img src="images/13.jpg" alt=" " className="img-responsive" /></a>
					</div>
					<div className="footer-grid-left">
						<a href="single.html"><img src="images/14.jpg" alt=" " className="img-responsive" /></a>
					</div>
					<div className="footer-grid-left">
						<a href="single.html"><img src="images/15.jpg" alt=" " className="img-responsive" /></a>
					</div>
					<div className="footer-grid-left">
						<a href="single.html"><img src="images/16.jpg" alt=" " className="img-responsive" /></a>
					</div>
					<div className="clearfix"> </div>
				</div>
				<div className="col-md-3 footer-grid animated wow slideInLeft" data-wow-delay=".8s">
					<h3>Blog Posts</h3>
					<div className="footer-grid-sub-grids">
						<div className="footer-grid-sub-grid-left">
							<a href="single.html"><img src="images/9.jpg" alt=" " className="img-responsive" /></a>
						</div>
						<div className="footer-grid-sub-grid-right">
							<h4><a href="single.html">culpa qui officia deserunt</a></h4>
							<p>Posted On 25/3/2016</p>
						</div>
						<div className="clearfix"> </div>
					</div>
					<div className="footer-grid-sub-grids">
						<div className="footer-grid-sub-grid-left">
							<a href="single.html"><img src="images/10.jpg" alt=" " className="img-responsive" /></a>
						</div>
						<div className="footer-grid-sub-grid-right">
							<h4><a href="single.html">Quis autem vel eum iure</a></h4>
							<p>Posted On 25/3/2016</p>
						</div>
						<div className="clearfix"> </div>
					</div>
				</div>
				<div className="clearfix"> </div>
			</div>
			<div className="footer-logo animated wow slideInUp" data-wow-delay=".5s">
				<h2><a href="index.html">Best Store <span>shop anywhere</span></a></h2>
			</div>
			<div className="copy-right animated wow slideInUp" data-wow-delay=".5s">
				<p>&copy 2016 Best Store. All rights reserved | Design by <a href="http://w3layouts.com/">W3layouts</a></p>
			</div>
		</div>
	</div>
</div>
    )
  }
}

export default Products
