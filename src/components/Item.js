import React, { Component} from 'react'
import currencyFormatter from 'currency-formatter'
import {connect} from 'react-rdux'

import {addToCart} from '../actions'


var dummy = [
  {
    name: 'kaos animasi',
    price: 150000,
    image: "https://image.spreadshirtmedia.com/image-server/v1/mp/products/P1007525971MPC1012697857/views/1,width=378,height=378,appearanceId=1,backgroundColor=E8E8E8,version=1485256808/dont-be-that-guy-men-s-t-shirt.jpg"
  },
  {
    name: 'kaos jersey',
    price: 300000,
    image: "https://rumahjersey.co.id/wp-content/uploads/2014/09/Adidas-Manchester-United-Home-Jersey-17-18-393x505.jpg"
  }
]

class Item extends Component {
  constructor(props){
    super(props)
    this.state={
      cart: []
    }
  }

  addToCart(item) {
     const newCart = this.state.cart
     newCart.push(item)
     this.setState({
       cart: newCart
     })
   }


render(){
  return (
    <div className="new-products-grids">
      {dummy.map((item,index)=>
      (item.category.includes(this.props.input))
      ? <div className="new-products-grid">
        <div className="new-products-grid-left">
          <img src={item.image} alt=" " className="img-responsive" />
        </div>
        <div className="new-products-grid-right">
          <h4><a>{item.name}</a></h4>


            <div className="clearfix"> </div>
          </div>
          <div className="simpleCart_shelfItem new-products-grid-right-add-cart">
            <p> <span className="item_price">{currencyFormatter.format(item.price, { code: 'IDR' })}</span><a className="item_add" href="#" onClick={()=> this.props.addToCart(this.props.cart, item)}>add to cart </a></p>
          </div>
        </div>
        : null
        )}
        <div className="clearfix"> </div>
      </div>
    )
  }
    }

    const mapStateToProps = (state) => {
      return{
        input: state.input,
        cart: state.cart
      }
    }

    const mapDispatchToProps = (dispatch) => {
      return{
        addToCart: (cart, item) => dispatch(addToCart(cart, item))
      }
    }
export default connect(mapStateToProps,mapDispatchToProps)(Item)
