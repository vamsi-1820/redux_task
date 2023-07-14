import React from "react";
import { useSelector } from "react-redux";
import { useState,useEffect } from "react";
import CartItem from "./cartItem";
import { useNavigate } from "react-router-dom";
import "./cart.css"

const Cart=()=>{
    let cartItems=useSelector((state)=>state.rootReducer.cart);
    let navigate=useNavigate();
    const [totalPrice,setTotalPrice]=useState(0);
    const [count,setCOunt]=useState(0);
    useEffect(()=>{
        let price=0;
        let num=0;
        cartItems.forEach((item) => {
            price+=parseFloat(item.qty)*parseFloat(item.item.Price);
            num+=item.qty;
        });
        setTotalPrice(price);
        setCOunt(num);
    },[cartItems,totalPrice,setTotalPrice,count,setCOunt]);
    const placingorder=()=>{
        if(count>0)
        {
            let path='/oderplaced';
            navigate(path);
        }
        else{
            alert("Cart is Empty");
        }
    }
    return(
        <div className="cart">
            <div className="cartItems">
                    {
                       cartItems.map((item)=>{
                        return <CartItem key={item.item.id} item={item}/>
                    })
                    }
            </div>
            <div className="final">
                <div className="insidefinal">
                <h3>Total <span className="itemcnt">({count} items)</span> : ₹{totalPrice.toFixed(2)}/-</h3>
                <div className="placeodr">
                    <button onClick={placingorder}> Place Order</button>
                </div>
                </div>
            </div>
        </div>
    )
}   
   
export default Cart;


/*
     const mapStateToProps = (state) =>({
    cart:state.shop.cart,
})

    const navigate=useNavigate();
    let [quantity,setquantity]=useState(1);
    let total=0;
    const add=()=>{
        quantity++;
        setquantity(quantity);
        console.log(quantity);
    }
    const minus=()=>{
        if(quantity>1)
        {
            quantity--;
            setquantity(quantity);
            console.log(quantity);
        }
    }
    const makesuccess=()=>{
            const path="/oderplaced";
            navigate(path);
    }
    return(
        <div>
            {cartproducts.map((product)=>
            {
                total+=product.Price*quantity;
                console.log('total',total);
                return(
                    <div className="fulbox" key={product.id}>
                        <div className="half11">
                            <img src={product.imageUrl} alt={product.Name}/>
                        </div>
                        <div className="half21">
                            
                            <div>
                                <h3>{product.Name}</h3>
                                <h4>MRP:-{parseFloat(product.Price)*parseFloat(quantity)}.00</h4>
                                <div  >
                                <button onClick={minus} className="one">-</button>
                                <button className='two'>{quantity}</button>
                                <button onClick={add} className="one" >+</button>
                                
                                </div>
                                <button className='delete' onClick={product}>Delete</button>
                            </div>
                            <div>
                               
                            </div>
                        </div>
                    </div>
                )
            }
            
            )} 
            <div className='final'>
                <div className='insidefinal'>
                <label>Total Price: {total}.00/</label>
                </div>
            <button onClick={makesuccess}>PLACE ORDER</button>
            </div>
        </div>
    )
}*/


/*import'./cart.css';
import Products from "../../data";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart=()=>{
    const navigate=useNavigate();
    let [quantity,setquantity]=useState(1);
    let total=0;
    const add=()=>{
        quantity++;
        setquantity(quantity);
        console.log(quantity);
    }
    const minus=()=>{
        if(quantity>1)
        {
            quantity--;
            setquantity(quantity);
            console.log(quantity);
        }
    }
    const makesuccess=()=>{
            const path="/oderplaced";
            navigate(path);
    }
    return(
        <div>
            {Products.map((product)=>
            {
                total+=product.Price*quantity;
                console.log('total',total);
                return(
                    <div className="fulbox" key={product.id}>
                        <div className="half11">
                            <img src={product.imageUrl} alt={product.Name}/>
                        </div>
                        <div className="half21">
                            
                            <div>
                                <h3>{product.Name}</h3>
                                <h4>MRP:-{parseFloat(product.Price)*parseFloat(quantity)}.00</h4>
                                <div  >
                                <button onClick={minus} className="one">-</button>
                                <button className='two'>{quantity}</button>
                                <button onClick={add} className="one" >+</button>
                                
                                </div>
                                <button className='delete'>Delete</button>
                            </div>
                            <div>
                               
                            </div>
                        </div>
                    </div>
                )
            }
            
            )} 
            <div className='final'>
                <div className='insidefinal'>
                <label>Total Price: {total}.00/</label>
                </div>
            <button onClick={makesuccess}>PLACE ORDER</button>
            </div>
        </div>
    )
}

export default Cart;*/