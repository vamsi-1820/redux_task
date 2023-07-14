import { useState,useEffect } from "react";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './navigation.css'
const Navigation=()=>
{
    let cartItems=useSelector((state)=>state.rootReducer.cart);
    const [count,setCOunt]=useState();
    useEffect(()=>{
        let num=0;
        cartItems.forEach((item) => {
            num+=parseFloat(item.qty);
           
        });
        if(num>0)
        {
            setCOunt(num);
        }
        else{
            setCOunt();
        }
    },[cartItems,count,setCOunt]);
    return(
        <Fragment>
        <div className="navigation-bar">
            <div className="BrandName">
                <Link className="connect" to={'/'}>
                    <h2>Mobiles....</h2>
                </Link>
               
            </div>
            <div className="links">
                <ul >
                    <Link to={'/cart'}>
                        <div className="lists">
                        <li><h3>Cart</h3></li>
                        <span className="CountNum">{count}</span>
                        </div>
                    </Link>
                   
                </ul>
            </div>
        </div>
        <Outlet/>
        </Fragment>
    )
}
 
export default Navigation;