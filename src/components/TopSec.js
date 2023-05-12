import React,{useState,useEffect} from "react"
import { useLoginState } from "../contexts/loginStore"
import { redirect, useNavigate } from "react-router-dom"
import ngFlag from '../images/ng.png'


const TopSec = ({title}) => {
    const navigate = useNavigate(), loginState = useLoginState()
    const [search,setSearch] = useState('')

    let welcomeText = loginState?.firstName.length < 1 ? `Welcome back, ${loginState?.firstName}` : "Welcome to our online store!"

    const searchSite = (e) => {
      e.preventDefault()
    }

    return (
<div className="top-sec">
  <nav className="navbar navbar-static-top line-navbar-one">
    <div className="container">
      <div className="navbar-header"> 
        <button type="button" className="navbar-toggle collapsed ion-android-menu" data-toggle="collapse" data-target="#line-navbar-collapse-1"> <span className="sr-only">Toggle navigation</span>  </button>
        <a className="lno-cart" href="#"> <span className="glyphicon glyphicon-shopping-cart"></span> <span className="cart-item-quantity"></span> </a> 
        <button className="lno-btn-toggle"> <span className="fa fa-bars"></span> </button>
      </div>
      <div className="row">
	   
	  
        <div className="col-sm-4 welcome-msg wmsg hidden-xs">{welcomeText}</div>
       
        <div className="col-sm-8 collapse navbar-collapse navbar-right" id="line-navbar-collapse-1">
          <ul className="nav navbar-nav top-menu">
		   <li className="dropdown lnt-shopping-cart visible-lg visible-md"> <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"> <span className="ion-bag bag-icn"></span> <span className="cart-item-quantity badge cart-badge" id="cart-badge">{{$cc}}</span> </a>
              <ul role="menu" className="dropdown-menu" id="cart-menu">
                
                <li className="lnt-cart-actions text-center"> <a className="btn btn-default btn-lg hvr-underline-from-center-default" href="/cart">View cart</a> <a className="btn btn-primary hvr-underline-from-center-primary" href="/checkout">Checkout</a> </li>
              </ul>
            </li>
			 <li><a href="/orders">Orders</a></li>
           {loginState?.firstName?.length < 1 ? (
            <li><a className="login" href="#" data-toggle="modal" data-target="#login-box"> my account</a></li>
           ) : (
            <li><a href="/dashboard">Dashboard</a></li>
           )}
		
            <li className="dropdown"> <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">More <span className="ion-android-arrow-dropdown"></span></a>
			   
              <ul className="dropdown-menu" role="menu">
			  <li><a href="{{url('reviews')}}">Reviews</a></li>
                <li> <a href="#">NGN <span className="ion-checkmark"></span></a></li>
                <li> <a href="#"><img width="16" height="12" alt="" src={ngFlag}/> <span className="ion-checkmark"></span></a></li>
              </ul>
            </li>
			
			{loginState?.firstName?.length > 0 && (
			<li><a href="{{url('signout')}}">Sign out</a></li>
            )}
          </ul>
          <form className="navbar-form navbar-left lno-search-form visible-xs" role="search">
            <div className="form-group">
              <input type="text" className="form-control" value={search} placeholder="Search"/>
            </div>
            <button onClick={searchSite} className="btn btn-xs btn-search"><span className="fa fa-search"></span></button>
          </form>
        </div>
      </div>
    </div>
  </nav>
  <div className="line-navbar-left">
    <p className="lnl-nav-title">Categories</p>
    <ul className="lnl-nav">
     
    </ul>
  </div>
</div>
    )
}

export default TopSec