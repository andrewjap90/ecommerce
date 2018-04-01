import React, { Component } from 'react';
import { Link} from 'react-router-dom'

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state={}
  }
  render() {
    return(
      <div>
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
export default Footer