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
						<li><Link to="/products">Best Selling</Link> <span>(15)</span></li>
						<li><Link to="/products">Man</Link> <span>(16)</span></li>
							<ul>
								<li><Link to="/products">Accessories</Link> <span>(2)</span></li>
								<li><Link to="/products">Coats & Jackets</Link> <span>(5)</span></li>
								<li><Link to="/products">Jeans</Link> <span>(1)</span></li>
								<li><Link to="/products">New Arrivals</Link> <span>(0)</span></li>
								<li><Link to="/products">Suits</Link> <span>(1)</span></li>
								<li><Link to="/products">Casual Shirts</Link> <span>(0)</span></li>
							</ul>
						<li><Link to="/products">Sales</Link> <span>(15)</span></li>
						<li><Link to="/products">Woman</Link> <span>(15)</span></li>
							<ul>
								<li><Link to="/products">Accessories</Link> <span>(2)</span></li>
								<li><Link to="/products">New Arrivals</Link> <span>(0)</span></li>
								<li><Link to="/products">Dresses</Link> <span>(1)</span></li>
								<li><Link to="/products">Casual Shirts</Link> <span>(0)</span></li>
								<li><Link to="/products">Shorts</Link> <span>(4)</span></li>
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
</div>
</div>
</div>
</div>

    )
  }
}

export default Products
